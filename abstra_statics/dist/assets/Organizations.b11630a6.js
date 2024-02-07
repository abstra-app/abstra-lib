import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,a$ as A,c as F,bO as R,ex as B}from"./outputWidgets.5c52fa87.js";import{e as D,t as M,F as $}from"./icons.03282d1d.js";import{a as V}from"./asyncComputed.26d9bcc1.js";import"./router.e0fda50a.js";import"./index.ff34804e.js";import{O as d}from"./organization.081158f2.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.08f44df6.js";import{C as E}from"./CrudView.6aea262f.js";import{B as L}from"./BaseLayout.9086f03b.js";import{a as U}from"./ant-design.5e093646.js";import{A as G}from"./FormItem.eb04c2fc.js";import{F as H}from"./Form.17a01b6e.js";import{M as P}from"./Modal.2c05a20d.js";import"./index.cf4c23b9.js";import"./record.eec0c608.js";import"./pubsub.5093c187.js";import"./logo.084e5d7c.js";import"./Text.c9a398d0.js";import"./Base.6d1a6939.js";import"./index.96485183.js";import"./Paragraph.cff93cf2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fa56e270.js";import"./url.8bc1ece1.js";import"./index.0be66a31.js";import"./Title.91b6cec6.js";import"./index.f2d17967.js";import"./index.076f710c.js";import"./hasIn.f2c6482d.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="d579eb27-3425-4499-845f-924ffe03dc1c",i._sentryDebugIdIdentifier="sentry-dbid-d579eb27-3425-4499-845f-924ffe03dc1c")}catch{}})();const ze=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:D,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(L,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:c,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),F(l(H),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ze as default};
//# sourceMappingURL=Organizations.b11630a6.js.map
