import{d as _,H as k,b as c,ev as d,e as a,eD as u,eE as $,eF as D,v as m,a as C,f as p,u as t,ar as q,eA as S,eB as A,G as L,r as N,c as M}from"./outputWidgets.274d1699.js";import{L as V}from"./CircularLoading.6cd1664d.js";import{F as H,r as O,R as T}from"./FormRunner.2f7f8912.js";import{x as W}from"./icons.ca292280.js";import{a as w}from"./asyncComputed.a16b1311.js";import{F as j}from"./forms.f1a413fa.js";import{W as G}from"./workspaces.96519d51.js";import"./api.21ea2cd5.js";import"./runnerData.da89f51e.js";import"./url.a5dfefd8.js";import"./Passwordless.20e4405d.js";import"./index.3cb12db3.js";import"./pubsub.2ce77d5f.js";import"./PlayerNavbar.adad1c70.js";import"./ActionButton.e0410fe0.js";import"./WidgetsFrame.715b887a.js";import"./index.70f7f87a.js";import"./Base.9e61dda1.js";import"./Link.7f765239.js";import"./Paragraph.1a80a99a.js";import"./Text.01c64a30.js";import"./Title.75d1eb5b.js";import"./Card.a492d296.js";import"./TabPane.9cda4de2.js";import"./hasIn.2daf6d7d.js";import"./record.f41c7001.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="fa6cb33d-4fa7-4ddc-9c79-fe5c21ea5c4c",e._sentryDebugIdIdentifier="sentry-dbid-fa6cb33d-4fa7-4ddc-9c79-fe5c21ea5c4c")}catch{}})();const x=e=>($("data-v-3e46b76c"),e=e(),D(),e),U={class:"error"},z=x(()=>a("h1",{class:"error-header"},"Error",-1)),J={class:"error-body"},K={class:"error-message"},Q={class:"error-details"},X=x(()=>a("span",null,"Reload",-1)),Y=[X],Z=_({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,s=k(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function i(){r("reload")}return(l,f)=>(c(),d("div",U,[z,a("div",J,[a("div",K,[a("p",null,u(s.value),1),a("p",Q,u(e.error.name)+": "+u(e.error.message),1)]),a("div",{class:"error-actions"},[a("button",{class:"btn btn-primary",onClick:i},Y)])])]))}});const ee=m(Z,[["__scopeId","data-v-3e46b76c"]]),re=_({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(o,s)=>{const i=C("icon");return c(),d("button",{class:"back-btn",onClick:s[0]||(s[0]=l=>r("exitFullscreenPreview"))},[p(i,{class:"icon",path:t(W),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),q(" Editor ")])}}});const te=m(re,[["__scopeId","data-v-a3f31716"]]),oe={class:"page"},se={key:1,class:"error"},ae={key:2,style:{width:"100%",height:"100%",display:"flex"}},ne={style:{width:"100%",height:"100%",display:"flex"}},ce=_({__name:"FormPreview",setup(e){const r=S(),o=A(),s=L({started:!1});function i(n,g){O("preview",r,n,g)}const l=N(null),{loading:f,result:v,error:h,refetch:y}=w(()=>j.get(o.params.id)),{result:b}=w(()=>G.get()),B=k(()=>T.create(o.params.id)),I=async()=>{var n;if(!s.started){(n=l.value)==null||n.run();return}s.started=!1},F=async({id:n})=>{await r.push({params:{id:n},name:"formPreview",query:o.query}),y()},E=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.id)}`)},R=()=>{s.started=!0},P=()=>{s.started=!1};return(n,g)=>(c(),d("div",oe,[t(f)||!t(v)||!t(b)?(c(),M(V,{key:0})):t(h)?(c(),d("div",se,[p(ee,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(c(),d("main",ae,[a("div",ne,[p(H,{ref_key:"runner",ref:l,form:t(v).makeRunnerData(t(b)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:B.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:F,onLogout:I,onExit:P,onStart:R,onRedirect:i},null,8,["form","params","broker"]),p(te,{onExitFullscreenPreview:E})])]))]))}});const Se=m(ce,[["__scopeId","data-v-63264cab"]]);export{Se as default};
//# sourceMappingURL=FormPreview.850ca281.js.map
