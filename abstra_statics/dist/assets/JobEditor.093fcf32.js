import{d as g,ex as v,ey as k,r as b,b as a,c as r,w as s,u as e,f as l,eu as i}from"./registerWidgets.7c26f935.js";import{S as j,L as w}from"./SmartConsole.299d0349.js";import{a as I}from"./asyncComputed.cfc29dee.js";import{J as x}from"./jobs.dad8f341.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.72254330.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.d8e65587.js";import{B as S}from"./BaseLayout.772b473a.js";import{_ as T,a as D}from"./JobSettings.vue_vue_type_script_setup_true_lang.1b9e3fa3.js";import{c as R}from"./index.4f17481f.js";import{a as _,T as $}from"./index.dee97b44.js";import"./forms.4f444334.js";import"./activeRecord.d07557d8.js";import"./pubsub.c3a63076.js";import"./dashes.0c09108e.js";import"./index.1d4b40b5.js";import"./hooks.3d13470e.js";import"./workspaces.2b9ec268.js";import"./icons.d315d375.js";import"./Title.9a021125.js";import"./uuid.18e8e762.js";import"./storage.53222b6f.js";import"./dayjs.a6cc0f96.js";import"./index.a762c3c3.js";import"./Form.ac091445.js";import"./index.9a7a96c9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="41e6c186-bd9a-47ca-9a32-be4ad4aa6aad",n._sentryDebugIdIdentifier="sentry-dbid-41e6c186-bd9a-47ca-9a32-be4ad4aa6aad")}catch{}})();const re=g({__name:"JobEditor",setup(n){const m=v(),c=k(),p=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>x.get(c.params.jobId)),f=w.create();return(J,d)=>(a(),r(S,null,{navbar:s(()=>[e(t)?(a(),r(e(R),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[l(e($),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(C),o.value==="settings"?(a(),r(B,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(a(),r(T,{key:0,ref_key:"tester",ref:p,job:e(t),"log-service":e(f)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(a(),r(D,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(a(),r(j,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=p.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{re as default};
//# sourceMappingURL=JobEditor.093fcf32.js.map
