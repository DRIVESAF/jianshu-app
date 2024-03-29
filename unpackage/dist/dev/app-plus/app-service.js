if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$i = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$h = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$emit("clear", "");
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-a149a6be"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/node_modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$g = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-c2f1266a"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$f = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-card__header-extra-text" },
                vue.toDisplayString($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-81f163d7"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue"]]);
  const _sfc_main$e = {
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
    },
    methods: {
      getUrl(url) {
        return new URL(url, document.currentScript && document.currentScript.src || new URL("app-service.js", document.baseURI).href).href;
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_0$1);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_1);
    const _component_cell = vue.resolveComponent("cell");
    const _component_list = vue.resolveComponent("list");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 推荐页 "),
        vue.createElementVNode("view", { class: "bg-silver" }, [
          vue.createVNode(_component_list, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.dataList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(
                    _component_cell,
                    {
                      key: item.id
                    },
                    {
                      default: vue.withCtx(() => [
                        vue.createCommentVNode(" 卡片开始 "),
                        vue.createVNode(
                          _component_uni_card,
                          {
                            shadow: "none",
                            margin: "0 0 10rpx 0",
                            "padding-top": "0",
                            border: "false"
                          },
                          {
                            title: vue.withCtx(() => [
                              vue.createVNode(
                                _component_uni_list,
                                null,
                                {
                                  default: vue.withCtx(() => [
                                    vue.createElementVNode(
                                      "text",
                                      { class: "title px-2 py-2" },
                                      vue.toDisplayString(item.title),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ]),
                            default: vue.withCtx(() => [
                              vue.createElementVNode("image", {
                                mode: "scaleToFill",
                                src: item.src
                              }, null, 8, ["src"]),
                              vue.createElementVNode("view", {
                                slot: "actions",
                                class: "card-actions"
                              }, [
                                vue.createElementVNode("view", { class: "card-actions-item px-2" }, [
                                  vue.createElementVNode(
                                    "text",
                                    { class: "card-actions-item-text px-2" },
                                    vue.toDisplayString(item.id),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "text",
                                    { class: "card-actions-item-text px-2" },
                                    vue.toDisplayString(item.data),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        vue.createCommentVNode(" 卡片结束 ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const recommend = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-81bb5221"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/recommend.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        // 卡片内容数据
        list: [
          {
            cover: "../../../../static/images/u156.jpg",
            name: "fine饭",
            time: "8小时前 ",
            content: "自己做自己的主心骨\n别等待有一天的哪一步\n只剩万劫不复",
            topicname: "今天你有什么感悟？小鸟",
            zan: "30",
            common: "1"
          },
          {
            cover: "../../../../static/images/u170.jpg",
            name: "芝士霉霉要全糖",
            time: "昨天：11:32",
            content: "周一\r晴\r今天的心情也如天气一般",
            topicname: "织梦小岛",
            zan: "1",
            common: "评论"
          },
          {
            cover: "../../../../static/images/u190.jpg",
            name: "潘小将",
            time: "昨天 02:46",
            content: "有个派出所民警，喜欢上一个女孩，但是害羞不敢表白。被同事知道后决定帮他。他们把他拉到路口，等着女孩出现等了一会儿，女孩终于出现了，在同事们的帮助下，他鼓起勇气拦住了女孩，说道:“小姐，我是派出所的，请你跟我…",
            topicname: "企业管理参考小岛",
            zan: "11",
            common: "2"
          },
          {
            cover: "../../../../static/images/u170.jpg",
            name: "渐行渐远",
            time: "10小时前",
            content: "被骗了三百块钱，心里贼不舒服",
            topicname: "生活碎片小岛",
            zan: "15",
            common: "3"
          },
          {
            cover: "../../../../static/images/u240.jpg",
            name: "Minecraft小白…",
            time: "昨天 17:45",
            content: "hyt又出来了一个龙蛋起床战争，其实跟普通的起床战争规则样...，出于好奇我就去又玩了一局，然后灭了绿，红灭蓝后被我们黄给灭了。",
            topicname: "Minecraft小岛",
            zan: "7",
            common: "5"
          },
          {
            cover: "../../../../static/images/u258.jpg",
            name: "云端游者",
            time: "昨天 23:40",
            content: "有没有那么一刻\n希望红绿灯永远不要转为绿灯\n就这样站着\n像颗树…",
            topicname: "孤独岛小鸟",
            zan: "5",
            common: "评论"
          }
        ]
      };
    },
    methods: {
      getUrl(url) {
        return new URL(url, document.currentScript && document.currentScript.src || new URL("app-service.js", document.baseURI).href).href;
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(true), vue.createElementBlock(
      vue.Fragment,
      null,
      vue.renderList($data.list, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "bg-white py-2 NaNrpx-4 mt-2",
          key: item.id
        }, [
          vue.createElementVNode("view", { class: "card-user my-2 mx-0" }, [
            vue.createElementVNode("image", {
              class: "card-img",
              src: item.cover,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "pl-2 d-f flex-column justify-center" }, [
              vue.createElementVNode(
                "text",
                { class: "fs-3 font-weight-bolder" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "time h6" },
                vue.toDisplayString(item.time),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "data mt-4" }, [
            vue.createElementVNode(
              "text",
              { class: "data" },
              vue.toDisplayString(item.content),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "py-2 px-0" }, [
            vue.createElementVNode(
              "text",
              { class: "topic-name fs-3" },
              vue.toDisplayString(item.topicname),
              1
              /* TEXT */
            ),
            vue.createVNode(
              _component_uni_icons,
              { type: "hand-up" },
              {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(item.zan),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            ),
            vue.createVNode(
              _component_uni_icons,
              { type: "chat" },
              {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(item.common),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            )
          ])
        ]);
      }),
      128
      /* KEYED_FRAGMENT */
    );
  }
  const shuoshuo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-483daba0"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/shuoshuo.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        j: false,
        list: [
          { src: "../../../../static/images/u56.jpg", text: "我们爱画画", num: "306", flag: "false" },
          { src: "../../../../static/images/u62.jpg", text: "彦姐书的…", num: "550", flag: "false" },
          { src: "../../../../static/images/u69.jpg", text: "情感事务所", num: "5229", flag: "false" },
          { src: "../../../../static/images/u76.jpg", text: "微博故事", num: "181", flag: "false" },
          { src: "../../../../static/images/u83.jpg", text: "为你高兴", num: "17", flag: "false" },
          { src: "../../../../static/images/u90.jpg", text: "吐槽那些…", num: "53", flag: "false" },
          { src: "../../../../static/images/u97.jpg", text: "魔都生活", num: "13", flag: "false" },
          { src: "../../../../static/images/u104.jpg", text: "时光小岛", num: "12", flag: "false" },
          { src: "../../../../static/images/u111.jpg", text: "90后相亲", num: "20", flag: "false" },
          { src: "../../../../static/images/u118.jpg", text: "因为爱情", num: "3", flag: "false" },
          { src: "../../../../static/images/u125.jpg", text: "山夕月无痕", num: "15", flag: "false" },
          { src: "../../../../static/images/u132.jpg", text: "风花雪月", num: "53", flag: "false" }
        ]
      };
    },
    methods: {
      join() {
        this.j = !this.j;
      },
      getUrl(url) {
        return new URL(url, document.currentScript && document.currentScript.src || new URL("app-service.js", document.baseURI).href).href;
      }
    },
    components: {
      shuoshuo
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_shuoshuo = vue.resolveComponent("shuoshuo");
    return vue.openBlock(), vue.createElementBlock("view", { class: "w-100" }, [
      vue.createCommentVNode(" 横向滚动条开始 "),
      vue.createElementVNode("scroll-view", {
        class: "squ-scroll",
        "scroll-x": "ture"
      }, [
        vue.createCommentVNode(" 卡片开始 "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "scroll-box bg-white flex-shrink",
              key: index
            }, [
              vue.createElementVNode("image", {
                class: "scroll-img",
                src: item.src
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                { class: "scroll-text d-block text-center" },
                vue.toDisplayString(item.text),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                {
                  class: "scroll-text d-block text-center",
                  style: { "color": "#aaaabd" }
                },
                vue.toDisplayString(item.num) + "成员",
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "button-group text-center",
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.join()),
                  style: vue.normalizeStyle({ color: $data.j ? "#b2aab2" : "#2fc25b" })
                },
                "＋加入",
                4
                /* STYLE */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createCommentVNode(" 卡片结束 ")
      ]),
      vue.createCommentVNode(" 横向滚动条结束 "),
      vue.createCommentVNode(" 说说内容开始 "),
      vue.createVNode(_component_shuoshuo),
      vue.createCommentVNode(" 说说内容结束 ")
    ]);
  }
  const square = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-279cb742"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/square.vue"]]);
  const _sfc_main$b = {};
  function _sfc_render$a(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "mine" }, "我的页");
  }
  const mine = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/mine.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        swipers: [
          { src: "../../../static/images/点赞.png", text: "每天起床第一句，先给自己打个气" },
          { src: "../../../static/images/钻石-blue.png", text: "你的专业，摆地摊能干什么？" }
        ],
        navIndex: 1,
        navList: ["广场", "我的"],
        listIndex: 0
      };
    },
    methods: {
      getUrl(url) {
        return new URL(url, document.currentScript && document.currentScript.src || new URL("app-service.js", document.baseURI).href).href;
      },
      checkIndex(index) {
        this.navIndex = index;
      },
      checkListIndex(index) {
        this.listIndex = index;
      }
    },
    components: {
      square,
      mine
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_square = vue.resolveComponent("square");
    const _component_mine = vue.resolveComponent("mine");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 小岛页 "),
        vue.createCommentVNode(" 头部滚动条开始 "),
        vue.createElementVNode("view", { class: "island" }, [
          vue.createElementVNode("swiper", {
            circular: "",
            vertical: "true",
            autoplay: "true",
            interval: 3e3
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.swipers, (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", { key: item }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createCommentVNode(" 多端处理 "),
                    vue.createElementVNode("image", {
                      mode: "aspectFit",
                      src: item.src
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "text",
                    { class: "text" },
                    vue.toDisplayString(item.text),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createCommentVNode(" 头部滚动条结束 "),
        vue.createCommentVNode(" 子选项卡开始 "),
        vue.createElementVNode("view", { class: "son-nav" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass($data.navIndex == 1 ? "activite" : ""),
              onClick: _cache[0] || (_cache[0] = ($event) => $options.checkIndex(1))
            },
            "广场",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass($data.navIndex == 2 ? "activite" : ""),
              onClick: _cache[1] || (_cache[1] = ($event) => $options.checkIndex(2))
            },
            "我的",
            2
            /* CLASS */
          )
        ]),
        vue.createCommentVNode(" 内容切换 "),
        $data.navIndex == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "son-content"
        }, [
          vue.createVNode(_component_square)
        ])) : vue.createCommentVNode("v-if", true),
        $data.navIndex == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "son-content"
        }, [
          vue.createVNode(_component_mine)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 子选项卡结束 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const island = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-d249dff2"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island.vue"]]);
  const _sfc_main$9 = {
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
        return new URL(url, document.currentScript && document.currentScript.src || new URL("app-service.js", document.baseURI).href).href;
      }
    },
    components: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 专题页面 "),
        vue.createCommentVNode(" 图标栏开始 "),
        vue.createElementVNode("view", { class: "h-20 d-f justify-around bg-white" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "tools d-f flex-column align-center transform-y-30",
                key: index
              }, [
                vue.createElementVNode("image", {
                  class: "tools-icon",
                  src: item.icon
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "name transform-y-100" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createCommentVNode(" 图标栏结束 "),
        vue.createCommentVNode(" 关注栏开始 "),
        vue.createElementVNode("view", { class: "concern bg-white my-4 d-f align-center" }, [
          vue.createElementVNode("image", {
            class: "concern-icon m-3",
            src: "/static/images/x1.png",
            mode: ""
          }),
          vue.createElementVNode("view", { class: "title" }, "我关注的专题")
        ]),
        vue.createCommentVNode(" 关注栏结束 "),
        vue.createCommentVNode(" 专题栏开始 "),
        vue.createElementVNode("view", { class: "column d-f" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.columnList, (column, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "column-son flex-column d-f",
                key: index
              }, [
                vue.createElementVNode("image", {
                  class: "column-cover w-100",
                  src: column.src,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "column-name w-100 font" },
                  vue.toDisplayString(column.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "column-tip w-100" },
                  vue.toDisplayString(column.tip),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createCommentVNode(" 专题栏结束 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const topic = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-67877be5"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/topic.vue"]]);
  const _sfc_main$8 = {
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
        return new URL(url, document.currentScript && document.currentScript.src || new URL("app-service.js", document.baseURI).href).href;
      }
    },
    components: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 专题页面 "),
        vue.createCommentVNode(" 图标栏开始 "),
        vue.createElementVNode("view", { class: "h-20 d-f justify-around bg-white" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "tools d-f flex-column align-center transform-y-30",
                key: index
              }, [
                vue.createElementVNode("image", {
                  class: "tools-icon",
                  src: item.icon
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "name transform-y-100" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createCommentVNode(" 图标栏结束 "),
        vue.createCommentVNode(" 关注栏开始 "),
        vue.createElementVNode("view", { class: "concern bg-white my-4 d-f align-center" }, [
          vue.createElementVNode("image", {
            class: "concern-icon m-3",
            src: "/static/images/x2.png",
            mode: ""
          }),
          vue.createElementVNode("view", { class: "title" }, "我关注的专题")
        ]),
        vue.createCommentVNode(" 关注栏结束 "),
        vue.createCommentVNode(" 专题栏开始 "),
        vue.createElementVNode("view", { class: "column d-f" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.columnList, (column, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "column-son flex-column d-f",
                key: index
              }, [
                vue.createElementVNode("image", {
                  class: "column-cover w-100",
                  src: column.src,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "column-name w-100 font" },
                  vue.toDisplayString(column.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "column-tip w-100" },
                  vue.toDisplayString(column.tip),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createCommentVNode(" 专题栏结束 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const series = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-7e4878cd"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/series.vue"]]);
  let platform = "other";
  const _sfc_main$7 = {
    name: "UniFab",
    emits: ["fabClick", "trigger"],
    props: {
      pattern: {
        type: Object,
        default() {
          return {};
        }
      },
      horizontal: {
        type: String,
        default: "right"
      },
      vertical: {
        type: String,
        default: "bottom"
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      content: {
        type: Array,
        default() {
          return [];
        }
      },
      show: {
        type: Boolean,
        default: false
      },
      popMenu: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        fabShow: false,
        isShow: false,
        isAndroidNvue: platform === "android",
        styles: {
          color: "#3c3e49",
          selectedColor: "#e96e58",
          backgroundColor: "#fff",
          buttonColor: "#e96e58",
          iconColor: "#fff",
          icon: "paperplane-filled"
        }
      };
    },
    computed: {
      contentWidth(e) {
        return (this.content.length + 1) * 55 + 15 + "px";
      },
      contentWidthMin() {
        return "55px";
      },
      // 动态计算宽度
      boxWidth() {
        return this.getPosition(3, "horizontal");
      },
      // 动态计算高度
      boxHeight() {
        return this.getPosition(3, "vertical");
      },
      // 计算左下位置
      leftBottom() {
        return this.getPosition(0, "left", "bottom");
      },
      // 计算右下位置
      rightBottom() {
        return this.getPosition(0, "right", "bottom");
      },
      // 计算左上位置
      leftTop() {
        return this.getPosition(0, "left", "top");
      },
      rightTop() {
        return this.getPosition(0, "right", "top");
      },
      flexDirectionStart() {
        return this.getPosition(1, "vertical", "top");
      },
      flexDirectionEnd() {
        return this.getPosition(1, "vertical", "bottom");
      },
      horizontalLeft() {
        return this.getPosition(2, "horizontal", "left");
      },
      horizontalRight() {
        return this.getPosition(2, "horizontal", "right");
      },
      // 计算 nvue bottom
      nvueBottom() {
        uni.getSystemInfoSync().windowBottom;
        return 30;
      }
    },
    watch: {
      pattern: {
        handler(val, oldVal) {
          this.styles = Object.assign({}, this.styles, val);
        },
        deep: true
      }
    },
    created() {
      this.isShow = this.show;
      if (this.top === 0) {
        this.fabShow = true;
      }
      this.styles = Object.assign({}, this.styles, this.pattern);
    },
    methods: {
      _onClick() {
        this.$emit("fabClick");
        if (!this.popMenu) {
          return;
        }
        this.isShow = !this.isShow;
      },
      open() {
        this.isShow = true;
      },
      close() {
        this.isShow = false;
      },
      /**
       * 按钮点击事件
       */
      _onItemClick(index, item) {
        if (!this.isShow) {
          return;
        }
        this.$emit("trigger", {
          index,
          item
        });
      },
      /**
       * 获取 位置信息
       */
      getPosition(types, paramA, paramB) {
        if (types === 0) {
          return this.horizontal === paramA && this.vertical === paramB;
        } else if (types === 1) {
          return this.direction === paramA && this.vertical === paramB;
        } else if (types === 2) {
          return this.direction === paramA && this.horizontal === paramB;
        } else {
          return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-cursor-point" }, [
      $props.popMenu && ($options.leftBottom || $options.rightBottom || $options.leftTop || $options.rightTop) && $props.content.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass([{
            "uni-fab--leftBottom": $options.leftBottom,
            "uni-fab--rightBottom": $options.rightBottom,
            "uni-fab--leftTop": $options.leftTop,
            "uni-fab--rightTop": $options.rightTop
          }, "uni-fab"]),
          style: vue.normalizeStyle($options.nvueBottom)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([{
                "uni-fab__content--left": $props.horizontal === "left",
                "uni-fab__content--right": $props.horizontal === "right",
                "uni-fab__content--flexDirection": $props.direction === "vertical",
                "uni-fab__content--flexDirectionStart": $options.flexDirectionStart,
                "uni-fab__content--flexDirectionEnd": $options.flexDirectionEnd,
                "uni-fab__content--other-platform": !$data.isAndroidNvue
              }, "uni-fab__content"]),
              style: vue.normalizeStyle({ width: $options.boxWidth, height: $options.boxHeight, backgroundColor: $data.styles.backgroundColor }),
              elevation: "5"
            },
            [
              $options.flexDirectionStart || $options.horizontalLeft ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-fab__item uni-fab__item--first"
              })) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.content, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass([{ "uni-fab__item--active": $data.isShow }, "uni-fab__item"]),
                    onClick: ($event) => $options._onItemClick(index, item)
                  }, [
                    vue.createElementVNode("image", {
                      src: item.active ? item.selectedIconPath : item.iconPath,
                      class: "uni-fab__item-image",
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "uni-fab__item-text",
                        style: vue.normalizeStyle({ color: item.active ? $data.styles.selectedColor : $data.styles.color })
                      },
                      vue.toDisplayString(item.text),
                      5
                      /* TEXT, STYLE */
                    )
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $options.flexDirectionEnd || $options.horizontalRight ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-fab__item uni-fab__item--first"
              })) : vue.createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([{
            "uni-fab__circle--leftBottom": $options.leftBottom,
            "uni-fab__circle--rightBottom": $options.rightBottom,
            "uni-fab__circle--leftTop": $options.leftTop,
            "uni-fab__circle--rightTop": $options.rightTop,
            "uni-fab__content--other-platform": !$data.isAndroidNvue
          }, "uni-fab__circle uni-fab__plus"]),
          style: vue.normalizeStyle({ "background-color": $data.styles.buttonColor, "bottom": $options.nvueBottom }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
        },
        [
          vue.createVNode(_component_uni_icons, {
            class: vue.normalizeClass(["fab-circle-icon", { "uni-fab__plus--active": $data.isShow && $props.content.length > 0 }]),
            type: $data.styles.icon,
            color: $data.styles.iconColor,
            size: "32"
          }, null, 8, ["type", "color", "class"]),
          vue.createCommentVNode(` <view class="fab-circle-v"  :class="{'uni-fab__plus--active': isShow && content.length > 0}"></view>\r
			<view class="fab-circle-h" :class="{'uni-fab__plus--active': isShow  && content.length > 0}"></view> `)
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-85f34dfc"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/uni_modules/uni-fab/components/uni-fab/uni-fab.vue"]]);
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 悬浮按钮开始 "),
        vue.createElementVNode("view", null, [
          vue.createVNode(_component_uni_fab, {
            pattern: _ctx.pattern,
            content: _ctx.content,
            horizontal: "right",
            vertical: "bottom",
            direction: "horizontal",
            popMenu: true,
            onTrigger: _ctx.trigger,
            onFabClick: _ctx.fabClick
          }, null, 8, ["pattern", "content", "onTrigger", "onFabClick"])
        ]),
        vue.createCommentVNode(" 悬浮按钮结束 ")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const ball = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-67b0a0ab"], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/components/island-components/ball.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        navIndex: 1,
        statusBarHeight: 20
      };
    },
    methods: {
      checkIndex(index) {
        this.navIndex = index;
      }
    },
    components: {
      recommend,
      island,
      topic,
      series,
      ball
    },
    created() {
      const info = uni.getSystemInfoSync();
      this.statusBarHeight = info.statusBarHeight;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$2);
    const _component_recommend = vue.resolveComponent("recommend");
    const _component_ball = vue.resolveComponent("ball");
    const _component_island = vue.resolveComponent("island");
    const _component_topic = vue.resolveComponent("topic");
    const _component_series = vue.resolveComponent("series");
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createCommentVNode(" 状态栏开始 "),
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ height: $data.statusBarHeight + "px" }),
          class: "condition bg-white"
        },
        null,
        4
        /* STYLE */
      ),
      vue.createCommentVNode(" 状态栏结束 "),
      vue.createCommentVNode(" 搜索开始 "),
      vue.createElementVNode("view", { class: "bg-white" }, [
        vue.createVNode(_component_uni_search_bar, {
          class: "uni-mt-10 justify-center",
          radius: "100",
          placeholder: "搜索感兴趣的内容",
          clearButton: "none",
          cancelButton: "none",
          onConfirm: _ctx.search
        }, null, 8, ["onConfirm"])
      ]),
      vue.createCommentVNode(" 搜索结束 "),
      vue.createCommentVNode(" 选项卡开始 "),
      vue.createCommentVNode(" 内容切换 "),
      vue.createElementVNode("view", { class: "head-nav bg-white d-f justify-evenly align-end" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass($data.navIndex == 1 ? "activite" : ""),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.checkIndex(1))
          },
          "推荐",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass($data.navIndex == 2 ? "activite" : ""),
            onClick: _cache[1] || (_cache[1] = ($event) => $options.checkIndex(2))
          },
          "小岛",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass($data.navIndex == 3 ? "activite" : ""),
            onClick: _cache[2] || (_cache[2] = ($event) => $options.checkIndex(3))
          },
          "专题",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass($data.navIndex == 4 ? "activite" : ""),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.checkIndex(4))
          },
          "连载",
          2
          /* CLASS */
        )
      ]),
      vue.createCommentVNode(" 推荐页 "),
      $data.navIndex == 1 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "content",
          style: vue.normalizeStyle({ top: $data.statusBarHeight + 88 + "px" })
        },
        [
          vue.createVNode(_component_recommend),
          vue.createVNode(_component_ball)
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 小岛页 "),
      $data.navIndex == 2 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "content",
          style: vue.normalizeStyle({ top: $data.statusBarHeight + 88 + "px" })
        },
        [
          vue.createVNode(_component_island)
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 专题页 "),
      $data.navIndex == 3 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 2,
          class: "content",
          style: vue.normalizeStyle({ top: $data.statusBarHeight + 88 + "px" })
        },
        [
          vue.createVNode(_component_topic)
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 连载页 "),
      $data.navIndex == 4 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 3,
          class: "content",
          style: vue.normalizeStyle({ top: $data.statusBarHeight + 88 + "px" })
        },
        [
          vue.createVNode(_component_series)
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 选项卡结束 ")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/index/index.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 关注 ");
  }
  const PagesConcernConcern = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/concern/concern.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 简书钻 ");
  }
  const PagesDiamondDiamond = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/diamond/diamond.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 消息 ");
  }
  const PagesMsgMsg = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/msg/msg.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 我的 ");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/concern/concern", PagesConcernConcern);
  __definePage("pages/diamond/diamond", PagesDiamondDiamond);
  __definePage("pages/msg/msg", PagesMsgMsg);
  __definePage("pages/my/my", PagesMyMy);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/DRIVESAFE/Desktop/jianshu-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
