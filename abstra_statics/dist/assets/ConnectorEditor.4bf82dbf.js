import{d as g,b as t,eu as a,G as D,aC as I,eB as $,e as O,eD as A,f as m,v as T,H as P,ew as _,c as b,ez as V,eC as U,r as x,eA as H,eI as L,a as J,w as l,eK as K,u as o,aq as M,ad as Q,cB as q,bE as W}from"./outputWidgets.96aee116.js";import{B as X}from"./BaseLayout.cddc6ffe.js";import{a as Y}from"./asyncComputed.4fee1090.js";import{b as S}from"./index.993a770e.js";import{_ as Z}from"./SaveButton.vue_vue_type_script_setup_true_lang.ac8d2226.js";import"./router.c3eae5f1.js";import{P as ee}from"./project.7da6e6c4.js";import{C as te}from"./connector.5ddb02b0.js";import{O as ne}from"./organization.49e5ab88.js";import{T as ae,A as N}from"./TabPane.a7088680.js";import{B as se,A as oe,b as re}from"./index.8ac11a66.js";import{F as E,A as F}from"./Form.7ed8a386.js";import{A as ue}from"./index.90c5842f.js";import"./index.cf4c23b9.js";import"./record.4eec9618.js";import"./pubsub.20685aef.js";import"./UnsavedChangesHandler.b502c90b.js";import"./ExclamationCircleOutlined.41da8a52.js";import"./Modal.6ac123a9.js";import"./Text.2bc30457.js";import"./Link.728678d6.js";import"./popupNotifcation.67a31726.js";import"./hasIn.6dd7b6cd.js";import"./index.aeede8bb.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="3e16ec99-c3c4-41a6-a5d1-f1f5e7021f7c",i._sentryDebugIdIdentifier="sentry-dbid-3e16ec99-c3c4-41a6-a5d1-f1f5e7021f7c")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=D({value:(f=r.value)!=null?f:{}}),e=(B,j)=>{n.value[B]=j,k()},k=()=>{s("change",n.value)};return(B,j)=>(t(),a("div",_e,[(t(!0),a(I,null,$(r.schema.values,(y,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(z,{class:"oi-item-input",schema:y,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=T(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},ye=["onClick"],be=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var j;const n=D({value:(j=i.value)!=null?j:[]}),e=()=>{n.value.push(void 0)},k=y=>{n.value.splice(y,1),B()},f=(y,v)=>{n.value[y]=v,B()},B=()=>{s("change",n.value)};return(y,v)=>(t(),a("div",fe,[(t(!0),a(I,null,$(n.value,(u,R)=>(t(),a("div",{key:R,class:"ai-item"},[m(z,{schema:y.schema.items,value:u,onChange:d=>f(R,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(R)},"x",8,ye)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=T(be,[["__scopeId","data-v-a6c8b9fb"]]),Ce=["value"],Ie=["value"],$e=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a(I,null,$(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,Ie))),128))],40,Ce))}}),Ae=["value"],Be=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),je=["value"],we=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,je))}}),Re={string:le,number:pe,boolean:me,object:ge,array:ke,options:$e,any:we,union:Be},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},ze={key:1,class:"gi-tags"},De={key:0,class:"gi-required"},Te={key:1,class:"gi-required"},qe={key:1,class:"gi-description"},Se=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:Re[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",ze,["required"in e.schema&&e.schema.required?(t(),a("span",De,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",Te,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",qe,A(e.schema.description),1)):_("",!0),(t(),b(U(n.value.component),V({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const z=T(Se,[["__scopeId","data-v-dd33d764"]]),Ne={key:0},Ee={key:1},Fe={key:0},Ge={key:1},dt=g({__name:"ConnectorEditor",setup(i){const s=x("connect"),n=H().params.connectorId,{result:e,loading:k}=Y(async()=>{const d=await te.get(n),p=await ee.get(d.projectId),C=await ne.get(p.organizationId);return K({connector:d,project:p,organization:C})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),B=L();function j(){e.value&&B.push({name:"connectors",params:{projectId:e.value.project.id}})}const y=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[C,c])=>[...p,{key:C,...c}],[]):[]}),v=P(()=>{var d,p,C;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in S.schema)?null:S.schema[(C=e.value)==null?void 0:C.connector.type]}),u=D({testMethod:void 0,testParams:{},testResponse:null}),R=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const C=J("router-link");return t(),b(X,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 25px"},onBack:j},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(N),{key:"connect",tab:"Connect"}),m(o(N),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),b(o(se),{key:0},{default:l(()=>[(t(!0),a(I,null,$(f.value,(h,w)=>(t(),b(o(oe),{key:w},{default:l(()=>[m(C,{to:h.path},{default:l(()=>[M(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),b(Z,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),b(o(E),{key:0},{default:l(()=>{var c;return[(t(!0),a(I,null,$((c=v.value)==null?void 0:c.settings,(h,w)=>(t(),b(o(F),{key:w},{default:l(()=>[m(z,{schema:h,value:o(e).connector.settings[w],onChange:G=>o(e).connector.settings[w]=G},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),b(o(E),{key:1},{default:l(()=>[m(o(F),{label:"Method"},{default:l(()=>[m(o(Q),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(q),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a(I,null,$(y.value,c=>(t(),b(o(q),{key:c.key,value:c.key},{default:l(()=>[M(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",Ne,[(t(!0),a(I,null,$(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(z,{schema:c,value:u.testParams[h],onChange:w=>u.testParams[h]=w},null,8,["schema","value","onChange"])]))),128)),m(o(W),{type:"primary",onClick:p[2]||(p[2]=c=>R())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Ee,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Fe,[(t(!0),a(I,null,$(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Ge,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{dt as default};
//# sourceMappingURL=ConnectorEditor.4bf82dbf.js.map
