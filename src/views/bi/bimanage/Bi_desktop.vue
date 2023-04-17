<!--
*Author：COCO
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/bi/bimanage/Bi_desktop.js此处编写
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
    import extend from "@/extension/bi/bimanage/Bi_desktop.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'DesktopId',
                footer: "Foots",
                cnName: '主页设置',
                name: 'bimanage/Bi_desktop',
                url: "/Bi_desktop/",
                sortName: "DesktopId"
            });
            const editFormFields = ref({"ViewID":"","IsDefault":"","Remark":""});
            const editFormOptions = ref([[{"dataKey":"YBPList","data":[],"title":"仪表盘","required":true,"field":"ViewID","type":"select"}],
                              [{"dataKey":"cq","data":[],"title":"默认","field":"IsDefault","type":"switch"}],
                              [{"title":"备注","field":"Remark","type":"textarea"}]]);
            const searchFormFields = ref({"Remark":""});
            const searchFormOptions = ref([[{"title":"备注","field":"Remark","type":"like"}]]);
            const columns = ref([{field:'DesktopId',title:'主页设置ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'IsDefault',title:'默认',type:'int',bind:{ key:'cq',data:[]},width:110,align:'left',sort:true},
                       {field:'ViewID',title:'仪表盘',type:'int',bind:{ key:'YBPList',data:[]},width:110,require:true,align:'left'},
                       {field:'Remark',title:'备注',type:'string',width:180,align:'left'},
                       {field:'CreateID',title:'创建人编号',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',sort:true,width:110,align:'left',sort:true},
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
