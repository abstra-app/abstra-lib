var v=Object.defineProperty;var M=(r,e,t)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(M(r,typeof e!="symbol"?e+"":e,t),t);import{i as isUrl}from"./url.3e79afda.js";import{d as defineComponent,B as inject,f as computed,o as openBlock,eu as createElementBlock,dB as renderSlot,ew as createCommentVNode,ez as mergeProps,a as createBaseVNode,g as watch,R as lodash,f2 as i18nProvider,c as createBlock,eE as resolveDynamicComponent,S as _export_sfc,w as withCtx,as as createTextVNode,u as unref,e as ref,b as createVNode,eA as toDisplayString,cO as Typography,f7 as StartWidget,f8 as EndWidget,f9 as ErrorWidget,aE as Fragment,eD as renderList,bH as Button,ey as normalizeClass,f5 as withKeys,fa as StyleProvider}from"./vue-router.8760ac40.js";import{u as useUserStore}from"./router.f5763115.js";import{_ as _sfc_main$4}from"./Login.vue_vue_type_script_setup_true_lang.77e71eff.js";import{L as LoadingIndicator}from"./CircularLoading.faf2adba.js";import{W as WidgetsFrame}from"./WidgetsFrame.5157b846.js";import{S as Steps}from"./Steps.552e04ca.js";import{W as Watermark}from"./Watermark.61c83aef.js";import{C as Card}from"./Card.0dc16fc1.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3e4b29c8-8cbe-4950-9920-056d6aab264c",r._sentryDebugIdIdentifier="sentry-dbid-3e4b29c8-8cbe-4950-9920-056d6aab264c")}catch{}})();const Z=["width","height","fill","transform"],g={key:0},m=createBaseVNode("path",{d:"M112,36a12,12,0,0,0-12,12V60H24A20,20,0,0,0,4,80v96a20,20,0,0,0,20,20h76v12a12,12,0,0,0,24,0V48A12,12,0,0,0,112,36ZM28,172V84h72v88ZM252,80v96a20,20,0,0,1-20,20H152a12,12,0,0,1,0-24h76V84H152a12,12,0,0,1,0-24h80A20,20,0,0,1,252,80ZM88,112a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V124a12,12,0,0,1,0-24H76A12,12,0,0,1,88,112Z"},null,-1),y=[m],f={key:1},w=createBaseVNode("path",{d:"M240,80v96a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H232A8,8,0,0,1,240,80Z",opacity:"0.2"},null,-1),k=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),x=[w,k],S={key:2},z=createBaseVNode("path",{d:"M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z"},null,-1),C=[z],B={key:3},b=createBaseVNode("path",{d:"M112,42a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80v96a14,14,0,0,0,14,14h82v18a6,6,0,0,0,12,0V48A6,6,0,0,0,112,42ZM24,178a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h82V178ZM246,80v96a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h88a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H144a6,6,0,0,1,0-12h88A14,14,0,0,1,246,80ZM86,112a6,6,0,0,1-6,6H70v26a6,6,0,0,1-12,0V118H48a6,6,0,0,1,0-12H80A6,6,0,0,1,86,112Z"},null,-1),N=[b],E={key:4},P=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),W=[P],$={key:5},j=createBaseVNode("path",{d:"M112,44a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80v96a12,12,0,0,0,12,12h84v20a4,4,0,0,0,8,0V48A4,4,0,0,0,112,44ZM24,180a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h84V180ZM244,80v96a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h88a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H144a4,4,0,0,1,0-8h88A12,12,0,0,1,244,80ZM84,112a4,4,0,0,1-4,4H68v28a4,4,0,0,1-8,0V116H48a4,4,0,0,1,0-8H80A4,4,0,0,1,84,112Z"},null,-1),T=[j],q={name:"PhTextbox"},G=defineComponent({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(r){const e=r,t=inject("weight","regular"),a=inject("size","1em"),i=inject("color","currentColor"),l=inject("mirrored",!1),s=computed(()=>{var n;return(n=e.weight)!=null?n:t}),d=computed(()=>{var n;return(n=e.size)!=null?n:a}),u=computed(()=>{var n;return(n=e.color)!=null?n:i}),c=computed(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(n,p)=>(openBlock(),createElementBlock("svg",mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:u.value,transform:c.value},n.$attrs),[renderSlot(n.$slots,"default"),s.value==="bold"?(openBlock(),createElementBlock("g",g,y)):s.value==="duotone"?(openBlock(),createElementBlock("g",f,x)):s.value==="fill"?(openBlock(),createElementBlock("g",S,C)):s.value==="light"?(openBlock(),createElementBlock("g",B,N)):s.value==="regular"?(openBlock(),createElementBlock("g",E,W)):s.value==="thin"?(openBlock(),createElementBlock("g",$,T)):createCommentVNode("",!0)],16,Z))}});function normalizePath(r){return r.startsWith("/")?r.slice(1):r}async function redirect(r,e,t,a={}){if(isUrl(t)){const i=new URLSearchParams(a),l=new URL(t);l.search=i.toString(),window.location.href=l.toString()}else{const i=t.replace(/\/$/,"");if(r==="player")await e.push({path:"/"+normalizePath(i),query:a});else if(r==="editor")await e.push({name:"formEditor",params:{formPath:normalizePath(i)},query:a});else if(r==="preview")await e.push({name:"formPreview",params:{formPath:normalizePath(i)},query:a});else throw new Error("Invalid routing")}}const WS_CLOSING_STATES=[WebSocket.CLOSING,WebSocket.CLOSED],WS_CUSTOM_CLOSING_REASONS={FRONTEND_FORM_RESTART:4e3};class FormConnectionManager{constructor(e,t,a,i){o(this,"ws",null);o(this,"heartbeatInterval");o(this,"onOpen",null);o(this,"onMessage",null);o(this,"onClose",null);this.formId=e,this.environment=t,this.userQueryParams=a,this._detached=i}set detached(e){this._detached=e}get url(){const e=location.protocol==="https:"?"wss:":"ws:",t=this.environment=="editor"?"_editor/api/forms/socket":"_socket",a=new URLSearchParams({id:this.formId,detached:this._detached?"true":"false",...this.userQueryParams});return`${e}//${location.host}/${t}?${a}`}handleOpen(e){if(!this.onOpen)throw new Error("onOpen is not set");this.onOpen(),e()}handleClose(e){(e.code===1006||!e.wasClean)&&clearInterval(this.heartbeatInterval),this.onClose&&this.onClose(e)}handleMessage(e){if(!this.onMessage)throw new Error("onMessage is not set");const t=JSON.parse(e.data);this.onMessage(t)}sendHeartbeat(){!this.ws||this.ws.readyState!==this.ws.OPEN||this.send({type:"execution:heartbeat"})}async send(e){if(!this.ws)throw new Error(`[FormRunnerController] failed sending msg ${e.type}: websocket is not connected`);WS_CLOSING_STATES.includes(this.ws.readyState)&&await this.newConnection(),this.ws.send(JSON.stringify(e))}async close(e){this.ws&&this.ws.close(WS_CUSTOM_CLOSING_REASONS[e],e)}async newConnection(e=3,t){if(e!=0)return new Promise(a=>{clearInterval(this.heartbeatInterval),this.ws=new WebSocket(this.url,t),this.ws.onopen=()=>this.handleOpen(a),this.ws.onclose=i=>this.handleClose(i),this.ws.onmessage=i=>this.handleMessage(i),this.heartbeatInterval=setInterval(()=>this.sendHeartbeat(),2e3)}).catch(()=>{this.newConnection(e-1)})}}function isInputWidget(r){return"key"in r&&"value"in r&&"errors"in r}const executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(r){throw console.error(`[Error: execute_js]: ${r.message}, context: ${$context}`),r}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(r){return{type:"execute-js:response",value:await executeCode(r.context,r.code)}}const isSerializable=r=>{try{return JSON.stringify(r),!0}catch{return!1}},FORM_END_STATES=["default-end","page-end","error","lock-failed"],FORM_RUNNING_STATES=["authenticating","page","loading"];class FormRunnerController{constructor({formRunnerData:e,logService:t,connectionManager:a,onFormStart:i,onFormEnd:l,onRedirect:s,onStateUpdate:d,onStackTraceUpdate:u}){o(this,"connectionManager");o(this,"logService");o(this,"formRunnerData");o(this,"formState");o(this,"messageSeq",0);o(this,"executionId",null);o(this,"onFormStart");o(this,"onFormEnd");o(this,"onRedirect");o(this,"onStackTraceUpdate");o(this,"onStateUpdate");o(this,"userStore");o(this,"responseHistory",[]);o(this,"lastResponseHistory",[]);o(this,"handlers",{"form:mount-page":[e=>this.handleMountPageMessage(e)],"form:update-page":[e=>this.handleUpdatePageMessage(e)],"execution:started":[e=>this.handleExecutionStartedMessage(e)],"execution:ended":[e=>this.handleExecutionEndedMessage(e)],"execution:heartbeat":[],"execution:lock-failed":[e=>this.handleExecutionLockFailedMessage(e)],"auth:invalid-jwt":[e=>this.handleAuthInvalidJWTMessage(e)],"auth:valid-jwt":[e=>this.handleAuthValidTokenMessage(e)],"redirect:request":[e=>this.handleRedirectRequestMessage(e)],"execute-js:request":[e=>this.handleExecuteJSRequestMessage(e)],"auth:require-info":[e=>this.handleAuthRequireInfoMessage(e)]});o(this,"start",async()=>{this.setFormState({type:"loading"}),await this.connectionManager.newConnection(3,this.userStore.wsAuthHeaders)});o(this,"resetForm",async()=>{var e;(e=this.logService)==null||e.log({type:"stdout",log:"[Form reloaded]"}),await this.connectionManager.close("FRONTEND_FORM_RESTART"),this.resetState()});o(this,"reconnect",async()=>{this.resetState(),await this.start()});o(this,"resetState",()=>{this.messageSeq=0,this.setFormState({type:"waiting",actions:[this.getStartAction()]})});o(this,"startPageLoading",()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.formState.actions.some(e=>e.loading)||this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!0}))})});o(this,"debouncedFinishPageLoading",lodash.exports.debounce(()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!1}))})},500));o(this,"handleAuthEvent",e=>{if(!e){this.resetForm();return}this.formState.type==="authenticating"&&this.sendAuthSavedJWT(e)});o(this,"getStartAction",()=>this.actionFromMessage(this.formRunnerData.startButtonText||"Start"));o(this,"getEndStateActions",()=>{const e=this.formRunnerData.restartButtonText||"Restart";return this.formRunnerData.allowRestart?[this.actionFromMessage(e)]:[]});o(this,"getState",()=>({formState:this.formState,passwordlessUser:this.userStore.user}));o(this,"handleConnectionOpen",()=>{this.connectionManager.send({type:"execution:start"})});o(this,"actionFromMessage",e=>({name:e,label:i18nProvider.translateIfFound(e,this.formRunnerData),disabled:!1,loading:!1}));o(this,"getAutofillVisibilty",e=>this.lastResponseHistory.length===0?!1:this.lastResponseHistory[0].some(t=>e.find(a=>a.key===t.key&&a.type===t.type&&"value"in a)));o(this,"handleAutofillClick",()=>{!this.lastResponseHistory[0]||this.formState.type==="page"&&(this.lastResponseHistory[0].forEach(t=>{!("widgets"in this.formState&&this.formState.widgets.find(i=>i.key===t.key&&i.type===t.type))||"value"in t&&this.updateWidgetValue(t.key,t.value)}),this.setFormState({...this.formState,showAutofill:!1}))});o(this,"handleMessageReceived",e=>{const t=this.handlers[e.type];if(!t)throw new Error(`No handler for message type ${e.type}`);if(t.forEach(a=>a(e)),e.debug&&this.onStackTraceUpdate){const a=e.type==="execution:ended";this.onStackTraceUpdate(e.debug.stack,a)}});o(this,"handleActionClick",e=>{if(this.formState.type==="waiting")return this.start();if(this.formState.type==="page"){const t=e.name==="i18n_back_action";return this.hasErrors()&&!t?void 0:(this.setFormState({...this.formState,actions:this.formState.actions.map(a=>a.label===e.label?{...a,loading:!0}:a)}),this.lastResponseHistory.shift(),this.responseHistory.push(this.formState.widgets),this.sendFormPageResponse(this.getWidgetValues(),e))}if(this.formState.type==="default-end"||this.formState.type==="page-end")return this.setFormState({...this.formState,actions:[{...this.getStartAction(),loading:!0}]}),this.start()});o(this,"updateWidgetValue",(e,t)=>{if(this.formState.type!=="page")return;const a=this.formState.widgets.find(l=>"key"in l&&l.key===e);if(!a||!isInputWidget(a))return;const i=this.formState.widgets.map(l=>l.key===e?{...l,value:t}:l);this.setFormState({...this.formState,widgets:i}),this.sendFormUserEvent(this.getWidgetValues(),this.getSecrets())});o(this,"updateWidgetFrontendErrors",(e,t)=>{if(this.formState.type!=="page"||!this.formState.widgets.find(l=>l.key===e))return;const i=this.formState.widgets.map(l=>l.key===e?{...l,errors:l._pythonErrors.concat(t.map(s=>i18nProvider.translateIfFound(s,l)))}:l);this.setFormState({...this.formState,widgets:i})});if(this.formRunnerData=e,this.logService=t,this.connectionManager=a,this.onFormStart=i,this.onFormEnd=l,this.onRedirect=s,this.onStateUpdate=d,this.onStackTraceUpdate=u,this.userStore=useUserStore(),this.connectionManager.onOpen=()=>this.handleConnectionOpen(),this.connectionManager.onMessage=c=>this.handleMessageReceived(c),this.connectionManager.onClose=c=>this.handleConnectionClose(c),watch(()=>this.userStore.user,this.handleAuthEvent),this.formRunnerData.autoStart){this.formState={type:"loading"},this.start();return}this.formState={type:"waiting",actions:[this.getStartAction()]}}set detached(e){this.connectionManager.detached=e}fullWidthFromMessage(e){return e.some(t=>"fullWidth"in t&&t.fullWidth)}widgetFromMessage(e,t){if(isInputWidget(e)){const a=e.errors.map(i=>i18nProvider.translateIfFound(i,e));return{...e,input:!0,_pythonErrors:a,errors:a}}return{...e,input:!1,_pythonErrors:[],errors:[],key:e.type+t}}async handleExecutionStartedMessage(e){this.executionId=e.executionId,this.onFormStart()}handleMountPageMessage(e){var a,i;const t=e.widgets.map(this.widgetFromMessage);if(e.endProgram){this.setFormState({type:"page-end",actions:this.getEndStateActions(),widgets:t,fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)});return}this.setFormState({type:"page",widgets:t,actions:(i=(a=e.actions)==null?void 0:a.map(this.actionFromMessage))!=null?i:[],fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)})}async handleExecuteJSRequestMessage(e){const t=await executeJs(e);this.connectionManager.send(t)}async handleAuthRequireInfoMessage(e){this.userStore.loadSavedToken();const t=this.userStore.user;if(t&&!e.refresh){this.sendAuthSavedJWT(t);return}this.userStore.logout(),this.setFormState({type:"authenticating"})}async handleAuthInvalidJWTMessage(e){this.userStore.logout(),this.setFormState({type:"authenticating"})}async handleAuthValidTokenMessage(e){}async handleExecutionLockFailedMessage(e){this.setFormState({type:"lock-failed",status:e.status})}async handleRedirectRequestMessage(e){this.onRedirect(e.url,e.queryParams)}async handleUpdatePageMessage(e){if(e.seq===this.messageSeq){if(this.formState.type!=="page")throw new Error("Received form:update-page message while not in render-page state");this.setFormState({...this.formState,error:{message:e.validation.message,status:e.validation.status},widgets:e.widgets.map(this.widgetFromMessage),actions:this.formState.actions.map(t=>({...t,disabled:this.shouldDisableAction(t,e)}))}),this.debouncedFinishPageLoading()}}shouldDisableAction(e,t){if(e.name==="i18n_back_action"||this.formState.type!=="page")return!1;const i=t.widgets.map(this.widgetFromMessage).some(s=>s.errors.length>0),l=t.validation.status===!1||Boolean(t.validation.message);return i||l}async handleExecutionEndedMessage(e){var t;this.lastResponseHistory=[...this.responseHistory],this.responseHistory=[],!FORM_END_STATES.includes(this.formState.type)&&(e.exitStatus==="SUCCESS"&&(this.setFormState({type:"default-end",actions:this.getEndStateActions()}),(t=this.logService)==null||t.log({type:"stdout",log:"[Form run finished]"})),e.exitStatus==="EXCEPTION"&&this.setFormState({type:"error",message:e.exception,executionId:this.executionId}),this.onFormEnd())}sendFormPageResponse(e,t,a){this.connectionManager.send({type:"form:page-response",payload:e,secrets:a,action:t==null?void 0:t.name,seq:++this.messageSeq})}sendFormUserEvent(e,t){this.startPageLoading(),this.connectionManager.send({type:"form:user-event",payload:e,secrets:t,seq:++this.messageSeq})}sendAuthSavedJWT(e){this.connectionManager.send({type:"auth:saved-jwt",jwt:e.rawJwt})}handleCloseAttempt(){return FORM_END_STATES.includes(this.formState.type)||this.formState.type==="waiting"?!1:(this.connectionManager.send({type:"debug:close-attempt"}),!0)}handleConnectionClose(e){e.code!==WS_CUSTOM_CLOSING_REASONS.FRONTEND_FORM_RESTART&&FORM_RUNNING_STATES.includes(this.formState.type)&&this.reconnect()}setFormState(e){this.formState=Object.freeze(e),this.onStateUpdate(e)}getSecrets(){return this.formState.type!=="page"?[]:this.formState.widgets.filter(e=>"secret"in e).reduce((e,t)=>"key"in t&&"secret"in t?[...e,{key:t.key,secret:t.secret}]:e,[])}setWidgetValidationFunction(e,t){if(this.formState.type!=="page")return;const a=this.formState.widgets.find(i=>"key"in i&&i.key===e);!a||!isInputWidget(a)||(a.validationFunction=t)}hasErrors(){var e;return this.formState.type!=="page"?!1:((e=this.formState.error)==null?void 0:e.status)===!1||this.formState.widgets.some(t=>t.errors.length>0)}getWidgetValue(e){if(this.formState.type!=="page")return null;const t=this.formState.widgets.find(a=>"key"in a&&a.key===e);if(!t||!isInputWidget(t))return null}getWidgetValues(){return this.formState.type!=="page"?{}:this.formState.widgets.reduce((e,t)=>("value"in t&&(e[t.key]=t.value),e),{})}}const _hoisted_1$2={key:0,class:"text"},_hoisted_2$1={key:1,class:"text"},_sfc_main$3=defineComponent({__name:"component",props:{status:{}},setup(r){return(e,t)=>e.status==="running"?(openBlock(),createElementBlock("div",_hoisted_1$2,"This form is already being filled")):(openBlock(),createElementBlock("div",_hoisted_2$1,"This form was already filled"))}}),_hoisted_1$1={class:"outline-button"},_sfc_main$2=defineComponent({__name:"OutlineButton",props:{icon:{},noShadow:{type:Boolean},status:{}},setup(r){return(e,t)=>(openBlock(),createElementBlock("button",_hoisted_1$1,[e.icon?(openBlock(),createBlock(resolveDynamicComponent(e.icon),{key:0,class:"icon",color:"#fff"})):createCommentVNode("",!0),renderSlot(e.$slots,"default",{},void 0,!0)]))}}),OutlineButton_vue_vue_type_style_index_0_scoped_2d3b9e41_lang="",OutlineButton=_export_sfc(_sfc_main$2,[["__scopeId","data-v-2d3b9e41"]]),_sfc_main$1=defineComponent({__name:"FormAutoFill",emits:["click"],setup(r,{emit:e}){return(t,a)=>(openBlock(),createBlock(OutlineButton,{icon:unref(G),class:"form-auto-fill-btn",onClick:a[0]||(a[0]=i=>e("click"))},{default:withCtx(()=>[createTextVNode(" Repeat last answer ")]),_:1},8,["icon"]))}}),FormAutoFill_vue_vue_type_style_index_0_scoped_39354e61_lang="",FormAutoFill=_export_sfc(_sfc_main$1,[["__scopeId","data-v-39354e61"]]),_hoisted_1={key:0,class:"loading-wrapper"},_hoisted_2={class:"form-wrapper"},_hoisted_3=["id"],_hoisted_4={key:5,class:"span-error"},_hoisted_5={key:0,class:"buttons"},_sfc_main=defineComponent({__name:"FormRunner",props:{formRunnerData:{},formState:{},isPreview:{type:Boolean},disabled:{}},emits:["action-clicked","auto-fill-clicked","update-widget-value","update-widget-errors"],setup(r,{emit:e}){const t=r,a=ref(null),i=ref({}),l=()=>{!a.value||(a.value.scrollTop=0)};return watch(()=>t.formState,(s,d)=>{s.type==="page"&&(d==null?void 0:d.type)==="page"&&s.refreshKey!==d.refreshKey&&l()}),(s,d)=>(openBlock(),createBlock(WidgetsFrame,{class:"runner","main-color":s.formRunnerData.mainColor,theme:s.formRunnerData.theme,"font-family":s.formRunnerData.fontFamily},{default:withCtx(()=>{var u,c;return[s.disabled?(openBlock(),createBlock(unref(Card),{key:0,class:"unsaved-changes"},{default:withCtx(()=>[createVNode(unref(Typography),{style:{"font-size":"18px","font-weight":"500"}},{default:withCtx(()=>[createTextVNode(toDisplayString(s.disabled.title),1)]),_:1}),createVNode(unref(Typography),{style:{"margin-bottom":"6px"}},{default:withCtx(()=>[createTextVNode(toDisplayString(s.disabled.message),1)]),_:1})]),_:1})):createCommentVNode("",!0),s.isPreview&&((u=s.formState)==null?void 0:u.type)==="page"&&s.formState.showAutofill?(openBlock(),createBlock(FormAutoFill,{key:1,class:"auto-fill-btn",form:s.formRunnerData,style:{"z-index":1},onClick:d[0]||(d[0]=n=>e("auto-fill-clicked"))},null,8,["form"])):createCommentVNode("",!0),((c=s.formState)==null?void 0:c.type)==="page"?(openBlock(),createBlock(Steps,{key:2,class:"steps","steps-info":s.formState.steps},null,8,["steps-info"])):createCommentVNode("",!0),createBaseVNode("main",{ref_key:"scrollableContainer",ref:a,class:normalizeClass([{disabled:s.disabled}]),style:{padding:"50px 0px","box-sizing":"border-box"}},[!s.formState||s.formState.type=="loading"?(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(LoadingIndicator)])):s.formState.type==="authenticating"?(openBlock(),createBlock(_sfc_main$4,{key:1,class:"form-auth"})):(openBlock(),createElementBlock("div",{key:2,class:normalizeClass(["form",{"full-width":s.formState.type==="page"&&s.formState.fullWidth}])},[createBaseVNode("div",_hoisted_2,[s.formState.type==="waiting"?(openBlock(),createBlock(StartWidget,{key:0,form:s.formRunnerData},null,8,["form"])):s.formState.type==="default-end"?(openBlock(),createBlock(EndWidget,{key:1,"end-message":s.formRunnerData.endMessage},null,8,["end-message"])):s.formState.type==="error"?(openBlock(),createBlock(ErrorWidget,{key:2,"error-message":s.formRunnerData.errorMessage,"execution-id":s.formState.executionId},null,8,["error-message","execution-id"])):s.formState.type==="lock-failed"?(openBlock(),createBlock(_sfc_main$3,{key:3,status:s.formState.status},null,8,["status"])):(openBlock(!0),createElementBlock(Fragment,{key:4},renderList(s.formState.widgets,(n,p)=>{var _;return openBlock(),createElementBlock("div",{id:n.type+p,key:(_=n.key)!=null?_:n.type+p,class:"widget"},[(openBlock(),createBlock(resolveDynamicComponent(n.type),{ref_for:!0,ref:h=>"key"in n?i.value[n.key]=h:null,key:n.key+"_"+s.formState.refreshKey,value:unref(isInputWidget)(n)&&n.value,errors:n.errors,"user-props":n,"onUpdate:value":h=>e("update-widget-value",n.key,h),"onUpdate:errors":h=>e("update-widget-errors",n.key,h)},null,40,["value","errors","user-props","onUpdate:value","onUpdate:errors"])),(openBlock(!0),createElementBlock(Fragment,null,renderList(n.errors,h=>(openBlock(),createElementBlock("span",{key:h,class:"span-error"},toDisplayString(h),1))),128))],8,_hoisted_3)}),128)),s.formState.type==="page"&&s.formState.error&&s.formState.error.status===!1?(openBlock(),createElementBlock("span",_hoisted_4,toDisplayString(s.formState.error.message||unref(i18nProvider).translateIfFound("i18n_generic_validation_error")),1)):createCommentVNode("",!0)]),"actions"in s.formState?(openBlock(),createElementBlock("div",_hoisted_5,[createVNode(unref(StyleProvider),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.formState.actions,n=>(openBlock(),createBlock(unref(Button),{key:n.name,class:normalizeClass(["next-button",{"next-button__disabled":n.disabled||n.loading}]),loading:n.loading,disabled:n.disabled||n.loading,onClick:p=>e("action-clicked",n),onKeydown:withKeys(p=>e("action-clicked",n),["enter"])},{default:withCtx(()=>[createTextVNode(toDisplayString(n.label),1)]),_:2},1032,["class","loading","disabled","onClick","onKeydown"]))),128))]),_:1})])):createCommentVNode("",!0)],2))],2),createVNode(Watermark,{"page-id":s.formRunnerData.id},null,8,["page-id"])]}),_:1},8,["main-color","theme","font-family"]))}}),FormRunner_vue_vue_type_style_index_0_scoped_f89a9641_lang="",FormRunner=_export_sfc(_sfc_main,[["__scopeId","data-v-f89a9641"]]);export{FORM_RUNNING_STATES as F,FORM_END_STATES as a,FormRunner as b,FormRunnerController as c,FormConnectionManager as d,redirect as r};
//# sourceMappingURL=FormRunner.63262652.js.map
