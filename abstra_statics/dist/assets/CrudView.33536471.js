import{A as x,a as P,r as z}from"./router.12f05cd3.js";import{_ as F}from"./DocsButton.vue_vue_type_script_setup_true_lang.f85ca3f0.js";import{i as O}from"./url.7bb20011.js";import{G as j}from"./PhDotsThree.vue.605c6651.js";import{d as M,D as E,e as N,c as r,w as a,u as n,o as s,b as c,ax as i,et as y,cW as S,W as B,ew as U,co as J,bD as W,ct as X,as as Y,aJ as I,cI as q,R as m,cn as G,cA as Z,f as H,r as Q,d0 as L,cY as K,Z as A,bL as ee,cL as te,X as le,cX as V,bJ as ae,bq as ne,bo as se,a as oe,ex as ue,cD as re,bp as pe,$ as ce}from"./vue-router.c50e8c30.js";import{A as ie}from"./index.29954f02.js";import{A as ye}from"./index.338d62a0.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b=new Error().stack;b&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[b]="f5597dbe-7fd8-4bbc-bb5c-7f818cc5dcf3",v._sentryDebugIdIdentifier="sentry-dbid-f5597dbe-7fd8-4bbc-bb5c-7f818cc5dcf3")}catch{}})();const de=M({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(v,{expose:b,emit:g}){const k=v,T=`Create a new ${k.entityName}`,p=E({inputValue:{}}),h=N(!1),$=()=>h.value=!0,C=()=>h.value=!1,t=()=>{g("create",p.inputValue),p.inputValue={},C()},w=(d,l)=>{const e=d.target.value,u=k.fields.find(f=>f.key===l);u!=null&&u.format?p.inputValue[l]=u.format(e):p.inputValue[l]=e},_=(d,l)=>{const e=d.target.value,u=k.fields.find(f=>f.key===l);u!=null&&u.blur?p.inputValue[l]=u.blur(e):p.inputValue[l]=e};return b({open:$,close:C}),(d,l)=>(s(),r(n(Z),{open:h.value,title:T,onCancel:C,onOk:t},{default:a(()=>[c(n(S),null,{default:a(()=>[i(" You may edit the "+y(d.entityName)+" name afterwards at Settings. ",1)]),_:1}),c(n(G),{layout:"vertical"},{default:a(()=>[(s(!0),B(I,null,U(d.fields,e=>{var u;return s(),r(n(J),{key:e.key,label:e.label,help:(u=e.hint)==null?void 0:u.call(e,p.inputValue[e.key])},{default:a(()=>{var f,D,R;return[!e.type||e.type==="text"||e.type==="password"?(s(),r(n(W),{key:0,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(f=e.placeholder)!=null?f:"",type:(D=e.type)!=null?D:"text",onInput:o=>w(o,e.key),onBlur:o=>_(o,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(s(),r(n(X),{key:1,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(R=e.placeholder)!=null?R:"",onInput:o=>w(o,e.key),onBlur:o=>_(o,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(e.type)?(s(),r(n(Y),{key:2,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o},{default:a(()=>[(s(!0),B(I,null,U(e.type,o=>(s(),r(n(q),{key:typeof o=="string"?o:o.value,value:typeof o=="string"?o:o.value},{default:a(()=>[i(y(typeof o=="string"?o:o.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):m("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),fe={class:"action-item"},me=M({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(v,{emit:b}){const g=v,k=N(null),T=()=>{var t;g.fields?(t=k.value)==null||t.open():b("create",{})},p=N(!1);async function h(t,w){var _;if(!p.value){p.value=!0;try{"onClick"in t?await((_=t.onClick)==null?void 0:_.call(t,{key:w.key})):"link"in t&&(typeof t.link=="string"&&O(t.link)?open(t.link,"_blank"):z.push(t.link))}finally{p.value=!1}}}async function $(t){b("create",t)}const C=H(()=>({"--columnCount":`${g.table.columns.length}`}));return(t,w)=>{const _=Q("RouterLink");return s(),B(I,null,[c(n(ye),{direction:"vertical",class:"crud-view"},{default:a(()=>{var d;return[c(n(L),{align:"center",justify:"space-between"},{default:a(()=>[t.title?(s(),r(n(K),{key:0},{default:a(()=>[i(y(t.title),1)]),_:1})):m("",!0),A(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),r(n(S),{key:0},{default:a(()=>[i(y(t.description)+" ",1),A(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),r(F,{key:0,path:t.docsPath},null,8,["path"])):m("",!0)]),_:3})):m("",!0),c(n(L),{gap:"middle"},{default:a(()=>[t.createButtonText?(s(),r(n(ee),{key:0,type:"primary",onClick:T},{default:a(()=>[i(y(t.createButtonText),1)]),_:1})):m("",!0),A(t.$slots,"secondary",{},void 0,!0)]),_:3}),A(t.$slots,"extra",{},void 0,!0),c(n(te),{size:"small",style:le(C.value),"data-source":t.table.rows,loading:p.value||t.loading&&!t.live,height:400,columns:(d=t.table.columns)==null?void 0:d.map(({name:l,align:e},u,f)=>({title:l,key:u,align:e!=null?e:"center"}))},{emptyText:a(()=>[i(y(t.emptyTitle),1)]),headerCell:a(l=>[i(y(l.title),1)]),bodyCell:a(({column:{key:l},record:e})=>[e.cells[l].type==="slot"?A(t.$slots,e.cells[l].key,{key:0,payload:e.cells[l].payload},void 0,!0):(s(),r(n(re),{key:1,open:e.cells[l].hover?void 0:!1},{content:a(()=>[c(n(S),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[l].hover},null,8,["content"])]),default:a(()=>[e.cells[l].type==="text"?(s(),r(n(V),{key:0,secondary:e.cells[l].secondary,type:e.cells[l].contentType,code:e.cells[l].code},{default:a(()=>[i(y(e.cells[l].text),1)]),_:2},1032,["secondary","type","code"])):e.cells[l].type==="secret"?(s(),r(n(V),{key:1,copyable:{text:e.cells[l].text}},{default:a(()=>[i(" ******** ")]),_:2},1032,["copyable"])):e.cells[l].type==="tag"?(s(),r(n(ie),{key:2,color:e.cells[l].tagColor},{default:a(()=>[i(y(e.cells[l].text),1)]),_:2},1032,["color"])):e.cells[l].type==="link"?(s(),r(_,{key:3,to:e.cells[l].to},{default:a(()=>[i(y(e.cells[l].text),1)]),_:2},1032,["to"])):e.cells[l].type==="actions"?(s(),r(n(ae),{key:4},{overlay:a(()=>[c(n(ne),{disabled:p.value},{default:a(()=>[(s(!0),B(I,null,U(e.cells[l].actions.filter(u=>!u.hide),(u,f)=>(s(),r(n(se),{key:f,danger:u.dangerous,onClick:D=>h(u,e)},{default:a(()=>[oe("div",fe,[u.icon?(s(),r(ue(u.icon),{key:0})):m("",!0),c(n(V),null,{default:a(()=>[i(y(u.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:a(()=>[c(n(j),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):m("",!0)]),_:2},1032,["open"]))]),footer:a(()=>[t.live?(s(),r(n(P),{key:0,justify:"end",gutter:10},{default:a(()=>[c(n(x),null,{default:a(()=>[c(n(pe),{size:"small"})]),_:1}),c(n(x),null,{default:a(()=>[c(n(V),null,{default:a(()=>[i(" auto updating ")]),_:1})]),_:1})]),_:1})):m("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(s(),r(de,{key:0,ref_key:"modalRef",ref:k,fields:t.fields,"entity-name":t.entityName,onCreate:$},null,8,["fields","entity-name"])):m("",!0)],64)}}});const we=ce(me,[["__scopeId","data-v-4f2082b5"]]);export{we as C};
//# sourceMappingURL=CrudView.33536471.js.map
