import{C as r}from"./gateway.126ea71d.js";import"./index.ccb069df.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="2a5561e1-28a2-4961-8943-aa21c91c39cf",a._sentryDebugIdIdentifier="sentry-dbid-2a5561e1-28a2-4961-8943-aa21c91c39cf")}catch{}})();class d{async list(e){return r.get(`organizations/${e}/folders`)}async create(e){return r.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return r.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return r.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.0ce9b990.js.map
