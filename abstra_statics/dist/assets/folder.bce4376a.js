import{C as a}from"./gateway.f03e4b27.js";import"./index.97914b50.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="6427248c-3535-4668-a951-6faacb83ec21",r._sentryDebugIdIdentifier="sentry-dbid-6427248c-3535-4668-a951-6faacb83ec21")}catch{}})();class d{async list(e){return a.get(`organizations/${e}/folders`)}async create(e){return a.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return a.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return a.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.bce4376a.js.map
