<template>
  <div class="main">
    <div v-show="isMenu" class="nav-let">
      <div class="nav-top">
        后台管理系统
        <div class="line"></div>
      </div>
      <el-menu :default-active="activeMenu" style="height:100%;" @open="menu_open_handle" @close="menu_close_handle" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>主页</span>
          </template>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">菜单管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenu: true,
      activeMenu: "5"
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
    menu_close_handle(key, keyPath) {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeMenu = key;
      if (keyPath.length == 1) this.$router.push({ path: "/" });
      else this.$router.push({ path: "/sys/menu" });
    }
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
      padding: 0 20px;
    }
  }
}
</style>
