import{u as H}from"./index.2273455d.js";import{d as k,X as w,H as g,b as a,eu as n,dj as P,ew as D,ez as L,e as t,eD as S,eE as V,eF as $,v as E,f as b,u as c,aq as U,eI as W,eA as Z,r as F,c as q,eK as N}from"./outputWidgets.0fcc4832.js";import{b as z,c as j,d as T,r as O}from"./FormRunner.321b9645.js";import{a as G}from"./asyncComputed.8a68a021.js";import{L as K}from"./CircularLoading.8f432a73.js";import{F as X}from"./forms.8c481dfe.js";import{W as J}from"./workspaces.be144914.js";import"./envVars.d4deafe0.js";import"./pubsub.ec35bb48.js";import"./fetch.bcda5c1e.js";import"./url.58ed6757.js";import"./Passwordless.931fab85.js";import"./index.6ba7e2dd.js";import"./PhArrowClockwise.vue.7916384e.js";import"./PlayerNavbar.5fd103bd.js";import"./PhKanban.vue.9c5316e7.js";import"./PhSignOut.vue.6aa9ab20.js";import"./Text.4d1a9b47.js";import"./index.6be9f481.js";import"./Link.fbc81c0a.js";import"./Paragraph.1f759319.js";import"./Title.694ed3c8.js";import"./index.2b7e9891.js";import"./WidgetsFrame.6666d2cc.js";import"./Steps.bf2405b8.js";import"./PhInfo.vue.d11551fa.js";import"./Card.5108872c.js";import"./index.1304cd8f.js";import"./TabPane.8ac32395.js";import"./hasIn.82f707c7.js";import"./record.1fa21a6f.js";import"./runnerData.a481e1a6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="2ef51c6d-b0a7-4e47-8534-18fda637bdbf",e._sentryDebugIdIdentifier="sentry-dbid-2ef51c6d-b0a7-4e47-8534-18fda637bdbf")}catch{}})();const Q=["width","height","fill","transform"],Y={key:0},ee=t("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),re=[ee],te={key:1},oe=t("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),ae=t("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),ne=[oe,ae],se={key:2},le=t("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),ie=[le],de={key:3},ce=t("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ue=[ce],pe={key:4},me=t("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),_e=[me],fe={key:5},ve=t("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),ge=[ve],he={name:"PhArrowLeft"},ye=k({...he,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,i=w("weight","regular"),s=w("size","1em"),u=w("color","currentColor"),h=w("mirrored",!1),l=g(()=>{var o;return(o=r.weight)!=null?o:i}),y=g(()=>{var o;return(o=r.size)!=null?o:s}),p=g(()=>{var o;return(o=r.color)!=null?o:u}),x=g(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(o,A)=>(a(),n("svg",L({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:p.value,transform:x.value},o.$attrs),[P(o.$slots,"default"),l.value==="bold"?(a(),n("g",Y,re)):l.value==="duotone"?(a(),n("g",te,ne)):l.value==="fill"?(a(),n("g",se,ie)):l.value==="light"?(a(),n("g",de,ue)):l.value==="regular"?(a(),n("g",pe,_e)):l.value==="thin"?(a(),n("g",fe,ge)):D("",!0)],16,Q))}}),B=e=>(V("data-v-3e46b76c"),e=e(),$(),e),we={class:"error"},be=B(()=>t("h1",{class:"error-header"},"Error",-1)),ke={class:"error-body"},xe={class:"error-message"},Ae={class:"error-details"},Se=B(()=>t("span",null,"Reload",-1)),Fe=[Se],Ee=k({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const i=e,s=g(()=>i.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function u(){r("reload")}return(h,l)=>(a(),n("div",we,[be,t("div",ke,[t("div",xe,[t("p",null,S(s.value),1),t("p",Ae,S(e.error.name)+": "+S(e.error.message),1)]),t("div",{class:"error-actions"},[t("button",{class:"btn btn-primary",onClick:u},Fe)])])]))}});const Me=E(Ee,[["__scopeId","data-v-3e46b76c"]]),Re=k({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(i,s)=>(a(),n("button",{class:"back-btn",onClick:s[0]||(s[0]=u=>r("exitFullscreenPreview"))},[b(c(ye),{size:20,color:"#5A677A"}),U(" Editor ")]))}});const Be=E(Re,[["__scopeId","data-v-f34f7ac4"]]),Ie={class:"page"},Ce={key:1,class:"error"},He={key:2,style:{width:"100%",height:"100%",display:"flex"}},Pe={style:{width:"100%",height:"100%",display:"flex"}},De=k({__name:"FormPreview",setup(e){const r=W(),i=Z(),s=F(null),u=F(null),h=i.query,l=F(null);function y(d,m){O("preview",r,d,m)}const{result:p,loading:x,refetch:o,error:A}=G(async()=>{const[d,m]=await Promise.all([X.get(i.params.id),J.get()]),f=new j({formRunnerData:d.makeRunnerData(m),queryParams:h,userManager:H,connectionManager:new T(d.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:y,onAuthUpdate:_=>l.value=_,onStateUpdate:_=>s.value=_,logService:null,onStackTraceUpdate:null});u.value=d.makeRunnerData(m);const v=f.getState();return s.value=v.formState,l.value=v.passwordlessUser,N({form:d,workspace:m,controller:f})}),I=async({id:d})=>{await r.push({params:{id:d},name:"formPreview",query:i.query}),o()},C=()=>{r.push(`/_editor/form/${encodeURIComponent(i.params.id)}`)};return(d,m)=>{var f,v,_,M,R;return a(),n("div",Ie,[c(x)||!s.value||!u.value?(a(),q(K,{key:0})):c(A)?(a(),n("div",Ce,[b(Me,{error:c(A),onReload:c(o)},null,8,["error","onReload"])])):(a(),n("main",He,[t("div",Pe,[b(z,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":u.value,"form-state":s.value,"user-email":(f=l.value)==null?void 0:f.claims.email,onUpdateWidgetErrors:(v=c(p))==null?void 0:v.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(_=c(p))==null?void 0:_.controller.updateWidgetValue,onActionClicked:(M=c(p))==null?void 0:M.controller.handleActionClick,onNavigate:I,onLogout:(R=c(p))==null?void 0:R.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),b(Be,{onExitFullscreenPreview:C})])]))])}}});const _r=E(De,[["__scopeId","data-v-2b94eb6e"]]);export{_r as default};
//# sourceMappingURL=FormPreview.f187a48c.js.map
