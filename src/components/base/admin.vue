<template>
  <div class="main">
    <div v-show="isMenu" class="nav-let">
      <div class="nav-top">
        后台管理系统
        <div class="line"></div>
      </div>
      <el-menu :default-active="activeMenu" style="height:100%;" @open="menu_open_handle" @close="menu_close_handle" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
        <!--  <el-menu-item index="5">
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
          <el-menu-item index="1-0">用户管理</el-menu-item>
          <el-menu-item index="1-1">菜单管理</el-menu-item>
        </el-submenu> -->

        <template v-for="(item,idx) in menuList">
          <el-menu-item v-if="item.subList==0" :index="`${item.id}`" :key="idx">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.mname}}</span>
            </template>
          </el-menu-item>
          <el-submenu v-else :index="`${item.id}`" :key="idx">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.mname}}</span>
            </template>
            <el-menu-item v-for="(sub,x) in item.subList" :index="`${sub.id}`" :key="x">{{sub.mname}}</el-menu-item>
          </el-submenu>
        </template>

      </el-menu>

    </div>
    <div class="content">
      <div class="sub-main" :style="`margin-left:${!isMenu?'0px':'240px'}`">
        <div class="nav-top">
          <div class="change-menu">
            <i class="el-icon-menu" @click="isMenu=!isMenu"></i>
            <div class="tool" @mousemove="isShowTool=true" @mouseout="isShowTool=false">
              <span>管理员/admin</span>
              <span class="icon">
                <i class="iconfont icon-yonghutianchong"></i>
              </span>
              <div v-show="isShowTool" class="tool-menu" @mousemove="isShowTool=true" @mouseout="isShowTool=false">
                <div class="menu-item">
                  <i class="iconfont icon-personnone"></i>
                  个人信息</div>
                <div class="menu-item">
                  <i class="iconfont icon-icon-test"></i>
                  修改密码</div>
                <div class="menu-item">
                  <i class="iconfont icon-secede"></i>
                  退出登录</div>
              </div>
            </div>
          </div>
        </div>
        <div class="con" :style="`left:${!isMenu?'0px':'240px'}`">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [{ subList: [] }],
      isMenu: true,
      isShowTool: false,
      activeMenu: "0"
    };
  },
  mounted() {
    /*  const that = this;
    if (document.documentElement.clientWidth < 1000) this.isMenu = false;
    else this.isMenu = true;
    window.onresize = () => {
      if (parseInt(document.documentElement.clientWidth) < 1000)
        this.isMenu = false;
      else this.isMenu = true;
    }; */
    this.http.get("/api/menu/service").then(res => {
      if (res.code == 200) {
        var menuList = res.data.filter(x => x.pid == 0);
        menuList.forEach(item => {
          var subList = res.data.filter(x => x.pid == item.id);
          item.subList = subList;
        });
        this.menuList = menuList;
        this.activeMenu = menuList[0].id;
        console.log("admin-menu=>", menuList);
      }
    });
    var path = this.$route.path;
  },
  methods: {
    menu_open_handle(key, keyPath) {},
    menu_close_handle(key, keyPath) {},
    handleSelect(key, keyPath) {
      if (keyPath.length == 1) {
        var menu = this.menuList.find(x => x.id == key);
        this.$router.push({ path: menu.murl });
      } else {
        var menu = this.menuList
          .find(x => x.id == keyPath[0])
          .subList.find(x => x.id == key);
        this.$router.push({ path: menu.murl });
      }
      /*   debugger;

      console.log(key, keyPath);
      this.activeMenu = key;
      if (keyPath.length == 1) this.$router.push({ path: "/" });
      else this.$router.push({ path: "/sys/user" }); */
    }
  }
};
</script>


<style lang="scss" >
@import "../css/base.scss";
</style>

