var k=Object.defineProperty;var P=(o,t,e)=>t in o?k(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>(P(o,typeof t!="symbol"?t+"":t,e),e);import{O as i,cM as g,R as y,en as d,f as v}from"./index.b4fd398e.js";import{M as N}from"./vue-flow-core.88b63ae9.js";import{u as c}from"./uuid.1d86983d.js";import{v as j,n as F,a as C,b as $}from"./validations.5b93e88a.js";import{w as D}from"./metadata.c39171d0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="ac9be144-45c4-4e8c-98b2-2ff68893a794",o._sentryDebugIdIdentifier="sentry-dbid-ac9be144-45c4-4e8c-98b2-2ff68893a794")}catch{}})();const V=i.object({type:i.enum(["forms","hooks"]),id:i.string(),title:i.string(),position:i.object({x:i.number(),y:i.number()}),props:i.object({path:i.string().nullable(),filename:i.string().nullable()})}),_=i.object({type:i.literal("scripts"),id:i.string(),title:i.string(),position:i.object({x:i.number(),y:i.number()}),props:i.object({filename:i.string().nullable()})}),A=i.object({type:i.literal("jobs"),id:i.string(),title:i.string(),position:i.object({x:i.number(),y:i.number()}),props:i.object({filename:i.string().nullable()})}),R=i.object({type:i.literal("agents"),id:i.string(),title:i.string(),position:i.object({x:i.number(),y:i.number()}),props:i.object({projectId:i.string().nullable(),clientStageId:i.string().nullable()})}),z=i.object({type:i.literal("clients"),id:i.string(),title:i.string(),position:i.object({x:i.number(),y:i.number()}),props:i.object({})}),M=i.union([_,V,R,z,A]),O=i.object({id:i.string(),type:i.literal("task"),sourceStageId:i.string(),targetStageId:i.string(),props:i.object({taskType:i.string().nullable()})}),I=i.object({stages:i.array(M),transitions:i.array(O)}),W={"Content-Type":"application/json"};class q{async load(){const t=await fetch("/_editor/api/workflows");if(t.ok){const e=await t.json(),s=I.safeParse(e);if(s.success)return s.data;throw console.error(s.error.errors),new Error("Failed to parse initial data")}else throw new Error("Failed to fetch initial data")}async update(t){const e=await fetch("/_editor/api/workflows",{method:"PUT",headers:W,body:JSON.stringify(t)});if(e.ok){const s=await e.json(),r=I.safeParse(s);if(r.success)return r.data;throw new Error("Failed to parse updated data:",s)}else throw new Error("Failed to update workflow")}}const et=new q;function H(){return Math.random().toString(36).slice(2,9)}class h{constructor(t){this.changes=t}apply(t){return this.changes.reduce((e,s)=>s.apply(e),t)}reverse(){return new h(this.changes.map(t=>t.reverse()).reverse())}}class b{constructor(t){a(this,"removed");this.stageId=t,this.removed=null}apply(t){const e=t.stages.find(r=>r.id===this.stageId)||null;if(!e)throw new Error(`Stage ${this.stageId} not found`);const s=t.transitions.filter(r=>r.sourceStageId===this.stageId||r.targetStageId===this.stageId);return this.removed={stage:e,transitions:s},{stages:t.stages.filter(r=>r.id!==e.id),transitions:t.transitions.filter(r=>!s.find(n=>n.id===r.id))}}reverse(){if(!this.removed)throw new Error("Cannot reverse change that was not applied");const t=new T(this.removed.stage.type,this.removed.stage.title,this.removed.stage.position,this.removed.stage.id,this.removed.stage.props),e=this.removed.transitions.map(s=>new u(s.sourceStageId,s.targetStageId,s.type,s.id));return new h([t,...e])}}class T{constructor(t,e,s,r,n){a(this,"addedStage");this.stageType=t,this.nodeTitle=e,this.position=s,this.id=r,this.props=n,this.addedStage=null}assertStageDoesNotExist(t){if(t.stages.find(e=>e.id===this.id))throw new Error(`Stage ${this.id} already exists`)}assertValidStageType(){if(!D.stages.find(t=>t.typeName===this.stageType))throw new Error(`Invalid stage type ${this.stageType}`)}assertTransitionDoesNotExist(t){if(t.transitions.find(e=>e.sourceStageId===this.id||e.targetStageId===this.id))throw new Error("Stage already has transitions")}makePath(t){switch(this.stageType){case"forms":return`new-form-${t}`;case"hooks":return`new-hook-${t}`;default:return null}}makeFilename(t){switch(this.stageType){case"forms":return`new_form_${t}.py`;case"hooks":return`new_hook_${t}.py`;case"jobs":return`new_job_${t}.py`;case"scripts":return`new_script_${t}.py`;default:return null}}apply(t){var s,r,n,l;const e=H();switch(this.assertStageDoesNotExist(t),this.assertValidStageType(),this.assertTransitionDoesNotExist(t),this.stageType){case"forms":case"hooks":{const p={path:this.makePath(e),filename:this.makeFilename(e),...this.props};this.addedStage={id:(s=this.id)!=null?s:c(),title:this.nodeTitle,type:this.stageType,position:{x:this.position.x,y:this.position.y},props:p};break}case"jobs":case"scripts":{const p={filename:this.makeFilename(e),...this.props};this.addedStage={id:(r=this.id)!=null?r:c(),title:this.nodeTitle,type:this.stageType,position:{x:this.position.x,y:this.position.y},props:p};break}case"agents":{this.addedStage={id:(n=this.id)!=null?n:c(),title:this.nodeTitle,type:this.stageType,position:{x:this.position.x,y:this.position.y},props:{projectId:null,clientStageId:null}};break}case"clients":{this.addedStage={id:(l=this.id)!=null?l:c(),title:this.nodeTitle,type:this.stageType,position:{x:this.position.x,y:this.position.y},props:{}};break}default:throw new Error(`Invalid stage type ${this.stageType}`)}if(!this.addedStage)throw new Error("Stage not created");return{transitions:t.transitions,stages:[...t.stages,this.addedStage]}}reverse(){if(!this.addedStage)throw new Error("Cannot reverse change that was not applied");return new b(this.addedStage.id)}}class Y extends h{constructor(t){super(t.map(e=>new T(e.type,e.title,e.position,e.id)))}}class E{constructor(t){a(this,"removedTransition");this.transitionId=t,this.removedTransition=null}apply(t){const e=t.transitions.find(s=>s.id===this.transitionId);if(!e)throw new Error(`Transition ${this.transitionId} not found`);return this.removedTransition=e!=null?e:null,{stages:t.stages,transitions:t.transitions.filter(s=>s.id!==this.transitionId)}}reverse(){if(!this.removedTransition)throw new Error("Cannot reverse change that was not applied");return new u(this.removedTransition.sourceStageId,this.removedTransition.targetStageId,this.removedTransition.type,this.removedTransition.id)}}class u{constructor(t,e,s,r){a(this,"addedTransition");this.sourceStageId=t,this.targetStageId=e,this.transitionType=s,this.transitionId=r,this.addedTransition=null}assertSourceStageExists(t){if(!t.stages.find(e=>e.id===this.sourceStageId))throw new Error(`Stage ${this.sourceStageId} not found`)}assertTargetStageExists(t){if(!t.stages.find(e=>e.id===this.targetStageId))throw new Error(`Stage ${this.targetStageId} not found`)}assertTransitionDoesNotExist(t){if(t.transitions.find(e=>e.id===this.transitionId))throw new Error(`Transition ${this.transitionId} already exists`)}assertNotSelfTransition(){if(this.sourceStageId===this.targetStageId)throw new Error("Self transitions are not allowed")}assertNoDuplicatedTransitionStages(t){if(t.transitions.find(e=>e.sourceStageId===this.sourceStageId&&e.targetStageId===this.targetStageId))throw g.error({message:"Invalid transition",description:"Transition already exists"}),new Error("Transition already exists")}assertNoStageWithSameId(t){if(t.stages.find(e=>e.id===this.transitionId))throw new Error(`Stage with id ${this.transitionId} already exists`)}apply(t){return this.assertSourceStageExists(t),this.assertTargetStageExists(t),this.assertTransitionDoesNotExist(t),this.assertNotSelfTransition(),this.assertNoDuplicatedTransitionStages(t),this.assertNoStageWithSameId(t),this.addedTransition={id:this.transitionId,sourceStageId:this.sourceStageId,targetStageId:this.targetStageId,type:this.transitionType,props:{taskType:null}},{stages:t.stages,transitions:[...t.transitions,this.addedTransition]}}reverse(){if(!this.addedTransition)throw new Error("Cannot reverse change that was not applied");return new E(this.addedTransition.id)}}class U extends h{constructor(t){super(t.map(e=>new u(e.sourceStageId,e.targetStageId,e.type,e.id)))}}class S{constructor(t){a(this,"oldPositions");this.newPositions=t,this.oldPositions=null}assertStagesExists(t){this.newPositions.forEach(({id:e})=>{if(!t.stages.find(s=>s.id===e))throw new Error(`Stage ${e} not found`)})}assertIsNumber(){this.newPositions.forEach(({position:t})=>{if(Number.isNaN(t.x)||Number.isNaN(t.y)||!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Position must be a number")})}apply(t){return this.assertIsNumber(),this.assertStagesExists(t),this.oldPositions=t.stages.map(s=>({id:s.id,position:s.position})),{stages:t.stages.map(s=>{var n,l;const r=(l=(n=this.newPositions.find(p=>p.id===s.id))==null?void 0:n.position)!=null?l:s.position;return{...s,position:{x:r.x,y:r.y}}}),transitions:t.transitions}}reverse(){if(!this.oldPositions)throw new Error("Cannot reverse change that was not applied");return new S(this.oldPositions)}}class w{constructor(t,e){a(this,"stageId");a(this,"newTitle");a(this,"oldTitle");this.stageId=t,this.newTitle=e,this.oldTitle=""}assertStageExists(t){if(!t.stages.find(e=>e.id===this.stageId))throw new Error(`Stage ${this.stageId} not found`)}apply(t){return this.assertStageExists(t),this.oldTitle=t.stages.find(e=>e.id===this.stageId).title,{stages:t.stages.map(e=>e.id===this.stageId?{...e,title:this.newTitle}:e),transitions:t.transitions}}reverse(){return new w(this.stageId,this.oldTitle)}}class f{constructor(t,e){a(this,"stageId");a(this,"newProps");a(this,"oldProps");this.stageId=t,this.newProps=e}assertStageExists(t){if(!t.stages.find(e=>e.id===this.stageId))throw new Error(`Stage ${this.stageId} not found`)}assertValidPath(){if(!("path"in this.newProps)||!this.newProps.path)return;const t=j(this.newProps.path);if(!t.valid){g.error({message:"Invalid path",description:t.reason});return}this.newProps.path=F(this.newProps.path)}assertValidFilename(){if(!("filename"in this.newProps)||!this.newProps.filename)return;const t=C(this.newProps.filename);if(!t.valid){g.error({message:"Invalid filename",description:t.reason});return}this.newProps.filename=$(this.newProps.filename)}apply(t){return this.assertStageExists(t),this.assertValidPath(),this.assertValidFilename(),this.oldProps=t.stages.find(e=>e.id===this.stageId).props,{stages:t.stages.map(e=>e.id===this.stageId?{...e,props:this.newProps}:e),transitions:t.transitions}}reverse(){return new f(this.stageId,this.oldProps)}}class m{constructor(t,e){a(this,"newProps");a(this,"transitionId");a(this,"oldProps");this.newProps=e,this.transitionId=t,this.oldProps=e}apply(t){return{transitions:t.transitions.map(e=>e.id===this.transitionId?(this.oldProps=e.props,{...e,props:this.newProps}):e),stages:t.stages}}reverse(){return new m(this.transitionId,this.oldProps)}}class J extends h{constructor(t,e){super([...e.map(s=>new E(s)),...t.map(s=>new b(s))])}}class L{constructor(t){a(this,"currentState");a(this,"serverState");a(this,"undoStack");a(this,"redoStack");this.undoStack=[],this.redoStack=[],this.currentState=y(Object.freeze(t)),this.serverState=y(Object.freeze(t))}apply(t){return this.currentState.value=t.apply(this.currentState.value),this.undoStack.push(t),this.redoStack=[],this.currentState.value}canUndo(){return this.undoStack.length>0}undo(){const t=this.undoStack.pop();if(t){const e=t.reverse();this.currentState.value=e.apply(this.currentState.value),this.redoStack.push(t)}return this.currentState.value}canRedo(){return this.redoStack.length>0}redo(){const t=this.redoStack.pop();return t&&(this.currentState.value=t.apply(this.currentState.value),this.undoStack.push(t)),this.currentState.value}getState(){return this.currentState.value}setServerState(t){this.serverState.value=t}getServerState(){return this.serverState.value}hasStageChanges(){return!d.exports.isEqual(this.currentState.value.stages,this.serverState.value.stages)}hasChanges(){const t={...this.currentState.value,stages:[...this.currentState.value.stages].sort((s,r)=>s.id.localeCompare(r.id)),transitions:[...this.currentState.value.transitions].sort((s,r)=>s.id.localeCompare(r.id))},e={...this.serverState.value,stages:[...this.serverState.value.stages].sort((s,r)=>s.id.localeCompare(r.id)),transitions:[...this.serverState.value.transitions].sort((s,r)=>s.id.localeCompare(r.id))};return!d.exports.isEqual(t,e)}stageHasChanges(t){const e=this.currentState.value.stages.find(r=>r.id===t),s=this.serverState.value.stages.find(r=>r.id===t);return!d.exports.isEqual(e,s)}stageHasNonPositionChanges(t){const e=this.currentState.value.stages.find(r=>r.id===t),s=this.serverState.value.stages.find(r=>r.id===t);return!d.exports.isEqual(d.exports.omit(e,"position"),d.exports.omit(s,"position"))}}const B=2;class x{constructor(t,e,s){a(this,"api");a(this,"editable");a(this,"history");a(this,"vueFlowNodes");a(this,"vueFlowEdges");this.editable=s,this.api=t,this.history=new L(e),this.vueFlowNodes=v(()=>this.computeVueFlowNodes()),this.vueFlowEdges=v(()=>this.computeVueFlowEdges())}static async init(t,e){const s=await t.load();return new x(t,s,e)}inflateYFactor(){return this.editable?1:B}computeVueFlowNodes(){return this.history.getState().stages.map(e=>({id:e.id,type:e.type,data:e,position:{x:e.position.x,y:e.position.y*this.inflateYFactor()}}))}computeVueFlowEdges(){return this.history.getState().transitions.map(e=>({id:e.id,source:e.sourceStageId,target:e.targetStageId,type:"task",label:"task",markerEnd:{type:N.Arrow,width:24,height:24},data:e}))}getStage(t){var e;return(e=this.history.getState().stages.find(s=>s.id===t))!=null?e:null}updateStageTitle(t,e){this.history.apply(new w(t,e))}updateStageProps(t,e){this.history.apply(new f(t,e))}addStages(t){const e=t[0].type.slice(0,-1),s=e==="script"?"tasklet":e;return this.history.apply(new Y(t.map(r=>{var n;return{...r,title:(n=r.title)!=null?n:`New ${s}`}}))),this.history.getState().stages.slice(-t.length)}connect(t){this.history.apply(new U(t))}move(t){this.history.apply(new S(t))}delete(t){const e=this.history.getState(),s=e.stages.filter(n=>t.includes(n.id)).map(n=>n.id),r=e.transitions.filter(n=>t.includes(n.id)).map(n=>n.id);this.history.apply(new J(s,r))}updateTransitionProps(t,e){this.history.apply(new m(t,e))}hasChanges(){return this.history.hasChanges()}async save(){if(this.history.hasChanges()){const t=await this.api.update(this.history.getState());this.history.setServerState(t)}}}export{q as E,x as W,H as g,et as w};
//# sourceMappingURL=controller.00d5121c.js.map
