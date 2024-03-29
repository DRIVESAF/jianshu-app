"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  _easycom_uni_fab2();
}
const _easycom_uni_fab = () => "../../../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  _easycom_uni_fab();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(_ctx.trigger),
    b: common_vendor.o(_ctx.fabClick),
    c: common_vendor.p({
      pattern: _ctx.pattern,
      content: _ctx.content,
      horizontal: "right",
      vertical: "bottom",
      direction: "horizontal",
      popMenu: true
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/ball.vue"]]);
wx.createComponent(Component);
