import{B as U}from"./BaseLayout.a66173a3.js";import{R as L,S as W,E as D,a as P,L as $}from"./SourceCode.23d91d59.js";import{S as V}from"./SaveButton.af114484.js";import{a as z}from"./asyncComputed.03aca0e0.js";import{d as _,e as g,o as p,c as f,w as o,b as a,u as e,bL as J,cz as K,cy as M,Y as O,eo as q,ea as G,f as H,eg as X,z as Y,S as b,dh as C,dc as I,aG as R,e9 as j,cX as Q}from"./index.b7b4bda7.js";import"./editor.9625acf0.js";import{S as Z}from"./scripts.e2afacc1.js";import{W as ee}from"./workspaces.a607659d.js";import{_ as te}from"./RunButton.vue_vue_type_script_setup_true_lang.1ef5c9eb.js";import{T as ae}from"./ThreadSelector.583dd156.js";import{N as oe}from"./NavbarControls.a8751f45.js";import{b as re}from"./index.5d6394d3.js";import{A as w,T}from"./TabPane.5704c3a4.js";import{A as ie,C as se}from"./CollapsePanel.3164fa4e.js";import{B as ne}from"./Badge.aaf7165e.js";import"./uuid.03b90e20.js";import"./validations.1b9832d9.js";import"./string.197ece6b.js";import"./PhCopy.vue.aa8a6eac.js";import"./PhCheckCircle.vue.9e92f7a6.js";import"./PhCopySimple.vue.fc9e1ca1.js";import"./PhCaretRight.vue.408e1cc1.js";import"./PhBug.vue.118d6a4b.js";import"./PhQuestion.vue.e7767674.js";import"./LoadingOutlined.efc83666.js";import"./polling.6fdb889c.js";import"./PhPencil.vue.d1759476.js";import"./toggleHighContrast.e0ebbefd.js";import"./index.c62cc8cf.js";import"./Card.dc945fe7.js";import"./UnsavedChangesHandler.a75ff7c0.js";import"./ExclamationCircleOutlined.e47ecbae.js";import"./workspaceStore.be088758.js";import"./url.b5db0ec0.js";import"./colorHelpers.4deb51e0.js";import"./record.c4002da6.js";import"./index.1175d125.js";import"./index.0abd7f87.js";import"./CloseCircleOutlined.253e16cb.js";import"./index.2876f94f.js";import"./popupNotifcation.75e3ec8b.js";import"./PhArrowSquareOut.vue.5a70823b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.40847547.js";import"./BookOutlined.859ea6bf.js";import"./PhChats.vue.9c0de735.js";import"./index.266b0911.js";import"./Avatar.5b164d81.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[m]="640d11cf-272f-43c7-95bc-115c0e0026af",l._sentryDebugIdIdentifier="sentry-dbid-640d11cf-272f-43c7-95bc-115c0e0026af")}catch{}})();const le=_({__name:"ScriptSettings",props:{script:{}},setup(l){const n=g(l.script);return(v,y)=>(p(),f(e(M),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(K),{label:"Name",required:""},{default:o(()=>[a(e(J),{value:n.value.title,"onUpdate:value":y[0]||(y[0]=u=>n.value.title=u)},null,8,["value"])]),_:1}),a(L,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),ue={style:{width:"100%",display:"flex","flex-direction":"column"}},ce=_({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(l,{emit:m}){const n=l,v=g(!1),y=async()=>{var u;v.value=!0;try{n.executionConfig.attached?await n.script.run((u=n.executionConfig.stageRunId)!=null?u:null):await n.script.test()}finally{v.value=!1,m("update-stage-run-id",null)}};return(u,d)=>(p(),O("div",ue,[a(te,{loading:v.value,disabled:u.disabledWarning,onClick:y,onSave:d[0]||(d[0]=k=>u.script.save())},null,8,["loading","disabled"])]))}}),rt=_({__name:"ScriptEditor",setup(l){const m=q(),n=G();function v(){m.push({name:"stages"})}const y=g(null),u=s=>{!t.value||(t.value.script.file=s)},d=g("source-code"),k=g("preview");function A(){var r;if(!t.value)return;const s=t.value.script.codeContent;(r=y.value)==null||r.updateLocalEditorCode(s)}const i=g({attached:!1,stageRunId:null,isInitial:!1}),B=s=>i.value={...i.value,attached:!!s},E=H(()=>{var s;return(s=t.value)!=null&&s.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:!i.value.isInitial&&i.value.attached&&!i.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:t}=z(async()=>{const[s,r]=await Promise.all([ee.get(),Z.get(n.params.id)]);return i.value.isInitial=r.isInitial,Y({workspace:s,script:r})}),F=$.create(),x=g(null),S=s=>{var r;return s!==d.value&&((r=t.value)==null?void 0:r.script.hasChanges())};return(s,r)=>(p(),f(U,null,X({navbar:o(()=>[e(t)?(p(),f(e(re),{key:0,title:e(t).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:v},{extra:o(()=>[a(oe,{"editing-model":e(t).script},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:o(()=>[e(t)?(p(),f(D,{key:0},{left:o(()=>[a(e(T),{"active-key":d.value,"onUpdate:activeKey":r[0]||(r[0]=c=>d.value=c)},{rightExtra:o(()=>[a(V,{model:e(t).script,onSave:A},null,8,["model"])]),default:o(()=>[a(e(w),{key:"source-code",tab:"Source code",disabled:S("source-code")},null,8,["disabled"]),a(e(w),{key:"settings",tab:"Settings",disabled:S("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),d.value==="source-code"?(p(),f(P,{key:0,script:e(t).script,workspace:e(t).workspace,onUpdateFile:u},null,8,["script","workspace"])):b("",!0),e(t).script&&d.value==="settings"?(p(),f(le,{key:1,script:e(t).script},null,8,["script"])):b("",!0)]),right:o(()=>[a(e(T),{"active-key":k.value,"onUpdate:activeKey":r[1]||(r[1]=c=>k.value=c)},{rightExtra:o(()=>[a(e(C),{align:"center",gap:"middle"},{default:o(()=>[a(e(C),{gap:"small"},{default:o(()=>[a(e(I),null,{default:o(()=>[R(j(i.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(Q),{checked:i.value.attached,"onUpdate:checked":B},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e(w),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(t).script&&k.value==="preview"?(p(),f(ce,{key:0,ref:"tester",script:e(t).script,"execution-config":i.value,"disabled-warning":E.value,onUpdateStageRunId:r[2]||(r[2]=c=>i.value={...i.value,stageRunId:c})},null,8,["script","execution-config","disabled-warning"])):b("",!0),a(e(se),{ghost:"",style:{"margin-top":"20px"}},{default:o(()=>[a(e(ie),{key:"1"},{header:o(()=>[a(e(ne),{dot:i.value.attached&&!i.value.stageRunId},{default:o(()=>[a(e(I),null,{default:o(()=>[R("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(ae,{"execution-config":i.value,"onUpdate:executionConfig":r[3]||(r[3]=c=>i.value=c),stage:e(t).script,onFixInvalidJson:r[4]||(r[4]=(c,N)=>{var h;return(h=x.value)==null?void 0:h.fixJson(c,N)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):b("",!0)]),_:2},[e(t)?{name:"footer",fn:o(()=>[a(W,{ref_key:"smartConsole",ref:x,"stage-type":"scripts",stage:e(t).script,"log-service":e(F),workspace:e(t).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{rt as default};
//# sourceMappingURL=ScriptEditor.547dc8ab.js.map
