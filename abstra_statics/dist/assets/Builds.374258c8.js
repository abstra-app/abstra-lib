import{d as m,ey as l,H as d,b as c,c as u,u as f,v as _}from"./registerWidgets.9a15db03.js";import{a as y}from"./asyncComputed.678d15aa.js";import"./gateway.b159c969.js";import{B as b}from"./build.b0b19418.js";import"./index.16e3b6ad.js";import{L as g,N as w}from"./icons.c0d476d8.js";import{r as I}from"./console.257a3da4.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.770ca4b5.js";import{f as v}from"./index.b048d0fb.js";import"./passwordlessManager.5c569f60.js";import"./pubsub.67e7aa16.js";import"./storage.72b476f8.js";import"./activeRecord.9096561d.js";import"./index.286e7381.js";import"./Form.46586f85.js";import"./FormItem.54e743df.js";import"./transButton.4d7b6647.js";import"./index.ddc4eafa.js";import"./index.795b8226.js";import"./index.a79cb63a.js";import"./index.2dc78b55.js";import"./dayjs.a8ba4c0c.js";import"./index.f581f852.js";import"./index.592b5b38.js";import"./index.e22fbae7.js";import"./index.445e33ca.js";import"./index.f38ec3c0.js";import"./index.64756482.js";import"./index.968e9267.js";import"./index.27f6cb7b.js";import"./Title.4a08927d.js";import"./Text.cc2f21e0.js";import"./Modal.8749b471.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="275f8442-2b42-40b6-b010-f6e6ee138438",o._sentryDebugIdIdentifier="sentry-dbid-275f8442-2b42-40b6-b010-f6e6ee138438")}catch{}})();const B=m({__name:"Builds",setup(o){const r=l().params.projectId,{loading:s,result:n}=y(()=>b.list(r)),p=d(()=>{var i,a;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(a=(i=n.value)==null?void 0:i.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8)},{text:v(t.createdAt,Date.now(),{addSuffix:!0})},{text:t.status+(t.log?": "+t.log:"")},{text:"",actions:[{icon:g,label:"View logs",onClick:()=>I.push({name:"logs",params:{projectId:r},query:{buildId:t.id}})},{icon:w,label:"Download files",onClick:()=>t.download()}]}]})))!=null?a:[]}});return(i,a)=>(c(),u(x,{"entity-name":"build",loading:f(s),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:p.value},null,8,["loading","table"]))}});const rt=_(B,[["__scopeId","data-v-03f70823"]]);export{rt as default};
//# sourceMappingURL=Builds.374258c8.js.map
