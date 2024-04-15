"use strict";
const common_vendor = require("../../../common/vendor.js");
const end = () => "./end.js";
const _sfc_main = {
  data() {
    return {
      list: [
        { src: "https://img2.imgtp.com/2024/04/06/wwljazOi.png", text: "我记得在《萌芽》看到过一句话: 写作就好像一张…", title: "笔尖那点事儿", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/jXNsNbJB.png", title: "简书意见反馈", text: "为什么我的简书文章打不开啊? 为什么? 为什么?", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/sDLGBRhT.png", title: "进化朗读者的小岛", text: "日期:2021.2.19日 在读书籍《认知觉醒》阅读进度", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/6fTbkgnS.png", title: "微故事", text: "种子法则: 1，决定你要什么。2，你必须找到想要", update: "99+更新" },
        { src: "https://img2.imgtp.com/2024/04/06/7rNYqzGt.png", title: "简书|英语角", text: "加我免费领取红包封面，微信公众号: 花辩视觉" },
        { src: "https://img2.imgtp.com/2024/04/06/b4Voy0at.png", title: "魔都生活(上海)", text: "降温了，注意保姆案喔!" }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/concern/components/island.js", document.baseURI).href).href;
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/components/island.vue"]]);
wx.createComponent(Component);
