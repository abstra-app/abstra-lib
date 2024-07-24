import{d as f,eB as b,eN as C,f as g,c as _,u as h,eO as w,o as I}from"./vue-router.a1ae2b4d.js";import{b as k}from"./tables.df0d6ff6.js";import"./gateway.24279ca1.js";import{C as i}from"./connector.0ce47324.js";import{a as x}from"./asyncComputed.942ccb8e.js";import{G as E}from"./PhPencil.vue.260310b4.js";import{C as D}from"./CrudView.7744d95f.js";import"./record.dd7765ca.js";import"./string.98feb219.js";import"./popupNotifcation.390be2e5.js";import"./router.d8cf1f8b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.004e8b75.js";import"./BookOutlined.9861f850.js";import"./url.bc94821b.js";import"./PhDotsThree.vue.ac82f8bb.js";import"./index.31191741.js";import"./index.3a4e06b9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="7fc4a2ec-9aab-43a3-90a3-c3787346c73f",o._sentryDebugIdIdentifier="sentry-dbid-7fc4a2ec-9aab-43a3-90a3-c3787346c73f")}catch{}})();const J=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:l,result:m,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:w,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(I(),_(D,{"entity-name":"connector",loading:h(l),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Connectors.60f31da3.js.map
