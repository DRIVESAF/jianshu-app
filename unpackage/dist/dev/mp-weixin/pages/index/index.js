"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          name: "推荐"
        },
        {
          name: "小岛"
        },
        {
          name: "专题"
        },
        {
          name: "连载"
        }
      ]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      placeholder: "搜索感兴趣的内容",
      bgColor: "#f2f2f2"
    }),
    c: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name)
      };
    }),
    d: _ctx.index
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
