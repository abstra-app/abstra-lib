import{d as k,eB as B,eA as I,G as w,a as h,b as o,c as d,w as a,eJ as j,f as n,u as t,ev as l,eC as x,aq as g,eD as z,bq as C,ex as D,bg as A,cC as S}from"./outputWidgets.44a09867.js";import{B as $}from"./BaseLayout.5b37bbce.js";import{a as M}from"./asyncComputed.ca8feacc.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.a5b3442b.js";import"./authorManager.406561e5.js";import{a as P}from"./build.804edf5e.js";import"./index.98cf761b.js";import{P as R}from"./project.f698c549.js";import{O as V}from"./organization.f1024fd7.js";import{B as q,a as E,c as L}from"./index.336e680c.js";import{a as O}from"./Text.99f50980.js";import"./gateway.7f6d0dbc.js";import"./WarningFilled.d99917ef.js";import"./log.6a8b764c.js";import"./ant-design.33e4bc75.js";import"./index.71a73ea9.js";import"./Modal.14e98cf1.js";import"./index.5e49b495.js";import"./Link.463f305c.js";import"./Title.a43de87d.js";import"./index.f53f6439.js";import"./TabPane.32cd90a5.js";import"./hasIn.f57609f6.js";import"./index.e946ff9e.js";import"./isNumeric.75337b1e.js";import"./icons.01b98633.js";import"./index.a987edd5.js";import"./FormItem.2b0a230d.js";import"./index.cf4c23b9.js";import"./record.0114cd31.js";import"./pubsub.34ae9a92.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="31c3cd05-43e5-4821-b283-d15a400e3d45",i._sentryDebugIdIdentifier="sentry-dbid-31c3cd05-43e5-4821-b283-d15a400e3d45")}catch{}})();const T={key:0},F={key:2},Bt=k({__name:"Build",setup(i){const s=B(),c=I(),m=s.params.buildId,{result:e,loading:b}=M(async()=>{const r=await P.get(m),p=await R.get(r.projectId),u=await V.get(p.organizationId);return j({bs:r,project:p,organization:u})}),f=w(()=>!b.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${e.value.project.id}/builds`}]:void 0);function y(){var r;(r=e.value)!=null&&r.project.id&&c.push({name:"builds",params:{projectId:e.value.project.id}})}return(r,p)=>{const u=h("router-link");return o(),d($,null,{navbar:a(()=>[n(t(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:a(()=>[f.value?(o(),d(t(q),{key:0},{default:a(()=>[(o(!0),l(C,null,x(f.value,(_,v)=>(o(),d(t(E),{key:v},{default:a(()=>[n(u,{to:_.path},{default:a(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),_:1})]),content:a(()=>[t(b)?(o(),l("div",T,[n(t(A))])):t(e)?(o(),d(N,{key:1,"build-spec":t(e).bs},null,8,["build-spec"])):(o(),l("div",F,[n(t(S),{direction:"vertical"},{default:a(()=>[n(t(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{Bt as default};
//# sourceMappingURL=Build.229dfee8.js.map
