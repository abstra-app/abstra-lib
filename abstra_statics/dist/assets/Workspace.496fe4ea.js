import{d as w,eA as B,eB as D,H as v,r as N,b as t,c as d,w as o,ev as l,eC as y,u as i,cw as L,aD as g,bf as T,f as s,I as f,ar as V,eD as $,ex as k,bh as E,v as x,eE as P,eF as R,e as I,a as M}from"./outputWidgets.55453a9e.js";import{p as W,w as q,k as F,s as H,a as j,b as G,v as z,c as J,d as K}from"./icons.ed0791e2.js";import{_ as O}from"./logo.084e5d7c.js";import{B as Q}from"./BaseLayout.31ddd240.js";import{N as U}from"./NavbarControls.cb46e910.js";import{c as X}from"./index.8c4d33e9.js";import"./workspaces.bbb10501.js";import"./runnerData.ba922c86.js";import"./url.4e25ee35.js";import"./record.7d163256.js";import"./pubsub.787f3acc.js";import"./asyncComputed.38281583.js";import"./envVars.b8d0d1c1.js";import"./index.a12b13a0.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.af147af7.js";import"./ant-design.55308a47.js";import"./index.4f5383a6.js";import"./Modal.ac60a8e8.js";import"./Typography.2db0cef5.js";import"./Link.ac9560f4.js";import"./Base.98b5207b.js";import"./CloseCircleOutlined.e84f389d.js";import"./index.68cfddce.js";import"./popupNotifcation.0db0fba1.js";import"./index.6c7472f6.js";import"./Text.d8631408.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.411959b5.js";import"./Paragraph.98b1af99.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="706845e4-d4b8-4d5a-9b8e-6f8f2f0f8bcc",e._sentryDebugIdIdentifier="sentry-dbid-706845e4-d4b8-4d5a-9b8e-6f8f2f0f8bcc")}catch{}})();const Y={key:0,class:"collapsible"},Z={key:1,class:"collapsible"},ee=w({__name:"Sidebar",setup(e){const n=B(),p=D();function _(){var m,r;return[(r=(m=b.value.map(a=>a.children).flat().find(a=>a.path===p.path))==null?void 0:m.name)!=null?r:"Workflow"]}const C=v(_),c=N(!1),h=()=>{c.value=!c.value},b=v(()=>[{name:"Project",children:[{name:"Stages",icon:W,path:"/_editor/stages"},{name:"Workflow",icon:q,path:"/_editor/workflow"},{name:"Threads",icon:F,path:"/_editor/kanban"}]},{name:"Settings",children:[{name:"Style",icon:H,path:"/_editor/style"},{name:"Sidebar",icon:j,path:"/_editor/sidebar"},{name:"Requirements",icon:G,path:"/_editor/requirements"},{name:"Env Vars",icon:z,path:"/_editor/env-vars"}]}]),A=u=>{n.push(u.path)};return(u,m)=>(t(),d(i(E),{"inline-collapsed":c.value,"selected-keys":C.value,style:{display:"flex","flex-direction":"column"}},{default:o(()=>[(t(!0),l(g,null,y(b.value,r=>(t(),d(i(L),{key:r.name,title:r.name},{default:o(()=>[(t(!0),l(g,null,y(r.children,a=>(t(),d(i(T),{key:a.name,role:"button",tabindex:"0",onClick:le=>A(a)},{icon:o(()=>[s(f,{path:a.icon,width:"18",height:"18"},null,8,["path"])]),default:o(()=>[V($(a.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1032,["title"]))),128)),c.value?(t(),l("div",Y,[s(f,{path:i(J),onClick:h},null,8,["path"])])):k("",!0),c.value?k("",!0):(t(),l("div",Z,[s(f,{path:i(K),onClick:h},null,8,["path"])]))]),_:1},8,["inline-collapsed","selected-keys"]))}});const te=x(ee,[["__scopeId","data-v-70171c75"]]);const oe={},S=e=>(P("data-v-81cd596e"),e=e(),R(),e),ae={class:"logo"},se=S(()=>I("img",{src:O,alt:"Abstra cloud logo"},null,-1)),ne=S(()=>I("span",null," Abstra ",-1)),re=[se,ne];function ie(e,n){return t(),l("div",ae,re)}const ce=x(oe,[["render",ie],["__scopeId","data-v-81cd596e"]]),We=w({__name:"Workspace",setup(e){return(n,p)=>{const _=M("router-view");return t(),d(Q,{"full-canvas":""},{navbar:o(()=>[s(i(X),{style:{padding:"5px 25px"}},{title:o(()=>[s(ce)]),extra:o(()=>[s(U,{"show-github-stars":"","show-v-s-code-button":""})]),_:1})]),sidebar:o(()=>[s(te,{class:"sidebar"})]),content:o(()=>[s(_)]),_:1})}}});export{We as default};
//# sourceMappingURL=Workspace.496fe4ea.js.map
