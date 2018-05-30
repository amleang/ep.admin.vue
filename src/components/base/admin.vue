<template>
    <div class="main">
        <div class="nav-let">
            <div class="nav-top">
                后台管理系统
            </div>
            <el-menu style="height:100%;" @open="menu_open_handle" @close="menu_close_handle"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
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
            <div class="nav-top">
                top
            </div>
            <div class="con">
                content
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
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
  .nav-let{
      width: 240px;
      height:100%;
      .nav-top{
          height:62px;
          line-height: 62px;
          background-color: #545c64;
          color:#fff;
          border-bottom: 1px solid rgba($color: #fff, $alpha: .3);
          text-align: center;
          font-size: 18px;
      }
  }
  .content{
      margin-left: 240px;
  }
}
</style>
