import{C as t}from"./gateway.d41e4aa0.js";import"./index.a701e366.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="4ce1993c-8aa1-47f9-9c82-6487429be0b5",r._sentryDebugIdIdentifier="sentry-dbid-4ce1993c-8aa1-47f9-9c82-6487429be0b5")}catch{}})();class d{async list(e){return t.get(`organizations/${e}/folders`)}async create(e){return t.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return t.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return t.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.18362f4a.js.map
