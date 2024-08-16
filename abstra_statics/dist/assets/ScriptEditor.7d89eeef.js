import{B as E}from"./BaseLayout.dbb58bef.js";import{R as N,S as W,E as P,a as U,L as D}from"./SourceCode.38d67ee1.js";import{S as L}from"./SaveButton.028f0b84.js";import{a as $}from"./asyncComputed.d365a226.js";import{d as w,e as f,o as p,c as m,w as a,b as t,u as e,bD as V,cs as J,cr as K,W as M,ek as O,e7 as q,f as H,ed as j,y as z,R as y,d9 as S,d4 as C,ax as I,e6 as G,cP as Q}from"./vue-router.717c9672.js";import"./linters.3aaeca3c.js";import{S as X}from"./scripts.f4842430.js";import{W as Y}from"./workspaces.64d502c0.js";import{_ as Z}from"./RunButton.vue_vue_type_script_setup_true_lang.e387bf32.js";import{T as ee}from"./ThreadSelector.60999faf.js";import{N as te}from"./NavbarControls.9d0481a9.js";import{b as ae}from"./index.ab70b27c.js";import{A as b,T as R}from"./TabPane.67eb7913.js";import{A as re,C as oe}from"./CollapsePanel.4e9b1227.js";import{B as ie}from"./Badge.f8ec09a6.js";import"./uuid.93cb814e.js";import"./jobs.e19790ff.js";import"./record.18236b7c.js";import"./validations.46a93afc.js";import"./string.570c2d93.js";import"./editor.2e8da464.js";import"./workspaceStore.92f0d764.js";import"./url.e88fe7d5.js";import"./PhCopy.vue.3a56a463.js";import"./PhCheckCircle.vue.9f1a6abc.js";import"./PhCopySimple.vue.8b1e2be4.js";import"./PhCaretRight.vue.c0025b4e.js";import"./PhBug.vue.ae4b6dff.js";import"./PhQuestion.vue.45127019.js";import"./LoadingOutlined.2ca13f29.js";import"./PhPencil.vue.c0dffe79.js";import"./toggleHighContrast.4a531fbd.js";import"./index.bee51fc7.js";import"./Card.499b2bc2.js";import"./PhFloppyDisk.vue.cf114e9a.js";import"./ExclamationCircleOutlined.82b04103.js";import"./index.32ba1c6c.js";import"./index.10f425f9.js";import"./CloseCircleOutlined.4af5b0a4.js";import"./index.7cb56e87.js";import"./popupNotifcation.309b8b62.js";import"./PhArrowSquareOut.vue.a5c0d548.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js";import"./BookOutlined.abfccf79.js";import"./PhChats.vue.9fec7b9d.js";import"./index.687b2b23.js";import"./Avatar.64e81e93.js";import"./isNumeric.75337b1e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="010a3e72-d1ca-4fbb-99fc-961d2c62b91e",l._sentryDebugIdIdentifier="sentry-dbid-010a3e72-d1ca-4fbb-99fc-961d2c62b91e")}catch{}})();const se=w({__name:"ScriptSettings",props:{script:{}},setup(l){const n=f(l.script);return(g,v)=>(p(),m(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(J),{label:"Name",required:""},{default:a(()=>[t(e(V),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=s=>n.value.title=s)},null,8,["value"])]),_:1}),t(N,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),ne={style:{width:"100%",display:"flex","flex-direction":"column"}},le=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(l,{emit:c}){const n=l,g=f(!1),v=async()=>{var s;g.value=!0;try{n.executionConfig.attached?await n.script.run((s=n.executionConfig.stageRunId)!=null?s:null):await n.script.test()}finally{g.value=!1,c("update-stage-run-id",null)}};return(s,k)=>(p(),M("div",ne,[t(Z,{loading:g.value,disabled:s.disabledWarning,onClick:v,onSave:k[0]||(k[0]=x=>s.script.save())},null,8,["loading","disabled"])]))}}),rt=w({__name:"ScriptEditor",setup(l){const c=O(),n=q();function g(){c.push({name:"stages"})}const v=f(null),s=f("source-code"),k=f("preview");function x(){var i;if(!o.value)return;const u=o.value.script.codeContent;(i=v.value)==null||i.updateLocalEditorCode(u)}const r=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),T=u=>r.value={...r.value,attached:!!u},A=H(()=>{var u;return(u=o.value)!=null&&u.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:r.value.attached&&r.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!r.value.isInitial&&r.value.attached&&!r.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=$(async()=>{const[u,i]=await Promise.all([Y.get(),X.get(n.params.id)]);return r.value.isInitial=i.isInitial,z({workspace:u,script:i})}),F=D.create(),_=f(null);return(u,i)=>(p(),m(E,null,j({navbar:a(()=>[e(o)?(p(),m(e(ae),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(te,{"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(o)?(p(),m(P,{key:0},{left:a(()=>[t(e(R),{"active-key":s.value,"onUpdate:activeKey":i[0]||(i[0]=d=>s.value=d)},{rightExtra:a(()=>[t(L,{model:e(o).script,onSave:x},null,8,["model"])]),default:a(()=>[t(e(b),{key:"source-code",tab:"Source code"}),t(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),s.value==="source-code"?(p(),m(U,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):y("",!0),e(o).script&&s.value==="settings"?(p(),m(se,{key:1,script:e(o).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(R),{"active-key":k.value,"onUpdate:activeKey":i[1]||(i[1]=d=>k.value=d)},{rightExtra:a(()=>[t(e(S),{align:"center",gap:"middle"},{default:a(()=>[t(e(S),{gap:"small"},{default:a(()=>[t(e(C),null,{default:a(()=>[I(G(r.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:r.value.attached,"onUpdate:checked":T},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&k.value==="preview"?(p(),m(le,{key:0,ref:"tester",script:e(o).script,"execution-config":r.value,"disabled-warning":A.value,onUpdateStageRunId:i[2]||(i[2]=d=>r.value={...r.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(oe),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(re),{key:"1"},{header:a(()=>[t(e(ie),{dot:r.value.attached&&!!(r.value.pendingFork||!r.value.stageRunId)},{default:a(()=>[t(e(C),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(ee,{"execution-config":r.value,"onUpdate:executionConfig":i[3]||(i[3]=d=>r.value=d),stage:e(o).script,onFixInvalidJson:i[4]||(i[4]=(d,B)=>{var h;return(h=_.value)==null?void 0:h.fixJson(d,B)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(o)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(o).script,"log-service":e(F),workspace:e(o).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{rt as default};
//# sourceMappingURL=ScriptEditor.7d89eeef.js.map
