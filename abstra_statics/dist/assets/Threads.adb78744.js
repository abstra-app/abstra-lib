import{u as o,a as l}from"./index.99abcac0.js";import{d as w,r as u,b as n,ev as h,f as d,u as t,e as K,c,ex as b,L as x}from"./outputWidgets.0b665cc7.js";import{P as B}from"./PlayerNavbar.7f1df2fe.js";import{K as D,_ as I,A as L,P as N}from"./TableView.vue_vue_type_script_setup_true_lang.77389980.js";import{a as S}from"./asyncComputed.1d5bfff0.js";import{g as A}from"./api.4c906e65.js";import{a as P}from"./index.e4cff134.js";import"./fetch.39c6091b.js";import"./pubsub.16b0f787.js";import"./PhKanban.vue.a8678a36.js";import"./PhSignOut.vue.63bbf18b.js";import"./Text.b24e4288.js";import"./index.a7f577c5.js";import"./Link.46c652a9.js";import"./Paragraph.f6e4bd5c.js";import"./Title.08b5828d.js";import"./index.82b8d939.js";import"./vuedraggable.umd.83509061.js";import"./workspaces.1f8a4760.js";import"./runnerData.165cbed5.js";import"./url.8ba4c1e5.js";import"./record.9fd09cc1.js";import"./scripts.87c04629.js";import"./envVars.6327c254.js";import"./api.1cbb3241.js";import"./metadata.e4c9b896.js";import"./PhCheckCircle.vue.0ea3a36f.js";import"./PhScroll.vue.c1cb774d.js";import"./PhWebhooksLogo.vue.781b947a.js";import"./ant-design.7b6715bc.js";import"./index.3d9cdc48.js";import"./Modal.3f688333.js";import"./index.f264fca2.js";import"./index.c642001c.js";import"./index.73d9991c.js";import"./CollapsePanel.55d6f7bc.js";import"./index.3ed8313c.js";import"./index.4fbcd54b.js";import"./isNumeric.75337b1e.js";import"./Card.f9a9e371.js";import"./index.cde3856c.js";import"./TabPane.1e6beacb.js";import"./hasIn.8e8e9839.js";import"./LoadingOutlined.f7ec280b.js";import"./index.27183f20.js";import"./Form.ac4ccba7.js";import"./string.5eb5f33e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="3ef65b2d-5040-4d57-ae69-6aca48c7018d",a._sentryDebugIdIdentifier="sentry-dbid-3ef65b2d-5040-4d57-ae69-6aca48c7018d")}catch{}})();const T={style:{padding:"20px"}},Ia=w({__name:"Threads",setup(a){const e=new N(o),s=new x(L,"kanban-selected-stages"),f=u(o.getUser()),g=["Kanban","Table view"],r=u("Kanban"),{result:y}=S(A),v=({path:i})=>{l.push({name:"form",params:{path:i.split("/")}})},k=()=>{o.removeUser(),l.push({name:"playerHome"})};return(i,m)=>{var p;return n(),h("div",null,[d(B,{"runner-data":t(y),"show-kanban":!1,"is-kanban-visible":!1,"user-email":(p=f.value)==null?void 0:p.claims.email,onLogout:k,onNavigate:v},null,8,["runner-data","user-email"]),K("div",T,[d(t(P),{value:r.value,"onUpdate:value":m[0]||(m[0]=_=>r.value=_),options:g,style:{"margin-bottom":"16px"}},null,8,["value"]),r.value==="Kanban"?(n(),c(D,{key:0,"kanban-repository":t(e),"kanban-stages-storage":t(s)},null,8,["kanban-repository","kanban-stages-storage"])):b("",!0),r.value==="Table view"?(n(),c(I,{key:1,"kanban-repository":t(e)},null,8,["kanban-repository"])):b("",!0)])])}}});export{Ia as default};
//# sourceMappingURL=Threads.adb78744.js.map
