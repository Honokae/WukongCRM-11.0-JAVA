(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6502"],{"3OSH":function(e,t,a){},GghX:function(e,t,a){"use strict";var i=a("3OSH");a.n(i).a},Np47:function(e,t,a){"use strict";var i=a("Uz2A");a.n(i).a},Uz2A:function(e,t,a){},tMlD:function(e,t,a){"use strict";var i=a("Y4Le"),n=a("Ew9n"),l=a("raay"),s=a("w4ZA"),r=a("3gPr"),o=a("CjUg"),c=a("8OTK"),d=a("6V3D"),u=a("h59h"),m=a("f6dm"),p=a("jHPx"),h={name:"ProductDetail",components:{SlideView:n.a,CRMDetailHead:l.a,DetailImg:d.a,CRMEditBaseInfo:s.a,RelativeFiles:r.a,RelativeHandle:o.a,CRMAllCreate:c.default,Sections:u.a},mixins:[m.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"product",headDetails:[{title:"产品类别",value:""},{title:"产品单位",value:""},{title:"产品价格",value:""},{title:"产品编码",value:""}],tabCurrentName:"CRMEditBaseInfo",isCreate:!1}},computed:{tabNames:function(){return[{label:"详细资料",name:"CRMEditBaseInfo"},{label:this.getTabName("附件",this.tabsNumber.fileCount),name:"RelativeFiles"},{label:"操作记录",name:"RelativeHandle"}]},mainFileList:function(){return this.detailData&&this.detailData.mainFileList?this.detailData.mainFileList:[]},detailFileList:function(){return this.detailData&&this.detailData.detailFileList?this.detailData.detailFileList:[]}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(i.i)({productId:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.headDetails[0].value=t.data.categoryName,e.headDetails[1].value=t.data.unit,e.headDetails[2].value=Object(p.h)(t.data.price||0),e.headDetails[3].value=t.data.num}).catch(function(){e.loading=!1,e.hideView()})},hideView:function(){this.$emit("hide-view")},previewImage:function(e,t){this.$bus.emit("preview-image-bus",{index:t,data:e})}}},v=(a("Np47"),a("KHd+")),f=Object(v.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{"listener-ids":e.listenerIDs,"no-listener-ids":e.noListenerIDs,"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{afterEnter:e.viewAfterEnter,close:e.hideView}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"crmDetailMain",staticClass:"detail-main"},[e.canShowDetail&&e.detailData?a("flexbox",{staticClass:"d-container",attrs:{direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{detail:e.detailData,"head-details":e.headDetails,id:e.id,"crm-type":e.crmType,"page-list":e.pageList},on:{pageChange:e.pageChange,handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),a("flexbox",{staticClass:"d-container-bd",attrs:{align:"stretch"}},[a("el-tabs",{staticClass:"d-container-bd--left",attrs:{type:"border-card"},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabNames,function(t,i){return a("el-tab-pane",{key:i,attrs:{label:t.label,name:t.name,lazy:""}},["CRMEditBaseInfo"===t.name?a(t.name,{tag:"c-r-m-edit-base-info",attrs:{detail:e.detailData,id:e.id,"crm-type":e.crmType}},[a("sections",{staticClass:"b-cells",attrs:{title:"图片信息","content-height":"auto"}},[a("div",{staticClass:"image"},[e.mainFileList.length>0?a("div",{staticClass:"image-info"},[a("div",{staticClass:"image-info__label"},[e._v("产品图片")]),e._v(" "),a("div",{staticClass:"image-info__list"},e._l(e.mainFileList,function(t,i){return a("img",{directives:[{name:"src",rawName:"v-src",value:t.url,expression:"item.url"}],key:i,staticClass:"main-img",on:{click:function(t){e.previewImage(e.mainFileList,i)}}})}))]):e._e(),e._v(" "),e.detailFileList.length>0?a("div",{staticClass:"image-info"},[a("div",{staticClass:"image-info__label"},[e._v("产品详情图片")]),e._v(" "),a("div",{staticClass:"image-info__list"},e._l(e.detailFileList,function(t,i){return a("img",{directives:[{name:"src",rawName:"v-src",value:t.url,expression:"item.url"}],key:i,staticClass:"detial-img",on:{click:function(t){e.previewImage(e.detailFileList,i)}}})}))]):e._e(),e._v(" "),0==e.detailFileList.length&&0==e.mainFileList.length?a("div",{staticClass:"no-img"},[e._v("暂无图片")]):e._e()])])],1):a(t.name,{tag:"component",attrs:{detail:e.detailData,id:e.id,"crm-type":e.crmType}})],1)}))],1)],1):e._e()],1),e._v(" "),e.isCreate?a("c-r-m-all-create",{attrs:{action:{type:"update",id:e.id,batchId:e.detailData.batchId,editDetail:e.detailData},"crm-type":e.crmType},on:{"save-success":e.editSaveSuccess,close:function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"2a78c4f0",null);f.options.__file="Detail.vue";t.a=f.exports},"x/0Y":function(e,t,a){"use strict";a.r(t);var i=a("7j8g"),n=a("tMlD"),l=a("5QVi"),s={name:"ProductIndex",components:{ProductCreate:i.a,ProductDetail:n.a},mixins:[l.a],data:function(){return{crmType:"product",createShow:!1}},computed:{},mounted:function(){},methods:{cellClassName:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"name"===t.property?"can-visit--underline":""},createClick:function(){this.createShow=!0}}},r=(a("GghX"),a("KHd+")),o=Object(r.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("c-r-m-list-head",{attrs:{search:e.search,"crm-type":e.crmType,"create-fun":e.createClick,title:"产品管理",placeholder:"请输入产品名称","main-title":"新建产品"},on:{"update:search":function(t){e.search=t},"on-handle":e.listHeadHandle,"on-search":e.crmSearch,"on-export":e.exportInfos}}),e._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:!e.crm.product.index,expression:"!crm.product.index"}],staticClass:"crm-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"}},[a("c-r-m-table-head",{ref:"crmTableHead",attrs:{"crm-type":e.crmType,"sort-data":e.sortData},on:{filter:e.handleFilter,handle:e.handleHandle,scene:e.handleScene}}),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"n-table--border",staticStyle:{width:"100%"},attrs:{id:"crm-table","row-height":40,data:e.list,height:e.tableHeight,"cell-class-name":e.cellClassName,"row-key":e.crmType+"Id","use-virtual":"",stripe:"",border:"","highlight-current-row":""},on:{"row-click":e.handleRowClick,"sort-change":e.sortChange,"header-dragend":e.handleHeaderDragend,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"","reserve-selection":"",type:"selection",align:"center",width:"55"}}),e._v(" "),e._l(e.fieldList,function(t,i){return a("el-table-column",{key:i,attrs:{fixed:0==i,prop:t.prop,label:t.label,width:t.width,sortable:"custom","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){var n=i.row,l=i.column;return i.$index,["boolean_value"==t.formType||"handwriting_sign"==t.formType||"website"==t.formType?a("wk-field-view",{attrs:{"form-type":t.formType,value:n[l.property]}}):[e._v(e._s(e.fieldFormatter(n,l,n[l.property],t)))]]}}])})}),e._v(" "),a("el-table-column"),e._v(" "),a("el-table-column",{attrs:{resizable:!1,fixed:"right",width:"40"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("field-set",{attrs:{"crm-type":e.crmType},on:{change:e.setSave}})]}}])}),e._v(" "),a("wk-empty",{attrs:{slot:"empty",props:{buttonTitle:"新建产品",showButton:e.saveAuth}},on:{click:e.createClick},slot:"empty"})],2),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,"pager-count":5,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),e.showDview?a("product-detail",{staticClass:"d-view",attrs:{id:e.rowID,"page-list":e.crmType==e.rowType?e.list:[],"page-index":e.rowIndex},on:{"update:id":function(t){e.rowID=t},"update:pageIndex":function(t){e.rowIndex=t},handle:e.handleHandle,"hide-view":function(t){e.showDview=!1}}}):e._e(),e._v(" "),e.createShow?a("product-create",{on:{close:function(t){e.createShow=!1},"save-success":e.handleHandle}}):e._e()],1)},[],!1,null,"0908a2ba",null);o.options.__file="index.vue";t.default=o.exports}}]);