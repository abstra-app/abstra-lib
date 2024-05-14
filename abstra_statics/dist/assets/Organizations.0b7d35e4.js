import{N as O}from"./Navbar.28776a5d.js";import{B as I}from"./BaseLayout.fceb7aa2.js";import{C as _}from"./ContentLayout.62866cda.js";import{C as x}from"./CrudView.f8098cb2.js";import{a as F}from"./ant-design.dc6b5b24.js";import{a as M}from"./asyncComputed.0d2fcb2b.js";import{F as R}from"./PhArrowSquareOut.vue.d25cd72e.js";import{G as h}from"./PhPencil.vue.1e491701.js";import{d as B,eK as D,r as A,J as $,b,ew as E,f as o,w as i,u as m,aE as G,eS as V,c as j,bz as L,ey as S}from"./outputWidgets.0143183d.js";import"./router.fa93baab.js";import"./index.5eedefdd.js";import{O as d}from"./organization.f1935bf3.js";import{A as U,F as J}from"./Form.75300f53.js";import{M as K}from"./Modal.5ccb2e2d.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.20b5560e.js";import"./Text.f40e9162.js";import"./Base.f3ba2b35.js";import"./index.e32cbd4c.js";import"./index.d50fc583.js";import"./BookOutlined.efff9965.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e4e2944a.js";import"./url.e2546974.js";import"./Paragraph.1e1c3613.js";import"./index.536027b7.js";import"./Title.b35817b7.js";import"./index.e7f30144.js";import"./index.2b54f314.js";import"./popupNotifcation.893a299c.js";import"./record.45ebeb78.js";import"./pubsub.784c1c0e.js";import"./hasIn.d5440bb2.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="c499139b-64e1-4aae-a820-cd24fd44bbee",r._sentryDebugIdIdentifier="sentry-dbid-c499139b-64e1-4aae-a820-cd24fd44bbee")}catch{}})();const Ne=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=D(),{loading:v,result:c,refetch:f}=M(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await F("Are you sure you want to delete this organization?")&&(await((s=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=$(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(a)},{icon:V,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),E(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:l})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:m(v),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(m(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(m(J),{key:0,layout:"vertical"},{default:i(()=>[o(m(U),{label:"New name"},{default:i(()=>[o(m(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64))}});export{Ne as default};
//# sourceMappingURL=Organizations.0b7d35e4.js.map
