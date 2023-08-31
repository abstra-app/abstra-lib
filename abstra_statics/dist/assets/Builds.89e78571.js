import{d as p,ey as u,F as m,b as f,u as _,eq as b,bu as y,eB as g,eC as w,er as i,bh as n,t as h}from"./registerWidgets.037943b9.js";import{a as I}from"./asyncComputed.b7f7c5d0.js";import"./gateway.bfe2516a.js";import{B as x}from"./build.e1ed258e.js";import"./index.aa1ba97d.js";import{C as v}from"./CrudView.322136e0.js";import{K as B,M as C}from"./icons.516a3236.js";import{r as D}from"./console.e353baf8.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.bfd1c2b2.js";import"./pubsub.8e672830.js";import"./activeRecord.1c8b5c12.js";import"./DropdownMenu.b03c9dd3.js";import"./Modal.0adead07.js";import"./LoadingIndicator.b20cd41d.js";import"./lottie.e4babf01.js";import"./index.963c43da.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c1a90065-d69c-490e-a61f-73f02222be2c",e._sentryDebugIdIdentifier="sentry-dbid-c1a90065-d69c-490e-a61f-73f02222be2c")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const a=u().params.projectId,{loading:d,result:c}=I(()=>x.list(a)),l=m(()=>{var s,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(s=c.value)==null?void 0:s.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:a},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(s,r)=>(f(),_(v,{"entity-name":"build",loading:y(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l.value},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const P=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{P as default};
//# sourceMappingURL=Builds.89e78571.js.map
