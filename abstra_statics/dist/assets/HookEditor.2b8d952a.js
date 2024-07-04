import{B as Q}from"./BaseLayout.9364c89d.js";import{R as V,S as J,E as j,a as K,L as z}from"./SourceCode.6727fdd4.js";import{S as X}from"./SaveButton.4f595cd4.js";import{a as Y}from"./asyncComputed.0e04d595.js";import{d as F,o as d,c,w as o,b as a,u as e,bx as w,cj as v,ci as W,J as G,y as Z,q as y,x as ee,am as te,eu as A,eE as R,bG as S,ar as h,aD as B,co as N,ew as b,cQ as M,a as ae,eG as D,eJ as oe,eC as re,eK as ne,t as le,cV as $}from"./vue-router.56a87a74.js";import{W as se}from"./workspaces.0b332127.js";import{H as ue}from"./jobs.7777b9b3.js";import{_ as ie}from"./RunButton.vue_vue_type_script_setup_true_lang.844f87b5.js";import{A as C}from"./api.daaa32d6.js";import{T as de}from"./ThreadSelector.f60666fe.js";import{D as pe,A as me}from"./index.4dc83a05.js";import{C as ce,A as P}from"./CollapsePanel.a88f328d.js";import{A as L}from"./index.d0949b2b.js";import{B as fe}from"./Badge.da6308f9.js";import{A as ve}from"./index.e40e61ad.js";import{A as he}from"./index.0598f3a2.js";import{N as ke}from"./NavbarControls.2022e262.js";import{b as ge}from"./index.e40a502f.js";import{A as E,T as O}from"./TabPane.95280798.js";import{A as ye}from"./index.93ae48fb.js";import"./uuid.ebad0c39.js";import"./PhCaretRight.vue.7960849f.js";import"./editor.3bae86b0.js";import"./router.ddf4cd75.js";import"./runnerData.e775ba79.js";import"./url.7cc0f01c.js";import"./record.e1642ca4.js";import"./PhCheckCircle.vue.bbc5594e.js";import"./PhCopySimple.vue.d8303884.js";import"./LoadingOutlined.beb546c2.js";import"./scripts.a7f81484.js";import"./validations.957624bb.js";import"./string.a93ef2db.js";import"./PhPencil.vue.881d0a52.js";import"./toggleHighContrast.67a35293.js";import"./index.a4aac195.js";import"./Card.d8c9130a.js";import"./ExclamationCircleOutlined.d24f64c3.js";import"./fetch.0ea85e2d.js";import"./metadata.38c4ade9.js";import"./PhKanban.vue.2b0015ad.js";import"./PhScroll.vue.4d4edcdb.js";import"./PhWebhooksLogo.vue.a94dca2c.js";import"./index.e2b31381.js";import"./isNumeric.75337b1e.js";import"./CloseCircleOutlined.4b511d84.js";import"./popupNotifcation.77345fe6.js";import"./PhArrowSquareOut.vue.7622a165.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a6e16429.js";import"./BookOutlined.40ab7fdb.js";import"./PhChats.vue.b5e5d078.js";import"./index.8ef4965e.js";(function(){try{var k=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(k._sentryDebugIds=k._sentryDebugIds||{},k._sentryDebugIds[f]="9631415d-6fdb-43a8-836e-65f343881090",k._sentryDebugIdIdentifier="sentry-dbid-9631415d-6fdb-43a8-836e-65f343881090")}catch{}})();const be=F({__name:"HookSettings",props:{hook:{}},setup(k){return(f,g)=>(d(),c(e(W),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(v),{label:"Name",required:""},{default:o(()=>[a(e(w),{value:f.hook.title,"onUpdate:value":g[0]||(g[0]=p=>f.hook.title=p)},null,8,["value"])]),_:1}),a(V,{runtime:f.hook},null,8,["runtime"])]),_:1}))}}),_e={style:{display:"flex","flex-direction":"column",gap:"10px"}},Ce={key:0},we=F({__name:"HookTester",props:{hook:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(k,{expose:f,emit:g}){const p=k,T=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],_=G(()=>{var n;if((n=r.response)!=null&&n.status)return r.response.status>=500?"red":r.response.status>=400?"orange":r.response.status>=200?"green":"blue"}),r=Z({shouldSelectStageRun:!p.hook.isInitial,stageRunId:p.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),I=r.queryParams.find(n=>n.name===C);p.executionConfig.stageRunId&&!I&&r.queryParams.push({name:C,value:p.executionConfig.stageRunId});const i=y(!1),x=async()=>{i.value=!0;try{const n={method:r.method,query:r.queryParams.reduce((t,{name:l,value:m})=>(l&&m&&(t[l]=m),t),{}),body:r.body,headers:r.headers.reduce((t,{key:l,value:m})=>(l&&m&&(t[l]=m),t),{})},s=p.executionConfig.attached?await p.hook.run(n):await p.hook.test(n);r.response=s}finally{i.value=!1,g("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1,isInitial:p.hook.isInitial})}};ee([()=>p.executionConfig.stageRunId,()=>r.queryParams],([n,s])=>{const t=s.find(l=>l.name===C);if(n&&!t){r.queryParams.push({name:C,value:n});return}if(!n&&t){r.queryParams=r.queryParams.filter(l=>l.name!==C);return}n&&t&&n!==t.value&&(t.value=n)});const U=()=>{r.queryParams.push({name:"",value:""})},q=n=>{r.queryParams=r.queryParams.filter((s,t)=>t!==n)},H=()=>{r.headers.push({key:"",value:""})},u=n=>{r.headers=r.headers.filter((s,t)=>t!==n)};return f({runHook:x}),(n,s)=>(d(),c(e(W),{layout:"vertical"},{default:o(()=>[a(e(v),{label:"Method"},{default:o(()=>[a(e(te),{value:r.method,options:T,onSelect:s[0]||(s[0]=t=>r.method=t)},null,8,["value"])]),_:1}),a(e(v),null,{default:o(()=>[a(e(ce),{ghost:""},{default:o(()=>[a(e(P),{header:`Query Params (${r.queryParams.length})`},{default:o(()=>[(d(!0),A(B,null,R(r.queryParams,(t,l)=>(d(),c(e(v),{key:l},{default:o(()=>[a(e(L),null,{default:o(()=>[a(e(w),{value:t.name,"onUpdate:value":m=>t.name=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":m=>t.value=m,type:"text",placeholder:"value",disabled:t.name===e(C)},null,8,["value","onUpdate:value","disabled"]),a(e(S),{danger:"",onClick:m=>q(l)},{default:o(()=>[h("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(v),null,{default:o(()=>[a(e(S),{type:"dashed",style:{width:"100%"},onClick:U},{default:o(()=>[h(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(P),{header:`Headers (${r.headers.length})`},{default:o(()=>[(d(!0),A(B,null,R(r.headers,(t,l)=>(d(),c(e(v),{key:l,label:l===0?"Headers":void 0},{default:o(()=>[a(e(L),null,{default:o(()=>[a(e(w),{value:t.key,"onUpdate:value":m=>t.key=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":m=>t.value=m,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(S),{danger:"",onClick:m=>u(l)},{default:o(()=>[h("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(v),null,{default:o(()=>[a(e(S),{type:"dashed",style:{width:"100%"},onClick:H},{default:o(()=>[h("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(P),{header:"Body"},{default:o(()=>[r.method!=="GET"?(d(),c(e(v),{key:0},{default:o(()=>[a(e(N),{value:r.body,"onUpdate:value":s[1]||(s[1]=t=>r.body=t)},null,8,["value"])]),_:1})):b("",!0)]),_:1}),a(e(P),null,{header:o(()=>[a(e(fe),{dot:n.executionConfig.attached&&!!(n.executionConfig.pendingFork||!n.executionConfig.stageRunId)},{default:o(()=>[a(e(M),null,{default:o(()=>[h("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(de,{stage:n.hook,"execution-config":p.executionConfig,"onUpdate:executionConfig":s[2]||(s[2]=t=>g("update:execution-config",t))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),a(e(v),null,{default:o(()=>[ae("div",_e,[a(ie,{loading:i.value,disabled:n.disabledWarning,onClick:x,onSave:s[3]||(s[3]=t=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),a(e(ve),{orientation:"left"},{default:o(()=>[h("Response")]),_:1}),r.response?(d(),A("div",Ce,[a(e(he),{color:_.value},{default:o(()=>[h(D(r.response.status),1)]),_:1},8,["color"]),a(e(me),null,{default:o(()=>[(d(!0),A(B,null,R(r.response.headers,(t,l)=>(d(),c(e(pe),{key:l,label:l},{default:o(()=>[h(D(t),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e(N),{value:r.response.body},null,8,["value"])])):b("",!0)]),_:1}))}}),Ct=F({__name:"HookEditor",setup(k){const f=oe(),g=re(),p=y(null),T=y(null),_=y("source-code"),r=y("preview");function I(){var t;if(!u.value)return;const s=u.value.hook.codeContent;(t=p.value)==null||t.updateLocalEditorCode(s)}const i=y({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),x=s=>i.value={...i.value,attached:!!s},U=G(()=>{var s;return(s=u.value)!=null&&s.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:i.value.attached&&i.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!i.value.isInitial&&i.value.attached&&!i.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function q(){f.push({name:"stages"})}const H=y(null),{result:u}=Y(async()=>{const[s,t]=await Promise.all([se.get(),ue.get(g.params.id)]);return i.value.isInitial=t.isInitial,le({workspace:s,hook:t})}),n=z.create();return(s,t)=>(d(),c(Q,null,ne({navbar:o(()=>[e(u)?(d(),c(e(ge),{key:0,title:e(u).hook.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:q},{extra:o(()=>[a(ke,{"docs-path":"concepts/hooks","editing-model":e(u).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:o(()=>[e(u)?(d(),c(j,{key:0},{left:o(()=>[a(e(O),{"active-key":_.value,"onUpdate:activeKey":t[0]||(t[0]=l=>_.value=l)},{rightExtra:o(()=>[a(X,{model:e(u).hook,onSave:I},null,8,["model"])]),default:o(()=>[a(e(E),{key:"source-code",tab:"Source code"}),a(e(E),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),_.value==="source-code"?(d(),c(K,{key:0,ref_key:"code",ref:p,script:e(u).hook,workspace:e(u).workspace},null,8,["script","workspace"])):b("",!0),e(u).hook&&_.value==="settings"?(d(),c(be,{key:1,hook:e(u).hook},null,8,["hook"])):b("",!0)]),right:o(()=>[a(e(O),{"active-key":r.value,"onUpdate:activeKey":t[1]||(t[1]=l=>r.value=l)},{rightExtra:o(()=>[a(e($),{align:"center",gap:"middle"},{default:o(()=>[a(e($),{gap:"small"},{default:o(()=>[a(e(M),null,{default:o(()=>[h(D(i.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ye),{checked:i.value.attached,"onUpdate:checked":x},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e(E),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(u).hook&&r.value==="preview"?(d(),c(we,{key:0,ref_key:"tester",ref:T,"execution-config":i.value,"onUpdate:executionConfig":t[2]||(t[2]=l=>i.value=l),hook:e(u).hook,"disabled-warning":U.value},null,8,["execution-config","hook","disabled-warning"])):b("",!0)]),_:1})):b("",!0)]),_:2},[e(u)?{name:"footer",fn:o(()=>[a(J,{ref_key:"smartConsole",ref:H,"stage-type":"hooks",stage:e(u).hook,"log-service":e(n),workspace:e(u).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{Ct as default};
//# sourceMappingURL=HookEditor.2b8d952a.js.map
