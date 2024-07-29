import{A as M,a as z,r as F}from"./router.84750da7.js";import{_ as L}from"./DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js";import{i as O}from"./url.275f2272.js";import{G as E}from"./PhDotsThree.vue.edb3e473.js";import{d as x,D as J,e as N,c as r,w as l,u as n,o as s,b as i,ax as c,eA as d,cU as S,W as B,eD as U,co as j,bD as G,ct as W,as as q,aJ as I,cG as X,R as f,cn as Y,cy as Z,f as H,r as Q,c_ as P,cW as K,Z as A,bL as ee,cJ as te,X as ae,cV as V,bJ as le,bq as ne,bo as se,a as oe,eE as ue,cB as re,bp as pe,$ as ie}from"./vue-router.70e693dc.js";import{A as ce}from"./index.5c561278.js";import{A as de}from"./index.22d982fc.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[_]="1da3dade-1d2d-4e3e-ac23-ea96c5c1de03",v._sentryDebugIdIdentifier="sentry-dbid-1da3dade-1d2d-4e3e-ac23-ea96c5c1de03")}catch{}})();const ye=x({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(v,{expose:_,emit:g}){const b=v,T=`Create a new ${b.entityName}`,p=J({inputValue:{}}),h=N(!1),$=()=>h.value=!0,C=()=>h.value=!1,t=()=>{g("create",p.inputValue),p.inputValue={},C()},w=(y,a)=>{const e=y.target.value,u=b.fields.find(m=>m.key===a);u!=null&&u.format?p.inputValue[a]=u.format(e):p.inputValue[a]=e},k=(y,a)=>{const e=y.target.value,u=b.fields.find(m=>m.key===a);u!=null&&u.blur?p.inputValue[a]=u.blur(e):p.inputValue[a]=e};return _({open:$,close:C}),(y,a)=>(s(),r(n(Z),{open:h.value,title:T,onCancel:C,onOk:t},{default:l(()=>[i(n(S),null,{default:l(()=>[c(" You may edit the "+d(y.entityName)+" name afterwards at Settings. ",1)]),_:1}),i(n(Y),{layout:"vertical"},{default:l(()=>[(s(!0),B(I,null,U(y.fields,e=>{var u;return s(),r(n(j),{key:e.key,label:e.label,help:(u=e.hint)==null?void 0:u.call(e,p.inputValue[e.key])},{default:l(()=>{var m,D,R;return[!e.type||e.type==="text"||e.type==="password"?(s(),r(n(G),{key:0,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(m=e.placeholder)!=null?m:"",type:(D=e.type)!=null?D:"text",onInput:o=>w(o,e.key),onBlur:o=>k(o,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):e.type==="multiline-text"?(s(),r(n(W),{key:1,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o,placeholder:(R=e.placeholder)!=null?R:"",onInput:o=>w(o,e.key),onBlur:o=>k(o,e.key)},null,8,["value","onUpdate:value","placeholder","onInput","onBlur"])):Array.isArray(e.type)?(s(),r(n(q),{key:2,value:p.inputValue[e.key],"onUpdate:value":o=>p.inputValue[e.key]=o},{default:l(()=>[(s(!0),B(I,null,U(e.type,o=>(s(),r(n(X),{key:typeof o=="string"?o:o.value,value:typeof o=="string"?o:o.value},{default:l(()=>[c(d(typeof o=="string"?o:o.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):f("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},fe=x({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(v,{emit:_}){const g=v,b=N(null),T=()=>{var t;g.fields?(t=b.value)==null||t.open():_("create",{})},p=N(!1);async function h(t,w){var k;if(!p.value){p.value=!0;try{"onClick"in t?await((k=t.onClick)==null?void 0:k.call(t,{key:w.key})):"link"in t&&(typeof t.link=="string"&&O(t.link)?open(t.link,"_blank"):F.push(t.link))}finally{p.value=!1}}}async function $(t){_("create",t)}const C=H(()=>({"--columnCount":`${g.table.columns.length}`}));return(t,w)=>{const k=Q("RouterLink");return s(),B(I,null,[i(n(de),{direction:"vertical",class:"crud-view"},{default:l(()=>{var y;return[i(n(P),{align:"center",justify:"space-between"},{default:l(()=>[t.title?(s(),r(n(K),{key:0},{default:l(()=>[c(d(t.title),1)]),_:1})):f("",!0),A(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),r(n(S),{key:0},{default:l(()=>[c(d(t.description)+" ",1),A(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),r(L,{key:0,path:t.docsPath},null,8,["path"])):f("",!0)]),_:3})):f("",!0),i(n(P),{gap:"middle"},{default:l(()=>[t.createButtonText?(s(),r(n(ee),{key:0,type:"primary",onClick:T},{default:l(()=>[c(d(t.createButtonText),1)]),_:1})):f("",!0),A(t.$slots,"secondary",{},void 0,!0)]),_:3}),A(t.$slots,"extra",{},void 0,!0),i(n(te),{size:"small",style:ae(C.value),"data-source":t.table.rows,loading:p.value||t.loading&&!t.live,height:400,columns:(y=t.table.columns)==null?void 0:y.map(({name:a,align:e},u,m)=>({title:a,key:u,align:e!=null?e:"center"}))},{emptyText:l(()=>[c(d(t.emptyTitle),1)]),headerCell:l(a=>[c(d(a.title),1)]),bodyCell:l(({column:{key:a},record:e})=>[e.cells[a].type==="slot"?A(t.$slots,e.cells[a].key,{key:0,payload:e.cells[a].payload},void 0,!0):(s(),r(n(re),{key:1,open:e.cells[a].hover?void 0:!1},{content:l(()=>[i(n(S),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[a].hover},null,8,["content"])]),default:l(()=>[e.cells[a].type==="text"?(s(),r(n(V),{key:0,secondary:e.cells[a].secondary,type:e.cells[a].contentType,code:e.cells[a].code},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["secondary","type","code"])):e.cells[a].type==="secret"?(s(),r(n(V),{key:1,copyable:{text:e.cells[a].text}},{default:l(()=>[c(" ******** ")]),_:2},1032,["copyable"])):e.cells[a].type==="tag"?(s(),r(n(ce),{key:2,color:e.cells[a].tagColor},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["color"])):e.cells[a].type==="link"?(s(),r(k,{key:3,to:e.cells[a].to},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["to"])):e.cells[a].type==="actions"?(s(),r(n(le),{key:4},{overlay:l(()=>[i(n(ne),{disabled:p.value},{default:l(()=>[(s(!0),B(I,null,U(e.cells[a].actions.filter(u=>!u.hide),(u,m)=>(s(),r(n(se),{key:m,danger:u.dangerous,onClick:D=>h(u,e)},{default:l(()=>[oe("div",me,[u.icon?(s(),r(ue(u.icon),{key:0})):f("",!0),i(n(V),null,{default:l(()=>[c(d(u.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[i(n(E),{style:{cursor:"pointer"},size:"25px"})]),_:2},1024)):f("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(s(),r(n(z),{key:0,justify:"end",gutter:10},{default:l(()=>[i(n(M),null,{default:l(()=>[i(n(pe),{size:"small"})]),_:1}),i(n(M),null,{default:l(()=>[i(n(V),null,{default:l(()=>[c(" auto updating ")]),_:1})]),_:1})]),_:1})):f("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(s(),r(ye,{key:0,ref_key:"modalRef",ref:b,fields:t.fields,"entity-name":t.entityName,onCreate:$},null,8,["fields","entity-name"])):f("",!0)],64)}}});const we=ie(fe,[["__scopeId","data-v-4f2082b5"]]);export{we as C};
//# sourceMappingURL=CrudView.4095bf10.js.map
