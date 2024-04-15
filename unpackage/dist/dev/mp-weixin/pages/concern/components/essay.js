"use strict";
const common_vendor = require("../../../common/vendor.js");
const end2 = () => "./end2.js";
const _sfc_main = {
  data() {
    return {
      list: [
        { text: "腾讯高级设计师分享交互设计师必备模板", title: "产品设计观与方法论", update: "99+更新" },
        { title: "技术干货", text: "关于人工智能的这些专业名词的含义，你真的知道吗?", update: "99+更新" }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/concern/components/essay.js", document.baseURI).href).href;
    }
  },
  components: {
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
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.text),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/components/essay.vue"]]);
wx.createComponent(Component);
