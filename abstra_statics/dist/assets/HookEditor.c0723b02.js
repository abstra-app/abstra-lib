import{d as g,ex as v,ey as b,r as k,b as r,c as a,w as s,u as e,f,eu as i}from"./registerWidgets.9a15db03.js";import{S as h,L as w}from"./SmartConsole.3fc4db0a.js";import{a as x}from"./asyncComputed.678d15aa.js";import{H as B}from"./hooks.4c30a219.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.aea9b68b.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.8feffdc1.js";import{B as I}from"./BaseLayout.e127bb5c.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.d8ddf9c2.js";import{c as D}from"./index.ddc4eafa.js";import{a as _,T as R}from"./index.e22fbae7.js";import"./forms.55629a23.js";import"./activeRecord.9096561d.js";import"./pubsub.67e7aa16.js";import"./dashes.15b44c84.js";import"./index.286e7381.js";import"./jobs.c801a366.js";import"./workspaces.037895e4.js";import"./icons.c0d476d8.js";import"./Title.4a08927d.js";import"./transButton.4d7b6647.js";import"./FormItem.54e743df.js";import"./uuid.b3f1901d.js";import"./storage.72b476f8.js";import"./index.f581f852.js";import"./index.f38ec3c0.js";import"./index.795b8226.js";import"./index.64756482.js";import"./Form.46586f85.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="b8305f83-8139-468e-a40c-f50fc8d2388a",n._sentryDebugIdIdentifier="sentry-dbid-b8305f83-8139-468e-a40c-f50fc8d2388a")}catch{}})();const ie=g({__name:"HookEditor",setup(n){const m=v(),l=b(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),p=w.create();return($,d)=>(r(),a(I,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[f(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[f(e(_),{key:"test",tab:"Test"}),f(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[f(H,{path:"hooks"}),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(p)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(p),onRestart:(u=c.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ie as default};
//# sourceMappingURL=HookEditor.c0723b02.js.map
