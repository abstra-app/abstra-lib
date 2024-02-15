import{d as _,r as v,b as u,ev as R,f as o,c as d,w as i,u as e,bO as x,eA as B,eB as C,eK as h,ex as f,e as S}from"./outputWidgets.6f2079f2.js";import{W as w}from"./workspaces.a2c4ab0e.js";import{S as A}from"./scripts.cecb0086.js";import{R as T,S as N,a as $,L as D}from"./SourceCode.27036454.js";import{B as P}from"./BaseLayout.0ca0a075.js";import{a as U}from"./asyncComputed.cabe49c9.js";import{_ as E}from"./RunButton.vue_vue_type_script_setup_true_lang.a1d87d48.js";import{A as F}from"./FormItem.ad234cc8.js";import{F as L}from"./Form.39218c79.js";import{N as K}from"./NavbarControls.da144c70.js";import{_ as V}from"./SaveButton.vue_vue_type_script_setup_true_lang.0fe22f41.js";import{S as M}from"./StageRunSelector.78412202.js";import{c as W}from"./index.b13203ef.js";import{A as q}from"./index.495d9e63.js";import{A as y,T as I}from"./TabPane.5e06fd45.js";import"./runnerData.771e5b57.js";import"./url.cb6bdaba.js";import"./record.47595bb2.js";import"./pubsub.062c9a5e.js";import"./uuid.97b21a52.js";import"./icons.2416ce9f.js";import"./jobs.201a253d.js";import"./validations.b8f7175c.js";import"./string.c6bcd767.js";import"./toggleHighContrast.f7377b31.js";import"./index.8adab9a4.js";import"./Card.36bc8f01.js";import"./Text.2ca6ae2d.js";import"./Base.1816589f.js";import"./Typography.a5dd5619.js";import"./hasIn.e5c0248d.js";import"./index.ce842f51.js";import"./popupNotifcation.546bd3e9.js";import"./Link.90e15e15.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.946e2290.js";import"./Paragraph.78779367.js";import"./Modal.d9a1c499.js";import"./ant-design.3875abe6.js";import"./index.ce20536d.js";import"./index.7f3617ae.js";import"./index.35e5303e.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[c]="3f7ba598-179f-4517-bcd4-6c2814f83d0a",n._sentryDebugIdIdentifier="sentry-dbid-3f7ba598-179f-4517-bcd4-6c2814f83d0a")}catch{}})();const H={style:{width:"100%",display:"flex","flex-direction":"column"}},O=_({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(n,{emit:c}){const t=n,g=v(!1),l=async()=>{g.value=!0;try{const r=t.stageRunId?await t.script.run(t.stageRunId):await t.script.test();r.stderr&&t.logService.log({type:"stderr",log:r.stderr}),r.stdout&&t.logService.log({type:"stdout",log:r.stdout})}finally{g.value=!1,t.stageRunId&&c("update-stage-run-id",null)}};return(r,m)=>(u(),R("div",H,[o(E,{loading:g.value,disabled:r.script.hasChanges(),onClick:l,onSave:m[0]||(m[0]=a=>r.script.save())},null,8,["loading","disabled"])]))}}),j=_({__name:"ScriptSettings",props:{script:{}},setup(n){const t=v(n.script);return(g,l)=>(u(),d(e(L),{layout:"vertical"},{default:i(()=>[o(e(F),{label:"Name",required:""},{default:i(()=>[o(e(x),{value:t.value.title,"onUpdate:value":l[0]||(l[0]=r=>t.value.title=r)},null,8,["value"])]),_:1}),o(T,{runtime:t.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"50%"}},G={style:{width:"50%"}},Ee=_({__name:"ScriptEditor",setup(n){const c=B(),t=C();function g(){c.push({name:"home"})}const l=v("source-code"),r=v("preview"),m=v(null),{result:a}=U(()=>Promise.all([w.get(),A.get(t.params.id),w.readTestData()]).then(([k,s,p])=>(s.updateInitialState("test_data",p),h({workspace:k,script:s})))),b=D.create();return(k,s)=>(u(),d(P,null,{navbar:i(()=>[e(a)?(u(),d(e(W),{key:0,title:e(a).script.title,style:{padding:"5px 10px"},onBack:g},{extra:i(()=>[o(K,{"show-save-button":!1,"editing-model":e(a).script},null,8,["editing-model"])]),_:1},8,["title"])):f("",!0)]),content:i(()=>[e(a)?(u(),d(e(q),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:i(()=>[S("div",z,[o(e(I),{"active-key":l.value,"onUpdate:activeKey":s[0]||(s[0]=p=>l.value=p)},{rightExtra:i(()=>[o(V,{model:e(a).script},null,8,["model"])]),default:i(()=>[o(e(y),{key:"source-code",tab:"Source code"}),o(e(y),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),l.value==="source-code"?(u(),d(N,{key:0,script:e(a).script,workspace:e(a).workspace},null,8,["script","workspace"])):f("",!0),e(a).script&&l.value==="settings"?(u(),d(j,{key:1,script:e(a).script},null,8,["script"])):f("",!0)]),S("div",G,[o(e(I),{"active-key":r.value,"onUpdate:activeKey":s[1]||(s[1]=p=>r.value=p)},{default:i(()=>[o(e(y),{key:"preview",tab:"Preview"}),f("",!0)]),_:1},8,["active-key"]),e(a).script&&r.value==="preview"?(u(),d(O,{key:0,ref:"tester",script:e(a).script,"log-service":e(b),"stage-run-id":m.value,onUpdateStageRunId:s[2]||(s[2]=p=>m.value=p)},null,8,["script","log-service","stage-run-id"])):f("",!0),r.value==="test-data"?(u(),d(M,{key:1,ref:"stageRunSelector",stage:e(a).script,"stage-run-id":m.value,onUpdateStageRunId:s[3]||(s[3]=p=>m.value=p)},null,8,["stage","stage-run-id"])):f("",!0)])]),_:1})):f("",!0)]),footer:i(()=>[o($,{runtime:"forms","log-service":e(b)},null,8,["log-service"])]),_:1}))}});export{Ee as default};
//# sourceMappingURL=ScriptEditor.8e91ad80.js.map
