import{_ as m}from"./TasksView.vue_vue_type_script_setup_true_lang.1dedf02a.js";import{R as f}from"./tasksController.1bc5c1fd.js";import{d as b,ea as _,f as y,o as n,Y as g,b as w,w as k,u as c,c as I,S as T,aS as v,aG as B,dd as S}from"./index.3771ba10.js";import"./gateway.30306852.js";import{a as j,B as x}from"./build.833bcc85.js";import{a as C}from"./project.6c29a992.js";import"./tables.40658f63.js";import{a as D}from"./asyncComputed.dafc0f7e.js";import"./metadata.4e025ee7.js";import"./PhWebhooksLogo.vue.6bc3f29d.js";import"./string.5eff2ab8.js";import"./ant-design.29dc45fc.js";import"./dayjs.a9e6b96b.js";import"./index.50cbf9dd.js";import"./polling.e7ae2ed8.js";import"./scripts.bb6a3f71.js";import"./record.077c5356.js";import"./linters.cac4e36e.js";import"./popupNotifcation.17e2bf3b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="0ec08546-ef5c-4e97-aec9-7bcb78b40545",e._sentryDebugIdIdentifier="sentry-dbid-0ec08546-ef5c-4e97-aec9-7bcb78b40545")}catch{}})();const Q=b({__name:"Tasks",setup(e){const a=_().params.projectId,l=new f(a),{result:o}=D(async()=>{const r=(await j.list(a)).find(d=>d.latest);if(!r)return null;const[p,u]=await Promise.all([x.get(r.id),C.get(a)]);return{buildSpec:p,project:u}}),i=y(()=>!o.value||!o.value.buildSpec?null:o.value.buildSpec.runtimes.map(t=>({id:t.id,stageTitle:t.title,stageType:t.type})));return(t,r)=>(n(),g(v,null,[w(c(S),null,{default:k(()=>[B("Tasks")]),_:1}),i.value?(n(),I(m,{key:0,class:"tasks",api:c(l),stages:i.value},null,8,["api","stages"])):T("",!0)],64))}});export{Q as default};
//# sourceMappingURL=Tasks.4fe23d9e.js.map
