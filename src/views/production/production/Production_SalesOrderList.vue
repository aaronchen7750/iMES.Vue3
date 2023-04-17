<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/production/Production_SalesOrderList.js此处编写
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
    import extend from "@/extension/production/production/Production_SalesOrderList.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'SalesOrderList_Id',
                footer: "Foots",
                cnName: '销售订单-产品明细',
                name: 'production/Production_SalesOrderList',
                url: "/Production_SalesOrderList/",
                sortName: "SalesOrderList_Id"
            });
            const editFormFields = ref({"ProductCode":"","ProductName":"","ProductStandard":"","WorkOrderCode":"","Qty":"","FinishQty":"","Product_Id":""});
            const editFormOptions = ref([[{"title":"产品规格","field":"ProductStandard","disabled":true},
                               {"title":"工单编号","field":"WorkOrderCode","disabled":true},
                               {"title":"完成数","field":"FinishQty","disabled":true,"type":"number"},
                               {"title":"产品编号","required":true,"field":"ProductCode","disabled":true},
                               {"title":"产品名称","required":true,"field":"ProductName","disabled":true},
                               {"title":"数量","required":true,"field":"Qty","type":"number"},
                               {"title":"产品ID","required":true,"field":"Product_Id","disabled":true,"type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'SalesOrderList_Id',title:'销售订单产品明细表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'SalesOrder_Id',title:'销售订单',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'ProductCode',title:'产品编号',type:'string',sort:true,width:180,readonly:true,require:true,align:'left',sort:true},
                       {field:'ProductName',title:'产品名称',type:'string',sort:true,width:180,readonly:true,require:true,align:'left'},
                       {field:'ProductStandard',title:'产品规格',type:'string',width:180,readonly:true,align:'left'},
                       {field:'WorkOrderCode',title:'工单编号',type:'string',width:180,readonly:true,align:'left'},
                       {field:'Qty',title:'数量',type:'int',width:110,require:true,align:'left'},
                       {field:'FinishQty',title:'完成数',type:'int',width:110,readonly:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Product_Id',title:'产品ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'}]);
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
