import{P as Fe}from"./PlayerNavbar.3a96438c.js";import{u as Me}from"./router.09b0874f.js";import{B as Ve}from"./BaseLayout.35414bb8.js";import{R as He,S as $e,E as Ie,a as Ue,L as Re}from"./SourceCode.9a704f02.js";import{S as Ee}from"./SaveButton.23d92e10.js";import{F as B,a as Be,b as Le,c as Ze,d as Ne,r as De}from"./FormRunner.add4e555.js";import{d as R,B as U,f as M,o as d,V as k,X as re,R as C,ez as ne,a as b,U as Pe,D as ze,c as S,w as t,b as a,u as e,cy as se,Y as D,e as A,cW as E,aw as g,cS as Z,co as T,bC as F,cn as ue,aI as ie,eI as de,eJ as pe,bF as te,bL as H,eD as We,c_ as N,eN as Oe,eB as je,aB as Qe,g as le,L as qe,N as Ge,eH as Je,y as Ke,cV as Ye,eA as Xe,bo as ea,cB as aa,cT as ta,aM as L,f5 as la}from"./vue-router.07b0787c.js";import{A as j}from"./api.ebf676dd.js";import{a as oa}from"./asyncComputed.c2155699.js";import{F as ra}from"./PhArrowSquareOut.vue.a8d87e9e.js";import{G as na}from"./PhFlowArrow.vue.6e0c75fd.js";import{F as sa}from"./metadata.6356c189.js";import{F as ua}from"./forms.6ee092e2.js";import"./linters.02b8ca02.js";import{W as Q}from"./workspaces.095c10ae.js";import{T as ia}from"./ThreadSelector.931c413f.js";import{A as ce}from"./index.3046d53a.js";import{A as oe}from"./index.e20bf785.js";import{A as da}from"./index.576703bc.js";import{N as pa}from"./NavbarControls.04a26460.js";import{b as ca}from"./index.5a912b08.js";import{A as O,T as ma}from"./TabPane.809ff150.js";import{B as va}from"./Badge.64bea801.js";import{A as fa}from"./index.0f2a753e.js";import"./PhSignOut.vue.17b20996.js";import"./workspaceStore.1988e47c.js";import"./api.9430ee25.js";import"./runnerData.1446fcef.js";import"./url.c59aba42.js";import"./index.1e424753.js";import"./uuid.f800313a.js";import"./PhCaretRight.vue.f585c5bd.js";import"./ai.014389e1.js";import"./record.635d12d5.js";import"./editor.204f32ec.js";import"./PhCheckCircle.vue.23f28857.js";import"./PhCopySimple.vue.ddff7c67.js";import"./LoadingOutlined.226a3413.js";import"./scripts.988c24c8.js";import"./validations.26736a83.js";import"./string.4816443e.js";import"./PhPencil.vue.f7ccd945.js";import"./toggleHighContrast.d17b6889.js";import"./Card.fd2ef1e0.js";import"./ExclamationCircleOutlined.78e23c95.js";import"./Login.vue_vue_type_script_setup_true_lang.c1b52515.js";import"./CircularLoading.dba72bf5.js";import"./WidgetsFrame.58af89c9.js";import"./Steps.1847a520.js";import"./Watermark.0d0913ca.js";import"./fetch.3f7da2ae.js";import"./PhKanban.vue.70b903ae.js";import"./PhWebhooksLogo.vue.5c8fc9ca.js";import"./index.10d503cf.js";import"./CloseCircleOutlined.f1881d4c.js";import"./popupNotifcation.2ac8744a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bd1d4b52.js";import"./BookOutlined.affbf6a6.js";import"./PhChats.vue.ef86b312.js";import"./isNumeric.75337b1e.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[c]="0b9af84f-6aaf-4d5a-a011-27a6ee8fe242",h._sentryDebugIdIdentifier="sentry-dbid-0b9af84f-6aaf-4d5a-a011-27a6ee8fe242")}catch{}})();const ga=["width","height","fill","transform"],ha={key:0},ya=b("path",{d:"M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z"},null,-1),_a=[ya],ka={key:1},ba=b("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"},null,-1),wa=b("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Sa=[ba,wa],Aa={key:2},xa=b("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),Ca=[xa],Ta={key:3},Fa=b("path",{d:"M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z"},null,-1),Ma=[Fa],Va={key:4},Ha=b("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"},null,-1),$a=[Ha],Ia={key:5},Ua=b("path",{d:"M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z"},null,-1),Ra=[Ua],Ea={name:"PhArrowsClockwise"},Ba=R({...Ea,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(h){const c=h,l=U("weight","regular"),w=U("size","1em"),r=U("color","currentColor"),o=U("mirrored",!1),s=M(()=>{var u;return(u=c.weight)!=null?u:l}),y=M(()=>{var u;return(u=c.size)!=null?u:w}),x=M(()=>{var u;return(u=c.color)!=null?u:r}),v=M(()=>c.mirrored!==void 0?c.mirrored?"scale(-1, 1)":void 0:o?"scale(-1, 1)":void 0);return(u,_)=>(d(),k("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:x.value,transform:v.value},u.$attrs),[re(u.$slots,"default"),s.value==="bold"?(d(),k("g",ha,_a)):s.value==="duotone"?(d(),k("g",ka,Sa)):s.value==="fill"?(d(),k("g",Aa,Ca)):s.value==="light"?(d(),k("g",Ta,Ma)):s.value==="regular"?(d(),k("g",Va,$a)):s.value==="thin"?(d(),k("g",Ia,Ra)):C("",!0)],16,ga))}}),La=["width","height","fill","transform"],Za={key:0},Na=b("path",{d:"M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,160H60V60H196Z"},null,-1),Da=[Na],Pa={key:1},za=b("path",{d:"M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",opacity:"0.2"},null,-1),Wa=b("path",{d:"M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,160H56V56H200V200Z"},null,-1),Oa=[za,Wa],ja={key:2},Qa=b("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z"},null,-1),qa=[Qa],Ga={key:3},Ja=b("path",{d:"M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,158a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z"},null,-1),Ka=[Ja],Ya={key:4},Xa=b("path",{d:"M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,160H56V56H200V200Z"},null,-1),et=[Xa],at={key:5},tt=b("path",{d:"M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,156a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z"},null,-1),lt=[tt],ot={name:"PhStop"},rt=R({...ot,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(h){const c=h,l=U("weight","regular"),w=U("size","1em"),r=U("color","currentColor"),o=U("mirrored",!1),s=M(()=>{var u;return(u=c.weight)!=null?u:l}),y=M(()=>{var u;return(u=c.size)!=null?u:w}),x=M(()=>{var u;return(u=c.color)!=null?u:r}),v=M(()=>c.mirrored!==void 0?c.mirrored?"scale(-1, 1)":void 0:o?"scale(-1, 1)":void 0);return(u,_)=>(d(),k("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:x.value,transform:v.value},u.$attrs),[re(u.$slots,"default"),s.value==="bold"?(d(),k("g",Za,Da)):s.value==="duotone"?(d(),k("g",Pa,Oa)):s.value==="fill"?(d(),k("g",ja,qa)):s.value==="light"?(d(),k("g",Ga,Ka)):s.value==="regular"?(d(),k("g",Ya,et)):s.value==="thin"?(d(),k("g",at,lt)):C("",!0)],16,La))}}),nt=R({__name:"ThreadSelectorModal",props:{showThreadModal:{type:Boolean},stage:{},executionConfig:{}},emits:["fix-invalid-json","update:execution-config","update:show-thread-modal"],setup(h,{emit:c}){const l=()=>{c("update:show-thread-modal",!1),Q.writeTestData(w.threadData)};Pe(async()=>w.threadData=await Q.readTestData());const w=ze({threadData:"{}"});return(r,o)=>(d(),S(e(se),{open:r.showThreadModal,footer:null,onCancel:l},{default:t(()=>[a(ia,{stage:r.stage,"execution-config":r.executionConfig,"onUpdate:executionConfig":o[0]||(o[0]=s=>c("update:execution-config",s)),"onUpdate:showThreadModal":o[1]||(o[1]=s=>c("update:show-thread-modal",s)),onFixInvalidJson:o[2]||(o[2]=s=>c("fix-invalid-json",s,s))},null,8,["stage","execution-config"])]),_:1},8,["open"]))}});const st=D(nt,[["__scopeId","data-v-24845f55"]]),me=h=>(de("data-v-70cdd0d6"),h=h(),pe(),h),ut=me(()=>b("i",null,"string",-1)),it=me(()=>b("i",null,"string list",-1)),dt=R({__name:"FormNotificationSettings",props:{form:{}},setup(h){const l=A(h.form);return(w,r)=>(d(),k(ie,null,[a(e(ue),{layout:"vertical"},{default:t(()=>[a(e(E),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:t(()=>[g(" Thread waiting "),a(e(ce),{checked:l.value.notificationTrigger.enabled,"onUpdate:checked":r[0]||(r[0]=o=>l.value.notificationTrigger.enabled=o)},{default:t(()=>[g(" Enabled ")]),_:1},8,["checked"])]),_:1}),a(e(Z),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:t(()=>[g(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),a(e(T),{label:"Variable name"},{default:t(()=>[a(e(F),{value:l.value.notificationTrigger.variable_name,"onUpdate:value":r[1]||(r[1]=o=>l.value.notificationTrigger.variable_name=o),disabled:!l.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),a(e(oe),{type:"info"},{message:t(()=>[a(e(Z),null,{default:t(()=>[g(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),ut,g(" or a "),it,g(". ")]),_:1})]),_:1}),a(e(oe),{style:{"margin-top":"20px"}},{message:t(()=>[a(e(Z),null,{default:t(()=>[g(" Notifications are a paid feature. Talk to your account manager to enable them. ")]),_:1})]),_:1})],64))}});const pt=D(dt,[["__scopeId","data-v-70cdd0d6"]]),ct=R({__name:"FormSettings",props:{form:{}},setup(h){const l=A(h.form);return(w,r)=>(d(),S(e(ue),{layout:"vertical",class:"form-settings"},{default:t(()=>[a(He,{runtime:l.value},null,8,["runtime"]),a(e(T),{label:"Form name"},{default:t(()=>[a(e(F),{value:l.value.title,"onUpdate:value":r[0]||(r[0]=o=>l.value.title=o),type:"text",onChange:r[1]||(r[1]=o=>{var s;return l.value.title=(s=o.target.value)!=null?s:""})},null,8,["value"])]),_:1}),a(e(E),{level:3},{default:t(()=>[g(" Texts ")]),_:1}),a(e(E),{level:4},{default:t(()=>[g(" Welcome Screen ")]),_:1}),a(e(T),{label:"Title"},{default:t(()=>[a(e(F),{value:l.value.welcomeTitle,"onUpdate:value":r[2]||(r[2]=o=>l.value.welcomeTitle=o),type:"text",placeholder:l.value.title,disabled:l.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),a(e(T),{label:"Description"},{default:t(()=>[a(e(F),{value:l.value.startMessage,"onUpdate:value":r[3]||(r[3]=o=>l.value.startMessage=o),type:"text",disabled:l.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),{label:"Start button label"},{default:t(()=>[a(e(F),{value:l.value.startButtonText,"onUpdate:value":r[4]||(r[4]=o=>l.value.startButtonText=o),type:"text",placeholder:"Start",disabled:l.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),null,{default:t(()=>[a(e(te),{checked:l.value.autoStart,"onUpdate:checked":r[5]||(r[5]=o=>l.value.autoStart=o)},{default:t(()=>[g("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),a(e(E),{level:4},{default:t(()=>[g(" End Screen ")]),_:1}),a(e(T),{label:"End text"},{default:t(()=>[a(e(F),{value:l.value.endMessage,"onUpdate:value":r[6]||(r[6]=o=>l.value.endMessage=o),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),a(e(T),{label:"Restart button label"},{default:t(()=>[a(e(F),{value:l.value.restartButtonText,"onUpdate:value":r[7]||(r[7]=o=>l.value.restartButtonText=o),placeholder:"Restart",type:"text",disabled:!l.value.allowRestart},null,8,["value","disabled"])]),_:1}),a(e(T),{help:!l.value.isInitial&&"Only initial forms can be restarted"},{default:t(()=>[a(e(te),{checked:l.value.allowRestart,"onUpdate:checked":r[8]||(r[8]=o=>l.value.allowRestart=o),disabled:!l.value.isInitial},{default:t(()=>[g("Show restart button at the end")]),_:1},8,["checked","disabled"])]),_:1},8,["help"]),a(e(E),{level:4},{default:t(()=>[g(" Alert Messages ")]),_:1}),a(e(T),{label:"Error message"},{default:t(()=>[a(e(F),{value:l.value.errorMessage,"onUpdate:value":r[9]||(r[9]=o=>l.value.errorMessage=o),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}});const mt=D(ct,[["__scopeId","data-v-aff64cb2"]]),vt=R({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},queryParams:{}},emits:["update:query-params"],setup(h,{emit:c}){const w=A(r(h.queryParams));function r(v){return Object.entries(v).map(([u,_])=>({key:u,value:_,id:Math.random().toString()}))}function o(){const v={};return w.value.forEach(({key:u,value:_})=>{v[u]=_}),v}const s=(v,u,_)=>{w.value[v]={key:u,value:_},c("update:query-params",o())},y=()=>{const v=w.value.length;w.value.push({key:`param-${v}`,value:"value"}),c("update:query-params",o())},x=v=>{w.value.splice(v,1),c("update:query-params",o())};return(v,u)=>(d(),S(e(se),{open:v.open,onCancel:v.close},{footer:t(()=>[a(e(H),{type:"primary",onClick:v.close},{default:t(()=>[g("OK")]),_:1},8,["onClick"])]),default:t(()=>[a(e(N),{vertical:"",gap:"20"},{default:t(()=>[a(e(Z),null,{default:t(()=>[g("Query params")]),_:1}),(d(!0),k(ie,null,We(w.value,(_,p)=>(d(),S(e(T),{key:p},{default:t(()=>[a(e(da),null,{default:t(()=>[a(e(F),{value:_.key,"onUpdate:value":$=>_.key=$,type:"text",placeholder:"name",onChange:()=>s(p,_.key,_.value)},null,8,["value","onUpdate:value","onChange"]),a(e(F),{value:_.value,"onUpdate:value":$=>_.value=$,type:"text",placeholder:"value",disabled:_.key===e(j),onChange:()=>s(p,_.key,_.value)},null,8,["value","onUpdate:value","disabled","onChange"]),a(e(H),{danger:"",onClick:$=>x(p)},{default:t(()=>[g("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(T),null,{default:t(()=>[a(e(H),{type:"dashed",style:{width:"100%"},onClick:y},{default:t(()=>[g(" Add Query Param ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),ft=h=>(de("data-v-2cd02884"),h=h(),pe(),h),gt={key:0},ht={key:1},yt=ft(()=>b("br",null,null,-1)),_t={class:"form-preview-container"},kt=R({__name:"FormEditor",setup(h){var Y;const c=Oe(),l=je(),w=Me(),r=A(null),o=A("source-code"),s=A(null),y=A(null),x=A(null),v=A({}),u=A(!1),_=i=>p.value={...p.value,attached:!!i},p=A({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),$=M(()=>{var i;return(i=f.value)!=null&&i.form.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:p.value.attached&&p.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!p.value.isInitial&&p.value.attached&&!p.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),ve=(i,n)=>{var m;(m=r.value)==null||m.setHighlight(i,n)},fe=()=>{var i,n;(i=r.value)==null||i.restartEditor(),(n=r.value)==null||n.startPreviewMode()},ge=M(()=>!p.value.isInitial&&p.value.attached&&!!(p.value.pendingFork||!p.value.stageRunId));Qe(()=>p.value.stageRunId?v.value={...v.value,[j]:p.value.stageRunId}:null);const{result:f,loading:he,refetch:ye}=oa(async()=>{const[i,n]=await Promise.all([ua.get(l.params.id),Q.get()]);return p.value.isInitial=i.isInitial,Ke({form:i,workspace:n})});le([()=>p.value.attached,v,f],()=>{q()});function _e(){var n;if(!f.value)return;const i=f.value.form.codeContent;(n=r.value)==null||n.updateLocalEditorCode(i),q()}function q(){if(!f.value)return;const i=!p.value.attached;x.value=f.value.form.makeRunnerData(f.value.workspace),s.value=new Ze({formRunnerData:x.value,logService:J,connectionManager:new Ne(f.value.form.id,"editor",v.value,i),onFormStart:fe,onFormEnd:ke,onRedirect:Ae,onStateUpdate:m=>y.value=m,onStackTraceUpdate:ve});const n=s.value.getState();y.value=n.formState}const ke=()=>{var i,n,m;p.value={attached:!1,stageRunId:null,pendingFork:!1,isInitial:(n=(i=f.value)==null?void 0:i.form.isInitial)!=null?n:!1},(m=r.value)==null||m.restartEditor()};function be(){var i,n;(i=P.value)==null||i.closeConsole(),(n=s.value)==null||n.start()}function G(){var i,n;(i=r.value)==null||i.restartEditor(),(n=s.value)==null||n.resetForm()}function we(){c.push({name:"stages"})}const P=A(null),Se=i=>{!f.value||(f.value.form.file=i)},J=Re.create();function Ae(i,n){De("editor",c,i,n)}const xe=()=>{var m;let i=`/${(m=f.value)==null?void 0:m.form.path}`;const n=new URLSearchParams(v.value);p.value.attached&&p.value.stageRunId&&n.set(j,p.value.stageRunId),window.open(`${i}?${n.toString()}`,"_blank")},z=A(!1),Ce=M(()=>{if(!x.value)return"";const i=Object.entries(v.value),n="?"+i.map(([V,I])=>`${V}=${I}`).join("&"),m=i.length?n:"";return`/${x.value.path}${m}`}),K=new qe(Ge.boolean(),"dontShowReloadHelper"),W=A((Y=K.get())!=null?Y:!1),Te=()=>{K.set(!0),W.value=!0};return le(()=>l.params.id,()=>{ye()}),(i,n)=>(d(),S(Ve,null,Je({navbar:t(()=>[e(f)?(d(),S(e(ca),{key:0,title:e(f).form.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:we},{extra:t(()=>[a(pa,{"docs-path":"concepts/forms","editing-model":e(f).form},null,8,["editing-model"])]),_:1},8,["title"])):C("",!0)]),content:t(()=>[e(f)?(d(),S(Ie,{key:0},{left:t(()=>[a(e(ma),{"active-key":o.value,"onUpdate:activeKey":n[0]||(n[0]=m=>o.value=m)},{rightExtra:t(()=>[a(Ee,{model:e(f).form,onSave:_e},null,8,["model"])]),default:t(()=>[a(e(O),{key:"source-code",tab:"Source code"}),a(e(O),{key:"settings",tab:"Settings"}),a(e(O),{key:"notifications",tab:"Notifications"})]),_:1},8,["active-key"]),o.value==="source-code"?(d(),S(Ue,{key:0,ref_key:"code",ref:r,script:e(f).form,workspace:e(f).workspace,onUpdateFile:Se},null,8,["script","workspace"])):C("",!0),o.value==="settings"?(d(),S(mt,{key:1,form:e(f).form},null,8,["form"])):C("",!0),o.value==="notifications"?(d(),S(pt,{key:2,form:e(f).form},null,8,["form"])):C("",!0),u.value?(d(),S(st,{key:3,"execution-config":p.value,"onUpdate:executionConfig":n[1]||(n[1]=m=>p.value=m),"show-thread-modal":u.value,"onUpdate:showThreadModal":n[2]||(n[2]=m=>u.value=m),stage:e(f).form,onFixInvalidJson:n[3]||(n[3]=(m,V)=>{var I;return(I=P.value)==null?void 0:I.fixJson(m,V)})},null,8,["execution-config","show-thread-modal","stage"])):C("",!0)]),right:t(()=>[a(e(N),{gap:"10",align:"center",justify:"right",style:{"margin-top":"6px"}},{default:t(()=>{var m;return[a(e(Ye),null,{default:t(()=>[g(Xe(p.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ce),{disabled:!!y.value&&e(B).includes((m=y.value)==null?void 0:m.type),checked:p.value.attached,"onUpdate:checked":_},null,8,["disabled","checked"]),a(e(va),{dot:ge.value},{default:t(()=>{var V;return[a(e(H),{disabled:!!y.value&&e(B).includes((V=y.value)==null?void 0:V.type),style:{display:"flex",gap:"5px"},onClick:n[4]||(n[4]=I=>u.value=!0)},{icon:t(()=>[a(e(na),{size:"20"})]),default:t(()=>[g("Thread")]),_:1},8,["disabled"])]}),_:1},8,["dot"])]}),_:1}),a(e(fa),{style:{margin:"7px 0px 16px"}}),e(he)||!x.value||!y.value?(d(),S(e(ea),{key:0})):C("",!0),y.value&&x.value?(d(),S(e(N),{key:1,vertical:"",gap:"10",style:{height:"100%",overflow:"hidden"}},{default:t(()=>{var m,V,I,X,ee;return[a(e(N),{gap:"small"},{default:t(()=>[y.value.type&&e(Be).includes(y.value.type)?(d(),S(e(aa),{key:0,placement:"bottom",open:W.value?void 0:!0},{content:t(()=>[W.value?(d(),k("span",gt,"Reload form")):(d(),k("span",ht,[g(" You can reload the form here"),yt,a(e(ta),{onClick:Te},{default:t(()=>[g("Don't show this again")]),_:1})]))]),default:t(()=>[a(e(H),{disabled:!!$.value,onClick:G},{default:t(()=>[a(e(Ba),{size:"20"})]),_:1},8,["disabled"])]),_:1},8,["open"])):C("",!0),e(B).includes(y.value.type)?(d(),S(e(L),{key:1,placement:"bottom"},{title:t(()=>[g("Stop form")]),default:t(()=>[a(e(H),{onClick:G},{default:t(()=>[a(e(rt),{size:"20"})]),_:1})]),_:1})):C("",!0),y.value.type==="waiting"?(d(),S(e(L),{key:2,placement:"bottom"},{title:t(()=>[g("Start form")]),default:t(()=>[a(e(H),{disabled:!!$.value,onClick:be},{default:t(()=>[a(e(la),{size:"20"})]),_:1},8,["disabled"])]),_:1})):C("",!0),a(e(F),{disabled:"",value:Ce.value},null,8,["value"]),a(e(L),{placement:"bottom"},{title:t(()=>[g("Edit query params")]),default:t(()=>{var ae;return[a(e(H),{disabled:!!y.value&&e(B).includes((ae=y.value)==null?void 0:ae.type),onClick:n[5]||(n[5]=bt=>z.value=!0)},{default:t(()=>[a(e(sa),{size:"20"})]),_:1},8,["disabled"])]}),_:1}),a(e(L),{placement:"bottom"},{title:t(()=>[g("Open in Full Screen")]),default:t(()=>[a(e(H),{target:"_blank","aria-label":"Open in Full Screen","aria-describedby":"sss",disabled:!p.value.attached,onClick:xe},{default:t(()=>[a(e(ra),{size:"20"})]),_:1},8,["disabled"])]),_:1})]),_:1}),b("div",_t,[a(Fe,{"current-path":e(f).form.path,"hide-login":!0},null,8,["current-path"]),a(Le,{"is-preview":"",class:"runner","form-runner-data":x.value,disabled:$.value,"form-state":y.value,"user-email":(m=e(w).user)==null?void 0:m.claims.email,onUpdateWidgetErrors:(V=s.value)==null?void 0:V.updateWidgetFrontendErrors,onUpdateWidgetValue:(I=s.value)==null?void 0:I.updateWidgetValue,onActionClicked:(X=s.value)==null?void 0:X.handleActionClick,onAutoFillClicked:(ee=s.value)==null?void 0:ee.handleAutofillClick},null,8,["form-runner-data","disabled","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onAutoFillClicked"])])]}),_:1})):C("",!0),a(vt,{"query-params":v.value,"onUpdate:queryParams":n[6]||(n[6]=m=>v.value=m),open:z.value,close:()=>z.value=!1},null,8,["query-params","open","close"])]),_:1})):C("",!0)]),_:2},[e(f)?{name:"footer",fn:t(()=>[a($e,{ref_key:"smartConsole",ref:P,"stage-type":"forms",stage:e(f).form,"log-service":e(J),workspace:e(f).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});const Fl=D(kt,[["__scopeId","data-v-2cd02884"]]);export{Fl as default};
//# sourceMappingURL=FormEditor.d7df672e.js.map
