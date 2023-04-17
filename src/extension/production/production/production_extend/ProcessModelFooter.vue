<template>
    <MesBox
      v-model="model"
      :lazy="true"
      title="选择工序"
      :height="700"
      :width="1500"
      :padding="15"
    >
      <!-- 设置查询条件 -->
      <div style="padding-bottom: 10px">
        <span style="margin-right: 10px">工序编码：</span>
        <el-input
          placeholder="请输入工序编码"
          style="width: 200px"
          v-model="processCode"
        />
        <span style="margin-right: 10px;margin-left: 10px">工序名称：</span>
        <el-input
          placeholder="请输入工序名称"
          style="width: 200px"
          v-model="processName"
        />
        <el-button
          type="primary"
          style="margin-left:20px"
          size="medium"
          icon="el-icon-zoom-out"
          @click="search"
          >搜索</el-button
        >
      </div>
  
      <!-- imes-table配置的这些属性见MesTable组件api文件 -->
      <mes-table
        ref="mytable"
        :loadKey="true"
        :columns="columns"
        :pagination="pagination"
        :pagination-hide="false"
        :max-height="600"
        :url="url"
        :index="true"
        :single="false"
        :defaultLoadPage="defaultLoadPage"
        @loadBefore="loadTableBefore"
        @loadAfter="loadTableAfter"
      ></mes-table>
      <!-- 设置弹出框的操作按钮 -->
      <template #footer>
        <div>
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-plus"
            @click="addRow()"
            >添加选择的数据</el-button
          >
          <el-button size="mini" icon="el-icon-close" @click="model = false"
            >关闭</el-button
          >
        </div>
      </template>
    </MesBox>
  </template>
  <script>
  import MesBox from "@/components/basic/MesBox.vue";
  import MesTable from "@/components/basic/MesTable.vue";
import { thisTypeAnnotation } from "@babel/types";
  export default {
    components: {
        MesBox: MesBox,
        MesTable: MesTable,
    },
    data() {
      return {
        model: false,
        defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
        processCode: "", //查询条件字段
        processName:"",  //产品名称
        modelType:"",
        index:0,
        url: "api/Base_Process/getSelectorProcess",//加载数据的接口
        columns: [
                      {field:'Process_Id',title:'工序主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProcessCode',title:'工序编号',type:'string',sort:true,width:180,align:'left',sort:true},
                       {field:'ProcessName',title:'工序名称',type:'string',link:true,sort:true,width:180,require:true,align:'left'},
                       {field:'SubmitWorkLimit',title:'报工权限',type:'string',hidden:true,bind:{ key:'usersWithAll',data:[]},width:220,require:true,align:'left'},
                       {field:'SubmitWorkLimitLabel',title:'报工权限',type:'string',width:220,require:true,align:'left'},
                       {field:'SubmitWorkMatch',title:'报工数配比',type:'decimal',width:110,require:true,align:'left'},
                       {field:'DefectItem',title:'不良品项列表',type:'string',hidden:true,bind:{ key:'DefectItem',data:[]},width:220,require:true,align:'left'},
                       {field:'DefectItemLabel',title:'不良品项列表',type:'string',width:220,require:true,align:'left'}
        ],
        pagination: {}, //分页配置，见mestable组件api
      };
    },
    methods: {
      open() {
        this.model = true;
        //打开弹出框时，加载table数据
        this.$nextTick(() => {
          this.$refs.mytable.load();
        });
      },
      search() {
        //点击搜索
        this.$refs.mytable.load();
      },
      getFieldDicValue(fieldName,fieldValue){
        this.columns.forEach(item => {
          if (item.field == fieldName) {
            var result =  item.bind.data.find(val => val.key == fieldValue)
            return result;
          }
        })
      },
      addRow() {
        var rows = this.$refs.mytable.getSelected();
        if (!rows || rows.length == 0) {
          return this.$message.error("请选择行数据");
        }
        //获取回写到明细表的字段
        this.$emit("parentCall", ($parent) => {
          $parent.getProcessRow(rows);
        });
        //关闭当前窗口
        this.model = false;
      },
      //这里是从api查询后返回数据的方法
      loadTableAfter(row) {

        row.forEach(x => {
            if (x.SubmitWorkLimit) {
              let workLimitLabel = "";
              var arr = x.SubmitWorkLimit.split(',');
              arr.forEach(itemKey => {
                this.columns.forEach(item => {
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
                this.columns.forEach(item => {
                  if (item.field == "DefectItem") {
                    var result = item.bind.data.find(val => val.key == itemKey)
                    defectLabel += (result.value + '，');
                  }
                })
              })
              x.DefectItemLabel = defectLabel.substring(0, defectLabel.length - 1);
            }
          })
      },
      loadTableBefore(params) {
        //查询前，设置查询条件
        if (this.processCode) {
          params.wheres.push({ name: "ProcessCode", value: this.processCode, displayType:"like"});
        }
        if (this.processName) {
          params.wheres.push({ name: "ProcessName", value: this.processName, displayType:"like"});
        }
        return true;
      },
    },
  };
  </script>
  