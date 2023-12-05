import{C as _}from"./gateway.b7cdac3e.js";import{d as k,eA as w,b as d,c as m,w as a,u as o,eu as v,f as n,bS as I,bv as A,bt as S,e as L,I as y,aq as c,cF as g,eD as p,ew as b,cn as T}from"./outputWidgets.5ad528ac.js";import{E as V,a as j,f as $,j as C,h as D}from"./icons.586bdc7c.js";import{a as E}from"./router.204c9874.js";import{c as f}from"./Text.856daa24.js";import{a as N,A as Q}from"./index.3400173a.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[t]="84ae76f5-e0e7-46a9-9cab-b436204cda9c",l._sentryDebugIdIdentifier="sentry-dbid-84ae76f5-e0e7-46a9-9cab-b436204cda9c")}catch{}})();class h{constructor(t,r,s){this.projectId=t,this.buildId=r,this.project=s}static fromV0(t,r,s){const u={hooks:s.hooks.map(e=>({id:e.path,logQuery:{buildId:r,runtimeId:e.path,runtimeTitle:e.title},...e})),forms:s.forms.map(e=>({id:e.path,logQuery:{buildId:r,runtimeId:e.path,runtimeTitle:e.title},...e})),jobs:s.jobs.map(e=>({id:e.identifier,logQuery:{buildId:r,runtimeId:e.identifier,runtimeTitle:e.title},...e}))};return new h(t,r,u)}static fromV1(t,r,s){const u={hooks:s.hooks.map(e=>({logQuery:{buildId:r,runtimeId:e.id,runtimeTitle:e.title},...e})),forms:s.forms.map(e=>({logQuery:{buildId:r,runtimeId:e.id,runtimeTitle:e.title},...e})),jobs:s.jobs.map(e=>({logQuery:{buildId:r,runtimeId:e.id,runtimeTitle:e.title},...e}))};return new h(t,r,u)}static from(t,r,s){if(s.version==="0.1")return this.fromV0(t,r,s);if(s.version==="1.0")return this.fromV1(t,r,s);throw new Error(`Unsupported project version: ${s.version}`)}get runtimes(){return[...this.project.forms.map(t=>({...t,type:"form"})),...this.project.hooks.map(t=>({...t,type:"hook"})),...this.project.jobs.map(t=>({...t,type:"job"}))]}}const U=async l=>{try{const t=await _.get(`projects/${l}/latest-build`);if(!t)return null;const{id:r,abstraJson:s}=t,u=JSON.parse(s);if(!u.version)throw new Error("version is invalid");return h.from(l,r,u)}catch(t){return console.log(`Latest build is invalid: ${t.message}`),null}},H=async l=>{try{const t=await _.get(`builds/${l}`);if(!t)return null;const{projectId:r,abstraJson:s}=t,u=JSON.parse(s);if(!u.version)throw new Error("version is invalid");return h.from(r,l,u)}catch(t){return console.log(`Latest build is invalid: ${t.message}`),null}},x={style:{display:"flex","align-items":"center",gap:"5px"}},B={key:1},K=k({__name:"component",props:{buildSpec:{},subdomain:{}},setup(l){const t=l,r=w(),s=e=>!t.subdomain||e.type!="form"?"":`https://${t.subdomain}.abstra.app/${e.path}`,u=e=>{r.push({name:"logs",params:{projectId:t.buildSpec.projectId},query:e.logQuery})};return(e,z)=>e.buildSpec.runtimes.length>0?(d(),m(o(Q),{key:0,"item-layout":"horizontal","data-source":e.buildSpec.runtimes},{renderItem:a(({item:i})=>[n(o(N),null,{actions:a(()=>[n(o(I),null,{overlay:a(()=>[n(o(A),null,{default:a(()=>[n(o(S),{onClick:J=>u(i)},{default:a(()=>[L("div",x,[n(y,{path:o(V)},null,8,["path"]),n(o(f),null,{default:a(()=>[c(" View Logs")]),_:1})])]),_:2},1032,["onClick"])]),_:2},1024)]),default:a(()=>[n(y,{path:o(j),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)]),default:a(()=>[i.type=="form"?(d(),m(o(g),{key:0,size:"large"},{default:a(()=>[n(y,{path:o($)},null,8,["path"]),s(i)?(d(),m(o(E),{key:0,href:s(i),strong:""},{default:a(()=>[c(p(i.title),1)]),_:2},1032,["href"])):(d(),m(o(f),{key:1,strong:""},{default:a(()=>[c(p(i.title),1)]),_:2},1024)),n(o(f),{type:"secondary",code:""},{default:a(()=>[c("/"+p(i.path),1)]),_:2},1024)]),_:2},1024)):b("",!0),i.type=="job"?(d(),m(o(g),{key:1,size:"large"},{default:a(()=>[n(y,{path:o(C)},null,8,["path"]),n(o(f),{strong:""},{default:a(()=>[c(p(i.title),1)]),_:2},1024),n(o(f),{type:"secondary",code:""},{default:a(()=>[c(p(i.schedule),1)]),_:2},1024)]),_:2},1024)):b("",!0),i.type=="hook"?(d(),m(o(g),{key:2,size:"large"},{default:a(()=>[n(y,{path:o(D)},null,8,["path"]),n(o(f),{strong:""},{default:a(()=>[c(p(i.title),1)]),_:2},1024),n(o(f),{type:"secondary",code:""},{default:a(()=>[c("/_hooks/"+p(i.path),1)]),_:2},1024)]),_:2},1024)):b("",!0)]),_:2},1024)]),_:1},8,["data-source"])):(d(),v("div",B,[n(o(T),{description:"No runtimes found. Make sure your project has forms, hooks or jobs before deploying it"})]))}});export{K as _,H as a,U as g};
//# sourceMappingURL=component.vue_vue_type_script_setup_true_lang.4ee6a092.js.map
