// Datastar v1.0.0-beta.10
var Qe=/🖕JS_DS🚀/.source,be=Qe.slice(0,5),Oe=Qe.slice(4),q="datastar",et="Datastar-Request",tt=1e3,nt="type module",Se=!1,rt=!1,it=!0,U={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},ot=U.Morph,H={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};var R=(r=>(r[r.Attribute=1]="Attribute",r[r.Watcher=2]="Watcher",r[r.Action=3]="Action",r))(R||{});var fe=`${q}-signals`;var Y=t=>t.trim()==="true",z=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),ee=t=>z(t).replace(/-./g,e=>e[1].toUpperCase()),He=t=>z(t).replace(/-/g,"_"),xn=t=>ee(t).replace(/^./,e=>e[0].toUpperCase()),Te=t=>new Function(`return Object.assign({}, ${t})`)(),X=t=>t.startsWith("$")?t.slice(1):t,Mn={kebab:z,snake:He,pascal:xn};function F(t,e){for(let n of e.get("case")||[]){let r=Mn[n];r&&(t=r(t))}return t}var Nn="computed",st={type:1,name:Nn,keyReq:1,valReq:1,onLoad:({key:t,mods:e,signals:n,genRX:r})=>{t=F(t,e);let i=r();n.setComputed(t,i)}};var at={type:1,name:"signals",onLoad:t=>{let{key:e,mods:n,signals:r,value:i,genRX:o}=t,s=n.has("ifmissing");if(e!==""){let u=F(e,n),f=i===""?i:o()();s?r.upsertIfMissing(u,f):r.setValue(u,f)}else{let u=Te(t.value);t.value=JSON.stringify(u);let b=o()();r.merge(b,s)}}};var lt={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var re=class{#e=0;#t;constructor(e=q){this.#t=e}with(e){if(typeof e=="string")for(let n of e.split(""))this.with(n.charCodeAt(0));else typeof e=="boolean"?this.with(1<<(e?7:3)):this.#e=this.#e*33^e;return this}get value(){return this.#e}get string(){return this.#t+Math.abs(this.#e).toString(36)}};function Ee(t){if(t.id)return t.id;let e=new re,n=t;for(;n;){if(e.with(n.tagName||""),n.id){e.with(n.id);break}let r=n?.parentNode;r&&e.with([...r.children].indexOf(n)),n=r}return e.string}function Ae(t,e){return new re().with(t).with(e).value}function de(t,e){if(!t||!(t instanceof HTMLElement||t instanceof SVGElement))return null;let n=t.dataset;if("starIgnore"in n)return null;"starIgnore__self"in n||e(t);let r=t.firstElementChild;for(;r;)de(r,e),r=r.nextElementSibling}var Cn="https://data-star.dev/errors";function Fe(t,e,n={}){let r=new Error;r.name=`${q} ${t} error`;let i=He(e),o=new URLSearchParams({metadata:JSON.stringify(n)}).toString(),s=JSON.stringify(n,null,2);return r.message=`${e}
More info: ${Cn}/${t}/${i}?${o}
Context: ${s}`,r}function B(t,e,n={}){return Fe("internal",e,Object.assign({from:t},n))}function W(t,e,n={}){let r={plugin:{name:e.plugin.name,type:R[e.plugin.type]}};return Fe("init",t,Object.assign(r,n))}function N(t,e,n={}){let r={plugin:{name:e.plugin.name,type:R[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return Fe("runtime",t,Object.assign(r,n))}var ie="preact-signals",Pn=Symbol.for("preact-signals"),j=1,oe=2,me=4,ae=8,_e=16,se=32;function We(){we++}function $e(){if(we>1){we--;return}let t,e=!1;for(;pe!==void 0;){let n=pe;for(pe=void 0,qe++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~oe,!(n._flags&ae)&&ct(n))try{n._callback()}catch(i){e||(t=i,e=!0)}n=r}}if(qe=0,we--,e)throw t}var P;var pe,we=0,qe=0,Re=0;function ut(t){if(P===void 0)return;let e=t._node;if(e===void 0||e._target!==P)return e={_version:0,_source:t,_prevSource:P._sources,_nextSource:void 0,_target:P,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},P._sources!==void 0&&(P._sources._nextSource=e),P._sources=e,t._node=e,P._flags&se&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=P._sources,e._nextSource=void 0,P._sources._nextSource=e,P._sources=e),e}function k(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}k.prototype.brand=Pn;k.prototype._refresh=()=>!0;k.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};k.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};k.prototype.subscribe=function(t){return xe(()=>{let e=this.value,n=P;P=void 0;try{t(e)}finally{P=n}})};k.prototype.valueOf=function(){return this.value};k.prototype.toString=function(){return`${this.value}`};k.prototype.toJSON=function(){return this.value};k.prototype.peek=function(){let t=P;P=void 0;try{return this.value}finally{P=t}};Object.defineProperty(k.prototype,"value",{get(){let t=ut(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(qe>100)throw B(ie,"SignalCycleDetected");let e=this._value,n=t;this._value=t,this._version++,Re++,We();try{for(let r=this._targets;r!==void 0;r=r._nextTarget)r._target._notify()}finally{$e()}this?._onChange({old:e,revised:n})}}});function ct(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function ft(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function dt(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function te(t){k.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=Re-1,this._flags=me}te.prototype=new k;te.prototype._refresh=function(){if(this._flags&=~oe,this._flags&j)return!1;if((this._flags&(me|se))===se||(this._flags&=~me,this._globalVersion===Re))return!0;if(this._globalVersion=Re,this._flags|=j,this._version>0&&!ct(this))return this._flags&=~j,!0;let t=P;try{ft(this),P=this;let e=this._fn();(this._flags&_e||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~_e,this._version++)}catch(e){this._value=e,this._flags|=_e,this._version++}return P=t,dt(this),this._flags&=~j,!0};te.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=me|se;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}k.prototype._subscribe.call(this,t)};te.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(k.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~se;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};te.prototype._notify=function(){if(!(this._flags&oe)){this._flags|=me|oe;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(te.prototype,"value",{get(){if(this._flags&j)throw B(ie,"SignalCycleDetected");let t=ut(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&_e)throw B(ie,"GetComputedError",{value:this._value});return this._value}});function pt(t){return new te(t)}function mt(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){We();let n=P;P=void 0;try{e()}catch(r){throw t._flags&=~j,t._flags|=ae,Ge(t),B(ie,"CleanupEffectError",{error:r})}finally{P=n,$e()}}}function Ge(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,mt(t)}function In(t){if(P!==this)throw B(ie,"EndEffectError");dt(this),P=t,this._flags&=~j,this._flags&ae&&Ge(this),$e()}function ge(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=se}ge.prototype._callback=function(){let t=this._start();try{if(this._flags&ae||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};ge.prototype._start=function(){if(this._flags&j)throw B(ie,"SignalCycleDetected");this._flags|=j,this._flags&=~ae,mt(this),ft(this),We();let t=P;return P=this,In.bind(this,t)};ge.prototype._notify=function(){this._flags&oe||(this._flags|=oe,this._nextBatchedEffect=pe,pe=this)};ge.prototype._dispose=function(){this._flags|=ae,this._flags&j||Ge(this)};function xe(t){let e=new ge(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var gt="namespacedSignals",le=t=>{document.dispatchEvent(new CustomEvent(fe,{detail:Object.assign({added:[],removed:[],updated:[]},t)}))};function ht(t,e=!1){let n={};for(let r in t)if(Object.hasOwn(t,r)){if(e&&r.startsWith("_"))continue;let i=t[r];i instanceof k?n[r]=i.value:n[r]=ht(i)}return n}function yt(t,e,n=!1){let r={added:[],removed:[],updated:[]};for(let i in e)if(Object.hasOwn(e,i)){if(i.match(/\_\_+/))throw B(gt,"InvalidSignalKey",{key:i});let o=e[i];if(o instanceof Object&&!Array.isArray(o)){t[i]||(t[i]={});let s=yt(t[i],o,n);r.added.push(...s.added.map(u=>`${i}.${u}`)),r.removed.push(...s.removed.map(u=>`${i}.${u}`)),r.updated.push(...s.updated.map(u=>`${i}.${u}`))}else{if(Object.hasOwn(t,i)){if(n)continue;let f=t[i];if(f instanceof k){let b=f.value;f.value=o,b!==o&&r.updated.push(i);continue}}let u=new k(o);u._onChange=()=>{le({updated:[i]})},t[i]=u,r.added.push(i)}}return r}function vt(t,e){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];r instanceof k?e(n,r):vt(r,(i,o)=>{e(`${n}.${i}`,o)})}}function kn(t,...e){let n={};for(let r of e){let i=r.split("."),o=t,s=n;for(let f=0;f<i.length-1;f++){let b=i[f];if(!o[b])return{};s[b]||(s[b]={}),o=o[b],s=s[b]}let u=i[i.length-1];s[u]=o[u]}return n}var Me=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),r=this.#e;for(let s=0;s<n.length-1;s++){let u=n[s];if(!r[u])return null;r=r[u]}let i=n[n.length-1],o=r[i];if(!o)throw B(gt,"SignalNotFound",{path:e});return o}setSignal(e,n){let r=e.split("."),i=this.#e;for(let s=0;s<r.length-1;s++){let u=r[s];i[u]||(i[u]={}),i=i[u]}let o=r[r.length-1];i[o]=n}setComputed(e,n){let r=pt(()=>n());this.setSignal(e,r)}value(e){return this.signal(e)?.value}setValue(e,n){let{signal:r}=this.upsertIfMissing(e,n),i=r.value;r.value=n,i!==n&&le({updated:[e]})}upsertIfMissing(e,n){let r=e.split("."),i=this.#e;for(let f=0;f<r.length-1;f++){let b=r[f];i[b]||(i[b]={}),i=i[b]}let o=r[r.length-1],s=i[o];if(s instanceof k)return{signal:s,inserted:!1};let u=new k(n);return u._onChange=()=>{le({updated:[e]})},i[o]=u,le({added:[e]}),{signal:u,inserted:!0}}remove(...e){if(!e.length){this.#e={};return}let n=Array();for(let r of e){let i=r.split("."),o=this.#e;for(let u=0;u<i.length-1;u++){let f=i[u];if(!o[f])return;o=o[f]}let s=i[i.length-1];delete o[s],n.push(r)}le({removed:n})}merge(e,n=!1){let r=yt(this.#e,e,n);(r.added.length||r.removed.length||r.updated.length)&&le(r)}subset(...e){return kn(this.values(),...e)}walk(e){vt(this.#e,e)}paths(){let e=new Array;return this.walk(n=>e.push(n)),e}values(e=!1){return ht(this.#e,e)}JSON(e=!0,n=!1){let r=this.values(n);return e?JSON.stringify(r,null,2):JSON.stringify(r)}toString(){return this.JSON()}};var bt=new Me,Ne={},Be=[],ne=new Map,Ue=null,je="";function St(t){je=t}function Ce(...t){for(let e of t){let n={plugin:e,signals:bt,effect:i=>xe(i),actions:Ne,removals:ne,applyToElement:Pe},r;switch(e.type){case 3:{Ne[e.name]=e;break}case 1:{let i=e;Be.push(i),r=i.onGlobalInit;break}case 2:{r=e.onGlobalInit;break}default:throw W("InvalidPluginType",n)}r&&r(n)}Be.sort((e,n)=>{let r=n.name.length-e.name.length;return r!==0?r:e.name.localeCompare(n.name)})}function Ke(){queueMicrotask(()=>{Pe(document.documentElement),Ln()})}function Pe(t){de(t,e=>{let n=new Array,r=ne.get(e.id)||new Map,i=new Map([...r]),o=new Map;for(let s of Object.keys(e.dataset)){if(!s.startsWith(je))break;let u=e.dataset[s]||"",f=Ae(s,u);o.set(s,f),r.has(f)?i.delete(f):n.push(s)}for(let[s,u]of i)u();for(let s of n){let u=o.get(s);Vn(e,s,u)}})}function Ln(){Ue||(Ue=new MutationObserver(t=>{let e=new Set,n=new Set;for(let{target:r,type:i,addedNodes:o,removedNodes:s}of t)switch(i){case"childList":{for(let u of s)e.add(u);for(let u of o)n.add(u)}break;case"attributes":{n.add(r);break}}for(let r of e){let i=ne.get(r.id);if(i){for(let[o,s]of i)s(),i.delete(o);i.size===0&&ne.delete(r.id)}}for(let r of n)Pe(r)}),Ue.observe(document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}))}function Vn(t,e,n){let r=ee(e.slice(je.length)),i=Be.find(h=>new RegExp(`^${h.name}([A-Z]|_|$)`).test(r));if(!i)return;t.id.length||(t.id=Ee(t));let[o,...s]=r.slice(i.name.length).split(/\_\_+/),u=o.length>0;u&&(o=ee(o));let f=t.dataset[e]||"",b=f.length>0,A={signals:bt,applyToElement:Pe,effect:h=>xe(h),actions:Ne,removals:ne,genRX:()=>Dn(A,...i.argNames||[]),plugin:i,el:t,rawKey:r,key:o,value:f,mods:new Map},C=i.keyReq||0;if(u){if(C===2)throw N(`${i.name}KeyNotAllowed`,A)}else if(C===1)throw N(`${i.name}KeyRequired`,A);let S=i.valReq||0;if(b){if(S===2)throw N(`${i.name}ValueNotAllowed`,A)}else if(S===1)throw N(`${i.name}ValueRequired`,A);if(C===3||S===3){if(u&&b)throw N(`${i.name}KeyAndValueProvided`,A);if(!u&&!b)throw N(`${i.name}KeyOrValueRequired`,A)}for(let h of s){let[T,...y]=h.split(".");A.mods.set(ee(T),new Set(y.map(a=>a.toLowerCase())))}let _=i.onLoad(A)??(()=>{}),v=ne.get(t.id);v||(v=new Map,ne.set(t.id,v)),v.set(n,_)}function Dn(t,...e){let n="",r=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,i=t.value.trim().match(r);if(i){let _=i.length-1,v=i[_].trim();v.startsWith("return")||(i[_]=`return (${v});`),n=i.join(`;
`)}let o=new Map,s=new RegExp(`(?:${be})(.*?)(?:${Oe})`,"gm");for(let _ of n.matchAll(s)){let v=_[1],h=new re("dsEscaped").with(v).string;o.set(h,v),n=n.replace(be+v+Oe,h)}let u=/@(\w*)\(/gm,f=n.matchAll(u),b=new Set;for(let _ of f)b.add(_[1]);let A=new RegExp(`@(${Object.keys(Ne).join("|")})\\(`,"gm");n=n.replaceAll(A,"ctx.actions.$1.fn(ctx,");let C=t.signals.paths();if(C.length){let _=new RegExp(`\\$(${C.join("|")})(\\W|$)`,"gm");n=n.replaceAll(_,"ctx.signals.signal('$1').value$2")}for(let[_,v]of o)n=n.replace(_,v);let S=`return (() => {
${n}
})()`;t.fnContent=S;try{let _=new Function("ctx",...e,S);return(...v)=>{try{return _(t,...v)}catch(h){throw N("ExecuteExpression",t,{error:h.message})}}}catch(_){throw N("GenerateExpression",t,{error:_.message})}}Ce(lt,at,st);async function On(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function Hn(t){let e,n,r,i=!1;return function(s){e===void 0?(e=s,n=0,r=-1):e=qn(e,s);let u=e.length,f=0;for(;n<u;){i&&(e[n]===10&&(f=++n),i=!1);let b=-1;for(;n<u&&b===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-f);break;case 13:i=!0;case 10:b=n;break}if(b===-1)break;t(e.subarray(f,b),r),f=n,r=-1}f===u?e=void 0:f!==0&&(e=e.subarray(f),n-=f)}}function Fn(t,e,n){let r=Tt(),i=new TextDecoder;return function(s,u){if(s.length===0)n?.(r),r=Tt();else if(u>0){let f=i.decode(s.subarray(0,u)),b=u+(s[u+1]===32?2:1),A=i.decode(s.subarray(b));switch(f){case"data":r.data=r.data?`${r.data}
${A}`:A;break;case"event":r.event=A;break;case"id":t(r.id=A);break;case"retry":{let C=Number.parseInt(A,10);Number.isNaN(C)||e(r.retry=C);break}}}}}function qn(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function Tt(){return{data:"",event:"",id:"",retry:void 0}}var Wn="text/event-stream",Et="last-event-id";function At(t,{signal:e,headers:n,onopen:r,onmessage:i,onclose:o,onerror:s,openWhenHidden:u,fetch:f,retryInterval:b=1e3,retryScaler:A=2,retryMaxWaitMs:C=3e4,retryMaxCount:S=10,..._}){return new Promise((v,h)=>{let T=0,y={...n};y.accept||(y.accept=Wn);let a;function p(){a.abort(),document.hidden||d()}u||document.addEventListener("visibilitychange",p);let c=0;function l(){document.removeEventListener("visibilitychange",p),window.clearTimeout(c),a.abort()}e?.addEventListener("abort",()=>{l(),v()});let g=f??window.fetch,m=r??function(){};async function d(){a=new AbortController;try{let E=await g(t,{..._,headers:y,signal:a.signal});await m(E),await On(E.body,Hn(Fn(w=>{w?y[Et]=w:delete y[Et]},w=>{b=w},i))),o?.(),l(),v()}catch(E){if(!a.signal.aborted)try{let w=s?.(E)??b;window.clearTimeout(c),c=window.setTimeout(d,w),b*=A,b=Math.min(b,C),T++,T>S?(l(),h("Max retries reached.")):console.error(`Datastar failed to reach ${t.toString()} retrying in ${w}ms.`)}catch(w){l(),h(w)}}}d()})}var ue=`${q}-sse`,Ie="started",ke="finished",_t="error",wt="retrying";function K(t,e){document.addEventListener(ue,n=>{if(n.detail.type!==t)return;let{argsRaw:r}=n.detail;e(r)})}function he(t,e,n){t.dispatchEvent(new CustomEvent(ue,{detail:{type:e,argsRaw:n},bubbles:!0}))}var Rt=t=>`${t}`.includes("text/event-stream"),J=async(t,e,n,r)=>{let{el:{id:i},el:o,signals:s}=t,{headers:u,contentType:f,includeLocal:b,selector:A,openWhenHidden:C,retryInterval:S,retryScaler:_,retryMaxWaitMs:v,retryMaxCount:h,abort:T}=Object.assign({headers:{},contentType:"json",includeLocal:!1,selector:null,openWhenHidden:!1,retryInterval:tt,retryScaler:2,retryMaxWaitMs:3e4,retryMaxCount:10,abort:void 0},r),y=e.toLowerCase(),a=()=>{};try{if(he(o,Ie,{elId:i}),!n?.length)throw N("SseNoUrlProvided",t,{action:y});let p={};p[et]=!0,f==="json"&&(p["Content-Type"]="application/json");let c=Object.assign({},p,u),l={method:e,headers:c,openWhenHidden:C,retryInterval:S,retryScaler:_,retryMaxWaitMs:v,retryMaxCount:h,signal:T,onopen:async d=>{if(d.status>=400){let E=d.status.toString();he(o,_t,{status:E})}},onmessage:d=>{if(!d.event.startsWith(q))return;let E=d.event,w={},M=d.data.split(`
`);for(let L of M){let I=L.indexOf(" "),D=L.slice(0,I),V=w[D];V||(V=[],w[D]=V);let $=L.slice(I+1);V.push($)}let x={};for(let[L,I]of Object.entries(w))x[L]=I.join(`
`);he(o,E,x)},onerror:d=>{if(Rt(d))throw N("InvalidContentType",t,{url:n});d&&(console.error(d.message),he(o,wt,{message:d.message}))}},g=new URL(n,window.location.origin),m=new URLSearchParams(g.search);if(f==="json"){let d=s.JSON(!1,!b);e==="GET"?m.set(q,d):l.body=d}else if(f==="form"){let d=A?document.querySelector(A):o.closest("form");if(d===null)throw A?N("SseFormNotFound",t,{action:y,selector:A}):N("SseClosestFormNotFound",t,{action:y});if(o!==d){let w=M=>M.preventDefault();d.addEventListener("submit",w),a=()=>d.removeEventListener("submit",w)}if(!d.checkValidity()){d.reportValidity(),a();return}let E=new FormData(d);if(e==="GET"){let w=new URLSearchParams(E);for(let[M,x]of w)m.set(M,x)}else l.body=E}else throw N("SseInvalidContentType",t,{action:y,contentType:f});g.search=m.toString();try{await At(g.toString(),l)}catch(d){if(!Rt(d))throw N("SseFetchFailed",t,{method:e,url:n,error:d})}}finally{he(o,ke,{elId:i}),a()}};var xt={type:3,name:"delete",fn:async(t,e,n)=>J(t,"DELETE",e,{...n})};var Mt={type:3,name:"get",fn:async(t,e,n)=>J(t,"GET",e,{...n})};var Nt={type:3,name:"patch",fn:async(t,e,n)=>J(t,"PATCH",e,{...n})};var Ct={type:3,name:"post",fn:async(t,e,n)=>J(t,"POST",e,{...n})};var Pt={type:3,name:"put",fn:async(t,e,n)=>J(t,"PUT",e,{...n})};var It={type:1,name:"indicator",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let o=e?F(e,n):X(i),{signal:s}=r.upsertIfMissing(o,!1),u=f=>{let{type:b,argsRaw:{elId:A}}=f.detail;if(A===t.id)switch(b){case Ie:s.value=!0;break;case ke:s.value=!1;break}};return t.addEventListener(ue,u),()=>{setTimeout(()=>t.removeEventListener(ue,u))}}};var kt={type:2,name:H.ExecuteScript,onGlobalInit:async t=>{K(H.ExecuteScript,({autoRemove:e=`${it}`,attributes:n=nt,script:r})=>{let i=Y(e);if(!r?.length)throw W("NoScriptProvided",t);let o=document.createElement("script");for(let s of n.split(`
`)){let u=s.indexOf(" "),f=u?s.slice(0,u):s,b=u?s.slice(u):"";o.setAttribute(f.trim(),b.trim())}o.text=r,document.head.appendChild(o),i&&o.remove()})}};var ye=document,Z=!!ye.startViewTransition;var Lt=function(){"use strict";let t=()=>{},e={morphStyle:"outerHTML",callbacks:{beforeNodeAdded:t,afterNodeAdded:t,beforeNodeMorphed:t,afterNodeMorphed:t,beforeNodeRemoved:t,afterNodeRemoved:t,beforeAttributeUpdated:t},head:{style:"merge",shouldPreserve:S=>S.getAttribute("im-preserve")==="true",shouldReAppend:S=>S.getAttribute("im-re-append")==="true",shouldRemove:t,afterHeadMorphed:t},restoreFocus:!0};function n(S,_,v={}){S=A(S);let h=C(_),T=b(S,h,v),y=i(T,()=>u(T,S,h,a=>a.morphStyle==="innerHTML"?(o(a,S,h),Array.from(S.childNodes)):r(a,S,h)));return T.pantry.remove(),y}function r(S,_,v){let h=C(_);return o(S,h,v,_,_.nextSibling),Array.from(h.childNodes)}function i(S,_){if(!S.config.restoreFocus)return _();let v=document.activeElement;if(!(v instanceof HTMLInputElement||v instanceof HTMLTextAreaElement))return _();let{id:h,selectionStart:T,selectionEnd:y}=v,a=_();return h&&h!==document.activeElement?.id&&(v=S.target.querySelector(`[id="${h}"]`),v?.focus()),v&&!v.selectionEnd&&y&&v.setSelectionRange(T,y),a}let o=function(){function S(c,l,g,m=null,d=null){l instanceof HTMLTemplateElement&&g instanceof HTMLTemplateElement&&(l=l.content,g=g.content),m||=l.firstChild;for(let E of g.childNodes){if(m&&m!=d){let M=v(c,E,m,d);if(M){M!==m&&T(c,m,M),s(M,E,c),m=M.nextSibling;continue}}if(E instanceof Element&&c.persistentIds.has(E.id)){let M=y(l,E.id,m,c);s(M,E,c),m=M.nextSibling;continue}let w=_(l,E,m,c);w&&(m=w.nextSibling)}for(;m&&m!=d;){let E=m;m=m.nextSibling,h(c,E)}}function _(c,l,g,m){if(m.callbacks.beforeNodeAdded(l)===!1)return null;if(m.idMap.has(l)){let d=document.createElement(l.tagName);return c.insertBefore(d,g),s(d,l,m),m.callbacks.afterNodeAdded(d),d}else{let d=document.importNode(l,!0);return c.insertBefore(d,g),m.callbacks.afterNodeAdded(d),d}}let v=function(){function c(m,d,E,w){let M=null,x=d.nextSibling,L=0,I=E;for(;I&&I!=w;){if(g(I,d)){if(l(m,I,d))return I;M===null&&(m.idMap.has(I)||(M=I))}if(M===null&&x&&g(I,x)&&(L++,x=x.nextSibling,L>=2&&(M=void 0)),I.contains(document.activeElement))break;I=I.nextSibling}return M||null}function l(m,d,E){let w=m.idMap.get(d),M=m.idMap.get(E);if(!M||!w)return!1;for(let x of w)if(M.has(x))return!0;return!1}function g(m,d){let E=m,w=d;return E.nodeType===w.nodeType&&E.tagName===w.tagName&&(!E.id||E.id===w.id)}return c}();function h(c,l){if(c.idMap.has(l))p(c.pantry,l,null);else{if(c.callbacks.beforeNodeRemoved(l)===!1)return;l.parentNode?.removeChild(l),c.callbacks.afterNodeRemoved(l)}}function T(c,l,g){let m=l;for(;m&&m!==g;){let d=m;m=m.nextSibling,h(c,d)}return m}function y(c,l,g,m){let d=m.target.id===l&&m.target||m.target.querySelector(`[id="${l}"]`)||m.pantry.querySelector(`[id="${l}"]`);return a(d,m),p(c,d,g),d}function a(c,l){let g=c.id;for(;c=c.parentNode;){let m=l.idMap.get(c);m&&(m.delete(g),m.size||l.idMap.delete(c))}}function p(c,l,g){if(c.moveBefore)try{c.moveBefore(l,g)}catch{c.insertBefore(l,g)}else c.insertBefore(l,g)}return S}(),s=function(){function S(a,p,c){return c.ignoreActive&&a===document.activeElement?null:(c.callbacks.beforeNodeMorphed(a,p)===!1||(a instanceof HTMLHeadElement&&c.head.ignore||(a instanceof HTMLHeadElement&&c.head.style!=="morph"?f(a,p,c):(_(a,p,c),y(a,c)||o(c,a,p))),c.callbacks.afterNodeMorphed(a,p)),a)}function _(a,p,c){let l=p.nodeType;if(l===1){let g=a,m=p,d=g.attributes,E=m.attributes;for(let w of E)T(w.name,g,"update",c)||g.getAttribute(w.name)!==w.value&&g.setAttribute(w.name,w.value);for(let w=d.length-1;0<=w;w--){let M=d[w];if(M&&!m.hasAttribute(M.name)){if(T(M.name,g,"remove",c))continue;g.removeAttribute(M.name)}}y(g,c)||v(g,m,c)}(l===8||l===3)&&a.nodeValue!==p.nodeValue&&(a.nodeValue=p.nodeValue)}function v(a,p,c){if(a instanceof HTMLInputElement&&p instanceof HTMLInputElement&&p.type!=="file"){let l=p.value,g=a.value;h(a,p,"checked",c),h(a,p,"disabled",c),p.hasAttribute("value")?g!==l&&(T("value",a,"update",c)||(a.setAttribute("value",l),a.value=l)):T("value",a,"remove",c)||(a.value="",a.removeAttribute("value"))}else if(a instanceof HTMLOptionElement&&p instanceof HTMLOptionElement)h(a,p,"selected",c);else if(a instanceof HTMLTextAreaElement&&p instanceof HTMLTextAreaElement){let l=p.value,g=a.value;if(T("value",a,"update",c))return;l!==g&&(a.value=l),a.firstChild&&a.firstChild.nodeValue!==l&&(a.firstChild.nodeValue=l)}}function h(a,p,c,l){let g=p[c],m=a[c];if(g!==m){let d=T(c,a,"update",l);d||(a[c]=p[c]),g?d||a.setAttribute(c,""):T(c,a,"remove",l)||a.removeAttribute(c)}}function T(a,p,c,l){return a==="value"&&l.ignoreActiveValue&&p===document.activeElement?!0:l.callbacks.beforeAttributeUpdated(a,p,c)===!1}function y(a,p){return!!p.ignoreActiveValue&&a===document.activeElement&&a!==document.body}return S}();function u(S,_,v,h){if(S.head.block){let T=_.querySelector("head"),y=v.querySelector("head");if(T&&y){let a=f(T,y,S);return Promise.all(a).then(()=>{let p=Object.assign(S,{head:{block:!1,ignore:!0}});return h(p)})}}return h(S)}function f(S,_,v){let h=[],T=[],y=[],a=[],p=new Map;for(let l of _.children)p.set(l.outerHTML,l);for(let l of S.children){let g=p.has(l.outerHTML),m=v.head.shouldReAppend(l),d=v.head.shouldPreserve(l);g||d?m?T.push(l):(p.delete(l.outerHTML),y.push(l)):v.head.style==="append"?m&&(T.push(l),a.push(l)):v.head.shouldRemove(l)!==!1&&T.push(l)}a.push(...p.values());let c=[];for(let l of a){let g=document.createRange().createContextualFragment(l.outerHTML).firstChild;if(v.callbacks.beforeNodeAdded(g)!==!1){if("href"in g&&g.href||"src"in g&&g.src){let m,d=new Promise(function(E){m=E});g.addEventListener("load",function(){m()}),c.push(d)}S.appendChild(g),v.callbacks.afterNodeAdded(g),h.push(g)}}for(let l of T)v.callbacks.beforeNodeRemoved(l)!==!1&&(S.removeChild(l),v.callbacks.afterNodeRemoved(l));return v.head.afterHeadMorphed(S,{added:h,kept:y,removed:T}),c}let b=function(){function S(p,c,l){let{persistentIds:g,idMap:m}=y(p,c),d=_(l),E=d.morphStyle||"outerHTML";if(!["innerHTML","outerHTML"].includes(E))throw`Do not understand how to morph style ${E}`;return{target:p,newContent:c,config:d,morphStyle:E,ignoreActive:d.ignoreActive,ignoreActiveValue:d.ignoreActiveValue,restoreFocus:d.restoreFocus,idMap:m,persistentIds:g,pantry:v(),callbacks:d.callbacks,head:d.head}}function _(p){let c=Object.assign({},e);return Object.assign(c,p),c.callbacks=Object.assign({},e.callbacks,p.callbacks),c.head=Object.assign({},e.head,p.head),c}function v(){let p=document.createElement("div");return p.hidden=!0,document.body.insertAdjacentElement("afterend",p),p}function h(p){let c=Array.from(p.querySelectorAll("[id]"));return p.id&&c.push(p),c}function T(p,c,l,g){for(let m of g)if(c.has(m.id)){let d=m;for(;d;){let E=p.get(d);if(E==null&&(E=new Set,p.set(d,E)),E.add(m.id),d===l)break;d=d.parentElement}}}function y(p,c){let l=h(p),g=h(c),m=a(l,g),d=new Map;T(d,m,p,l);let E=c.__idiomorphRoot||c;return T(d,m,E,g),{persistentIds:m,idMap:d}}function a(p,c){let l=new Set,g=new Map;for(let{id:d,tagName:E}of p)g.has(d)?l.add(d):g.set(d,E);let m=new Set;for(let{id:d,tagName:E}of c)m.has(d)?l.add(d):g.get(d)===E&&m.add(d);for(let d of l)m.delete(d);return m}return S}(),{normalizeElement:A,normalizeParent:C}=function(){let S=new WeakSet;function _(y){return y instanceof Document?y.documentElement:y}function v(y){if(y==null)return document.createElement("div");if(typeof y=="string")return v(T(y));if(S.has(y))return y;if(y instanceof Node){if(y.parentNode)return new h(y);{let a=document.createElement("div");return a.append(y),a}}else{let a=document.createElement("div");for(let p of[...y])a.append(p);return a}}class h{constructor(a){this.originalNode=a,this.realParentNode=a.parentNode,this.previousSibling=a.previousSibling,this.nextSibling=a.nextSibling}get childNodes(){let a=[],p=this.previousSibling?this.previousSibling.nextSibling:this.realParentNode.firstChild;for(;p&&p!=this.nextSibling;)a.push(p),p=p.nextSibling;return a}querySelectorAll(a){return this.childNodes.reduce((p,c)=>{if(c instanceof Element){c.matches(a)&&p.push(c);let l=c.querySelectorAll(a);for(let g=0;g<l.length;g++)p.push(l[g])}return p},[])}insertBefore(a,p){return this.realParentNode.insertBefore(a,p)}moveBefore(a,p){return this.realParentNode.moveBefore(a,p)}get __idiomorphRoot(){return this.originalNode}}function T(y){let a=new DOMParser,p=y.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(p.match(/<\/html>/)||p.match(/<\/head>/)||p.match(/<\/body>/)){let c=a.parseFromString(y,"text/html");if(p.match(/<\/html>/))return S.add(c),c;{let l=c.firstChild;return l&&S.add(l),l}}else{let l=a.parseFromString("<body><template>"+y+"</template></body>","text/html").body.querySelector("template").content;return S.add(l),l}}return{normalizeElement:_,normalizeParent:v}}();return{morph:n,defaults:e}}();var Dt={type:2,name:H.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");K(H.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:i=ot,useViewTransition:o=`${Se}`})=>{let s=Y(o);e.innerHTML=n.trim();let u=[...e.content.children];for(let f of u){if(!(f instanceof Element))throw W("NoFragmentsFound",t);let b=r||`#${f.getAttribute("id")}`,A=[...document.querySelectorAll(b)||[]];if(!A.length)throw W("NoTargetsFound",t,{selectorOrID:b});s&&Z?ye.startViewTransition(()=>Vt(t,i,f,A)):Vt(t,i,f,A)}})}};function Vt(t,e,n,r){for(let i of r){i.dataset.fragmentMergeTarget="true";let o=n.cloneNode(!0);switch(e){case U.Morph:{de(o,s=>{!s.id?.length&&Object.keys(s.dataset).length&&(s.id=Ee(s));let u=t.removals.get(s.id);if(u){let f=new Map;for(let[b,A]of u){let C=Ae(b,b);f.set(C,A),u.delete(b)}t.removals.set(s.id,f)}}),Lt.morph(i,o);break}case U.Inner:i.innerHTML=o.outerHTML;break;case U.Outer:i.replaceWith(o);break;case U.Prepend:i.prepend(o);break;case U.Append:i.append(o);break;case U.Before:i.before(o);break;case U.After:i.after(o);break;case U.UpsertAttributes:for(let s of o.getAttributeNames()){let u=o.getAttribute(s);i.setAttribute(s,u)}break;default:throw W("InvalidMergeMode",t,{mergeMode:e})}}}var Ot={type:2,name:H.MergeSignals,onGlobalInit:async t=>{K(H.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${rt}`})=>{let{signals:r}=t,i=Y(n);r.merge(Te(e),i)})}};var Ht={type:2,name:H.RemoveFragments,onGlobalInit:async t=>{K(H.RemoveFragments,({selector:e,useViewTransition:n=`${Se}`})=>{if(!e.length)throw W("NoSelectorProvided",t);let r=Y(n),i=document.querySelectorAll(e),o=()=>{for(let s of i)s.remove()};r&&Z?ye.startViewTransition(()=>o()):o()})}};var Ft={type:2,name:H.RemoveSignals,onGlobalInit:async t=>{K(H.RemoveSignals,({paths:e=""})=>{let n=e.split(`
`).map(r=>r.trim());if(!n?.length)throw W("NoPathsProvided",t);t.signals.remove(...n)})}};var qt={type:3,name:"clipboard",fn:(t,e)=>{if(!navigator.clipboard)throw N("ClipboardNotAvailable",t);navigator.clipboard.writeText(e)}};var Wt={type:1,name:"customValidity",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t;if(!(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement))throw N("CustomValidityInvalidElement",t);let i=n();return r(()=>{let o=i();if(typeof o!="string")throw N("CustomValidityInvalidExpression",t,{result:o});e.setCustomValidity(o)})}};var $t="once",Gt="half",Ut="full",Bt={type:1,name:"intersects",keyReq:2,mods:new Set([$t,Gt,Ut]),onLoad:({el:t,rawKey:e,mods:n,genRX:r})=>{let i={threshold:0};n.has(Ut)?i.threshold=1:n.has(Gt)&&(i.threshold=.5);let o=r(),s=new IntersectionObserver(u=>{for(let f of u)f.isIntersecting&&(o(),n.has($t)&&(s.disconnect(),delete t.dataset[e]))},i);return s.observe(t),()=>s.disconnect()}};var jt="session",Kt={type:1,name:"persist",keyReq:2,mods:new Set([jt]),onLoad:({effect:t,mods:e,signals:n,value:r})=>{let i=q,o=e.has(jt)?sessionStorage:localStorage,s=r.split(/\s+/).filter(b=>b!=="");s=s.map(b=>X(b));let u=()=>{let b=o.getItem(i)||"{}",A=JSON.parse(b);n.merge(A)},f=()=>{let b;s.length?b=n.subset(...s):b=n.values(),o.setItem(i,JSON.stringify(b))};return u(),t(()=>{f()})}};var Jt={type:1,name:"replaceUrl",keyReq:2,valReq:1,onLoad:({effect:t,genRX:e})=>{let n=e();return t(()=>{let r=n(),i=window.location.href,o=new URL(r,i).toString();window.history.replaceState({},"",o)})}};var Le="smooth",Je="instant",ze="auto",zt="hstart",Yt="hcenter",Xt="hend",Zt="hnearest",Qt="vstart",en="vcenter",tn="vend",nn="vnearest",$n="focus",Ve="center",rn="start",on="end",sn="nearest",an={type:1,name:"scrollIntoView",keyReq:2,valReq:2,mods:new Set([Le,Je,ze,zt,Yt,Xt,Zt,Qt,en,tn,nn,$n]),onLoad:t=>{let{el:e,mods:n,rawKey:r}=t;e.tabIndex||e.setAttribute("tabindex","0");let i={behavior:Le,block:Ve,inline:Ve};if(n.has(Le)&&(i.behavior=Le),n.has(Je)&&(i.behavior=Je),n.has(ze)&&(i.behavior=ze),n.has(zt)&&(i.inline=rn),n.has(Yt)&&(i.inline=Ve),n.has(Xt)&&(i.inline=on),n.has(Zt)&&(i.inline=sn),n.has(Qt)&&(i.block=rn),n.has(en)&&(i.block=Ve),n.has(tn)&&(i.block=on),n.has(nn)&&(i.block=sn),!(e instanceof HTMLElement||e instanceof SVGElement))throw N("ScrollIntoViewInvalidElement",t);e.tabIndex||e.setAttribute("tabindex","0"),e.scrollIntoView(i),n.has("focus")&&e.focus(),delete e.dataset[r]}};var ln="none",un="display",cn={type:1,name:"show",keyReq:2,valReq:1,onLoad:({el:{style:t},genRX:e,effect:n})=>{let r=e();return n(async()=>{r()?t.display===ln&&t.removeProperty(un):t.setProperty(un,ln)})}};var fn="view-transition",dn={type:1,name:"viewTransition",keyReq:2,valReq:1,onGlobalInit(){let t=!1;for(let e of document.head.childNodes)e instanceof HTMLMetaElement&&e.name===fn&&(t=!0);if(!t){let e=document.createElement("meta");e.name=fn,e.content="same-origin",document.head.appendChild(e)}},onLoad:({effect:t,el:e,genRX:n})=>{if(!Z){console.error("Browser does not support view transitions");return}let r=n();return t(()=>{let i=r();if(!i?.length)return;let o=e.style;o.viewTransitionName=i})}};var pn={type:1,name:"attr",valReq:1,onLoad:({el:t,key:e,effect:n,genRX:r})=>{let i=r();return e===""?n(async()=>{let o=i();for(let[s,u]of Object.entries(o))u===!1?t.removeAttribute(s):t.setAttribute(s,u)}):(e=z(e),n(async()=>{let o=!1;try{o=i()}catch{}let s;typeof o=="string"?s=o:s=JSON.stringify(o),!s||s==="false"||s==="null"||s==="undefined"?t.removeAttribute(e):t.setAttribute(e,s)}))}};var Gn=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,mn=["change","input","keydown"],gn={type:1,name:"bind",keyReq:3,valReq:3,onLoad:t=>{let{el:e,key:n,mods:r,signals:i,value:o,effect:s}=t,u=e,f=n?F(n,r):X(o),b=e.tagName.toLowerCase(),A=b.includes("input"),C=b.includes("select"),S=e.getAttribute("type"),_=e.hasAttribute("value"),v="",h=A&&S==="checkbox";h&&(v=_?"":!1);let T=A&&S==="number";T&&(v=0);let y=A&&S==="radio";y&&(e.getAttribute("name")?.length||e.setAttribute("name",f));let a=A&&S==="file",{signal:p,inserted:c}=i.upsertIfMissing(f,v),l=-1;Array.isArray(p.value)&&(e.getAttribute("name")===null&&e.setAttribute("name",f),l=[...document.querySelectorAll(`[name="${f}"]`)].findIndex(x=>x===t.el));let g=l>=0,m=()=>[...i.value(f)],d=()=>{let x=i.value(f);g&&!C&&(x=x[l]||v);let L=`${x}`;if(h||y)typeof x=="boolean"?u.checked=x:u.checked=L===u.value;else if(C){let I=e;if(I.multiple){if(!g)throw N("BindSelectMultiple",t);for(let D of I.options){if(D?.disabled)return;let V=T?Number(D.value):D.value;D.selected=x.includes(V)}}else I.value=L}else a||("value"in e?e.value=L:e.setAttribute("value",L))},E=async()=>{let x=i.value(f);if(g){let V=x;for(;l>=V.length;)V.push(v);x=V[l]||v}let L=(V,$)=>{let G=$;g&&!C&&(G=m(),G[l]=$),i.setValue(V,G)};if(a){let V=[...u?.files||[]],$=[],G=[],Xe=[];await Promise.all(V.map(Ze=>new Promise(Rn=>{let Q=new FileReader;Q.onload=()=>{if(typeof Q.result!="string")throw N("InvalidFileResultType",t,{resultType:typeof Q.result});let De=Q.result.match(Gn);if(!De?.groups)throw N("InvalidDataUri",t,{result:Q.result});$.push(De.groups.contents),G.push(De.groups.mime),Xe.push(Ze.name)},Q.onloadend=()=>Rn(void 0),Q.readAsDataURL(Ze)}))),L(f,$),L(`${f}Mimes`,G),L(`${f}Names`,Xe);return}let I=u.value||"",D;if(h){let V=u.checked||u.getAttribute("checked")==="true";_?D=V?I:"":D=V}else if(C){let $=[...e.selectedOptions];g?D=$.filter(G=>G.selected).map(G=>G.value):D=$[0]?.value||v}else typeof x=="boolean"?D=!!I:typeof x=="number"?D=Number(I):D=I||"";L(f,D)};c&&E();for(let x of mn)e.addEventListener(x,E);let w=x=>{x.persisted&&E()};window.addEventListener("pageshow",w);let M=s(()=>d());return()=>{M();for(let x of mn)e.removeEventListener(x,E);window.removeEventListener("pageshow",w)}}};var hn={type:1,name:"class",valReq:1,onLoad:({el:t,key:e,mods:n,effect:r,genRX:i})=>{let o=t.classList,s=i();return r(()=>{if(e===""){let u=s();for(let[f,b]of Object.entries(u)){let A=f.split(/\s+/);b?o.add(...A):o.remove(...A)}}else{let u=z(e);u=F(u,n),s()?o.add(u):o.remove(u)}})}};function ve(t){if(!t||t.size<=0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return Number.parseFloat(e)}catch{}}return 0}function ce(t,e,n=!1){return t?t.has(e.toLowerCase()):n}function yn(t,e){return(...n)=>{setTimeout(()=>{t(...n)},e)}}function vn(t,e,n=!1,r=!0){let i=-1,o=()=>i&&clearTimeout(i);return(...s)=>{o(),n&&!i&&t(...s),i=setTimeout(()=>{r&&t(...s),o()},e)}}function bn(t,e,n=!0,r=!1){let i=!1;return(...o)=>{i||(n&&t(...o),i=!0,setTimeout(()=>{i=!1,r&&t(...o)},e))}}var Un="evt",Ye="signalsChange",Bn=Ye.length,Sn={type:1,name:"on",keyReq:1,valReq:1,argNames:[Un],onLoad:({el:t,key:e,mods:n,signals:r,effect:i,genRX:o})=>{let s=o(),u=t;n.has("window")&&(u=window);let f=h=>{h&&((n.has("prevent")||e==="submit")&&h.preventDefault(),n.has("stop")&&h.stopPropagation()),s(h)},b=n.get("delay");if(b){let h=ve(b);f=yn(f,h)}let A=n.get("debounce");if(A){let h=ve(A),T=ce(A,"leading",!1),y=!ce(A,"notrail",!1);f=vn(f,h,T,y)}let C=n.get("throttle");if(C){let h=ve(C),T=!ce(C,"noleading",!1),y=ce(C,"trail",!1);f=bn(f,h,T,y)}if(n.has("viewtransition")&&Z){let h=f;f=(...T)=>document.startViewTransition(()=>h(...T))}let S={capture:!0,passive:!1,once:!1};if(n.has("capture")||(S.capture=!1),n.has("passive")&&(S.passive=!0),n.has("once")&&(S.once=!0),e==="load")return setTimeout(f),()=>{};if(e==="interval"){let h=1e3,T=n.get("duration");T&&(h=ve(T),ce(T,"leading",!1)&&f());let y=setInterval(f,h);return()=>{clearInterval(y)}}if(e==="raf"){let h,T=()=>{f(),h=requestAnimationFrame(T)};return h=requestAnimationFrame(T),()=>{h&&cancelAnimationFrame(h)}}if(e.startsWith(Ye)){if(e===Ye){let y=a=>f(a);return document.addEventListener(fe,y),()=>{document.removeEventListener(fe,y)}}let h=F(ee(e.slice(Bn)),n),T=new Map;return r.walk((y,a)=>{y.startsWith(h)&&T.set(a,a.value)}),i(()=>{for(let[y,a]of T)a!==y.value&&(f(),T.set(y,y.value))})}if(n.has("outside")){u=document;let h=f;f=y=>{let a=y?.target;t.contains(a)||h(y)}}let v=z(e);return v=F(v,n),u.addEventListener(v,f,S),()=>{u.removeEventListener(v,f)}}};var Tn={type:1,name:"ref",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let o=e?F(e,n):X(i);r.setValue(o,t)}};var En={type:1,name:"text",keyReq:2,valReq:1,onLoad:t=>{let{el:e,effect:n,genRX:r}=t,i=r();return e instanceof HTMLElement||N("TextInvalidElement",t),n(()=>{let o=i(t);e.textContent=`${o}`})}};var{round:jn,max:Kn,min:Jn}=Math,An={type:3,name:"fit",fn:(t,e,n,r,i,o,s=!1,u=!1)=>{let f=(e-n)/(r-n)*(o-i)+i;return u&&(f=jn(f)),s&&(f=Kn(i,Jn(o,f))),f}};var _n={type:3,name:"setAll",fn:({signals:t},e,n)=>{t.walk((r,i)=>{r.startsWith(e)&&(i.value=n)})}};var wn={type:3,name:"toggleAll",fn:({signals:t},e)=>{t.walk((n,r)=>{n.startsWith(e)&&(r.value=!r.value)})}};Ce(pn,gn,hn,Sn,Tn,cn,En,It,Mt,Ct,Pt,Nt,xt,Dt,Ot,Ht,Ft,kt,qt,Wt,Bt,Kt,Jt,an,dn,An,_n,wn);Ke();export{Ke as apply,Ce as load,St as setAlias};
//# sourceMappingURL=datastar.js.map
