<template>
  <section id="cns-main-app">
    <section class="cns-menu-wrapper">
      <main-menu :menus="menus" />
    </section>
    <section class="cns-frame-wrapper">
      <router-view v-show="$route.name" />
      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <section v-show="!$route.name" id="frame"></section>
    </section>
  </section>
</template>

<script>
import MainMenu from "@/components/Menu.vue";
export default {
  components: {
    MainMenu
  },
  data() {
    return {
      menus: [
        {
          key: "Home",
          title: "主页",
          path: "/"
        },
        {
          key: "Login",
          title: "主应用列表",
          path: "/list"
        },
        {
          key: "VueApp",
          title: "Vue 应用",
          path: "/vue"
        },
        {
          key: "Vue3App",
          title: "Vue3 应用",
          path: "/vue3"
        },
        {
          key: "ReactApp",
          title: "React 应用",
          path: "/react"
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#cns-main-app {
  height: 100%;
  position: relative;
  .cns-menu-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 40;
    width: 172px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .cns-nav-wrapper {
    position: fixed;
    width: 100%;
    min-width: 1060px;
    padding-left: 172px;
    left: 0;
    top: 0;
    z-index: 30;
  }
}

.cns-frame-wrapper {
  padding-left: 172px;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  position: relative;
}

#cns-frame {
  width: 100%;
  height: 100%;
  > :first-child {
    height: 100%;
  }
}
</style>
