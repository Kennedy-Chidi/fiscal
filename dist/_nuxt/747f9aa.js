(window.webpackJsonp=window.webpackJsonp||[]).push([[36,9,10,20],{348:function(t,c,l){var content=l(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(151).default)("4c814224",content,!0,{sourceMap:!1})},349:function(t,c,l){"use strict";l.r(c);var e={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},n=l(57),component=Object(n.a)(e,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);c.default=component.exports},350:function(t,c,l){"use strict";l.r(c);l(50),l(59);var e=l(8),n=(l(26),l(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return c.stop()}}),c)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(l(357),l(57)),component=Object(o.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[c("div",{staticClass:"sticky-navbar"},[c("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[c("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),c("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),c("ul",{staticClass:"nav-list",attrs:{role:"list"}},[c("li",{staticClass:"nav-list"},[c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Active Deposits")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),c("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),c("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[c("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);c.default=component.exports},351:function(t,c,l){"use strict";l.r(c);var e=l(8),n=(l(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return c.stop()}}),c)})))()}},mounted:function(){},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),o=l(57),component=Object(o.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"content-header"},[c("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),c("div",{staticClass:"top-icons"},[c("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),c("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,c=t._self._c;return c("div",{staticClass:"notification"},[c("div",{staticClass:"badge"}),t._v(" "),c("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"custom-card pie-chart-holder notify"},[c("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);c.default=component.exports},357:function(t,c,l){"use strict";l(348)},358:function(t,c,l){var e=l(150)((function(i){return i[1]}));e.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),e.locals={},t.exports=e},413:function(t,c,l){var content=l(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(151).default)("3747c2fa",content,!0,{sourceMap:!1})},447:function(t,c,l){"use strict";l(413)},448:function(t,c,l){var e=l(150)((function(i){return i[1]}));e.push([t.i,".content-wrapper{margin-bottom:20px}",""]),e.locals={},t.exports=e},534:function(t,c,l){"use strict";l.r(c);l(58),l(26);var e=l(8),n=(l(49),l(349)),o=l(350),v=l(351),r={data:function(){return{lastTransaction:"",currencies:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/home.js",script.async=!0,script.id="script";var c=document.querySelector("#footer");c?c.appendChild(script):console.error("Could not find app node to append script element")},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getCurrency:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function c(){var l;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,t.$axios.get("/currency");case 3:l=c.sent,t.currencies=l.data.data,c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0.response.data.message);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})))()},getLastTransaction:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function c(){var l;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,t.$axios.get("/transactions/?sort=-1&limit=1");case 3:l=c.sent,t.lastTransaction=l.data.data[0],c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0.response.data.message);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})))()}},mounted:function(){this.loadScript(),this.getCurrency(),this.getLastTransaction()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{AdminNavigation:o.default,AdminTopHeader:v.default,AdminFooter:n.default}},d=(l(447),l(57)),component=Object(d.a)(r,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"main-wrapper home"},[c("AdminNavigation"),t._v(" "),c("div",{staticClass:"body-wrapper"},[c("AdminTopHeader"),t._v(" "),c("div",{staticClass:"content-wrapper"},[c("div",{staticClass:"custom-card main-stats"},[c("div",{staticClass:"stat-top"},[c("div",{staticClass:"caption-holder"},[c("div",{staticClass:"each-main-highlight top"},[t.lastTransaction?c("h2",{staticClass:"highlight-title duration"},[t._v("\n                "+t._s(t.formatDate(t.lastTransaction.time))+" -\n                "+t._s(t.formatDate(new Date))+"\n              ")]):t._e(),t._v(" "),c("div",{staticClass:"highlight-caption"},[t._v("Transaction Period")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),c("nuxt-link",{staticClass:"main-btn w-button",attrs:{to:"/admin/users"}},[t._v("View Users")])],1),t._v(" "),t._m(2)]),t._v(" "),c("div",{staticClass:"stat-bottom"},t._l(t.currencies,(function(l){return c("div",{key:l._id,staticClass:"each-coin-stat"},[c("img",{staticClass:"coin-stat-img",attrs:{src:"".concat(t.FILE_URL,"/").concat(l.symbol),loading:"lazy",alt:""}}),t._v(" "),c("div",[c("div",[t._v(t._s(l.name)+" Balance")]),t._v(" "),c("h3",{staticClass:"coin-title"},[t._v("$6,000")])])])})),0)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),c("AdminFooter")],1),t._v(" "),t._m(10)],1)}),[function(){var t=this,c=t._self._c;return c("div",{staticClass:"each-main-highlight"},[c("h2",{staticClass:"highlight-title"},[t._v("$80,000")]),t._v(" "),c("div",{staticClass:"highlight-caption"},[t._v("Transaction Volume")])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"each-main-highlight"},[c("h2",{staticClass:"highlight-title"},[t._v("$40,000")]),t._v(" "),c("div",{staticClass:"highlight-caption"},[t._v("Current Balance")])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"stats-holder"},[c("h3",{staticClass:"chart-title"},[t._v("Deposits Vs Withdrawal Chart")]),t._v(" "),c("img",{staticClass:"chart-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1785663ea220b6f2d2f34_line-graph-excel.png",loading:"lazy",alt:""}})])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"custom-card pie-chart-holder"},[c("div",{staticClass:"donut-chart"},[c("img",{attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png",loading:"lazy",sizes:"(max-width: 767px) 300px, (max-width: 991px) 25vw, (max-width: 1279px) 21vw, 22vw",srcset:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie-p-500.png 500w, https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png 505w",alt:""}})]),t._v(" "),c("div",{staticClass:"pie-stats"},[c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])]),t._v(" "),c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])]),t._v(" "),c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])]),t._v(" "),c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"trx-card"},[c("div",{staticClass:"tx-card-title"},[t._v("Total Deposits")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18162e1e45a44f1442f8c_column-chart-line-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"trx-card withdraw"},[c("div",{staticClass:"tx-card-title"},[t._v("Total Withdrawals")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18254f2b8ff803231951a_stock-market-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"trx-card active-depo"},[c("div",{staticClass:"tx-card-title"},[t._v("Active Deposits")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c7669cfc0f135400b4f_growth-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"trx-card pending-widthdraw"},[c("div",{staticClass:"tx-card-title"},[t._v("Pending Withdrawals")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c1e8c2e214d4b13be49_decrease-graph-recession-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"custom-card pie-chart-holder"},[c("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"custom-card main-stats"},[c("h4",{staticClass:"min-table-title"},[t._v("All Users")]),t._v(" "),c("div",{staticClass:"table-caption"},[t._v("\n          For actions please\n          "),c("a",{staticClass:"custom-link",attrs:{href:"#"}},[t._v("click users")]),t._v(" page\n        ")]),t._v(" "),c("div",{staticClass:"table-filters"},[c("div",{staticClass:"each-filter-option"},[c("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),c("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),c("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[c("li",{staticClass:"filter-items"},[c("div",[t._v("All Users")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Active")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Suspended")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Blocked")])])])]),t._v(" "),c("div",{staticClass:"each-filter-option"},[c("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),c("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),c("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[c("li",{staticClass:"filter-items"},[c("div",[t._v("Reg. Date")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Deposit")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Suspended")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Blocked")])])]),t._v(" "),c("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),c("div",{staticClass:"each-filter-option"},[c("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),c("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option search"},[c("div",{staticClass:"filter-page"},[t._v("Search Name")]),t._v(" "),c("img",{staticClass:"filter-icon",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7c16726c9a6581fd2_search-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"table-label"},[c("div",[c("strong",[t._v("Results")]),t._v(": 10 "),c("strong",[t._v("Page")]),t._v(" 1 of 12\n          ")]),t._v(" "),c("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[c("li",{staticClass:"pagination-item"},[c("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),c("li",{staticClass:"pagination-item"},[c("div",[t._v("1")])]),t._v(" "),c("li",{staticClass:"pagination-item active"},[c("div",[t._v("2")])]),t._v(" "),c("li",{staticClass:"pagination-item"},[c("div",[t._v("3")])]),t._v(" "),c("li",{staticClass:"pagination-item"},[c("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg",loading:"lazy",alt:""}})])])]),t._v(" "),c("div",{staticClass:"table-actions"},[c("div",{staticClass:"each-filter-option"},[c("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"filter-label"},[t._v("Send Email")]),t._v(" "),c("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[c("li",{staticClass:"filter-items"},[c("div",[t._v("All Users")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Active")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Suspended")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Blocked")])])])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Suspend")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da205a0b87bc129e0ee4_remove-member-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Approve")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1db68393797590894bada_join-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1dbeaad117e09c9d6ba7c_select-all-icon%201.svg",loading:"lazy",alt:""}})])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"confirm-action hide"},[c("div",{staticClass:"confirm-box"},[c("div",[t._v("Are you sure you want to delete this item?")]),t._v(" "),c("div",{staticClass:"confirm-holder"},[c("a",{staticClass:"button w-button",attrs:{href:"#"}},[t._v("Yes")]),c("a",{staticClass:"button w-button",attrs:{href:"#"}},[t._v("No")])])])])}],!1,null,null,null);c.default=component.exports;installComponents(component,{AdminNavigation:l(350).default,AdminTopHeader:l(351).default,AdminFooter:l(349).default})}}]);