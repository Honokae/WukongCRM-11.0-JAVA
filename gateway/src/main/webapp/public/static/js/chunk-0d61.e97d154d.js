(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d61"],{"0CB9":function(e,t,n){},A4N6:function(e,t,n){},CDPy:function(e,t,n){"use strict";var a=n("mWxQ");n.n(a).a},"G+lJ":function(e,t,n){"use strict";var a=n("tuyL");n.n(a).a},HuqW:function(e,t,n){},Vm8M:function(e,t,n){"use strict";var a=n("7Qib"),o={name:"MapView",components:{},props:{title:{type:String,default:""},lat:{type:[String,Number],default:0},lng:{type:[String,Number],default:0}},data:function(){return{}},computed:{},mounted:function(){var e=this;this.$el.style.zIndex=Object(a.q)(),document.body.appendChild(this.$el),Object(a.l)().then(function(){var t=new BMap.Map(e.$refs.mapView,{enableMapClick:!1}),n=new BMap.Point(parseFloat(e.lng),parseFloat(e.lat));t.centerAndZoom(n,18),t.enableScrollWheelZoom();var a=new BMap.Marker(n);t.addOverlay(a);var o=new BMap.InfoWindow(e.title);a.addEventListener("click",function(){t.openInfoWindow(o,n)})})},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},methods:{hiddenView:function(){this.$emit("hidden")}}},s=(n("CDPy"),n("KHd+")),r=Object(s.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map-view"},[t("div",{ref:"mapView",staticClass:"main-map"}),this._v(" "),t("i",{staticClass:"el-icon-close map-close",on:{click:this.hiddenView}})])},[],!1,null,"eeabf37a",null);r.options.__file="MapView.vue";t.a=r.exports},YSp2:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"h",function(){return l}),n.d(t,"k",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"i",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return h}),n.d(t,"c",function(){return m}),n.d(t,"o",function(){return f}),n.d(t,"n",function(){return y}),n.d(t,"m",function(){return b}),n.d(t,"l",function(){return v}),n.d(t,"b",function(){return T}),n.d(t,"a",function(){return C});var a=n("GQeE"),o=n.n(a),s=n("t3Un");function r(e){return Object(s.a)({url:"adminDept/deleteDept/"+e.id,method:"post"})}function i(e){return Object(s.a)({url:"adminDept/setDept",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function l(e){return Object(s.a)({url:"adminDept/addDept",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function c(e){return Object(s.a)({url:"adminUser/setUser",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function u(e){return Object(s.a)({url:"adminUser/addUser",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function d(e){return Object(s.a)({url:"adminRole/getAllRoleList",method:"post",data:e})}function p(e){return Object(s.a)({url:"adminUser/resetPassword",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function h(e){return Object(s.a)({url:"adminUser/usernameEdit",method:"post",data:e})}function m(e){return Object(s.a)({url:"adminUser/usernameEditByManager",method:"post",data:e})}function f(e){return Object(s.a)({url:"adminUser/setUserStatus",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}var y="https://www.72crm.com/npm/static/user_import.xlsx";function b(e){var t=new FormData;return o()(e).forEach(function(n){t.append(n,e[n])}),Object(s.a)({url:"adminUser/excelImport",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"},timeout:6e4})}function v(e){return Object(s.a)({url:"adminUser/downExcel",method:"post",data:e,responseType:"blob"})}function T(e){return Object(s.a)({url:"adminUser/setUserDept",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function C(){return Object(s.a)({url:"adminUser/countNumOfUser",method:"post"})}},ZX9L:function(e,t,n){"use strict";var a={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(e){for(var t=0;t<this.options.length;t++){var n=this.options[t];if(n.value==e)return n}return{label:"本年",value:"year"}},typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},o=(n("G+lJ"),n("KHd+")),s=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",{staticClass:"time-type-select",attrs:{width:e.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[n("div",{staticClass:"type-popper"},[n("div",{staticClass:"type-content"},[e._l(e.options,function(t,a){return n("div",{key:a,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(n){e.typeSelectClick(t)}}},[n("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),n("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[n("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?n("div",{staticClass:"type-content-custom"},[n("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),n("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),n("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),n("el-input",{staticClass:"type-select",style:{width:e.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[n("i",{class:["el-icon-arrow-up",{"is-reverse":e.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"9dc9cb18",null);s.options.__file="index.vue";t.a=s.exports},"ej9+":function(e,t,n){"use strict";var a={name:"BaseTabsHead",components:{},props:{selectValue:[String,Number],tabs:Array},data:function(){return{currentValue:""}},computed:{},watch:{selectValue:function(){this.currentValue=this.selectValue}},mounted:function(){this.currentValue=this.selectValue},beforeDestroy:function(){},methods:{handleTabsClick:function(e,t){this.$emit("update:selectValue",e.name),this.$emit("change",e.name)}}},o=(n("jGgZ"),n("KHd+")),s=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("flexbox",{staticClass:"base-tabs-head",attrs:{justify:"space-between"}},[n("div",[e._t("left")],2),e._v(" "),n("el-tabs",{on:{"tab-click":e.handleTabsClick},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.tabs,function(e,t){return n("el-tab-pane",{key:t+e.name,attrs:{label:e.label,name:e.name}})})),e._v(" "),n("div",[e._t("right")],2)],1)},[],!1,null,"52d082d3",null);s.options.__file="index.vue";t.a=s.exports},hPOZ:function(e,t,n){"use strict";var a=n("0CB9");n.n(a).a},jGgZ:function(e,t,n){"use strict";var a=n("A4N6");n.n(a).a},kZxc:function(e,t,n){"use strict";n.d(t,"p",function(){return r}),n.d(t,"r",function(){return i}),n.d(t,"f",function(){return l}),n.d(t,"q",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"o",function(){return p}),n.d(t,"h",function(){return h}),n.d(t,"e",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return y}),n.d(t,"g",function(){return b}),n.d(t,"j",function(){return v}),n.d(t,"i",function(){return T}),n.d(t,"k",function(){return C}),n.d(t,"m",function(){return g}),n.d(t,"n",function(){return w}),n.d(t,"l",function(){return j});var a=n("GQeE"),o=n.n(a),s=n("t3Un");function r(e){return Object(s.a)({url:"crmInstrument/queryBulletin",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function i(e){return Object(s.a)({url:"crmInstrument/queryDataInfo",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function l(e){return Object(s.a)({url:"crmInstrument/queryBulletinInfo",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function c(e){return Object(s.a)({url:"crmInstrument/queryRecordCount",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function u(e){return Object(s.a)({url:"crmInstrument/queryPerformance",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function d(e){return Object(s.a)({url:"crmInstrument/sellFunnel",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function p(e){return Object(s.a)({url:"crmInstrument/sellFunnelBusinessList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function h(e){return Object(s.a)({url:"crmInstrument/salesTrend",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function m(e){return e.label=e.crmType,Object(s.a)({url:"crmInstrument/queryRecordList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function f(e){return Object(s.a)({url:"crmInstrument/forgottenCustomerCount",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function y(e){return Object(s.a)({url:"crmInstrument/forgottenCustomerPageList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function b(e){return Object(s.a)({url:"biRanking/ranking",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function v(e){return Object(s.a)({url:"crmInstrument/queryModelSort",method:"post",data:e})}function T(e){return Object(s.a)({url:"crmInstrument/setModelSort",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function C(e){return Object(s.a)({url:"crmInstrument/unContactCustomerPageList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function g(e){return Object(s.a)({url:"crmInstrument/exportRecordList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"})}function w(e){var t=new FormData;return o()(e).forEach(function(n){t.append(n,e[n])}),Object(s.a)({url:"crmInstrument/importRecordList",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function j(e){return Object(s.a)({url:"crmInstrument/downloadRecordExcel",method:"post",data:e,responseType:"blob"})}},mWxQ:function(e,t,n){},nboU:function(e,t,n){"use strict";t.a={watch:{loading:function(e){if(e){var t=this.$refs.wkDialog.$refs.dialog;this.loadingInstance=this.$loading({target:t})}else this.loadingInstance&&this.loadingInstance.close()}}}},sHaP:function(e,t,n){"use strict";var a=n("HuqW");n.n(a).a},tuyL:function(e,t,n){},z6WW:function(e,t,n){"use strict";n.r(t);var a=n("4d7F"),o=n.n(a),s=n("QbLZ"),r=n.n(s),i=n("kZxc"),l=n("YSp2"),c={name:"RecordTabHead",components:{BaseTabsHead:n("ej9+").a},props:{count:{type:[String,Number],default:0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{}},u=(n("sHaP"),n("KHd+")),d=Object(u.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("base-tabs-head",this._g(this._b({staticClass:"Task-tabs-head"},"base-tabs-head",this.$attrs,!1),this.$listeners),[t("span",{staticClass:"title",attrs:{slot:"left"},slot:"left"},[t("i",{staticClass:"wk wk-message"}),this._v("跟进记录（"+this._s(this.count)+"）\n  ")])])},[],!1,null,"7215321f",null);d.options.__file="RecordTabHead.vue";var p=d.exports,h=n("HHBN"),m=n("ZX9L"),f=n("O8VQ"),y=n("/G0b"),b=n("ZoMv"),v=n("7Qib"),T=n("L2JU"),C={name:"FollowIndex",components:{RecordTabHead:p,XhUserCell:h.a,TimeTypeSelect:m.a,LogCell:f.a,LogEditDialog:y.a,CRMFullScreenDetail:function(){return Promise.all([n.e("chunk-a998"),n.e("chunk-8ee8"),n.e("chunk-69c2"),n.e("chunk-ed58"),n.e("chunk-5c2d")]).then(n.bind(null,"3z7q"))}},filters:{crmIconClass:function(e){return"wk wk-"+b.a.convertTypeToKey(e)},crmName:function(e){return b.a.convertTypeToName(e)}},props:{},data:function(){return{tabsSelectValue:"all",tabs:[{label:"全部",name:"all"},{label:"我创建的",name:"0"},{label:"我下属创建的",name:"1"}],options:[{label:"全部",value:""},{label:"线索",value:1},{label:"客户",value:2},{label:"联系人",value:3},{label:"商机",value:5},{label:"合同",value:6}],count:0,filterForm:{crmType:"",isUser:1,userId:"",subUser:"",queryType:0},timeSelect:{type:"default",value:"month"},list:[],loading:!1,noMore:!1,page:1,scrollKey:Date.now(),showFullDetail:!1,relationID:"",relationCrmType:"",logEditData:null,logEditPosition:{seciton:0,index:0},logEditDialogVisible:!1,requestParams:{}}},computed:r()({},Object(T.b)(["crm"]),{followRecordAuth:function(){return this.crm.followRecord},moreTypes:function(){var e=[];return this.followRecordAuth.excelimport&&e.push({type:"enter",name:"导入",icon:"wk wk-import"}),this.followRecordAuth.excelexport&&e.push({type:"out",name:"导出",icon:"wk wk-export"}),e},scrollDisabled:function(){return this.loading||this.noMore},userSelectShow:function(){return"0"!==this.filterForm.subUser}}),watch:{filterForm:{handler:function(){this.refreshList()},deep:!0}},mounted:function(){},created:function(){var e=this;this.$bus.on("import-crm-done-bus",function(t){"crmFollowLog"===t&&e.refreshList()})},beforeDestroy:function(){this.$bus.off("import-crm-done-bus")},methods:{tabsChange:function(e){this.filterForm.subUser="all"===e?"":e},refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},getList:function(){var e=this;this.loading=!0;var t={page:this.page,limit:15,isUser:1,queryType:0};this.timeSelect.type&&("custom"===this.timeSelect.type?(t.startTime=this.timeSelect.startTime.replace(/\./g,"-"),t.endTime=this.timeSelect.endTime.replace(/\./g,"-")):t.type=this.timeSelect.value||""),this.userSelectShow?t=r()({},t,this.filterForm):(t.label=this.filterForm.crmType,t.subUser=this.filterForm.subUser,t.dataType=this.filterForm.queryType,t.search=this.filterForm.search),this.requestParams=t,Object(i.e)(t).then(function(n){e.loading=!1,e.filterForm.subUser!=t.subUser?e.refreshList():(e.noMore||(e.list=e.list.concat(n.data.list||[]),e.page++),e.count=n.data.totalRow||0,e.noMore=n.data.lastPage)}).catch(function(){e.noMore=!0,e.loading=!1})},checkRelationDetail:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.relationID=t,this.relationCrmType=n?b.a.convertTypeToKey(e):e,this.showFullDetail=!0},userChange:function(e){this.filterForm.userId=e.value.length>0?e.value[0].userId:""},timeTypeChange:function(e){this.timeSelect=e,this.refreshList()},detailHandle:function(e){"delete"==e.type&&this.refreshList()},logCellDelete:function(e,t,n){this.list.splice(t,1),this.scrollKey=Date.now()},logCellEdit:function(e,t,n){this.logEditData=e,this.logEditPosition={seciton:n,index:t},this.logEditDialogVisible=!0},logEditSave:function(e){this.logEditPosition.index>=0&&this.list.splice(this.logEditPosition.index,1,e)},handleTypeDrop:function(e){var t=this;if(this.requestParams.label){if("out"==e)Object(i.m)(this.requestParams).then(function(e){Object(v.c)(e)}).catch(function(){});else if("enter"==e){var n=this.options.find(function(e){return e.value===t.requestParams.label});this.$bus.emit("import-crm-bus","crmFollowLog",{typeName:n.label+"跟进记录",ownerSelectShow:!1,repeatHandleShow:!1,historyShow:!1,noImportProcess:!0,importRequest:i.n,importParams:{crmType:this.requestParams.label},templateRequest:i.l,templateParams:{crmType:this.requestParams.label},downloadErrFuc:this.getImportError})}}else this.$message.error("请先选择一个模块导入/导出")},getImportError:function(e){return new o.a(function(t,n){Object(l.l)({token:e.token}).then(function(e){t(e)}).catch(function(){n()})})}}},g=(n("hPOZ"),Object(u.a)(C,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("record-tab-head",{attrs:{tabs:e.tabs,count:e.count,"select-value":e.tabsSelectValue},on:{"update:selectValue":function(t){e.tabsSelectValue=t},change:e.tabsChange}}),e._v(" "),n("flexbox",{staticClass:"filter-control card"},[n("el-input",{attrs:{placeholder:"关键字搜索","prefix-icon":"el-icon-search"},model:{value:e.filterForm.search,callback:function(t){e.$set(e.filterForm,"search",t)},expression:"filterForm.search"}}),e._v(" "),e.userSelectShow?n("xh-user-cell",{staticClass:"xh-user-cell",attrs:{radio:"",placeholder:"选择人员"},on:{"value-change":e.userChange}}):e._e(),e._v(" "),n("time-type-select",{attrs:{width:190,"default-type":e.timeSelect.value},on:{change:e.timeTypeChange}}),e._v(" "),n("el-select",{attrs:{placeholder:"选择"},model:{value:e.filterForm.crmType,callback:function(t){e.$set(e.filterForm,"crmType",t)},expression:"filterForm.crmType"}},e._l(e.options,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-select",{attrs:{placeholder:"选择"},model:{value:e.filterForm.queryType,callback:function(t){e.$set(e.filterForm,"queryType",t)},expression:"filterForm.queryType"}},e._l([{label:"全部",value:0},{label:"跟进记录",value:1},{label:"外勤签到",value:4}],function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),e._v(" "),e.moreTypes.length>0?n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[n("el-button",{attrs:{icon:"el-icon-more"}}),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreTypes,function(t,a){return n("el-dropdown-item",{key:a,attrs:{icon:t.icon,command:t.type}},[e._v(e._s(t.name))])}))],1):e._e()],1),e._v(" "),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getList,expression:"getList"}],key:""+e.scrollKey+e.tabsSelectValue,staticClass:"cell-section",attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},[e._l(e.list,function(t,a){return n("log-cell",{key:a,staticClass:"log-cell",attrs:{item:t,index:a},on:{"crm-detail":e.checkRelationDetail,delete:e.logCellDelete,edit:e.logCellEdit}},[n("div",{staticClass:"relate-cell",on:{click:function(n){e.checkRelationDetail(t.activityType,t.activityTypeId,!0)}}},[n("i",{staticClass:"relate-cell-icon",class:e._f("crmIconClass")(t.activityType)}),e._v(" "),n("span",{staticClass:"relate-cell-type"},[e._v(e._s(e._f("crmName")(t.activityType))+"-")]),e._v(" "),n("span",{staticClass:"relate-cell-name"},[e._v(e._s(t.crmTypeName))])])])}),e._v(" "),e.loading?n("p",{staticClass:"scroll-bottom-tips"},[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?n("p",{staticClass:"scroll-bottom-tips"},[e._v("没有更多了")]):e._e()],2),e._v(" "),n("c-r-m-full-screen-detail",{attrs:{visible:e.showFullDetail,"crm-type":e.relationCrmType,id:e.relationID},on:{"update:visible":function(t){e.showFullDetail=t},handle:e.detailHandle}}),e._v(" "),n("log-edit-dialog",{attrs:{visible:e.logEditDialogVisible,data:e.logEditData},on:{"update:visible":function(t){e.logEditDialogVisible=t},save:e.logEditSave}})],1)},[],!1,null,"33e8163d",null));g.options.__file="FollowIndex.vue";t.default=g.exports}}]);