var j=Object.defineProperty;var w=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(w(s,typeof e!="symbol"?e+"":e,t),t);import{C as n}from"./gateway.c8bc89d0.js";import{E as b}from"./record.76453a95.js";import{n as g}from"./string.b08713fc.js";import{O as o}from"./index.4b0f7fd1.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="f7827f6c-c011-49c2-b65d-99978a2ab93b",s._sentryDebugIdIdentifier="sentry-dbid-f7827f6c-c011-49c2-b65d-99978a2ab93b")}catch{}})();o.object({name:o.string().optional(),unique:o.boolean().optional(),nullable:o.boolean().optional(),type:o.object({newType:o.string(),using:o.string()}).optional(),default:o.string().optional(),foreignKey:o.object({columnId:o.string()}).nullish().optional()});const $={boolean:["boolean","bool"],int:["int","integer","int4"],varchar:["varchar","character varying","text"],json:["json"],date:["date"],timestamp:["timestamp"],uuid:["uuid"],real:["real","float4"]},T=s=>{for(const e of C)if($[e].includes(s))return e;throw new Error(`Unknown type: ${s}`)};class D{async create(e){return n.post(`projects/${e.projectId}/tables/${e.tableId}/columns`,e)}async delete(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}/columns/${e.id}`)}async update(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}/columns/${e.id}`,t)}async getById(e){return n.get(`projects/${e.projectId}/columns/${e.id}`)}}const y=new D,h=class{constructor(e){l(this,"record");this.record=b.from(e)}static async create(e,t,r,c,d,p,I,f){const m=await y.create({name:e,type:t,default:r,nullable:c,unique:d,tableId:p,projectId:I,foreignKey:f});return"error"in m?m:new h(m)}async update(e){const t={...this.record.changes,type:this.record.changes.type&&e?{newType:this.record.changes.type,using:e}:void 0};return Object.keys(t).length===0||!this.id?{success:!0,error:""}:(await y.update({id:this.id,tableId:this.tableId,projectId:this.projectId},t),{success:!0,error:""})}toDTO(){return this.record.state}get id(){return this.record.get("id")}get tableId(){return this.record.get("tableId")}get projectId(){return this.record.get("projectId")}get protected(){return this.record.get("protected")}get type(){return T(this.record.get("type"))}set type(e){this.record.set("type",e)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get nullable(){return this.record.get("nullable")}set nullable(e){this.record.set("nullable",e)}get unique(){return this.record.get("unique")}set unique(e){this.record.set("unique",e)}get primaryKey(){return this.record.get("primaryKey")}get default(){var e;return(e=this.record.get("default"))==null?void 0:e.split("::")[0]}set default(e){this.record.set("default",e)}get foreignKey(){return this.record.get("foreignKey")}set foreignKey(e){this.record.set("foreignKey",e)}async delete(){this.id&&await y.delete({id:this.id,tableId:this.tableId,projectId:this.projectId})}};let i=h;l(i,"fromDTO",e=>new h(e)),l(i,"fromID",async(e,t)=>{const r=await y.getById({projectId:e,id:t});return h.fromDTO(r.column)});const C=["varchar","int","boolean","json","date","timestamp","uuid","real"],q={varchar:"'DEFAULT_VALUE'",int:"42",boolean:"false",json:"'{}'::json",date:"now()",timestamp:"now()",uuid:"gen_random_uuid()",real:"0.0"};class R{async list(e){return n.get(`projects/${e}/tables`)}async create(e,t){return await n.post(`projects/${e.projectId}/tables`,t)}async get(e){return n.get(`projects/${e.projectId}/tables/${e.tableId}`)}async delete(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}`)}async selectRows(e){return n.get(`projects/${e.projectId}/tables/${e.tableId}/rows`,{limit:e.limit.toString(),offset:e.offset.toString(),search:e.search,where:JSON.stringify(e.where),orderBy:JSON.stringify(e.orderBy)})}async update(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}`,t)}async insertRow(e,t){return n.post(`projects/${e.projectId}/tables/${e.tableId}/rows`,t)}async updateRow(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`,t)}async deleteRow(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`)}async getByColumnID(e){return n.get(`projects/${e.projectId}/columns/${e.columnId}`)}}const a=new R;class u{constructor(e,t=null){l(this,"record");l(this,"columns");this.record=b.from(e),this.columns=t}static async list(e){return(await a.list(e)).map(r=>new u(r))}static async fromColumnId(e,t){const r=await a.getByColumnID({projectId:e,columnId:t});return u.get(e,r.table.id)}static async create(e,t){const r=g(t,!1),c=await a.create({projectId:e},{name:r});return new u(c.table,c.columns.map(p=>i.fromDTO(p)))}static async get(e,t){const r=await a.get({projectId:e,tableId:t}),c=r.table,d=r.columns.map(p=>i.fromDTO({...p,projectId:c.projectId}));return new u(c,d)}async delete(e,t){return a.delete({projectId:e,tableId:t})}fixTraillingName(){this.name=g(this.name,!1)}async save(){if(Object.keys(this.record.changes).length!==0){this.record.changes.name&&this.fixTraillingName();try{await a.update({id:this.id,tableId:this.id,projectId:this.projectId},this.record.changes)}finally{this.record.resetChanges()}}}resetChanges(){this.record.resetChanges()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}hasChangesDeep(e){return this.record.hasChangesDeep(e)&&g(this.name,!1)!==this.record.initialState.name}getColumns(){var e;return(e=this.columns)!=null?e:[]}getUnprotectedColumns(){var e,t;return(t=(e=this.columns)==null?void 0:e.filter(r=>!r.protected).map(r=>r.toDTO()))!=null?t:[]}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(e){const t=g(e,!0);this.record.set("name",t)}get projectId(){return this.record.get("projectId")}async addColumn(e){const t=await i.create(e.name,e.type,e.default,e.nullable,e.unique,this.id,this.projectId,e.foreignKey);return"error"in t?{success:!1,error:t.error}:this.columns?(this.columns.push(t),{success:!0,error:""}):(this.columns=[t],{success:!0,error:""})}getColumn(e){var t;return(t=this.columns)==null?void 0:t.find(r=>r.id&&r.id===e)}async select(e={},t,r,c,d){return a.selectRows({name:this.name,where:e,tableId:this.id,projectId:this.projectId,limit:r,offset:t,search:c,orderBy:d})}async insertRow(e){return a.insertRow({tableId:this.id,projectId:this.projectId},e)}async updateRow(e,t){return a.updateRow({tableId:this.id,projectId:this.projectId,rowId:e},t)}async deleteRow(e){return a.deleteRow({tableId:this.id,projectId:this.projectId,rowId:e})}}export{u as T,q as d,C as p};
//# sourceMappingURL=tables.81ce6152.js.map
