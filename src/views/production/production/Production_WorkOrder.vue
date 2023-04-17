<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/production/production/Production_WorkOrder.js此处编写
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
    import extend from "@/extension/production/production/Production_WorkOrder.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'WorkOrder_Id',
                footer: "Foots",
                cnName: '工单',
                name: 'production/Production_WorkOrder',
                url: "/Production_WorkOrder/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"WorkOrderCode":"","Product_Id":"","ProductName":"","ProductCode":"","ProductStandard":"","Unit_Id":"","PlanStartDate":"","PlanEndDate":"","PlanQty":"","Status":"","Remark":""});
            const editFormOptions = ref([[{"title":"工单编号","field":"WorkOrderCode"},
                               {"dataKey":"productList","data":[],"title":"产品","required":true,"field":"Product_Id","type":"select"},
                               {"title":"产品名称","required":true,"field":"ProductName","disabled":true,"type":"text"}],
                              [{"title":"产品规格","field":"ProductStandard","disabled":true,"type":"text"},
                               {"title":"产品编号","required":true,"field":"ProductCode","disabled":true,"type":"text"},
                               {"dataKey":"unitList","data":[],"title":"单位","required":true,"field":"Unit_Id","disabled":true,"type":"select"}],
                              [{"title":"计划数","required":true,"field":"PlanQty","type":"text"},
                               {"title":"计划开始时间","required":true,"field":"PlanStartDate","type":"datetime"},
                               {"title":"计划结束时间","required":true,"field":"PlanEndDate","type":"datetime"}],
                              [{"dataKey":"workOrderStatus","data":[],"title":"状态","required":true,"field":"Status","disabled":true,"colSize":4,"type":"radio"},
                               {"title":"备注","field":"Remark","colSize":4,"type":"textarea"}]]);
            const searchFormFields = ref({"WorkOrderCode":"","Product_Id":"","ProductCode":"","ProductName":"","Unit_Id":"","AssociatedForm":"","Status":"","PlanStartDate":"","PlanEndDate":"","ActualStartDate":"","ActualEndDate":"","CreateDate":""});
            const searchFormOptions = ref([[{"title":"工单编号","field":"WorkOrderCode","type":"like"},{"title":"产品编号","field":"ProductCode","type":"like"},{"title":"产品名称","field":"ProductName","type":"like"}],[{"dataKey":"productList","data":[],"title":"产品","field":"Product_Id","type":"select"},{"dataKey":"unitList","data":[],"title":"单位","field":"Unit_Id","type":"select"},{"title":"关联单据","field":"AssociatedForm","type":"like"}],[{"dataKey":"workOrderStatus","data":[],"title":"状态","field":"Status","type":"radio"},{"title":"计划开始时间","field":"PlanStartDate","type":"date"},{"title":"计划结束时间","field":"PlanEndDate","type":"date"}],[{"title":"实际开始时间","field":"ActualStartDate","type":"date"},{"title":"实际结束时间","field":"ActualEndDate","type":"date"},{"title":"创建时间","field":"CreateDate","type":"date"}]]);
            const columns = ref([{field:'WorkOrder_Id',title:'工单主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',link:true,sort:true,width:250,align:'left',sort:true},
                       {field:'Product_Id',title:'产品',type:'int',bind:{ key:'productList',data:[]},width:80,require:true,align:'left'},
                       {field:'ProductCode',title:'产品编号',type:'string',sort:true,width:250,readonly:true,require:true,align:'left'},
                       {field:'ProductName',title:'产品名称',type:'string',sort:true,width:180,readonly:true,require:true,align:'left'},
                       {field:'ProductStandard',title:'产品规格',type:'string',width:180,readonly:true,align:'left'},
                       {field:'Unit_Id',title:'单位',type:'int',bind:{ key:'unitList',data:[]},width:110,readonly:true,require:true,align:'left'},
                       {field:'AssociatedForm',title:'关联单据',type:'string',width:250,align:'left'},
                       {field:'Status',title:'状态',type:'string',bind:{ key:'workOrderStatus',data:[]},width:180,readonly:true,require:true,align:'left'},
                       {field:'PlanStartDate',title:'计划开始时间',type:'datetime',sort:true,width:200,require:true,align:'left',sort:true},
                       {field:'PlanEndDate',title:'计划结束时间',type:'datetime',sort:true,width:200,require:true,align:'left',sort:true},
                       {field:'PlanQty',title:'计划数',type:'int',sort:true,width:110,require:true,align:'left'},
                       {field:'RealQty',title:'实际数',type:'int',width:110,require:true,align:'left'},
                       {field:'GoodQty',title:'良品数',type:'int',width:110,require:true,align:'left'},
                       {field:'NoGoodQty',title:'不良品数',type:'int',width:110,require:true,align:'left'},
                       {field:'ReportTime',title:'报工时长',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ProductionSchedule',title:'生产进度',type:'string',width:180,align:'left'},
                       {field:'ActualStartDate',title:'实际开始时间',type:'datetime',sort:true,width:200,align:'left',sort:true},
                       {field:'ActualEndDate',title:'实际结束时间',type:'datetime',width:200,align:'left',sort:true},
                       {field:'Remark',title:'备注',type:'string',width:220,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',sort:true,width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'FromType',title:'来源类型',type:'string',width:220,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "任务",
                table: "Production_WorkOrderList",
                columns: [{field:'WorkOrderList_Id',title:'任务主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',width:220,hidden:true,readonly:true,edit:{type:'text'},align:'left'},
                       {field:'WorkOrder_Id',title:'工单',type:'int',bind:{ key:'workOrderList',data:[]},width:250,hidden:true,readonly:true,edit:{type:'select'},require:true,align:'left'},
                       {field:'ProcessName',title:'工序名称',type:'string',link:true,width:180,readonly:true,edit:{type:''},require:true,align:'left',sort:true},
                       {field:'ProcessCode',title:'工序编号',type:'string',width:180,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'SubmitWorkLimit',title:'报工权限',type:'string',bind:{ key:'usersWithAll',data:[]},width:180,edit:{type:'selectList'},require:true,align:'left'},
                       {field:'SubmitWorkMatch',title:'报工数配比',type:'decimal',width:110,edit:{type:'number'},require:true,align:'left'},
                       {field:'DefectItem',title:'不良品项列表',type:'string',bind:{ key:'DefectItem',data:[]},width:220,edit:{type:'selectList'},align:'left'},
                       {field:'DistributionList',title:'分配列表',type:'string',bind:{ key:'users',data:[]},width:220,edit:{type:'selectList'},align:'left'},
                       {field:'PlanStartDate',title:'计划开始时间',type:'datetime',width:200,edit:{type:'datetime'},require:true,align:'left',sort:true},
                       {field:'PlanEndDate',title:'计划结束时间',type:'datetime',width:200,edit:{type:'datetime'},require:true,align:'left',sort:true},
                       {field:'PlanQty',title:'计划数',type:'int',width:110,edit:{type:'number'},require:true,align:'left'},
                       {field:'GoodQty',title:'良品数',type:'int',width:110,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'NoGoodQty',title:'不良品数',type:'int',width:110,readonly:true,edit:{type:''},require:true,align:'left'},
                       {field:'ActualStartDate',title:'实际开始时间',type:'datetime',width:200,readonly:true,edit:{type:'datetime'},align:'left',sort:true},
                       {field:'ActualEndDate',title:'实际结束时间',type:'datetime',width:200,readonly:true,edit:{type:'datetime'},align:'left',sort:true},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Process_Id',title:'工序',type:'int',bind:{ key:'process',data:[]},width:80,hidden:true,readonly:true,edit:{type:'select'},require:true,align:'left'}],
                sortName: "CreateDate",
                key: "WorkOrderList_Id"
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
