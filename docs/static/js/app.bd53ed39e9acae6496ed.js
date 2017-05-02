webpackJsonp([1],Array(47).concat([function(e,t,a){"use strict";var r=a(9),s=a(146),i=a(135),o=a.n(i),n=a(136),l=a.n(n);r.default.use(s.a),t.a=new s.a({linkActiveClass:"is-active",routes:[{path:"/streamflow",name:"Streamflow",component:l.a},{path:"/",name:"Riverflow",component:o.a},{path:"/:river",name:"RiverflowUrl",component:o.a}]})},function(e,t,a){a(115);var r=a(1)(a(67),a(137),null,null);e.exports=r.exports},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(9),s=a(48),i=a.n(s),o=a(47);r.default.config.productionTip=!1,new r.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(9),s=a(114),i=(a.n(s),a(112)),o=a.n(i),n=a(113),l=a.n(n),c=a(133),u=a.n(c);r.default.use(o.a,{locale:l.a}),t.default={name:"app",components:{navbar:u.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(148),s=a.n(r);t.default={name:"conditions",data:function(){return{condition:null}},props:{latestCfs:{type:String,required:!0}},watch:{latestCfs:"displayConditions"},methods:{displayConditions:function(){var e=parseInt(this.latestCfs,10);return 0===e?this.condition=s.a.flow0:e>0&&e<50?this.condition=s.a.flow1:e>=50&&e<100?this.condition=s.a.flow2:e>=100&&e<300?this.condition=s.a.flow3:e>=300&&e<600?this.condition=s.a.flow4:e>=600&&e<2e3?this.condition=s.a.flow5:e>=2e3&&(this.condition=s.a.flow6),this.condition}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(79),s=a.n(r);t.default={name:"graph",data:function(){return{graphBaseUrl:"//waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS",graphImage:null,loadingGraph:!1}},props:{radioDateType:{type:String,required:!0},selected:{type:String,required:!0},startDate:{required:!0},endDate:{type:[String,Date],required:!0},graphType:{type:String,required:!1},period:{type:Number,required:!0,default:7}},watch:{selected:"displayGraph"},methods:{displayGraph:function(){var e,t=this,a=this.startDate,r=this.endDate,i=this.graphBaseUrl+"&parm_cd="+this.graphType+"&site_no="+this.selected;"object"===s()(this.startDate)&&(a=this.startDate.toISOString().split("T")[0]),"object"===s()(this.endDate)&&(r=this.endDate.toISOString().split("T")[0]),"period"===this.radioDateType&&(i=i+"&period="+this.period),"date"===this.radioDateType&&a&&(i=i+"&begin_date="+a+"&end_date="+r),e='<img src="'+i+'"class="graph" alt="USGS Water-data graph">',this.graphImage=null,this.loadingGraph=!0;var o=new Image;return o.src=i,o.onload=function(a){t.graphImage=e,t.loadingGraph=!1},e}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(76),s=a.n(r);t.default={name:"history",data:function(){return{history:[],STORAGE_KEY:"riverflow-history"}},props:{latestCfs:{type:String,required:!0},siteName:{type:String,required:!0},latestTime:{type:String,required:!0},latestDate:{type:String,required:!0}},mounted:function(){this.fetchHistory()},watch:{latestCfs:"addHistory"},methods:{fetchHistory:function(){var e=this;return JSON.parse(window.localStorage.getItem(this.STORAGE_KEY)||"[]").forEach(function(t,a){e.history.push(t)}),this.history},saveHistory:function(e){window.localStorage.setItem(this.STORAGE_KEY,s()(e))},addHistory:function(){this.history.length>=7&&this.history.pop(),this.history.unshift({cfs:this.latestCfs,name:this.siteName,time:this.latestTime,date:this.latestDate}),this.saveHistory(this.history)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"intro",props:{period:{type:Number,required:!0}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navbar",computed:{isDev:function(){return 0}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(30),s=a.n(r),i=a(127),o=a.n(i),n=a(126),l=a.n(n);t.default={name:"photos",props:{siteName:{type:String,required:!1}},data:function(){return{apiKey:"6c6069e831fb567b86c7d9b75c82624f",flickrTags:null,flickrUrl:"https://api.flickr.com/services/rest/?&method=flickr.photos.search",loading:!1,disableButton:!1,numberOfImages:10,galleryImages:[]}},watch:{siteName:function(){this.clearGallery(),this.getFlickrImages()}},methods:{buildFlickrTags:function(){return this.flickrTags=this.siteName.replace(/:.*/,"").trim(),this.flickrTags=this.flickrTags.replace(/\s+/g,"+"),this.flickrTags="kayak,Texas,"+this.flickrTags,this.flickrTags},getFlickrImages:function(){var e=this;this.loading=!0,s.a.get(e.flickrUrl,{params:{api_key:e.apiKey,format:"json",nojsoncallback:1,per_page:e.numberOfImages,sort:"interestingness-asc",tag_mode:"all",tags:e.buildFlickrTags()}}).then(function(t){e.loading=!1,e.buildImages(t.data.photos.photo)}).catch(function(t){console.error(t.message),e.loading=!1,e.error=t.message})},buildImages:function(e){var t,a,r=this,s=document.querySelector(".gallery"),i=document.createDocumentFragment();e.forEach(function(e,s){r.photoURL="//farm"+e.farm+".static.flickr.com/"+e.server+"/"+e.id+"_"+e.secret,r.square=r.photoURL+"_q.jpg",r.photoLarge=r.photoURL+"_b.jpg",r.photoOriginal=r.photoURL+"_o.jpg",r.photoHref="//www.flickr.com/photos/"+e.owner+"/"+e.id,r.galleryImages.push({src:r.photoLarge,title:e.title,w:0,h:0}),t=new Image,t.src=r.square,t.setAttribute("itemprop","thumbnail"),t.title=e.title,t.height=150,t.width=150,t.dataset.index=s,a=document.createElement("a"),a.rel="prefetch",a.href=r.photoLarge,a.onclick=r.initGallery,a.appendChild(t),i.appendChild(a)}),s.appendChild(i),this.disableButton=!0},clearGallery:function(){this.$el.querySelector(".gallery").innerHTML="",this.disableButton=!1,this.galleryImages=[]},initGallery:function(e){e.preventDefault();var t=this,a=document.querySelector(".pswp"),r={index:e.target.dataset.index,showHideOpacity:!0},s=new o.a(a,l.a,t.galleryImages,r);s.listen("gettingData",function(e,t){if(t.w<1||t.h<1){var a=new Image;a.onload=function(){t.w=this.width,t.h=this.height,s.invalidateCurrItems(),s.updateSize(!0)},a.src=t.src}}),s.init(),s.goTo(parseInt(e.target.dataset.index,10))}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(30),s=a.n(r),i=a(149),o=a.n(i),n=a(132),l=a.n(n),c=a(129),u=a.n(c),d=a(134),p=a.n(d),v=a(130),h=a.n(v),f=a(131),g=a.n(f);t.default={name:"riverflow",data:function(){return{backgroundColor:null,baseMapUrl:"//maps.google.com/?q=",endDate:(new Date).toISOString().split("T")[0],error:null,graphType:"00060",latestCfs:"",latestDate:"",latestTime:"",latitude:null,loading:!1,loadingEl:document.querySelector(".loading"),longitude:null,mapUrl:null,options:o.a.data,period:7,radioDateType:"period",selected:"selectRiver",selectedText:"Select a river",showSearchOptions:!1,siteName:"",startDate:null,valueBaseUrl:"https://waterservices.usgs.gov/nwis/iv/"}},components:{intro:l.a,conditions:u.a,photos:p.a,graph:h.a,history:g.a},mounted:function(){"RiverflowUrl"===this.$route.name&&this.setSelectedRiver(this.$route.params.river)},watch:{selected:"getUsgsData",loading:"toggleLoading"},methods:{setSelectedRiver:function(e){var t=this;this.options.forEach(function(a,r){t.formatRiverName(a.text)===e&&(t.selected=a.value)})},changeRiver:function(e){var t=this;this.selected=e,this.options.forEach(function(a,r){a.value===e&&(t.selectedText=a.text)}),t.$el.querySelector(".el-input__inner").value=""},toggleSearchOptions:function(){this.showSearchOptions?this.showSearchOptions=!1:this.showSearchOptions=!0},getUsgsData:function(){var e=this;"selectRiver"!==this.selected&&this.selected&&(this.loading=!0,s.a.get(this.valueBaseUrl,{params:{parameterCd:this.graphType,sites:this.selected,format:"json",period:"P1D"}}).then(function(t){e.loading=!1,t.data.value.timeSeries[0]?(e.displayUsgsData(t.data.value.timeSeries[0]),e.error=null):e.error="no river data available"}).catch(function(t){console.error(t.message),e.loading=!1,e.error=t.message}))},displayUsgsData:function(e){var t=e.values,a=t[0].value.reverse()[0],r=new Date(a.dateTime);this.latestCfs=a.value,this.siteName=e.sourceInfo.siteName,this.latitude=e.sourceInfo.geoLocation.geogLocation.latitude,this.longitude=e.sourceInfo.geoLocation.geogLocation.longitude,this.latestDate=r.toDateString(),this.latestTime=r.toLocaleTimeString(),this.mapUrl=this.baseMapUrl+this.latitude+",+"+this.longitude},formatRiverName:function(e){var t=e;return t=t.toLowerCase(),t=t.replace(/ /g,""),t=t.replace(/(\r\n|\n|\r)/gm,""),t=t.replace(/-(\S*)-/g,"")},selectBackground:function(e){this.backgroundColor=e.target.value,document.body.style.backgroundColor=e.target.value;var t=this.backgroundColor.substring(1),a=parseInt(t,16),r=a>>16&255,s=a>>8&255,i=a>>0&255,o=.2126*r+.7152*s+.0722*i;document.body.style.color=o<128?"#fff":"#000"},toggleLoading:function(){var e=!0===this.loading?"flex":"none";this.loadingEl.style.display=e}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"streamflow",data:function(){return{valueBaseUrl:"https://waterservices.usgs.gov/nwis/iv/"}},mounted:function(){},watch:{},methods:{}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,function(e,t,a){a(122);var r=a(1)(a(68),a(144),"data-v-83607f56",null);e.exports=r.exports},function(e,t,a){a(123);var r=a(1)(a(69),a(145),null,null);e.exports=r.exports},function(e,t,a){a(120);var r=a(1)(a(70),a(142),null,null);e.exports=r.exports},function(e,t,a){a(116);var r=a(1)(a(71),a(138),"data-v-0784fe42",null);e.exports=r.exports},function(e,t,a){a(119);var r=a(1)(a(72),a(141),"data-v-3680842d",null);e.exports=r.exports},function(e,t,a){a(118);var r=a(1)(a(73),a(140),"data-v-25ec501e",null);e.exports=r.exports},function(e,t,a){a(117);var r=a(1)(a(74),a(139),null,null);e.exports=r.exports},function(e,t,a){a(121);var r=a(1)(a(75),a(143),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),e._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("p",[e._v("Select a river to get the latest flow rate, a graph of flow history, and photos. Search by a period of days from today (default is "),a("span",{staticClass:"period"},[e._v(e._s(e.period))]),e._v(") or a date range.")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"riverflow"},[a("div",{staticClass:"select-river-wrapper"},[a("el-select",{staticClass:"select-river",attrs:{placeholder:e.selectedText},on:{change:e.changeRiver},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.text,disabled:""===e.value}})})),e._v(" "),a("el-collapse",{staticClass:"graph-options"},[a("el-collapse-item",{attrs:{title:"Search options",name:"1"}},[a("div",{staticClass:"graph-controls-menu"},[a("el-radio",{attrs:{id:"radio-dates-period",label:"period"},model:{value:e.radioDateType,callback:function(t){e.radioDateType=t},expression:"radioDateType"}},[e._v("Search by number of days")]),e._v(" "),a("el-input-number",{directives:[{name:"show",rawName:"v-show",value:"period"===e.radioDateType,expression:"radioDateType === 'period'"}],staticClass:"graph-period",attrs:{type:"number",min:7,max:90},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}}),e._v(" "),a("el-radio",{attrs:{id:"radio-dates-date",label:"date"},model:{value:e.radioDateType,callback:function(t){e.radioDateType=t},expression:"radioDateType"}},[e._v("Search by a date range")])],1),e._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"date"===e.radioDateType,expression:"radioDateType === 'date'"}],staticClass:"graph-control-label"},[a("span",{staticClass:"label-name"},[e._v("start date")]),e._v(" "),a("el-date-picker",{staticClass:"graph-start",attrs:{type:"date",placeholder:"Pick a start date"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),e._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"date"===e.radioDateType,expression:"radioDateType === 'date'"}],staticClass:"graph-control-label"},[a("span",{staticClass:"label-name"},[e._v("end date")]),e._v(" "),a("el-date-picker",{staticClass:"graph-end",attrs:{type:"date"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)])],1)],1),e._v(" "),e.error?a("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),a("div",{staticClass:"condition-wrapper"},[e.latestCfs?a("div",{staticClass:"latest-cfs"},[a("div",{staticClass:"rate-group"},[a("span",{staticClass:"rate"},[e._v(e._s(e.latestCfs))]),e._v(" "),a("abbr",{staticClass:"rate-abbr",attrs:{title:"cubic feet per second"}},[e._v("CFS")])]),e._v(" "),e.mapUrl?a("a",{attrs:{href:e.mapUrl}},[e._v("Location of guage")]):e._e(),e._v(" "),a("div",{staticClass:"time-group"},[e.latestDate?a("span",[e._v(e._s(e.latestDate)+" at "+e._s(e.latestTime))]):e._e()])]):e._e(),e._v(" "),a("conditions",{attrs:{latestCfs:e.latestCfs}}),e._v(" "),e.latestCfs?e._e():a("intro",{attrs:{period:e.period}}),e._v(" "),a("history",{attrs:{latestCfs:e.latestCfs,siteName:e.siteName,latestTime:e.latestTime,latestDate:e.latestDate}})],1),e._v(" "),a("graph",{directives:[{name:"show",rawName:"v-show",value:e.selectedText,expression:"selectedText"}],attrs:{radioDateType:e.radioDateType,selected:e.selected,startDate:e.startDate,endDate:e.endDate,graphType:e.graphType,period:e.period}}),e._v(" "),a("photos",{directives:[{name:"show",rawName:"v-show",value:e.selectedText,expression:"selectedText"}],attrs:{siteName:e.selectedText}}),e._v(" "),a("footer",[e._v("\n    created by "),a("a",{attrs:{href:"//mountaindrawn.com"}},[e._v("mountaindrawn.com")]),e._v(" "),a("input",{staticClass:"color-picker",attrs:{type:"color",value:"#E0E4CC"},on:{change:e.selectBackground}}),e._v(" "),a("small",{staticClass:"color-value"},[e._v(e._s(e.backgroundColor))])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photos"},[a("div",{staticClass:"gallery"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.isDev?a("nav",{staticClass:"nav"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("\n      Riverflow\n    ")]),e._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/streamflow"}},[e._v("\n      Streamflow\n    ")])],1):e._e(),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h1",{staticClass:"title"},[e._v("Riverflow")]),e._v(" "),a("p",{staticClass:"tagline"},[e._v("Texas Edition")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.history.length>1,expression:"history.length > 1"}],staticClass:"history"},[a("h4",{staticClass:"history-title"},[e._v("History")]),e._v(" "),a("ul",{staticClass:"time-history"},e._l(e.history,function(t){return a("li",[a("b",[e._v(e._s(t.cfs))]),e._v(" "),a("abbr",{staticClass:"cfs",attrs:{title:"cubic feet per second"}},[e._v("cfs")]),e._v(" "),a("span",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("small",[e._v(e._s(t.date)+" at "+e._s(t.time))])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"streamflow"},[a("h1",[e._v("streamflow")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.condition?a("div",{staticClass:"conditions"},[e._v("\n  "+e._s(e.condition)+"\n")]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"graph-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loadingGraph,expression:"loadingGraph"}],staticClass:"graph-loading"},[e._v("\n    Loading graph...\n  ")]),e._v(" "),a("div",{staticClass:"graph-image",domProps:{innerHTML:e._s(e.graphImage)}})])},staticRenderFns:[]}},,,function(e,t){e.exports={flow0:"Sorry but this river is bone dry. Try a spring fed river like the San Marcos til we get more rain.",flow1:"The river is pretty much just a trickle right. Not much good for floating at the moment but a good rain should bring it up",flow2:"It's barely moving but it should be floatable in kayaks or tubes. Be prepared to drag bottom in spots though.",flow3:"This is a pretty leisurely flow but still fun. You shouldn't have any problems scraping bottom in canoes at this level",flow4:"Now we're talking! The river is flowing pretty good but not too dangerous. If the graph shows a sharp increase over the past week it may still be rising.",flow5:"The flow is moving now! Unless this is a large volume river like the Colorado or Rio Grande you can expect some really fast moving water.",flow6:"DANGER! Possible death awaits! Unless this is a large volume river like the Colorado you may drown. Check with a local outfitter for more details on conditions before heading out."}},function(e,t){e.exports={data:[{text:"Select a river",value:"selectRiver"},{text:"-- Brazos River Basin --",value:""},{text:"Brazos River : Palo Pinto",value:"08089000"},{text:"Brazos River : Glen Rose",value:"08091000"},{text:"Brazos River : Waco",value:"08096500"},{text:"Brazos River : Bryan",value:"08108700"},{text:"Lampasas River : Kempner",value:"08103800"},{text:"Lampasas River : Ding Dong",value:"08103940"},{text:"Lampasas River : Belton",value:"08104100"},{text:"-- Colorado River Basin --",value:""},{text:"Barton Springs",value:"08155500"},{text:"Barton Creek : Above Barton Springs",value:"08155400"},{text:"Barton Creek : Loop 360",value:"08155300"},{text:"Barton Creek : Lost Ck Blvd",value:"08155240"},{text:"Barton Creek : SH 71",value:"08155200"},{text:"Colorado River : Austin",value:"08158000"},{text:"Colorado River : Bastrop",value:"08159200"},{text:"Onion Creek : Hwy 183",value:"08159000"},{text:"Llano River : Llano",value:"08151500"},{text:"Llano River : Mason",value:"08150700"},{text:"Llano River : Junction",value:"08150000"},{text:"San Saba River : Menard",value:"08144500"},{text:"San Saba River : San Saba",value:"08146000"},{text:"-- Guadalupe River Basin --",value:""},{text:"Guadalupe River : Spring Branch",value:"08167500"},{text:"Guadalupe River : Sattler",value:"08167800"},{text:"Comal River : New Braunfels",value:"08168500"},{text:"Guadalupe River : FM 1117 nr Seguin",value:"08169792"},{text:"Guadalupe River : Gonzales",value:"08173900"},{text:"San Marcos River : San Marcos",value:"08170500"},{text:"San Marcos River : Luling",value:"08172000"},{text:"Blanco River : Wimberley",value:"08171000"},{text:"Blanco River : Kyle",value:"08171300"},{text:"-- Nueces River Basin --",value:""},{text:"Nueces River : Laguna",value:"08190000"},{text:"Nueces River : Uvalde",value:"08192000"},{text:"Frio River : Concan",value:"08195000"},{text:"-- Rio Grande Basin --",value:""},{text:"Rio Grande : Castolon",value:"08374550"},{text:"Rio Grande : Big Bend",value:"08375300"},{text:"Pecos River : Pecos",value:"08419000"},{text:"Pecos River : Girvin",value:"08446500"},{text:"-- San Antonio River Basin --",value:""},{text:"Medina River : Patterson Road",value:"0817887350"},{text:"Medina River : Bandera",value:"08178880"},{text:"San Antonio River : Goliad",value:"08188500"}]}}]),[66]);
//# sourceMappingURL=app.bd53ed39e9acae6496ed.js.map