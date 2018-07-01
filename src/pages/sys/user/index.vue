<template>
  <div>
    <base-search :isSpread="true" @spreadHandle="spreadHandle"></base-search>
    <base-table tableName="用户管理" action="/api/user/list" :columns="table.columns" :authority="authority" :tableHeight="table.tableHeight"></base-table>
    <detail-form :formDialog="formDialog"></detail-form>
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
      formDialog: true,
      table: {
        tableHeight: 0,
        columns: [
          { prop: "id", label: "ID", width: 180 },
          { prop: "account", label: "登录名" },
          { prop: "relName", label: "真实姓名" },
          { prop: "active", label: "状态" },
          { prop: "weight", label: "排序" },
          { prop: "createTime", label: "创建时间" }
        ]
      }
    };
  },
  mounted() {
    this.table.tableHeight = this.wHeight() - 250 - 112;
  },
  methods: {
    spreadHandle(isOpen) {
      if (isOpen) this.table.tableHeight = this.wHeight() - 300 - 115;
      else this.table.tableHeight = this.wHeight() - 250 - 112;
    }
  }
};
</script>

<style>
</style>
