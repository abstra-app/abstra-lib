import{_ as O}from"./StageRunSelector.vue_vue_type_script_setup_true_lang.a3a28f81.js";import{_ as V}from"./RunButton.vue_vue_type_script_setup_true_lang.c6e02b30.js";import{d as q,H as F,G,r as Q,J,b as u,c,w as o,f as l,aI as f,u as e,ae as M,et as _,eA as A,bV as y,c0 as h,bf as P,cx as U,ev as C,e as Y,eB as I}from"./outputWidgets.1739e6b5.js";import{D as j,A as L}from"./index.a95c2798.js";import{A as S}from"./index.55ff2de5.js";import{A as p}from"./Title.1261c75a.js";import{C as z,A as T}from"./CollapsePanel.34a522a0.js";import{A as N}from"./index.fbff59b3.js";import{A as W}from"./index.663f575e.js";import{A as X}from"./index.366cf7e1.js";import{F as D}from"./Form.6a4829ad.js";import{R as Z}from"./Debugger.vue_vue_type_script_setup_true_lang.8a10c449.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[m]="ae827e9e-7a55-4017-8060-35bf595956f6",v._sentryDebugIdIdentifier="sentry-dbid-ae827e9e-7a55-4017-8060-35bf595956f6")}catch{}})();const K={style:{display:"flex","flex-direction":"column",gap:"10px"}},ee={key:0},k="abstra-run-id",me=q({__name:"HookTester",props:{hook:{},logService:{}},setup(v,{expose:m}){const d=v,b=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],H=F(()=>{var r;if((r=t.response)!=null&&r.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),x=r=>{t.stageRunId=r},t=G({shouldSelectStageRun:!d.hook.isInitial,stageRunId:null,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({firstName:"John",lastName:"Doe",age:25,address:{streetAddress:"21 2nd Ave",city:"New York",state:"NY",postalCode:"10021"}},null,4)}),g=Q(!1),w=async()=>{g.value=!0;try{const r=await d.hook.test({method:t.method,query:t.queryParams.reduce((n,{name:a,value:s})=>(a&&s&&(n[a]=s),n),{}),body:t.body,headers:t.headers.reduce((n,{key:a,value:s})=>(a&&s&&(n[a]=s),n),{})});t.response=r,r.stderr&&d.logService.log({type:"stderr",log:r.stderr}),r.stdout&&d.logService.log({type:"stdout",log:r.stdout})}finally{g.value=!1}};J([()=>t.stageRunId,()=>t.queryParams],([r,n])=>{const a=n.find(s=>s.name===k);if(console.log(r,a),r&&!a){t.queryParams.push({name:k,value:r});return}if(!r&&a){t.queryParams=t.queryParams.filter(s=>s.name!==k);return}r&&a&&r!==a.value&&(a.value=r)});const B=()=>{t.queryParams.push({name:"",value:""})},$=r=>{t.queryParams=t.queryParams.filter((n,a)=>a!==r)},R=()=>{t.headers.push({key:"",value:""})},E=r=>{t.headers=t.headers.filter((n,a)=>a!==r)};return m({runHook:w}),(r,n)=>(u(),c(e(D),{layout:"vertical"},{default:o(()=>[l(e(S),{orientation:"left"},{default:o(()=>[f("Task linking")]),_:1}),l(O,{disabled:d.hook.isInitial,path:d.hook.path,optional:!0,onSelect:n[0]||(n[0]=a=>x(a))},null,8,["disabled","path"]),l(e(S),{orientation:"left"},{default:o(()=>[f("Request")]),_:1}),l(e(p),{label:"Method"},{default:o(()=>[l(e(M),{value:t.method,options:b,onSelect:n[1]||(n[1]=a=>t.method=a)},null,8,["value"])]),_:1}),l(e(p),null,{default:o(()=>[l(e(z),null,{default:o(()=>[l(e(T),{header:`Query Params (${t.queryParams.length})`},{default:o(()=>[(u(!0),_(P,null,A(t.queryParams,(a,s)=>(u(),c(e(p),{key:s},{default:o(()=>[l(e(N),null,{default:o(()=>[l(e(y),{value:a.name,"onUpdate:value":i=>a.name=i,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(y),{value:a.value,"onUpdate:value":i=>a.value=i,type:"text",placeholder:"value",disabled:a.name===k},null,8,["value","onUpdate:value","disabled"]),l(e(h),{danger:"",onClick:i=>$(s)},{default:o(()=>[f("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),l(e(p),null,{default:o(()=>[l(e(h),{type:"dashed",style:{width:"100%"},onClick:B},{default:o(()=>[f("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"]),l(e(T),{header:`Headers (${t.headers.length})`},{default:o(()=>[(u(!0),_(P,null,A(t.headers,(a,s)=>(u(),c(e(p),{key:s,label:s===0?"Headers":void 0},{default:o(()=>[l(e(N),null,{default:o(()=>[l(e(y),{value:a.key,"onUpdate:value":i=>a.key=i,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(y),{value:a.value,"onUpdate:value":i=>a.value=i,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),l(e(h),{danger:"",onClick:i=>E(s)},{default:o(()=>[f("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),l(e(p),null,{default:o(()=>[l(e(h),{type:"dashed",style:{width:"100%"},onClick:R},{default:o(()=>[f("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),l(e(T),{header:"Body"},{default:o(()=>[t.method!=="GET"?(u(),c(e(p),{key:0},{default:o(()=>[l(e(U),{value:t.body,"onUpdate:value":n[2]||(n[2]=a=>t.body=a)},null,8,["value"])]),_:1})):C("",!0)]),_:1})]),_:1})]),_:1}),l(e(p),null,{default:o(()=>[Y("div",K,[!t.stageRunId&&!r.hook.isInitial?(u(),c(e(W),{key:0,message:"No task instance was selected. It must be set during runtime.",type:"info","show-icon":""})):C("",!0),l(V,{loading:g.value,onClick:w},null,8,["loading"])])]),_:1}),l(e(S),{orientation:"left"},{default:o(()=>[f("Response")]),_:1}),t.response?(u(),_("div",ee,[l(e(X),{color:H.value},{default:o(()=>[f(I(t.response.status),1)]),_:1},8,["color"]),l(e(L),null,{default:o(()=>[(u(!0),_(P,null,A(t.response.headers,(a,s)=>(u(),c(e(j),{key:s,label:s},{default:o(()=>[f(I(a),1)]),_:2},1032,["label"]))),128))]),_:1}),l(e(U),{value:t.response.body},null,8,["value"])])):C("",!0)]),_:1}))}}),ve=q({__name:"HookSettings",props:{hook:{}},setup(v){return(m,d)=>(u(),c(e(D),{layout:"vertical"},{default:o(()=>[l(e(p),{label:"Name",required:""},{default:o(()=>[l(e(y),{value:m.hook.title,"onUpdate:value":d[0]||(d[0]=b=>m.hook.title=b)},null,8,["value"])]),_:1}),l(Z,{runtime:m.hook},null,8,["runtime"])]),_:1}))}});export{me as _,ve as a};
//# sourceMappingURL=HookSettings.vue_vue_type_script_setup_true_lang.ddf9e6d4.js.map
