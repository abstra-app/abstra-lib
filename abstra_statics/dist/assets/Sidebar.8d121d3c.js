import{d as v,J as k,K as w,r as m,b as a,c as s,F as u,N as _,y as p,O as b,H as f,e as h,I as g,E as c,u as x,x as I,A as C,t as D}from"./registerWidgets.a9b9c198.js";import{b as S}from"./icons.e4ff78f2.js";import{T as B}from"./Tooltip.72b7ac59.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="027c42b3-2a45-45cb-a7f6-11aa1edecdd9",t._sentryDebugIdIdentifier="sentry-dbid-027c42b3-2a45-45cb-a7f6-11aa1edecdd9")}catch{}})();const N={class:"sidebar"},O={class:"section-name"},T=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},A={key:1,class:"tag beta"},F={key:2,class:"tag cloud"},L=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=k(),l=w(),d=m((i=l.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),d.value=n.path)};return(n,R)=>(a(),s("div",N,[(a(!0),s(u,null,_(n.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",O,b(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:f(["item",{active:d.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:z=>y(e)},[h(g,{class:f(["icon",{disabled:e.unavailable,active:d.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):c("",!0),e.beta?(a(),s("span",A,"BETA")):c("",!0),e.cloud?(a(),s("span",F,"CLOUD")):c("",!0),e.warning?(a(),x(B,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:I(()=>[h(g,{path:C(S),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):c("",!0)],10,T))),128))]))),128))]))}});const U=D(L,[["__scopeId","data-v-65839ebd"]]);export{U as S};
//# sourceMappingURL=Sidebar.8d121d3c.js.map
