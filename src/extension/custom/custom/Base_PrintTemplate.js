/*****************************************************************************************
**  Author:COCO 2022
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import { h, resolveComponent } from 'vue';
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: {
      render() {
        return [
          h(resolveComponent('el-alert'), {
            style: { 'margin-bottom': '5px' },
            'show-icon': true, type: 'warning',
            closable: false, title: '先编辑打印模版，之后切换默认的模版，然后在具体业务表单进行打印'
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
      //示例：在按钮的最前面添加一个按钮
      this.buttons.splice(3, 0, {  //也可以用push或者splice方法来修改buttons数组
        name: '编辑打印模版', //按钮名称
        icon: 'el-icon-printer', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        onClick: function () {
          let selectRow = this.$refs.table.getSelected();
          if (selectRow.length == 0) {
            return this.$error('请选择要编辑的行!');
          }
          if (selectRow.length != 1) {
            return this.$error('只能选择一行数据进行编辑!');
          }
          this.result = this.nodesList.find(item => item.parentId != null)
          window.open(this.http.ipAddress + 'Print-Designer/index.html?id=' + selectRow[0].PrintTemplateId + '&cat=' + this.result.catalogCode  + "&token=" + this.$store.getters.getToken(), '_blank')
        }
      });

      //示例：设置修改新建、编辑弹出框字段标签的长度
      // this.boxOptions.labelWidth = 150;
      //显示序号(默认隐藏)
      this.columnIndex = true;
      let column = this.columns.find((x) => {
        return x.field == 'StatusFlag';
      });
      column.edit = {
        type: 'switch',
        keep: true
      };
      //是否可用字段设置切换事件并保存到数据库
      column.onChange = (value, row, tableData) => {
        let url = `api/Base_PrintTemplate/updateStatus?templateId=${row.PrintTemplateId}&statusFlag=${row.StatusFlag}`;
        this.http.get(url, {}, true).then((result) => {
          this.search();
          this.$Message.success(result);
        });
      };
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
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
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      //查询前方法，如果是左边树选择了分类，直接查询分类
      if (this.catalogIds) {
        param.wheres.push({
          name: 'CatalogId',
          value: this.catalogIds,
          displayType: 'selectList'
        });
      }
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
      //点击编辑/新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
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
