import{d as h,eA as w,eB as k,r as x,G as y,b as n,c as l,w as t,ev as b,eC as I,u as d,bf as C,ez as f,f as s,I as B,aq as N,eD as D,bq as S,bh as V,v as A,eE as E,eF as L,e as g,a as p,ex as T}from"./outputWidgets.c7d3adb6.js";import{h as $,s as q}from"./icons.04bb36b4.js";import{_ as z}from"./logo.084e5d7c.js";import{B as F}from"./BaseLayout.4f3efa3f.js";import{N as H}from"./NavbarControls.e0ef4e94.js";import{c as M}from"./index.310cc2e2.js";import"./workspaces.a6d61746.js";import"./record.75c383f2.js";import"./pubsub.83cf89e6.js";import"./url.125f4924.js";import"./popupNotifcation.7f01a27d.js";import"./asyncComputed.503b98af.js";import"./index.69df5117.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a0e6335c.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.a66ede2c.js";import"./ant-design.a9239b18.js";import"./index.8b862542.js";import"./Title.07360565.js";import"./Text.b8f940d0.js";import"./index.d1ce1cd1.js";import"./Link.7cd46e88.js";import"./index.7fe1152d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c6e90656-1f88-4195-8892-ba3b4723a839",e._sentryDebugIdIdentifier="sentry-dbid-c6e90656-1f88-4195-8892-ba3b4723a839")}catch{}})();const R=h({__name:"Sidebar",setup(e){var m;const o=w(),c=k(),r=x((m=c.name)!=null?m:"forms"),u=y(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:q,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),l(d(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),b(S,null,I(u.value,a=>(n(),l(d(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const W={},v=e=>(E("data-v-81cd596e"),e=e(),L(),e),G={class:"logo"},P=v(()=>g("img",{src:z,alt:"Abstra cloud logo"},null,-1)),j=v(()=>g("span",null," Abstra ",-1)),J=[P,j];function K(e,o){return n(),b("div",G,J)}const O=A(W,[["render",K],["__scopeId","data-v-81cd596e"]]),ve=h({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),l(F,null,{navbar:t(()=>[s(d(M),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(H,{"show-github-stars":""},{default:t(()=>[T("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(R,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{ve as default};
//# sourceMappingURL=Workspace.4bc7a19f.js.map
