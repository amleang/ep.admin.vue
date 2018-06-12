<template>
    <div style="margin-top:-6px;">
        <template v-for="(item,index) in authority">
            <el-button v-if="item=='view'" :key="index" size="small" class="btn-box-shadow" icon="el-icon-view" @click="view_handle">查看</el-button>
            <!--<touch-ripple class="btn-box-shadow"> -->
            <el-button v-if="item=='add'" :key="index" type="success" size="small" class="btn-box-shadow" icon="el-icon-plus" @click="add_handle">添加</el-button>
            <!--</touch-ripple> -->
            <el-button v-if="item=='upd'" :key="index" type="primary" size="small" class="btn-box-shadow" icon="el-icon-edit" @click="upd_handle">编辑</el-button>
            <el-button v-if="item=='del'" :key="index" type="danger" size="small" class="btn-box-shadow" icon="el-icon-delete" @click="del_handle">删除</el-button>
        </template>

    </div>
</template>

<script>
export default {
  props: {
    authority: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    view_handle() {
      this.$emit("view_handle");
    },
    add_handle() {
      this.$emit("add_handle");
    },
    upd_handle() {
      this.$emit("upd_handle");
    },
    del_handle() {
      this.$emit("del_handle");
    }
  }
};
</script>

