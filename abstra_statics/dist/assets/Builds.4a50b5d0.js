import{d as p,ey as u,F as m,b as f,u as b,eq as _,bu as y,eB as g,eC as w,er as i,bh as n,t as h}from"./registerWidgets.fbede4e9.js";import{a as I}from"./asyncComputed.ded4e064.js";import"./gateway.6dfda10a.js";import{B as x}from"./build.059b0b7f.js";import"./index.7df6535c.js";import{C as v}from"./CrudView.b195b458.js";import{K as B,M as C}from"./icons.9ea484f9.js";import{r as D}from"./console.2a681fad.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.fc9080ef.js";import"./pubsub.9639d873.js";import"./storage.953471f2.js";import"./activeRecord.4cd28aae.js";import"./DropdownMenu.db99a3d3.js";import"./Modal.2d0c3e5e.js";import"./LoadingIndicator.d9107e25.js";import"./lottie.af5deb23.js";import"./index.1acdc6c8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8bae55cc-48b3-4644-bf86-82139adce02f",e._sentryDebugIdIdentifier="sentry-dbid-8bae55cc-48b3-4644-bf86-82139adce02f")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const a=u().params.projectId,{loading:d,result:c}=I(()=>x.list(a)),l=m(()=>{var s,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(s=c.value)==null?void 0:s.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:a},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(s,r)=>(f(),b(v,{"entity-name":"build",loading:y(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l.value},{"empty-description":_(()=>[V]),_:1},8,["loading","table"]))}});const Q=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{Q as default};
//# sourceMappingURL=Builds.4a50b5d0.js.map
