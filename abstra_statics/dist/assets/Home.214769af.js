import{g as _}from"./api.aed873dd.js";import{W as g}from"./Watermark.465d9a47.js";import{i as h}from"./metadata.4690b952.js";import{a as b}from"./asyncComputed.308368bf.js";import{W as k}from"./WidgetsFrame.17c73744.js";import{F as w}from"./PhArrowSquareOut.vue.d927feee.js";import{d as v,eM as x,f as C,u as e,o as s,c,w as a,ev as D,b as n,cN as p,ar as f,et as F,eC as I,cV as u,eD as V,ez as W,aD as z,R as N}from"./vue-router.fab2a9a4.js";import"./index.cbbf6ad7.js";import{C as T}from"./Card.efc8b28d.js";import"./router.282818df.js";import"./runnerData.f74c3155.js";import"./url.02f06f39.js";import"./PhCheckCircle.vue.0f8ebfdb.js";import"./PhKanban.vue.02a7ab6b.js";import"./PhWebhooksLogo.vue.de826346.js";import"./TabPane.5e73fc67.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="dd876f43-6b15-43a3-8e33-7bdae3487906",o._sentryDebugIdIdentifier="sentry-dbid-dd876f43-6b15-43a3-8e33-7bdae3487906")}catch{}})();const B=v({__name:"Home",setup(o){const i=x(),{result:t}=b(_),m=C(()=>{var r;return((r=t.value)==null?void 0:r.sidebar.filter(d=>d.id!=="home"))||[]}),y=r=>{i.push({path:`/${r}`})};return(r,d)=>e(t)?(s(),c(k,{key:0,class:"home-container","main-color":e(t).mainColor,theme:e(t).theme,"font-family":e(t).fontFamily},{default:a(()=>[n(e(u),{vertical:"",gap:"large",class:"cards-container"},{default:a(()=>[m.value.length===0?(s(),c(e(p),{key:0,type:"secondary",style:{"font-size":"18px"}},{default:a(()=>[f(" There are no forms available for you. ")]),_:1})):(s(!0),F(z,{key:1},I(m.value,l=>(s(),c(e(T),{key:l.id,class:"form-card",onClick:H=>y(l.path)},{default:a(()=>[n(e(u),{gap:"large",align:"center",justify:"space-between"},{default:a(()=>[(s(),c(V(e(h)(l.type)),{style:{"flex-shrink":"0",width:"22px",height:"18px"}})),n(e(p),{style:{"font-size":"18px","font-weight":"500"}},{default:a(()=>[f(W(l.name),1)]),_:2},1024),n(e(w),{size:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}),n(g,{class:"watermark","page-id":"home",locale:e(t).language},null,8,["locale"])]),_:1},8,["main-color","theme","font-family"])):D("",!0)}});const X=N(B,[["__scopeId","data-v-06807ab2"]]);export{X as default};
//# sourceMappingURL=Home.214769af.js.map
