import{A as R,a as z,r as F}from"./router.2490aba0.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.66c3e1cd.js";import{i as O}from"./url.c0fe2d6b.js";import{G as j}from"./PhDotsThree.vue.1de62c89.js";import{d as P,D as E,e as N,c as r,w as a,u as n,o as s,b as c,ax as i,eu as y,cX as S,W as B,ex as U,co as J,bD as X,ct as Y,as as Z,aJ as I,cI as q,R as f,cn as G,cA as W,f as H,r as Q,d1 as x,cZ as K,Z as A,bL as ee,cM as te,X as le,cY as V,bJ as ae,bq as ne,bo as se,a as oe,ey as ue,cD as re,bp as pe,$ as ce}from"./vue-router.28b113b5.js";import{A as ie}from"./index.b93b64d8.js";import{A as ye}from"./index.88847a2c.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[_]="16e3bcd8-91c8-4443-8295-88c95433cc61",v._sentryDebugIdIdentifier="sentry-dbid-16e3bcd8-91c8-4443-8295-88c95433cc61")}catch{}})();const de=P({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(v,{expose:_,emit:g}){const k=v,T=`Create a new ${k.entityName}`,p=E({inputValue:{}}),h=N(!1),$=()=>h.value=!0,C=()=>h.value=!1,t=()=>{g("create",p.inputValue),p.inputValue={},C()},w=(d,l)=>{const e=d.target.value,u=k.fields.find(m=>m.key===l);u!=null&&u.format?p.inputValue[l]=u.format(e):p.inputValue[l]=e},b=(d,l)=>{const e=d.target.value,u=k.fields.find(m=>m.key===l);u!=null&&u.blur?p.inputValue[l]=u.blur(e):p.inputValue[l]=e};return _({open:$,close:C}),(d,l)=>(s(),r(n(W),{open:h.value,title:T,onCancel:C,onOk:t},{default:a(()=>[c(n(S),null,{default:a(()=>[i(" You may edit the "+y(d.entityName)+" name afterwards at Settings. ",1)]),_:1}),c(n(G),{layout:"vertical"},{default:a(()=>[(s(!0),B(I,null,U(d.fields,e=>{var u;return s(),r(n(J),{key:e.key,label:e.label,help:(u=e.hint)==null?void 0:u.call(e,p.inputValue[e.key])},{default:a(()=>{var m,D,M;return[!e.type||e.type==="text"||e.type==="password"?(s(),r(n(X),{key:0,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(m=e.placeholder)!=null?m:"",type:(D=e.type)!=null?D:"text",onInput:o=>w(o,e.key),onBlur:o=>b(o,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(s(),r(n(Y),{key:1,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(M=e.placeholder)!=null?M:"",onInput:o=>w(o,e.key),onBlur:o=>b(o,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(e.type)?(s(),r(n(Z),{key:2,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o},{default:a(()=>[(s(!0),B(I,null,U(e.type,o=>(s(),r(n(q),{key:typeof o=="string"?o:o.value,value:typeof o=="string"?o:o.value},{default:a(()=>[i(y(typeof o=="string"?o:o.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):f("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},fe=P({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(v,{emit:_}){const g=v,k=N(null),T=()=>{var t;g.fields?(t=k.value)==null||t.open():_("create",{})},p=N(!1);async function h(t,w){var b;if(!p.value){p.value=!0;try{"onClick"in t?await((b=t.onClick)==null?void 0:b.call(t,{key:w.key})):"link"in t&&(typeof t.link=="string"&&O(t.link)?open(t.link,"_blank"):F.push(t.link))}finally{p.value=!1}}}async function $(t){_("create",t)}const C=H(()=>({"--columnCount":`${g.table.columns.length}`}));return(t,w)=>{const b=Q("RouterLink");return s(),B(I,null,[c(n(ye),{direction:"vertical",class:"crud-view"},{default:a(()=>{var d;return[c(n(x),{align:"center",justify:"space-between"},{default:a(()=>[t.title?(s(),r(n(K),{key:0},{default:a(()=>[i(y(t.title),1)]),_:1})):f("",!0),A(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),r(n(S),{key:0},{default:a(()=>[i(y(t.description)+" ",1),A(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),r(L,{key:0,path:t.docsPath},null,8,["path"])):f("",!0)]),_:3})):f("",!0),c(n(x),{gap:"middle"},{default:a(()=>[t.createButtonText?(s(),r(n(ee),{key:0,type:"primary",onClick:T},{default:a(()=>[i(y(t.createButtonText),1)]),_:1})):f("",!0),A(t.$slots,"secondary",{},void 0,!0)]),_:3}),A(t.$slots,"extra",{},void 0,!0),c(n(te),{size:"small",style:le(C.value),"data-source":t.table.rows,loading:p.value||t.loading&&!t.live,height:400,columns:(d=t.table.columns)==null?void 0:d.map(({name:l,align:e},u,m)=>({title:l,key:u,align:e!=null?e:"center"}))},{emptyText:a(()=>[i(y(t.emptyTitle),1)]),headerCell:a(l=>[i(y(l.title),1)]),bodyCell:a(({column:{key:l},record:e})=>[e.cells[l].type==="slot"?A(t.$slots,e.cells[l].key,{key:0,payload:e.cells[l].payload},void 0,!0):(s(),r(n(re),{key:1,open:e.cells[l].hover?void 0:!1},{content:a(()=>[c(n(S),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[l].hover},null,8,["content"])]),default:a(()=>[e.cells[l].type==="text"?(s(),r(n(V),{key:0,secondary:e.cells[l].secondary,type:e.cells[l].contentType,code:e.cells[l].code},{default:a(()=>[i(y(e.cells[l].text),1)]),_:2},1032,["secondary","type","code"])):e.cells[l].type==="secret"?(s(),r(n(V),{key:1,copyable:{text:e.cells[l].text}},{default:a(()=>[i(" ******** ")]),_:2},1032,["copyable"])):e.cells[l].type==="tag"?(s(),r(n(ie),{key:2,color:e.cells[l].tagColor},{default:a(()=>[i(y(e.cells[l].text),1)]),_:2},1032,["color"])):e.cells[l].type==="link"?(s(),r(b,{key:3,to:e.cells[l].to},{default:a(()=>[i(y(e.cells[l].text),1)]),_:2},1032,["to"])):e.cells[l].type==="actions"?(s(),r(n(ae),{key:4},{overlay:a(()=>[c(n(ne),{disabled:p.value},{default:a(()=>[(s(!0),B(I,null,U(e.cells[l].actions.filter(u=>!u.hide),(u,m)=>(s(),r(n(se),{key:m,danger:u.dangerous,onClick:D=>h(u,e)},{default:a(()=>[oe("div",me,[u.icon?(s(),r(ue(u.icon),{key:0})):f("",!0),c(n(V),null,{default:a(()=>[i(y(u.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:a(()=>[c(n(j),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):f("",!0)]),_:2},1032,["open"]))]),footer:a(()=>[t.live?(s(),r(n(z),{key:0,justify:"end",gutter:10},{default:a(()=>[c(n(R),null,{default:a(()=>[c(n(pe),{size:"small"})]),_:1}),c(n(R),null,{default:a(()=>[c(n(V),null,{default:a(()=>[i(" auto updating ")]),_:1})]),_:1})]),_:1})):f("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(s(),r(de,{key:0,ref_key:"modalRef",ref:k,fields:t.fields,"entity-name":t.entityName,onCreate:$},null,8,["fields","entity-name"])):f("",!0)],64)}}});const we=ce(fe,[["__scopeId","data-v-4f2082b5"]]);export{we as C};
//# sourceMappingURL=CrudView.f125f931.js.map
