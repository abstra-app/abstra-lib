import{u as C}from"./router.679dac58.js";import{b as F,r as I,c as U,d as x}from"./FormRunner.c8281cb2.js";import{A as T}from"./api.0b0100db.js";import{d as B,eB as L,eM as W,D as V,e as w,g as N,f as K,ax as M,$ as q,a1 as G,u as t,o as f,eu as O,b as p,c as k,w as _,ew as P,as as D,cS as $,cO as j,cW as z,S as H}from"./vue-router.944d4283.js";import{a as J}from"./asyncComputed.68fcef5d.js";import{u as R}from"./uuid.a085cf36.js";import{L as Q}from"./CircularLoading.fc3a6d01.js";import{f as X}from"./api.6bab6ceb.js";import"./url.26c4021b.js";import"./Login.vue_vue_type_script_setup_true_lang.40552b6e.js";import"./index.a0341005.js";import"./WidgetsFrame.d0bca923.js";import"./Steps.3d9e6f2b.js";import"./Watermark.0da5b30a.js";import"./Card.4fbd7280.js";import"./TabPane.a4238123.js";import"./fetch.749ce799.js";import"./metadata.de156909.js";import"./PhCheckCircle.vue.fb409c90.js";import"./PhKanban.vue.17eba1e7.js";import"./PhScroll.vue.690b72d3.js";import"./PhWebhooksLogo.vue.2890eaa2.js";import"./runnerData.ff30674e.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[n]="b84eebb3-7267-40fa-82f3-ccb14644cc5f",c._sentryDebugIdIdentifier="sentry-dbid-b84eebb3-7267-40fa-82f3-ccb14644cc5f")}catch{}})();const Y={key:0,class:"loading"},Z=B({__name:"Form",setup(c){const n=L(),l=W(),h=V({playerKey:R()}),S=C(),u=w(null),y=w(!1);N(n,()=>{n.name==="form"&&E()});const{loading:m,result:r,error:v,refetch:E}=J(async()=>{h.playerKey=R();const a=n.path.slice(1),e=await X(a);if(!e){l.push({name:"error",params:{status:"404"}});return}const o=n.query[T];if(!e.isInitial&&!o){y.value=!0;return}const s=new U({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",n.query),onRedirect:g,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),A=K(()=>{const a=!m,e=!!v,o=!r||u.value===null;return a&&(e||o)});M(()=>{var a,e,o,s,i;A.value&&l.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function g(a,e){I("player",l,a,e)}q(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",b)}),G(()=>{window.removeEventListener("beforeunload",b)});const b=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var o,s,i,d;return t(m)?(f(),O("div",Y,[p(Q)])):y.value?(f(),k(t(z),{key:1,class:"unset-thread-container",vertical:""},{default:_(()=>[p(t($),null,{default:_(()=>[D("Cannot open this link directly")]),_:1}),p(t(j),{class:"message"},{default:_(()=>[D(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(v)&&!t(m)?(f(),k(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(o=t(S).user)==null?void 0:o.claims.email,onRedirect:g,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const De=H(Z,[["__scopeId","data-v-7ca44c2f"]]);export{De as default};
//# sourceMappingURL=Form.ced98124.js.map
