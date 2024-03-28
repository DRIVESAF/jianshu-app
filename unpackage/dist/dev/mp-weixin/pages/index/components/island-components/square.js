"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "基础卡片",
      isFull: true,
      ["sub-title"]: "副标题",
      extra: "额外信息",
      thumbnail: _ctx.avatar
    }),
    b: common_vendor.p({
      title: "基础卡片",
      isFull: true,
      ["sub-title"]: "副标题",
      extra: "额外信息",
      thumbnail: _ctx.avatar
    }),
    c: common_vendor.p({
      title: "基础卡片",
      isFull: true,
      ["sub-title"]: "副标题",
      extra: "额外信息",
      thumbnail: _ctx.avatar
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/square.vue"]]);
wx.createComponent(Component);
