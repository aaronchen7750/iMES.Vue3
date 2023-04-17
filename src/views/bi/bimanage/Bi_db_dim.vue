<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/bi/bimanage/Bi_db_dim.js此处编写
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
    import extend from "@/extension/bi/bimanage/Bi_db_dim.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '数据集信息',
                name: 'bimanage/Bi_db_dim',
                url: "/Bi_db_dim/",
                sortName: "ID"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'ID',title:'ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'STID',title:'数据集ID',type:'int',width:110,align:'left',sort:true},
                       {field:'Name',title:'字段名称',type:'string',link:true,width:110,align:'left'},
                       {field:'ColumnName',title:'字段别名',type:'string',width:110,align:'left'},
                       {field:'ColumnType',title:'字段类型',type:'string',width:110,align:'left'},
                       {field:'Dimension',title:'1维度，2度量',type:'string',width:110,align:'left'},
                       {field:'CRUser',title:'CRUser',type:'string',width:110,align:'left'},
                       {field:'CRDate',title:'CRDate',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ColumnSource',title:'原字段',type:'string',width:110,align:'left'}]);
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
