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
          <el-select style="display:inline-block;" v-model="searchParams.active" size="small" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

        </el-col>
      </el-row>
    </base-search>
    <el-row :gutter="20">
      <el-col :span="12">
        <base-table tableName="参数列表" :columns="table.columns" :searchParams="table.searchParams" paginationlayout="total,  prev, pager, next" :tableData="table.data" :minwidth="table.minwidth" :authority="authority" :tableHeight="table.tableHeight" @authorityhandle="authority_handle"></base-table>
      </el-col>
      <el-col :span="12">
        <base-table tableName="参数明细列表" :columns="table.columns" :searchParams="table.searchParams1" paginationlayout="total,  prev, pager, next" :tableData="table.data" :minwidth="table.minwidth" :authority="authority" :tableHeight="table.tableHeight" @authorityhandle="subauthority_handle"></base-table>
      </el-col>
    </el-row>
    <detail-form :visible="formDialog" :formType="formType" :readonly="formreadonly"></detail-form>
    <el-dialog title="用户表单" :visible.sync="formDialog" top="20vh" width="600px" :modal-append-to-body="false" :close-on-click-modal="false">
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
      authority: ["view", "add", "upd", "del"],
      options: [{ value: "1", label: "启用" }, { value: "0", label: "禁用" }],
      formDialog: false,
      searchParams: { name: "", value: "", active: "" },
      formType: 0,
      formreadonly: false,
      table: {
        tableHeight: 0,
        minwidth: 500,
        searchParams: { page: 1, size: 10 },
        searchParams1: { page: 1, size: 10 },
        columns: [
          { prop: "id", label: "ID" },
          { prop: "name", label: "名称" },
          { prop: "value", label: "值" },
          { prop: "active", label: "状态" }
        ],
        data: [
          {
            id: "1",
            name: "战三",
            value: "dfadf",
            active: "中的那等你of都是你发撒"
          },
          {
            id: "1",
            name: "战三",
            value: "dfadf",
            active: "中的那等你of都是你发撒"
          },
          {
            id: "1",
            name: "战三",
            value: "dfadf",
            active: "中的那等你of都是你发撒"
          },
          {
            id: "1",
            name: "战三",
            value: "dfadf",
            active: "中的那等你of都是你发撒"
          }
        ]
      }
    };
  },
  mounted() {
    this.table.tableHeight = this.wHeight() - 295 - 90;
    this.http
      .get("/api/params/list", { params: { page: 1, size: 10 } })
      .then(res => {
        console.log(`res=>`, res);
      });
  },
  methods: {
    /**查询 */
    search_handle() {
      console.log("search");
    },
    authority_handle(item) {
      console.log("authority_handle=>", item);
      switch (item.opear) {
        case "add":
          this.formDialog = true;
          this.formreadonly = false;
          break;
      }
    },
    subauthority_handle(item) {
      console.log("subauthority_handle=》", item);
    }
  }
};
</script>

<style>
</style>
