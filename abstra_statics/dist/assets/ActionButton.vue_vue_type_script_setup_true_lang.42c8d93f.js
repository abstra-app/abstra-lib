import{d as r,r as i,o as l,a4 as c,b as f,c as u,N as y,ae as m}from"./registerWidgets.0e006b6f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="793979c4-18fd-4a22-85ed-9667d9f256ac",e._sentryDebugIdIdentifier="sentry-dbid-793979c4-18fd-4a22-85ed-9667d9f256ac")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),c.addAction(o.action)});const a=()=>n("next");return(p,t)=>(f(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=d=>a()),onKeydown:t[1]||(t[1]=m(d=>a(),["enter"]))},y(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.42c8d93f.js.map
