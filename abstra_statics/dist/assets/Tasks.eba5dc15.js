import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.41c04be6.js";import{R as f}from"./tasksController.093417a7.js";import{d as _,ea as b,f as y,o as n,Y as g,b as w,w as k,u as c,c as I,S as T,aS as v,aG as B,dd as S}from"./index.1a1f6336.js";import"./gateway.e3c93fec.js";import{a as j,B as x}from"./build.b75828b1.js";import{a as C}from"./project.4e9ef94f.js";import"./tables.904f2d4c.js";import{a as D}from"./asyncComputed.08ef64d3.js";import"./metadata.7030d54a.js";import"./PhRobot.vue.3d49fa51.js";import"./PhWebhooksLogo.vue.aa8c994b.js";import"./ant-design.646644f8.js";import"./string.f275262c.js";import"./dayjs.febbd517.js";import"./index.10613767.js";import"./scripts.0d29f66f.js";import"./record.8824ecc3.js";import"./linters.a1444064.js";import"./polling.d6abad3e.js";import"./popupNotifcation.cc1c3770.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="7d7cfd2e-7cee-4a90-992c-292fb9c205e1",e._sentryDebugIdIdentifier="sentry-dbid-7d7cfd2e-7cee-4a90-992c-292fb9c205e1")}catch{}})();const U=_({__name:"Tasks",setup(e){const a=b().params.projectId,l=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(d=>d.latest);if(!r)return null;const[p,u]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:p,project:u}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(c(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:c(l),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{U as default};
//# sourceMappingURL=Tasks.eba5dc15.js.map
