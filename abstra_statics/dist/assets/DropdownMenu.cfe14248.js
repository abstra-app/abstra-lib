import{d as h,K as m,b as n,c as o,A as w,z as c,q as g,B as k,G as y,v as C,e as d,w as x,N as u,D as p,t as b,I as _,F as B,L as D,x as f}from"./registerWidgets.b581b882.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1311f573-8e4e-4c89-9db6-d90c3ac2d30b",e._sentryDebugIdIdentifier="sentry-dbid-1311f573-8e4e-4c89-9db6-d90c3ac2d30b")}catch{}})();const j="/assets/empty-box.758770e4.svg",I=h({__name:"Triangle",props:{color:{type:String,required:!1}},setup(e){const t=e,s=m(()=>t.color?{borderColor:`${t.color} transparent transparent transparent`}:{});return(l,i)=>(n(),o("div",{class:"triangle",style:w(c(s))},null,4))}});const S=g(I,[["__scopeId","data-v-7ca41e33"]]),q=h({__name:"BoxShadowButton",props:{active:{type:Boolean}},setup(e){return(t,s)=>(n(),o("button",{class:y(["box-shadow-button",{active:e.active}])},[k(t.$slots,"default",{},void 0,!0)],2))}});const $=g(q,[["__scopeId","data-v-04d82775"]]),L={class:"dropdown-menu"},N={key:0},z={key:0,class:"options"},A=["onClick"],M={key:0,class:"line"},O=h({__name:"DropdownMenu",props:{title:{type:String,required:!1},options:{type:Array,required:!0},highlightLast:{type:Boolean,required:!1,default:!1},selectIcon:{type:Object,required:!1},payload:{required:!1,default:()=>({}),type:Object}},setup(e){const t=e,s=C({open:!1}),l=m(()=>t.options[t.options.length-1]),i=async v=>{await v(t.payload),s.open=!1};return(v,r)=>(n(),o("div",L,[d($,{class:"title",active:s.open,onClick:r[0]||(r[0]=a=>s.open=!s.open)},{default:x(()=>[e.title?(n(),o("span",N,u(e.title),1)):p("",!0),e.selectIcon?(n(),b(_,{key:1,class:"select-icon",width:"18",height:"18",path:e.selectIcon,fill:"#6D7C93"},null,8,["path"])):(n(),b(S,{key:2,class:"icon",color:"#414a58"}))]),_:1},8,["active"]),s.open?(n(),o("div",z,[(n(!0),o(B,null,D(e.options.slice(0,-1),a=>(n(),o("div",{key:a.label,class:y(["option",{dangerous:!!a.dangerous}]),onClick:T=>i(a.onClick)},[d(_,{class:"option-icon",width:"14",height:"14",path:a.icon,fill:"#6D7C93"},null,8,["path"]),f("span",null,u(a.label),1)],10,A))),128)),e.highlightLast?(n(),o("div",M)):p("",!0),f("div",{class:y(["option",{dangerous:!!c(l).dangerous}]),onClick:r[1]||(r[1]=a=>i(c(l).onClick))},[d(_,{class:"option-icon",width:"14",height:"14",path:c(l).icon,fill:"#6D7C93"},null,8,["path"]),f("span",null,u(c(l).label),1)],2)])):p("",!0)]))}});const E=g(O,[["__scopeId","data-v-c4232f59"]]);export{E as D,j as _};
//# sourceMappingURL=DropdownMenu.cfe14248.js.map
