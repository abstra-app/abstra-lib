import{d as g,ey as v,ez as k,r as b,b as r,c as s,w as a,u as e,f as n,ev as m}from"./outputWidgets.e1ef7566.js";import{S as j,L as w}from"./SmartConsole.75497094.js";import{a as x}from"./asyncComputed.7df7ace6.js";import{J as I}from"./jobs.b31fab87.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.14c32d69.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.a95abf5a.js";import{B as S}from"./BaseLayout.9eb14dfb.js";import{_ as T,a as $}from"./JobSettings.vue_vue_type_script_setup_true_lang.1b987530.js";import{_ as D}from"./Debugger.vue_vue_type_script_setup_true_lang.207c7247.js";import{c as R}from"./index.e8529a5b.js";import{A as _,T as A}from"./TabPane.2c71b19f.js";import"./forms.3d6e4dfa.js";import"./activeRecord.4c9e636d.js";import"./pubsub.c47edaa0.js";import"./dashes.53b424a5.js";import"./runnerData.90836231.js";import"./hooks.a591c66f.js";import"./workspaces.8db5b540.js";import"./url.8a9eed68.js";import"./icons.c5a201f5.js";import"./Title.4a382120.js";import"./transButton.8c2deff8.js";import"./index.5ae7e734.js";import"./uuid.9bf91102.js";import"./ant-design.22e32191.js";import"./RunButton.vue_vue_type_script_setup_true_lang.c08ae41a.js";import"./index.2ac00ba9.js";import"./index.71b36d1b.js";import"./dayjs.6c249a3b.js";import"./Form.4c9b41f7.js";import"./Text.d5ca2991.js";import"./index.5ef89a41.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="9c37d530-43e3-475c-b3e8-abdb58f7de35",i._sentryDebugIdIdentifier="sentry-dbid-9c37d530-43e3-475c-b3e8-abdb58f7de35")}catch{}})();const ce=g({__name:"JobEditor",setup(i){const p=v(),l=k(),c=b(null),o=b("test");function y(){p.push({name:"jobs"})}const{result:t}=x(()=>I.get(l.params.jobId)),f=w.create();return(J,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(R),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(A),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(_),{key:"test",tab:"Test"}),n(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n(D),n(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:c,job:e(t),"log-service":e(f)},null,8,["job","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s($,{key:1,job:e(t)},null,8,["job"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(j,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=c.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{ce as default};
//# sourceMappingURL=JobEditor.2ff2921d.js.map
