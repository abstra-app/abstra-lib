import{d as v,ez as w,eA as k,r as m,b as a,eu as s,b6 as u,eB as _,e as p,eC as b,ey as f,f as h,I as g,ew as r,c as x,w as C,u as I,t as D}from"./outputWidgets.63c887f3.js";import{w as B}from"./icons.cc357010.js";import{T as S}from"./Tooltip.9e18677b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="7abd2c31-e9be-4686-bc24-46790b4ad5c6",t._sentryDebugIdIdentifier="sentry-dbid-7abd2c31-e9be-4686-bc24-46790b4ad5c6")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},z={key:1,class:"tag beta"},A={key:2,class:"tag cloud"},L=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),d=k(),l=m((i=d.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),l.value=n.path)};return(n,R)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,c=>(a(),s("div",{key:c.name,class:"section"},[p("span",N,b(c.name),1),(a(!0),s(u,null,_(c.items,e=>(a(),s("div",{key:e.name,role:"button",class:f(["item",{active:l.value===e.path,disabled:e.unavailable||c.cloud}]),tabindex:"0",onClick:F=>y(e)},[h(g,{class:f(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):r("",!0),e.beta?(a(),s("span",z,"BETA")):r("",!0),e.cloud?(a(),s("span",A,"CLOUD")):r("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:C(()=>[h(g,{path:I(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):r("",!0)],10,O))),128))]))),128))]))}});const q=D(L,[["__scopeId","data-v-9c95c206"]]);export{q as S};
//# sourceMappingURL=Sidebar.45810f04.js.map
