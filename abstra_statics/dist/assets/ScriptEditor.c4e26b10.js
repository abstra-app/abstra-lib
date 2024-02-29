import{d as k,r as f,b as u,ev as h,f as o,c as d,w as l,u as e,bO as A,eA as B,eB as N,eM as U,ex as v,e as x}from"./outputWidgets.a7176d64.js";import{W as R}from"./workspaces.64b03d7d.js";import{a as $}from"./asyncComputed.25eda27f.js";import{S as D}from"./scripts.d2808178.js";import"./envVars.1ab3b675.js";import{R as F,S as E,a as L,L as P}from"./SourceCode.3d0b7a29.js";import{B as M}from"./BaseLayout.1d9f3c03.js";import{_ as V}from"./RunButton.vue_vue_type_script_setup_true_lang.b3e1e480.js";import{A as J,F as K}from"./Form.bf63c08b.js";import{N as W}from"./NavbarControls.0e7215e5.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.675385bc.js";import{S as H}from"./StageRunSelector.03503b88.js";import{c as O}from"./index.5c9892d3.js";import{A as j}from"./index.3bdcfcfc.js";import{A as y,T as C}from"./TabPane.e74cf719.js";import"./runnerData.358d1ba1.js";import"./url.e6100d0b.js";import"./record.3511e152.js";import"./pubsub.af1d225a.js";import"./uuid.edbb8792.js";import"./icons.2eed2ad0.js";import"./jobs.7958552a.js";import"./validations.30862cce.js";import"./string.484ea152.js";import"./toggleHighContrast.f38cbb9c.js";import"./index.79dd4e70.js";import"./Card.a951271e.js";import"./Text.7794e42c.js";import"./Base.3d2f0a07.js";import"./Typography.6fea5bfc.js";import"./hasIn.956628e3.js";import"./index.81c9cadd.js";import"./popupNotifcation.f1235450.js";import"./Link.2275411f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5d1ebde5.js";import"./Paragraph.0a12d789.js";import"./Modal.98f3fcac.js";import"./ant-design.6acd11c9.js";import"./index.197a48fe.js";import"./index.0ba7a6cc.js";import"./index.5f39e3c9.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[m]="6851b280-5b1c-447b-ab01-756247b543a3",p._sentryDebugIdIdentifier="sentry-dbid-6851b280-5b1c-447b-ab01-756247b543a3")}catch{}})();const z={style:{width:"100%",display:"flex","flex-direction":"column"}},G=k({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(p,{emit:m}){const r=p,g=f(!1),n=async()=>{g.value=!0;try{const a=r.stageRunId?await r.script.run(r.stageRunId):await r.script.test();a.stderr&&r.logService.log({type:"stderr",log:a.stderr}),a.stdout&&r.logService.log({type:"stdout",log:a.stdout})}finally{g.value=!1,r.stageRunId&&m("update-stage-run-id",null)}};return(a,c)=>(u(),h("div",z,[o(V,{loading:g.value,disabled:a.script.hasChanges(),onClick:n,onSave:c[0]||(c[0]=b=>a.script.save())},null,8,["loading","disabled"])]))}}),Q=k({__name:"ScriptSettings",props:{script:{}},setup(p){const r=f(p.script);return(g,n)=>(u(),d(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:l(()=>[o(e(J),{label:"Name",required:""},{default:l(()=>[o(e(A),{value:r.value.title,"onUpdate:value":n[0]||(n[0]=a=>r.value.title=a)},null,8,["value"])]),_:1}),o(F,{runtime:r.value},null,8,["runtime"])]),_:1}))}}),X={style:{width:"50%"}},Y={style:{width:"50%"}},Je=k({__name:"ScriptEditor",setup(p){const m=B(),r=N();function g(){m.push({name:"stages"})}const n=f("source-code"),a=f("preview"),c=f(null),b=f(!1),{result:i}=$(()=>Promise.all([R.get(),D.get(r.params.id),R.readTestData()]).then(([w,t,s])=>(t.updateInitialState("test_data",s),U({workspace:w,script:t})))),_=P.create(),S=f(null);return(w,t)=>(u(),d(M,{"no-margins":""},{navbar:l(()=>[e(i)?(u(),d(e(O),{key:0,title:e(i).script.title,style:{padding:"5px 10px"},onBack:g},{extra:l(()=>[o(W,{"show-save-button":!1,"editing-model":e(i).script},null,8,["editing-model"])]),_:1},8,["title"])):v("",!0)]),content:l(()=>[e(i)?(u(),d(e(j),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:l(()=>[x("div",X,[o(e(C),{"active-key":n.value,"onUpdate:activeKey":t[0]||(t[0]=s=>n.value=s)},{rightExtra:l(()=>[o(q,{model:e(i).script},null,8,["model"])]),default:l(()=>[o(e(y),{key:"source-code",tab:"Source code"}),o(e(y),{key:"settings",tab:"Settings"}),o(e(y),{key:"test-data",tab:"Thread data"})]),_:1},8,["active-key"]),n.value==="source-code"?(u(),d(E,{key:0,script:e(i).script,workspace:e(i).workspace},null,8,["script","workspace"])):v("",!0),e(i).script&&n.value==="settings"?(u(),d(Q,{key:1,script:e(i).script},null,8,["script"])):v("",!0),n.value==="test-data"?(u(),d(H,{key:2,"stage-run-id":c.value,"onUpdate:stageRunId":t[1]||(t[1]=s=>c.value=s),"enable-start-thread":b.value,"onUpdate:enableStartThread":t[2]||(t[2]=s=>b.value=s),stage:e(i).script,onFixInvalidJson:t[3]||(t[3]=(s,T)=>{var I;return(I=S.value)==null?void 0:I.fixJson(s,T)})},null,8,["stage-run-id","enable-start-thread","stage"])):v("",!0)]),x("div",Y,[o(e(C),{"active-key":a.value,"onUpdate:activeKey":t[4]||(t[4]=s=>a.value=s)},{default:l(()=>[o(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).script&&a.value==="preview"?(u(),d(G,{key:0,ref:"tester",script:e(i).script,"log-service":e(_),"stage-run-id":c.value,onUpdateStageRunId:t[5]||(t[5]=s=>c.value=s)},null,8,["script","log-service","stage-run-id"])):v("",!0)])]),_:1})):v("",!0)]),footer:l(()=>[o(L,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(_)},null,8,["log-service"])]),_:1}))}});export{Je as default};
//# sourceMappingURL=ScriptEditor.c4e26b10.js.map
