import{C as t}from"./gateway.df2de02c.js";import"./index.eb76f1e1.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="b6f55a46-81c3-4c77-866d-5b479bf79bce",r._sentryDebugIdIdentifier="sentry-dbid-b6f55a46-81c3-4c77-866d-5b479bf79bce")}catch{}})();class d{async list(e){return t.get(`organizations/${e}/folders`)}async create(e){return t.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return t.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return t.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.be24cbc1.js.map
