"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_list2 + _easycom_uni_card2)();
}
const _easycom_uni_list = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
const _easycom_uni_card = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_list + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(($event) => _ctx.actionsClick("热度")),
    b: common_vendor.p({
      shadow: "none",
      margin: "0 0 10rpx 0",
      border: "false"
    }),
    c: common_vendor.o(($event) => _ctx.actionsClick("热度")),
    d: common_vendor.p({
      shadow: "none",
      margin: "0 0 10rpx 0",
      border: "false"
    }),
    e: common_vendor.o(($event) => _ctx.actionsClick("热度")),
    f: common_vendor.p({
      shadow: "none",
      margin: "0 0 10rpx 0",
      border: "false"
    }),
    g: common_vendor.o(($event) => _ctx.actionsClick("热度")),
    h: common_vendor.p({
      shadow: "none",
      margin: "0 0 10rpx 0",
      border: "false"
    }),
    i: common_vendor.o(($event) => _ctx.actionsClick("热度")),
    j: common_vendor.p({
      shadow: "none",
      margin: "0 0 10rpx 0",
      border: "false"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/recommend.vue"]]);
wx.createComponent(Component);
