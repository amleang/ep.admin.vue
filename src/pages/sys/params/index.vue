<template>
  <div>
    <base-search :isSpread="false" @searchHandle="search_handle">
      <el-row :gutter="20" style="padding-bottom:20px;">
        <el-col :span="2">
          <div class="search-title">名称</div>
        </el-col>
        <el-col :span="6">
          <el-input style="display:inline-block;" v-model="searchParams.name" size="small" placeholder="请输入内容">
          </el-input>
        </el-col>
        <el-col :span="2">
          <div class="search-title">值</div>
        </el-col>
        <el-col :span="6">
          <el-input style="display:inline-block;" v-model="searchParams.value" size="small" placeholder="请输入内容">
          </el-input>
        </el-col>
        <el-col :span="2">
          <div class="search-title">状态</div>
        </el-col>
        <el-col :span="6">
          <el-select style="display:inline-block;" v-model="searchParams.active" size="small" clearable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

        </el-col>
      </el-row>
    </base-search>
    <el-row :gutter="20">
      <el-col :span="12">
        <base-table ref="table" action="/api/params/list" tableName="参数列表" :columns="table.columns" :searchParams="table.searchParams" paginationlayout="total,  prev, pager, next" :minwidth="table.minwidth" :authority="authority" :tableHeight="table.tableHeight" @authorityhandle="authority_handle" @loadrowhandle="load_row_handle" @handleCurrentChange="rowchange_handle"></base-table>
      </el-col>
      <el-col :span="12">
        <base-table ref="subTable" action="/api/params/list" tableName="参数明细列表" :isDefalutLoad="false" :columns="table.columns" :searchParams="subTable.searchParams" paginationlayout="total,  prev, pager, next" :minwidth="table.minwidth" :authority="authority" :tableHeight="table.tableHeight" @authorityhandle="subauthority_handle"></base-table>
      </el-col>
    </el-row>
    <detail-form :formDialog="formDialog" :id="currid" :formType="formType" :readonly="formreadonly" @dialogvisible="dialog_visible_handle"></detail-form>

  </div>
</template>

<script>
import detailForm from "./form";
export default {
  components: {
    detailForm
  },
  data() {
    return {
      authority: ["add", "upd", "del"],
      options: [{ value: "1", label: "启用" }, { value: "0", label: "禁用" }],
      formDialog: false,
      currid: 0,
      searchParams: { name: "", value: "", active: "" },
      formType: 0,
      formreadonly: false,
      table: {
        tableHeight: 0,
        minwidth: 500,
        currentRow: {},
        searchParams: { page: 1, size: 10, pid: 0 },
        columns: [
          { prop: "id", label: "ID" },
          { prop: "name", label: "名称" },
          { prop: "value", label: "值" },
          { prop: "active", label: "状态" }
        ]
      },
      subTable: {
        currentRow: {},
        searchParams: { page: 1, size: 10 },
        subTable: []
      }
    };
  },
  mounted() {
    this.table.tableHeight = this.wHeight() - 295 - 90;
  },
  methods: {
    /**查询 */
    search_handle() {
      debugger;
      this.table.searchParams = this.searchParams;
      this.table.searchParams.page = 1;
      this.table.searchParams.pid = 0;
      this.table.searchParams.size = 10;
      this.$refs.table.reload();
      console.log("search");
    },
    rowchange_handle(row) {
      if (row) {
        this.table.currentRow = row;
        this.subTable.searchParams.pid = row.id;
        this.subTable.searchParams.page = 1;
        this.$refs.subTable.reload();
      } else {
        this.table.currentRow = row;
        this.subTable.searchParams.pid = -1;
        this.subTable.searchParams.page = 1;
        this.$refs.subTable.reload();
      }
    },
    /**主table 操作按钮点击 */
    authority_handle(item) {
      this.table.currentRow = item.currentRow;
      console.log("authority_handle=>", item);
      switch (item.opear) {
        case "add":
          this.currid = 0;
          this.formType = 0;
          this.formDialog = true;
          this.formreadonly = false;
          break;
        case "upd":
          if (item.currentRow) {
            this.currid = item.currentRow.id;
            this.formType = 0;
            this.formDialog = true;
            this.formreadonly = false;
          } else {
            this.$message.warning("当前没有参数可编辑！");
          }
          break;
        case "del":
          if (item.currentRow) {
            this.table_delete_handle(item.currentRow.id);
          } else {
            this.$message.warning("当前没有参数可删除！");
          }
          break;
      }
    },
    subauthority_handle(item) {
      this.subTable.currentRow = item.currentRow;
      console.log("authority_handle=>", item);
      switch (item.opear) {
        case "add":
          this.currid = 0;
          this.formType = this.table.currentRow.id;
          this.formDialog = true;
          this.formreadonly = false;
          break;
        case "upd":
          if (item.currentRow) {
            this.currid = item.currentRow.id;
            this.formType = this.table.currentRow.id;
            this.formDialog = true;
            this.formreadonly = false;
          } else {
            this.$message.warning("当前没有参数明细可编辑！");
          }
          break;
        case "del":
          if (item.currentRow) {
            this.sub_table_del_handle(item.currentRow.id);
          } else this.$message.warning("当前没有参数明细可删除！");
          break;
      }
    },
    /**主数据删除 */
    table_delete_handle(id) {
      this.$confirm("确定要删除该参数及明细信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .delete("/api/params/" + id, { params: { pid: 0 } })
            .then(res => {
              if (res.code == 200) {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.table.searchParams.page = 1;
                this.$refs.table.reload();
              } else this.$message.eror(res.msg);
            });
        })
        .catch(() => {});
    },
    sub_table_del_handle(id) {
      this.$confirm("确定要删除该参数及明细信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .delete("/api/params/" + id, { params: { pid: 1 } })
            .then(res => {
              if (res.code == 200) {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.subTable.searchParams.page = 1;
                this.$refs.subTable.reload();
              } else this.$message.eror(res.msg);
            });
        })
        .catch(() => {});
    },
    /**加载选中行 */
    load_row_handle(currRow) {
      console.log("currRow=>", currRow);
      this.subTable.searchParams.page = 1;
      this.subTable.searchParams.pid = currRow.id;
      this.$refs.subTable.reload();
    },
    /**表单操作返回 */
    dialog_visible_handle(val) {
      console.log("val=>", val);
      this.formDialog = val.dialog;
      if (val.isreload) {
        if (this.formType == 0) {
          this.table.searchParams.page = 1;
          this.$refs.table.reload();
        } else {
          this.subTable.searchParams.page = 1;
          this.$refs.subTable.reload();
        }
      }
    }
  }
};
</script>

<style>
</style>
