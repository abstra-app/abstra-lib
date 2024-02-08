import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,a$ as A,c as D,bO as R,ex as B}from"./outputWidgets.74ac2ec4.js";import{e as F,q as M,D as $}from"./icons.f62d7c23.js";import{a as V}from"./asyncComputed.f88a4b94.js";import"./router.3342c4c3.js";import"./index.8e718568.js";import{O as d}from"./organization.02239fb8.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.626135f3.js";import{C as E}from"./CrudView.300a16f4.js";import{B as L}from"./BaseLayout.872fac06.js";import{a as U}from"./ant-design.ba20537e.js";import{A as q}from"./FormItem.bf6c91bc.js";import{F as G}from"./Form.9d6d8c17.js";import{M as H}from"./Modal.fae7bce9.js";import"./index.cf4c23b9.js";import"./record.a15934e9.js";import"./pubsub.6d093b2e.js";import"./logo.084e5d7c.js";import"./Text.039f7ef4.js";import"./Base.bd01be9c.js";import"./index.f7c43892.js";import"./Paragraph.d67398fc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.30b53c7c.js";import"./url.c37f3fbe.js";import"./index.ba7b32c9.js";import"./Title.e4bf994e.js";import"./index.08be46f9.js";import"./index.8324d637.js";import"./hasIn.88fbb4e5.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="db33973d-7c54-4498-88cf-cb4cab0cd3cd",i._sentryDebugIdIdentifier="sentry-dbid-db33973d-7c54-4498-88cf-cb4cab0cd3cd")}catch{}})();const ze=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(c=>c.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,c;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(L,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:u,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(q),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ze as default};
//# sourceMappingURL=Organizations.fe87e254.js.map
