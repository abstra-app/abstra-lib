import{B as u}from"./BaseLayout.b5c8e9f2.js";import{a as f}from"./asyncComputed.b796d4e5.js";import{_ as p,o as l,Y as m,a as g,e8 as y,d as _,X as v,ah as C,c as d,w,u as i,S as b}from"./index.aaa5ea50.js";import{u as E}from"./polling.90790f07.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="43477766-704a-4856-990a-4fed78a2c518",t._sentryDebugIdIdentifier="sentry-dbid-43477766-704a-4856-990a-4fed78a2c518")}catch{}})();var h={name:"Chart",emits:["select","loaded"],props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},chart:null,watch:{data:{handler(){this.reinit()},deep:!0},type(){this.reinit()},options(){this.reinit()}},mounted(){this.initChart()},beforeUnmount(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart(){p(()=>import("./auto.29a122c8.js"),[]).then(t=>{this.chart&&(this.chart.destroy(),this.chart=null),t&&t.default&&(this.chart=new t.default(this.$refs.canvas,{type:this.type,data:this.data,options:this.options,plugins:this.plugins})),this.$emit("loaded",this.chart)})},getCanvas(){return this.$canvas},getChart(){return this.chart},getBase64Image(){return this.chart.toBase64Image()},refresh(){this.chart&&this.chart.update()},reinit(){this.initChart()},onCanvasClick(t){if(this.chart){const e=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1),a=this.chart.getElementsAtEventForMode(t,"dataset",{intersect:!0},!1);e&&e[0]&&a&&this.$emit("select",{originalEvent:t,element:e[0],dataset:a})}},generateLegend(){if(this.chart)return this.chart.generateLegend()}}};const k={class:"p-chart"},B=["width","height"];function I(t,e,a,n,s,r){return l(),m("div",k,[g("canvas",y({ref:"canvas",width:a.width,height:a.height,onClick:e[0]||(e[0]=o=>r.onCanvasClick(o))},a.canvasProps),null,16,B)])}function P(t,e){e===void 0&&(e={});var a=e.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",a==="top"&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var x=`
.p-chart {
    position: relative;
}
`;P(x);h.render=I;async function A(){return await(await fetch("/_editor/api/resources")).json()}const M=_({__name:"ResourcesTracker",setup(t){const{result:e,refetch:a}=f(async()=>{const{mems:r}=await A();return{data:{labels:Array.from({length:r.length},(o,c)=>c*2),datasets:[{label:"Memory",data:r,fill:!1,borderColor:"rgb(105, 193, 102)"}],options:{animation:!1}}}}),{startPolling:n,endPolling:s}=E({task:a,interval:2e3});return v(()=>n()),C(()=>s()),(r,o)=>(l(),d(u,null,{content:w(()=>[i(e)?(l(),d(i(h),{key:0,type:"line",data:i(e).data,class:"h-[30rem]",options:i(e).data.options},null,8,["data","options"])):b("",!0)]),_:1}))}});export{M as default};
//# sourceMappingURL=ResourcesTracker.942e2cc3.js.map
