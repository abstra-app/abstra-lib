import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.698e436d.js";import{R as f}from"./tasksController.4435e53d.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as l,c as I,S as T,aS as v,aG as B,dd as S}from"./index.abaf3ad4.js";import"./gateway.21d52798.js";import{a as j,B as x}from"./build.d28c7d46.js";import{a as C}from"./project.0a0bc2f8.js";import"./tables.2b820ae9.js";import{a as D}from"./asyncComputed.84aa5ffe.js";import"./metadata.a596afae.js";import"./PhWebhooksLogo.vue.a1150008.js";import"./ant-design.adc06afb.js";import"./string.7a9e8232.js";import"./dayjs.d8312bc1.js";import"./index.12f607b2.js";import"./scripts.24ea2b00.js";import"./record.fee51533.js";import"./linters.0fabbf73.js";import"./polling.1abfd793.js";import"./popupNotifcation.4879d617.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="cd65a85d-ebb2-4ed3-99b6-e2fb2efa1e72",e._sentryDebugIdIdentifier="sentry-dbid-cd65a85d-ebb2-4ed3-99b6-e2fb2efa1e72")}catch{}})();const Q=b({__name:"Tasks",setup(e){const a=_().params.projectId,d=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(c=>c.latest);if(!r)return null;const[p,u]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:p,project:u}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(l(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:l(d),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{Q as default};
//# sourceMappingURL=Tasks.0104533c.js.map
