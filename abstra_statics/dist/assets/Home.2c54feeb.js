import{W as g}from"./Watermark.5c4d5194.js";import{i as h}from"./metadata.b8fdd8de.js";import{F as k}from"./PhArrowSquareOut.vue.c00637e2.js";import{d as b,ek as w,f as x,u as e,W as m,b as o,w as r,R as v,o as s,c as d,ax as u,d1 as f,aJ as C,e9 as D,d9 as _,ea as I,e6 as F,$ as T}from"./vue-router.9bea9756.js";import{u as W}from"./workspaceStore.85c299fc.js";import"./index.fcb0cc36.js";import{C as z}from"./Card.db192656.js";import"./PhBug.vue.d153aef5.js";import"./PhCheckCircle.vue.c7a565a5.js";import"./PhKanban.vue.080a86d4.js";import"./PhWebhooksLogo.vue.465d365d.js";import"./url.a36217cf.js";import"./TabPane.1905f1ea.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="a92e44de-8739-4a1b-a019-b4d25c3f7557",t._sentryDebugIdIdentifier="sentry-dbid-a92e44de-8739-4a1b-a019-b4d25c3f7557")}catch{}})();const B={key:0,class:"home-container"},H=b({__name:"Home",setup(t){const n=w(),c=W(),p=x(()=>{var a;return((a=c.state.workspace)==null?void 0:a.sidebar.filter(l=>l.id!=="home"))||[]}),y=a=>{n.push({path:`/${a}`})};return(a,l)=>e(c).state.workspace?(s(),m("div",B,[o(e(_),{vertical:"",gap:"large",class:"cards-container"},{default:r(()=>[p.value.length===0?(s(),d(e(f),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:r(()=>[u(" There are no forms available for you. ")]),_:1})):(s(!0),m(C,{key:1},D(p.value,i=>(s(),d(e(z),{key:i.id,class:"form-card",onClick:N=>y(i.path)},{default:r(()=>[o(e(_),{gap:"large",align:"center",justify:"space-between"},{default:r(()=>[(s(),d(I(e(h)(i.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),o(e(f),{style:{"font-size":"18px","font-weight":"500"}},{default:r(()=>[u(F(i.name),1)]),_:2},1024),o(e(k),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),o(g,{class:"watermark","page-id":"home",locale:e(c).state.workspace.language},null,8,["locale"])])):v("",!0)}});const M=T(H,[["__scopeId","data-v-2ee244f8"]]);export{M as default};
//# sourceMappingURL=Home.2c54feeb.js.map
