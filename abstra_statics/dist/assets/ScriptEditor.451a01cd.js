import{B as N}from"./BaseLayout.b765bd77.js";import{R as U,S as W,E as D,a as L,L as P}from"./SourceCode.388b93c7.js";import{S as $}from"./SaveButton.093c8e46.js";import{a as V}from"./asyncComputed.882312f1.js";import{d as w,e as f,o as c,c as m,w as a,b as t,u as e,bH as q,cv as H,cu as J,X as K,eq as M,ed as O,f as j,ej as X,y as z,R as k,dd as C,d8 as I,aF as R,ec as G,cT as Q}from"./vue-router.9b93fdf7.js";import"./editor.86c50889.js";import{S as Y}from"./scripts.5f334de2.js";import{W as Z}from"./workspaces.87c88c08.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.5a365816.js";import{T as te}from"./ThreadSelector.17d23999.js";import{N as ae}from"./NavbarControls.f2a4d0f4.js";import{b as re}from"./index.ccbb614c.js";import{A as y,T}from"./TabPane.b42de323.js";import{A as oe,C as se}from"./CollapsePanel.02bee1b8.js";import{B as ie}from"./Badge.5f6aa918.js";import"./uuid.ae9b4d75.js";import"./validations.0e5ca8e3.js";import"./string.be8a5ff2.js";import"./PhCopy.vue.4e296974.js";import"./PhCheckCircle.vue.12e51541.js";import"./PhCopySimple.vue.137a5f7a.js";import"./PhCaretRight.vue.c3f5f9a9.js";import"./PhBug.vue.2a572dcb.js";import"./PhQuestion.vue.7a351a1a.js";import"./LoadingOutlined.8914f6ad.js";import"./polling.86f33942.js";import"./PhPencil.vue.933c9686.js";import"./toggleHighContrast.531c0fc1.js";import"./index.7dcda2b0.js";import"./Card.76bcd2dc.js";import"./UnsavedChangesHandler.99a85d58.js";import"./ExclamationCircleOutlined.f9abc1d7.js";import"./workspaceStore.da620fcc.js";import"./url.e163437e.js";import"./colorHelpers.c8a16bb8.js";import"./record.60bb65a4.js";import"./index.332645c7.js";import"./index.d1fee608.js";import"./CloseCircleOutlined.6bc4e94f.js";import"./index.acbc2d42.js";import"./popupNotifcation.60752fae.js";import"./PhArrowSquareOut.vue.32db4c1b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0ebd6aae.js";import"./BookOutlined.50a8c34a.js";import"./PhChats.vue.6bf28e9f.js";import"./index.d046e34c.js";import"./Avatar.7147ada4.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[p]="a23ed7be-4891-4bd9-aa89-5c1fb4402c10",u._sentryDebugIdIdentifier="sentry-dbid-a23ed7be-4891-4bd9-aa89-5c1fb4402c10")}catch{}})();const ne=w({__name:"ScriptSettings",props:{script:{}},setup(u){const n=f(u.script);return(g,v)=>(c(),m(e(J),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(H),{label:"Name",required:""},{default:a(()=>[t(e(q),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(U,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),le={style:{width:"100%",display:"flex","flex-direction":"column"}},ue=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:p}){const n=u,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,p("update-stage-run-id",null)}};return(i,b)=>(c(),K("div",le,[t(ee,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:b[0]||(b[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),rt=w({__name:"ScriptEditor",setup(u){const p=M(),n=O();function g(){p.push({name:"stages"})}const v=f(null),i=f("source-code"),b=f("preview");function h(){var o;if(!r.value)return;const l=r.value.script.codeContent;(o=v.value)==null||o.updateLocalEditorCode(l)}const s=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=l=>s.value={...s.value,attached:!!l},A=j(()=>{var l;return(l=r.value)!=null&&l.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:s.value.attached&&s.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!s.value.isInitial&&s.value.attached&&!s.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=V(async()=>{const[l,o]=await Promise.all([Z.get(),Y.get(n.params.id)]);return s.value.isInitial=o.isInitial,z({workspace:l,script:o})}),B=P.create(),_=f(null),x=l=>{var o;return l!==i.value&&((o=r.value)==null?void 0:o.script.hasChanges())};return(l,o)=>(c(),m(N,null,X({navbar:a(()=>[e(r)?(c(),m(e(re),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ae,{"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):k("",!0)]),content:a(()=>[e(r)?(c(),m(D,{key:0},{left:a(()=>[t(e(T),{"active-key":i.value,"onUpdate:activeKey":o[0]||(o[0]=d=>i.value=d)},{rightExtra:a(()=>[t($,{model:e(r).script,onSave:h},null,8,["model"])]),default:a(()=>[t(e(y),{key:"source-code",tab:"Source code",disabled:x("source-code")},null,8,["disabled"]),t(e(y),{key:"settings",tab:"Settings",disabled:x("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),i.value==="source-code"?(c(),m(L,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):k("",!0),e(r).script&&i.value==="settings"?(c(),m(ne,{key:1,script:e(r).script},null,8,["script"])):k("",!0)]),right:a(()=>[t(e(T),{"active-key":b.value,"onUpdate:activeKey":o[1]||(o[1]=d=>b.value=d)},{rightExtra:a(()=>[t(e(C),{align:"center",gap:"middle"},{default:a(()=>[t(e(C),{gap:"small"},{default:a(()=>[t(e(I),null,{default:a(()=>[R(G(s.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:s.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&b.value==="preview"?(c(),m(ue,{key:0,ref:"tester",script:e(r).script,"execution-config":s.value,"disabled-warning":A.value,onUpdateStageRunId:o[2]||(o[2]=d=>s.value={...s.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):k("",!0),t(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(oe),{key:"1"},{header:a(()=>[t(e(ie),{dot:s.value.attached&&!!(s.value.pendingFork||!s.value.stageRunId)},{default:a(()=>[t(e(I),null,{default:a(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(te,{"execution-config":s.value,"onUpdate:executionConfig":o[3]||(o[3]=d=>s.value=d),stage:e(r).script,onFixInvalidJson:o[4]||(o[4]=(d,E)=>{var S;return(S=_.value)==null?void 0:S.fixJson(d,E)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):k("",!0)]),_:2},[e(r)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(r).script,"log-service":e(B),workspace:e(r).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{rt as default};
//# sourceMappingURL=ScriptEditor.451a01cd.js.map
