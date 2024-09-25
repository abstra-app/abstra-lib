import{B as N}from"./BaseLayout.300366f4.js";import{R as U,S as W,E as D,a as L,L as P}from"./SourceCode.49c380d9.js";import{S as $}from"./SaveButton.b893a3c5.js";import{a as V}from"./asyncComputed.c5ceef85.js";import{d as w,e as f,o as c,c as m,w as a,b as t,u as e,bH as q,cv as H,cu as J,X as K,eq as M,ed as O,f as j,ej as X,y as z,R as y,dd as C,d8 as I,aF as R,ec as G,cT as Q}from"./vue-router.a564df4d.js";import"./editor.50e0a5cb.js";import{S as Y}from"./scripts.fd3dfbdb.js";import{W as Z}from"./workspaces.03ab9b27.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.080cfd7e.js";import{T as te}from"./ThreadSelector.a54fa3c2.js";import{N as ae}from"./NavbarControls.06a94966.js";import{b as re}from"./index.c1f616d6.js";import{A as b,T}from"./TabPane.a2a7c519.js";import{A as oe,C as se}from"./CollapsePanel.79303be2.js";import{B as ie}from"./Badge.ccce94a4.js";import"./uuid.4e73cf14.js";import"./validations.af13fdcb.js";import"./string.3ccd3e02.js";import"./PhCopy.vue.cec4ec76.js";import"./PhCheckCircle.vue.e12d10a1.js";import"./PhCopySimple.vue.027f64b3.js";import"./PhCaretRight.vue.17fcc633.js";import"./PhBug.vue.ea9a1791.js";import"./PhQuestion.vue.752a64e2.js";import"./LoadingOutlined.8a5ced8b.js";import"./polling.10c521f3.js";import"./PhPencil.vue.3b50acc0.js";import"./toggleHighContrast.fb97a4f4.js";import"./index.932e05da.js";import"./Card.7b2f0b81.js";import"./UnsavedChangesHandler.f9ba326a.js";import"./ExclamationCircleOutlined.6640a224.js";import"./workspaceStore.cff6fe67.js";import"./url.f97c340d.js";import"./colorHelpers.64821175.js";import"./record.d117765f.js";import"./index.77749b1c.js";import"./index.4b96dce4.js";import"./CloseCircleOutlined.8e918f7b.js";import"./index.f39148c4.js";import"./popupNotifcation.7f1d72bb.js";import"./PhArrowSquareOut.vue.f1aedba2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8815d8dd.js";import"./BookOutlined.09893467.js";import"./PhChats.vue.d1d10ec1.js";import"./index.4884320a.js";import"./Avatar.6e20b760.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[p]="40a63f32-14d4-4883-8640-7c91eebc73c5",u._sentryDebugIdIdentifier="sentry-dbid-40a63f32-14d4-4883-8640-7c91eebc73c5")}catch{}})();const ne=w({__name:"ScriptSettings",props:{script:{}},setup(u){const n=f(u.script);return(g,v)=>(c(),m(e(J),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(H),{label:"Name",required:""},{default:a(()=>[t(e(q),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(U,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),le={style:{width:"100%",display:"flex","flex-direction":"column"}},ue=w({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:p}){const n=u,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,p("update-stage-run-id",null)}};return(i,k)=>(c(),K("div",le,[t(ee,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:k[0]||(k[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),rt=w({__name:"ScriptEditor",setup(u){const p=M(),n=O();function g(){p.push({name:"stages"})}const v=f(null),i=f("source-code"),k=f("preview");function h(){var o;if(!r.value)return;const l=r.value.script.codeContent;(o=v.value)==null||o.updateLocalEditorCode(l)}const s=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=l=>s.value={...s.value,attached:!!l},A=j(()=>{var l;return(l=r.value)!=null&&l.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:s.value.attached&&s.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!s.value.isInitial&&s.value.attached&&!s.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=V(async()=>{const[l,o]=await Promise.all([Z.get(),Y.get(n.params.id)]);return s.value.isInitial=o.isInitial,z({workspace:l,script:o})}),B=P.create(),_=f(null),x=l=>{var o;return l!==i.value&&((o=r.value)==null?void 0:o.script.hasChanges())};return(l,o)=>(c(),m(N,null,X({navbar:a(()=>[e(r)?(c(),m(e(re),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ae,{"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(r)?(c(),m(D,{key:0},{left:a(()=>[t(e(T),{"active-key":i.value,"onUpdate:activeKey":o[0]||(o[0]=d=>i.value=d)},{rightExtra:a(()=>[t($,{model:e(r).script,onSave:h},null,8,["model"])]),default:a(()=>[t(e(b),{key:"source-code",tab:"Source code",disabled:x("source-code")},null,8,["disabled"]),t(e(b),{key:"settings",tab:"Settings",disabled:x("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),i.value==="source-code"?(c(),m(L,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):y("",!0),e(r).script&&i.value==="settings"?(c(),m(ne,{key:1,script:e(r).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(T),{"active-key":k.value,"onUpdate:activeKey":o[1]||(o[1]=d=>k.value=d)},{rightExtra:a(()=>[t(e(C),{align:"center",gap:"middle"},{default:a(()=>[t(e(C),{gap:"small"},{default:a(()=>[t(e(I),null,{default:a(()=>[R(G(s.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(Q),{checked:s.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&k.value==="preview"?(c(),m(ue,{key:0,ref:"tester",script:e(r).script,"execution-config":s.value,"disabled-warning":A.value,onUpdateStageRunId:o[2]||(o[2]=d=>s.value={...s.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(oe),{key:"1"},{header:a(()=>[t(e(ie),{dot:s.value.attached&&!!(s.value.pendingFork||!s.value.stageRunId)},{default:a(()=>[t(e(I),null,{default:a(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(te,{"execution-config":s.value,"onUpdate:executionConfig":o[3]||(o[3]=d=>s.value=d),stage:e(r).script,onFixInvalidJson:o[4]||(o[4]=(d,E)=>{var S;return(S=_.value)==null?void 0:S.fixJson(d,E)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(r)?{name:"footer",fn:a(()=>[t(W,{ref_key:"smartConsole",ref:_,"stage-type":"scripts",stage:e(r).script,"log-service":e(B),workspace:e(r).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{rt as default};
//# sourceMappingURL=ScriptEditor.4347fa67.js.map
