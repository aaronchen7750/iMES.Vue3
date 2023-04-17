<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_SalesOrder.js此处编写
 -->
<template>
    <view-grid ref="grid"
               :columns="columns"
               :detail="detail"
               :editFormFields="editFormFields"
               :editFormOptions="editFormOptions"
               :searchFormFields="searchFormFields"
               :searchFormOptions="searchFormOptions"
               :table="table"
               :extend="extend">
    </view-grid>
</template>
<script>
    import extend from "@/extension/production/production/Production_SalesOrder.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'SalesOrder_Id',
                footer: "Foots",
                cnName: '销售订单',
                name: 'production/Production_SalesOrder',
                url: "/Production_SalesOrder/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"SalesOrderCode":"","Remark":""});
            const editFormOptions = ref([[{"title":"单据编号","field":"SalesOrderCode","type":"text"}],
                              [{"title":"备注","field":"Remark","type":"textarea"}]]);
            const searchFormFields = ref({"SalesOrderCode":""});
            const searchFormOptions = ref([[{"title":"单据编号","field":"SalesOrderCode","type":"like"}]]);
            const columns = ref([{field:'SalesOrder_Id',title:'销售订单主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'SalesOrderCode',title:'单据编号',type:'string',link:true,sort:true,width:180,align:'left',sort:true},
                       {field:'Remark',title:'备注',type:'string',width:220,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "销售订单-产品明细",
                table: "Production_SalesOrderList",
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
                sortName: "SalesOrderList_Id",
                key: "SalesOrderList_Id"
            });
            return {
                table,
                extend,
                editFormFields,
                editFormOptions,
                searchFormFields,
                searchFormOptions,
                columns,
                detail,
            };
        },
    });
</script>
