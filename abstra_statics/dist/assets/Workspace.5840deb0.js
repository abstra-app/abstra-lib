import{d as y,ez as B,eA as C,r as D,J as L,b as s,et as t,bw as f,eB as h,e as l,eC as b,ey as g,f as o,I as v,ew as _,c as w,w as n,u,x as k,eD as $,eE as T,a as A,cd as N,b2 as E}from"./outputWidgets.d6897520.js";import{f as O,h as V,j,d as R,c as z,m as F,w as H}from"./icons.20b5fc8a.js";import{T as J}from"./Tooltip.446f8c24.js";import{_ as W}from"./logo.084e5d7c.js";import{L as P}from"./LoginBlock.321d46de.js";import{_ as U}from"./DocsButton.vue_vue_type_script_setup_true_lang.51351099.js";import{B as q}from"./BaseLayout.a0b2c3e1.js";import{c as G}from"./index.65fddafd.js";import"./workspaces.fb65e732.js";import"./activeRecord.e97440b4.js";import"./pubsub.e0b33cd4.js";import"./popupNotifcation.d1c280c1.js";import"./asyncComputed.2c363ccc.js";import"./index.59123055.js";import"./Title.9e102f51.js";import"./index.b11f642a.js";import"./Form.a2bccbf0.js";import"./index.dcf9fd0a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="10f83e21-9804-4568-83a1-768f9f14d9ba",a._sentryDebugIdIdentifier="sentry-dbid-10f83e21-9804-4568-83a1-768f9f14d9ba")}catch{}})();const K={class:"sidebar"},M={class:"section-name"},Q=["onClick"],X={class:"item-name"},Y={key:0,class:"tag soon"},Z={key:1,class:"tag beta"},ee={key:2,class:"tag cloud"},ae=y({__name:"Sidebar",setup(a){var m;const r=B(),p=C(),c=D((m=p.name)!=null?m:"forms"),I=L(()=>[{name:"Runtime",items:[{name:"Forms",icon:O,path:"forms"},{name:"Hooks",icon:V,path:"hooks"},{name:"Jobs",icon:j,path:"jobs"},{name:"Dashes",icon:R,path:"dashes",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:z,path:"style"},{name:"Sidebar",icon:F,path:"sidebar"}]}]),S=i=>{i.unavailable||(r.push(i.path),c.value=i.path)};return(i,_e)=>(s(),t("div",K,[(s(!0),t(f,null,h(I.value,d=>(s(),t("div",{key:d.name,class:"section"},[l("span",M,b(d.name),1),(s(!0),t(f,null,h(d.items,e=>(s(),t("div",{key:e.name,role:"button",class:g(["item",{active:c.value===e.path,disabled:e.unavailable||d.cloud}]),tabindex:"0",onClick:le=>S(e)},[o(v,{class:g(["icon",{disabled:e.unavailable,active:c.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),l("span",X,b(e.name),1),e.unavailable?(s(),t("span",Y,"SOON")):_("",!0),e.beta?(s(),t("span",Z,"BETA")):_("",!0),e.cloud?(s(),t("span",ee,"CLOUD")):_("",!0),e.warning?(s(),w(J,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:n(()=>[o(v,{path:u(H),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):_("",!0)],10,Q))),128))]))),128))]))}});const se=k(ae,[["__scopeId","data-v-279aaccd"]]);const te={},x=a=>($("data-v-81cd596e"),a=a(),T(),a),oe={class:"logo"},ne=x(()=>l("img",{src:W,alt:"Abstra cloud logo"},null,-1)),re=x(()=>l("span",null," Abstra ",-1)),ce=[ne,re];function ie(a,r){return s(),t("div",oe,ce)}const de=k(te,[["render",ie],["__scopeId","data-v-81cd596e"]]),$e=y({__name:"Workspace",setup(a){return(r,p)=>{const c=A("router-view");return s(),w(q,null,{navbar:n(()=>[o(u(G),{style:{padding:"5px 10px"}},{title:n(()=>[o(de)]),extra:n(()=>[o(u(N),{type:"primary",href:"/_editor/workflow"},{default:n(()=>[E("Workflow editor")]),_:1}),o(U),o(P)]),_:1})]),sidebar:n(()=>[o(se,{class:"sidebar"})]),content:n(()=>[o(c)]),_:1})}}});export{$e as default};
//# sourceMappingURL=Workspace.5840deb0.js.map
