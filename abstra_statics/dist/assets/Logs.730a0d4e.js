import{at as H,au as T,av as b,aw as p,ax as N,ay as j,az as W,aA as Z,aB as J,aC as Q,a as P,aD as q,b as d,c as u,am as x,B as y,U as V,N as h,D as O,x as n,G as F,e as D,w as k,aq as X,A as C,ap as Y,F as A,L as G,W as K,d as $,v as U,z as v,t as ee,Z as B,ai as te,J as ie,O as se,Q as le,q as ne}from"./registerWidgets.b581b882.js";import{C as oe}from"./gateway.ace4e6ef.js";import{B as ae}from"./build.cda69581.js";import"./index.2816490e.js";import{a as re}from"./asyncComputed.d5ac46d6.js";import{L as de}from"./LoadingIndicator.84650e8d.js";import"./passwordlessManager.202da07d.js";import"./pubsub.e8d7f2be.js";import"./activeRecord.d86e77f4.js";import"./lottie.11a8eda8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9dc0fd24-e0ce-4e53-9dc9-1378fa499049",e._sentryDebugIdIdentifier="sentry-dbid-9dc0fd24-e0ce-4e53-9dc9-1378fa499049")}catch{}})();class ue{list(t){const s=new URLSearchParams({offset:t.offset.toString(),limit:t.limit.toString(),from:t.from.getTime().toString(),to:t.to.getTime().toString(),search:t.search});return oe.get(`projects/${t.projectId}/builds/${t.buildId}/logs?${s}`)}}const ce=new ue;class E{constructor(t,s,a,l,i,m,S){this.executionId=t,this.runtimeType=s,this.runtimeName=a,this.payload=l,this.event=i,this.buildId=m,this.createdAt=S}static fromDTO(t){return new E(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){return(await ce.list(t)).logs.map(E.fromDTO)}}var R={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:"pi pi-times"},dropdownIcon:{type:String,default:"pi pi-chevron-down"},filterIcon:{type:String,default:"pi pi-search"},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||H()},modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.id=this.id||H(),this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(T.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?b.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?b.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e,t){return(this.dataKey?b.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+t},isOptionDisabled(e){return this.optionDisabled?b.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return b.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return b.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&p.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&p.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.disabled||(this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t&&b.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput(e){const t=e.target.value;this.searchValue="",!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",t)},onContainerClick(e){this.disabled||this.loading||p.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(e){this.updateModel(e,null)},onFirstHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?p.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;p.focus(t)},onLastHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?p.getLastFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;p.focus(t)},onOptionSelect(e,t,s=!0){const a=this.getOptionValue(t);this.updateModel(e,a),s&&this.hide(!0)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){N.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const s=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){t?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey(e,t=!1){if(t){const s=e.currentTarget,a=s.value.length;s.setSelectionRange(a,a),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey(e,t=!1){!t&&this.onEnterKey(e)},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(p.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(e,t=!1){t&&!this.overlayVisible&&this.show()},onOverlayEnter(e){T.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&p.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){T.clear(e)},alignOverlay(){this.appendTo==="self"?p.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=p.getOuterWidth(this.$el)+"px",p.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new j(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!p.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return p.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){return b.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return b.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(s=>this.isValidOption(s)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?b.findLastIndex(this.visibleOptions.slice(0,e),s=>this.isValidOption(s)):-1;return t>-1?t:e},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findFirstFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let s=-1,a=!1;return this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(l=>this.isOptionMatched(l)),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(l=>this.isOptionMatched(l)):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(l=>this.isOptionMatched(l)),s!==-1&&(a=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,s=p.findSingle(this.list,`li[id="${t}"]`);s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,s,a)=>{t.push({optionGroup:s,group:!0,index:a});const l=this.getOptionGroupChildren(s);return l&&l.forEach(i=>t.push(i)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:this.dropdownIcon]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){const t=W.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){const s=this.options||[],a=[];return s.forEach(l=>{const i=l.items.filter(m=>t.includes(m));i.length>0&&a.push({...l,items:[...i]})}),this.flatOptions(a)}return t}return e},hasSelectedOption(){return b.isNotEmpty(this.modelValue)},label(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return b.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:Z},components:{VirtualScroller:J,Portal:Q}};const he=["id"],pe=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],fe=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],be={class:"p-dropdown-trigger"},ye={key:0,class:"p-dropdown-header"},ge={class:"p-dropdown-filter-container"},me=["value","placeholder","aria-owns","aria-activedescendant"],ve={role:"status","aria-live":"polite",class:"p-hidden-accessible"},Oe=["id"],Ie=["id"],we=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],xe={key:0,class:"p-dropdown-empty-message",role:"option"},Se={key:1,class:"p-dropdown-empty-message",role:"option"},Le={key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},Ve={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function Fe(e,t,s,a,l,i){const m=P("VirtualScroller"),S=P("Portal"),L=q("ripple");return d(),u("div",{ref:"container",id:l.id,class:F(i.containerClass),onClick:t[16]||(t[16]=(...o)=>i.onContainerClick&&i.onContainerClick(...o))},[s.editable?(d(),u("input",x({key:0,ref:"focusInput",id:s.inputId,type:"text",style:s.inputStyle,class:i.inputStyleClass,value:i.editableInputValue,placeholder:s.placeholder,tabindex:s.disabled?-1:s.tabindex,disabled:s.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":l.id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...o)=>i.onFocus&&i.onFocus(...o)),onBlur:t[1]||(t[1]=(...o)=>i.onBlur&&i.onBlur(...o)),onKeydown:t[2]||(t[2]=(...o)=>i.onKeyDown&&i.onKeyDown(...o)),onInput:t[3]||(t[3]=(...o)=>i.onEditableInput&&i.onEditableInput(...o))},s.inputProps),null,16,pe)):(d(),u("span",x({key:1,ref:"focusInput",id:s.inputId,style:s.inputStyle,class:i.inputStyleClass,tabindex:s.disabled?-1:s.tabindex,role:"combobox","aria-label":e.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":l.id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-disabled":s.disabled,onFocus:t[4]||(t[4]=(...o)=>i.onFocus&&i.onFocus(...o)),onBlur:t[5]||(t[5]=(...o)=>i.onBlur&&i.onBlur(...o)),onKeydown:t[6]||(t[6]=(...o)=>i.onKeyDown&&i.onKeyDown(...o))},s.inputProps),[y(e.$slots,"value",{value:s.modelValue,placeholder:s.placeholder},()=>[V(h(i.label==="p-emptylabel"?"\xA0":i.label||"empty"),1)])],16,fe)),s.showClear&&s.modelValue!=null?(d(),u("i",x({key:2,class:["p-dropdown-clear-icon",s.clearIcon],onClick:t[7]||(t[7]=(...o)=>i.onClearClick&&i.onClearClick(...o))},s.clearIconProps),null,16)):O("",!0),n("div",be,[y(e.$slots,"indicator",{},()=>[n("span",{class:F(i.dropdownIconClass),"aria-hidden":"true"},null,2)])]),D(S,{appendTo:s.appendTo},{default:k(()=>[D(X,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:k(()=>[l.overlayVisible?(d(),u("div",x({key:0,ref:i.overlayRef,style:s.panelStyle,class:i.panelStyleClass,onClick:t[14]||(t[14]=(...o)=>i.onOverlayClick&&i.onOverlayClick(...o)),onKeydown:t[15]||(t[15]=(...o)=>i.onOverlayKeyDown&&i.onOverlayKeyDown(...o))},s.panelProps),[n("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=(...o)=>i.onFirstHiddenFocus&&i.onFirstHiddenFocus(...o))},null,544),y(e.$slots,"header",{value:s.modelValue,options:i.visibleOptions}),s.filter?(d(),u("div",ye,[n("div",ge,[n("input",x({ref:"filterInput",type:"text",value:l.filterValue,onVnodeUpdated:t[9]||(t[9]=(...o)=>i.onFilterUpdated&&i.onFilterUpdated(...o)),class:"p-dropdown-filter p-inputtext p-component",placeholder:s.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":l.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:t[10]||(t[10]=(...o)=>i.onFilterKeyDown&&i.onFilterKeyDown(...o)),onBlur:t[11]||(t[11]=(...o)=>i.onFilterBlur&&i.onFilterBlur(...o)),onInput:t[12]||(t[12]=(...o)=>i.onFilterChange&&i.onFilterChange(...o))},s.filterInputProps),null,16,me),n("span",{class:F(["p-dropdown-filter-icon",s.filterIcon])},null,2)]),n("span",ve,h(i.filterResultMessageText),1)])):O("",!0),n("div",{class:"p-dropdown-items-wrapper",style:C({"max-height":i.virtualScrollerDisabled?s.scrollHeight:""})},[D(m,x({ref:i.virtualScrollerRef},s.virtualScrollerOptions,{items:i.visibleOptions,style:{height:s.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled}),Y({content:k(({styleClass:o,contentRef:w,items:c,getItemOptions:r,contentStyle:z,itemSize:_})=>[n("ul",{ref:f=>i.listRef(f,w),id:l.id+"_list",class:F(["p-dropdown-items",o]),style:C(z),role:"listbox"},[(d(!0),u(A,null,G(c,(f,g)=>(d(),u(A,{key:i.getOptionRenderKey(f,i.getOptionIndex(g,r))},[i.isOptionGroup(f)?(d(),u("li",{key:0,id:l.id+"_"+i.getOptionIndex(g,r),style:C({height:_?_+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[y(e.$slots,"optiongroup",{option:f.optionGroup,index:i.getOptionIndex(g,r)},()=>[V(h(i.getOptionGroupLabel(f.optionGroup)),1)])],12,Ie)):K((d(),u("li",{key:1,id:l.id+"_"+i.getOptionIndex(g,r),style:C({height:_?_+"px":void 0}),class:F(["p-dropdown-item",{"p-highlight":i.isSelected(f),"p-focus":l.focusedOptionIndex===i.getOptionIndex(g,r),"p-disabled":i.isOptionDisabled(f)}]),role:"option","aria-label":i.getOptionLabel(f),"aria-selected":i.isSelected(f),"aria-disabled":i.isOptionDisabled(f),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(g,r)),onClick:M=>i.onOptionSelect(M,f),onMousemove:M=>i.onOptionMouseMove(M,i.getOptionIndex(g,r))},[y(e.$slots,"option",{option:f,index:i.getOptionIndex(g,r)},()=>[V(h(i.getOptionLabel(f)),1)])],46,we)),[[L]])],64))),128)),l.filterValue&&(!c||c&&c.length===0)?(d(),u("li",xe,[y(e.$slots,"emptyfilter",{},()=>[V(h(i.emptyFilterMessageText),1)])])):!s.options||s.options&&s.options.length===0?(d(),u("li",Se,[y(e.$slots,"empty",{},()=>[V(h(i.emptyMessageText),1)])])):O("",!0)],14,Oe)]),_:2},[e.$slots.loader?{name:"loader",fn:k(({options:o})=>[y(e.$slots,"loader",{options:o})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),y(e.$slots,"footer",{value:s.modelValue,options:i.visibleOptions}),!s.options||s.options&&s.options.length===0?(d(),u("span",Le,h(i.emptyMessageText),1)):O("",!0),n("span",Ve,h(i.selectedMessageText),1),n("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[13]||(t[13]=(...o)=>i.onLastHiddenFocus&&i.onLastHiddenFocus(...o))},null,544)],16)):O("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,he)}function _e(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",s==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var ke=`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}
input.p-dropdown-label {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-fluid .p-dropdown {
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;_e(ke);R.render=Fe;const I=e=>(se("data-v-b02e5d24"),e=e(),le(),e),Ce={key:1,class:"logs"},De=I(()=>n("h1",null,"Logs",-1)),Ke={class:"filters"},Ee={class:"field field-build"},Me=I(()=>n("label",null,"Build",-1)),Te={class:"field"},Be=I(()=>n("label",null,"From",-1)),Ae={class:"field"},He=I(()=>n("label",null,"To",-1)),Pe={class:"field"},Ue=I(()=>n("label",null,"Search",-1)),Ge={key:0,class:"log-list"},Re={class:"search-summary"},ze={class:"log"},Ne={class:"log-header"},je={key:0,class:"log-date log-header-item"},We=I(()=>n("span",{class:"log-header-item-name"},"Build",-1)),Ze=[We],Je=te('<div class="log-date log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Date</span></div><div class="log-runtime log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Runtime</span></div><div class="log-execution log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Execution</span></div><div class="log-event log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Event</span></div>',4),Qe={class:"log-header"},qe={key:0,class:"log-date log-header-item"},Xe={class:"log-header-item-value"},Ye={class:"log-date log-header-item"},$e={class:"log-header-item-value"},et={class:"log-runtime log-header-item"},tt={class:"log-header-item-value"},it={class:"log-execution log-header-item"},st={class:"log-header-item-value"},lt={class:"log-event log-header-item"},nt={class:"log-header-item-value"},ot={class:"log-payload"},at=["textContent"],rt={key:1,class:"no-logs"},dt=I(()=>n("p",null,"No logs found.",-1)),ut=[dt],ct=$({__name:"Logs",setup(e){const s=ie().params.projectId,a=U({buildOptions:[{label:"Latest",value:"latest"},{label:"All",value:"all"}],buildsLoading:!1,buildLoaded:!1}),l=U({selectedBuild:"all",from:new Date(Date.now()-1e3*60*60*24*7).toISOString().slice(0,16),to:new Date().toISOString().slice(0,16),search:"",limit:50,offset:0}),i=async()=>{if(a.buildLoaded)return;a.buildsLoading=!0;const w=await ae.list(s);a.buildOptions=[...a.buildOptions,...w.map(c=>({label:c.label,value:c.id}))],a.buildLoaded=!0,a.buildsLoading=!1},m=w=>{l.selectedBuild=w.value,o()},{loading:S,result:L,refetch:o}=re(()=>E.list({projectId:s,limit:l.limit,offset:l.offset,buildId:l.selectedBuild,from:new Date(l.from),to:new Date(l.to),search:l.search}));return(w,c)=>v(S)||!v(L)?(d(),ee(de,{key:0})):(d(),u("div",Ce,[De,n("div",Ke,[n("div",Ee,[Me,D(v(R),{modelValue:l.selectedBuild,"onUpdate:modelValue":c[0]||(c[0]=r=>l.selectedBuild=r),class:"build-dropdown",options:a.buildOptions,"option-label":"label","option-value":"value",loading:a.buildsLoading,filter:!1,onShow:i,onChange:m},null,8,["modelValue","options","loading"])]),n("div",Te,[Be,K(n("input",{"onUpdate:modelValue":c[1]||(c[1]=r=>l.from=r),type:"datetime-local"},null,512),[[B,l.from]])]),n("div",Ae,[He,K(n("input",{"onUpdate:modelValue":c[2]||(c[2]=r=>l.to=r),type:"datetime-local"},null,512),[[B,l.to]])]),n("div",Pe,[Ue,K(n("input",{"onUpdate:modelValue":c[3]||(c[3]=r=>l.search=r),type:"search"},null,512),[[B,l.search]])]),n("button",{onClick:c[4]||(c[4]=(...r)=>v(o)&&v(o)(...r))},"Filter")]),v(L).length>0?(d(),u("div",Ge,[n("div",Re," Showing from "+h(l.offset+1)+" to "+h(l.offset+l.limit),1),n("details",ze,[n("summary",Ne,[l.selectedBuild=="all"?(d(),u("div",je,Ze)):O("",!0),Je])]),(d(!0),u(A,null,G(v(L),r=>(d(),u("details",{key:r.createdAt.toString(),class:"log"},[n("summary",Qe,[l.selectedBuild=="all"?(d(),u("div",qe,[n("span",Xe,h(r.buildId.split("-")[0]),1)])):O("",!0),n("div",Ye,[n("span",$e,h(r.createdAt.toISOString()),1)]),n("div",et,[n("span",tt,h(r.runtimeType)+":"+h(r.runtimeName),1)]),n("div",it,[n("span",st,h(r.executionId.slice(0,8)),1)]),n("div",lt,[n("span",nt,h(r.event),1)])]),n("div",ot,[n("pre",{class:"log-payload-content",textContent:h(r.payload)},null,8,at)])]))),128))])):(d(),u("div",rt,ut))]))}});const wt=ne(ct,[["__scopeId","data-v-b02e5d24"]]);export{wt as default};
//# sourceMappingURL=Logs.730a0d4e.js.map
