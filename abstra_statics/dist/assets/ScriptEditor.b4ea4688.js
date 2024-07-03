import{B as E}from"./BaseLayout.b735ee83.js";import{R as N,E as U,S as W,a as L,L as P}from"./SourceCode.ddb44825.js";import{S as D}from"./SaveButton.812bd6b7.js";import{a as J}from"./asyncComputed.65255fdd.js";import{d as x,q as g,o as d,c as f,w as a,b as t,u as e,bx as V,cj as $,ci as q,eu as K,eJ as M,eC as O,J as j,t as G,ew as b,cV as I,cQ as R,ar as A,eG as H}from"./vue-router.5fbdb276.js";import{W as Q}from"./workspaces.965219a9.js";import{S as z}from"./scripts.c7e22ad3.js";import{T as X}from"./ThreadSelector.be4a2df4.js";import{_ as Y}from"./RunButton.vue_vue_type_script_setup_true_lang.f07b9bef.js";import{N as Z}from"./NavbarControls.866d8bd2.js";import{b as ee}from"./index.81a9ab6b.js";import{A as h,T}from"./TabPane.7a457505.js";import{A as te}from"./index.81974f04.js";import{A as ae,C as oe}from"./CollapsePanel.1be4fa43.js";import{B as re}from"./Badge.fc6bea44.js";import"./uuid.70e38b36.js";import"./PhCaretRight.vue.a35ec02e.js";import"./editor.3bff567c.js";import"./router.ed98b2a5.js";import"./runnerData.2b61d3c4.js";import"./url.7048b064.js";import"./record.4fae5d34.js";import"./PhCheckCircle.vue.4b0636ff.js";import"./PhCopySimple.vue.0fe481ed.js";import"./LoadingOutlined.f45f84f2.js";import"./jobs.fb035a11.js";import"./validations.4773da14.js";import"./string.67594981.js";import"./PhPencil.vue.6b52f5f9.js";import"./toggleHighContrast.fcf47b0c.js";import"./index.bec61963.js";import"./Card.d2430684.js";import"./ExclamationCircleOutlined.b5f784f1.js";import"./index.2c225be2.js";import"./index.ea0e43ab.js";import"./CloseCircleOutlined.814fcc20.js";import"./index.6aef45b1.js";import"./popupNotifcation.c6959dcf.js";import"./PhArrowSquareOut.vue.119524e6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f826413c.js";import"./BookOutlined.592144fe.js";import"./PhChats.vue.2b2f9a06.js";import"./index.79497d79.js";import"./isNumeric.75337b1e.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[m]="d82e4aea-bce2-412c-a3a8-5e58be142f43",c._sentryDebugIdIdentifier="sentry-dbid-d82e4aea-bce2-412c-a3a8-5e58be142f43")}catch{}})();const se=x({__name:"ScriptSettings",props:{script:{}},setup(c){const i=g(c.script);return(v,k)=>(d(),f(e(q),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e($),{label:"Name",required:""},{default:a(()=>[t(e(V),{value:i.value.title,"onUpdate:value":k[0]||(k[0]=n=>i.value.title=n)},null,8,["value"])]),_:1}),t(N,{runtime:i.value},null,8,["runtime"])]),_:1}))}}),ie={style:{width:"100%",display:"flex","flex-direction":"column"}},ne=x({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(c,{emit:m}){const i=c,v=g(!1),k=async()=>{var n;v.value=!0;try{const u=i.executionConfig.attached?await i.script.run((n=i.executionConfig.stageRunId)!=null?n:null):await i.script.test();u.output&&u.output.length>0&&u.output.forEach(y=>{i.logService.log({type:y.type,log:y.text})})}finally{v.value=!1,m("update-stage-run-id",null)}};return(n,u)=>(d(),K("div",ie,[t(Y,{loading:v.value,disabled:n.disabledWarning,onClick:k,onSave:u[0]||(u[0]=y=>n.script.save())},null,8,["loading","disabled"])]))}}),Ye=x({__name:"ScriptEditor",setup(c){const m=M(),i=O();function v(){m.push({name:"stages"})}const k=g(null),n=g("source-code"),u=g("preview");function y(){var s;if(!r.value)return;const p=r.value.script.codeContent;(s=k.value)==null||s.updateLocalEditorCode(p)}const o=g({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),F=p=>o.value={...o.value,attached:!!p},B=j(()=>{var p;return(p=r.value)!=null&&p.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!o.value.isInitial&&o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=J(async()=>{const[p,s]=await Promise.all([Q.get(),z.get(i.params.id)]);return o.value.isInitial=s.isInitial,G({workspace:p,script:s})}),_=P.create(),S=g(null);return(p,s)=>(d(),f(E,null,{navbar:a(()=>[e(r)?(d(),f(e(ee),{key:0,title:e(r).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:v},{extra:a(()=>[t(Z,{"show-save-button":!1,"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:a(()=>[e(r)?(d(),f(U,{key:0},{left:a(()=>[t(e(T),{"active-key":n.value,"onUpdate:activeKey":s[0]||(s[0]=l=>n.value=l)},{rightExtra:a(()=>[t(D,{model:e(r).script,onSave:y},null,8,["model"])]),default:a(()=>[t(e(h),{key:"source-code",tab:"Source code"}),t(e(h),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),n.value==="source-code"?(d(),f(W,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):b("",!0),e(r).script&&n.value==="settings"?(d(),f(se,{key:1,script:e(r).script},null,8,["script"])):b("",!0)]),right:a(()=>[t(e(T),{"active-key":u.value,"onUpdate:activeKey":s[1]||(s[1]=l=>u.value=l)},{rightExtra:a(()=>[t(e(I),{align:"center",gap:"middle"},{default:a(()=>[t(e(I),{gap:"small"},{default:a(()=>[t(e(R),null,{default:a(()=>[A(H(o.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),t(e(te),{checked:o.value.attached,"onUpdate:checked":F},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(h),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&u.value==="preview"?(d(),f(ne,{key:0,ref:"tester",script:e(r).script,"log-service":e(_),"execution-config":o.value,"disabled-warning":B.value,onUpdateStageRunId:s[2]||(s[2]=l=>o.value={...o.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):b("",!0),t(e(oe),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(ae),{key:"1"},{header:a(()=>[t(e(re),{dot:o.value.attached&&!!(o.value.pendingFork||!o.value.stageRunId)},{default:a(()=>[t(e(R),null,{default:a(()=>[A("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(X,{"execution-config":o.value,"onUpdate:executionConfig":s[3]||(s[3]=l=>o.value=l),stage:e(r).script,onFixInvalidJson:s[4]||(s[4]=(l,w)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,w)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):b("",!0)]),footer:a(()=>{var l,w;return[t(L,{ref_key:"smartConsole",ref:S,"stage-type":"scripts","log-service":e(_),stage:(l=e(r))==null?void 0:l.script,workspace:(w=e(r))==null?void 0:w.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{Ye as default};
//# sourceMappingURL=ScriptEditor.b4ea4688.js.map
