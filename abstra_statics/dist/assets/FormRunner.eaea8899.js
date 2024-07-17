var v=Object.defineProperty;var R=(o,e,t)=>e in o?v(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>(R(o,typeof e!="symbol"?e+"":e,t),t);import{i as isUrl}from"./url.c822b33f.js";import{d as defineComponent,B as inject,f as computed,o as openBlock,et as createElementBlock,dA as renderSlot,ev as createCommentVNode,ey as mergeProps,a as createBaseVNode,g as watch,eK as lodash,f3 as i18nProvider,ez as toDisplayString,u as unref,c as createBlock,eD as resolveDynamicComponent,R as _export_sfc,w as withCtx,ar as createTextVNode,e as ref,b as createVNode,cN as Typography,f8 as StartWidget,f9 as EndWidget,fa as ErrorWidget,aD as Fragment,eC as renderList,bG as Button,ex as normalizeClass,f6 as withKeys,fb as StyleProvider}from"./vue-router.8bd2564b.js";import{u as useUserStore}from"./router.7a276874.js";import{_ as _sfc_main$4}from"./Login.vue_vue_type_script_setup_true_lang.fc0fc9f0.js";import{L as LoadingIndicator}from"./CircularLoading.86e165dd.js";import{W as WidgetsFrame}from"./WidgetsFrame.9dd4ea3a.js";import{S as Steps}from"./Steps.396b2475.js";import{W as Watermark}from"./Watermark.81fe18ab.js";import{C as Card}from"./Card.edeb1037.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="93b510f7-e24b-4e46-8194-49eb677008fe",o._sentryDebugIdIdentifier="sentry-dbid-93b510f7-e24b-4e46-8194-49eb677008fe")}catch{}})();const Z=["width","height","fill","transform"],g={key:0},m=createBaseVNode("path",{d:"M112,36a12,12,0,0,0-12,12V60H24A20,20,0,0,0,4,80v96a20,20,0,0,0,20,20h76v12a12,12,0,0,0,24,0V48A12,12,0,0,0,112,36ZM28,172V84h72v88ZM252,80v96a20,20,0,0,1-20,20H152a12,12,0,0,1,0-24h76V84H152a12,12,0,0,1,0-24h80A20,20,0,0,1,252,80ZM88,112a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V124a12,12,0,0,1,0-24H76A12,12,0,0,1,88,112Z"},null,-1),y=[m],f={key:1},w=createBaseVNode("path",{d:"M240,80v96a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H232A8,8,0,0,1,240,80Z",opacity:"0.2"},null,-1),k=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),x=[w,k],S={key:2},z=createBaseVNode("path",{d:"M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z"},null,-1),C=[z],B={key:3},b=createBaseVNode("path",{d:"M112,42a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80v96a14,14,0,0,0,14,14h82v18a6,6,0,0,0,12,0V48A6,6,0,0,0,112,42ZM24,178a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h82V178ZM246,80v96a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h88a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H144a6,6,0,0,1,0-12h88A14,14,0,0,1,246,80ZM86,112a6,6,0,0,1-6,6H70v26a6,6,0,0,1-12,0V118H48a6,6,0,0,1,0-12H80A6,6,0,0,1,86,112Z"},null,-1),N=[b],E={key:4},P=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),W=[P],$={key:5},j=createBaseVNode("path",{d:"M112,44a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80v96a12,12,0,0,0,12,12h84v20a4,4,0,0,0,8,0V48A4,4,0,0,0,112,44ZM24,180a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h84V180ZM244,80v96a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h88a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H144a4,4,0,0,1,0-8h88A12,12,0,0,1,244,80ZM84,112a4,4,0,0,1-4,4H68v28a4,4,0,0,1-8,0V116H48a4,4,0,0,1,0-8H80A4,4,0,0,1,84,112Z"},null,-1),T=[j],q={name:"PhTextbox"},G=defineComponent({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(o){const e=o,t=inject("weight","regular"),r=inject("size","1em"),n=inject("color","currentColor"),l=inject("mirrored",!1),a=computed(()=>{var i;return(i=e.weight)!=null?i:t}),c=computed(()=>{var i;return(i=e.size)!=null?i:r}),h=computed(()=>{var i;return(i=e.color)!=null?i:n}),d=computed(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(i,p)=>(openBlock(),createElementBlock("svg",mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:c.value,height:c.value,fill:h.value,transform:d.value},i.$attrs),[renderSlot(i.$slots,"default"),a.value==="bold"?(openBlock(),createElementBlock("g",g,y)):a.value==="duotone"?(openBlock(),createElementBlock("g",f,x)):a.value==="fill"?(openBlock(),createElementBlock("g",S,C)):a.value==="light"?(openBlock(),createElementBlock("g",B,N)):a.value==="regular"?(openBlock(),createElementBlock("g",E,W)):a.value==="thin"?(openBlock(),createElementBlock("g",$,T)):createCommentVNode("",!0)],16,Z))}});function normalizePath(o){return o.startsWith("/")?o.slice(1):o}async function redirect(o,e,t,r={}){if(isUrl(t)){const n=new URLSearchParams(r),l=new URL(t);l.search=n.toString(),window.location.href=l.toString()}else{const n=t.replace(/\/$/,"");if(o==="player")await e.push({path:"/"+normalizePath(n),query:r});else if(o==="editor")await e.push({name:"formEditor",params:{formPath:normalizePath(n)},query:r});else if(o==="preview")await e.push({name:"formPreview",params:{formPath:normalizePath(n)},query:r});else throw new Error("Invalid routing")}}const WS_CUSTOM_CLOSING_REASONS={FRONTEND_FORM_RESTART:4e3,LOCK_FAILED:4101,UNSET_THREAD:4102,RECONNECT_FAILED:4103,RECONNECTED_ELSEWHERE:4104,FORM_NOT_FOUND:4105};class FormConnectionManager{constructor(e,t,r,n){s(this,"ws",null);s(this,"heartbeatInterval");s(this,"buffer",[]);s(this,"onMessage",null);s(this,"onClose",null);this.formId=e,this.environment=t,this.userQueryParams=r,this.detached=n}url(e){const t=location.protocol==="https:"?"wss:":"ws:",r=this.environment=="editor"?"_editor/api/forms/socket":"_socket",n={id:this.formId};e&&(n.previous_execution_id=e),this.detached&&(n.detached="true");const l=new URLSearchParams({...n,...this.userQueryParams});return`${t}//${location.host}/${r}?${l}`}handleOpen(e){this.heartbeatInterval=setInterval(()=>this.sendHeartbeat(),1e4),this.flushBufffer().then(e)}async flushBufffer(){for(;this.buffer.length>0;){const e=this.buffer.shift();e&&await this.send(e)}}handleClose(e){var t;clearInterval(this.heartbeatInterval),(t=this.onClose)==null||t.call(this,e)}handleMessage(e){if(!this.onMessage)throw new Error("onMessage is not set");const t=JSON.parse(e.data);this.onMessage(t)}sendHeartbeat(){this.send({type:"execution:heartbeat"},!1)}async send(e,t=!0){if(!this.ws)throw new Error(`[FormRunnerController] failed sending msg ${e.type}: websocket is not connected`);this.ws.readyState===this.ws.OPEN?this.ws.send(JSON.stringify(e)):t&&this.buffer.push(e)}close(e){this.ws&&this.ws.close(WS_CUSTOM_CLOSING_REASONS[e],e)}async newConnection(e){var r;clearInterval(this.heartbeatInterval);let t=(r=e.maxTries)!=null?r:3;if(t==0)throw new Error("Max tries reached");t-=1;try{await new Promise((n,l)=>{try{this.ws=new WebSocket(this.url(e.previousExecutionId),e.authProtocols),this.ws.onopen=()=>this.handleOpen(n),this.ws.onclose=a=>this.handleClose(a),this.ws.onmessage=a=>this.handleMessage(a)}catch(a){l(a)}})}catch{await this.newConnection({...e,maxTries:t})}}}function isInputWidget(o){return"key"in o&&"value"in o&&"errors"in o}const executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(o){throw console.error(`[Error: execute_js]: ${o.message}, context: ${$context}`),o}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(o){return{type:"execute-js:response",value:await executeCode(o.context,o.code)}}const isSerializable=o=>{try{return JSON.stringify(o),!0}catch{return!1}},FORM_END_STATES=["default-end","page-end","error","lock-failed"],FORM_RUNNING_STATES=["authenticating","page","loading"];class FormRunnerController{constructor({formRunnerData:e,logService:t,connectionManager:r,onFormStart:n,onFormEnd:l,onRedirect:a,onStateUpdate:c,onStackTraceUpdate:h}){s(this,"maxReconnectsTries",3);s(this,"connectionManager");s(this,"logService");s(this,"formRunnerData");s(this,"formState");s(this,"executionId");s(this,"messageSeq",0);s(this,"onFormStart");s(this,"onFormEnd");s(this,"onRedirect");s(this,"onStackTraceUpdate");s(this,"onStateUpdate");s(this,"userStore");s(this,"responseHistory",[]);s(this,"lastResponseHistory",[]);s(this,"handlers",{"form:mount-page":[e=>this.handleMountPageMessage(e)],"form:update-page":[e=>this.handleUpdatePageMessage(e)],"execution:started":[e=>this.handleExecutionStartedMessage(e)],"execution:reconnected":[e=>this.handleExecutionReconnectedMessage(e)],"execution:ended":[e=>this.handleExecutionEndedMessage(e)],"execution:heartbeat":[],"auth:invalid-jwt":[e=>this.handleAuthInvalidJWTMessage(e)],"auth:valid-jwt":[e=>this.handleAuthValidTokenMessage(e)],"redirect:request":[e=>this.handleRedirectRequestMessage(e)],"execute-js:request":[e=>this.handleExecuteJSRequestMessage(e)],"auth:require-info":[e=>this.handleAuthRequireInfoMessage(e)]});s(this,"start",async()=>{this.setFormState({type:"loading"}),await this.connectionManager.newConnection({authProtocols:this.userStore.wsAuthHeaders})});s(this,"resetForm",()=>{var e;(e=this.logService)==null||e.log({type:"stdout",log:"[Form reloaded]"}),this.connectionManager.close("FRONTEND_FORM_RESTART"),this.resetState()});s(this,"reconnect",async e=>{if(this.maxReconnectsTries===0){this.setFormState({type:"error",message:"reconnect failed",executionId:e});return}this.maxReconnectsTries-=1,await this.connectionManager.newConnection({authProtocols:this.userStore.wsAuthHeaders,previousExecutionId:e})});s(this,"resetState",()=>{this.messageSeq=0,this.setFormState({type:"waiting",actions:[this.getStartAction()]})});s(this,"startPageLoading",()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.formState.actions.some(e=>e.loading)||this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!0}))})});s(this,"debouncedFinishPageLoading",lodash.exports.debounce(()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!1}))})},500));s(this,"handleAuthEvent",e=>{if(!e){this.resetForm();return}this.formState.type==="authenticating"&&this.sendAuthSavedJWT(e)});s(this,"getStartAction",()=>this.actionFromMessage(this.formRunnerData.startButtonText||i18nProvider.translateIfFound("i18n_start_action",this.formRunnerData.language)));s(this,"getEndStateActions",()=>{const e=this.formRunnerData.restartButtonText||i18nProvider.translateIfFound("i18n_restart_action",this.formRunnerData.language);return this.formRunnerData.allowRestart?[this.actionFromMessage(e)]:[]});s(this,"getState",()=>({formState:this.formState,passwordlessUser:this.userStore.user}));s(this,"widgetFromMessage",(e,t)=>{if(isInputWidget(e)){const r=e.errors.map(n=>i18nProvider.translateIfFound(n,this.formRunnerData.language,e));return{...e,input:!0,_pythonErrors:r,errors:r}}return{...e,input:!1,_pythonErrors:[],errors:[],key:e.type+t}});s(this,"actionFromMessage",e=>({name:e,label:i18nProvider.translateIfFound(e,this.formRunnerData.language,this.formRunnerData),disabled:!1,loading:!1}));s(this,"getAutofillVisibilty",e=>this.lastResponseHistory.length===0?!1:this.lastResponseHistory[0].some(t=>e.find(r=>r.key===t.key&&r.type===t.type&&"value"in r)));s(this,"handleAutofillClick",()=>{!this.lastResponseHistory[0]||this.formState.type==="page"&&(this.lastResponseHistory[0].forEach(t=>{!("widgets"in this.formState&&this.formState.widgets.find(n=>n.key===t.key&&n.type===t.type))||"value"in t&&this.updateWidgetValue(t.key,t.value)}),this.setFormState({...this.formState,showAutofill:!1}))});s(this,"handleMessageReceived",e=>{const t=this.handlers[e.type];if(!t)throw new Error(`No handler for message type ${e.type}`);if(t.forEach(r=>r(e)),e.debug&&this.onStackTraceUpdate){const r=e.type==="execution:ended";this.onStackTraceUpdate(e.debug.stack,r)}});s(this,"handleActionClick",e=>{if(this.formState.type==="waiting")return this.start();if(this.formState.type==="page"){const t=e.name==="i18n_back_action";return this.hasErrors()&&!t?void 0:(this.setFormState({...this.formState,actions:this.formState.actions.map(r=>r.label===e.label?{...r,loading:!0}:r)}),this.lastResponseHistory.shift(),this.responseHistory.push(this.formState.widgets),this.sendFormPageResponse(this.getWidgetValues(),e))}if(this.formState.type==="default-end"||this.formState.type==="page-end")return this.setFormState({...this.formState,actions:[{...this.getStartAction(),loading:!0}]}),this.start()});s(this,"updateWidgetValue",(e,t)=>{if(this.formState.type!=="page")return;const r=this.formState.widgets.find(l=>"key"in l&&l.key===e);if(!r||!isInputWidget(r))return;const n=this.formState.widgets.map(l=>l.key===e?{...l,value:t}:l);this.setFormState({...this.formState,widgets:n}),this.sendFormUserEvent(this.getWidgetValues(),this.getSecrets())});s(this,"updateWidgetFrontendErrors",(e,t)=>{if(this.formState.type!=="page"||!this.formState.widgets.find(l=>l.key===e))return;const n=this.formState.widgets.map(l=>l.key===e?{...l,errors:l._pythonErrors.concat(t.map(a=>i18nProvider.translateIfFound(a,this.formRunnerData.language,l)))}:l);this.setFormState({...this.formState,widgets:n})});if(this.formRunnerData=e,this.logService=t,this.connectionManager=r,this.onFormStart=n,this.onFormEnd=l,this.onRedirect=a,this.onStateUpdate=c,this.onStackTraceUpdate=h,this.userStore=useUserStore(),this.connectionManager.onMessage=d=>this.handleMessageReceived(d),this.connectionManager.onClose=d=>this.handleConnectionClose(d),watch(()=>this.userStore.user,this.handleAuthEvent),this.formRunnerData.autoStart){this.formState={type:"loading"},this.start();return}this.formState={type:"waiting",actions:[this.getStartAction()]}}set detached(e){this.connectionManager.detached=e}fullWidthFromMessage(e){return e.some(t=>"fullWidth"in t&&t.fullWidth)}async handleExecutionStartedMessage(e){this.executionId=e.executionId,this.onFormStart()}async handleExecutionReconnectedMessage(e){this.maxReconnectsTries=3}handleMountPageMessage(e){var r,n;const t=e.widgets.map(this.widgetFromMessage);if(e.endProgram){this.setFormState({type:"page-end",actions:this.getEndStateActions(),widgets:t,fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)});return}this.setFormState({type:"page",widgets:t,actions:(n=(r=e.actions)==null?void 0:r.map(this.actionFromMessage))!=null?n:[],fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)})}async handleExecuteJSRequestMessage(e){const t=await executeJs(e);this.connectionManager.send(t)}async handleAuthRequireInfoMessage(e){this.userStore.loadSavedToken();const t=this.userStore.user;if(t&&!e.refresh){this.sendAuthSavedJWT(t);return}this.userStore.logout(),this.setFormState({type:"authenticating"})}async handleAuthInvalidJWTMessage(e){this.userStore.logout(),this.setFormState({type:"authenticating"})}async handleAuthValidTokenMessage(e){}async handleRedirectRequestMessage(e){this.onRedirect(e.url,e.queryParams)}async handleUpdatePageMessage(e){if(e.seq===this.messageSeq){if(this.formState.type!=="page")throw new Error("Received form:update-page message while not in render-page state");this.setFormState({...this.formState,error:{message:e.validation.message,status:e.validation.status},widgets:e.widgets.map(this.widgetFromMessage),actions:this.formState.actions.map(t=>({...t,disabled:this.shouldDisableAction(t,e)}))}),this.debouncedFinishPageLoading()}}shouldDisableAction(e,t){if(e.name==="i18n_back_action"||this.formState.type!=="page")return!1;const n=t.widgets.map(this.widgetFromMessage).some(a=>a.errors.length>0),l=t.validation.status===!1||Boolean(t.validation.message);return n||l}async handleExecutionEndedMessage(e){var t,r;this.lastResponseHistory=[...this.responseHistory],this.responseHistory=[],!FORM_END_STATES.includes(this.formState.type)&&(e.exitStatus==="SUCCESS"&&(this.setFormState({type:"default-end",actions:this.getEndStateActions()}),(t=this.logService)==null||t.log({type:"stdout",log:"[Form run finished]"})),e.exitStatus==="EXCEPTION"&&this.setFormState({type:"error",message:e.exception,executionId:(r=this.executionId)!=null?r:null}),this.onFormEnd())}sendFormPageResponse(e,t,r){this.connectionManager.send({type:"form:page-response",payload:e,secrets:r,action:t==null?void 0:t.name,seq:++this.messageSeq})}sendFormUserEvent(e,t){this.startPageLoading(),this.connectionManager.send({type:"form:user-event",payload:e,secrets:t,seq:++this.messageSeq})}sendAuthSavedJWT(e){this.connectionManager.send({type:"auth:saved-jwt",jwt:e.rawJwt})}handleCloseAttempt(){return FORM_END_STATES.includes(this.formState.type)||this.formState.type==="waiting"?!1:(this.connectionManager.send({type:"debug:close-attempt"}),!0)}handleConnectionClose(e){var t,r;if(e.code!==WS_CUSTOM_CLOSING_REASONS.FRONTEND_FORM_RESTART)return e.code===WS_CUSTOM_CLOSING_REASONS.LOCK_FAILED?this.setFormState({type:"lock-failed"}):Object.values(WS_CUSTOM_CLOSING_REASONS).includes(e.code)?this.setFormState({type:"error",message:"known/unhandled closure",executionId:(t=this.executionId)!=null?t:null}):FORM_RUNNING_STATES.includes(this.formState.type)?this.executionId?this.reconnect(this.executionId):this.resetState():this.setFormState({type:"error",message:"Unknown closure",executionId:(r=this.executionId)!=null?r:null})}setFormState(e){this.formState=Object.freeze(e),this.onStateUpdate(e)}getSecrets(){return this.formState.type!=="page"?[]:this.formState.widgets.filter(e=>"secret"in e).reduce((e,t)=>"key"in t&&"secret"in t?[...e,{key:t.key,secret:t.secret}]:e,[])}setWidgetValidationFunction(e,t){if(this.formState.type!=="page")return;const r=this.formState.widgets.find(n=>"key"in n&&n.key===e);!r||!isInputWidget(r)||(r.validationFunction=t)}hasErrors(){var e;return this.formState.type!=="page"?!1:((e=this.formState.error)==null?void 0:e.status)===!1||this.formState.widgets.some(t=>t.errors.length>0)}getWidgetValue(e){if(this.formState.type!=="page")return null;const t=this.formState.widgets.find(r=>"key"in r&&r.key===e);if(!t||!isInputWidget(t))return null}getWidgetValues(){return this.formState.type!=="page"?{}:this.formState.widgets.reduce((e,t)=>("value"in t&&(e[t.key]=t.value),e),{})}}const _hoisted_1$2={class:"text"},_sfc_main$3=defineComponent({__name:"component",props:{locale:{}},setup(o){return(e,t)=>(openBlock(),createElementBlock("div",_hoisted_1$2,toDisplayString(unref(i18nProvider).translate("i18n_lock_failed_not_running",e.locale)),1))}}),_hoisted_1$1={class:"outline-button"},_sfc_main$2=defineComponent({__name:"OutlineButton",props:{icon:{},noShadow:{type:Boolean},status:{}},setup(o){return(e,t)=>(openBlock(),createElementBlock("button",_hoisted_1$1,[e.icon?(openBlock(),createBlock(resolveDynamicComponent(e.icon),{key:0,class:"icon",color:"#fff"})):createCommentVNode("",!0),renderSlot(e.$slots,"default",{},void 0,!0)]))}}),OutlineButton_vue_vue_type_style_index_0_scoped_2d3b9e41_lang="",OutlineButton=_export_sfc(_sfc_main$2,[["__scopeId","data-v-2d3b9e41"]]),_sfc_main$1=defineComponent({__name:"FormAutoFill",emits:["click"],setup(o,{emit:e}){return(t,r)=>(openBlock(),createBlock(OutlineButton,{icon:unref(G),class:"form-auto-fill-btn",onClick:r[0]||(r[0]=n=>e("click"))},{default:withCtx(()=>[createTextVNode(" Repeat last answer ")]),_:1},8,["icon"]))}}),FormAutoFill_vue_vue_type_style_index_0_scoped_39354e61_lang="",FormAutoFill=_export_sfc(_sfc_main$1,[["__scopeId","data-v-39354e61"]]),_hoisted_1={key:0,class:"loading-wrapper"},_hoisted_2={class:"form-wrapper"},_hoisted_3=["id"],_hoisted_4={key:5,class:"span-error"},_hoisted_5={key:0,class:"buttons"},_sfc_main=defineComponent({__name:"FormRunner",props:{formRunnerData:{},formState:{},isPreview:{type:Boolean},disabled:{}},emits:["action-clicked","auto-fill-clicked","update-widget-value","update-widget-errors"],setup(o,{emit:e}){const t=o,r=ref(null),n=ref({}),l=()=>{!r.value||(r.value.scrollTop=0)};return watch(()=>t.formState,(a,c)=>{a.type==="page"&&(c==null?void 0:c.type)==="page"&&a.refreshKey!==c.refreshKey&&l()}),(a,c)=>(openBlock(),createBlock(WidgetsFrame,{class:"runner","main-color":a.formRunnerData.mainColor,theme:a.formRunnerData.theme,"font-family":a.formRunnerData.fontFamily},{default:withCtx(()=>{var h,d;return[a.disabled?(openBlock(),createBlock(unref(Card),{key:0,class:"unsaved-changes"},{default:withCtx(()=>[createVNode(unref(Typography),{style:{"font-size":"18px","font-weight":"500"}},{default:withCtx(()=>[createTextVNode(toDisplayString(a.disabled.title),1)]),_:1}),createVNode(unref(Typography),{style:{"margin-bottom":"6px"}},{default:withCtx(()=>[createTextVNode(toDisplayString(a.disabled.message),1)]),_:1})]),_:1})):createCommentVNode("",!0),a.isPreview&&((h=a.formState)==null?void 0:h.type)==="page"&&a.formState.showAutofill?(openBlock(),createBlock(FormAutoFill,{key:1,class:"auto-fill-btn",form:a.formRunnerData,style:{"z-index":1},onClick:c[0]||(c[0]=i=>e("auto-fill-clicked"))},null,8,["form"])):createCommentVNode("",!0),((d=a.formState)==null?void 0:d.type)==="page"?(openBlock(),createBlock(Steps,{key:2,class:"steps","steps-info":a.formState.steps},null,8,["steps-info"])):createCommentVNode("",!0),createBaseVNode("main",{ref_key:"scrollableContainer",ref:r,class:normalizeClass([{disabled:a.disabled}]),style:{padding:"50px 0px","box-sizing":"border-box"}},[!a.formState||a.formState.type=="loading"?(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(LoadingIndicator)])):a.formState.type==="authenticating"?(openBlock(),createBlock(_sfc_main$4,{key:1,class:"form-auth",locale:a.formRunnerData.language},null,8,["locale"])):(openBlock(),createElementBlock("div",{key:2,class:normalizeClass(["form",{"full-width":a.formState.type==="page"&&a.formState.fullWidth}])},[createBaseVNode("div",_hoisted_2,[a.formState.type==="waiting"?(openBlock(),createBlock(StartWidget,{key:0,form:a.formRunnerData},null,8,["form"])):a.formState.type==="default-end"?(openBlock(),createBlock(EndWidget,{key:1,"end-message":a.formRunnerData.endMessage,locale:a.formRunnerData.language},null,8,["end-message","locale"])):a.formState.type==="error"?(openBlock(),createBlock(ErrorWidget,{key:2,"error-message":a.formRunnerData.errorMessage,"execution-id":a.formState.executionId,locale:a.formRunnerData.language},null,8,["error-message","execution-id","locale"])):a.formState.type==="lock-failed"?(openBlock(),createBlock(_sfc_main$3,{key:3,locale:a.formRunnerData.language},null,8,["locale"])):(openBlock(!0),createElementBlock(Fragment,{key:4},renderList(a.formState.widgets,(i,p)=>{var _;return openBlock(),createElementBlock("div",{id:i.type+p,key:(_=i.key)!=null?_:i.type+p,class:"widget"},[(openBlock(),createBlock(resolveDynamicComponent(i.type),{ref_for:!0,ref:u=>"key"in i?n.value[i.key]=u:null,key:i.key+"_"+a.formState.refreshKey,value:unref(isInputWidget)(i)&&i.value,errors:i.errors,"user-props":i,locale:a.formRunnerData.language,"onUpdate:value":u=>e("update-widget-value",i.key,u),"onUpdate:errors":u=>e("update-widget-errors",i.key,u)},null,40,["value","errors","user-props","locale","onUpdate:value","onUpdate:errors"])),(openBlock(!0),createElementBlock(Fragment,null,renderList(i.errors,u=>(openBlock(),createElementBlock("span",{key:u,class:"span-error"},toDisplayString(u),1))),128))],8,_hoisted_3)}),128)),a.formState.type==="page"&&a.formState.error&&a.formState.error.status===!1?(openBlock(),createElementBlock("span",_hoisted_4,toDisplayString(a.formState.error.message||unref(i18nProvider).translateIfFound("i18n_generic_validation_error",a.formRunnerData.language)),1)):createCommentVNode("",!0)]),"actions"in a.formState?(openBlock(),createElementBlock("div",_hoisted_5,[createVNode(unref(StyleProvider),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.formState.actions,i=>(openBlock(),createBlock(unref(Button),{key:i.name,class:normalizeClass(["next-button",{"next-button__disabled":i.disabled||i.loading}]),loading:i.loading,disabled:i.disabled||i.loading,onClick:p=>e("action-clicked",i),onKeydown:withKeys(p=>e("action-clicked",i),["enter"])},{default:withCtx(()=>[createTextVNode(toDisplayString(i.label),1)]),_:2},1032,["class","loading","disabled","onClick","onKeydown"]))),128))]),_:1})])):createCommentVNode("",!0)],2))],2),createVNode(Watermark,{"page-id":a.formRunnerData.id,locale:a.formRunnerData.language},null,8,["page-id","locale"])]}),_:1},8,["main-color","theme","font-family"]))}}),FormRunner_vue_vue_type_style_index_0_scoped_5589a846_lang="",FormRunner=_export_sfc(_sfc_main,[["__scopeId","data-v-5589a846"]]);export{FORM_RUNNING_STATES as F,FORM_END_STATES as a,FormRunner as b,FormRunnerController as c,FormConnectionManager as d,redirect as r};
//# sourceMappingURL=FormRunner.eaea8899.js.map
