/*****************************************************************************************
**  Author:COCO 2022
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import { h, resolveComponent } from 'vue';
import gridHeader from './custom_extend/Base_ExcelTemplateGridHeader.vue'

//声明vue对象
let $this;
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: gridHeader,
    gridBody: {
      render() {
        return [
          h(resolveComponent('el-alert'), {
            style: { 'margin-bottom': '5px' },
            'show-icon': true, type: 'warning',
            closable: false, title: '先编辑导出Excel模版，之后切换默认的模版，然后在具体业务表单进行模版导出'
          }, ''),
        ]
      }
    },
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
      //示例：设置修改新建、编辑弹出框字段标签的长度
      // this.boxOptions.labelWidth = 150;
      //显示序号(默认隐藏)
      this.columnIndex = true;
      this.boxOptions.height = 450;
      $this = this;
      let column = this.columns.find((x) => {
        return x.field == 'StatusFlag';
      });
      column.edit = {
        type: 'switch',
        keep: true
      };
      //是否可用字段设置切换事件并保存到数据库
      column.onChange = (value, row, tableData) => {
        let url = `api/Base_ExcelTemplate/updateStatus?templateId=${row.ExcelTemplateId}&statusFlag=${row.StatusFlag}`;
        this.http.get(url, {}, true).then((result) => {
          this.search();
          this.$Message.success(result);
        });
      };
      this.buttons.splice(2, 0, ...[{
        name: "模版编辑说明",
        icon: 'el-icon-printer',
        type: 'warning',
        onClick: function () {
          this.$refs.gridHeader.open()
        }
      }])
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
    },
    searchBefore(param) {
      if (this.catalogIds) {
        param.wheres.push({
          name: 'CatalogId',
          value: this.catalogIds,
          displayType: 'selectList'
        });
      }
      return true;
    },
    nodeClick(catalogIds, nodes, nodesList) {      //左边树节点点击事件
      //左边树节点的甩有子节点，用于查询数据
      this.nodesList = nodesList;
      this.catalogIds = catalogIds.join(',');
      //左侧树选中节点的所有父节点,用于新建时设置级联的默认值
      this.nodes = nodes;
      if (this.nodes.length == 1) {
        this.$Message.error("请选择最下级节点");
        return false;
      }
      this.search();
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
      if (this.currentAction == 'Add') {
        //新建时设置左边树选中的节点
        this.editFormFields.CatalogId = this.nodes;
      }
      if (row.isDefault == "1") {
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == "Remark") {
              item.readonly = true;
            }
          })
        })
      }
      else
      {
        this.editFormOptions.forEach(x => {
          x.forEach(item => {
            if (item.field == "Remark") {
              item.readonly = false;
            }
          })
        })
      }
    }
  }
};
export default extension;
