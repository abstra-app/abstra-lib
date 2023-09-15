import{d as p,ey as u,F as m,b as f,u as _,eq as b,bu as y,eB as g,eC as w,er as i,bh as d,t as h}from"./registerWidgets.65ad7269.js";import{a as I}from"./asyncComputed.bc9bb426.js";import"./gateway.59144cb2.js";import{B as x}from"./build.bb6ff27e.js";import"./index.8ca8b70f.js";import{C as v}from"./CrudView.808df0ed.js";import{K as B,M as C}from"./icons.af1545d2.js";import{r as D}from"./console.b39fd5d5.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.907d7dd5.js";import"./pubsub.ae54b92c.js";import"./storage.885899ad.js";import"./activeRecord.7584f904.js";import"./DropdownMenu.4f61f503.js";import"./Modal.37da020a.js";import"./LoadingIndicator.d41c3f91.js";import"./lottie.ac26577d.js";import"./index.c4ca38a7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c4c34349-5e30-415d-9dba-0d307bf0f7e2",e._sentryDebugIdIdentifier="sentry-dbid-c4c34349-5e30-415d-9dba-0d307bf0f7e2")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[d(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),d(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const s=u().params.projectId,{loading:n,result:c}=I(()=>x.list(s)),l=m(()=>{var a,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(a=c.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:s},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(a,r)=>(f(),_(v,{"entity-name":"build",loading:y(n),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l.value},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const Q=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{Q as default};
//# sourceMappingURL=Builds.b65bc815.js.map
