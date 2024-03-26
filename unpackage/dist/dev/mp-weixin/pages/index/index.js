"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabIndex: 0,
      barNameList: [{
        name: "推荐",
        id: "0"
      }, {
        name: "小岛",
        id: "1"
      }, {
        name: "专题",
        id: "2"
      }, {
        name: "连载",
        id: "3"
      }]
    };
  },
  methods: {
    // scroll-view 点击 tab 时 改变下标
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    switchTab(index) {
      if (this.tabIndex == index) {
        return;
      }
      this.tabIndex = index;
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  (_easycom_uni_search_bar2 + _component_van_button)();
}
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      placeholder: "搜索感兴趣的内容",
      bgColor: "#e5edf0"
    }),
    c: common_vendor.f($data.barNameList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.tabIndex == index ? "active_text" : ""),
        c: item.id,
        d: index,
        e: common_vendor.o((...args) => $options.ontabtap && $options.ontabtap(...args), item.id)
      };
    }),
    d: common_vendor.o(_ctx.handleClick),
    e: common_vendor.p({
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
