import{u as U}from"./index.a297f11a.js";import{d as E,H as C,b as u,eu as f,e as o,eD as g,eE as W,eF as q,v as F,eI as A,eA as M,r as v,u as t,c as P,f as R,eK as B}from"./outputWidgets.a4274208.js";import{b as V,c as $,d as L,r as N}from"./FormRunner.d1133c9e.js";import{a as H}from"./asyncComputed.1c6d7e39.js";import{L as O}from"./CircularLoading.cf861b43.js";import{F as T}from"./forms.64ff0d32.js";import{W as j}from"./workspaces.0a8895b2.js";import"./envVars.066ece5b.js";import"./pubsub.334cfdcd.js";import"./fetch.38be8345.js";import"./url.0b7a4622.js";import"./Passwordless.713af3d3.js";import"./index.58f77f81.js";import"./PhArrowClockwise.vue.1129e3ce.js";import"./PlayerNavbar.7fa26ce5.js";import"./PhKanban.vue.4ea031b6.js";import"./PhSignOut.vue.f6b08388.js";import"./Text.8c382bb3.js";import"./index.01962fb6.js";import"./Link.579f917a.js";import"./Paragraph.e85a4f98.js";import"./Title.abda2f20.js";import"./index.b25dd5c3.js";import"./WidgetsFrame.d6df4f13.js";import"./Steps.a35f3a18.js";import"./PhInfo.vue.5a4960d0.js";import"./Card.c5d37bed.js";import"./index.74a3dbe8.js";import"./TabPane.d5dc7c2f.js";import"./hasIn.224ccf9a.js";import"./record.697b00e7.js";import"./runnerData.01c4c713.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3a3e13dd-fe16-42c7-983d-4b65fb924986",e._sentryDebugIdIdentifier="sentry-dbid-3a3e13dd-fe16-42c7-983d-4b65fb924986")}catch{}})();const I=e=>(W("data-v-3e46b76c"),e=e(),q(),e),K={class:"error"},z=I(()=>o("h1",{class:"error-header"},"Error",-1)),G={class:"error-body"},J={class:"error-message"},Q={class:"error-details"},X=I(()=>o("span",null,"Reload",-1)),Y=[X],Z=E({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:a}){const s=e,n=C(()=>s.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function l(){a("reload")}return(h,m)=>(u(),f("div",K,[z,o("div",G,[o("div",J,[o("p",null,g(n.value),1),o("p",Q,g(e.error.name)+": "+g(e.error.message),1)]),o("div",{class:"error-actions"},[o("button",{class:"btn btn-primary",onClick:l},Y)])])]))}});const ee=F(Z,[["__scopeId","data-v-3e46b76c"]]),re={class:"page"},oe={key:1,class:"error"},te={key:2,style:{width:"100%",height:"100%",display:"flex"}},ae={style:{width:"100%",height:"100%",display:"flex"}},se=E({__name:"FormPreview",setup(e){const a=A(),s=M(),n=v(null),l=v(null),h=s.query,m=v(null);function S(r,i){N("preview",a,r,i)}const{result:_,loading:D,refetch:y,error:w}=H(async()=>{const[r,i]=await Promise.all([T.get(s.params.id),j.get()]),c=new $({formRunnerData:r.makeRunnerData(i),queryParams:h,userManager:U,connectionManager:new L(r.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:S,onAuthUpdate:d=>m.value=d,onStateUpdate:d=>n.value=d,logService:null,onStackTraceUpdate:null});l.value=r.makeRunnerData(i);const p=c.getState();return n.value=p.formState,m.value=p.passwordlessUser,B({form:r,workspace:i,controller:c})}),x=async({id:r})=>{await a.push({params:{id:r},name:"formPreview",query:s.query}),y()};return(r,i)=>{var c,p,d,b,k;return u(),f("div",re,[t(D)||!n.value||!l.value?(u(),P(O,{key:0})):t(w)?(u(),f("div",oe,[R(ee,{error:t(w),onReload:t(y)},null,8,["error","onReload"])])):(u(),f("main",te,[o("div",ae,[R(V,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":l.value,"form-state":n.value,"user-email":(c=m.value)==null?void 0:c.claims.email,onUpdateWidgetErrors:(p=t(_))==null?void 0:p.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(_))==null?void 0:d.controller.updateWidgetValue,onActionClicked:(b=t(_))==null?void 0:b.controller.handleActionClick,onNavigate:x,onLogout:(k=t(_))==null?void 0:k.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"])])]))])}}});const Ve=F(se,[["__scopeId","data-v-a7c36a64"]]);export{Ve as default};
//# sourceMappingURL=FormPreview.bc1f8d08.js.map
