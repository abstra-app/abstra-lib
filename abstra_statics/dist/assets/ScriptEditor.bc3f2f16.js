import{B as F}from"./BaseLayout.577165c3.js";import{R as U,S as W,E as D,a as L,L as P}from"./SourceCode.b049bbd7.js";import{S as $}from"./SaveButton.17e88f21.js";import{a as V}from"./asyncComputed.3916dfed.js";import{d as w,e as f,o as c,c as m,w as a,b as t,u as e,bH as H,cv as J,cu as K,X as M,eo as O,ea as q,f as X,eg as j,y as z,R as y,dd as h,d8 as I,aF as R,e9 as G,cT as Q}from"./vue-router.324eaed2.js";import"./editor.1b3b164b.js";import{S as Y}from"./scripts.c1b9be98.js";import{W as Z}from"./workspaces.a34621fe.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.f5ea8c77.js";import{T as te}from"./ThreadSelector.d62fadec.js";import{N as ae}from"./NavbarControls.414bdd58.js";import{b as oe}from"./index.51467614.js";import{A as k,T}from"./TabPane.caed57de.js";import{A as re,C as se}from"./CollapsePanel.ce95f921.js";import{B as ie}from"./Badge.9808092c.js";import"./uuid.a06fb10a.js";import"./validations.339bcb94.js";import"./string.d698465c.js";import"./PhCopy.vue.b2238e41.js";import"./PhCheckCircle.vue.b905d38f.js";import"./PhCopySimple.vue.d9faf509.js";import"./PhCaretRight.vue.70c5f54b.js";import"./PhBug.vue.ac4a72e0.js";import"./PhQuestion.vue.6a6a9376.js";import"./LoadingOutlined.09a06334.js";import"./polling.72e5a2f8.js";import"./PhPencil.vue.91f72c2e.js";import"./toggleHighContrast.4c55b574.js";import"./index.0887bacc.js";import"./Card.1902bdb7.js";import"./UnsavedChangesHandler.d2b18117.js";import"./ExclamationCircleOutlined.6541b8d4.js";import"./workspaceStore.5977d9e8.js";import"./url.1a1c4e74.js";import"./colorHelpers.78fae216.js";import"./record.cff1707c.js";import"./index.520f8c66.js";import"./index.341662d4.js";import"./CloseCircleOutlined.6d0d12eb.js";import"./index.7d758831.js";import"./popupNotifcation.5a82bc93.js";import"./PhArrowSquareOut.vue.2a1b339b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.88c092e9.js";import"./BookOutlined.789cce39.js";import"./PhChats.vue.42699894.js";import"./index.ea51f4a9.js";import"./Avatar.4c029798.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[p]="3a1ee2d3-7cb4-442b-971e-23762c1b6ab2",u._sentryDebugIdIdentifier="sentry-dbid-3a1ee2d3-7cb4-442b-971e-23762c1b6ab2")}catch{}})();const ne=w({__name:"ScriptSettings",props:{script:{}},setup(u){const n=f(u.script);return(g,v)=>(c(),m(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(J),{label:"Name",required:""},{default:a(()=>[t(e(H),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(U,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),le={style:{width:"100%",display:"flex","flex-direction":"column"}},ue=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:p}){const n=u,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,p("update-stage-run-id",null)}};return(i,b)=>(c(),M("div",le,[t(ee,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:b[0]||(b[0]=_=>i.script.save())},null,8,["loading","disabled"])]))}}),ot=w({__name:"ScriptEditor",setup(u){const p=O(),n=q();function g(){p.push({name:"stages"})}const v=f(null),i=f("source-code"),b=f("preview");function _(){var r;if(!o.value)return;const l=o.value.script.codeContent;(r=v.value)==null||r.updateLocalEditorCode(l)}const s=f({attached:!1,stageRunId:null,isInitial:!1}),A=l=>s.value={...s.value,attached:!!l},B=X(()=>{var l;return(l=o.value)!=null&&l.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:!s.value.isInitial&&s.value.attached&&!s.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=V(async()=>{const[l,r]=await Promise.all([Z.get(),Y.get(n.params.id)]);return s.value.isInitial=r.isInitial,z({workspace:l,script:r})}),E=P.create(),x=f(null),S=l=>{var r;return l!==i.value&&((r=o.value)==null?void 0:r.script.hasChanges())};return(l,r)=>(c(),m(F,null,j({navbar:a(()=>[e(o)?(c(),m(e(oe),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ae,{"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(o)?(c(),m(D,{key:0},{left:a(()=>[t(e(T),{"active-key":i.value,"onUpdate:activeKey":r[0]||(r[0]=d=>i.value=d)},{rightExtra:a(()=>[t($,{model:e(o).script,onSave:_},null,8,["model"])]),default:a(()=>[t(e(k),{key:"source-code",tab:"Source code",disabled:S("source-code")},null,8,["disabled"]),t(e(k),{key:"settings",tab:"Settings",disabled:S("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),i.value==="source-code"?(c(),m(L,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):y("",!0),e(o).script&&i.value==="settings"?(c(),m(ne,{key:1,script:e(o).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(T),{"active-key":b.value,"onUpdate:activeKey":r[1]||(r[1]=d=>b.value=d)},{rightExtra:a(()=>[t(e(h),{align:"center",gap:"middle"},{default:a(()=>[t(e(h),{gap:"small"},{default:a(()=>[t(e(I),null,{default:a(()=>[R(G(s.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:s.value.attached,"onUpdate:checked":A},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(k),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&b.value==="preview"?(c(),m(ue,{key:0,ref:"tester",script:e(o).script,"execution-config":s.value,"disabled-warning":B.value,onUpdateStageRunId:r[2]||(r[2]=d=>s.value={...s.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(re),{key:"1"},{header:a(()=>[t(e(ie),{dot:s.value.attached&&!s.value.stageRunId},{default:a(()=>[t(e(I),null,{default:a(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(te,{"execution-config":s.value,"onUpdate:executionConfig":r[3]||(r[3]=d=>s.value=d),stage:e(o).script,onFixInvalidJson:r[4]||(r[4]=(d,N)=>{var C;return(C=x.value)==null?void 0:C.fixJson(d,N)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(o)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:x,"stage-type":"scripts",stage:e(o).script,"log-service":e(E),workspace:e(o).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{ot as default};
//# sourceMappingURL=ScriptEditor.bc3f2f16.js.map
