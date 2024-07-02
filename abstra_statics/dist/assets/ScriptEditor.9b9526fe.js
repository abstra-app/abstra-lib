import{B as E}from"./BaseLayout.1ca05d36.js";import{R as N,E as U,S as W,a as L,L as P}from"./SourceCode.852349ad.js";import{S as D}from"./SaveButton.554d4e89.js";import{a as V}from"./asyncComputed.63a0378d.js";import{d as x,r as g,b as d,c as f,w as a,f as t,u as e,bx as $,cj as J,ci as K,eu as M,eJ as O,eC as j,K as q,v as G,ew as w,cV as I,cQ as R,ar as A,eG as H}from"./vue-router.3e46e4bf.js";import{W as Q}from"./workspaces.edb28a32.js";import{S as z}from"./scripts.3f4e5b8b.js";import{T as X}from"./ThreadSelector.ab33ee1e.js";import{_ as Y}from"./RunButton.vue_vue_type_script_setup_true_lang.6a8bb881.js";import{N as Z}from"./NavbarControls.5bafc4d2.js";import{b as ee}from"./index.30bc5beb.js";import{A as h,T}from"./TabPane.896a75e9.js";import{A as te}from"./index.71d6de41.js";import{A as ae,C as oe}from"./CollapsePanel.3e3fee1c.js";import{B as re}from"./Badge.cdd06f1e.js";import"./uuid.72f27b24.js";import"./PhCaretRight.vue.3c229b99.js";import"./editor.c48ac085.js";import"./router.44bd5ce0.js";import"./runnerData.4521bdb0.js";import"./url.5c4d71e1.js";import"./record.63a8beca.js";import"./PhCheckCircle.vue.2cc9dc4d.js";import"./PhCopySimple.vue.8ffc2873.js";import"./LoadingOutlined.e4ad42f8.js";import"./jobs.b3938eef.js";import"./validations.8e11b29f.js";import"./string.a9b621fe.js";import"./PhPencil.vue.791dea1b.js";import"./toggleHighContrast.ef6753a0.js";import"./index.37780313.js";import"./Card.50265cb9.js";import"./ExclamationCircleOutlined.b2c418e3.js";import"./index.425e6785.js";import"./index.f8ced53b.js";import"./CloseCircleOutlined.cf96b116.js";import"./index.3698425a.js";import"./popupNotifcation.fe1b1ab6.js";import"./PhArrowSquareOut.vue.09877910.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a9be3710.js";import"./BookOutlined.ee2e3499.js";import"./PhChats.vue.c2f186ce.js";import"./index.3fdaed16.js";import"./isNumeric.75337b1e.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[m]="38f92337-1750-436f-90ff-917e7e9416ce",p._sentryDebugIdIdentifier="sentry-dbid-38f92337-1750-436f-90ff-917e7e9416ce")}catch{}})();const se=x({__name:"ScriptSettings",props:{script:{}},setup(p){const i=g(p.script);return(v,k)=>(d(),f(e(K),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(J),{label:"Name",required:""},{default:a(()=>[t(e($),{value:i.value.title,"onUpdate:value":k[0]||(k[0]=n=>i.value.title=n)},null,8,["value"])]),_:1}),t(N,{runtime:i.value},null,8,["runtime"])]),_:1}))}}),ie={style:{width:"100%",display:"flex","flex-direction":"column"}},ne=x({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(p,{emit:m}){const i=p,v=g(!1),k=async()=>{var n;v.value=!0;try{const u=i.executionConfig.attached?await i.script.run((n=i.executionConfig.stageRunId)!=null?n:null):await i.script.test();u.output&&u.output.length>0&&u.output.forEach(y=>{i.logService.log({type:y.type,log:y.text})})}finally{v.value=!1,m("update-stage-run-id",null)}};return(n,u)=>(d(),M("div",ie,[t(Y,{loading:v.value,disabled:n.disabledWarning,onClick:k,onSave:u[0]||(u[0]=y=>n.script.save())},null,8,["loading","disabled"])]))}}),Ye=x({__name:"ScriptEditor",setup(p){const m=O(),i=j();function v(){m.push({name:"stages"})}const k=g(null),n=g("source-code"),u=g("preview");function y(){var s;if(!r.value)return;const c=r.value.script.codeContent;(s=k.value)==null||s.updateLocalEditorCode(c)}const o=g({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=c=>o.value={...o.value,attached:!!c},B=q(()=>{var c;return(c=r.value)!=null&&c.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!o.value.isInitial&&o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=V(async()=>{const[c,s]=await Promise.all([Q.get(),z.get(i.params.id)]);return o.value.isInitial=s.isInitial,G({workspace:c,script:s})}),_=P.create(),S=g(null);return(c,s)=>(d(),f(E,null,{navbar:a(()=>[e(r)?(d(),f(e(ee),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:v},{extra:a(()=>[t(Z,{"show-save-button":!1,"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):w("",!0)]),content:a(()=>[e(r)?(d(),f(U,{key:0},{left:a(()=>[t(e(T),{"active-key":n.value,"onUpdate:activeKey":s[0]||(s[0]=l=>n.value=l)},{rightExtra:a(()=>[t(D,{model:e(r).script,onSave:y},null,8,["model"])]),default:a(()=>[t(e(h),{key:"source-code",tab:"Source code"}),t(e(h),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),n.value==="source-code"?(d(),f(W,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):w("",!0),e(r).script&&n.value==="settings"?(d(),f(se,{key:1,script:e(r).script},null,8,["script"])):w("",!0)]),right:a(()=>[t(e(T),{"active-key":u.value,"onUpdate:activeKey":s[1]||(s[1]=l=>u.value=l)},{rightExtra:a(()=>[t(e(I),{align:"center",gap:"middle"},{default:a(()=>[t(e(I),{gap:"small"},{default:a(()=>[t(e(R),null,{default:a(()=>[A(H(o.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(te),{checked:o.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(h),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&u.value==="preview"?(d(),f(ne,{key:0,ref:"tester",script:e(r).script,"log-service":e(_),"execution-config":o.value,"disabled-warning":B.value,onUpdateStageRunId:s[2]||(s[2]=l=>o.value={...o.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):w("",!0),t(e(oe),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(ae),{key:"1"},{header:a(()=>[t(e(re),{dot:o.value.attached&&!!(o.value.pendingFork||!o.value.stageRunId)},{default:a(()=>[t(e(R),null,{default:a(()=>[A("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(X,{"execution-config":o.value,"onUpdate:executionConfig":s[3]||(s[3]=l=>o.value=l),stage:e(r).script,onFixInvalidJson:s[4]||(s[4]=(l,b)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,b)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):w("",!0)]),footer:a(()=>{var l,b;return[t(L,{ref_key:"smartConsole",ref:S,"stage-type":"scripts","log-service":e(_),stage:(l=e(r))==null?void 0:l.script,workspace:(b=e(r))==null?void 0:b.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{Ye as default};
//# sourceMappingURL=ScriptEditor.9b9526fe.js.map
