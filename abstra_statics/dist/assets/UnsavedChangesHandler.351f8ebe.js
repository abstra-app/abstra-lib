import{d as u,f9 as l,O as _,o as h,R as p,dy as g,f as m,E as y}from"./outputWidgets.9e7bd3a6.js";import{E as v}from"./ExclamationCircleOutlined.03eefce9.js";import{M as b}from"./Modal.41211848.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="0bf191a6-5706-42dc-b475-285f9d7a12ff",n._sentryDebugIdIdentifier="sentry-dbid-0bf191a6-5706-42dc-b475-285f9d7a12ff")}catch{}})();const c="You have unsaved changes. Are you sure you want to leave?",w=u({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const a=n,o=e=>(e=e||window.event,e&&(e.returnValue=c),c),f=()=>{window.addEventListener("beforeunload",o)};l(async(e,i,s)=>{if(!a.hasChanges)return s();await new Promise(r=>{b.confirm({title:"You have unsaved changes.",icon:m(v),content:"Are you sure you want to discard them?",okText:"Discard Changes",okType:"danger",cancelText:"Cancel",onOk(){r(!0)},onCancel(){r(!1)}})})?s():s(!1)});const t=()=>window.removeEventListener("beforeunload",o),d=e=>e?f():t();return _(()=>a.hasChanges,d),h(()=>d(a.hasChanges)),p(t),(e,i)=>g(e.$slots,"default",{},void 0,!0)}});const D=y(w,[["__scopeId","data-v-79207dcb"]]);export{D as U};
//# sourceMappingURL=UnsavedChangesHandler.351f8ebe.js.map
