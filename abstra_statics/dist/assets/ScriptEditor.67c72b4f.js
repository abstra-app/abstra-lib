import{d as b,r as v,b as c,eu as F,f as t,c as f,w as o,u as e,bx as N,eI as U,eA as $,H as E,eL as L,ew as y,e as I,aq as A}from"./outputWidgets.a2cb859a.js";import{W as P}from"./workspaces.8d71ce76.js";import{a as W}from"./asyncComputed.7f6ea228.js";import{S as D}from"./scripts.e597d206.js";import"./envVars.b68edddf.js";import{R as V,S as q,a as H,L as J}from"./SourceCode.f5dedc1c.js";import{B as K}from"./BaseLayout.977af5ca.js";import{_ as M}from"./RunButton.vue_vue_type_script_setup_true_lang.27a04956.js";import{A as j,F as z}from"./Form.39814ec1.js";import{N as G}from"./NavbarControls.c65c59cb.js";import{_ as O}from"./SaveButton.vue_vue_type_script_setup_true_lang.0511da3e.js";import{T as Q}from"./ThreadSelector.934cb63d.js";import{b as X}from"./index.258f2e49.js";import{A as w}from"./index.cbf5db4d.js";import{A as _,T as R}from"./TabPane.d4ba041a.js";import{A as T}from"./Text.c857a52e.js";import{A as Y}from"./index.685875c2.js";import{A as Z,C as ee}from"./CollapsePanel.27c899d5.js";import{B as te}from"./Badge.8ac1b151.js";import"./runnerData.f77af4da.js";import"./url.722655b0.js";import"./record.50e662d1.js";import"./pubsub.d2194df9.js";import"./uuid.458c2a84.js";import"./PhCaretRight.vue.18f61435.js";import"./login.f107201d.js";import"./validations.3fc60220.js";import"./string.7c62be70.js";import"./toggleHighContrast.cddc8d46.js";import"./PhPencil.vue.67b09fed.js";import"./index.473effb1.js";import"./Card.14c15dd2.js";import"./index.684a5a19.js";import"./hasIn.16f0ccac.js";import"./index.a0982ae8.js";import"./fetch.d3898f3b.js";import"./popupNotifcation.40ba4d94.js";import"./PhArrowSquareOut.vue.775dcafd.js";import"./Link.3a7fc5f8.js";import"./CloseCircleOutlined.df062cc8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.102404dc.js";import"./BookOutlined.4e84558f.js";import"./Modal.d4ab2177.js";import"./ant-design.568b4963.js";import"./index.aacb321e.js";import"./index.1ccd1eb9.js";import"./index.0cc4760d.js";import"./index.48cb8c58.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[d]="635e70f8-a494-433c-97c1-ae41c4f3865a",u._sentryDebugIdIdentifier="sentry-dbid-635e70f8-a494-433c-97c1-ae41c4f3865a")}catch{}})();const oe={style:{width:"100%",display:"flex","flex-direction":"column"}},re=b({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:d}){const s=u,g=v(!1),p=async()=>{g.value=!0;try{const i=s.executionConfig.attached&&s.executionConfig.stageRunId?await s.script.run(s.executionConfig.stageRunId):await s.script.test();i.stderr&&s.logService.log({type:"stderr",log:i.stderr}),i.stdout&&s.logService.log({type:"stdout",log:i.stdout})}finally{g.value=!1,d("update-stage-run-id",null)}};return(i,r)=>(c(),F("div",oe,[t(M,{loading:g.value,disabled:i.disabledWarning,onClick:p,onSave:r[0]||(r[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),ae=b({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,p)=>(c(),f(e(z),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[t(e(j),{label:"Name",required:""},{default:o(()=>[t(e(N),{value:s.value.title,"onUpdate:value":p[0]||(p[0]=i=>s.value.title=i)},null,8,["value"])]),_:1}),t(V,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),se={style:{width:"50%"}},ie={style:{width:"50%"}},ot=b({__name:"ScriptEditor",setup(u){const d=U(),s=$();function g(){d.push({name:"stages"})}const p=v("source-code"),i=v("preview"),r=v({attached:!1,stageRunId:null,pendingFork:!1}),h=m=>r.value={...r.value,attached:!!m},B=E(()=>{var m;return(m=a.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:r.value.attached&&r.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:r.value.attached&&!r.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:a}=W(async()=>{const[m,n]=await Promise.all([P.get(),D.get(s.params.id)]);return L({workspace:m,script:n})}),x=J.create(),S=v(null);return(m,n)=>(c(),f(K,{"no-margins":""},{navbar:o(()=>[e(a)?(c(),f(e(X),{key:0,title:e(a).script.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:g},{extra:o(()=>[t(G,{"show-save-button":!1,"editing-model":e(a).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:o(()=>[e(a)?(c(),f(e(w),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>[I("div",se,[t(e(R),{"active-key":p.value,"onUpdate:activeKey":n[0]||(n[0]=l=>p.value=l)},{rightExtra:o(()=>[t(O,{model:e(a).script},null,8,["model"])]),default:o(()=>[t(e(_),{key:"source-code",tab:"Source code"}),t(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),p.value==="source-code"?(c(),f(q,{key:0,script:e(a).script,workspace:e(a).workspace},null,8,["script","workspace"])):y("",!0),e(a).script&&p.value==="settings"?(c(),f(ae,{key:1,script:e(a).script},null,8,["script"])):y("",!0)]),I("div",ie,[t(e(R),{"active-key":i.value,"onUpdate:activeKey":n[1]||(n[1]=l=>i.value=l)},{rightExtra:o(()=>[t(e(w),{align:"center",gap:"middle"},{default:o(()=>[t(e(w),{gap:"small"},{default:o(()=>[t(e(T),null,{default:o(()=>[A("Continue workflow")]),_:1}),t(e(Y),{checked:r.value.attached,"onUpdate:checked":h},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[t(e(_),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(a).script&&i.value==="preview"?(c(),f(re,{key:0,ref:"tester",script:e(a).script,"log-service":e(x),"execution-config":r.value,"disabled-warning":B.value,onUpdateStageRunId:n[2]||(n[2]=l=>r.value={...r.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):y("",!0),t(e(ee),{ghost:"",style:{"margin-top":"20px"}},{default:o(()=>[t(e(Z),{key:"1"},{header:o(()=>[t(e(te),{dot:r.value.attached&&!!(r.value.pendingFork||!r.value.stageRunId)},{default:o(()=>[t(e(T),null,{default:o(()=>[A("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[t(Q,{"execution-config":r.value,"onUpdate:executionConfig":n[3]||(n[3]=l=>r.value=l),stage:e(a).script,onFixInvalidJson:n[4]||(n[4]=(l,k)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,k)})},null,8,["execution-config","stage"])]),_:1})]),_:1})])]),_:1})):y("",!0)]),footer:o(()=>{var l,k;return[t(H,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(x),stage:(l=e(a))==null?void 0:l.script,workspace:(k=e(a))==null?void 0:k.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{ot as default};
//# sourceMappingURL=ScriptEditor.67c72b4f.js.map
