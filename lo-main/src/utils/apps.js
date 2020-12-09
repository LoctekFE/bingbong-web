import config from "@/config";

const {
  REACT_APP,
  VUE_APP,
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
  }
];

export default apps;
