import{d as g,ey as v,ez as b,r as _,b as r,c as s,w as a,u as e,f as n,ev as m}from"./outputWidgets.1739e6b5.js";import{_ as h,S as w,L as x}from"./Debugger.vue_vue_type_script_setup_true_lang.8a10c449.js";import{a as B}from"./asyncComputed.b4d87a94.js";import{H as C}from"./hooks.877c6925.js";import{_ as H}from"./SaveButton.vue_vue_type_script_setup_true_lang.70064dca.js";import{_ as I}from"./DocsButton.vue_vue_type_script_setup_true_lang.c5192ab8.js";import{B as S}from"./BaseLayout.afdc77f1.js";import{_ as T,a as $}from"./HookSettings.vue_vue_type_script_setup_true_lang.ddf9e6d4.js";import{c as D}from"./index.ef7ab7ff.js";import{A as k,T as R}from"./TabPane.80dc2dd6.js";import"./forms.109d1b54.js";import"./activeRecord.55a23e4a.js";import"./pubsub.e4395938.js";import"./dashes.3d94d969.js";import"./runnerData.f7d9251a.js";import"./jobs.7d056170.js";import"./workspaces.cad93b01.js";import"./url.8bddfe76.js";import"./icons.1c3e2bde.js";import"./Title.1261c75a.js";import"./index.8b3d4030.js";import"./uuid.5051bed8.js";import"./Text.f4c0ef3e.js";import"./index.fbff59b3.js";import"./ant-design.6ecbca2a.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.a3a28f81.js";import"./RunButton.vue_vue_type_script_setup_true_lang.c6e02b30.js";import"./index.a95c2798.js";import"./index.55ff2de5.js";import"./CollapsePanel.34a522a0.js";import"./index.663f575e.js";import"./index.366cf7e1.js";import"./Form.6a4829ad.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="7d364222-1289-409b-a69e-6457fc642812",i._sentryDebugIdIdentifier="sentry-dbid-7d364222-1289-409b-a69e-6457fc642812")}catch{}})();const fe=g({__name:"HookEditor",setup(i){const p=v(),l=b(),c=_(null),o=_("test");function y(){p.push({name:"hooks"})}const{result:t}=B(()=>C.get(l.params.hookPath)),f=x.create();return(A,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(k),{key:"test",tab:"Test"}),n(e(k),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n(h),n(I,{path:"hooks"}),o.value==="settings"?(r(),s(H,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s($,{key:1,hook:e(t)},null,8,["hook"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(w,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=c.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{fe as default};
//# sourceMappingURL=HookEditor.792bcfe3.js.map
