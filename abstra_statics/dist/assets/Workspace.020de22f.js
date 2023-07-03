import{d as k,H as C,J as I,r as S,K as T,b as s,c as o,F as v,L as y,x as n,N as w,G as x,e as l,I as $,D as h,t as j,w as B,z as d,q as g,O,Q as D,a as E}from"./registerWidgets.81004098.js";import{d as N,s as F,w as A,a as R,b as J,c as V,e as W}from"./icons.ea1ef9e9.js";import{T as z}from"./Tooltip.879659d1.js";import{_ as G}from"./logo.084e5d7c.js";import{a as H}from"./asyncComputed.841de1fc.js";const q={class:"sidebar"},K={class:"section-name"},P=["onClick"],Q={class:"item-name"},U={key:0,class:"tag soon"},X={key:1,class:"tag beta"},Y={key:2,class:"tag cloud"},Z=k({__name:"Sidebar",setup(c){var i;const e=C(),t=I(),r=S((i=t.name)!=null?i:"forms"),m=T(()=>[{name:"Runtime",items:[{name:"Forms",icon:N,path:"forms"},{name:"Jobs",icon:F,path:"jobs",cloud:!0},{name:"Hooks",icon:A,path:"hooks"},{name:"Dashes",icon:R,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:J,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Settings",icon:V,path:"settings"}]}]),b=_=>{_.unavailable||(e.push(_.path),r.value=_.path)};return(_,me)=>(s(),o("div",q,[(s(!0),o(v,null,y(d(m),p=>(s(),o("div",{key:p.name,class:"section"},[n("span",K,w(p.name),1),(s(!0),o(v,null,y(p.items,a=>(s(),o("div",{key:a.name,role:"button",class:x(["item",{active:r.value===a.path,disabled:a.unavailable||p.cloud}]),tabindex:"0",onClick:be=>b(a)},[l($,{class:x(["icon",{disabled:a.unavailable,active:r.value===a.path}]),path:a.icon,width:"20",height:"20"},null,8,["class","path"]),n("span",Q,w(a.name),1),a.unavailable?(s(),o("span",U,"SOON")):h("",!0),a.beta?(s(),o("span",X,"BETA")):h("",!0),a.cloud?(s(),o("span",Y,"CLOUD")):h("",!0),a.warning?(s(),j(z,{key:3,class:"warning",text:a.warning,fixed:!0,top:18,left:18},{default:B(()=>[l($,{path:d(W),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):h("",!0)],10,P))),128))]))),128))]))}});const M=g(Z,[["__scopeId","data-v-873a191e"]]);const ee={},L=c=>(O("data-v-ccfb70ef"),c=c(),D(),c),te={class:"logo"},se=L(()=>n("img",{src:G,alt:"Abstra cloud logo"},null,-1)),ae=L(()=>n("span",null," Abstra ",-1)),oe=[se,ae];function ne(c,e){return s(),o("div",te,oe)}const ce=g(ee,[["render",ne],["__scopeId","data-v-ccfb70ef"]]);class re{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const f=new re;class u{constructor(e,t){this.projectId=e,this.authorId=t}static async get(){const e=await f.get();return e.logged?new u(e.project_id,e.author_id):null}static async create(e){const t=await f.create(e);if(!t.logged)throw new Error("Failed to login");return new u(t.project_id,t.author_id)}async delete(){return f.delete()}}const ie={key:0,class:"login-block"},le={key:1,class:"login-block"},_e=["href"],de={key:2,class:"login-block"},ue=k({__name:"LoginBlock",setup(c){const{loading:e,result:t,refetch:r}=H(()=>u.get());async function m(){const i=prompt("Token");!i||(await u.create(i),r())}async function b(){!t.value||(await t.value.delete(),r())}return(i,_)=>d(e)?(s(),o("div",ie,"loading...")):d(t)?(s(),o("div",le,[n("a",{class:"button",href:`https://cloud.abstra.io/project/${d(t).projectId}`,target:"_blank"},"Go to console ",8,_e),n("button",{class:"button",onClick:b},"Logout")])):(s(),o("div",de,[n("button",{class:"button",onClick:m},"Login")]))}});const pe=g(ue,[["__scopeId","data-v-26b9fb0d"]]),he={class:"workspace"},ge=k({__name:"Workspace",setup(c){return(e,t)=>{const r=E("router-view");return s(),o(v,null,[n("nav",null,[l(ce),l(pe)]),n("div",he,[l(M,{class:"sidebar"}),l(r)])],64)}}});const xe=g(ge,[["__scopeId","data-v-91804c74"]]);export{xe as default};
//# sourceMappingURL=Workspace.020de22f.js.map
