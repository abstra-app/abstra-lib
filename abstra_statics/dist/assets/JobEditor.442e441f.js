import{d as g,ez as v,eA as k,r as b,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.d94fff8c.js";import{S as w,L as j}from"./SmartConsole.4ccb77f1.js";import{a as x}from"./asyncComputed.6da48dd7.js";import{J as I}from"./jobs.314c73b6.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.00be30ea.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.21d0d4fe.js";import{B as S}from"./BaseLayout.f1c5ada3.js";import{_ as T,a as A}from"./JobSettings.vue_vue_type_script_setup_true_lang.0550a6a9.js";import{c as D}from"./index.c81cf59e.js";import{A as _,T as R}from"./TabPane.71415757.js";import"./forms.6cfc05eb.js";import"./activeRecord.4bb9e983.js";import"./pubsub.39314a92.js";import"./dashes.8c8e25c6.js";import"./index.3dad0da1.js";import"./hooks.0a2d0d18.js";import"./workspaces.c4438eba.js";import"./url.596d80c9.js";import"./icons.fec42461.js";import"./Title.c70c7e79.js";import"./index.3709b59d.js";import"./uuid.fd17a681.js";import"./ant-design.b0e50c8b.js";import"./RunButton.vue_vue_type_script_setup_true_lang.d2d28986.js";import"./index.07475686.js";import"./index.e7f021ad.js";import"./dayjs.f35fb149.js";import"./Form.57801503.js";import"./index.209f6c1c.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="b8f8bdbc-1960-4f75-b9e9-73f8a4822085",i._sentryDebugIdIdentifier="sentry-dbid-b8f8bdbc-1960-4f75-b9e9-73f8a4822085")}catch{}})();const me=g({__name:"JobEditor",setup(i){const m=v(),l=k(),f=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=x(()=>I.get(l.params.jobId)),c=j.create();return($,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(c)},null,8,["job","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(A,{key:1,job:e(t)},null,8,["job"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(w,{key:0,runtime:"forms","log-service":e(c),onRestart:(p=f.value)==null?void 0:p.test},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{me as default};
//# sourceMappingURL=JobEditor.442e441f.js.map
