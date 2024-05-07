import{N as O}from"./Navbar.615706b2.js";import{B as I}from"./BaseLayout.1566b1a6.js";import{C as _}from"./ContentLayout.3539df6a.js";import{C as x}from"./CrudView.7b6d4f70.js";import{a as F}from"./ant-design.d1c7436f.js";import{a as M}from"./asyncComputed.c126220d.js";import{F as R}from"./PhArrowSquareOut.vue.81195a87.js";import{G as h}from"./PhPencil.vue.9c75bdbe.js";import{d as B,eK as D,r as A,J as $,b as y,ew as E,f as o,w as i,u as m,aE as G,eS as V,c as j,bz as L,ey as S}from"./outputWidgets.178b2a55.js";import"./router.41e41f08.js";import"./index.6f27ab73.js";import{O as d}from"./organization.b580c66c.js";import{A as U,F as J}from"./Form.1efb8f80.js";import{M as K}from"./Modal.ad519244.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.e7e36629.js";import"./Text.28403853.js";import"./Base.72874279.js";import"./index.30e7044b.js";import"./index.d7a20f2a.js";import"./BookOutlined.483c27bc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a91dc8c8.js";import"./url.373bf4cb.js";import"./Paragraph.97342deb.js";import"./index.c69ef513.js";import"./Title.15a8ff17.js";import"./index.807d5bee.js";import"./index.2340536c.js";import"./popupNotifcation.ee893a70.js";import"./record.a0723330.js";import"./pubsub.0a09938f.js";import"./hasIn.257754e2.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="f32acbbb-4d1b-42be-8672-3cc94ee4d156",r._sentryDebugIdIdentifier="sentry-dbid-f32acbbb-4d1b-42be-8672-3cc94ee4d156")}catch{}})();const Ne=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=D(),{loading:v,result:c,refetch:f}=M(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await F("Are you sure you want to delete this organization?")&&(await((s=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=$(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(a)},{icon:V,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(y(),E(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:l})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:m(v),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(m(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>b(!1)),onOk:t[2]||(t[2]=a=>b(!0))},{default:i(()=>[n.value.state==="renaming"?(y(),j(m(J),{key:0,layout:"vertical"},{default:i(()=>[o(m(U),{label:"New name"},{default:i(()=>[o(m(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64))}});export{Ne as default};
//# sourceMappingURL=Organizations.a9cafb0d.js.map
