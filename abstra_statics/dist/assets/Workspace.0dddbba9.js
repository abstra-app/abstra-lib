import{d as y,ex as B,ey as C,r as D,H as L,b as s,er as t,bu as h,ez as b,e as l,eA as f,ew as g,f as o,I as v,eu as _,c as w,w as n,u,v as k,eB as $,eC as T,a as A,cb as N,b0 as O}from"./registerWidgets.3fe3e574.js";import{f as V,h as j,j as E,d as H,c as R,m as z,w as F}from"./icons.3f547329.js";import{T as W}from"./Tooltip.ba83726b.js";import{_ as J}from"./logo.084e5d7c.js";import{L as P}from"./LoginBlock.67ce6c02.js";import{_ as U}from"./DocsButton.vue_vue_type_script_setup_true_lang.315d535f.js";import{B as q}from"./BaseLayout.2c29f2de.js";import{c as G}from"./index.fb78a3e8.js";import"./workspaces.822699d6.js";import"./activeRecord.1c8420b0.js";import"./pubsub.6dbde606.js";import"./popupNotifcation.53a2287a.js";import"./asyncComputed.5cb892a4.js";import"./index.ed47c328.js";import"./Title.bb963c89.js";import"./index.084c26cf.js";import"./Form.273c73e9.js";import"./index.239592cd.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="dc6bb078-c58a-4d52-b16c-1ec76178d5be",a._sentryDebugIdIdentifier="sentry-dbid-dc6bb078-c58a-4d52-b16c-1ec76178d5be")}catch{}})();const K={class:"sidebar"},M={class:"section-name"},Q=["onClick"],X={class:"item-name"},Y={key:0,class:"tag soon"},Z={key:1,class:"tag beta"},ee={key:2,class:"tag cloud"},ae=y({__name:"Sidebar",setup(a){var m;const r=B(),p=C(),c=D((m=p.name)!=null?m:"forms"),I=L(()=>[{name:"Runtime",items:[{name:"Forms",icon:V,path:"forms"},{name:"Hooks",icon:j,path:"hooks"},{name:"Jobs",icon:E,path:"jobs"},{name:"Dashes",icon:H,path:"dashes",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:R,path:"style"},{name:"Sidebar",icon:z,path:"sidebar"}]}]),S=i=>{i.unavailable||(r.push(i.path),c.value=i.path)};return(i,_e)=>(s(),t("div",K,[(s(!0),t(h,null,b(I.value,d=>(s(),t("div",{key:d.name,class:"section"},[l("span",M,f(d.name),1),(s(!0),t(h,null,b(d.items,e=>(s(),t("div",{key:e.name,role:"button",class:g(["item",{active:c.value===e.path,disabled:e.unavailable||d.cloud}]),tabindex:"0",onClick:le=>S(e)},[o(v,{class:g(["icon",{disabled:e.unavailable,active:c.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),l("span",X,f(e.name),1),e.unavailable?(s(),t("span",Y,"SOON")):_("",!0),e.beta?(s(),t("span",Z,"BETA")):_("",!0),e.cloud?(s(),t("span",ee,"CLOUD")):_("",!0),e.warning?(s(),w(W,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:n(()=>[o(v,{path:u(F),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):_("",!0)],10,Q))),128))]))),128))]))}});const se=k(ae,[["__scopeId","data-v-279aaccd"]]);const te={},x=a=>($("data-v-81cd596e"),a=a(),T(),a),oe={class:"logo"},ne=x(()=>l("img",{src:J,alt:"Abstra cloud logo"},null,-1)),re=x(()=>l("span",null," Abstra ",-1)),ce=[ne,re];function ie(a,r){return s(),t("div",oe,ce)}const de=k(te,[["render",ie],["__scopeId","data-v-81cd596e"]]),$e=y({__name:"Workspace",setup(a){return(r,p)=>{const c=A("router-view");return s(),w(q,null,{navbar:n(()=>[o(u(G),{style:{padding:"5px 10px"}},{title:n(()=>[o(de)]),extra:n(()=>[o(u(N),{type:"primary",href:"/_editor/workflow"},{default:n(()=>[O("Workflow editor")]),_:1}),o(U),o(P)]),_:1})]),sidebar:n(()=>[o(se,{class:"sidebar"})]),content:n(()=>[o(c)]),_:1})}}});export{$e as default};
//# sourceMappingURL=Workspace.0dddbba9.js.map
