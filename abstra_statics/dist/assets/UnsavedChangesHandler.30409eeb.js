import{d as u,eO as l,K as _,o as h,O as p,dn as g,f as m,x as v}from"./outputWidgets.a2070fd1.js";import{E as y}from"./ExclamationCircleOutlined.5babd4c1.js";import{M as w}from"./Modal.a39cc3c8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="f3e4c520-8ffd-491a-8310-671f38d0fc48",n._sentryDebugIdIdentifier="sentry-dbid-f3e4c520-8ffd-491a-8310-671f38d0fc48")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",b=u({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),f=()=>{window.addEventListener("beforeunload",o)};l(async(e,i,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{w.confirm({title:"You have unsaved changes.",icon:m(y),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?f():t();return _(()=>a.hasChanges,d),h(()=>d(a.hasChanges)),p(t),(e,i)=>g(e.$slots,"default",{},void 0,!0)}});const x=v(b,[["__scopeId","data-v-79207dcb"]]);export{x as U};
//# sourceMappingURL=UnsavedChangesHandler.30409eeb.js.map
