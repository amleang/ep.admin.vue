<template>
  <el-card class="box-card table-form" :style="`min-width:${minwidth}px;`">
    <div v-if="isShowTitle" slot="header">
      <span>{{tableName}}</span>
      <div style="float: right;">
        <slot name="button">
          <base-opear :authority="authority" @authorityhandle="authority_handle"></base-opear>
        </slot>
      </div>

    </div>
    <el-table ref="table" :data="tableData" :style=" `width: 100%;height:${tableHeight}px;`" :highlight-current-row="highlight" @current-change="handleCurrentChange">
      <el-table-column v-for="(item,index) in columns" :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
    </el-table>
    <el-pagination style="margin-top:20px;text-align:center;" :page-sizes="[10, 20, 30, 40,50]" :current-page="currPage" :page-size="pageSize" :layout="paginationlayout" :total="total">
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
    /**是否默认加载 */
    isDefalutLoad: {
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      default: ""
    },
    /**默认参数 */
    searchParams: {
      type: Object,
      default: function() {
        return { page: 1, size: 10 };
      }
    },
    highlight: {
      type: Boolean,
      default: true
    },
    tableHeight: {
      type: Number,
      default: 100
    },
    minwidth: {
      type: Number,
      default: 700
    },
    tableName: {
      type: String,
      default: ""
    },
    paginationlayout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    /**权限 */
    authority: {
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
  },
  data() {
    return {
      currentRow: null,
      tableData: [],
      currPage: 1,
      pageSize: 10,
      total: 20
    };
  },
  mounted() {
    if (this.isDefalutLoad) {
      if (this.action) this.reload();
    }
  },
  methods: {
    /**行切换事件 */
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    /**操作点击事件 */
    authority_handle(item) {
      this.$emit("authorityhandle", {
        opear: item,
        currentRow: this.currentRow
      });
    },
    reload() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.currPage = 1;
      this.searchParams.page = this.currPage;
      this.searchParams.size = this.pageSize;
      this.http.get(this.action, { params: this.searchParams }).then(res => {
        if (res.code == 200) {
          this.total = res.count;
          this.tableData = res.data;
          if (res.count > 0) {
            setTimeout(() => {
              this.$refs['table'].setCurrentRow(this.tableData[0]);
            }, 1);
            
          }
        } else this.$message.error(res.msg);
        setTimeout(() => {
          loading.close();
        }, 1000);
      });
    }
  }
};
</script>

