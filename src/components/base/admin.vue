<template>
  <div class="main">
    <div v-show="isMenu" class="nav-let">
      <div class="nav-top">
        后台管理系统
        <div class="line"></div>
      </div>
      <el-menu style="height:100%;" @open="menu_open_handle" @close="menu_close_handle" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="sub-main" :style="`margin-left:${!isMenu?'0px':'240px'}`">
        <div class="nav-top">
          <div class="change-menu">
            <i class="el-icon-menu" @click="isMenu=!isMenu"></i>
          </div>
        </div>
        <div class="con" :style="`left:${!isMenu?'0px':'240px'}`">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenu: true
    };
  },
  mounted() {
    const that = this;
    if (document.documentElement.clientWidth < 1000) this.isMenu = false;
    else this.isMenu = true;
    window.onresize = () => {
      if (parseInt(document.documentElement.clientWidth) < 1000)
        this.isMenu = false;
      else this.isMenu = true;
    };
  },
  methods: {
    menu_open_handle(key, keyPath) {},
    menu_close_handle(key, keyPath) {}
  }
};
</script>

<style  lang="scss" scoped>
.main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .nav-let {
    width: 240px;
    bottom: 0;
    top: 0;
    position: fixed;
    .nav-top {
      height: 61px;
      line-height: 60px;
      background-color: #545c64;
      color: #fff;
      text-align: center;
      font-size: 18px;
      border-right: solid 1px #e6e6e6;
      .line {
        background-image: linear-gradient(
          to right,
          transparent,
          yellow,
          transparent
        );
        height: 1px;
        overflow: hidden;
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    .sub-main {
      margin-left: 240px;
      .nav-top {
        padding: 0 15px;
        height: 60px;
        line-height: 60px;
        background-color: #545c64;
        .change-menu {
          padding-top: 7px;
          .el-icon-menu {
            cursor: pointer;
            display: initial;
            font-size: 30px;
            color: #fff;
          }
        }
      }
    }
    .con {
      position: absolute;
      top: 60px;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
