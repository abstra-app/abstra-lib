import{d as _,r as v,b as u,ev as R,f as s,c as d,w as i,u as e,bO as x,eA as B,eB as C,eK as h,ex as f,e as S}from"./outputWidgets.5c52fa87.js";import{W as w}from"./workspaces.b84f9d3d.js";import{S as A}from"./scripts.7d1352d2.js";import{R as T,S as N,a as $,L as D}from"./SourceCode.308c3fca.js";import{B as P}from"./BaseLayout.9086f03b.js";import{a as U}from"./asyncComputed.26d9bcc1.js";import{_ as E}from"./RunButton.vue_vue_type_script_setup_true_lang.96bef45c.js";import{A as F}from"./FormItem.eb04c2fc.js";import{F as L}from"./Form.17a01b6e.js";import{N as K}from"./NavbarControls.c7751a52.js";import{_ as V}from"./SaveButton.vue_vue_type_script_setup_true_lang.af38a0dc.js";import{S as M}from"./StageRunSelector.475446bc.js";import{c as W}from"./index.96485183.js";import{A as q}from"./index.0be66a31.js";import{A as y,T as I}from"./TabPane.78291069.js";import"./runnerData.82f622be.js";import"./url.8bc1ece1.js";import"./record.eec0c608.js";import"./pubsub.5093c187.js";import"./uuid.3fa39a9b.js";import"./icons.03282d1d.js";import"./jobs.958fe26f.js";import"./validations.c445dea2.js";import"./string.a1010cd3.js";import"./toggleHighContrast.0562817f.js";import"./index.1c2a8b66.js";import"./Card.f3624547.js";import"./Text.c9a398d0.js";import"./Base.6d1a6939.js";import"./hasIn.f2c6482d.js";import"./index.de88781f.js";import"./popupNotifcation.15cd0622.js";import"./CircularLoading.4d5881ae.js";import"./Link.c6635c0a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fa56e270.js";import"./Paragraph.cff93cf2.js";import"./Modal.2c05a20d.js";import"./ant-design.5e093646.js";import"./index.076f710c.js";import"./index.2f763437.js";import"./index.a2e116a9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[c]="795d9476-5436-44b4-8e68-f090604d716d",n._sentryDebugIdIdentifier="sentry-dbid-795d9476-5436-44b4-8e68-f090604d716d")}catch{}})();const H={style:{width:"100%",display:"flex","flex-direction":"column"}},O=_({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(n,{emit:c}){const t=n,g=v(!1),l=async()=>{g.value=!0;try{const r=t.stageRunId?await t.script.run(t.stageRunId):await t.script.test();r.stderr&&t.logService.log({type:"stderr",log:r.stderr}),r.stdout&&t.logService.log({type:"stdout",log:r.stdout})}finally{g.value=!1,t.stageRunId&&c("update-stage-run-id",null)}};return(r,m)=>(u(),R("div",H,[s(E,{loading:g.value,disabled:r.script.hasChanges(),onClick:l,onSave:m[0]||(m[0]=o=>r.script.save())},null,8,["loading","disabled"])]))}}),j=_({__name:"ScriptSettings",props:{script:{}},setup(n){const t=v(n.script);return(g,l)=>(u(),d(e(L),{layout:"vertical"},{default:i(()=>[s(e(F),{label:"Name",required:""},{default:i(()=>[s(e(x),{value:t.value.title,"onUpdate:value":l[0]||(l[0]=r=>t.value.title=r)},null,8,["value"])]),_:1}),s(T,{runtime:t.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"50%"}},G={style:{width:"50%"}},Ee=_({__name:"ScriptEditor",setup(n){const c=B(),t=C();function g(){c.push({name:"home"})}const l=v("source-code"),r=v("preview"),m=v(null),{result:o}=U(()=>Promise.all([w.get(),A.get(t.params.id),w.readTestData()]).then(([b,a,p])=>(a.updateInitialState("test_data",p),h({workspace:b,script:a})))),k=D.create();return(b,a)=>(u(),d(P,null,{navbar:i(()=>[e(o)?(u(),d(e(W),{key:0,title:e(o).script.title,style:{padding:"5px 10px"},onBack:g},{extra:i(()=>[s(K,{"show-save-button":!1,"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):f("",!0)]),content:i(()=>[e(o)?(u(),d(e(q),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:i(()=>[S("div",z,[s(e(I),{"active-key":l.value,"onUpdate:activeKey":a[0]||(a[0]=p=>l.value=p)},{rightExtra:i(()=>[s(V,{model:e(o).script},null,8,["model"])]),default:i(()=>[s(e(y),{key:"source-code",tab:"Source code"}),s(e(y),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),l.value==="source-code"?(u(),d(N,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):f("",!0),e(o).script&&l.value==="settings"?(u(),d(j,{key:1,script:e(o).script},null,8,["script"])):f("",!0)]),S("div",G,[s(e(I),{"active-key":r.value,"onUpdate:activeKey":a[1]||(a[1]=p=>r.value=p)},{default:i(()=>[s(e(y),{key:"preview",tab:"Preview"}),f("",!0)]),_:1},8,["active-key"]),e(o).script&&r.value==="preview"?(u(),d(O,{key:0,ref:"tester",script:e(o).script,"log-service":e(k),"stage-run-id":m.value,onUpdateStageRunId:a[2]||(a[2]=p=>m.value=p)},null,8,["script","log-service","stage-run-id"])):f("",!0),r.value==="test-data"?(u(),d(M,{key:1,ref:"stageRunSelector",stage:e(o).script,"stage-run-id":m.value,onUpdateStageRunId:a[3]||(a[3]=p=>m.value=p)},null,8,["stage","stage-run-id"])):f("",!0)])]),_:1})):f("",!0)]),footer:i(()=>[s($,{runtime:"forms","log-service":e(k)},null,8,["log-service"])]),_:1}))}});export{Ee as default};
//# sourceMappingURL=ScriptEditor.7a5f33d3.js.map
