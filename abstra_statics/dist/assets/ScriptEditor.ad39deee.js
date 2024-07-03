import{B as E}from"./BaseLayout.c249fd3c.js";import{R as N,S as U,E as W,a as L,L as P}from"./SourceCode.a0e30422.js";import{S as D}from"./SaveButton.8f97947a.js";import{a as J}from"./asyncComputed.51b91b7d.js";import{d as b,q as f,o as p,c as m,w as a,b as t,u as e,bx as V,cj as $,ci as K,eu as q,eJ as M,eC as O,J as j,eK as G,t as H,ew as y,cV as S,cQ as C,ar as I,eG as Q}from"./vue-router.54864aea.js";import{W as z}from"./workspaces.1741f578.js";import{S as X}from"./scripts.c7727599.js";import{T as Y}from"./ThreadSelector.8ecfe303.js";import{_ as Z}from"./RunButton.vue_vue_type_script_setup_true_lang.ebe230dd.js";import{N as ee}from"./NavbarControls.79671ef1.js";import{b as te}from"./index.10a772c8.js";import{A as w,T as R}from"./TabPane.e0ddde90.js";import{A as ae}from"./index.6130307b.js";import{A as oe,C as re}from"./CollapsePanel.f26237af.js";import{B as se}from"./Badge.aed3f87c.js";import"./uuid.a272cb3d.js";import"./PhCaretRight.vue.74d45b43.js";import"./editor.39ea906f.js";import"./router.c24d8d92.js";import"./runnerData.a0718476.js";import"./url.a832f7ce.js";import"./record.8148ada5.js";import"./PhCheckCircle.vue.4fd75355.js";import"./PhCopySimple.vue.72c13178.js";import"./LoadingOutlined.b268e46a.js";import"./jobs.1599e90b.js";import"./validations.ea287616.js";import"./string.9c691830.js";import"./PhPencil.vue.e96109f5.js";import"./toggleHighContrast.b1015d5e.js";import"./index.79490a7f.js";import"./Card.de1342f1.js";import"./ExclamationCircleOutlined.6ee5fed5.js";import"./index.cc6c8745.js";import"./index.f4599b6b.js";import"./CloseCircleOutlined.045a5317.js";import"./index.ea0c35cd.js";import"./popupNotifcation.2a8529b1.js";import"./PhArrowSquareOut.vue.92399f00.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fb45fc20.js";import"./BookOutlined.281a5b3a.js";import"./PhChats.vue.c79cd611.js";import"./index.3c17e9d7.js";import"./isNumeric.75337b1e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="f27dc119-a016-4243-8943-7e4fe731b631",l._sentryDebugIdIdentifier="sentry-dbid-f27dc119-a016-4243-8943-7e4fe731b631")}catch{}})();const ie=b({__name:"ScriptSettings",props:{script:{}},setup(l){const n=f(l.script);return(g,v)=>(p(),m(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e($),{label:"Name",required:""},{default:a(()=>[t(e(V),{value:n.value.title,"onUpdate:value":v[0]||(v[0]=i=>n.value.title=i)},null,8,["value"])]),_:1}),t(N,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),ne={style:{width:"100%",display:"flex","flex-direction":"column"}},le=b({__name:"ScriptTester",props:{script:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(l,{emit:c}){const n=l,g=f(!1),v=async()=>{var i;g.value=!0;try{n.executionConfig.attached?await n.script.run((i=n.executionConfig.stageRunId)!=null?i:null):await n.script.test()}finally{g.value=!1,c("update-stage-run-id",null)}};return(i,k)=>(p(),q("div",ne,[t(Z,{loading:g.value,disabled:i.disabledWarning,onClick:v,onSave:k[0]||(k[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),Ze=b({__name:"ScriptEditor",setup(l){const c=M(),n=O();function g(){c.push({name:"stages"})}const v=f(null),i=f("source-code"),k=f("preview");function h(){var s;if(!r.value)return;const u=r.value.script.codeContent;(s=v.value)==null||s.updateLocalEditorCode(u)}const o=f({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),A=u=>o.value={...o.value,attached:!!u},T=j(()=>{var u;return(u=r.value)!=null&&u.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!o.value.isInitial&&o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=J(async()=>{const[u,s]=await Promise.all([z.get(),X.get(n.params.id)]);return o.value.isInitial=s.isInitial,H({workspace:u,script:s})}),F=P.create(),x=f(null);return(u,s)=>(p(),m(E,null,G({navbar:a(()=>[e(r)?(p(),m(e(te),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:a(()=>[t(ee,{"show-save-button":!1,"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(r)?(p(),m(W,{key:0},{left:a(()=>[t(e(R),{"active-key":i.value,"onUpdate:activeKey":s[0]||(s[0]=d=>i.value=d)},{rightExtra:a(()=>[t(D,{model:e(r).script,onSave:h},null,8,["model"])]),default:a(()=>[t(e(w),{key:"source-code",tab:"Source code"}),t(e(w),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),i.value==="source-code"?(p(),m(L,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):y("",!0),e(r).script&&i.value==="settings"?(p(),m(ie,{key:1,script:e(r).script},null,8,["script"])):y("",!0)]),right:a(()=>[t(e(R),{"active-key":k.value,"onUpdate:activeKey":s[1]||(s[1]=d=>k.value=d)},{rightExtra:a(()=>[t(e(S),{align:"center",gap:"middle"},{default:a(()=>[t(e(S),{gap:"small"},{default:a(()=>[t(e(C),null,{default:a(()=>[I(Q(o.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(ae),{checked:o.value.attached,"onUpdate:checked":A},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(w),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&k.value==="preview"?(p(),m(le,{key:0,ref:"tester",script:e(r).script,"execution-config":o.value,"disabled-warning":T.value,onUpdateStageRunId:s[2]||(s[2]=d=>o.value={...o.value,stageRunId:d})},null,8,["script","execution-config","disabled-warning"])):y("",!0),t(e(re),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(oe),{key:"1"},{header:a(()=>[t(e(se),{dot:o.value.attached&&!!(o.value.pendingFork||!o.value.stageRunId)},{default:a(()=>[t(e(C),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(Y,{"execution-config":o.value,"onUpdate:executionConfig":s[3]||(s[3]=d=>o.value=d),stage:e(r).script,onFixInvalidJson:s[4]||(s[4]=(d,B)=>{var _;return(_=x.value)==null?void 0:_.fixJson(d,B)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:2},[e(r)?{name:"footer",fn:a(()=>[t(U,{ref_key:"smartConsole",ref:x,"stage-type":"scripts",stage:e(r).script,"log-service":e(F),workspace:e(r).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{Ze as default};
//# sourceMappingURL=ScriptEditor.ad39deee.js.map
