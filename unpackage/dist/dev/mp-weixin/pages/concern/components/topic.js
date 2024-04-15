"use strict";
const common_vendor = require("../../../common/vendor.js");
const end = () => "./end.js";
const _sfc_main = {
  data() {
    return {
      list: [
        { src: "https://img2.imgtp.com/2024/04/06/NiysSkOm.png", text: "产品原型总返工? 掌握3个基础能力，高质…", title: "原型之美", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/yh33r3nE.png", title: "产品经理", text: "爆品，一定是好产品吗?", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/34HY1GlZ.png", title: "交互设计与用户体验", text: "产品各场景分析模型", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/Zf5MfJrj.png", title: "@产品", text: "引爆用户增长，最全思维导图", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/fGPG9yeC.png", title: "PMskill", text: "后台设计~自定义工作流引擎" }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/concern/components/topic.js", document.baseURI).href).href;
    }
  },
  components: {
    end
  }
};
if (!Array) {
  const _component_end = common_vendor.resolveComponent("end");
  _component_end();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.update),
        d: common_vendor.t(item.text),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/components/topic.vue"]]);
wx.createComponent(Component);
