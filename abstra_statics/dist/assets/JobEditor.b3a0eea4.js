import{d as g,ez as v,eA as k,r as b,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.62173841.js";import{S as w,L as j}from"./SmartConsole.0dc84ac4.js";import{a as x}from"./asyncComputed.252de2b2.js";import{J as I}from"./jobs.bfb070b3.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.b90bbbe4.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.8caec5f3.js";import{B as S}from"./BaseLayout.0452a588.js";import{_ as T,a as A}from"./JobSettings.vue_vue_type_script_setup_true_lang.036d433d.js";import{c as D}from"./index.7f2a9aba.js";import{A as _,T as R}from"./TabPane.b6f15b2b.js";import"./forms.57eeb46d.js";import"./activeRecord.e3d051a9.js";import"./pubsub.18d44b60.js";import"./dashes.780ca406.js";import"./index.cd031786.js";import"./hooks.fe2416d4.js";import"./workspaces.eab83d2b.js";import"./url.cf39c217.js";import"./icons.07f5b7cc.js";import"./Title.4f3f4668.js";import"./index.4396c173.js";import"./uuid.84f2c011.js";import"./ant-design.23adbb0b.js";import"./RunButton.vue_vue_type_script_setup_true_lang.30d9372c.js";import"./index.0b9b2dd1.js";import"./index.03402901.js";import"./dayjs.b92651b2.js";import"./Form.81bc4822.js";import"./index.f13bacf1.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="fe191960-284f-4219-9908-0c90673b3812",i._sentryDebugIdIdentifier="sentry-dbid-fe191960-284f-4219-9908-0c90673b3812")}catch{}})();const me=g({__name:"JobEditor",setup(i){const m=v(),l=k(),f=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=x(()=>I.get(l.params.jobId)),c=j.create();return($,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(c)},null,8,["job","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(A,{key:1,job:e(t)},null,8,["job"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(w,{key:0,runtime:"forms","log-service":e(c),onRestart:(p=f.value)==null?void 0:p.test},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{me as default};
//# sourceMappingURL=JobEditor.b3a0eea4.js.map
