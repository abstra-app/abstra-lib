import{d as n,K as l,b as _,c as i,x as e,N as o,z as p,O as u,Q as h,q as m}from"./registerWidgets.7452ec0b.js";const s=r=>(u("data-v-d3846761"),r=r(),h(),r),v={class:"error"},y=s(()=>e("h1",{class:"error-header"},"Error",-1)),f={class:"error-body"},g={class:"error-message"},E={class:"error-details"},b=s(()=>e("span",null,"Reload",-1)),x=[b],B=n({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(r,{emit:t}){const a=r,c=l(()=>a.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function d(){t("reload")}return(I,S)=>(_(),i("div",v,[y,e("div",f,[e("div",g,[e("p",null,o(p(c)),1),e("p",E,o(r.error.name)+": "+o(r.error.message),1)]),e("div",{class:"error-actions"},[e("button",{class:"btn btn-primary",onClick:d},x)])])]))}});const q=m(B,[["__scopeId","data-v-d3846761"]]);export{q as E};
//# sourceMappingURL=Error.2096a0e8.js.map
