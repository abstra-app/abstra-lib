import"./registerWidgets.1590c05e.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="73f3bf9c-3967-46e8-95cc-10b45c4fbe57",n._sentryDebugIdIdentifier="sentry-dbid-73f3bf9c-3967-46e8-95cc-10b45c4fbe57")}catch{}})();class s{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const r=new s;class o{constructor(e,t){this.projectId=e,this.authorId=t}static async get(){const e=await r.get();return e.logged?new o(e.project_id,e.author_id):null}static async create(e){const t=await r.create(e);if(!t.logged)throw new Error("Failed to login");return new o(t.project_id,t.author_id)}async delete(){return r.delete()}}export{o as L};
//# sourceMappingURL=login.846a689d.js.map
