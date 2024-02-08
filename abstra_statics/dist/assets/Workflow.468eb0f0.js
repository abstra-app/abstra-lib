var at=Object.defineProperty;var it=(d,t,e)=>t in d?at(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var o=(d,t,e)=>(it(d,typeof t!="symbol"?t+"":t,e),e);import{cz as _,F as q,eL as N,d as rt,eA as nt,eB as ot,H as C,r as dt,o as lt,L as ht,a as pt,b as w,ev as $,f as p,w as l,u as n,c as y,ex as T,e as x,ar as m,eD as ct,I as ut,cB as L,bV as U,bv as gt,e$ as wt,f0 as ft,eS as yt,eE as mt,eF as St,v as vt}from"./outputWidgets.74ac2ec4.js";import{W as Tt}from"./workspaces.2898fa49.js";import{q as It}from"./icons.f62d7c23.js";import{N as kt}from"./NavbarControls.15eddc8e.js";import{_ as _t}from"./SaveButton.vue_vue_type_script_setup_true_lang.95286835.js";import{s as Y}from"./schema.001ab511.js";import{w as S}from"./metadata.a0af945b.js";import{c as bt,d as Et,e as Nt,n as xt,v as Pt,a as Ct}from"./validations.b55cc691.js";import{a as $t}from"./asyncComputed.f88a4b94.js";import{a as Vt}from"./ant-design.ba20537e.js";import{A as Dt,c as Ft}from"./index.f7c43892.js";import{A as I}from"./Text.039f7ef4.js";import{A as J,T as At}from"./TabPane.ad00156c.js";import{A as k}from"./index.ba7b32c9.js";import"./runnerData.ae84c16f.js";import"./url.c37f3fbe.js";import"./record.a15934e9.js";import"./pubsub.6d093b2e.js";import"./index.baf3b153.js";import"./index.4627b22e.js";import"./popupNotifcation.aec81c2d.js";import"./Link.81322bd7.js";import"./Base.bd01be9c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.30b53c7c.js";import"./Paragraph.d67398fc.js";import"./Modal.fae7bce9.js";import"./index.cf4c23b9.js";import"./string.ae0d3257.js";import"./index.8324d637.js";import"./hasIn.88fbb4e5.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[t]="7f4986a1-31bb-41d9-9f86-0fbe90d2debc",d._sentryDebugIdIdentifier="sentry-dbid-7f4986a1-31bb-41d9-9f86-0fbe90d2debc")}catch{}})();const Wt={"Content-Type":"application/json"};class Mt{async load(){const t=await fetch("/_editor/api/workflows");if(t.ok){const e=await t.json();return Y.parse(e)}else throw new Error("Failed to fetch initial data")}async update(t){const e=await fetch("/_editor/api/workflows",{method:"PUT",headers:Wt,body:JSON.stringify(t)});if(e.ok){const s=await e.json();return Y.parse(s)}else throw new Error("Failed to update workflow")}}function c(){return Math.random().toString(36).slice(2,9)}class v{constructor(t){this.changes=t}apply(t){return this.changes.reduce((e,s)=>s.apply(e),t)}reverse(){return new v(this.changes.map(t=>t.reverse()).reverse())}}class G{constructor(t){o(this,"removed");this.stageId=t,this.removed=null}apply(t){const e=t.stages.find(a=>a.id===this.stageId)||null;if(!e)throw new Error(`Stage ${this.stageId} not found`);const s=t.transitions.filter(a=>a.sourceStageId===this.stageId||a.targetStageId===this.stageId);return this.removed={stage:e,transitions:s},{stages:t.stages.filter(a=>a.id!==e.id),transitions:t.transitions.filter(a=>!s.find(r=>r.id===a.id))}}reverse(){if(!this.removed)throw new Error("Cannot reverse change that was not applied");const t=new V(this.removed.stage.type,this.removed.stage.title,this.removed.stage.position,this.removed.stage.id,this.removed.stage.props),e=this.removed.transitions.map(s=>new P(s.sourceStageId,s.targetStageId,s.type,s.id));return new v([t,...e])}}class V{constructor(t,e,s,a,r){o(this,"addedStage");this.stageType=t,this.nodeTitle=e,this.position=s,this.id=a,this.props=r,this.addedStage=null}assertStageDoesNotExist(t){if(t.stages.find(e=>e.id===this.id))throw new Error(`Stage ${this.id} already exists`)}assertValidStageType(){if(!S.stages.find(t=>t.typeName===this.stageType))throw new Error(`Invalid stage type ${this.stageType}`)}assertTransitionDoesNotExist(t){if(t.transitions.find(e=>e.sourceStageId===this.id||e.targetStageId===this.id))throw new Error("Stage already has transitions")}makePath(){switch(this.stageType){case"forms":return`new_form_${c()}`;case"hooks":return`new_hook_${c()}`;default:return null}}makeFilename(){switch(this.stageType){case"forms":return`new_form_${c()}.py`;case"hooks":return`new_hook_${c()}.py`;case"jobs":return`new_job_${c()}.py`;case"scripts":return`new_script_${c()}.py`;default:return null}}makeVariableName(){switch(this.stageType){case"conditions":return"my_condition";case"iterators":return"my_list";default:return null}}apply(t){var s,a;const e=(s=this.props)!=null?s:{path:this.makePath(),filename:this.makeFilename(),variableName:this.makeVariableName()};return this.assertStageDoesNotExist(t),this.assertValidStageType(),this.assertTransitionDoesNotExist(t),this.addedStage={id:(a=this.id)!=null?a:c(),title:this.nodeTitle,type:this.stageType,position:{x:this.position.x,y:this.position.y},props:e},{transitions:t.transitions,stages:[...t.stages,this.addedStage]}}reverse(){if(!this.addedStage)throw new Error("Cannot reverse change that was not applied");return new G(this.addedStage.id)}}class Bt extends v{constructor(t){super(t.map(e=>new V(e.type,e.title,e.position,e.id)))}}class D{constructor(t,e){o(this,"oldTitle");this.stageId=t,this.newTitle=e,this.oldTitle=""}apply(t){const e=t.stages.find(s=>s.id===this.stageId);if(!e)throw new Error(`Stage ${this.stageId} not found`);return this.oldTitle=e.title,{stages:t.stages.map(s=>s.id===this.stageId?{...s,title:this.newTitle}:s),transitions:t.transitions}}reverse(){return new D(this.stageId,this.oldTitle)}}class Q{constructor(t){o(this,"removedTransition");this.transitionId=t,this.removedTransition=null}apply(t){const e=t.transitions.find(s=>s.id===this.transitionId);if(!e)throw new Error(`Transition ${this.transitionId} not found`);return this.removedTransition=e!=null?e:null,{stages:t.stages,transitions:t.transitions.filter(s=>s.id!==this.transitionId)}}reverse(){if(!this.removedTransition)throw new Error("Cannot reverse change that was not applied");return new P(this.removedTransition.sourceStageId,this.removedTransition.targetStageId,this.removedTransition.type,this.removedTransition.id)}}class P{constructor(t,e,s,a){o(this,"addedTransition");this.sourceStageId=t,this.targetStageId=e,this.transitionType=s,this.transitionId=a,this.addedTransition=null}assertSourceStageExists(t){if(!t.stages.find(e=>e.id===this.sourceStageId))throw new Error(`Stage ${this.sourceStageId} not found`)}assertTargetStageExists(t){if(!t.stages.find(e=>e.id===this.targetStageId))throw new Error(`Stage ${this.targetStageId} not found`)}assertTransitionDoesNotExist(t){if(t.transitions.find(e=>e.id===this.transitionId))throw new Error(`Transition ${this.transitionId} already exists`)}assertNotSelfTransition(){if(this.sourceStageId===this.targetStageId)throw new Error("Self transitions are not allowed")}assertNoDuplicatedTransitionStages(t){if(t.transitions.find(e=>e.sourceStageId===this.sourceStageId&&e.targetStageId===this.targetStageId))throw _.error({message:"Invalid transition",description:"Transition already exists"}),new Error("Transition already exists")}assertValidTransitionType(t){const e=t.stages.find(r=>r.id===this.sourceStageId);if(!S.stages.find(r=>r.typeName===e.type).transitions.map(r=>r.typeName).includes(this.transitionType))throw new Error(`Invalid transition type ${this.transitionType}`)}assertNotStartingOnlyTargetStage(t){const e=t.stages.find(a=>a.id===this.targetStageId);if(S.stages.find(a=>a.typeName===e.type).startingOnly)throw _.error({message:"Invalid transition",description:"Cannot transition to starting-only stage"}),new Error("Cannot transition to starting-only stage")}assertNoStageWithSameId(t){if(t.stages.find(e=>e.id===this.transitionId))throw new Error(`Stage with id ${this.transitionId} already exists`)}apply(t){var e;return this.assertSourceStageExists(t),this.assertTargetStageExists(t),this.assertTransitionDoesNotExist(t),this.assertNotSelfTransition(),this.assertNoDuplicatedTransitionStages(t),this.assertValidTransitionType(t),this.assertNotStartingOnlyTargetStage(t),this.assertNoStageWithSameId(t),this.addedTransition={id:(e=this.transitionId)!=null?e:c(),sourceStageId:this.sourceStageId,targetStageId:this.targetStageId,type:this.transitionType,props:{conditionValue:null}},{stages:t.stages,transitions:[...t.transitions,this.addedTransition]}}reverse(){if(!this.addedTransition)throw new Error("Cannot reverse change that was not applied");return new Q(this.addedTransition.id)}}class F{constructor(t){o(this,"transitionId");this.transitionId=t}assertValidTransitionType(t){const e=t.transitions.find(i=>i.id===this.transitionId),s=t.stages.find(i=>i.id===e.targetStageId);if(!S.stages.find(i=>i.typeName===s.type).transitions.map(i=>i.typeName).includes(e.type))throw new Error(`Invalid transition type ${e.type}`)}apply(t){if(this.assertValidTransitionType(t),!t.transitions.find(s=>s.id===this.transitionId))throw new Error(`Transition ${this.transitionId} not found`);return{stages:t.stages,transitions:t.transitions.map(s=>s.id===this.transitionId?{...s,sourceStageId:s.targetStageId,targetStageId:s.sourceStageId}:s)}}reverse(){return new F(this.transitionId)}}class jt extends v{constructor(t){super(t.map(e=>new P(e.sourceStageId,e.targetStageId,e.type,e.id)))}}class A{constructor(t){o(this,"oldPositions");this.newPositions=t,this.oldPositions=null}assertStagesExists(t){this.newPositions.forEach(({id:e})=>{if(!t.stages.find(s=>s.id===e))throw new Error(`Stage ${e} not found`)})}assertIsNumber(){this.newPositions.forEach(({position:t})=>{if(Number.isNaN(t.x)||Number.isNaN(t.y)||!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Position must be a number")})}apply(t){return this.assertIsNumber(),this.assertStagesExists(t),this.oldPositions=t.stages.map(s=>({id:s.id,position:s.position})),{stages:t.stages.map(s=>{var r,i;const a=(i=(r=this.newPositions.find(u=>u.id===s.id))==null?void 0:r.position)!=null?i:s.position;return{...s,position:{x:a.x,y:a.y}}}),transitions:t.transitions}}reverse(){if(!this.oldPositions)throw new Error("Cannot reverse change that was not applied");return new A(this.oldPositions)}}class W{constructor(t,e){o(this,"stageId");o(this,"newTitle");o(this,"oldTitle");this.stageId=t,this.newTitle=e,this.oldTitle=""}assertStageExists(t){if(!t.stages.find(e=>e.id===this.stageId))throw new Error(`Stage ${this.stageId} not found`)}apply(t){return this.assertStageExists(t),this.oldTitle=t.stages.find(e=>e.id===this.stageId).title,{stages:t.stages.map(e=>e.id===this.stageId?{...e,title:this.newTitle}:e),transitions:t.transitions}}reverse(){return new W(this.stageId,this.oldTitle)}}class M{constructor(t,e){o(this,"stageId");o(this,"newType");o(this,"oldType");this.stageId=t,this.newType=e,this.oldType="forms"}assertStageExists(t){if(!t.stages.find(e=>e.id===this.stageId))throw new Error(`Stage ${this.stageId} not found`)}assertValidStageType(){if(!S.stages.find(t=>t.typeName===this.newType))throw new Error(`Invalid stage type ${this.newType}`)}makePath(){switch(this.newType){case"forms":return`new_form_${c()}`;case"hooks":return`new_hook_${c()}`;default:return null}}makeFilename(){switch(this.newType){case"forms":return`new_form_${c()}`;case"hooks":return`new_hook_${c()}`;case"jobs":return`new_job_${c()}`;case"scripts":return`new_script_${c()}`;default:return null}}makeVariableName(){switch(this.newType){case"conditions":return"my_condition";case"iterators":return"my_list";default:return null}}apply(t){return this.assertStageExists(t),this.assertValidStageType(),this.oldType=t.stages.find(e=>e.id===this.stageId).type,{stages:t.stages.map(e=>e.id===this.stageId?{...e,type:this.newType,props:{path:this.makePath(),filename:this.makeFilename(),variableName:this.makeVariableName()}}:e),transitions:t.transitions}}reverse(){return new M(this.stageId,this.oldType)}}class B{constructor(t,e){o(this,"stageId");o(this,"newProps");o(this,"oldProps");this.stageId=t,this.newProps=e,this.oldProps={path:null,filename:null,variableName:null}}assertStageExists(t){if(!t.stages.find(e=>e.id===this.stageId))throw new Error(`Stage ${this.stageId} not found`)}assertValidVariableName(){if(!this.newProps.variableName)return;const t=this.newProps.variableName,e=bt(t);if(!e.valid){_.error({message:"Invalid variable name",description:e.reason});return}this.newProps.variableName=Et(t)}assertValidPath(){if(!this.newProps.path)return;const t=Nt(this.newProps.path);if(!t.valid){_.error({message:"Invalid path",description:t.reason});return}this.newProps.path=xt(this.newProps.path)}assertValidFilename(){if(!this.newProps.filename)return;const t=Pt(this.newProps.filename);if(!t.valid){_.error({message:"Invalid filename",description:t.reason});return}this.newProps.filename=Ct(this.newProps.filename)}apply(t){return this.assertStageExists(t),this.assertValidVariableName(),this.assertValidPath(),this.assertValidFilename(),this.oldProps=t.stages.find(e=>e.id===this.stageId).props,{stages:t.stages.map(e=>e.id===this.stageId?{...e,props:this.newProps}:e),transitions:t.transitions}}reverse(){return new B(this.stageId,this.oldProps)}}class j{constructor(t,e){o(this,"newType");o(this,"transitionId");this.newType=e,this.transitionId=t}apply(t){return{transitions:t.transitions.map(e=>e.id===this.transitionId?{...e,type:this.newType}:e),stages:t.stages}}reverse(){return new j(this.transitionId,this.newType)}}class R{constructor(t,e){o(this,"newProps");o(this,"transitionId");this.newProps=e,this.transitionId=t}apply(t){return{transitions:t.transitions.map(e=>e.id===this.transitionId?{...e,props:this.newProps}:e),stages:t.stages}}reverse(){return new R(this.transitionId,this.newProps)}}class Rt{constructor(t){o(this,"change");this.duplicatedStages=t,this.change=null}assertStagesExists(t){this.duplicatedStages.forEach(e=>{if(!t.stages.find(s=>s.id===e.id))throw new Error(`Stage ${e.id} not found`)})}apply(t){this.assertStagesExists(t);const e=this.duplicatedStages.map(c),s=this.duplicatedStages.map((i,u)=>new V(i.type,`${i.title} - Copy`,{x:i.position.x,y:i.position.y},e[u])),r=t.transitions.filter(i=>{const u=this.duplicatedStages.find(f=>f.id===i.sourceStageId),h=this.duplicatedStages.find(f=>f.id===i.targetStageId);return u&&h}).map(i=>{const u=e[this.duplicatedStages.findIndex(f=>f.id===i.sourceStageId)],h=e[this.duplicatedStages.findIndex(f=>f.id===i.targetStageId)];return new P(u,h,i.type)});return this.change=new v([...s,...r]),this.change.apply(t)}reverse(){if(!this.change)throw new Error("Cannot reverse change that was not applied");return this.change.reverse()}}class zt extends v{constructor(t,e){super([...e.map(s=>new Q(s)),...t.map(s=>new G(s))])}}class z{constructor(t,e){o(this,"oldTransitionState");this.transitionId=t,this.newType=e,this.oldTransitionState=null}assertTransitionExists(t){if(!t.transitions.find(e=>e.id===this.transitionId))throw new Error(`Transition ${this.transitionId} not found`)}assertValidTransitionType(t){const e=t.transitions.find(i=>i.id===this.transitionId),s=t.stages.find(i=>i.id===e.sourceStageId);if(!S.stages.find(i=>i.typeName===s.type).transitions.map(i=>i.typeName).includes(this.newType))throw new Error(`Invalid transition type ${this.newType}`)}apply(t){this.assertTransitionExists(t),this.assertValidTransitionType(t);const e=t.transitions.find(s=>s.id===this.transitionId);return this.oldTransitionState=e,{stages:t.stages,transitions:t.transitions.map(s=>s.id===this.transitionId?{...s,type:this.newType}:s)}}reverse(){if(!this.oldTransitionState)throw new Error("Cannot reverse change that was not applied");return new z(this.transitionId,this.oldTransitionState.type)}}class Kt{constructor(t){o(this,"currentState");o(this,"serverState");o(this,"undoStack");o(this,"redoStack");this.undoStack=[],this.redoStack=[],this.currentState=q(Object.freeze(t)),this.serverState=q(Object.freeze(t))}apply(t){return this.currentState.value=t.apply(this.currentState.value),this.undoStack.push(t),this.redoStack=[],this.currentState.value}undo(){const t=this.undoStack.pop();if(t){const e=t.reverse();this.currentState.value=e.apply(this.currentState.value),this.redoStack.push(t)}return this.currentState.value}redo(){const t=this.redoStack.pop();return t&&(this.currentState.value=t.apply(this.currentState.value),this.undoStack.push(t)),this.currentState.value}getState(){return this.currentState.value}setServerState(t){this.serverState.value=t}getServerState(){return this.serverState.value}hasStageChanges(){return!N.exports.isEqual(this.currentState.value.stages,this.serverState.value.stages)}hasChanges(){const t={...this.currentState.value,stages:[...this.currentState.value.stages].sort((s,a)=>s.id.localeCompare(a.id)),transitions:[...this.currentState.value.transitions].sort((s,a)=>s.id.localeCompare(a.id))},e={...this.serverState.value,stages:[...this.serverState.value.stages].sort((s,a)=>s.id.localeCompare(a.id)),transitions:[...this.serverState.value.transitions].sort((s,a)=>s.id.localeCompare(a.id))};return!N.exports.isEqual(t,e)}stageHasChanges(t){const e=this.currentState.value.stages.find(a=>a.id===t),s=this.serverState.value.stages.find(a=>a.id===t);return!N.exports.isEqual(e,s)}}class K{constructor(t,e){o(this,"api");o(this,"history");this.api=t,this.history=new Kt(e)}static async create(){const t=new Mt,e=await t.load();return new K(t,e)}move(t){this.history.apply(new A(t))}revertTransition(t){this.history.apply(new F(t))}delete(t){const e=this.history.getState(),s=e.stages.filter(r=>t.includes(r.id)).map(r=>r.id),a=e.transitions.filter(r=>t.includes(r.id)).map(r=>r.id);this.history.apply(new zt(s,a))}addStages(t){return this.history.apply(new Bt(t.map(e=>{var s;return{...e,title:(s=e.title)!=null?s:`New ${e.type.slice(0,-1)}`}}))),this.history.getState().stages.slice(-t.length)}updateStageTitle(t,e){this.history.apply(new W(t,e))}updateStageType(t,e){this.history.apply(new M(t,e))}updateStageProps(t,e){this.history.apply(new B(t,e))}updateTransitionType(t,e){this.history.apply(new j(t,e))}updateTransitionProps(t,e){this.history.apply(new R(t,e))}duplicateStages(t){const e=this.history.getState(),s=this.history.apply(new Rt(t));return{stages:s.stages.filter(a=>!e.stages.find(r=>r.id===a.id)),transitions:s.transitions.filter(a=>!e.transitions.find(r=>r.id===a.id))}}ensureTransitionWithType(t){var i;const e=this.getStage(t.sourceStageId);if(!e)throw new Error(`Source stage ${t.sourceStageId} not found`);const s=e.type,a=S.stages.find(u=>u.typeName===s),r=a==null?void 0:a.transitions[0].typeName;if(!r)throw new Error(`No default transition type for ${s}`);return{sourceStageId:t.sourceStageId,targetStageId:t.targetStageId,type:(i=t.type)!=null?i:r}}addTransitions(t){this.history.apply(new jt(t.map(e=>this.ensureTransitionWithType(e))))}changeTransitionType(t,e){const s=new z(t,e);this.history.apply(s)}renameStage(t,e){const s=new D(t,e);this.history.apply(s)}async reload(){const t=await this.api.load();return this.history.setServerState(t),t}hasChanges(){return this.history.hasChanges()}stageHasChanges(t){return this.history.stageHasChanges(t)}async hasBackendChanges(){const t=await this.api.load(),e=this.history.getServerState(),s={...e,stages:[...e.stages].sort((r,i)=>r.id.localeCompare(i.id)),transitions:[...e.transitions].sort((r,i)=>r.id.localeCompare(i.id))},a={...t,stages:[...t.stages].sort((r,i)=>r.id.localeCompare(i.id)),transitions:[...t.transitions].sort((r,i)=>r.id.localeCompare(i.id))};return!N.exports.isEqual(a,s)}async save(){if(this.history.hasChanges()){const t=await this.api.update(this.history.getState());this.history.setServerState(t)}}async forceSave(){const t=await this.api.update(this.history.getState());this.history.setServerState(t)}getStage(t){var e;return(e=this.history.getState().stages.find(s=>s.id===t))!=null?e:null}getTransition(t){var e;return(e=this.history.getState().transitions.find(s=>s.id===t))!=null?e:null}getState(){return this.history.getState()}}const X=d=>(mt("data-v-e9c7c43a"),d=d(),St(),d),Ht={class:"workflow"},Ot={class:"title"},qt={href:"/_editor/settings/style"},Lt=X(()=>x("span",null,"Editor",-1)),Ut={key:1},Yt=X(()=>x("span",null,"Kanban",-1)),Jt={key:1},Gt=rt({__name:"Workflow",setup(d){const t=nt(),e=ot();function s(){t.push({name:"home"})}const a=C(()=>{switch(e.name){case"workflowEditor":return"editor";case"workflowKanban":return"kanban";default:return}});function r(g){switch(g){case"editor":t.push({name:"workflowEditor"});break;case"kanban":t.push({name:"workflowKanban"});break}}const i=C(()=>{var g;return(g=h.value)==null?void 0:g.workspace.makeRunnerData().logoUrl}),u=C(()=>{var g;return(g=h.value)==null?void 0:g.workspace.makeRunnerData().brandName}),{result:h,loading:f}=$t(()=>Promise.all([Tt.get(),K.create()]).then(([g,O])=>({workspace:g,workflow:O}))),Z=async()=>{if(!h.value)return;await h.value.workflow.hasBackendChanges()&&(b.value=!0)},b=dt(!1);let H;lt(()=>{H=setInterval(Z,1e3)}),ht(()=>{clearInterval(H)});const tt=async()=>{!h.value||await Vt("The changes you made externally will be lost. Do you want to continue?",{okText:"Yes",cancelText:"Cancel"})&&(await h.value.workflow.forceSave(),b.value=!1)},et=()=>{window.location.reload()};return(g,O)=>{const st=pt("router-view");return w(),$("div",Ht,[p(n(Ft),{style:{padding:"5px 25px"},onBack:s},{extra:l(()=>{var E;return[p(kt,{"editing-model":(E=n(h))==null?void 0:E.workflow,"show-v-s-code-button":"","show-save-button":""},null,8,["editing-model"])]}),avatar:l(()=>[i.value?(w(),y(n(Dt),{key:0,src:i.value},null,8,["src"])):T("",!0),x("span",Ot,[p(n(I),null,{default:l(()=>[m(ct(u.value||"New Workflow"),1)]),_:1}),x("a",qt,[p(ut,{path:n(It),class:"edit-icon"},null,8,["path"])])])]),footer:l(()=>[n(h)?(w(),y(n(At),{key:0,"active-key":a.value,onChange:r},{default:l(()=>[p(n(J),{key:"editor"},{tab:l(()=>[b.value?(w(),y(n(L),{key:0,placement:"bottomLeft",visible:b.value},{title:l(()=>[p(n(k),null,{default:l(()=>[p(n(I),null,{default:l(()=>[m("You have changes in your workspace")]),_:1})]),_:1})]),content:l(()=>[p(n(k),{vertical:"",gap:"small"},{default:l(()=>[p(n(I),null,{default:l(()=>[m(" Refresh the page to see the latest changes ")]),_:1}),p(n(k),{justify:"space-between"},{default:l(()=>[p(n(U),{onClick:et},{default:l(()=>[m("Refresh page")]),_:1}),p(n(U),{onClick:tt},{default:l(()=>[m("Keep this version")]),_:1})]),_:1})]),_:1})]),default:l(()=>[Lt]),_:1},8,["visible"])):(w(),$("span",Ut,"Editor"))]),_:1}),p(n(J),{key:"kanban",disabled:n(h).workflow.hasChanges()},{tab:l(()=>[a.value!=="kanban"&&n(h).workflow.hasChanges()?(w(),y(n(L),{key:0,placement:"bottomLeft"},{title:l(()=>[p(n(k),null,{default:l(()=>[p(n(I),null,{default:l(()=>[m("You have unsaved changes")]),_:1})]),_:1})]),content:l(()=>[p(n(k),{vertical:"",gap:"small"},{default:l(()=>[p(n(I),null,{default:l(()=>[m(" Save them before switching to Kanban ")]),_:1}),n(h).workflow?(w(),y(_t,{key:0,model:n(h).workflow,"never-show-popover":!0},null,8,["model"])):T("",!0)]),_:1})]),default:l(()=>[Yt]),_:1})):(w(),$("span",Jt,"Kanban"))]),_:1},8,["disabled"])]),_:1},8,["active-key"])):T("",!0)]),_:1}),n(f)?(w(),y(n(gt),{key:0})):T("",!0),p(st,null,{default:l(({Component:E})=>[n(h)?(w(),y(yt(E),wt(ft({key:0},{workflowModel:n(h).workflow,workspaceModel:n(h).workspace})),null,16)):T("",!0)]),_:1})])}}});const xe=vt(Gt,[["__scopeId","data-v-e9c7c43a"]]);export{xe as default};
//# sourceMappingURL=Workflow.468eb0f0.js.map
