import{u as C}from"./index.0da17e95.js";import{d as I,f3 as F,f8 as S,E as T,r as f,G as x,H as L,af as V,o as B,I as W,u as a,b as _,eX as N,f as h,c as D,w as v,eZ as K,aV as E,d9 as M,d5 as q,da as G,at as H}from"./outputWidgets.9a494812.js";import{b as P,r as X,c as Z,d as j}from"./FormRunner.8c2bdeb2.js";import{A as z}from"./api.aa94c2fb.js";import{a as J}from"./asyncComputed.63db5c85.js";import{u as R}from"./uuid.82664d45.js";import{L as O}from"./CircularLoading.000efbc6.js";import{f as Q}from"./api.f41e6bdd.js";import"./fetch.23cd0b1e.js";import"./pubsub.97e68a0d.js";import"./url.5e44ba49.js";import"./Login.vue_vue_type_script_setup_true_lang.bf5b3cba.js";import"./index.677d893c.js";import"./index.c917509f.js";import"./PhArrowClockwise.vue.0c59ee9b.js";import"./WidgetsFrame.e5dc71d8.js";import"./Steps.60689e30.js";import"./Watermark.958ac7fc.js";import"./Card.0f92f334.js";import"./TabPane.edb4c9a3.js";import"./hasIn.1819d28b.js";import"./metadata.dfd3ef3b.js";import"./PhCheckCircle.vue.2183a9d8.js";import"./PhKanban.vue.8ec3a977.js";import"./PhScroll.vue.d464d64e.js";import"./PhWebhooksLogo.vue.a5f4d00f.js";import"./runnerData.7c980e32.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="02a10cc2-4073-444a-8c51-1dd5a08d7403",u._sentryDebugIdIdentifier="sentry-dbid-02a10cc2-4073-444a-8c51-1dd5a08d7403")}catch{}})();const Y={key:0,class:"loading"},$=I({__name:"Form",setup(u){const n=F(),c=S(),y=T({playerKey:R()}),d=f(null),m=f(null),g=f(!1);x(n,()=>{n.name==="form"&&A()});const{loading:p,result:t,error:w,refetch:A}=J(async()=>{y.playerKey=R();const r=n.path.slice(1),e=await Q(r);if(!e){c.push({name:"error",params:{status:"404"}});return}const o=n.query[z];if(!e.isInitial&&!o){g.value=!0;return}const s=new Z({formRunnerData:e,userManager:C,logService:null,connectionManager:new j(e.id,"player",n.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:l=>m.value=l,onStackTraceUpdate:null,onStateUpdate:l=>d.value=l}),i=s.getState();return m.value=i.passwordlessUser,d.value=i.formState,{runnerData:e,controller:s}}),U=L(()=>{const r=!p,e=!!w,o=!t||d.value===null;return r&&(e||o)});V(()=>{var r,e,o,s,i;U.value&&c.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(i=(o=t.value)==null?void 0:o.runnerData.welcomeTitle)!=null?i:(s=t.value)==null?void 0:s.runnerData.title)});function b(r,e){X("player",c,r,e)}B(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",k)}),W(()=>{window.removeEventListener("beforeunload",k)});const k=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var o,s,i,l;return a(p)?(_(),N("div",Y,[h(O)])):g.value?(_(),D(a(G),{key:1,class:"unset-thread-container",vertical:""},{default:v(()=>[h(a(M),null,{default:v(()=>[E("Cannot open this link directly")]),_:1}),h(a(q),{class:"message"},{default:v(()=>[E(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):a(t)&&a(t).runnerData&&d.value&&!a(w)&&!a(p)?(_(),D(P,{key:y.playerKey,"form-runner-data":a(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":(o=m.value)==null?void 0:o.claims.email,onRedirect:b,onActionClicked:(s=a(t))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=a(t))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=a(t))==null?void 0:l.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):K("",!0)}}});const Ue=H($,[["__scopeId","data-v-b8fb7325"]]);export{Ue as default};
//# sourceMappingURL=Form.74196e0f.js.map
