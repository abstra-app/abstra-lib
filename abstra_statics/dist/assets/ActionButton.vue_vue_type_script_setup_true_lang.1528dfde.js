import{d as r,r as i,o as d,a5 as c,b as l,c as u,N as b,af as y}from"./registerWidgets.1f64062d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d7ebf0c0-f2f2-4793-8fbc-51f869b0298c",e._sentryDebugIdIdentifier="sentry-dbid-d7ebf0c0-f2f2-4793-8fbc-51f869b0298c")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);d(()=>{s.value&&o.action.setElement(s.value),c.addAction(o.action)});const f=()=>n("next");return(m,t)=>(l(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=a=>f()),onKeydown:t[1]||(t[1]=y(a=>f(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.1528dfde.js.map
