import{d as y,ez as g,eA as C,J as T,b as _,c as k,u as I}from"./outputWidgets.2173e1fe.js";import{e as w,q as h}from"./icons.cd7c1858.js";import{a as x}from"./asyncComputed.6a46186d.js";import"./router.ba958fbb.js";import"./columns.d5662a56.js";import{T as s}from"./tables.8205531e.js";import{C as D}from"./CrudView.681c3ff7.js";import{n as i}from"./string.55d639db.js";import"./Title.d444ffb5.js";import"./index.98152a7d.js";import"./gateway.73dfb78f.js";import"./activeRecord.0419387a.js";import"./pubsub.3164c166.js";import"./index.f4ac7424.js";import"./index.9bbd5863.js";import"./Form.c00ec72f.js";import"./url.eb260321.js";import"./index.afcb3cc3.js";import"./index.a317ed5a.js";import"./index.a8d51e2e.js";import"./index.d1a21529.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="8b33fa72-f267-4e68-a4be-55091f34226f",a._sentryDebugIdIdentifier="sentry-dbid-8b33fa72-f267-4e68-a4be-55091f34226f")}catch{}})();const X=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.123a7969.js.map
