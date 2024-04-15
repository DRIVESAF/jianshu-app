"use strict";
const common_vendor = require("../../../common/vendor.js");
const end = () => "./end.js";
const end2 = () => "./end2.js";
const _sfc_main = {
  data() {
    return {
      list: [
        {
          src: "https://img2.imgtp.com/2024/04/07/aVe38QuJ.png",
          text: "整治领导的一致性科技偏见",
          title: "区块链社会学",
          update: "99+更新",
          icon: "https://img2.imgtp.com/2024/04/07/gUgOSVkF.png",
          usn: "沛文沛语"
        },
        {
          src: "https://img2.imgtp.com/2024/04/07/Xqga1yZL.png",
          title: "玩转Sketch教程",
          text: "[基础篇]夜雨原创玩转Sketch教程课时7:…",
          update: "99+更新",
          icon: "https://img2.imgtp.com/2024/04/07/FEIZLQNB.png",
          usn: "夜雨y"
        },
        {
          src: "https://img2.imgtp.com/2024/04/07/3LzGGdwv.png",
          title: "Axure RP9实用教程: 原型+高保真+",
          text: "Axure RP9案例: 如何实现省市区数据的三…",
          icon: "https://img2.imgtp.com/2024/04/07/sIWSGleL.png",
          usn: "Axure原型设计"
        }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/concern/components/series.js", document.baseURI).href).href;
    }
  },
  components: {
    end,
    end2
  }
};
if (!Array) {
  const _component_end2 = common_vendor.resolveComponent("end2");
  _component_end2();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.update),
        d: item.icon,
        e: common_vendor.t(item.usn),
        f: common_vendor.t(item.text),
        g: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/components/series.vue"]]);
wx.createComponent(Component);
