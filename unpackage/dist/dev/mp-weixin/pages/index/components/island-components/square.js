"use strict";
const common_vendor = require("../../../../common/vendor.js");
const shuoshuo = () => "./shuoshuo.js";
const _sfc_main = {
  data() {
    return {
      j: false,
      list: [
        { src: "../../../../static/images/u56.jpg", text: "我们爱画画", num: "306" },
        { src: "../../../../static/images/u62.jpg", text: "彦姐书的…", num: "550" },
        { src: "../../../../static/images/u69.jpg", text: "情感事务所", num: "5229" },
        { src: "../../../../static/images/u76.jpg", text: "微博故事", num: "181" },
        { src: "../../../../static/images/u83.jpg", text: "为你高兴", num: "17" },
        { src: "../../../../static/images/u90.jpg", text: "吐槽那些…", num: "53" },
        { src: "../../../../static/images/u97.jpg", text: "魔都生活", num: "13" },
        { src: "../../../../static/images/u104.jpg", text: "时光小岛", num: "12" },
        { src: "../../../../static/images/u111.jpg", text: "90后相亲", num: "20" },
        { src: "../../../../static/images/u118.jpg", text: "因为爱情", num: "3" },
        { src: "../../../../static/images/u125.jpg", text: "山夕月无痕", num: "15" },
        { src: "../../../../static/images/u132.jpg", text: "风花雪月", num: "53" }
      ]
    };
  },
  methods: {
    join() {
      this.j = !this.j;
    },
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/index/components/island-components/square.js", document.baseURI).href).href;
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
        c: common_vendor.t(item.num),
        d: common_vendor.o((...args) => $options.join && $options.join(...args), item.id),
        e: item.id
      };
    }),
    b: $data.j ? "#b2aab2" : "#2fc25b"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/square.vue"]]);
wx.createComponent(Component);
