import{d as w,b as o,c as a,e as n,q as C,r as $,S as k,N as f,x as t,F as x,L as H,v as E,a as R,t as V,z as c,V as g,Y as T,a1 as U,D as B,O as q,Q as O,w as y,J}from"./registerWidgets.0897334f.js";import{T as N,B as A,a as D}from"./BackButton.1ad177aa.js";import{L as P}from"./CircularLoading.21f27962.js";import{R as G,_ as M,S as L}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.7ed8f827.js";import{a as Q}from"./asyncComputed.14546baa.js";import{H as F}from"./hooks.e3a843cf.js";import{C as j,D as z,f as Y}from"./icons.74b4bbd7.js";import{l as I}from"./log.52c594a3.js";import{S as K}from"./SaveButton.f60b740e.js";import{D as W}from"./DocsButton.9a518ddc.js";import"./lottie.ffe66724.js";import"./forms.3b0a5ba2.js";import"./activeRecord.6320d31c.js";import"./dashes.f209688c.js";import"./runnerData.f1fab210.js";import"./jobs.0a71198e.js";import"./workspaces.360a9dfc.js";import"./login.15a8c327.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="643c6fae-c51c-43b7-abc6-76fc4bebd65c",s._sentryDebugIdIdentifier="sentry-dbid-643c6fae-c51c-43b7-abc6-76fc4bebd65c")}catch{}})();const X={class:"hook-settings"},Z=w({__name:"HookSettings",props:{hook:null},setup(s){return(i,r)=>(o(),a("div",X,[n(G,{runtime:s.hook},null,8,["runtime"])]))}});const ee=C(Z,[["__scopeId","data-v-6e8accf0"]]),oe={class:"options-wrapper"},te=["onClick"],se=w({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(s,{emit:i}){const r=$(null),e=m=>{var u;i("select",m),(u=r.value)==null||u.blur()};return(m,u)=>(o(),a("div",{ref_key:"dropdown",ref:r,class:"dropdown",tabindex:"1"},[k(f(s.value)+" ",1),t("div",oe,[(o(!0),a(x,null,H(s.options,v=>(o(),a("div",{key:v.value,class:"option",onClick:p=>e(v.value)},f(v.label),9,te))),128))])],512))}});const ae=C(se,[["__scopeId","data-v-cac46a2e"]]),S=s=>(q("data-v-55f3fd4a"),s=s(),O(),s),ne={class:"hook-runner"},le={class:"title"},de={class:"section"},ie=S(()=>t("div",{class:"section-header"},"Request configuration",-1)),ce=S(()=>t("div",{class:"subsection-label"},"Method",-1)),re={class:"subsection-label"},ue=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],_e={key:0,class:"subsection-label"},he={class:"property"},me=S(()=>t("div",{class:"property-label"},"Body is JSON",-1)),ve={class:"section"},fe=S(()=>t("div",{class:"section-header"},"Response",-1)),ye={key:0,class:"section"},ke={class:"no-execution-message"},be={key:1,class:"section"},ge=w({__name:"HookRunner",props:{hook:null},setup(s){const i=s,r=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=E({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),m=async()=>{const p={"Content-Type":e.isBodyJson?"application/json":"text/plain"},d=await i.hook.test({method:e.method,query:e.queryParams.reduce((_,{name:l,value:h})=>(l&&h&&(_[l]=h),_),{}),body:e.body,headers:{...p}});e.response=d,d.stderr&&I.log({type:"stderr",log:d.stderr}),d.stdout&&I.log({type:"stdout",log:d.stdout})},u=()=>{e.queryParams.push({name:"",value:""})},v=p=>{e.queryParams=e.queryParams.filter((d,_)=>_!==p)};return(p,d)=>{const _=R("icon");return o(),a("div",ne,[t("div",le,[k(" Test your hook here "),e.loading?(o(),V(P,{key:0})):(o(),a("button",{key:1,class:"execution-button",onClick:m},[n(_,{path:c(j),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),k(" Run ")]))]),t("div",de,[ie,ce,n(ae,{value:e.method,options:r,onSelect:d[0]||(d[0]=l=>e.method=l)},null,8,["value"]),t("div",re,[k(" Query Params "),n(_,{class:"action-icon",path:c(z),width:"16",height:"16","fill-hover":"#777777",onClick:u},null,8,["path"])]),(o(!0),a(x,null,H(e.queryParams,(l,h)=>(o(),a("div",{key:h,class:"params-input"},[g(t("input",{"onUpdate:modelValue":b=>l.name=b,type:"text",placeholder:"name"},null,8,ue),[[T,l.name]]),g(t("input",{"onUpdate:modelValue":b=>l.value=b,type:"text",placeholder:"value"},null,8,pe),[[T,l.value]]),n(_,{class:"delete-icon",path:c(Y),"fill-hover":"#777777",onClick:b=>v(h)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),a("div",_e,[k(" Request Body "),t("div",he,[g(t("input",{"onUpdate:modelValue":d[1]||(d[1]=l=>e.isBodyJson=l),class:"checkbox-input",type:"checkbox"},null,512),[[U,e.isBodyJson]]),me])])):B("",!0),e.method!=="GET"?g((o(),a("textarea",{key:1,"onUpdate:modelValue":d[2]||(d[2]=l=>e.body=l)},null,512)),[[T,e.body]]):B("",!0)]),t("div",ve,[fe,e.loading?(o(),a("div",ye,[t("div",ke,[n(P)])])):e.response?(o(),a("div",be,[t("pre",null,"Status: "+f(e.response.status),1),(o(!0),a(x,null,H(e.response.headers,(l,h)=>(o(),a("pre",{key:h},f(h)+": "+f(l),1))),128)),t("pre",null,f(e.response.body),1)])):B("",!0)])])}}});const xe=C(ge,[["__scopeId","data-v-55f3fd4a"]]),we={class:"page"},Ce={key:0,class:"loading"},Se=w({__name:"HookEditor",setup(s){const i=J(),{loading:r,result:e}=Q(async()=>await F.get(i.params.hookPath)),m=async u=>{e.value&&(e.value.path=u,await e.value.save())};return(u,v)=>{var p;return o(),a(x,null,[t("div",we,[c(r)||!c(e)?(o(),a("div",Ce,[n(P)])):(o(),V(N,{key:1,class:"editor"},{left:y(()=>[n(A,{link:"/_editor/hooks"})]),right:y(()=>[n(W,{path:"hooks"}),n(K,{model:c(e)},null,8,["model"])]),default:y(()=>[n(D,{title:"Debug"},{default:y(()=>[n(xe,{hook:c(e)},null,8,["hook"])]),_:1}),n(D,{title:"Settings"},{default:y(()=>[n(ee,{hook:c(e),onUpdatePath:m},null,8,["hook"])]),_:1})]),_:1})),n(L,{runtime:"hooks"})]),n(M,{"has-changes":(p=c(e))==null?void 0:p.hasChanges()},null,8,["has-changes"])],64)}}});const Le=C(Se,[["__scopeId","data-v-c357ba21"]]);export{Le as default};
//# sourceMappingURL=HookEditor.66d9d07e.js.map
