import{d as a,b as o,c as r,w as d,b2 as c,u as i,cd as f}from"./outputWidgets.eddbac36.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a6da4fce-f285-4f68-9ed5-7e1ad970f0ac",t._sentryDebugIdIdentifier="sentry-dbid-a6da4fce-f285-4f68-9ed5-7e1ad970f0ac")}catch{}})();class p{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const u=new p,_=a({__name:"DocsButton",props:{path:{}},setup(t){return(e,n)=>{var s;return o(),r(i(f),{class:"docs-button",href:`https://docs.abstra.io/${(s=e.path)!=null?s:""}`,target:"_blank"},{default:d(()=>[c(" Docs ")]),_:1},8,["href"])}}});export{_,u as l};
//# sourceMappingURL=DocsButton.vue_vue_type_script_setup_true_lang.24b9d7bf.js.map
