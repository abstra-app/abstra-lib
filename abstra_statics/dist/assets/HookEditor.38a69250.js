import{d as I,G as L,F as V,r as U,H as G,b as n,c as d,w as r,ex as f,f as a,u as e,ad as M,ev as C,eC as T,cC as q,bH as S,bO as w,aq as y,bq as x,cp as $,e as B,eD as D,eA as Q,eB as J,eJ as W}from"./outputWidgets.333243b5.js";import{R as j,S as z,a as K,L as X}from"./SourceCode.cd6caa7c.js";import{a as Y}from"./asyncComputed.916d2e38.js";import{H as Z}from"./validations.0ebe149e.js";import{W as ee}from"./workspaces.76ae478a.js";import{B as te}from"./BaseLayout.82019b78.js";import{_ as ae}from"./RunButton.vue_vue_type_script_setup_true_lang.54c031de.js";import"./index.8dc49b35.js";import{C as oe,A as H,D as re,a as le}from"./index.12dbcf3c.js";import{A as se}from"./index.7e314b45.js";import{A as ne}from"./index.7a3dbad5.js";import{A as c}from"./FormItem.413481bf.js";import{A as ue}from"./index.be8066b9.js";import{F as E}from"./Form.950f385f.js";import{N as de}from"./NavbarControls.d18ea1e3.js";import{_ as ie}from"./SaveButton.vue_vue_type_script_setup_true_lang.9d5d90a4.js";import{c as pe}from"./index.f0ba07f5.js";import{A as me}from"./index.597ee428.js";import{A as N,T as ce}from"./TabPane.11abb547.js";import{a as fe}from"./Title.3b7d5185.js";import"./uuid.79e6386b.js";import"./icons.ec7238f6.js";import"./toggleHighContrast.352551aa.js";import"./record.3365b440.js";import"./pubsub.6843f3da.js";import"./string.41e06e1f.js";import"./url.2fbcdffc.js";import"./hasIn.cb198a04.js";import"./popupNotifcation.ea04b707.js";import"./index.48ab77c8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.25cae863.js";import"./index.dc85a467.js";import"./Text.f7432746.js";import"./Link.0ef9fe9c.js";import"./ant-design.d494077f.js";import"./index.e0bce9ea.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[i]="afb2611c-8bd8-4cd4-9034-f0d3c136cae8",v._sentryDebugIdIdentifier="sentry-dbid-afb2611c-8bd8-4cd4-9034-f0d3c136cae8")}catch{}})();const ve={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:1},P="abstra-run-id",he=I({__name:"HookTester",props:{hook:{},logService:{}},setup(v,{expose:i}){const p=v,h=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],k=L(()=>{var l;if((l=t.response)!=null&&l.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),R=l=>{t.stageRunId=l},t=V({shouldSelectStageRun:!p.hook.isInitial,stageRunId:null,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),_=U(!1),A=async()=>{_.value=!0;try{const l=await p.hook.test({method:t.method,query:t.queryParams.reduce((u,{name:o,value:s})=>(o&&s&&(u[o]=s),u),{}),body:t.body,headers:t.headers.reduce((u,{key:o,value:s})=>(o&&s&&(u[o]=s),u),{})});t.response=l,l.stderr&&p.logService.log({type:"stderr",log:l.stderr}),l.stdout&&p.logService.log({type:"stdout",log:l.stdout})}finally{_.value=!1}};G([()=>t.stageRunId,()=>t.queryParams],([l,u])=>{const o=u.find(s=>s.name===P);if(l&&!o){t.queryParams.push({name:P,value:l});return}if(!l&&o){t.queryParams=t.queryParams.filter(s=>s.name!==P);return}l&&o&&l!==o.value&&(o.value=l)});const g=()=>{t.queryParams.push({name:"",value:""})},b=l=>{t.queryParams=t.queryParams.filter((u,o)=>o!==l)},F=()=>{t.headers.push({key:"",value:""})},O=l=>{t.headers=t.headers.filter((u,o)=>o!==l)};return i({runHook:A}),(l,u)=>(n(),d(e(E),{layout:"vertical"},{default:r(()=>[f("",!0),a(e(c),{label:"Method"},{default:r(()=>[a(e(M),{value:t.method,options:h,onSelect:u[1]||(u[1]=o=>t.method=o)},null,8,["value"])]),_:1}),a(e(c),null,{default:r(()=>[a(e(oe),{ghost:""},{default:r(()=>[a(e(H),{header:`Query Params (${t.queryParams.length})`},{default:r(()=>[(n(!0),C(x,null,T(t.queryParams,(o,s)=>(n(),d(e(c),{key:s},{default:r(()=>[a(e(q),null,{default:r(()=>[a(e(S),{value:o.name,"onUpdate:value":m=>o.name=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(S),{value:o.value,"onUpdate:value":m=>o.value=m,type:"text",placeholder:"value",disabled:o.name===P},null,8,["value","onUpdate:value","disabled"]),a(e(w),{danger:"",onClick:m=>b(s)},{default:r(()=>[y("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(c),null,{default:r(()=>[a(e(w),{type:"dashed",style:{width:"100%"},onClick:g},{default:r(()=>[y("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(H),{header:`Headers (${t.headers.length})`},{default:r(()=>[(n(!0),C(x,null,T(t.headers,(o,s)=>(n(),d(e(c),{key:s,label:s===0?"Headers":void 0},{default:r(()=>[a(e(q),null,{default:r(()=>[a(e(S),{value:o.key,"onUpdate:value":m=>o.key=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(S),{value:o.value,"onUpdate:value":m=>o.value=m,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(w),{danger:"",onClick:m=>O(s)},{default:r(()=>[y("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(c),null,{default:r(()=>[a(e(w),{type:"dashed",style:{width:"100%"},onClick:F},{default:r(()=>[y("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(H),{header:"Body"},{default:r(()=>[t.method!=="GET"?(n(),d(e(c),{key:0},{default:r(()=>[a(e($),{value:t.body,"onUpdate:value":u[2]||(u[2]=o=>t.body=o)},null,8,["value"])]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1}),a(e(c),null,{default:r(()=>[B("div",ve,[!t.stageRunId&&!l.hook.isInitial?(n(),d(e(ue),{key:0,message:"No thread was selected. It must be set during runtime.",type:"info","show-icon":""})):f("",!0),a(ae,{loading:_.value,onClick:A},null,8,["loading"])])]),_:1}),a(e(se),{orientation:"left"},{default:r(()=>[y("Response")]),_:1}),t.response?(n(),C("div",ye,[a(e(ne),{color:k.value},{default:r(()=>[y(D(t.response.status),1)]),_:1},8,["color"]),a(e(le),null,{default:r(()=>[(n(!0),C(x,null,T(t.response.headers,(o,s)=>(n(),d(e(re),{key:s,label:s},{default:r(()=>[y(D(o),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e($),{value:t.response.body},null,8,["value"])])):f("",!0)]),_:1}))}}),ke=I({__name:"HookSettings",props:{hook:{}},setup(v){return(i,p)=>(n(),d(e(E),{layout:"vertical"},{default:r(()=>[a(e(c),{label:"Name",required:""},{default:r(()=>[a(e(S),{value:i.hook.title,"onUpdate:value":p[0]||(p[0]=h=>i.hook.title=h)},null,8,["value"])]),_:1}),a(j,{runtime:i.hook},null,8,["runtime"])]),_:1}))}}),_e={style:{width:"50%"}},ge={style:{width:"50%"}},ot=I({__name:"HookEditor",setup(v){const i=Q(),p=J(),h=U(null),k=U("source-code");function R(){i.push({name:"home"})}const{result:t}=Y(()=>Promise.all([ee.get(),Z.get(p.params.id)]).then(([A,g])=>W({workspace:A,hook:g}))),_=X.create();return(A,g)=>(n(),d(te,null,{navbar:r(()=>[e(t)?(n(),d(e(pe),{key:0,title:e(t).hook.title,style:{padding:"5px 25px"},onBack:R},{extra:r(()=>[a(de,{"docs-path":"hooks","editing-model":e(t).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):f("",!0)]),content:r(()=>[e(t)?(n(),d(e(me),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:r(()=>[B("div",_e,[a(e(ce),{"active-key":k.value,"onUpdate:activeKey":g[0]||(g[0]=b=>k.value=b)},{rightExtra:r(()=>[a(ie,{model:e(t).hook},null,8,["model"])]),default:r(()=>[a(e(N),{key:"source-code",tab:"Source code"}),a(e(N),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),k.value==="source-code"?(n(),d(z,{key:0,script:e(t).hook,workspace:e(t).workspace},null,8,["script","workspace"])):f("",!0),e(t).hook&&k.value==="settings"?(n(),d(ke,{key:1,hook:e(t).hook},null,8,["hook"])):f("",!0)]),B("div",ge,[a(e(fe),{level:4,style:{margin:"10px 0 24px 0"}},{default:r(()=>[y("Hook preview")]),_:1}),e(t).hook?(n(),d(he,{key:0,ref_key:"tester",ref:h,hook:e(t).hook,"log-service":e(_)},null,8,["hook","log-service"])):f("",!0)])]),_:1})):f("",!0)]),footer:r(()=>{var b;return[a(K,{runtime:"forms","log-service":e(_),onRestart:(b=h.value)==null?void 0:b.runHook},null,8,["log-service","onRestart"])]}),_:1}))}});export{ot as default};
//# sourceMappingURL=HookEditor.38a69250.js.map
