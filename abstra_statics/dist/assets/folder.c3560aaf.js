import{C as r}from"./gateway.ca2b209e.js";import"./index.fc84014a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="ab77e652-32ed-4c70-a39a-8ae2f0a056a1",n._sentryDebugIdIdentifier="sentry-dbid-ab77e652-32ed-4c70-a39a-8ae2f0a056a1")}catch{}})();class d{async list(e){return r.get(`organizations/${e}/folders`)}async create(e){return r.post(`organizations/${e.organizationId}/folders`,{name:e.name,memberIds:e.memberIds})}async delete(e,a){return r.delete(`organizations/${e}/folders/${a}`)}async update(e,a){return r.patch(`organizations/${e}/folders/${a.id}/`,{name:a.name,memberIds:a.memberIds})}}export{d as F};
//# sourceMappingURL=folder.c3560aaf.js.map
