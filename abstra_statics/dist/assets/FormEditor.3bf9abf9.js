import{d as k,eA as b,ez as w,b as s,c as m,w as i,aJ as h,u as e,c4 as B,r as y,f as n,ew as p,eF as C}from"./outputWidgets.6d878336.js";import{_ as $,a as x}from"./FormTester.vue_vue_type_script_setup_true_lang.cec11aa1.js";import{S as I,L as P}from"./SmartConsole.5b9c7626.js";import{a as R}from"./asyncComputed.f4e8f601.js";import{F as T}from"./forms.0c4a009c.js";import{W as S}from"./workspaces.f0937796.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.8fbe96b3.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.ff363d27.js";import{B as F}from"./BaseLayout.4bb614ec.js";import{A as g,T as N}from"./TabPane.dac9512e.js";import"./index.64e4975b.js";import{c as L}from"./index.48f0e3d4.js";import"./Title.7777f40a.js";import"./Form.9dbabc14.js";import"./broker.587345a5.js";import"./index.b0115d55.js";import"./pubsub.7c8033ef.js";import"./executeJs.a56caae5.js";import"./icons.31732537.js";import"./CircularLoading.eccfe0db.js";import"./PlayerNavbar.1c187a5c.js";import"./index.9e0e45c6.js";import"./Steps.7aae582d.js";import"./Modal.1246b5a8.js";import"./WidgetsFrame.ece61a5f.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.461ea1d0.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.e5dea4ba.js";import"./index.f4029516.js";import"./CollapsePanel.e467f5eb.js";import"./index.ab3edcb5.js";import"./index.ec7066e1.js";import"./dashes.f10b87b4.js";import"./activeRecord.0d2b743a.js";import"./hooks.6cce5c32.js";import"./jobs.a6921d5f.js";import"./index.40d5d1c1.js";import"./uuid.977e155e.js";import"./ant-design.99b06c77.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="706afadc-f91c-455d-a4ad-a920327ee29d",r._sentryDebugIdIdentifier="sentry-dbid-706afadc-f91c-455d-a4ad-a920327ee29d")}catch{}})();const V=k({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,u=b(),c=w(),o=()=>{const f=u.query;c.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:f})};return(f,t)=>(s(),m(e(B),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),he=k({__name:"FormEditor",setup(r){const a=w(),u=b(),c=y(null),o=y("test");function f(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([S.get(),T.get(u.params.formPath)]).then(([v,l])=>C({workspace:v,form:l}))),_=P.create();return(v,l)=>(s(),m(F,null,{navbar:i(()=>[e(t)?(s(),m(e(L),{key:0,title:e(t).form.title,onBack:f},{footer:i(()=>[n(e(N),{"active-key":o.value,"onUpdate:activeKey":l[0]||(l[0]=d=>o.value=d)},{default:i(()=>[n(e(g),{key:"test",tab:"Test"}),n(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(D,{path:"forms/overview"}),n(V,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m($,{key:0,ref_key:"tester",ref:c,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m(x,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=c.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{he as default};
//# sourceMappingURL=FormEditor.3bf9abf9.js.map
