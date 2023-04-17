/*****************************************************************************************
**  Author:COCO 2022
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import ProductModelBody from '../../custom/custom/custom_extend/Base_MaterialDetailModelBody'
import modelFooter from "./production_extend/ProcessModelFooter.vue"
import QRCode from 'qrcodejs2'
import { h, resolveComponent } from 'vue';
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: ProductModelBody,
    modelFooter: modelFooter
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
    createQrcode(text) {
      // 生成二维码
      const qrcodeImgEl = document.getElementById('qrcodeImg')
      qrcodeImgEl.innerHTML = ''
      let qrcode = new QRCode(qrcodeImgEl, {
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      qrcode.makeCode(text)
    },
    getFormOption(field) {
      let option;
      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == field) {
            option = item;
          }
        })
      })
      return option;
    },
    updatestatus(workOrder_Id, status) {
      let url = 'api/Production_WorkOrder/changeUpdate?workOrderId=' + workOrder_Id + '&status=' + status;
      //给工序名称重新绑定数据源
      this.http.get(url, {}, true).then((result) => {
        this.$Message.success(result);
        this.search();
      });
    },
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
      this.maxBtnLength = 10;
      //示例：设置修改新建、编辑弹出框字段标签的长度
      this.buttons.splice(3, 0, {  //也可以用push或者splice方法来修改buttons数组
        name: '开始', //按钮名称
        icon: 'el-icon-video-play', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow = this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要编辑的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行编辑!');
          }
          if(selectRow[0].Status == 2)
          {
            return this.$error('已经开始的工单不允许重复开始!');
          }
          this.updatestatus(selectRow[0].WorkOrder_Id, 2)
        }
      });
      this.buttons.splice(4, 0, {  //也可以用push或者splice方法来修改buttons数组
        name: '撤回', //按钮名称
        icon: 'el-icon-d-arrow-left', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow = this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要编辑的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行编辑!');
          }
          if(selectRow[0].Status == 4)
          {
            return this.$error('已经撤回的工单不允许重复开始!');
          }
          this.updatestatus(selectRow[0].WorkOrder_Id, 4)
        }
      });
      this.buttons.splice(4, 0, {  //也可以用push或者splice方法来修改buttons数组
        name: '结束', //按钮名称
        icon: 'el-icon-finished', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow = this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要编辑的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行编辑!');
          }
          if(selectRow[0].Status == 4)
          {
            return this.$error('已经结束的工单不允许重复开始!');
          }
          this.updatestatus(selectRow[0].WorkOrder_Id, 3)
        }
      });
      this.buttons.splice(4, 0, {  //也可以用push或者splice方法来修改buttons数组
        name: '取消', //按钮名称
        icon: 'el-icon-scissors', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow = this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要编辑的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行编辑!');
          }
          if(selectRow[0].Status == 5)
          {
            return this.$error('已经取消的工单不允许重复开始!');
          }
          this.updatestatus(selectRow[0].WorkOrder_Id, 5)
        }
      });
      //显示序号(默认隐藏)
      this.boxOptions.labelWidth = 120;
      this.labelWidth = 120;
      this.columnIndex = true;
      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == 'Product_Id') {
            //给编辑表单设置[选择数据]操作,extra具体配置见mesform组件api
            item.extra = {
              icon: "el-icon-zoom-out",
              text: "高级选择",
              style: "color:blue;font-size: 14px;cursor: pointer;",
              click: item => {
                this.$refs.modelBody.openDemo("WorkOrderProduct_Id");
              }
            }
          }
        })
      });
      var planQty = this.getFormOption('PlanQty');
      var numReg = /^[0-9]*$/
      var numRe = new RegExp(numReg);
      planQty.onKeyPress = (val) => {
        if (val.toString() != '[object KeyboardEvent]') {
          if (numRe.test(val)) {
            this.$refs.detail.rowData.forEach(item => {
              item.PlanQty = val;
            })
          }
          else {
            this.$Message.error('请输入数字');
          }
        }
      };
      // this.editFormOptions[3][1].push({ //往新数组对象中添加新的属性 属性名对应属性值
      //   title: "父项产品属性",
      //   field: "Parent",
      //   readonly: true,
      //   type: "textarea",
      //   minRows: 5
      // })
      this.editFormOptions[this.editFormOptions.length - 1].push({ //往新数组对象中添加新的属性 属性名对应属性值
        title: "二维码",
        required: false,
        field: "QrCode",
        disabled: true,
        render: (h) => {
          let elem = <div class="qrcode"><div id="qrcodeImg"></div></div>;
          return (elem)
        }
      });
      this.columns.forEach(x => {
        if (x.field == "AssociatedForm") {
          x.formatter = (row, column, event) => {
            return row.AssociatedForm ? '<span style="color: #2d8cf0;">' + row.AssociatedForm + '(点击跳转)</span>' : "";
          };
          //绑定点击事件
          x.click = (row, column, event) => {
            let path = ""
            if (row.FromType == "SalesOrder") {
              path = "/Production_SalesOrder";
              this.$tabs.open({
                text: "销售订单",
                path: path,
                query: {
                  SalesOrderCode: row.AssociatedForm
                }
              });
            }
            if (row.FromType == "ProductPlan") {
              path = "/Production_ProductPlan";
              this.$tabs.open({
                text: "生产计划",
                path: path,
                query: {
                  ProductPlanCode: row.AssociatedForm
                }
              });
            }
            if (row.FromType == "AssembleWorkOrder") {
              path = "/Production_AssembleWorkOrder";
              this.$tabs.open({
                text: "装配工单",
                path: path,
                query: {
                  AssembleWorkOrderCode: row.AssociatedForm
                }
              });
            }
          };
        }
      });
    },
    getRow(rows, modelType) {
      if (modelType == "WorkOrderProduct_Id") {
        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
        this.editFormFields.Product_Id = rows[0].Product_Id
        this.editFormFields.ProductCode = rows[0].ProductCode
        this.editFormFields.ProductName = rows[0].ProductName
        this.editFormFields.ProductStandard = rows[0].ProductStandard
        this.editFormFields.Unit_Id = rows[0].Unit_Id
      }
    },
    getProcessRow(rows) {
      let json = rows.map(item => ({
        Process_Id: item.Process_Id,
        ProcessCode: item.ProcessCode,
        ProcessName: item.ProcessName,
        SubmitWorkLimit: item.SubmitWorkLimit,
        SubmitWorkMatch: item.SubmitWorkMatch,
        DefectItem: item.DefectItem,
        PlanStartDate: this.editFormFields.PlanStartDate,
        PlanEndDate: this.editFormFields.PlanEndDate,
        PlanQty: this.editFormFields.PlanQty,
        GoodQty: 0,
        NoGoodQty: 0,
        SubmitWorkLimitLabel: item.SubmitWorkLimitLabel,
        DefectItemLabel: item.DefectItemLabel
      }))
      this.$refs.detail.rowData.unshift(...json);
    },
    getFieldDicValue(fieldName, fieldValue) {
      this.detailOptions.columns.forEach(item => {
        if (item.field == fieldName) {
          var result = item.bind.data.find(val => val.key == fieldValue)
          return result.value;
        }
      })
    },
    getProcessListById(processLineId) {
      let url = "api/Base_Process/getProcessListByLineID?ProcessLine_Id=" + processLineId;
      this.http.get(url, {}, true).then(rows => {
        let json = rows.map(item => ({
          Process_Id: item.Process_Id,
          ProcessCode: item.ProcessCode,
          ProcessName: item.ProcessName,
          SubmitWorkLimit: item.SubmitWorkLimit,
          SubmitWorkMatch: item.SubmitWorkMatch,
          DefectItem: item.DefectItem,
          PlanStartDate: this.editFormFields.PlanStartDate,
          PlanEndDate: this.editFormFields.PlanEndDate,
          PlanQty: this.editFormFields.PlanQty,
          GoodQty: 0,
          NoGoodQty: 0,
          SubmitWorkLimitLabel: '',
          DefectItemLabel: ''
        }))
        json.forEach(x => {
          if (x.SubmitWorkLimit) {
            let workLimitLabel = "";
            var arr = x.SubmitWorkLimit.split(',');
            arr.forEach(itemKey => {
              this.detailOptions.columns.forEach(item => {
                if (item.field == "SubmitWorkLimit") {
                  var result = item.bind.data.find(val => val.key == itemKey)
                  workLimitLabel += (result.value + '，');
                }
              })
            })
            x.SubmitWorkLimitLabel = workLimitLabel.substring(0, workLimitLabel.length - 1);
          }
          if (x.DefectItem) {
            let defectLabel = "";
            var arr = x.DefectItem.split(',');
            arr.forEach(itemKey => {
              this.detailOptions.columns.forEach(item => {
                if (item.field == "DefectItem") {
                  var result = item.bind.data.find(val => val.key == itemKey)
                  defectLabel += (result.value + '，');
                }
              })
            })
            x.DefectItemLabel = defectLabel.substring(0, defectLabel.length - 1);
          }

        })
        this.$refs.detail.rowData = [];
        this.$refs.detail.rowData.unshift(...json);
      })
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      var that = this;
      var productCode = this.getFormOption('Product_Id');
      var startDate = this.getFormOption('PlanStartDate');
      var endDate = this.getFormOption('PlanEndDate');

      productCode.onChange = (val, item) => {
        that.http.ajax({
          url: "api/Base_Product/getProductInfoByProductID?productId=" + val,
          json: true,
          success: function (data) {
            that.editFormFields.ProductCode = data[0].ProductCode
            that.editFormFields.ProductName = data[0].ProductName
            that.editFormFields.ProductStandard = data[0].ProductStandard
            that.editFormFields.Unit_Id = data[0].Unit_Id

            if (data[0].Process_Id) {
              that.getProcessListById(data[0].Process_Id);
            }
            else {
              that.$refs.detail.rowData = [];
            }
          },
          type: "get",
          async: false,
        });
      };
      startDate.onChange = (val, item) => {
        this.$refs.detail.rowData.forEach(item => {
          item.PlanStartDate = val;
        })
      };
      endDate.onChange = (val, item) => {
        this.$refs.detail.rowData.forEach(item => {
          item.PlanEndDate = val;
        })
      };
      let _index = this.detailOptions.columns.findIndex(x => { return x.field == 'SubmitWorkLimit' });
      this.detailOptions.columns.splice(_index, 0, {
        field: "SubmitWorkLimitLabel",
        title: "报工权限",
        type: 'string',
        width: 250,
        align: "left"
      })
      this.detailOptions.columns.splice(_index, 0, {
        field: "DefectItemLabel",
        title: "不良品项列表",
        type: 'string',
        width: 250,
        align: "left"
      })
      //隐藏明细表中列
      this.detailOptions.columns.forEach(x => {
        if (x.field == 'SubmitWorkLimit') {
          x.hidden = true;
        }
        if (x.field == 'DefectItem') {
          x.hidden = true;
        }
        if (x.field == 'DistributionList') {
          x.hidden = true;
        }
        if (x.field == 'WorkOrder_Id') {
          x.hidden = true;
        }
      });
      this.detailOptions.buttons.shift();
      this.detailOptions.buttons.unshift({
        name: '从工序中添加', //按钮名称
        icon: 'el-icon-plus', //按钮图标，参照iview图标
        hidden: false, //是否隐藏按钮(如果想要隐藏按钮，在onInited方法中遍历buttons，设置hidden=true)
        onClick: function () {
          //触发事件
          this.$refs.modelFooter.open();
        }
      });
      this.columns.forEach(x => {
        if (x.field == 'ProductionSchedule') {
          x.render = (h, scope) => {
            if (scope.row.ProductionSchedule != '-' && scope.row.ProductionSchedule != undefined && scope.row.ProductionSchedule != "") {
              let arr = JSON.parse(scope.row.ProductionSchedule);
              arr = arr.sort(function (a, b) {						//重点在这里，下面有说明
                return a.Sequence - b.Sequence;			//inNum是要根据某个字段进行排序的字段名，
              })
              let activeSeq = arr.find(x => x.PercentNum != '100.00%');
              activeSeq = activeSeq == undefined ? arr.length + 1 : activeSeq.Sequence;
              return [
                h(resolveComponent('el-steps'), {
                  active: activeSeq, 'align-center': true
                }, [
                  arr.map(item => {
                    return h(resolveComponent('el-step'), { title: item.ProcessName, description: item.PercentNum },)
                  })
                ]),
              ]
            }
          }
        }

      })
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
    showTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (day < 10 ? '0' + day : day)
      );
    },
    searchDetailAfter(data) {//查询从表后param查询参数,result回返查询的结果
      if (this.currentAction == 'update') {
        data.forEach(x => {
          if (x.SubmitWorkLimit) {
            let workLimitLabel = "";
            var arr = x.SubmitWorkLimit.split(',');
            arr.forEach(itemKey => {
              this.detailOptions.columns.forEach(item => {
                if (item.field == "SubmitWorkLimit") {
                  var result = item.bind.data.find(val => val.key == itemKey)
                  workLimitLabel += (result.value + '，');
                }
              })
            })
            x.SubmitWorkLimitLabel = workLimitLabel.substring(0, workLimitLabel.length - 1);
          }
          if (x.DefectItem) {
            let defectLabel = "";
            var arr = x.DefectItem.split(',');
            arr.forEach(itemKey => {
              this.detailOptions.columns.forEach(item => {
                if (item.field == "DefectItem") {
                  var result = item.bind.data.find(val => val.key == itemKey)
                  defectLabel += (result.value + '，');
                }
              })
            })
            x.DefectItemLabel = defectLabel.substring(0, defectLabel.length - 1);
          }
        })
      }
      return true;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      let qrCode = this.getFormOption("QrCode");
      let remark = this.getFormOption("Remark");
      if (this.currentAction == 'Add') {
        this.editFormFields.PlanStartDate = this.showTime() + " 00:00:00"
        this.editFormFields.PlanEndDate = this.showTime() + " 23:59:59"
        this.editFormFields.Status = "1"
        remark.colSize = 8;
        qrCode.hidden = true;
      }
      if (this.currentAction == 'update') {
        remark.colSize = 4;
        qrCode.hidden = false;
        this.createQrcode("WorkOrderId=" + row.WorkOrder_Id);
      }
      this.editFormOptions.forEach(item => {
        item.forEach(x => {
          //如果是编辑设置为只读
          if (x.field == "WorkOrderCode") {
            //disabled是editFormOptions的动态属性，这里只能通过this.$set修改值
            //vue3版本改为设置：x.disabled=isEDIT
            x.placeholder = "请输入，忽略将自动生成";
          }
        })
      })

    }
  }
};
export default extension;
