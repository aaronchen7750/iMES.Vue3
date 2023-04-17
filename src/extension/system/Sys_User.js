import { ConsoleLogger } from "@microsoft/signalr/dist/esm/Utils";
import { stringifyStyle } from "@vue/shared";
import { defineAsyncComponent } from "vue";
import FileSaver from 'file-saver';
let extension = {
    components: { //动态扩充组件或组件路径
        //表单header、content、footer对应位置扩充的组件
        gridHeader: defineAsyncComponent(() =>
            import("./Sys_User/Sys_UserGridHeader.vue")),
        gridBody: '',
        gridFooter: '',
        //弹出框(修改、编辑、查看)header、content、footer对应位置扩充的组件
        modelHeader: '',
        modelBody: '',
        modelFooter: ''
    },
    text: "只能看到当前角色下的所有帐号",
    buttons: [], //扩展的按钮
    methods: { //事件扩展
        getNowTime() {
            let dt = new Date()
            var y = dt.getFullYear()
            var mt = (dt.getMonth() + 1).toString().padStart(2, '0')
            var day = dt.getDate().toString().padStart(2, '0')
            var h = dt.getHours().toString().padStart(2, '0')
            var m = dt.getMinutes().toString().padStart(2, '0')
            return y + mt + day + h + m
        },
        onInit() {
            //显示序号(默认隐藏)
            this.columnIndex = true;
            //在表单配置的第二行后，将MyComponent组件添加到表单中
            this.editFormOptions.splice(this.editFormOptions.length, 0, [{
                colSize: 12,
                render: (h) => {
                    let elem = <div style="padding-left:15px;margin-left:7px;height:35px;background-image: linear-gradient( 135deg ,#0cd7bd 10%,#50c3f7);">
                        <div style="color:#ffffff;font-weight: bold; font-size: 14px;">扩展字段</div>
                    </div>;
                    return (elem)

                }
            }])
            this.buttons.splice(5, 0, {  //也可以用push或者splice方法来修改buttons数组
                name: '导出PDF', //按钮名称
                icon: 'el-icon-printer', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
                type: 'warning', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
                onClick: function () {
                    let url = "/api/User/ExportPDF";
                    this.http.get(url, {}, '正在导出数据....').then(content => {
                        //window.location.href = "https://wechat.625sc.com:8891/PDF/User/" + content
                        var URL = this.http.webAddress + "/PDF/User/" + content // URL 为URL地址
                        FileSaver.saveAs(URL, content);
                    })

                }
            });
            //增加扩展字段 start
            this.http.get("/api/Sys_Table_Extend/getTableExtendField?tableName=" + "Sys_User", {}, true).then((result) => {
                let editFormObj = [];
                result.map(((item, index) => {
                    let fieldName = item.fieldName;
                    let fieldCode = item.fieldCode;
                    let tableEx_Id = item.tableEx_Id;
                    let fieldType = item.fieldType;
                    let dataDic = item.dataDic;
                    let data = [];
                    let isRequired = item.fieldAttr == null ? false : item.fieldAttr.includes("required");
                    let isReadyonly = item.fieldAttr == null ? false : item.fieldAttr.includes("readonly");
                    this.editFormFields[fieldCode] = "";
                    if (fieldType == "select" || fieldType == "switch" || fieldType == "checkbox" || fieldType == "selectList") {
                        editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
                            dataKey: dataDic,
                            data: [],
                            title: fieldName,
                            required: isRequired,
                            readonly: isReadyonly,
                            field: fieldCode,
                            type: fieldType
                        })
                        this.columns.push({
                            field: fieldCode,
                            title: fieldName,
                            type: 'string',
                            bind: { key: dataDic, data: [] },
                            width: 150,
                            require: isRequired,
                            readonly: isReadyonly,
                            align: 'left'
                        })
                    }
                    else if (fieldType == "img") {
                        editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
                            title: fieldName,
                            required: isRequired,
                            readonly: isReadyonly,
                            field: fieldCode,
                            type: fieldType
                        });
                        this.columns.push({
                            field: fieldCode,
                            title: fieldName,
                            type: fieldType,
                            width: 150,
                            require: isRequired,
                            readonly: isReadyonly,
                            align: 'left'
                        })
                    }
                    else if (fieldType == "textarea" || fieldType == "text" || fieldType == "number" || fieldType == "decimal" || fieldType == "phone") {
                        editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
                            title: fieldName,
                            required: isRequired,
                            readonly: isReadyonly,
                            field: fieldCode,
                            type: fieldType
                        });
                        this.columns.push({
                            field: fieldCode,
                            title: fieldName,
                            type: "string",
                            width: 150,
                            require: isRequired,
                            readonly: isReadyonly,
                            align: 'left'
                        })
                    }
                    else if (fieldType == "date" || fieldType == "datetime") {
                        editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
                            title: fieldName,
                            required: isRequired,
                            readonly: isReadyonly,
                            field: fieldCode,
                            type: fieldType
                        });
                        this.columns.push({
                            field: fieldCode,
                            title: fieldName,
                            type: fieldType,
                            width: 150,
                            require: isRequired,
                            readonly: isReadyonly,
                            align: 'left'
                        })
                    }
                    else {
                        editFormObj.push({ //往新数组对象中添加新的属性 属性名对应属性值
                            title: fieldName,
                            required: isRequired,
                            readonly: isReadyonly,
                            field: fieldCode,
                            type: "text"
                        });
                        this.columns.push({
                            field: fieldCode,
                            title: fieldName,
                            type: "string",
                            width: 150,
                            require: isRequired,
                            readonly: isReadyonly,
                            align: 'left'
                        })
                    }
                    if ((index + 1) % 2 == 0 || (index + 1) == result.length) {
                        this.editFormOptions.push(editFormObj);
                        editFormObj = [];
                    }
                }))
                //刷新字典数据源
                this.initDicKeys();
            });
            //增加扩展字段 end
            this.boxOptions.height = 530;
            this.columns.push({
                title: '操作',
                hidden: false,
                align: "center",
                fixed: 'right',
                width: 120,
                render: (h, { row, column, index }) => {
                    return h(
                        "div", { style: { 'font-size': '13px', 'cursor': 'pointer', 'color': '#409eff' } }, [
                        h(
                            "a", {
                            style: { 'margin-right': '15px' },
                            onClick: (e) => {
                                e.stopPropagation()
                                this.$refs.gridHeader.open(row);
                            }
                        }, "修改密码"
                        ),
                        h(
                            "a", {
                            style: {},
                            onClick: (e) => {
                                e.stopPropagation()
                                this.edit(row);
                            }
                        },
                            "编辑"
                        ),
                    ])
                }
            })


            //点击弹窗后，增加扩展字段

        },
        searchAfter(result) { //查询ViewGird表数据后param查询参数,result回返查询的结果
            var that = this;
            that.http.ajax({
                url: "api/Sys_User_ExtendData/getExtendDataByUserID",
                json: true,
                success: function (data) {
                    if (data.length > 0) {
                        result.forEach(function (ele, index) {
                            var dataDefect = data.filter(item => item.User_Id == ele.User_Id);
                            dataDefect.forEach(function (dataEle, dataIndex) {
                                result[index][dataEle.FieldCode] = dataEle.FieldValue
                            })
                        })
                    }
                },
                type: "get",
                async: false,
            });
            return true;
        },
        nodeClick(catalogIds, nodes, nodesList) {      //左边树节点点击事件
            //左边树节点的甩有子节点，用于查询数据
            this.nodesList = nodesList;
            this.catalogIds = catalogIds.join(',');
            //左侧树选中节点的所有父节点,用于新建时设置级联的默认值
            this.nodes = nodes;
            this.search();
        },
        onInited() { },
        addAfter(result) { //用户新建后，显示随机生成的密码
            if (!result.status) {
                return true;
            }
            //显示新建用户的密码
            //2020.08.28优化新建成后提示方式
            this.$confirm(result.message, '新建用户成功', {
                confirmButtonText: '确定',
                type: 'success',
                center: true
            }).then(() => { })

            this.boxModel = false;
            this.refresh();
            return false;
        },
        modelOpenAfter() {
            //点击弹出框后，如果是编辑状态，禁止编辑用户名，如果新建状态，将用户名字段设置为可编辑
            let isEDIT = this.currentAction == this.const.EDIT;
            this.editFormOptions.forEach(item => {
                item.forEach(x => {
                    if (x.field == "UserName") {
                        x.disabled = isEDIT;
                    }
                })
                //不是新建，性别默认值设置为男
                if (!isEDIT) {
                    this.editFormFields.Gender = "0";
                }
            })
            this.http.get("/api/Sys_Table_Extend/getTableExtendField?tableName=" + "Sys_User", {}, true).then((result) => {
                let editFormObj = [];
                result.map(((item, index) => {
                  let fieldName = item.fieldName;
                  let fieldCode = item.fieldCode;
                  let tableEx_Id = item.tableEx_Id;
                  let fieldType = item.fieldType;
                  let dataDic = item.dataDic;
                  let fieldAttr = item.fieldAttr;
                  let guideWords = item.guideWords;
                  let defaultValue = item.defaultValue;
                  this.editFormOptions.forEach(item => {
                    item.forEach(x => {
                      //如果是编辑设置为只读
                      if (x.field == fieldCode && guideWords != "") {
                        x.placeholder = guideWords;
                      }
                      if (this.currentAction == 'Add' && x.field == fieldCode && defaultValue != "") {
                        this.editFormFields[fieldCode] = defaultValue;
                      }
                    })
                  })
                }))
                //刷新字典数据源
                this.initDicKeys();
              });
        },
        addBefore(formData) { //弹出框新建或编辑功能点保存时可以将从表1，从表2的数据提到后台
            this.setFormData(formData);
            return true;
        },
        updateBefore(formData) { //编辑时功能点保存时可以将从表1，从表2的数据提到后台
            this.setFormData(formData);
            return true;
        },
        searchBefore(param) {
            //界面查询前,可以给param.wheres添加查询参数
            //返回false，则不会执行查询
            //查询前方法，如果是左边树选择了商品分类，直接查询商品分类
            if (this.catalogIds) {
                param.wheres.push({
                    name: 'Dept_Id',
                    value: this.catalogIds
                });
            }
            return true;
        },
        setFormData(formData) { //新建或编辑时，将从表1、2的数据提交到后台,见后台App_ReportPriceService的新建方法
            //后台从对象里直接取extra的值
            formData.extra = JSON.stringify(formData.mainData);
        },

    }
};
export default extension;