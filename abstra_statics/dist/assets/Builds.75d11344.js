import{d as p,J as u,K as m,b as f,t as _,w as y,z as b,O as g,Q as w,x as d,U as i,q as h}from"./registerWidgets.32e538e0.js";import{a as x}from"./asyncComputed.475e48d8.js";import"./gateway.648b83c3.js";import{B as I}from"./build.1feb8142.js";import"./index.5be9ac38.js";import{C as v}from"./CrudView.b2b9e10a.js";import{J as B,L as D}from"./icons.193c287e.js";import{r as C}from"./console.5e951e11.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.7ac387f4.js";import"./pubsub.9fbafc27.js";import"./activeRecord.836423a5.js";import"./DropdownMenu.18fac813.js";import"./Modal.5431fc7d.js";import"./LoadingIndicator.7c371011.js";import"./lottie.82abd3f0.js";import"./index.3f8e6e3d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ce3afdc7-cd0e-42c9-855e-6fddc50dfeaf",e._sentryDebugIdIdentifier="sentry-dbid-ce3afdc7-cd0e-42c9-855e-6fddc50dfeaf")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>d("div",{class:"instructions"},[i(" Get started with the local editor in seconds: "),d("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),i(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const a=u().params.projectId,{loading:n,result:c}=x(()=>I.list(a)),l=m(()=>{var s,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(s=c.value)==null?void 0:s.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>C.push({name:"logs",params:{projectId:a},query:{buildId:t.id}})},{icon:D,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(s,r)=>(f(),_(v,{"entity-name":"build",loading:b(n),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l.value},{"empty-description":y(()=>[V]),_:1},8,["loading","table"]))}});const F=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{F as default};
//# sourceMappingURL=Builds.75d11344.js.map
