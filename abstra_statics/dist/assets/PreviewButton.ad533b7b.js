import{r as c}from"./icons.e4ff78f2.js";import{d,K as u,J as i,a as p,b as _,c as f,e as l,A as m,V as b,t as y}from"./registerWidgets.a9b9c198.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a93fa944-2e9c-4045-af03-ebf239c3005e",e._sentryDebugIdIdentifier="sentry-dbid-a93fa944-2e9c-4045-af03-ebf239c3005e")}catch{}})();const v=d({__name:"PreviewButton",props:{model:{}},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=p("icon");return _(),f("button",{class:"preview-button",onClick:r},[l(a,{class:"icon",path:m(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),b(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.ad533b7b.js.map
