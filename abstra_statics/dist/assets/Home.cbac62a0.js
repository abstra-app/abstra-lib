import{W as g}from"./Watermark.181ab4c5.js";import{i as h}from"./metadata.f12d99fc.js";import{F as k}from"./PhArrowSquareOut.vue.ecb51b55.js";import{d as b,eH as w,f as x,u as e,W as m,b as o,w as r,R as v,o as s,c as p,ax as u,cU as f,aJ as C,ew as D,d0 as _,ex as I,et as F,$ as H}from"./vue-router.d27f3fb8.js";import{u as T}from"./workspaceStore.6d336b4b.js";import"./index.d22b514b.js";import{C as W}from"./Card.75ec23ff.js";import"./router.3aacafac.js";import"./PhCheckCircle.vue.6821087a.js";import"./PhKanban.vue.9982e036.js";import"./PhWebhooksLogo.vue.f997f2e2.js";import"./api.ab86b990.js";import"./runnerData.6e6e849e.js";import"./url.56b27af1.js";import"./TabPane.4b8ef734.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="760d3209-b225-475a-af43-512ec7b24db5",t._sentryDebugIdIdentifier="sentry-dbid-760d3209-b225-475a-af43-512ec7b24db5")}catch{}})();const z={key:0,class:"home-container"},B=b({__name:"Home",setup(t){const n=w(),c=T(),d=x(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(c).state.workspace?(s(),m("div",z,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[d.value.length===0?(s(),p(e(f),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[u(" There are no forms available for you. ")]),_:1})):(s(!0),m(C,{key:1},D(d.value,i=>(s(),p(e(W),{key:i.id,class:"form-card",onClick:N=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),p(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(f),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[u(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const O=H(B,[["__scopeId","data-v-2ee244f8"]]);export{O as default};
//# sourceMappingURL=Home.cbac62a0.js.map
