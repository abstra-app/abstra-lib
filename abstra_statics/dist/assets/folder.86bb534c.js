import{C as t}from"./gateway.1b50f665.js";import"./index.2145b499.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="f749e36c-a493-4ced-9886-02414fe0ec26",r._sentryDebugIdIdentifier="sentry-dbid-f749e36c-a493-4ced-9886-02414fe0ec26")}catch{}})();class d{async list(e){return t.get(`organizations/${e}/folders`)}async create(e){return t.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,n){return t.delete(`organizations/${e}/folders/${n}`)}async update(e,n){return t.patch(`organizations/${e}/folders/${n.id}/`,{name:n.name,memberIds:n.memberIds})}}export{d as F};
//# sourceMappingURL=folder.86bb534c.js.map
