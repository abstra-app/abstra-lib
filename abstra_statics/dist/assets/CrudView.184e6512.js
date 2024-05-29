import{A as F,a as j,r as E}from"./router.bfd42852.js";import{_ as G}from"./DocsButton.vue_vue_type_script_setup_true_lang.b8f40ee0.js";import{i as O}from"./url.8c754a91.js";import{d as U,a0 as T,y as I,b as n,ey as v,dq as B,eA as g,eD as R,e as w,N as q,r as D,c as i,w as l,u as s,f as c,au as y,eJ as f,eH as z,bB as J,ct as L,ah as W,aG as $,cF as Y,a as Q,bI as X,cI as K,ez as ee,bG as te,bk as ae,bi as le,eI as ne,cC as se,bj as oe,cG as ue,E as re}from"./outputWidgets.d33a61bd.js";import{A as P}from"./Paragraph.6e3c34f9.js";import{A as ie,F as pe}from"./Form.41dae759.js";import{M as ce}from"./Modal.3a17d8d4.js";import{A as H}from"./index.5d628308.js";import{A as de}from"./Title.51239574.js";import{A as S}from"./Text.7588bb7f.js";import{A as ye}from"./index.789baac6.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[d]="715faf68-09b2-4238-93a3-68b05b90ce52",h._sentryDebugIdIdentifier="sentry-dbid-715faf68-09b2-4238-93a3-68b05b90ce52")}catch{}})();const me=["width","height","fill","transform"],fe={key:0},ve=w("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"},null,-1),he=[ve],ge={key:1},ke=w("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"},null,-1),Ae=w("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"},null,-1),be=[ke,Ae],_e={key:2},we=w("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"},null,-1),Ce=[we],Ve={key:3},Ze=w("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"},null,-1),Be=[Ze],Me={key:4},Ie=w("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"},null,-1),Te=[Ie],Se={key:5},$e=w("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"},null,-1),Ne=[$e],De={name:"PhDotsThree"},ze=U({...De,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(h){const d=h,C=T("weight","regular"),b=T("size","1em"),M=T("color","currentColor"),r=T("mirrored",!1),m=I(()=>{var p;return(p=d.weight)!=null?p:C}),Z=I(()=>{var p;return(p=d.size)!=null?p:b}),V=I(()=>{var p;return(p=d.color)!=null?p:M}),t=I(()=>d.mirrored!==void 0?d.mirrored?"scale(-1, 1)":void 0:r?"scale(-1, 1)":void 0);return(p,_)=>(n(),v("svg",R({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:Z.value,height:Z.value,fill:V.value,transform:t.value},p.$attrs),[B(p.$slots,"default"),m.value==="bold"?(n(),v("g",fe,he)):m.value==="duotone"?(n(),v("g",ge,be)):m.value==="fill"?(n(),v("g",_e,Ce)):m.value==="light"?(n(),v("g",Ve,Be)):m.value==="regular"?(n(),v("g",Me,Te)):m.value==="thin"?(n(),v("g",Se,Ne)):g("",!0)],16,me))}}),Pe=U({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(h,{expose:d,emit:C}){const b=h,M=`Create a new ${b.entityName}`,r=q({inputValue:{}}),m=D(!1),Z=()=>m.value=!0,V=()=>m.value=!1,t=()=>{C("create",r.inputValue),r.inputValue={},V()},p=(k,a)=>{const e=k.target.value,u=b.fields.find(A=>A.key===a);u!=null&&u.format?r.inputValue[a]=u.format(e):r.inputValue[a]=e},_=(k,a)=>{const e=k.target.value,u=b.fields.find(A=>A.key===a);u!=null&&u.blur?r.inputValue[a]=u.blur(e):r.inputValue[a]=e};return d({open:Z,close:V}),(k,a)=>(n(),i(s(ce),{open:m.value,title:M,onCancel:V,onOk:t},{default:l(()=>[c(s(P),null,{default:l(()=>[y(" You may edit the "+f(k.entityName)+" name afterwards at Settings. ",1)]),_:1}),c(s(pe),{layout:"vertical"},{default:l(()=>[(n(!0),v($,null,z(k.fields,e=>{var u;return n(),i(s(ie),{key:e.key,label:e.label,help:(u=e.hint)==null?void 0:u.call(e,r.inputValue[e.key])},{default:l(()=>{var A,N,x;return[!e.type||e.type==="text"||e.type==="password"?(n(),i(s(J),{key:0,value:r.inputValue[e.key],"onUpdate:value":o=>r.inputValue[e.key]=o,placeholder:(A=e.placeholder)!=null?A:"",type:(N=e.type)!=null?N:"text",onInput:o=>p(o,e.key),onBlur:o=>_(o,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(n(),i(s(L),{key:1,value:r.inputValue[e.key],"onUpdate:value":o=>r.inputValue[e.key]=o,placeholder:(x=e.placeholder)!=null?x:"",onInput:o=>p(o,e.key),onBlur:o=>_(o,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(e.type)?(n(),i(s(W),{key:2,value:r.inputValue[e.key],"onUpdate:value":o=>r.inputValue[e.key]=o},{default:l(()=>[(n(!0),v($,null,z(e.type,o=>(n(),i(s(Y),{key:typeof o=="string"?o:o.value,value:typeof o=="string"?o:o.value},{default:l(()=>[y(f(typeof o=="string"?o:o.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):g("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),Ue={class:"action-item"},xe=U({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(h,{emit:d}){const C=h,b=D(null),M=()=>{var t;C.fields?(t=b.value)==null||t.open():d("create",{})},r=D(!1);async function m(t,p){var _;if(!r.value){r.value=!0;try{"onClick"in t?await((_=t.onClick)==null?void 0:_.call(t,{key:p.key})):"link"in t&&(typeof t.link=="string"&&O(t.link)?open(t.link,"_blank"):E.push(t.link))}finally{r.value=!1}}}async function Z(t){d("create",t)}const V=I(()=>({"--columnCount":`${C.table.columns.length}`}));return(t,p)=>{const _=Q("router-link");return n(),v($,null,[c(s(ue),{direction:"vertical",class:"crud-view"},{default:l(()=>{var k;return[c(s(H),{align:"center",justify:"space-between"},{default:l(()=>[t.title?(n(),i(s(de),{key:0},{default:l(()=>[y(f(t.title),1)]),_:1})):g("",!0),B(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(n(),i(s(P),{key:0},{default:l(()=>[y(f(t.description)+" ",1),B(t.$slots,"description",{},void 0,!0),t.docsPath?(n(),i(G,{key:0,path:t.docsPath},null,8,["path"])):g("",!0)]),_:3})):g("",!0),c(s(H),{gap:"middle"},{default:l(()=>[t.createButtonText?(n(),i(s(X),{key:0,type:"primary",onClick:M},{default:l(()=>[y(f(t.createButtonText),1)]),_:1})):g("",!0),B(t.$slots,"secondary",{},void 0,!0)]),_:3}),B(t.$slots,"extra",{},void 0,!0),c(s(K),{size:"small",style:ee(V.value),"data-source":t.table.rows,loading:r.value||t.loading&&!t.live,height:400,columns:(k=t.table.columns)==null?void 0:k.map(({name:a,align:e},u,A)=>({title:a,key:u,align:e!=null?e:"center"}))},{emptyText:l(()=>[y(f(t.emptyTitle),1)]),headerCell:l(a=>[y(f(a.title),1)]),bodyCell:l(({column:{key:a},record:e})=>[e.cells[a].type==="slot"?B(t.$slots,e.cells[a].key,{key:0,payload:e.cells[a].payload},void 0,!0):(n(),i(s(se),{key:1,open:e.cells[a].hover?void 0:!1},{content:l(()=>[c(s(P),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[a].hover},null,8,["content"])]),default:l(()=>[e.cells[a].type==="text"?(n(),i(s(S),{key:0,secondary:e.cells[a].secondary,code:e.cells[a].code},{default:l(()=>[y(f(e.cells[a].text),1)]),_:2},1032,["secondary","code"])):e.cells[a].type==="secret"?(n(),i(s(S),{key:1,copyable:{text:e.cells[a].text}},{default:l(()=>[y(" ******** ")]),_:2},1032,["copyable"])):e.cells[a].type==="tag"?(n(),i(s(ye),{key:2,color:e.cells[a].tagColor},{default:l(()=>[y(f(e.cells[a].text),1)]),_:2},1032,["color"])):e.cells[a].type==="link"?(n(),i(_,{key:3,to:e.cells[a].to},{default:l(()=>[y(f(e.cells[a].text),1)]),_:2},1032,["to"])):e.cells[a].type==="actions"?(n(),i(s(te),{key:4},{overlay:l(()=>[c(s(ae),{disabled:r.value},{default:l(()=>[(n(!0),v($,null,z(e.cells[a].actions.filter(u=>!u.hide),(u,A)=>(n(),i(s(le),{key:A,danger:u.dangerous,onClick:N=>m(u,e)},{default:l(()=>[w("div",Ue,[u.icon?(n(),i(ne(u.icon),{key:0})):g("",!0),c(s(S),null,{default:l(()=>[y(f(u.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[c(s(ze),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):g("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(n(),i(s(j),{key:0,justify:"end",gutter:10},{default:l(()=>[c(s(F),null,{default:l(()=>[c(s(oe),{size:"small"})]),_:1}),c(s(F),null,{default:l(()=>[c(s(S),null,{default:l(()=>[y(" auto updating ")]),_:1})]),_:1})]),_:1})):g("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(n(),i(Pe,{key:0,ref_key:"modalRef",ref:b,fields:t.fields,"entity-name":t.entityName,onCreate:Z},null,8,["fields","entity-name"])):g("",!0)],64)}}});const Ye=re(xe,[["__scopeId","data-v-f0474cdf"]]);export{Ye as C};
//# sourceMappingURL=CrudView.184e6512.js.map
