import{d as b,ez as g,eA as v,r as k,b as r,c as a,w as s,u as e,f as u,ew as n}from"./outputWidgets.a2ba4435.js";import{S as h,L as w}from"./SmartConsole.bb203d4a.js";import{a as B}from"./asyncComputed.6f368a69.js";import{H as C}from"./hooks.192b7606.js";import{_ as H}from"./SaveButton.vue_vue_type_script_setup_true_lang.cc7551b1.js";import{_ as I}from"./DocsButton.vue_vue_type_script_setup_true_lang.264ebed0.js";import{B as S}from"./BaseLayout.3be93fc0.js";import{_ as T,a as x}from"./HookSettings.vue_vue_type_script_setup_true_lang.b1f5ee26.js";import{c as A}from"./index.73e8a114.js";import{A as _,T as D}from"./TabPane.5c2f9b68.js";import"./forms.a8132fec.js";import"./activeRecord.37ea5e23.js";import"./pubsub.8fcfe7c5.js";import"./dashes.484841b2.js";import"./index.a775cbea.js";import"./jobs.9172490b.js";import"./workspaces.402dc483.js";import"./icons.f7e8e357.js";import"./Title.b29d6718.js";import"./index.947c90fc.js";import"./uuid.46e69c6d.js";import"./ant-design.9d2f3950.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.f2c29f5c.js";import"./RunButton.vue_vue_type_script_setup_true_lang.f01fccff.js";import"./index.d437d536.js";import"./index.3c317eee.js";import"./CollapsePanel.dab38855.js";import"./index.94bb3a8a.js";import"./index.7b51c8ca.js";import"./Form.91dd00e5.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="7764df21-59da-4ca7-9518-f77bf6fabfa5",i._sentryDebugIdIdentifier="sentry-dbid-7764df21-59da-4ca7-9518-f77bf6fabfa5")}catch{}})();const fe=b({__name:"HookEditor",setup(i){const m=g(),p=v(),l=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=B(()=>C.get(p.params.hookPath)),c=w.create();return(R,d)=>(r(),a(S,null,{navbar:s(()=>[e(t)?(r(),a(e(A),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=f=>o.value=f)},{default:s(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[u(I,{path:"hooks"}),o.value==="settings"?(r(),a(H,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(T,{key:0,ref_key:"tester",ref:l,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),a(x,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:s(()=>{var f;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(f=l.value)==null?void 0:f.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{fe as default};
//# sourceMappingURL=HookEditor.8e54e7ed.js.map
