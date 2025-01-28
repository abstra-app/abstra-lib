import{N as k}from"./Navbar.865067b8.js";import{B as N}from"./BaseLayout.c4a09996.js";import{C as I}from"./ContentLayout.cd0959ba.js";import{C as _}from"./CrudView.e7de20fb.js";import{a as O}from"./asyncComputed.74890e8f.js";import{F as x}from"./PhArrowSquareOut.vue.4320df52.js";import{G as R}from"./PhPencil.vue.724fef5f.js";import{d as B,eo as M,e as h,f as D,o as g,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.d87350ae.js";import"./gateway.3cf393b2.js";import{a as m}from"./organization.cc3d5eab.js";import"./tables.0b9bd37d.js";import"./PhChats.vue.94828c6b.js";import"./PhSignOut.vue.98e160ae.js";import"./router.757930f0.js";import"./Badge.2966fdf1.js";import"./index.66c69331.js";import"./Avatar.f0e1a0d5.js";import"./index.ad1d7bd5.js";import"./index.460392d8.js";import"./BookOutlined.0693d372.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e500ec7d.js";import"./url.ce05fabc.js";import"./PhDotsThreeVertical.vue.ff9dfe54.js";import"./index.9cc1e65d.js";import"./popupNotifcation.16bac262.js";import"./record.4db701b5.js";import"./string.3c69b102.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="75822354-7ec0-4010-bdba-6621c401cb9c",r._sentryDebugIdIdentifier="sentry-dbid-75822354-7ec0-4010-bdba-6621c401cb9c")}catch{}})();const gt=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),c=({key:e})=>{f.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function p(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);c({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:c},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(g(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>p(!1)),onOk:t[2]||(t[2]=a=>p(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{gt as default};
//# sourceMappingURL=Organizations.5f613a36.js.map
