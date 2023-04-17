<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_ReportWorkOrderList.js此处编写
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
    import extend from "@/extension/production/production/Production_ReportWorkOrderList.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ReportWorkOrderList_Id',
                footer: "Foots",
                cnName: '报工-不良品项',
                name: 'production/Production_ReportWorkOrderList',
                url: "/Production_ReportWorkOrderList/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"DefectItem":"","Qty":""});
            const editFormOptions = ref([[{"dataKey":"DefectItem","data":[],"title":"不良品项","required":true,"field":"DefectItem","type":"select"},
                               {"title":"数量","required":true,"field":"Qty","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'ReportWorkOrderList_Id',title:'不良品项主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ReportWorkOrder_Id',title:'报工',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'DefectItem',title:'不良品项',type:'string',bind:{ key:'DefectItem',data:[]},width:180,require:true,align:'left',sort:true},
                       {field:'Qty',title:'数量',type:'int',width:110,require:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'}]);
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
