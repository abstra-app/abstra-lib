import{dx as Ve,a9 as Ie,dy as Te,dz as je,dA as de,dB as qe,dC as Ce,dr as We,r as Oe,u as Y,F as xe,E as _e,H as re,U as x,at as Ne,a3 as De,bP as ce,dD as Ee,d as He,$ as $e,L as Re,G as S,dE as ze,dF as Ue,dG as Ge,N as Ye,f as Ke,Q as fe,a5 as he,be as Qe,a2 as te,ax as J,aw as ge,b0 as ve,a1 as Xe,ay as X,ab as le}from"./outputWidgets.396f5ce1.js";import{c as Ze,g as Je,a as Be,d as ae,v as et,e as Me,A as tt,u as nt,f as rt,h as me,t as ie,i as be,j as it}from"./FormItem.a8de7296.js";import{s as lt,o as at,i as st,a as ue,b as ot,c as ke,t as ut,f as dt}from"./hasIn.63a13365.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7edea378-14ef-4433-9a59-ac01ef809336",e._sentryDebugIdIdentifier="sentry-dbid-7edea378-14ef-4433-9a59-ac01ef809336")}catch{}})();function we(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function ye(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function se(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return ye(n.overflowY,t)||ye(n.overflowX,t)||function(s){var r=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(s);return!!r&&(r.clientHeight<s.scrollHeight||r.clientWidth<s.scrollWidth)}(e)}return!1}function ne(e,t,n,s,r,i,u,F){return i<e&&u>t||i>e&&u<t?0:i<=e&&F<=n||u>=t&&F>=n?i-e-s:u>t&&F<n||i<e&&F>n?u-t+r:0}var pe=function(e,t){var n=window,s=t.scrollMode,r=t.block,i=t.inline,u=t.boundary,F=t.skipOverflowHiddenElements,P=typeof u=="function"?u:function(Se){return Se!==u};if(!we(e))throw new TypeError("Invalid target");for(var V,M,q=document.scrollingElement||document.documentElement,A=[],b=e;we(b)&&P(b);){if((b=(M=(V=b).parentElement)==null?V.getRootNode().host||null:M)===q){A.push(b);break}b!=null&&b===document.body&&se(b)&&!se(document.documentElement)||b!=null&&se(b,F)&&A.push(b)}for(var O=n.visualViewport?n.visualViewport.width:innerWidth,L=n.visualViewport?n.visualViewport.height:innerHeight,D=window.scrollX||pageXOffset,C=window.scrollY||pageYOffset,_=e.getBoundingClientRect(),o=_.height,l=_.width,f=_.top,w=_.right,m=_.bottom,c=_.left,y=r==="start"||r==="nearest"?f:r==="end"?m:f+o/2,h=i==="center"?c+l/2:i==="end"?w:c,p=[],I=0;I<A.length;I++){var g=A[I],T=g.getBoundingClientRect(),N=T.height,H=T.width,a=T.top,d=T.right,v=T.bottom,E=T.left;if(s==="if-needed"&&f>=0&&c>=0&&m<=L&&w<=O&&f>=a&&m<=v&&c>=E&&w<=d)return p;var W=getComputedStyle(g),R=parseInt(W.borderLeftWidth,10),G=parseInt(W.borderTopWidth,10),j=parseInt(W.borderRightWidth,10),$=parseInt(W.borderBottomWidth,10),k=0,z=0,K="offsetWidth"in g?g.offsetWidth-g.clientWidth-R-j:0,U="offsetHeight"in g?g.offsetHeight-g.clientHeight-G-$:0,Q="offsetWidth"in g?g.offsetWidth===0?0:H/g.offsetWidth:0,B="offsetHeight"in g?g.offsetHeight===0?0:N/g.offsetHeight:0;if(q===g)k=r==="start"?y:r==="end"?y-L:r==="nearest"?ne(C,C+L,L,G,$,C+y,C+y+o,o):y-L/2,z=i==="start"?h:i==="center"?h-O/2:i==="end"?h-O:ne(D,D+O,O,R,j,D+h,D+h+l,l),k=Math.max(0,k+C),z=Math.max(0,z+D);else{k=r==="start"?y-a-G:r==="end"?y-v+$+U:r==="nearest"?ne(a,v,N,G,$+U,y,y+o,o):y-(a+N/2)+U/2,z=i==="start"?h-E-R:i==="center"?h-(E+H/2)+K/2:i==="end"?h-d+j+K:ne(E,d,H,R,j+K,h,h+l,l);var ee=g.scrollLeft,Z=g.scrollTop;y+=Z-(k=Math.max(0,Math.min(Z+k/B,g.scrollHeight-N/B+U))),h+=ee-(z=Math.max(0,Math.min(ee+z/Q,g.scrollWidth-H/Q+K)))}p.push({el:g,top:k,left:z})}return p};function Ae(e){return e===Object(e)&&Object.keys(e).length!==0}function ct(e,t){t===void 0&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(s){var r=s.el,i=s.top,u=s.left;r.scroll&&n?r.scroll({top:i,left:u,behavior:t}):(r.scrollTop=i,r.scrollLeft=u)})}function ft(e){return e===!1?{block:"end",inline:"nearest"}:Ae(e)?e:{block:"start",inline:"nearest"}}function ht(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Ae(t)&&typeof t.behavior=="function")return t.behavior(n?pe(e,t):[]);if(!!n){var s=ft(t);return ct(pe(e,s),s.behavior)}}function gt(e,t){return lt(at(e,t,st),e+"")}function vt(e,t,n){var s=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(r);++s<r;)i[s]=e[s+t];return i}function mt(e){return Ve(e)&&Ie(e)}function bt(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var wt=Math.min;function yt(e,t,n){for(var s=n?qe:Ce,r=e[0].length,i=e.length,u=i,F=Array(i),P=1/0,V=[];u--;){var M=e[u];u&&t&&(M=ue(M,Te(t))),P=wt(M.length,P),F[u]=!n&&(t||r>=120&&M.length>=120)?new je(u&&M):void 0}M=e[0];var q=-1,A=F[0];e:for(;++q<r&&V.length<P;){var b=M[q],O=t?t(b):b;if(b=n||b!==0?b:0,!(A?de(A,O):s(V,O,n))){for(u=i;--u;){var L=F[u];if(!(L?de(L,O):s(e[u],O,n)))continue e}A&&A.push(O),V.push(b)}}return V}function pt(e){return mt(e)?e:[]}var Ft=gt(function(e){var t=ue(e,pt);return t.length&&t[0]===e[0]?yt(t):[]});const Pt=Ft;function Ot(e,t){return t.length<2?e:ot(e,vt(t,0,-1))}function Et(e,t){return t=ke(t,e),e=Ot(e,t),e==null||delete e[ut(bt(t))]}function Mt(e){return We(e)?void 0:e}var kt=1,At=2,Lt=4,St=dt(function(e,t){var n={};if(e==null)return n;var s=!1;t=ue(t,function(i){return i=ke(i,e),s||(s=i.length>1),i}),Ze(e,Je(e),n),s&&(n=Be(n,kt|At|Lt,Mt));for(var r=t.length;r--;)Et(n,t[r]);return n});const Vt=St;function Le(e){let t=!1,n=e.length;const s=[];return e.length?new Promise((r,i)=>{e.forEach((u,F)=>{u.catch(P=>(t=!0,P)).then(P=>{n-=1,s[F]=P,!(n>0)&&(t&&i(s),r(s))})})}):Promise.resolve([])}function Fe(e){let t=!1;return e&&e.length&&e.every(n=>n.required?(t=!0,!1):!0),t}function Pe(e){return e==null?[]:Array.isArray(e)?e:[e]}function oe(e,t,n){let s=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const r=t.split(".");let i=0;for(let u=r.length;i<u-1&&!(!s&&!n);++i){const F=r[i];if(F in s)s=s[F];else{if(n)throw new Error("please transfer a valid name path to validate!");break}}return{o:s,k:r[i],v:s?s[r[i]]:null,isValid:s&&r[i]in s}}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe({}),n=arguments.length>2?arguments[2]:void 0;const s=ae(Y(e)),r=xe({}),i=_e([]),u=o=>{x(Y(e),x(x({},ae(s)),o)),De(()=>{Object.keys(r).forEach(l=>{r[l]={autoLink:!1,required:Fe(Y(t)[l])}})})},F=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;return l.length?o.filter(f=>{const w=Pe(f.trigger||"change");return Pt(w,l).length}):o};let P=null;const V=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=arguments.length>2?arguments[2]:void 0;const w=[],m={};for(let h=0;h<o.length;h++){const p=o[h],I=oe(Y(e),p,f);if(!I.isValid)continue;m[p]=I.v;const g=F(Y(t)[p],Pe(l&&l.trigger));g.length&&w.push(M(p,I.v,g,l||{}).then(()=>({name:p,errors:[],warnings:[]})).catch(T=>{const N=[],H=[];return T.forEach(a=>{let{rule:{warningOnly:d},errors:v}=a;d?H.push(...v):N.push(...v)}),N.length?Promise.reject({name:p,errors:N,warnings:H}):{name:p,errors:N,warnings:H}}))}const c=Le(w);P=c;const y=c.then(()=>P===c?Promise.resolve(m):Promise.reject([])).catch(h=>{const p=h.filter(I=>I&&I.errors.length);return Promise.reject({values:m,errorFields:p,outOfDate:P!==c})});return y.catch(h=>h),y},M=function(o,l,f){let w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const m=et([o],l,f,x({validateMessages:Me},w),!!w.validateFirst);return r[o]?(r[o].validateStatus="validating",m.catch(c=>c).then(function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];var y;if(r[o].validateStatus==="validating"){const h=c.filter(p=>p&&p.errors.length);r[o].validateStatus=h.length?"error":"success",r[o].help=h.length?h.map(p=>p.errors):null,(y=n==null?void 0:n.onValidate)===null||y===void 0||y.call(n,o,!h.length,h.length?ce(r[o].help[0]):null)}}),m):m.catch(c=>c)},q=(o,l)=>{let f=[],w=!0;o?Array.isArray(o)?f=o:f=[o]:(w=!1,f=i.value);const m=V(f,l||{},w);return m.catch(c=>c),m},A=o=>{let l=[];o?Array.isArray(o)?l=o:l=[o]:l=i.value,l.forEach(f=>{r[f]&&x(r[f],{validateStatus:"",help:null})})},b=o=>{const l={autoLink:!1},f=[],w=Array.isArray(o)?o:[o];for(let m=0;m<w.length;m++){const c=w[m];(c==null?void 0:c.validateStatus)==="error"&&(l.validateStatus="error",c.help&&f.push(c.help)),l.required=l.required||(c==null?void 0:c.required)}return l.help=f,l};let O=s,L=!0;const D=o=>{const l=[];i.value.forEach(f=>{const w=oe(o,f,!1),m=oe(O,f,!1);(L&&(n==null?void 0:n.immediate)&&w.isValid||!Ee(w.v,m.v))&&l.push(f)}),q(l,{trigger:"change"}),L=!1,O=ae(ce(o))},C=n==null?void 0:n.debounce;let _=!0;return re(t,()=>{i.value=t?Object.keys(Y(t)):[],!_&&n&&n.validateOnRuleChange&&q(),_=!1},{deep:!0,immediate:!0}),re(i,()=>{const o={};i.value.forEach(l=>{o[l]=x({},r[l],{autoLink:!1,required:Fe(Y(t)[l])}),delete r[l]});for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&delete r[l];x(r,o)},{immediate:!0}),re(e,C&&C.wait?Ne(D,C.wait,Vt(C,["wait"])):D,{immediate:n&&!!n.immediate,deep:!0}),{modelRef:e,rulesRef:t,initialModel:s,validateInfos:r,resetFields:u,validate:q,validateField:M,mergeValidateInfo:b,clearValidate:A}}const Tt=()=>({layout:he.oneOf(Qe("horizontal","inline","vertical")),labelCol:te(),wrapperCol:te(),colon:J(),labelAlign:ge(),labelWrap:J(),prefixCls:String,requiredMark:ve([String,Boolean]),hideRequiredMark:J(),model:he.object,rules:te(),validateMessages:te(),validateOnRuleChange:J(),scrollToFirstError:Xe(),onSubmit:X(),name:String,validateTrigger:ve([String,Array]),size:ge(),disabled:J(),onValuesChange:X(),onFieldsChange:X(),onFinish:X(),onFinishFailed:X(),onValidate:X()});function jt(e,t){return Ee(ie(e),ie(t))}const qt=He({compatConfig:{MODE:3},name:"AForm",inheritAttrs:!1,props:$e(Tt(),{layout:"horizontal",hideRequiredMark:!1,colon:!0}),Item:tt,useForm:It,setup(e,t){let{emit:n,slots:s,expose:r,attrs:i}=t;const{prefixCls:u,direction:F,form:P,size:V,disabled:M}=Re("form",e),q=S(()=>e.requiredMark===""||e.requiredMark),A=S(()=>{var a;return q.value!==void 0?q.value:P&&((a=P.value)===null||a===void 0?void 0:a.requiredMark)!==void 0?P.value.requiredMark:!e.hideRequiredMark});ze(V),Ue(M);const b=S(()=>{var a,d;return(a=e.colon)!==null&&a!==void 0?a:(d=P.value)===null||d===void 0?void 0:d.colon}),{validateMessages:O}=Ge(),L=S(()=>x(x(x({},Me),O.value),e.validateMessages)),[D,C]=nt(u),_=S(()=>Ye(u.value,{[`${u.value}-${e.layout}`]:!0,[`${u.value}-hide-required-mark`]:A.value===!1,[`${u.value}-rtl`]:F.value==="rtl",[`${u.value}-${V.value}`]:V.value},C.value)),o=Oe(),l={},f=(a,d)=>{l[a]=d},w=a=>{delete l[a]},m=a=>{const d=!!a,v=d?ie(a).map(be):[];return d?Object.values(l).filter(E=>v.findIndex(W=>jt(W,E.fieldName.value))>-1):Object.values(l)},c=a=>{if(!e.model){le();return}m(a).forEach(d=>{d.resetField()})},y=a=>{m(a).forEach(d=>{d.clearValidate()})},h=a=>{const{scrollToFirstError:d}=e;if(n("finishFailed",a),d&&a.errorFields.length){let v={};typeof d=="object"&&(v=d),I(a.errorFields[0].name,v)}},p=function(){return N(...arguments)},I=function(a){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const v=m(a?[a]:void 0);if(v.length){const E=v[0].fieldId.value,W=E?document.getElementById(E):null;W&&ht(W,x({scrollMode:"if-needed",block:"nearest"},d))}},g=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(a===!0){const d=[];return Object.values(l).forEach(v=>{let{namePath:E}=v;d.push(E.value)}),me(e.model,d)}else return me(e.model,a)},T=(a,d)=>{if(le(),!e.model)return le(),Promise.reject("Form `model` is required for validateFields to work.");const v=!!a,E=v?ie(a).map(be):[],W=[];Object.values(l).forEach(j=>{var $;if(v||E.push(j.namePath.value),!(!(($=j.rules)===null||$===void 0)&&$.value.length))return;const k=j.namePath.value;if(!v||it(E,k)){const z=j.validateRules(x({validateMessages:L.value},d));W.push(z.then(()=>({name:k,errors:[],warnings:[]})).catch(K=>{const U=[],Q=[];return K.forEach(B=>{let{rule:{warningOnly:ee},errors:Z}=B;ee?Q.push(...Z):U.push(...Z)}),U.length?Promise.reject({name:k,errors:U,warnings:Q}):{name:k,errors:U,warnings:Q}}))}});const R=Le(W);o.value=R;const G=R.then(()=>o.value===R?Promise.resolve(g(E)):Promise.reject([])).catch(j=>{const $=j.filter(k=>k&&k.errors.length);return Promise.reject({values:g(E),errorFields:$,outOfDate:o.value!==R})});return G.catch(j=>j),G},N=function(){return T(...arguments)},H=a=>{a.preventDefault(),a.stopPropagation(),n("submit",a),e.model&&T().then(v=>{n("finish",v)}).catch(v=>{h(v)})};return r({resetFields:c,clearValidate:y,validateFields:T,getFieldsValue:g,validate:p,scrollToField:I}),rt({model:S(()=>e.model),name:S(()=>e.name),labelAlign:S(()=>e.labelAlign),labelCol:S(()=>e.labelCol),labelWrap:S(()=>e.labelWrap),wrapperCol:S(()=>e.wrapperCol),vertical:S(()=>e.layout==="vertical"),colon:b,requiredMark:A,validateTrigger:S(()=>e.validateTrigger),rules:S(()=>e.rules),addField:f,removeField:w,onValidate:(a,d,v)=>{n("validate",a,d,v)},validateMessages:L}),re(()=>e.rules,()=>{e.validateOnRuleChange&&T()}),()=>{var a;return D(Ke("form",fe(fe({},i),{},{onSubmit:H,class:[_.value,i.class]}),[(a=s.default)===null||a===void 0?void 0:a.call(s)]))}}}),_t=qt;export{_t as F,ht as s};
//# sourceMappingURL=Form.716e7fa5.js.map
