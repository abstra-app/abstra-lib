import{N as k}from"./Navbar.aa3a556d.js";import{B as N}from"./BaseLayout.b6d6fbb3.js";import{C as I}from"./ContentLayout.ca809403.js";import{C as _}from"./CrudView.f5f06895.js";import{a as O}from"./asyncComputed.36169bb2.js";import{F as x}from"./PhArrowSquareOut.vue.15a06997.js";import{G as R}from"./PhPencil.vue.d072bbca.js";import{d as B,eF as F,e as M,f as h,o as f,Y as D,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.10d18eeb.js";import"./gateway.4c384311.js";import{a as m}from"./organization.0a627164.js";import"./tables.a8471d0d.js";import"./PhChats.vue.eb0a9e97.js";import"./PhSignOut.vue.9843ebf6.js";import"./router.6f83ec90.js";import"./Badge.bff8354e.js";import"./index.fea33973.js";import"./Avatar.4faedb8b.js";import"./index.9cbb3dce.js";import"./index.23d314bc.js";import"./BookOutlined.0b083dff.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.744cfc93.js";import"./url.d8012159.js";import"./PhDotsThreeVertical.vue.8c04ead3.js";import"./index.4b617898.js";import"./popupNotifcation.59137ce2.js";import"./record.b0557e31.js";import"./string.0b68bfce.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="b7bc33e0-5397-45f9-b20f-0d478da831ca",r._sentryDebugIdIdentifier="sentry-dbid-b7bc33e0-5397-45f9-b20f-0d478da831ca")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=F(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=M({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function d(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=h(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),D(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>d(!1)),onOk:t[2]||(t[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.5b8d768d.js.map
