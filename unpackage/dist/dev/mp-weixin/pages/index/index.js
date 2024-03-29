"use strict";
const common_vendor = require("../../common/vendor.js");
const recommend = () => "./components/recommend.js";
const island = () => "./components/island.js";
const topic = () => "./components/topic.js";
const series = () => "./components/series.js";
const ball = () => "./components/island-components/ball.js";
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
  components: {
    recommend,
    island,
    topic,
    series,
    ball
  },
  created() {
    const info = common_vendor.index.getSystemInfoSync();
    this.statusBarHeight = info.statusBarHeight;
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_recommend = common_vendor.resolveComponent("recommend");
  const _component_ball = common_vendor.resolveComponent("ball");
  const _component_island = common_vendor.resolveComponent("island");
  const _component_topic = common_vendor.resolveComponent("topic");
  const _component_series = common_vendor.resolveComponent("series");
  (_easycom_uni_search_bar2 + _component_recommend + _component_ball + _component_island + _component_topic + _component_series)();
}
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: common_vendor.o(_ctx.search),
    c: common_vendor.p({
      radius: "100",
      placeholder: "搜索感兴趣的内容",
      clearButton: "none",
      cancelButton: "none"
    }),
    d: common_vendor.n($data.navIndex == 1 ? "activite" : ""),
    e: common_vendor.o(($event) => $options.checkIndex(1)),
    f: common_vendor.n($data.navIndex == 2 ? "activite" : ""),
    g: common_vendor.o(($event) => $options.checkIndex(2)),
    h: common_vendor.n($data.navIndex == 3 ? "activite" : ""),
    i: common_vendor.o(($event) => $options.checkIndex(3)),
    j: common_vendor.n($data.navIndex == 4 ? "activite" : ""),
    k: common_vendor.o(($event) => $options.checkIndex(4)),
    l: $data.navIndex == 1
  }, $data.navIndex == 1 ? {
    m: $data.statusBarHeight + 94.61 + "px"
  } : {}, {
    n: $data.navIndex == 2
  }, $data.navIndex == 2 ? {
    o: $data.statusBarHeight + 94.61 + "px"
  } : {}, {
    p: $data.navIndex == 3
  }, $data.navIndex == 3 ? {
    q: $data.statusBarHeight + 94.61 + "px"
  } : {}, {
    r: $data.navIndex == 4
  }, $data.navIndex == 4 ? {
    s: $data.statusBarHeight + 94.61 + "px"
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
