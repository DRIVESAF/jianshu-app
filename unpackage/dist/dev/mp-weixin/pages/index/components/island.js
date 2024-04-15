"use strict";
const common_vendor = require("../../../common/vendor.js");
const square = () => "./island-components/square.js";
const mine = () => "./island-components/mine.js";
const end = () => "./end.js";
const _sfc_main = {
  data() {
    return {
      swipers: [
        { src: "../../../static/images/点赞.png", text: "每天起床第一句，先给自己打个气" },
        { src: "../../../static/images/钻石-blue.png", text: "你的专业，摆地摊能干什么？" }
      ],
      navIndex: 1,
      navList: ["广场", "我的"],
      listIndex: 0
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/index/components/island.js", document.baseURI).href).href;
    },
    checkIndex(index) {
      this.navIndex = index;
    },
    checkListIndex(index) {
      this.listIndex = index;
    }
  },
  components: {
    square,
    mine,
    end
  }
};
if (!Array) {
  const _component_square = common_vendor.resolveComponent("square");
  const _component_end = common_vendor.resolveComponent("end");
  const _component_mine = common_vendor.resolveComponent("mine");
  (_component_square + _component_end + _component_mine)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.swipers, (item, k0, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.text),
        c: item
      };
    }),
    b: common_vendor.n($data.navIndex == 1 ? "activite" : ""),
    c: common_vendor.o(($event) => $options.checkIndex(1)),
    d: common_vendor.n($data.navIndex == 2 ? "activite" : ""),
    e: common_vendor.o(($event) => $options.checkIndex(2)),
    f: $data.navIndex == 1
  }, $data.navIndex == 1 ? {} : {}, {
    g: $data.navIndex == 2
  }, $data.navIndex == 2 ? {} : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island.vue"]]);
wx.createComponent(Component);
