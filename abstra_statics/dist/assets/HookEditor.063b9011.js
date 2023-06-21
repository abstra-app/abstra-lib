import{d as x,b as o,c as s,e as n,q as C,r as $,R as f,H as v,v as t,F as H,J as B,u as E,a as U,t as V,y as u,V as g,W as T,Y as I,B as w,N as q,O as D,w as k,L as O}from"./registerWidgets.fff064a1.js";import{R as J,T as N,S as A,B as G,a as R}from"./SmartConsole.20fc70ba.js";import{L as P,a as M}from"./CircularLoading.59d7fd3d.js";import{H as L}from"./hooks.039c0cd9.js";import{C as Q,D as F,e as j}from"./icons.5214a3f5.js";import{S as W}from"./SaveButton.0f1a1078.js";import"./forms.7bc6baea.js";import"./utils.3371dfe5.js";import"./dashes.f5f65b41.js";import"./runnerData.81f4c073.js";import"./jobs.84cb688a.js";import"./workspaces.32af92db.js";import"./log.7bdc5c83.js";const Y={class:"hook-settings"},z=x({__name:"HookSettings",props:{hook:null},setup(l){return(p,_)=>(o(),s("div",Y,[n(J,{runtime:l.hook},null,8,["runtime"])]))}});const K=C(z,[["__scopeId","data-v-6e8accf0"]]),X={class:"options-wrapper"},Z=["onClick"],ee=x({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(l,{emit:p}){const _=$(null),e=h=>{var c;p("select",h),(c=_.value)==null||c.blur()};return(h,c)=>(o(),s("div",{ref_key:"dropdown",ref:_,class:"dropdown",tabindex:"1"},[f(v(l.value)+" ",1),t("div",X,[(o(!0),s(H,null,B(l.options,m=>(o(),s("div",{key:m.value,class:"option",onClick:y=>e(m.value)},v(m.label),9,Z))),128))])],512))}});const oe=C(ee,[["__scopeId","data-v-cac46a2e"]]),S=l=>(q("data-v-8956304f"),l=l(),D(),l),te={class:"hook-runner"},se={class:"title"},ae={class:"section"},ne=S(()=>t("div",{class:"section-header"},"Request configuration",-1)),le=S(()=>t("div",{class:"subsection-label"},"Method",-1)),ie={class:"subsection-label"},ce=["onUpdate:modelValue"],re=["onUpdate:modelValue"],de={key:0,class:"subsection-label"},ue={class:"property"},_e=S(()=>t("div",{class:"property-label"},"Body is JSON",-1)),pe={class:"section"},he=S(()=>t("div",{class:"section-header"},"Response",-1)),me={key:0,class:"section"},ve={class:"no-execution-message"},ye={key:1,class:"section"},ke=x({__name:"HookRunner",props:{hook:null},setup(l){const p=l,_=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=E({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),h=async()=>{const y={"Content-Type":e.isBodyJson?"application/json":"text/plain"},i=await p.hook.run({method:e.method,query:e.queryParams.reduce((r,{name:a,value:d})=>(a&&d&&(r[a]=d),r),{}),body:e.body,headers:{...y}});e.response=i},c=()=>{e.queryParams.push({name:"",value:""})},m=y=>{e.queryParams=e.queryParams.filter((i,r)=>r!==y)};return(y,i)=>{const r=U("icon");return o(),s("div",te,[t("div",se,[f(" Test your hook here "),e.loading?(o(),V(P,{key:0})):(o(),s("button",{key:1,class:"execution-button",onClick:h},[n(r,{path:u(Q),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),f(" Run ")]))]),t("div",ae,[ne,le,n(oe,{value:e.method,options:_,onSelect:i[0]||(i[0]=a=>e.method=a)},null,8,["value"]),t("div",ie,[f(" Query Params "),n(r,{class:"action-icon",path:u(F),width:"16",height:"16","fill-hover":"#777777",onClick:c},null,8,["path"])]),(o(!0),s(H,null,B(e.queryParams,(a,d)=>(o(),s("div",{key:d,class:"params-input"},[g(t("input",{"onUpdate:modelValue":b=>a.name=b,type:"text",placeholder:"name"},null,8,ce),[[T,a.name]]),g(t("input",{"onUpdate:modelValue":b=>a.value=b,type:"text",placeholder:"value"},null,8,re),[[T,a.value]]),n(r,{class:"delete-icon",path:u(j),"fill-hover":"#777777",onClick:b=>m(d)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),s("div",de,[f(" Request Body "),t("div",ue,[g(t("input",{"onUpdate:modelValue":i[1]||(i[1]=a=>e.isBodyJson=a),class:"checkbox-input",type:"checkbox"},null,512),[[I,e.isBodyJson]]),_e])])):w("",!0),e.method!=="GET"?g((o(),s("textarea",{key:1,"onUpdate:modelValue":i[2]||(i[2]=a=>e.body=a)},null,512)),[[T,e.body]]):w("",!0)]),t("div",pe,[he,e.loading?(o(),s("div",me,[t("div",ve,[n(P)])])):e.response?(o(),s("div",ye,[t("pre",null,"Status: "+v(e.response.status),1),(o(!0),s(H,null,B(e.response.headers,(a,d)=>(o(),s("pre",{key:d},v(d)+": "+v(a),1))),128)),t("pre",null,v(e.response.body),1)])):w("",!0)])])}}});const fe=C(ke,[["__scopeId","data-v-8956304f"]]),be={class:"page"},ge={key:0,class:"loading"},xe=x({__name:"HookEditor",setup(l){const p=O(),{loading:_,result:e}=M(async()=>await L.get(p.params.hookPath)),h=async c=>{e.value&&(e.value.path=c,await e.value.save())};return(c,m)=>(o(),s("div",be,[u(_)||!u(e)?(o(),s("div",ge,[n(P)])):(o(),V(N,{key:1,class:"editor"},{left:k(()=>[n(G,{link:"/_editor/hooks"})]),right:k(()=>[n(W,{runtime:u(e)},null,8,["runtime"])]),default:k(()=>[n(R,{title:"Debug"},{default:k(()=>[n(fe,{hook:u(e)},null,8,["hook"])]),_:1}),n(R,{title:"Settings"},{default:k(()=>[n(K,{hook:u(e),onUpdatePath:h},null,8,["hook"])]),_:1})]),_:1})),n(A,{runtime:"hooks"})]))}});const qe=C(xe,[["__scopeId","data-v-a25bf527"]]);export{qe as default};
//# sourceMappingURL=HookEditor.063b9011.js.map
