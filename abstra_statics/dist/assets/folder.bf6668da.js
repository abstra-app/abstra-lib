import{C as r}from"./gateway.b4dec3fd.js";import"./index.de1db9de.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="0a1eb0e0-5c8a-418f-9250-4fa50a1859b3",a._sentryDebugIdIdentifier="sentry-dbid-0a1eb0e0-5c8a-418f-9250-4fa50a1859b3")}catch{}})();class d{async list(e){return r.get(`organizations/${e}/folders`)}async create(e){return r.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return r.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return r.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.bf6668da.js.map
