import{d as g,ey as v,ez as b,r as _,b as r,c as s,w as a,u as e,f as n,ev as m}from"./outputWidgets.2df9e511.js";import{S as h,L as w}from"./SmartConsole.0b0370bb.js";import{a as x}from"./asyncComputed.e495495e.js";import{H as B}from"./hooks.a6031391.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.4328508f.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.b9445cbd.js";import{B as I}from"./BaseLayout.37af2166.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.e3d18cc0.js";import{_ as $}from"./Debugger.vue_vue_type_script_setup_true_lang.47f25800.js";import{c as D}from"./index.f95e65f7.js";import{A as k,T as R}from"./TabPane.0049f7e5.js";import"./forms.fd8bcf06.js";import"./activeRecord.36a8fe6a.js";import"./pubsub.35a0e00d.js";import"./dashes.b42b0e47.js";import"./runnerData.7e37b6bc.js";import"./jobs.f5ec92bc.js";import"./workspaces.f1270866.js";import"./url.4a36a667.js";import"./icons.96b46ca5.js";import"./Title.1873e880.js";import"./transButton.21d951e2.js";import"./index.4b084017.js";import"./uuid.ff35896b.js";import"./ant-design.7acaee76.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.59e4c1ff.js";import"./RunButton.vue_vue_type_script_setup_true_lang.af14dd5c.js";import"./index.4aea99c4.js";import"./index.96e01015.js";import"./CollapsePanel.5e1b7637.js";import"./index.55f34527.js";import"./index.ccf48690.js";import"./index.e0535088.js";import"./Form.86cd8023.js";import"./Text.cf87271e.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="4d7607e9-b538-4ae2-8e62-d9d3f073711f",i._sentryDebugIdIdentifier="sentry-dbid-4d7607e9-b538-4ae2-8e62-d9d3f073711f")}catch{}})();const _e=g({__name:"HookEditor",setup(i){const p=v(),l=b(),f=_(null),o=_("test");function y(){p.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),c=w.create();return(A,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(k),{key:"test",tab:"Test"}),n(e(k),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n($),n(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:f,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(u=f.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{_e as default};
//# sourceMappingURL=HookEditor.eccad0e1.js.map
