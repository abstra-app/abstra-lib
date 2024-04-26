import{B as T}from"./BaseLayout.71c95bce.js";import{R as E,E as N,S as B,a as U,L as W}from"./SourceCode.86440546.js";import{a as P}from"./asyncComputed.6b2a5298.js";import{d as _,r as v,b as c,c as f,w as r,f as a,u as e,bz as D,ew as L,eK as $,eE as J,J as K,eN as V,ey as k,as as C,eH as H}from"./outputWidgets.eb498848.js";import{W as M}from"./workspaces.04f3ac75.js";import{S as O}from"./scripts.359c9293.js";import"./envVars.a4215f23.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.bb6c6868.js";import{T as z}from"./ThreadSelector.f705b518.js";import{A as j,F as G}from"./Form.bd9a7b94.js";import{_ as Q}from"./RunButton.vue_vue_type_script_setup_true_lang.ddaddae1.js";import{N as X}from"./NavbarControls.e65f126f.js";import{b as Y}from"./index.7981d82e.js";import{A as w,T as I}from"./TabPane.73c86943.js";import{A}from"./index.60acdd5f.js";import{A as R}from"./Text.c3630863.js";import{A as Z}from"./index.f6b90665.js";import{A as ee,C as te}from"./CollapsePanel.0c6453f7.js";import{B as ae}from"./Badge.1efc9f96.js";import"./uuid.b89c56bf.js";import"./PhCaretRight.vue.7a473ad9.js";import"./login.c91e079c.js";import"./jobs.34aabf74.js";import"./record.7cc6fca0.js";import"./pubsub.1ca1fb40.js";import"./validations.d7d89dbb.js";import"./string.b8fb39c3.js";import"./PhPencil.vue.3ad2fce1.js";import"./toggleHighContrast.0569b5b6.js";import"./index.d4197b75.js";import"./Card.70a00c39.js";import"./runnerData.c01bfcd7.js";import"./url.1d686ce1.js";import"./UnsavedChangesHandler.74706656.js";import"./ExclamationCircleOutlined.1bc01160.js";import"./Modal.19adabd3.js";import"./Base.60455d70.js";import"./Link.32e09244.js";import"./index.0ba4493c.js";import"./index.23dbc6cf.js";import"./hasIn.ceb11556.js";import"./index.6db17c6b.js";import"./fetch.fcae2051.js";import"./popupNotifcation.1234df84.js";import"./PhArrowSquareOut.vue.97dcf740.js";import"./CloseCircleOutlined.e61176ef.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.083d7014.js";import"./BookOutlined.d5ff4087.js";import"./index.c6702b27.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[d]="e26b6999-b206-4991-a60b-bb69b01938ff",u._sentryDebugIdIdentifier="sentry-dbid-e26b6999-b206-4991-a60b-bb69b01938ff")}catch{}})();const re=_({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,p)=>(c(),f(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:r(()=>[a(e(j),{label:"Name",required:""},{default:r(()=>[a(e(D),{value:s.value.title,"onUpdate:value":p[0]||(p[0]=l=>s.value.title=l)},null,8,["value"])]),_:1}),a(E,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),oe={style:{width:"100%",display:"flex","flex-direction":"column"}},ie=_({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:d}){const s=u,g=v(!1),p=async()=>{var l;g.value=!0;try{const t=s.executionConfig.attached?await s.script.run((l=s.executionConfig.stageRunId)!=null?l:null):await s.script.test();t.output&&t.output.length>0&&t.output.forEach(b=>{s.logService.log({type:b.type,log:b.text})})}finally{g.value=!1,d("update-stage-run-id",null)}};return(l,t)=>(c(),L("div",oe,[a(Q,{loading:g.value,disabled:l.disabledWarning,onClick:p,onSave:t[0]||(t[0]=b=>l.script.save())},null,8,["loading","disabled"])]))}}),at=_({__name:"ScriptEditor",setup(u){const d=$(),s=J();function g(){d.push({name:"stages"})}const p=v("source-code"),l=v("preview"),t=v({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),b=m=>t.value={...t.value,attached:!!m},F=K(()=>{var m;return(m=o.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:t.value.attached&&t.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!t.value.isInitial&&t.value.attached&&!t.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=P(async()=>{const[m,i]=await Promise.all([M.get(),O.get(s.params.id)]);return t.value.isInitial=i.isInitial,V({workspace:m,script:i})}),h=W.create(),x=v(null);return(m,i)=>(c(),f(T,null,{navbar:r(()=>[e(o)?(c(),f(e(Y),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:r(()=>[a(X,{"show-save-button":!1,"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):k("",!0)]),content:r(()=>[e(o)?(c(),f(N,{key:0},{left:r(()=>[a(e(I),{"active-key":p.value,"onUpdate:activeKey":i[0]||(i[0]=n=>p.value=n)},{rightExtra:r(()=>[a(q,{model:e(o).script},null,8,["model"])]),default:r(()=>[a(e(w),{key:"source-code",tab:"Source code"}),a(e(w),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),p.value==="source-code"?(c(),f(B,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):k("",!0),e(o).script&&p.value==="settings"?(c(),f(re,{key:1,script:e(o).script},null,8,["script"])):k("",!0)]),right:r(()=>[a(e(I),{"active-key":l.value,"onUpdate:activeKey":i[1]||(i[1]=n=>l.value=n)},{rightExtra:r(()=>[a(e(A),{align:"center",gap:"middle"},{default:r(()=>[a(e(A),{gap:"small"},{default:r(()=>[a(e(R),null,{default:r(()=>[C(H(t.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(Z),{checked:t.value.attached,"onUpdate:checked":b},null,8,["checked"])]),_:1})]),_:1})]),default:r(()=>[a(e(w),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&l.value==="preview"?(c(),f(ie,{key:0,ref:"tester",script:e(o).script,"log-service":e(h),"execution-config":t.value,"disabled-warning":F.value,onUpdateStageRunId:i[2]||(i[2]=n=>t.value={...t.value,stageRunId:n})},null,8,["script","log-service","execution-config","disabled-warning"])):k("",!0),a(e(te),{ghost:"",style:{"margin-top":"20px"}},{default:r(()=>[a(e(ee),{key:"1"},{header:r(()=>[a(e(ae),{dot:t.value.attached&&!!(t.value.pendingFork||!t.value.stageRunId)},{default:r(()=>[a(e(R),null,{default:r(()=>[C("Thread")]),_:1})]),_:1},8,["dot"])]),default:r(()=>[a(z,{"execution-config":t.value,"onUpdate:executionConfig":i[3]||(i[3]=n=>t.value=n),stage:e(o).script,onFixInvalidJson:i[4]||(i[4]=(n,y)=>{var S;return(S=x.value)==null?void 0:S.fixJson(n,y)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):k("",!0)]),footer:r(()=>{var n,y;return[a(U,{ref_key:"smartConsole",ref:x,runtime:"forms","log-service":e(h),stage:(n=e(o))==null?void 0:n.script,workspace:(y=e(o))==null?void 0:y.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{at as default};
//# sourceMappingURL=ScriptEditor.2869a849.js.map
