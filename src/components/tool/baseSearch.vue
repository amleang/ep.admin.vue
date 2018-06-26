<template>
    <el-card class="box-card search-form" :style="`min-width:700px;margin-bottom:20px;${isSpread&&!isOpen?'height:120px;':''}`">
        <div slot="header" class="clearfix">
            <div style="float:left; height:32px;line-height:32px;">查询条件</div>
            <div style="float: right;">
                <el-button v-if="isSpread" size="small" class="btn-box-shadow" @click="spreadHandle">
                    <i :style="`transform:rotate(${!isOpen?90:-90}deg);`" class="el-icon-d-arrow-right"></i>
                </el-button>
                <el-button type="primary" size="small" class="btn-box-shadow" icon="el-icon-search" @click="search_handle">查询</el-button>
            </div>
        </div>
        <div>
            <slot></slot>
        </div>
    </el-card>
</template>

<script>
export default {
  props: {
    isSpread: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    spreadHandle() {
      this.isOpen = !this.isOpen;
      this.$emit("spreadHandle", this.isOpen);
    },
    search_handle() {
      this.$emit("searchHandle");
    }
  }
};
</script>
