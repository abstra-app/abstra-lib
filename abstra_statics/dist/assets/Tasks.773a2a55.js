import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.dd0ef5dd.js";import{R as f}from"./tasksController.3368a1a5.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,dd as S}from"./index.27e18556.js";import"./gateway.bf1a31cc.js";import{a as j,B as x}from"./build.941d0643.js";import{a as C}from"./project.f507867c.js";import"./tables.1eb1a264.js";import{a as D}from"./asyncComputed.377998e5.js";import"./metadata.6563bf7c.js";import"./PhWebhooksLogo.vue.3961aac7.js";import"./ant-design.4be23782.js";import"./string.d42858a3.js";import"./dayjs.053b8cef.js";import"./index.d5c09b3c.js";import"./polling.c7050286.js";import"./scripts.2d2d6075.js";import"./record.0a950d76.js";import"./linters.dcc9c39b.js";import"./popupNotifcation.6b40b5e7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="7123e353-faf2-4363-bfdb-39ea35884171",e._sentryDebugIdIdentifier="sentry-dbid-7123e353-faf2-4363-bfdb-39ea35884171")}catch{}})();const Q=b({__name:"Tasks",setup(e){const a=_().params.projectId,p=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(c=>c.latest);if(!r)return null;const[u,d]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:u,project:d}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(p),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{Q as default};
//# sourceMappingURL=Tasks.773a2a55.js.map
