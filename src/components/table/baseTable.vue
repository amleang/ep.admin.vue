<template>
  <el-card class="box-card" style="min-width:700px;">
    <div v-if="isShowTitle" slot="header">
      <span>{{tableName}}</span>
      <div style="float: right;">
        <slot name="button">
          <base-opear></base-opear>
        </slot>
      </div>

    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="(item,index) in columns" :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
    </el-table>
    <el-pagination style="margin-top:20px;text-align:center;" :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  props: {
    isShowTitle: {
      type: Boolean,
      default: true
    },
    tableName: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

