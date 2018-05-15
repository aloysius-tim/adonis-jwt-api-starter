webpackJsonp([0],{187:function(t,e,n){"use strict";var a=n(197),i=n(199);e.a={name:"Default",components:{DefaultSideNavbar:a.a,DefaultTopToolbar:i.a},data:function(){return{}}}},188:function(t,e,n){"use strict";var a=n(35);e.a={name:"DefaultSideNavbar",created:function(){var t=this;a.a.$on("openDrawer",function(e){t.drawer!==e&&(t.drawer=e)})},watch:{drawer:function(t){a.a.$emit("openDrawer",t)}},data:function(){return{drawer:null,items:[{icon:"contacts",text:"Contacts"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Labels",model:!0,children:[{icon:"add",text:"Create label"}]},{icon:"settings",text:"Settings"}]}}}},189:function(t,e,n){"use strict";var a=n(36),i=n.n(a),r=n(35),o=n(37);e.a={components:{},computed:i()({},Object(o.b)({user:"auth/getMe"})),created:function(){var t=this;r.a.$on("openDrawer",function(e){t.drawer!==e&&(t.drawer=e)})},watch:{drawer:function(t){r.a.$emit("openDrawer",t)}},data:function(){var t=this;return{drawer:this.$vuetify.breakpoint.lgAndUp,userMenu:[{title:"Profile",icon:"person",action:function(){}},{title:"Update Password",icon:"lock",action:function(){t.$router.push({name:"update-password"})}},{title:"Update Email",icon:"email",action:function(){t.$router.push({name:"update-email"})}},{title:"Logout",icon:"exit_to_app",action:function(){r.a.$emit("showWait","Logging you out..."),t.$store.dispatch("auth/clearAuth").then(function(){r.a.$emit("hideWait"),t.$router.push({name:"login"})})}}]}},name:"App"}},197:function(t,e,n){"use strict";var a=n(188),i=n(198),r=n(15),o=r(a.a,i.a,!1,null,null,null);e.a=o.exports},198:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.heading?n("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n            "+t._s(e.heading)+"\n          ")]):t._e()],1),t._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[n("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?n("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"item.model"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1),t._v(" "),t._l(e.children,function(e,a){return n("v-list-tile",{key:a,on:{click:!1}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)})],2):n("v-list-tile",{key:e.text,on:{click:!1}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)]})],2)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},199:function(t,e,n){"use strict";var a=n(189),i=n(200),r=n(15),o=r(a.a,i.a,!1,null,null,null);e.a=o.exports},200:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("v-toolbar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Adonify")])],1),t._v(" "),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","prepend-icon":"search",label:"Search"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("apps")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("notifications")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",icon:"",flat:"",large:""},slot:"activator"},[n("v-avatar",{attrs:{size:"32px",tile:""}},[n("img",{attrs:{src:t.user.profile.remote_avatar,alt:t.user.username}})])],1),t._v(" "),n("v-list",t._l(t.userMenu,function(e){return n("v-list-tile",{key:e.title,on:{click:e.action}},[n("v-list-tile-title",[n("v-icon",[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title))],1)],1)}))],1)],1):t._e()},i=[],r={render:a,staticRenderFns:i};e.a=r},201:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("default-side-navbar"),t._v(" "),n("default-top-toolbar"),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("router-view")],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(187),i=n(201),r=n(15),o=r(a.a,i.a,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=0.2271e24a93ba36c2a60d.js.map