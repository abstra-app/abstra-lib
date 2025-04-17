import{N as k}from"./Navbar.d0a3bfbd.js";import{B as N}from"./BaseLayout.a2181334.js";import{C as I}from"./ContentLayout.ce82fdcd.js";import{C as _}from"./CrudView.93f14aa2.js";import{a as O}from"./asyncComputed.8feee535.js";import{F as x}from"./PhArrowSquareOut.vue.d863eb60.js";import{G as R}from"./PhPencil.vue.dce2dfaf.js";import{d as B,eH as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.a2737cd4.js";import"./gateway.acdb2962.js";import{a as m}from"./organization.5a9b7e3f.js";import"./tables.5c37262a.js";import"./PhChats.vue.d862fb10.js";import"./PhSignOut.vue.9a8de7eb.js";import"./router.59e23a5c.js";import"./Badge.f6fd28a1.js";import"./index.81d721d2.js";import"./Avatar.78cee48a.js";import"./index.9381c163.js";import"./index.e84463a6.js";import"./BookOutlined.a3d2b7ac.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.449cbf76.js";import"./url.fc767289.js";import"./PhDotsThreeVertical.vue.a6cd6986.js";import"./index.d81dd506.js";import"./popupNotifcation.0b17d594.js";import"./record.dae8bb81.js";import"./string.65ae7559.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="7d35df0d-b885-48f6-a308-783c5371ee51",r._sentryDebugIdIdentifier="sentry-dbid-7d35df0d-b885-48f6-a308-783c5371ee51")}catch{}})();const fe=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),d=({key:t})=>{g.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function p(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);d({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=b.value)==null?void 0:t.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:d},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>p(!1)),onOk:e[2]||(e[2]=a=>p(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{fe as default};
//# sourceMappingURL=Organizations.b1e09162.js.map
