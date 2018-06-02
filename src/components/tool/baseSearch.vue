<template>
    <el-card class="box-card" :style="`min-width:700px;margin-bottom:20px;${isSpread&&!isOpen?'height:140px;':''}`">
        <div slot="header" class="clearfix">
            <span>查询</span>
            <div style="float: right;">
                <el-button v-if="isSpread" size="small" class="btn-box-shadow" @click="spreadHandle">
                    <i style="transform:rotate(90deg);" class="el-icon-d-arrow-right"></i>
                </el-button>
                <el-button type="primary" size="small" class="btn-box-shadow" icon="el-icon-search">查询</el-button>
            </div>
        </div>
        <div>
            <el-row :gutter="20" style="padding-bottom:20px;">
                <el-col :span="2">
                    <div class="search-title">名称</div>
                </el-col>
                <el-col :span="6">
                    <el-input style="display:inline-block;" size="small" placeholder="请输入内容">
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <div class="search-title">状态</div>
                </el-col>
                <el-col :span="6">
                    <el-input style="display:inline-block;" size="small" placeholder="请输入内容">
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <div class="search-title">状态2</div>
                </el-col>
                <el-col :span="6">
                    <el-input style="display:inline-block;" size="small" placeholder="请输入内容">
                    </el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="search-title">名称</div>
                </el-col>
                <el-col :span="6">
                    <el-input style="display:inline-block;" size="small" placeholder="请输入内容">
                    </el-input>
                </el-col>
            </el-row>
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
    }
  }
};
</script>
