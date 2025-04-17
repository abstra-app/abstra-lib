import{a as R}from"./asyncComputed.672062b4.js";import{d as H,f as q,o as d,c as k,w as a,b as o,u as t,bL as b,cz as y,db as W,aG as v,ea as T,dc as G,S as U,cy as B,N as M,O as i,E as Q,e as E,X as V,ah as z,aB as F,Y as _,e9 as C,bT as P,aS as A,cE as x,a as L,d5 as Y,ef as J,z as X}from"./index.fc84014a.js";import"./linters.8206b0e1.js";import{H as Z}from"./scripts.2e70f74b.js";import{W as K}from"./workspaces.daa49914.js";import{R as ee,_ as te}from"./RuntimeCommonSettings.1a46cba3.js";import{u as oe}from"./editor.7285fa3a.js";import{_ as ae}from"./RunButton.vue_vue_type_script_setup_true_lang.56cd911b.js";import{D as re,A as se}from"./index.bb7bbc47.js";import{C as le,A as S}from"./CollapsePanel.fff8b26a.js";import{A as D}from"./index.94001f75.js";import{A as ne}from"./index.58d08b50.js";import"./record.3eaa9781.js";import"./workspaceStore.b9894a6d.js";import"./url.e31b02a6.js";import"./colorHelpers.c6936887.js";import"./BaseLayout.742a8ea2.js";import"./SaveButton.c232d2b0.js";import"./UnsavedChangesHandler.c77a19f8.js";import"./ExclamationCircleOutlined.cf04c19c.js";import"./log.a506b30e.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.5b5d25ad.js";import"./Logo.bb37b372.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.cf4ac764.js";import"./PhArrowCounterClockwise.vue.20e8a410.js";import"./PhFilePy.vue.0428f8ce.js";import"./PhChats.vue.f22ce572.js";import"./PhRocket.vue.ef2f8499.js";import"./PhPackage.vue.07f3044b.js";import"./polling.54e76081.js";import"./PhArrowSquareOut.vue.1f84235f.js";import"./PhSignOut.vue.b672f6c8.js";import"./CloseCircleOutlined.1b48d055.js";import"./CheckCircleFilled.d62bc4e5.js";import"./index.3b3fb304.js";import"./popupNotifcation.bce98de7.js";import"./ai.550e7810.js";import"./uuid.27ca253e.js";import"./PhCheckCircle.vue.ea5db00a.js";import"./PhCopySimple.vue.04894b2b.js";import"./controller.e1862042.js";import"./vue-flow-core.adbe52dc.js";import"./validations.bec19c65.js";import"./string.68bb0465.js";import"./metadata.dd8229d2.js";import"./PhRobot.vue.a7397330.js";import"./PhWebhooksLogo.vue.9b9f4ea6.js";import"./controller.f07d2e42.js";import"./gateway.ca2b209e.js";import"./fetch.1f49814c.js";import"./PhPencil.vue.518bccd4.js";import"./ant-design.beee8277.js";import"./Avatar.0a885ac1.js";import"./LoadingOutlined.04af6def.js";import"./Card.fbc37212.js";import"./TabPane.106a8d03.js";import"./SourceCode.a3d08e2d.js";import"./PhFolder.vue.7e26da31.js";import"./toggleHighContrast.c52d61e5.js";import"./TasksManager.d5a7c074.js";import"./tasksController.0d46a99b.js";import"./index.f7f518bc.js";import"./PhCaretRight.vue.eccc7207.js";import"./Badge.7fa4dba8.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[c]="e1d297bd-4035-4ad0-a633-e8c11e299e09",m._sentryDebugIdIdentifier="sentry-dbid-e1d297bd-4035-4ad0-a633-e8c11e299e09")}catch{}})();const ue=H({__name:"HookSettings",props:{hook:{}},setup(m){const c=m,{publicUrl:f}=oe(),g=q(()=>!f||!c.hook.path?"":`${f}/_hooks/${c.hook.path}`);return(p,u)=>(d(),k(t(B),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[o(t(y),{label:"Name",required:""},{default:a(()=>[o(t(b),{value:p.hook.title,"onUpdate:value":u[0]||(u[0]=e=>p.hook.title=e)},null,8,["value"])]),_:1}),o(ee,{runtime:p.hook},null,8,["runtime"]),g.value?(d(),k(t(W),{key:0},{default:a(()=>[v(" You can test this hook locally while the server is running sending a request to "),o(t(G),{code:"",copyable:""},{default:a(()=>[v(T(g.value),1)]),_:1})]),_:1})):U("",!0)]),_:1}))}}),ie={style:{display:"flex","flex-direction":"column",gap:"10px"}},de={key:0},pe=H({__name:"HookTester",props:{hook:{},disabledWarning:{}},setup(m,{expose:c}){const f=m,g=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],p=q(()=>{var n;if((n=e.response)!=null&&n.status)return e.response.status>=500?"red":e.response.status>=400?"orange":e.response.status>=200?"green":"blue"}),u=new M(i.record(i.object({body:i.string(),headers:i.array(i.object({key:i.string(),value:i.string()})),method:i.string(),queryParams:i.array(i.object({name:i.string(),value:i.string()}))})),"abstra:hookTestConfig"),e=Q({queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),w=E(!1),$=async()=>{w.value=!0;try{const n={method:e.method,query:e.queryParams.reduce((s,{name:r,value:l})=>(r&&l&&(s[r]=l),s),{}),body:e.body,headers:e.headers.reduce((s,{key:r,value:l})=>(r&&l&&(s[r]=l),s),{})};e.response=await f.hook.run(n)}finally{w.value=!1}},I=()=>{e.queryParams.push({name:"",value:""})},N=n=>{e.queryParams=e.queryParams.filter((s,r)=>r!==n)},O=()=>{e.headers.push({key:"",value:""})},j=n=>{e.headers=e.headers.filter((s,r)=>r!==n)};return V(()=>{const s=(u.get()||{})[f.hook.id];s&&(e.body=s.body,e.headers=s.headers,e.method=s.method,e.queryParams=s.queryParams)}),z(()=>{const n={body:e.body,headers:e.headers,method:e.method,queryParams:e.queryParams},s=u.get()||{};s[f.hook.id]=n,u.set(s)}),c({runHook:$}),(n,s)=>(d(),k(t(B),{layout:"vertical",style:{overflow:"auto"}},{default:a(()=>[o(t(y),{label:"Method"},{default:a(()=>[o(t(F),{value:e.method,options:g,onSelect:s[0]||(s[0]=r=>e.method=r)},null,8,["value"])]),_:1}),o(t(y),null,{default:a(()=>[o(t(le),{ghost:""},{default:a(()=>[o(t(S),{header:`Query Params (${e.queryParams.length})`},{default:a(()=>[(d(!0),_(A,null,C(e.queryParams,(r,l)=>(d(),k(t(y),{key:l},{default:a(()=>[o(t(D),null,{default:a(()=>[o(t(b),{value:r.name,"onUpdate:value":h=>r.name=h,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(t(b),{value:r.value,"onUpdate:value":h=>r.value=h,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(t(P),{danger:"",onClick:h=>N(l)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),o(t(y),null,{default:a(()=>[o(t(P),{type:"dashed",style:{width:"100%"},onClick:I},{default:a(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),o(t(S),{header:`Headers (${e.headers.length})`},{default:a(()=>[(d(!0),_(A,null,C(e.headers,(r,l)=>(d(),k(t(y),{key:l,label:l===0?"Headers":void 0},{default:a(()=>[o(t(D),null,{default:a(()=>[o(t(b),{value:r.key,"onUpdate:value":h=>r.key=h,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(t(b),{value:r.value,"onUpdate:value":h=>r.value=h,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(t(P),{danger:"",onClick:h=>j(l)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),o(t(y),null,{default:a(()=>[o(t(P),{type:"dashed",style:{width:"100%"},onClick:O},{default:a(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),o(t(S),{header:"Body"},{default:a(()=>[e.method!=="GET"?(d(),k(t(y),{key:0},{default:a(()=>[o(t(x),{value:e.body,"onUpdate:value":s[1]||(s[1]=r=>e.body=r)},null,8,["value"])]),_:1})):U("",!0)]),_:1})]),_:1})]),_:1}),o(t(y),null,{default:a(()=>[L("div",ie,[o(ae,{loading:w.value,disabled:n.disabledWarning,onClick:$,onSave:s[2]||(s[2]=r=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),o(t(ne),{orientation:"left"},{default:a(()=>[v("Response")]),_:1}),e.response?(d(),_("div",de,[o(t(Y),{color:p.value},{default:a(()=>[v(T(e.response.status),1)]),_:1},8,["color"]),o(t(se),null,{default:a(()=>[(d(!0),_(A,null,C(e.response.headers,(r,l)=>(d(),k(t(re),{key:l,label:l},{default:a(()=>[v(T(r),1)]),_:2},1032,["label"]))),128))]),_:1}),o(t(x),{value:e.response.body},null,8,["value"])])):U("",!0)]),_:1}))}}),Pt=H({__name:"HookEditor",setup(m){const c=J(),f=E(null),g=q(()=>{var u;return(u=p.value)!=null&&u.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),{result:p}=R(async()=>{const[u,e]=await Promise.all([K.get(),Z.get(c.params.id)]);return X({workspace:u,hook:e})});return(u,e)=>(d(),k(te,{stage:t(p).hook,workspace:t(p).workspace,"stage-type":"hooks"},{settings:a(()=>[o(ue,{hook:t(p).hook},null,8,["hook"])]),test:a(()=>[o(pe,{ref_key:"tester",ref:f,hook:t(p).hook,"disabled-warning":g.value},null,8,["hook","disabled-warning"])]),_:1},8,["stage","workspace"]))}});export{Pt as default};
//# sourceMappingURL=HookEditor.f0f090c1.js.map
