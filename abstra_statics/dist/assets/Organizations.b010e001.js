import{d as _,ey as I,r as N,F as x,b,et as F,f as o,w as s,u as l,bo as h,c as R,bF as A,ev as B}from"./outputWidgets.cc88926c.js";import{e as D,u as M,F as $}from"./icons.40b0d460.js";import{a as V}from"./asyncComputed.354694de.js";import"./router.1123556f.js";import"./jwt-decode.esm.74bd4619.js";import"./index.093bc945.js";import{O as u}from"./organization.22933b6a.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.a220eb0a.js";import{C as E}from"./CrudView.44ffbcd6.js";import{B as L}from"./BaseLayout.70ebfa4b.js";import{a as U}from"./ant-design.106f5438.js";import{A as G}from"./FormItem.93698b74.js";import{F as P}from"./Form.0838d34d.js";import{M as S}from"./Modal.727085bc.js";import"./storage.e50c37b8.js";import"./index.2431d017.js";import"./index.cf4c23b9.js";import"./record.fcda02a3.js";import"./pubsub.60086194.js";import"./logo.084e5d7c.js";import"./Text.a5c52232.js";import"./index.4dc7aa22.js";import"./Title.dc4295e4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6208b182.js";import"./url.681b0d62.js";import"./index.f97cef12.js";import"./index.44d9800b.js";import"./hasIn.1fe6a611.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="df92a6e0-b050-430b-8c44-7bdc7f5421d0",i._sentryDebugIdIdentifier="sentry-dbid-df92a6e0-b050-430b-8c44-7bdc7f5421d0")}catch{}})();const ze=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>u.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await u.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await u.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(d=>d.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,d;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:D,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),F(h,null,[o(L,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:c,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(S),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),R(l(P),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(A),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ze as default};
//# sourceMappingURL=Organizations.b010e001.js.map
