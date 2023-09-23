import{d as g,b as t,er as a,G as T,bu as $,ez as C,e as O,eA as j,f as m,v as D,H as P,eu as _,c as y,eT as E,eF as U,r as H,ey as L,ex as x,a as J,w as l,u as o,b0 as M,ad as Q,cQ as S,cb as W,eD as X}from"./registerWidgets.32a97516.js";import{b as q}from"./index.a7bc7dc9.js";import{P as Y}from"./project.73c6f559.js";import"./gateway.7015ff9d.js";import{O as Z}from"./organization.837d7438.js";import{C as K}from"./connector.3ecb1faa.js";import{a as ee}from"./asyncComputed.9b3e19e4.js";import{_ as te}from"./SaveButton.vue_vue_type_script_setup_true_lang.04bc759c.js";import{B as ne}from"./BaseLayout.ee1d7409.js";import{T as ae,a as N}from"./index.bc153c7b.js";import{B as se,a as oe,c as re}from"./index.f3712f57.js";import{F}from"./Form.c5db2140.js";import{A as G}from"./Title.fff8b6ce.js";import{A as ue}from"./index.941e2bed.js";import"./activeRecord.2e436871.js";import"./pubsub.15b3367b.js";import"./passwordlessManager.730dd996.js";import"./storage.ea1488a3.js";import"./index.413bace6.js";import"./transButton.f078ba96.js";import"./index.92431587.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="3b95c467-4510-4b26-9719-9596ae08e263",i._sentryDebugIdIdentifier="sentry-dbid-3b95c467-4510-4b26-9719-9596ae08e263")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=T({value:(f=r.value)!=null?f:{}}),e=(A,B)=>{n.value[A]=B,k()},k=()=>{s("change",n.value)};return(A,B)=>(t(),a("div",_e,[(t(!0),a($,null,C(r.schema.values,(b,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,j(v),1),m(z,{class:"oi-item-input",schema:b,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=D(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},be=["onClick"],ye=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var B;const n=T({value:(B=i.value)!=null?B:[]}),e=()=>{n.value.push(void 0)},k=b=>{n.value.splice(b,1),A()},f=(b,v)=>{n.value[b]=v,A()},A=()=>{s("change",n.value)};return(b,v)=>(t(),a("div",fe,[(t(!0),a($,null,C(n.value,(u,w)=>(t(),a("div",{key:w,class:"ai-item"},[m(z,{schema:b.schema.items,value:u,onChange:d=>f(w,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(w)},"x",8,be)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=D(ye,[["__scopeId","data-v-a6c8b9fb"]]),Ie=["value"],$e=["value"],Ce=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a($,null,C(r.schema.values,e=>(t(),a("option",{key:e,value:e},j(e),9,$e))),128))],40,Ie))}}),je=["value"],Ae=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,je))}}),Be=["value"],Re=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Be))}}),we={string:le,number:pe,boolean:me,object:ge,array:ke,options:Ce,any:Re,union:Ae},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},ze={key:1,class:"gi-tags"},Te={key:0,class:"gi-required"},De={key:1,class:"gi-required"},Se={key:1,class:"gi-description"},qe=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:we[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,j(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",ze,["required"in e.schema&&e.schema.required?(t(),a("span",Te,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",De,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",Se,j(e.schema.description),1)):_("",!0),(t(),y(U(n.value.component),E({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const z=D(qe,[["__scopeId","data-v-dd33d764"]]),Ne={key:0},Fe={key:1},Ge={key:0},Ve={key:1},lt=g({__name:"ConnectorEditor",setup(i){const s=H("connect"),n=L().params.connectorId,{result:e,loading:k}=ee(async()=>{const d=await K.get(n),p=await Y.get(d.projectId),I=await Z.get(p.organizationId);return X({connector:d,project:p,organization:I})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),A=x();function B(){e.value&&A.push({name:"connectors",params:{projectId:e.value.project.id}})}const b=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[I,c])=>[...p,{key:I,...c}],[]):[]}),v=P(()=>{var d,p,I;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in q.schema)?null:q.schema[(I=e.value)==null?void 0:I.connector.type]}),u=T({testMethod:void 0,testParams:{},testResponse:null}),w=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const I=J("router-link");return t(),y(ne,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,onBack:B},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(N),{key:"connect",tab:"Connect"}),m(o(N),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),y(o(se),{key:0},{default:l(()=>[(t(!0),a($,null,C(f.value,(h,R)=>(t(),y(o(oe),{key:R},{default:l(()=>[m(I,{to:h.path},{default:l(()=>[M(j(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),y(te,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),y(o(F),{key:0},{default:l(()=>{var c;return[(t(!0),a($,null,C((c=v.value)==null?void 0:c.settings,(h,R)=>(t(),y(o(G),{key:R},{default:l(()=>[m(z,{schema:h,value:o(e).connector.settings[R],onChange:V=>o(e).connector.settings[R]=V},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),y(o(F),{key:1},{default:l(()=>[m(o(G),{label:"Method"},{default:l(()=>[m(o(Q),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(S),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a($,null,C(b.value,c=>(t(),y(o(S),{key:c.key,value:c.key},{default:l(()=>[M(j(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",Ne,[(t(!0),a($,null,C(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(z,{schema:c,value:u.testParams[h],onChange:R=>u.testParams[h]=R},null,8,["schema","value","onChange"])]))),128)),m(o(W),{type:"primary",onClick:p[2]||(p[2]=c=>w())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Fe,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Ge,[(t(!0),a($,null,C(u.testResponse.errors,c=>(t(),a("div",{key:c},j(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Ve,[O("span",null,[O("pre",null,j(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{lt as default};
//# sourceMappingURL=ConnectorEditor.5ece3edc.js.map
