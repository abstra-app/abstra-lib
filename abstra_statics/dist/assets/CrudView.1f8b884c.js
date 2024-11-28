import{A as N,a as z,r as L}from"./router.74e4263a.js";import{_ as O}from"./DocsButton.vue_vue_type_script_setup_true_lang.5b28678d.js";import{i as E}from"./url.deb5af1a.js";import{G as j}from"./PhDotsThreeVertical.vue.b6de7f3d.js";import{d as P,D as X,e as D,o as s,c as r,w as l,u as n,cL as G,b as y,X as V,eb as T,cy as Q,bK as Y,cD as Z,aA as q,aR as x,cT as H,aF as d,e9 as f,R as b,cx as J,cK as W,f as K,r as ee,dg as F,dc as te,Z as A,da as R,bS as ae,cX as le,Y as ne,db as B,d4 as U,bQ as se,by as oe,bw as ue,a as re,ec as ie,cN as pe,bx as ce,$ as ye}from"./vue-router.3b71935d.js";import{B as de}from"./Badge.e735c20f.js";import{A as M}from"./index.f47b46c5.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[m]="f0b4bb6f-3a83-4104-808a-6890b595f0d1",g._sentryDebugIdIdentifier="sentry-dbid-f0b4bb6f-3a83-4104-808a-6890b595f0d1")}catch{}})();const fe=P({__name:"CreationModal",props:{entityName:{},fields:{},create:{type:Function}},setup(g,{expose:m}){const _=g,I=`Create a new ${_.entityName}`,c=X({inputValue:{}}),C=D(!1),k=()=>C.value=!0,w=()=>{C.value=!1,c.inputValue={}},$=async()=>{try{await _.create(c.inputValue),w()}catch(p){p instanceof Error&&G.error({message:"Failed to create",description:p.message})}},t=(p,o)=>{const e=p.target.value,a=_.fields.find(i=>i.key===o);a!=null&&a.format?c.inputValue[o]=a.format(e):c.inputValue[o]=e},v=(p,o)=>{const e=p.target.value,a=_.fields.find(i=>i.key===o);a!=null&&a.blur?c.inputValue[o]=a.blur(e):c.inputValue[o]=e};return m({open:k,close:w}),(p,o)=>(s(),r(n(W),{open:C.value,title:I,onCancel:w,onOk:$},{default:l(()=>[y(n(J),{layout:"vertical"},{default:l(()=>[(s(!0),V(x,null,T(p.fields,e=>{var a;return s(),r(n(Q),{key:e.key,label:e.label,help:(a=e.hint)==null?void 0:a.call(e,c.inputValue[e.key])},{default:l(()=>{var i,h,S;return[!e.type||e.type==="text"||e.type==="password"?(s(),r(n(Y),{key:0,value:c.inputValue[e.key],"onUpdate:value":u=>c.inputValue[e.key]=u,placeholder:(i=e.placeholder)!=null?i:"",type:(h=e.type)!=null?h:"text",onInput:u=>t(u,e.key),onBlur:u=>v(u,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(s(),r(n(Z),{key:1,value:c.inputValue[e.key],"onUpdate:value":u=>c.inputValue[e.key]=u,placeholder:(S=e.placeholder)!=null?S:"",onInput:u=>t(u,e.key),onBlur:u=>v(u,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(e.type)?(s(),r(n(q),{key:2,value:c.inputValue[e.key],"onUpdate:value":u=>c.inputValue[e.key]=u},{default:l(()=>[(s(!0),V(x,null,T(e.type,u=>(s(),r(n(H),{key:typeof u=="string"?u:u.value,value:typeof u=="string"?u:u.value},{default:l(()=>[d(f(typeof u=="string"?u:u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):b("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},ve=P({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},create:{type:Function},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},setup(g){const m=g,_=D(null),I=(t,v)=>{var o;const p=(o=m.table.rows[0])==null?void 0:o.cells[v].type;if(!(p==="actions"||p==="slot"))return(e,a)=>c(e,a,v)},c=(t,v,p)=>{const o=t.cells[p],e=v.cells[p];return o.type==="text"&&e.type==="text"||o.type==="tag"&&e.type==="tag"?o.text.localeCompare(e.text):o.type==="tags"&&e.type==="tags"?o.tags[0].text.localeCompare(e.tags[0].text):o.type==="secret"&&e.type==="secret"||o.type==="link"&&e.type==="link"?o.text.localeCompare(e.text):(o.type==="actions"&&e.type==="actions",0)},C=async()=>{var t;m.fields?(t=_.value)==null||t.open():m.create&&await m.create({})},k=D(!1);async function w(t,v){if(!k.value){k.value=!0;try{"onClick"in t?await t.onClick({key:v.key}):"link"in t&&(typeof t.link=="string"&&E(t.link)?open(t.link,"_blank"):L.push(t.link))}finally{k.value=!1}}}const $=K(()=>({"--columnCount":`${m.table.columns.length}`}));return(t,v)=>{const p=ee("RouterLink");return s(),V(x,null,[y(n(M),{direction:"vertical",class:"crud-view"},{default:l(()=>{var o;return[y(n(F),{align:"center",justify:"space-between"},{default:l(()=>[t.title?(s(),r(n(te),{key:0},{default:l(()=>[d(f(t.title),1)]),_:1})):b("",!0),A(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),r(n(R),{key:0},{default:l(()=>[d(f(t.description)+" ",1),A(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),r(O,{key:0,path:t.docsPath},null,8,["path"])):b("",!0)]),_:3})):b("",!0),y(n(F),{gap:"middle"},{default:l(()=>[t.createButtonText?(s(),r(n(ae),{key:0,type:"primary",onClick:C},{default:l(()=>[d(f(t.createButtonText),1)]),_:1})):b("",!0),A(t.$slots,"secondary",{},void 0,!0)]),_:3}),A(t.$slots,"extra",{},void 0,!0),y(n(le),{"filter-dropdown":!0,size:"small",style:ne($.value),"data-source":t.table.rows,loading:k.value||t.loading&&!t.live,height:400,columns:(o=t.table.columns)==null?void 0:o.map((e,a)=>{var i;return{...e,key:a,filtered:!0,align:(i=e.align)!=null?i:"center",sorter:I(e,a)}})},{emptyText:l(()=>[d(f(t.emptyTitle),1)]),headerCell:l(e=>[d(f(e.title),1)]),bodyCell:l(({column:{key:e},record:a})=>[a.cells[e].type==="slot"?A(t.$slots,a.cells[e].key,{key:0,payload:a.cells[e].payload},void 0,!0):(s(),r(n(pe),{key:1,open:a.cells[e].hover?void 0:!1},{content:l(()=>[y(n(R),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:a.cells[e].hover},null,8,["content"])]),default:l(()=>[a.cells[e].type==="text"?(s(),r(n(B),{key:0,secondary:a.cells[e].secondary,code:a.cells[e].code},{default:l(()=>[y(n(de),{dot:a.cells[e].contentType==="warning",color:"#faad14"},{default:l(()=>[d(f(a.cells[e].text),1)]),_:2},1032,["dot"])]),_:2},1032,["secondary","code"])):a.cells[e].type==="secret"?(s(),r(n(B),{key:1,copyable:{text:a.cells[e].text}},{default:l(()=>[d(" ******** ")]),_:2},1032,["copyable"])):a.cells[e].type==="tag"?(s(),r(n(U),{key:2,color:a.cells[e].tagColor},{default:l(()=>[d(f(a.cells[e].text),1)]),_:2},1032,["color"])):a.cells[e].type==="tags"?(s(),r(n(M),{key:3},{default:l(()=>[(s(!0),V(x,null,T(a.cells[e].tags,(i,h)=>(s(),r(n(U),{key:h,color:i.color},{default:l(()=>[d(f(i.text),1)]),_:2},1032,["color"]))),128))]),_:2},1024)):a.cells[e].type==="link"?(s(),r(p,{key:4,to:a.cells[e].to},{default:l(()=>[d(f(a.cells[e].text),1)]),_:2},1032,["to"])):a.cells[e].type==="actions"?(s(),r(n(se),{key:5},{overlay:l(()=>[y(n(oe),{disabled:k.value},{default:l(()=>[(s(!0),V(x,null,T(a.cells[e].actions.filter(i=>!i.hide),(i,h)=>(s(),r(n(ue),{key:h,danger:i.dangerous,onClick:S=>w(i,a)},{default:l(()=>[re("div",me,[i.icon?(s(),r(ie(i.icon),{key:0})):b("",!0),y(n(B),null,{default:l(()=>[d(f(i.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[y(n(j),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):b("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(s(),r(n(z),{key:0,justify:"end",gutter:10},{default:l(()=>[y(n(N),null,{default:l(()=>[y(n(ce),{size:"small"})]),_:1}),y(n(N),null,{default:l(()=>[y(n(B),null,{default:l(()=>[d(" auto updating ")]),_:1})]),_:1})]),_:1})):b("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields&&t.create?(s(),r(fe,{key:0,ref_key:"modalRef",ref:_,fields:t.fields,"entity-name":t.entityName,create:t.create},null,8,["fields","entity-name","create"])):b("",!0)],64)}}});const Ae=ye(ve,[["__scopeId","data-v-e8e1b31a"]]);export{Ae as C};
//# sourceMappingURL=CrudView.1f8b884c.js.map
