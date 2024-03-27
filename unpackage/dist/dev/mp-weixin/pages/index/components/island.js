"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swipers: [
        { src: "../../../static/images/赞.svg", text: "每天起床第一句，先给自己打个气" },
        { src: "../../../static/images/钻.svg", text: "你的专业，摆地摊能干什么？" }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, k0, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.text),
        c: item
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island.vue"]]);
wx.createComponent(Component);
