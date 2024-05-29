import{S as V}from"./SaveButton.4c3132d1.js";import{B as U}from"./BaseLayout.a0ce308c.js";import{d as g,b as t,ey as a,N as z,aG as C,eH as $,e as O,eJ as A,f as m,E as D,y as P,eA as _,c as b,eD as x,eI as H,r as J,eG as L,eM as Q,a as W,w as l,B as X,u as o,au as w,ah as Y,cF as T,bI as Z}from"./outputWidgets.d33a61bd.js";import{a as K}from"./asyncComputed.4657309e.js";import{b as N}from"./index.06532aec.js";import"./gateway.30b21540.js";import{P as ee}from"./project.6910d4a3.js";import{C as te}from"./connector.436d8283.js";import{O as ne}from"./organization.14b9e610.js";import{T as ae,A as q}from"./TabPane.9123ccc2.js";import{B as se,A as oe,b as re}from"./index.127bbcb7.js";import{F,A as G}from"./Form.41dae759.js";import{A as ue}from"./index.a45fa0cb.js";import"./UnsavedChangesHandler.ffc05cf3.js";import"./ExclamationCircleOutlined.29e557a5.js";import"./Modal.3a17d8d4.js";import"./Base.d60172c6.js";import"./Link.c71ebe94.js";import"./record.4dc67282.js";import"./pubsub.b428bf0f.js";import"./popupNotifcation.dd994e4f.js";import"./hasIn.657bf603.js";import"./PlusOutlined.cf52d035.js";import"./index.1e58612b.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="540edab2-6866-4f51-9c7c-a0750ce10e04",i._sentryDebugIdIdentifier="sentry-dbid-540edab2-6866-4f51-9c7c-a0750ce10e04")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=z({value:(f=r.value)!=null?f:{}}),e=(B,j)=>{n.value[B]=j,k()},k=()=>{s("change",n.value)};return(B,j)=>(t(),a("div",_e,[(t(!0),a(C,null,$(r.schema.values,(y,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(S,{class:"oi-item-input",schema:y,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=D(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},ye=["onClick"],be=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var j;const n=z({value:(j=i.value)!=null?j:[]}),e=()=>{n.value.push(void 0)},k=y=>{n.value.splice(y,1),B()},f=(y,v)=>{n.value[y]=v,B()},B=()=>{s("change",n.value)};return(y,v)=>(t(),a("div",fe,[(t(!0),a(C,null,$(n.value,(u,R)=>(t(),a("div",{key:R,class:"ai-item"},[m(S,{schema:y.schema.items,value:u,onChange:d=>f(R,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(R)},"x",8,ye)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=D(be,[["__scopeId","data-v-a6c8b9fb"]]),Ie=["value"],Ce=["value"],$e=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a(C,null,$(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,Ce))),128))],40,Ie))}}),Ae=["value"],Be=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),je=["value"],Me=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,je))}}),Re={string:le,number:pe,boolean:me,object:ge,array:ke,options:$e,any:Me,union:Be},we={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},Se={key:1,class:"gi-tags"},ze={key:0,class:"gi-required"},De={key:1,class:"gi-required"},Te={key:1,class:"gi-description"},Ne=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:Re[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",we,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",Se,["required"in e.schema&&e.schema.required?(t(),a("span",ze,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",De,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",Te,A(e.schema.description),1)):_("",!0),(t(),b(H(n.value.component),x({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const S=D(Ne,[["__scopeId","data-v-dd33d764"]]),qe={key:0},Fe={key:1},Ge={key:0},Ee={key:1},dt=g({__name:"ConnectorEditor",setup(i){const s=J("connect"),n=L().params.connectorId,{result:e,loading:k}=K(async()=>{const d=await te.get(n),p=await ee.get(d.projectId),I=await ne.get(p.organizationId);return X({connector:d,project:p,organization:I})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),B=Q();function j(){e.value&&B.push({name:"connectors",params:{projectId:e.value.project.id}})}const y=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[I,c])=>[...p,{key:I,...c}],[]):[]}),v=P(()=>{var d,p,I;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in N.schema)?null:N.schema[(I=e.value)==null?void 0:I.connector.type]}),u=z({testMethod:void 0,testParams:{},testResponse:null}),R=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const I=W("router-link");return t(),b(U,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 25px"},onBack:j},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(q),{key:"connect",tab:"Connect"}),m(o(q),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),b(o(se),{key:0},{default:l(()=>[(t(!0),a(C,null,$(f.value,(h,M)=>(t(),b(o(oe),{key:M},{default:l(()=>[m(I,{to:h.path},{default:l(()=>[w(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),b(V,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),b(o(F),{key:0},{default:l(()=>{var c;return[(t(!0),a(C,null,$((c=v.value)==null?void 0:c.settings,(h,M)=>(t(),b(o(G),{key:M},{default:l(()=>[m(S,{schema:h,value:o(e).connector.settings[M],onChange:E=>o(e).connector.settings[M]=E},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),b(o(F),{key:1},{default:l(()=>[m(o(G),{label:"Method"},{default:l(()=>[m(o(Y),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(T),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[w("Select a method")]),_:1}),(t(!0),a(C,null,$(y.value,c=>(t(),b(o(T),{key:c.key,value:c.key},{default:l(()=>[w(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",qe,[(t(!0),a(C,null,$(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(S,{schema:c,value:u.testParams[h],onChange:M=>u.testParams[h]=M},null,8,["schema","value","onChange"])]))),128)),m(o(Z),{type:"primary",onClick:p[2]||(p[2]=c=>R())},{default:l(()=>[w("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Fe,[m(o(ue),{orientation:"left"},{default:l(()=>[w("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Ge,[(t(!0),a(C,null,$(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Ee,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{dt as default};
//# sourceMappingURL=ConnectorEditor.177a01a6.js.map
