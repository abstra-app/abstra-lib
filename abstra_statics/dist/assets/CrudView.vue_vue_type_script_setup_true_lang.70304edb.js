import{g as M}from"./icons.bf6505eb.js";import{d as V,H as D,r as N,b as n,c as i,w as t,u as a,f as s,aT as u,eC as c,et as b,eB as T,c2 as U,af as F,bq as A,cQ as O,ew as g,J as $,a as R,c9 as z,cS as E,ev as j,bO as q,bM as H,I as J,c7 as L,bN as P,e as Q}from"./outputWidgets.52de64cd.js";import{A as S,a as B}from"./index.19e4a065.js";import{A as Y,M as G,c as K}from"./Title.baba2b21.js";import{F as W}from"./Form.09072055.js";import{A as X}from"./index.5718341d.js";import{A as I}from"./index.f6c308cc.js";import{A as Z}from"./index.5a37ef67.js";import{A as x}from"./index.1ebdd57a.js";import{A as ee}from"./index.c0e74c90.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[f]="1af4a097-5396-4476-9aef-df9f1272e7dc",p._sentryDebugIdIdentifier="sentry-dbid-1af4a097-5396-4476-9aef-df9f1272e7dc")}catch{}})();const te=V({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(p,{expose:f,emit:m}){const w=`Create a new ${p.entityName}`,y=D({inputValue:{}}),v=N(!1),l=()=>v.value=!0,k=()=>v.value=!1,h=()=>{m("create",y.inputValue),k()};return f({open:l,close:k}),(_,r)=>(n(),i(a(G),{open:v.value,title:w,onCancel:k,onOk:h},{default:t(()=>[s(a(S),null,{default:t(()=>[u(" You may edit the "+c(_.entityName)+" name afterwards at Settings. ",1)]),_:1}),s(a(W),{layout:"vertical"},{default:t(()=>[(n(!0),b(A,null,T(_.fields,e=>(n(),i(a(Y),{key:e.key,label:e.label},{default:t(()=>{var d;return[!e.type||typeof e.type=="string"?(n(),i(a(U),{key:0,value:y.inputValue[e.key],"onUpdate:value":o=>y.inputValue[e.key]=o,type:(d=e.type)!=null?d:"text"},null,8,["value","onUpdate:value","type"])):Array.isArray(e.type)?(n(),i(a(F),{key:1,value:y.inputValue[e.key],"onUpdate:value":o=>y.inputValue[e.key]=o},{default:t(()=>[(n(!0),b(A,null,T(e.type,o=>(n(),i(a(O),{key:typeof o=="string"?o:o.value,value:typeof o=="string"?o:o.value},{default:t(()=>[u(c(typeof o=="string"?o:o.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):g("",!0)]}),_:2},1032,["label"]))),128))]),_:1})]),_:1},8,["open"]))}}),ae={key:1},le=["src"],me=V({__name:"CrudView",props:{loading:{type:Boolean},title:{},description:{},createButtonText:{},live:{type:Boolean},emptyTitle:{},entityName:{},fields:{},table:{},videoUrl:{}},emits:["create"],setup(p,{emit:f}){const m=p,C=N(null),w=()=>{var l;m.fields?(l=C.value)==null||l.open():f("create",{})};async function y(l){f("create",l)}const v=$(()=>({"--columnCount":`${m.table.columns.length}`}));return(l,k)=>{const h=R("router-link");return n(),b(A,null,[s(a(ee),{direction:"vertical"},{default:t(()=>{var _;return[s(a(K),null,{default:t(()=>[u(c(l.title),1)]),_:1}),s(a(S),null,{default:t(()=>[u(c(l.description),1)]),_:1}),l.createButtonText?(n(),i(a(z),{key:0,type:"primary",onClick:w},{default:t(()=>[u(c(l.createButtonText),1)]),_:1})):g("",!0),s(a(E),{style:j(v.value),"data-source":l.table.rows,loading:l.loading&&!l.live,columns:(_=l.table.columns)==null?void 0:_.map(({name:r,align:e},d,o)=>({title:r,key:d,align:e!=null?e:"center"}))},{emptyText:t(()=>[u(c(l.emptyTitle),1)]),headerCell:t(r=>[u(c(r.title),1)]),bodyCell:t(({column:{key:r},record:e})=>[e.cells[r].tagColor?(n(),i(a(X),{key:0,color:e.cells[r].tagColor},{default:t(()=>[u(c(e.cells[r].text),1)]),_:2},1032,["color"])):e.cells[r].link?(n(),i(h,{key:1,to:e.cells[r].link},{default:t(()=>[u(c(e.cells[r].text),1)]),_:2},1032,["to"])):e.cells[r].actions?(n(),i(a(L),{key:2},{overlay:t(()=>[s(a(q),null,{default:t(()=>[(n(!0),b(A,null,T(e.cells[r].actions,(d,o)=>(n(),i(a(H),{key:o,danger:d.dangerous,onClick:ne=>d.onClick({key:e.key})},{default:t(()=>[u(c(d.label),1)]),_:2},1032,["danger","onClick"]))),128))]),_:2},1024)]),default:t(()=>[s(J,{path:a(M),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)):(n(),i(a(B),{key:3},{default:t(()=>[u(c(e.cells[r].text),1)]),_:2},1024))]),footer:t(()=>[l.live?(n(),i(a(Z),{key:0,justify:"end",gutter:10},{default:t(()=>[s(a(I),null,{default:t(()=>[s(a(P),{size:"small"})]),_:1}),s(a(I),null,{default:t(()=>[s(a(B),null,{default:t(()=>[u(" auto updating ")]),_:1})]),_:1})]),_:1})):g("",!0)]),_:1},8,["style","data-source","loading","columns"]),l.videoUrl?(n(),b("section",ae,[s(a(x),{orientation:"left"},{default:t(()=>[u("See it in action")]),_:1}),Q("iframe",{style:{width:"100%","aspect-ratio":"16/9"},src:l.videoUrl,title:"runtimes example",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,le)])):g("",!0)]}),_:1}),l.fields?(n(),i(te,{key:0,ref_key:"modalRef",ref:C,fields:l.fields,"entity-name":l.entityName,onCreate:y},null,8,["fields","entity-name"])):g("",!0)],64)}}});export{me as _};
//# sourceMappingURL=CrudView.vue_vue_type_script_setup_true_lang.70304edb.js.map
