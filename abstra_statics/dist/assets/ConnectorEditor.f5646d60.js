import{d as g,b as t,et as a,G as T,bf as $,eA as C,e as O,eB as A,f as m,v as D,H as P,ev as _,c as b,eX as V,eI as H,r as U,ez as x,ey as L,a as J,w as l,eE as X,u as o,aI as M,ae as Q,cH as S,c0 as W}from"./outputWidgets.a8447bcb.js";import{b as q}from"./columns.79610386.js";import{P as Y}from"./project.f2efc77e.js";import"./router.8be149da.js";import{O as Z}from"./organization.2a96d937.js";import{C as K}from"./connector.b497479b.js";import{a as ee}from"./asyncComputed.6c2627ea.js";import{_ as te}from"./SaveButton.vue_vue_type_script_setup_true_lang.183ff268.js";import{B as ne}from"./BaseLayout.f14ed0a1.js";import{T as ae,A as N}from"./TabPane.628602f8.js";import{B as se,a as oe,c as re}from"./index.251d2c0f.js";import{F as E}from"./Form.a869b3cf.js";import{A as F}from"./Title.4127a4b4.js";import{A as ue}from"./index.71f713cd.js";import"./gateway.9d217caa.js";import"./activeRecord.52c1b6f8.js";import"./pubsub.3b516de1.js";import"./index.f4ac7424.js";import"./Text.722e2789.js";import"./index.41d49230.js";import"./ant-design.1bcd10c9.js";import"./transButton.26020e2e.js";import"./index.5fa32c06.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="1a1076f8-7840-46a8-b2e9-4f6c3ae47c6e",i._sentryDebugIdIdentifier="sentry-dbid-1a1076f8-7840-46a8-b2e9-4f6c3ae47c6e")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=T({value:(f=r.value)!=null?f:{}}),e=(j,B)=>{n.value[j]=B,k()},k=()=>{s("change",n.value)};return(j,B)=>(t(),a("div",_e,[(t(!0),a($,null,C(r.schema.values,(y,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(z,{class:"oi-item-input",schema:y,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=D(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},ye=["onClick"],be=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var B;const n=T({value:(B=i.value)!=null?B:[]}),e=()=>{n.value.push(void 0)},k=y=>{n.value.splice(y,1),j()},f=(y,v)=>{n.value[y]=v,j()},j=()=>{s("change",n.value)};return(y,v)=>(t(),a("div",fe,[(t(!0),a($,null,C(n.value,(u,w)=>(t(),a("div",{key:w,class:"ai-item"},[m(z,{schema:y.schema.items,value:u,onChange:d=>f(w,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(w)},"x",8,ye)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=D(be,[["__scopeId","data-v-a6c8b9fb"]]),Ie=["value"],$e=["value"],Ce=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a($,null,C(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,$e))),128))],40,Ie))}}),Ae=["value"],je=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),Be=["value"],Re=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Be))}}),we={string:le,number:pe,boolean:me,object:ge,array:ke,options:Ce,any:Re,union:je},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},ze={key:1,class:"gi-tags"},Te={key:0,class:"gi-required"},De={key:1,class:"gi-required"},Se={key:1,class:"gi-description"},qe=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:we[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",ze,["required"in e.schema&&e.schema.required?(t(),a("span",Te,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",De,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",Se,A(e.schema.description),1)):_("",!0),(t(),b(H(n.value.component),V({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const z=D(qe,[["__scopeId","data-v-dd33d764"]]),Ne={key:0},Ee={key:1},Fe={key:0},Ge={key:1},pt=g({__name:"ConnectorEditor",setup(i){const s=U("connect"),n=x().params.connectorId,{result:e,loading:k}=ee(async()=>{const d=await K.get(n),p=await Y.get(d.projectId),I=await Z.get(p.organizationId);return X({connector:d,project:p,organization:I})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),j=L();function B(){e.value&&j.push({name:"connectors",params:{projectId:e.value.project.id}})}const y=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[I,c])=>[...p,{key:I,...c}],[]):[]}),v=P(()=>{var d,p,I;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in q.schema)?null:q.schema[(I=e.value)==null?void 0:I.connector.type]}),u=T({testMethod:void 0,testParams:{},testResponse:null}),w=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const I=J("router-link");return t(),b(ne,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 10px"},onBack:B},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(N),{key:"connect",tab:"Connect"}),m(o(N),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),b(o(se),{key:0},{default:l(()=>[(t(!0),a($,null,C(f.value,(h,R)=>(t(),b(o(oe),{key:R},{default:l(()=>[m(I,{to:h.path},{default:l(()=>[M(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),b(te,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),b(o(E),{key:0},{default:l(()=>{var c;return[(t(!0),a($,null,C((c=v.value)==null?void 0:c.settings,(h,R)=>(t(),b(o(F),{key:R},{default:l(()=>[m(z,{schema:h,value:o(e).connector.settings[R],onChange:G=>o(e).connector.settings[R]=G},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),b(o(E),{key:1},{default:l(()=>[m(o(F),{label:"Method"},{default:l(()=>[m(o(Q),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(S),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a($,null,C(y.value,c=>(t(),b(o(S),{key:c.key,value:c.key},{default:l(()=>[M(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",Ne,[(t(!0),a($,null,C(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(z,{schema:c,value:u.testParams[h],onChange:R=>u.testParams[h]=R},null,8,["schema","value","onChange"])]))),128)),m(o(W),{type:"primary",onClick:p[2]||(p[2]=c=>w())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Ee,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Fe,[(t(!0),a($,null,C(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Ge,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{pt as default};
//# sourceMappingURL=ConnectorEditor.f5646d60.js.map
