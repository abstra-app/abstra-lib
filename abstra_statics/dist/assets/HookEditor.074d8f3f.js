import{d as y,ex as g,ey as v,r as k,b as r,c as a,w as s,u as e,f as l,eu as i}from"./registerWidgets.d207d3d8.js";import{S as h,L as w}from"./SmartConsole.f594a1ad.js";import{a as x}from"./asyncComputed.9245c077.js";import{H as B}from"./hooks.37f13771.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.a446ddad.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.28f3e777.js";import{B as I}from"./BaseLayout.0d1c7e47.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.1b94c861.js";import{c as D}from"./index.7710c197.js";import{a as _,T as R}from"./index.d8b0e5b9.js";import"./forms.ae7baac0.js";import"./activeRecord.3ac0bec0.js";import"./pubsub.a025efb1.js";import"./dashes.e3e34823.js";import"./index.4ee96554.js";import"./jobs.7da71109.js";import"./workspaces.84f5cd92.js";import"./icons.4cf3c6e7.js";import"./Title.db9c20f2.js";import"./transButton.c5e342ac.js";import"./FormItem.15ae57a9.js";import"./uuid.82f651b9.js";import"./storage.955f9c37.js";import"./index.a0581434.js";import"./index.cf9cf0c5.js";import"./index.ce572c42.js";import"./index.a3599972.js";import"./Form.93c8c2f5.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="6901eb1c-bb0f-4c1a-84ea-3bdf7d3a7126",n._sentryDebugIdIdentifier="sentry-dbid-6901eb1c-bb0f-4c1a-84ea-3bdf7d3a7126")}catch{}})();const ie=y({__name:"HookEditor",setup(n){const m=g(),c=v(),p=k(null),o=k("test");function b(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(c.params.hookPath)),f=w.create();return($,d)=>(r(),a(I,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,onBack:b},{footer:s(()=>[l(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(H,{path:"hooks"}),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(S,{key:0,ref_key:"tester",ref:p,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=p.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ie as default};
//# sourceMappingURL=HookEditor.074d8f3f.js.map
