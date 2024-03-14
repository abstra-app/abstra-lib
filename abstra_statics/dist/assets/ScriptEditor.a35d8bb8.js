import{d as k,r as f,b as u,ev as h,f as o,c as d,w as l,u as e,bz as A,eA as B,eB as N,eL as U,ex as v,e as x}from"./outputWidgets.84400f3d.js";import{W as R}from"./workspaces.ec77028e.js";import{a as $}from"./asyncComputed.f2a51feb.js";import{S as D}from"./scripts.27f061d5.js";import"./envVars.6242e707.js";import{R as F,S as L,a as E,L as P}from"./SourceCode.7f5a267e.js";import{B as V}from"./BaseLayout.af9cbbe2.js";import{_ as J}from"./RunButton.vue_vue_type_script_setup_true_lang.3583e056.js";import{A as K,F as M}from"./Form.d05a1b22.js";import{N as W}from"./NavbarControls.443f8424.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.e85375ff.js";import{S as z}from"./StageRunSelector.c40d53a7.js";import{c as H}from"./index.ee5bcd97.js";import{A as j}from"./index.fa6ccec8.js";import{A as y,T as C}from"./TabPane.39b3d167.js";import"./runnerData.bbc63ea2.js";import"./url.32b2d17f.js";import"./record.a1f907ea.js";import"./pubsub.87032f37.js";import"./uuid.fe91a626.js";import"./icons.51c500b8.js";import"./jobs.2b021813.js";import"./validations.cc892042.js";import"./string.486bb998.js";import"./toggleHighContrast.9cf9f7aa.js";import"./index.ab37c1ab.js";import"./Card.213c3593.js";import"./Text.471d0d00.js";import"./Base.5abbd37f.js";import"./Typography.d06ce724.js";import"./hasIn.bbea906d.js";import"./index.d1556999.js";import"./CloseCircleOutlined.ed91c37c.js";import"./popupNotifcation.d06c16fd.js";import"./Link.c40d5ee3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js";import"./Paragraph.4b47bceb.js";import"./Modal.d808afee.js";import"./ant-design.c41e79aa.js";import"./index.e0dbea82.js";import"./index.a2b63deb.js";import"./index.617fe5ff.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[m]="9635b714-31c7-45ee-a4c9-8a0ed6b86eb2",p._sentryDebugIdIdentifier="sentry-dbid-9635b714-31c7-45ee-a4c9-8a0ed6b86eb2")}catch{}})();const G={style:{width:"100%",display:"flex","flex-direction":"column"}},O=k({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(p,{emit:m}){const r=p,g=f(!1),n=async()=>{g.value=!0;try{const a=r.stageRunId?await r.script.run(r.stageRunId):await r.script.test();a.stderr&&r.logService.log({type:"stderr",log:a.stderr}),a.stdout&&r.logService.log({type:"stdout",log:a.stdout})}finally{g.value=!1,r.stageRunId&&m("update-stage-run-id",null)}};return(a,c)=>(u(),h("div",G,[o(J,{loading:g.value,disabled:a.script.hasChanges(),onClick:n,onSave:c[0]||(c[0]=b=>a.script.save())},null,8,["loading","disabled"])]))}}),Q=k({__name:"ScriptSettings",props:{script:{}},setup(p){const r=f(p.script);return(g,n)=>(u(),d(e(M),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:l(()=>[o(e(K),{label:"Name",required:""},{default:l(()=>[o(e(A),{value:r.value.title,"onUpdate:value":n[0]||(n[0]=a=>r.value.title=a)},null,8,["value"])]),_:1}),o(F,{runtime:r.value},null,8,["runtime"])]),_:1}))}}),X={style:{width:"50%"}},Y={style:{width:"50%"}},Me=k({__name:"ScriptEditor",setup(p){const m=B(),r=N();function g(){m.push({name:"stages"})}const n=f("source-code"),a=f("preview"),c=f(null),b=f(!1),{result:i}=$(()=>Promise.all([R.get(),D.get(r.params.id),R.readTestData()]).then(([w,t,s])=>(t.updateInitialState("test_data",s),U({workspace:w,script:t})))),_=P.create(),S=f(null);return(w,t)=>(u(),d(V,{"no-margins":""},{navbar:l(()=>[e(i)?(u(),d(e(H),{key:0,title:e(i).script.title,style:{padding:"5px 10px"},onBack:g},{extra:l(()=>[o(W,{"show-save-button":!1,"editing-model":e(i).script},null,8,["editing-model"])]),_:1},8,["title"])):v("",!0)]),content:l(()=>[e(i)?(u(),d(e(j),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:l(()=>[x("div",X,[o(e(C),{"active-key":n.value,"onUpdate:activeKey":t[0]||(t[0]=s=>n.value=s)},{rightExtra:l(()=>[o(q,{model:e(i).script},null,8,["model"])]),default:l(()=>[o(e(y),{key:"source-code",tab:"Source code"}),o(e(y),{key:"settings",tab:"Settings"}),o(e(y),{key:"test-data",tab:"Thread data"})]),_:1},8,["active-key"]),n.value==="source-code"?(u(),d(L,{key:0,script:e(i).script,workspace:e(i).workspace},null,8,["script","workspace"])):v("",!0),e(i).script&&n.value==="settings"?(u(),d(Q,{key:1,script:e(i).script},null,8,["script"])):v("",!0),n.value==="test-data"?(u(),d(z,{key:2,"stage-run-id":c.value,"onUpdate:stageRunId":t[1]||(t[1]=s=>c.value=s),"enable-start-thread":b.value,"onUpdate:enableStartThread":t[2]||(t[2]=s=>b.value=s),stage:e(i).script,onFixInvalidJson:t[3]||(t[3]=(s,T)=>{var I;return(I=S.value)==null?void 0:I.fixJson(s,T)})},null,8,["stage-run-id","enable-start-thread","stage"])):v("",!0)]),x("div",Y,[o(e(C),{"active-key":a.value,"onUpdate:activeKey":t[4]||(t[4]=s=>a.value=s)},{default:l(()=>[o(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).script&&a.value==="preview"?(u(),d(O,{key:0,ref:"tester",script:e(i).script,"log-service":e(_),"stage-run-id":c.value,onUpdateStageRunId:t[5]||(t[5]=s=>c.value=s)},null,8,["script","log-service","stage-run-id"])):v("",!0)])]),_:1})):v("",!0)]),footer:l(()=>[o(E,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(_)},null,8,["log-service"])]),_:1}))}});export{Me as default};
//# sourceMappingURL=ScriptEditor.a35d8bb8.js.map
