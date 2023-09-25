import{d as m,ey as d,H as l,b as c,c as u,u as f,v as _}from"./registerWidgets.d207d3d8.js";import{a as b}from"./asyncComputed.9245c077.js";import"./gateway.b835e205.js";import{B as y}from"./build.43949f06.js";import"./index.ec4e5819.js";import{L as g,N as w}from"./icons.4cf3c6e7.js";import{r as I}from"./console.8f3f1efb.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.892f2f1d.js";import{f as v}from"./index.b048d0fb.js";import"./passwordlessManager.66faf323.js";import"./pubsub.a025efb1.js";import"./storage.955f9c37.js";import"./activeRecord.3ac0bec0.js";import"./index.4ee96554.js";import"./Form.93c8c2f5.js";import"./FormItem.15ae57a9.js";import"./transButton.c5e342ac.js";import"./index.7710c197.js";import"./index.ce572c42.js";import"./index.17e7a15c.js";import"./index.084f0c6d.js";import"./dayjs.145e42b2.js";import"./index.a0581434.js";import"./index.6d5d746b.js";import"./index.d8b0e5b9.js";import"./index.4bdd9698.js";import"./index.cf9cf0c5.js";import"./index.a3599972.js";import"./index.fb29c273.js";import"./index.ed3f099d.js";import"./Title.db9c20f2.js";import"./Text.df3bd99f.js";import"./Modal.c3922cf6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="10055b87-97f0-40b6-bdf0-abbcde69689f",o._sentryDebugIdIdentifier="sentry-dbid-10055b87-97f0-40b6-bdf0-abbcde69689f")}catch{}})();const B=m({__name:"Builds",setup(o){const r=d().params.projectId,{loading:s,result:n}=b(()=>y.list(r)),p=l(()=>{var i,a;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(a=(i=n.value)==null?void 0:i.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8)},{text:v(t.createdAt,Date.now(),{addSuffix:!0})},{text:t.status+(t.log?": "+t.log:"")},{text:"",actions:[{icon:g,label:"View logs",onClick:()=>I.push({name:"logs",params:{projectId:r},query:{buildId:t.id}})},{icon:w,label:"Download files",onClick:()=>t.download()}]}]})))!=null?a:[]}});return(i,a)=>(c(),u(x,{"entity-name":"build",loading:f(s),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:p.value},null,8,["loading","table"]))}});const rt=_(B,[["__scopeId","data-v-03f70823"]]);export{rt as default};
//# sourceMappingURL=Builds.21958885.js.map
