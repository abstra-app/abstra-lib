import{d as g,ey as v,ez as b,r as k,b as r,c as s,w as a,u as e,f as u,ev as n}from"./outputWidgets.2b4b82be.js";import{S as h,L as w}from"./SmartConsole.951d0bf2.js";import{a as x}from"./asyncComputed.e9b8a08c.js";import{H as B}from"./hooks.333c45da.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.2e763cea.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.0d18b790.js";import{B as I}from"./BaseLayout.61e79828.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.b3af2b42.js";import{c as D}from"./index.206573b8.js";import{A as _,T as R}from"./TabPane.9df01657.js";import"./forms.6997ac96.js";import"./activeRecord.790ec303.js";import"./pubsub.b36d0359.js";import"./dashes.9728014c.js";import"./runnerData.5d070ed3.js";import"./jobs.d3b9184a.js";import"./workspaces.37cd4d05.js";import"./url.263b2bd4.js";import"./icons.8f025710.js";import"./Title.1b0f446a.js";import"./index.d709f3be.js";import"./uuid.80d0da87.js";import"./ant-design.4971c1a7.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.acc78b01.js";import"./RunButton.vue_vue_type_script_setup_true_lang.a744e8e9.js";import"./index.d97b1d2e.js";import"./index.f0617e01.js";import"./CollapsePanel.81e5ab29.js";import"./index.c00456db.js";import"./index.fbf769d9.js";import"./index.8f292cb5.js";import"./Form.7342162d.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="37c38851-0637-445f-8e56-0857156a9c12",i._sentryDebugIdIdentifier="sentry-dbid-37c38851-0637-445f-8e56-0857156a9c12")}catch{}})();const le=g({__name:"HookEditor",setup(i){const m=v(),l=b(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),f=w.create();return($,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(p=c.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.880b2b4a.js.map
