import{u as H}from"./index.2697a64c.js";import{d as k,X as w,H as g,b as a,eu as n,dh as P,ew as L,ez as D,e as t,eD as S,eE as V,eF as $,v as E,f as b,u as d,aq as U,eI as W,eA as Z,r as F,c as q,eL as N}from"./outputWidgets.03a0eb82.js";import{b as z,c as j,d as T,r as O}from"./FormRunner.74d4a3fc.js";import{a as G}from"./asyncComputed.e652923a.js";import{L as X}from"./CircularLoading.f1eddf07.js";import{F as J}from"./forms.ef69a7e4.js";import{W as K}from"./workspaces.ee1d4b21.js";import"./envVars.7af696b1.js";import"./pubsub.6bb71d1a.js";import"./fetch.6f46b13f.js";import"./url.68accea7.js";import"./Passwordless.be31e5e6.js";import"./index.67e92bd6.js";import"./PhArrowClockwise.vue.13215ce3.js";import"./PlayerNavbar.2403ae45.js";import"./PhKanban.vue.04d4094b.js";import"./PhSignOut.vue.7ca70600.js";import"./Text.b7558399.js";import"./index.a25208d3.js";import"./Link.3b37094a.js";import"./Paragraph.3fa7f6df.js";import"./Title.8287eb97.js";import"./index.b6701692.js";import"./WidgetsFrame.6d1fd5e3.js";import"./Steps.220ad57e.js";import"./PhInfo.vue.d1d75959.js";import"./Card.77908233.js";import"./index.353d18fc.js";import"./TabPane.304883b0.js";import"./hasIn.768d080d.js";import"./record.21552adf.js";import"./runnerData.cfe506aa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f10c7fc0-9dec-49f4-ba5a-343639b47b8c",e._sentryDebugIdIdentifier="sentry-dbid-f10c7fc0-9dec-49f4-ba5a-343639b47b8c")}catch{}})();const Q=["width","height","fill","transform"],Y={key:0},ee=t("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),re=[ee],te={key:1},oe=t("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),ae=t("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),ne=[oe,ae],se={key:2},le=t("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),ie=[le],ce={key:3},de=t("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ue=[de],pe={key:4},me=t("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),_e=[me],fe={key:5},ve=t("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),ge=[ve],he={name:"PhArrowLeft"},ye=k({...he,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,i=w("weight","regular"),s=w("size","1em"),u=w("color","currentColor"),h=w("mirrored",!1),l=g(()=>{var o;return(o=r.weight)!=null?o:i}),y=g(()=>{var o;return(o=r.size)!=null?o:s}),p=g(()=>{var o;return(o=r.color)!=null?o:u}),x=g(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(o,A)=>(a(),n("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:p.value,transform:x.value},o.$attrs),[P(o.$slots,"default"),l.value==="bold"?(a(),n("g",Y,re)):l.value==="duotone"?(a(),n("g",te,ne)):l.value==="fill"?(a(),n("g",se,ie)):l.value==="light"?(a(),n("g",ce,ue)):l.value==="regular"?(a(),n("g",pe,_e)):l.value==="thin"?(a(),n("g",fe,ge)):L("",!0)],16,Q))}}),B=e=>(V("data-v-3e46b76c"),e=e(),$(),e),we={class:"error"},be=B(()=>t("h1",{class:"error-header"},"Error",-1)),ke={class:"error-body"},xe={class:"error-message"},Ae={class:"error-details"},Se=B(()=>t("span",null,"Reload",-1)),Fe=[Se],Ee=k({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const i=e,s=g(()=>i.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function u(){r("reload")}return(h,l)=>(a(),n("div",we,[be,t("div",ke,[t("div",xe,[t("p",null,S(s.value),1),t("p",Ae,S(e.error.name)+": "+S(e.error.message),1)]),t("div",{class:"error-actions"},[t("button",{class:"btn btn-primary",onClick:u},Fe)])])]))}});const Me=E(Ee,[["__scopeId","data-v-3e46b76c"]]),Re=k({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(i,s)=>(a(),n("button",{class:"back-btn",onClick:s[0]||(s[0]=u=>r("exitFullscreenPreview"))},[b(d(ye),{size:20,color:"#5A677A"}),U(" Editor ")]))}});const Be=E(Re,[["__scopeId","data-v-f34f7ac4"]]),Ie={class:"page"},Ce={key:1,class:"error"},He={key:2,style:{width:"100%",height:"100%",display:"flex"}},Pe={style:{width:"100%",height:"100%",display:"flex"}},Le=k({__name:"FormPreview",setup(e){const r=W(),i=Z(),s=F(null),u=F(null),h=i.query,l=F(null);function y(c,m){O("preview",r,c,m)}const{result:p,loading:x,refetch:o,error:A}=G(async()=>{const[c,m]=await Promise.all([J.get(i.params.id),K.get()]),f=new j({formRunnerData:c.makeRunnerData(m),queryParams:h,userManager:H,connectionManager:new T(c.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:y,onAuthUpdate:_=>l.value=_,onStateUpdate:_=>s.value=_,logService:null,onStackTraceUpdate:null});u.value=c.makeRunnerData(m);const v=f.getState();return s.value=v.formState,l.value=v.passwordlessUser,N({form:c,workspace:m,controller:f})}),I=async({id:c})=>{await r.push({params:{id:c},name:"formPreview",query:i.query}),o()},C=()=>{r.push(`/_editor/form/${encodeURIComponent(i.params.id)}`)};return(c,m)=>{var f,v,_,M,R;return a(),n("div",Ie,[d(x)||!s.value||!u.value?(a(),q(X,{key:0})):d(A)?(a(),n("div",Ce,[b(Me,{error:d(A),onReload:d(o)},null,8,["error","onReload"])])):(a(),n("main",He,[t("div",Pe,[b(z,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":u.value,"form-state":s.value,"user-email":(f=l.value)==null?void 0:f.claims.email,onUpdateWidgetErrors:(v=d(p))==null?void 0:v.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(_=d(p))==null?void 0:_.controller.updateWidgetValue,onActionClicked:(M=d(p))==null?void 0:M.controller.handleActionClick,onNavigate:I,onLogout:(R=d(p))==null?void 0:R.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),b(Be,{onExitFullscreenPreview:C})])]))])}}});const _r=E(Le,[["__scopeId","data-v-2b94eb6e"]]);export{_r as default};
//# sourceMappingURL=FormPreview.74e46b2d.js.map
