import{C as t}from"./gateway.a3ac7e73.js";import"./index.3dbef024.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="0eef1178-882c-4e83-8bdb-c205881a9308",r._sentryDebugIdIdentifier="sentry-dbid-0eef1178-882c-4e83-8bdb-c205881a9308")}catch{}})();class d{async list(e){return t.get(`organizations/${e}/folders`)}async create(e){return t.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return t.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return t.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.1805037a.js.map
