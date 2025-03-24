import{a as W}from"./asyncComputed.7a95ce7b.js";import{d as A,o as d,c as g,w as a,b as o,u as t,bL as b,cz as c,cy as x,f as B,N as j,O as u,E as G,e as E,X as M,ah as Q,aB as V,Y as _,eb as P,bT as w,aG as v,aS as S,cE as U,S as q,a as z,e9 as D,d5 as F,ea as L,z as J}from"./index.69221ddd.js";import"./linters.a6cf277f.js";import{H as X}from"./scripts.b8a5f560.js";import{W as Y}from"./workspaces.5507bc23.js";import{R as Z,_ as K}from"./RuntimeCommonSettings.5c98fde5.js";import{_ as ee}from"./RunButton.vue_vue_type_script_setup_true_lang.bd82f00c.js";import{D as te,A as oe}from"./index.0e6e03f9.js";import{C as ae,A as T}from"./CollapsePanel.d0031fdd.js";import{A as $}from"./index.f5f68706.js";import{A as re}from"./index.ab6203dc.js";import"./record.8688487e.js";import"./workspaceStore.b637037c.js";import"./url.0e9756de.js";import"./colorHelpers.30122d57.js";import"./BaseLayout.0552b4d9.js";import"./SaveButton.c66f8a80.js";import"./UnsavedChangesHandler.447244b5.js";import"./ExclamationCircleOutlined.d6104a6c.js";import"./uuid.e4f0db5d.js";import"./NavbarControls.7bc2d09e.js";import"./CloseCircleOutlined.594391d3.js";import"./index.574a0b88.js";import"./editor.169f168b.js";import"./popupNotifcation.b4d15ac5.js";import"./PhArrowSquareOut.vue.a3522033.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.22c5172f.js";import"./BookOutlined.63147d20.js";import"./PhChats.vue.85ea4112.js";import"./polling.7c290a25.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.77354d89.js";import"./Logo.fff7f92b.js";import"./ant-design.47ae17cb.js";import"./ai.208279fe.js";import"./PhCheckCircle.vue.fd9cd1cd.js";import"./PhCopySimple.vue.e427c0fc.js";import"./Avatar.212a9288.js";import"./LoadingOutlined.6c174c2d.js";import"./Card.206256ff.js";import"./TabPane.4c284a7d.js";import"./PhCaretRight.vue.22b2abbb.js";import"./Badge.d7b65930.js";import"./SourceCode.37efd364.js";import"./validations.eac6bbe8.js";import"./string.ef3cfe54.js";import"./PhFolder.vue.fe0a28d2.js";import"./toggleHighContrast.dfe2a53c.js";import"./TasksManager.fa339671.js";import"./tasksController.6021b79a.js";import"./gateway.28e4f371.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.16c61a47.js";import"./index.ac652e4a.js";import"./index.b2ddd406.js";import"./index.081da676.js";(function(){try{var y=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(y._sentryDebugIds=y._sentryDebugIds||{},y._sentryDebugIds[i]="00e7137d-e442-4cb5-a852-cd86c5b01264",y._sentryDebugIdIdentifier="sentry-dbid-00e7137d-e442-4cb5-a852-cd86c5b01264")}catch{}})();const se=A({__name:"HookSettings",props:{hook:{}},setup(y){return(i,p)=>(d(),g(t(x),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[o(t(c),{label:"Name",required:""},{default:a(()=>[o(t(b),{value:i.hook.title,"onUpdate:value":p[0]||(p[0]=k=>i.hook.title=k)},null,8,["value"])]),_:1}),o(Z,{runtime:i.hook},null,8,["runtime"])]),_:1}))}}),le={style:{display:"flex","flex-direction":"column",gap:"10px"}},ne={key:0},ue=A({__name:"HookTester",props:{hook:{},disabledWarning:{}},setup(y,{expose:i}){const p=y,k=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],h=B(()=>{var n;if((n=e.response)!=null&&n.status)return e.response.status>=500?"red":e.response.status>=400?"orange":e.response.status>=200?"green":"blue"}),m=new j(u.record(u.object({body:u.string(),headers:u.array(u.object({key:u.string(),value:u.string()})),method:u.string(),queryParams:u.array(u.object({name:u.string(),value:u.string()}))})),"abstra:hookTestConfig"),e=G({queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),C=E(!1),H=async()=>{C.value=!0;try{const n={method:e.method,query:e.queryParams.reduce((s,{name:r,value:l})=>(r&&l&&(s[r]=l),s),{}),body:e.body,headers:e.headers.reduce((s,{key:r,value:l})=>(r&&l&&(s[r]=l),s),{})};e.response=await p.hook.run(n)}finally{C.value=!1}},I=()=>{e.queryParams.push({name:"",value:""})},N=n=>{e.queryParams=e.queryParams.filter((s,r)=>r!==n)},O=()=>{e.headers.push({key:"",value:""})},R=n=>{e.headers=e.headers.filter((s,r)=>r!==n)};return M(()=>{const s=(m.get()||{})[p.hook.id];s&&(e.body=s.body,e.headers=s.headers,e.method=s.method,e.queryParams=s.queryParams)}),Q(()=>{const n={body:e.body,headers:e.headers,method:e.method,queryParams:e.queryParams},s=m.get()||{};s[p.hook.id]=n,m.set(s)}),i({runHook:H}),(n,s)=>(d(),g(t(x),{layout:"vertical",style:{overflow:"auto"}},{default:a(()=>[o(t(c),{label:"Method"},{default:a(()=>[o(t(V),{value:e.method,options:k,onSelect:s[0]||(s[0]=r=>e.method=r)},null,8,["value"])]),_:1}),o(t(c),null,{default:a(()=>[o(t(ae),{ghost:""},{default:a(()=>[o(t(T),{header:`Query Params (${e.queryParams.length})`},{default:a(()=>[(d(!0),_(S,null,P(e.queryParams,(r,l)=>(d(),g(t(c),{key:l},{default:a(()=>[o(t($),null,{default:a(()=>[o(t(b),{value:r.name,"onUpdate:value":f=>r.name=f,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(t(b),{value:r.value,"onUpdate:value":f=>r.value=f,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(t(w),{danger:"",onClick:f=>N(l)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),o(t(c),null,{default:a(()=>[o(t(w),{type:"dashed",style:{width:"100%"},onClick:I},{default:a(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),o(t(T),{header:`Headers (${e.headers.length})`},{default:a(()=>[(d(!0),_(S,null,P(e.headers,(r,l)=>(d(),g(t(c),{key:l,label:l===0?"Headers":void 0},{default:a(()=>[o(t($),null,{default:a(()=>[o(t(b),{value:r.key,"onUpdate:value":f=>r.key=f,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(t(b),{value:r.value,"onUpdate:value":f=>r.value=f,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(t(w),{danger:"",onClick:f=>R(l)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),o(t(c),null,{default:a(()=>[o(t(w),{type:"dashed",style:{width:"100%"},onClick:O},{default:a(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),o(t(T),{header:"Body"},{default:a(()=>[e.method!=="GET"?(d(),g(t(c),{key:0},{default:a(()=>[o(t(U),{value:e.body,"onUpdate:value":s[1]||(s[1]=r=>e.body=r)},null,8,["value"])]),_:1})):q("",!0)]),_:1})]),_:1})]),_:1}),o(t(c),null,{default:a(()=>[z("div",le,[o(ee,{loading:C.value,disabled:n.disabledWarning,onClick:H,onSave:s[2]||(s[2]=r=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),o(t(re),{orientation:"left"},{default:a(()=>[v("Response")]),_:1}),e.response?(d(),_("div",ne,[o(t(F),{color:h.value},{default:a(()=>[v(D(e.response.status),1)]),_:1},8,["color"]),o(t(oe),null,{default:a(()=>[(d(!0),_(S,null,P(e.response.headers,(r,l)=>(d(),g(t(te),{key:l,label:l},{default:a(()=>[v(D(r),1)]),_:2},1032,["label"]))),128))]),_:1}),o(t(U),{value:e.response.body},null,8,["value"])])):q("",!0)]),_:1}))}}),dt=A({__name:"HookEditor",setup(y){const i=L(),p=E(null),k=B(()=>{var m;return(m=h.value)!=null&&m.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),{result:h}=W(async()=>{const[m,e]=await Promise.all([Y.get(),X.get(i.params.id)]);return J({workspace:m,hook:e})});return(m,e)=>(d(),g(K,{stage:t(h).hook,workspace:t(h).workspace,"stage-type":"hooks"},{settings:a(()=>[o(se,{hook:t(h).hook},null,8,["hook"])]),test:a(()=>[o(ue,{ref_key:"tester",ref:p,hook:t(h).hook,"disabled-warning":k.value},null,8,["hook","disabled-warning"])]),_:1},8,["stage","workspace"]))}});export{dt as default};
//# sourceMappingURL=HookEditor.a818ee3f.js.map
