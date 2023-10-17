import{_ as O}from"./StageRunSelector.vue_vue_type_script_setup_true_lang.9631319b.js";import{_ as F}from"./RunButton.vue_vue_type_script_setup_true_lang.d2d28986.js";import{d as D,J,H as Q,r as V,K as G,b as u,c as v,w as o,f as l,aJ as f,u as e,af as M,eu as _,eB as A,bZ as y,c4 as h,bg as C,cB as U,ew as P,e as Y,eC as N}from"./outputWidgets.d94fff8c.js";import{D as j,A as L}from"./index.4982fa60.js";import{A as S}from"./index.0f14f01f.js";import{A as p}from"./Title.c70c7e79.js";import{C as Z,A as T}from"./CollapsePanel.1d546a09.js";import{A as q}from"./index.209f6c1c.js";import{A as z}from"./index.0e652438.js";import{A as K}from"./index.e7f021ad.js";import{F as H}from"./Form.57801503.js";import{R as W}from"./SmartConsole.4ccb77f1.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[m]="75e3e68a-9e7a-4f04-a200-2cca3f0f1f17",c._sentryDebugIdIdentifier="sentry-dbid-75e3e68a-9e7a-4f04-a200-2cca3f0f1f17")}catch{}})();const X={style:{display:"flex","flex-direction":"column",gap:"10px"}},ee={key:0},k="abstra-run-id",me=D({__name:"HookTester",props:{hook:{},logService:{}},setup(c,{expose:m}){const d=c,g=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],I=J(()=>{var r;if((r=a.response)!=null&&r.status)return a.response.status>=500?"red":a.response.status>=400?"orange":a.response.status>=200?"green":"blue"}),B=r=>{a.stageRunId=r},a=Q({shouldSelectStageRun:!d.hook.isInitial,stageRunId:null,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({firstName:"John",lastName:"Doe",age:25,address:{streetAddress:"21 2nd Ave",city:"New York",state:"NY",postalCode:"10021"}},null,4)}),b=V(!1),w=async()=>{b.value=!0;try{const r=await d.hook.test({method:a.method,query:a.queryParams.reduce((n,{name:t,value:s})=>(t&&s&&(n[t]=s),n),{}),body:a.body,headers:a.headers.reduce((n,{key:t,value:s})=>(t&&s&&(n[t]=s),n),{})});a.response=r,r.stderr&&d.logService.log({type:"stderr",log:r.stderr}),r.stdout&&d.logService.log({type:"stdout",log:r.stdout})}finally{b.value=!1}};G([()=>a.stageRunId,()=>a.queryParams],([r,n])=>{const t=n.find(s=>s.name===k);if(console.log(r,t),r&&!t){a.queryParams.push({name:k,value:r});return}if(!r&&t){a.queryParams=a.queryParams.filter(s=>s.name!==k);return}r&&t&&r!==t.value&&(t.value=r)});const x=()=>{a.queryParams.push({name:"",value:""})},$=r=>{a.queryParams=a.queryParams.filter((n,t)=>t!==r)},R=()=>{a.headers.push({key:"",value:""})},E=r=>{a.headers=a.headers.filter((n,t)=>t!==r)};return m({runHook:w}),(r,n)=>(u(),v(e(H),{layout:"vertical"},{default:o(()=>[l(e(S),{orientation:"left"},{default:o(()=>[f("Task linking")]),_:1}),l(O,{disabled:d.hook.isInitial,path:d.hook.path,optional:!0,onSelect:n[0]||(n[0]=t=>B(t))},null,8,["disabled","path"]),l(e(S),{orientation:"left"},{default:o(()=>[f("Request")]),_:1}),l(e(p),{label:"Method"},{default:o(()=>[l(e(M),{value:a.method,options:g,onSelect:n[1]||(n[1]=t=>a.method=t)},null,8,["value"])]),_:1}),l(e(p),null,{default:o(()=>[l(e(Z),null,{default:o(()=>[l(e(T),{header:`Query Params (${a.queryParams.length})`},{default:o(()=>[(u(!0),_(C,null,A(a.queryParams,(t,s)=>(u(),v(e(p),{key:s},{default:o(()=>[l(e(q),null,{default:o(()=>[l(e(y),{value:t.name,"onUpdate:value":i=>t.name=i,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(y),{value:t.value,"onUpdate:value":i=>t.value=i,type:"text",placeholder:"value",disabled:t.name===k},null,8,["value","onUpdate:value","disabled"]),l(e(h),{danger:"",onClick:i=>$(s)},{default:o(()=>[f("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),l(e(p),null,{default:o(()=>[l(e(h),{type:"dashed",style:{width:"100%"},onClick:x},{default:o(()=>[f("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"]),l(e(T),{header:`Headers (${a.headers.length})`},{default:o(()=>[(u(!0),_(C,null,A(a.headers,(t,s)=>(u(),v(e(p),{key:s,label:s===0?"Headers":void 0},{default:o(()=>[l(e(q),null,{default:o(()=>[l(e(y),{value:t.key,"onUpdate:value":i=>t.key=i,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(y),{value:t.value,"onUpdate:value":i=>t.value=i,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),l(e(h),{danger:"",onClick:i=>E(s)},{default:o(()=>[f("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),l(e(p),null,{default:o(()=>[l(e(h),{type:"dashed",style:{width:"100%"},onClick:R},{default:o(()=>[f("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),l(e(T),{header:"Body"},{default:o(()=>[a.method!=="GET"?(u(),v(e(p),{key:0},{default:o(()=>[l(e(U),{value:a.body,"onUpdate:value":n[2]||(n[2]=t=>a.body=t)},null,8,["value"])]),_:1})):P("",!0)]),_:1})]),_:1})]),_:1}),l(e(p),null,{default:o(()=>[Y("div",X,[!a.stageRunId&&!r.hook.isInitial?(u(),v(e(z),{key:0,message:"No task instance was selected. It must be set during runtime.",type:"info","show-icon":""})):P("",!0),l(F,{loading:b.value,onClick:w},null,8,["loading"])])]),_:1}),l(e(S),{orientation:"left"},{default:o(()=>[f("Response")]),_:1}),a.response?(u(),_("div",ee,[l(e(K),{color:I.value},{default:o(()=>[f(N(a.response.status),1)]),_:1},8,["color"]),l(e(L),null,{default:o(()=>[(u(!0),_(C,null,A(a.response.headers,(t,s)=>(u(),v(e(j),{key:s,label:s},{default:o(()=>[f(N(t),1)]),_:2},1032,["label"]))),128))]),_:1}),l(e(U),{value:a.response.body},null,8,["value"])])):P("",!0)]),_:1}))}}),ce=D({__name:"HookSettings",props:{hook:{}},setup(c){return(m,d)=>(u(),v(e(H),{layout:"vertical"},{default:o(()=>[l(e(p),{label:"Name",required:""},{default:o(()=>[l(e(y),{value:m.hook.title,"onUpdate:value":d[0]||(d[0]=g=>m.hook.title=g)},null,8,["value"])]),_:1}),l(W,{runtime:m.hook},null,8,["runtime"])]),_:1}))}});export{me as _,ce as a};
//# sourceMappingURL=HookSettings.vue_vue_type_script_setup_true_lang.471aa574.js.map
