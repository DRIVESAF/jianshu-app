"use strict";
const common_vendor = require("../../../../common/vendor.js");
const shuoshuo = () => "./shuoshuo.js";
const _sfc_main = {
  data() {
    return {
      j: false,
      list: [
        { src: "../../../../static/images/u324.jpg", text: "魔都生活（…" },
        { src: "../../../../static/images/u327.jpg", text: "微故事" }
      ]
    };
  },
  methods: {
    join() {
      this.j = !this.j;
    },
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/index/components/island-components/mine.js", document.baseURI).href).href;
    }
  },
  components: {
    shuoshuo
  }
};
if (!Array) {
  const _component_shuoshuo = common_vendor.resolveComponent("shuoshuo");
  _component_shuoshuo();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.text),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/mine.vue"]]);
wx.createComponent(Component);
