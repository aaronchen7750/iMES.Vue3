<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/custom/Base_PrintCatalog.js此处编写
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
    import extend from "@/extension/custom/custom/Base_PrintCatalog.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'CatalogId',
                footer: "Foots",
                cnName: '打印模版分类',
                name: 'custom/Base_PrintCatalog',
                url: "/Base_PrintCatalog/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"CatalogName":"","CatalogCode":"","ParentId":[]});
            const editFormOptions = ref([[{"title":"分类名称","required":true,"field":"CatalogName","type":"text"}],
                              [{"title":"分类编码","required":true,"field":"CatalogCode","type":"text"}],
                              [{"dataKey":"printTemplateCatalog","data":[],"title":"上级分类","field":"ParentId","type":"cascader"}]]);
            const searchFormFields = ref({"CatalogName":"","CatalogCode":"","ParentId":[]});
            const searchFormOptions = ref([[{"title":"分类名称","field":"CatalogName","type":"like"},{"title":"分类编码","field":"CatalogCode","type":"like"},{"dataKey":"printTemplateCatalog","data":[],"title":"上级分类","field":"ParentId","type":"cascader"}]]);
            const columns = ref([{field:'CatalogId',title:'打印模板分类主键ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'CatalogName',title:'分类名称',type:'string',link:true,sort:true,width:120,require:true,align:'left',sort:true},
                       {field:'CatalogCode',title:'分类编码',type:'string',width:120,require:true,align:'left'},
                       {field:'ParentId',title:'上级分类',type:'guid',bind:{ key:'printTemplateCatalog',data:[]},width:110,align:'left'},
                       {field:'LevelPath',title:'层级',type:'int',width:110,require:true,align:'left'},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true}]);
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
