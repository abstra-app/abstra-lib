import{d as g,ez as k,ey as h,b as m,c as i,w as n,aI as x,u as e,c0 as B,r as v,J as C,eE as I,f as s,ev as c}from"./outputWidgets.7bdcec0a.js";import{_ as P,a as R}from"./FormTester.vue_vue_type_script_setup_true_lang.4fdc01f2.js";import{_ as T,S,L as D}from"./Debugger.vue_vue_type_script_setup_true_lang.d89c8bc1.js";import{a as N}from"./asyncComputed.cfb98789.js";import{F as A}from"./forms.8c9f59fc.js";import{W as E}from"./workspaces.be6d809d.js";import{_ as F}from"./SaveButton.vue_vue_type_script_setup_true_lang.04051643.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.53314c28.js";import{_ as V}from"./LaunchButton.vue_vue_type_script_setup_true_lang.c9b2c762.js";import{B as q}from"./BaseLayout.8a75f5c8.js";import"./index.15e46fc6.js";import{r as M}from"./executeJs.4c06c20d.js";import{A as y,T as U}from"./TabPane.80ddb907.js";import"./index.4f12da40.js";import{c as W}from"./index.daee6445.js";import"./Title.9c0d0c5f.js";import"./Form.f84b91b7.js";import"./FormRunner.5c24c21a.js";import"./index.bf6ee632.js";import"./pubsub.c455bec9.js";import"./CircularLoading.724accbb.js";import"./WidgetsFrame.63ba4d68.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.23feb2a8.js";import"./icons.6934ad19.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.b5da33a6.js";import"./index.4275e5f9.js";import"./CollapsePanel.3b9bef6a.js";import"./index.a2310446.js";import"./index.23129d61.js";import"./index.125aa6b3.js";import"./dashes.a2ed9201.js";import"./activeRecord.84d52553.js";import"./runnerData.9bca67ea.js";import"./hooks.23cddd97.js";import"./jobs.8b72f085.js";import"./index.a9a6d5a2.js";import"./uuid.d3821bce.js";import"./Text.94a8ea41.js";import"./url.5caacc63.js";import"./ant-design.b9d9c398.js";import"./PlayerNavbar.bfe2d6d4.js";import"./Steps.b1376ce3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="9aa3e8d2-e4c5-458f-bf04-2b50b711b8b0",a._sentryDebugIdIdentifier="sentry-dbid-9aa3e8d2-e4c5-458f-bf04-2b50b711b8b0")}catch{}})();const z=g({__name:"PreviewButton",props:{model:{}},setup(a){const o=a,f=k(),u=h(),r=()=>{const l=f.query;u.push({path:`/_editor/${o.model.routeName}/${encodeURIComponent(o.model.path)}/preview`,query:l})};return(l,t)=>(m(),i(e(B),{class:"preview-button",onClick:r},{default:n(()=>[x(" Preview ")]),_:1}))}}),De=g({__name:"FormEditor",setup(a){const o=h(),f=k(),u=v(null),r=v("test");function l(){o.push({name:"forms"})}const{result:t,refetch:w}=N(()=>Promise.all([E.get(),A.get(f.params.formPath)]).then(([d,p])=>I({workspace:d,form:p}))),b=D.create();function $(d,p){M("editor",o,d,p)}return C(()=>f.params.formPath,()=>{w()}),(d,p)=>(m(),i(q,null,{navbar:n(()=>[e(t)?(m(),i(e(W),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:n(()=>[s(e(U),{"active-key":r.value,"onUpdate:activeKey":p[0]||(p[0]=_=>r.value=_)},{default:n(()=>[s(e(y),{key:"test",tab:"Test"}),s(e(y),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:n(()=>[s(T),s(V,{path:e(t).form.path},null,8,["path"]),s(L,{path:"forms/overview"}),s(z,{model:e(t).form},null,8,["model"]),r.value==="settings"?(m(),i(F,{key:0,model:e(t).form},null,8,["model"])):c("",!0)]),_:1},8,["title"])):c("",!0)]),content:n(()=>[e(t)&&r.value==="test"?(m(),i(P,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(b),onRedirect:$},null,8,["form","log-service"])):c("",!0),e(t)&&r.value==="settings"?(m(),i(R,{key:1,form:e(t).form},null,8,["form"])):c("",!0)]),footer:n(()=>{var _;return[e(t)&&r.value==="test"?(m(),i(S,{key:0,runtime:"forms","log-service":e(b),onRestart:(_=u.value)==null?void 0:_.restart},null,8,["log-service","onRestart"])):c("",!0)]}),_:1}))}});export{De as default};
//# sourceMappingURL=FormEditor.61964949.js.map
