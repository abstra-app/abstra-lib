import{d as r,r as i,o as l,a5 as c,b as u,c as f,N as y,af as b}from"./registerWidgets.92ed860b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d90c7a39-1e2d-4573-965d-2bc194a26e58",e._sentryDebugIdIdentifier="sentry-dbid-d90c7a39-1e2d-4573-965d-2bc194a26e58")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),c.addAction(o.action)});const a=()=>n("next");return(m,t)=>(u(),f("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=d=>a()),onKeydown:t[1]||(t[1]=b(d=>a(),["enter"]))},y(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.3ca491da.js.map
