import{s as i}from"./icons.3067ab21.js";import{d as f,r as c,a as u,b as p,c as v,e as _,z as y,U as m,N as b,G as g,q as h}from"./registerWidgets.91711800.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="4595598c-eee9-4b99-ab94-627e27a737d2",a._sentryDebugIdIdentifier="sentry-dbid-4595598c-eee9-4b99-ab94-627e27a737d2")}catch{}})();const w=f({__name:"SaveButton",props:{model:{}},setup(a){const n=a,t=c(!1);async function s(){t.value=!0;try{await n.model.save()}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),s())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var r,l;const d=u("icon");return p(),v("button",{class:g(["save-button",{changes:(r=e.model)==null?void 0:r.hasChanges()}]),onClick:o[0]||(o[0]=S=>s())},[_(d,{class:"icon",path:y(i),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" "+b(t.value?"Saving ...":(l=e.model)!=null&&l.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(w,[["__scopeId","data-v-15752ff4"]]);export{k as S};
//# sourceMappingURL=SaveButton.61cf298c.js.map
