import{d as y,L as m,b as n,c as o,B as w,t as h,D as b,H as f,w as k,e as d,x as C,O as i,E as u,u as g,I as p,F as x,N as B,y as _}from"./registerWidgets.806e8dbb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d7fc5d32-2717-40d6-a95d-81d050d8df12",e._sentryDebugIdIdentifier="sentry-dbid-d7fc5d32-2717-40d6-a95d-81d050d8df12")}catch{}})();const j="/assets/empty-box.758770e4.svg",D=y({__name:"Triangle",props:{color:{type:String,required:!1}},setup(e){const t=e,s=m(()=>t.color?{borderColor:`${t.color} transparent transparent transparent`}:{});return(l,r)=>(n(),o("div",{class:"triangle",style:w(s.value)},null,4))}});const I=h(D,[["__scopeId","data-v-7ca41e33"]]),S=y({__name:"BoxShadowButton",props:{active:{type:Boolean}},setup(e){return(t,s)=>(n(),o("button",{class:f(["box-shadow-button",{active:t.active}])},[b(t.$slots,"default",{},void 0,!0)],2))}});const $=h(S,[["__scopeId","data-v-04d82775"]]),q={class:"dropdown-menu"},L={key:0},N={key:0,class:"options"},O=["onClick"],E={key:0,class:"line"},M=y({__name:"DropdownMenu",props:{title:{type:String,required:!1},options:{type:Array,required:!0},highlightLast:{type:Boolean,required:!1,default:!1},selectIcon:{type:Object,required:!1},payload:{required:!1,default:()=>({}),type:Object}},setup(e){const t=e,s=k({open:!1}),l=m(()=>t.options[t.options.length-1]),r=async v=>{await v(t.payload),s.open=!1};return(v,c)=>(n(),o("div",q,[d($,{class:"title",active:s.open,onClick:c[0]||(c[0]=a=>s.open=!s.open)},{default:C(()=>[e.title?(n(),o("span",L,i(e.title),1)):u("",!0),e.selectIcon?(n(),g(p,{key:1,class:"select-icon",width:"18",height:"18",path:e.selectIcon,fill:"#6D7C93"},null,8,["path"])):(n(),g(I,{key:2,class:"icon",color:"#414a58"}))]),_:1},8,["active"]),s.open?(n(),o("div",N,[(n(!0),o(x,null,B(e.options.slice(0,-1),a=>(n(),o("div",{key:a.label,class:f(["option",{dangerous:!!a.dangerous}]),onClick:T=>r(a.onClick)},[d(p,{class:"option-icon",width:"14",height:"14",path:a.icon,fill:"#6D7C93"},null,8,["path"]),_("span",null,i(a.label),1)],10,O))),128)),e.highlightLast?(n(),o("div",E)):u("",!0),_("div",{class:f(["option",{dangerous:!!l.value.dangerous}]),onClick:c[1]||(c[1]=a=>r(l.value.onClick))},[d(p,{class:"option-icon",width:"14",height:"14",path:l.value.icon,fill:"#6D7C93"},null,8,["path"]),_("span",null,i(l.value.label),1)],2)])):u("",!0)]))}});const z=h(M,[["__scopeId","data-v-c4232f59"]]);export{z as D,j as _};
//# sourceMappingURL=DropdownMenu.6754d25e.js.map
