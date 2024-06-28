import{u as C}from"./index.8b4fa436.js";import{d as F,ey as I,eF as S,N as T,r as f,O as x,y as L,ap as B,o as N,R as V,u as a,b as _,eq as W,f as y,c as D,w as h,es as M,ak as R,cM as K,cI as q,cQ as G,E as O}from"./outputWidgets.f7b80e9f.js";import{b as P,r as Q,c as j,d as z}from"./FormRunner.e80a0d88.js";import{A as H}from"./api.b0b5d442.js";import{a as J}from"./asyncComputed.bd2b6e70.js";import{u as E}from"./uuid.e5064b5a.js";import{L as X}from"./CircularLoading.b1d73f83.js";import{f as Y}from"./api.aba07d9c.js";import"./fetch.1ec4f78f.js";import"./pubsub.10df5fd2.js";import"./url.882128c4.js";import"./Login.vue_vue_type_script_setup_true_lang.47683020.js";import"./index.9a5a7c1a.js";import"./PhArrowClockwise.vue.2d5eab39.js";import"./WidgetsFrame.e878f348.js";import"./Steps.a7ec948a.js";import"./Watermark.1f03c5f5.js";import"./Card.3d001ab8.js";import"./TabPane.7d974707.js";import"./metadata.e0926a4e.js";import"./PhCheckCircle.vue.902dac5a.js";import"./PhKanban.vue.34c60c18.js";import"./PhScroll.vue.26add44e.js";import"./PhWebhooksLogo.vue.4f41bfe0.js";import"./runnerData.5347d4ed.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="6ee1d479-1531-4519-9dc9-6880dbfdd604",u._sentryDebugIdIdentifier="sentry-dbid-6ee1d479-1531-4519-9dc9-6880dbfdd604")}catch{}})();const Z={key:0,class:"loading"},$=F({__name:"Form",setup(u){const n=I(),c=S(),v=T({playerKey:E()}),d=f(null),m=f(null),g=f(!1);x(n,()=>{n.name==="form"&&A()});const{loading:p,result:t,error:b,refetch:A}=J(async()=>{v.playerKey=E();const r=n.path.slice(1),e=await Y(r);if(!e){c.push({name:"error",params:{status:"404"}});return}const o=n.query[H];if(!e.isInitial&&!o){g.value=!0;return}const s=new j({formRunnerData:e,userManager:C,logService:null,connectionManager:new z(e.id,"player",n.query),onRedirect:w,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:l=>m.value=l,onStackTraceUpdate:null,onStateUpdate:l=>d.value=l}),i=s.getState();return m.value=i.passwordlessUser,d.value=i.formState,{runnerData:e,controller:s}}),U=L(()=>{const r=!p,e=!!b,o=!t||d.value===null;return r&&(e||o)});B(()=>{var r,e,o,s,i;U.value&&c.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(i=(o=t.value)==null?void 0:o.runnerData.welcomeTitle)!=null?i:(s=t.value)==null?void 0:s.runnerData.title)});function w(r,e){Q("player",c,r,e)}N(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",k)}),V(()=>{window.removeEventListener("beforeunload",k)});const k=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var o,s,i,l;return a(p)?(_(),W("div",Z,[y(X)])):g.value?(_(),D(a(G),{key:1,class:"unset-thread-container",vertical:""},{default:h(()=>[y(a(K),null,{default:h(()=>[R("Cannot open this link directly")]),_:1}),y(a(q),{class:"message"},{default:h(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):a(t)&&a(t).runnerData&&d.value&&!a(b)&&!a(p)?(_(),D(P,{key:v.playerKey,"form-runner-data":a(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":(o=m.value)==null?void 0:o.claims.email,onRedirect:w,onActionClicked:(s=a(t))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=a(t))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=a(t))==null?void 0:l.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):M("",!0)}}});const Ee=O($,[["__scopeId","data-v-b8fb7325"]]);export{Ee as default};
//# sourceMappingURL=Form.f1ce5c43.js.map
