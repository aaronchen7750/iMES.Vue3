<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_AssembleWorkOrder.js此处编写
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
    import extend from "@/extension/production/production/Production_AssembleWorkOrder.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'AssembleWorkOrder_Id',
                footer: "Foots",
                cnName: '装配工单',
                name: 'production/Production_AssembleWorkOrder',
                url: "/Production_AssembleWorkOrder/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"AssembleWorkOrderCode":"","Remark":""});
            const editFormOptions = ref([[{"title":"单据编号","field":"AssembleWorkOrderCode","type":"text"}],
                              [{"title":"备注","field":"Remark","type":"textarea"}]]);
            const searchFormFields = ref({"AssembleWorkOrderCode":"","WorkOrderQty":"","FinishedQty":""});
            const searchFormOptions = ref([[{"title":"单据编号","field":"AssembleWorkOrderCode","type":"like"},{"title":"工单数","field":"WorkOrderQty","type":"number"},{"title":"已结束工单","field":"FinishedQty","type":"number"}]]);
            const columns = ref([{field:'AssembleWorkOrder_Id',title:'装配工单主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'AssembleWorkOrderCode',title:'单据编号',type:'string',link:true,sort:true,width:180,align:'left',sort:true},
                       {field:'WorkOrderQty',title:'工单数',type:'int',width:80,align:'left'},
                       {field:'FinishedQty',title:'已结束工单',type:'int',width:80,align:'left'},
                       {field:'FormProcess',title:'单据进度',type:'string',width:220,align:'left'},
                       {field:'Remark',title:'备注',type:'string',width:220,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "装配工单-产品明细",
                table: "Production_AssembleWorkOrderList",
                columns: [{field:'AssembleWorkOrderList_Id',title:'装配工单明细表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'AssembleWorkOrder_Id',title:'转配工单',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'LevelPath',title:'层级编号',type:'string',width:220,edit:{type:'text'},align:'left',sort:true},
                       {field:'ProductCode',title:'产品编号',type:'string',sort:true,width:180,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'ProductName',title:'产品名称',type:'string',sort:true,width:180,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'ProductionSchedule',title:'生产进度',type:'string',width:300,readonly:true,edit:{type:''},align:'left'},
                       {field:'ProductStandard',title:'产品规格',type:'string',width:180,readonly:true,edit:{type:''},align:'left'},
                       {field:'ProductAttribute',title:'产品属性',type:'string',bind:{ key:'productAttr',data:[]},width:180,readonly:true,edit:{type:'select'},require:true,align:'left'},
                       {field:'Unit_Id',title:'单位',type:'int',bind:{ key:'unitList',data:[]},width:110,readonly:true,edit:{type:'select'},require:true,align:'left'},
                       {field:'UnitQty',title:'单位数量',type:'int',width:110,edit:{type:'number'},require:true,align:'left'},
                       {field:'Qty',title:'数量',type:'int',sort:true,width:110,edit:{type:'number'},require:true,align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',width:180,readonly:true,edit:{type:''},align:'left'},
                       {field:'Status',title:'状态',type:'string',bind:{ key:'productStatus',data:[]},width:180,readonly:true,edit:{type:'select'},align:'left'},
                       {field:'FinishQty',title:'完成数',type:'int',width:110,readonly:true,edit:{type:''},align:'left'},
                       {field:'BadQty',title:'不良品数',type:'int',width:110,readonly:true,edit:{type:''},align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',sort:true,width:110,align:'left',sort:true},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Product_Id',title:'产品ID',type:'int',width:110,hidden:true,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'ProcessLine_Id',title:'工艺路线',type:'int',width:80,hidden:true,readonly:true,edit:{type:''},align:'left'},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'}],
                sortName: "LevelPath",
                key: "AssembleWorkOrderList_Id"
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
