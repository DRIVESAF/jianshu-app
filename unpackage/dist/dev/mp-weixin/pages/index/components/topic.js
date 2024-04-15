"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        { icon: "../../../static/images/u551.jpg", name: "简友广场" },
        { icon: "../../../static/images/u554.jpg", name: "热门专题" },
        { icon: "../../../static/images/u557.jpg", name: "官方专题" },
        { icon: "../../../static/images/u560.jpg", name: "投诉建议" },
        { icon: "../../../static/images/u563.jpg", name: "工作招聘" }
      ],
      columnList: [
        { src: "../../../static/images/u575.jpg", name: "齐帆齐联合谈写作专题征文", tip: "齐帆齐关注" },
        { src: "../../../static/images/u576.jpg", name: "我与简书的故事", tip: "齐帆齐关注" },
        { src: "../../../static/images/u577.jpg", name: "故事", tip: "简书推荐专题" },
        { src: "../../../static/images/u544.jpg", name: "摄影", tip: "简书推荐专题" },
        { src: "../../../static/images/u545.jpg", name: "婚姻育儿", tip: "简书推荐专题" },
        { src: "../../../static/images/u548.jpg", name: "程序员", tip: "简书推荐专题" },
        { src: "../../../static/images/u591.jpg", name: "旅行在路上", tip: "简书推荐专题" },
        { src: "../../../static/images/u592.jpg", name: "短篇小说", tip: "简书推荐专题" },
        { src: "../../../static/images/u593.jpg", name: "原创儿童文学", tip: "简书推荐专题" },
        { src: "../../../static/images/u602.jpg", name: "手绘", tip: "简书推荐专题" },
        { src: "../../../static/images/u603.jpg", name: "自然科普", tip: "简书推荐专题" },
        { src: "../../../static/images/u595.jpg", name: "简书电影", tip: "简书推荐专题" },
        { src: "../../../static/images/u611.jpg", name: "脱单", tip: "简书推荐专题" },
        { src: "../../../static/images/u612.jpg", name: "国学与传统文化", tip: "简书推荐专题" },
        { src: "../../../static/images/u613.jpg", name: "向茶点故事投稿", tip: "简书推荐专题" },
        { src: "../../../static/images/u612.jpg", name: "连载小说", tip: "简书推荐专题" },
        { src: "../../../static/images/u622.jpg", name: "诗", tip: "简书推荐专题" },
        { src: "../../../static/images/u623.jpg", name: "漫画", tip: "简书推荐专题" },
        { src: "../../../static/images/u632.jpg", name: "创业", tip: "简书推荐专题" },
        { src: "../../../static/images/u633.jpg", name: "美食", tip: "简书推荐专题" },
        { src: "../../../static/images/u625.jpg", name: "娱乐圈", tip: "简书推荐专题" },
        { src: "../../../static/images/u639.jpg", name: "上班这点事", tip: "简书推荐专题" },
        { src: "../../../static/images/u640.jpg", name: "生活家", tip: "简书推荐专题" }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/index/components/topic.js", document.baseURI).href).href;
    }
  },
  components: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index
      };
    }),
    b: common_vendor.f($data.columnList, (column, index, i0) => {
      return {
        a: common_vendor.t(column.name),
        b: common_vendor.t(column.tip),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/topic.vue"]]);
wx.createComponent(Component);
