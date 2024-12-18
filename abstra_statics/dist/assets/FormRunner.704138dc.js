var R=Object.defineProperty;var A=(o,e,t)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(A(o,typeof e!="symbol"?e+"":e,t),t);import{i as isUrl}from"./url.d5e941eb.js";import{d as defineComponent,D as inject,f as computed,o as openBlock,Y as createElementBlock,$ as renderSlot,S as createCommentVNode,e8 as mergeProps,a as createBaseVNode,ej as lodash,eP as i18nProvider,c as createBlock,ec as resolveDynamicComponent,a0 as _export_sfc,w as withCtx,u as unref,aG as createTextVNode,e as ref,g as watch,b as createVNode,ed as normalizeClass,eQ as StartWidget,eR as EndWidget,eS as ErrorWidget,aS as Fragment,eb as renderList,e9 as toDisplayString,eT as StyleProvider,eO as withKeys,bT as Button}from"./index.0715061e.js";import{b as useUserStore}from"./workspaceStore.3502432d.js";import{_ as _sfc_main$3}from"./Login.vue_vue_type_script_setup_true_lang.92f00d8d.js";import{L as LoadingIndicator}from"./CircularLoading.d2edf2ff.js";import{S as Steps}from"./Steps.06a4524a.js";import{W as Watermark}from"./Watermark.2ac806b3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="8d2cdfdd-a82d-4582-8a18-2c8d42dd1743",o._sentryDebugIdIdentifier="sentry-dbid-8d2cdfdd-a82d-4582-8a18-2c8d42dd1743")}catch{}})();const Z=["width","height","fill","transform"],g={key:0},m=createBaseVNode("path",{d:"M112,36a12,12,0,0,0-12,12V60H24A20,20,0,0,0,4,80v96a20,20,0,0,0,20,20h76v12a12,12,0,0,0,24,0V48A12,12,0,0,0,112,36ZM28,172V84h72v88ZM252,80v96a20,20,0,0,1-20,20H152a12,12,0,0,1,0-24h76V84H152a12,12,0,0,1,0-24h80A20,20,0,0,1,252,80ZM88,112a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V124a12,12,0,0,1,0-24H76A12,12,0,0,1,88,112Z"},null,-1),y=[m],f={key:1},w=createBaseVNode("path",{d:"M240,80v96a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H232A8,8,0,0,1,240,80Z",opacity:"0.2"},null,-1),k=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),x=[w,k],S={key:2},z=createBaseVNode("path",{d:"M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z"},null,-1),C=[z],B={key:3},b=createBaseVNode("path",{d:"M112,42a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80v96a14,14,0,0,0,14,14h82v18a6,6,0,0,0,12,0V48A6,6,0,0,0,112,42ZM24,178a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h82V178ZM246,80v96a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h88a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H144a6,6,0,0,1,0-12h88A14,14,0,0,1,246,80ZM86,112a6,6,0,0,1-6,6H70v26a6,6,0,0,1-12,0V118H48a6,6,0,0,1,0-12H80A6,6,0,0,1,86,112Z"},null,-1),N=[b],E={key:4},P=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),W=[P],$={key:5},j=createBaseVNode("path",{d:"M112,44a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80v96a12,12,0,0,0,12,12h84v20a4,4,0,0,0,8,0V48A4,4,0,0,0,112,44ZM24,180a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h84V180ZM244,80v96a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h88a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H144a4,4,0,0,1,0-8h88A12,12,0,0,1,244,80ZM84,112a4,4,0,0,1-4,4H68v28a4,4,0,0,1-8,0V116H48a4,4,0,0,1,0-8H80A4,4,0,0,1,84,112Z"},null,-1),T=[j],q={name:"PhTextbox"},G=defineComponent({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(o){const e=o,t=inject("weight","regular"),a=inject("size","1em"),s=inject("color","currentColor"),l=inject("mirrored",!1),c=computed(()=>{var u;return(u=e.weight)!=null?u:t}),n=computed(()=>{var u;return(u=e.size)!=null?u:a}),d=computed(()=>{var u;return(u=e.color)!=null?u:s}),h=computed(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(u,_)=>(openBlock(),createElementBlock("svg",mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:n.value,height:n.value,fill:d.value,transform:h.value},u.$attrs),[renderSlot(u.$slots,"default"),c.value==="bold"?(openBlock(),createElementBlock("g",g,y)):c.value==="duotone"?(openBlock(),createElementBlock("g",f,x)):c.value==="fill"?(openBlock(),createElementBlock("g",S,C)):c.value==="light"?(openBlock(),createElementBlock("g",B,N)):c.value==="regular"?(openBlock(),createElementBlock("g",E,W)):c.value==="thin"?(openBlock(),createElementBlock("g",$,T)):createCommentVNode("",!0)],16,Z))}});function normalizePath(o){return o.startsWith("/")?o.slice(1):o}async function redirect(o,e,t,a={}){if(isUrl(t)){const s=new URLSearchParams(a),l=new URL(t);l.search=s.toString(),window.location.href=l.toString()}else{const s=t.replace(/\/$/,"");if(o==="player")await e.push({path:"/"+normalizePath(s),query:a});else if(o==="editor")await e.push({name:"formEditor",params:{formPath:normalizePath(s)},query:a});else if(o==="preview")await e.push({name:"formPreview",params:{formPath:normalizePath(s)},query:a});else throw new Error("Invalid routing")}}const WS_CLOSING_STATES=[WebSocket.CLOSING,WebSocket.CLOSED],WS_CUSTOM_CLOSING_REASONS={FRONTEND_FORM_RESTART:4e3};class FormConnectionManager{constructor(e,t,a,s){r(this,"ws",null);r(this,"heartbeatInterval");r(this,"onOpen",null);r(this,"onMessage",null);r(this,"onClose",null);this.formId=e,this.environment=t,this.userQueryParams=a,this._detached=s}set detached(e){this._detached=e}get url(){const e=location.protocol==="https:"?"wss:":"ws:",t=this.environment=="editor"?"_editor/api/forms/socket":"_socket",a=new URLSearchParams({id:this.formId,detached:this._detached?"true":"false",...this.userQueryParams});return`${e}//${location.host}/${t}?${a}`}handleOpen(e){if(!this.onOpen)throw new Error("onOpen is not set");this.onOpen(),e()}handleClose(e){(e.code===1006||!e.wasClean)&&clearInterval(this.heartbeatInterval),this.onClose&&this.onClose(e)}handleMessage(e){if(!this.onMessage)throw new Error("onMessage is not set");const t=JSON.parse(e.data);this.onMessage(t)}sendHeartbeat(){!this.ws||this.ws.readyState!==this.ws.OPEN||this.send({type:"execution:heartbeat"})}async send(e){if(!this.ws)throw new Error(`[FormRunnerController] failed sending msg ${e.type}: websocket is not connected`);WS_CLOSING_STATES.includes(this.ws.readyState)&&await this.newConnection(),this.ws.send(JSON.stringify(e))}async close(e){this.ws&&this.ws.close(WS_CUSTOM_CLOSING_REASONS[e],e)}async newConnection(e=3,t){if(e!=0)return new Promise(a=>{clearInterval(this.heartbeatInterval),this.ws=new WebSocket(this.url,t),this.ws.onopen=()=>this.handleOpen(a),this.ws.onclose=s=>this.handleClose(s),this.ws.onmessage=s=>this.handleMessage(s),this.heartbeatInterval=setInterval(()=>this.sendHeartbeat(),2e3)}).catch(()=>{this.newConnection(e-1)})}isEditorConnection(){return this.environment==="editor"}}function isInputWidget(o){return"key"in o&&"value"in o&&"errors"in o}const executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(o){throw console.error(`[Error: execute_js]: ${o.message}, context: ${$context}`),o}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(o){return{type:"execute-js:response",value:await executeCode(o.context,o.code)}}const isSerializable=o=>{try{return JSON.stringify(o),!0}catch{return!1}},FORM_END_STATES=["default-end","page-end","error"],FORM_RUNNING_STATES=["authenticating","page","loading"];class FormRunnerController{constructor({formRunnerData:e,logService:t,connectionManager:a,onFormStart:s,onFormEnd:l,onRedirect:c,onStateUpdate:n,onStackTraceUpdate:d}){r(this,"connectionManager");r(this,"logService");r(this,"formRunnerData");r(this,"formState");r(this,"messageSeq",0);r(this,"executionId",null);r(this,"onFormStart");r(this,"onFormEnd");r(this,"onRedirect");r(this,"onStackTraceUpdate");r(this,"onStateUpdate");r(this,"userStore");r(this,"responseHistory",[]);r(this,"lastResponseHistory",[]);r(this,"handlers",{"execution:started":[e=>this.handleExecutionStartedMessage(e)],"execution:ended":[e=>this.handleExecutionEndedMessage(e)],"form:mount-page":[e=>this.handleMountPageMessage(e)],"form:update-page":[e=>this.handleUpdatePageMessage(e)],"auth:require-info":[e=>this.handleAuthRequireInfoMessage(e)],"auth:invalid-jwt":[e=>this.handleAuthInvalidJWTMessage(e)],"auth:valid-jwt":[e=>this.handleAuthValidTokenMessage(e)],"redirect:request":[e=>this.handleRedirectRequestMessage(e)],"execute-js:request":[e=>this.handleExecuteJSRequestMessage(e)]});r(this,"start",async()=>{this.setFormState({type:"loading"}),await this.connectionManager.newConnection(3,this.userStore.wsAuthHeaders)});r(this,"resetForm",async()=>{var e;(e=this.logService)==null||e.log({type:"stdout",log:"[Form reloaded]"}),await this.connectionManager.close("FRONTEND_FORM_RESTART"),this.resetState()});r(this,"reconnect",async()=>{this.resetState(),await this.start()});r(this,"resetState",()=>{this.messageSeq=0,this.setFormState({type:"waiting",actions:[this.getStartAction()]})});r(this,"startPageLoading",()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.formState.actions.some(e=>e.loading)||this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!0}))})});r(this,"debouncedFinishPageLoading",lodash.exports.debounce(()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!1}))})},500));r(this,"getStartAction",()=>this.actionFromMessage(this.formRunnerData.startButtonText||i18nProvider.translateIfFound("i18n_start_action",this.formRunnerData.language)));r(this,"getEndStateActions",()=>{const e=this.formRunnerData.restartButtonText||i18nProvider.translateIfFound("i18n_restart_action",this.formRunnerData.language);return this.formRunnerData.allowRestart?[this.actionFromMessage(e)]:[]});r(this,"getState",()=>({formState:this.formState}));r(this,"handleConnectionOpen",()=>{this.connectionManager.send({type:"execution:start"})});r(this,"widgetFromMessage",(e,t)=>{if(isInputWidget(e)){const a=e.errors.map(s=>i18nProvider.translateIfFound(s,this.formRunnerData.language,e));return{...e,input:!0,_pythonErrors:a,errors:a}}return{...e,input:!1,_pythonErrors:[],errors:[],key:e.type+t}});r(this,"actionFromMessage",e=>({name:e,label:i18nProvider.translateIfFound(e,this.formRunnerData.language,this.formRunnerData),disabled:!1,loading:!1}));r(this,"getAutofillVisibilty",e=>this.lastResponseHistory.length===0?!1:this.lastResponseHistory[0].some(t=>e.find(a=>a.key===t.key&&a.type===t.type&&"value"in a)));r(this,"handleAutofillClick",()=>{!this.lastResponseHistory[0]||this.formState.type==="page"&&(this.lastResponseHistory[0].forEach(t=>{!("widgets"in this.formState&&this.formState.widgets.find(s=>s.key===t.key&&s.type===t.type))||"value"in t&&this.updateWidgetValue(t.key,t.value)}),this.setFormState({...this.formState,showAutofill:!1}))});r(this,"handleAuthComplete",e=>{e&&this.formState.type==="authenticating"&&this.sendAuthSavedJWT(e)});r(this,"handleMessageReceived",e=>{const t=this.handlers[e.type];if(!t)throw new Error(`No handler for message type ${e.type}`);if(t.forEach(a=>a(e)),e.debug&&this.onStackTraceUpdate){const a=e.type==="execution:ended";this.onStackTraceUpdate(e.debug.stack,a)}});r(this,"handleActionClick",e=>{if(this.formState.type==="waiting")return this.start();if(this.formState.type==="page"){const t=e.name==="i18n_back_action";return this.hasErrors()&&!t?void 0:(this.setFormState({...this.formState,actions:this.formState.actions.map(a=>a.label===e.label?{...a,loading:!0}:a)}),this.lastResponseHistory.shift(),this.responseHistory.push(this.formState.widgets),this.sendFormPageResponse(this.getWidgetValues(),e))}if(this.formState.type==="default-end"||this.formState.type==="page-end")return this.setFormState({...this.formState,actions:[{...this.getStartAction(),loading:!0}]}),this.start()});r(this,"updateWidgetValue",(e,t)=>{if(this.formState.type!=="page")return;const a=this.formState.widgets.find(l=>"key"in l&&l.key===e);if(!a||!isInputWidget(a))return;const s=this.formState.widgets.map(l=>l.key===e?{...l,value:t}:l);this.setFormState({...this.formState,widgets:s}),this.sendFormUserEvent(this.getWidgetValues(),this.getSecrets())});r(this,"updateWidgetFrontendErrors",(e,t)=>{if(this.formState.type!=="page"||!this.formState.widgets.find(l=>l.key===e))return;const s=this.formState.widgets.map(l=>l.key===e?{...l,errors:l._pythonErrors.concat(t.map(c=>i18nProvider.translateIfFound(c,this.formRunnerData.language,l)))}:l);this.setFormState({...this.formState,widgets:s})});if(this.formRunnerData=e,this.logService=t,this.connectionManager=a,this.onFormStart=s,this.onFormEnd=l,this.onRedirect=c,this.onStateUpdate=n,this.onStackTraceUpdate=d,this.userStore=useUserStore(),this.connectionManager.onOpen=()=>this.handleConnectionOpen(),this.connectionManager.onMessage=h=>this.handleMessageReceived(h),this.connectionManager.onClose=h=>this.handleConnectionClose(h),this.formRunnerData.autoStart&&!this.connectionManager.isEditorConnection()){this.formState={type:"loading"},this.start();return}this.formState={type:"waiting",actions:[this.getStartAction()]}}set detached(e){this.connectionManager.detached=e}fullWidthFromMessage(e){return e.some(t=>"fullWidth"in t&&t.fullWidth)}async handleExecutionStartedMessage(e){this.executionId=e.executionId,this.onFormStart()}handleMountPageMessage(e){var a,s;const t=e.widgets.map(this.widgetFromMessage);if(e.endProgram){this.setFormState({type:"page-end",actions:this.getEndStateActions(),widgets:t,fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)});return}this.setFormState({type:"page",widgets:t,actions:(s=(a=e.actions)==null?void 0:a.map(this.actionFromMessage))!=null?s:[],fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)})}async handleExecuteJSRequestMessage(e){const t=await executeJs(e);this.connectionManager.send(t)}async handleAuthRequireInfoMessage(e){const{jwt:t,isJWTValid:a}=this.userStore;if(t&&a()&&!e.refresh){this.sendAuthSavedJWT(t);return}this.setFormState({type:"authenticating"})}async handleAuthInvalidJWTMessage(e){this.setFormState({type:"authenticating"})}async handleAuthValidTokenMessage(e){}async handleRedirectRequestMessage(e){this.onRedirect(e.url,e.queryParams)}async handleUpdatePageMessage(e){if(e.seq===this.messageSeq){if(this.formState.type!=="page")throw new Error("Received form:update-page message while not in render-page state");this.setFormState({...this.formState,error:{message:e.validation.message,status:e.validation.status},widgets:e.widgets.map(this.widgetFromMessage),actions:this.formState.actions.map(t=>({...t,disabled:this.shouldDisableAction(t,e)}))}),this.debouncedFinishPageLoading()}}shouldDisableAction(e,t){if(e.name==="i18n_back_action"||this.formState.type!=="page")return!1;const s=t.widgets.map(this.widgetFromMessage).some(c=>c.errors.length>0),l=t.validation.status===!1||Boolean(t.validation.message);return s||l}async handleExecutionEndedMessage(e){var t;this.lastResponseHistory=[...this.responseHistory],this.responseHistory=[],!FORM_END_STATES.includes(this.formState.type)&&(e.exitStatus==="SUCCESS"&&(this.setFormState({type:"default-end",actions:this.getEndStateActions()}),(t=this.logService)==null||t.log({type:"stdout",log:"[Form run finished]"})),e.exitStatus==="EXCEPTION"&&this.setFormState({type:"error",message:e.exception,executionId:this.executionId}),this.onFormEnd())}sendFormPageResponse(e,t,a){this.connectionManager.send({type:"form:page-response",payload:e,secrets:a,action:t==null?void 0:t.name,seq:++this.messageSeq})}sendFormUserEvent(e,t){this.startPageLoading(),this.connectionManager.send({type:"form:user-event",payload:e,secrets:t,seq:++this.messageSeq})}sendAuthSavedJWT(e){this.connectionManager.send({type:"auth:saved-jwt",jwt:e})}handleCloseAttempt(){return FORM_END_STATES.includes(this.formState.type)||this.formState.type==="waiting"?!1:(this.connectionManager.send({type:"debug:close-attempt"}),!0)}handleConnectionClose(e){e.code!==WS_CUSTOM_CLOSING_REASONS.FRONTEND_FORM_RESTART&&FORM_RUNNING_STATES.includes(this.formState.type)&&this.reconnect()}setFormState(e){this.formState=Object.freeze(e),this.onStateUpdate(e)}getSecrets(){return this.formState.type!=="page"?[]:this.formState.widgets.filter(e=>"secret"in e).reduce((e,t)=>"key"in t&&"secret"in t?[...e,{key:t.key,secret:t.secret}]:e,[])}setWidgetValidationFunction(e,t){if(this.formState.type!=="page")return;const a=this.formState.widgets.find(s=>"key"in s&&s.key===e);!a||!isInputWidget(a)||(a.validationFunction=t)}hasErrors(){var e;return this.formState.type!=="page"?!1:((e=this.formState.error)==null?void 0:e.status)===!1||this.formState.widgets.some(t=>t.errors.length>0)}getWidgetValue(e){if(this.formState.type!=="page")return null;const t=this.formState.widgets.find(a=>"key"in a&&a.key===e);if(!t||!isInputWidget(t))return null}getWidgetValues(){return this.formState.type!=="page"?{}:this.formState.widgets.reduce((e,t)=>("value"in t&&(e[t.key]=t.value),e),{})}}const _hoisted_1$1={class:"outline-button"},_sfc_main$2=defineComponent({__name:"OutlineButton",props:{icon:{},noShadow:{type:Boolean},status:{}},setup(o){return(e,t)=>(openBlock(),createElementBlock("button",_hoisted_1$1,[e.icon?(openBlock(),createBlock(resolveDynamicComponent(e.icon),{key:0,class:"icon",color:"#fff"})):createCommentVNode("",!0),renderSlot(e.$slots,"default",{},void 0,!0)]))}}),OutlineButton_vue_vue_type_style_index_0_scoped_2d3b9e41_lang="",OutlineButton=_export_sfc(_sfc_main$2,[["__scopeId","data-v-2d3b9e41"]]),_sfc_main$1=defineComponent({__name:"FormAutoFill",emits:["click"],setup(o,{emit:e}){return(t,a)=>(openBlock(),createBlock(OutlineButton,{icon:unref(G),class:"form-auto-fill-btn",onClick:a[0]||(a[0]=s=>e("click"))},{default:withCtx(()=>[createTextVNode(" Repeat last answer ")]),_:1},8,["icon"]))}}),FormAutoFill_vue_vue_type_style_index_0_scoped_39354e61_lang="",FormAutoFill=_export_sfc(_sfc_main$1,[["__scopeId","data-v-39354e61"]]),_hoisted_1={class:"center"},_hoisted_2={key:0,class:"loading-wrapper"},_hoisted_3={class:"form-wrapper"},_hoisted_4=["id"],_hoisted_5={key:4,class:"span-error"},_hoisted_6={key:0,class:"buttons"},_sfc_main=defineComponent({__name:"FormRunner",props:{formRunnerData:{},formState:{},isPreview:{type:Boolean},disabled:{type:Boolean}},emits:["action-clicked","auto-fill-clicked","update-widget-value","update-widget-errors","auth-complete"],setup(o,{emit:e}){const t=o,a=ref(null),s=ref({}),l=()=>{!a.value||(a.value.scrollTop=0)};watch(()=>t.formState,(n,d)=>{n.type==="page"&&(d==null?void 0:d.type)==="page"&&n.refreshKey!==d.refreshKey&&l()});const c=()=>{var n,d;return((n=t.formState)==null?void 0:n.type)==="page"?t.formState.fullWidth:((d=t.formState)==null?void 0:d.type)==="page-end"?t.formState.fullWidth&&t.formState.widgets.length>0:!1};return(n,d)=>{var h,u,_,M;return openBlock(),createElementBlock("div",_hoisted_1,[n.isPreview&&((h=n.formState)==null?void 0:h.type)==="page"&&n.formState.showAutofill?(openBlock(),createBlock(FormAutoFill,{key:0,class:"auto-fill-btn",form:n.formRunnerData,style:{"z-index":1},onClick:d[0]||(d[0]=i=>e("auto-fill-clicked"))},null,8,["form"])):createCommentVNode("",!0),((u=n.formState)==null?void 0:u.type)==="page"?(openBlock(),createBlock(Steps,{key:1,"steps-info":n.formState.steps},null,8,["steps-info"])):createCommentVNode("",!0),createBaseVNode("main",{ref_key:"scrollableContainer",ref:a,class:normalizeClass([{disabled:n.disabled}]),style:{padding:"50px 0px","box-sizing":"border-box"}},[!n.formState||n.formState.type=="loading"?(openBlock(),createElementBlock("div",_hoisted_2,[createVNode(LoadingIndicator)])):n.formState.type==="authenticating"?(openBlock(),createBlock(_sfc_main$3,{key:1,locale:n.formRunnerData.language,"logo-url":(_=n.formRunnerData.logoUrl)!=null?_:void 0,"brand-name":(M=n.formRunnerData.brandName)!=null?M:void 0,onDone:d[1]||(d[1]=i=>e("auth-complete",i))},null,8,["locale","logo-url","brand-name"])):(openBlock(),createElementBlock("div",{key:2,class:normalizeClass(["form",{"full-width":c()}])},[createBaseVNode("div",_hoisted_3,[n.formState.type==="waiting"?(openBlock(),createBlock(StartWidget,{key:0,form:n.formRunnerData},null,8,["form"])):n.formState.type==="default-end"?(openBlock(),createBlock(EndWidget,{key:1,"end-message":n.formRunnerData.endMessage,locale:n.formRunnerData.language},null,8,["end-message","locale"])):n.formState.type==="error"?(openBlock(),createBlock(ErrorWidget,{key:2,"error-message":n.formRunnerData.errorMessage,"execution-id":n.formState.executionId,locale:n.formRunnerData.language},null,8,["error-message","execution-id","locale"])):(openBlock(!0),createElementBlock(Fragment,{key:3},renderList(n.formState.widgets,(i,v)=>{var F;return openBlock(),createElementBlock("div",{id:i.type+v,key:(F=i.key)!=null?F:i.type+v,class:"widget"},[(openBlock(),createBlock(resolveDynamicComponent(i.type),{ref_for:!0,ref:p=>"key"in i?s.value[i.key]=p:null,key:i.key+"_"+n.formState.refreshKey,value:unref(isInputWidget)(i)&&i.value,errors:i.errors,"user-props":i,locale:n.formRunnerData.language,"onUpdate:value":p=>e("update-widget-value",i.key,p),"onUpdate:errors":p=>e("update-widget-errors",i.key,p)},null,40,["value","errors","user-props","locale","onUpdate:value","onUpdate:errors"])),(openBlock(!0),createElementBlock(Fragment,null,renderList(i.errors,p=>(openBlock(),createElementBlock("span",{key:p,class:"span-error"},toDisplayString(p),1))),128))],8,_hoisted_4)}),128)),n.formState.type==="page"&&n.formState.error&&n.formState.error.status===!1?(openBlock(),createElementBlock("span",_hoisted_5,toDisplayString(n.formState.error.message||unref(i18nProvider).translateIfFound("i18n_generic_validation_error",n.formRunnerData.language)),1)):createCommentVNode("",!0)]),"actions"in n.formState?(openBlock(),createElementBlock("div",_hoisted_6,[createVNode(unref(StyleProvider),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.formState.actions,i=>(openBlock(),createBlock(unref(Button),{key:i.name,class:normalizeClass(["next-button",{"next-button__disabled":i.disabled||i.loading}]),loading:i.loading,disabled:i.disabled||i.loading,onClick:v=>e("action-clicked",i),onKeydown:withKeys(v=>e("action-clicked",i),["enter"])},{default:withCtx(()=>[createTextVNode(toDisplayString(i.label),1)]),_:2},1032,["class","loading","disabled","onClick","onKeydown"]))),128))]),_:1})])):createCommentVNode("",!0)],2))],2),createVNode(Watermark,{"page-id":n.formRunnerData.id,locale:n.formRunnerData.language},null,8,["page-id","locale"])])}}}),FormRunner_vue_vue_type_style_index_0_scoped_cd7748d9_lang="",FormRunner=_export_sfc(_sfc_main,[["__scopeId","data-v-cd7748d9"]]);export{FORM_RUNNING_STATES as F,FormRunner as a,FORM_END_STATES as b,FormRunnerController as c,FormConnectionManager as d,redirect as r};
//# sourceMappingURL=FormRunner.704138dc.js.map
