import{d as b,ey as g,ez as v,r as k,b as r,c as s,w as a,u as e,f as u,ev as n}from"./outputWidgets.f29adaca.js";import{S as h,L as w}from"./SmartConsole.7056ee9a.js";import{a as x}from"./asyncComputed.e0f13333.js";import{H as B}from"./hooks.0a8eaafa.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.0b1c491b.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.e46c9b90.js";import{B as I}from"./BaseLayout.f3cc3f37.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.124ff3af.js";import{c as D}from"./index.a238b4ab.js";import{A as _,T as R}from"./TabPane.b18c6c1d.js";import"./forms.39442c1b.js";import"./activeRecord.f4477250.js";import"./pubsub.284d81e0.js";import"./dashes.4eba530b.js";import"./runnerData.6a77a8c1.js";import"./jobs.5ea21dda.js";import"./workspaces.ce98602b.js";import"./url.2107a571.js";import"./icons.855f4b7a.js";import"./Title.58f1fd39.js";import"./index.45c67b2b.js";import"./uuid.380682a5.js";import"./ant-design.7fbd7fc5.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.32caf40f.js";import"./RunButton.vue_vue_type_script_setup_true_lang.c71bd6aa.js";import"./index.99861c01.js";import"./index.de878594.js";import"./CollapsePanel.e7f282a0.js";import"./index.c5fa12d7.js";import"./index.d82d4c0e.js";import"./index.53a8eae9.js";import"./Form.8f0a4d63.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="3f8bd0f8-bd00-4a0c-a903-2e89e5291c3b",i._sentryDebugIdIdentifier="sentry-dbid-3f8bd0f8-bd00-4a0c-a903-2e89e5291c3b")}catch{}})();const le=b({__name:"HookEditor",setup(i){const m=g(),l=v(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),f=w.create();return($,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(p=c.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.be24635e.js.map
