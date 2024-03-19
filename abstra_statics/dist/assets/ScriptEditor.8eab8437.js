import{d as k,r as f,b as u,ev as h,f as o,c as d,w as l,u as t,bz as A,eA as B,eB as N,eL as U,ex as v,e as x}from"./outputWidgets.ed989e0a.js";import{W as R}from"./workspaces.794fe924.js";import{a as $}from"./asyncComputed.9f78a6df.js";import{S as D}from"./scripts.2a788015.js";import"./envVars.8fdda236.js";import{R as F,S as L,a as E,L as P}from"./SourceCode.2621d33c.js";import{B as V}from"./BaseLayout.7ec04095.js";import{_ as J}from"./RunButton.vue_vue_type_script_setup_true_lang.09c5850d.js";import{A as K,F as M}from"./Form.fe660512.js";import{N as W}from"./NavbarControls.c1407acf.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.c23abd7c.js";import{S as z}from"./StageRunSelector.c866b4a1.js";import{c as H}from"./index.e56fd585.js";import{A as j}from"./index.881316ff.js";import{A as y,T as C}from"./TabPane.1db82216.js";import"./runnerData.8a85b982.js";import"./url.7656a70f.js";import"./record.f2e811cc.js";import"./pubsub.14278e58.js";import"./uuid.ea9151ea.js";import"./icons.8f8b8d07.js";import"./jobs.6248c353.js";import"./validations.27e8afbf.js";import"./string.068afc10.js";import"./toggleHighContrast.dcfba0d2.js";import"./index.08bc448a.js";import"./Card.3876795d.js";import"./Text.8e13d454.js";import"./Base.42a4c5ca.js";import"./Typography.5e43ce25.js";import"./hasIn.264c6078.js";import"./index.babdaf2d.js";import"./CloseCircleOutlined.bb70643e.js";import"./popupNotifcation.c17802b7.js";import"./Link.3b52e7a5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2269c93.js";import"./Paragraph.4678e06b.js";import"./Modal.1ce4fb47.js";import"./ant-design.91be1275.js";import"./index.b8ad5c16.js";import"./index.1758cc5b.js";import"./index.9a4b372b.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[m]="4046fb96-4139-4821-89c2-76f049f3d6dd",p._sentryDebugIdIdentifier="sentry-dbid-4046fb96-4139-4821-89c2-76f049f3d6dd")}catch{}})();const G={style:{width:"100%",display:"flex","flex-direction":"column"}},O=k({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(p,{emit:m}){const r=p,g=f(!1),n=async()=>{g.value=!0;try{const s=r.stageRunId?await r.script.run(r.stageRunId):await r.script.test();s.stderr&&r.logService.log({type:"stderr",log:s.stderr}),s.stdout&&r.logService.log({type:"stdout",log:s.stdout})}finally{g.value=!1,r.stageRunId&&m("update-stage-run-id",null)}};return(s,c)=>(u(),h("div",G,[o(J,{loading:g.value,disabled:s.script.hasChanges(),onClick:n,onSave:c[0]||(c[0]=b=>s.script.save())},null,8,["loading","disabled"])]))}}),Q=k({__name:"ScriptSettings",props:{script:{}},setup(p){const r=f(p.script);return(g,n)=>(u(),d(t(M),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:l(()=>[o(t(K),{label:"Name",required:""},{default:l(()=>[o(t(A),{value:r.value.title,"onUpdate:value":n[0]||(n[0]=s=>r.value.title=s)},null,8,["value"])]),_:1}),o(F,{runtime:r.value},null,8,["runtime"])]),_:1}))}}),X={style:{width:"50%"}},Y={style:{width:"50%"}},Mt=k({__name:"ScriptEditor",setup(p){const m=B(),r=N();function g(){m.push({name:"stages"})}const n=f("source-code"),s=f("preview"),c=f(null),b=f(!1),{result:i}=$(()=>Promise.all([R.get(),D.get(r.params.id),R.readTestData()]).then(([w,e,a])=>(e.updateInitialState("test_data",a),U({workspace:w,script:e})))),_=P.create(),S=f(null);return(w,e)=>(u(),d(V,{"no-margins":""},{navbar:l(()=>[t(i)?(u(),d(t(H),{key:0,title:t(i).script.title,style:{padding:"5px 10px"},onBack:g},{extra:l(()=>[o(W,{"show-save-button":!1,"editing-model":t(i).script},null,8,["editing-model"])]),_:1},8,["title"])):v("",!0)]),content:l(()=>[t(i)?(u(),d(t(j),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:l(()=>[x("div",X,[o(t(C),{"active-key":n.value,"onUpdate:activeKey":e[0]||(e[0]=a=>n.value=a)},{rightExtra:l(()=>[o(q,{model:t(i).script},null,8,["model"])]),default:l(()=>[o(t(y),{key:"source-code",tab:"Source code"}),o(t(y),{key:"settings",tab:"Settings"}),o(t(y),{key:"test-data",tab:"Thread data"})]),_:1},8,["active-key"]),n.value==="source-code"?(u(),d(L,{key:0,script:t(i).script,workspace:t(i).workspace},null,8,["script","workspace"])):v("",!0),t(i).script&&n.value==="settings"?(u(),d(Q,{key:1,script:t(i).script},null,8,["script"])):v("",!0),n.value==="test-data"?(u(),d(z,{key:2,"stage-run-id":c.value,"onUpdate:stageRunId":e[1]||(e[1]=a=>c.value=a),"enable-start-thread":b.value,"onUpdate:enableStartThread":e[2]||(e[2]=a=>b.value=a),stage:t(i).script,onFixInvalidJson:e[3]||(e[3]=(a,T)=>{var I;return(I=S.value)==null?void 0:I.fixJson(a,T)})},null,8,["stage-run-id","enable-start-thread","stage"])):v("",!0)]),x("div",Y,[o(t(C),{"active-key":s.value,"onUpdate:activeKey":e[4]||(e[4]=a=>s.value=a)},{default:l(()=>[o(t(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),t(i).script&&s.value==="preview"?(u(),d(O,{key:0,ref:"tester",script:t(i).script,"log-service":t(_),"stage-run-id":c.value,onUpdateStageRunId:e[5]||(e[5]=a=>c.value=a)},null,8,["script","log-service","stage-run-id"])):v("",!0)])]),_:1})):v("",!0)]),footer:l(()=>[o(E,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":t(_)},null,8,["log-service"])]),_:1}))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.8eab8437.js.map
