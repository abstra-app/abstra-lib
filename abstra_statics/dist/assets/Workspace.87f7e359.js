import{d as k,H as I,J as j,r as L,K as D,b as t,c as s,F as v,L as w,x as c,N as x,G as $,e as l,I as C,D as f,t as T,w as B,z as d,q as g,O,Q as A,a as E}from"./registerWidgets.802bba2f.js";import{d as N,s as F,w as W,a as R,b as J,c as V,m as z,e as G}from"./icons.1dc8a69b.js";import{T as H}from"./Tooltip.345f0ce8.js";import{_ as q}from"./logo.084e5d7c.js";import{a as K}from"./asyncComputed.1364aaa9.js";import{W as P}from"./workspaces.4c177a35.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";const Q={class:"sidebar"},U={class:"section-name"},M=["onClick"],X={class:"item-name"},Y={key:0,class:"tag soon"},Z={key:1,class:"tag beta"},ee={key:2,class:"tag cloud"},te=k({__name:"Sidebar",setup(r){var h;const e=I(),a=j(),n=L((h=a.name)!=null?h:"forms"),p=D(()=>[{name:"Runtime",items:[{name:"Forms",icon:N,path:"forms"},{name:"Jobs",icon:F,path:"jobs",cloud:!0},{name:"Hooks",icon:W,path:"hooks"},{name:"Dashes",icon:R,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:J,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:V,path:"style"},{name:"Sidebar",icon:z,path:"sidebar"}]}]),b=i=>{i.unavailable||(e.push(i.path),n.value=i.path)};return(i,m)=>(t(),s("div",Q,[(t(!0),s(v,null,w(d(p),_=>(t(),s("div",{key:_.name,class:"section"},[c("span",U,x(_.name),1),(t(!0),s(v,null,w(_.items,o=>(t(),s("div",{key:o.name,role:"button",class:$(["item",{active:n.value===o.path,disabled:o.unavailable||_.cloud}]),tabindex:"0",onClick:ve=>b(o)},[l(C,{class:$(["icon",{disabled:o.unavailable,active:n.value===o.path}]),path:o.icon,width:"20",height:"20"},null,8,["class","path"]),c("span",X,x(o.name),1),o.unavailable?(t(),s("span",Y,"SOON")):f("",!0),o.beta?(t(),s("span",Z,"BETA")):f("",!0),o.cloud?(t(),s("span",ee,"CLOUD")):f("",!0),o.warning?(t(),T(H,{key:3,class:"warning",text:o.warning,fixed:!0,top:18,left:18},{default:B(()=>[l(C,{path:d(G),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):f("",!0)],10,M))),128))]))),128))]))}});const se=g(te,[["__scopeId","data-v-320e9ff3"]]);const oe={},S=r=>(O("data-v-ccfb70ef"),r=r(),A(),r),ae={class:"logo"},ne=S(()=>c("img",{src:q,alt:"Abstra cloud logo"},null,-1)),ce=S(()=>c("span",null," Abstra ",-1)),re=[ne,ce];function ie(r,e){return t(),s("div",ae,re)}const le=g(oe,[["render",ie],["__scopeId","data-v-ccfb70ef"]]);class _e{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const y=new _e;class u{constructor(e,a){this.projectId=e,this.authorId=a}static async get(){const e=await y.get();return e.logged?new u(e.project_id,e.author_id):null}static async create(e){const a=await y.create(e);if(!a.logged)throw new Error("Failed to login");return new u(a.project_id,a.author_id)}async delete(){return y.delete()}}const de={key:0,class:"login-block"},ue={key:1,class:"login-block"},pe=["href"],he={key:1,class:"button"},me={key:2,class:"login-block"},fe=k({__name:"LoginBlock",setup(r){const e=L(!1),{loading:a,result:n,refetch:p}=K(()=>u.get());async function b(){const m=prompt("Token");!m||(await u.create(m),p())}async function h(){!n.value||(await n.value.delete(),p())}async function i(){!n.value||(e.value=!0,confirm("Are you sure you want to deploy this project to Abstra Cloud?")&&(await P.deploy(),alert("Deployed!")),e.value=!1)}return(m,_)=>d(a)?(t(),s("div",de,"loading...")):d(n)?(t(),s("div",ue,[c("a",{class:"button",href:`https://cloud.abstra.io/projects/${d(n).projectId}`,target:"_blank"},"Go to console ",8,pe),e.value?(t(),s("button",he,"Deploying...")):(t(),s("button",{key:0,class:"button",onClick:i},"Deploy")),c("button",{class:"button",onClick:h},"Logout")])):(t(),s("div",me,[c("button",{class:"button",onClick:b},"Login")]))}});const ge=g(fe,[["__scopeId","data-v-7d8a9386"]]),be={class:"workspace"},ye=k({__name:"Workspace",setup(r){return(e,a)=>{const n=E("router-view");return t(),s(v,null,[c("nav",null,[l(le),l(ge)]),c("div",be,[l(se,{class:"sidebar"}),l(n)])],64)}}});const je=g(ye,[["__scopeId","data-v-91804c74"]]);export{je as default};
//# sourceMappingURL=Workspace.87f7e359.js.map
