import{a as y}from"./asyncComputed.1364aaa9.js";import{P as j}from"./project.7c905308.js";import"./utils.acbba3b4.js";import{d as v,v as w,b as n,c,x as t,e as l,z as r,S as o,N as p,D as _,t as S,a as C,O as x,Q as E,q as I,J as N}from"./registerWidgets.802bba2f.js";import{a as B}from"./index.7eb978ee.js";import{L as D}from"./CircularLoading.5c7f2ad7.js";import{N as P,e as A,O}from"./icons.97625e56.js";import"./passwordlessManager.d5134797.js";import"./pubsub.a0411919.js";const i=e=>(x("data-v-21cf523d"),e=e(),E(),e),T={class:"subdomain-editor"},V={class:"title"},H=i(()=>t("div",{class:"subtitle"}," Every workspace in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. Only the workspace\u2019s owner can edit the subdomain. ",-1)),z={key:0,class:"subdomain-presenter"},L={class:"link-item"},$=i(()=>t("div",{class:"link-title"},"Forms and Dashes available at:",-1)),q={class:"link"},F={class:"custom-subdomain"},J={class:"link-item"},M=i(()=>t("div",{class:"link-title"},"Hooks available at:",-1)),Q={class:"link"},R={class:"custom-subdomain"},G={key:1,class:"subdomain-value-editor"},K={class:"subdomain-change-warning"},U={class:"section-title"},W=i(()=>t("div",{class:"section-body"}," Changing the workspace subdomain affects any links you've previously shared. The user wont be able to access old links. ",-1)),X={class:"input-section"},Y={class:"subdomain-value-input"},Z=i(()=>t("span",null,"https://",-1)),tt=["value"],st=i(()=>t("span",null,".abstra.run",-1)),et={key:0,class:"error"},ot={class:"option-buttons"},at=v({__name:"SubdomainEditor",props:{project:null},setup(e){const a=e,s=w({name:a.project.subdomain,error:"",editing:!1,loading:!1}),d=()=>s.editing=!0,m=()=>{g(),s.editing=!1,s.error=""},h=async()=>{s.error="",s.loading=!0,await f(),s.error||(s.editing=!1),s.loading=!1},f=async()=>{if(!(!a.project||a.project.subdomain===s.name)){if(!s.name){s.error="Subdomain cannot be empty";return}a.project.subdomain=s.name,await a.project.save()}},g=()=>s.name=a.project.subdomain,k=b=>{s.name=B(b.target.value,{replacement:"-",lower:!0,strict:!0})};return(b,ct)=>{const u=C("icon");return n(),c("div",T,[t("h2",V,[l(u,{width:"22",height:"22",path:r(P),fill:"#414A58"},null,8,["path"]),o("Subdomain ")]),H,s.editing?(n(),c("div",G,[t("div",K,[t("div",U,[l(u,{path:r(A),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),o(" Be careful ")]),W]),t("div",X,[t("div",Y,[Z,t("input",{value:s.name,type:"text",onInput:k},null,40,tt),st]),s.error?(n(),c("div",et,[l(u,{path:r(O),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),o(" "+p(s.error),1)])):_("",!0),t("div",ot,[t("button",{class:"cancel-button",onClick:m},"Cancel"),t("button",{class:"save-button",onClick:h},[o(" Save Changes "),s.loading?(n(),S(D,{key:0,size:"16"})):_("",!0)])])])])):(n(),c("div",z,[t("div",L,[$,t("div",q,[o(" https://"),t("span",F,p(e.project.subdomain),1),o(".abstra.run/[PATH] ")])]),t("div",J,[M,t("div",Q,[o(" https://"),t("span",R,p(e.project.subdomain),1),o(".abstra.run/_hooks/[PATH] ")])]),t("button",{onClick:d},"Edit Subdomain")]))])}}});const nt=I(at,[["__scopeId","data-v-21cf523d"]]),it={key:0,class:"project-settings"},vt=v({__name:"ProjectSettings",setup(e){const s=N().params.projectId,{result:d}=y(()=>j.get(s));return(m,h)=>r(d)?(n(),c("div",it,[l(nt,{project:r(d)},null,8,["project"])])):_("",!0)}});export{vt as default};
//# sourceMappingURL=ProjectSettings.8185eb63.js.map
