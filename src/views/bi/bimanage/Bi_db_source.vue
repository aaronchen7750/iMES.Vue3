<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/bi/bimanage/Bi_db_source.js此处编写
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
    import extend from "@/extension/bi/bimanage/Bi_db_source.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '数据源管理',
                name: 'bimanage/Bi_db_source',
                url: "/Bi_db_source/",
                sortName: "ID"
            });
            const editFormFields = ref({"Name":"","DBType":"","DBIP":"","Port":"","DBName":"","DBUser":"","DBPwd":""});
            const editFormOptions = ref([[{"title":"名称","required":true,"field":"Name"}],
                              [{"dataKey":"DBType","data":[],"title":"数据连接类型","required":true,"field":"DBType","type":"select"}],
                              [{"title":"数据库地址","required":true,"field":"DBIP"}],
                              [{"title":"端口","required":true,"field":"Port"}],
                              [{"title":"数据库","required":true,"field":"DBName"}],
                              [{"title":"用户名","required":true,"field":"DBUser"}],
                              [{"title":"密码","required":true,"field":"DBPwd","type":"password"}]]);
            const searchFormFields = ref({"Name":"","DBType":"","DBName":""});
            const searchFormOptions = ref([[{"title":"名称","field":"Name","type":"like"}],[{"dataKey":"DBType","data":[],"title":"数据连接类型","field":"DBType","type":"select"}],[{"title":"数据库","field":"DBName","type":"like"}]]);
            const columns = ref([{field:'ID',title:'ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'Name',title:'名称',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'DBType',title:'数据连接类型',type:'string',bind:{ key:'DBType',data:[]},width:110,require:true,align:'left'},
                       {field:'DBIP',title:'数据库地址',type:'string',width:110,require:true,align:'left'},
                       {field:'Port',title:'端口',type:'string',width:110,require:true,align:'left'},
                       {field:'DBName',title:'数据库',type:'string',width:110,require:true,align:'left'},
                       {field:'Schema',title:'架构',type:'string',width:110,hidden:true,align:'left'},
                       {field:'DBUser',title:'用户名',type:'string',width:110,require:true,align:'left'},
                       {field:'DBPwd',title:'密码',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'Attach',title:'Attach',type:'string',width:110,hidden:true,align:'left'},
                       {field:'CRUser',title:'CRUser',type:'string',width:110,hidden:true,align:'left'},
                       {field:'CRDate',title:'CRDate',type:'datetime',width:110,hidden:true,align:'left',sort:true}]);
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
