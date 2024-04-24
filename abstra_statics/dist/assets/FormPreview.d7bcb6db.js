import{u as C}from"./index.4b50fa56.js";import{d as E,J as U,b as u,ew as f,e as o,eH as g,eC as W,eD as q,x as S,eK as M,eE as P,r as v,u as t,c as A,f as R,eN as B}from"./outputWidgets.60e2cfb3.js";import{b as N,c as V,d as $,r as L}from"./FormRunner.5fbaeff1.js";import{a as H}from"./asyncComputed.66fb612f.js";import{L as O}from"./CircularLoading.8e018f34.js";import{F as T}from"./forms.27a11ac2.js";import{W as j}from"./workspaces.805af0bf.js";import"./envVars.98b3ca31.js";import"./fetch.0c15122e.js";import"./pubsub.b80b2845.js";import"./url.2d1f0441.js";import"./Login.vue_vue_type_script_setup_true_lang.a422595d.js";import"./Link.e1eb3835.js";import"./Base.fa2c0c3a.js";import"./index.79b26aef.js";import"./PlayerNavbar.3eefd106.js";import"./PhKanban.vue.687b6d70.js";import"./PhSignOut.vue.4eba92a2.js";import"./Text.6116aa28.js";import"./index.1644cd3b.js";import"./Paragraph.5431ef62.js";import"./Title.7bef409e.js";import"./index.d1aa13e4.js";import"./WidgetsFrame.e875ceaa.js";import"./Steps.79137618.js";import"./PhInfo.vue.ffa2c1ac.js";import"./Card.088b46ac.js";import"./TabPane.c58ae13f.js";import"./hasIn.e586edaf.js";import"./record.70fbfcb3.js";import"./runnerData.a86c30fb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="5d919512-0641-490d-8f7c-1f1046c6df38",e._sentryDebugIdIdentifier="sentry-dbid-5d919512-0641-490d-8f7c-1f1046c6df38")}catch{}})();const F=e=>(W("data-v-3e46b76c"),e=e(),q(),e),J={class:"error"},K=F(()=>o("h1",{class:"error-header"},"Error",-1)),z={class:"error-body"},G={class:"error-message"},Q={class:"error-details"},X=F(()=>o("span",null,"Reload",-1)),Y=[X],Z=E({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:a}){const s=e,n=U(()=>s.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function c(){a("reload")}return(h,m)=>(u(),f("div",J,[K,o("div",z,[o("div",G,[o("p",null,g(n.value),1),o("p",Q,g(e.error.name)+": "+g(e.error.message),1)]),o("div",{class:"error-actions"},[o("button",{class:"btn btn-primary",onClick:c},Y)])])]))}});const ee=S(Z,[["__scopeId","data-v-3e46b76c"]]),re={class:"page"},oe={key:1,class:"error"},te={key:2,style:{width:"100%",height:"100%",display:"flex"}},ae={style:{width:"100%",height:"100%",display:"flex"}},se=E({__name:"FormPreview",setup(e){const a=M(),s=P(),n=v(null),c=v(null),h=s.query,m=v(null);function I(r,i){L("preview",a,r,i)}const{result:_,loading:x,refetch:y,error:w}=H(async()=>{const[r,i]=await Promise.all([T.get(s.params.id),j.get()]),l=new V({formRunnerData:r.makeRunnerData(i),queryParams:h,userManager:C,connectionManager:new $(r.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:I,onAuthUpdate:d=>m.value=d,onStateUpdate:d=>n.value=d,logService:null,onStackTraceUpdate:null});c.value=r.makeRunnerData(i);const p=l.getState();return n.value=p.formState,m.value=p.passwordlessUser,B({form:r,workspace:i,controller:l})}),D=async({id:r})=>{await a.push({params:{id:r},name:"formPreview",query:s.query}),y()};return(r,i)=>{var l,p,d,b,k;return u(),f("div",re,[t(x)||!n.value||!c.value?(u(),A(O,{key:0})):t(w)?(u(),f("div",oe,[R(ee,{error:t(w),onReload:t(y)},null,8,["error","onReload"])])):(u(),f("main",te,[o("div",ae,[R(N,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":c.value,"form-state":n.value,"user-email":(l=m.value)==null?void 0:l.claims.email,onUpdateWidgetErrors:(p=t(_))==null?void 0:p.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(_))==null?void 0:d.controller.updateWidgetValue,onActionClicked:(b=t(_))==null?void 0:b.controller.handleActionClick,onNavigate:D,onLogout:(k=t(_))==null?void 0:k.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"])])]))])}}});const Be=S(se,[["__scopeId","data-v-a7c36a64"]]);export{Be as default};
//# sourceMappingURL=FormPreview.d7bcb6db.js.map
