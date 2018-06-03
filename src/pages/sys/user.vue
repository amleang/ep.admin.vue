<template>
    <div>
        <base-search :isSpread="true" @spreadHandle="spreadHandle"></base-search>
        <base-table tableName="用户管理" :columns="table.columns" :tableData="table.data">
            <!-- <div slot="button">zhagsan</div> -->
        </base-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
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
