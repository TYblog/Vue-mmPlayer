webpackJsonp([8],{"6b7x":function(t,s){},u8QS:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),n=e.n(i),o=e("Dd8w"),c=e.n(o),l=(e("gyMJ"),e("NYxO")),r=e("kvay"),a=e("N3MO"),d={name:"history-list",components:{MusicList:r.a,MmDialog:a.a},computed:c()({},Object(l.c)(["historyList","playing","currentMusic"])),methods:c()({clearList:function(){this.clearHistory(),this.$mmToast("列表清空成功")},selectItem:function(t,s){this.selectPlay({list:this.historyList,index:s})},deleteItem:function(t){var s=[].concat(n()(this.historyList));s.splice(t,1),this.removeHistory(s),this.$mmToast("删除成功")}},Object(l.d)({setPlaying:"SET_PLAYING"}),Object(l.b)(["selectPlay","clearHistory","removeHistory"]))},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"historyList"},[e("music-list",{attrs:{list:t.historyList,listType:1},on:{select:t.selectItem,del:t.deleteItem}},[e("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[e("span",{on:{click:function(s){t.$refs.dialog.show()}}},[t._v("清空列表")])])]),t._v(" "),e("mm-dialog",{ref:"dialog",attrs:{bodyText:"是否清空播放历史列表",confirmBtnText:"清空"},on:{confirm:t.clearList}})],1)},staticRenderFns:[]};var u=e("VU/8")(d,m,!1,function(t){e("6b7x")},"data-v-1bbde3b1",null);s.default=u.exports}});