import{d as l,f9 as f,O as _,o as h,R as p,dy as g,f as m,E as y}from"./outputWidgets.e8df7bd6.js";import{E as v}from"./ExclamationCircleOutlined.4b61b57c.js";import{M as w}from"./Modal.10e3144f.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="2124798b-0278-475d-8372-0d7665912c58",n._sentryDebugIdIdentifier="sentry-dbid-2124798b-0278-475d-8372-0d7665912c58")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",b=l({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),i=()=>{window.addEventListener("beforeunload",o)};f(async(e,u,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{w.confirm({title:"You have unsaved changes.",icon:m(v),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?i():t();return _(()=>a.hasChanges,d),h(()=>d(a.hasChanges)),p(t),(e,u)=>g(e.$slots,"default",{},void 0,!0)}});const D=y(b,[["__scopeId","data-v-79207dcb"]]);export{D as U};
//# sourceMappingURL=UnsavedChangesHandler.3176de68.js.map
