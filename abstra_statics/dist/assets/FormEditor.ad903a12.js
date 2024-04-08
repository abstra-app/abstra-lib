import{u as He}from"./index.2b91d99e.js";import{d as R,X as H,H as M,b as d,eu as w,dj as W,ew as x,ez as z,e as y,f as a,eG as Fe,o as Ie,G as Re,c as S,w as t,u as e,v as j,r as C,aq as b,bx as F,aC as Q,eE as me,eF as ve,by as re,bE as I,eB as Ze,cC as Ue,S as ne,cy as O,eI as Ee,eA as Pe,av as Le,I as ue,eK as Be,bf as Ne}from"./outputWidgets.65a5bdbd.js";import{B as De}from"./BaseLayout.173d125c.js";import{F as Oe,a as D,b as qe,c as We,d as ze,r as se}from"./FormRunner.def221aa.js";import{R as je,S as Qe,a as Ge,L as Je}from"./SourceCode.d4ea2113.js";import{a as Ke}from"./asyncComputed.7dcfbfc9.js";import{F as Xe}from"./forms.6232e610.js";import{W as q}from"./workspaces.2e7c4868.js";import"./envVars.ee7ba668.js";import{_ as Ye}from"./SaveButton.vue_vue_type_script_setup_true_lang.a015b0c6.js";import{T as ea}from"./ThreadSelector.a9cb4317.js";import{M as ce}from"./Modal.cd057b06.js";import{A as fe}from"./index.544d0f8d.js";import{A as E}from"./Title.dccf023f.js";import{a as N,A as aa}from"./Text.748c1058.js";import{A as T,F as G}from"./Form.3ac6a4ab.js";import{A as ie}from"./index.5ab817b8.js";import{A as ge}from"./api.d8e63915.js";import{A as P}from"./index.af2a02b5.js";import{A as ta}from"./Link.c657a427.js";import{B as oa}from"./Badge.fed11864.js";import{N as la}from"./NavbarControls.2775484d.js";import{b as ra}from"./index.71b45225.js";import{A as B,T as de}from"./TabPane.1152a558.js";import{A as na}from"./index.4e89844a.js";import{E as ua}from"./ExpandOutlined.942a9521.js";import"./pubsub.c8a1aac7.js";import"./fetch.842a6544.js";import"./url.b1adb0d3.js";import"./Passwordless.49f244fa.js";import"./PhArrowClockwise.vue.085f8c0e.js";import"./CircularLoading.20c37c68.js";import"./PlayerNavbar.d8c27196.js";import"./PhKanban.vue.ee272fa8.js";import"./PhSignOut.vue.f69dd109.js";import"./index.436432fd.js";import"./Paragraph.83e16676.js";import"./index.f0361641.js";import"./WidgetsFrame.10e53ea1.js";import"./Steps.cbc605c3.js";import"./PhInfo.vue.3bb2c33c.js";import"./Card.74052053.js";import"./index.fcf6978a.js";import"./uuid.13ac8cbb.js";import"./PhCaretRight.vue.bc0f09e6.js";import"./login.a6da82ca.js";import"./jobs.8bb47de1.js";import"./record.5fb7bccc.js";import"./scripts.1f5dbb16.js";import"./validations.664e917f.js";import"./string.94a71dc5.js";import"./toggleHighContrast.74c442ad.js";import"./PhPencil.vue.3bc2132c.js";import"./runnerData.1b6c919f.js";import"./UnsavedChangesHandler.ca190b08.js";import"./ExclamationCircleOutlined.87f713e0.js";import"./index.2b0370c4.js";import"./index.01ea81ef.js";import"./hasIn.2eb7f5a3.js";import"./index.cf4c23b9.js";import"./metadata.0d6fb611.js";import"./PhCheckCircle.vue.1a7c9497.js";import"./PhScroll.vue.8afca351.js";import"./PhWebhooksLogo.vue.b614d2ce.js";import"./isNumeric.75337b1e.js";import"./popupNotifcation.8f3316f2.js";import"./PhArrowSquareOut.vue.5045fc68.js";import"./CloseCircleOutlined.66a9676c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ac0037ab.js";import"./BookOutlined.dd9ca6f4.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[l]="6de7a89b-abc5-4b03-8022-3bd8dc7fbd57",m._sentryDebugIdIdentifier="sentry-dbid-6de7a89b-abc5-4b03-8022-3bd8dc7fbd57")}catch{}})();var sa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"};const ia=sa,da=["width","height","fill","transform"],pa={key:0},ma=y("path",{d:"M200.49,183.51a12,12,0,0,1,0,17c-1.13,1.12-28,27.51-72.49,27.51-33.71,0-59.35-17.46-76-33.86V208a12,12,0,0,1-24,0V160a12,12,0,0,1,12-12H88a12,12,0,0,1,0,24H64.12c13.1,14.32,35.08,32,63.88,32,34.63,0,55.31-20.28,55.51-20.49A12,12,0,0,1,200.49,183.51ZM216,36a12,12,0,0,0-12,12V61.86C187.35,45.46,161.71,28,128,28,83.54,28,56.64,54.39,55.51,55.51a12,12,0,0,0,17,17C72.69,72.28,93.37,52,128,52c28.8,0,50.78,17.68,63.88,32H168a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V48A12,12,0,0,0,216,36Z"},null,-1),va=[ma],ca={key:1},fa=y("path",{d:"M216,48V96H168ZM40,208l48-48H40Z",opacity:"0.2"},null,-1),ga=y("path",{d:"M219.06,40.61a8,8,0,0,0-8.72,1.73L194.28,58.41C174.13,41.1,151.36,32,128,32,85.18,32,59.42,57.27,58.34,58.34A8,8,0,0,0,69.66,69.66C69.87,69.44,91.73,48,128,48c23.17,0,41.92,10.85,54.92,21.76L162.34,90.34A8,8,0,0,0,168,104h48a8,8,0,0,0,8-8V48A8,8,0,0,0,219.06,40.61ZM208,88H187.31L208,67.31Zm-21.66,98.34c-.21.22-22.07,21.66-58.34,21.66-23.17,0-41.92-10.85-54.92-21.76l20.58-20.58A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66l16.06-16.07C81.87,214.9,104.64,224,128,224c42.82,0,68.58-25.27,69.66-26.34a8,8,0,0,0-11.32-11.32ZM48,168H68.69L48,188.69Z"},null,-1),ha=[fa,ga],ya={key:2},wa=y("path",{d:"M197.66,186.34a8,8,0,0,1,0,11.32C196.58,198.73,170.82,224,128,224c-23.36,0-46.13-9.1-66.28-26.41L45.66,213.66A8,8,0,0,1,32,208V160a8,8,0,0,1,8-8H88a8,8,0,0,1,5.66,13.66L73.08,186.24C86.08,197.15,104.83,208,128,208c36.27,0,58.13-21.44,58.34-21.66A8,8,0,0,1,197.66,186.34Zm21.4-145.73a8,8,0,0,0-8.72,1.73L194.28,58.41C174.13,41.1,151.36,32,128,32,85.18,32,59.42,57.27,58.34,58.34A8,8,0,0,0,69.66,69.66C69.87,69.44,91.73,48,128,48c23.17,0,41.92,10.85,54.92,21.76L162.34,90.34A8,8,0,0,0,168,104h48a8,8,0,0,0,8-8V48A8,8,0,0,0,219.06,40.61Z"},null,-1),ba=[wa],ka={key:3},Aa=y("path",{d:"M196.24,187.76a6,6,0,0,1,0,8.48C195.19,197.29,170,222,128,222c-39.66,0-67.59-25.75-82-43.26V208a6,6,0,0,1-12,0V160a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H51.35c11.41,15.11,38.23,44,76.65,44,37.09,0,59.54-22,59.76-22.24A6,6,0,0,1,196.24,187.76ZM216,42a6,6,0,0,0-6,6V77.26C195.59,59.75,167.66,34,128,34,86,34,60.81,58.71,59.76,59.76a6,6,0,0,0,8.48,8.48C68.46,68,90.91,46,128,46c38.42,0,65.24,28.89,76.65,44H168a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V48A6,6,0,0,0,216,42Z"},null,-1),Sa=[Aa],_a={key:4},Ca=y("path",{d:"M197.67,186.37a8,8,0,0,1,0,11.29C196.58,198.73,170.82,224,128,224c-37.39,0-64.53-22.4-80-39.85V208a8,8,0,0,1-16,0V160a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H55.44C67.76,183.35,93,208,128,208c36,0,58.14-21.46,58.36-21.68A8,8,0,0,1,197.67,186.37ZM216,40a8,8,0,0,0-8,8V71.85C192.53,54.4,165.39,32,128,32,85.18,32,59.42,57.27,58.34,58.34a8,8,0,0,0,11.3,11.34C69.86,69.46,92,48,128,48c35,0,60.24,24.65,72.56,40H168a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Z"},null,-1),$a=[Ca],Ma={key:5},Va=y("path",{d:"M194.83,189.18a4,4,0,0,1,0,5.65c-1,1-25.65,25.17-66.83,25.17-23.93,0-47.35-10.05-67.73-29.08a146.39,146.39,0,0,1-16.27-18V208a4,4,0,0,1-8,0V160a4,4,0,0,1,4-4H88a4,4,0,0,1,0,8H47.41c10,14.06,38.39,48,80.59,48,37.75,0,60.95-22.6,61.18-22.83A4,4,0,0,1,194.83,189.18ZM216,44a4,4,0,0,0-4,4V83.07a146.39,146.39,0,0,0-16.27-18C175.35,46.05,151.93,36,128,36,86.82,36,62.2,60.14,61.17,61.17a4,4,0,0,0,5.65,5.66C67.05,66.6,90.25,44,128,44c42.2,0,70.63,33.94,80.59,48H168a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V48A4,4,0,0,0,216,44Z"},null,-1),xa=[Va],Ta={name:"PhArrowsClockwise"},Ha=R({...Ta,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(m){const l=m,o=H("weight","regular"),f=H("size","1em"),n=H("color","currentColor"),i=H("mirrored",!1),s=M(()=>{var r;return(r=l.weight)!=null?r:o}),k=M(()=>{var r;return(r=l.size)!=null?r:f}),V=M(()=>{var r;return(r=l.color)!=null?r:n}),h=M(()=>l.mirrored!==void 0?l.mirrored?"scale(-1, 1)":void 0:i?"scale(-1, 1)":void 0);return(r,p)=>(d(),w("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:k.value,height:k.value,fill:V.value,transform:h.value},r.$attrs),[W(r.$slots,"default"),s.value==="bold"?(d(),w("g",pa,va)):s.value==="duotone"?(d(),w("g",ca,ha)):s.value==="fill"?(d(),w("g",ya,ba)):s.value==="light"?(d(),w("g",ka,Sa)):s.value==="regular"?(d(),w("g",_a,$a)):s.value==="thin"?(d(),w("g",Ma,xa)):x("",!0)],16,da))}}),Fa=["width","height","fill","transform"],Ia={key:0},Ra=y("path",{d:"M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"},null,-1),Za=[Ra],Ua={key:1},Ea=y("path",{d:"M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",opacity:"0.2"},null,-1),Pa=y("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"},null,-1),La=[Ea,Pa],Ba={key:2},Na=y("path",{d:"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"},null,-1),Da=[Na],Oa={key:3},qa=y("path",{d:"M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"},null,-1),Wa=[qa],za={key:4},ja=y("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"},null,-1),Qa=[ja],Ga={key:5},Ja=y("path",{d:"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"},null,-1),Ka=[Ja],Xa={name:"PhPlay"},Ya=R({...Xa,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(m){const l=m,o=H("weight","regular"),f=H("size","1em"),n=H("color","currentColor"),i=H("mirrored",!1),s=M(()=>{var r;return(r=l.weight)!=null?r:o}),k=M(()=>{var r;return(r=l.size)!=null?r:f}),V=M(()=>{var r;return(r=l.color)!=null?r:n}),h=M(()=>l.mirrored!==void 0?l.mirrored?"scale(-1, 1)":void 0:i?"scale(-1, 1)":void 0);return(r,p)=>(d(),w("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:k.value,height:k.value,fill:V.value,transform:h.value},r.$attrs),[W(r.$slots,"default"),s.value==="bold"?(d(),w("g",Ia,Za)):s.value==="duotone"?(d(),w("g",Ua,La)):s.value==="fill"?(d(),w("g",Ba,Da)):s.value==="light"?(d(),w("g",Oa,Wa)):s.value==="regular"?(d(),w("g",za,Qa)):s.value==="thin"?(d(),w("g",Ga,Ka)):x("",!0)],16,Fa))}}),et=["width","height","fill","transform"],at={key:0},tt=y("path",{d:"M200.73,36H55.27A19.3,19.3,0,0,0,36,55.27V200.73A19.3,19.3,0,0,0,55.27,220H200.73A19.3,19.3,0,0,0,220,200.73V55.27A19.3,19.3,0,0,0,200.73,36ZM196,196H60V60H196Z"},null,-1),ot=[tt],lt={key:1},rt=y("path",{d:"M208,55.27V200.73a7.28,7.28,0,0,1-7.27,7.27H55.27A7.28,7.28,0,0,1,48,200.73V55.27A7.28,7.28,0,0,1,55.27,48H200.73A7.28,7.28,0,0,1,208,55.27Z",opacity:"0.2"},null,-1),nt=y("path",{d:"M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z"},null,-1),ut=[rt,nt],st={key:2},it=y("path",{d:"M216,55.27V200.73A15.29,15.29,0,0,1,200.73,216H55.27A15.29,15.29,0,0,1,40,200.73V55.27A15.29,15.29,0,0,1,55.27,40H200.73A15.29,15.29,0,0,1,216,55.27Z"},null,-1),dt=[it],pt={key:3},mt=y("path",{d:"M200.73,42H55.27A13.28,13.28,0,0,0,42,55.27V200.73A13.28,13.28,0,0,0,55.27,214H200.73A13.28,13.28,0,0,0,214,200.73V55.27A13.28,13.28,0,0,0,200.73,42ZM202,200.73a1.27,1.27,0,0,1-1.27,1.27H55.27A1.27,1.27,0,0,1,54,200.73V55.27A1.27,1.27,0,0,1,55.27,54H200.73A1.27,1.27,0,0,1,202,55.27Z"},null,-1),vt=[mt],ct={key:4},ft=y("path",{d:"M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z"},null,-1),gt=[ft],ht={key:5},yt=y("path",{d:"M200.73,44H55.27A11.29,11.29,0,0,0,44,55.27V200.73A11.29,11.29,0,0,0,55.27,212H200.73A11.29,11.29,0,0,0,212,200.73V55.27A11.29,11.29,0,0,0,200.73,44ZM204,200.73a3.28,3.28,0,0,1-3.27,3.27H55.27A3.28,3.28,0,0,1,52,200.73V55.27A3.28,3.28,0,0,1,55.27,52H200.73A3.28,3.28,0,0,1,204,55.27Z"},null,-1),wt=[yt],bt={name:"PhStop"},kt=R({...bt,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(m){const l=m,o=H("weight","regular"),f=H("size","1em"),n=H("color","currentColor"),i=H("mirrored",!1),s=M(()=>{var r;return(r=l.weight)!=null?r:o}),k=M(()=>{var r;return(r=l.size)!=null?r:f}),V=M(()=>{var r;return(r=l.color)!=null?r:n}),h=M(()=>l.mirrored!==void 0?l.mirrored?"scale(-1, 1)":void 0:i?"scale(-1, 1)":void 0);return(r,p)=>(d(),w("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:k.value,height:k.value,fill:V.value,transform:h.value},r.$attrs),[W(r.$slots,"default"),s.value==="bold"?(d(),w("g",at,ot)):s.value==="duotone"?(d(),w("g",lt,ut)):s.value==="fill"?(d(),w("g",st,dt)):s.value==="light"?(d(),w("g",pt,vt)):s.value==="regular"?(d(),w("g",ct,gt)):s.value==="thin"?(d(),w("g",ht,wt)):x("",!0)],16,et))}});function pe(m){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?Object(arguments[l]):{},f=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),f.forEach(function(n){At(m,n,o[n])})}return m}function At(m,l,o){return l in m?Object.defineProperty(m,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):m[l]=o,m}var J=function(l,o){var f=pe({},l,o.attrs);return a(Fe,pe({},f,{icon:ia}),null)};J.displayName="ExportOutlined";J.inheritAttrs=!1;const St=J,_t=R({__name:"ThreadSelectorModal",props:{showThreadModal:{type:Boolean},stage:{},executionConfig:{}},emits:["fix-invalid-json","update:execution-config","update:show-thread-modal"],setup(m,{emit:l}){const o=()=>{l("update:show-thread-modal",!1),q.writeTestData(f.threadData)};Ie(async()=>f.threadData=await q.readTestData());const f=Re({threadData:"{}"});return(n,i)=>(d(),S(e(ce),{open:n.showThreadModal,footer:null,onCancel:o},{default:t(()=>[a(ea,{stage:n.stage,"execution-config":n.executionConfig,"onUpdate:executionConfig":i[0]||(i[0]=s=>l("update:execution-config",s)),"onUpdate:showThreadModal":i[1]||(i[1]=s=>l("update:show-thread-modal",s)),onFixInvalidJson:i[2]||(i[2]=s=>l("fix-invalid-json",s,s))},null,8,["stage","execution-config"])]),_:1},8,["open"]))}});const Ct=j(_t,[["__scopeId","data-v-541d30a8"]]),he=m=>(me("data-v-a8ca44f6"),m=m(),ve(),m),$t=he(()=>y("i",null,"string",-1)),Mt=he(()=>y("i",null,"string list",-1)),Vt=R({__name:"FormNotificationSettings",props:{form:{}},setup(m){const o=C(m.form);return(f,n)=>(d(),w(Q,null,[a(e(G),{layout:"vertical"},{default:t(()=>[a(e(E),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:t(()=>[b(" Thread waiting "),a(e(fe),{checked:o.value.notificationTrigger.enabled,"onUpdate:checked":n[0]||(n[0]=i=>o.value.notificationTrigger.enabled=i)},{default:t(()=>[b(" Enabled ")]),_:1},8,["checked"])]),_:1}),a(e(N),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:t(()=>[b(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),a(e(T),{label:"Variable name"},{default:t(()=>[a(e(F),{value:o.value.notificationTrigger.variable_name,"onUpdate:value":n[1]||(n[1]=i=>o.value.notificationTrigger.variable_name=i),disabled:!o.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),a(e(ie),{type:"info"},{message:t(()=>[a(e(N),null,{default:t(()=>[b(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),$t,b(" or a "),Mt,b(". ")]),_:1})]),_:1}),a(e(ie),{style:{"margin-top":"20px"}},{message:t(()=>[a(e(N),null,{default:t(()=>[b(" Notifications are a paid feature. Talk to your account manager to enable them. ")]),_:1})]),_:1})],64))}});const xt=j(Vt,[["__scopeId","data-v-a8ca44f6"]]),Tt=R({__name:"FormSettings",props:{form:{}},setup(m){const o=C(m.form);return(f,n)=>(d(),S(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:t(()=>[a(je,{runtime:o.value},null,8,["runtime"]),a(e(T),{label:"Form name"},{default:t(()=>[a(e(F),{value:o.value.title,"onUpdate:value":n[0]||(n[0]=i=>o.value.title=i),type:"text",onChange:n[1]||(n[1]=i=>{var s;return o.value.title=(s=i.target.value)!=null?s:""})},null,8,["value"])]),_:1}),a(e(E),{level:3},{default:t(()=>[b(" Texts ")]),_:1}),a(e(E),{level:4},{default:t(()=>[b(" Welcome Screen ")]),_:1}),a(e(T),{label:"Title"},{default:t(()=>[a(e(F),{value:o.value.welcomeTitle,"onUpdate:value":n[2]||(n[2]=i=>o.value.welcomeTitle=i),type:"text",placeholder:o.value.title,disabled:o.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),a(e(T),{label:"Description"},{default:t(()=>[a(e(F),{value:o.value.startMessage,"onUpdate:value":n[3]||(n[3]=i=>o.value.startMessage=i),type:"text",disabled:o.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),{label:"Start button label"},{default:t(()=>[a(e(F),{value:o.value.startButtonText,"onUpdate:value":n[4]||(n[4]=i=>o.value.startButtonText=i),type:"text",placeholder:"Start",disabled:o.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),null,{default:t(()=>[a(e(re),{checked:o.value.autoStart,"onUpdate:checked":n[5]||(n[5]=i=>o.value.autoStart=i)},{default:t(()=>[b("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),a(e(E),{level:4},{default:t(()=>[b(" End Screen ")]),_:1}),a(e(T),{label:"End text"},{default:t(()=>[a(e(F),{value:o.value.endMessage,"onUpdate:value":n[6]||(n[6]=i=>o.value.endMessage=i),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),a(e(T),{label:"Restart button label"},{default:t(()=>[a(e(F),{value:o.value.restartButtonText,"onUpdate:value":n[7]||(n[7]=i=>o.value.restartButtonText=i),placeholder:"Restart",type:"text",disabled:!o.value.allowRestart},null,8,["value","disabled"])]),_:1}),a(e(T),{help:!o.value.isInitial&&"Only initial forms can be restarted"},{default:t(()=>[a(e(re),{checked:o.value.allowRestart,"onUpdate:checked":n[8]||(n[8]=i=>o.value.allowRestart=i),disabled:!o.value.isInitial},{default:t(()=>[b("Show restart button at the end")]),_:1},8,["checked","disabled"])]),_:1},8,["help"]),a(e(E),{level:4},{default:t(()=>[b(" Alert Messages ")]),_:1}),a(e(T),{label:"Error message"},{default:t(()=>[a(e(F),{value:o.value.errorMessage,"onUpdate:value":n[9]||(n[9]=i=>o.value.errorMessage=i),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}}),Ht=R({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},queryParams:{}},emits:["update:query-params"],setup(m,{emit:l}){const f=C(n(m.queryParams));function n(h){return Object.entries(h).map(([r,p])=>({key:r,value:p,id:Math.random().toString()}))}function i(){const h={};return f.value.forEach(({key:r,value:p})=>{h[r]=p}),h}const s=(h,r,p)=>{f.value[h]={key:r,value:p},l("update:query-params",i())},k=()=>{const h=f.value.length;f.value.push({key:`param-${h}`,value:"value"}),l("update:query-params",i())},V=h=>{f.value.splice(h,1),l("update:query-params",i())};return(h,r)=>(d(),S(e(ce),{open:h.open,onCancel:h.close},{footer:t(()=>[a(e(I),{type:"primary",onClick:h.close},{default:t(()=>[b("OK")]),_:1},8,["onClick"])]),default:t(()=>[a(e(P),{vertical:"",gap:"20"},{default:t(()=>[a(e(N),null,{default:t(()=>[b("Query params")]),_:1}),(d(!0),w(Q,null,Ze(f.value,(p,g)=>(d(),S(e(T),{key:g},{default:t(()=>[a(e(Ue),null,{default:t(()=>[a(e(F),{value:p.key,"onUpdate:value":u=>p.key=u,type:"text",placeholder:"name",onChange:()=>s(g,p.key,p.value)},null,8,["value","onUpdate:value","onChange"]),a(e(F),{value:p.value,"onUpdate:value":u=>p.value=u,type:"text",placeholder:"value",disabled:p.key===e(ge),onChange:()=>s(g,p.key,p.value)},null,8,["value","onUpdate:value","disabled","onChange"]),a(e(I),{danger:"",onClick:u=>V(g)},{default:t(()=>[b("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(T),null,{default:t(()=>[a(e(I),{type:"dashed",style:{width:"100%"},onClick:k},{default:t(()=>[b(" Add Query Param ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),Ft=m=>(me("data-v-ccc198f0"),m=m(),ve(),m),It={key:0},Rt={key:1},Zt=Ft(()=>y("br",null,null,-1)),Ut={class:"form-preview-container"},Et=R({__name:"FormTester",props:{formRunnerData:{},formState:{},userEmail:{},disabledWarning:{},queryParams:{},stageRunId:{},needsThread:{type:Boolean}},emits:["start","reset","navigate","logout","auto-fill-clicked","action-clicked","update-widget-errors","update-widget-value","update:query-params","update:show-thread-modal"],setup(m,{emit:l}){var r;const o=m,f=C(!1),n=()=>{f.value=!0},i=()=>{f.value=!1},s=M(()=>{const p=h.value.query?`?${h.value.query}`:"";return`/${o.formRunnerData.path}${p}`}),k=C((r=ne.get("dontShowReloadHelper"))!=null?r:!1),V=()=>{ne.set("dontShowReloadHelper",!0),k.value=!0},h=M(()=>{const p=new URLSearchParams(o.queryParams).toString();return{subdomain:"[your-subdomain]",path:o.formRunnerData.path,query:p}});return(p,g)=>(d(),w(Q,null,[a(e(G),{layout:"vertical"},{default:t(()=>[a(e(P),{gap:"small"},{default:t(()=>[p.formState.type&&e(Oe).includes(p.formState.type)?(d(),S(e(O),{key:0,placement:"bottom",open:k.value?void 0:!0},{content:t(()=>[k.value?(d(),w("span",It,"Reload form")):(d(),w("span",Rt,[b(" You can reload the form here"),Zt,a(e(ta),{onClick:V},{default:t(()=>[b("Don't show this again")]),_:1})]))]),default:t(()=>[a(e(I),{disabled:!!p.disabledWarning,onClick:g[0]||(g[0]=u=>l("reset"))},{default:t(()=>[a(e(Ha),{size:"20"})]),_:1},8,["disabled"])]),_:1},8,["open"])):x("",!0),e(D).includes(p.formState.type)?(d(),S(e(O),{key:1,placement:"bottom"},{content:t(()=>[b("Stop form")]),default:t(()=>[a(e(I),{onClick:g[1]||(g[1]=u=>l("reset"))},{default:t(()=>[a(e(kt),{size:"20"})]),_:1})]),_:1})):x("",!0),p.formState.type==="waiting"?(d(),S(e(O),{key:2,placement:"bottom"},{content:t(()=>[b("Start form")]),default:t(()=>[a(e(I),{disabled:!!p.disabledWarning,onClick:g[2]||(g[2]=u=>l("start"))},{default:t(()=>[a(e(Ya),{size:"20"})]),_:1},8,["disabled"])]),_:1})):x("",!0),a(e(F),{value:s.value,class:"url-preview",onClick:n},null,8,["value"]),a(e(oa),{dot:p.needsThread},{default:t(()=>{var u;return[a(e(I),{disabled:p.formState&&e(D).includes((u=p.formState)==null?void 0:u.type),onClick:g[3]||(g[3]=Z=>l("update:show-thread-modal",!0))},{default:t(()=>[b("Thread")]),_:1},8,["disabled"])]}),_:1},8,["dot"])]),_:1}),y("div",Ut,[a(qe,{"is-preview":"","form-runner-data":p.formRunnerData,disabled:p.disabledWarning,"form-state":p.formState,"user-email":p.userEmail,onUpdateWidgetErrors:g[4]||(g[4]=(u,Z)=>l("update-widget-errors",u,Z)),onUpdateWidgetValue:g[5]||(g[5]=(u,Z)=>l("update-widget-value",u,Z)),onActionClicked:g[6]||(g[6]=u=>l("action-clicked",u)),onNavigate:g[7]||(g[7]=u=>l("navigate",u)),onLogout:g[8]||(g[8]=u=>l("logout")),onAutoFillClicked:g[9]||(g[9]=u=>l("auto-fill-clicked"))},null,8,["form-runner-data","disabled","form-state","user-email"])])]),_:1}),a(Ht,{"query-params":p.queryParams,open:f.value,close:i,"onUpdate:queryParams":g[10]||(g[10]=u=>l("update:query-params",u))},null,8,["query-params","open"])],64))}});const Pt=j(Et,[["__scopeId","data-v-ccc198f0"]]),Lt={style:{width:"50%"}},Bt={style:{width:"50%"}},ll=R({__name:"FormEditor",setup(m){const l=Ee(),o=Pe(),f=C(null),n=C("source-code"),i=C("preview"),s=C(null),k=C(null),V=C(null),h=C(null),r=C({}),p=C(!1),g=v=>u.value={...u.value,attached:!!v},u=C({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),Z=M(()=>{var v;return(v=A.value)!=null&&v.form.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:u.value.attached&&u.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!u.value.isInitial&&u.value.attached&&!u.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),ye=(v,c)=>{var $;($=f.value)==null||$.setHighlight(v,c)},we=()=>{var v,c;(v=f.value)==null||v.restartEditor(),(c=f.value)==null||c.startPreviewMode()};Le(()=>u.value.stageRunId?r.value={...r.value,[ge]:u.value.stageRunId}:null);const{result:A,loading:be,refetch:ke}=Ke(async()=>{const[v,c]=await Promise.all([Xe.get(o.params.id),q.get()]);return u.value.isInitial=v.isInitial,Be({form:v,workspace:c})});ue([()=>u.value.attached,r,A],()=>{K()});function K(){if(!A.value)return;const v=!u.value.attached;V.value=A.value.form.makeRunnerData(A.value.workspace),s.value&&s.value.clearListeners(),s.value=new We({formRunnerData:V.value,queryParams:r.value,userManager:He,logService:Y,connectionManager:new ze(A.value.form.id,v),onFormStart:we,onFormEnd:Ae,onRedirect:Ve,onAuthUpdate:$=>h.value=$,onStateUpdate:$=>k.value=$,onStackTraceUpdate:ye});const c=s.value.getState();k.value=c.formState,h.value=c.passwordlessUser}const Ae=()=>{var v,c,$;u.value={attached:!1,stageRunId:null,pendingFork:!1,isInitial:(c=(v=A.value)==null?void 0:v.form.isInitial)!=null?c:!1},($=f.value)==null||$.restartEditor()};function Se(){var v;(v=s.value)==null||v.start()}function _e(){var v,c;(v=f.value)==null||v.restartEditor(),(c=s.value)==null||c.reset()}const Ce=v=>{se("editor",l,v.path)};function $e(){l.push({name:"stages"})}const X=C(null),Me=v=>{!A.value||(A.value.form.file=v)},Y=Je.create();function Ve(v,c){se("editor",l,v,c)}const xe=()=>{var v;l.push({name:"formPreview",query:o.query,params:{id:(v=A.value)==null?void 0:v.form.id}})},Te=()=>{var c;let v=`/${(c=A.value)==null?void 0:c.form.path}`;u.value.attached&&u.value.stageRunId&&(v+=`?abstra-run-id=${u.value.stageRunId}`),window.open(v,"_blank")};return ue(()=>o.params.id,()=>{ke()}),(v,c)=>(d(),S(De,{"no-margins":""},{navbar:t(()=>[e(A)?(d(),S(e(ra),{key:0,title:e(A).form.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:$e},{extra:t(()=>[a(la,{"docs-path":"forms/overview","show-save-button":!1,"editing-model":e(A).form},null,8,["editing-model"])]),_:1},8,["title"])):x("",!0)]),content:t(()=>[e(A)?(d(),S(e(P),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:t(()=>{var $,U,ee,ae,te,oe;return[y("div",Lt,[a(e(de),{"active-key":n.value,"onUpdate:activeKey":c[0]||(c[0]=_=>n.value=_)},{rightExtra:t(()=>[a(Ye,{model:e(A).form,onSave:K},null,8,["model"])]),default:t(()=>[a(e(B),{key:"source-code",tab:"Source code"}),a(e(B),{key:"settings",tab:"Settings"}),a(e(B),{key:"notifications",tab:"Notifications"})]),_:1},8,["active-key"]),n.value==="source-code"?(d(),S(Qe,{key:0,ref_key:"code",ref:f,script:e(A).form,workspace:e(A).workspace,onUpdateFile:Me},null,8,["script","workspace"])):x("",!0),n.value==="settings"?(d(),S(Tt,{key:1,form:e(A).form},null,8,["form"])):x("",!0),n.value==="notifications"?(d(),S(xt,{key:2,form:e(A).form},null,8,["form"])):x("",!0),p.value?(d(),S(Ct,{key:3,"execution-config":u.value,"onUpdate:executionConfig":c[1]||(c[1]=_=>u.value=_),"show-thread-modal":p.value,"onUpdate:showThreadModal":c[2]||(c[2]=_=>p.value=_),stage:e(A).form,onFixInvalidJson:c[3]||(c[3]=(_,L)=>{var le;return(le=X.value)==null?void 0:le.fixJson(_,L)})},null,8,["execution-config","show-thread-modal","stage"])):x("",!0)]),y("div",Bt,[a(e(de),{"active-key":i.value,"onUpdate:activeKey":c[4]||(c[4]=_=>i.value=_)},{rightExtra:t(()=>[a(e(P),{gap:"large",align:"center"},{default:t(()=>{var _;return[k.value&&e(D).includes((_=k.value)==null?void 0:_.type)?(d(),S(e(na),{key:0,color:"green"},{default:t(()=>[b(" Running ")]),_:1})):x("",!0),a(e(P),{gap:"small"},{default:t(()=>{var L;return[a(e(aa),null,{default:t(()=>[b("Continue workflow")]),_:1}),a(e(fe),{disabled:!!k.value&&e(D).includes((L=k.value)==null?void 0:L.type),checked:u.value.attached,"onUpdate:checked":g},null,8,["disabled","checked"])]}),_:1}),u.value.attached?(d(),S(e(I),{key:1,target:"_blank",onClick:Te},{icon:t(()=>[a(e(St))]),default:t(()=>[b(" Open ")]),_:1})):(d(),S(e(I),{key:2,target:"_blank",onClick:xe},{icon:t(()=>[a(e(ua))]),default:t(()=>[b(" Preview ")]),_:1}))]}),_:1})]),default:t(()=>[a(e(B),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(be)||!V.value||!k.value?(d(),S(e(Ne),{key:0})):i.value==="preview"?(d(),S(Pt,{key:1,"query-params":r.value,"onUpdate:queryParams":c[5]||(c[5]=_=>r.value=_),"form-state":k.value,"form-runner-data":V.value,"user-email":($=h.value)==null?void 0:$.claims.email,"disabled-warning":Z.value,"stage-run-id":u.value.stageRunId,"needs-thread":!u.value.isInitial&&u.value.attached&&!!(u.value.pendingFork||!u.value.stageRunId),"onUpdate:showThreadModal":c[6]||(c[6]=_=>p.value=_),onStart:Se,onReset:_e,onLogout:(U=s.value)==null?void 0:U.logout,onActionClicked:(ee=s.value)==null?void 0:ee.handleActionClick,onNavigate:Ce,onUpdateWidgetErrors:(ae=s.value)==null?void 0:ae.updateWidgetFrontendErrors,onUpdateWidgetValue:(te=s.value)==null?void 0:te.updateWidgetValue,onAutoFillClicked:(oe=s.value)==null?void 0:oe.handleAutofillClick},null,8,["query-params","form-state","form-runner-data","user-email","disabled-warning","stage-run-id","needs-thread","onLogout","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAutoFillClicked"])):x("",!0)])]}),_:1})):x("",!0)]),footer:t(()=>{var $,U;return[a(Ge,{ref_key:"smartConsole",ref:X,runtime:"forms","log-service":e(Y),stage:($=e(A))==null?void 0:$.form,workspace:(U=e(A))==null?void 0:U.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{ll as default};
//# sourceMappingURL=FormEditor.ad903a12.js.map
