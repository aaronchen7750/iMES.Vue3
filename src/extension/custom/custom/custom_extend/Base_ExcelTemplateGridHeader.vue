<template>
  <div>
    <!-- 模版编辑说明 -->
    <mes-box :lazy="true" v-model="model.box" title="模版编辑说明" :height="640" :width="900" :padding="10">
      <div>
        <el-alert title="大家可以参考演示站的模版进行模版编辑导出测试。" type="success" :show-icon="true" :closable="false"></el-alert>
        <el-tabs type="border-card" style="height: 558px;margin-top:10px;">
          <el-tab-pane>
            <template #label>销售订单</template>
            <br>
            <h3>单据头：</h3>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;单据编号：{{SalesOrderCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{CreateDate}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;明细合计：{{Total}}</div>
            <div style="margin-top:10px;" v-pre>
              &nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：{{Remark}}</div>
            <br>
            <h3>单据体：</h3>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品名称：{{detail.ProductName}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品编号：{{detail.ProductCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品规格：{{detail.ProductStandard}}</div>
            <div style="margin-top:10px;" v-pre>
              &nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：{{detail.Qty}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;工单编号：{{detail.WorkOrderCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;完成数量：{{detail.FinishQty}}</div>
          </el-tab-pane>
          <el-tab-pane :lazy="true" label="生产计划">
            <br>
            <h3>单据头：</h3>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;单据编号：{{ProductPlanCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{CreateDate}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;明细合计：{{Total}}</div>
            <div style="margin-top:10px;" v-pre>
              &nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：{{Remark}}</div>
            <br>
            <h3>单据体：</h3>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品名称：{{detail.ProductName}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品编号：{{detail.ProductCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品规格：{{detail.ProductStandard}}</div>
            <div style="margin-top:10px;" v-pre>
              &nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：{{detail.Qty}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;工单编号：{{detail.WorkOrderCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;完成数量：{{detail.FinishQty}}</div>

          </el-tab-pane>
          <el-tab-pane :lazy="true" label="装配工单"> <br>
            <h3>单据头：</h3>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;单据编号：{{AssembleWorkOrderCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;工单数量：{{WorkOrderQty}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{CreateDate}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;明细合计：{{Total}}</div>
            <div style="margin-top:10px;" v-pre>
              &nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：{{Remark}}</div>
            <br>
            <h3>单据体：</h3>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品名称：{{detail.ProductName}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品编号：{{detail.ProductCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;产品规格：{{detail.ProductStandard}}</div>
            <div style="margin-top:10px;" v-pre>
              &nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：{{detail.Qty}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;工单编号：{{detail.WorkOrderCode}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;完成数量：{{detail.FinishQty}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;单位数量：{{detail.UnitQty}}</div>
            <div style="margin-top:10px;" v-pre>&nbsp;&nbsp;&nbsp;&nbsp;缺陷数量：{{detail.BadQty}}</div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </mes-box>
  </div>
</template>
<script>
  import MesBox from "@/components/basic/MesBox.vue";
  export default {
    components: { "mes-box": MesBox },
    methods: {},
    data() {
      return {
        model: {
          box: false
        },
      };
    },
    methods: {
      //弹出框
      open() {
        this.model.box = true;
      },
    },
  };
</script>