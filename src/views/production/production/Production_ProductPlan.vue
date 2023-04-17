<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_ProductPlan.js此处编写
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
    import extend from "@/extension/production/production/Production_ProductPlan.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ProductPlan_Id',
                footer: "Foots",
                cnName: '生产计划',
                name: 'production/Production_ProductPlan',
                url: "/Production_ProductPlan/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"ProductPlanCode":"","Remark":""});
            const editFormOptions = ref([[{"title":"单据编号","field":"ProductPlanCode","type":"text"}],
                              [{"title":"备注","field":"Remark","type":"textarea"}]]);
            const searchFormFields = ref({"ProductPlanCode":""});
            const searchFormOptions = ref([[{"title":"单据编号","field":"ProductPlanCode","type":"like"}]]);
            const columns = ref([{field:'ProductPlan_Id',title:'生产计划主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProductPlanCode',title:'单据编号',type:'string',link:true,sort:true,width:180,align:'left',sort:true},
                       {field:'Remark',title:'备注',type:'string',width:220,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "生产计划-产品明细",
                table: "Production_ProductPlanList",
                columns: [{field:'ProductPlanList_Id',title:'销售订单产品明细表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProductPlan_Id',title:'生产计划',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
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
                sortName: "ProductPlanList_Id",
                key: "ProductPlanList_Id"
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
