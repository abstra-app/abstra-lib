var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{E as I}from"./record.852e940f.js";import{C as p}from"./index.38e15242.js";import{n as i}from"./string.977cab50.js";import{C as a}from"./router.5e1b2a3a.js";import"./outputWidgets.59239215.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="b2d5a317-6d9c-4aac-aa7c-8871c038ac00",s._sentryDebugIdIdentifier="sentry-dbid-b2d5a317-6d9c-4aac-aa7c-8871c038ac00")}catch{}})();const C=["varchar","int","boolean","json","date","timestamp","uuid"],D={varchar:"'DEFAULT_VALUE'",int:"42",boolean:"false",json:"'{}'::json",date:"now()",timestamp:"now()",uuid:"gen_random_uuid()"};class b{async list(e){return a.get(`projects/${e}/tables`)}async create(e,t){return await a.post(`projects/${e.projectId}/tables`,t)}async get(e){return a.get(`projects/${e.projectId}/tables/${e.tableId}`)}async delete(e){return a.delete(`projects/${e.projectId}/tables/${e.tableId}`)}async selectRows(e){return a.get(`projects/${e.projectId}/tables/${e.tableId}/rows`,{limit:e.limit.toString(),offset:e.offset.toString(),search:e.search,where:JSON.stringify(e.where)})}async update(e,t){return a.patch(`projects/${e.projectId}/tables/${e.tableId}`,t)}async insertRow(e,t){return a.post(`projects/${e.projectId}/tables/${e.tableId}/rows`,t)}async updateRow(e,t){return a.patch(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`,t)}async deleteRow(e){return a.delete(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`)}async getByColumnID(e){return a.get(`projects/${e.projectId}/columns/${e.columnId}`)}}const n=new b;class c{constructor(e,t=null){l(this,"record");l(this,"columns");this.record=I.from(e),this.columns=t}static async list(e){return(await n.list(e)).map(r=>new c(r))}static async fromColumnId(e,t){const r=await n.getByColumnID({projectId:e,columnId:t});return c.get(e,r.table.id)}static async create(e,t){const r=i(t,!1),o=await n.create({projectId:e},{name:r});return new c(o.table,o.columns.map(d=>p.fromDTO(d)))}static async get(e,t){const r=await n.get({projectId:e,tableId:t}),o=r.table,u=r.columns.map(d=>p.fromDTO({...d,projectId:o.projectId}));return new c(o,u)}async delete(e,t){return n.delete({projectId:e,tableId:t})}fixTraillingName(){this.name=i(this.name,!1)}async save(){if(Object.keys(this.record.changes).length!==0){this.record.changes.name&&this.fixTraillingName();try{await n.update({id:this.id,tableId:this.id,projectId:this.projectId},this.record.changes)}finally{this.record.resetChanges()}}}resetChanges(){this.record.resetChanges()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}hasChangesDeep(e){return this.record.hasChangesDeep(e)&&i(this.name,!1)!==this.record.initialState.name}getColumns(){var e;return(e=this.columns)!=null?e:[]}getUnprotectedColumns(){var e,t;return(t=(e=this.columns)==null?void 0:e.filter(r=>!r.protected).map(r=>r.toDTO()))!=null?t:[]}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(e){const t=i(e,!0);this.record.set("name",t)}get projectId(){return this.record.get("projectId")}async addColumn(e){const t=await p.create(e.name,e.type,e.default,e.nullable,e.unique,this.id,this.projectId,e.foreignKey);return"error"in t?{success:!1,error:t.error}:this.columns?(this.columns.push(t),{success:!0,error:""}):(this.columns=[t],{success:!0,error:""})}getColumn(e){var t;return(t=this.columns)==null?void 0:t.find(r=>r.id&&r.id===e)}async select(e={},t,r,o){return n.selectRows({name:this.name,where:e,tableId:this.id,projectId:this.projectId,limit:r,offset:t,search:o})}async insertRow(e){return n.insertRow({tableId:this.id,projectId:this.projectId},e)}async updateRow(e,t){return n.updateRow({tableId:this.id,projectId:this.projectId,rowId:e},t)}async deleteRow(e){return n.deleteRow({tableId:this.id,projectId:this.projectId,rowId:e})}}export{c as T,D as d,C as p};
//# sourceMappingURL=tables.21c7b160.js.map
