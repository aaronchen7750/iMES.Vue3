<template>
  <div class="detail-table">
    <div class="detail-title">
      <i class="el-icon-s-grid" />
      <span>{{type}}-产品明细</span>
    </div>
    <mes-table
      style="padding: 0px 10px 10px;"
      ref="editTable1"
      :columns="columns"
      :max-height="270"
      :index="true"
      :tableData="rows"
      :pagination-hide="true"
    ></mes-table>
  </div>
</template>

<script>
import MesTable from "@/components/basic/MesTable.vue";
export default {
  components: { MesTable },
  data() {
    return {
      columns: [{field:'SalesOrderList_Id',title:'销售订单产品明细表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'SalesOrder_Id',title:'销售订单',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProductCode',title:'产品编号',type:'string',sort:true,width:180,readonly:true,edit:{type:''},require:true,align:'left',sort:true},
                       {field:'ProductName',title:'产品名称',type:'string',sort:true,width:180,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'ProductStandard',title:'产品规格',type:'string',width:180,readonly:true,edit:{type:''},align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',width:180,readonly:true,edit:{type:''},align:'left'},
                       {field:'Qty',title:'数量',type:'int',width:110,edit:{type:'number'},require:true,align:'left'},
                       {field:'FinishQty',title:'完成数',type:'int',width:110,readonly:true,edit:{type:''},align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Product_Id',title:'产品ID',type:'int',width:110,hidden:true,readonly:true,edit:{type:''},require:true,align:'left'}],
      rows: [],
      type:''
    };
  },
  methods:{
      rowClick(row,type){
          this.type = type
          let url= "";
          switch(type){
            case "销售订单":
              url="api/Production_SalesOrder/getDetailRows?SalesOrder_Id=" + row.SalesOrder_Id;
              break
            case "生产计划":
              url="api/Production_ProductPlan/getDetailRows?ProductPlan_Id=" + row.ProductPlan_Id;
              break
            default:
              //这里是没有找到对应的值处理
              break
          }
          this.http.get(url,{},true).then(rows=>{
              this.rows=rows;
          })
      }
  }
};
</script>

<style lang="less" scoped>
.detail-table{
    padding: 0px 4px;
    border-top: 10px solid rgb(238, 238, 238);
    h3{
        font-weight: 500;
        padding-left: 10px;
        background: #fff;
        margin-top: 8px;
        padding-bottom: 5px;
    }
}
.detail-title{
  padding: 10px;
  font-size: 15px;
  color:'#313131';
  font-weight: bold;
  
}
</style>