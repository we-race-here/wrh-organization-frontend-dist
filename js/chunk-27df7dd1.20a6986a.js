(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27df7dd1"],{"0e20":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("b680"),a("d401"),a("0d03"),a("d3b7"),a("25f0"),a("ac1f"),a("1276"),a("4160"),a("159b"),a("fb6a"),a("a15b"),a("d81d"),a("5319"),a("2405");var n=function(t){if(!t)return"";var e=t.split(" ");return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")}},"3a2f":function(t,e,a){"use strict";var n=a("ade3"),i=(a("a9e3"),a("e25e"),a("9734"),a("4ad4")),s=a("a9ad"),o=a("16b7"),c=a("b848"),r=a("f573"),l=a("f2e7"),u=a("80d2"),d=a("d9bd"),v=a("58df");e["a"]=Object(v["a"])(s["a"],o["a"],c["a"],r["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=i+e.width/2-a.width/2:(this.left||this.right)&&(s=i+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=n+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=n+e.height/2-a.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),!1===this.attach&&(i+=this.pageYOffset),"".concat(this.calcYOverflow(i),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["h"])(this.maxWidth),minWidth:Object(u["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["u"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===u["z"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"5f47":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-autocomplete",{attrs:{dense:"",label:"Filter by Event",items:t.events,"item-text":"name","item-value":"id","hide-details":"","search-input":t.eventSearchInput,loading:t.findingEvents,"no-data-text":"No Result Found! Type here to Search event","menu-props":{contentClass:"list-style"},"return-object":"",clearable:""},on:{"update:searchInput":function(e){t.eventSearchInput=e},"update:search-input":function(e){t.eventSearchInput=e}},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("span",{staticClass:"d-block font-weight-medium text-truncate"},[t._v(" "+t._s(e.item.name)+" ")])]}},{key:"item",fn:function(e){return[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.$utils.formatDate(e.item.start_date,"MMM D, YYYY"))+" - "+t._s(t.$utils.formatDate(e.item.end_date,"MMM D, YYYY"))+" ")])],1)]}}]),model:{value:t.selectedEvent,callback:function(e){t.selectedEvent=e},expression:"selectedEvent"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-autocomplete",{attrs:{disabled:!t.selectedEvent,dense:"",label:"Filter by Race",items:t.races,"item-text":"name","item-value":"id","menu-props":{contentClass:"list-style"},loading:t.loadingRaces,"no-data-text":"No Race Found!","hide-details":"",clearable:"","return-object":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.$utils.formatDate(e.item.start_datetime))+" ")])],1)]}}]),model:{value:t.selectedRace,callback:function(e){t.selectedRace=e},expression:"selectedRace"}})],1),a("v-col",{attrs:{cols:"4"}},[a("div",{staticClass:"d-flex align-center pb-5"},[a("v-text-field",{staticClass:"me-3 search-input",attrs:{value:t.tableFiltering.search,dense:"",clearable:"","hide-details":"",placeholder:"Search ..."},on:{change:function(e){return t.$set(t.tableFiltering,"search",e)},"click:clear":function(e){return t.$set(t.tableFiltering,"search",null)}}}),a("v-spacer"),a("v-btn",{staticClass:"mr-1",attrs:{fab:"","x-small":"",color:"info"},on:{click:function(e){return t.loadRecords(1)}}},[a("v-icon",[t._v(t._s(t.icons.mdiRefresh))])],1)],1)])],1)],1),a("v-data-table",{staticClass:"text-no-wrap",attrs:{headers:t.tableColumns,items:t.records,options:t.tableOptions,"server-items-length":t.pagination.total,loading:t.loading,"footer-props":{"items-per-page-options":t.$const.DEFAULT_TABLE_PER_PAGE_OPTIONS,"show-current-page":!0,"show-first-last-page":!0}},on:{"update:options":[function(e){t.tableOptions=e},function(e){return t.loadRecords()}]},scopedSlots:t._u([{key:"item.rider",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[n._rider&&n._rider._user.avatar?a("v-img",{attrs:{src:n._rider._user.avatar}}):a("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(n._rider?n._rider.first_name:n.more_data.first_name||"N/A"))+" ")])],1),a("div",{staticClass:"d-flex flex-column pl-1"},[a("span",{staticClass:"font-weight-semibold text-truncate text-decoration-none",attrs:{href:"javascript:"}},[n._rider?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.icons.mdiAccountCheck))]):t._e(),t._v(" "+t._s(t.displayRiderName(n))+" ")],1)])],1)]}},{key:"item.race",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-semibold text-truncate"},[t._v(" "+t._s(n._race.name)+" ")]),a("span",{staticClass:"text-xs text-truncate"},[t._v(" "+t._s(n._race._event.name)+" ")])])]}},{key:"item.create_datetime",fn:function(e){var n=e.item;return[a("span",{staticClass:"pr-1"},[t._v(t._s(t.$utils.formatDate(n.create_datetime,"M/D/YY")))]),a("span",{staticClass:"text-caption"},[t._v(t._s(t.$utils.formatDate(n.create_datetime,"HH:mm")))])]}},{key:"item.place",fn:function(e){var n=e.item;return[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(n.place))]),1==n.place?a("v-icon",{staticClass:"ml-1",attrs:{size:"20",color:"warning"}},[t._v(t._s(t.icons.mdiPodiumGold))]):t._e()]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex align-end justify-end"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",small:""},on:{click:function(e){return t.$refs.formDialogRef.show(n)}}},"v-btn",s,!1),i),[a("v-icon",{attrs:{size:"18"}},[t._v(" "+t._s(t.icons.mdiPencilOutline)+" ")])],1)]}}],null,!0)},[a("span",[t._v("Edit")])])],1)]}}])})],1)},i=[],s=(a("498a"),a("99af"),a("94ed")),o=a("ed09"),c=a("bb36"),r=a("cbec"),l=a("0e20"),u=a("2ef0"),d=a.n(u),v={components:{},props:{apiParams:{type:Object,required:!1}},setup:function(t,e){var a=Object(o["J"])([]),n=Object(o["J"])({total:0}),i=Object(o["J"])(!1),u=Object(o["J"])(!1),v=Object(o["J"])({}),f=Object(o["J"])({}),h=[{text:"#ID",value:"id",align:"start"},{text:"RIDER",value:"rider"},{text:"RACE",value:"race",cellClass:"race-td"},{text:"PLACE",value:"place"},{text:"CREATED AT",value:"create_datetime"}],m=Object(o["J"])([]),p=Object(o["J"])([]),b=Object(o["J"])(""),g=Object(o["J"])(null),_=Object(o["J"])(null),x=Object(o["J"])(!1);Object(o["Y"])(b,(function(){C(b.value)})),Object(o["Y"])(g,(function(){_.value=null,j(1),A()})),Object(o["Y"])(_,(function(){j(1)}));var O=function(t){x.value?m.value=[]:(x.value=!0,c["a"].get("bycing_org/event/",{params:{search:t}}).then((function(t){x.value=!1,m.value=t.data.results}),(function(t){x.value=!1,Object(r["notifyDefaultServerError"])(t,!0)})))},C=d.a.debounce(O,500),y=function(t){var e="";return e=t._rider?"".concat(t._rider.first_name," ").concat(t._rider.last_name).trim():"".concat(t.more_data.first_name||""," ").concat(t.more_data.last_name||"").trim(),e||"N/A"},j=function(e){e&&(v.value.page=e);var s=Object.assign({},f.value,t.apiParams,Object(r["refineVTableOptions"])(v.value));_.value?s.race=_.value.id:g.value&&(s.event=g.value.id),i.value=!0,c["a"].get("bycing_org/race_result/",{params:s}).then((function(t){i.value=!1,a.value=t.data.results,n.value=t.data.pagination}),(function(t){i.value=!1,Object(r["notifyDefaultServerError"])(t,!0)}))},A=function(){g.value?(u.value=!0,c["a"].get("bycing_org/race/",{params:{event:g.value.id,page_size:0}}).then((function(t){u.value=!1,p.value=t.data.results}),(function(t){u.value=!1,Object(r["notifyDefaultServerError"])(t,!0)}))):p.value=[]};return Object(o["Y"])((function(){return f}),(function(t,e){j(1)}),{deep:!0}),Object(o["A"])((function(){})),{records:a,eventSearchInput:b,events:m,races:p,selectedEvent:g,selectedRace:_,findEvents:O,findEventsDebounce:C,findingEvents:x,displayRiderName:y,tableColumns:h,tableOptions:v,tableFiltering:f,loading:i,loadingRaces:u,pagination:n,avatarText:l["a"],loadRecords:j,loadRaces:A,icons:{mdiPencilOutline:s["Ab"],mdiEyeOutline:s["T"],mdiAccountGroupOutline:s["f"],mdiAccountMultipleOutline:s["g"],mdiClose:s["I"],mdiCheck:s["v"],mdiInformationOutline:s["nb"],mdiRefresh:s["Hb"],mdiAccountCheck:s["b"],mdiFileExcelOutline:s["X"],mdiPodiumGold:s["Eb"]}}}},f=v,h=a("2877"),m=a("6544"),p=a.n(m),b=a("c6a6"),g=a("8212"),_=a("8336"),x=a("b0af"),O=a("99d9"),C=a("62ad"),y=a("8fea"),j=a("132d"),A=a("adda"),E=a("5d23"),w=a("0fd9"),R=a("2fa4"),T=a("8654"),D=a("3a2f"),k=Object(h["a"])(f,n,i,!1,null,"04b03da0",null);e["a"]=k.exports;p()(k,{VAutocomplete:b["a"],VAvatar:g["a"],VBtn:_["a"],VCard:x["a"],VCardText:O["c"],VCol:C["a"],VDataTable:y["a"],VIcon:j["a"],VImg:A["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VRow:w["a"],VSpacer:R["a"],VTextField:T["a"],VTooltip:D["a"]})},9734:function(t,e,a){},ec37:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("race-results-cmp")},i=[],s=a("5f47"),o={components:{RaceResultsCmp:s["a"]},props:{},setup:function(t,e){return{}}},c=o,r=a("2877"),l=Object(r["a"])(c,n,i,!1,null,null,null);e["default"]=l.exports}}]);