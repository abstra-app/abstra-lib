import{u as Ae}from"./index.6497ffce.js";import{f as a,eG as le,d as $,r as _,H as U,b as v,c as g,w as o,ar as f,eD as Te,u as e,bV as R,cB as L,ev as D,bO as O,a$ as N,eE as ue,eF as se,e as C,v as ie,bP as J,eC as Pe,cF as Oe,S as K,a as xe,ex as S,eA as Re,eB as Ee,aw as Ue,J as X,eK as Ce,bv as $e}from"./outputWidgets.e46e0ded.js";import{B as Fe}from"./BaseLayout.d48e98d3.js";import{F as De,a as de,b as Le,c as Ie,d as Be,r as Z}from"./FormRunner.f6762d5c.js";import{R as Me,S as Ne,a as qe,L as je}from"./SourceCode.8bffe8f1.js";import{a as Ve}from"./asyncComputed.ea937eb3.js";import{F as We}from"./forms.60555749.js";import{W as ee}from"./workspaces.b56d57a4.js";import{l as te,N as He}from"./NavbarControls.61c340a6.js";import{_ as Qe}from"./SaveButton.vue_vue_type_script_setup_true_lang.ec754724.js";import{S as ze}from"./StageRunSelector.0401f03d.js";import{A as Ge}from"./index.a52068ba.js";import{A as F}from"./Title.70882a5b.js";import{T as I}from"./Typography.936b79d0.js";import{A as T}from"./FormItem.028a21cb.js";import{F as q}from"./Form.e62bba2a.js";import{A as ae}from"./index.17dc0681.js";import{r as Ye,g as Je,p as Ke}from"./icons.d4fdc2de.js";import{A as pe}from"./api.64b28075.js";import{A as B}from"./index.b4ecf953.js";import{M as Xe}from"./Modal.917b8a62.js";import{A as Ze}from"./Link.54aaa0a4.js";import{A as M,T as oe}from"./TabPane.1d4c923c.js";import"./Card.10d8f696.js";import{c as et}from"./index.f3a3c7d6.js";import{A as tt}from"./index.1e8584c2.js";import{E as at}from"./ExpandOutlined.fab4caa3.js";import"./pubsub.0ad51ee9.js";import"./url.24cedcd6.js";import"./Passwordless.0e8f31e2.js";import"./CircularLoading.b1c3d0b4.js";import"./PlayerNavbar.9ba5c0bf.js";import"./WidgetsFrame.fe78ccea.js";import"./Steps.581d8e40.js";import"./uuid.3df5a141.js";import"./jobs.2f726e1d.js";import"./record.7c07a1e1.js";import"./scripts.4dbb6837.js";import"./validations.eba63c76.js";import"./string.44e540f4.js";import"./toggleHighContrast.36a5ed4e.js";import"./runnerData.e8597b04.js";import"./popupNotifcation.df1d8d5e.js";import"./Text.dfce2b71.js";import"./Base.237a3458.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.57fd095a.js";import"./Paragraph.324cd4bd.js";import"./ant-design.a4db70e5.js";import"./index.11efe501.js";import"./index.8a7fae95.js";import"./index.b0838867.js";import"./hasIn.e94cc5bd.js";import"./schema.0f54a7b2.js";import"./index.cf4c23b9.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="3711da36-4a2e-4fa3-b67a-c8c6969dfb17",u._sentryDebugIdIdentifier="sentry-dbid-3711da36-4a2e-4fa3-b67a-c8c6969dfb17")}catch{}})();var ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"};const rt=ot;var nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};const lt=nt;function re(u){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},c=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),c.forEach(function(r){ut(u,r,t[r])})}return u}function ut(u,n,t){return n in u?Object.defineProperty(u,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[n]=t,u}var j=function(n,t){var c=re({},n,t.attrs);return a(le,re({},c,{icon:rt}),null)};j.displayName="ExportOutlined";j.inheritAttrs=!1;const st=j;function ne(u){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},c=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),c.forEach(function(r){it(u,r,t[r])})}return u}function it(u,n,t){return n in u?Object.defineProperty(u,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[n]=t,u}var V=function(n,t){var c=ne({},n,t.attrs);return a(le,ne({},c,{icon:lt}),null)};V.displayName="LinkOutlined";V.inheritAttrs=!1;const dt=V,pt=$({__name:"LaunchButton",props:{path:{}},setup(u){const n=u,t=_({state:"loading"}),c=U(()=>t.value.state!=="found"),r=U(()=>t.value.state==="loading"),l=U(()=>t.value.state==="found"?t.value.url:void 0),w=U(()=>{switch(t.value.state){case"error":return"Error";case"loading":return"Loading";case"not-deployed":return"No deploy";case"not-logged":return"Not logged";case"not-found":return"Page not found";case"found":return"Launch";default:throw new Error(`Invalid state ${t.value}`)}}),y=U(()=>{switch(t.value.state){case"error":return"Something went wrong when trying to get your deployed URL.";case"loading":return"Getting deployed url info...";case"not-deployed":return"You have no deployed url yet.";case"not-logged":return"You are not logged.";case"not-found":return"This page is not on the deployed application.";case"found":return"Launch the deployed version of this application in another tab.";default:throw new Error(`Invalid state ${t.value}`)}});async function h(m){const s=`https://${m}.abstra.app/_version`;return(await fetch(s)).ok}async function k(m){const s=`https://${m}.abstra.app/_pages/${n.path}`;return(await fetch(s)).ok}async function x(){if(!(await te.get()).logged){t.value={state:"not-logged"};return}const s=await te.getProjectInfo().catch(()=>null);if(!s){t.value={state:"error"};return}if(!await h(s.subdomain).catch(()=>null)){t.value={state:"not-deployed"};return}if(!await k(s.subdomain).catch(()=>null)){t.value={state:"not-found"};return}const d=`https://${s.subdomain}.abstra.app/${n.path}`;t.value={state:"found",url:d}}return x(),(m,s)=>(v(),g(e(L),{title:w.value},{content:o(()=>[f(Te(y.value),1)]),default:o(()=>[a(e(R),{href:l.value,target:"_blank",disabled:c.value,loading:r.value,size:"small",type:"link"},{icon:o(()=>[a(e(dt))]),default:o(()=>[f(" Open Deployed ")]),_:1},8,["href","disabled","loading"])]),_:1},8,["title"]))}}),ce=u=>(ue("data-v-a8ca44f6"),u=u(),se(),u),ct=ce(()=>C("i",null,"string",-1)),mt=ce(()=>C("i",null,"string list",-1)),ft=$({__name:"FormNotificationSettings",props:{form:{}},setup(u){const t=_(u.form);return(c,r)=>(v(),D(N,null,[a(e(q),{layout:"vertical"},{default:o(()=>[a(e(F),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:o(()=>[f(" Thread waiting "),a(e(Ge),{checked:t.value.notificationTrigger.enabled,"onUpdate:checked":r[0]||(r[0]=l=>t.value.notificationTrigger.enabled=l)},{default:o(()=>[f(" Enabled ")]),_:1},8,["checked"])]),_:1}),a(e(I),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:o(()=>[f(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),a(e(T),{label:"Variable name"},{default:o(()=>[a(e(O),{value:t.value.notificationTrigger.variable_name,"onUpdate:value":r[1]||(r[1]=l=>t.value.notificationTrigger.variable_name=l),disabled:!t.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),a(e(ae),{type:"info"},{message:o(()=>[a(e(I),null,{default:o(()=>[f(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),ct,f(" or a "),mt,f(". ")]),_:1})]),_:1}),a(e(ae),{style:{"margin-top":"20px"}},{message:o(()=>[a(e(I),null,{default:o(()=>[f(" Notifications are a paid feature. Talk to your account manager to enable them. ")]),_:1})]),_:1})],64))}});const vt=ie(ft,[["__scopeId","data-v-a8ca44f6"]]),gt=$({__name:"FormSettings",props:{form:{}},setup(u){const t=_(u.form);return(c,r)=>(v(),g(e(q),{layout:"vertical"},{default:o(()=>[a(Me,{runtime:t.value},null,8,["runtime"]),a(e(T),{label:"Form name"},{default:o(()=>[a(e(O),{value:t.value.title,"onUpdate:value":r[0]||(r[0]=l=>t.value.title=l),type:"text",onChange:r[1]||(r[1]=l=>{var w;return t.value.title=(w=l.target.value)!=null?w:""})},null,8,["value"])]),_:1}),a(e(F),{level:3},{default:o(()=>[f(" Texts ")]),_:1}),a(e(F),{level:4},{default:o(()=>[f(" Welcome Screen ")]),_:1}),a(e(T),{label:"Title"},{default:o(()=>[a(e(O),{value:t.value.welcomeTitle,"onUpdate:value":r[2]||(r[2]=l=>t.value.welcomeTitle=l),type:"text",placeholder:t.value.title,disabled:t.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),a(e(T),{label:"Description"},{default:o(()=>[a(e(O),{value:t.value.startMessage,"onUpdate:value":r[3]||(r[3]=l=>t.value.startMessage=l),type:"text",disabled:t.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),{label:"Start button label"},{default:o(()=>[a(e(O),{value:t.value.startButtonText,"onUpdate:value":r[4]||(r[4]=l=>t.value.startButtonText=l),type:"text",placeholder:"Start",disabled:t.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),null,{default:o(()=>[a(e(J),{checked:t.value.autoStart,"onUpdate:checked":r[5]||(r[5]=l=>t.value.autoStart=l)},{default:o(()=>[f("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),a(e(F),{level:4},{default:o(()=>[f(" End Screen ")]),_:1}),a(e(T),{label:"End text"},{default:o(()=>[a(e(O),{value:t.value.endMessage,"onUpdate:value":r[6]||(r[6]=l=>t.value.endMessage=l),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),a(e(T),{label:"Restart button label"},{default:o(()=>[a(e(O),{value:t.value.restartButtonText,"onUpdate:value":r[7]||(r[7]=l=>t.value.restartButtonText=l),placeholder:"Restart",type:"text",disabled:!t.value.allowRestart},null,8,["value","disabled"])]),_:1}),a(e(T),null,{default:o(()=>[a(e(J),{checked:t.value.allowRestart,"onUpdate:checked":r[8]||(r[8]=l=>t.value.allowRestart=l)},{default:o(()=>[f("Show restart button at the end")]),_:1},8,["checked"])]),_:1}),a(e(F),{level:4},{default:o(()=>[f(" Alert Messages ")]),_:1}),a(e(T),{label:"Error message"},{default:o(()=>[a(e(O),{value:t.value.errorMessage,"onUpdate:value":r[9]||(r[9]=l=>t.value.errorMessage=l),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}}),yt=$({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},queryParams:{}},emits:["update:query-params"],setup(u,{emit:n}){const t=u,c=()=>{const l=Object.keys(t.queryParams).length+1;n("update:query-params",{...t.queryParams,[`param-${l}`]:"value"})},r=l=>{const w={...t.queryParams};delete w[l],n("update:query-params",w)};return(l,w)=>(v(),g(e(Xe),{open:l.open,onCancel:l.close},{footer:o(()=>[a(e(R),{type:"primary",onClick:l.close},{default:o(()=>[f("OK")]),_:1},8,["onClick"])]),default:o(()=>[a(e(B),{vertical:"",gap:"20"},{default:o(()=>[a(e(I),null,{default:o(()=>[f("Query params")]),_:1}),(v(!0),D(N,null,Pe(Object.entries(l.queryParams),y=>(v(),g(e(T),{key:y[0]},{default:o(()=>[a(e(Oe),null,{default:o(()=>[a(e(O),{value:y[0],"onUpdate:value":h=>y[0]=h,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(O),{value:y[1],"onUpdate:value":h=>y[1]=h,type:"text",placeholder:"value",disabled:y[0]===e(pe)},null,8,["value","onUpdate:value","disabled"]),a(e(R),{danger:"",onClick:h=>r(y[0])},{default:o(()=>[f("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(T),null,{default:o(()=>[a(e(R),{type:"dashed",style:{width:"100%"},onClick:c},{default:o(()=>[f(" Add Query Param ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),bt=u=>(ue("data-v-d2213ae3"),u=u(),se(),u),ht={key:0},kt={key:1},_t=bt(()=>C("br",null,null,-1)),wt={class:"form-preview-container"},St=$({__name:"FormTester",props:{formRunnerData:{},formState:{},userEmail:{},disabled:{type:Boolean},queryParams:{},stageRunId:{}},emits:["start","reset","navigate","logout","auto-fill-clicked","action-clicked","update-widget-errors","update-widget-value","update:query-params"],setup(u,{emit:n}){var x;const t=u,c=_(!1),r=()=>{c.value=!0},l=()=>{c.value=!1},w=U(()=>{const m=k.value.query?`?${k.value.query}`:"";return`/${t.formRunnerData.path}${m}`}),y=_((x=K.get("dontShowReloadHelper"))!=null?x:!1),h=()=>{K.set("dontShowReloadHelper",!0),y.value=!0},k=U(()=>{const m=new URLSearchParams(t.queryParams).toString();return{subdomain:"[your-subdomain]",path:t.formRunnerData.path,query:m}});return(m,s)=>{const E=xe("icon");return v(),D(N,null,[a(e(q),{layout:"vertical"},{default:o(()=>[a(e(B),{gap:"small"},{default:o(()=>[m.formState.type&&e(De).includes(m.formState.type)?(v(),g(e(L),{key:0,placement:"bottom",visible:y.value?void 0:!0},{content:o(()=>[y.value?(v(),D("span",ht,"Reload form")):(v(),D("span",kt,[f(" You can reload the form here"),_t,a(e(Ze),{onClick:h},{default:o(()=>[f("Don't show this again")]),_:1})]))]),default:o(()=>[a(e(R),{disabled:m.disabled,onClick:s[0]||(s[0]=b=>n("reset"))},{default:o(()=>[a(E,{path:e(Ye),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1},8,["visible"])):S("",!0),e(de).includes(m.formState.type)?(v(),g(e(L),{key:1,placement:"bottom"},{content:o(()=>[f("Stop form")]),default:o(()=>[a(e(R),{onClick:s[1]||(s[1]=b=>n("reset"))},{default:o(()=>[a(E,{path:e(Je),width:"20"},null,8,["path"])]),_:1})]),_:1})):S("",!0),m.formState.type==="waiting"?(v(),g(e(L),{key:2,placement:"bottom"},{content:o(()=>[f("Start form")]),default:o(()=>[a(e(R),{disabled:m.disabled,onClick:s[2]||(s[2]=b=>n("start"))},{default:o(()=>[a(E,{path:e(Ke),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1})):S("",!0),a(e(O),{value:w.value,class:"url-preview",onClick:r},null,8,["value"])]),_:1}),C("div",wt,[a(Le,{"is-preview":"","form-runner-data":m.formRunnerData,disabled:m.disabled,"form-state":m.formState,"user-email":m.userEmail,onUpdateWidgetErrors:s[3]||(s[3]=(b,d)=>n("update-widget-errors",b,d)),onUpdateWidgetValue:s[4]||(s[4]=(b,d)=>n("update-widget-value",b,d)),onActionClicked:s[5]||(s[5]=b=>n("action-clicked",b)),onNavigate:s[6]||(s[6]=b=>n("navigate",b)),onLogout:s[7]||(s[7]=b=>n("logout")),onAutofillClicked:s[8]||(s[8]=b=>n("auto-fill-clicked"))},null,8,["form-runner-data","disabled","form-state","user-email"])])]),_:1}),a(yt,{"query-params":m.queryParams,open:c.value,close:l,"onUpdate:queryParams":s[9]||(s[9]=b=>n("update:query-params",b))},null,8,["query-params","open"])],64)}}});const At=ie(St,[["__scopeId","data-v-d2213ae3"]]),Tt={style:{width:"50%"}},Pt={style:{width:"50%"}},Oa=$({__name:"FormEditor",setup(u){const n=Re(),t=Ee(),c=_(null),r=_(null),l=_(null),w=_(null),y=_(null),h=_({}),k=_(null),x=_(!1),m=_("source-code"),s=_("preview"),E=(i,p)=>{var P;(P=c.value)==null||P.setHighlight(i,p)},b=()=>{var i,p;(i=c.value)==null||i.restartEditor(),(p=c.value)==null||p.startPreviewMode()};Ue(()=>k.value?h.value={...h.value,[pe]:k.value}:null);const{result:d,loading:me,refetch:fe}=Ve(async()=>{const[i,p,P]=await Promise.all([We.get(t.params.id),ee.get(),ee.readTestData()]);return i.updateInitialState("test_data",P),w.value=i.makeRunnerData(p),Ce({form:i,workspace:p})});X([h,x,d],()=>{if(!d.value)return;const i=d.value.form.isInitial&&!x.value||!d.value.form.isInitial&&!k.value;r.value=new Ie({formRunnerData:d.value.form.makeRunnerData(d.value.workspace),queryParams:h.value,userManager:Ae,logService:W,connectionManager:new Be(d.value.form.id,i),onFormStart:b,onFormEnd:ve,onRedirect:_e,onAuthUpdate:P=>y.value=P,onStateUpdate:P=>l.value=P,onStackTraceUpdate:E});const p=r.value.getState();l.value=p.formState,y.value=p.passwordlessUser});const ve=()=>{var i;k.value=null,(i=c.value)==null||i.restartEditor()};function ge(){var i;(i=r.value)==null||i.start()}function ye(){var i,p;(i=c.value)==null||i.restartEditor(),(p=r.value)==null||p.reset()}const be=i=>{Z("editor",n,i.path)};function he(){n.push({name:"home"})}const ke=i=>{!d.value||(d.value.form.file=i)},W=je.create();function _e(i,p){Z("editor",n,i,p)}const we=()=>{var i;n.push({name:"formPreview",query:t.query,params:{id:(i=d.value)==null?void 0:i.form.id}})},Se=()=>{var p;let i=`/${(p=d.value)==null?void 0:p.form.path}`;k.value&&(i+=`?abstra-run-id=${k.value}`),window.open(i,"_blank")};return X(()=>t.params.id,()=>{fe()}),(i,p)=>(v(),g(Fe,null,{navbar:o(()=>[e(d)?(v(),g(e(et),{key:0,title:e(d).form.title,style:{padding:"5px 25px"},onBack:he},{extra:o(()=>[a(He,{"docs-path":"forms/overview","show-v-s-code-button":"","show-save-button":!1,"editing-model":e(d).form},null,8,["editing-model"])]),_:1},8,["title"])):S("",!0)]),content:o(()=>[e(d)?(v(),g(e(B),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>{var P,H,Q,z,G,Y;return[C("div",Tt,[a(e(oe),{"active-key":m.value,"onUpdate:activeKey":p[0]||(p[0]=A=>m.value=A)},{rightExtra:o(()=>[a(Qe,{model:e(d).form},null,8,["model"])]),default:o(()=>[a(e(M),{key:"source-code",tab:"Source code"}),a(e(M),{key:"settings",tab:"Settings"}),S("",!0)]),_:1},8,["active-key"]),m.value==="source-code"?(v(),g(Ne,{key:0,ref_key:"code",ref:c,script:e(d).form,workspace:e(d).workspace,onUpdateFile:ke},null,8,["script","workspace"])):S("",!0),m.value==="settings"?(v(),g(gt,{key:1,form:e(d).form},null,8,["form"])):S("",!0),m.value==="notifications"?(v(),g(vt,{key:2,form:e(d).form},null,8,["form"])):S("",!0)]),C("div",Pt,[a(e(oe),{"active-key":s.value,"onUpdate:activeKey":p[1]||(p[1]=A=>s.value=A)},{rightExtra:o(()=>[a(e(B),{gap:"8",align:"center"},{default:o(()=>{var A;return[l.value&&e(de).includes((A=l.value)==null?void 0:A.type)?(v(),g(e(tt),{key:0,color:"green",style:{"margin-right":"20px"}},{default:o(()=>[f(" Running ")]),_:1})):S("",!0),a(pt,{path:e(d).form.path},null,8,["path"]),k.value||e(d).form.isInitial&&x.value?(v(),g(e(R),{key:1,target:"_blank",onClick:Se},{icon:o(()=>[a(e(st))]),default:o(()=>[f(" Open ")]),_:1})):(v(),g(e(R),{key:2,target:"_blank",onClick:we},{icon:o(()=>[a(e(at))]),default:o(()=>[f(" Preview ")]),_:1}))]}),_:1})]),default:o(()=>[a(e(M),{key:"preview",tab:"Preview"}),S("",!0)]),_:1},8,["active-key"]),e(me)||!w.value||!l.value?(v(),g(e($e),{key:0})):s.value==="preview"?(v(),g(At,{key:1,"query-params":h.value,"onUpdate:queryParams":p[2]||(p[2]=A=>h.value=A),"form-state":l.value,"form-runner-data":w.value,"user-email":(P=y.value)==null?void 0:P.claims.email,disabled:e(d).form.hasChanges(),"stage-run-id":k.value,onStart:ge,onReset:ye,onLogout:(H=r.value)==null?void 0:H.logout,onActionClicked:(Q=r.value)==null?void 0:Q.handleActionClick,onNavigate:be,onUpdateWidgetErrors:(z=r.value)==null?void 0:z.updateWidgetFrontendErrors,onUpdateWidgetValue:(G=r.value)==null?void 0:G.updateWidgetValue,onAutoFillClicked:(Y=r.value)==null?void 0:Y.handleAutofillClick},null,8,["query-params","form-state","form-runner-data","user-email","disabled","stage-run-id","onLogout","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAutoFillClicked"])):S("",!0),s.value==="test-data"?(v(),g(ze,{key:2,"enable-start-thread":x.value,"onUpdate:enableStartThread":p[3]||(p[3]=A=>x.value=A),"stage-run-id":k.value,"onUpdate:stageRunId":p[4]||(p[4]=A=>k.value=A),stage:e(d).form},null,8,["enable-start-thread","stage-run-id","stage"])):S("",!0)])]}),_:1})):S("",!0)]),footer:o(()=>[a(qe,{runtime:"forms","log-service":e(W)},null,8,["log-service"])]),_:1}))}});export{Oa as default};
//# sourceMappingURL=FormEditor.ba2b0fc0.js.map
