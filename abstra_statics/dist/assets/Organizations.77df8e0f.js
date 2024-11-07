import{N as O}from"./Navbar.3c81b024.js";import{B as I}from"./BaseLayout.f69f83f0.js";import{C as _}from"./ContentLayout.39d3d5c6.js";import{C as R}from"./CrudView.0433d32e.js";import{a as x}from"./ant-design.dc1d374c.js";import{a as h}from"./asyncComputed.d69c6172.js";import{F as B}from"./PhArrowSquareOut.vue.f99ecd8c.js";import{G as D}from"./PhPencil.vue.179137de.js";import{d as F,eo as M,e as $,f as A,o as b,X as G,b as o,w as i,u as l,aR as V,c as j,cv as E,bH as H,cu as L,R as U,cH as P,ep as S}from"./vue-router.a82eee9a.js";import"./gateway.554377b8.js";import{O as d}from"./organization.86abbf48.js";import"./tables.635fb1e4.js";import"./PhChats.vue.5e9c3d19.js";import"./PhSignOut.vue.310508d7.js";import"./router.9fc045f7.js";import"./index.b518806a.js";import"./Avatar.2f49c330.js";import"./index.107102da.js";import"./index.dfa29ab6.js";import"./BookOutlined.f119600b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.72aebfd8.js";import"./url.11d64bd6.js";import"./PhDotsThreeVertical.vue.194b390f.js";import"./Badge.7f565671.js";import"./popupNotifcation.34412d68.js";import"./record.3d326602.js";import"./string.f160c72c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="d416e33b-9c01-4731-984a-456b883f28f0",r._sentryDebugIdIdentifier="sentry-dbid-d416e33b-9c01-4731-984a-456b883f28f0")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await x("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(a)},{icon:S,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.77df8e0f.js.map
