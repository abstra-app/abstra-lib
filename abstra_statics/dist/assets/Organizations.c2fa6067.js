import{d as N,eI as O,r as _,H as x,b,eu as F,f as o,w as s,u as m,aC as M,eP as R,c as h,bx as B,ew as D}from"./outputWidgets.ec81e063.js";import{a as A}from"./asyncComputed.ae481b0b.js";import"./router.0bf16b6c.js";import"./index.6fd392a6.js";import{O as d}from"./organization.553edf01.js";import{N as $}from"./Navbar.d9f76300.js";import{C as G}from"./CrudView.b8ceabfb.js";import{B as V}from"./BaseLayout.62811a5f.js";import{a as j}from"./ant-design.0db3f3e5.js";import{F as E}from"./PhArrowSquareOut.vue.9fd712fe.js";import{G as P}from"./PhPencil.vue.85d14247.js";import{A as U,F as H}from"./Form.8f9e80fd.js";import{M as L}from"./Modal.3281dfb5.js";import"./popupNotifcation.639ccb75.js";import"./index.cf4c23b9.js";import"./record.5c22d785.js";import"./pubsub.4d5217b7.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.70e3fb84.js";import"./Text.a47b03f7.js";import"./index.3950a63a.js";import"./index.7d4d781b.js";import"./BookOutlined.2288b821.js";import"./Paragraph.215ebd7c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d6676c4f.js";import"./url.b50d0006.js";import"./index.9e00cac9.js";import"./Title.5b58c14f.js";import"./index.34b07b13.js";import"./index.5bcfa581.js";import"./hasIn.eed08052.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="28dc8d82-6518-4010-aa62-88b483d4fb02",i._sentryDebugIdIdentifier="sentry-dbid-28dc8d82-6518-4010-aa62-88b483d4fb02")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:c,refetch:f}=A(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,r;await j("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},I=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>z(a)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),h(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.c2fa6067.js.map
