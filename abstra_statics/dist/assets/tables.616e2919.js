var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{E as b}from"./record.7e194615.js";import{C as u}from"./index.05bcfc39.js";import{n as d}from"./string.0ce1e8c0.js";import{C as n}from"./authorManager.c51bb24c.js";import"./outputWidgets.43a10844.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="aeeb8f0d-1b1c-4fc0-9782-d04e1f219f54",s._sentryDebugIdIdentifier="sentry-dbid-aeeb8f0d-1b1c-4fc0-9782-d04e1f219f54")}catch{}})();const C=["varchar","int","boolean","json","date","timestamp","uuid"];class I{async list(e){return n.get(`projects/${e}/tables`)}async create(e,t){return await n.post(`projects/${e.projectId}/tables`,t)}async get(e){return n.get(`projects/${e.projectId}/tables/${e.tableId}`)}async delete(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}`)}async selectRows(e){const t=new URLSearchParams({limit:e.limit.toString(),offset:e.offset.toString()});return n.get(`projects/${e.projectId}/tables/${e.tableId}/rows?${t}`)}async update(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}`,t)}async insertRow(e,t){return n.post(`projects/${e.projectId}/tables/${e.tableId}/rows`,t)}async updateRow(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`,t)}async deleteRow(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`)}async executeQuery(e,t,r){return n.post(`projects/${e.projectId}/execute`,{query:t,params:r})}}const a=new I;class i{constructor(e,t=null){l(this,"record");l(this,"columns");this.record=b.from(e),this.columns=t}static async list(e){return(await a.list(e)).map(r=>new i(r))}static async create(e,t){const r=d(t,!1),o=await a.create({projectId:e},{name:r});return new i(o.table,o.columns.map(p=>u.fromDTO(p)))}static async get(e,t){const r=await a.get({projectId:e,tableId:t}),o=r.table,c=r.columns.map(p=>u.fromDTO({...p,projectId:o.projectId}));return new i(o,c)}async delete(e,t){return a.delete({projectId:e,tableId:t})}fixTraillingName(){this.name=d(this.name,!1)}async save(){if(Object.keys(this.record.changes).length!==0){this.record.changes.name&&this.fixTraillingName();try{await a.update({id:this.id,tableId:this.id,projectId:this.projectId},this.record.changes)}finally{this.record.resetChanges()}}}resetChanges(){this.record.resetChanges()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}hasChangesDeep(e){return this.record.hasChangesDeep(e)&&d(this.name,!1)!==this.record.initialState.name}getColumns(){var e;return(e=this.columns)!=null?e:[]}getUnprotectedColumns(){var e,t;return(t=(e=this.columns)==null?void 0:e.filter(r=>!r.protected).map(r=>r.toDTO()))!=null?t:[]}executeQuery(e,t){return a.executeQuery({projectId:this.projectId},e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(e){const t=d(e,!0);this.record.set("name",t)}get projectId(){return this.record.get("projectId")}async addColumn(e){const t=await u.create(e.name,e.type,e.default,e.nullable,e.unique,this.id,this.projectId);return"error"in t?{success:!1,error:t.error}:this.columns?(this.columns.push(t),{success:!0,error:""}):(this.columns=[t],{success:!0,error:""})}getColumn(e){var t;return(t=this.columns)==null?void 0:t.find(r=>r.id&&r.id===e)}async select(e={},t,r){const o=Object.keys(e).map(c=>`${c} = :${c}`).join(" AND ");return a.selectRows({name:this.name,where:o,params:e,tableId:this.id,projectId:this.projectId,limit:r,offset:t})}async insertRow(e){return a.insertRow({tableId:this.id,projectId:this.projectId},e)}async updateRow(e,t){return a.updateRow({tableId:this.id,projectId:this.projectId,rowId:e},t)}async deleteRow(e){return a.deleteRow({tableId:this.id,projectId:this.projectId,rowId:e})}}export{i as T,C as p};
//# sourceMappingURL=tables.616e2919.js.map
