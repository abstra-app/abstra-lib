import{N as O}from"./Navbar.417a494c.js";import{B as I}from"./BaseLayout.2206cd24.js";import{C as _}from"./ContentLayout.8bdceb21.js";import{C as x}from"./CrudView.802061ba.js";import{a as F}from"./ant-design.137dbbf3.js";import{a as M}from"./asyncComputed.893821fe.js";import{F as R}from"./PhArrowSquareOut.vue.0c5f26cc.js";import{G as h}from"./PhPencil.vue.927abeca.js";import{d as B,eK as D,r as A,J as $,b,ew as E,f as o,w as i,u as m,aE as G,eS as V,c as j,bz as L,ey as S}from"./outputWidgets.47d6865e.js";import"./router.784734e5.js";import"./index.d25d4ee0.js";import{O as p}from"./organization.ef1366ef.js";import{A as U,F as J}from"./Form.fadc3724.js";import{M as K}from"./Modal.c45489bf.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.006fe1c8.js";import"./Text.596639de.js";import"./Base.fbda1545.js";import"./index.36731e66.js";import"./index.34f6f815.js";import"./BookOutlined.0f5cfe11.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.23c9533c.js";import"./url.0a008d53.js";import"./Paragraph.a40a25db.js";import"./index.330caafe.js";import"./Title.4d84784a.js";import"./index.907cc570.js";import"./index.4b791545.js";import"./popupNotifcation.685b365e.js";import"./record.ab298d17.js";import"./pubsub.0a5fa8dc.js";import"./hasIn.e9344704.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="ccbf172f-0c11-43aa-978b-501ea288a333",r._sentryDebugIdIdentifier="sentry-dbid-ccbf172f-0c11-43aa-978b-501ea288a333")}catch{}})();const Ne=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=D(),{loading:v,result:d,refetch:f}=M(()=>p.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await p.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await p.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await F("Are you sure you want to delete this organization?")&&(await((s=(t=d.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=$(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=d.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(t)},{icon:V,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),E(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:l})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:m(v),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(m(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(m(J),{key:0,layout:"vertical"},{default:i(()=>[o(m(U),{label:"New name"},{default:i(()=>[o(m(L),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64))}});export{Ne as default};
//# sourceMappingURL=Organizations.ede1f45d.js.map
