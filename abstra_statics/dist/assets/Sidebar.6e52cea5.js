import{d as v,r as w,b as a,c as s,F as u,L as _,H as k,J as m,x as p,N as f,G as b,e as h,I as g,D as r,t as x,w as D,z as I,q as C}from"./registerWidgets.6ceeeb3e.js";import{e as S}from"./icons.485db9b0.js";import{T as B}from"./Tooltip.28cd9577.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="40c1e78c-cc21-4029-9f3c-176156519869",t._sentryDebugIdIdentifier="sentry-dbid-40c1e78c-cc21-4029-9f3c-176156519869")}catch{}})();const N={class:"sidebar"},T={class:"section-name"},O=["onClick"],E={class:"item-name"},L={key:0,class:"tag soon"},V={key:1,class:"tag beta"},z={key:2,class:"tag cloud"},F=v({__name:"Sidebar",props:{sections:null},setup(t){var i;const n=k(),d=m(),l=w((i=d.name)!=null?i:"forms"),y=o=>{o.unavailable||(n.push(o.path),l.value=o.path)};return(o,R)=>(a(),s("div",N,[(a(!0),s(u,null,_(t.sections,c=>(a(),s("div",{key:c.name,class:"section"},[p("span",T,f(c.name),1),(a(!0),s(u,null,_(c.items,e=>(a(),s("div",{key:e.name,role:"button",class:b(["item",{active:l.value===e.path,disabled:e.unavailable||c.cloud}]),tabindex:"0",onClick:q=>y(e)},[h(g,{class:b(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,f(e.name),1),e.unavailable?(a(),s("span",L,"SOON")):r("",!0),e.beta?(a(),s("span",V,"BETA")):r("",!0),e.cloud?(a(),s("span",z,"CLOUD")):r("",!0),e.warning?(a(),x(B,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:D(()=>[h(g,{path:I(S),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):r("",!0)],10,O))),128))]))),128))]))}});const J=C(F,[["__scopeId","data-v-65839ebd"]]);export{J as S};
//# sourceMappingURL=Sidebar.6e52cea5.js.map
