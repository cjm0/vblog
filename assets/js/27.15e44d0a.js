(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{215:function(t,e,v){"use strict";v.r(e);var a=v(0),r=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"vue-无痕刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-无痕刷新"}},[t._v("#")]),t._v(" vue 无痕刷新")]),t._v(" "),v("p",[t._v("最近遇到一个需求，需要刷新当前页面来更新数据，网上找了很多方法，在这里做个总结。")]),t._v(" "),v("p",[t._v("这里主要记录三种方法，分别是：强制刷新、伪造刷新、无痕刷新。")]),t._v(" "),v("h2",{attrs:{id:"强制刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强制刷新"}},[t._v("#")]),t._v(" 强制刷新")]),t._v(" "),v("p",[v("code",[t._v("window.location.reload()")]),t._v("，原生 js 提供的方法；")]),t._v(" "),v("p",[v("code",[t._v("this.$router.go(0)")]),t._v("，vue 路由里面的一种方法；")]),t._v(" "),v("p",[t._v("这两种方法都可以达到页面刷新的目的，简单粗暴，但是用户体验不好，相当于按 F5 刷新页面，页面的重新载入，会有短暂的白屏。")]),t._v(" "),v("h2",{attrs:{id:"伪造刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#伪造刷新"}},[t._v("#")]),t._v(" 伪造刷新")]),t._v(" "),v("p",[t._v("通过路由跳转的方法刷新，具体思路是点击按钮跳转一个空白页，然后再马上跳回来")]),t._v(" "),v("div",{staticClass:"language-vue extra-class"},[v("pre",{pre:!0,attrs:{class:"language-vue"}},[v("code",[t._v("// index.vue 首页\nthis.$router.replace('/empty')\n\n// empty.vue 空白页\ncreated() {\n    this.$router.replace('/')\n}\n")])])]),v("p",[t._v("当点击刷新按钮时地址栏会有快速的地址切换过程")]),t._v(" "),v("h2",{attrs:{id:"无痕刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无痕刷新"}},[t._v("#")]),t._v(" 无痕刷新")]),t._v(" "),v("p",[t._v("先在全局组件注册一个方法，用该方法控制 "),v("code",[t._v("router-view")]),t._v(" 的显示与否，然后在子组件调用；")]),t._v(" "),v("p",[t._v("用 "),v("code",[t._v("v-if")]),t._v(" 控制 "),v("code",[t._v("<router-view></router-view>")]),t._v(" 的显示；")]),t._v(" "),v("p",[t._v("provide：全局注册方法；")]),t._v(" "),v("p",[t._v("inject：子组件引用 provide 注册的方法；")]),t._v(" "),v("p",[v("strong",[t._v("App.vue：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cjm0.oss-cn-beijing.aliyuncs.com/18-11-16/85048642.jpg",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("当前组件：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cjm0.oss-cn-beijing.aliyuncs.com/18-11-16/65616354.jpg",alt:""}})]),t._v(" "),v("p",[t._v("当点击按钮时所有页面重新渲染，体验最好")])])}],!1,null,null,null);e.default=r.exports}}]);