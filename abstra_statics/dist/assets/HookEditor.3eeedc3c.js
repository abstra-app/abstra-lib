import{a as W}from"./asyncComputed.96d925ba.js";import{d as A,o as d,c as g,w as a,b as o,u as t,bL as b,cz as f,cy as x,f as B,N as j,O as u,E as G,e as E,X as M,ah as Q,aB as V,Y as _,eb as P,bT as w,aG as v,aS as S,cE as U,S as q,a as z,e9 as D,d5 as F,ea as L,z as J}from"./index.d72204b4.js";import{H as X}from"./scripts.7af0725d.js";import"./linters.24f99a08.js";import{W as Y}from"./workspaces.7a346b46.js";import{_ as Z,a as K}from"./RunButton.vue_vue_type_script_setup_true_lang.6bb450e8.js";import{R as ee}from"./SmartChat.10612ac9.js";import{D as te,A as oe}from"./index.b7e1c2b6.js";import{C as ae,A as T}from"./CollapsePanel.caafbbf3.js";import{A as $}from"./index.38814052.js";import{A as re}from"./index.81fb8b22.js";import"./record.12a5aba4.js";import"./workspaceStore.8903535b.js";import"./url.22bb5778.js";import"./colorHelpers.2502e188.js";import"./BaseLayout.74001c87.js";import"./SaveButton.923db9c9.js";import"./UnsavedChangesHandler.6ccb344e.js";import"./ExclamationCircleOutlined.1ef7e4e1.js";import"./NavbarControls.420cf817.js";import"./CloseCircleOutlined.9339e92d.js";import"./index.45cce483.js";import"./editor.d5678702.js";import"./popupNotifcation.54c2c554.js";import"./PhArrowSquareOut.vue.83f87b05.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f7b5eb04.js";import"./BookOutlined.ee9568bf.js";import"./PhChats.vue.972f2ddd.js";import"./polling.430f40ea.js";import"./TasksManager.86268fc3.js";import"./tasksController.1e1850cb.js";import"./gateway.ab47259d.js";import"./string.ce17c88b.js";import"./ant-design.dc9209c9.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.bdde3a4a.js";import"./Card.32794ae8.js";import"./TabPane.25dc8e44.js";import"./index.311b72fc.js";import"./index.4088898d.js";import"./index.13678705.js";import"./Avatar.7097fb93.js";import"./validations.68e87cbd.js";import"./uuid.58a014e4.js";import"./PhCaretRight.vue.6a8b7b20.js";import"./Badge.61e4646d.js";import"./LoadingOutlined.1b40ab9d.js";import"./PhFolder.vue.f1a0a687.js";import"./PhPencil.vue.2e09fc56.js";import"./toggleHighContrast.2960a96c.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.22bd7c01.js";import"./Logo.7524814a.js";import"./ai.d8fb146a.js";import"./PhCheckCircle.vue.81b4f56d.js";import"./PhCopySimple.vue.870ac281.js";(function(){try{var y=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(y._sentryDebugIds=y._sentryDebugIds||{},y._sentryDebugIds[i]="c0166ce6-2c42-463d-86cd-099505b5ac0b",y._sentryDebugIdIdentifier="sentry-dbid-c0166ce6-2c42-463d-86cd-099505b5ac0b")}catch{}})();const se=A({__name:"HookSettings",props:{hook:{}},setup(y){return(i,p)=>(d(),g(t(x),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[o(t(f),{label:"Name",required:""},{default:a(()=>[o(t(b),{value:i.hook.title,"onUpdate:value":p[0]||(p[0]=k=>i.hook.title=k)},null,8,["value"])]),_:1}),o(ee,{runtime:i.hook},null,8,["runtime"])]),_:1}))}}),le={style:{display:"flex","flex-direction":"column",gap:"10px"}},ne={key:0},ue=A({__name:"HookTester",props:{hook:{},disabledWarning:{}},setup(y,{expose:i}){const p=y,k=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],h=B(()=>{var n;if((n=e.response)!=null&&n.status)return e.response.status>=500?"red":e.response.status>=400?"orange":e.response.status>=200?"green":"blue"}),m=new j(u.record(u.object({body:u.string(),headers:u.array(u.object({key:u.string(),value:u.string()})),method:u.string(),queryParams:u.array(u.object({name:u.string(),value:u.string()}))})),"abstra:hookTestConfig"),e=G({queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),C=E(!1),H=async()=>{C.value=!0;try{const n={method:e.method,query:e.queryParams.reduce((s,{name:r,value:l})=>(r&&l&&(s[r]=l),s),{}),body:e.body,headers:e.headers.reduce((s,{key:r,value:l})=>(r&&l&&(s[r]=l),s),{})};e.response=await p.hook.run(n)}finally{C.value=!1}},I=()=>{e.queryParams.push({name:"",value:""})},N=n=>{e.queryParams=e.queryParams.filter((s,r)=>r!==n)},O=()=>{e.headers.push({key:"",value:""})},R=n=>{e.headers=e.headers.filter((s,r)=>r!==n)};return M(()=>{const s=(m.get()||{})[p.hook.id];s&&(e.body=s.body,e.headers=s.headers,e.method=s.method,e.queryParams=s.queryParams)}),Q(()=>{const n={body:e.body,headers:e.headers,method:e.method,queryParams:e.queryParams},s=m.get()||{};s[p.hook.id]=n,m.set(s)}),i({runHook:H}),(n,s)=>(d(),g(t(x),{layout:"vertical",style:{overflow:"auto"}},{default:a(()=>[o(t(f),{label:"Method"},{default:a(()=>[o(t(V),{value:e.method,options:k,onSelect:s[0]||(s[0]=r=>e.method=r)},null,8,["value"])]),_:1}),o(t(f),null,{default:a(()=>[o(t(ae),{ghost:""},{default:a(()=>[o(t(T),{header:`Query Params (${e.queryParams.length})`},{default:a(()=>[(d(!0),_(S,null,P(e.queryParams,(r,l)=>(d(),g(t(f),{key:l},{default:a(()=>[o(t($),null,{default:a(()=>[o(t(b),{value:r.name,"onUpdate:value":c=>r.name=c,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(t(b),{value:r.value,"onUpdate:value":c=>r.value=c,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(t(w),{danger:"",onClick:c=>N(l)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),o(t(f),null,{default:a(()=>[o(t(w),{type:"dashed",style:{width:"100%"},onClick:I},{default:a(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),o(t(T),{header:`Headers (${e.headers.length})`},{default:a(()=>[(d(!0),_(S,null,P(e.headers,(r,l)=>(d(),g(t(f),{key:l,label:l===0?"Headers":void 0},{default:a(()=>[o(t($),null,{default:a(()=>[o(t(b),{value:r.key,"onUpdate:value":c=>r.key=c,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(t(b),{value:r.value,"onUpdate:value":c=>r.value=c,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(t(w),{danger:"",onClick:c=>R(l)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),o(t(f),null,{default:a(()=>[o(t(w),{type:"dashed",style:{width:"100%"},onClick:O},{default:a(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),o(t(T),{header:"Body"},{default:a(()=>[e.method!=="GET"?(d(),g(t(f),{key:0},{default:a(()=>[o(t(U),{value:e.body,"onUpdate:value":s[1]||(s[1]=r=>e.body=r)},null,8,["value"])]),_:1})):q("",!0)]),_:1})]),_:1})]),_:1}),o(t(f),null,{default:a(()=>[z("div",le,[o(Z,{loading:C.value,disabled:n.disabledWarning,onClick:H,onSave:s[2]||(s[2]=r=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),o(t(re),{orientation:"left"},{default:a(()=>[v("Response")]),_:1}),e.response?(d(),_("div",ne,[o(t(F),{color:h.value},{default:a(()=>[v(D(e.response.status),1)]),_:1},8,["color"]),o(t(oe),null,{default:a(()=>[(d(!0),_(S,null,P(e.response.headers,(r,l)=>(d(),g(t(te),{key:l,label:l},{default:a(()=>[v(D(r),1)]),_:2},1032,["label"]))),128))]),_:1}),o(t(U),{value:e.response.body},null,8,["value"])])):q("",!0)]),_:1}))}}),dt=A({__name:"HookEditor",setup(y){const i=L(),p=E(null),k=B(()=>{var m;return(m=h.value)!=null&&m.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),{result:h}=W(async()=>{const[m,e]=await Promise.all([Y.get(),X.get(i.params.id)]);return J({workspace:m,hook:e})});return(m,e)=>(d(),g(K,{stage:t(h).hook,workspace:t(h).workspace,"stage-type":"hooks"},{settings:a(()=>[o(se,{hook:t(h).hook},null,8,["hook"])]),test:a(()=>[o(ue,{ref_key:"tester",ref:p,hook:t(h).hook,"disabled-warning":k.value},null,8,["hook","disabled-warning"])]),_:1},8,["stage","workspace"]))}});export{dt as default};
//# sourceMappingURL=HookEditor.3eeedc3c.js.map
