"use strict";
const common_vendor = require("../../common/vendor.js");
const development = () => "./components/development.js";
const island = () => "./components/island.js";
const topic = () => "./components/topic.js";
const series = () => "./components/series.js";
const essay = () => "./components/essay.js";
const _sfc_main = {
  data() {
    return {
      navIndex: 1,
      statusBarHeight: 20
    };
  },
  methods: {
    checkIndex(index) {
      this.navIndex = index;
    }
  },
  created() {
    const info = common_vendor.index.getSystemInfoSync();
    this.statusBarHeight = info.statusBarHeight;
  },
  components: {
    development,
    island,
    topic,
    series,
    essay
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: common_vendor.p({
      type: "personadd",
      size: "23",
      color: "#adadad"
    }),
    c: common_vendor.p({
      type: "search",
      size: "23",
      color: "#adadad"
    }),
    d: common_vendor.n($data.navIndex == 1 ? "activite" : ""),
    e: common_vendor.o(($event) => $options.checkIndex(1)),
    f: common_vendor.n($data.navIndex == 2 ? "activite" : ""),
    g: common_vendor.o(($event) => $options.checkIndex(2)),
    h: common_vendor.n($data.navIndex == 3 ? "activite" : ""),
    i: common_vendor.o(($event) => $options.checkIndex(3)),
    j: common_vendor.n($data.navIndex == 4 ? "activite" : ""),
    k: common_vendor.o(($event) => $options.checkIndex(4)),
    l: common_vendor.n($data.navIndex == 5 ? "activite" : ""),
    m: common_vendor.o(($event) => $options.checkIndex(5))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/concern.vue"]]);
wx.createPage(MiniProgramPage);
