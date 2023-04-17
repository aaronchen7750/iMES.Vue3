<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/bi/bimanage/Bi_db_ybp.js此处编写
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
    import extend from "@/extension/bi/bimanage/Bi_db_ybp.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '仪表盘',
                name: 'bimanage/Bi_db_ybp',
                url: "/Bi_db_ybp/",
                sortName: "ID"
            });
            const editFormFields = ref({"Name":"","YBType":""});
            const editFormOptions = ref([[{"title":"名称","required":true,"field":"Name","type":"text"}],
                              [{"title":"类型","field":"YBType","type":"text"}]]);
            const searchFormFields = ref({"Name":"","YBType":""});
            const searchFormOptions = ref([[{"title":"名称","field":"Name","type":"like"},{"title":"类型","field":"YBType","type":"like"}]]);
            const columns = ref([{field:'ID',title:'ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DimID',title:'数据集ID',type:'int',width:110,hidden:true,align:'left'},
                       {field:'Name',title:'名称',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'YBContent',title:'别名',type:'string',width:110,hidden:true,align:'left'},
                       {field:'YBType',title:'类型',type:'string',width:110,align:'left'},
                       {field:'YBOption',title:'1维度，2度量',type:'string',width:110,hidden:true,align:'left'},
                       {field:'CRUser',title:'创建人',type:'string',width:110,align:'left'},
                       {field:'CRDate',title:'创建时间',type:'datetime',width:110,align:'left',sort:true},
                       {field:'Remark',title:'原字段',type:'string',width:110,hidden:true,align:'left'},
                       {field:'YBSet',title:'YBSet',type:'string',width:110,hidden:true,align:'left'}]);
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
