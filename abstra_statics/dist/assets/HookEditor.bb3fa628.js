import{B as Q}from"./BaseLayout.dc604e3c.js";import{R as V,S as j,E as z,a as J,L as K}from"./SourceCode.6c5f1fd0.js";import{S as X}from"./SaveButton.75d0e4fa.js";import{a as Y}from"./asyncComputed.01750f9b.js";import{d as F,o as d,c,w as o,b as a,u as e,bx as w,cj as v,ci as W,f as M,D as Z,e as y,g as ee,am as te,et as A,eC as R,bG as S,ar as g,aD as B,co as N,ev as b,cQ as G,a as ae,ez as E,eM as oe,eA as re,eG as ne,y as le,cV as $}from"./vue-router.10df334c.js";import{H as se}from"./ai.bdb82812.js";import"./linters.bf1bc68a.js";import{W as ue}from"./workspaces.735a8542.js";import{_ as ie}from"./RunButton.vue_vue_type_script_setup_true_lang.2a1b1bcf.js";import{A as C}from"./api.67f1c38b.js";import{T as de}from"./ThreadSelector.ce69f25e.js";import{D as pe,A as me}from"./index.ead1d223.js";import{C as ce,A as P}from"./CollapsePanel.07de03b2.js";import{A as L}from"./index.461d8ee9.js";import{B as fe}from"./Badge.9cd8a2e2.js";import{A as ve}from"./index.5970c9a9.js";import{A as ge}from"./index.b563464e.js";import{N as he}from"./NavbarControls.3ff02049.js";import{b as ke}from"./index.b70576b7.js";import{A as D,T as O}from"./TabPane.53b023c9.js";import{A as ye}from"./index.4d6d359a.js";import"./uuid.29910ceb.js";import"./PhCaretRight.vue.1f5f4b7e.js";import"./editor.27a14e65.js";import"./router.bda2364d.js";import"./PhCheckCircle.vue.f5597630.js";import"./PhCopySimple.vue.ce083e45.js";import"./LoadingOutlined.79ef65bd.js";import"./scripts.6ae77b0a.js";import"./record.2db3e245.js";import"./validations.92418229.js";import"./string.b180a557.js";import"./PhPencil.vue.be4342c1.js";import"./toggleHighContrast.1ea11716.js";import"./index.36fc7dd5.js";import"./Card.f47f397e.js";import"./ExclamationCircleOutlined.1af9074a.js";import"./runnerData.561d0959.js";import"./url.b3b35716.js";import"./fetch.90c850a3.js";import"./metadata.93bb63ce.js";import"./PhKanban.vue.0d20908d.js";import"./PhWebhooksLogo.vue.5f131697.js";import"./index.93673e6b.js";import"./isNumeric.75337b1e.js";import"./CloseCircleOutlined.0288ec37.js";import"./popupNotifcation.8ce848a8.js";import"./PhArrowSquareOut.vue.4aaa7fc7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2dca7612.js";import"./BookOutlined.333e0e47.js";import"./PhChats.vue.3ee65b74.js";import"./index.0a343608.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[f]="494b8ea5-31a1-4999-8568-7325f7ec6710",h._sentryDebugIdIdentifier="sentry-dbid-494b8ea5-31a1-4999-8568-7325f7ec6710")}catch{}})();const be=F({__name:"HookSettings",props:{hook:{}},setup(h){return(f,k)=>(d(),c(e(W),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(v),{label:"Name",required:""},{default:o(()=>[a(e(w),{value:f.hook.title,"onUpdate:value":k[0]||(k[0]=p=>f.hook.title=p)},null,8,["value"])]),_:1}),a(V,{runtime:f.hook},null,8,["runtime"])]),_:1}))}}),_e={style:{display:"flex","flex-direction":"column",gap:"10px"}},Ce={key:0},we=F({__name:"HookTester",props:{hook:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:f,emit:k}){const p=h,T=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],_=M(()=>{var n;if((n=r.response)!=null&&n.status)return r.response.status>=500?"red":r.response.status>=400?"orange":r.response.status>=200?"green":"blue"}),r=Z({shouldSelectStageRun:!p.hook.isInitial,stageRunId:p.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),I=r.queryParams.find(n=>n.name===C);p.executionConfig.stageRunId&&!I&&r.queryParams.push({name:C,value:p.executionConfig.stageRunId});const i=y(!1),x=async()=>{i.value=!0;try{const n={method:r.method,query:r.queryParams.reduce((t,{name:l,value:m})=>(l&&m&&(t[l]=m),t),{}),body:r.body,headers:r.headers.reduce((t,{key:l,value:m})=>(l&&m&&(t[l]=m),t),{})},s=p.executionConfig.attached?await p.hook.run(n):await p.hook.test(n);r.response=s}finally{i.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1,isInitial:p.hook.isInitial})}};ee([()=>p.executionConfig.stageRunId,()=>r.queryParams],([n,s])=>{const t=s.find(l=>l.name===C);if(n&&!t){r.queryParams.push({name:C,value:n});return}if(!n&&t){r.queryParams=r.queryParams.filter(l=>l.name!==C);return}n&&t&&n!==t.value&&(t.value=n)});const U=()=>{r.queryParams.push({name:"",value:""})},q=n=>{r.queryParams=r.queryParams.filter((s,t)=>t!==n)},H=()=>{r.headers.push({key:"",value:""})},u=n=>{r.headers=r.headers.filter((s,t)=>t!==n)};return f({runHook:x}),(n,s)=>(d(),c(e(W),{layout:"vertical"},{default:o(()=>[a(e(v),{label:"Method"},{default:o(()=>[a(e(te),{value:r.method,options:T,onSelect:s[0]||(s[0]=t=>r.method=t)},null,8,["value"])]),_:1}),a(e(v),null,{default:o(()=>[a(e(ce),{ghost:""},{default:o(()=>[a(e(P),{header:`Query Params (${r.queryParams.length})`},{default:o(()=>[(d(!0),A(B,null,R(r.queryParams,(t,l)=>(d(),c(e(v),{key:l},{default:o(()=>[a(e(L),null,{default:o(()=>[a(e(w),{value:t.name,"onUpdate:value":m=>t.name=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":m=>t.value=m,type:"text",placeholder:"value",disabled:t.name===e(C)},null,8,["value","onUpdate:value","disabled"]),a(e(S),{danger:"",onClick:m=>q(l)},{default:o(()=>[g("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(v),null,{default:o(()=>[a(e(S),{type:"dashed",style:{width:"100%"},onClick:U},{default:o(()=>[g(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(P),{header:`Headers (${r.headers.length})`},{default:o(()=>[(d(!0),A(B,null,R(r.headers,(t,l)=>(d(),c(e(v),{key:l,label:l===0?"Headers":void 0},{default:o(()=>[a(e(L),null,{default:o(()=>[a(e(w),{value:t.key,"onUpdate:value":m=>t.key=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":m=>t.value=m,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(S),{danger:"",onClick:m=>u(l)},{default:o(()=>[g("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(v),null,{default:o(()=>[a(e(S),{type:"dashed",style:{width:"100%"},onClick:H},{default:o(()=>[g("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(P),{header:"Body"},{default:o(()=>[r.method!=="GET"?(d(),c(e(v),{key:0},{default:o(()=>[a(e(N),{value:r.body,"onUpdate:value":s[1]||(s[1]=t=>r.body=t)},null,8,["value"])]),_:1})):b("",!0)]),_:1}),a(e(P),null,{header:o(()=>[a(e(fe),{dot:n.executionConfig.attached&&!!(n.executionConfig.pendingFork||!n.executionConfig.stageRunId)},{default:o(()=>[a(e(G),null,{default:o(()=>[g("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(de,{stage:n.hook,"execution-config":p.executionConfig,"onUpdate:executionConfig":s[2]||(s[2]=t=>k("update:execution-config",t))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),a(e(v),null,{default:o(()=>[ae("div",_e,[a(ie,{loading:i.value,disabled:n.disabledWarning,onClick:x,onSave:s[3]||(s[3]=t=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),a(e(ve),{orientation:"left"},{default:o(()=>[g("Response")]),_:1}),r.response?(d(),A("div",Ce,[a(e(ge),{color:_.value},{default:o(()=>[g(E(r.response.status),1)]),_:1},8,["color"]),a(e(me),null,{default:o(()=>[(d(!0),A(B,null,R(r.response.headers,(t,l)=>(d(),c(e(pe),{key:l,label:l},{default:o(()=>[g(E(t),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e(N),{value:r.response.body},null,8,["value"])])):b("",!0)]),_:1}))}}),Ct=F({__name:"HookEditor",setup(h){const f=oe(),k=re(),p=y(null),T=y(null),_=y("source-code"),r=y("preview");function I(){var t;if(!u.value)return;const s=u.value.hook.codeContent;(t=p.value)==null||t.updateLocalEditorCode(s)}const i=y({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),x=s=>i.value={...i.value,attached:!!s},U=M(()=>{var s;return(s=u.value)!=null&&s.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:i.value.attached&&i.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!i.value.isInitial&&i.value.attached&&!i.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function q(){f.push({name:"stages"})}const H=y(null),{result:u}=Y(async()=>{const[s,t]=await Promise.all([ue.get(),se.get(k.params.id)]);return i.value.isInitial=t.isInitial,le({workspace:s,hook:t})}),n=K.create();return(s,t)=>(d(),c(Q,null,ne({navbar:o(()=>[e(u)?(d(),c(e(ke),{key:0,title:e(u).hook.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:q},{extra:o(()=>[a(he,{"docs-path":"concepts/hooks","editing-model":e(u).hook},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:o(()=>[e(u)?(d(),c(z,{key:0},{left:o(()=>[a(e(O),{"active-key":_.value,"onUpdate:activeKey":t[0]||(t[0]=l=>_.value=l)},{rightExtra:o(()=>[a(X,{model:e(u).hook,onSave:I},null,8,["model"])]),default:o(()=>[a(e(D),{key:"source-code",tab:"Source code"}),a(e(D),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),_.value==="source-code"?(d(),c(J,{key:0,ref_key:"code",ref:p,script:e(u).hook,workspace:e(u).workspace},null,8,["script","workspace"])):b("",!0),e(u).hook&&_.value==="settings"?(d(),c(be,{key:1,hook:e(u).hook},null,8,["hook"])):b("",!0)]),right:o(()=>[a(e(O),{"active-key":r.value,"onUpdate:activeKey":t[1]||(t[1]=l=>r.value=l)},{rightExtra:o(()=>[a(e($),{align:"center",gap:"middle"},{default:o(()=>[a(e($),{gap:"small"},{default:o(()=>[a(e(G),null,{default:o(()=>[g(E(i.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ye),{checked:i.value.attached,"onUpdate:checked":x},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e(D),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(u).hook&&r.value==="preview"?(d(),c(we,{key:0,ref_key:"tester",ref:T,"execution-config":i.value,"onUpdate:executionConfig":t[2]||(t[2]=l=>i.value=l),hook:e(u).hook,"disabled-warning":U.value},null,8,["execution-config","hook","disabled-warning"])):b("",!0)]),_:1})):b("",!0)]),_:2},[e(u)?{name:"footer",fn:o(()=>[a(j,{ref_key:"smartConsole",ref:H,"stage-type":"hooks",stage:e(u).hook,"log-service":e(n),workspace:e(u).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{Ct as default};
//# sourceMappingURL=HookEditor.bb3fa628.js.map
