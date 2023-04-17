<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_ReportWorkOrder.js此处编写
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
    import extend from "@/extension/production/production/Production_ReportWorkOrder.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ReportWorkOrder_Id',
                footer: "Foots",
                cnName: '报工',
                name: 'production/Production_ReportWorkOrder',
                url: "/Production_ReportWorkOrder/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"WorkOrder_Id":"","Process_Id":"","Product_Id":"","ProductCode":"","ProductName":"","ProductStandard":"","ProcessStatus":"","ProductUser":"","ReportQty":"","Unit_Id":"","GoodQty":"","NoGoodQty":"","ProcessProgress":"","StartDate":"","EndDate":"","ReoportDurationHour":"","ReoportDurationMinute":"","RateStandard":"","StandardProgress":"","ActualProgress":"","PriceType":"","UnitPrice":"","GuessPrice":"","ApproveStatus":"","ApproveUser":"","ReportTime":""});
            const editFormOptions = ref([[{"dataKey":"workOrderList","data":[],"title":"工单","required":true,"field":"WorkOrder_Id","type":"select"},
                               {"dataKey":"process","data":[],"title":"工序名称","required":true,"field":"Process_Id","type":"select"},
                               {"dataKey":"productList","data":[],"title":"产品","required":true,"field":"Product_Id","disabled":true,"type":"select"}],
                              [{"title":"产品编号","required":true,"field":"ProductCode","disabled":true,"type":"text"},
                               {"title":"产品名称","required":true,"field":"ProductName","disabled":true,"type":"text"},
                               {"title":"产品规格","field":"ProductStandard","disabled":true,"type":"text"}],
                              [{"title":"报工数","field":"ReportQty","type":"number"},
                               {"dataKey":"users","data":[],"title":"生产人员","required":true,"field":"ProductUser","type":"select"},
                               {"dataKey":"productStatus","data":[],"title":"工序状态","field":"ProcessStatus","type":"radio"}],
                              [{"dataKey":"unitList","data":[],"title":"单位","field":"Unit_Id","type":"select"},
                               {"title":"良品数","field":"GoodQty","type":"text"},
                               {"title":"不良品数","field":"NoGoodQty","type":"number"}],
                              [{"title":"工序进度","field":"ProcessProgress","disabled":true,"type":"text"},
                               {"title":"开始时间","field":"StartDate","type":"datetime"},
                               {"title":"结束时间","field":"EndDate","type":"datetime"}],
                              [{"title":"报工时长","field":"ReoportDurationHour","type":"number"},
                               {"title":"","field":"ReoportDurationMinute","type":"number"},
                               {"title":"达标率","field":"RateStandard","disabled":true,"type":"text"}],
                              [{"title":"标准效率","field":"StandardProgress","colSize":6,"type":"text"},
                               {"title":"实际效率","field":"ActualProgress","colSize":6,"type":"text"}],
                              [{"dataKey":"PriceType","data":[],"title":"计价方式","field":"PriceType","type":"radio"},
                               {"title":"工资单价","field":"UnitPrice","type":"text"},
                               {"title":"预计工资","field":"GuessPrice","type":"text"}],
                              [{"dataKey":"ApproveStatus","data":[],"title":"审批状态","field":"ApproveStatus","type":"radio"},
                               {"title":"审批人","field":"ApproveUser","disabled":true,"type":"text"},
                               {"title":"报工时间","field":"ReportTime","type":"datetime"}]]);
            const searchFormFields = ref({"WorkOrder_Id":"","Process_Id":"","ProductCode":"","ProductName":"","ProcessStatus":"","ProductUser":"","ReportQty":"","Unit_Id":"","GoodQty":"","StartDate":"","EndDate":""});
            const searchFormOptions = ref([[{"dataKey":"process","data":[],"title":"工序名称","field":"Process_Id","type":"select"},{"title":"产品编号","field":"ProductCode","type":"like"},{"title":"产品名称","field":"ProductName","type":"like"}],[{"dataKey":"productStatus","data":[],"title":"工序状态","field":"ProcessStatus","type":"radio"},{"dataKey":"users","data":[],"title":"生产人员","field":"ProductUser","type":"select"},{"title":"报工数","field":"ReportQty","type":"number"}],[{"dataKey":"workOrderList","data":[],"title":"工单","field":"WorkOrder_Id","type":"select"},{"dataKey":"unitList","data":[],"title":"单位","field":"Unit_Id","type":"select"},{"title":"良品数","field":"GoodQty","type":"text"}],[{"title":"开始时间","field":"StartDate","type":"date"},{"title":"结束时间","field":"EndDate","type":"date"}]]);
            const columns = ref([{field:'ReportWorkOrder_Id',title:'报工主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'WorkOrder_Id',title:'工单',type:'string',bind:{ key:'workOrderList',data:[]},width:220,require:true,align:'left',sort:true},
                       {field:'Process_Id',title:'工序名称',type:'int',bind:{ key:'process',data:[]},width:80,require:true,align:'left'},
                       {field:'Product_Id',title:'产品',type:'int',bind:{ key:'productList',data:[]},width:110,readonly:true,require:true,align:'left'},
                       {field:'ProductCode',title:'产品编号',type:'string',link:true,width:250,readonly:true,require:true,align:'left'},
                       {field:'ProductName',title:'产品名称',type:'string',width:180,readonly:true,require:true,align:'left'},
                       {field:'ProductStandard',title:'产品规格',type:'string',width:180,readonly:true,align:'left'},
                       {field:'ProcessStatus',title:'工序状态',type:'string',bind:{ key:'productStatus',data:[]},width:180,align:'left'},
                       {field:'ProductUser',title:'生产人员',type:'string',bind:{ key:'users',data:[]},width:180,require:true,align:'left'},
                       {field:'ReportQty',title:'报工数',type:'int',width:110,align:'left'},
                       {field:'Unit_Id',title:'单位',type:'int',bind:{ key:'unitList',data:[]},width:110,align:'left'},
                       {field:'GoodQty',title:'良品数',type:'int',width:110,align:'left'},
                       {field:'NoGoodQty',title:'不良品数',type:'int',width:110,align:'left'},
                       {field:'ProcessProgress',title:'工序进度',type:'string',width:180,readonly:true,align:'left'},
                       {field:'StartDate',title:'开始时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'EndDate',title:'结束时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ReoportDurationHour',title:'报工时长',type:'int',width:110,align:'left'},
                       {field:'ReoportDurationMinute',title:'ReoportDurationMinute',type:'int',width:110,align:'left'},
                       {field:'StandardProgress',title:'标准效率',type:'string',width:180,align:'left'},
                       {field:'ActualProgress',title:'实际效率',type:'string',width:180,align:'left'},
                       {field:'RateStandard',title:'达标率',type:'string',width:180,readonly:true,align:'left'},
                       {field:'PriceType',title:'计价方式',type:'int',bind:{ key:'PriceType',data:[]},width:110,align:'left'},
                       {field:'UnitPrice',title:'工资单价',type:'decimal',width:110,align:'left'},
                       {field:'GuessPrice',title:'预计工资',type:'decimal',width:110,align:'left'},
                       {field:'ApproveStatus',title:'审批状态',type:'int',bind:{ key:'ApproveStatus',data:[]},width:110,align:'left'},
                       {field:'ApproveUser',title:'审批人',type:'string',width:180,readonly:true,align:'left'},
                       {field:'ReportTime',title:'报工时间',type:'datetime',width:200,align:'left',sort:true},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:200,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:200,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "报工-不良品项",
                table: "Production_ReportWorkOrderList",
                columns: [{field:'ReportWorkOrderList_Id',title:'不良品项主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ReportWorkOrder_Id',title:'报工',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'DefectItem',title:'不良品项',type:'string',bind:{ key:'DefectItem',data:[]},width:180,edit:{type:'select'},require:true,align:'left',sort:true},
                       {field:'Qty',title:'数量',type:'int',width:110,edit:{type:'number'},require:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'}],
                sortName: "CreateDate",
                key: "ReportWorkOrderList_Id"
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
