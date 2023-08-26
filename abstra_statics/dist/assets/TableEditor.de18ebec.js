import{a as S}from"./asyncComputed.d9d94137.js";import{d as B,H as q,b as e,c as n,x as t,W as h,Z as x,F as k,L as w,t as I,z as d,I as R,D as T,X as z,N as $,a3 as H,e as b,U as M,O as J,Q as K,q as Q,r as D,ad as U,w as C,J as W}from"./registerWidgets.39ac04e6.js";import{T as A}from"./tables.5d60c0bc.js";import{L}from"./CircularLoading.b8fa2dad.js";import{T as X,a as E}from"./Tab.e21028e7.js";import{B as Z}from"./BackButton.6fc2879d.js";import{D as G,r as F,C as P,g as Y,i as ee}from"./icons.a38e5be1.js";import{D as te}from"./DocsButton.83ffa48c.js";import{S as le}from"./SaveButton.adf11077.js";import"./activeRecord.8bff8a5f.js";import"./pubsub.f9f78506.js";import"./lottie.96145f15.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="e67f5413-9002-41ab-b182-c46a6cedbfbd",l._sentryDebugIdIdentifier="sentry-dbid-e67f5413-9002-41ab-b182-c46a6cedbfbd")}catch{}})();const N=l=>(J("data-v-36a6e10a"),l=l(),K(),l),ae={class:"table-settings"},ne=N(()=>t("label",null,"Name",-1)),oe={class:"table-field"},se={class:"columns"},ue=N(()=>t("label",null,"Columns",-1)),de=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ie=["onUpdate:modelValue"],ce=["onUpdate:modelValue","disabled"],pe=N(()=>t("label",null,"Not null",-1)),be=["onClick"],me=B({__name:"TableSettings",props:{table:null},setup(l){var m;const o=l,{result:c}=S(()=>A.dbTypes()),g=q();(m=o.table)==null||m.onUpdate(()=>{g.replace({name:"tableEditor",params:{tableName:o.table.name}})});function f(p){confirm(`Are you sure you want to delete column "${p}"?`)&&o.table.deleteColumn(p)}function u(){if(!c.value)return;const p=c.value[0].type,_=prompt("Enter column name");!_||o.table.addColumn(_,p)}return(p,_)=>(e(),n("div",ae,[ne,t("div",oe,[h(t("input",{"onUpdate:modelValue":_[0]||(_[0]=a=>l.table.name=a),class:"table-name"},null,512),[[x,l.table.name]])]),t("div",se,[ue,(e(!0),n(k,null,w(l.table.getColumns(),a=>(e(),n("div",{key:a.id,class:"column"},[a.primary_key?(e(),I(R,{key:0,class:"column-primary-key",path:d(G)},null,8,["path"])):T("",!0),d(c)?h((e(),n("select",{key:1,"onUpdate:modelValue":i=>a.type=i,class:"column-type"},[(e(!0),n(k,null,w(d(c),i=>(e(),n("option",{key:i.type},$(i.type),1))),128))],8,de)),[[z,a.type]]):T("",!0),h(t("input",{"onUpdate:modelValue":i=>a.name=i,class:"column-name",placeholder:"Column name"},null,8,re),[[x,a.name]]),h(t("input",{"onUpdate:modelValue":i=>a.default=i,class:"column-default",placeholder:"Default value"},null,8,ie),[[x,a.default]]),h(t("input",{"onUpdate:modelValue":i=>a.not_null=i,type:"checkbox",disabled:!a.default},null,8,ce),[[H,a.not_null]]),pe,a.primary_key?T("",!0):(e(),n("button",{key:2,class:"button delete",onClick:i=>f(a.name)},[b(R,{path:d(F)},null,8,["path"])],8,be))]))),128)),t("button",{class:"button add",onClick:_[1]||(_[1]=a=>u())},[b(R,{path:d(P)},null,8,["path"]),M(" Add Column")])])]))}});const _e=Q(me,[["__scopeId","data-v-36a6e10a"]]),fe={class:"table-data"},ve={class:"column-header"},ye={class:"column-name"},he=t("th",null,null,-1),ke={key:1},we=["open"],ge={key:0,class:"editing-row-content"},Ce={class:"editing-row-header"},$e=["onUpdate:modelValue"],Te={key:0,class:"row-error"},Ve=B({__name:"TableData",props:{table:null},setup(l){const o=l,{result:c,loading:g,refetch:f}=S(()=>o.table.select()),u=D(null),m=D(null),p=D(null);function _(){!o.table||(u.value={},p.value=null,m.value=null)}function a(r){return Object.keys(r).reduce((V,s)=>{var v;return(v=o.table.getColumns().find(y=>y.name===s))!=null&&v.primary_key?{[s]:r[s]}:V},{})}async function i(){if(!(!o.table||!u.value))if(p.value){const r=await o.table.updateRow(a(p.value),u.value);r.type==="update-row:error"?m.value=r.reason:(u.value=null,p.value=null,m.value=null,f())}else{const r=await o.table.insertRow(u.value);r.type==="insert-row:error"?m.value=r.reason:(u.value=null,p.value=null,m.value=null,f())}}function O(r){!o.table||(u.value={...r},p.value={...r},m.value=null)}async function j(r){confirm("Are you sure you want to delete this row?")&&(await o.table.deleteRow(a(r)),f())}return(r,V)=>(e(),n("div",fe,[t("button",{class:"add-row",onClick:_},"Add Row"),t("table",null,[t("thead",null,[t("tr",null,[(e(!0),n(k,null,w(l.table.getColumns(),s=>(e(),n("th",{key:s.id},[t("div",ve,[t("div",ye,$(s.name),1)])]))),128)),he])]),d(g)?(e(),I(L,{key:0})):(e(),n("tbody",ke,[(e(!0),n(k,null,w(d(c),(s,v)=>(e(),n("tr",{key:v},[(e(!0),n(k,null,w(l.table.getColumns(),y=>(e(),n("td",{key:y.id},$(s[y.name]),1))),128)),t("td",null,[b(U,{class:"delete-row",path:d(F),onClick:y=>j(s)},null,8,["path","onClick"]),b(U,{class:"edit-row",path:d(Y),onClick:y=>O(s)},null,8,["path","onClick"])])]))),128))]))]),t("dialog",{class:"editing-row-container",open:!!u.value},[u.value?(e(),n("div",ge,[t("div",Ce,[M(" New Row "),b(U,{path:d(ee),class:"close",onClick:V[0]||(V[0]=s=>u.value=null)},null,8,["path"])]),(e(!0),n(k,null,w(l.table.getColumns(),s=>(e(),n("div",{key:s.id,class:"column"},[t("label",null,$(s.name),1),h(t("input",{"onUpdate:modelValue":v=>u.value[s.name]=v,type:"text"},null,8,$e),[[x,u.value[s.name]]])]))),128)),t("button",{class:"button save",onClick:i},"Save"),m.value?(e(),n("div",Te,$(m.value),1)):T("",!0)])):T("",!0)],8,we)]))}});const Fe=B({__name:"TableEditor",setup(l){const o=W(),{result:c,loading:g}=S(()=>A.get(o.params.tableName));return(f,u)=>d(g)||!d(c)?(e(),I(L,{key:0})):(e(),I(X,{key:1,class:"editor"},{left:C(()=>[b(Z,{link:"/_editor/tables"})]),right:C(()=>[b(te,{path:"tables/overview"}),b(le,{model:d(c)},null,8,["model"])]),default:C(()=>[b(E,{title:"Table data"},{default:C(()=>[b(Ve,{table:d(c)},null,8,["table"])]),_:1}),b(E,{title:"Settings"},{default:C(()=>[b(_e,{table:d(c)},null,8,["table"])]),_:1})]),_:1}))}});export{Fe as default};
//# sourceMappingURL=TableEditor.de18ebec.js.map
