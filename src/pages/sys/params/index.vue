<template>
    <div>
        <base-search :isSpread="false" @searchHandle="search_handle">
            <el-row :gutter="20" style="padding-bottom:20px;">
                <el-col :span="2">
                    <div class="search-title">名称</div>
                </el-col>
                <el-col :span="6">
                    <el-input style="display:inline-block;" size="small" placeholder="请输入内容">
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <div class="search-title">值</div>
                </el-col>
                <el-col :span="6">
                    <el-input style="display:inline-block;" size="small" placeholder="请输入内容">
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <div class="search-title">状态</div>
                </el-col>
                <el-col :span="6">
                    <el-select style="display:inline-block;" size="small" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>

                </el-col>
            </el-row>
        </base-search>
        <base-table tableName="用户管理" :columns="table.columns" :tableData="table.data" :authority="authority" :tableHeight="table.tableHeight"></base-table>

    </div>
</template>

<script>
export default {
  data() {
    return {
      authority: ["view", "add", "del"],
      options: [{ value: "1", label: "启用" }, { value: "0", label: "禁用" }],
      searchPrams: {},
      formDialog: true,
      table: {
        tableHeight: 0,
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
  mounted() {
    this.table.tableHeight = this.wHeight() - 250 - 112;
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
    }
  }
};
</script>

<style>
</style>
