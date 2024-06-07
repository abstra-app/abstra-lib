var v=Object.defineProperty;var M=(r,e,t)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(M(r,typeof e!="symbol"?e+"":e,t),t);import{i as isUrl}from"./url.7a95c9e4.js";import{d as defineComponent,a0 as inject,y as computed,b as openBlock,eV as createElementBlock,dy as renderSlot,eX as createCommentVNode,e_ as mergeProps,e as createBaseVNode,fr as i18nProvider,c as createBlock,f3 as resolveDynamicComponent,E as _export_sfc,w as withCtx,am as createTextVNode,u as unref,f4 as toDisplayString,fs as createStaticVNode,r as ref,O as watch,f as createVNode,cS as Typography,ft as StartWidget,fu as EndWidget,fv as ErrorWidget,ay as Fragment,f2 as renderList,bF as Button,eZ as normalizeClass,fq as withKeys,fw as StyleProvider}from"./outputWidgets.012e2b35.js";import{_ as _sfc_main$5}from"./Login.vue_vue_type_script_setup_true_lang.d1e88284.js";import{L as LoadingIndicator}from"./CircularLoading.121bbccc.js";import{W as WidgetsFrame}from"./WidgetsFrame.01eb8be2.js";import{S as Steps}from"./Steps.c9aa1c8c.js";import{S as SetttingsProvider}from"./index.cff85d26.js";import{C as Card}from"./Card.37422ead.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="c3f4c79c-05f0-4bd8-9f69-93a8e8a80005",r._sentryDebugIdIdentifier="sentry-dbid-c3f4c79c-05f0-4bd8-9f69-93a8e8a80005")}catch{}})();function normalizePath(r){return r.startsWith("/")?r.slice(1):r}async function redirect(r,e,t,a={}){if(isUrl(t)){const i=new URLSearchParams(a),l=new URL(t);l.search=i.toString(),window.location.href=l.toString()}else{const i=t.replace(/\/$/,"");if(r==="player")await e.push({path:"/"+normalizePath(i),query:a});else if(r==="editor")await e.push({name:"formEditor",params:{formPath:normalizePath(i)},query:a});else if(r==="preview")await e.push({name:"formPreview",params:{formPath:normalizePath(i)},query:a});else throw new Error("Invalid routing")}}const Z=["width","height","fill","transform"],g={key:0},m=createBaseVNode("path",{d:"M112,36a12,12,0,0,0-12,12V60H24A20,20,0,0,0,4,80v96a20,20,0,0,0,20,20h76v12a12,12,0,0,0,24,0V48A12,12,0,0,0,112,36ZM28,172V84h72v88ZM252,80v96a20,20,0,0,1-20,20H152a12,12,0,0,1,0-24h76V84H152a12,12,0,0,1,0-24h80A20,20,0,0,1,252,80ZM88,112a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V124a12,12,0,0,1,0-24H76A12,12,0,0,1,88,112Z"},null,-1),y=[m],f={key:1},w=createBaseVNode("path",{d:"M240,80v96a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H232A8,8,0,0,1,240,80Z",opacity:"0.2"},null,-1),k=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),x=[w,k],S={key:2},z=createBaseVNode("path",{d:"M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z"},null,-1),C=[z],B={key:3},b=createBaseVNode("path",{d:"M112,42a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80v96a14,14,0,0,0,14,14h82v18a6,6,0,0,0,12,0V48A6,6,0,0,0,112,42ZM24,178a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h82V178ZM246,80v96a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h88a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H144a6,6,0,0,1,0-12h88A14,14,0,0,1,246,80ZM86,112a6,6,0,0,1-6,6H70v26a6,6,0,0,1-12,0V118H48a6,6,0,0,1,0-12H80A6,6,0,0,1,86,112Z"},null,-1),N=[b],E={key:4},P=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),W=[P],$={key:5},j=createBaseVNode("path",{d:"M112,44a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80v96a12,12,0,0,0,12,12h84v20a4,4,0,0,0,8,0V48A4,4,0,0,0,112,44ZM24,180a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h84V180ZM244,80v96a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h88a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H144a4,4,0,0,1,0-8h88A12,12,0,0,1,244,80ZM84,112a4,4,0,0,1-4,4H68v28a4,4,0,0,1-8,0V116H48a4,4,0,0,1,0-8H80A4,4,0,0,1,84,112Z"},null,-1),T=[j],q={name:"PhTextbox"},G=defineComponent({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(r){const e=r,t=inject("weight","regular"),a=inject("size","1em"),i=inject("color","currentColor"),l=inject("mirrored",!1),s=computed(()=>{var o;return(o=e.weight)!=null?o:t}),d=computed(()=>{var o;return(o=e.size)!=null?o:a}),h=computed(()=>{var o;return(o=e.color)!=null?o:i}),p=computed(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(o,c)=>(openBlock(),createElementBlock("svg",mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:h.value,transform:p.value},o.$attrs),[renderSlot(o.$slots,"default"),s.value==="bold"?(openBlock(),createElementBlock("g",g,y)):s.value==="duotone"?(openBlock(),createElementBlock("g",f,x)):s.value==="fill"?(openBlock(),createElementBlock("g",S,C)):s.value==="light"?(openBlock(),createElementBlock("g",B,N)):s.value==="regular"?(openBlock(),createElementBlock("g",E,W)):s.value==="thin"?(openBlock(),createElementBlock("g",$,T)):createCommentVNode("",!0)],16,Z))}}),WS_CLOSING_STATES=[WebSocket.CLOSING,WebSocket.CLOSED],WS_CLOSING_REASONS={FORM_EDITOR_RESTART:4e3};class FormConnectionManager{constructor(e,t,a,i){n(this,"ws",null);n(this,"heartbeatInterval");n(this,"onOpen",null);n(this,"onMessage",null);this.formId=e,this.environment=t,this.userQueryParams=a,this._detached=i}set detached(e){this._detached=e}get url(){const e=location.protocol==="https:"?"wss:":"ws:",t=this.environment=="editor"?"_editor/api/forms/socket":"_socket",a=new URLSearchParams({id:this.formId,detached:this._detached?"true":"false",...this.userQueryParams});return`${e}//${location.host}/${t}?${a}`}handleOpen(e){if(!this.onOpen)throw new Error("onOpen is not set");this.onOpen(),e()}handleClose(e){(e.code===1006||!e.wasClean)&&clearInterval(this.heartbeatInterval)}handleMessage(e){if(!this.onMessage)throw new Error("onMessage is not set");const t=JSON.parse(e.data);this.onMessage(t)}sendHeartbeat(){!this.ws||this.ws.readyState!==this.ws.OPEN||this.send({type:"execution:heartbeat"})}async send(e){if(!this.ws)throw new Error(`[FormRunnerController] failed sending msg ${e.type}: websocket is not connected`);WS_CLOSING_STATES.includes(this.ws.readyState)&&await this.connect(),this.ws.send(JSON.stringify(e))}async close(e){this.ws&&this.ws.close(WS_CLOSING_REASONS[e],e)}async reset(){await this.close("FORM_EDITOR_RESTART"),await this.connect()}async connect(e=3,t){if(e!=0)return new Promise(a=>{clearInterval(this.heartbeatInterval),this.ws=new WebSocket(this.url,t),this.ws.onopen=()=>this.handleOpen(a),this.ws.onclose=i=>this.handleClose(i),this.ws.onmessage=i=>this.handleMessage(i),this.heartbeatInterval=setInterval(()=>this.sendHeartbeat(),2e3)}).catch(()=>{this.connect(e-1)})}}function isInputWidget(r){return"key"in r&&"value"in r&&"errors"in r}const executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(r){throw console.error(`[Error: execute_js]: ${r.message}, context: ${$context}`),r}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(r){return{type:"execute-js:response",value:await executeCode(r.context,r.code)}}const isSerializable=r=>{try{return JSON.stringify(r),!0}catch{return!1}},FORM_END_STATES=["default-end","page-end","error","lock-failed"],FORM_RUNNING_STATES=["authenticating","page"];class FormRunnerController{constructor({formRunnerData:e,userManager:t,logService:a,connectionManager:i,onFormStart:l,onFormEnd:s,onRedirect:d,onAuthUpdate:h,onStateUpdate:p,onStackTraceUpdate:o}){n(this,"connectionManager");n(this,"logService");n(this,"userManager");n(this,"formRunnerData");n(this,"formState");n(this,"messageSeq",0);n(this,"executionId",null);n(this,"onFormStart");n(this,"onFormEnd");n(this,"onRedirect");n(this,"onStackTraceUpdate");n(this,"onStateUpdate");n(this,"onAuthUpdate");n(this,"userPubsubToken");n(this,"responseHistory",[]);n(this,"lastResponseHistory",[]);n(this,"handlers",{"form:mount-page":[e=>this.handleMountPageMessage(e)],"form:update-page":[e=>this.handleUpdatePageMessage(e)],"execution:stdout":[e=>this.handleStdoutMessage(e)],"execution:stderr":[e=>this.handleStderrMessage(e)],"execution:started":[e=>this.handleExecutionStartedMessage(e)],"execution:ended":[e=>this.handleExecutionEndedMessage(e)],"execution:heartbeat":[],"execution:lock-failed":[e=>this.handleExecutionLockFailedMessage(e)],"auth:invalid-jwt":[e=>this.handleAuthInvalidJWTMessage(e)],"auth:valid-jwt":[e=>this.handleAuthValidTokenMessage(e)],"redirect:request":[e=>this.handleRedirectRequestMessage(e)],"execute-js:request":[e=>this.handleExecuteJSRequestMessage(e)],"auth:require-info":[e=>this.handleAuthRequireInfoMessage(e)]});n(this,"start",async()=>{await this.connectionManager.connect(3,this.userManager.wsAuthProtocols())});n(this,"reset",async()=>{var e;(e=this.logService)==null||e.log({type:"stdout",log:"[Form reloaded]"}),await this.connectionManager.close("FORM_EDITOR_RESTART"),this.messageSeq=0,this.setFormState({type:"waiting",actions:[this.getStartAction()]})});n(this,"getStartAction",()=>this.actionFromMessage(this.formRunnerData.startButtonText||"Start"));n(this,"getEndStateActions",()=>{const e=this.formRunnerData.restartButtonText||"Restart";return this.formRunnerData.allowRestart?[this.actionFromMessage(e)]:[]});n(this,"getState",()=>({formState:this.formState,passwordlessUser:this.userManager.getUser()}));n(this,"handleConnectionOpen",()=>{this.connectionManager.send({type:"execution:start"})});n(this,"actionFromMessage",e=>({name:e,label:i18nProvider.translateIfFound(e,this.formRunnerData),disabled:!1,loading:!1}));n(this,"getAutofillVisibilty",e=>this.lastResponseHistory.length===0?!1:this.lastResponseHistory[0].some(t=>e.find(a=>a.key===t.key&&a.type===t.type&&"value"in a)));n(this,"handleAutofillClick",()=>{!this.lastResponseHistory[0]||this.formState.type==="page"&&(this.lastResponseHistory[0].forEach(t=>{!("widgets"in this.formState&&this.formState.widgets.find(i=>i.key===t.key&&i.type===t.type))||"value"in t&&this.updateWidgetValue(t.key,t.value)}),this.setFormState({...this.formState,showAutofill:!1}))});n(this,"handleMessageReceived",e=>{const t=this.handlers[e.type];if(!t)throw new Error(`No handler for message type ${e.type}`);if(t.forEach(a=>a(e)),e.debug&&this.onStackTraceUpdate){const a=e.type==="execution:ended";this.onStackTraceUpdate(e.debug.stack,a)}});n(this,"logout",()=>{this.userManager.removeUser(),this.reset(),this.onAuthUpdate(null)});n(this,"handleActionClick",e=>{if(this.formState.type==="waiting")return this.setFormState({...this.formState,actions:this.formState.actions.map(t=>t.label===e.label?{...t,loading:!0}:t)}),this.start();if(this.formState.type==="page"){const t=e.name==="i18n_back_action";return this.hasErrors()&&!t?void 0:(this.setFormState({...this.formState,actions:this.formState.actions.map(a=>a.label===e.label?{...a,loading:!0}:a)}),this.lastResponseHistory.shift(),this.responseHistory.push(this.formState.widgets),this.sendFormPageResponse(this.getWidgetValues(),e))}if(this.formState.type==="default-end"||this.formState.type==="page-end")return this.setFormState({...this.formState,actions:[{...this.getStartAction(),loading:!0}]}),this.start()});n(this,"updateWidgetValue",(e,t)=>{if(this.formState.type!=="page")return;const a=this.formState.widgets.find(l=>"key"in l&&l.key===e);if(!a||!isInputWidget(a))return;const i=this.formState.widgets.map(l=>l.key===e?{...l,value:t}:l);this.setFormState({...this.formState,widgets:i}),this.sendFormUserEvent(this.getWidgetValues(),this.getSecrets())});n(this,"updateWidgetFrontendErrors",(e,t)=>{if(this.formState.type!=="page"||!this.formState.widgets.find(l=>l.key===e))return;const i=this.formState.widgets.map(l=>l.key===e?{...l,errors:l._pythonErrors.concat(t.map(s=>i18nProvider.translateIfFound(s,l)))}:l);this.setFormState({...this.formState,widgets:i})});if(this.formRunnerData=e,this.userManager=t,this.logService=a,this.connectionManager=i,this.onFormStart=l,this.onFormEnd=s,this.onRedirect=d,this.onAuthUpdate=h,this.onStateUpdate=p,this.onStackTraceUpdate=o,this.userPubsubToken=t.pubsub.subscribe("authenticated",c=>{c&&(this.connectionManager.send({type:"auth:saved-jwt",jwt:c==null?void 0:c.jwt}),this.onAuthUpdate(c))}),this.connectionManager.onOpen=()=>this.handleConnectionOpen(),this.connectionManager.onMessage=c=>this.handleMessageReceived(c),this.formRunnerData.autoStart){this.formState={type:"loading"},this.start();return}this.formState={type:"waiting",actions:[this.getStartAction()]}}set detached(e){this.connectionManager.detached=e}fullWidthFromMessage(e){return e.some(t=>"fullWidth"in t&&t.fullWidth)}widgetFromMessage(e,t){if(isInputWidget(e)){const a=e.errors.map(i=>i18nProvider.translateIfFound(i,e));return{...e,input:!0,_pythonErrors:a,errors:a}}return{...e,input:!1,_pythonErrors:[],errors:[],key:e.type+t}}async handleExecutionStartedMessage(e){this.executionId=e.executionId,this.onFormStart()}handleMountPageMessage(e){var a,i;const t=e.widgets.map(this.widgetFromMessage);if(e.endProgram){this.setFormState({type:"page-end",actions:this.getEndStateActions(),widgets:t,fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)});return}this.setFormState({type:"page",widgets:t,actions:(i=(a=e.actions)==null?void 0:a.map(this.actionFromMessage))!=null?i:[],fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)})}async handleExecuteJSRequestMessage(e){const t=await executeJs(e);this.connectionManager.send(t)}async handleAuthRequireInfoMessage(e){const t=this.userManager.getUser();if(t&&!e.refresh){this.sendAuthSavedJWT(t);return}this.userManager.removeUser(),this.setFormState({type:"authenticating"})}async handleAuthInvalidJWTMessage(e){this.userManager.removeUser(),this.setFormState({type:"authenticating"})}async handleStderrMessage(e){var t;(t=this.logService)==null||t.log({type:"stderr",log:e.log})}async handleStdoutMessage(e){var t;(t=this.logService)==null||t.log({type:"stdout",log:e.log})}async handleAuthValidTokenMessage(e){}async handleExecutionLockFailedMessage(e){this.setFormState({type:"lock-failed",status:e.status})}async handleRedirectRequestMessage(e){this.onRedirect(e.url,e.queryParams)}async handleUpdatePageMessage(e){if(e.seq===this.messageSeq){if(this.formState.type!=="page")throw new Error("Received form:update-page message while not in render-page state");this.setFormState({...this.formState,error:{message:e.validation.message,status:e.validation.status},widgets:e.widgets.map(this.widgetFromMessage),actions:this.formState.actions.map(t=>({...t,loading:!1}))})}}async handleExecutionEndedMessage(e){var t,a;this.lastResponseHistory=[...this.responseHistory],this.responseHistory=[],!FORM_END_STATES.includes(this.formState.type)&&(e.exitStatus==="SUCCESS"&&(this.setFormState({type:"default-end",actions:this.getEndStateActions()}),(t=this.logService)==null||t.log({type:"stdout",log:"[Form run finished]"})),e.exitStatus==="EXCEPTION"&&(this.setFormState({type:"error",message:e.exception,executionId:this.executionId}),(a=this.logService)==null||a.log({type:"stderr",log:e.exception})),this.onFormEnd())}sendFormPageResponse(e,t,a){this.connectionManager.send({type:"form:page-response",payload:e,secrets:a,action:t==null?void 0:t.name,seq:++this.messageSeq})}sendFormUserEvent(e,t){this.connectionManager.send({type:"form:user-event",payload:e,secrets:t,seq:++this.messageSeq})}sendAuthSavedJWT(e){this.connectionManager.send({type:"auth:saved-jwt",jwt:e.jwt})}handleCloseAttempt(){return FORM_END_STATES.includes(this.formState.type)?!1:(this.connectionManager.send({type:"debug:close-attempt"}),!0)}setFormState(e){this.formState=Object.freeze(e),this.onStateUpdate(e)}getSecrets(){return this.formState.type!=="page"?[]:this.formState.widgets.filter(e=>"secret"in e).reduce((e,t)=>"key"in t&&"secret"in t?[...e,{key:t.key,secret:t.secret}]:e,[])}setWidgetValidationFunction(e,t){if(this.formState.type!=="page")return;const a=this.formState.widgets.find(i=>"key"in i&&i.key===e);!a||!isInputWidget(a)||(a.validationFunction=t)}hasErrors(){var e;return this.formState.type!=="page"?!1:((e=this.formState.error)==null?void 0:e.status)===!1||this.formState.widgets.some(t=>t.errors.length>0)}shouldDisableAction(e){return this.formState.type!=="page"||this.hasErrors()?!0:e!=="i18n_back_action"}getWidgetValue(e){if(this.formState.type!=="page")return null;const t=this.formState.widgets.find(a=>"key"in a&&a.key===e);if(!t||!isInputWidget(t))return null}getWidgetValues(){return this.formState.type!=="page"?{}:this.formState.widgets.reduce((e,t)=>("value"in t&&(e[t.key]=t.value),e),{})}clearListeners(){this.userManager.pubsub.unsubscribe(this.userPubsubToken)}}const _hoisted_1$3={key:0,class:"text"},_hoisted_2$2={key:1,class:"text"},_sfc_main$4=defineComponent({__name:"component",props:{status:{}},setup(r){return(e,t)=>e.status==="running"?(openBlock(),createElementBlock("div",_hoisted_1$3,"This form is already being filled")):(openBlock(),createElementBlock("div",_hoisted_2$2,"This form was already filled"))}}),_hoisted_1$2={class:"outline-button"},_sfc_main$3=defineComponent({__name:"OutlineButton",props:{icon:{},noShadow:{type:Boolean},status:{}},setup(r){return(e,t)=>(openBlock(),createElementBlock("button",_hoisted_1$2,[e.icon?(openBlock(),createBlock(resolveDynamicComponent(e.icon),{key:0,class:"icon",color:"#fff"})):createCommentVNode("",!0),renderSlot(e.$slots,"default",{},void 0,!0)]))}}),OutlineButton_vue_vue_type_style_index_0_scoped_8d870775_lang="",OutlineButton=_export_sfc(_sfc_main$3,[["__scopeId","data-v-8d870775"]]),_sfc_main$2=defineComponent({__name:"FormAutoFill",emits:["click"],setup(r,{emit:e}){return(t,a)=>(openBlock(),createBlock(OutlineButton,{icon:unref(G),class:"form-auto-fill-btn",onClick:a[0]||(a[0]=i=>e("click"))},{default:withCtx(()=>[createTextVNode(" Repeat last answer ")]),_:1},8,["icon"]))}}),FormAutoFill_vue_vue_type_style_index_0_scoped_24a4c744_lang="",FormAutoFill=_export_sfc(_sfc_main$2,[["__scopeId","data-v-24a4c744"]]),_hoisted_1$1=["href"],_hoisted_2$1=createStaticVNode('<svg width="44" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-91fa59aa><g clip-path="url(#clip0_405_116214)" data-v-91fa59aa><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="#E36C7C" data-v-91fa59aa></path><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="url(#paint0_linear_405_116214)" data-v-91fa59aa></path><path d="M218.387 91.2249L176.195 127.557L173.851 129.51C151.192 149.849 149.853 152.309 141.642 152.584L141.584 152.586C139.612 152.652 135.357 152.795 131.875 149.849C126.797 145.552 120.155 140.083 117.03 137.348C115.34 135.869 112.465 133.039 109.998 131.097C107.902 129.448 106.482 127.581 104.919 127.581C103.357 127.581 100.622 129.925 96.3246 133.832C92.0272 137.739 82.6511 146.333 82.6511 146.333L65.0712 161.569C65.0712 161.569 42.5857 180.688 36.7256 185.376C30.8656 190.064 16.5797 175.69 21.4895 171.703C21.9628 171.23 26.2429 167.755 29.7179 164.915C32.2165 162.84 34.2084 161.179 34.2084 161.179C34.9897 160.397 66.2433 133.051 66.2433 133.051L87.723 114.573C87.723 114.573 95.9339 106.094 105.701 106.094C108.826 106.094 112.83 106.485 126.015 118.205C129.531 121.33 131.485 122.542 135.782 126.409C137.345 127.816 139.852 130.316 140.861 130.316C141.882 130.316 143.986 128.363 145.549 127.023C145.549 127.023 195.897 84.4149 202.37 77.9421C207.839 72.4726 223.075 86.9273 218.387 91.2249Z" fill="url(#paint1_linear_405_116214)" data-v-91fa59aa></path><path d="M33.238 67.1372C31.2846 68.6564 23.9305 75.1737 22.2992 76.9039C19.3366 80.0417 21.3638 81.3905 25.6611 84.9065C29.9585 88.4225 57.8962 112.712 64.8542 118.963L79.9642 105.221L41.288 71.2331C36.5999 67.1372 35.1913 65.6179 33.238 67.1372Z" fill="url(#paint2_linear_405_116214)" data-v-91fa59aa></path></g><defs data-v-91fa59aa><linearGradient id="paint0_linear_405_116214" x1="172.68" y1="133.808" x2="183.059" y2="196.169" gradientUnits="userSpaceOnUse" data-v-91fa59aa><stop offset="0.114583" stop-color="#FF98A6" data-v-91fa59aa></stop><stop offset="1" stop-color="#E36C7C" data-v-91fa59aa></stop></linearGradient><linearGradient id="paint1_linear_405_116214" x1="219.271" y1="186.305" x2="206.115" y2="57.7298" gradientUnits="userSpaceOnUse" data-v-91fa59aa><stop stop-color="#E36C7C" data-v-91fa59aa></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-91fa59aa></stop></linearGradient><linearGradient id="paint2_linear_405_116214" x1="20.8984" y1="66.56" x2="30.8589" y2="127.049" gradientUnits="userSpaceOnUse" data-v-91fa59aa><stop stop-color="#E36C7C" data-v-91fa59aa></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-91fa59aa></stop></linearGradient><clipPath id="clip0_405_116214" data-v-91fa59aa><rect width="256" height="256" fill="white" data-v-91fa59aa></rect></clipPath></defs></svg><b data-v-91fa59aa>Abstra Cloud</b>',2),_sfc_main$1=defineComponent({__name:"Watermark",props:{runtime:{}},setup(r){var a;const e=window.location.hostname.split(".")[0],t=(a=SetttingsProvider.instance)==null?void 0:a.showWatermark;return(i,l)=>unref(t)?(openBlock(),createElementBlock("a",{key:0,href:`https://www.abstra.io/forms?utm_source=abstra_pages&utm_medium=badge&utm_campaign=${i.runtime.id}&origin_subdomain=${unref(e)}`,target:"_blank",class:"watermark"},[createTextVNode(toDisplayString(unref(i18nProvider).translate("i18n_watermark_text"))+" ",1),_hoisted_2$1],8,_hoisted_1$1)):createCommentVNode("",!0)}}),Watermark_vue_vue_type_style_index_0_scoped_91fa59aa_lang="",Watermark=_export_sfc(_sfc_main$1,[["__scopeId","data-v-91fa59aa"]]),_hoisted_1={key:0,class:"loading-wrapper"},_hoisted_2={class:"form-wrapper"},_hoisted_3=["id"],_hoisted_4={key:5,class:"span-error"},_hoisted_5={key:0,class:"buttons"},_sfc_main=defineComponent({__name:"FormRunner",props:{formRunnerData:{},formState:{},isPreview:{type:Boolean},disabled:{}},emits:["action-clicked","auto-fill-clicked","update-widget-value","update-widget-errors"],setup(r,{emit:e}){const t=r,a=ref(null),i=ref({}),l=()=>{!a.value||(a.value.scrollTop=0)};return watch(()=>t.formState,(s,d)=>{s.type==="page"&&(d==null?void 0:d.type)==="page"&&s.refreshKey!==d.refreshKey&&l()}),(s,d)=>(openBlock(),createBlock(WidgetsFrame,{class:"runner","main-color":s.formRunnerData.mainColor,theme:s.formRunnerData.theme,"font-family":s.formRunnerData.fontFamily},{default:withCtx(()=>{var h,p;return[s.disabled?(openBlock(),createBlock(unref(Card),{key:0,class:"unsaved-changes"},{default:withCtx(()=>[createVNode(unref(Typography),{style:{"font-size":"18px","font-weight":"500"}},{default:withCtx(()=>[createTextVNode(toDisplayString(s.disabled.title),1)]),_:1}),createVNode(unref(Typography),{style:{"margin-bottom":"6px"}},{default:withCtx(()=>[createTextVNode(toDisplayString(s.disabled.message),1)]),_:1})]),_:1})):createCommentVNode("",!0),s.isPreview&&((h=s.formState)==null?void 0:h.type)==="page"&&s.formState.showAutofill?(openBlock(),createBlock(FormAutoFill,{key:1,class:"auto-fill-btn",form:s.formRunnerData,style:{"z-index":1},onClick:d[0]||(d[0]=o=>e("auto-fill-clicked"))},null,8,["form"])):createCommentVNode("",!0),((p=s.formState)==null?void 0:p.type)==="page"?(openBlock(),createBlock(Steps,{key:2,class:"steps","steps-info":s.formState.steps},null,8,["steps-info"])):createCommentVNode("",!0),createBaseVNode("main",{ref_key:"scrollableContainer",ref:a,class:normalizeClass([{disabled:s.disabled}]),style:{padding:"50px 0px","box-sizing":"border-box"}},[!s.formState||s.formState.type=="loading"?(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(LoadingIndicator)])):s.formState.type==="authenticating"?(openBlock(),createBlock(_sfc_main$5,{key:1,class:"form-auth"})):(openBlock(),createElementBlock("div",{key:2,class:normalizeClass(["form",{"full-width":s.formState.type==="page"&&s.formState.fullWidth}])},[createBaseVNode("div",_hoisted_2,[s.formState.type==="waiting"?(openBlock(),createBlock(StartWidget,{key:0,form:s.formRunnerData},null,8,["form"])):s.formState.type==="default-end"?(openBlock(),createBlock(EndWidget,{key:1,"end-message":s.formRunnerData.endMessage},null,8,["end-message"])):s.formState.type==="error"?(openBlock(),createBlock(ErrorWidget,{key:2,"error-message":s.formRunnerData.errorMessage,"execution-id":s.formState.executionId},null,8,["error-message","execution-id"])):s.formState.type==="lock-failed"?(openBlock(),createBlock(_sfc_main$4,{key:3,status:s.formState.status},null,8,["status"])):(openBlock(!0),createElementBlock(Fragment,{key:4},renderList(s.formState.widgets,(o,c)=>{var _;return openBlock(),createElementBlock("div",{id:o.type+c,key:(_=o.key)!=null?_:o.type+c,class:"widget"},[(openBlock(),createBlock(resolveDynamicComponent(o.type),{ref_for:!0,ref:u=>"key"in o?i.value[o.key]=u:null,value:unref(isInputWidget)(o)&&o.value,errors:o.errors,"user-props":o,"refresh-key":s.formState.refreshKey,"onUpdate:value":u=>e("update-widget-value",o.key,u),"onUpdate:errors":u=>e("update-widget-errors",o.key,u)},null,40,["value","errors","user-props","refresh-key","onUpdate:value","onUpdate:errors"])),(openBlock(!0),createElementBlock(Fragment,null,renderList(o.errors,u=>(openBlock(),createElementBlock("span",{key:u,class:"span-error"},toDisplayString(u),1))),128))],8,_hoisted_3)}),128)),s.formState.type==="page"&&s.formState.error&&s.formState.error.status===!1?(openBlock(),createElementBlock("span",_hoisted_4,toDisplayString(s.formState.error.message||unref(i18nProvider).translateIfFound("i18n_generic_validation_error")),1)):createCommentVNode("",!0)]),"actions"in s.formState?(openBlock(),createElementBlock("div",_hoisted_5,[createVNode(unref(StyleProvider),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.formState.actions,o=>(openBlock(),createBlock(unref(Button),{key:o.name,class:normalizeClass(["next-button",o.disabled?"disabled":""]),loading:o.loading,disabled:o.disabled||o.loading,onClick:c=>e("action-clicked",o),onKeydown:withKeys(c=>e("action-clicked",o),["enter"])},{default:withCtx(()=>[createTextVNode(toDisplayString(o.label),1)]),_:2},1032,["loading","disabled","class","onClick","onKeydown"]))),128))]),_:1})])):createCommentVNode("",!0)],2))],2),createVNode(Watermark,{class:"watermark",runtime:s.formRunnerData},null,8,["runtime"])]}),_:1},8,["main-color","theme","font-family"]))}}),FormRunner_vue_vue_type_style_index_0_scoped_e5cb134a_lang="",FormRunner=_export_sfc(_sfc_main,[["__scopeId","data-v-e5cb134a"]]);export{FORM_RUNNING_STATES as F,FORM_END_STATES as a,FormRunner as b,FormRunnerController as c,FormConnectionManager as d,redirect as r};
//# sourceMappingURL=FormRunner.6e49974c.js.map
