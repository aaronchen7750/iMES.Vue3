<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/production/production/Production_WorkOrderList.js此处编写
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
    import extend from "@/extension/production/production/Production_WorkOrderList.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'WorkOrderList_Id',
                footer: "Foots",
                cnName: '任务',
                name: 'production/Production_WorkOrderList',
                url: "/Production_WorkOrderList/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"WorkOrder_Id":"","ProcessName":"","Process_Id":"","ProcessCode":"","SubmitWorkLimit":[],"SubmitWorkMatch":"","PlanQty":"","GoodQty":"","NoGoodQty":"","DistributionList":[],"ActualStartDate":"","ActualEndDate":"","WorkOrderCode":"","PlanStartDate":"","PlanEndDate":"","DefectItem":[]});
            const editFormOptions = ref([[{"dataKey":"workOrderList","data":[],"title":"工单","required":true,"field":"WorkOrder_Id","disabled":true,"type":"select"},
                               {"title":"工序名称","required":true,"field":"ProcessName","disabled":true},
                               {"dataKey":"process","data":[],"title":"工序","required":true,"field":"Process_Id","disabled":true,"type":"select"}],
                              [{"title":"工序编号","required":true,"field":"ProcessCode","disabled":true},
                               {"dataKey":"usersWithAll","data":[],"title":"报工权限","required":true,"field":"SubmitWorkLimit","type":"selectList"},
                               {"title":"报工数配比","required":true,"field":"SubmitWorkMatch","type":"number"}],
                              [{"title":"计划数","required":true,"field":"PlanQty","type":"number"},
                               {"title":"良品数","required":true,"field":"GoodQty","disabled":true,"type":"number"},
                               {"title":"不良品数","required":true,"field":"NoGoodQty","disabled":true,"type":"number"}],
                              [{"dataKey":"users","data":[],"title":"分配列表","field":"DistributionList","type":"selectList"},
                               {"title":"实际开始时间","field":"ActualStartDate","disabled":true,"type":"datetime"},
                               {"title":"实际结束时间","field":"ActualEndDate","disabled":true,"type":"datetime"}],
                              [{"title":"工单编号","field":"WorkOrderCode","disabled":true,"type":"text"},
                               {"title":"计划开始时间","required":true,"field":"PlanStartDate","type":"datetime"},
                               {"title":"计划结束时间","required":true,"field":"PlanEndDate","type":"datetime"}],
                              [{"dataKey":"DefectItem","data":[],"title":"不良品项列表","field":"DefectItem","colSize":12,"type":"selectList"}]]);
            const searchFormFields = ref({"WorkOrderCode":"","ProcessName":"","ProcessCode":"","DefectItem":"","PlanStartDate":"","PlanEndDate":"","PlanQty":"","GoodQty":"","NoGoodQty":"","ActualStartDate":"","ActualEndDate":"","CreateDate":""});
            const searchFormOptions = ref([[{"title":"工单编号","field":"WorkOrderCode","type":"like"},{"title":"工序名称","field":"ProcessName","type":"like"},{"title":"工序编号","field":"ProcessCode","type":"like"}],[{"dataKey":"DefectItem","data":[],"title":"不良品项列表","field":"DefectItem","type":"select"},{"title":"计划开始时间","field":"PlanStartDate","type":"date"},{"title":"计划结束时间","field":"PlanEndDate","type":"date"}],[{"title":"计划数","field":"PlanQty","type":"number"},{"title":"良品数","field":"GoodQty","type":"number"},{"title":"不良品数","field":"NoGoodQty","type":"number"}],[{"title":"实际开始时间","field":"ActualStartDate","type":"date"},{"title":"实际结束时间","field":"ActualEndDate","type":"date"},{"title":"创建时间","field":"CreateDate","type":"date"}]]);
            const columns = ref([{field:'WorkOrderList_Id',title:'任务主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',width:220,hidden:true,readonly:true,align:'left'},
                       {field:'WorkOrder_Id',title:'工单',type:'int',bind:{ key:'workOrderList',data:[]},width:250,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProcessName',title:'工序名称',type:'string',link:true,width:180,readonly:true,require:true,align:'left',sort:true},
                       {field:'ProcessCode',title:'工序编号',type:'string',width:180,readonly:true,require:true,align:'left'},
                       {field:'SubmitWorkLimit',title:'报工权限',type:'string',bind:{ key:'usersWithAll',data:[]},width:180,require:true,align:'left'},
                       {field:'SubmitWorkMatch',title:'报工数配比',type:'decimal',width:110,require:true,align:'left'},
                       {field:'DefectItem',title:'不良品项列表',type:'string',bind:{ key:'DefectItem',data:[]},width:220,align:'left'},
                       {field:'DistributionList',title:'分配列表',type:'string',bind:{ key:'users',data:[]},width:220,align:'left'},
                       {field:'PlanStartDate',title:'计划开始时间',type:'datetime',width:200,require:true,align:'left',sort:true},
                       {field:'PlanEndDate',title:'计划结束时间',type:'datetime',width:200,require:true,align:'left',sort:true},
                       {field:'PlanQty',title:'计划数',type:'int',width:110,require:true,align:'left'},
                       {field:'GoodQty',title:'良品数',type:'int',width:110,readonly:true,require:true,align:'left'},
                       {field:'NoGoodQty',title:'不良品数',type:'int',width:110,readonly:true,require:true,align:'left'},
                       {field:'ActualStartDate',title:'实际开始时间',type:'datetime',width:200,readonly:true,align:'left',sort:true},
                       {field:'ActualEndDate',title:'实际结束时间',type:'datetime',width:200,readonly:true,align:'left',sort:true},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Process_Id',title:'工序',type:'int',bind:{ key:'process',data:[]},width:80,hidden:true,readonly:true,require:true,align:'left'}]);
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
