import{g as O}from"./api.292d851c.js";import{a as A}from"./asyncComputed.2ea08899.js";import{f as d,eG as C,d as h,b as s,c as i,w as l,u as n,ar as f,bV as I,v as w,eA as B,H as D,ev as b,ex as P,e as S,ew as T,bv as N,a$ as R,eC as $,eD as j,I as K}from"./outputWidgets.7cdb44f9.js";import{e as V}from"./icons.e4c053bb.js";import{A as H}from"./ArrowRightOutlined.08fa31dd.js";import{P as z}from"./PlayerNavbar.56ae7416.js";import"./index.49209969.js";import"./index.5fa92f10.js";import{A as g}from"./index.403ab8f7.js";import{T as y}from"./Typography.ed7d8def.js";import{C as E}from"./Card.e68af23e.js";import"./runnerData.174f3803.js";import"./url.f15e35f5.js";import"./Base.91e900fa.js";import"./Link.2d497627.js";import"./Paragraph.3ebe3349.js";import"./Text.5ace53aa.js";import"./Title.7885b22d.js";import"./TabPane.50af93c9.js";import"./hasIn.6e4a2c3d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="a30a6d0a-54e8-4247-b141-ad295d877a6f",a._sentryDebugIdIdentifier="sentry-dbid-a30a6d0a-54e8-4247-b141-ad295d877a6f")}catch{}})();function v(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){F(a,o,t[o])})}return a}function F(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var _=function(e,t){var r=v({},e,t.attrs);return d(C,v({},r,{icon:H}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const G=_,L=h({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(s(),i(n(I),{class:"kanban-btn",onClick:r[0]||(r[0]=o=>e("go-to-kanban"))},{default:l(()=>[f(" Kanban "),d(n(G))]),_:1}))}});const W=w(L,[["__scopeId","data-v-73dd2178"]]),q={class:"page"},J=h({__name:"Home",setup(a){const e=B(),{result:t,loading:r}=A(O),o=D(()=>{var c,p;return(p=(c=t.value)==null?void 0:c.sidebar.filter(u=>u.visible))!=null?p:[]}),k=c=>{e.push({path:`/${c}`})},x=()=>{e.push({name:"playerKanban"})};return(c,p)=>{var u;return s(),b("div",q,[n(t)?(s(),i(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):P("",!0),S("div",{class:"container",style:T({backgroundColor:(u=n(t))==null?void 0:u.theme})},[n(r)?(s(),i(n(N),{key:0})):o.value.length===0?(s(),i(n(y),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:l(()=>[f(" There are no public forms available ")]),_:1})):(s(),i(n(g),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:l(()=>[(s(!0),b(R,null,$(o.value,m=>(s(),i(n(E),{key:m.id,class:"form-card",onClick:M=>k(m.path)},{default:l(()=>[d(n(g),{gap:"large",align:"center",justify:"space-between"},{default:l(()=>[d(n(y),{style:{"font-size":"18px","font-weight":"500"}},{default:l(()=>[f(j(m.name),1)]),_:2},1024),d(K,{path:n(V),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),d(W,{onGoToKanban:x})],4)])}}});const _e=w(J,[["__scopeId","data-v-c916dcb9"]]);export{_e as default};
//# sourceMappingURL=Home.b837ec62.js.map
