import{d as b,ex as g,ey as v,r as k,b as r,c as s,w as a,u as e,f,eu as i}from"./registerWidgets.586d7870.js";import{S as h,L as w}from"./SmartConsole.193d0cdc.js";import{a as x}from"./asyncComputed.74bef820.js";import{H as B}from"./hooks.12b2fb69.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.3c9d2559.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.de14e3bc.js";import{B as I}from"./BaseLayout.2f088047.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.91e20d27.js";import{c as D}from"./index.047f88fc.js";import{a as _,T as R}from"./index.e6226c5c.js";import"./forms.e65f12b7.js";import"./activeRecord.7782e0d2.js";import"./pubsub.ac7c64c1.js";import"./dashes.a1cfb536.js";import"./index.9779cdc8.js";import"./jobs.cecbaae7.js";import"./workspaces.a3f134b8.js";import"./icons.ebb09c51.js";import"./Title.6b7dd81b.js";import"./transButton.53b2ba2d.js";import"./FormItem.fdb122fd.js";import"./uuid.77839399.js";import"./storage.35447a43.js";import"./index.9894b5c0.js";import"./index.6930f37b.js";import"./index.aaaa7cc4.js";import"./index.5e73b889.js";import"./Form.66f043f2.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="3fb941fa-37e7-4245-8991-1df7b7821bd7",n._sentryDebugIdIdentifier="sentry-dbid-3fb941fa-37e7-4245-8991-1df7b7821bd7")}catch{}})();const ie=b({__name:"HookEditor",setup(n){const m=g(),l=v(),p=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),c=w.create();return($,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[f(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[f(e(_),{key:"test",tab:"Test"}),f(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[f(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:p,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(u=p.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ie as default};
//# sourceMappingURL=HookEditor.ac64984a.js.map
