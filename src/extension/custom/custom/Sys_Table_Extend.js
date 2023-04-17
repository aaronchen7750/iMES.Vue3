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
      if(this.$route.path == '/Sys_User_Extend')
      {
        this.table.cnName = "用户字段扩展"
        this.table.url = "/Sys_User_Extend/";
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == 'TableName') {
              this.editFormFields.TableName = "Sys_User"
              item.readonly = true;
            }
          })
        })
      };
      if(this.$route.path == '/Base_Product_Extend')
      {
        this.table.cnName = "产品定义字段扩展"
        this.table.url = "/Base_Product_Extend/";
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == 'TableName') {
              this.editFormFields.TableName = "Base_Product"
              item.readonly = true;
            }
          })
        })
      };
      if(this.$route.path == '/Base_Process_Extend')
      {
        this.table.cnName = "工序字段扩展"
        this.table.url = "/Base_Process_Extend/";
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == 'TableName') {
              this.editFormFields.TableName = "Base_Process"
              item.readonly = true;
            }
          })
        })
      };
      if(this.$route.path == '/Base_MeritPay_Extend')
      {
        this.table.cnName = "绩效工资配比字段扩展"
        this.table.url = "/Base_MeritPay_Extend/";
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == 'TableName') {
              this.editFormFields.TableName = "Base_MeritPay"
              item.readonly = true;
            }
          })
        })
      };
      if(this.$route.path == '/Base_DefectItem_Extend')
      {
        this.table.cnName = "不良品项字段扩展"
        this.table.url = "/Base_DefectItem_Extend/";
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == 'TableName') {
              this.editFormFields.TableName = "Base_DefectItem"
              item.readonly = true;
            }
          })
        })
      };
      //示例：设置修改新建、编辑弹出框字段标签的长度
      // this.boxOptions.labelWidth = 150;
      //显示序号(默认隐藏)
      this.columnIndex = true;
      this.boxOptions.height = 500;
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
      return true;
    },
    addBefore(formData) {
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
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
      //看不懂就把输出看：console.log(this.editFormOptions)

      //获取当前弹出框是新建还是编辑状态
      let isEDIT = this.currentAction == this.const.EDIT;
      //点击弹出框后，如果是编辑状态，禁止编辑帐号，如果新建状态，将帐号字段设置为可编辑
      this.editFormOptions.forEach(item => {
        item.forEach(x => {
          //如果是编辑设置为只读
          if (x.field == "TableName" || x.field == "FieldName" || x.field == "FieldType") {
            //disabled是editFormOptions的动态属性，这里只能通过this.$set修改值
            //vue3版本改为设置：x.disabled=isEDIT
            x.disabled = isEDIT;
          }
        })
      });
      if(this.$route.path == '/Sys_User_Extend')
      {
        this.editFormFields.TableName = "Sys_User"
      }
      if(this.$route.path == '/Base_Product_Extend')
      {
        this.editFormFields.TableName = "Base_Product"
      }
      if(this.$route.path == '/Base_Process_Extend')
      {
        this.editFormFields.TableName = "Base_Process"
      }
      if(this.$route.path == '/Base_MeritPay_Extend')
      {
        this.editFormFields.TableName = "Base_MeritPay"
      }
      if(this.$route.path == '/Base_DefectItem_Extend')
      {
        this.editFormFields.TableName = "Base_DefectItem"
      }
    }
  }
};
export default extension;
