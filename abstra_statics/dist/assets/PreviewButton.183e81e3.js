import{r as c}from"./icons.3067ab21.js";import{d,J as u,H as i,a as p,b as _,c as l,e as f,z as m,U as b,q as y}from"./registerWidgets.91711800.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="685dc948-648e-49b9-a758-392a89a7929e",e._sentryDebugIdIdentifier="sentry-dbid-685dc948-648e-49b9-a758-392a89a7929e")}catch{}})();const v=d({__name:"PreviewButton",props:{model:{}},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=p("icon");return _(),l("button",{class:"preview-button",onClick:r},[f(a,{class:"icon",path:m(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),b(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.183e81e3.js.map
