import{u as o,a as l}from"./index.4df0f1e8.js";import{d as w,r as u,b as n,ew as h,f as c,u as t,e as K,c as b,ey as d,L as A}from"./outputWidgets.950bc458.js";import{P as B}from"./PlayerNavbar.9793f3fe.js";import{K as D,_ as I,A as L,P as N}from"./TableView.vue_vue_type_script_setup_true_lang.e43f235f.js";import{a as S}from"./asyncComputed.8ab9e4d0.js";import{g as x}from"./api.5298e993.js";import{A as P}from"./index.f5bc2b49.js";import"./fetch.7898a3c5.js";import"./pubsub.834f20db.js";import"./PhKanban.vue.933b2760.js";import"./PhSignOut.vue.8b21c733.js";import"./Text.c3b3e2f2.js";import"./Base.e4fffc44.js";import"./index.2225ced4.js";import"./Link.51b39c97.js";import"./Paragraph.1e074fee.js";import"./Title.fe277e1d.js";import"./index.9c09ce1c.js";import"./vuedraggable.umd.a2712314.js";import"./workspaces.ab563ff8.js";import"./runnerData.b1353d28.js";import"./url.d1648526.js";import"./record.a33927f1.js";import"./scripts.1e370696.js";import"./envVars.d94fd9b4.js";import"./api.f50f13dc.js";import"./metadata.d486a056.js";import"./PhCheckCircle.vue.f4fa04a6.js";import"./PhScroll.vue.5facb516.js";import"./PhWebhooksLogo.vue.eeaedcc0.js";import"./ant-design.7cf74585.js";import"./index.4c99738e.js";import"./Modal.21054186.js";import"./index.b512e639.js";import"./index.ae29f8b9.js";import"./index.b68dd5f1.js";import"./index.99ef2ee4.js";import"./CollapsePanel.aa4c815a.js";import"./index.4c1cbf46.js";import"./index.7233792b.js";import"./isNumeric.75337b1e.js";import"./Card.096c4e25.js";import"./TabPane.a1de7f73.js";import"./hasIn.a2664971.js";import"./LoadingOutlined.841d2e51.js";import"./index.a75b47c2.js";import"./Form.4d94a6c1.js";import"./string.78bf4004.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="42336cc6-ffc2-4fa1-9ea0-faa4c0eeb555",e._sentryDebugIdIdentifier="sentry-dbid-42336cc6-ffc2-4fa1-9ea0-faa4c0eeb555")}catch{}})();const T={style:{padding:"20px"}},Le=w({__name:"Threads",setup(e){const a=new N(o),s=new A(L,"kanban-selected-stages"),f=u(o.getUser()),g=["Kanban","Table view"],r=u("Kanban"),{result:y}=S(x),v=({path:i})=>{l.push({name:"form",params:{path:i.split("/")}})},k=()=>{o.removeUser(),l.push({name:"playerHome"})};return(i,m)=>{var p;return n(),h("div",null,[c(B,{"runner-data":t(y),"is-kanban-visible":!1,"user-email":(p=f.value)==null?void 0:p.claims.email,onLogout:k,onNavigate:v},null,8,["runner-data","user-email"]),K("div",T,[c(t(P),{value:r.value,"onUpdate:value":m[0]||(m[0]=_=>r.value=_),options:g,style:{"margin-bottom":"16px"}},null,8,["value"]),r.value==="Kanban"?(n(),b(D,{key:0,"kanban-repository":t(a),"kanban-stages-storage":t(s)},null,8,["kanban-repository","kanban-stages-storage"])):d("",!0),r.value==="Table view"?(n(),b(I,{key:1,"kanban-repository":t(a)},null,8,["kanban-repository"])):d("",!0)])])}}});export{Le as default};
//# sourceMappingURL=Threads.1623d4dd.js.map
