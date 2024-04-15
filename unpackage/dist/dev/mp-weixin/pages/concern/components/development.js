"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        { src: "https://img2.imgtp.com/2024/04/06/X2Xd4120.png", text: "齐帆齐", num: "306", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/vUgHmI6u.png", text: "刘英腾", num: "550", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/s6V29XqL.png", text: "彭小六", num: "5229", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/tK9LvbYD.png", text: "简书", num: "181", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/GIf9UMcm.png", text: "我又多活…", num: "17", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/rYZdKLX5.png", text: "行距版君", num: "53", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/NMS7LJSB.png", text: "不止思考", num: "13", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/lOdSmwZ9.png", text: "简宝玉", num: "12", flag: "false" },
        { src: "https://img2.imgtp.com/2024/04/06/tmRSw3XK.png", text: "水中沚", num: "3", flag: "false" }
      ],
      // 卡片内容数据
      dataList: [
        {
          cover: "https://img2.imgtp.com/2024/04/06/0I5pdLH2.png",
          name: "齐帆齐",
          title: "我的长篇小说《爱之殇》开笔了",
          time: "2分钟前 ",
          content: "我这个人是真没救了，真是太没有出息了。说这话的是我是不是想知道发生了什么事情? 给自己放假到正月初九，虽然我知道熬不过初五。可是在大年正月初六的时候，我…",
          topicname: "从容小主",
          read: "816",
          common: "14",
          zan: "72"
        },
        {
          cover: "https://img2.imgtp.com/2024/04/06/0I5pdLH2.png",
          name: "齐帆齐",
          title: "我家有个小福星",
          time: "11分钟前",
          content: "原创/绒花树1、歪打正着 电视遥控坏了，打不开电视，也改不了台。这下三周岁的小孙女儿不高兴了，她每天都…",
          topicname: "从容小主",
          zan: "72",
          common: "14",
          read: "816"
        },
        {
          cover: "https://img2.imgtp.com/2024/04/06/0I5pdLH2.png",
          name: "齐帆齐",
          title: "齐帆齐:写作是心智模式的较量",
          time: "19小时前",
          content: "写作很多人把它想得太过于遥远，以为那是专业人士或者是高学历的人才能做的事。虽然无数事例证明了，只要你愿意写都可以成为写作者，如同王小波所说，只要会说话就…",
          topicname: "",
          zan: "11",
          common: "2"
        },
        {
          cover: "https://img2.imgtp.com/2024/04/06/0I5pdLH2.png",
          name: "齐帆齐",
          title: "齐帆齐:写作是心智模式的较量",
          time: "10小时前",
          content: "被骗了三百块钱，心里贼不舒服",
          topicname: "不是凤凰也涅…",
          zan: "15",
          common: "3"
        },
        {
          cover: "https://img2.imgtp.com/2024/04/06/0I5pdLH2.png",
          name: "齐帆齐",
          title: "怎么做一个合格的读者",
          time: "昨天 17:45",
          content: "这两天，涵涵的睡眠质量明显下降了。原先上午可以睡2个半小时，下午可以睡2个多小时的他，这两天直接不干了昨天还睡了3个小时的他，今天只睡了两个小时还不到!",
          topicname: " ycl春雷",
          read: "49",
          zan: "7",
          common: "5"
        },
        {
          cover: "https://img2.imgtp.com/2024/04/06/0I5pdLH2.png",
          name: "齐帆齐",
          title: "你是间歇性自律，还是习惯性自律?",
          time: "昨天 23:40",
          content: "文一凡为了避开“每逢佳节胖五斤”的魔咒，我从年前就计划好，春节期间一定要管住嘴，迈开腿。最低标准是: 不掉秤可以，只要不长秤就算成功! 从大年三-晚上年夜饭..",
          topicname: "一凡亲了教育",
          read: "183",
          zan: "5",
          common: "0"
        }
      ]
    };
  },
  methods: {
    getUrl(url) {
      return new URL(url, typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : document.currentScript && document.currentScript.src || new URL("pages/concern/components/development.js", document.baseURI).href).href;
    }
  },
  components: {}
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "right",
      size: "15",
      color: "#ababac"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index
      };
    }),
    c: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.content),
        e: common_vendor.t(item.topicname),
        f: common_vendor.t(item.read),
        g: common_vendor.t(item.common),
        h: common_vendor.t(item.zan),
        i: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/components/development.vue"]]);
wx.createComponent(Component);
