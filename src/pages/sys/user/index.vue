<template>
  <div>
    <base-search :isSpread="true" @spreadHandle="spreadHandle"></base-search>
    <base-table tableName="用户管理" :columns="table.columns" :tableData="table.data" :authority="authority"></base-table>
    <el-dialog title="用户表单" :visible.sync="formDialog" top="20vh" width="700px" :modal-append-to-body="false" :close-on-click-modal="false">
      <detail-form></detail-form>
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
      authority: ["view", "add", "del"],
      formDialog: true,
      table: {
        columns: [
          { prop: "name1", label: "名称1", width: 180 },
          { prop: "name2", label: "名称2", width: 180 },
          { prop: "name3", label: "备注" }
        ],
        data: [
          { name1: "战三", name2: "dfadf", name3: "中的那等你of都是你发撒" },
          { name1: "战三", name2: "dfadf", name3: "中的那等你of都是你发撒" },
          { name1: "战三", name2: "dfadf", name3: "中的那等你of都是你发撒" },
          { name1: "战三", name2: "dfadf", name3: "中的那等你of都是你发撒" }
        ]
      }
    };
  },
  methods: {
    spreadHandle(isOpen) {
      console.log("isOpen=>", isOpen);
    }
  }
};
</script>

<style>
</style>
