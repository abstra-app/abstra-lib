import{d as _,eA as I,r as N,H as x,b as y,ev as h,f as o,w as s,u as l,a$ as A,c as R,bO as B,ex as D}from"./outputWidgets.b4e7bc36.js";import{e as F,I as M,L as $}from"./icons.ed8a375d.js";import{a as L}from"./asyncComputed.63222e21.js";import"./router.ba23848c.js";import"./index.d2ed8ff0.js";import{O as d}from"./organization.32a5de1c.js";import{_ as V}from"./Navbar.vue_vue_type_script_setup_true_lang.1ca04b58.js";import{C as j}from"./CrudView.e9cca4fd.js";import{B as E}from"./BaseLayout.63ab3f34.js";import{a as U}from"./ant-design.07e59af2.js";import{A as G,F as H}from"./Form.a935b6d6.js";import{M as P}from"./Modal.0bce1eaa.js";import"./index.cf4c23b9.js";import"./record.8841a42c.js";import"./pubsub.f377b08c.js";import"./logo.084e5d7c.js";import"./Text.480840c4.js";import"./Base.b036cd53.js";import"./Typography.a2975dec.js";import"./index.bd84ac43.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.dc776558.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js";import"./url.efacade2.js";import"./index.bc81c9a3.js";import"./Title.87d4b9b2.js";import"./index.1b6f6e06.js";import"./index.9bc09b0f.js";import"./hasIn.068878da.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="7365d789-6ba0-43b4-977b-f373b81de7b1",i._sentryDebugIdIdentifier="sentry-dbid-7365d789-6ba0-43b4-977b-f373b81de7b1")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:f}=L(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(y(),h(A,null,[o(E,null,{navbar:s(()=>[o(V,{breadcrumb:m})]),content:s(()=>[o(j,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>b(!1)),onOk:t[2]||(t[2]=a=>b(!0))},{default:s(()=>[n.value.state==="renaming"?(y(),R(l(H),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(B),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.5a0fe097.js.map
