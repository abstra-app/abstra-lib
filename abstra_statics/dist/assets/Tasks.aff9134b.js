import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.f9bfb8ed.js";import{R as f}from"./tasksController.dfc96085.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,dd as S}from"./index.cda70faa.js";import"./gateway.f490dbc0.js";import{a as j,B as x}from"./build.22ad8111.js";import{a as C}from"./project.db1bcaec.js";import"./tables.2fce9e9d.js";import{a as D}from"./asyncComputed.3cd32a3a.js";import"./metadata.ebdbf1c8.js";import"./PhRobot.vue.8bd66d5a.js";import"./PhWebhooksLogo.vue.ea7bcc6c.js";import"./ant-design.d6f80b24.js";import"./string.64f82337.js";import"./dayjs.943bcfcb.js";import"./index.7e79acc9.js";import"./linters.242386e6.js";import"./scripts.a9a5db64.js";import"./record.9aa216bc.js";import"./polling.010eeab6.js";import"./popupNotifcation.29f086e3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="908b20b3-1334-41a8-a871-04b18c0adc89",e._sentryDebugIdIdentifier="sentry-dbid-908b20b3-1334-41a8-a871-04b18c0adc89")}catch{}})();const U=b({__name:"Tasks",setup(e){const a=_().params.projectId,p=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(d=>d.latest);if(!r)return null;const[u,c]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:u,project:c}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(p),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{U as default};
//# sourceMappingURL=Tasks.aff9134b.js.map
