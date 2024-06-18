import{B as T}from"./BaseLayout.45dbf6be.js";import{R as B,E,S as N,a as U,L as W}from"./SourceCode.0bbdbb27.js";import{a as P}from"./asyncComputed.e4eff947.js";import{d as h,r as v,b as c,c as f,w as r,f as a,u as e,bx as D,eV as L,f7 as V,f1 as $,y as J,B as K,eX as b,cY as C,cV as I,am as A,f4 as M}from"./outputWidgets.0b268a6e.js";import{W as O}from"./workspaces.5be119e9.js";import{S as q}from"./scripts.523c4aaa.js";import{S as H}from"./SaveButton.d7f7f26e.js";import{T as X}from"./ThreadSelector.970369b9.js";import{A as Y,F as j}from"./Form.be881a7e.js";import{_ as z}from"./RunButton.vue_vue_type_script_setup_true_lang.dfd0fec7.js";import{N as G}from"./NavbarControls.d1aa5bcd.js";import{b as Q}from"./index.e2723ae6.js";import{A as w,T as R}from"./TabPane.8b6a06f6.js";import{A as Z}from"./index.085a8332.js";import{A as ee,C as te}from"./CollapsePanel.41f932dd.js";import{B as ae}from"./Badge.f5f03025.js";import"./uuid.41dc2127.js";import"./PhCaretRight.vue.e45b7770.js";import"./editor.839fbd66.js";import"./index.b4485897.js";import"./fetch.89e36210.js";import"./pubsub.e4b461e5.js";import"./runnerData.778e2834.js";import"./url.8896abfd.js";import"./record.4789b40c.js";import"./PhCheckCircle.vue.922c71dc.js";import"./PhCopySimple.vue.7c392939.js";import"./LoadingOutlined.d9a6fe68.js";import"./jobs.65449d69.js";import"./validations.48adb0e4.js";import"./string.de46731c.js";import"./PhPencil.vue.51014043.js";import"./toggleHighContrast.323106c1.js";import"./index.c2ab207f.js";import"./Card.4eed68ea.js";import"./UnsavedChangesHandler.815fbc18.js";import"./ExclamationCircleOutlined.ab76615b.js";import"./Modal.e362c192.js";import"./index.15600ae6.js";import"./index.87787dc0.js";import"./hasIn.838f176c.js";import"./CloseCircleOutlined.628abb1a.js";import"./popupNotifcation.55abbcd7.js";import"./PhArrowSquareOut.vue.3b263d62.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.423fad90.js";import"./BookOutlined.25d33713.js";import"./PhChats.vue.0b9ce541.js";import"./index.92a391ca.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[d]="250fb089-4d2b-45c7-bb93-488c8bad176d",u._sentryDebugIdIdentifier="sentry-dbid-250fb089-4d2b-45c7-bb93-488c8bad176d")}catch{}})();const re=h({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,p)=>(c(),f(e(j),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:r(()=>[a(e(Y),{label:"Name",required:""},{default:r(()=>[a(e(D),{value:s.value.title,"onUpdate:value":p[0]||(p[0]=l=>s.value.title=l)},null,8,["value"])]),_:1}),a(B,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),oe={style:{width:"100%",display:"flex","flex-direction":"column"}},ie=h({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:d}){const s=u,g=v(!1),p=async()=>{var l;g.value=!0;try{const t=s.executionConfig.attached?await s.script.run((l=s.executionConfig.stageRunId)!=null?l:null):await s.script.test();t.output&&t.output.length>0&&t.output.forEach(y=>{s.logService.log({type:y.type,log:y.text})})}finally{g.value=!1,d("update-stage-run-id",null)}};return(l,t)=>(c(),L("div",oe,[a(z,{loading:g.value,disabled:l.disabledWarning,onClick:p,onSave:t[0]||(t[0]=y=>l.script.save())},null,8,["loading","disabled"])]))}}),tt=h({__name:"ScriptEditor",setup(u){const d=V(),s=$();function g(){d.push({name:"stages"})}const p=v("source-code"),l=v("preview"),t=v({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),y=m=>t.value={...t.value,attached:!!m},F=J(()=>{var m;return(m=o.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:t.value.attached&&t.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!t.value.isInitial&&t.value.attached&&!t.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=P(async()=>{const[m,i]=await Promise.all([O.get(),q.get(s.params.id)]);return t.value.isInitial=i.isInitial,K({workspace:m,script:i})}),x=W.create(),_=v(null);return(m,i)=>(c(),f(T,null,{navbar:r(()=>[e(o)?(c(),f(e(Q),{key:0,title:e(o).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:g},{extra:r(()=>[a(G,{"show-save-button":!1,"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:r(()=>[e(o)?(c(),f(E,{key:0},{left:r(()=>[a(e(R),{"active-key":p.value,"onUpdate:activeKey":i[0]||(i[0]=n=>p.value=n)},{rightExtra:r(()=>[a(H,{model:e(o).script},null,8,["model"])]),default:r(()=>[a(e(w),{key:"source-code",tab:"Source code"}),a(e(w),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),p.value==="source-code"?(c(),f(N,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):b("",!0),e(o).script&&p.value==="settings"?(c(),f(re,{key:1,script:e(o).script},null,8,["script"])):b("",!0)]),right:r(()=>[a(e(R),{"active-key":l.value,"onUpdate:activeKey":i[1]||(i[1]=n=>l.value=n)},{rightExtra:r(()=>[a(e(C),{align:"center",gap:"middle"},{default:r(()=>[a(e(C),{gap:"small"},{default:r(()=>[a(e(I),null,{default:r(()=>[A(M(t.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(Z),{checked:t.value.attached,"onUpdate:checked":y},null,8,["checked"])]),_:1})]),_:1})]),default:r(()=>[a(e(w),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&l.value==="preview"?(c(),f(ie,{key:0,ref:"tester",script:e(o).script,"log-service":e(x),"execution-config":t.value,"disabled-warning":F.value,onUpdateStageRunId:i[2]||(i[2]=n=>t.value={...t.value,stageRunId:n})},null,8,["script","log-service","execution-config","disabled-warning"])):b("",!0),a(e(te),{ghost:"",style:{"margin-top":"20px"}},{default:r(()=>[a(e(ee),{key:"1"},{header:r(()=>[a(e(ae),{dot:t.value.attached&&!!(t.value.pendingFork||!t.value.stageRunId)},{default:r(()=>[a(e(I),null,{default:r(()=>[A("Thread")]),_:1})]),_:1},8,["dot"])]),default:r(()=>[a(X,{"execution-config":t.value,"onUpdate:executionConfig":i[3]||(i[3]=n=>t.value=n),stage:e(o).script,onFixInvalidJson:i[4]||(i[4]=(n,k)=>{var S;return(S=_.value)==null?void 0:S.fixJson(n,k)})},null,8,["execution-config","stage"])]),_:1})]),_:1})]),_:1})):b("",!0)]),footer:r(()=>{var n,k;return[a(U,{ref_key:"smartConsole",ref:_,"stage-type":"scripts","log-service":e(x),stage:(n=e(o))==null?void 0:n.script,workspace:(k=e(o))==null?void 0:k.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{tt as default};
//# sourceMappingURL=ScriptEditor.f692d28b.js.map
