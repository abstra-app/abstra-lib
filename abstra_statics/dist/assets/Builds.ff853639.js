import{d as p,ey as u,F as m,b as f,u as _,eq as b,bu as y,eB as g,eC as w,er as i,bh as n,t as h}from"./registerWidgets.0e440875.js";import{a as I}from"./asyncComputed.8678d980.js";import"./gateway.dd0f6075.js";import{B as x}from"./build.c6dba49a.js";import"./index.095a51b1.js";import{C as v}from"./CrudView.1bea560c.js";import{K as B,M as C}from"./icons.ec86d93d.js";import{r as D}from"./console.36503338.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.78e50ed3.js";import"./pubsub.3f22547d.js";import"./storage.f319f6a5.js";import"./activeRecord.a7f077c5.js";import"./DropdownMenu.b7d3c372.js";import"./Modal.9db32832.js";import"./LoadingIndicator.c6cb327c.js";import"./lottie.1b91379a.js";import"./index.aa64d742.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b558f139-8c11-4b84-a469-d28702336fc3",e._sentryDebugIdIdentifier="sentry-dbid-b558f139-8c11-4b84-a469-d28702336fc3")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const s=u().params.projectId,{loading:d,result:c}=I(()=>x.list(s)),l=m(()=>{var a,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(a=c.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:s},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(a,r)=>(f(),_(v,{"entity-name":"build",loading:y(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l.value},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const Q=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{Q as default};
//# sourceMappingURL=Builds.ff853639.js.map
