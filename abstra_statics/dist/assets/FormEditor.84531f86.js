import{d as g,eA as k,ez as w,b as s,c as m,w as i,aT as h,u as e,c9 as B,r as y,f as n,ew as p,eF as C}from"./outputWidgets.bb3f51db.js";import{_ as T,a as $}from"./FormTester.vue_vue_type_script_setup_true_lang.214b0be1.js";import{S as x,L as I}from"./SmartConsole.457f8473.js";import{a as P}from"./asyncComputed.2cd59694.js";import{F as R}from"./forms.98c5191d.js";import{W as S}from"./workspaces.ab246843.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.15c4af1d.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.a2942c58.js";import{B as F}from"./BaseLayout.f16e9234.js";import{A as b,T as N}from"./TabPane.37b7f7cd.js";import"./index.14647457.js";import{c as L}from"./index.c8c8068b.js";import"./Title.6ccc42a5.js";import"./Form.2e2c8d13.js";import"./broker.afc103e7.js";import"./index.7ee89b04.js";import"./pubsub.40a68d95.js";import"./executeJs.74fefbcf.js";import"./icons.897a5c09.js";import"./CircularLoading.893ea285.js";import"./PlayerNavbar.80d024be.js";import"./index.3783ccb5.js";import"./Steps.de8f2638.js";import"./Modal.abeeaf70.js";import"./WidgetsFrame.089ae92c.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.fe4020cd.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.c787ae27.js";import"./index.cb96ec6d.js";import"./CollapsePanel.137accbd.js";import"./index.4843abaa.js";import"./index.1cb265e5.js";import"./dashes.94428951.js";import"./activeRecord.c79010ff.js";import"./hooks.c11e498a.js";import"./jobs.e03dad35.js";import"./index.a3303e55.js";import"./uuid.f2e703dd.js";import"./ant-design.b5a9f69d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="a8ac9622-1e51-4824-a85b-26b107d470e8",r._sentryDebugIdIdentifier="sentry-dbid-a8ac9622-1e51-4824-a85b-26b107d470e8")}catch{}})();const V=g({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,u=k(),c=w(),o=()=>{const l=u.query;c.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(B),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),he=g({__name:"FormEditor",setup(r){const a=w(),u=k(),c=y(null),o=y("test");function l(){a.push({name:"forms"})}const{result:t}=P(()=>Promise.all([S.get(),R.get(u.params.formPath)]).then(([v,f])=>C({workspace:v,form:f}))),_=I.create();return(v,f)=>(s(),m(F,null,{navbar:i(()=>[e(t)?(s(),m(e(L),{key:0,title:e(t).form.title,onBack:l},{footer:i(()=>[n(e(N),{"active-key":o.value,"onUpdate:activeKey":f[0]||(f[0]=d=>o.value=d)},{default:i(()=>[n(e(b),{key:"test",tab:"Test"}),n(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(D,{path:"forms/overview"}),n(V,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m(T,{key:0,ref_key:"tester",ref:c,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m($,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(x,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=c.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{he as default};
//# sourceMappingURL=FormEditor.84531f86.js.map
