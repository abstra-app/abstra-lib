import{dg as Se,aa as Ie,dy as Te,dz as qe,dA as de,dB as Ce,dC as je,aF as We,r as Oe,u as Y,G as _e,F as Ne,J as re,V as _,aL as xe,a4 as De,c1 as ce,dD as Ee,d as He,a0 as Re,N as $e,H as V,dE as ze,dF as Ge,dG as Ue,O as Ye,f as Ke,R as fe,a6 as he,bC as Qe,a3 as te,aP as J,aO as ge,bo as ve,a2 as Xe,aQ as X,ac as le}from"./outputWidgets.a8447bcb.js";import{s as Ze,o as Je,i as Be,d as ue,e as et,f as ke,t as tt,g as nt,h as rt,j as it,k as lt,l as ae,v as at,m as Me,A as st,u as ot,n as ut,p as me,q as ie,r as be,w as dt}from"./Title.4127a4b4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1d5a0c56-5a6b-4cc3-ae13-a346770efb7e",e._sentryDebugIdIdentifier="sentry-dbid-1d5a0c56-5a6b-4cc3-ae13-a346770efb7e")}catch{}})();function we(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function pe(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function se(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return pe(n.overflowY,t)||pe(n.overflowX,t)||function(s){var r=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}}(s);return!!r&&(r.clientHeight<s.scrollHeight||r.clientWidth<s.scrollWidth)}(e)}return!1}function ne(e,t,n,s,r,i,u,F){return i<e&&u>t||i>e&&u<t?0:i<=e&&F<=n||u>=t&&F>=n?i-e-s:u>t&&F<n||i<e&&F>n?u-t+r:0}var ye=function(e,t){var n=window,s=t.scrollMode,r=t.block,i=t.inline,u=t.boundary,F=t.skipOverflowHiddenElements,P=typeof u=="function"?u:function(Ve){return Ve!==u};if(!we(e))throw new TypeError("Invalid target");for(var S,k,C=document.scrollingElement||document.documentElement,A=[],b=e;we(b)&&P(b);){if((b=(k=(S=b).parentElement)==null?S.getRootNode().host||null:k)===C){A.push(b);break}b!=null&&b===document.body&&se(b)&&!se(document.documentElement)||b!=null&&se(b,F)&&A.push(b)}for(var O=n.visualViewport?n.visualViewport.width:innerWidth,L=n.visualViewport?n.visualViewport.height:innerHeight,D=window.scrollX||pageXOffset,j=window.scrollY||pageYOffset,N=e.getBoundingClientRect(),o=N.height,l=N.width,f=N.top,w=N.right,m=N.bottom,c=N.left,p=r==="start"||r==="nearest"?f:r==="end"?m:f+o/2,h=i==="center"?c+l/2:i==="end"?w:c,y=[],I=0;I<A.length;I++){var g=A[I],T=g.getBoundingClientRect(),x=T.height,H=T.width,a=T.top,d=T.right,v=T.bottom,E=T.left;if(s==="if-needed"&&f>=0&&c>=0&&m<=L&&w<=O&&f>=a&&m<=v&&c>=E&&w<=d)return y;var W=getComputedStyle(g),$=parseInt(W.borderLeftWidth,10),U=parseInt(W.borderTopWidth,10),q=parseInt(W.borderRightWidth,10),R=parseInt(W.borderBottomWidth,10),M=0,z=0,K="offsetWidth"in g?g.offsetWidth-g.clientWidth-$-q:0,G="offsetHeight"in g?g.offsetHeight-g.clientHeight-U-R:0,Q="offsetWidth"in g?g.offsetWidth===0?0:H/g.offsetWidth:0,B="offsetHeight"in g?g.offsetHeight===0?0:x/g.offsetHeight:0;if(C===g)M=r==="start"?p:r==="end"?p-L:r==="nearest"?ne(j,j+L,L,U,R,j+p,j+p+o,o):p-L/2,z=i==="start"?h:i==="center"?h-O/2:i==="end"?h-O:ne(D,D+O,O,$,q,D+h,D+h+l,l),M=Math.max(0,M+j),z=Math.max(0,z+D);else{M=r==="start"?p-a-U:r==="end"?p-v+R+G:r==="nearest"?ne(a,v,x,U,R+G,p,p+o,o):p-(a+x/2)+G/2,z=i==="start"?h-E-$:i==="center"?h-(E+H/2)+K/2:i==="end"?h-d+q+K:ne(E,d,H,$,q+K,h,h+l,l);var ee=g.scrollLeft,Z=g.scrollTop;p+=Z-(M=Math.max(0,Math.min(Z+M/B,g.scrollHeight-x/B+G))),h+=ee-(z=Math.max(0,Math.min(ee+z/Q,g.scrollWidth-H/Q+K)))}y.push({el:g,top:M,left:z})}return y};function Ae(e){return e===Object(e)&&Object.keys(e).length!==0}function ct(e,t){t===void 0&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(s){var r=s.el,i=s.top,u=s.left;r.scroll&&n?r.scroll({top:i,left:u,behavior:t}):(r.scrollTop=i,r.scrollLeft=u)})}function ft(e){return e===!1?{block:"end",inline:"nearest"}:Ae(e)?e:{block:"start",inline:"nearest"}}function ht(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Ae(t)&&typeof t.behavior=="function")return t.behavior(n?ye(e,t):[]);if(!!n){var s=ft(t);return ct(ye(e,s),s.behavior)}}function gt(e,t){return Ze(Je(e,t,Be),e+"")}function vt(e,t,n){var s=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(r);++s<r;)i[s]=e[s+t];return i}function mt(e){return Se(e)&&Ie(e)}function bt(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var wt=Math.min;function pt(e,t,n){for(var s=n?Ce:je,r=e[0].length,i=e.length,u=i,F=Array(i),P=1/0,S=[];u--;){var k=e[u];u&&t&&(k=ue(k,Te(t))),P=wt(k.length,P),F[u]=!n&&(t||r>=120&&k.length>=120)?new qe(u&&k):void 0}k=e[0];var C=-1,A=F[0];e:for(;++C<r&&S.length<P;){var b=k[C],O=t?t(b):b;if(b=n||b!==0?b:0,!(A?de(A,O):s(S,O,n))){for(u=i;--u;){var L=F[u];if(!(L?de(L,O):s(e[u],O,n)))continue e}A&&A.push(O),S.push(b)}}return S}function yt(e){return mt(e)?e:[]}var Ft=gt(function(e){var t=ue(e,yt);return t.length&&t[0]===e[0]?pt(t):[]});const Pt=Ft;function Ot(e,t){return t.length<2?e:et(e,vt(t,0,-1))}function Et(e,t){return t=ke(t,e),e=Ot(e,t),e==null||delete e[tt(bt(t))]}function kt(e){return We(e)?void 0:e}var Mt=1,At=2,Lt=4,Vt=nt(function(e,t){var n={};if(e==null)return n;var s=!1;t=ue(t,function(i){return i=ke(i,e),s||(s=i.length>1),i}),rt(e,it(e),n),s&&(n=lt(n,Mt|At|Lt,kt));for(var r=t.length;r--;)Et(n,t[r]);return n});const St=Vt;function Le(e){let t=!1,n=e.length;const s=[];return e.length?new Promise((r,i)=>{e.forEach((u,F)=>{u.catch(P=>(t=!0,P)).then(P=>{n-=1,s[F]=P,!(n>0)&&(t&&i(s),r(s))})})}):Promise.resolve([])}function Fe(e){let t=!1;return e&&e.length&&e.every(n=>n.required?(t=!0,!1):!0),t}function Pe(e){return e==null?[]:Array.isArray(e)?e:[e]}function oe(e,t,n){let s=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const r=t.split(".");let i=0;for(let u=r.length;i<u-1&&!(!s&&!n);++i){const F=r[i];if(F in s)s=s[F];else{if(n)throw new Error("please transfer a valid name path to validate!");break}}return{o:s,k:r[i],v:s?s[r[i]]:null,isValid:s&&r[i]in s}}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe({}),n=arguments.length>2?arguments[2]:void 0;const s=ae(Y(e)),r=_e({}),i=Ne([]),u=o=>{_(Y(e),_(_({},ae(s)),o)),De(()=>{Object.keys(r).forEach(l=>{r[l]={autoLink:!1,required:Fe(Y(t)[l])}})})},F=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;return l.length?o.filter(f=>{const w=Pe(f.trigger||"change");return Pt(w,l).length}):o};let P=null;const S=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=arguments.length>2?arguments[2]:void 0;const w=[],m={};for(let h=0;h<o.length;h++){const y=o[h],I=oe(Y(e),y,f);if(!I.isValid)continue;m[y]=I.v;const g=F(Y(t)[y],Pe(l&&l.trigger));g.length&&w.push(k(y,I.v,g,l||{}).then(()=>({name:y,errors:[],warnings:[]})).catch(T=>{const x=[],H=[];return T.forEach(a=>{let{rule:{warningOnly:d},errors:v}=a;d?H.push(...v):x.push(...v)}),x.length?Promise.reject({name:y,errors:x,warnings:H}):{name:y,errors:x,warnings:H}}))}const c=Le(w);P=c;const p=c.then(()=>P===c?Promise.resolve(m):Promise.reject([])).catch(h=>{const y=h.filter(I=>I&&I.errors.length);return Promise.reject({values:m,errorFields:y,outOfDate:P!==c})});return p.catch(h=>h),p},k=function(o,l,f){let w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const m=at([o],l,f,_({validateMessages:Me},w),!!w.validateFirst);return r[o]?(r[o].validateStatus="validating",m.catch(c=>c).then(function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];var p;if(r[o].validateStatus==="validating"){const h=c.filter(y=>y&&y.errors.length);r[o].validateStatus=h.length?"error":"success",r[o].help=h.length?h.map(y=>y.errors):null,(p=n==null?void 0:n.onValidate)===null||p===void 0||p.call(n,o,!h.length,h.length?ce(r[o].help[0]):null)}}),m):m.catch(c=>c)},C=(o,l)=>{let f=[],w=!0;o?Array.isArray(o)?f=o:f=[o]:(w=!1,f=i.value);const m=S(f,l||{},w);return m.catch(c=>c),m},A=o=>{let l=[];o?Array.isArray(o)?l=o:l=[o]:l=i.value,l.forEach(f=>{r[f]&&_(r[f],{validateStatus:"",help:null})})},b=o=>{const l={autoLink:!1},f=[],w=Array.isArray(o)?o:[o];for(let m=0;m<w.length;m++){const c=w[m];(c==null?void 0:c.validateStatus)==="error"&&(l.validateStatus="error",c.help&&f.push(c.help)),l.required=l.required||(c==null?void 0:c.required)}return l.help=f,l};let O=s,L=!0;const D=o=>{const l=[];i.value.forEach(f=>{const w=oe(o,f,!1),m=oe(O,f,!1);(L&&(n==null?void 0:n.immediate)&&w.isValid||!Ee(w.v,m.v))&&l.push(f)}),C(l,{trigger:"change"}),L=!1,O=ae(ce(o))},j=n==null?void 0:n.debounce;let N=!0;return re(t,()=>{i.value=t?Object.keys(Y(t)):[],!N&&n&&n.validateOnRuleChange&&C(),N=!1},{deep:!0,immediate:!0}),re(i,()=>{const o={};i.value.forEach(l=>{o[l]=_({},r[l],{autoLink:!1,required:Fe(Y(t)[l])}),delete r[l]});for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&delete r[l];_(r,o)},{immediate:!0}),re(e,j&&j.wait?xe(D,j.wait,St(j,["wait"])):D,{immediate:n&&!!n.immediate,deep:!0}),{modelRef:e,rulesRef:t,initialModel:s,validateInfos:r,resetFields:u,validate:C,validateField:k,mergeValidateInfo:b,clearValidate:A}}const Tt=()=>({layout:he.oneOf(Qe("horizontal","inline","vertical")),labelCol:te(),wrapperCol:te(),colon:J(),labelAlign:ge(),labelWrap:J(),prefixCls:String,requiredMark:ve([String,Boolean]),hideRequiredMark:J(),model:he.object,rules:te(),validateMessages:te(),validateOnRuleChange:J(),scrollToFirstError:Xe(),onSubmit:X(),name:String,validateTrigger:ve([String,Array]),size:ge(),disabled:J(),onValuesChange:X(),onFieldsChange:X(),onFinish:X(),onFinishFailed:X(),onValidate:X()});function qt(e,t){return Ee(ie(e),ie(t))}const Ct=He({compatConfig:{MODE:3},name:"AForm",inheritAttrs:!1,props:Re(Tt(),{layout:"horizontal",hideRequiredMark:!1,colon:!0}),Item:st,useForm:It,setup(e,t){let{emit:n,slots:s,expose:r,attrs:i}=t;const{prefixCls:u,direction:F,form:P,size:S,disabled:k}=$e("form",e),C=V(()=>e.requiredMark===""||e.requiredMark),A=V(()=>{var a;return C.value!==void 0?C.value:P&&((a=P.value)===null||a===void 0?void 0:a.requiredMark)!==void 0?P.value.requiredMark:!e.hideRequiredMark});ze(S),Ge(k);const b=V(()=>{var a,d;return(a=e.colon)!==null&&a!==void 0?a:(d=P.value)===null||d===void 0?void 0:d.colon}),{validateMessages:O}=Ue(),L=V(()=>_(_(_({},Me),O.value),e.validateMessages)),[D,j]=ot(u),N=V(()=>Ye(u.value,{[`${u.value}-${e.layout}`]:!0,[`${u.value}-hide-required-mark`]:A.value===!1,[`${u.value}-rtl`]:F.value==="rtl",[`${u.value}-${S.value}`]:S.value},j.value)),o=Oe(),l={},f=(a,d)=>{l[a]=d},w=a=>{delete l[a]},m=a=>{const d=!!a,v=d?ie(a).map(be):[];return d?Object.values(l).filter(E=>v.findIndex(W=>qt(W,E.fieldName.value))>-1):Object.values(l)},c=a=>{if(!e.model){le();return}m(a).forEach(d=>{d.resetField()})},p=a=>{m(a).forEach(d=>{d.clearValidate()})},h=a=>{const{scrollToFirstError:d}=e;if(n("finishFailed",a),d&&a.errorFields.length){let v={};typeof d=="object"&&(v=d),I(a.errorFields[0].name,v)}},y=function(){return x(...arguments)},I=function(a){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const v=m(a?[a]:void 0);if(v.length){const E=v[0].fieldId.value,W=E?document.getElementById(E):null;W&&ht(W,_({scrollMode:"if-needed",block:"nearest"},d))}},g=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(a===!0){const d=[];return Object.values(l).forEach(v=>{let{namePath:E}=v;d.push(E.value)}),me(e.model,d)}else return me(e.model,a)},T=(a,d)=>{if(le(),!e.model)return le(),Promise.reject("Form `model` is required for validateFields to work.");const v=!!a,E=v?ie(a).map(be):[],W=[];Object.values(l).forEach(q=>{var R;if(v||E.push(q.namePath.value),!(!((R=q.rules)===null||R===void 0)&&R.value.length))return;const M=q.namePath.value;if(!v||dt(E,M)){const z=q.validateRules(_({validateMessages:L.value},d));W.push(z.then(()=>({name:M,errors:[],warnings:[]})).catch(K=>{const G=[],Q=[];return K.forEach(B=>{let{rule:{warningOnly:ee},errors:Z}=B;ee?Q.push(...Z):G.push(...Z)}),G.length?Promise.reject({name:M,errors:G,warnings:Q}):{name:M,errors:G,warnings:Q}}))}});const $=Le(W);o.value=$;const U=$.then(()=>o.value===$?Promise.resolve(g(E)):Promise.reject([])).catch(q=>{const R=q.filter(M=>M&&M.errors.length);return Promise.reject({values:g(E),errorFields:R,outOfDate:o.value!==$})});return U.catch(q=>q),U},x=function(){return T(...arguments)},H=a=>{a.preventDefault(),a.stopPropagation(),n("submit",a),e.model&&T().then(v=>{n("finish",v)}).catch(v=>{h(v)})};return r({resetFields:c,clearValidate:p,validateFields:T,getFieldsValue:g,validate:y,scrollToField:I}),ut({model:V(()=>e.model),name:V(()=>e.name),labelAlign:V(()=>e.labelAlign),labelCol:V(()=>e.labelCol),labelWrap:V(()=>e.labelWrap),wrapperCol:V(()=>e.wrapperCol),vertical:V(()=>e.layout==="vertical"),colon:b,requiredMark:A,validateTrigger:V(()=>e.validateTrigger),rules:V(()=>e.rules),addField:f,removeField:w,onValidate:(a,d,v)=>{n("validate",a,d,v)},validateMessages:L}),re(()=>e.rules,()=>{e.validateOnRuleChange&&T()}),()=>{var a;return D(Ke("form",fe(fe({},i),{},{onSubmit:H,class:[N.value,i.class]}),[(a=s.default)===null||a===void 0?void 0:a.call(s)]))}}}),_t=Ct;export{_t as F,ht as s};
//# sourceMappingURL=Form.a869b3cf.js.map
