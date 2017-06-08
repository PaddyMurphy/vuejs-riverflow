webpackJsonp([1],{24:function(e,t,a){"use strict";var s=a(8),r=a(96),i=a(89),n=a.n(i);s.a.use(r.a),t.a=new r.a({linkExactActiveClass:"is-active",routes:[{path:"/",name:"Home",component:n.a},{path:"/rivertable",name:"Rivertable",component:n.a},{path:"/rivertable/:river",name:"RivertableUrl",component:n.a},{path:"*",redirect:"/"}]})},25:function(e,t,a){a(76);var s=a(2)(a(45),a(90),null,null);e.exports=s.exports},44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(8),r=a(25),i=a.n(r),n=a(24);s.a.config.productionTip=!1,new s.a({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(85),r=a.n(s),i=a(88),n=a.n(i);t.default={name:"app",data:function(){return{}},components:{"footer-main":r.a,navbar:n.a},mounted:function(){}}},46:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"footer"}},47:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(53),r=a.n(s);t.default={name:"graph",data:function(){return{graphBaseUrl:"//waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS",graphImage:void 0,loadingGraph:!1}},props:{radioDateType:{type:String,required:!1,default:"period"},selected:{type:String,required:!1},startDate:{required:!0},endDate:{type:[String,Date],required:!1,default:(new Date).toISOString().split("T")[0]},graphType:{type:String,required:!1,default:"00060"},period:{type:Number,required:!1,default:7}},watch:{selected:"displayGraph"},methods:{displayGraph:function(){if(this.selected){var e,t=this,a=t.startDate,s=t.endDate,i=t.graphBaseUrl+"&parm_cd="+t.graphType+"&site_no="+t.selected;"object"===r()(t.startDate)&&(a=t.startDate.toISOString().split("T")[0]),"object"===r()(t.endDate)&&(s=t.endDate.toISOString().split("T")[0]),"period"===t.radioDateType&&(i=i+"&period="+t.period),"date"===t.radioDateType&&a&&(i=i+"&begin_date="+a+"&end_date="+s),e='<img src="'+i+'"class="graph" alt="USGS Water-data graph">',t.graphImage=void 0,t.loadingGraph=!0;var n=new Image;return n.src=i,n.onload=function(a){t.graphImage=e,t.loadingGraph=!1},e}}}}},48:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(51),r=a.n(s),i=a(86),n=a.n(i);t.default={name:"gridtable",props:{data:Array,columns:Array,filterKey:String,loading:Boolean,graphType:String},data:function(){var e={};return this.columns.forEach(function(t){e[t]=1}),{endDate:(new Date).toISOString().split("T")[0],error:!1,selected:void 0,sortKey:"name",sortOrders:e,startDate:void 0}},computed:{sites:function(){var e=[];return this.rivers.forEach(function(t){t.value.match(/\d+/g)&&e.push(t.value)}),e.join()},filteredData:function(){var e=this.sortKey,t=this.filterKey&&this.filterKey.toLowerCase(),a=this.sortOrders[e]||1,s=this.data;return t&&(s=s.filter(function(e){return r()(e).some(function(a){return String(e[a]).toLowerCase().indexOf(t)>-1})})),e&&(s="cfs"===e?s.slice().sort(function(t,s){return t=t[e],s=s[e],(t-s)*a}):s.slice().sort(function(t,s){return t=t[e],s=s[e],(t===s?0:t>s?1:-1)*a})),s}},components:{graph:n.a},filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},mounted:function(){},methods:{sortBy:function(e){this.resetTable(),this.sortKey=e,this.sortOrders[e]=-1*this.sortOrders[e]},selectRiver:function(e){var t=e.currentTarget;t.classList.contains("is-selected")?(this.resetTable(),this.selected=void 0):(this.resetTable(),t.classList.add("is-selected"),this.selected=t.dataset.selected,t.nextElementSibling.classList.add("show-row"))},resetTable:function(){var e=this.$el.querySelector("tr.is-selected"),t=this.$el.querySelector(".show-row");e&&(e.classList.remove("is-selected"),t.classList.remove("show-row"))}}}},49:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navbar",data:function(){return{title:"Riverflow",tagline:"Texas Edition"}}}},50:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(26),r=a.n(s),i=a(98),n=a.n(i),o=a(87),l=a.n(o),c=a(99),v=a.n(c);t.default={name:"rivertable",data:function(){return{baseMapUrl:"//maps.google.com/?q=",baseUsgsUrl:"https://waterservices.usgs.gov/nwis/iv/",columns:["name","cfs"],error:!1,graphType:"00060",loading:!1,rivers:v.a.data,riversFormatted:[],searchQuery:"",showLegend:!0}},computed:{sites:function(){var e=[];return this.rivers.forEach(function(t){t.value.match(/\d+/g)&&e.push(t.value)}),e.join()}},components:{"grid-table":l.a},watch:{$route:function(e,t){console.log(e)}},mounted:function(){this.getUsgsData()},methods:{getUsgsData:function(){var e=this;e.riversFormatted=[],e.loading=!0,r.a.get(this.baseUsgsUrl,{params:{parameterCd:this.graphType,sites:this.sites,format:"json",period:"PT12H",siteStatus:"active"}}).then(function(t){e.loading=!1,t.data.value.timeSeries?(e.displayUsgsData(t.data.value.timeSeries),e.error=void 0):e.error="no river data available"}).catch(function(t){console.log(t),e.loading=!1,e.error=t.message})},displayUsgsData:function(e){var t=this,a=new Date,s=void 0,r={},i=void 0,n=void 0,o=void 0,l=void 0,c=void 0,v=void 0,u=void 0,d=void 0,p=void 0,h=void 0;e.forEach(function(e,f){s=e.values[0].value,s[0]&&(l=parseInt(s[0].value,10),i=s[s.length-1],c=parseInt(i.value,10),n=new Date(i.dateTime),h=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),v=Math.round(c/l*100),a.toDateString()===n.toDateString()&&(n=""),o=e.sourceInfo.geoLocation.geogLocation,p=e.sourceInfo.siteCode[0].value,u=c>l,d=v>130,r={name:e.sourceInfo.siteName,location:t.baseMapUrl+o.latitude+",+"+o.longitude,site:p,date:n,time:h,cfs:c,oldCfs:l,condition:t.getConditions(c).condition,level:t.getConditions(c).level,rising:u,risingFast:d},t.mergeRiverInfo(r))})},mergeRiverInfo:function(e){var t=this,a=e.site;t.rivers.forEach(function(t){t.value===a&&(e.class=t.class)}),t.riversFormatted.push(e)},getConditions:function(e){var t=void 0,a=void 0;return e=parseInt(e,10),0===e?(t=n.a.flow0,a="level-0"):e>0&&e<50?(t=n.a.flow1,a="level-1"):e>=50&&e<100?(t=n.a.flow2,a="level-2"):e>=100&&e<300?(t=n.a.flow3,a="level-3"):e>=300&&e<600?(t=n.a.flow4,a="level-4"):e>=600&&e<2e3?(t=n.a.flow5,a="level-5"):e>=2e3&&(t=n.a.flow6,a="level-6"),{condition:t,level:a}}}}},76:function(e,t){},77:function(e,t){},78:function(e,t){},79:function(e,t){},80:function(e,t){},81:function(e,t){},85:function(e,t,a){a(80);var s=a(2)(a(46),a(94),null,null);e.exports=s.exports},86:function(e,t,a){a(81);var s=a(2)(a(47),a(95),null,null);e.exports=s.exports},87:function(e,t,a){a(77);var s=a(2)(a(48),a(91),"data-v-0b0f531b",null);e.exports=s.exports},88:function(e,t,a){a(78);var s=a(2)(a(49),a(92),"data-v-3680842d",null);e.exports=s.exports},89:function(e,t,a){a(79);var s=a(2)(a(50),a(93),"data-v-727727f4",null);e.exports=s.exports},90:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),e._v(" "),a("keep-alive",[a("router-view")],1),e._v(" "),a("footer-main")],1)},staticRenderFns:[]}},91:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gridtable"},[a("svg",{staticStyle:{display:"none"}},[a("symbol",{attrs:{viewBox:"0 0 27 30",version:"1.1"}},[a("g",{attrs:{id:"arrow-flow"}},[a("polygon",{attrs:{points:"21.6 29.4545455 5.4 29.4545455 5.4 16.2 0 16.2 13.5 0 27 16.2 21.6 16.2"}})])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading notification is-warning"},[e._v("Loading river information...")]),e._v(" "),a("table",{directives:[{name:"show",rawName:"v-show",value:e.filteredData.length,expression:"filteredData.length"}],staticClass:"table"},[a("thead",[a("tr",[e._l(e.columns,function(t){return a("th",{class:[{active:e.sortKey==t},t],on:{click:function(a){e.sortBy(t)}}},[e._v("\n          "+e._s(e._f("capitalize")(t))+"\n          "),a("span",{staticClass:"arrow",class:e.sortOrders[t]>0?"asc":"dsc"})])}),e._v(" "),a("th",{staticClass:"th-class"},[e._v("Class")]),e._v(" "),a("th",{staticClass:"th-time"},[e._v("Time")])],2)]),e._v(" "),a("tfoot",[a("tr",[a("th",[e._v("River Name")]),e._v(" "),a("th",[a("abbr",{attrs:{title:"cubic feet per second"}},[e._v("CFS")])]),e._v(" "),a("th",{staticClass:"th-class"},[e._v("Class")]),e._v(" "),a("th",{staticClass:"th-time"},[e._v("Time")])])]),e._v(" "),e._l(e.filteredData,function(t){return a("tbody",[a("tr",{class:t.level,attrs:{"data-selected":t.site},on:{click:e.selectRiver}},[a("th",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v("\n          "+e._s(t.cfs)+"\n\n          "),a("svg",{class:[t.rising?"arrow-up":"arrow-down",t.risingFast?"is-rising-fast":""],attrs:{viewBox:"0 0 27 30"}},[a("use",{attrs:{"xlink:href":"#arrow-flow"}})])]),e._v(" "),a("td",{staticClass:"wwclass"},[e._v(e._s(t.class))]),e._v(" "),a("td",[t.date?a("span",{staticClass:"date"},[e._v(e._s(t.date))]):e._e(),e._v(" "),a("span",{staticClass:"time"},[e._v(e._s(t.time))])])]),e._v(" "),a("tr",{staticClass:"row-details"},[a("td",{attrs:{colspan:"5"}},[a("div",{staticClass:"row-details-wrapper columns"},[a("div",{staticClass:"column column-condition is-one-quarter"},[a("div",{staticClass:"content"},[a("p",{staticClass:"sitecode"},[a("a",{staticClass:"button site-link",attrs:{href:t.location,target:"blank"}},[e._v("USGS site "+e._s(t.site)+" location")])]),e._v(" "),a("p",[e._v(e._s(t.condition))]),e._v(" "),a("p",{staticClass:"small"},[e._v("NOTE: The rising / falling arrows compare the current value to the value 12 hours ago. The river may already be on the way down")])])]),e._v(" "),a("div",{staticClass:"column column-graph is-three-quarters"},[a("graph",{directives:[{name:"show",rawName:"v-show",value:e.selected,expression:"selected"}],attrs:{selected:e.selected,startDate:e.startDate,endDate:e.endDate,graphType:e.graphType}})],1)])])])])})],2)])},staticRenderFns:[]}},92:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"hero is-bold is-primary"},[a("div",{staticClass:"container"},[e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header is-flex"},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),a("p",{staticClass:"tagline"},[e._v(e._s(e.tagline))])])}]}},93:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rivertable"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[e.error?a("div",{staticClass:"notification is-danger"},[a("button",{staticClass:"delete",on:{click:function(t){e.error=void 0}}}),e._v("\n        "+e._s(e.error)+"\n      ")]):e._e(),e._v(" "),e.showLegend?a("div",{staticClass:"notification content"},[a("a",{staticClass:"delete is-small",on:{click:function(t){e.showLegend=!1}}}),e._v(" "),e._m(0)]):e._e(),e._v(" "),a("div",{staticClass:"columns is-flex tools"},[a("div",{staticClass:"column column-search"},[a("div",{staticClass:"field level-item"},[a("label",{staticClass:"label",attrs:{for:"search"}},[e._v("Search")]),e._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"input",attrs:{id:"search",name:"search",type:"text",placeholder:"Filter the table"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),a("a",{staticClass:"delete is-small",on:{click:function(t){e.searchQuery=""}}})])])]),e._v(" "),a("div",{staticClass:"column column-button"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.loading},on:{click:e.getUsgsData}},[a("span",{staticClass:"refresh-long is-hidden-mobile"},[e._v("refresh river table")]),e._v(" "),a("span",{staticClass:"refresh-short is-hidden-tablet"},[e._v("↺")])])])]),e._v(" "),a("grid-table",{attrs:{data:e.riversFormatted,columns:e.columns,"filter-key":e.searchQuery,loading:e.loading,graphType:e.graphType}})],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Riverflow provides the latest "),a("abbr",{attrs:{title:"cubic feet per second"}},[e._v("CFS")]),e._v(" from the USGS gauges of floatable rivers and creeks. The color indicates optimal floating conditions with additional inforamtion and a 7 day graph in the details.")])}]}},94:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[e._m(0),e._v(" "),a("p",[a("a",{staticClass:"icon",attrs:{href:"https://github.com/PaddyMurphy/riverflow"}},[a("svg",{staticClass:"octicon octicon-mark-github",attrs:{"aria-hidden":"true",height:"24",version:"1.1",viewBox:"0 0 16 16",width:"24"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("Riverflow")]),e._v(" by "),a("a",{attrs:{href:"//www.mountaindrawn.com"}},[e._v("Mountaindrawn")]),e._v(". The source code is licensed\n        "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[e._v("MIT")]),e._v(".\n      ")])}]}},95:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"graph-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loadingGraph,expression:"loadingGraph"}],staticClass:"graph-loading"},[e._v("\n    Loading graph...\n  ")]),e._v(" "),a("div",{staticClass:"graph-image",domProps:{innerHTML:e._s(e.graphImage)}})])},staticRenderFns:[]}},98:function(e,t){e.exports={flow0:"Sorry but this river is bone dry. Try a spring fed river like the San Marcos til we get more rain.",flow1:"The river is pretty much just a trickle right. Not much good for floating at the moment but a good rain should bring it up",flow2:"It's barely moving but it should be floatable in kayaks or tubes. Be prepared to drag bottom in spots though.",flow3:"This is a pretty leisurely flow but still fun. You shouldn't have any problems scraping bottom in canoes at this level",flow4:"Now we're talking! The river is flowing pretty good but not too dangerous. If the graph shows a sharp increase over the past week it may still be rising.",flow5:"The flow is moving now! Unless this is a large volume river like the Colorado or Rio Grande you can expect some really fast moving water.",flow6:"DANGER! This is flowing at a high volume! Unless you are an experienced paddler please check with a local outfitter for more information before heading out. If this is a large river like the Colorado it may be good this high."}},99:function(e,t){e.exports={data:[{text:"Brazos River : Palo Pinto",value:"08089000",class:"II-III"},{text:"Brazos River : Glen Rose",value:"08091000",class:"II-III"},{text:"Brazos River : Waco",value:"08096500",class:"II-III"},{text:"Brazos River : Bryan",value:"08108700",class:"II-III"},{text:"Lampasas River : Kempner",value:"08103800",class:"II+"},{text:"Lampasas River : Ding Dong",value:"08103940",class:"II+"},{text:"Lampasas River : Belton",value:"08104100",class:"II+"},{text:"Barton Springs",value:"08155500",class:"N/A"},{text:"Barton Creek : Above Barton Springs",value:"08155400",class:"II"},{text:"Barton Creek : Loop 360",value:"08155300",class:"II-III"},{text:"Barton Creek : Lost Ck Blvd",value:"08155240",class:"II-III"},{text:"Barton Creek : SH 71",value:"08155200",class:"II-III+"},{text:"Colorado River : Austin",value:"08158000",class:"I-II"},{text:"Colorado River : Bastrop",value:"08159200",class:"I-II"},{text:"Onion Creek : Manchaca",value:"08158827",class:"II-III"},{text:"Onion Creek : Hwy 183",value:"08159000",class:"II-III"},{text:"Onion Creek : Driftwood",value:"08158700",class:"II-III"},{text:"Llano River : Llano",value:"08151500",class:"II-III"},{text:"Llano River : Mason",value:"08150700",class:"II-III"},{text:"Llano River : Junction",value:"08150000",class:"I-II"},{text:"San Saba River : Menard",value:"08144500",class:"II"},{text:"San Saba River : San Saba",value:"08146000",class:"II"},{text:"Guadalupe River : Spring Branch",value:"08167500",class:"II"},{text:"Guadalupe River : Sattler",value:"08167800",class:"II"},{text:"Guadalupe River : Comal New Braunfels",value:"08168500",class:"II"},{text:"Guadalupe River : FM 1117 nr Seguin",value:"08169792",class:"II"},{text:"Guadalupe River : Gonzales",value:"08169845",class:"II"},{text:"San Marcos River : San Marcos",value:"08170500",class:"II"},{text:"San Marcos River : Luling",value:"08172000",class:"II"},{text:"Blanco River : Wimberley",value:"08171000",class:"II-III"},{text:"Blanco River : Kyle",value:"08171300",class:"II-III"},{text:"Nueces River : Montell",value:"08189998",class:"II"},{text:"Nueces River : Laguna",value:"08190000",class:"II"},{text:"Nueces River : Uvalde",value:"08192000",class:"II"},{text:"Nueces River : Cotulla",value:"08194000",class:"II"},{text:"Nueces River : Three Rivers",value:"08210000",class:"II"},{text:"Frio River : Concan",value:"08195000",class:"II"},{text:"Rio Grande : Castolon",value:"08374550",class:"II-III"},{text:"Rio Grande : Big Bend",value:"08375300",class:"II-III"},{text:"Pecos River : Orla",value:"08412500",class:"II-III"},{text:"Pecos River : Girvin",value:"08446500",class:"II-III"},{text:"Medina River : Patterson Road",value:"0817887350",class:"I-II"},{text:"Medina River : Bandera",value:"08178880",class:"I-II"},{text:"San Antonio River :",value:"08188500",class:"II"},{text:"Pedernales River : Fredericksburg",value:"08152900",class:"II"},{text:"Pedernales River : Johnson City",value:"08153500",class:"II"},{text:"Walnut Creek : Austin",value:"08158200",class:"III"},{text:"Dolan creek",value:"08449100",class:"I"}]}}},[44]);
//# sourceMappingURL=app.6d9ede808c5f1044b9bc.js.map