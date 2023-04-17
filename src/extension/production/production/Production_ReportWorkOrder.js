/*****************************************************************************************
**  Author:COCO 2022
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import * as dateUtil from "../../../uitils/dateFormatUtil.js";
import store from '../../../store/index';
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
    differenceDateTime (beginTime, endTime) {
      var dateBegin = new Date(beginTime);
      var dateEnd = new Date(endTime);
      var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
      var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
      this.editFormFields["ReoportDurationHour"] = dayDiff * 24 + hours;
      this.editFormFields["ReoportDurationMinute"] = minutes;
      if(this.editFormFields["GoodQty"] && beginTime != endTime)
      {
        this.editFormFields["ActualProgress"] = (this.editFormFields["GoodQty"] / (dayDiff * 24 + hours + minutes/60)).toFixed(2) + '/1:00:00';
      }
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

      //示例：设置修改新建、编辑弹出框字段标签的长度
      // this.boxOptions.labelWidth = 150;
      //显示序号(默认隐藏)
      //this.boxOptions.height = document.documentElement.clientHeight * 0.7;
      this.columnIndex = true;
      //在表单配置的第二行后，将MyComponent组件添加到表单中
      this.editFormOptions.splice(this.editFormOptions.length - 2, 0, [{
        colSize: 12,
        render: (h) => {
          let elem = <div style="padding-left:15px;margin-left:7px;height:35px;background-image: linear-gradient( 135deg ,#0cd7bd 10%,#50c3f7);">
            <div style="color:#ffffff;font-weight: bold; font-size: 14px;">绩效信息</div>
          </div>;
          return (elem)

        }
      }]);
      var that = this;
      var workOrder_Id = this.getFormOption('WorkOrder_Id');
      var process_Id = this.getFormOption('Process_Id');
      var reoportDurationHour = this.getFormOption('ReoportDurationHour');
      var reoportDurationMinute = this.getFormOption('ReoportDurationMinute');
      var startDate = this.getFormOption('StartDate');
      var endDate = this.getFormOption('EndDate');
      var goodQty = this.getFormOption('GoodQty');
      startDate.onChange = (value, option) => {
        this.differenceDateTime(value,this.editFormFields["EndDate"]);

      };
      var numReg = /^[0-9]*$/
      var numRe = new RegExp(numReg);
      goodQty.onKeyPress = (val) => {
        if (val.toString() != '[object KeyboardEvent]') {
          if (numRe.test(val)) {
            this.differenceDateTime(this.editFormFields["StartDate"],this.editFormFields["EndDate"]);
            this.editFormFields["GuessPrice"] = this.editFormFields["UnitPrice"] * this.editFormFields["GoodQty"];
          }
          else {
            this.$Message.error('请输入数字');
          }
        }
      };
      reoportDurationHour.extra = {
        text: "小时",//显示文本
        style: "margin-right:10px;",//指定样式
      }
      reoportDurationMinute.extra = {
        text: "分钟",//显示文本
        style: "margin-right:10px;",//指定样式
      }
      startDate.onChange = (value, option) => {
        this.differenceDateTime(value,this.editFormFields["EndDate"]);

      };
      endDate.onChange = (value, option) => {
        this.differenceDateTime(this.editFormFields["StartDate"],value);
      };
      process_Id.onChange = (value, option) => {
          var json =  this.resultList.find(x => x.key === value);
          let urlProgress = 'api/Production_ReportWorkOrder/getProgress?workOrder_Id=' + json.workOrderId + '&processId=' + json.key + '&productId=' + json.productId + '&planQty=' + json.planQty;
          this.http.get(urlProgress, {}, true).then((res) => {
            this.editFormFields["ProcessProgress"] = res.processProgress;
            this.editFormFields["StandardProgress"] = res.standardProgress;
            this.editFormFields["UnitPrice"] = res.unitPrice;
            this.editFormFields["GuessPrice"] = res.unitPrice * this.editFormFields["GoodQty"];
          });
      };

      workOrder_Id.onChange = (value, option) => {
        let url = 'api/Production_WorkOrderList/getList?workOrderId=' + value;
        //给工序名称重新绑定数据源
        this.http.get(url, {}, true).then((result) => {
          process_Id.data = result;
          this.resultList = result;
          this.editFormFields["Process_Id"] = result[0].key;
          let urlProgress = 'api/Production_ReportWorkOrder/getProgress?workOrder_Id=' + result[0].workOrderId + '&processId=' + result[0].key + '&productId=' + result[0].productId + '&planQty=' + result[0].planQty;
          this.http.get(urlProgress, {}, true).then((res) => {
            this.editFormFields["ProcessProgress"] = res.processProgress;
            this.editFormFields["StandardProgress"] = res.standardProgress;
            this.editFormFields["UnitPrice"] = res.unitPrice;
            this.editFormFields["GuessPrice"] = res.unitPrice * this.editFormFields["GoodQty"];
          });
        });
        let urlWo = 'api/Production_WorkOrder/getList?workOrderId=' + value;
        //给工序名称重新绑定数据源
        this.http.get(urlWo, {}, true).then((result) => {
          this.editFormFields["Product_Id"] = result[0].product_Id;
          this.editFormFields["ProductCode"] = result[0].productCode;
          this.editFormFields["ProductName"] = result[0].productName;
          this.editFormFields["ProductStandard"] = result[0].productStandard;
        });
      };
      this.columns.forEach(x => {
        if (x.field == 'ReoportDurationHour') {
          x.title = "报工时长(小时)"
        }
        if (x.field == 'ReoportDurationMinute') {
          x.title = "报工时长(分钟)"
        }
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
      let hour = date.getHours()
      return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (day < 10 ? '0' + day : day) + 
        " " +
        (hour < 10 ? '0' + hour : hour)
      );
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      if (this.currentAction == 'Add') {
        this.editFormFields.StartDate = this.showTime() + ":00:00"
        this.editFormFields.EndDate = this.showTime() + ":00:00"
        this.editFormFields.ProcessStatus = "2"
        this.editFormFields.ApproveStatus = "2"
        this.editFormFields.ReportTime = dateUtil.formatTimeStamp(Date.now(), 'yyyy-MM-dd hh:mm:ss');
        let _userInfo = store.getters.getUserInfo();
        if (_userInfo) {
          this.editFormFields.ApproveUser = _userInfo.userName;
        }
      }
    }
  }
};
export default extension;
