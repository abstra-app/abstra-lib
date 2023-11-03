var qe=Object.defineProperty;var Qe=(c,e,t)=>e in c?qe(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var f=(c,e,t)=>(Qe(c,typeof e!="symbol"?e+"":e,t),t);import{F as je}from"./forms.ee974765.js";import{r as j,F as C,eF as et,cC as tt,eE as H,d as V,b as y,c as x,w as h,f as p,u,bV as st,e as k,aI as g,eB as L,cP as ot,v as He,H as W,ey as it,o as nt,et as Me,bf as rt,eA as at,ev as b,I as De,cE as ct}from"./outputWidgets.9a4dffd5.js";import{W as lt}from"./workspaces.9b724498.js";import{D as Ke,f as Ve,j as We,h as $e,E as dt,F as ut,a as ht,k as pt,e as mt}from"./icons.d935dec9.js";import{a as ft,_ as yt}from"./FormTester.vue_vue_type_script_setup_true_lang.45105988.js";import{d as I,r as O,t as F,e as wt,i as Be,f as xt,g as St,h as U,j as Te,p as vt,k as bt}from"./geometryUtils.48dd14b8.js";import{a as Le,s as Ce,c as Oe,m as Re}from"./keyboard.42befd16.js";import{P as Je}from"./pubsub.25596209.js";import{a as Nt,t as _t}from"./ant-design.edc4db28.js";import{H as kt}from"./hooks.350ac392.js";import{J as Ue}from"./jobs.9fc486b1.js";import{L as gt,a as It,R as Et,S as Pt}from"./SmartConsole.2f597edf.js";import{z as N}from"./index.f4ac7424.js";import{u as Mt,r as $}from"./uuid.649f8e0e.js";import{M as Dt,A as Tt}from"./Title.72e90637.js";import{a as Ye}from"./asyncComputed.947a021a.js";import{_ as Lt}from"./LaunchButton.vue_vue_type_script_setup_true_lang.543f087f.js";import{_ as Ct}from"./DocsButton.vue_vue_type_script_setup_true_lang.b0c540d5.js";import{_ as Ot}from"./SaveButton.vue_vue_type_script_setup_true_lang.9f93be5c.js";import{a as Rt,_ as At}from"./HookSettings.vue_vue_type_script_setup_true_lang.822dd6b3.js";import{a as Gt,_ as Ft}from"./JobSettings.vue_vue_type_script_setup_true_lang.0d37b3de.js";import{F as zt}from"./Form.0ea0ca53.js";import{A as jt}from"./index.c64df437.js";import{S as Ht}from"./StageRunSelector.vue_vue_type_script_setup_true_lang.08b0df03.js";import{a as P}from"./index.0d204717.js";import{a as Ae,A as Kt}from"./index.12ef5947.js";import{A as Vt}from"./index.c4327f7e.js";import{L as Wt}from"./LoginBlock.b3abff14.js";import{A as $t,c as Ge}from"./index.c2be78ce.js";import{A as Bt}from"./index.f6ddbc51.js";import{A as Jt}from"./index.0e22fd42.js";import{A as B,T as Ut}from"./TabPane.aa41b762.js";import"./activeRecord.6b2e89dc.js";import"./url.152c5826.js";import"./FormRunner.aa8ba382.js";import"./index.7e030f20.js";import"./executeJs.002cd519.js";import"./runnerData.8cacc2f4.js";import"./CircularLoading.e0f97658.js";import"./PlayerNavbar.ff252022.js";import"./index.a351ac5c.js";import"./Steps.a733e7f2.js";import"./WidgetsFrame.6bff1f4e.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.fa882ec7.js";import"./index.9be836f3.js";import"./CollapsePanel.a49bdae4.js";import"./index.3ecad98a.js";import"./dashes.8f97fb72.js";import"./index.d0b58c73.js";import"./RunButton.vue_vue_type_script_setup_true_lang.95e06f26.js";import"./index.5f8ac887.js";import"./index.5ac52d51.js";import"./dayjs.66de0854.js";import"./popupNotifcation.5e27ab9c.js";import"./index.6e7863cf.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[e]="a8e38ed8-31cf-4162-8e02-22451f362b9f",c._sentryDebugIdIdentifier="sentry-dbid-a8e38ed8-31cf-4162-8e02-22451f362b9f")}catch{}})();const K={left:100,right:100,top:100,bottom:100},Fe={width:600,height:600};class Y{constructor(e){f(this,"_state");f(this,"projectedElement");this._state=j({x:0,y:0,zoom:1}),this.projectedElement=e}get x(){return this._state.value.x}set x(e){if(Number.isNaN(e))throw new Error("x is NaN");this._state.value.x=e}get y(){return this._state.value.y}set y(e){if(Number.isNaN(e))throw new Error("y is NaN");this._state.value.y=e}static create(e){return new Y(e)}get zoom(){return this._state.value.zoom}set zoom(e){if(e<=0)throw new Error("Zoom must be positive");this._state.value.zoom=e}fit(e){const t={x:e.x+e.width/2,y:e.y+e.height/2,referential:"world"},s=this.screenRect2world(this.canvasRect);this.x=t.x-s.width/2,this.y=t.y-s.height/2,this.zoomIn(Math.min((this.canvasRect.width-K.left-K.right)/Math.max(Fe.width,e.width),(this.canvasRect.height-K.top-K.bottom)/Math.max(Fe.height,e.height))/this.zoom,this.worldPoint2screen(t))}screenPoint2world(e){return{x:e.x/this.zoom+this.x,y:e.y/this.zoom+this.y,referential:"world"}}worldPoint2screen(e){return{x:(e.x-this.x)*this.zoom,y:(e.y-this.y)*this.zoom,referential:"screen"}}screenDelta2world(e){return{dx:e.dx/this.zoom,dy:e.dy/this.zoom,referential:"world"}}worldDelta2screen(e){return{dx:e.dx*this.zoom,dy:e.dy*this.zoom,referential:"screen"}}screenRect2world(e){const t=this.screenPoint2world({x:e.x,y:e.y,referential:e.referential}),s=this.screenPoint2world({x:e.x+e.width,y:e.y+e.height,referential:e.referential});return{x:t.x,y:t.y,width:s.x-t.x,height:s.y-t.y,referential:t.referential}}worldRect2screen(e){const t=this.worldPoint2screen({x:e.x,y:e.y,referential:e.referential}),s=this.worldPoint2screen({x:e.x+e.width,y:e.y+e.height,referential:e.referential});return{x:t.x,y:t.y,width:s.x-t.x,height:s.y-t.y,referential:t.referential}}zoomIn(e,t){const s=this.screenPoint2world(t);this.zoom*=e;const o=this.worldPoint2screen(s),i=I(t,o),n=this.screenDelta2world({dx:i.dx,dy:i.dy,referential:"screen"});this.x+=n.dx,this.y+=n.dy}translate(e){this.x+=e.dx,this.y+=e.dy}get canvasRect(){if(!this.projectedElement)throw new Error("No canvas element");const e=this.projectedElement.getBoundingClientRect();return{x:e.x,y:e.y,width:e.width,height:e.height,referential:"screen"}}}const Yt="#e55b70";class X{constructor(){}static create(){return new X}render(e){const t=O(e.selectedNodes.map(s=>s.projectedRect(e)));!t||(e.ctx.strokeStyle=Yt,e.ctx.lineWidth=2,e.ctx.strokeRect(t.x,t.y,t.width,t.height))}}class Z{constructor(e){f(this,"_nodes");f(this,"_links");f(this,"_selectedNodes");f(this,"_selectedLinks");f(this,"_mouseState");f(this,"floatingMenu");f(this,"selectionHull");f(this,"pubsub");f(this,"canvas");f(this,"ctx");f(this,"camera");this.canvas=e,this.camera=Y.create(e),this._mouseState=C({state:"IDLE",mousePos:{x:0,y:0,referential:"screen"}}),this.pubsub=new Je,this.floatingMenu=null;const t=e.getContext("2d");if(!t)throw new Error("Unable to get canvas context");this.ctx=t,this._nodes=C([]),this._links=C([]),this._selectedNodes=C([]),this._selectedLinks=C([]),this.selectionHull=X.create()}static create(e){return new Z(e)}addTransition(){this.mouseState={state:"LINKING",mousePos:this.mouseState.mousePos,initialMousePos:this.mouseState.mousePos,snappedTarget:null}}duplicateSelection(){const e=this.selectedNodes,t=this.selectedNodes.map(n=>n.clone()),s=this.links.filter(n=>{const d=this.nodes.find(l=>l.id===n.sourceNodeId),a=this.nodes.find(l=>l.id===n.targetNodeId);if(!d||!a)throw new Error("Invalid state");return this.selectedNodes.includes(d)&&this.selectedNodes.includes(a)}).map(n=>{const d=this.nodes.find(S=>S.id===n.sourceNodeId),a=this.nodes.find(S=>S.id===n.targetNodeId);if(!d||!a)throw new Error("Invalid state");const l=this.selectedNodes.indexOf(d),r=t[l],E=this.selectedNodes.indexOf(a),w=t[E];return n.clone(r.id,w.id)});this.nodes.push(...t),this.links.push(...s),this.selectedNodes=t;const o=O(t.map(n=>n.projectedRect(this)));if(!o)throw new Error("Invalid state");const i={x:o.x+o.width/2,y:o.y+o.height/2,referential:"screen"};this.pubsub.publish("nodes:duplicated",et.exports.zip(e,t).map(([n,d])=>({original:n,duplicate:d}))),this.mouseState={state:"MOVING",duplicating:!1,initialMousePos:i,mousePos:this.mouseState.mousePos}}async deleteSelection(){if(await Nt("Are you sure? This operation can't be undone")){const e={nodes:this.selectedNodes,links:this.selectedLinks};this.selectedNodes.forEach(t=>this.deleteNode(t)),this.selectedLinks.forEach(t=>this.deleteLink(t)),this.pubsub.publish("deleted",e)}}setupFixSize(){const e=()=>{const{width:t,height:s}=this.canvas.getBoundingClientRect();this.canvas.width=t*devicePixelRatio,this.canvas.height=s*devicePixelRatio,this.ctx.scale(devicePixelRatio,devicePixelRatio)};addEventListener("resize",e),e()}computeCursor(){switch(this.mouseState.state){case"HOVERING_NODE":case"HOVERING_MENU_ITEM":case"HOVERING_LINK":this.canvas.style.cursor="pointer";break;case"JUST_CLICKED_NODE":this.canvas.style.cursor="default";break;case"MOVING":this.canvas.style.cursor="move";break;case"PANNING":this.canvas.style.cursor="grabbing";break;case"LINKING":this.canvas.style.cursor="crosshair";break;case"IDLE":default:this.canvas.style.cursor="grab"}}computePan(e){if(this.mouseState.state!=="PANNING")throw new Error("Invalid state");const t=I(e,this.mouseState.mousePos),s=this.camera.screenDelta2world(t);this.camera.translate(s),this.mouseState={state:"PANNING",initialMousePos:this.mouseState.initialMousePos,mousePos:e}}computeStartMoving(e,t){if(this.mouseState.state!=="JUST_CLICKED_NODE")throw new Error("Invalid state");this.mouseState={state:"MOVING",duplicating:t,initialMousePos:this.mouseState.mousePos,mousePos:e}}get mouseState(){return this._mouseState.value}set mouseState(e){this._mouseState.value=e}get nodes(){return this._nodes.value}set nodes(e){this._nodes.value=e}get links(){return this._links.value}set links(e){this._links.value=e}get selectedNodes(){return this._selectedNodes.value}set selectedNodes(e){this._selectedNodes.value=e}get selectedLinks(){return this._selectedLinks.value}set selectedLinks(e){this._selectedLinks.value=e}computeKeepMoving(e,t){if(this.mouseState.state!=="MOVING")throw new Error("Invalid state");this.mouseState={state:"MOVING",duplicating:t,initialMousePos:this.mouseState.initialMousePos,mousePos:e}}computeKeepLinking(e){if(this.mouseState.state!=="LINKING")throw new Error("Invalid state");const t=this.nodes.find(s=>s.isHovering(this,e));t?this.mouseState={state:"LINKING",initialMousePos:this.mouseState.initialMousePos,mousePos:e,snappedTarget:t}:this.mouseState={state:"LINKING",initialMousePos:this.mouseState.initialMousePos,mousePos:e,snappedTarget:null}}computeHover(e){var i;const t=(i=this.floatingMenu)==null?void 0:i.hoverItem(this,e);if(t){this.mouseState={state:"HOVERING_MENU_ITEM",mousePos:e,menuItem:t};return}const s=this.links.find(n=>n.isHovering(this,e));if(s){this.mouseState={state:"HOVERING_LINK",link:s,mousePos:e};return}const o=this.nodes.find(n=>n.isHovering(this,e));if(o){this.mouseState={state:"HOVERING_NODE",node:o,mousePos:e};return}this.mouseState={state:"IDLE",mousePos:e}}fitCameraToContent(){const e=O(this.nodes.map(t=>t.projectedRect(this)));!e||this.camera.fit(this.camera.screenRect2world(e))}computeFinishMoving(){if(this.mouseState.state!=="MOVING")throw new Error("Invalid state");const e=this.camera.screenPoint2world(this.mouseState.initialMousePos),t=this.camera.screenPoint2world(this.mouseState.mousePos),s=I(e,t);this.pubsub.publish("nodes:moved",this.selectedNodes.map(o=>{const i=o.position;o.translate(s);const n=o.position;return{node:o,from:i,to:n}}))}computeFinishDuplicating(){if(this.mouseState.state!=="MOVING"||!this.mouseState.duplicating)throw new Error("Invalid state");const e=this.camera.screenPoint2world(this.mouseState.initialMousePos),t=this.camera.screenPoint2world(this.mouseState.mousePos),s=I(e,t);this.pubsub.publish("nodes:duplicated",this.selectedNodes.map(o=>{const i=o.clone();return i.translate(s),this.nodes.push(i),{original:o,duplicate:i}})),this.selectedNodes=this.selectedNodes.map(o=>{const i=o.clone();return i.translate(s),i})}computeFinishLinking(e){if(this.mouseState.state!=="LINKING"||!this.mouseState.snappedTarget)throw new Error("Invalid state");const t=this.mouseState.snappedTarget,s=this.selectedNodes.map(o=>o.addLinkTo(this,t));this.pubsub.publish("transition:added",{links:s}),this.selectedNodes=[this.mouseState.snappedTarget],this.mouseState={state:"IDLE",mousePos:e}}computeMouseRelease(e){this.mouseState.state==="MOVING"&&!this.mouseState.duplicating?this.computeFinishMoving():this.mouseState.state==="MOVING"&&this.mouseState.duplicating?this.computeFinishDuplicating():this.mouseState.state==="LINKING"&&this.mouseState.snappedTarget&&this.computeFinishLinking(e),this.mouseState={state:"IDLE",mousePos:e}}setupMousemove(){const e=t=>{const s=this.getScreenPointerFromEvent(t);this.mouseState.state==="PANNING"?this.computePan(s):this.mouseState.state==="JUST_CLICKED_NODE"?this.computeStartMoving(s,Le(t)):this.mouseState.state==="MOVING"?this.computeKeepMoving(s,Le(t)):this.mouseState.state==="LINKING"?this.computeKeepLinking(s):this.mouseState.state==="ADDING_NEW_NODES"?this.computeKeepAdding(s):this.computeHover(s),this.computeCursor()};addEventListener("mousemove",e)}computeKeepAdding(e){if(this.mouseState.state!=="ADDING_NEW_NODES")throw new Error("Invalid state");this.mouseState.nodes.forEach(t=>t.position=this.camera.screenPoint2world(t.projectedCenter(this))),this.mouseState={state:"ADDING_NEW_NODES",mousePos:e,nodes:this.mouseState.nodes}}setupDragover(){const e=t=>{if(t.preventDefault(),this.mouseState.state!=="ADDING_NEW_NODES")return;const s=this.getScreenPointerFromEvent(t);this.computeKeepAdding(s)};this.canvas.addEventListener("dragover",e)}computeFinishAdding(e){if(this.mouseState.state!=="ADDING_NEW_NODES")return;this.computeKeepAdding(e),this.nodes.push(...this.mouseState.nodes),this.selectedNodes=this.mouseState.nodes;const t=O(this.mouseState.nodes.map(d=>d.projectedRect(this)));if(!t)throw new Error("Invalid state");const s={x:t.x+t.width/2,y:t.y+t.height/2,referential:"screen"},o=this.camera.screenPoint2world(s),i=this.camera.screenPoint2world(e),n=I(o,i);this.mouseState.nodes.forEach(d=>d.translate(n)),this.mouseState={state:"IDLE",mousePos:e},this.pubsub.publish("nodes:added",{nodes:this.selectedNodes})}setupDrop(){const e=t=>{t.stopPropagation();const s=this.getScreenPointerFromEvent(t);this.computeFinishAdding(s)};this.canvas.addEventListener("drop",e)}getScreenPointerFromEvent(e){return{x:e.offsetX,y:e.offsetY,referential:"screen"}}computeStartClicking(e,t){if(this.mouseState.state==="ADDING_NEW_NODES")this.computeFinishAdding(e);else if(this.mouseState.state==="HOVERING_LINK"){const s=this.mouseState.link;t?this.selectedLinks=[...this.selectedLinks,s]:this.selectedLinks.includes(s)||(this.selectedLinks=[s],this.selectedNodes=[]),this.mouseState={state:"JUST_CLICKED_NODE",mousePos:e,node:this.nodes.find(o=>o.id===s.sourceNodeId)}}else if(this.mouseState.state==="HOVERING_NODE"){const s=this.mouseState.node;t?this.selectedNodes=[...this.selectedNodes,s]:this.selectedNodes.includes(s)||(this.selectedNodes=[s],this.selectedLinks=[]),this.mouseState={state:"JUST_CLICKED_NODE",mousePos:e,node:s}}else this.mouseState.state==="HOVERING_MENU_ITEM"?this.mouseState.menuItem.click():this.mouseState.state==="LINKING"?this.computeFinishLinking(e):(this.clearSelection(),this.mouseState={state:"PANNING",initialMousePos:e,mousePos:e})}setupDoubleClick(){const e=()=>{if(this.mouseState.state!=="HOVERING_NODE")return;const t=this.mouseState.node;this.pubsub.publish("node:dblclick",{node:t})};this.canvas.addEventListener("dblclick",e)}setupMousedown(){const e=t=>{const s=this.getScreenPointerFromEvent(t);this.computeStartClicking(s,Ce(t))};this.canvas.addEventListener("mousedown",e)}setupMouseup(){const e=t=>{const s=this.getScreenPointerFromEvent(t);this.computeMouseRelease(s),this.computeHover(s),this.computeCursor()};this.canvas.addEventListener("mouseup",e)}computeZoomIn(e,t){this.camera.zoomIn(t,e)}setupWheel(){const e=t=>{if(!this.camera)return;const s={x:t.pageX,y:t.pageY,referential:"screen"};if(Oe(t)||Re(t))this.computeZoomIn(s,t.deltaY>0?.9:1.1),t.preventDefault();else{const o=Ce(t)?{dx:t.deltaY,dy:0}:{dx:t.deltaX,dy:t.deltaY},i=this.camera.screenDelta2world({dx:o.dx,dy:o.dy,referential:"screen"});this.camera.translate(i)}t.stopPropagation()};this.canvas.addEventListener("wheel",e)}deleteNode(e){this.nodes=this.nodes.filter(t=>t!==e),this.links=this.links.filter(t=>t.sourceNodeId!==e.id&&t.targetNodeId!==e.id),this.selectedNodes=this.selectedNodes.filter(t=>t!==e)}deleteLink(e){this.links=this.links.filter(t=>t!==e),this.selectedLinks=[]}setupKeydown(){const e=t=>{t.key==="Delete"||t.key==="Backspace"?this.deleteSelection():t.key==="a"&&(Oe(t)||Re(t))?(this.selectedNodes=this.nodes,t.preventDefault()):t.key==="Escape"?(this.clearSelection(),this.mouseState={state:"IDLE",mousePos:this.mouseState.mousePos}):t.key==="t"?this.addTransition():t.key==="Enter"&&this.pubsub.publish("node:dblclick",{node:this.selectedNodes[0]})};this.canvas.parentElement.addEventListener("keydown",e)}renderMouseState(){switch(this.mouseState.state){case"ADDING_NEW_NODES":this.mouseState.nodes.forEach(e=>e.render(this));break}}setFloatingMenu(e){this.floatingMenu=e}render(){var e;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.links.forEach(t=>{t.render(this)}),this.nodes.forEach(t=>{t.render(this)}),(e=this.floatingMenu)==null||e.render(this),this.selectionHull.render(this),this.renderMouseState(),requestAnimationFrame(()=>this.render())}init(){this.setupFixSize(),this.setupMousemove(),this.setupDragover(),this.setupDoubleClick(),this.setupMousedown(),this.setupDrop(),this.setupMouseup(),this.setupWheel(),this.setupKeydown(),this.fitCameraToContent(),this.render()}clear(){this.nodes=[],this.links=[]}addNode(e){this.nodes.push(e)}addLink(e){this.links.push(e)}clearSelection(){this.selectedNodes=[],this.selectedLinks=[]}dragstart(e,t){const s=this.getScreenPointerFromEvent(t);this.clearSelection(),this.mouseState={state:"ADDING_NEW_NODES",mousePos:s,nodes:[e]}}}const Xt="rgba(0, 0, 0, 1)",Zt="rgba(0, 0, 0, 0.5)";class q{constructor(e){f(this,"rawItems");this.rawItems=e}static create(e){return new q(e)}getMenuItems(e){const t=e.selectedNodes,s=O(t.map(E=>E.projectedRect(e)));if(!s)return[];const o={x:s.x+s.width,y:s.y,referential:"screen"},i=10,n=16,d=10,a={dx:n+i,dy:n,referential:"screen"},l={dx:0,dy:2*n+d,referential:"screen"},r=F(o,a);return this.rawItems.map((E,w)=>{const S=F(r,wt(l,w));return{label:E.label,icon:E.icon,circle:{...S,radius:n},click:E.click}})}isVisible(e){return e.selectedNodes.length>0&&e.mouseState.state!=="LINKING"&&e.mouseState.state!=="MOVING"}itemHover(e,t){return e.mouseState.state==="HOVERING_MENU_ITEM"&&e.mouseState.menuItem.label===t.label}renderItem(e,t){const s=this.itemHover(e,t),o=s?Xt:Zt;if(e.ctx.strokeStyle=o,e.ctx.lineWidth=2,s){e.ctx.font="12px sans-serif";const d=e.ctx.measureText(t.label).width;e.ctx.beginPath(),e.ctx.arc(t.circle.x,t.circle.y,t.circle.radius,Math.PI/2,-Math.PI/2),e.ctx.lineTo(t.circle.x+d+t.circle.radius,t.circle.y-t.circle.radius),e.ctx.arc(t.circle.x+d+t.circle.radius,t.circle.y,t.circle.radius,-Math.PI/2,Math.PI/2),e.ctx.lineTo(t.circle.x,t.circle.y+t.circle.radius),e.ctx.fillStyle="white",e.ctx.fill(),e.ctx.stroke(),e.ctx.textBaseline="middle",e.ctx.textAlign="left",e.ctx.font="12px sans-serif",e.ctx.fillStyle=o,e.ctx.fillText(t.label,t.circle.x+t.circle.radius,t.circle.y)}else e.ctx.beginPath(),e.ctx.arc(t.circle.x,t.circle.y,t.circle.radius,0,2*Math.PI),e.ctx.fillStyle="white",e.ctx.fill(),e.ctx.stroke();const i=new Path2D(t.icon);e.ctx.save();const n=12;e.ctx.translate(t.circle.x-n,t.circle.y-n),e.ctx.fillStyle=o,e.ctx.fill(i),e.ctx.restore()}render(e){!this.isVisible(e)||this.getMenuItems(e).forEach(t=>{this.renderItem(e,t)})}hoverItem(e,t){if(!!this.isVisible(e))return this.getMenuItems(e).find(s=>{if(this.itemHover(e,s)){const o=e.ctx.measureText(s.label).width,i={x:s.circle.x-s.circle.radius,y:s.circle.y-s.circle.radius,width:o+3*s.circle.radius,height:2*s.circle.radius,referential:"screen"};return Be(t,i)}else return xt(t,s.circle)})}}const qt=N.object({id:N.string(),label:N.string().nullable(),targetPath:N.string(),targetType:N.enum(["forms","hooks","jobs","scripts"])}),Qt=N.object({type:N.enum(["forms","hooks","jobs","scripts"]),position:N.tuple([N.number(),N.number()]),label:N.string(),id:N.string(),transitions:N.array(qt)}),es=N.array(Qt),G={"Content-Type":"application/json"};class ts{constructor(){f(this,"pubsub");this.pubsub=new Je}async getInitialData(){const e=await fetch("/_editor/api/workflow-editor/initial-data");if(e.ok){const t=await e.json();return es.parse(t)}else throw this.pubsub.publish("error",{message:await e.text(),action:"getInitialData"}),new Error("Failed to fetch initial data")}async move(e){const t=await fetch("/_editor/api/workflow-editor/move",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"move"}),new Error("Failed to move nodes")}async delete(e){const t=await fetch("/_editor/api/workflow-editor/delete",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"delete"}),new Error("Failed to delete nodes")}async addNodes(e){const t=await fetch("/_editor/api/workflow-editor/add-nodes",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"addNodes"}),new Error("Failed to add nodes")}async duplicateNodes(e){const t=await fetch("/_editor/api/workflow-editor/duplicate-nodes",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"duplicateNodes"}),new Error("Failed to duplicate nodes")}async addTransition(e){const t=await fetch("/_editor/api/workflow-editor/add-transition",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"duplicateNodes"}),new Error("Failed to duplicate nodes")}}const T=new ts,ss="#ababab",os="#e55b70";function Xe(c,e,t){const s=e.projectedCenter(c);let o;if(t instanceof _){const n=t.projectedRect(c),d=U(n);o=Te(s,I(s,d),t.projectedRect(c))}else o=c.mouseState.mousePos;return{p1:Te(o,I(o,s),e.projectedRect(c)),p2:o}}function Ze(c,e,t,s=!1){const{p1:o,p2:i}=Xe(c,e,t),n=20,d=10;if(vt(o,i)<2*n)return;const a=Math.atan2(i.y-o.y,i.x-o.x);c.ctx.strokeStyle=s?os:ss,c.ctx.lineWidth=4,c.ctx.lineJoin="round",c.ctx.lineCap="round",c.ctx.beginPath(),c.ctx.moveTo(o.x+n*Math.cos(a),o.y+n*Math.sin(a)),c.ctx.lineTo(i.x-n*Math.cos(a),i.y-n*Math.sin(a)),c.ctx.moveTo(i.x-n*Math.cos(a)-d*Math.cos(a-Math.PI/6),i.y-n*Math.sin(a)-d*Math.sin(a-Math.PI/6)),c.ctx.lineTo(i.x-n*Math.cos(a),i.y-n*Math.sin(a)),c.ctx.lineTo(i.x-n*Math.cos(a)-d*Math.cos(a+Math.PI/6),i.y-n*Math.sin(a)-d*Math.sin(a+Math.PI/6)),c.ctx.stroke()}class R{constructor(e,t,s){f(this,"sourceType");f(this,"sourceId");f(this,"dto");if(!s.targetPath)throw new Error(`Link ${s.id} has no target`);this.sourceType=e,this.sourceId=t,this.dto=s}get sourceNodeId(){return this.sourceId}get sourceNodeType(){return this.sourceType}get targetNodeId(){return this.dto.targetPath}get targetNodeType(){return this.dto.targetType}get id(){return this.dto.id}clone(e,t){return new R(this.sourceType,e,{...this.dto,id:Mt(),targetPath:t})}isHovering(e,t){const s=e.nodes.find(n=>n.id===this.sourceNodeId),o=e.nodes.find(n=>n.id===this.targetNodeId);if(!s)throw new Error(`Source node ${this.sourceId} not found`);if(!o)throw new Error(`Target node ${this.targetNodeId} not found`);const i={radius:10,segment:Xe(e,s,o)};return St(t,i)}static from(e,t,s){return new R(e,t,s)}render(e){const t=e.nodes.find(i=>i.id===this.sourceNodeId),s=e.nodes.find(i=>i.id===this.targetNodeId);if(!t)throw new Error(`Source node ${this.sourceId} not found`);if(!s)throw new Error(`Target node ${this.targetNodeId} not found`);const o=e.selectedLinks.includes(this);Ze(e,t,s,o)}}const is="#5b5b5b",J=18;class _{constructor(e){f(this,"dto");this.dto=e}addLinkTo(e,t){const s=R.from(this.type,this.id,{id:$(),label:"",targetPath:t.id,targetType:t.type});return e.addLink(s),s}get id(){return this.dto.id}get type(){return this.dto.type}get title(){return this.dto.label}static from(e){return new _(e)}static new(e){return new _({type:e,id:$(),position:[0,0],label:`New ${e.slice(0,-1)}`,transitions:[]})}static async getSavedState(){const e=await T.getInitialData(),t=e.map(o=>_.from(o)),s=e.flatMap(o=>o.transitions.map(i=>R.from(o.type,o.id,i)));return{nodes:t,links:s}}get position(){return{x:this.dto.position[0],y:this.dto.position[1],referential:"world"}}set position(e){this.dto.position=[e.x,e.y]}projectedCenter(e){const t=e.camera.worldPoint2screen(this.position);if(e.mouseState.state==="MOVING"&&e.selectedNodes.includes(this))return F(t,I(e.mouseState.initialMousePos,e.mouseState.mousePos));if(e.mouseState.state==="ADDING_NEW_NODES"&&e.mouseState.nodes.includes(this)){const s=O(e.mouseState.nodes.map(i=>i.screenRect(e)));if(!s)throw new Error("No hull found");const o=U(s);return F(t,I(o,e.mouseState.mousePos))}else return t}get icon(){return{scripts:Ke,forms:Ve,jobs:We,hooks:$e}[this.dto.type]}screenRect(e){const t=e.camera.worldPoint2screen(this.position),o=this.getTextSize(e).width+50*e.camera.zoom,i=e.camera.zoom*(J+22);return{x:t.x-o/2,y:t.y-i/2,width:o,height:i,referential:"screen"}}projectedRect(e){const t=this.projectedCenter(e),o=this.getTextSize(e).width+50*e.camera.zoom,i=e.camera.zoom*(J+22);return{x:t.x-o/2,y:t.y-i/2,width:o,height:i,referential:"screen"}}renderIcon(e,t){e.ctx.fillStyle=is,e.ctx.save(),e.ctx.translate(t.x+8*e.camera.zoom,t.y+8*e.camera.zoom),e.ctx.scale(e.camera.zoom,e.camera.zoom),e.ctx.fill(new Path2D(this.icon)),e.ctx.restore()}setTextRenderingCtx(e){e.ctx.textAlign="left",e.ctx.textBaseline="middle",e.ctx.fillStyle="black";const t=(J*e.camera.zoom).toFixed(0);e.ctx.font=`${t}px sans-serif`}getTextSize(e){return this.setTextRenderingCtx(e),e.ctx.measureText(this.dto.label)}renderLabel(e,t){const s=U(t),o=t.x;this.setTextRenderingCtx(e),!(e.ctx.measureText(this.dto.label).width>t.width)&&e.ctx.fillText(this.dto.label,o+40*e.camera.zoom,s.y)}renderCard(e,t){e.ctx.save(),e.ctx.fillStyle="white",e.ctx.shadowBlur=15,e.ctx.shadowColor="rgba(0,0,0,0.1)",e.ctx.fillRect(t.x,t.y,t.width,t.height),e.ctx.restore(),e.ctx.strokeStyle="gray",this.renderIcon(e,t),this.renderLabel(e,t)}renderSelf(e){const t=this.projectedRect(e);this.renderCard(e,t)}renderDuplicating(e){if(e.mouseState.state==="MOVING"&&e.mouseState.duplicating&&e.selectedNodes.includes(this)){const t=this.projectedRect(e),s=I(e.mouseState.mousePos,e.mouseState.initialMousePos),o=bt(t,s);this.renderCard(e,o)}}renderLinking(e){var t;e.mouseState.state!=="LINKING"||!e.selectedNodes.includes(this)||Ze(e,this,(t=e.mouseState.snappedTarget)!=null?t:e.mouseState.mousePos)}render(e){this.renderLinking(e),this.renderSelf(e),this.renderDuplicating(e)}isHovering(e,t){return Be(t,this.projectedRect(e))}translate(e){const t=F(this.position,e);this.dto.position=[t.x,t.y]}clone(){return _.from({...this.dto,label:`${this.dto.label} (copy)`,id:$()})}}async function ze(c,e,t){const s=e.selectedNodes[0];if(s.type==="forms")c.inspector={runtimeType:"forms",model:H(await je.get(s.id)),inspectorMode:t};else if(s.type==="jobs")c.inspector={runtimeType:"jobs",model:H(await Ue.get(s.id)),inspectorMode:t};else if(s.type==="hooks")c.inspector={runtimeType:"hooks",model:H(await kt.get(s.id)),inspectorMode:t};else if(s.type==="scripts")c.inspector={runtimeType:"scripts",model:H(await It.get(s.id)),inspectorMode:t};else throw new Error(`Unknown type ${s.type}`)}class z{constructor(e){f(this,"canvasGui");f(this,"_inspector");f(this,"logService");this.canvasGui=e,window.__canvasGui=e,this._inspector=j(null),this.logService=gt.create()}static async init(e){const t=Z.create(e),s=new z(t),i=navigator.userAgent.indexOf("Mac OS X")?"Option":"Alt";t.pubsub.subscribe("node:dblclick",()=>{ze(s,t,"edit")});const n=q.create([{icon:dt,label:"Options (Double click/Enter)",click:async()=>{ze(s,t,"edit")}},{icon:ut,label:"Add transition (T)",click:()=>{t.addTransition()}},{icon:ht,label:`Duplicate (${i} + Drag)`,click:()=>{t.duplicateSelection()}},{icon:pt,label:"Delete (Delete/Backspace)",click:()=>{t.deleteSelection()}}]);t.setFloatingMenu(n);let d=null;return addEventListener("mousemove",a=>d=a),e.parentElement.addEventListener("keydown",a=>{!d||(a.key==="f"?t.dragstart(_.new("forms"),d):a.key==="h"?t.dragstart(_.new("hooks"),d):a.key==="j"?t.dragstart(_.new("jobs"),d):a.key==="s"&&t.dragstart(_.new("scripts"),d))}),await this.reload(t),t.init(),T.pubsub.subscribe("error",({message:a})=>{tt.error({message:a}),this.reload(t)}),t.pubsub.subscribe("nodes:moved",a=>T.move(a.map(l=>({type:l.node.type,id:l.node.id,position:[l.to.x,l.to.y]})))),t.pubsub.subscribe("deleted",a=>T.delete([...a.nodes.map(l=>({id:l.id,type:l.type})),...a.links.map(l=>({id:l.id,type:"transitions"}))])),t.pubsub.subscribe("nodes:added",a=>T.addNodes(a.nodes.map(l=>({position:[l.position.x,l.position.y],type:l.type,id:l.id,title:l.title})))),t.pubsub.subscribe("nodes:duplicated",a=>T.duplicateNodes(a.map(({duplicate:l,original:r})=>({original_id:r.id,new_id:l.id,type:r.type,position:[l.position.x,l.position.y],title:l.title})))),t.pubsub.subscribe("transition:added",a=>T.addTransition(a.links.map(l=>({source:{type:l.sourceNodeType,id:l.sourceNodeId},target:{id:l.targetNodeId,type:l.targetNodeType},id:l.id})))),s}static async reload(e){const t=await T.getInitialData();e.clear(),t.forEach(s=>{e.addNode(_.from(s)),s.transitions.forEach(o=>{e.addLink(R.from(s.type,s.id,o))})})}get inspector(){return this._inspector.value}set inspector(e){this._inspector.value=e}async closeInspector(){var t;const e=async()=>new Promise(s=>Dt.confirm({title:"You have unsaved changes. Do you ",okText:"Save",cancelText:"Continue without saving",okButtonProps:{type:"primary"},cancelButtonProps:{danger:!0},onOk:async()=>{var o;await((o=this._inspector.value)==null?void 0:o.model.save()),await z.reload(this.canvasGui),s()},onCancel:()=>s()}));(t=this._inspector.value)!=null&&t.model.hasChanges()&&await e(),this._inspector.value=null,z.reload(this.canvasGui)}async dragstart(e,t){this.canvasGui.dragstart(_.new(e),t)}}const ns=V({__name:"ScriptSettings",props:{script:{}},setup(c){return(e,t)=>(y(),x(u(zt),{layout:"vertical"},{default:h(()=>[p(u(Tt),{label:"Name",required:""},{default:h(()=>[p(u(st),{value:e.script.title,"onUpdate:value":t[0]||(t[0]=s=>e.script.title=s)},null,8,["value"])]),_:1}),p(Et,{runtime:e.script},null,8,["runtime"])]),_:1}))}}),rs=V({__name:"ScriptTester",props:{script:{},logService:{}},setup(c,{expose:e}){const t=c,s=j(!1);async function o(){s.value=!0;try{const{stdout:i,stderr:n}=await t.script.test();t.logService.log({type:"stdout",log:i}),t.logService.log({type:"stderr",log:n})}finally{s.value=!1}}return e({test:o}),(i,n)=>(y(),x(u(jt),{"show-icon":"",message:"Scripts should be intermediate tasks in the workflow and can't be run directly."}))}}),as={class:"row-itens-container"},cs={class:"row-itens-container"},ls=V({__name:"StageInspector",props:{runtime:{}},setup(c){const e=c;function t(i){switch(i.status){case"waiting":return{color:"blue",text:"Waiting"};case"running":return{color:"processing",text:"Running"};case"finished":return{color:"success",text:"Success"};case"failed":return{color:"error",text:"Failed"};case"abandoned":return{color:"warning",text:"Abandoned"}}}const{result:s,loading:o}=Ye(()=>Ht.list(e.runtime instanceof Ue?e.runtime.identifier:e.runtime.path));return(i,n)=>{var d;return y(),x(u(Kt),{loading:u(o),"item-layout":"vertical","data-source":(d=u(s))!=null?d:[]},{header:h(()=>[p(u(Ae),null,{default:h(()=>[k("span",as,[p(u(P),null,{default:h(()=>[g("ID")]),_:1}),p(u(P),null,{default:h(()=>[g("Status")]),_:1}),p(u(P),null,{default:h(()=>[g("Assignee")]),_:1}),p(u(P),null,{default:h(()=>[g("Data")]),_:1})])]),_:1})]),renderItem:h(({item:a})=>[p(u(Ae),null,{default:h(()=>[k("span",cs,[p(u(P),null,{default:h(()=>[g(L(a.id.slice(0,8)),1)]),_:2},1024),k("span",null,[p(u(Vt),{color:t(a).color},{default:h(()=>[g(L(t(a).text),1)]),_:2},1032,["color"])]),p(u(P),null,{default:h(()=>{var l;return[g(L((l=a.assignee)!=null?l:"Anyone"),1)]}),_:2},1024),k("span",null,[p(u(ot),{"tree-data":u(_t)(a.data)},null,8,["tree-data"])])])]),_:2},1024)]),_:1},8,["loading","data-source"])}}});const ds=He(ls,[["__scopeId","data-v-e41c0f24"]]),us={class:"workflow-editor"},hs={class:"title"},ps={href:"/_editor/style"},ms={class:"workflow-editor-content"},fs={class:"workflow-toolbar"},ys=["onDragstart"],ws={class:"canvas-container",tabindex:"0"},xs=V({__name:"WorkflowEditor",setup(c){const e=j(null),t=W(()=>{var S,M,m;const w=(m=(M=(S=r.value)==null?void 0:S.inspector)==null?void 0:M.model.title)!=null?m:"";return w.length>30?w.slice(0,30)+"...":w}),{result:s}=Ye(()=>lt.get()),o=W(()=>{var w;return(w=s.value)==null?void 0:w.makeRunnerData().logoUrl}),i=W(()=>{var w;return(w=s.value)==null?void 0:w.makeRunnerData().brandName}),n=it();function d(){n.push({name:"workspace"})}const a=[{icon:Ve,title:"Forms",type:"forms",description:"Wait for a user input",key:"F"},{icon:$e,title:"Hooks",type:"hooks",description:"Wait for an external API call",key:"H"},{icon:We,title:"Jobs",type:"jobs",description:"Scheduled tasks",key:"J"},{icon:Ke,title:"Scripts",type:"scripts",description:"Run a script",key:"S"}],l=j(null),r=C(null),E=(w,S)=>{var M,m;(M=S.dataTransfer)==null||M.setData("type",w),(m=r.value)==null||m.dragstart(w,S)};return nt(async()=>{if(!l.value)throw new Error("Canvas not found");r.value=await z.init(l.value)}),(w,S)=>{var M;return y(),Me("div",us,[p(u(Ge),{style:{padding:"5px 10px"},onBack:d},{extra:h(()=>[p(Ct),p(Wt)]),avatar:h(()=>[o.value?(y(),x(u($t),{key:0,src:o.value},null,8,["src"])):b("",!0),k("span",hs,[p(u(P),null,{default:h(()=>[g(L(i.value||"New Workflow"),1)]),_:1}),k("a",ps,[p(De,{path:u(mt),class:"edit-icon"},null,8,["path"])])])]),_:1}),k("div",ms,[k("div",fs,[(y(),Me(rt,null,at(a,m=>p(u(ct),{key:m.type,placement:"right"},{title:h(()=>[p(u(Jt),null,{default:h(()=>[p(u(P),null,{default:h(()=>[g(L(m.title),1)]),_:2},1024),p(u(P),{keyboard:""},{default:h(()=>[g(L(m.key),1)]),_:2},1024)]),_:2},1024)]),content:h(()=>[g(L(m.description),1)]),default:h(()=>[k("span",{draggable:"true",onDragstart:v=>E(m.type,v)},[p(De,{class:"toolbar-item",path:m.icon},null,8,["path"])],40,ys)]),_:2},1024)),64))]),k("div",ws,[k("canvas",{ref_key:"canvas",ref:l,class:"workflow-canvas"},null,512)])]),p(u(Bt),{class:"workflow-inspector",open:!!((M=r.value)!=null&&M.inspector),width:640,"footer-style":{padding:0},onClose:S[1]||(S[1]=m=>{var v;return(v=r.value)==null?void 0:v.closeInspector()})},{title:h(()=>[p(u(Ge),{title:t.value,style:{padding:"5px 10px"}},{footer:h(()=>{var m;return[(m=r.value)!=null&&m.inspector?(y(),x(u(Ut),{key:0,"active-key":r.value.inspector.inspectorMode,"onUpdate:activeKey":S[0]||(S[0]=v=>r.value.inspector.inspectorMode=v)},{rightExtra:h(()=>[]),default:h(()=>[p(u(B),{key:"edit",tab:"Settings"}),p(u(B),{key:"list-stage-runs",tab:"Task Queue"}),p(u(B),{key:"start-abuble",tab:"Test"})]),_:1},8,["active-key"])):b("",!0)]}),extra:h(()=>{var m,v,D,A;return[((v=(m=r.value)==null?void 0:m.inspector)==null?void 0:v.model)instanceof u(je)?(y(),x(Lt,{key:0,path:r.value.inspector.model.path},null,8,["path"])):b("",!0),((A=(D=r.value)==null?void 0:D.inspector)==null?void 0:A.inspectorMode)==="edit"?(y(),x(Ot,{key:1,model:r.value.inspector.model},null,8,["model"])):b("",!0)]}),_:1},8,["title"])]),default:h(()=>{var m,v,D,A,Q,ee,te,se,oe,ie,ne,re,ae,ce,le,de,ue,he,pe,me,fe,ye,we,xe,Se,ve,be,Ne,_e,ke,ge,Ie,Ee,Pe;return[((v=(m=r.value)==null?void 0:m.inspector)==null?void 0:v.inspectorMode)==="list-stage-runs"?(y(),x(ds,{key:0,runtime:r.value.inspector.model},null,8,["runtime"])):b("",!0),((A=(D=r.value)==null?void 0:D.inspector)==null?void 0:A.runtimeType)==="forms"&&((ee=(Q=r.value)==null?void 0:Q.inspector)==null?void 0:ee.inspectorMode)==="edit"?(y(),x(ft,{key:1,form:r.value.inspector.model},null,8,["form"])):b("",!0),((se=(te=r.value)==null?void 0:te.inspector)==null?void 0:se.runtimeType)==="jobs"&&((ie=(oe=r.value)==null?void 0:oe.inspector)==null?void 0:ie.inspectorMode)==="edit"?(y(),x(Gt,{key:2,job:r.value.inspector.model},null,8,["job"])):b("",!0),((re=(ne=r.value)==null?void 0:ne.inspector)==null?void 0:re.runtimeType)==="hooks"&&((ce=(ae=r.value)==null?void 0:ae.inspector)==null?void 0:ce.inspectorMode)==="edit"?(y(),x(Rt,{key:3,hook:r.value.inspector.model},null,8,["hook"])):b("",!0),((de=(le=r.value)==null?void 0:le.inspector)==null?void 0:de.runtimeType)==="scripts"&&((he=(ue=r.value)==null?void 0:ue.inspector)==null?void 0:he.inspectorMode)==="edit"?(y(),x(ns,{key:4,script:r.value.inspector.model},null,8,["script"])):b("",!0),((me=(pe=r.value)==null?void 0:pe.inspector)==null?void 0:me.runtimeType)==="hooks"&&((ye=(fe=r.value)==null?void 0:fe.inspector)==null?void 0:ye.inspectorMode)==="start-abuble"?(y(),x(At,{key:5,hook:r.value.inspector.model,"log-service":r.value.logService},null,8,["hook","log-service"])):b("",!0),((xe=(we=r.value)==null?void 0:we.inspector)==null?void 0:xe.runtimeType)==="forms"&&((ve=(Se=r.value)==null?void 0:Se.inspector)==null?void 0:ve.inspectorMode)==="start-abuble"?(y(),x(yt,{key:6,ref_key:"formTester",ref:e,form:r.value.inspector.model,"log-service":r.value.logService},null,8,["form","log-service"])):b("",!0),((Ne=(be=r.value)==null?void 0:be.inspector)==null?void 0:Ne.runtimeType)==="jobs"&&((ke=(_e=r.value)==null?void 0:_e.inspector)==null?void 0:ke.inspectorMode)==="start-abuble"?(y(),x(Ft,{key:7,job:r.value.inspector.model,"log-service":r.value.logService},null,8,["job","log-service"])):b("",!0),((Ie=(ge=r.value)==null?void 0:ge.inspector)==null?void 0:Ie.runtimeType)==="scripts"&&((Pe=(Ee=r.value)==null?void 0:Ee.inspector)==null?void 0:Pe.inspectorMode)==="start-abuble"?(y(),x(rs,{key:8,script:r.value.inspector.model,"log-service":r.value.logService},null,8,["script","log-service"])):b("",!0)]}),footer:h(()=>{var m,v,D;return[((v=(m=r.value)==null?void 0:m.inspector)==null?void 0:v.inspectorMode)==="start-abuble"?(y(),x(Pt,{key:0,runtime:r.value.inspector.runtimeType,"log-service":r.value.logService,onRestart:(D=e.value)==null?void 0:D.restart},null,8,["runtime","log-service","onRestart"])):b("",!0)]}),_:1},8,["open"])])}}});const No=He(xs,[["__scopeId","data-v-99bae5ed"]]);export{No as default};
//# sourceMappingURL=WorkflowEditor.e03eac91.js.map
