import{C as t}from"./gateway.d5ba215b.js";import"./index.606ceacb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="82af2a1c-56e3-4cf7-9f70-110d6b11e6f9",r._sentryDebugIdIdentifier="sentry-dbid-82af2a1c-56e3-4cf7-9f70-110d6b11e6f9")}catch{}})();class d{async list(e){return t.get(`organizations/${e}/folders`)}async create(e){return t.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return t.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return t.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.14dc38b4.js.map
