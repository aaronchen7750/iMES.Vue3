<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/custom/custom/Sys_Table_Extend.js此处编写
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
    import extend from "@/extension/custom/custom/Sys_Table_Extend.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'TableEx_Id',
                footer: "Foots",
                cnName: '实体扩展字段',
                name: 'custom/Sys_Table_Extend',
                url: "/Sys_Table_Extend/",
                sortName: "TableEx_Id"
            });
            const editFormFields = ref({"TableName":"","FieldName":"","FieldType":"","FieldAttr":[],"DefaultValue":"","DataDic":"","GuideWords":""});
            const editFormOptions = ref([[{"dataKey":"customTable","data":[],"title":"表名","required":true,"field":"TableName","type":"select"}],
                              [{"title":"字段名称","required":true,"field":"FieldName","type":"text"}],
                              [{"dataKey":"fieldType","data":[],"title":"字段类型","required":true,"field":"FieldType","type":"select"}],
                              [{"dataKey":"fieldAttr","data":[],"title":"字段属性","field":"FieldAttr","type":"checkbox"}],
                              [{"title":"默认值","field":"DefaultValue"}],
                              [{"dataKey":"dataDic","data":[],"title":"数据字典","field":"DataDic","type":"select"}],
                              [{"title":"引导文字","field":"GuideWords"}]]);
            const searchFormFields = ref({"TableName":[],"FieldName":"","FieldType":"","FieldAttr":[],"GuideWords":""});
            const searchFormOptions = ref([[{"dataKey":"customTable","data":[],"title":"表名","field":"TableName","type":"selectList"},{"title":"字段名称","field":"FieldName","type":"like"},{"dataKey":"fieldType","data":[],"title":"字段类型","field":"FieldType","type":"select"}],[{"dataKey":"fieldAttr","data":[],"title":"字段属性","field":"FieldAttr","type":"checkbox"},{"title":"引导文字","field":"GuideWords","type":"like"}]]);
            const columns = ref([{field:'TableEx_Id',title:'扩展表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'TableName',title:'表名',type:'string',bind:{ key:'customTable',data:[]},sort:true,width:180,require:true,align:'left',sort:true},
                       {field:'FieldName',title:'字段名称',type:'string',link:true,width:180,require:true,align:'left'},
                       {field:'FieldType',title:'字段类型',type:'string',bind:{ key:'fieldType',data:[]},width:180,require:true,align:'left'},
                       {field:'FieldCode',title:'字段编码',type:'string',width:220,hidden:true,readonly:true,align:'left'},
                       {field:'DataDic',title:'数据字典',type:'string',bind:{ key:'dataDic',data:[]},width:220,align:'left'},
                       {field:'FieldAttr',title:'字段属性',type:'string',bind:{ key:'fieldAttr',data:[]},width:110,align:'left'},
                       {field:'GuideWords',title:'引导文字',type:'string',width:220,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'修改人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'DefaultValue',title:'默认值',type:'string',width:220,align:'left'}]);
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
