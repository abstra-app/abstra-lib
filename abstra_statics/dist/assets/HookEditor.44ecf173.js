import{d as g,ex as v,ey as b,r as k,b as r,c as a,w as s,u as e,f as l,eu as i}from"./registerWidgets.aa99a257.js";import{S as h,L as w}from"./SmartConsole.d70c8a2d.js";import{a as x}from"./asyncComputed.0fe9c7ca.js";import{H as B}from"./hooks.b7fde148.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.ed4c011d.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.0a7246b9.js";import{B as I}from"./BaseLayout.7727a5c7.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.97189471.js";import{c as D}from"./index.3dca4144.js";import{a as _,T as R}from"./index.4c73616e.js";import"./forms.ea000aa1.js";import"./activeRecord.a0fab812.js";import"./pubsub.1c962ca1.js";import"./dashes.fa9afad9.js";import"./index.237f2f09.js";import"./jobs.093b9a31.js";import"./workspaces.469ca98e.js";import"./icons.28b8a025.js";import"./Title.6e572405.js";import"./uuid.ef3a90b6.js";import"./storage.140ce577.js";import"./index.c751bb41.js";import"./index.20a4b8db.js";import"./index.782ff7c7.js";import"./index.4fae01ae.js";import"./Form.edded16b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="a1e37dc1-fec3-42e6-868a-8d6aa92aba82",n._sentryDebugIdIdentifier="sentry-dbid-a1e37dc1-fec3-42e6-868a-8d6aa92aba82")}catch{}})();const se=g({__name:"HookEditor",setup(n){const m=v(),c=b(),p=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(c.params.hookPath)),f=w.create();return($,d)=>(r(),a(I,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[l(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(H,{path:"hooks"}),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(S,{key:0,ref_key:"tester",ref:p,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=p.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{se as default};
//# sourceMappingURL=HookEditor.44ecf173.js.map
