import{d as k,eB as B,eA as I,G as w,a as h,b as o,c as d,w as a,eJ as j,f as n,u as e,ev as l,eC as x,aq as g,eD as z,bq as C,ex as A,bg as D,cC as S}from"./outputWidgets.ddb799f6.js";import{B as $}from"./BaseLayout.c25ddb98.js";import{a as M}from"./asyncComputed.76da9d27.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.042c4c9c.js";import"./authorManager.d7437888.js";import{a as P}from"./build.122bf761.js";import"./index.81d155fb.js";import{P as R}from"./project.c6781ee7.js";import{O as V}from"./organization.dc53402e.js";import{B as q,a as E,c as L}from"./index.c83fdb66.js";import{A as O}from"./Text.f6fcaa4e.js";import"./gateway.ffda3435.js";import"./WarningFilled.d99917ef.js";import"./log.b70b165c.js";import"./ant-design.5e9937d0.js";import"./index.25d8c967.js";import"./Title.7f286e0a.js";import"./index.2a5da7a4.js";import"./Link.4e11790d.js";import"./index.ae74c6e1.js";import"./TabPane.76684559.js";import"./hasIn.ee379a91.js";import"./index.cbe0e23a.js";import"./isNumeric.75337b1e.js";import"./icons.4891c9af.js";import"./index.cc0d4a13.js";import"./FormItem.38b8c259.js";import"./index.cf4c23b9.js";import"./record.888fd2b8.js";import"./pubsub.e6957d89.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="e2c7293f-6e4b-44e8-ad1c-7aad3f968e9e",i._sentryDebugIdIdentifier="sentry-dbid-e2c7293f-6e4b-44e8-ad1c-7aad3f968e9e")}catch{}})();const T={key:0},F={key:2},ke=k({__name:"Build",setup(i){const s=B(),c=I(),m=s.params.buildId,{result:t,loading:f}=M(async()=>{const r=await P.get(m),p=await R.get(r.projectId),u=await V.get(p.organizationId);return j({bs:r,project:p,organization:u})}),b=w(()=>!f.value&&t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.organization.name,path:`/organizations/${t.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${t.value.project.id}/builds`}]:void 0);function y(){var r;(r=t.value)!=null&&r.project.id&&c.push({name:"builds",params:{projectId:t.value.project.id}})}return(r,p)=>{const u=h("router-link");return o(),d($,null,{navbar:a(()=>[n(e(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:a(()=>[b.value?(o(),d(e(q),{key:0},{default:a(()=>[(o(!0),l(C,null,x(b.value,(_,v)=>(o(),d(e(E),{key:v},{default:a(()=>[n(u,{to:_.path},{default:a(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):A("",!0)]),_:1})]),content:a(()=>[e(f)?(o(),l("div",T,[n(e(D))])):e(t)?(o(),d(N,{key:1,"build-spec":e(t).bs},null,8,["build-spec"])):(o(),l("div",F,[n(e(S),{direction:"vertical"},{default:a(()=>[n(e(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{ke as default};
//# sourceMappingURL=Build.14d788c7.js.map
