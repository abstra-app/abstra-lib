import{u as o,a as l}from"./index.e9b266bb.js";import{d as w,r as u,b as n,ev as h,f as d,u as t,e as K,c as b,ex as c,L as x}from"./outputWidgets.da1326db.js";import{P as A}from"./PlayerNavbar.a664fed9.js";import{K as B,_ as D,A as I,P as L}from"./TableView.vue_vue_type_script_setup_true_lang.92b72ec7.js";import{a as N}from"./asyncComputed.aed43f77.js";import{g as S}from"./api.fd672433.js";import{A as P}from"./index.eb8279cf.js";import"./fetch.8ed5a2ac.js";import"./pubsub.073776b5.js";import"./PhKanban.vue.336d2f98.js";import"./PhSignOut.vue.050618f3.js";import"./Text.77944bfa.js";import"./index.cbb67d79.js";import"./Link.c4c885e7.js";import"./Paragraph.c6be0287.js";import"./Title.74e861a2.js";import"./index.d9fdc6a1.js";import"./vuedraggable.umd.886a5fd0.js";import"./workspaces.3e1494d0.js";import"./runnerData.49c1b91b.js";import"./url.74c945cd.js";import"./record.c77dac89.js";import"./scripts.72b575b6.js";import"./envVars.243ec4c0.js";import"./api.4e3c225a.js";import"./metadata.abc9e8b8.js";import"./PhCheckCircle.vue.85981ac8.js";import"./PhScroll.vue.0349f81f.js";import"./PhWebhooksLogo.vue.160160ce.js";import"./ant-design.2df60c81.js";import"./index.b6b739de.js";import"./Modal.b6280b8d.js";import"./index.584a1fbb.js";import"./index.94e17ee5.js";import"./index.315171d4.js";import"./index.8276bd00.js";import"./CollapsePanel.e374b0dc.js";import"./index.824a932c.js";import"./index.75e23fd3.js";import"./isNumeric.75337b1e.js";import"./Card.7036c4ef.js";import"./TabPane.fc810946.js";import"./hasIn.15ce65b3.js";import"./LoadingOutlined.3aca2285.js";import"./index.475bbe22.js";import"./Form.fab4ab7e.js";import"./string.d54ad420.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="721a5799-e701-4a85-bfb2-5c4df8d9477e",e._sentryDebugIdIdentifier="sentry-dbid-721a5799-e701-4a85-bfb2-5c4df8d9477e")}catch{}})();const T={style:{padding:"20px"}},De=w({__name:"Threads",setup(e){const a=new L(o),s=new x(I,"kanban-selected-stages"),f=u(o.getUser()),g=["Kanban","Table view"],r=u("Kanban"),{result:y}=N(S),v=({path:i})=>{l.push({name:"form",params:{path:i.split("/")}})},k=()=>{o.removeUser(),l.push({name:"playerHome"})};return(i,m)=>{var p;return n(),h("div",null,[d(A,{"runner-data":t(y),"is-kanban-visible":!1,"user-email":(p=f.value)==null?void 0:p.claims.email,onLogout:k,onNavigate:v},null,8,["runner-data","user-email"]),K("div",T,[d(t(P),{value:r.value,"onUpdate:value":m[0]||(m[0]=_=>r.value=_),options:g,style:{"margin-bottom":"16px"}},null,8,["value"]),r.value==="Kanban"?(n(),b(B,{key:0,"kanban-repository":t(a),"kanban-stages-storage":t(s)},null,8,["kanban-repository","kanban-stages-storage"])):c("",!0),r.value==="Table view"?(n(),b(D,{key:1,"kanban-repository":t(a)},null,8,["kanban-repository"])):c("",!0)])])}}});export{De as default};
//# sourceMappingURL=Threads.9998bd4d.js.map
