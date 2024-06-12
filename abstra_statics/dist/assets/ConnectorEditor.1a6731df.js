import{S as G}from"./SaveButton.bad8600d.js";import{B as U}from"./BaseLayout.f682468c.js";import{d as g,b as t,eV as a,N as z,ay as C,f2 as $,e as O,f4 as A,f as m,E as T,y as P,eX as _,c as b,e_ as x,f3 as L,r as H,f1 as J,f7 as X,a as Q,w as l,B as W,u as o,am as M,ah as Y,cG as D,bF as Z}from"./outputWidgets.bbbaa102.js";import{a as K}from"./asyncComputed.f1d8a1d2.js";import{b as N}from"./index.772572c2.js";import"./gateway.66d38e07.js";import{P as ee}from"./project.2eeacf10.js";import{C as te}from"./connector.d60f84ca.js";import{O as ne}from"./organization.4c95c424.js";import{T as ae,A as q}from"./TabPane.7123bbad.js";import{B as se,A as oe,b as re}from"./index.2674372c.js";import{F,A as V}from"./Form.1745e5b9.js";import{A as ue}from"./index.420d2ff4.js";import"./UnsavedChangesHandler.f90dacf6.js";import"./ExclamationCircleOutlined.2b4c8a5a.js";import"./Modal.5105eb26.js";import"./record.c5027b83.js";import"./pubsub.1b8a8c1a.js";import"./string.5a7fe39d.js";import"./popupNotifcation.c8228c96.js";import"./hasIn.cec00ae0.js";import"./index.6c713c2a.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="fd2d7367-86ec-4c90-b662-61d982d164e4",i._sentryDebugIdIdentifier="sentry-dbid-fd2d7367-86ec-4c90-b662-61d982d164e4")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=z({value:(f=r.value)!=null?f:{}}),e=(B,j)=>{n.value[B]=j,k()},k=()=>{s("change",n.value)};return(B,j)=>(t(),a("div",_e,[(t(!0),a(C,null,$(r.schema.values,(y,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(S,{class:"oi-item-input",schema:y,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=T(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},ye=["onClick"],be=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var j;const n=z({value:(j=i.value)!=null?j:[]}),e=()=>{n.value.push(void 0)},k=y=>{n.value.splice(y,1),B()},f=(y,v)=>{n.value[y]=v,B()},B=()=>{s("change",n.value)};return(y,v)=>(t(),a("div",fe,[(t(!0),a(C,null,$(n.value,(u,w)=>(t(),a("div",{key:w,class:"ai-item"},[m(S,{schema:y.schema.items,value:u,onChange:d=>f(w,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(w)},"x",8,ye)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=T(be,[["__scopeId","data-v-a6c8b9fb"]]),Ie=["value"],Ce=["value"],$e=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a(C,null,$(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,Ce))),128))],40,Ie))}}),Ae=["value"],Be=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),je=["value"],Re=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,je))}}),we={string:le,number:pe,boolean:me,object:ge,array:ke,options:$e,any:Re,union:Be},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},Se={key:1,class:"gi-tags"},ze={key:0,class:"gi-required"},Te={key:1,class:"gi-required"},De={key:1,class:"gi-description"},Ne=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:we[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",Se,["required"in e.schema&&e.schema.required?(t(),a("span",ze,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",Te,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",De,A(e.schema.description),1)):_("",!0),(t(),b(L(n.value.component),x({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const S=T(Ne,[["__scopeId","data-v-dd33d764"]]),qe={key:0},Fe={key:1},Ve={key:0},Ee={key:1},it=g({__name:"ConnectorEditor",setup(i){const s=H("connect"),n=J().params.connectorId,{result:e,loading:k}=K(async()=>{const d=await te.get(n),p=await ee.get(d.projectId),I=await ne.get(p.organizationId);return W({connector:d,project:p,organization:I})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),B=X();function j(){e.value&&B.push({name:"connectors",params:{projectId:e.value.project.id}})}const y=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[I,c])=>[...p,{key:I,...c}],[]):[]}),v=P(()=>{var d,p,I;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in N.schema)?null:N.schema[(I=e.value)==null?void 0:I.connector.type]}),u=z({testMethod:void 0,testParams:{},testResponse:null}),w=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const I=Q("router-link");return t(),b(U,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 25px"},onBack:j},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(q),{key:"connect",tab:"Connect"}),m(o(q),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),b(o(se),{key:0},{default:l(()=>[(t(!0),a(C,null,$(f.value,(h,R)=>(t(),b(o(oe),{key:R},{default:l(()=>[m(I,{to:h.path},{default:l(()=>[M(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),b(G,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),b(o(F),{key:0},{default:l(()=>{var c;return[(t(!0),a(C,null,$((c=v.value)==null?void 0:c.settings,(h,R)=>(t(),b(o(V),{key:R},{default:l(()=>[m(S,{schema:h,value:o(e).connector.settings[R],onChange:E=>o(e).connector.settings[R]=E},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),b(o(F),{key:1},{default:l(()=>[m(o(V),{label:"Method"},{default:l(()=>[m(o(Y),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(D),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a(C,null,$(y.value,c=>(t(),b(o(D),{key:c.key,value:c.key},{default:l(()=>[M(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",qe,[(t(!0),a(C,null,$(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(S,{schema:c,value:u.testParams[h],onChange:R=>u.testParams[h]=R},null,8,["schema","value","onChange"])]))),128)),m(o(Z),{type:"primary",onClick:p[2]||(p[2]=c=>w())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Fe,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Ve,[(t(!0),a(C,null,$(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Ee,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{it as default};
//# sourceMappingURL=ConnectorEditor.1a6731df.js.map
