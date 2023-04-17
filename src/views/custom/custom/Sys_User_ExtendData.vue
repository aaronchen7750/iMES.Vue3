<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/custom/Sys_User_ExtendData.js此处编写
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
    import extend from "@/extension/custom/custom/Sys_User_ExtendData.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'UserExData_Id',
                footer: "Foots",
                cnName: '用户扩展',
                name: 'custom/Sys_User_ExtendData',
                url: "/Sys_User_ExtendData/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"FieldValue":""});
            const editFormOptions = ref([[{"title":"字段值","field":"FieldValue","colSize":12,"type":"text"}]]);
            const searchFormFields = ref({"User_Id":[],"TableEx_Id":"","FieldValue":"","CreateDate":"","ModifyDate":""});
            const searchFormOptions = ref([[{"dataKey":"users","data":[],"title":"用户","field":"User_Id","type":"selectList"},{"dataKey":"userTableExtend","data":[],"title":"扩展字段","field":"TableEx_Id","type":"select"},{"title":"字段值","field":"FieldValue","type":"like"}],[{"title":"创建时间","field":"CreateDate","type":"date"},{"title":"修改时间","field":"ModifyDate","type":"date"}]]);
            const columns = ref([{field:'UserExData_Id',title:'用户扩展数据表主键ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'FieldName',title:'字段名称',type:'string',sort:true,width:220,hidden:true,align:'left'},
                       {field:'FieldCode',title:'字段编码',type:'string',width:220,hidden:true,align:'left'},
                       {field:'User_Id',title:'用户',type:'int',bind:{ key:'users',data:[]},sort:true,width:110,require:true,align:'left',sort:true},
                       {field:'TableEx_Id',title:'扩展字段',type:'int',bind:{ key:'userTableExtend',data:[]},width:110,require:true,align:'left'},
                       {field:'FieldValue',title:'字段值',type:'string',link:true,width:180,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',sort:true,width:110,align:'left',sort:true},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',sort:true,width:110,align:'left',sort:true},
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
