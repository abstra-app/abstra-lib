import{a as S}from"./asyncComputed.1364aaa9.js";import{d as x,H as G,b as t,c as n,x as e,V as m,W as $,G as D,e as d,z as s,I as w,F as h,L as v,t as T,D as U,am as H,N as C,a0 as J,S as E,O as K,Q as O,q as L,r as M,ab as R,w as p,J as Q}from"./registerWidgets.802bba2f.js";import{T as F}from"./tables.0812fe41.js";import{L as z}from"./CircularLoading.5c7f2ad7.js";import{T as W,B as P,a as N}from"./BackButton.f84b7a41.js";import{j as A,F as X,t as j,E as Y,g as Z,i as ee}from"./icons.97625e56.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";const I=l=>(K("data-v-de65eac4"),l=l(),O(),l),te={class:"table-settings"},ae=I(()=>e("label",null,"Name",-1)),le={class:"table-field"},ne={class:"columns"},se=I(()=>e("label",null,"Columns",-1)),oe=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],de=["onUpdate:modelValue"],ie=["onUpdate:modelValue","disabled"],ce=I(()=>e("label",null,"Not null",-1)),re=["onClick"],be=["onClick"],_e=x({__name:"TableSettings",props:{table:null},setup(l){var o;const i=l,{result:r}=S(()=>F.dbTypes()),f=G();(o=i.table)==null||o.onUpdate(()=>{f.replace({name:"tableEditor",params:{tableName:i.table.name}})});function y(b){confirm(`Are you sure you want to delete column "${b.name}"?`)&&b.delete()}return(b,_)=>(t(),n("div",te,[ae,e("div",le,[m(e("input",{"onUpdate:modelValue":_[0]||(_[0]=a=>l.table.name=a),class:"table-name"},null,512),[[$,l.table.name]]),e("button",{class:D(["button","save",{disabled:!l.table.hasChanges()}]),onClick:_[1]||(_[1]=a=>l.table.save())},[d(w,{path:s(A)},null,8,["path"])],2)]),e("div",ne,[se,(t(!0),n(h,null,v(l.table.columns,a=>(t(),n("div",{key:a.id,class:"column"},[a.primaryKey?(t(),T(w,{key:0,class:"column-primary-key",path:s(X)},null,8,["path"])):U("",!0),s(r)?m((t(),n("select",{key:1,"onUpdate:modelValue":u=>a.type=u,class:"column-type"},[(t(!0),n(h,null,v(s(r),u=>(t(),n("option",{key:u.type},C(u.type),1))),128))],8,oe)),[[H,a.type]]):U("",!0),m(e("input",{"onUpdate:modelValue":u=>a.name=u,class:"column-name",placeholder:"Column name"},null,8,ue),[[$,a.name]]),m(e("input",{"onUpdate:modelValue":u=>a.default=u,class:"column-default",placeholder:"Default value"},null,8,de),[[$,a.default]]),m(e("input",{"onUpdate:modelValue":u=>a.notNull=u,type:"checkbox",disabled:!a.default},null,8,ie),[[J,a.notNull]]),ce,e("button",{class:"button delete",onClick:u=>y(a)},[d(w,{path:s(j)},null,8,["path"])],8,re),e("button",{class:D(["button","save",{disabled:!a.hasChanges()}]),onClick:u=>a.save()},[d(w,{path:s(A)},null,8,["path"])],10,be)]))),128)),e("button",{class:"button add",onClick:_[2]||(_[2]=a=>l.table.createColumn())},[d(w,{path:s(Y)},null,8,["path"]),E(" Add Column ")])])]))}});const pe=L(_e,[["__scopeId","data-v-de65eac4"]]),me={class:"table-data"},he={class:"column-header"},ve={class:"column-name"},fe=e("th",null,null,-1),ye={key:1},ke=["open"],we={key:0,class:"editing-row-content"},Ce={class:"editing-row-header"},ge=["onUpdate:modelValue"],$e=x({__name:"TableData",props:{table:null},setup(l){const i=l,{result:r,loading:f,refetch:y}=S(()=>i.table.select()),o=M(null),b=M(null);function _(){!i.table||(o.value={},b.value=null)}async function a(){!i.table||!o.value||(b.value?await i.table.updateRow(b.value,o.value):await i.table.insertRow(o.value),o.value=null,b.value=null,y())}function u(k){!i.table||(o.value={...k},b.value={...k})}async function q(k){confirm("Are you sure you want to delete this row?")&&(await i.table.deleteRow(k),y())}return(k,B)=>(t(),n("div",me,[e("button",{class:"add-row",onClick:_},"Add Row"),e("table",null,[e("thead",null,[e("tr",null,[(t(!0),n(h,null,v(l.table.columns,c=>(t(),n("th",{key:c.id},[e("div",he,[e("div",ve,C(c.name),1)])]))),128)),fe])]),s(f)?(t(),T(z,{key:0})):(t(),n("tbody",ye,[(t(!0),n(h,null,v(s(r),(c,V)=>(t(),n("tr",{key:V},[(t(!0),n(h,null,v(l.table.columns,g=>(t(),n("td",{key:g.id},C(c[g.name]),1))),128)),e("td",null,[d(R,{class:"delete-row",path:s(j),onClick:g=>q(c)},null,8,["path","onClick"]),d(R,{class:"edit-row",path:s(Z),onClick:g=>u(c)},null,8,["path","onClick"])])]))),128))]))]),e("dialog",{class:"editing-row-container",open:!!o.value},[o.value?(t(),n("div",we,[e("div",Ce,[E(" New Row "),d(R,{path:s(ee),class:"close",onClick:B[0]||(B[0]=c=>o.value=null)},null,8,["path"])]),(t(!0),n(h,null,v(l.table.columns,c=>(t(),n("div",{key:c.id,class:"column"},[e("label",null,C(c.name),1),m(e("input",{"onUpdate:modelValue":V=>o.value[c.name]=V,type:"text"},null,8,ge),[[$,o.value[c.name]]])]))),128)),e("button",{class:"button save",onClick:a},"Save")])):U("",!0)],8,ke)]))}});const Te={class:"table-connect"},xe=x({__name:"TableConnect",props:{table:null},setup(l){return(i,r)=>(t(),n("pre",Te,`        from abstra.tables import get_table

        table = get_table('`+C(l.table.name)+`')

        table.select(where=...)
        table.update(where=..., set=...)
        table.insert(values=...)
        table.delete(where=...)
    `,1))}});const Ve=L(xe,[["__scopeId","data-v-0b54f9e9"]]),Ae=x({__name:"TableEditor",setup(l){const i=Q(),{result:r,loading:f}=S(()=>F.get(i.params.tableName));return(y,o)=>s(f)||!s(r)?(t(),T(z,{key:0})):(t(),T(W,{key:1,class:"editor"},{left:p(()=>[d(P,{link:"/_editor/tables"})]),right:p(()=>[]),default:p(()=>[d(N,{title:"Table data"},{default:p(()=>[d($e,{table:s(r)},null,8,["table"])]),_:1}),d(N,{title:"Settings"},{default:p(()=>[d(pe,{table:s(r)},null,8,["table"])]),_:1}),d(N,{title:"Connect"},{default:p(()=>[d(Ve,{table:s(r)},null,8,["table"])]),_:1})]),_:1}))}});export{Ae as default};
//# sourceMappingURL=TableEditor.b16c63a2.js.map
