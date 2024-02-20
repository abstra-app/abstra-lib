import{u as P}from"./index.d0984c8b.js";import{d as b,H as U,b as d,ev as m,e as n,eD as y,eE as A,eF as W,v as k,a as $,f as g,u as a,ar as q,eA as M,eB as V,r as w,c as L,eK as N}from"./outputWidgets.59990c05.js";import{b as T,c as H,d as O,r as j}from"./FormRunner.3a6a1c15.js";import{a as K}from"./asyncComputed.8e0b1df8.js";import{L as z}from"./CircularLoading.cbb2fd0e.js";import{F as G}from"./forms.bbff1e5a.js";import{W as E}from"./workspaces.6c8661fb.js";import{y as J}from"./icons.57eb7190.js";import"./pubsub.581fae3d.js";import"./url.2d4b3ba8.js";import"./Passwordless.3f793da0.js";import"./PlayerNavbar.9f5fc460.js";import"./WidgetsFrame.2f980296.js";import"./Steps.978b4077.js";import"./Card.8bb4a3f2.js";import"./TabPane.6b63df71.js";import"./hasIn.a77b4ba2.js";import"./Typography.164def35.js";import"./record.1da16a3c.js";import"./runnerData.fd965c02.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e4f84da3-8bf5-4fb6-8df9-516cf84736aa",e._sentryDebugIdIdentifier="sentry-dbid-e4f84da3-8bf5-4fb6-8df9-516cf84736aa")}catch{}})();const I=e=>(A("data-v-3e46b76c"),e=e(),W(),e),Q={class:"error"},X=I(()=>n("h1",{class:"error-header"},"Error",-1)),Y={class:"error-body"},Z={class:"error-message"},ee={class:"error-details"},re=I(()=>n("span",null,"Reload",-1)),te=[re],oe=b({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const s=e,o=U(()=>s.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function i(){r("reload")}return(h,_)=>(d(),m("div",Q,[X,n("div",Y,[n("div",Z,[n("p",null,y(o.value),1),n("p",ee,y(e.error.name)+": "+y(e.error.message),1)]),n("div",{class:"error-actions"},[n("button",{class:"btn btn-primary",onClick:i},te)])])]))}});const ae=k(oe,[["__scopeId","data-v-3e46b76c"]]),ne=b({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(s,o)=>{const i=$("icon");return d(),m("button",{class:"back-btn",onClick:o[0]||(o[0]=h=>r("exitFullscreenPreview"))},[g(i,{class:"icon",path:a(J),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),q(" Editor ")])}}});const se=k(ne,[["__scopeId","data-v-a3f31716"]]),ie={class:"page"},ce={key:1,class:"error"},le={key:2,style:{width:"100%",height:"100%",display:"flex"}},de={style:{width:"100%",height:"100%",display:"flex"}},ue=b({__name:"FormPreview",setup(e){const r=M(),s=V(),o=w(null),i=w(null),h=s.query,_=w(null);function S(t,c){j("preview",r,t,c)}const{result:f,loading:B,refetch:x,error:F}=K(async()=>{const[t,c,v]=await Promise.all([G.get(s.params.id),E.get(),E.readTestData()]),u=new H({formRunnerData:t.makeRunnerData(c),queryParams:h,userManager:P,connectionManager:new O(t.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:S,onAuthUpdate:l=>_.value=l,onStateUpdate:l=>o.value=l,logService:null,onStackTraceUpdate:null});t.updateInitialState("test_data",v),i.value=t.makeRunnerData(c);const p=u.getState();return o.value=p.formState,_.value=p.passwordlessUser,N({form:t,workspace:c,controller:u})}),D=async({id:t})=>{await r.push({params:{id:t},name:"formPreview",query:s.query}),x()},C=()=>{r.push(`/_editor/form/${encodeURIComponent(s.params.id)}`)};return(t,c)=>{var v,u,p,l,R;return d(),m("div",ie,[a(B)||!o.value||!i.value?(d(),L(z,{key:0})):a(F)?(d(),m("div",ce,[g(ae,{error:a(F),onReload:a(x)},null,8,["error","onReload"])])):(d(),m("main",le,[n("div",de,[g(T,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":i.value,"form-state":o.value,"user-email":(v=_.value)==null?void 0:v.claims.email,onUpdateWidgetErrors:(u=a(f))==null?void 0:u.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(p=a(f))==null?void 0:p.controller.updateWidgetValue,onActionClicked:(l=a(f))==null?void 0:l.controller.handleActionClick,onNavigate:D,onLogout:(R=a(f))==null?void 0:R.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),g(se,{onExitFullscreenPreview:C})])]))])}}});const Pe=k(ue,[["__scopeId","data-v-c5c2a66b"]]);export{Pe as default};
//# sourceMappingURL=FormPreview.baac2ab3.js.map
