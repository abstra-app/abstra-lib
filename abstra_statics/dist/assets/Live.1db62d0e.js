import{C as E}from"./CrudView.114abd6e.js";import{a as $}from"./asyncComputed.fcfb976b.js";import{d as x,a0 as A,D as k,b as r,ey as u,dq as z,eA as B,eD as H,e as i,o as R,a4 as T,u as t,aG as D,eH as N,c as C,w as s,f as l,au as d,eJ as L,cC as P,bj as U,E as V,eG as F,bI as G,eE as q,eF as W,cw as J}from"./outputWidgets.5808ba34.js";import{r as S,c as O}from"./router.7ea33f30.js";import{g as Y,B as K,a as Q}from"./datetime.c8b6eb6b.js";import"./index.ffa1809c.js";import{P as X}from"./project.5bdcc511.js";import{_ as e1,E as t1}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.dca2eded.js";import{A as Z}from"./Paragraph.f77cf70a.js";import{G as a1}from"./PhArrowCounterClockwise.vue.ae5b3a3b.js";import{F as o1}from"./PhArrowSquareOut.vue.a79e07fa.js";import{G as s1}from"./PhChats.vue.2a760936.js";import{I as l1}from"./PhCopySimple.vue.5398030a.js";import{H as r1}from"./PhInfo.vue.911dd97a.js";import{A as i1}from"./index.3340a02e.js";import{A as j}from"./Link.f7e2cdc0.js";import{A as I}from"./Text.3998bffc.js";import{A as n1}from"./index.948fd894.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c793d8a5.js";import"./BookOutlined.6c232466.js";import"./url.70e9a948.js";import"./Form.0993f0aa.js";import"./hasIn.e8e502cf.js";import"./Modal.8ff33017.js";import"./index.a294caf6.js";import"./Title.6d2130de.js";import"./Base.c86a8edc.js";import"./popupNotifcation.6b8a17f0.js";import"./record.b7f30705.js";import"./pubsub.7d216f56.js";import"./LoadingOutlined.63ca37e5.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="47445e65-967e-4686-9cf7-e9078d9779ba",n._sentryDebugIdIdentifier="sentry-dbid-47445e65-967e-4686-9cf7-e9078d9779ba")}catch{}})();const c1=["width","height","fill","transform"],p1={key:0},d1=i("path",{d:"M227.85,46.89a20,20,0,0,0-18.74-18.74c-13.13-.77-46.65.42-74.48,28.24L131,60H74.36a19.83,19.83,0,0,0-14.14,5.86L25.87,100.19a20,20,0,0,0,11.35,33.95l37.14,5.18,42.32,42.32,5.19,37.18A19.88,19.88,0,0,0,135.34,235a20.13,20.13,0,0,0,6.37,1,19.9,19.9,0,0,0,14.1-5.87l34.34-34.35A19.85,19.85,0,0,0,196,181.64V125l3.6-3.59C227.43,93.54,228.62,60,227.85,46.89ZM76,84h31L75.75,115.28l-27.23-3.8ZM151.6,73.37A72.27,72.27,0,0,1,204,52a72.17,72.17,0,0,1-21.38,52.41L128,159,97,128ZM172,180l-27.49,27.49-3.8-27.23L172,149Zm-72,22c-8.71,11.85-26.19,26-60,26a12,12,0,0,1-12-12c0-33.84,14.12-51.32,26-60A12,12,0,1,1,68.18,175.3C62.3,179.63,55.51,187.8,53,203c15.21-2.51,23.37-9.3,27.7-15.18A12,12,0,1,1,100,202Z"},null,-1),u1=[d1],m1={key:1},f1=i("path",{d:"M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z",opacity:"0.2"},null,-1),g1=i("path",{d:"M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"},null,-1),h1=[f1,g1],y1={key:2},_1=i("path",{d:"M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z"},null,-1),L1=[_1],v1={key:3},w1=i("path",{d:"M221.86,47.24a14,14,0,0,0-13.11-13.1c-12.31-.73-43.77.39-69.88,26.5L133.52,66H74.35a13.9,13.9,0,0,0-9.89,4.1L30.11,104.44a14,14,0,0,0,7.94,23.76l39.13,5.46,45.16,45.16L127.8,218a14,14,0,0,0,23.76,7.92l34.35-34.35a13.91,13.91,0,0,0,4.1-9.89V122.48l5.35-5.35h0C221.46,91,222.59,59.56,221.86,47.24ZM38.11,115a2,2,0,0,1,.49-2L72.94,78.58A2,2,0,0,1,74.35,78h47.17L77.87,121.64l-38.14-5.32A1.93,1.93,0,0,1,38.11,115ZM178,181.65a2,2,0,0,1-.59,1.41L143.08,217.4a2,2,0,0,1-3.4-1.11l-5.32-38.16L178,134.48Zm8.87-73h0L128,167.51,88.49,128l58.87-58.88a78.47,78.47,0,0,1,60.69-23A2,2,0,0,1,209.88,48,78.47,78.47,0,0,1,186.88,108.64ZM100,190.31C95.68,199.84,81.13,222,40,222a6,6,0,0,1-6-6c0-41.13,22.16-55.68,31.69-60a6,6,0,1,1,5,10.92c-7,3.17-22.53,13.52-24.47,42.91,29.39-1.94,39.74-17.52,42.91-24.47a6,6,0,1,1,10.92,5Z"},null,-1),b1=[w1],k1={key:4},A1=i("path",{d:"M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"},null,-1),C1=[A1],Z1={key:5},I1=i("path",{d:"M219.86,47.36a12,12,0,0,0-11.22-11.22c-12-.71-42.82.38-68.35,25.91L134.35,68h-60a11.9,11.9,0,0,0-8.48,3.52L31.52,105.85a12,12,0,0,0,6.81,20.37l39.79,5.55,46.11,46.11,5.55,39.81a12,12,0,0,0,20.37,6.79l34.34-34.35a11.9,11.9,0,0,0,3.52-8.48v-60l5.94-5.94C219.48,90.18,220.57,59.41,219.86,47.36ZM36.21,115.6a3.94,3.94,0,0,1,1-4.09L71.53,77.17A4,4,0,0,1,74.35,76h52L78.58,123.76,39.44,118.3A3.94,3.94,0,0,1,36.21,115.6ZM180,181.65a4,4,0,0,1-1.17,2.83l-34.35,34.34a4,4,0,0,1-6.79-2.25l-5.46-39.15L180,129.65Zm-52-11.31L85.66,128l60.28-60.29c23.24-23.24,51.25-24.23,62.22-23.58a3.93,3.93,0,0,1,3.71,3.71c.65,11-.35,39-23.58,62.22ZM98.21,189.48C94,198.66,80,220,40,220a4,4,0,0,1-4-4c0-40,21.34-54,30.52-58.21a4,4,0,0,1,3.32,7.28c-7.46,3.41-24.43,14.66-25.76,46.85,32.19-1.33,43.44-18.3,46.85-25.76a4,4,0,1,1,7.28,3.32Z"},null,-1),x1=[I1],M1={name:"PhRocketLaunch"},S1=x({...M1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(n){const m=n,f=A("weight","regular"),v=A("size","1em"),y=A("color","currentColor"),h=A("mirrored",!1),g=k(()=>{var e;return(e=m.weight)!=null?e:f}),_=k(()=>{var e;return(e=m.size)!=null?e:v}),w=k(()=>{var e;return(e=m.color)!=null?e:y}),a=k(()=>m.mirrored!==void 0?m.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(e,c)=>(r(),u("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:_.value,height:_.value,fill:w.value,transform:a.value},e.$attrs),[z(e.$slots,"default"),g.value==="bold"?(r(),u("g",p1,u1)):g.value==="duotone"?(r(),u("g",m1,h1)):g.value==="fill"?(r(),u("g",y1,L1)):g.value==="light"?(r(),u("g",v1,b1)):g.value==="regular"?(r(),u("g",k1,C1)):g.value==="thin"?(r(),u("g",Z1,x1)):B("",!0)],16,c1))}}),j1={key:0,class:"flex-row"},$1={key:1,class:"flex-row"},B1={key:2,class:"flex-row"},V1=x({__name:"ExecutionsShort",props:{stageId:{},projectId:{}},emits:["select"],setup(n,{emit:m}){const f=n,v=new t1,{result:y,refetch:h,loading:g}=$(async()=>{const{executions:e}=await v.list({projectId:f.projectId,stageId:f.stageId,limit:6});return e}),_=e=>{m("select",e)},w=e=>Y(e,{weekday:void 0});let a=null;return R(()=>{a=setInterval(()=>h(),15e3)}),T(()=>{a&&clearInterval(a)}),(e,c)=>t(y)?(r(),u("div",j1,[(r(!0),u(D,null,N(t(y),o=>(r(),C(t(P),{key:o.id,title:w(o.createdAt),onClick:b=>_(o)},{content:s(()=>[l(t(Z),null,{default:s(()=>[d("Status: "+L(o.status),1)]),_:2},1024),l(t(Z),null,{default:s(()=>[d("Duration: "+L(o.duration_seconds),1)]),_:2},1024),l(t(Z),null,{default:s(()=>[d("Build: "+L(o.buildId.slice(0,6)),1)]),_:2},1024)]),default:s(()=>[l(e1,{status:o.status},null,8,["status"])]),_:2},1032,["title","onClick"]))),128))])):t(g)?(r(),u("div",$1,[l(t(U))])):(r(),u("div",B1,"None"))}});const E1=V(V1,[["__scopeId","data-v-961eed86"]]),z1=n=>(q("data-v-7d24d598"),n=n(),W(),n),H1={style:{"max-width":"250px",overflow:"hidden","text-overflow":"ellipsis ellipsis","white-space":"nowrap"}},R1={key:1},T1={class:"desc",style:{"margin-bottom":"80px",padding:"10px 30px","background-color":"#f6f6f6","border-radius":"5px"}},D1={style:{"font-size":"16px",display:"flex","align-items":"center",gap:"5px"}},N1=z1(()=>i("strong",null,"Getting started",-1)),P1=x({__name:"Live",setup(n){const f=F().params.projectId,v=a=>{S.push({name:"logs",params:{projectId:f},query:{stageId:a.stageId,executionId:a.id}})},{loading:y,result:h}=$(async()=>{const e=(await K.list(f)).find(b=>b.latest);if(!e)return null;const[c,o]=await Promise.all([Q.get(e.id),X.get(f)]);return{buildSpec:c,project:o}}),g=a=>{var o;if(!("path"in a)||!a.path)return;const e=a.type==="form"?`/${a.path}`:`/_hooks/${a.path}`,c=(o=h.value)==null?void 0:o.project.getUrl(e);!c||(navigator.clipboard.writeText(c),J.success("Copied URL to clipboard"))},_=a=>a.type=="form"?`/${a.path}`.slice(0,30):a.type=="hook"?`/_hooks/${a.path}`.slice(0,30):a.type=="job"?`${a.schedule}`:"",w=k(()=>{var c;const a=[{name:"Type",align:"left"},{name:"Title",align:"left"},{name:"Trigger",align:"left"},{name:"Last Runs"},{name:"",align:"right"}],e=(c=h.value)==null?void 0:c.buildSpec;return e?{columns:a,rows:e.runtimes.map(o=>({key:o.id,cells:[{type:"tag",text:o.type.charAt(0).toUpperCase()+o.type.slice(1),tagColor:"default"},{type:"slot",key:"title",payload:{runtime:o}},{type:"slot",key:"trigger",payload:{runtime:o}},{type:"slot",key:"last-runs",payload:{runtime:o}},{type:"actions",actions:[{icon:a1,label:"View script logs",onClick:()=>S.push({name:"logs",params:{projectId:f},query:{stageId:o.id}})},{icon:l1,label:"Copy URL",onClick:()=>g(o),hide:!["form","hook"].includes(o.type)}]}]}))}:{columns:a,rows:[]}});return(a,e)=>{var c,o,b;return t(y)||((b=(o=(c=t(h))==null?void 0:c.buildSpec)==null?void 0:o.runtimes.length)!=null?b:0)>0?(r(),C(E,{key:0,"empty-title":"","entity-name":"build",description:"Access and monitor your project's current scripts here.",table:w.value,loading:t(y),title:"Live View"},{description:s(()=>{var p;return[l(t(j),{target:"_blank",href:(p=t(h))==null?void 0:p.project.getUrl()},{default:s(()=>[d(" Open App"),l(t(o1),{class:"icon",size:16})]),_:1},8,["href"])]}),title:s(({payload:p})=>{var M;return[i("div",H1,[p.runtime.type!="form"?(r(),C(t(I),{key:0},{default:s(()=>[d(L(p.runtime.title),1)]),_:2},1024)):p.runtime.type=="form"?(r(),C(t(j),{key:1,href:(M=t(h))==null?void 0:M.project.getUrl(p.runtime.path),target:"_blank"},{default:s(()=>[d(L(p.runtime.title),1)]),_:2},1032,["href"])):B("",!0)])]}),"last-runs":s(({payload:p})=>[l(E1,{"stage-id":p.runtime.id,"project-id":t(f),onSelect:v},null,8,["stage-id","project-id"])]),trigger:s(({payload:p})=>[l(t(n1),{color:"default"},{default:s(()=>[d(L(_(p.runtime)),1)]),_:2},1024)]),_:1},8,["table","loading"])):(r(),u("section",R1,[i("div",T1,[i("p",D1,[l(t(r1),{size:"30"}),N1]),i("p",null,[d("Install the editor using pip: "),l(t(I),{code:"",copyable:""},{default:s(()=>[d("pip install abstra")]),_:1})]),i("p",null,[d(" Run the editor: "),l(t(I),{code:"",copyable:""},{default:s(()=>[d("abstra editor my-new-project")]),_:1})]),i("p",null,[d(" Feeling lost? "),l(t(G),{target:"_blank",type:"default",size:"small",onClick:e[0]||(e[0]=()=>t(O).showNewMessage("I need help getting started with Abstra"))},{default:s(()=>[l(t(s1))]),_:1})])]),l(t(i1),{status:"info",title:"Waiting for your first deploy!","sub-title":"Your live stages will appear here once you make your first deploy"},{icon:s(()=>[l(t(S1),{size:"100",color:"#d14056"})]),_:1})]))}}});const ve=V(P1,[["__scopeId","data-v-7d24d598"]]);export{ve as default};
//# sourceMappingURL=Live.1db62d0e.js.map
