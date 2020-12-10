import config from "@/config";

const {
  REACT_APP,
  VUE_APP,
  VUE3_APP,
} = config;

const apps = [
  {
    name: "ReactApp",
    entry: REACT_APP,
    container: "#frame",
    activeRule: "/react",
  },
  {
    name: "VueApp",
    entry: VUE_APP,
    container: "#frame",
    activeRule: "/vue",
  },
  {
    name: "Vue3App",
    entry: VUE3_APP,
    container: "#frame",
    activeRule: "/vue3",
  }
];

export default apps;
