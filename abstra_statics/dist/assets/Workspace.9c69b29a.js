import{d as b,eA as w,eB as k,r as x,G as y,b as n,c as l,w as t,ev as h,eC as I,u as d,bf as C,ez as f,f as s,I as B,aq as N,eD as D,bq as S,bh as V,v as A,eE as E,eF as L,e as g,a as p,ex as T}from"./outputWidgets.f2ae36a0.js";import{h as $,s as q}from"./icons.630387be.js";import{_ as z}from"./logo.084e5d7c.js";import{B as F}from"./BaseLayout.f6efbdb9.js";import{N as H}from"./NavbarControls.a4296e5d.js";import{c as M}from"./index.c4391ec5.js";import"./asyncComputed.543cc13a.js";import"./index.10fac5d5.js";import"./pubsub.815fdbd4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5d18dbfa.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.77143fbf.js";import"./ant-design.e027ec60.js";import"./index.60f2d2be.js";import"./Title.1747a412.js";import"./Text.17250f4c.js";import"./index.90a1882b.js";import"./Link.56508356.js";import"./index.7b7ef859.js";import"./workspaces.f2974dab.js";import"./record.104738e2.js";import"./url.157ba346.js";import"./popupNotifcation.3a0d0be7.js";import"./CircularLoading.82c8da13.js";import"./index.fca9318f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="66266564-b07c-4ea2-a3ff-1eb6ba382273",e._sentryDebugIdIdentifier="sentry-dbid-66266564-b07c-4ea2-a3ff-1eb6ba382273")}catch{}})();const R=b({__name:"Sidebar",setup(e){var m;const o=w(),c=k(),r=x((m=c.name)!=null?m:"forms"),u=y(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:q,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),l(d(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),h(S,null,I(u.value,a=>(n(),l(d(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const W={},v=e=>(E("data-v-81cd596e"),e=e(),L(),e),G={class:"logo"},P=v(()=>g("img",{src:z,alt:"Abstra cloud logo"},null,-1)),j=v(()=>g("span",null," Abstra ",-1)),J=[P,j];function K(e,o){return n(),h("div",G,J)}const O=A(W,[["render",K],["__scopeId","data-v-81cd596e"]]),ke=b({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),l(F,null,{navbar:t(()=>[s(d(M),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(H,{"show-github-stars":""},{default:t(()=>[T("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(R,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{ke as default};
//# sourceMappingURL=Workspace.9c69b29a.js.map
