<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/custom/Base_PrintTemplate.js此处编写
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
    import extend from "@/extension/custom/custom/Base_PrintTemplate.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'PrintTemplateId',
                footer: "Foots",
                cnName: '打印模版',
                name: 'custom/Base_PrintTemplate',
                url: "/Base_PrintTemplate/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"CatalogId":[],"TemplateName":"","StatusFlag":"","Remark":""});
            const editFormOptions = ref([[{"dataKey":"printTemplateCatalog","data":[],"title":"模板分类","field":"CatalogId","type":"cascader"}],
                              [{"title":"模版名称","required":true,"field":"TemplateName","type":"text"}],
                              [{"dataKey":"cq","data":[],"title":"默认","required":true,"field":"StatusFlag","type":"switch"}],
                              [{"title":"备注","field":"Remark","type":"textarea"}]]);
            const searchFormFields = ref({"CatalogId":[],"TemplateName":"","CreateDate":""});
            const searchFormOptions = ref([[{"dataKey":"printTemplateCatalog","data":[],"title":"模板分类","field":"CatalogId","type":"select"},{"title":"模版名称","field":"TemplateName","type":"like"},{"title":"创建时间","field":"CreateDate","type":"date"}]]);
            const columns = ref([{field:'PrintTemplateId',title:'打印模板主键ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'CatalogId',title:'模板分类',type:'guid',bind:{ key:'printTemplateCatalog',data:[]},sort:true,width:110,align:'left',sort:true},
                       {field:'TemplateName',title:'模版名称',type:'string',link:true,sort:true,width:180,require:true,align:'left'},
                       {field:'isDefault',title:'系统内置模版',type:'int',bind:{ key:'cq',data:[]},width:200,align:'left'},
                       {field:'StatusFlag',title:'默认',type:'int',bind:{ key:'cq',data:[]},width:110,require:true,align:'left'},
                       {field:'Remark',title:'备注',type:'string',width:180,align:'left'},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'TemplateContent',title:'模版内容',type:'string',width:110,hidden:true,align:'left'}]);
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
