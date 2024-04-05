import{u as H}from"./index.79a6117b.js";import{d as b,X as w,H as f,b as a,eu as n,dj as P,ew as L,ez as D,e as t,eD as S,eE as V,eF as $,v as E,f as k,u as d,aq as U,eI as W,eA as Z,r as F,c as q,eL as N}from"./outputWidgets.3681a2a5.js";import{b as z,c as j,d as T,r as O}from"./FormRunner.2d0aebb7.js";import{a as G}from"./asyncComputed.317e87c5.js";import{L as X}from"./CircularLoading.7ff8c198.js";import{F as J}from"./forms.1c8b082a.js";import{W as K}from"./workspaces.558330e2.js";import"./envVars.8abde7e8.js";import"./pubsub.916b1e4d.js";import"./fetch.d0b5bb7a.js";import"./url.ec571b6b.js";import"./Passwordless.bbe75d55.js";import"./index.3b066f4a.js";import"./PhArrowClockwise.vue.9fcfaa90.js";import"./PlayerNavbar.eeb66ae5.js";import"./PhKanban.vue.792b9c22.js";import"./PhSignOut.vue.3019c4e7.js";import"./Text.1bf2a6e4.js";import"./index.28b53c50.js";import"./Link.5ffe898a.js";import"./Paragraph.326f3875.js";import"./Title.142e78f1.js";import"./index.b62ed045.js";import"./WidgetsFrame.eeed42f0.js";import"./Steps.7e03227f.js";import"./PhInfo.vue.f717cf1a.js";import"./Card.f6d00432.js";import"./index.e0dbbf8d.js";import"./TabPane.ad3a7f71.js";import"./hasIn.127ddf2a.js";import"./record.220fa006.js";import"./runnerData.f97328a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="5356d9ce-4531-4c82-ac58-c9fe4072c804",e._sentryDebugIdIdentifier="sentry-dbid-5356d9ce-4531-4c82-ac58-c9fe4072c804")}catch{}})();const Q=["width","height","fill","transform"],Y={key:0},ee=t("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),re=[ee],te={key:1},oe=t("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),ae=t("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),ne=[oe,ae],se={key:2},le=t("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),ie=[le],ce={key:3},de=t("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ue=[de],pe={key:4},me=t("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),_e=[me],ve={key:5},ge=t("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),fe=[ge],he={name:"PhArrowLeft"},ye=b({...he,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,i=w("weight","regular"),s=w("size","1em"),u=w("color","currentColor"),h=w("mirrored",!1),l=f(()=>{var o;return(o=r.weight)!=null?o:i}),y=f(()=>{var o;return(o=r.size)!=null?o:s}),p=f(()=>{var o;return(o=r.color)!=null?o:u}),x=f(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(o,A)=>(a(),n("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:p.value,transform:x.value},o.$attrs),[P(o.$slots,"default"),l.value==="bold"?(a(),n("g",Y,re)):l.value==="duotone"?(a(),n("g",te,ne)):l.value==="fill"?(a(),n("g",se,ie)):l.value==="light"?(a(),n("g",ce,ue)):l.value==="regular"?(a(),n("g",pe,_e)):l.value==="thin"?(a(),n("g",ve,fe)):L("",!0)],16,Q))}}),B=e=>(V("data-v-3e46b76c"),e=e(),$(),e),we={class:"error"},ke=B(()=>t("h1",{class:"error-header"},"Error",-1)),be={class:"error-body"},xe={class:"error-message"},Ae={class:"error-details"},Se=B(()=>t("span",null,"Reload",-1)),Fe=[Se],Ee=b({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const i=e,s=f(()=>i.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function u(){r("reload")}return(h,l)=>(a(),n("div",we,[ke,t("div",be,[t("div",xe,[t("p",null,S(s.value),1),t("p",Ae,S(e.error.name)+": "+S(e.error.message),1)]),t("div",{class:"error-actions"},[t("button",{class:"btn btn-primary",onClick:u},Fe)])])]))}});const Me=E(Ee,[["__scopeId","data-v-3e46b76c"]]),Re=b({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(i,s)=>(a(),n("button",{class:"back-btn",onClick:s[0]||(s[0]=u=>r("exitFullscreenPreview"))},[k(d(ye),{size:20,color:"#5A677A"}),U(" Editor ")]))}});const Be=E(Re,[["__scopeId","data-v-f34f7ac4"]]),Ie={class:"page"},Ce={key:1,class:"error"},He={key:2,style:{width:"100%",height:"100%",display:"flex"}},Pe={style:{width:"100%",height:"100%",display:"flex"}},Le=b({__name:"FormPreview",setup(e){const r=W(),i=Z(),s=F(null),u=F(null),h=i.query,l=F(null);function y(c,m){O("preview",r,c,m)}const{result:p,loading:x,refetch:o,error:A}=G(async()=>{const[c,m]=await Promise.all([J.get(i.params.id),K.get()]),v=new j({formRunnerData:c.makeRunnerData(m),queryParams:h,userManager:H,connectionManager:new T(c.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:y,onAuthUpdate:_=>l.value=_,onStateUpdate:_=>s.value=_,logService:null,onStackTraceUpdate:null});u.value=c.makeRunnerData(m);const g=v.getState();return s.value=g.formState,l.value=g.passwordlessUser,N({form:c,workspace:m,controller:v})}),I=async({id:c})=>{await r.push({params:{id:c},name:"formPreview",query:i.query}),o()},C=()=>{r.push(`/_editor/form/${encodeURIComponent(i.params.id)}`)};return(c,m)=>{var v,g,_,M,R;return a(),n("div",Ie,[d(x)||!s.value||!u.value?(a(),q(X,{key:0})):d(A)?(a(),n("div",Ce,[k(Me,{error:d(A),onReload:d(o)},null,8,["error","onReload"])])):(a(),n("main",He,[t("div",Pe,[k(z,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":u.value,"form-state":s.value,"user-email":(v=l.value)==null?void 0:v.claims.email,onUpdateWidgetErrors:(g=d(p))==null?void 0:g.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(_=d(p))==null?void 0:_.controller.updateWidgetValue,onActionClicked:(M=d(p))==null?void 0:M.controller.handleActionClick,onNavigate:I,onLogout:(R=d(p))==null?void 0:R.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),k(Be,{onExitFullscreenPreview:C})])]))])}}});const _r=E(Le,[["__scopeId","data-v-2b94eb6e"]]);export{_r as default};
//# sourceMappingURL=FormPreview.e41a9be8.js.map
