import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.745deb74.js";import{R as f}from"./tasksController.c5b91236.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,dd as S}from"./index.3dbef024.js";import"./gateway.a3ac7e73.js";import{a as j,B as x}from"./build.f695a9fe.js";import{a as C}from"./project.edec1332.js";import"./tables.93a86911.js";import{a as D}from"./asyncComputed.66315728.js";import"./metadata.ed7b651a.js";import"./PhRobot.vue.c80b41ca.js";import"./PhWebhooksLogo.vue.14053c28.js";import"./ant-design.d38dbd37.js";import"./string.c05820ab.js";import"./dayjs.55f52559.js";import"./index.3ca6ae95.js";import"./scripts.b6abee8f.js";import"./record.8cf8a0e3.js";import"./linters.58cbf1bd.js";import"./polling.1408f649.js";import"./popupNotifcation.f8561136.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="8ffa899e-ab9b-47bd-b3aa-223889bc983e",e._sentryDebugIdIdentifier="sentry-dbid-8ffa899e-ab9b-47bd-b3aa-223889bc983e")}catch{}})();const U=b({__name:"Tasks",setup(e){const a=_().params.projectId,p=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(c=>c.latest);if(!r)return null;const[u,d]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:u,project:d}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(p),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{U as default};
//# sourceMappingURL=Tasks.ce6835bb.js.map
