<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/bi/bimanage/Bi_db_set.js此处编写
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
    import extend from "@/extension/bi/bimanage/Bi_db_set.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '数据集管理',
                name: 'bimanage/Bi_db_set',
                url: "/Bi_db_set/",
                sortName: "ID"
            });
            const editFormFields = ref({"SID":"","Name":""});
            const editFormOptions = ref([[{"dataKey":"DBSource","data":[],"title":"数据源","field":"SID","type":"select"}],
                              [{"title":"数据集名称","field":"Name","type":"text"}]]);
            const searchFormFields = ref({"SID":"","Name":""});
            const searchFormOptions = ref([[{"dataKey":"DBSource","data":[],"title":"数据源","field":"SID","type":"select"},{"title":"数据集名称","field":"Name","type":"like"}]]);
            const columns = ref([{field:'ID',title:'ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'SID',title:'数据源',type:'int',bind:{ key:'DBSource',data:[]},width:110,align:'left',sort:true},
                       {field:'Name',title:'数据集名称',type:'string',width:110,align:'left'},
                       {field:'SName',title:'对应数据源表名',type:'string',width:110,hidden:true,align:'left'},
                       {field:'CRUser',title:'创建人',type:'string',width:110,align:'left'},
                       {field:'CRDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'UPDate',title:'UPDate',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'Type',title:'数据集类型',type:'string',width:220,hidden:true,align:'left'},
                       {field:'Option',title:'数据集配置',type:'string',width:110,hidden:true,align:'left'},
                       {field:'DSQL',title:'SQL语句',type:'string',width:110,hidden:true,align:'left'}]);
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
