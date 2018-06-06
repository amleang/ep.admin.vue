<template>
  <el-card class="box-card table-form" style="min-width:700px;">
    <div v-if="isShowTitle" slot="header">
      <span>{{tableName}}</span>
      <div style="float: right;">
        <slot name="button">
          <base-opear :authority="authority"></base-opear>
        </slot>
      </div>

    </div>
    <el-table size="medium" :data="tableData" style="width: 100%">
      <el-table-column v-for="(item,index) in columns" :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
    </el-table>
    <el-pagination style="margin-top:20px;text-align:center;" :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  props: {
    /**是否显示标题 */
    isShowTitle: {
      type: Boolean,
      default: true
    },
    /**表单名称 */
    tableName: {
      type: String,
      default: ""
    },
    /**权限 */
    authority: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**表单数据 */
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**数据列 */
    columns: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

