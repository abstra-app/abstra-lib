import{d as p,ey as u,F as m,b as f,u as _,eq as b,bu as y,eB as g,eC as w,er as i,bh as n,t as h}from"./registerWidgets.0d6f36c3.js";import{a as I}from"./asyncComputed.f5c93ddf.js";import"./gateway.b5799c1b.js";import{B as x}from"./build.ef12a4db.js";import"./index.d806a518.js";import{C as v}from"./CrudView.7cc5c294.js";import{K as B,M as C}from"./icons.0e440585.js";import{r as D}from"./console.6001515b.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.7ee1fbd9.js";import"./pubsub.c204a78d.js";import"./storage.674259be.js";import"./activeRecord.43bccff7.js";import"./DropdownMenu.1a06a7fe.js";import"./Modal.04b37ba8.js";import"./LoadingIndicator.7f838903.js";import"./lottie.aa3f8e33.js";import"./index.d832b0e2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fe5419e4-ac11-4b72-ad51-17cf12ba82a4",e._sentryDebugIdIdentifier="sentry-dbid-fe5419e4-ac11-4b72-ad51-17cf12ba82a4")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const a=u().params.projectId,{loading:d,result:c}=I(()=>x.list(a)),l=m(()=>{var s,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(s=c.value)==null?void 0:s.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:a},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(s,r)=>(f(),_(v,{"entity-name":"build",loading:y(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l.value},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const Q=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{Q as default};
//# sourceMappingURL=Builds.8d88c439.js.map
