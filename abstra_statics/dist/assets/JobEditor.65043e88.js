import{d as g,ey as v,ez as k,r as b,b as r,c as s,w as a,u as e,f as n,ev as m}from"./outputWidgets.0fb707c7.js";import{S as j,L as w}from"./SmartConsole.cb276e5d.js";import{a as x}from"./asyncComputed.a0ca296c.js";import{J as I}from"./jobs.a07f20aa.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.cb07d15b.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.6262c519.js";import{B as S}from"./BaseLayout.4284e9c0.js";import{_ as T,a as $}from"./JobSettings.vue_vue_type_script_setup_true_lang.09a6bb10.js";import{_ as D}from"./Debugger.vue_vue_type_script_setup_true_lang.0be10547.js";import{c as R}from"./index.ebe62e37.js";import{A as _,T as A}from"./TabPane.52e10a91.js";import"./forms.d1706940.js";import"./activeRecord.204186f3.js";import"./pubsub.7d8bce56.js";import"./dashes.732fbcbe.js";import"./runnerData.123d166f.js";import"./hooks.050c60fa.js";import"./workspaces.3d9f34c7.js";import"./url.d43b75f5.js";import"./icons.24a85994.js";import"./Title.f00a58f9.js";import"./transButton.220177fb.js";import"./index.8dbf2994.js";import"./uuid.4028e63a.js";import"./ant-design.c18e1d39.js";import"./RunButton.vue_vue_type_script_setup_true_lang.05efc5c6.js";import"./index.215cc261.js";import"./index.85d2f01b.js";import"./dayjs.c3e76978.js";import"./Form.0dcb97c0.js";import"./Text.3ec0a64d.js";import"./index.a2e845fd.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="bf3108b6-a87d-4b96-8547-42e6d7835de0",i._sentryDebugIdIdentifier="sentry-dbid-bf3108b6-a87d-4b96-8547-42e6d7835de0")}catch{}})();const fe=g({__name:"JobEditor",setup(i){const p=v(),l=k(),f=b(null),o=b("test");function y(){p.push({name:"jobs"})}const{result:t}=x(()=>I.get(l.params.jobId)),c=w.create();return(J,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(R),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(A),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(_),{key:"test",tab:"Test"}),n(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n(D),n(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(c)},null,8,["job","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s($,{key:1,job:e(t)},null,8,["job"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(j,{key:0,runtime:"forms","log-service":e(c),onRestart:(u=f.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{fe as default};
//# sourceMappingURL=JobEditor.65043e88.js.map
