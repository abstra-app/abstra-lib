import{C as t}from"./gateway.ab874197.js";import"./index.e1ec3e10.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3886be5a-cff6-43c9-8412-af2d30229188",r._sentryDebugIdIdentifier="sentry-dbid-3886be5a-cff6-43c9-8412-af2d30229188")}catch{}})();class d{async list(e){return t.get(`organizations/${e}/folders`)}async create(e){return t.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return t.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return t.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.3c959869.js.map
