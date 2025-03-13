var A=Object.defineProperty;var V=(n,e,t)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var o=(n,e,t)=>(V(n,typeof e!="symbol"?e+"":e,t),t);import{i as isUrl}from"./url.80ca4b9a.js";import{d as defineComponent,D as inject,f as computed,o as openBlock,Y as createElementBlock,$ as renderSlot,S as createCommentVNode,e8 as mergeProps,a as createBaseVNode,ej as lodash,eO as i18nProvider,c as createBlock,ec as resolveDynamicComponent,a0 as _export_sfc,w as withCtx,u as unref,aG as createTextVNode,e as ref,g as watch,b as createVNode,ed as normalizeClass,eP as StartWidget,eQ as EndWidget,eR as ErrorWidget,aS as Fragment,eb as renderList,e9 as toDisplayString,eS as StyleProvider,eT as withKeys,bT as Button}from"./index.9ced0c12.js";import{b as useUserStore}from"./workspaceStore.113b2833.js";import{_ as _sfc_main$3}from"./Login.vue_vue_type_script_setup_true_lang.6cd32d0e.js";import{L as LoadingIndicator}from"./OTPInput.64faae1e.js";import{S as Steps}from"./Steps.c73db4e5.js";import{W as Watermark}from"./Watermark.8c8748c2.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="eaf33548-f22f-42b7-af8b-82444cffc747",n._sentryDebugIdIdentifier="sentry-dbid-eaf33548-f22f-42b7-af8b-82444cffc747")}catch{}})();const Z=["width","height","fill","transform"],g={key:0},m=createBaseVNode("path",{d:"M112,36a12,12,0,0,0-12,12V60H24A20,20,0,0,0,4,80v96a20,20,0,0,0,20,20h76v12a12,12,0,0,0,24,0V48A12,12,0,0,0,112,36ZM28,172V84h72v88ZM252,80v96a20,20,0,0,1-20,20H152a12,12,0,0,1,0-24h76V84H152a12,12,0,0,1,0-24h80A20,20,0,0,1,252,80ZM88,112a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V124a12,12,0,0,1,0-24H76A12,12,0,0,1,88,112Z"},null,-1),y=[m],f={key:1},w=createBaseVNode("path",{d:"M240,80v96a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H232A8,8,0,0,1,240,80Z",opacity:"0.2"},null,-1),k=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),x=[w,k],S={key:2},z=createBaseVNode("path",{d:"M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z"},null,-1),C=[z],B={key:3},b=createBaseVNode("path",{d:"M112,42a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80v96a14,14,0,0,0,14,14h82v18a6,6,0,0,0,12,0V48A6,6,0,0,0,112,42ZM24,178a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h82V178ZM246,80v96a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h88a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H144a6,6,0,0,1,0-12h88A14,14,0,0,1,246,80ZM86,112a6,6,0,0,1-6,6H70v26a6,6,0,0,1-12,0V118H48a6,6,0,0,1,0-12H80A6,6,0,0,1,86,112Z"},null,-1),N=[b],E={key:4},P=createBaseVNode("path",{d:"M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z"},null,-1),W=[P],$={key:5},j=createBaseVNode("path",{d:"M112,44a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80v96a12,12,0,0,0,12,12h84v20a4,4,0,0,0,8,0V48A4,4,0,0,0,112,44ZM24,180a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h84V180ZM244,80v96a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h88a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H144a4,4,0,0,1,0-8h88A12,12,0,0,1,244,80ZM84,112a4,4,0,0,1-4,4H68v28a4,4,0,0,1-8,0V116H48a4,4,0,0,1,0-8H80A4,4,0,0,1,84,112Z"},null,-1),T=[j],q={name:"PhTextbox"},G=defineComponent({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(n){const e=n,t=inject("weight","regular"),a=inject("size","1em"),s=inject("color","currentColor"),l=inject("mirrored",!1),c=computed(()=>{var h;return(h=e.weight)!=null?h:t}),r=computed(()=>{var h;return(h=e.size)!=null?h:a}),d=computed(()=>{var h;return(h=e.color)!=null?h:s}),u=computed(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(h,v)=>(openBlock(),createElementBlock("svg",mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:r.value,height:r.value,fill:d.value,transform:u.value},h.$attrs),[renderSlot(h.$slots,"default"),c.value==="bold"?(openBlock(),createElementBlock("g",g,y)):c.value==="duotone"?(openBlock(),createElementBlock("g",f,x)):c.value==="fill"?(openBlock(),createElementBlock("g",S,C)):c.value==="light"?(openBlock(),createElementBlock("g",B,N)):c.value==="regular"?(openBlock(),createElementBlock("g",E,W)):c.value==="thin"?(openBlock(),createElementBlock("g",$,T)):createCommentVNode("",!0)],16,Z))}});function normalizePath(n){return n.startsWith("/")?n.slice(1):n}function redirectAction(n,e,t={}){if(isUrl(e)){const a=new URL(e),s=new URLSearchParams(t),l=new URLSearchParams(a.search),c=new URLSearchParams([...l,...s]);return a.search=c.toString(),{action:"REPLACE_LOCAL_HREF",newHref:a.toString()}}else{const a=e.replace(/\/$/,"");if(n==="player")return{action:"GOTO_FORM_PLAYER",path:normalizePath(a),queryParams:t};if(n==="editor")return{action:"GOTO_FORM_EDITOR",path:normalizePath(a),queryParams:t};if(n==="preview")return{action:"GOTO_FORM_PLAYER",path:normalizePath(a),queryParams:t};throw new Error(`Invalid routing ${n}`)}}async function redirect(n,e,t,a={}){const s=redirectAction(n,t,a);switch(s.action){case"REPLACE_LOCAL_HREF":window.location.href=s.newHref;break;case"GOTO_FORM_EDITOR":await e.push({name:"formEditor",params:{formPath:s.path},query:s.queryParams});break;case"GOTO_FORM_PLAYER":await e.push({name:n==="preview"?"formPreview":"formPlayer",params:{formPath:s.path},query:s.queryParams});break;default:throw new Error("Invalid routing")}}const WS_CLOSING_STATES=[WebSocket.CLOSING,WebSocket.CLOSED],WS_CUSTOM_CLOSING_REASONS={FRONTEND_FORM_RESTART:4e3};class FormConnectionManager{constructor(e,t,a,s){o(this,"ws",null);o(this,"heartbeatInterval");o(this,"onOpen",null);o(this,"onMessage",null);o(this,"onClose",null);this.formId=e,this.environment=t,this.userQueryParams=a,this._detached=s}set detached(e){this._detached=e}get url(){const e=location.protocol==="https:"?"wss:":"ws:",t=this.environment=="editor"?"_editor/api/forms/socket":"_socket",a=new URLSearchParams({id:this.formId,detached:this._detached?"true":"false",...this.userQueryParams});return`${e}//${location.host}/${t}?${a}`}handleOpen(e){if(!this.onOpen)throw new Error("onOpen is not set");this.onOpen(),e()}handleClose(e){(e.code===1006||!e.wasClean)&&clearInterval(this.heartbeatInterval),this.onClose&&this.onClose(e)}handleMessage(e){if(!this.onMessage)throw new Error("onMessage is not set");const t=JSON.parse(e.data);this.onMessage(t)}sendHeartbeat(){!this.ws||this.ws.readyState!==this.ws.OPEN||this.send({type:"execution:heartbeat"})}async send(e){if(!this.ws)throw new Error(`[FormRunnerController] failed sending msg ${e.type}: websocket is not connected`);WS_CLOSING_STATES.includes(this.ws.readyState)&&await this.newConnection(),this.ws.send(JSON.stringify(e))}async close(e){this.ws&&this.ws.close(WS_CUSTOM_CLOSING_REASONS[e],e)}async newConnection(e=3,t){if(e!=0)return new Promise(a=>{clearInterval(this.heartbeatInterval),this.ws=new WebSocket(this.url,t),this.ws.onopen=()=>this.handleOpen(a),this.ws.onclose=s=>this.handleClose(s),this.ws.onmessage=s=>this.handleMessage(s),this.heartbeatInterval=setInterval(()=>this.sendHeartbeat(),2e3)}).catch(()=>{this.newConnection(e-1)})}isEditorConnection(){return this.environment==="editor"}}function isInputWidget(n){return"key"in n&&"value"in n&&"errors"in n}const executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(n){throw console.error(`[Error: execute_js]: ${n.message}, context: ${$context}`),n}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(n){return{type:"execute-js:response",value:await executeCode(n.context,n.code)}}const isSerializable=n=>{try{return JSON.stringify(n),!0}catch{return!1}},FORM_END_STATES=["default-end","page-end","error"],FORM_RUNNING_STATES=["authenticating","page","loading"];class FormRunnerController{constructor({formRunnerData:e,logService:t,connectionManager:a,onFormStart:s,onFormEnd:l,onRedirect:c,onStateUpdate:r,onStackTraceUpdate:d}){o(this,"connectionManager");o(this,"logService");o(this,"formRunnerData");o(this,"formState");o(this,"touchedWidgets",{});o(this,"messageSeq",0);o(this,"executionId",null);o(this,"onFormStart");o(this,"onFormEnd");o(this,"onRedirect");o(this,"onStackTraceUpdate");o(this,"onStateUpdate");o(this,"userStore");o(this,"responseHistory",[]);o(this,"lastResponseHistory",[]);o(this,"handlers",{"execution:started":[e=>this.handleExecutionStartedMessage(e)],"execution:ended":[e=>this.handleExecutionEndedMessage(e)],"form:render":[e=>this.handleRenderMessage(e)],"form:mount-page":[e=>this.handleMountPageMessage(e)],"form:update-page":[e=>this.handleUpdatePageMessage(e)],"auth:require-info":[e=>this.handleAuthRequireInfoMessage(e)],"auth:invalid-jwt":[e=>this.handleAuthInvalidJWTMessage(e)],"auth:valid-jwt":[e=>this.handleAuthValidTokenMessage(e)],"redirect:request":[e=>this.handleRedirectRequestMessage(e)],"execute-js:request":[e=>this.handleExecuteJSRequestMessage(e)]});o(this,"start",async()=>{this.setFormState({type:"loading"}),await this.connectionManager.newConnection(3,this.userStore.wsAuthHeaders)});o(this,"resetForm",async()=>{var e;(e=this.logService)==null||e.log({type:"stdout",log:"[Form reloaded]"}),await this.connectionManager.close("FRONTEND_FORM_RESTART"),this.resetState()});o(this,"reconnect",async()=>{this.resetState(),await this.start()});o(this,"resetState",()=>{this.messageSeq=0,this.setFormState({type:"waiting",actions:[this.getStartAction()]})});o(this,"startPageLoading",()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.formState.actions.some(e=>e.loading)||this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!0}))})});o(this,"debouncedFinishPageLoading",lodash.exports.debounce(()=>{if(this.formState.type!=="page")throw new Error("Can't start loading while not in render-page state");this.setFormState({...this.formState,actions:this.formState.actions.map(e=>({...e,loading:!1}))})},500));o(this,"getStartAction",()=>this.actionFromMessage(this.formRunnerData.startButtonText||i18nProvider.translateIfFound("i18n_start_action",this.formRunnerData.language)));o(this,"getEndStateActions",()=>{const e=this.formRunnerData.restartButtonText||i18nProvider.translateIfFound("i18n_restart_action",this.formRunnerData.language);return this.formRunnerData.allowRestart?[this.actionFromMessage(e)]:[]});o(this,"getState",()=>({formState:this.formState}));o(this,"handleConnectionOpen",()=>{this.connectionManager.send({type:"execution:start"})});o(this,"widgetFromMessage",(e,t)=>{if(isInputWidget(e)){const a=e.errors.map(s=>i18nProvider.translateIfFound(s,this.formRunnerData.language,e));return{...e,input:!0,_pythonErrors:a,errors:a}}return{...e,input:!1,_pythonErrors:[],errors:[],key:e.type+t}});o(this,"actionFromMessage",e=>({name:e,label:i18nProvider.translateIfFound(e,this.formRunnerData.language,this.formRunnerData),disabled:!1,loading:!1}));o(this,"getAutofillVisibilty",e=>this.lastResponseHistory.length===0?!1:this.lastResponseHistory[0].some(t=>e.find(a=>a.key===t.key&&a.type===t.type&&"value"in a)));o(this,"handleAutofillClick",()=>{!this.lastResponseHistory[0]||this.formState.type==="page"&&(this.lastResponseHistory[0].forEach(t=>{!("widgets"in this.formState&&this.formState.widgets.find(s=>s.key===t.key&&s.type===t.type))||"value"in t&&this.updateWidgetValue(t.key,t.value)}),this.setFormState({...this.formState,showAutofill:!1}))});o(this,"handleAuthComplete",e=>{e&&this.formState.type==="authenticating"&&this.sendAuthSavedJWT(e)});o(this,"handleMessageReceived",e=>{const t=this.handlers[e.type];if(!t)throw new Error(`No handler for message type ${e.type}`);if(t.forEach(a=>a(e)),e.debug&&this.onStackTraceUpdate){const a=e.type==="execution:ended";this.onStackTraceUpdate(e.debug.stack,a)}});o(this,"handleActionClick",e=>{if(this.formState.type==="waiting")return this.start();if(this.formState.type==="page"){const t=e.name==="i18n_back_action";return this.hasErrors()&&!t?void 0:(this.setFormState({...this.formState,actions:this.formState.actions.map(a=>a.label===e.label?{...a,loading:!0}:a)}),this.lastResponseHistory.shift(),this.responseHistory.push(this.formState.widgets),this.sendFormNavigation(this.getWidgetValues(),e))}if(this.formState.type==="default-end"||this.formState.type==="page-end")return this.setFormState({...this.formState,actions:[{...this.getStartAction(),loading:!0}]}),this.start()});o(this,"updateWidgetValue",(e,t)=>{if(this.formState.type!=="page")return;const a=this.formState.widgets.find(l=>"key"in l&&l.key===e);if(!a||!isInputWidget(a))return;this.touchedWidgets[e]=!0;const s=this.formState.widgets.map(l=>l.key===e?{...l,value:t}:l);this.setFormState({...this.formState,widgets:s}),this.sendInput(this.getWidgetValues(),this.getSecrets())});o(this,"updateWidgetFrontendErrors",(e,t)=>{if(this.formState.type!=="page"||!this.formState.widgets.find(l=>l.key===e))return;const s=this.formState.widgets.map(l=>l.key===e?{...l,errors:l._pythonErrors.concat(t.map(c=>i18nProvider.translateIfFound(c,this.formRunnerData.language,l)))}:l);this.setFormState({...this.formState,widgets:s})});if(this.formRunnerData=e,this.logService=t,this.connectionManager=a,this.onFormStart=s,this.onFormEnd=l,this.onRedirect=c,this.onStateUpdate=r,this.onStackTraceUpdate=d,this.userStore=useUserStore(),this.connectionManager.onOpen=()=>this.handleConnectionOpen(),this.connectionManager.onMessage=u=>this.handleMessageReceived(u),this.connectionManager.onClose=u=>this.handleConnectionClose(u),this.formRunnerData.autoStart&&!this.connectionManager.isEditorConnection()){this.formState={type:"loading"},this.start();return}this.formState={type:"waiting",actions:[this.getStartAction()]}}set detached(e){this.connectionManager.detached=e}fullWidthFromMessage(e){return e.some(t=>"fullWidth"in t&&t.fullWidth)}async handleExecutionStartedMessage(e){this.executionId=e.executionId,this.onFormStart()}handleRenderMessage(e){if(e.seq!==this.messageSeq)return;const t=e.widgets.map(this.widgetFromMessage);if(e.endPage){this.setFormState({...this.formState,type:"page-end",actions:this.getEndStateActions(),widgets:t,fullWidth:this.fullWidthFromMessage(e.widgets),stepsInfo:e.stepsInfo,refreshKey:e.stepsInfo.current.toString(),showAutofill:this.getAutofillVisibilty(t)});return}let a=["i18n_back_action","i18n_next_action"];e.actions&&(a=e.actions),this.setFormState({type:"page",widgets:t,actions:a.map(this.actionFromMessage),fullWidth:this.fullWidthFromMessage(e.widgets),stepsInfo:e.stepsInfo,refreshKey:e.stepsInfo.current.toString(),showAutofill:this.getAutofillVisibilty(t)})}async handleExecuteJSRequestMessage(e){const t=await executeJs(e);this.connectionManager.send(t)}async handleAuthRequireInfoMessage(e){const{jwt:t,isJWTValid:a}=this.userStore;if(t&&a()&&!e.refresh){this.sendAuthSavedJWT(t);return}this.setFormState({type:"authenticating"})}async handleAuthInvalidJWTMessage(e){this.setFormState({type:"authenticating"})}async handleAuthValidTokenMessage(e){}async handleRedirectRequestMessage(e){this.onRedirect(e.url,e.queryParams)}handleMountPageMessage(e){var a,s;const t=e.widgets.map(this.widgetFromMessage);if(e.endProgram){this.setFormState({type:"page-end",actions:this.getEndStateActions(),widgets:t,fullWidth:this.fullWidthFromMessage(e.widgets),stepsInfo:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t),legacy:!0});return}this.setFormState({type:"page",widgets:t,actions:(s=(a=e.actions)==null?void 0:a.map(this.actionFromMessage))!=null?s:[],fullWidth:this.fullWidthFromMessage(e.widgets),stepsInfo:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t),legacy:!0})}async handleUpdatePageMessage(e){if(e.seq===this.messageSeq){if(this.formState.type!=="page")throw new Error("Received form:update-page message while not in render-page state");this.setFormState({...this.formState,error:{message:e.validation.message,status:e.validation.status},widgets:e.widgets.map(this.widgetFromMessage),actions:this.formState.actions.map(t=>({...t,disabled:this.shouldDisableAction(t,e)}))}),this.debouncedFinishPageLoading()}}shouldDisableAction(e,t){if(e.name==="i18n_back_action"||this.formState.type!=="page")return!1;const s=t.widgets.map(this.widgetFromMessage).some(c=>c.errors.length>0),l=t.validation.status===!1||Boolean(t.validation.message);return s||l}async handleExecutionEndedMessage(e){var t;this.lastResponseHistory=[...this.responseHistory],this.responseHistory=[],!FORM_END_STATES.includes(this.formState.type)&&(e.exitStatus==="SUCCESS"&&(this.setFormState({type:"default-end",actions:this.getEndStateActions()}),(t=this.logService)==null||t.log({type:"stdout",log:"[Form run finished]"})),e.exitStatus==="EXCEPTION"&&this.setFormState({type:"error",message:e.exception,executionId:this.executionId}),this.onFormEnd())}sendFormNavigation(e,t,a){this.connectionManager.send({type:"form:navigation",payload:e,secrets:a,action:t==null?void 0:t.name,seq:++this.messageSeq})}sendInput(e,t){this.startPageLoading(),this.connectionManager.send({type:"form:input",payload:e,secrets:t,seq:++this.messageSeq})}sendAuthSavedJWT(e){this.connectionManager.send({type:"auth:saved-jwt",jwt:e})}handleCloseAttempt(){return FORM_END_STATES.includes(this.formState.type)||this.formState.type==="waiting"?!1:(this.connectionManager.send({type:"debug:close-attempt"}),!0)}handleConnectionClose(e){e.code!==WS_CUSTOM_CLOSING_REASONS.FRONTEND_FORM_RESTART&&FORM_RUNNING_STATES.includes(this.formState.type)&&this.reconnect()}setFormState(e){this.formState=Object.freeze(e),this.onStateUpdate(e)}getSecrets(){return this.formState.type!=="page"?[]:this.formState.widgets.filter(e=>"secret"in e).reduce((e,t)=>"key"in t&&"secret"in t?[...e,{key:t.key,secret:t.secret}]:e,[])}setWidgetValidationFunction(e,t){if(this.formState.type!=="page")return;const a=this.formState.widgets.find(s=>"key"in s&&s.key===e);!a||!isInputWidget(a)||(a.validationFunction=t)}hasErrors(){var e;return this.formState.type!=="page"?!1:((e=this.formState.error)==null?void 0:e.status)===!1||this.formState.widgets.some(t=>t.errors.length>0)}getWidgetValue(e){if(this.formState.type!=="page")return null;const t=this.formState.widgets.find(a=>"key"in a&&a.key===e);if(!t||!isInputWidget(t))return null}getWidgetValues(){return this.formState.type!=="page"?{}:this.formState.widgets.reduce((e,t)=>("value"in t&&(this.touchedWidgets[t.key]||this.formState.legacy)&&(e[t.key]=t.value),e),{})}}const _hoisted_1$1={class:"outline-button"},_sfc_main$2=defineComponent({__name:"OutlineButton",props:{icon:{},noShadow:{type:Boolean},status:{}},setup(n){return(e,t)=>(openBlock(),createElementBlock("button",_hoisted_1$1,[e.icon?(openBlock(),createBlock(resolveDynamicComponent(e.icon),{key:0,class:"icon",color:"#fff"})):createCommentVNode("",!0),renderSlot(e.$slots,"default",{},void 0,!0)]))}}),OutlineButton_vue_vue_type_style_index_0_scoped_2d3b9e41_lang="",OutlineButton=_export_sfc(_sfc_main$2,[["__scopeId","data-v-2d3b9e41"]]),_sfc_main$1=defineComponent({__name:"FormAutoFill",emits:["click"],setup(n,{emit:e}){return(t,a)=>(openBlock(),createBlock(OutlineButton,{icon:unref(G),class:"form-auto-fill-btn",onClick:a[0]||(a[0]=s=>e("click"))},{default:withCtx(()=>[createTextVNode(" Repeat last answer ")]),_:1},8,["icon"]))}}),FormAutoFill_vue_vue_type_style_index_0_scoped_39354e61_lang="",FormAutoFill=_export_sfc(_sfc_main$1,[["__scopeId","data-v-39354e61"]]),_hoisted_1={class:"center"},_hoisted_2={key:0,class:"loading-wrapper"},_hoisted_3={class:"form-wrapper"},_hoisted_4=["id"],_hoisted_5={key:4,class:"span-error"},_hoisted_6={key:0,class:"buttons"},_sfc_main=defineComponent({__name:"FormRunner",props:{formRunnerData:{},formState:{},isPreview:{type:Boolean},disabled:{type:Boolean}},emits:["action-clicked","auto-fill-clicked","update-widget-value","update-widget-errors","auth-complete"],setup(n,{emit:e}){const t=n,a=ref(null),s=ref({}),l=()=>{!a.value||(a.value.scrollTop=0)};watch(()=>t.formState,(r,d)=>{r.type==="page"&&(d==null?void 0:d.type)==="page"&&r.refreshKey!==d.refreshKey&&l()});const c=()=>{var r,d;return((r=t.formState)==null?void 0:r.type)==="page"?t.formState.fullWidth:((d=t.formState)==null?void 0:d.type)==="page-end"?t.formState.fullWidth&&t.formState.widgets.length>0:!1};return(r,d)=>{var u,h,v,M,R;return openBlock(),createElementBlock("div",_hoisted_1,[r.isPreview&&((u=r.formState)==null?void 0:u.type)==="page"&&r.formState.showAutofill?(openBlock(),createBlock(FormAutoFill,{key:0,class:"auto-fill-btn",form:r.formRunnerData,style:{"z-index":1},onClick:d[0]||(d[0]=i=>e("auto-fill-clicked"))},null,8,["form"])):createCommentVNode("",!0),((h=r.formState)==null?void 0:h.type)==="page"&&!((v=r.formState.stepsInfo)!=null&&v.disabled)?(openBlock(),createBlock(Steps,{key:1,"steps-info":r.formState.stepsInfo},null,8,["steps-info"])):createCommentVNode("",!0),createBaseVNode("main",{ref_key:"scrollableContainer",ref:a,class:normalizeClass([{disabled:r.disabled}]),style:{padding:"50px 0px","box-sizing":"border-box"}},[!r.formState||r.formState.type=="loading"?(openBlock(),createElementBlock("div",_hoisted_2,[createVNode(LoadingIndicator)])):r.formState.type==="authenticating"?(openBlock(),createBlock(_sfc_main$3,{key:1,locale:r.formRunnerData.language,"logo-url":(M=r.formRunnerData.logoUrl)!=null?M:void 0,"brand-name":(R=r.formRunnerData.brandName)!=null?R:void 0,onDone:d[1]||(d[1]=i=>e("auth-complete",i))},null,8,["locale","logo-url","brand-name"])):(openBlock(),createElementBlock("div",{key:2,class:normalizeClass(["form",{"full-width":c()}])},[createBaseVNode("div",_hoisted_3,[r.formState.type==="waiting"?(openBlock(),createBlock(StartWidget,{key:0,form:r.formRunnerData},null,8,["form"])):r.formState.type==="default-end"?(openBlock(),createBlock(EndWidget,{key:1,"end-message":r.formRunnerData.endMessage,locale:r.formRunnerData.language},null,8,["end-message","locale"])):r.formState.type==="error"?(openBlock(),createBlock(ErrorWidget,{key:2,"error-message":r.formRunnerData.errorMessage,"execution-id":r.formState.executionId,locale:r.formRunnerData.language},null,8,["error-message","execution-id","locale"])):(openBlock(!0),createElementBlock(Fragment,{key:3},renderList(r.formState.widgets,(i,_)=>{var F;return openBlock(),createElementBlock("div",{id:i.type+_,key:(F=i.key)!=null?F:i.type+_,class:"widget"},[(openBlock(),createBlock(resolveDynamicComponent(i.type),{ref_for:!0,ref:p=>"key"in i?s.value[i.key]=p:null,key:i.key+"_"+r.formState.refreshKey,value:unref(isInputWidget)(i)&&i.value,errors:i.errors,"user-props":i,legacy:r.formState.legacy,locale:r.formRunnerData.language,"onUpdate:value":p=>e("update-widget-value",i.key,p),"onUpdate:errors":p=>e("update-widget-errors",i.key,p)},null,40,["value","errors","user-props","legacy","locale","onUpdate:value","onUpdate:errors"])),(openBlock(!0),createElementBlock(Fragment,null,renderList(i.errors,p=>(openBlock(),createElementBlock("span",{key:p,class:"span-error"},toDisplayString(p),1))),128))],8,_hoisted_4)}),128)),r.formState.type==="page"&&r.formState.error&&r.formState.error.status===!1?(openBlock(),createElementBlock("span",_hoisted_5,toDisplayString(r.formState.error.message||unref(i18nProvider).translateIfFound("i18n_generic_validation_error",r.formRunnerData.language)),1)):createCommentVNode("",!0)]),"actions"in r.formState?(openBlock(),createElementBlock("div",_hoisted_6,[createVNode(unref(StyleProvider),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.formState.actions,i=>(openBlock(),createBlock(unref(Button),{key:i.name,class:normalizeClass(["next-button",{"next-button__disabled":i.disabled||i.loading}]),loading:i.loading,disabled:i.disabled||i.loading,onClick:_=>e("action-clicked",i),onKeydown:withKeys(_=>e("action-clicked",i),["enter"])},{default:withCtx(()=>[createTextVNode(toDisplayString(i.label),1)]),_:2},1032,["class","loading","disabled","onClick","onKeydown"]))),128))]),_:1})])):createCommentVNode("",!0)],2))],2),createVNode(Watermark,{"page-id":r.formRunnerData.id,locale:r.formRunnerData.language},null,8,["page-id","locale"])])}}}),FormRunner_vue_vue_type_style_index_0_scoped_db42ab3d_lang="",FormRunner=_export_sfc(_sfc_main,[["__scopeId","data-v-db42ab3d"]]);export{FORM_RUNNING_STATES as F,FormRunner as a,FORM_END_STATES as b,FormRunnerController as c,FormConnectionManager as d,redirect as r};
//# sourceMappingURL=FormRunner.1dea5bb8.js.map
