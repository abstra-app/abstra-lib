import{s as l}from"./icons.c6cfa25a.js";import{d as i,r as u,a as c,b as p,c as v,e as _,bu as y,bh as b,eA as m,ew as g,t as h}from"./registerWidgets.fc9d5fd6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="40bae1d0-fdd9-4f51-a291-eb3ef7ffc5d9",a._sentryDebugIdIdentifier="sentry-dbid-40bae1d0-fdd9-4f51-a291-eb3ef7ffc5d9")}catch{}})();const w=i({__name:"SaveButton",props:{model:{}},setup(a){const n=a,t=u(!1);async function s(){t.value=!0;try{await n.model.save()}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),s())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,r;const f=c("icon");return p(),v("button",{class:g(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),onClick:o[0]||(o[0]=S=>s())},[_(f,{class:"icon",path:y(l),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),b(" "+m(t.value?"Saving ...":(r=e.model)!=null&&r.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(w,[["__scopeId","data-v-15752ff4"]]);export{k as S};
//# sourceMappingURL=SaveButton.0641ea8d.js.map
