/*****************************************************************************************
**  Author:COCO 2022
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import { h, resolveComponent } from 'vue';
import modelHeader from "./production_extend/AssembleWorkOrderModelBody.vue"
import gridFooter from './production_extend/AssembleWorkOrderGridFooter.vue';
import modelFooter from "./production_extend/AssembleWorkOrderModelFooter.vue"
import FileSaver from 'file-saver';
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: gridFooter,
    //新建、编辑弹出框扩展组件
    modelHeader: modelHeader,
    modelBody: {
      render() {
        return [
          h(resolveComponent('el-alert'), {
            style: { 'margin-bottom': '5px' },
            'show-icon': true, type: 'warning',
            closable: false, title: '点击【数量】【单位数量】可以对数量直接进行修改'
          }, ''),
        ]
      }
    },
    modelFooter: modelFooter
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
    onActivated() {
      let assembleWorkOrderCode = this.$route.query.AssembleWorkOrderCode;

      if (assembleWorkOrderCode) {
        var param = {
          order: "desc",
          page: 1,
          rows: 30,
          sort: "CreateDate",
          wheres: "[{\"name\":\"AssembleWorkOrderCode\",\"value\":\"" + assembleWorkOrderCode + "\",\"displayType\":\"like\"}]"
        };
        this.http.post('/api/Production_AssembleWorkOrder/getPageData', param, true).then((result) => {
          this.$refs.table.rowData = result.rows;
        });
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
      this.single = true;
      this.columnIndex = true;
      //点击单元格编辑与结束编辑(默认是点击单元格编辑，鼠标离开结束编辑)
      this.detailOptions.clickEdit = true;
      //显示所有查询条件
      this.setFiexdSearchForm(true);
      this.tableMaxHeight = (document.body.clientHeight - 260) / 2;
      this.columns.forEach(x => {
        if (x.field == "FormProcess") {
          x.render = (h, scope) => {
            console.log(scope);
            return [
              h(resolveComponent('el-progress'), {
                percentage: scope.row.FormProcess
              }, null),
            ]
          }
        }
      });
      this.buttons.splice(3,0,{  //也可以用push或者splice方法来修改buttons数组
        name: '打印', //按钮名称
        icon: 'el-icon-printer', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow =   this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要打印的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行打印!');
          }
          let html = document.getElementById("collect");
          window.open(this.http.ipAddress + 'Print-Designer/print.html?cat=Production_AssembleWorkOrder&id=' + selectRow[0].AssembleWorkOrder_Id + "&token=" + this.$store.getters.getToken(),'_blank')
        }
      });
      this.buttons.splice(4,0,{  //也可以用push或者splice方法来修改buttons数组
        name: '模版Excel导出', //按钮名称
        icon: 'el-icon-s-unfold', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow =   this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要编辑的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行导出!');
          }
          let urlSales = 'api/Production_AssembleWorkOrder/exportExcelTemplate?cat=Production_AssembleWorkOrder&AssembleWorkOrder_Id=' + selectRow[0].AssembleWorkOrder_Id;
          this.http.get(urlSales, {}, true).then((content) => {
            if(content=="")
            {
              this.$error('请先维护模版信息!');
            }
            else
            {
              var URL = this.http.webAddress + "/Excel/" + content // URL 为URL地址
              FileSaver.saveAs(URL, content);
            }
          });
        }
      });
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      this.detailOptions.buttons.shift();
      this.detailOptions.buttons.unshift({
        name: '选择产品', //按钮名称
        icon: 'el-icon-plus', //按钮图标，参照iview图标
        hidden: false, //是否隐藏按钮(如果想要隐藏按钮，在onInited方法中遍历buttons，设置hidden=true)
        onClick: function () {
          //触发事件
          this.$refs.modelHeader.open();
        }
      });
      //onInited方法设置从表编辑时实时计算值
      this.detailOptions.columns.forEach(x => {
        if (x.field == 'ProductionSchedule') {
          x.render = (h, scope) => {
            if (scope.row.ProductionSchedule != '-' && scope.row.ProductionSchedule != undefined) {
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

      //在数量后面加一个上传按钮
      let _index = this.detailOptions.columns.findIndex(x => { return x.field == 'Qty' });

      //这里只是演示，实际操作在代码生成器table显示类型设置为图片后这里就不用操作了
      //代码生成器中编辑行号设置为0，不要设置为大于0的数据

      //从表动态添加一列(上传图片列),生成上传图片、与删除图片操作
      this.detailOptions.columns.splice(_index, 0, {
        field: "operation",
        title: "操作",
        width: 150,
        align: "center",
        render: (h, { row, column, index }) => {
          //下面所有需要显示的信息都从row里面取出来
          return h(
            "div", { style: { color: '#0c83ff', 'font-size': '13px', cursor: 'pointer' } },
            [
              h(
                "i", {
                style: { 'margin-right': '10px' },
                class: ['el-icon-plus'],
                onClick: (e) => {
                  e.stopPropagation();
                  //记住当前操作的明细表行数据
                  this.$refs.modelFooter.open(index, row.LevelPath);
                }
              }, [], '添加下级'
              )
            ])
        },
      })

    },
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      this.$nextTick(() => {
        this.$refs.gridFooter.rowClick(result[0], "生产计划");
      });
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
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
      //调用Doc_Order1GridFooter.vue文件中(订单明细)的查询
      this.$refs.gridFooter.rowClick(row, "生产计划");
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      this.editFormOptions.forEach(item => {
        item.forEach(x => {
          //如果是编辑设置为只读
          if (x.field == "AssembleWorkOrderCode") {
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
