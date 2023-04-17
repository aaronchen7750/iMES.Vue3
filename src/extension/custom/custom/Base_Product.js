/*****************************************************************************************
**  Author:COCO 2022
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: '',
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
    //下面这些方法可以保留也可以删除
    onInit() {  //框架初始化配置前，
      //示例：在按钮的最前面添加一个按钮
      //   this.buttons.unshift({  //也可以用push或者splice方法来修改buttons数组
      //     name: '按钮', //按钮名称
      //     icon: 'el-icon-document', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
      //     type: 'primary', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
      //     onClick: function () {
      //       this.$Message.success('点击了按钮');
      //     }
      //   });

      //示例：设置修改新建、编辑弹出框字段标签的长度
      // this.boxOptions.labelWidth = 150;
      //显示序号(默认隐藏)
      this.columnIndex = true;
      //在表单配置的第二行后，将MyComponent组件添加到表单中
      this.editFormOptions.splice(this.editFormOptions.length, 0, [{
        colSize: 12,
        render: (h) => {
          let elem = <div style="padding-left:15px;margin-left:7px;height:35px;background-image: linear-gradient( 135deg ,#0cd7bd 10%,#50c3f7);">
            <div style="color:#ffffff;font-weight: bold; font-size: 14px;">扩展字段</div>
          </div>;
          return (elem)

        }
      }])
      //增加扩展字段 start
      this.http.get("/api/Sys_Table_Extend/getTableExtendField?tableName=" + "Base_Product", {}, true).then((result) => {
        let editFormObj = [];
        result.map(((item, index) => {
          let fieldName = item.fieldName;
          let fieldCode = item.fieldCode;
          let tableEx_Id = item.tableEx_Id;
          let fieldType = item.fieldType;
          let dataDic = item.dataDic;
          let data = [];
          let isRequired = item.fieldAttr == null ? false : item.fieldAttr.includes("required");
          let isReadyonly = item.fieldAttr == null ? false : item.fieldAttr.includes("readonly");
          this.editFormFields[fieldCode] = "";
          if (fieldType == "select" || fieldType == "switch" || fieldType == "checkbox" || fieldType == "selectList") {
            editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
              dataKey: dataDic,
              data: [],
              title: fieldName,
              required: isRequired,
              readonly: isReadyonly,
              field: fieldCode,
              type: fieldType
            })
            this.columns.push({
              field: fieldCode,
              title: fieldName,
              type: 'string',
              bind: { key: dataDic, data: [] },
              width: 150,
              require: isRequired,
              readonly: isReadyonly,
              align: 'left'
            })
          }
          else if (fieldType == "img") {
            editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
              title: fieldName,
              required: isRequired,
              field: fieldCode,
              readonly: isReadyonly,
              type: fieldType
            });
            this.columns.push({
              field: fieldCode,
              title: fieldName,
              type: fieldType,
              readonly: isReadyonly,
              width: 150,
              require: isRequired,
              align: 'left'
            })
          }
          else if (fieldType == "textarea" || fieldType == "text" || fieldType == "number" || fieldType == "decimal" || fieldType == "phone") {
            editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
              title: fieldName,
              required: isRequired,
              field: fieldCode,
              readonly: isReadyonly,
              type: fieldType
            });
            this.columns.push({
              field: fieldCode,
              title: fieldName,
              type: "string",
              width: 150,
              require: isRequired,
              readonly: isReadyonly,
              align: 'left'
            })
          }
          else if (fieldType == "date" || fieldType == "datetime") {
            editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
              title: fieldName,
              required: isRequired,
              readonly: isReadyonly,
              field: fieldCode,
              type: fieldType
            });
            this.columns.push({
              field: fieldCode,
              title: fieldName,
              type: fieldType,
              width: 150,
              require: isRequired,
              readonly: isReadyonly,
              align: 'left'
            })
          }
          else {
            editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
              title: fieldName,
              required: isRequired,
              readonly: isReadyonly,
              field: fieldCode,
              type: "text"
            });
            this.columns.push({
              field: fieldCode,
              title: fieldName,
              type: "string",
              width: 150,
              require: isRequired,
              readonly: isReadyonly,
              align: 'left'
            })
          }
          if ((index + 1) % 2 == 0 || (index + 1) == result.length) {
            this.editFormOptions.push(editFormObj);
            editFormObj = [];
          }
        }))
        //刷新字典数据源
        this.initDicKeys();
      });
      //增加扩展字段 end
      this.boxOptions.height = 490;
      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == 'InventoryQty') {
            item.readonly = true;
          }
        })
      })
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
    },
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      var that = this;
      that.http.ajax({
        url: "api/Base_Product_ExtendData/getExtendDataByProductID",
        json: true,
        success: function (data) {
          if (data.length > 0) {
            result.forEach(function (ele, index) {
              var dataDefect = data.filter(item => item.Product_Id == ele.Product_Id);
              dataDefect.forEach(function (dataEle, dataIndex) {
                result[index][dataEle.FieldCode] = dataEle.FieldValue
              })
            })
          }
        },
        type: "get",
        async: false,
      });
      return true;
    },
    addBefore(formData) {
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      formData.mainData.InventoryQty = 0;
      this.setFormData(formData);
      return true;
    },
    updateBefore(formData) {
      this.setFormData(formData);
      //编辑保存前formData为对象，包括明细表、删除行的Id
      return true;
    },
    setFormData(formData) { //新建或编辑时，将从表1、2的数据提交到后台,见后台App_ReportPriceService的新建方法
      //后台从对象里直接取extra的值
      formData.extra = JSON.stringify(formData.mainData);
    },
    addAfter(result) {
      this.refresh();
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      // this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      this.editFormOptions.forEach(item => {
        item.forEach(x => {
          //如果是编辑设置为只读
          if (x.field == "ProductCode") {
            x.placeholder = "请输入，忽略将自动生成";
          }
        })
      })
      this.http.get("/api/Sys_Table_Extend/getTableExtendField?tableName=" + "Base_Product", {}, true).then((result) => {
        let editFormObj = [];
        result.map(((item, index) => {
          let fieldName = item.fieldName;
          let fieldCode = item.fieldCode;
          let tableEx_Id = item.tableEx_Id;
          let fieldType = item.fieldType;
          let dataDic = item.dataDic;
          let fieldAttr = item.fieldAttr;
          let guideWords = item.guideWords;
          let defaultValue = item.defaultValue;
          this.editFormOptions.forEach(item => {
            item.forEach(x => {
              //如果是编辑设置为只读
              if (x.field == fieldCode && guideWords != "") {
                x.placeholder = guideWords;
              }
              if (this.currentAction == 'Add' && x.field == fieldCode && defaultValue != "") {
                this.editFormFields[fieldCode] = defaultValue;
              }
            })
          })
        }))
        //刷新字典数据源
        this.initDicKeys();
      });
    }
  }
};
export default extension;
