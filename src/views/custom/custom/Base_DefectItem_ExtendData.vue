<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/custom/Base_DefectItem_ExtendData.js此处编写
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
    import extend from "@/extension/custom/custom/Base_DefectItem_ExtendData.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'DefectItemExData_Id',
                footer: "Foots",
                cnName: '不良品项扩展',
                name: 'custom/Base_DefectItem_ExtendData',
                url: "/Base_DefectItem_ExtendData/",
                sortName: "DefectItemExData_Id"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'DefectItemExData_Id',title:'不良品项扩展数据表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DefectItem_Id',title:'不良品项编号',type:'int',width:110,require:true,align:'left',sort:true},
                       {field:'TableEx_Id',title:'扩展字段编号',type:'int',width:110,require:true,align:'left'},
                       {field:'FieldName',title:'字段名称',type:'string',width:180,align:'left'},
                       {field:'FieldCode',title:'字段编码',type:'string',width:180,align:'left'},
                       {field:'FieldValue',title:'字段值',type:'string',width:180,align:'left'},
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
