import{B as N}from"./BaseLayout.cf1a8565.js";import{R as U,S as W,E as D,a as L,L as P}from"./SourceCode.fcfbb5bc.js";import{S as $}from"./SaveButton.9d4c7a9e.js";import{a as V}from"./asyncComputed.303c4711.js";import{d as w,e as f,o as p,c as m,w as a,b as t,u as e,bH as q,cv as H,cu as J,X as K,eq as M,ed as O,f as j,ej as X,y as z,R as k,dd as C,d8 as I,aF as R,ec as G,cT as Q}from"./vue-router.2e54b11a.js";import"./editor.4a3c140d.js";import{S as Y}from"./scripts.565f5b05.js";import{W as Z}from"./workspaces.44316414.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.2597359d.js";import{T as te}from"./ThreadSelector.486a8352.js";import{N as ae}from"./NavbarControls.4980acb2.js";import{b as re}from"./index.af34546e.js";import{A as y,T}from"./TabPane.759b8f23.js";import{A as oe,C as se}from"./CollapsePanel.293a9e8a.js";import{B as ie}from"./Badge.e941d182.js";import"./uuid.370dd721.js";import"./validations.ba338195.js";import"./string.3ceb2e8d.js";import"./PhCopy.vue.eeee5a17.js";import"./PhCheckCircle.vue.7f7e4115.js";import"./PhCopySimple.vue.0b69f9dd.js";import"./PhCaretRight.vue.ef86116c.js";import"./PhBug.vue.7ab48454.js";import"./PhQuestion.vue.1c756863.js";import"./LoadingOutlined.9689482d.js";import"./polling.6c121349.js";import"./PhPencil.vue.01bc8973.js";import"./toggleHighContrast.21fcd7c1.js";import"./index.18ecca82.js";import"./Card.63901103.js";import"./UnsavedChangesHandler.f49aca66.js";import"./ExclamationCircleOutlined.5e577021.js";import"./workspaceStore.207a808b.js";import"./url.4dbbe1b8.js";import"./colorHelpers.46dff2f3.js";import"./record.e40d3191.js";import"./index.e0a29a15.js";import"./index.6f8a2c84.js";import"./CloseCircleOutlined.19e34088.js";import"./index.e0435ee5.js";import"./popupNotifcation.3331779b.js";import"./PhArrowSquareOut.vue.dbfe9071.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e1dfa035.js";import"./BookOutlined.0d0cd947.js";import"./PhChats.vue.b1fd509b.js";import"./index.ceea7f6b.js";import"./Avatar.d437303e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[c]="89eff6fe-bba6-4a8d-beb6-84bd0eb414b6",u._sentryDebugIdIdentifier="sentry-dbid-89eff6fe-bba6-4a8d-beb6-84bd0eb414b6")}catch{}})();const ne=w({__name:"ScriptSettings",props:{script:{}},setup(u){const n=f(u.script);return(g,v)=>(p(),m(e(J),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(H),{label:"Name",required:""},{default:a(()=>[t(e(q),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(U,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),le={style:{width:"100%",display:"flex","flex-direction":"column"}},ue=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:c}){const n=u,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,c("update-stage-run-id",null)}};return(i,b)=>(p(),K("div",le,[t(ee,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:b[0]||(b[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),rt=w({__name:"ScriptEditor",setup(u){const c=M(),n=O();function g(){c.push({name:"stages"})}const v=f(null),i=f("source-code"),b=f("preview");function h(){var o;if(!r.value)return;const l=r.value.script.codeContent;(o=v.value)==null||o.updateLocalEditorCode(l)}const s=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=l=>s.value={...s.value,attached:!!l},A=j(()=>{var l;return(l=r.value)!=null&&l.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:s.value.attached&&s.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!s.value.isInitial&&s.value.attached&&!s.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=V(async()=>{const[l,o]=await Promise.all([Z.get(),Y.get(n.params.id)]);return s.value.isInitial=o.isInitial,z({workspace:l,script:o})}),B=P.create(),_=f(null),x=l=>{var o;return l!==i.value&&((o=r.value)==null?void 0:o.script.hasChanges())};return(l,o)=>(p(),m(N,null,X({navbar:a(()=>[e(r)?(p(),m(e(re),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ae,{"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):k("",!0)]),content:a(()=>[e(r)?(p(),m(D,{key:0},{left:a(()=>[t(e(T),{"active-key":i.value,"onUpdate:activeKey":o[0]||(o[0]=d=>i.value=d)},{rightExtra:a(()=>[t($,{model:e(r).script,onSave:h},null,8,["model"])]),default:a(()=>[t(e(y),{key:"source-code",tab:"Source code",disabled:x("source-code")},null,8,["disabled"]),t(e(y),{key:"settings",tab:"Settings",disabled:x("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),i.value==="source-code"?(p(),m(L,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):k("",!0),e(r).script&&i.value==="settings"?(p(),m(ne,{key:1,script:e(r).script},null,8,["script"])):k("",!0)]),right:a(()=>[t(e(T),{"active-key":b.value,"onUpdate:activeKey":o[1]||(o[1]=d=>b.value=d)},{rightExtra:a(()=>[t(e(C),{align:"center",gap:"middle"},{default:a(()=>[t(e(C),{gap:"small"},{default:a(()=>[t(e(I),null,{default:a(()=>[R(G(s.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:s.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&b.value==="preview"?(p(),m(ue,{key:0,ref:"tester",script:e(r).script,"execution-config":s.value,"disabled-warning":A.value,onUpdateStageRunId:o[2]||(o[2]=d=>s.value={...s.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):k("",!0),t(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(oe),{key:"1"},{header:a(()=>[t(e(ie),{dot:s.value.attached&&!!(s.value.pendingFork||!s.value.stageRunId)},{default:a(()=>[t(e(I),null,{default:a(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(te,{"execution-config":s.value,"onUpdate:executionConfig":o[3]||(o[3]=d=>s.value=d),stage:e(r).script,onFixInvalidJson:o[4]||(o[4]=(d,E)=>{var S;return(S=_.value)==null?void 0:S.fixJson(d,E)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):k("",!0)]),_:2},[e(r)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(r).script,"log-service":e(B),workspace:e(r).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{rt as default};
//# sourceMappingURL=ScriptEditor.a54b8b9e.js.map
