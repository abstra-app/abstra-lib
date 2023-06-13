import{r as b}from"./index.314cf40a.js";import{u as k}from"./WidgetsFrame.cebd6d3d.js";import{F as x,R as S}from"./broker.64603716.js";import{d as B,u as I,Q as g,G as m,y as o,b as r,c as u,e as K,t as w,L,K as N,N as O,O as T,v as d,q as E}from"./registerWidgets.fff064a1.js";import{D as F,n as C}from"./DashPlayer.7373a7f9.js";import{a as V,L as j}from"./CircularLoading.59d7fd3d.js";import{r as A,o as G}from"./runnerData.9e14dd92.js";import"./icons.907f45d7.js";import"./Modal.2ceba592.js";async function Q(s){const a=await fetch(`/_api/${s}`);if(a.status==404)return null;if(!a.ok)throw new Error(await a.text());const{form:c,dash:n}=await a.json();return{form:c&&A(c),dash:n&&G(n)}}const p=s=>(O("data-v-7a49cef6"),s=s(),T(),s),$={key:0,class:"loading"},z={key:1,class:"error"},H=p(()=>d("h1",null,"Oops! Something went wrong",-1)),J=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[H,J],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],ae=B({__name:"Player",setup(s){const a=L(),c=N(),n=I({playerKey:k()}),_=({path:e})=>{c.push({name:"player",query:a.query,params:{path:e.split("/")}})},f=async()=>{n.playerKey=k()};g([()=>a.path,()=>a.query],()=>f());const{loading:P,result:t,error:R}=V(()=>{var e;return Q((e=a.path.slice(1))!=null?e:"")}),h=m(()=>i.value?S.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=m(()=>{var e,l;return(l=(e=t.value)==null?void 0:e.form)!=null?l:null}),y=m(()=>{var l,v;if(!((l=t.value)!=null&&l.dash))return null;const e=C.create((v=t.value)==null?void 0:v.dash,!1);return e.onRedirect(({url:q,queryParams:D})=>b(c,q,D)),e});return g(t,()=>{var e;!t.value||(t.value.form?document.title=(e=t.value.form.welcomeTitle)!=null?e:t.value.form.title:t.value.dash&&(document.title=t.value.dash.title))}),(e,l)=>o(P)?(r(),u("div",$,[K(j)])):o(R)?(r(),u("div",z,M)):o(i)&&o(h)?(r(),u("div",U,[(r(),w(x,{key:n.playerKey,class:"player",form:o(i),params:o(a).query,broker:o(h),"enable-auto-focus":!0,onNavigate:_,onLogout:f},null,8,["form","params","broker"]))])):o(y)?(r(),u("div",W,[(r(),w(F,{key:n.playerKey,class:"player","is-preview":!1,params:o(a).query,"dash-player-state":o(y),onNavigate:_},null,8,["params","dash-player-state"]))])):(r(),u("div",X,ee))}});const de=E(ae,[["__scopeId","data-v-7a49cef6"]]);export{de as default};
//# sourceMappingURL=Player.144caca5.js.map
