import{d as v,v as T,ab as N,o as O,W as q,ac as P,b as t,c as s,B as M,q as C,F as $,L as k,x as d,N as I,e as y,K as S,D as m,t as w,am as E,z as _,a8 as L,y as U,aa as V,a as G,G as z,U as F,w as x,J,X as Q,O as W,Q as X}from"./registerWidgets.b581b882.js";import{b as j}from"./index.2816490e.js";import"./gateway.ace4e6ef.js";import{C as H}from"./connector.98aa7d7a.js";import{a as Y}from"./asyncComputed.d5ac46d6.js";import{B as Z}from"./BackButton.35941303.js";import{S as K}from"./SaveButton.9142bab2.js";import{L as ee}from"./CircularLoading.187bc0bb.js";import"./passwordlessManager.202da07d.js";import"./pubsub.e8d7f2be.js";import"./activeRecord.d86e77f4.js";import"./icons.5e5a9af6.js";import"./lottie.11a8eda8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="86814c78-1c2f-48f0-9b93-d071d6283e00",e._sentryDebugIdIdentifier="sentry-dbid-86814c78-1c2f-48f0-9b93-d071d6283e00")}catch{}})();const te={class:"tab"},se=v({__name:"Tab",props:{title:null,icon:null},setup(e){const o=e,u=T({isActive:!1,title:o.title,icon:o.icon}),n=N("addTab");return O(()=>{n(u)}),(l,a)=>q((t(),s("div",te,[M(l.$slots,"default",{},void 0,!0)],512)),[[P,u.isActive]])}});const D=C(se,[["__scopeId","data-v-497e4e8e"]]),ne=["value"],ae=v({__name:"TextInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,ne))}}),oe=["value"],ce=v({__name:"NumberInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,type:"number",onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,oe))}}),le=["value"],ue=v({__name:"BooleanInput",props:{value:{type:Boolean},schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,type:"checkbox",onChange:n[0]||(n[0]=l=>o("change",l.target.checked))},null,40,le))}}),re={class:"oi"},ie={class:"oi-item-label"},de=v({__name:"ObjectInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){var g;const u=e,n=T({value:(g=u.value)!=null?g:{}}),l=(h,c)=>{n.value[h]=c,a()},a=()=>{o("change",n.value)};return(h,c)=>(t(),s("div",re,[(t(!0),s($,null,k(u.schema.values,(b,i)=>(t(),s("div",{key:i,class:"oi-item"},[d("div",ie,I(i),1),y(B,{class:"oi-item-input",schema:b,value:n.value[i],onChange:f=>l(i,f)},null,8,["schema","value","onChange"])]))),128))]))}});const _e=C(de,[["__scopeId","data-v-bd751ecc"]]),he={class:"ai"},me=["onClick"],pe=v({__name:"ArrayInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){var c;const n=T({value:(c=e.value)!=null?c:[]}),l=()=>{n.value.push(void 0)},a=b=>{n.value.splice(b,1),h()},g=(b,i)=>{n.value[b]=i,h()},h=()=>{o("change",n.value)};return(b,i)=>(t(),s("div",he,[(t(!0),s($,null,k(n.value,(f,r)=>(t(),s("div",{key:r,class:"ai-item"},[y(B,{schema:e.schema.items,value:f,onChange:p=>g(r,p)},null,8,["schema","value","onChange"]),d("button",{class:"ai-item-remove",onClick:p=>a(r)},"x",8,me)]))),128)),d("button",{class:"ai-item-add",onClick:i[0]||(i[0]=f=>l())},"Add")]))}});const ve=C(pe,[["__scopeId","data-v-a6c8b9fb"]]),ge=["value"],be=["value"],fe=v({__name:"OptionsInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("select",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},[(t(!0),s($,null,k(e.schema.values,l=>(t(),s("option",{key:l,value:l},I(l),9,be))),128))],40,ge))}}),ye=["value"],$e=v({__name:"UnionInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,ye))}}),ke=["value"],Ie=v({__name:"AnyInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,ke))}}),Ce={string:ae,number:ce,boolean:ue,object:_e,array:ve,options:fe,any:Ie,union:$e},xe={class:"gi"},Se={key:0,class:"gi-header"},Te={key:0,class:"gi-label"},Me={key:1,class:"gi-tags"},we={key:0,class:"gi-required"},Be={key:1,class:"gi-required"},Ae={key:1,class:"gi-description"},Re=v({__name:"GenericInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){const u=e,n=S(()=>({component:Ce[u.schema.type],props:{value:u.value,schema:u.schema}}));return(l,a)=>(t(),s("div",xe,["label"in e.schema?(t(),s("div",Se,["label"in e.schema?(t(),s("label",Te,I(e.schema.label),1)):m("",!0),"required"in e.schema||"secret"in e.schema?(t(),s("div",Me,["required"in e.schema&&e.schema.required?(t(),s("span",we,"[Required]")):m("",!0),"secret"in e.schema&&e.schema.secret?(t(),s("span",Be,"[Secret]")):m("",!0)])):m("",!0)])):m("",!0),"description"in e.schema?(t(),s("div",Ae,I(e.schema.description),1)):m("",!0),(t(),w(L(_(n).component),E({class:"gi-input"},_(n).props,{onChange:a[0]||(a[0]=g=>o("change",g))}),null,16))]))}});const B=C(Re,[["__scopeId","data-v-dd33d764"]]),je={class:"tab-menu"},De={class:"tabs"},Oe={key:0,class:"group"},qe={class:"group"},Ne=["onClick"],Pe={key:1,class:"group"},Ee={class:"content"},Le=v({__name:"TabMenuUnderline",setup(e){const o=T([]),u=U(),n=a=>{const g=h=>h==a;o.forEach((h,c)=>{h.isActive=g(c)})},l=S(()=>o.findIndex(a=>a.isActive));return V("addTab",a=>{o.push(a)}),O(()=>{n(0)}),(a,g)=>{const h=G("icon");return t(),s("div",je,[d("div",De,[_(u).left?(t(),s("div",Oe,[M(a.$slots,"left",{},void 0,!0)])):m("",!0),d("div",qe,[(t(!0),s($,null,k(o,(c,b)=>(t(),s("button",{key:c.title,class:z(["form-tab",_(l)==b&&"active"]),onClick:i=>n(b)},[c.icon?(t(),w(h,{key:0,path:c.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):m("",!0),F(" "+I(c.title),1)],10,Ne))),128))]),_(u).right?(t(),s("div",Pe,[M(a.$slots,"right",{},void 0,!0)])):m("",!0)]),d("div",Ee,[M(a.$slots,"default",{},void 0,!0)])])}}});const Ue=C(Le,[["__scopeId","data-v-f2e43fa2"]]),A=e=>(W("data-v-63dce332"),e=e(),X(),e),Ve={class:"page settings"},Ge={class:"page test"},ze={class:"test-method-selector"},Fe=A(()=>d("label",{class:"test-method-selector-label"},"Method",-1)),Je=A(()=>d("option",{value:null,disabled:"",selected:"",hidden:""},"Select a method",-1)),Qe=["value"],We={key:0,class:"test-method-parameters"},Xe=A(()=>d("label",{class:"test-method-parameters-label"},"Params",-1)),He={key:1,class:"test-method-response"},Ye=A(()=>d("label",{class:"test-method-response-label"},"Response",-1)),Ze={key:0,class:"test-method-response-errors"},Ke={key:1,class:"test-method-response-returns"},et={class:"test-method-response-returns-value"},tt=v({__name:"ConnectorEditor",setup(e){const o=S(()=>{var i;return`/projects/${(i=a.value)==null?void 0:i.projectId}/connectors`}),n=J().params.connectorId,{loading:l,result:a}=Y(()=>H.get(n)),g=S(()=>{var i;return(i=a.value)!=null&&i.schema.methods?Object.keys(a.value.schema.methods).reduce((f,r)=>{const p=a.value.schema.methods[r];return[...f,{key:r,...p}]},[]):[]}),h=S(()=>!a.value||!(a.value.type in j.schema)?null:j.schema[a.value.type]),c=T({testMethod:null,testParams:{},testResponse:null}),b=async()=>{!a.value||!c.testMethod||!c.testParams||(c.testResponse=await a.value.test(c.testMethod,c.testParams))};return(i,f)=>_(l)||!_(a)||!_(h)?(t(),w(ee,{key:0})):(t(),w(Ue,{key:1,class:"connector-editor"},{left:x(()=>[y(Z,{link:_(o)},null,8,["link"])]),right:x(()=>[y(K,{model:_(a)},null,8,["model"])]),default:x(()=>[y(D,{title:"Settings"},{default:x(()=>[d("div",Ve,[(t(!0),s($,null,k(_(h).settings,(r,p)=>(t(),s("div",{key:p},[y(B,{schema:r,value:_(a).settings[p],onChange:R=>_(a).settings[p]=R},null,8,["schema","value","onChange"])]))),128))])]),_:1}),y(D,{title:"Test"},{default:x(()=>[d("div",Ge,[d("div",ze,[Fe,q(d("select",{"onUpdate:modelValue":f[0]||(f[0]=r=>c.testMethod=r),class:"test-method-selector-selector"},[Je,(t(!0),s($,null,k(_(g),r=>(t(),s("option",{key:r.key,value:r.key},I(r.label),9,Qe))),128))],512),[[Q,c.testMethod]])]),c.testMethod?(t(),s("div",We,[Xe,(t(!0),s($,null,k(_(a).schema.methods[c.testMethod].params,(r,p)=>(t(),s("div",{key:p,class:"test-field"},[y(B,{schema:r,value:c.testParams[p],onChange:R=>c.testParams[p]=R},null,8,["schema","value","onChange"])]))),128)),d("button",{class:"test-method-run",onClick:f[1]||(f[1]=r=>b())},"Test")])):m("",!0),c.testResponse?(t(),s("div",He,[Ye,c.testResponse.errors.length>0?(t(),s("div",Ze,[(t(!0),s($,null,k(c.testResponse.errors,r=>(t(),s("div",{key:r},I(r),1))),128))])):m("",!0),c.testResponse.returns&&Object.keys(c.testResponse.returns).length>0?(t(),s("div",Ke,[d("span",et,[d("pre",null,I(JSON.stringify(c.testResponse.returns,null,2)),1)])])):m("",!0)])):m("",!0)])]),_:1})]),_:1}))}});const pt=C(tt,[["__scopeId","data-v-63dce332"]]);export{pt as default};
//# sourceMappingURL=ConnectorEditor.c25d816a.js.map
