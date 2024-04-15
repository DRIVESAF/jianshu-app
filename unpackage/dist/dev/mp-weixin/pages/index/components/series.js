"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        { icon: "../../../static/images/u689.svg", name: "全部分类" },
        { icon: "../../../static/images/u692.svg", name: "对话小说" },
        { icon: "../../../static/images/u695.svg", name: "简书FM" },
        { icon: "../../../static/images/u698.svg", name: "开通连载" },
        { icon: "../../../static/images/u702.svg", name: "连载书评" }
      ],
      columnList: [
        { src: "../../../static/images/u680.jpg", name: "有一种光，叫拾荒", tip: "澜嫣" },
        { src: "../../../static/images/u678.jpg", name: "妖异录之青冥", tip: "人海中的" },
        { src: "../../../static/images/u679.jpg", name: "故事", tip: "海外敦煌" },
        { src: "../../../static/images/u705.jpg", name: "生活碎碎念", tip: "唯唯心" },
        { src: "../../../static/images/u706.jpg", name: "野笔燃心", tip: "crazy小" },
        { src: "../../../static/images/u707.jpg", name: "人物杂谈", tip: "婉迁" },
        { src: "../../../static/images/u730.jpg", name: "心灵驿站", tip: "高富帅暖" },
        { src: "../../../static/images/u731.jpg", name: "那些花儿", tip: "初初a" },
        { src: "../../../static/images/u732.jpg", name: "横滨之恋", tip: "杨岁尘" },
        { src: "../../../static/images/u755.jpg", name: "风华正茂", tip: "杨岁尘" },
        { src: "../../../static/images/u705.jpg", name: "一只鸡的365天", tip: "如如清" },
        { src: "../../../static/images/u757.jpg", name: "安暖逸心", tip: "探索幸" },
        { src: "../../../static/images/u705.jpg", name: "生活随笔", tip: "逸瑶" },
        { src: "../../../static/images/u780.jpg", name: "天木世界", tip: "田木弓长" },
        { src: "../../../static/images/u781.jpg", name: "小小文|笔尖说", tip: "Emilysmi" }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/index/components/series.js", document.baseURI).href).href;
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/series.vue"]]);
wx.createComponent(Component);
