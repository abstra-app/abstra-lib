import{d as g,ez as v,eA as b,r as k,b as r,c as a,w as s,u as e,f as l,ew as i}from"./outputWidgets.eddbac36.js";import{S as h,L as w}from"./SmartConsole.41c65287.js";import{a as B}from"./asyncComputed.fbd351ba.js";import{H as C}from"./hooks.7f3d2eee.js";import{_ as H}from"./SaveButton.vue_vue_type_script_setup_true_lang.f7559256.js";import{_ as I}from"./DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js";import{B as S}from"./BaseLayout.bab34813.js";import{_ as T,a as x}from"./HookSettings.vue_vue_type_script_setup_true_lang.e1f1e987.js";import{c as A}from"./index.1a0ec4ff.js";import{A as _,T as D}from"./TabPane.05333dfb.js";import"./forms.4b8bb1c1.js";import"./activeRecord.64b754df.js";import"./pubsub.9aea5614.js";import"./dashes.f8c3da60.js";import"./index.cc18f239.js";import"./jobs.ee7e6eb2.js";import"./workspaces.54224ba5.js";import"./icons.08aaa24c.js";import"./Title.7ca27be1.js";import"./index.3475d619.js";import"./uuid.a7963699.js";import"./ant-design.109b29f5.js";import"./index.d099a09e.js";import"./index.31447910.js";import"./index.933610ff.js";import"./index.8318ec36.js";import"./Form.f5163eed.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="3eca0e54-2b79-4559-af98-0a90f7e33138",n._sentryDebugIdIdentifier="sentry-dbid-3eca0e54-2b79-4559-af98-0a90f7e33138")}catch{}})();const ne=g({__name:"HookEditor",setup(n){const m=v(),f=b(),p=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=B(()=>C.get(f.params.hookPath)),c=w.create();return(R,d)=>(r(),a(S,null,{navbar:s(()=>[e(t)?(r(),a(e(A),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[l(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(I,{path:"hooks"}),o.value==="settings"?(r(),a(H,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(T,{key:0,ref_key:"tester",ref:p,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(x,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(u=p.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ne as default};
//# sourceMappingURL=HookEditor.f56fc637.js.map
