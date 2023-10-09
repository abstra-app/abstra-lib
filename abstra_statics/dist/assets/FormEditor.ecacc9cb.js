import{d as b,eA as k,ez as w,b as s,c as m,w as i,aJ as h,u as e,c4 as x,r as y,f as n,ew as p,eF as $}from"./outputWidgets.51b6bae1.js";import{_ as B,a as C}from"./FormTester.vue_vue_type_script_setup_true_lang.66b41385.js";import{S as I,L as P}from"./SmartConsole.f6579a2b.js";import{a as R}from"./asyncComputed.04a1cbef.js";import{F as T}from"./forms.ac6f6a41.js";import{W as S}from"./workspaces.f0831df3.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.47707105.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.3dc8d4e3.js";import{_ as F}from"./LaunchButton.vue_vue_type_script_setup_true_lang.e87bbe7d.js";import{B as N}from"./BaseLayout.e30e99fa.js";import{A as g,T as L}from"./TabPane.c04f3b85.js";import"./index.de207310.js";import{c as V}from"./index.8de9b030.js";import"./Title.32186eec.js";import"./Form.0c72c506.js";import"./broker.f23dc08f.js";import"./index.cdde3d09.js";import"./pubsub.933450ea.js";import"./executeJs.8e0872d4.js";import"./icons.368bb45e.js";import"./CircularLoading.0e31148f.js";import"./PlayerNavbar.ad0b82e9.js";import"./index.a9533207.js";import"./Steps.c1f8bfce.js";import"./WidgetsFrame.d986fea7.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.205d291a.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.58310071.js";import"./index.94e11a35.js";import"./CollapsePanel.0366869a.js";import"./index.cf4e9e77.js";import"./index.a10aab26.js";import"./index.a23c5517.js";import"./dashes.15a50bce.js";import"./activeRecord.d956865b.js";import"./hooks.f303c172.js";import"./jobs.da4dcf4c.js";import"./index.051f0241.js";import"./uuid.d3607693.js";import"./url.0dd5dd74.js";import"./ant-design.200d7eca.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="fb9a8a22-11de-436d-9438-324f7833dfb5",r._sentryDebugIdIdentifier="sentry-dbid-fb9a8a22-11de-436d-9438-324f7833dfb5")}catch{}})();const q=b({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,f=k(),u=w(),o=()=>{const l=f.query;u.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(x),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),Be=b({__name:"FormEditor",setup(r){const a=w(),f=k(),u=y(null),o=y("test");function l(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([S.get(),T.get(f.params.formPath)]).then(([v,c])=>$({workspace:v,form:c}))),_=P.create();return(v,c)=>(s(),m(N,null,{navbar:i(()=>[e(t)?(s(),m(e(V),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:i(()=>[n(e(L),{"active-key":o.value,"onUpdate:activeKey":c[0]||(c[0]=d=>o.value=d)},{default:i(()=>[n(e(g),{key:"test",tab:"Test"}),n(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(F,{path:e(t).form.path},null,8,["path"]),n(D,{path:"forms/overview"}),n(q,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m(B,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m(C,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=u.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{Be as default};
//# sourceMappingURL=FormEditor.ecacc9cb.js.map
