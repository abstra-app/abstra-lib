import{d as l,f9 as f,O as _,o as h,R as p,dy as g,f as m,E as y}from"./outputWidgets.bbbaa102.js";import{E as v}from"./ExclamationCircleOutlined.2b4c8a5a.js";import{M as w}from"./Modal.5105eb26.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="93caf68e-dcbe-4a53-98a3-8676c0606e63",n._sentryDebugIdIdentifier="sentry-dbid-93caf68e-dcbe-4a53-98a3-8676c0606e63")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",b=l({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),i=()=>{window.addEventListener("beforeunload",o)};f(async(e,u,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{w.confirm({title:"You have unsaved changes.",icon:m(v),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?i():t();return _(()=>a.hasChanges,d),h(()=>d(a.hasChanges)),p(t),(e,u)=>g(e.$slots,"default",{},void 0,!0)}});const D=y(b,[["__scopeId","data-v-79207dcb"]]);export{D as U};
//# sourceMappingURL=UnsavedChangesHandler.f90dacf6.js.map
