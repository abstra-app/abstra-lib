import{C as r}from"./gateway.5b3b9b08.js";import"./index.a3e548bb.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="71cd316c-b429-43ef-b87b-ddd8c8d0d1a6",n._sentryDebugIdIdentifier="sentry-dbid-71cd316c-b429-43ef-b87b-ddd8c8d0d1a6")}catch{}})();class s{async list(e){return r.get(`organizations/${e}/folders`)}async create(e){return r.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,d){return r.delete(`organizations/${e}/folders/${d}`)}async update(e,d){return r.patch(`organizations/${e}/folders/${d.id}/`,{name:d.name,memberIds:d.memberIds})}}export{s as F};
//# sourceMappingURL=folder.e8243fcd.js.map
