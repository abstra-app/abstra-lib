import{C as d}from"./gateway.5334dd49.js";import"./index.ea15e788.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="2721fbee-95dd-49db-abe8-b325f5ac7c73",r._sentryDebugIdIdentifier="sentry-dbid-2721fbee-95dd-49db-abe8-b325f5ac7c73")}catch{}})();class s{async list(e){return d.get(`organizations/${e}/folders`)}async create(e){return d.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return d.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return d.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{s as F};
//# sourceMappingURL=folder.a20ef238.js.map
