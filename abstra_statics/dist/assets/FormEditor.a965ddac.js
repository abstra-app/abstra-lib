import{d as b,ez as k,ey as h,b as m,c as i,w as n,aI as x,u as e,c0 as B,r as y,J as C,eE as I,f as s,ev as f}from"./outputWidgets.3a1a3161.js";import{_ as P,a as R}from"./FormTester.vue_vue_type_script_setup_true_lang.aed2f5df.js";import{_ as T,S,L as D}from"./Debugger.vue_vue_type_script_setup_true_lang.c50a6f18.js";import{a as N}from"./asyncComputed.3068c2f0.js";import{F as A}from"./forms.5a4b7621.js";import{W as E}from"./workspaces.5fc86a02.js";import{_ as F}from"./SaveButton.vue_vue_type_script_setup_true_lang.935cfca1.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.cc9605ca.js";import{_ as V}from"./LaunchButton.vue_vue_type_script_setup_true_lang.e3615c89.js";import{B as q}from"./BaseLayout.3d21d871.js";import"./index.62bc48c6.js";import{r as M}from"./executeJs.dd9ee0fd.js";import{A as g,T as U}from"./TabPane.8b526da4.js";import"./index.95bafa46.js";import{c as W}from"./index.bbf19cac.js";import"./Title.875549d8.js";import"./Form.58fb677e.js";import"./FormRunner.c4be366b.js";import"./index.708dd591.js";import"./pubsub.2dc7d89a.js";import"./CircularLoading.ad65c002.js";import"./WidgetsFrame.1b51b23f.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.2cee2bbd.js";import"./icons.d8ed105c.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.d01fae72.js";import"./index.0ec800fb.js";import"./CollapsePanel.130e3c33.js";import"./index.1f4629a2.js";import"./index.0d5ed1d0.js";import"./index.930d127f.js";import"./dashes.25ae3367.js";import"./activeRecord.8f2918d8.js";import"./runnerData.f0cfba63.js";import"./hooks.83b588ef.js";import"./jobs.44935944.js";import"./index.46bd6cba.js";import"./uuid.d5a19964.js";import"./Text.499f5d9d.js";import"./url.8abf1d81.js";import"./ant-design.58442a38.js";import"./PlayerNavbar.ee3d8f66.js";import"./Steps.24c62716.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="edafa713-714d-4b6c-a948-524ab41d71c2",a._sentryDebugIdIdentifier="sentry-dbid-edafa713-714d-4b6c-a948-524ab41d71c2")}catch{}})();const z=b({__name:"PreviewButton",props:{model:{}},setup(a){const o=a,c=k(),u=h(),r=()=>{const l=c.query;u.push({path:`/_editor/${o.model.routeName}/${encodeURIComponent(o.model.path)}/preview`,query:l})};return(l,t)=>(m(),i(e(B),{class:"preview-button",onClick:r},{default:n(()=>[x(" Preview ")]),_:1}))}}),De=b({__name:"FormEditor",setup(a){const o=h(),c=k(),u=y(null),r=y("test");function l(){o.push({name:"forms"})}const{result:t,refetch:w}=N(()=>Promise.all([E.get(),A.get(c.params.formPath)]).then(([d,p])=>I({workspace:d,form:p}))),v=D.create();function $(d,p){M("editor",o,d,p)}return C(()=>c.params.formPath,()=>{w()}),(d,p)=>(m(),i(q,null,{navbar:n(()=>[e(t)?(m(),i(e(W),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:n(()=>[s(e(U),{"active-key":r.value,"onUpdate:activeKey":p[0]||(p[0]=_=>r.value=_)},{default:n(()=>[s(e(g),{key:"test",tab:"Test"}),s(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:n(()=>[s(T),s(V,{path:e(t).form.path},null,8,["path"]),s(L,{path:"forms/overview"}),s(z,{model:e(t).form},null,8,["model"]),r.value==="settings"?(m(),i(F,{key:0,model:e(t).form},null,8,["model"])):f("",!0)]),_:1},8,["title"])):f("",!0)]),content:n(()=>[e(t)&&r.value==="test"?(m(),i(P,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(v),onRedirect:$},null,8,["form","log-service"])):f("",!0),e(t)&&r.value==="settings"?(m(),i(R,{key:1,form:e(t).form},null,8,["form"])):f("",!0)]),footer:n(()=>{var _;return[e(t)&&r.value==="test"?(m(),i(S,{key:0,runtime:"forms","log-service":e(v),onRestart:(_=u.value)==null?void 0:_.restart},null,8,["log-service","onRestart"])):f("",!0)]}),_:1}))}});export{De as default};
//# sourceMappingURL=FormEditor.a965ddac.js.map
