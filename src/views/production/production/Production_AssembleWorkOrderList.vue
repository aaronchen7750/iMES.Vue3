<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_AssembleWorkOrderList.js此处编写
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
    import extend from "@/extension/production/production/Production_AssembleWorkOrderList.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'AssembleWorkOrderList_Id',
                footer: "Foots",
                cnName: '装配工单-产品明细',
                name: 'production/Production_AssembleWorkOrderList',
                url: "/Production_AssembleWorkOrderList/",
                sortName: "LevelPath"
            });
            const editFormFields = ref({"LevelPath":"","ProductCode":"","ProductName":"","ProductionSchedule":"","ProductStandard":"","ProductAttribute":"","Unit_Id":"","UnitQty":"","Qty":"","WorkOrderCode":"","Status":"","FinishQty":"","BadQty":"","Product_Id":"","ProcessLine_Id":""});
            const editFormOptions = ref([[{"title":"层级编号","field":"LevelPath","type":"text"},
                               {"title":"生产进度","field":"ProductionSchedule","disabled":true},
                               {"title":"产品规格","field":"ProductStandard","disabled":true},
                               {"title":"工单编号","field":"WorkOrderCode","disabled":true},
                               {"dataKey":"workOrderStatus","data":[],"title":"状态","field":"Status","disabled":true,"type":"select"},
                               {"title":"完成数","field":"FinishQty","disabled":true,"type":"number"},
                               {"title":"不良品数","field":"BadQty","disabled":true,"type":"number"},
                               {"title":"产品编号","required":true,"field":"ProductCode","disabled":true},
                               {"title":"产品名称","required":true,"field":"ProductName","disabled":true},
                               {"dataKey":"productAttr","data":[],"title":"产品属性","required":true,"field":"ProductAttribute","disabled":true,"type":"select"},
                               {"dataKey":"unitList","data":[],"title":"单位","required":true,"field":"Unit_Id","disabled":true,"type":"select"},
                               {"title":"单位数量","required":true,"field":"UnitQty","type":"number"},
                               {"title":"数量","required":true,"field":"Qty","type":"number"},
                               {"title":"产品ID","required":true,"field":"Product_Id","disabled":true,"type":"number"},
                               {"title":"工艺路线","field":"ProcessLine_Id","disabled":true,"type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'AssembleWorkOrderList_Id',title:'装配工单明细表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'AssembleWorkOrder_Id',title:'转配工单',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'LevelPath',title:'层级编号',type:'string',width:220,align:'left',sort:true},
                       {field:'ProductCode',title:'产品编号',type:'string',sort:true,width:180,readonly:true,require:true,align:'left'},
                       {field:'ProductName',title:'产品名称',type:'string',sort:true,width:180,readonly:true,require:true,align:'left'},
                       {field:'ProductionSchedule',title:'生产进度',type:'string',width:300,readonly:true,align:'left'},
                       {field:'ProductStandard',title:'产品规格',type:'string',width:180,readonly:true,align:'left'},
                       {field:'ProductAttribute',title:'产品属性',type:'string',bind:{ key:'productAttr',data:[]},width:180,readonly:true,require:true,align:'left'},
                       {field:'Unit_Id',title:'单位',type:'int',bind:{ key:'unitList',data:[]},width:110,readonly:true,require:true,align:'left'},
                       {field:'UnitQty',title:'单位数量',type:'int',width:110,require:true,align:'left'},
                       {field:'Qty',title:'数量',type:'int',sort:true,width:110,require:true,align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',width:180,readonly:true,align:'left'},
                       {field:'Status',title:'状态',type:'string',bind:{ key:'workOrderStatus',data:[]},width:180,readonly:true,align:'left'},
                       {field:'FinishQty',title:'完成数',type:'int',width:110,readonly:true,align:'left'},
                       {field:'BadQty',title:'不良品数',type:'int',width:110,readonly:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',sort:true,width:110,align:'left',sort:true},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Product_Id',title:'产品ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProcessLine_Id',title:'工艺路线',type:'int',width:80,hidden:true,readonly:true,align:'left'},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "#detailCnName",
                table: "#detailTable",
                columns: [],
                sortName: "",
                key: ""
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
