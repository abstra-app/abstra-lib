import{d as k,r as f,b as d,ev as h,f as o,c as u,w as l,u as e,bz as A,eA as B,eB as N,eL as U,ex as v,e as x}from"./outputWidgets.71972c1f.js";import{W as R}from"./workspaces.efb0ec6c.js";import{a as $}from"./asyncComputed.2a02ada4.js";import{S as D}from"./scripts.9506d872.js";import"./envVars.b8330927.js";import{R as F,S as L,a as E,L as P}from"./SourceCode.862048fa.js";import{B as V}from"./BaseLayout.990d9e00.js";import{_ as J}from"./RunButton.vue_vue_type_script_setup_true_lang.b7e42275.js";import{A as K,F as M}from"./Form.5bc711f3.js";import{N as W}from"./NavbarControls.6e2d4cbd.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.f14a6005.js";import{S as z}from"./StageRunSelector.5a493c5a.js";import{c as H}from"./index.48cbcf23.js";import{A as j}from"./index.88976319.js";import{A as y,T as C}from"./TabPane.6ab6dda0.js";import"./runnerData.dfb425d1.js";import"./url.c69e3335.js";import"./record.6e40de7d.js";import"./pubsub.c6a35186.js";import"./uuid.283fcdd3.js";import"./icons.26509fba.js";import"./jobs.06151717.js";import"./validations.9c46bf76.js";import"./string.ff845dda.js";import"./toggleHighContrast.5e47c386.js";import"./index.f9ebb3bd.js";import"./Card.1111b646.js";import"./Text.9a5f17b2.js";import"./Base.9948bf98.js";import"./Typography.798b0601.js";import"./hasIn.c0bb3547.js";import"./index.fbc962c6.js";import"./CloseCircleOutlined.64041815.js";import"./popupNotifcation.dcdd99cf.js";import"./Link.ca17cd41.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.eedbf230.js";import"./Paragraph.90f995b3.js";import"./Modal.dfe01843.js";import"./ant-design.3046e398.js";import"./index.55a6d742.js";import"./index.14e89296.js";import"./index.e2e4cd19.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[m]="8dbb43cc-fe9d-4733-ad8a-5f0a1dd404a6",p._sentryDebugIdIdentifier="sentry-dbid-8dbb43cc-fe9d-4733-ad8a-5f0a1dd404a6")}catch{}})();const G={style:{width:"100%",display:"flex","flex-direction":"column"}},O=k({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(p,{emit:m}){const r=p,g=f(!1),n=async()=>{g.value=!0;try{const a=r.stageRunId?await r.script.run(r.stageRunId):await r.script.test();a.stderr&&r.logService.log({type:"stderr",log:a.stderr}),a.stdout&&r.logService.log({type:"stdout",log:a.stdout})}finally{g.value=!1,r.stageRunId&&m("update-stage-run-id",null)}};return(a,c)=>(d(),h("div",G,[o(J,{loading:g.value,disabled:a.script.hasChanges(),onClick:n,onSave:c[0]||(c[0]=b=>a.script.save())},null,8,["loading","disabled"])]))}}),Q=k({__name:"ScriptSettings",props:{script:{}},setup(p){const r=f(p.script);return(g,n)=>(d(),u(e(M),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:l(()=>[o(e(K),{label:"Name",required:""},{default:l(()=>[o(e(A),{value:r.value.title,"onUpdate:value":n[0]||(n[0]=a=>r.value.title=a)},null,8,["value"])]),_:1}),o(F,{runtime:r.value},null,8,["runtime"])]),_:1}))}}),X={style:{width:"50%"}},Y={style:{width:"50%"}},Me=k({__name:"ScriptEditor",setup(p){const m=B(),r=N();function g(){m.push({name:"stages"})}const n=f("source-code"),a=f("preview"),c=f(null),b=f(!1),{result:i}=$(()=>Promise.all([R.get(),D.get(r.params.id),R.readTestData()]).then(([w,t,s])=>(t.updateInitialState("test_data",s),U({workspace:w,script:t})))),_=P.create(),S=f(null);return(w,t)=>(d(),u(V,{"no-margins":""},{navbar:l(()=>[e(i)?(d(),u(e(H),{key:0,title:e(i).script.title,style:{padding:"5px 10px"},onBack:g},{extra:l(()=>[o(W,{"show-save-button":!1,"editing-model":e(i).script},null,8,["editing-model"])]),_:1},8,["title"])):v("",!0)]),content:l(()=>[e(i)?(d(),u(e(j),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:l(()=>[x("div",X,[o(e(C),{"active-key":n.value,"onUpdate:activeKey":t[0]||(t[0]=s=>n.value=s)},{rightExtra:l(()=>[o(q,{model:e(i).script},null,8,["model"])]),default:l(()=>[o(e(y),{key:"source-code",tab:"Source code"}),o(e(y),{key:"settings",tab:"Settings"}),o(e(y),{key:"test-data",tab:"Thread data"})]),_:1},8,["active-key"]),n.value==="source-code"?(d(),u(L,{key:0,script:e(i).script,workspace:e(i).workspace},null,8,["script","workspace"])):v("",!0),e(i).script&&n.value==="settings"?(d(),u(Q,{key:1,script:e(i).script},null,8,["script"])):v("",!0),n.value==="test-data"?(d(),u(z,{key:2,"stage-run-id":c.value,"onUpdate:stageRunId":t[1]||(t[1]=s=>c.value=s),"enable-start-thread":b.value,"onUpdate:enableStartThread":t[2]||(t[2]=s=>b.value=s),stage:e(i).script,onFixInvalidJson:t[3]||(t[3]=(s,T)=>{var I;return(I=S.value)==null?void 0:I.fixJson(s,T)})},null,8,["stage-run-id","enable-start-thread","stage"])):v("",!0)]),x("div",Y,[o(e(C),{"active-key":a.value,"onUpdate:activeKey":t[4]||(t[4]=s=>a.value=s)},{default:l(()=>[o(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).script&&a.value==="preview"?(d(),u(O,{key:0,ref:"tester",script:e(i).script,"log-service":e(_),"stage-run-id":c.value,onUpdateStageRunId:t[5]||(t[5]=s=>c.value=s)},null,8,["script","log-service","stage-run-id"])):v("",!0)])]),_:1})):v("",!0)]),footer:l(()=>[o(E,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(_)},null,8,["log-service"])]),_:1}))}});export{Me as default};
//# sourceMappingURL=ScriptEditor.bba6915c.js.map
