import{B as Q}from"./BaseLayout.472ca6e7.js";import{R as V,E as J,S as j,a as K,L as z}from"./SourceCode.6c8cf58e.js";import{a as X}from"./asyncComputed.53a0782e.js";import{d as D,b as d,c as m,w as o,f as a,u as e,bB as A,D as G,N as Y,r as C,O as Z,ah as ee,ey as T,eH as q,cG as E,bI as I,au as v,aG as B,ct as O,eA as y,e as te,eJ as N,eM as ae,eG as oe,x as re}from"./outputWidgets.b871b4c2.js";import{H as le}from"./jobs.8dbb27e2.js";import{W as ne}from"./envVars.9d716e7b.js";import{S as se}from"./SaveButton.5aa8fe00.js";import{A as g,F as L}from"./Form.698be632.js";import{_ as ue}from"./RunButton.vue_vue_type_script_setup_true_lang.ba2e6dda.js";import{A as _}from"./api.8317e2da.js";import{T as ie}from"./ThreadSelector.31ac94c8.js";import{D as de,A as pe}from"./index.5abf73ed.js";import{C as me,A as U}from"./CollapsePanel.09ea4e45.js";import{B as fe}from"./Badge.762f5e7b.js";import{A as M}from"./Text.48a7ca01.js";import{A as ce}from"./index.16c04906.js";import{A as ve}from"./index.6054946b.js";import{N as ge}from"./NavbarControls.aa499052.js";import{b as he}from"./index.8a8d30ea.js";import{A as F,T as $}from"./TabPane.2be5e2bd.js";import{A as W}from"./index.336feafc.js";import{A as ke}from"./index.fee7c9de.js";import"./uuid.39f66b43.js";import"./PhCaretRight.vue.e2e60b0c.js";import"./editor.19ce72ee.js";import"./index.a0d1bb89.js";import"./fetch.78181002.js";import"./pubsub.0f4910dc.js";import"./runnerData.e8eb4ed0.js";import"./url.15a5742f.js";import"./record.415ea43b.js";import"./PhCheckCircle.vue.cd9ffd49.js";import"./PhCopySimple.vue.6120754a.js";import"./LoadingOutlined.56a818e1.js";import"./scripts.24236399.js";import"./validations.dc4afb4f.js";import"./string.fc0fc896.js";import"./PhPencil.vue.b5286c69.js";import"./toggleHighContrast.dbc8bcbb.js";import"./index.0a5231ce.js";import"./Card.3fe9e7ee.js";import"./UnsavedChangesHandler.d35f2330.js";import"./ExclamationCircleOutlined.405b7b74.js";import"./Modal.134b84f4.js";import"./Base.0bb5fa7a.js";import"./Link.74b84a0e.js";import"./hasIn.5b514812.js";import"./metadata.5e14f627.js";import"./PhScroll.vue.ed1afa84.js";import"./PhWebhooksLogo.vue.87ba3bf3.js";import"./index.855c40b4.js";import"./isNumeric.75337b1e.js";import"./CloseCircleOutlined.0831b9d3.js";import"./popupNotifcation.79228d8c.js";import"./PhArrowSquareOut.vue.b848a063.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0965390b.js";import"./BookOutlined.cc9a8db5.js";import"./index.9a3ab3be.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[f]="d0443558-1f1b-4e97-8232-30dd9787d4a1",h._sentryDebugIdIdentifier="sentry-dbid-d0443558-1f1b-4e97-8232-30dd9787d4a1")}catch{}})();const ye=D({__name:"HookSettings",props:{hook:{}},setup(h){return(f,k)=>(d(),m(e(L),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(g),{label:"Name",required:""},{default:o(()=>[a(e(A),{value:f.hook.title,"onUpdate:value":k[0]||(k[0]=u=>f.hook.title=u)},null,8,["value"])]),_:1}),a(V,{runtime:f.hook},null,8,["runtime"])]),_:1}))}}),be={style:{display:"flex","flex-direction":"column",gap:"10px"}},_e={key:0},Ce=D({__name:"HookTester",props:{hook:{},logService:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:f,emit:k}){const u=h,b=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],w=G(()=>{var l;if((l=t.response)!=null&&l.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),t=Y({shouldSelectStageRun:!u.hook.isInitial,stageRunId:u.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),H=t.queryParams.find(l=>l.name===_);u.executionConfig.stageRunId&&!H&&t.queryParams.push({name:_,value:u.executionConfig.stageRunId});const x=C(!1),S=async()=>{x.value=!0;try{const l={method:t.method,query:t.queryParams.reduce((r,{name:s,value:p})=>(s&&p&&(r[s]=p),r),{}),body:t.body,headers:t.headers.reduce((r,{key:s,value:p})=>(s&&p&&(r[s]=p),r),{})},n=u.executionConfig.attached?await u.hook.run(l):await u.hook.test(l);t.response=n,n.output&&n.output.length>0&&n.output.forEach(r=>{u.logService.log({type:r.type,log:r.text})})}finally{x.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1,isInitial:u.hook.isInitial})}};Z([()=>u.executionConfig.stageRunId,()=>t.queryParams],([l,n])=>{const r=n.find(s=>s.name===_);if(l&&!r){t.queryParams.push({name:_,value:l});return}if(!l&&r){t.queryParams=t.queryParams.filter(s=>s.name!==_);return}l&&r&&l!==r.value&&(r.value=l)});const R=()=>{t.queryParams.push({name:"",value:""})},i=l=>{t.queryParams=t.queryParams.filter((n,r)=>r!==l)},P=()=>{t.headers.push({key:"",value:""})},c=l=>{t.headers=t.headers.filter((n,r)=>r!==l)};return f({runHook:S}),(l,n)=>(d(),m(e(L),{layout:"vertical"},{default:o(()=>[a(e(g),{label:"Method"},{default:o(()=>[a(e(ee),{value:t.method,options:b,onSelect:n[0]||(n[0]=r=>t.method=r)},null,8,["value"])]),_:1}),a(e(g),null,{default:o(()=>[a(e(me),{ghost:""},{default:o(()=>[a(e(U),{header:`Query Params (${t.queryParams.length})`},{default:o(()=>[(d(!0),T(B,null,q(t.queryParams,(r,s)=>(d(),m(e(g),{key:s},{default:o(()=>[a(e(E),null,{default:o(()=>[a(e(A),{value:r.name,"onUpdate:value":p=>r.name=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value",disabled:r.name===e(_)},null,8,["value","onUpdate:value","disabled"]),a(e(I),{danger:"",onClick:p=>i(s)},{default:o(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(g),null,{default:o(()=>[a(e(I),{type:"dashed",style:{width:"100%"},onClick:R},{default:o(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(U),{header:`Headers (${t.headers.length})`},{default:o(()=>[(d(!0),T(B,null,q(t.headers,(r,s)=>(d(),m(e(g),{key:s,label:s===0?"Headers":void 0},{default:o(()=>[a(e(E),null,{default:o(()=>[a(e(A),{value:r.key,"onUpdate:value":p=>r.key=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(I),{danger:"",onClick:p=>c(s)},{default:o(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(g),null,{default:o(()=>[a(e(I),{type:"dashed",style:{width:"100%"},onClick:P},{default:o(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(U),{header:"Body"},{default:o(()=>[t.method!=="GET"?(d(),m(e(g),{key:0},{default:o(()=>[a(e(O),{value:t.body,"onUpdate:value":n[1]||(n[1]=r=>t.body=r)},null,8,["value"])]),_:1})):y("",!0)]),_:1}),a(e(U),null,{header:o(()=>[a(e(fe),{dot:l.executionConfig.attached&&!!(l.executionConfig.pendingFork||!l.executionConfig.stageRunId)},{default:o(()=>[a(e(M),null,{default:o(()=>[v("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(ie,{stage:l.hook,"execution-config":u.executionConfig,"onUpdate:executionConfig":n[2]||(n[2]=r=>k("update:execution-config",r))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),a(e(g),null,{default:o(()=>[te("div",be,[a(ue,{loading:x.value,disabled:l.disabledWarning,onClick:S,onSave:n[3]||(n[3]=r=>l.hook.save())},null,8,["loading","disabled"])])]),_:1}),a(e(ce),{orientation:"left"},{default:o(()=>[v("Response")]),_:1}),t.response?(d(),T("div",_e,[a(e(ve),{color:w.value},{default:o(()=>[v(N(t.response.status),1)]),_:1},8,["color"]),a(e(pe),null,{default:o(()=>[(d(!0),T(B,null,q(t.response.headers,(r,s)=>(d(),m(e(de),{key:s,label:s},{default:o(()=>[v(N(r),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e(O),{value:t.response.body},null,8,["value"])])):y("",!0)]),_:1}))}}),Pt=D({__name:"HookEditor",setup(h){const f=ae(),k=oe(),u=C(null),b=C("source-code"),w=C("preview"),t=C({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),H=c=>t.value={...t.value,attached:!!c},x=G(()=>{var c;return(c=i.value)!=null&&c.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:t.value.attached&&t.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!t.value.isInitial&&t.value.attached&&!t.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function S(){f.push({name:"stages"})}const R=C(null),{result:i}=X(async()=>{const[c,l]=await Promise.all([ne.get(),le.get(k.params.id)]);return t.value.isInitial=l.isInitial,re({workspace:c,hook:l})}),P=z.create();return(c,l)=>(d(),m(Q,null,{navbar:o(()=>[e(i)?(d(),m(e(he),{key:0,title:e(i).hook.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:S},{extra:o(()=>[a(ge,{"docs-path":"concepts/hooks","editing-model":e(i).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:o(()=>[e(i)?(d(),m(J,{key:0},{left:o(()=>[a(e($),{"active-key":b.value,"onUpdate:activeKey":l[0]||(l[0]=n=>b.value=n)},{rightExtra:o(()=>[a(se,{model:e(i).hook},null,8,["model"])]),default:o(()=>[a(e(F),{key:"source-code",tab:"Source code"}),a(e(F),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),b.value==="source-code"?(d(),m(j,{key:0,script:e(i).hook,workspace:e(i).workspace},null,8,["script","workspace"])):y("",!0),e(i).hook&&b.value==="settings"?(d(),m(ye,{key:1,hook:e(i).hook},null,8,["hook"])):y("",!0)]),right:o(()=>[a(e($),{"active-key":w.value,"onUpdate:activeKey":l[1]||(l[1]=n=>w.value=n)},{rightExtra:o(()=>[a(e(W),{align:"center",gap:"middle"},{default:o(()=>[a(e(W),{gap:"small"},{default:o(()=>[a(e(M),null,{default:o(()=>[v(N(t.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ke),{checked:t.value.attached,"onUpdate:checked":H},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e(F),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).hook&&w.value==="preview"?(d(),m(Ce,{key:0,ref_key:"tester",ref:u,"execution-config":t.value,"onUpdate:executionConfig":l[2]||(l[2]=n=>t.value=n),hook:e(i).hook,"log-service":e(P),"disabled-warning":x.value},null,8,["execution-config","hook","log-service","disabled-warning"])):y("",!0)]),_:1})):y("",!0)]),footer:o(()=>{var n,r,s;return[a(K,{ref_key:"smartConsole",ref:R,"stage-type":"hooks","log-service":e(P),stage:(n=e(i))==null?void 0:n.hook,workspace:(r=e(i))==null?void 0:r.workspace,onRestart:(s=u.value)==null?void 0:s.runHook},null,8,["log-service","stage","workspace","onRestart"])]}),_:1}))}});export{Pt as default};
//# sourceMappingURL=HookEditor.effb803c.js.map
