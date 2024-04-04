import{d as _,r as v,b as p,eu as F,f as t,c as f,w as o,u as e,bx as N,eI as U,eA as $,H as E,eL as L,ew as y,e as I,aq as A}from"./outputWidgets.c44827f7.js";import{W as P}from"./workspaces.8c49b16c.js";import{a as W}from"./asyncComputed.996e6279.js";import{S as D}from"./scripts.ea6ca710.js";import"./envVars.ccbcfbd6.js";import{R as V,S as q,a as H,L as J}from"./SourceCode.baeffdf5.js";import{B as K}from"./BaseLayout.4dd25d3a.js";import{_ as M}from"./RunButton.vue_vue_type_script_setup_true_lang.c1341f70.js";import{A as j,F as z}from"./Form.4c73d002.js";import{N as G}from"./NavbarControls.5a5ede81.js";import{_ as O}from"./SaveButton.vue_vue_type_script_setup_true_lang.35a80974.js";import{T as Q}from"./ThreadSelector.3fa49830.js";import{b as X}from"./index.b65aac39.js";import{A as w}from"./index.23f11819.js";import{A as b,T as R}from"./TabPane.f9dd073e.js";import{A as T}from"./Text.8836cbe6.js";import{A as Y}from"./index.c92acf1f.js";import{A as Z,C as ee}from"./CollapsePanel.8bce9f09.js";import{B as te}from"./Badge.3a7d1c94.js";import"./runnerData.cf2934df.js";import"./url.e2af8c0e.js";import"./record.bdb649c9.js";import"./pubsub.7d1f2927.js";import"./uuid.dae279bc.js";import"./PhCaretRight.vue.1c05f9d5.js";import"./login.d01a1e03.js";import"./validations.5deb2380.js";import"./string.b07ea3cd.js";import"./toggleHighContrast.0ec8f346.js";import"./PhPencil.vue.239fee09.js";import"./index.01043d5a.js";import"./Card.f937e5af.js";import"./index.9caeac3c.js";import"./hasIn.885ab5c3.js";import"./index.d0fa904e.js";import"./fetch.d787318c.js";import"./popupNotifcation.a9f3e0f1.js";import"./PhArrowSquareOut.vue.1c6838e9.js";import"./Link.cd09bc70.js";import"./CloseCircleOutlined.02d04eca.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.441f9a8b.js";import"./BookOutlined.b31fbbf2.js";import"./Modal.4c526eed.js";import"./ant-design.70ed8419.js";import"./index.df1b7a2a.js";import"./index.68a499a2.js";import"./index.53517647.js";import"./index.875b5c99.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[c]="83279cae-8b08-4bdd-8427-77e91f31953f",u._sentryDebugIdIdentifier="sentry-dbid-83279cae-8b08-4bdd-8427-77e91f31953f")}catch{}})();const oe={style:{width:"100%",display:"flex","flex-direction":"column"}},re=_({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:c}){const s=u,g=v(!1),d=async()=>{g.value=!0;try{const i=s.executionConfig.attached&&s.executionConfig.stageRunId?await s.script.run(s.executionConfig.stageRunId):await s.script.test();i.stderr&&s.logService.log({type:"stderr",log:i.stderr}),i.stdout&&s.logService.log({type:"stdout",log:i.stdout})}finally{g.value=!1,c("update-stage-run-id",null)}};return(i,r)=>(p(),F("div",oe,[t(M,{loading:g.value,disabled:i.disabledWarning,onClick:d,onSave:r[0]||(r[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),ae=_({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,d)=>(p(),f(e(z),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[t(e(j),{label:"Name",required:""},{default:o(()=>[t(e(N),{value:s.value.title,"onUpdate:value":d[0]||(d[0]=i=>s.value.title=i)},null,8,["value"])]),_:1}),t(V,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),se={style:{width:"50%"}},ie={style:{width:"50%"}},ot=_({__name:"ScriptEditor",setup(u){const c=U(),s=$();function g(){c.push({name:"stages"})}const d=v("source-code"),i=v("preview"),r=v({attached:!1,stageRunId:null,pendingFork:!1}),h=m=>r.value={...r.value,attached:!!m},B=E(()=>{var m;return(m=a.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:r.value.attached&&r.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:r.value.attached&&!r.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:a}=W(async()=>{const[m,n]=await Promise.all([P.get(),D.get(s.params.id)]);return L({workspace:m,script:n})}),x=J.create(),S=v(null);return(m,n)=>(p(),f(K,{"no-margins":""},{navbar:o(()=>[e(a)?(p(),f(e(X),{key:0,title:e(a).script.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:g},{extra:o(()=>[t(G,{"show-save-button":!1,"editing-model":e(a).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:o(()=>[e(a)?(p(),f(e(w),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>[I("div",se,[t(e(R),{"active-key":d.value,"onUpdate:activeKey":n[0]||(n[0]=l=>d.value=l)},{rightExtra:o(()=>[t(O,{model:e(a).script},null,8,["model"])]),default:o(()=>[t(e(b),{key:"source-code",tab:"Source code"}),t(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),d.value==="source-code"?(p(),f(q,{key:0,script:e(a).script,workspace:e(a).workspace},null,8,["script","workspace"])):y("",!0),e(a).script&&d.value==="settings"?(p(),f(ae,{key:1,script:e(a).script},null,8,["script"])):y("",!0)]),I("div",ie,[t(e(R),{"active-key":i.value,"onUpdate:activeKey":n[1]||(n[1]=l=>i.value=l)},{rightExtra:o(()=>[t(e(w),{align:"center",gap:"middle"},{default:o(()=>[t(e(w),{gap:"small"},{default:o(()=>[t(e(T),null,{default:o(()=>[A("Continue workflow")]),_:1}),t(e(Y),{checked:r.value.attached,"onUpdate:checked":h},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(a).script&&i.value==="preview"?(p(),f(re,{key:0,ref:"tester",script:e(a).script,"log-service":e(x),"execution-config":r.value,"disabled-warning":B.value,onUpdateStageRunId:n[2]||(n[2]=l=>r.value={...r.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):y("",!0),t(e(ee),{ghost:"",style:{"margin-top":"20px"}},{default:o(()=>[t(e(Z),{key:"1"},{header:o(()=>[t(e(te),{dot:r.value.attached&&!!(r.value.pendingFork||!r.value.stageRunId)},{default:o(()=>[t(e(T),null,{default:o(()=>[A("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[t(Q,{"execution-config":r.value,"onUpdate:executionConfig":n[3]||(n[3]=l=>r.value=l),stage:e(a).script,onFixInvalidJson:n[4]||(n[4]=(l,k)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,k)})},null,8,["execution-config","stage"])]),_:1})]),_:1})])]),_:1})):y("",!0)]),footer:o(()=>{var l,k;return[t(H,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(x),stage:(l=e(a))==null?void 0:l.script,workspace:(k=e(a))==null?void 0:k.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{ot as default};
//# sourceMappingURL=ScriptEditor.0c3fdec6.js.map
