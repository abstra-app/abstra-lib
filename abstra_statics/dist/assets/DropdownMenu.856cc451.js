import{d as f,F as b,b as n,c as o,et as w,t as h,c2 as m,ew as y,E as k,e as i,eq as C,eA as d,eu as u,u as g,I as p,bw as I,ez as x,er as _}from"./registerWidgets.55c66c97.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9e52a9e8-0dbb-4d06-8c21-fdce7aceab7c",e._sentryDebugIdIdentifier="sentry-dbid-9e52a9e8-0dbb-4d06-8c21-fdce7aceab7c")}catch{}})();const T="/assets/empty-box.758770e4.svg",B=f({__name:"Triangle",props:{color:{type:String,required:!1}},setup(e){const t=e,s=b(()=>t.color?{borderColor:`${t.color} transparent transparent transparent`}:{});return(l,r)=>(n(),o("div",{class:"triangle",style:w(s.value)},null,4))}});const D=h(B,[["__scopeId","data-v-7ca41e33"]]),S=f({__name:"BoxShadowButton",props:{active:{type:Boolean}},setup(e){return(t,s)=>(n(),o("button",{class:y(["box-shadow-button",{active:t.active}])},[m(t.$slots,"default",{},void 0,!0)],2))}});const q=h(S,[["__scopeId","data-v-04d82775"]]),$={class:"dropdown-menu"},z={key:0},A={key:0,class:"options"},E=["onClick"],L={key:0,class:"line"},M=f({__name:"DropdownMenu",props:{title:{type:String,required:!1},options:{type:Array,required:!0},highlightLast:{type:Boolean,required:!1,default:!1},selectIcon:{type:Object,required:!1},payload:{required:!1,default:()=>({}),type:Object}},setup(e){const t=e,s=k({open:!1}),l=b(()=>t.options[t.options.length-1]),r=async v=>{await v(t.payload),s.open=!1};return(v,c)=>(n(),o("div",$,[i(q,{class:"title",active:s.open,onClick:c[0]||(c[0]=a=>s.open=!s.open)},{default:C(()=>[e.title?(n(),o("span",z,d(e.title),1)):u("",!0),e.selectIcon?(n(),g(p,{key:1,class:"select-icon",width:"18",height:"18",path:e.selectIcon,fill:"#6D7C93"},null,8,["path"])):(n(),g(D,{key:2,class:"icon",color:"#414a58"}))]),_:1},8,["active"]),s.open?(n(),o("div",A,[(n(!0),o(I,null,x(e.options.slice(0,-1),a=>(n(),o("div",{key:a.label,class:y(["option",{dangerous:!!a.dangerous}]),onClick:N=>r(a.onClick)},[i(p,{class:"option-icon",width:"14",height:"14",path:a.icon,fill:"#6D7C93"},null,8,["path"]),_("span",null,d(a.label),1)],10,E))),128)),e.highlightLast?(n(),o("div",L)):u("",!0),_("div",{class:y(["option",{dangerous:!!l.value.dangerous}]),onClick:c[1]||(c[1]=a=>r(l.value.onClick))},[i(p,{class:"option-icon",width:"14",height:"14",path:l.value.icon,fill:"#6D7C93"},null,8,["path"]),_("span",null,d(l.value.label),1)],2)])):u("",!0)]))}});const V=h(M,[["__scopeId","data-v-c4232f59"]]);export{V as D,T as _};
//# sourceMappingURL=DropdownMenu.856cc451.js.map
