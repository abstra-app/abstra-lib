import{B as N}from"./BaseLayout.88fd9aed.js";import{R as U,S as W,E as D,a as L,L as P}from"./SourceCode.cc2efa3b.js";import{S as $}from"./SaveButton.6e116be7.js";import{a as V}from"./asyncComputed.0257c0c4.js";import{d as w,e as f,o as p,c as m,w as a,b as t,u as e,bH as H,cv as J,cu as K,X as M,ep as O,ea as q,f as X,eh as j,y as z,R as k,dd as C,d8 as I,aF as R,e9 as G,cT as Q}from"./vue-router.db6ffb32.js";import"./editor.82a0cdc3.js";import{S as Y}from"./scripts.0466cad3.js";import{W as Z}from"./workspaces.9d609bde.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.852454c9.js";import{T as te}from"./ThreadSelector.46894706.js";import{N as ae}from"./NavbarControls.b75e3b80.js";import{b as re}from"./index.6078393c.js";import{A as y,T}from"./TabPane.944d6217.js";import{A as oe,C as se}from"./CollapsePanel.4b1d17c7.js";import{B as ie}from"./Badge.c87f38bd.js";import"./uuid.4f47212a.js";import"./validations.83490e53.js";import"./string.c6c5ee75.js";import"./PhCopy.vue.b8f010c3.js";import"./PhCheckCircle.vue.6fd85b6c.js";import"./PhCopySimple.vue.c825eb25.js";import"./PhCaretRight.vue.41af7225.js";import"./PhBug.vue.0359fc6d.js";import"./PhQuestion.vue.aa75c240.js";import"./LoadingOutlined.0355bac5.js";import"./polling.a5b915e8.js";import"./PhPencil.vue.d5d2f8ec.js";import"./toggleHighContrast.61edb82a.js";import"./index.3ed31972.js";import"./Card.d2d2793e.js";import"./UnsavedChangesHandler.3070d7b9.js";import"./ExclamationCircleOutlined.ceb492bd.js";import"./workspaceStore.6a0dd9fe.js";import"./url.5d026255.js";import"./colorHelpers.925e1b7c.js";import"./record.583e5102.js";import"./index.d49fda49.js";import"./index.565cd484.js";import"./CloseCircleOutlined.2369147c.js";import"./index.311c7169.js";import"./popupNotifcation.514d9c64.js";import"./PhArrowSquareOut.vue.f9afd5cd.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.904df543.js";import"./BookOutlined.1d8afbce.js";import"./PhChats.vue.6855c232.js";import"./index.23ec6fdb.js";import"./Avatar.f8c5a58c.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[c]="7e9f01ec-e4b3-4b54-b74d-a54da74b02a2",u._sentryDebugIdIdentifier="sentry-dbid-7e9f01ec-e4b3-4b54-b74d-a54da74b02a2")}catch{}})();const ne=w({__name:"ScriptSettings",props:{script:{}},setup(u){const n=f(u.script);return(g,v)=>(p(),m(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(J),{label:"Name",required:""},{default:a(()=>[t(e(H),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(U,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),le={style:{width:"100%",display:"flex","flex-direction":"column"}},ue=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:c}){const n=u,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,c("update-stage-run-id",null)}};return(i,b)=>(p(),M("div",le,[t(ee,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:b[0]||(b[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),rt=w({__name:"ScriptEditor",setup(u){const c=O(),n=q();function g(){c.push({name:"stages"})}const v=f(null),i=f("source-code"),b=f("preview");function h(){var o;if(!r.value)return;const l=r.value.script.codeContent;(o=v.value)==null||o.updateLocalEditorCode(l)}const s=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=l=>s.value={...s.value,attached:!!l},A=X(()=>{var l;return(l=r.value)!=null&&l.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:s.value.attached&&s.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!s.value.isInitial&&s.value.attached&&!s.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=V(async()=>{const[l,o]=await Promise.all([Z.get(),Y.get(n.params.id)]);return s.value.isInitial=o.isInitial,z({workspace:l,script:o})}),B=P.create(),_=f(null),x=l=>{var o;return l!==i.value&&((o=r.value)==null?void 0:o.script.hasChanges())};return(l,o)=>(p(),m(N,null,j({navbar:a(()=>[e(r)?(p(),m(e(re),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ae,{"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):k("",!0)]),content:a(()=>[e(r)?(p(),m(D,{key:0},{left:a(()=>[t(e(T),{"active-key":i.value,"onUpdate:activeKey":o[0]||(o[0]=d=>i.value=d)},{rightExtra:a(()=>[t($,{model:e(r).script,onSave:h},null,8,["model"])]),default:a(()=>[t(e(y),{key:"source-code",tab:"Source code",disabled:x("source-code")},null,8,["disabled"]),t(e(y),{key:"settings",tab:"Settings",disabled:x("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),i.value==="source-code"?(p(),m(L,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):k("",!0),e(r).script&&i.value==="settings"?(p(),m(ne,{key:1,script:e(r).script},null,8,["script"])):k("",!0)]),right:a(()=>[t(e(T),{"active-key":b.value,"onUpdate:activeKey":o[1]||(o[1]=d=>b.value=d)},{rightExtra:a(()=>[t(e(C),{align:"center",gap:"middle"},{default:a(()=>[t(e(C),{gap:"small"},{default:a(()=>[t(e(I),null,{default:a(()=>[R(G(s.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:s.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&b.value==="preview"?(p(),m(ue,{key:0,ref:"tester",script:e(r).script,"execution-config":s.value,"disabled-warning":A.value,onUpdateStageRunId:o[2]||(o[2]=d=>s.value={...s.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):k("",!0),t(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(oe),{key:"1"},{header:a(()=>[t(e(ie),{dot:s.value.attached&&!!(s.value.pendingFork||!s.value.stageRunId)},{default:a(()=>[t(e(I),null,{default:a(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(te,{"execution-config":s.value,"onUpdate:executionConfig":o[3]||(o[3]=d=>s.value=d),stage:e(r).script,onFixInvalidJson:o[4]||(o[4]=(d,E)=>{var S;return(S=_.value)==null?void 0:S.fixJson(d,E)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):k("",!0)]),_:2},[e(r)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(r).script,"log-service":e(B),workspace:e(r).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{rt as default};
//# sourceMappingURL=ScriptEditor.33740eb8.js.map
