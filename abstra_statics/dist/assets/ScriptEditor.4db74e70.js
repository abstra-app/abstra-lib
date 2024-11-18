import{B as W}from"./BaseLayout.0d928ff1.js";import{R as F,S as U,E as D,a as L,L as P}from"./SourceCode.355e8a29.js";import{S as $}from"./SaveButton.91be38d7.js";import{a as K}from"./asyncComputed.62fe9f61.js";import{d as w,e as f,o as c,c as m,w as a,b as t,u as e,bK as V,cy as J,cx as M,X as O,eo as q,ea as H,f as X,eg as j,y as z,R as y,dg as h,db as I,aF as R,e9 as G,cW as Q}from"./vue-router.7d22a765.js";import"./editor.e28b46d6.js";import{S as Y}from"./scripts.b9182f88.js";import{W as Z}from"./workspaces.7db2ec4c.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.427787ea.js";import{T as te}from"./ThreadSelector.e5f2e543.js";import{N as ae}from"./NavbarControls.dc4d4339.js";import{b as oe}from"./index.21dc8b6c.js";import{A as k,T}from"./TabPane.4206d5f7.js";import{A as re,C as se}from"./CollapsePanel.e3bd0766.js";import{B as ie}from"./Badge.c37c51db.js";import"./uuid.65957d70.js";import"./validations.de16515c.js";import"./string.042fe6bc.js";import"./PhCopy.vue.834d7537.js";import"./PhCheckCircle.vue.912aee3f.js";import"./PhCopySimple.vue.b36c12a9.js";import"./PhCaretRight.vue.053320ac.js";import"./PhBug.vue.fd83bab4.js";import"./PhQuestion.vue.52f4cce8.js";import"./LoadingOutlined.0a0dc718.js";import"./polling.f65e8dae.js";import"./PhPencil.vue.6a1ca884.js";import"./toggleHighContrast.5f5c4f15.js";import"./index.3db2f466.js";import"./Card.ea12dbe7.js";import"./UnsavedChangesHandler.76f4b4a0.js";import"./ExclamationCircleOutlined.d11a1598.js";import"./workspaceStore.1847e3fb.js";import"./url.396c837f.js";import"./colorHelpers.e5ec8c13.js";import"./record.c63163fa.js";import"./index.185e14fb.js";import"./index.89bac5b6.js";import"./CloseCircleOutlined.8dad9616.js";import"./index.28152a0c.js";import"./popupNotifcation.f48fd864.js";import"./PhArrowSquareOut.vue.a1699b2d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f4235e74.js";import"./BookOutlined.238b8620.js";import"./PhChats.vue.afcd5876.js";import"./index.4c73e857.js";import"./Avatar.34816737.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[p]="3b4b1d30-cc9e-4f45-9f07-b11cd1fb445e",u._sentryDebugIdIdentifier="sentry-dbid-3b4b1d30-cc9e-4f45-9f07-b11cd1fb445e")}catch{}})();const ne=w({__name:"ScriptSettings",props:{script:{}},setup(u){const n=f(u.script);return(g,v)=>(c(),m(e(M),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(J),{label:"Name",required:""},{default:a(()=>[t(e(V),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(F,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),le={style:{width:"100%",display:"flex","flex-direction":"column"}},ue=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:p}){const n=u,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,p("update-stage-run-id",null)}};return(i,b)=>(c(),O("div",le,[t(ee,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:b[0]||(b[0]=x=>i.script.save())},null,8,["loading","disabled"])]))}}),ot=w({__name:"ScriptEditor",setup(u){const p=q(),n=H();function g(){p.push({name:"stages"})}const v=f(null),i=f("source-code"),b=f("preview");function x(){var r;if(!o.value)return;const l=o.value.script.codeContent;(r=v.value)==null||r.updateLocalEditorCode(l)}const s=f({attached:!1,stageRunId:null,isInitial:!1}),A=l=>s.value={...s.value,attached:!!l},B=X(()=>{var l;return(l=o.value)!=null&&l.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:!s.value.isInitial&&s.value.attached&&!s.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=K(async()=>{const[l,r]=await Promise.all([Z.get(),Y.get(n.params.id)]);return s.value.isInitial=r.isInitial,z({workspace:l,script:r})}),E=P.create(),_=f(null),S=l=>{var r;return l!==i.value&&((r=o.value)==null?void 0:r.script.hasChanges())};return(l,r)=>(c(),m(W,null,j({navbar:a(()=>[e(o)?(c(),m(e(oe),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ae,{"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(o)?(c(),m(D,{key:0},{left:a(()=>[t(e(T),{"active-key":i.value,"onUpdate:activeKey":r[0]||(r[0]=d=>i.value=d)},{rightExtra:a(()=>[t($,{model:e(o).script,onSave:x},null,8,["model"])]),default:a(()=>[t(e(k),{key:"source-code",tab:"Source code",disabled:S("source-code")},null,8,["disabled"]),t(e(k),{key:"settings",tab:"Settings",disabled:S("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),i.value==="source-code"?(c(),m(L,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):y("",!0),e(o).script&&i.value==="settings"?(c(),m(ne,{key:1,script:e(o).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(T),{"active-key":b.value,"onUpdate:activeKey":r[1]||(r[1]=d=>b.value=d)},{rightExtra:a(()=>[t(e(h),{align:"center",gap:"middle"},{default:a(()=>[t(e(h),{gap:"small"},{default:a(()=>[t(e(I),null,{default:a(()=>[R(G(s.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:s.value.attached,"onUpdate:checked":A},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(k),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&b.value==="preview"?(c(),m(ue,{key:0,ref:"tester",script:e(o).script,"execution-config":s.value,"disabled-warning":B.value,onUpdateStageRunId:r[2]||(r[2]=d=>s.value={...s.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(re),{key:"1"},{header:a(()=>[t(e(ie),{dot:s.value.attached&&!s.value.stageRunId},{default:a(()=>[t(e(I),null,{default:a(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(te,{"execution-config":s.value,"onUpdate:executionConfig":r[3]||(r[3]=d=>s.value=d),stage:e(o).script,onFixInvalidJson:r[4]||(r[4]=(d,N)=>{var C;return(C=_.value)==null?void 0:C.fixJson(d,N)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(o)?{name:"footer",fn:a(()=>[t(U,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(o).script,"log-service":e(E),workspace:e(o).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{ot as default};
//# sourceMappingURL=ScriptEditor.4db74e70.js.map
