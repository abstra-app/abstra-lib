import{B as T}from"./BaseLayout.a4a7d36e.js";import{R as E,E as N,S as B,a as U,L as W}from"./SourceCode.faa2ff7d.js";import{a as P}from"./asyncComputed.af5dc7e5.js";import{d as _,r as v,b as c,c as f,w as r,f as a,u as e,bz as D,ew as L,eK as $,eE as J,J as K,eN as V,ey as y,as as C,eH as H}from"./outputWidgets.899c2ba6.js";import{W as M}from"./workspaces.4a2bedc3.js";import{S as O}from"./scripts.bec2c0da.js";import"./envVars.af130388.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.3b36d9aa.js";import{T as z}from"./ThreadSelector.89a3baf4.js";import{A as j,F as G}from"./Form.63ea0853.js";import{_ as Q}from"./RunButton.vue_vue_type_script_setup_true_lang.5603e16a.js";import{N as X}from"./NavbarControls.6db1c6ea.js";import{b as Y}from"./index.74def6e8.js";import{A as w,T as I}from"./TabPane.b033e337.js";import{A}from"./index.1e01f451.js";import{A as R}from"./Text.b13957eb.js";import{A as Z}from"./index.f55d7dc7.js";import{A as ee,C as te}from"./CollapsePanel.422c9fd9.js";import{B as ae}from"./Badge.f6020d55.js";import"./uuid.93beff45.js";import"./PhCaretRight.vue.7caf5e21.js";import"./login.d5663a51.js";import"./jobs.beaad3f5.js";import"./record.11af8056.js";import"./pubsub.ccef1214.js";import"./validations.2c68c933.js";import"./string.58ed328e.js";import"./PhPencil.vue.a761ee8c.js";import"./toggleHighContrast.2dc27322.js";import"./index.b831257e.js";import"./Card.d83f826a.js";import"./runnerData.ce8e1422.js";import"./url.89e8212d.js";import"./UnsavedChangesHandler.7b1ef431.js";import"./ExclamationCircleOutlined.bb2808e4.js";import"./Modal.0eb526d9.js";import"./Base.ddd59c02.js";import"./Link.16820cf2.js";import"./index.d46edb89.js";import"./index.033c7283.js";import"./hasIn.35ca7acb.js";import"./index.8e4fec01.js";import"./fetch.2c64dbc0.js";import"./popupNotifcation.b292d3fc.js";import"./PhArrowSquareOut.vue.77997bbf.js";import"./CloseCircleOutlined.587ac84a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bc7c3230.js";import"./BookOutlined.140ad45d.js";import"./index.fde9dc0c.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[d]="fe774c05-d4a3-4dcc-b558-a215a819ebe9",u._sentryDebugIdIdentifier="sentry-dbid-fe774c05-d4a3-4dcc-b558-a215a819ebe9")}catch{}})();const re=_({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,p)=>(c(),f(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:r(()=>[a(e(j),{label:"Name",required:""},{default:r(()=>[a(e(D),{value:s.value.title,"onUpdate:value":p[0]||(p[0]=l=>s.value.title=l)},null,8,["value"])]),_:1}),a(E,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),oe={style:{width:"100%",display:"flex","flex-direction":"column"}},ie=_({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:d}){const s=u,g=v(!1),p=async()=>{var l;g.value=!0;try{const t=s.executionConfig.attached?await s.script.run((l=s.executionConfig.stageRunId)!=null?l:null):await s.script.test();t.output&&t.output.length>0&&t.output.forEach(k=>{s.logService.log({type:k.type,log:k.text})})}finally{g.value=!1,d("update-stage-run-id",null)}};return(l,t)=>(c(),L("div",oe,[a(Q,{loading:g.value,disabled:l.disabledWarning,onClick:p,onSave:t[0]||(t[0]=k=>l.script.save())},null,8,["loading","disabled"])]))}}),at=_({__name:"ScriptEditor",setup(u){const d=$(),s=J();function g(){d.push({name:"stages"})}const p=v("source-code"),l=v("preview"),t=v({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),k=m=>t.value={...t.value,attached:!!m},F=K(()=>{var m;return(m=o.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:t.value.attached&&t.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!t.value.isInitial&&t.value.attached&&!t.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=P(async()=>{const[m,i]=await Promise.all([M.get(),O.get(s.params.id)]);return t.value.isInitial=i.isInitial,V({workspace:m,script:i})}),h=W.create(),x=v(null);return(m,i)=>(c(),f(T,null,{navbar:r(()=>[e(o)?(c(),f(e(Y),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:r(()=>[a(X,{"show-save-button":!1,"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:r(()=>[e(o)?(c(),f(N,{key:0},{left:r(()=>[a(e(I),{"active-key":p.value,"onUpdate:activeKey":i[0]||(i[0]=n=>p.value=n)},{rightExtra:r(()=>[a(q,{model:e(o).script},null,8,["model"])]),default:r(()=>[a(e(w),{key:"source-code",tab:"Source code"}),a(e(w),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),p.value==="source-code"?(c(),f(B,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):y("",!0),e(o).script&&p.value==="settings"?(c(),f(re,{key:1,script:e(o).script},null,8,["script"])):y("",!0)]),right:r(()=>[a(e(I),{"active-key":l.value,"onUpdate:activeKey":i[1]||(i[1]=n=>l.value=n)},{rightExtra:r(()=>[a(e(A),{align:"center",gap:"middle"},{default:r(()=>[a(e(A),{gap:"small"},{default:r(()=>[a(e(R),null,{default:r(()=>[C(H(t.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(Z),{checked:t.value.attached,"onUpdate:checked":k},null,8,["checked"])]),_:1})]),_:1})]),default:r(()=>[a(e(w),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&l.value==="preview"?(c(),f(ie,{key:0,ref:"tester",script:e(o).script,"log-service":e(h),"execution-config":t.value,"disabled-warning":F.value,onUpdateStageRunId:i[2]||(i[2]=n=>t.value={...t.value,stageRunId:n})},null,8,["script","log-service","execution-config","disabled-warning"])):y("",!0),a(e(te),{ghost:"",style:{"margin-top":"20px"}},{default:r(()=>[a(e(ee),{key:"1"},{header:r(()=>[a(e(ae),{dot:t.value.attached&&!!(t.value.pendingFork||!t.value.stageRunId)},{default:r(()=>[a(e(R),null,{default:r(()=>[C("Thread")]),_:1})]),_:1},8,["dot"])]),default:r(()=>[a(z,{"execution-config":t.value,"onUpdate:executionConfig":i[3]||(i[3]=n=>t.value=n),stage:e(o).script,onFixInvalidJson:i[4]||(i[4]=(n,b)=>{var S;return(S=x.value)==null?void 0:S.fixJson(n,b)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):y("",!0)]),footer:r(()=>{var n,b;return[a(U,{ref_key:"smartConsole",ref:x,runtime:"forms","log-service":e(h),stage:(n=e(o))==null?void 0:n.script,workspace:(b=e(o))==null?void 0:b.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{at as default};
//# sourceMappingURL=ScriptEditor.6434db6d.js.map
