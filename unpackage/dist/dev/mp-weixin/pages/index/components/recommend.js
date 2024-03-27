"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 卡片内容数据
      dataList: [
        { id: 1, title: "如何搭建领导想要的管理驾驶舱，这篇方法论值得收藏", src: "../../../static/images/r1.png", id: "数据分析不是个事儿", data: "164 阅读 0 评论 0 赞 " },
        { id: 2, title: "推荐一款优秀的跨平台文件传输工具-AirDroid", src: "../../../static/images/r2.png", id: "APP实验室", data: "47阅读 0 评论 3赞" },
        { id: 3, title: "自己以为很红，却压根没多少个粉丝的3位明星，拜托清醒一点", src: "../../../static/images/r3.png", id: "暴走怪咖豆", data: "468 阅读 0 评论 12 赞" },
        { id: 4, title: "低代码开发平台有哪些？", src: "../../../static/images/r4.png", id: "JEECG开源社区", data: "90 阅读 0 评论 1 赞" },
        { id: 5, title: "手机不安装这几个软件，简直太亏", src: "../../../static/images/r5.png", id: "驻地氧气瓶", data: " 432 阅读 0 评论 3 赞" },
        { id: 6, title: "【经验】UI设计师是如何工作的？", src: "../../../static/images/r6.png", id: "摹客", data: " 264 阅读 0 评论 5 赞" }
      ]
    };
  }
};
if (!Array) {
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _component_cell = common_vendor.resolveComponent("cell");
  const _component_list = common_vendor.resolveComponent("list");
  (_easycom_uni_list2 + _easycom_uni_card2 + _component_cell + _component_list)();
}
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_card = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_list + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: "263990fe-3-" + i0 + "," + ("263990fe-2-" + i0),
        c: item.src,
        d: common_vendor.t(item.id),
        e: common_vendor.t(item.data),
        f: "263990fe-2-" + i0 + "," + ("263990fe-1-" + i0),
        g: item.id,
        h: "263990fe-1-" + i0 + ",263990fe-0"
      };
    }),
    b: common_vendor.p({
      shadow: "none",
      margin: "0 0 10rpx 0",
      border: "false"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/recommend.vue"]]);
wx.createComponent(Component);
