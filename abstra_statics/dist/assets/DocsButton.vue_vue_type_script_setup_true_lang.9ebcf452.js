import{d as s,b as a,c as r,w as i,aq as c,u as d,bU as f}from"./outputWidgets.df68f70a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6440ff3d-8294-4319-96a6-6a07ee747678",t._sentryDebugIdIdentifier="sentry-dbid-6440ff3d-8294-4319-96a6-6a07ee747678")}catch{}})();class p{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}}const u=new p,_=s({__name:"DocsButton",props:{path:{}},setup(t){return(e,n)=>{var o;return a(),r(d(f),{class:"docs-button",href:`https://docs.abstra.io/${(o=e.path)!=null?o:""}`,target:"_blank"},{default:i(()=>[c(" Docs ")]),_:1},8,["href"])}}});export{_,u as l};
//# sourceMappingURL=DocsButton.vue_vue_type_script_setup_true_lang.9ebcf452.js.map
