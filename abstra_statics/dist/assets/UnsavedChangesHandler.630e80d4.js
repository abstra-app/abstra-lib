import{d as f,eO as l,O as _,o as h,R as p,dq as g,f as m,E as v}from"./outputWidgets.7323a17d.js";import{E as y}from"./ExclamationCircleOutlined.05eebe9c.js";import{M as w}from"./Modal.8e6a9189.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="881014fe-0f3b-4550-9470-3e4715d3328a",n._sentryDebugIdIdentifier="sentry-dbid-881014fe-0f3b-4550-9470-3e4715d3328a")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",b=f({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),i=()=>{window.addEventListener("beforeunload",o)};l(async(e,u,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{w.confirm({title:"You have unsaved changes.",icon:m(y),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?i():t();return _(()=>a.hasChanges,d),h(()=>d(a.hasChanges)),p(t),(e,u)=>g(e.$slots,"default",{},void 0,!0)}});const D=v(b,[["__scopeId","data-v-79207dcb"]]);export{D as U};
//# sourceMappingURL=UnsavedChangesHandler.630e80d4.js.map
