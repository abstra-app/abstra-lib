var E=Object.defineProperty;var P=(n,o,t)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t;var s=(n,o,t)=>(P(n,typeof o!="symbol"?o+"":o,t),t);import{O as e}from"./index.606ceacb.js";import{a as I}from"./asyncComputed.7bd4e04b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="33249c89-a47c-48a5-b4b4-c2e42eded335",n._sentryDebugIdIdentifier="sentry-dbid-33249c89-a47c-48a5-b4b4-c2e42eded335")}catch{}})();const D=e.string(),j=e.array(D),T=e.number(),O=e.string().datetime({local:!0}),F=e.enum(["file","directory"]),f=e.string(),x=e.array(f),M=e.array(x).default([]),l=e.object({pathParts:j,size:T,lastModified:O,type:F,children:M.optional()}),N=e.boolean(),w=e.boolean(),U=e.boolean(),z=e.boolean(),k=e.boolean(),_=e.boolean(),q=e.boolean();e.object({PROJECT_LIVE:N.optional(),ALLOW_RELEASE:w.optional(),CONNECTORS_CONSOLE:U.optional(),DUPLICATE_PROJECTS:z.optional(),WEB_EDITOR:k.optional(),LANGCHAIN_SMART_CHAT:_.optional(),AGENT_USAGE_MODE:q.optional()});const W=e.string(),$=e.string(),B=e.string(),G=e.string(),V=e.string();e.object({plan:W.optional(),expires:$.optional(),message:B.optional(),messageLink:G.optional(),messageCTA:V.optional()});const v=e.string(),p=e.string(),r=e.string(),K=e.string(),H=e.string(),J=e.object({id:v,name:p,description:r.optional(),projectId:K,createdAt:H}),Q=e.string(),Z=e.string(),X=e.string(),Y=e.string(),ee=e.string(),oe=e.enum(["true","false"]),te=e.enum(["true","false"]),ne=e.enum(["true","false"]),se=e.string().regex(new RegExp("^[0-9]+m$")),ae=e.string().regex(new RegExp("^[0-9]+m$")),ie=e.string().regex(new RegExp("^[0-9]+Mi$")),me=e.string().regex(new RegExp("^[0-9]+Mi$")),re=e.string().regex(new RegExp("^[0-9]+$")),ce=e.number(),le=e.string().regex(new RegExp("^[0-9]+$")),pe=e.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),be=e.enum(["3.9","3.10","3.11","3.12"]),ue=e.string(),Se=e.object({watermarkEnabled:oe.optional(),seleniumInstanceEnabled:te.optional(),notificationsEnabled:ne.optional(),requestsCPU:se.optional(),limitsCPU:ae.optional(),requestsMemory:ie.optional(),limitsMemory:me.optional(),minReplicas:re.optional(),computeUnits:ce.optional(),timeoutSeconds:le.optional(),workerType:pe.optional(),pythonVersion:be.optional(),workerNumber:ue.optional()});e.object({id:Q,folderId:Z,name:X,subdomain:Y,organizationId:ee,deploymentResources:Se.optional()});const he=e.string(),ge=e.string(),b=e.array(ge),u=e.string(),de=e.string();e.object({id:he,emailPatterns:b,projectId:u,createdAt:de});const Ce=e.enum(["true","false"]),Ae=e.enum(["true","false"]),Re=e.string().regex(new RegExp("^[0-9]+m$")),ye=e.string().regex(new RegExp("^[0-9]+m$")),Le=e.string().regex(new RegExp("^[0-9]+Mi$")),Ee=e.string().regex(new RegExp("^[0-9]+Mi$")),Pe=e.string().regex(new RegExp("^[0-9]+$")),Ie=e.number(),De=e.string().regex(new RegExp("^[0-9]+$")),je=e.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),Te=e.enum(["3.9","3.10","3.11","3.12"]),Oe=e.string(),Fe=e.object({watermarkEnabled:Ce.optional(),notificationsEnabled:Ae.optional(),requestsCPU:Re.optional(),limitsCPU:ye.optional(),requestsMemory:Le.optional(),limitsMemory:Ee.optional(),minReplicas:Pe.optional(),computeUnits:Ie.optional(),timeoutSeconds:De.optional(),workerType:je.optional(),pythonVersion:Te.optional(),workerNumber:Oe.optional()}),fe=e.enum(["bigint","int8","bigserial","serial8","bit","bit varying","varbit","boolean","bool","box","bytea","character","char","character varying","varchar","cidr","circle","date","double precision","float8","inet","integer","int","int4","interval","json","jsonb","line","lseg","macaddr","money","numeric","decimal","path","pg_lsn","point","polygon","real","float4","smallint","int2","smallserial","serial2","serial","serial4","text","time","time with time zone","timetz","timestamp","timestamp with time zone","timestamptz","tsquery","tsvector","txid_snapshot","uuid","xml"]),xe=e.string(),i=e.string().email(),Me=e.string(),c=e.array(Me),Ne=e.string(),we=e.string(),Ue=e.object({id:xe,email:i,roles:c,projectId:Ne,createdAt:we}),ze=e.string().uuid(),ke=e.string(),_e=e.string().uuid(),qe=e.boolean(),We=e.string(),$e=fe,Be=e.boolean(),Ge=e.boolean(),Ve=e.string(),ve=e.string(),Ke=e.object({columnId:ve}),He=e.object({id:_e,primaryKey:qe,name:We,type:$e,unique:Be.optional(),nullable:Ge.optional(),default:Ve.optional(),foreignKey:Ke.optional()}),Je=e.array(He),Qe=e.record(e.any()),Ze=e.array(Qe),Xe=e.object({id:ze,name:ke,columns:Je,data:Ze}),Ye=e.array(Xe);e.object({tables:Ye});const S=e.string(),h=e.string(),eo=e.boolean(),oo=e.boolean(),to=e.boolean(),no=e.boolean(),so=e.boolean(),ao=e.boolean(),io=e.boolean(),g=e.object({PROJECT_LIVE:eo,ALLOW_RELEASE:oo,CONNECTORS_CONSOLE:to,DUPLICATE_PROJECTS:no,WEB_EDITOR:so.optional(),LANGCHAIN_SMART_CHAT:ao.optional(),AGENT_USAGE_MODE:io.optional()}),mo=e.string(),ro=e.string(),co=e.string(),lo=e.string(),po=e.string(),d=e.object({plan:mo.optional(),expires:ro.optional(),message:co.optional(),messageLink:lo.optional(),messageCTA:po.optional()}),bo=e.string(),uo=e.array(bo),So=e.object({whitelistPatterns:uo.optional()});e.object({id:S,name:h,featureFlags:g,billingMetadata:d,deploymentResources:Fe.optional(),membershipsMetadata:So.optional()});const ho=e.string(),go=e.array(ho);e.object({whitelistPatterns:go.optional()});const Co=e.enum(["true","false"]),Ao=e.enum(["true","false"]),Ro=e.string().regex(new RegExp("^[0-9]+m$")),yo=e.string().regex(new RegExp("^[0-9]+m$")),Lo=e.string().regex(new RegExp("^[0-9]+Mi$")),Eo=e.string().regex(new RegExp("^[0-9]+Mi$")),Po=e.string().regex(new RegExp("^[0-9]+$")),Io=e.number(),Do=e.string().regex(new RegExp("^[0-9]+$")),jo=e.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),To=e.enum(["3.9","3.10","3.11","3.12"]),Oo=e.string();e.object({watermarkEnabled:Co.optional(),notificationsEnabled:Ao.optional(),requestsCPU:Ro.optional(),limitsCPU:yo.optional(),requestsMemory:Lo.optional(),limitsMemory:Eo.optional(),minReplicas:Po.optional(),computeUnits:Io.optional(),timeoutSeconds:Do.optional(),workerType:jo.optional(),pythonVersion:To.optional(),workerNumber:Oo.optional()});const Fo=e.enum(["true","false"]),fo=e.enum(["true","false"]),xo=e.enum(["true","false"]),Mo=e.string().regex(new RegExp("^[0-9]+m$")),No=e.string().regex(new RegExp("^[0-9]+m$")),wo=e.string().regex(new RegExp("^[0-9]+Mi$")),Uo=e.string().regex(new RegExp("^[0-9]+Mi$")),zo=e.string().regex(new RegExp("^[0-9]+$")),ko=e.number(),_o=e.string().regex(new RegExp("^[0-9]+$")),qo=e.enum(["jusbrasil","clickbus","touchsuite","foursquare","estoca","estoca-test","irko","dr9","shared","test"]),Wo=e.enum(["3.9","3.10","3.11","3.12"]),$o=e.string();e.object({watermarkEnabled:Fo.optional(),seleniumInstanceEnabled:fo.optional(),notificationsEnabled:xo.optional(),requestsCPU:Mo.optional(),limitsCPU:No.optional(),requestsMemory:wo.optional(),limitsMemory:Uo.optional(),minReplicas:zo.optional(),computeUnits:ko.optional(),timeoutSeconds:_o.optional(),workerType:qo.optional(),pythonVersion:Wo.optional(),workerNumber:$o.optional()});const Bo=S,Go=h,Vo=g,vo=d;e.object({id:Bo,name:Go,featureFlags:Vo,billingMetadata:vo});const Ko=r;e.object({description:Ko});const Ho=e.number(),Jo=e.number();e.object({offset:Ho.optional(),limit:Jo.optional()});const Qo=J;e.array(Qo);const Zo=p,Xo=r;e.object({name:Zo,description:Xo.optional()});const Yo=i,et=c;e.object({email:Yo.optional(),roles:et.optional()});const ot=e.number(),tt=e.number();e.object({offset:ot.optional(),limit:tt.optional()});const nt=Ue;e.array(nt);const st=i,at=c;e.object({email:st,roles:at});const it=b;e.object({emailPatterns:it});const mt=u;e.object({projectId:mt});const rt=e.string(),ct=e.string();e.object({redirect:rt,ping:ct});const lt=e.string(),pt=e.record(e.any()),bt=e.string(),ut=e.object({key:lt,value:pt,type:bt}),St=ut,ht=e.array(St),gt=e.string(),dt=e.string(),Ct=e.record(e.any()),C=e.enum(["waiting","running","processing","finished","failed","abandoned"]),At=e.string(),Rt=e.string(),yt=e.string(),Lt=e.string();e.object({id:gt,stage:dt,data:Ct,status:C,created_at:At,updated_at:Rt,parent_id:yt.optional(),execution_id:Lt.optional()});const Et=e.string(),Pt=e.string(),It=e.string(),Dt=e.string(),jt=C,Tt=ht,Ot=e.string(),Ft=e.object({id:Et,created_at:Pt,updated_at:It.optional(),assignee:Dt.optional(),status:jt,content:Tt,stage:Ot.optional()}),ft=Ft,A=e.array(ft),xt=e.string(),Mt=e.enum(["form","hook","job","script","agents","clients"]),Nt=e.string(),wt=e.string(),Ut=e.boolean(),R=e.object({id:xt,type:Mt,title:Nt,path:wt.optional(),can_be_started:Ut}),zt=R,kt=A,_t=e.number(),qt=e.boolean(),Wt=e.object({selected_stage:zt,stage_run_cards:kt,total_count:_t,loading:qt.optional()}),$t=Wt,Bt=e.array($t),Gt=Bt;e.object({columns:Gt});const Vt=A,vt=e.string(),Kt=e.array(vt),Ht=e.number();e.object({stage_run_cards:Vt,not_found_stages:Kt,total_count:Ht});const Jt=R;e.array(Jt);const Qt=e.string(),qn=e.object({separator:Qt}),Zt=e.boolean(),Wn=e.object({ok:Zt.optional()}),Xt=e.boolean(),$n=e.object({ok:Xt.optional()}),Yt=l,en=e.enum(["form","hook","job","script"]),on=e.string(),tn=e.object({type:en,id:on}),nn=e.array(tn),sn=e.object({file:Yt,stages:nn}),Bn=e.array(sn),an=e.boolean(),Gn=e.object({ok:an.optional()}),mn=e.string(),rn=e.array(mn),cn=e.string(),ln=e.array(cn),Vn=e.object({pathParts:rn,newPathParts:ln}),pn=e.boolean(),vn=e.object({ok:pn.optional()}),Kn=l,bn=e.string(),un=e.string(),Sn=e.literal("bug"),hn=e.string(),gn=e.string(),dn=e.string(),Cn=e.object({name:gn,label:dn}),An=Cn,Rn=e.array(An),yn=e.object({label:hn,fixes:Rn}),Ln=yn,En=e.array(Ln),Pn=e.object({name:bn,label:un,type:Sn,issues:En}),In=e.boolean();e.object({success:In});const Dn=Pn;e.array(Dn);const jn=e.string(),Tn=e.string(),On=e.object({name:jn,value:Tn}),Fn=On;e.array(Fn);const fn=i;e.object({email:fn});const xn=e.enum(["ALLOWED","UNAUTHORIZED","FORBIDEN","NOT_FOUND"]);e.object({status:xn});class Mn{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(o,t){const a=await fetch(`/_editor/api/linters/fix/${o}/${t}`,{method:"POST"});if(!a.ok)throw new Error("Failed to fix");return m.refetch(),a.json()}}const y=new Mn,m=I(async()=>(await y.check()).map(o=>new Un(o)));class Nn{constructor(o,t){s(this,"name");s(this,"label");s(this,"ruleName");this.name=o.name,this.label=o.label,this.ruleName=t}async fix(){await y.fix(this.ruleName,this.name)}}class wn{constructor(o,t){s(this,"label");s(this,"fixes");this.ruleName=t,this.label=o.label,this.fixes=o.fixes.map(a=>new Nn(a,t))}}class Un{constructor(o){s(this,"name");s(this,"label");s(this,"type");s(this,"issues");this.name=o.name,this.label=o.label,this.type=o.type,this.issues=o.issues.map(t=>new wn(t,this.name))}static get asyncComputed(){return m}static fromName(o){var a;const t=(a=m.result.value)==null?void 0:a.find(L=>L.name===o);if(!t)throw new Error(`Rule ${o} not found`);return t}}export{Bn as A,Un as L,Kn as a,Wn as b,$n as c,Vn as d,vn as e,Gn as f,qn as g};
//# sourceMappingURL=linters.768e4900.js.map
