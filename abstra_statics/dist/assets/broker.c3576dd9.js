var le=Object.defineProperty;var ue=(r,e,n)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var l=(r,e,n)=>(ue(r,typeof e!="symbol"?e+"":e,n),n);import{d as I,b as f,c as w,x as E,z as V,N as D,D as P,q as C,r as A,o as re,Z as T,$ as ce,a as he,t as y,B as de,w as oe,S as fe,p as H,a0 as me,K as $,R as pe,v as Y,a1 as ve,a2 as ge,U as we,G as ee,e as j,F as te,L as ne,a3 as ye,a4 as be}from"./registerWidgets.81004098.js";import{p as O}from"./passwordlessManager.d8088db9.js";import{l as ke,m as _e}from"./icons.ea1ef9e9.js";import{P as Ee}from"./Passwordless.1696a947.js";import{e as Pe,W as Ie,R as xe}from"./WidgetsFrame.47768dce.js";import{l as N}from"./log.1679837e.js";import{L as Le}from"./CircularLoading.cef8a22f.js";const Se={key:0,class:"hint"},De={class:"icon",viewBox:"0 0 24 24",style:{width:"20px",height:"20px"}},Ae=["d"],Ce={class:"hint-content"},We=I({__name:"WidgetHint",props:{hint:null},setup(r){return(e,n)=>r.hint?(f(),w("div",Se,[(f(),w("svg",De,[E("path",{d:V(ke)},null,8,Ae)])),E("div",Ce,D(r.hint),1)])):P("",!0)}});const Be=C(We,[["__scopeId","data-v-419a518f"]]),Fe=I({__name:"ActionButton",props:{action:null},emits:["next"],setup(r,{emit:e}){const n=r,t=A(null);re(()=>{t.value&&n.action.setElement(t.value),T.addAction(n.action)});const s=()=>e("next");return(d,i)=>(f(),w("button",{ref_key:"element",ref:t,class:"next-button",onClick:i[0]||(i[0]=h=>s()),onKeydown:i[1]||(i[1]=ce(h=>s(),["enter"]))},D(r.action.name),545))}}),Re={class:"outline-button"},$e=I({__name:"OutlineButton",props:{iconPath:null,noShadow:{type:Boolean},status:null},setup(r){return(e,n)=>{const t=he("icon");return f(),w("button",Re,[r.iconPath?(f(),y(t,{key:0,path:r.iconPath,fill:"#fff",class:"icon"},null,8,["path"])):P("",!0),de(e.$slots,"default",{},void 0,!0)])}}});const je=C($e,[["__scopeId","data-v-d750be83"]]),Oe=I({__name:"FormAutoFill",props:{broker:null,form:null},setup(r){const e=r,n=window.__runs||(window.__runs={previous:[],current:[]});e.broker.on("start",()=>{n.previous=n.current,n.current=[]});const t=A(null);function s(){for(const h in n.current){const c=n.previous[h],a=n.current[h];if(!c||c.type!==a.type||c.type=="form"&&!H.exports.isEqual(c.widgets,a.widgets)||c.type=="form-response"&&!H.exports.isEqual(c.payload,a.payload))return null}const i=n.previous[n.current.length];if((i==null?void 0:i.type)!=="form-response")return null;t.value=i}function d(){const i=t.value;i&&e.broker.send(i)}return e.broker.on("form",i=>{n.current.push(i),s()}),e.broker.on("form-response",i=>{n.current.push(i),t.value=null}),(i,h)=>t.value?(f(),y(je,{key:0,"icon-path":V(_e),class:"form-auto-fill-btn",onClick:d},{default:oe(()=>[fe(" Repeat last answer ")]),_:1},8,["icon-path"])):P("",!0)}});const Ne=C(Oe,[["__scopeId","data-v-9590d96b"]]);class k{constructor(e,n){l(this,"element",null);this.name=e,this.isDefault=n}static fromDto(e){return typeof e=="string"?new k(e,!1):new k(e.name,e.is_default)}setElement(e){e instanceof HTMLElement&&(this.element=e)}get isFocused(){return this.element===document.activeElement}focusOnButton(){var e;(e=this.element)==null||e.focus()}addKeydownListener(e){var n;(n=this.element)==null||n.addEventListener("keydown",e)}}class M{constructor(e){this.form=e}static from(e){return new M(e)}get startAction(){var e;return[k.fromDto((e=this.form.startButtonText)!=null?e:"Start")]}get restartAction(){var n;const e=(n=this.form.restartButtonText)!=null?n:"Restart";return this.form.allowRestart?[k.fromDto(e)]:[]}fromPageActionsDto(e){return e.filter(n=>!!n).map(n=>k.fromDto(n))}}async function Ue(r){window.should_ask_before_leave=!1,window.location.href=r.url}const Te={redirect:Ue,"execute-js":Pe};class q{constructor(e,n){l(this,"loading",!1);l(this,"endedByPage",!1);l(this,"reactivePollInterval",null);l(this,"programEnded",!1);l(this,"widgetError",()=>{this.newPageDefinition({widgets:[{type:"error"}],actions:[],fullWidth:!1,hasError:!1,steps:null})});l(this,"widgetEnd",()=>{this.endedByPage||this.newPageDefinition({widgets:[{type:"end"}],actions:this.pageActionFactory.restartAction,fullWidth:!1,hasError:!1,steps:null})});l(this,"sendUser",e=>{this.broker.send({type:"auth:saved-jwt",jwt:e.jwt}),this.broker.send({type:"metadata",payload:{authenticated_user:e.claims.email}})});l(this,"sendBrowserTryDisconnect",()=>{this.broker.send({type:"browser:try-disconnect"})});l(this,"newPageDefinitionListener",()=>{});l(this,"updatePageDefinitionListener",()=>{});l(this,"onReactivePollListener",()=>{});l(this,"onErrorListener",()=>{});l(this,"onExitListener",()=>{});l(this,"onStartAuthListener");l(this,"onEndAuthListener");l(this,"onBadAuthListener");this.broker=e,this.pageActionFactory=n}static create(e,n){const t=new q(e,n);return t.broker.onClose(()=>{if(t.programEnded)return;const s="Connection with service closed before program ended";N.log({log:s,type:"stderr"}),t.widgetError(),t.error(s)}),t.broker.on("form",({widgets:s,actions:d,buttonText:i,endProgram:h,reactivePollingInterval:c,steps:a})=>{t.loading=!1,t.newPageDefinition({widgets:s,actions:t.pageActionFactory.fromPageActionsDto(i?[i]:d!=null?d:[]),fullWidth:s.some(v=>"fullWidth"in v&&v.fullWidth),hasError:!1,steps:a}),c&&(t.reactivePollInterval=setInterval(t.onReactivePollListener,c*1e3)),h&&(t.endedByPage=!0,t.broker.send({type:"form-response",payload:{},secrets:[]}))}),t.broker.on("action",async({action:s})=>{var h;let d=null,i;try{const{type:c}=s;d=(h=await Te[c](s))!=null?h:null}catch(c){i=c.message}t.broker.send({type:"action-response",value:d,errorMessage:i})}),t.broker.on("auth:require-info",()=>{t.newPageDefinition({widgets:[],actions:[],fullWidth:!1,hasError:!1,steps:null}),t.onStartAuthListener&&t.onStartAuthListener()}),t.broker.on("auth:valid-jwt",()=>{t.onEndAuthListener&&t.onEndAuthListener()}),t.broker.on("auth:invalid-jwt",()=>{console.warn("invalid jwt"),t.onBadAuthListener&&t.onBadAuthListener()}),t.broker.on("stdout",s=>{N.log(s)}),t.broker.on("stderr",s=>{N.log(s)}),t.broker.on("program:connection-error",s=>{t.widgetError(),t.error(s)}),t.broker.on("program:end",s=>{t.programEnded=!0,s.exitCode||s.exception?(t.widgetError(),t.error(s)):(t.widgetEnd(),t.exit(s))}),t.broker.on("program:disconnect",s=>{t.exit(s)}),t.broker.on("not-enough-credits",()=>{t.error({error:"not-enough-credits"}),t.programEnded=!0}),t.broker.on("session-id",async s=>{t.broker.setSessionId(s.sessionId)}),t.broker.on("heartbeat",()=>{t.broker.resetHeartbeatCounter()}),t.broker.on("user-response-event",({widgets:s,validation:d})=>{t.updatePageDefinition({widgets:s,validation:{message:d.message,status:d.status},fullWidth:s.some(i=>"fullWidth"in i&&i.fullWidth)})}),t}next(e,n,t,s){if((me(Object.values(e))||!t)&&(n==null?void 0:n.name)!=="Back"){this.updatePageDefinition({hasError:!0});return}this.reactivePollInterval&&clearInterval(this.reactivePollInterval);const i={};Object.keys(e).forEach(h=>{i[h]=e[h].value}),this.loading=!0,this.broker.send({type:"form-response",payload:i,action:n==null?void 0:n.name,secrets:s}),this.newPageDefinition({widgets:[],fullWidth:!1,hasError:!1,actions:[],steps:null})}sendUserEvent(e,n){const t={};Object.keys(e).forEach(s=>{t[s]=e[s].value}),this.broker.send({type:"user-event",payload:t,secrets:n})}init(e){this.broker.resetState(),this.newPageDefinition({widgets:[],actions:[],fullWidth:!1,hasError:!1,steps:null}),this.broker.connect(e!=null?e:{})}newPageDefinition(e){this.newPageDefinitionListener(e)}updatePageDefinition(e){this.loading||this.updatePageDefinitionListener(e)}listenToNewPageDefinition(e){this.newPageDefinitionListener=e}listenToPageDefinitionUpdate(e){this.updatePageDefinitionListener=e}onReactivePoll(e){this.onReactivePollListener=e}error(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onErrorListener(e)}onError(e){this.onErrorListener=e}exit(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onExitListener(e)}onExit(e){this.onExitListener=e}onStartAuth(e){this.onStartAuthListener=e}onEndAuth(e){this.onEndAuthListener=e}onBadAuth(e){this.onBadAuthListener=e}}const He={key:0,class:"form-wrapper"},Ve=["id"],Me={key:0,class:"span-error"},qe={key:1,class:"loading-wrapper"},Ke={class:"span-error"},ze={class:"buttons"},Je=I({__name:"FormRunner",props:{form:{type:Object,required:!0},params:Object,isPreview:Boolean,enableAutoFocus:{type:Boolean,required:!0},broker:{type:Object,required:!0}},emits:["log","error","exit","navigate","logout","start"],setup(r,{expose:e,emit:n}){const t=r,s=A(null),d=$(()=>M.from(t.form)),i=o=>n("navigate",o),h=()=>{a.value={widgets:[{type:"start"}],actions:d.value.startAction,fullWidth:!1,hasError:!1,steps:null}};pe(()=>t.form,()=>{var o;((o=a.value.widgets[0])==null?void 0:o.type)=="start"&&h()});const c=Y({user:null,authenticating:!1}),a=A({widgets:[],fullWidth:!1,hasError:!1,actions:[],steps:null}),v=Y({responses:{},formState:"idle"}),W=$(()=>a.value.widgets.reduce((o,u)=>("key"in u&&(o[u.key]=v.responses[u.key]),o),{})),B=$(()=>a.value.widgets.filter(o=>"secret"in o).reduce((o,u)=>"key"in u&&"secret"in u?[...o,{key:u.key,secret:u.secret}]:o,[]));K();function K(){c.user=O.getUser()}const ie=()=>{O.removeUser(),K(),n("logout")},m=q.create(t.broker,d.value);m.onError(o=>{var u;if(n("error",o),v.formState="error",o.error==="not-enough-credits"){(u=s.value)==null||u.open(),h();return}}),m.onExit(o=>{n("exit",o),v.formState="over"}),m.onStartAuth(()=>{c.user?m.sendUser(c.user):c.authenticating=!0}),m.onEndAuth(()=>{c.authenticating=!1}),m.onBadAuth(()=>{O.removeUser(),c.user=null,c.authenticating=!0}),m.onReactivePoll(()=>{m.sendUserEvent(W.value,B.value)});const ae=o=>{c.user=o,m.sendUser(o)};m.listenToNewPageDefinition(o=>{var u,g;a.value=o,T.init(t.enableAutoFocus,()=>x()),v.responses=ve((g=(u=a.value)==null?void 0:u.widgets)!=null?g:[])}),m.listenToPageDefinitionUpdate(o=>{var u,g;a.value={...a.value,...o},v.responses=ge((g=(u=a.value)==null?void 0:u.widgets)!=null?g:[],v.responses)});const z=o=>{var u;if(!(v.formState!=="running"||t.isPreview||!((u=window.should_ask_before_leave)==null||u)))return m.sendBrowserTryDisconnect(),o.preventDefault(),o.returnValue="Are you sure?",""};re(async()=>{window.addEventListener("beforeunload",z),h(),T.init(t.enableAutoFocus,o=>x(o)),t.form.autoStart&&F()}),we(()=>{t.broker.close(),window.removeEventListener("beforeunload",z)});const x=o=>{var u,g;if(v.formState!=="running")return F();m.next(W.value,o,(g=(u=a.value.validation)==null?void 0:u.status)!=null?g:!0,B.value)},F=async()=>{m.init(t.params),v.formState="running",n("start")},L=o=>be(o.type)?v.responses[o.key]:null;function J(o,u,g){if(m.sendUserEvent(W.value,g),u===a.value.widgets.length-1&&["multiple-choice-input","cards-input"].includes(a.value.widgets[u].type)&&a.value.actions.filter(S=>!!S).length===0&&o.value!==null&&(!H.exports.isArray(o.value)||o.value.length)){x();return}}return e({run:F}),(o,u)=>(f(),y(Ie,{class:ee([{preview:r.isPreview},"runner"]),"main-color":r.form.mainColor,theme:r.form.theme,"font-family":r.form.fontFamily,runtime:"form"},{default:oe(()=>{var g,S;return[r.isPreview?(f(),y(Ne,{key:0,class:"auto-fill-btn",broker:r.broker,form:r.form,style:{"z-index":1}},null,8,["broker","form"])):P("",!0),j(xe,{ref_key:"runtimeCommonsRef",ref:s,runtime:r.form,"full-width":a.value.fullWidth,"steps-info":a.value.steps,"is-preview":r.isPreview,"user-email":(g=c.user)==null?void 0:g.claims.email,type:"forms",onLogout:ie,onNavigate:i},null,8,["runtime","full-width","steps-info","is-preview","user-email"]),E("main",null,[c.authenticating?(f(),y(Ee,{key:1,class:"form-auth",onDone:ae})):(f(),w("div",{key:0,class:ee(["form",{"full-width":a.value.fullWidth}])},[a.value.widgets.length>0?(f(),w("div",He,[(f(!0),w(te,null,ne(a.value.widgets,(p,_)=>{var G,Z,Q,X;return f(),w("div",{id:p.type+_,key:(G=p.key)!=null?G:p.type+_,class:"widget"},[(f(),y(ye(p.type),{data:p,response:L(p),form:r.form,page:a.value,"has-error":((Z=L(p))==null?void 0:Z.isInvalid())&&a.value.hasError,runtime:"form","session-id":r.broker.getSessionId(),onChange:R=>J(R,_,V(B)),onSetInitialValue:R=>J(R,_)},null,40,["data","response","form","page","has-error","session-id","onChange","onSetInitialValue"])),j(Be,{hint:"hint"in p?p.hint:null},null,8,["hint"]),((Q=L(p))==null?void 0:Q.isInvalid())&&a.value.hasError?(f(),w("span",Me,D((X=L(p))==null?void 0:X.errorMessages().join(`
`)),1)):P("",!0)],8,Ve)}),128))])):(f(),w("div",qe,[j(Le)])),E("span",Ke,D((S=a.value.validation)==null?void 0:S.message),1),E("div",ze,[(f(!0),w(te,null,ne(a.value.actions,p=>(f(),y(Fe,{key:p.name,action:p,onNext:_=>x(p)},null,8,["action","onNext"]))),128))])],2))])]}),_:1},8,["class","main-color","theme","font-family"]))}});const ot=C(Je,[["__scopeId","data-v-c4b73db3"]]);function Ge(r){return r.type==="form"&&r.payload?{...r,type:"form-response"}:r.type==="user-event"&&r.widgets?{...r,type:"user-response-event"}:r}const Ze=[WebSocket.CLOSING,WebSocket.CLOSED];function se(r,e){const n=r[e.type];if(!n){console.warn("no callback for",e.type);return}n.forEach(t=>t(e))}const b=class{constructor(e){l(this,"formPath",null);l(this,"sessionId",null);l(this,"isLocal");l(this,"isPreview");l(this,"ws",null);l(this,"callbacks",{"form-response":[],"user-response-event":[],start:[],"auth:info":[],"auth:saved-jwt":[],"auth:restart":[],"auth:validate-token":[],"auth:resend-token":[],heartbeat:[],metadata:[],"executed-by":[],"action-response":[],"user-event":[],"program:end":[],"program:disconnect":[],"program:connection-error":[],stderr:[],stdout:[],form:[],action:[],"not-enough-credits":[],"auth:require-info":[],"auth:expecting-token":[],"auth:token-expired":[],"auth:invalid-token":[],"auth:invalid-jwt":[],"auth:valid-token":[],"auth:valid-jwt":[],"browser:disconnect":[],"session-id":[],"browser:try-disconnect":[]});l(this,"onCloseCallbacks",[]);l(this,"heartbeatCounter",0);l(this,"heartbeatInterval");l(this,"params",{});var n,t;"formPath"in e&&(this.formPath=(n=e.formPath)!=null?n:null),"sessionId"in e&&(this.sessionId=(t=e.sessionId)!=null?t:null),this.isLocal=e.isLocal,this.isPreview=e.isPreview}static create(e){return b._instance&&b._instance.close(),b._instance=new b(e),b._instance}get url(){const e=this.isLocal||this.sessionId?"sessionId":"formPath";return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/_socket?${e}=${this[e]}&isPreview=${this.isPreview}`}setSessionId(e){var n;(n=this.sessionId)!=null||(this.sessionId=e)}getSessionId(){return this.sessionId}resetState(){this.close(),this.isLocal||(this.sessionId=null)}resetHeartbeatCounter(){this.heartbeatCounter=0}on(e,n){this.callbacks[e].push(n)}clearWSEvents(){!this.ws||(clearInterval(this.heartbeatInterval),this.ws.onclose=()=>{},this.ws.onerror=()=>{},this.ws.onmessage=()=>{})}async connect(e,n=1){if(!(n>3))return this.params=e!=null?e:this.params,new Promise(t=>{this.clearWSEvents(),this.ws=new WebSocket(this.url),this.ws.onopen=()=>{t(),this.resetHeartbeatCounter(),this.send({type:"start",params:this.params})};let s=!1;const d=()=>{s||(s=!0,this.sessionId&&setTimeout(()=>this.connect(),1500))};this.ws.onclose=i=>{if(i.code===1006||!i.wasClean)return d();clearInterval(this.heartbeatInterval),this.onCloseCallbacks.forEach(h=>h())},this.ws.onerror=()=>d(),this.ws.onmessage=i=>{const h=JSON.parse(i.data);se(this.callbacks,Ge(h))},this.heartbeatInterval=setInterval(()=>{if(!(!this.ws||this.ws.readyState!==this.ws.OPEN)){if(this.heartbeatCounter++,this.heartbeatCounter>3)return this.ws.onclose=()=>{},clearInterval(this.heartbeatInterval),d();this.send({type:"heartbeat"})}},2e3)}).catch(()=>{this.connect(this.params,n+1)})}onClose(e){this.onCloseCallbacks.push(e)}close(){if(!this.ws){console.warn("no websocket to close");return}this.clearWSEvents(),this.ws.close()}async send(e){if(!this.ws){console.warn("no websocket to send");return}Ze.includes(this.ws.readyState)&&await this.connect(),this.ws.send(JSON.stringify(e)),se(this.callbacks,e)}};let U=b;l(U,"_instance");export{ot as F,U as R};
//# sourceMappingURL=broker.c3576dd9.js.map
