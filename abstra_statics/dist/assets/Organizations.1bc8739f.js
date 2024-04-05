import{d as N,eI as O,r as _,H as x,b,eu as F,f as o,w as s,u as m,aC as M,eP as R,c as h,bx as B,ew as D}from"./outputWidgets.59f0a2b2.js";import{a as A}from"./asyncComputed.777840e4.js";import"./router.2d9ff35d.js";import"./index.2968dfe4.js";import{O as d}from"./organization.b76168e6.js";import{N as $}from"./Navbar.7b2c726d.js";import{C as G}from"./CrudView.ac993549.js";import{B as V}from"./BaseLayout.d3fda365.js";import{a as j}from"./ant-design.43d4e158.js";import{F as E}from"./PhArrowSquareOut.vue.384143ee.js";import{G as P}from"./PhPencil.vue.c30eeaac.js";import{A as U,F as H}from"./Form.2fe28e43.js";import{M as L}from"./Modal.ca56af36.js";import"./popupNotifcation.65fbc510.js";import"./index.cf4c23b9.js";import"./record.e9c47ab1.js";import"./pubsub.d87495cd.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.f4e2c0a3.js";import"./Text.78024662.js";import"./index.b2df17f0.js";import"./index.f65495d7.js";import"./BookOutlined.cbbc1329.js";import"./Paragraph.480fc1f8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.67be5224.js";import"./url.5f36cddf.js";import"./index.3ab4e83a.js";import"./Title.b84911ca.js";import"./index.ac557608.js";import"./index.7eace570.js";import"./hasIn.2bc8029f.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="61d318af-e22e-4bcf-8ffb-869d150a5b21",i._sentryDebugIdIdentifier="sentry-dbid-61d318af-e22e-4bcf-8ffb-869d150a5b21")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:c,refetch:f}=A(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,r;await j("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},I=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>z(a)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),h(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.1bc8739f.js.map
