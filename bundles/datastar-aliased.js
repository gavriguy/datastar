// Datastar v1.0.0-beta.4
var $e=/🖕JS_DS🚀/.source,re=$e.slice(0,5),Pe=$e.slice(4),O="datastar";var Ge="Datastar-Request",me=300,Ue=1e3,Be="type module",ge=!1,je=!1,Ke=!0,q={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},Je=q.Morph,k={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};var M=(r=>(r[r.Attribute=1]="Attribute",r[r.Watcher=2]="Watcher",r[r.Action=3]="Action",r))(M||{});var ie=`${O}-signals`;var j=t=>t.trim()==="true",oe=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),B=t=>oe(t).replace(/-./g,e=>e[1].toUpperCase()),Ce=t=>oe(t).replace(/-/g,"_"),hn=t=>B(t).replace(/^./,e=>e[0].toUpperCase()),he=t=>new Function(`return Object.assign({}, ${t})`)(),K=t=>t.startsWith("$")?t.slice(1):t,vn={kebab:oe,snake:Ce,pascal:hn};function D(t,e){for(let n of e.get("case")||[]){let r=vn[n];r&&(t=r(t))}return t}var yn="computed",ze={type:1,name:yn,keyReq:1,valReq:1,onLoad:({key:t,mods:e,signals:n,genRX:r})=>{t=D(t,e);let i=r();n.setComputed(t,i)}};var Ye={type:1,name:"signals",removeOnLoad:()=>!0,onLoad:t=>{let{key:e,mods:n,signals:r,value:i,genRX:s}=t,l=n.has("ifmissing");if(e!==""){let u=D(e,n),g=i===""?i:s()();l?r.upsertIfMissing(u,g):r.setValue(u,g)}else{let u=he(t.value);t.value=JSON.stringify(u);let E=s()();r.merge(E,l)}}};var Xe={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var se=class{#e=0;#n;constructor(e=O){this.#n=e}with(e){if(typeof e=="string")for(let n of e.split(""))this.with(n.charCodeAt(0));else this.#e=(this.#e<<5)-this.#e+e;return this}get value(){return this.#n+Math.abs(this.#e).toString(36)}};function Qe(t){if(t.id)return t.id;let e=new se,n=t;for(;n.parentNode;){if(n.id){e.with(n.id);break}if(n===n.ownerDocument.documentElement)e.with(n.tagName);else for(let r=1,i=t;i.previousElementSibling;i=i.previousElementSibling,r++)e.with(r);n=n.parentNode}return e.value}function ve(t,e){return(...n)=>{setTimeout(()=>{t(...n)},e)}}function Ze(t,e,n=!1,r=!0){let i=-1,s=()=>i&&clearTimeout(i);return(...l)=>{s(),n&&!i&&t(...l),i=setTimeout(()=>{r&&t(...l),s()},e)}}function et(t,e,n=!0,r=!1){let i=!1;return(...s)=>{i||(n&&t(...s),i=!0,setTimeout(()=>{i=!1,r&&t(...s)},e))}}var bn="https://data-star.dev/errors";function Le(t,e,n={}){let r=new Error;r.name=`${O} ${t} error`;let i=Ce(e),s=new URLSearchParams({metadata:JSON.stringify(n)}).toString(),l=JSON.stringify(n,null,2);return r.message=`${e}
More info: ${bn}/${t}/${i}?${s}
Context: ${l}`,r}function W(t,e,n={}){return Le("internal",e,Object.assign({from:t},n))}function H(t,e,n={}){let r={plugin:{name:e.plugin.name,type:M[e.plugin.type]}};return Le("init",t,Object.assign(r,n))}function N(t,e,n={}){let r={plugin:{name:e.plugin.name,type:M[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return Le("runtime",t,Object.assign(r,n))}var z="preact-signals",Sn=Symbol.for("preact-signals"),$=1,Q=2,le=4,ee=8,ye=16,Z=32;function De(){be++}function Ve(){if(be>1){be--;return}let t,e=!1;for(;ae!==void 0;){let n=ae;for(ae=void 0,Ie++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~Q,!(n._flags&ee)&&nt(n))try{n._callback()}catch(i){e||(t=i,e=!0)}n=r}}if(Ie=0,be--,e)throw W(z,"BatchError, error",{error:t})}var P;var ae,be=0,Ie=0,Se=0;function tt(t){if(P===void 0)return;let e=t._node;if(e===void 0||e._target!==P)return e={_version:0,_source:t,_prevSource:P._sources,_nextSource:void 0,_target:P,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},P._sources!==void 0&&(P._sources._nextSource=e),P._sources=e,t._node=e,P._flags&Z&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=P._sources,e._nextSource=void 0,P._sources._nextSource=e,P._sources=e),e}function C(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}C.prototype.brand=Sn;C.prototype._refresh=()=>!0;C.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};C.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};C.prototype.subscribe=function(t){return Ee(()=>{let e=this.value,n=P;P=void 0;try{t(e)}finally{P=n}})};C.prototype.valueOf=function(){return this.value};C.prototype.toString=function(){return`${this.value}`};C.prototype.toJSON=function(){return this.value};C.prototype.peek=function(){let t=P;P=void 0;try{return this.value}finally{P=t}};Object.defineProperty(C.prototype,"value",{get(){let t=tt(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(Ie>100)throw W(z,"SignalCycleDetected");this._value=t,this._version++,Se++,De();try{for(let e=this._targets;e!==void 0;e=e._nextTarget)e._target._notify()}finally{Ve()}}}});function nt(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function rt(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function it(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function Y(t){C.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=Se-1,this._flags=le}Y.prototype=new C;Y.prototype._refresh=function(){if(this._flags&=~Q,this._flags&$)return!1;if((this._flags&(le|Z))===Z||(this._flags&=~le,this._globalVersion===Se))return!0;if(this._globalVersion=Se,this._flags|=$,this._version>0&&!nt(this))return this._flags&=~$,!0;let t=P;try{rt(this),P=this;let e=this._fn();(this._flags&ye||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~ye,this._version++)}catch(e){this._value=e,this._flags|=ye,this._version++}return P=t,it(this),this._flags&=~$,!0};Y.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=le|Z;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}C.prototype._subscribe.call(this,t)};Y.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(C.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~Z;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};Y.prototype._notify=function(){if(!(this._flags&Q)){this._flags|=le|Q;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(Y.prototype,"value",{get(){if(this._flags&$)throw W(z,"SignalCycleDetected");let t=tt(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&ye)throw W(z,"GetComputedError",{value:this._value});return this._value}});function ot(t){return new Y(t)}function st(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){De();let n=P;P=void 0;try{e()}catch(r){throw t._flags&=~$,t._flags|=ee,Oe(t),W(z,"CleanupEffectError",{error:r})}finally{P=n,Ve()}}}function Oe(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,st(t)}function En(t){if(P!==this)throw W(z,"EndEffectError");it(this),P=t,this._flags&=~$,this._flags&ee&&Oe(this),Ve()}function ue(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=Z}ue.prototype._callback=function(){let t=this._start();try{if(this._flags&ee||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};ue.prototype._start=function(){if(this._flags&$)throw W(z,"SignalCycleDetected");this._flags|=$,this._flags&=~ee,st(this),rt(this),De();let t=P;return P=this,En.bind(this,t)};ue.prototype._notify=function(){this._flags&Q||(this._flags|=Q,this._nextBatchedEffect=ae,ae=this)};ue.prototype._dispose=function(){this._flags|=ee,this._flags&$||Oe(this)};function Ee(t){let e=new ue(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var at="namespacedSignals",Te=t=>{document.dispatchEvent(new CustomEvent(ie,{detail:Object.assign({added:[],removed:[],updated:[]},t)}))};function lt(t,e=!1){let n={};for(let r in t)if(Object.hasOwn(t,r)){if(e&&r.startsWith("_"))continue;let i=t[r];i instanceof C?n[r]=i.value:n[r]=lt(i)}return n}function ut(t,e,n=!1){let r={added:[],removed:[],updated:[]};for(let i in e)if(Object.hasOwn(e,i)){if(i.match(/\_\_+/))throw W(at,"InvalidSignalKey",{key:i});let s=e[i];if(s instanceof Object&&!Array.isArray(s)){t[i]||(t[i]={});let l=ut(t[i],s,n);r.added.push(...l.added.map(u=>`${i}.${u}`)),r.removed.push(...l.removed.map(u=>`${i}.${u}`)),r.updated.push(...l.updated.map(u=>`${i}.${u}`))}else{if(Object.hasOwn(t,i)){if(n)continue;let u=t[i];if(u instanceof C){let g=u.value;u.value=s,g!==s&&r.updated.push(i);continue}}t[i]=new C(s),r.added.push(i)}}return r}function ct(t,e){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];r instanceof C?e(n,r):ct(r,(i,s)=>{e(`${n}.${i}`,s)})}}function Tn(t,...e){let n={};for(let r of e){let i=r.split("."),s=t,l=n;for(let g=0;g<i.length-1;g++){let E=i[g];if(!s[E])return{};l[E]||(l[E]={}),s=s[E],l=l[E]}let u=i[i.length-1];l[u]=s[u]}return n}var Ae=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),r=this.#e;for(let l=0;l<n.length-1;l++){let u=n[l];if(!r[u])return null;r=r[u]}let i=n[n.length-1],s=r[i];if(!s)throw W(at,"SignalNotFound",{path:e});return s}setSignal(e,n){let r=e.split("."),i=this.#e;for(let l=0;l<r.length-1;l++){let u=r[l];i[u]||(i[u]={}),i=i[u]}let s=r[r.length-1];i[s]=n}setComputed(e,n){let r=ot(()=>n());this.setSignal(e,r)}value(e){return this.signal(e)?.value}setValue(e,n){let r=this.upsertIfMissing(e,n),i=r.value;r.value=n,i!==n&&Te({updated:[e]})}upsertIfMissing(e,n){let r=e.split("."),i=this.#e;for(let g=0;g<r.length-1;g++){let E=r[g];i[E]||(i[E]={}),i=i[E]}let s=r[r.length-1],l=i[s];if(l instanceof C)return l;let u=new C(n);return i[s]=u,Te({added:[e]}),u}remove(...e){if(!e.length){this.#e={};return}let n=Array();for(let r of e){let i=r.split("."),s=this.#e;for(let u=0;u<i.length-1;u++){let g=i[u];if(!s[g])return;s=s[g]}let l=i[i.length-1];delete s[l],n.push(r)}Te({removed:n})}merge(e,n=!1){let r=ut(this.#e,e,n);(r.added.length||r.removed.length||r.updated.length)&&Te(r)}subset(...e){return Tn(this.values(),...e)}walk(e){ct(this.#e,e)}paths(){let e=new Array;return this.walk(n=>e.push(n)),e}values(e=!1){return lt(this.#e,e)}JSON(e=!0,n=!1){let r=this.values(n);return e?JSON.stringify(r,null,2):JSON.stringify(r)}toString(){return this.JSON()}};var ft=(t,e)=>`${t}${re}${e}`,_e=class{constructor(){this.aliasPrefix="";this.#e=new Ae;this.#n=[];this.#r={};this.#l=[];this.#o=null;this.#t=new Map;this.#u=ve(()=>{this.#s(document.body),this.#c()},1)}#e;#n;#r;#l;#o;#t;get signals(){return this.#e}load(...e){let n=this;for(let r of e){let i={get signals(){return n.#e},effect:l=>Ee(l),actions:this.#r,plugin:r,applyAttributePlugin:n.#i.bind(n)},s;switch(r.type){case 2:{let l=r;this.#l.push(l),s=l.onGlobalInit;break}case 3:{this.#r[r.name]=r;break}case 1:{let l=r;this.#n.push(l),s=l.onGlobalInit;break}default:throw H("InvalidPluginType",i)}s&&s(i)}this.#n.sort((r,i)=>{let s=i.name.length-r.name.length;return s!==0?s:r.name.localeCompare(i.name)}),this.#u()}#u;#s(e){this.#a(e,n=>{let r=this.#t.get(n);if(r){for(let[,i]of r)i();this.#t.delete(n)}for(let i of Object.keys(n.dataset))this.#i(n,i)})}#c(){this.#o||(this.#o=new MutationObserver(e=>{for(let{target:n,type:r,attributeName:i,oldValue:s,addedNodes:l,removedNodes:u}of e)switch(r){case"childList":{for(let g of u){let E=g,y=this.#t.get(E);if(y){for(let[w,v]of y)v();this.#t.delete(E)}}for(let g of l){let E=g;this.#s(E)}}break;case"attributes":{{let g="data-",E=g+(this.aliasPrefix?`${this.aliasPrefix}-`:"");if(!i?.startsWith(E))break;let y=n,w=B(i.slice(g.length));if(s!==null&&y.dataset[w]!==s){let v=this.#t.get(y);if(v){let A=ft(w,s),S=v.get(A);S&&(S(),v.delete(A))}}w in y.dataset&&this.#i(y,w)}break}}}),this.#o.observe(document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}))}#i(e,n){let r=n.slice(this.aliasPrefix.length),i=this.#n.find(h=>r.startsWith(h.name));if(!i)return;let s=this.#t.get(e);if(s)for(let[h,o]of s)h.startsWith(n)&&(o(),s.delete(h));e.id.length||(e.id=Qe(e));let[l,...u]=r.slice(i.name.length).split(/\_\_+/),g=l.length>0;g&&(l=B(l));let E=e.dataset[n]||"",y=E.length>0,w=this,v={get signals(){return w.#e},applyAttributePlugin:w.#i.bind(w),effect:h=>Ee(h),actions:this.#r,genRX:()=>this.#f(v,...i.argNames||[]),plugin:i,el:e,rawKey:r,key:l,value:E,mods:new Map},A=i.keyReq||0;if(g){if(A===2)throw N(`${i.name}KeyNotAllowed`,v)}else if(A===1)throw N(`${i.name}KeyRequired`,v);let S=i.valReq||0;if(y){if(S===2)throw N(`${i.name}ValueNotAllowed`,v)}else if(S===1)throw N(`${i.name}ValueRequired`,v);if(A===3||S===3){if(g&&y)throw N(`${i.name}KeyAndValueProvided`,v);if(!g&&!y)throw N(`${i.name}KeyOrValueRequired`,v)}for(let h of u){let[o,...d]=h.split(".");v.mods.set(B(o),new Set(d.map(c=>c.toLowerCase())))}let T=i.onLoad(v);if(T){let h=this.#t.get(e);h||(h=new Map,this.#t.set(e,h)),h.set(ft(n,E),T)}let b=i.removeOnLoad;b&&b(r)===!0&&delete e.dataset[n]}#f(e,...n){let r="",i=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,s=e.value.trim().match(i);if(s){let S=s.length-1,T=s[S].trim();T.startsWith("return")||(s[S]=`return (${T});`),r=s.join(`;
`)}let l=new Map,u=new RegExp(`(?:${re})(.*?)(?:${Pe})`,"gm");for(let S of r.matchAll(u)){let T=S[1],b=new se("dsEscaped").with(T).value;l.set(b,T),r=r.replace(re+T+Pe,b)}let g=/@(\w*)\(/gm,E=r.matchAll(g),y=new Set;for(let S of E)y.add(S[1]);let w=new RegExp(`@(${Object.keys(this.#r).join("|")})\\(`,"gm");r=r.replaceAll(w,"ctx.actions.$1.fn(ctx,");let v=e.signals.paths();if(v.length){let S=new RegExp(`\\$(${v.join("|")})(\\W|$)`,"gm");r=r.replaceAll(S,"ctx.signals.signal('$1').value$2")}for(let[S,T]of l)r=r.replace(S,T);let A=`return (()=> {
${r}
})()`;e.fnContent=A;try{let S=new Function("ctx",...n,A);return(...T)=>{try{return S(e,...T)}catch(b){throw N("ExecuteExpression",e,{error:b.message})}}}catch(S){throw N("GenerateExpression",e,{error:S.message})}}#a(e,n){if(!e||!(e instanceof HTMLElement||e instanceof SVGElement))return null;let r=e.dataset;if("starIgnore"in r)return null;"starIgnore__self"in r||n(e);let i=e.firstElementChild;for(;i;)this.#a(i,n),i=i.nextElementSibling}};var dt=new _e;dt.load(Xe,Ye,ze);var xe=dt;async function An(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function _n(t){let e,n,r,i=!1;return function(l){e===void 0?(e=l,n=0,r=-1):e=Rn(e,l);let u=e.length,g=0;for(;n<u;){i&&(e[n]===10&&(g=++n),i=!1);let E=-1;for(;n<u&&E===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-g);break;case 13:i=!0;case 10:E=n;break}if(E===-1)break;t(e.subarray(g,E),r),g=n,r=-1}g===u?e=void 0:g!==0&&(e=e.subarray(g),n-=g)}}function xn(t,e,n){let r=pt(),i=new TextDecoder;return function(l,u){if(l.length===0)n?.(r),r=pt();else if(u>0){let g=i.decode(l.subarray(0,u)),E=u+(l[u+1]===32?2:1),y=i.decode(l.subarray(E));switch(g){case"data":r.data=r.data?`${r.data}
${y}`:y;break;case"event":r.event=y;break;case"id":t(r.id=y);break;case"retry":{let w=Number.parseInt(y,10);Number.isNaN(w)||e(r.retry=w);break}}}}}function Rn(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function pt(){return{data:"",event:"",id:"",retry:void 0}}var wn="text/event-stream",mt="last-event-id";function gt(t,e,{signal:n,headers:r,onopen:i,onmessage:s,onclose:l,onerror:u,openWhenHidden:g,fetch:E,retryInterval:y=1e3,retryScaler:w=2,retryMaxWaitMs:v=3e4,retryMaxCount:A=10,...S}){return new Promise((T,b)=>{let h=0,o={...r};o.accept||(o.accept=wn);let d;function c(){d.abort(),document.hidden||R()}g||document.addEventListener("visibilitychange",c);let a=0;function m(){document.removeEventListener("visibilitychange",c),window.clearTimeout(a),d.abort()}n?.addEventListener("abort",()=>{m(),T()});let f=E??window.fetch,p=i??function(){};async function R(){d=new AbortController;try{let x=await f(e,{...S,headers:o,signal:d.signal});await p(x),await An(x.body,_n(xn(_=>{_?o[mt]=_:delete o[mt]},_=>{y=_},s))),l?.(),m(),T()}catch(x){if(!d.signal.aborted)try{let _=u?.(x)??y;window.clearTimeout(a),a=window.setTimeout(R,_),y*=w,y=Math.min(y,v),h++,h>=A?(m(),b(N("SseMaxRetries",t,{retryMaxCount:A}))):console.error(`Datastar failed to reach ${S.method}: ${e.toString()} retry in ${_}ms`)}catch(_){m(),b(_)}}}R()})}var te=`${O}-sse`,ke=`${O}-settling`,X=`${O}-swapping`,Re="started",we="finished",ht="error",vt="retrying";function G(t,e){document.addEventListener(te,n=>{if(n.detail.type!==t)return;let{argsRaw:r}=n.detail;e(r)})}function ce(t,e){document.dispatchEvent(new CustomEvent(te,{detail:{type:t,argsRaw:e}}))}var yt=t=>`${t}`.includes("text/event-stream"),U=async(t,e,n,r)=>{let{el:{id:i},el:s,signals:l}=t,{headers:u,contentType:g,includeLocal:E,selector:y,openWhenHidden:w,retryInterval:v,retryScaler:A,retryMaxWaitMs:S,retryMaxCount:T,abort:b}=Object.assign({headers:{},contentType:"json",includeLocal:!1,selector:null,openWhenHidden:!1,retryInterval:Ue,retryScaler:2,retryMaxWaitMs:3e4,retryMaxCount:10,abort:void 0},r),h=e.toLowerCase(),o=()=>{};try{if(ce(Re,{elId:i}),!n?.length)throw N("SseNoUrlProvided",t,{action:h});let d={};d[Ge]=!0,g==="json"&&(d["Content-Type"]="application/json");let c=Object.assign({},d,u),a={method:e,headers:c,openWhenHidden:w,retryInterval:v,retryScaler:A,retryMaxWaitMs:S,retryMaxCount:T,signal:b,onopen:async p=>{if(p.status>=400){let R=p.status.toString();ce(ht,{status:R})}},onmessage:p=>{if(!p.event.startsWith(O))return;let R=p.event,x={},_=p.data.split(`
`);for(let V of _){let L=V.indexOf(" "),qe=V.slice(0,L),pe=x[qe];pe||(pe=[],x[qe]=pe);let gn=V.slice(L+1).trim();pe.push(gn)}let I={};for(let[V,L]of Object.entries(x))I[V]=L.join(`
`);ce(R,I)},onerror:p=>{if(yt(p))throw N("InvalidContentType",t,{url:n});p&&(console.error(p.message),ce(vt,{message:p.message}))}},m=new URL(n,window.location.origin),f=new URLSearchParams(m.search);if(g==="json"){let p=l.JSON(!1,!E);e==="GET"?f.set(O,p):a.body=p}else if(g==="form"){let p=y?document.querySelector(y):s.closest("form");if(p===null)throw y?N("SseFormNotFound",t,{action:h,selector:y}):N("SseClosestFormNotFound",t,{action:h});if(s!==p){let x=_=>_.preventDefault();p.addEventListener("submit",x),o=()=>p.removeEventListener("submit",x)}if(!p.checkValidity()){p.reportValidity(),o();return}let R=new FormData(p);if(e==="GET"){let x=new URLSearchParams(R);for(let[_,I]of x)f.set(_,I)}else a.body=R}else throw N("SseInvalidContentType",t,{action:h,contentType:g});m.search=f.toString();try{await gt(t,m.toString(),a)}catch(p){if(!yt(p))throw N("SseFetchFailed",t,{method:e,url:n,error:p})}}finally{ce(we,{elId:i}),o()}};var bt={type:3,name:"delete",fn:async(t,e,n)=>U(t,"DELETE",e,{...n})};var St={type:3,name:"get",fn:async(t,e,n)=>U(t,"GET",e,{...n})};var Et={type:3,name:"patch",fn:async(t,e,n)=>U(t,"PATCH",e,{...n})};var Tt={type:3,name:"post",fn:async(t,e,n)=>U(t,"POST",e,{...n})};var At={type:3,name:"put",fn:async(t,e,n)=>U(t,"PUT",e,{...n})};var _t={type:1,name:"indicator",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let s=e?D(e,n):K(i),l=r.upsertIfMissing(s,!1),u=g=>{let{type:E,argsRaw:{elId:y}}=g.detail;if(y===t.id)switch(E){case Re:l.value=!0;break;case we:l.value=!1;break}};return document.addEventListener(te,u),()=>{document.removeEventListener(te,u)}}};var xt={type:2,name:k.ExecuteScript,onGlobalInit:async t=>{G(k.ExecuteScript,({autoRemove:e=`${Ke}`,attributes:n=Be,script:r})=>{let i=j(e);if(!r?.length)throw H("NoScriptProvided",t);let s=document.createElement("script");for(let l of n.split(`
`)){let u=l.indexOf(" "),g=u?l.slice(0,u):l,E=u?l.slice(u):"";s.setAttribute(g.trim(),E.trim())}s.text=r,document.head.appendChild(s),i&&s.remove()})}};var fe=document,J=!!fe.startViewTransition;var Rt=function(){"use strict";let t=()=>{},e={morphStyle:"outerHTML",callbacks:{beforeNodeAdded:t,afterNodeAdded:t,beforeNodeMorphed:t,afterNodeMorphed:t,beforeNodeRemoved:t,afterNodeRemoved:t,beforeAttributeUpdated:t},head:{style:"merge",shouldPreserve:v=>v.getAttribute("im-preserve")==="true",shouldReAppend:v=>v.getAttribute("im-re-append")==="true",shouldRemove:t,afterHeadMorphed:t},restoreFocus:!1};function n(v,A,S={}){v=y(v);let T=w(A),b=E(v,T,S),h=i(b,()=>u(b,v,T,o=>o.morphStyle==="innerHTML"?(s(o,v,T),Array.from(v.childNodes)):r(o,v,T)));return b.pantry.remove(),h}function r(v,A,S){let T=w(A),b=Array.from(T.childNodes),h=b.indexOf(A),o=b.length-(h+1);return s(v,T,S,A,A.nextSibling),b=Array.from(T.childNodes),b.slice(h,b.length-o)}function i(v,A){if(!v.config.restoreFocus)return A();let S=document.activeElement;if(!(S instanceof HTMLInputElement||S instanceof HTMLTextAreaElement))return A();let{id:T,selectionStart:b,selectionEnd:h}=S,o=A();return T&&T!==document.activeElement?.id&&(S=v.target.querySelector(`#${T}`),S?.focus()),S&&b&&h&&S.setSelectionRange(b,h),o}let s=function(){function v(c,a,m,f=null,p=null){a instanceof HTMLTemplateElement&&m instanceof HTMLTemplateElement&&(a=a.content,m=m.content),f||=a.firstChild;for(let R of m.childNodes){if(f&&f!=p){let _=S(c,R,f,p);if(_){_!==f&&b(c,f,_),l(_,R,c),f=_.nextSibling;continue}}if(R instanceof Element&&c.persistentIds.has(R.id)){let _=h(a,R.id,f,c);l(_,R,c),f=_.nextSibling;continue}let x=A(a,R,f,c);x&&(f=x.nextSibling)}for(;f&&f!=p;){let R=f;f=f.nextSibling,T(c,R)}}function A(c,a,m,f){if(f.callbacks.beforeNodeAdded(a)===!1)return null;if(f.idMap.has(a)&&a instanceof Element){let p=document.createElement(a.tagName);return c.insertBefore(p,m),l(p,a,f),f.callbacks.afterNodeAdded(p),p}else{let p=document.importNode(a,!0);return c.insertBefore(p,m),f.callbacks.afterNodeAdded(p),p}}let S=function(){function c(f,p,R,x){let _=null,I=p.nextSibling,V=0,L=R;for(;L&&L!=x;){if(m(L,p)){if(a(f,L,p))return L;_===null&&(f.idMap.has(L)||(_=L))}_===null&&I&&m(L,I)&&(V++,I=I.nextSibling,V>=2&&(_=void 0)),L=L.nextSibling}return _||null}function a(f,p,R){let x=f.idMap.get(p),_=f.idMap.get(R);if(!_||!x)return!1;for(let I of x)if(_.has(I))return!0;return!1}function m(f,p){let R=f,x=p;return R.nodeType===x.nodeType&&R.tagName===x.tagName&&(!R.id||R.id===x.id)}return c}();function T(c,a){if(c.idMap.has(a)&&a instanceof Element)d(c.pantry,a,null);else{if(c.callbacks.beforeNodeRemoved(a)===!1)return;a.parentNode?.removeChild(a),c.callbacks.afterNodeRemoved(a)}}function b(c,a,m){let f=a;for(;f&&f!==m;){let p=f;f=f.nextSibling,T(c,p)}return f}function h(c,a,m,f){let p=f.target.querySelector(`#${a}`)||f.pantry.querySelector(`#${a}`);return o(p,f),d(c,p,m),p}function o(c,a){let m=c.id;for(;c=c.parentNode;){let f=a.idMap.get(c);f&&(f.delete(m),f.size||a.idMap.delete(c))}}function d(c,a,m){if(c.moveBefore)try{c.moveBefore(a,m)}catch{c.insertBefore(a,m)}else c.insertBefore(a,m)}return v}(),l=function(){function v(o,d,c){return c.ignoreActive&&o===document.activeElement?null:(c.callbacks.beforeNodeMorphed(o,d)===!1||(o instanceof HTMLHeadElement&&c.head.ignore||(o instanceof HTMLHeadElement&&c.head.style!=="morph"?g(o,d,c):(A(o,d,c),h(o,c)||s(c,o,d))),c.callbacks.afterNodeMorphed(o,d)),o)}function A(o,d,c){let a=d.nodeType;if(a===1){let m=o,f=d,p=m.attributes,R=f.attributes;for(let x of R)b(x.name,m,"update",c)||m.getAttribute(x.name)!==x.value&&m.setAttribute(x.name,x.value);for(let x=p.length-1;0<=x;x--){let _=p[x];if(_&&!f.hasAttribute(_.name)){if(b(_.name,m,"remove",c))continue;m.removeAttribute(_.name)}}h(m,c)||S(m,f,c)}(a===8||a===3)&&o.nodeValue!==d.nodeValue&&(o.nodeValue=d.nodeValue)}function S(o,d,c){if(o instanceof HTMLInputElement&&d instanceof HTMLInputElement&&d.type!=="file"){let a=d.value,m=o.value;T(o,d,"checked",c),T(o,d,"disabled",c),d.hasAttribute("value")?m!==a&&(b("value",o,"update",c)||(o.setAttribute("value",a),o.value=a)):b("value",o,"remove",c)||(o.value="",o.removeAttribute("value"))}else if(o instanceof HTMLOptionElement&&d instanceof HTMLOptionElement)T(o,d,"selected",c);else if(o instanceof HTMLTextAreaElement&&d instanceof HTMLTextAreaElement){let a=d.value,m=o.value;if(b("value",o,"update",c))return;a!==m&&(o.value=a),o.firstChild&&o.firstChild.nodeValue!==a&&(o.firstChild.nodeValue=a)}}function T(o,d,c,a){let m=d[c],f=o[c];if(m!==f){let p=b(c,o,"update",a);p||(o[c]=d[c]),m?p||o.setAttribute(c,""):b(c,o,"remove",a)||o.removeAttribute(c)}}function b(o,d,c,a){return o==="value"&&a.ignoreActiveValue&&d===document.activeElement?!0:a.callbacks.beforeAttributeUpdated(o,d,c)===!1}function h(o,d){return!!d.ignoreActiveValue&&o===document.activeElement&&o!==document.body}return v}();function u(v,A,S,T){if(v.head.block){let b=A.querySelector("head"),h=S.querySelector("head");if(b&&h){let o=g(b,h,v);return Promise.all(o).then(()=>{let d=Object.assign(v,{head:{block:!1,ignore:!0}});return T(d)})}}return T(v)}function g(v,A,S){let T=[],b=[],h=[],o=[],d=new Map;for(let a of A.children)d.set(a.outerHTML,a);for(let a of v.children){let m=d.has(a.outerHTML),f=S.head.shouldReAppend(a),p=S.head.shouldPreserve(a);m||p?f?b.push(a):(d.delete(a.outerHTML),h.push(a)):S.head.style==="append"?f&&(b.push(a),o.push(a)):S.head.shouldRemove(a)!==!1&&b.push(a)}o.push(...d.values());let c=[];for(let a of o){let m=document.createRange().createContextualFragment(a.outerHTML).firstChild;if(S.callbacks.beforeNodeAdded(m)!==!1){if("href"in m&&m.href||"src"in m&&m.src){let f,p=new Promise(function(R){f=R});m.addEventListener("load",function(){f()}),c.push(p)}v.appendChild(m),S.callbacks.afterNodeAdded(m),T.push(m)}}for(let a of b)S.callbacks.beforeNodeRemoved(a)!==!1&&(v.removeChild(a),S.callbacks.afterNodeRemoved(a));return S.head.afterHeadMorphed(v,{added:T,kept:h,removed:b}),c}let E=function(){function v(o,d,c){let a=A(c),{persistentIds:m,idMap:f}=h(o,d),p=a.morphStyle||"outerHTML";if(!["innerHTML","outerHTML"].includes(p))throw`Do not understand how to morph style ${p}`;return{target:o,newContent:d,config:a,morphStyle:p,ignoreActive:a.ignoreActive,ignoreActiveValue:a.ignoreActiveValue,restoreFocus:a.restoreFocus,idMap:f,persistentIds:m,pantry:S(),callbacks:a.callbacks,head:a.head}}function A(o){let d=Object.assign({},e);return Object.assign(d,o),d.callbacks=Object.assign({},e.callbacks,o.callbacks),d.head=Object.assign({},e.head,o.head),d}function S(){let o=document.createElement("div");return o.hidden=!0,document.body.insertAdjacentElement("afterend",o),o}function T(o){let d=Array.from(o.querySelectorAll("[id]"));return o.id&&d.push(o),d}function b(o,d,c,a){for(let m of d)if(c.has(m.id)){let f=m;for(;f&&f!==o;){let p=a.get(f);p==null&&(p=new Set,a.set(f,p)),p.add(m.id),f=f.parentElement}}}function h(o,d){let c=new Map,a=new Set,m=T(o);for(let x of m){let _=x.id;c.has(_)?a.add(_):c.set(_,x.tagName)}let f=new Set,p=T(d);for(let x of p){let _=x.id,I=c.get(_);(f.has(_)||I&&I!==x.tagName)&&(a.add(_),f.delete(_)),I===x.tagName&&!a.has(_)&&f.add(_)}let R=new Map;return b(o.parentElement,p,f,R),b(d.parentElement,m,f,R),{persistentIds:f,idMap:R}}return v}(),{normalizeElement:y,normalizeParent:w}=function(){let v=new WeakSet;function A(b){return b instanceof Document?b.documentElement:b}function S(b){if(b==null)return document.createElement("div");if(typeof b=="string")return S(T(b));if(v.has(b))return b;if(b instanceof Node){if(b.parentNode)return b.parentNode;{let h=document.createElement("div");return h.append(b),h}}else{let h=document.createElement("div");for(let o of[...b])h.append(o);return h}}function T(b){let h=new DOMParser,o=b.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(o.match(/<\/html>/)||o.match(/<\/head>/)||o.match(/<\/body>/)){let d=h.parseFromString(b,"text/html");if(o.match(/<\/html>/))return v.add(d),d;{let c=d.firstChild;return c&&v.add(c),c}}else{let c=h.parseFromString("<body><template>"+b+"</template></body>","text/html").body.querySelector("template").content;return v.add(c),c}}return{normalizeElement:A,normalizeParent:S}}();return{morph:n,defaults:e}}();var Mt={type:2,name:k.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");G(k.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:i=Je,settleDuration:s=`${me}`,useViewTransition:l=`${ge}`})=>{let u=Number.parseInt(s),g=j(l);e.innerHTML=n.trim();let E=[...e.content.children];for(let y of E){if(!(y instanceof Element))throw H("NoFragmentsFound",t);let w=r||`#${y.getAttribute("id")}`,v=[...document.querySelectorAll(w)||[]];if(!v.length)throw H("NoTargetsFound",t,{selectorOrID:w});g&&J?fe.startViewTransition(()=>wt(t,i,u,y,v)):wt(t,i,u,y,v)}})}};function wt(t,e,n,r,i){for(let s of i){s.classList.add(X);let l=s.outerHTML,u=s;switch(e){case q.Morph:{let y=new Map,w=Rt.morph(u,r.cloneNode(!0),{restoreFocus:!0,callbacks:{beforeAttributeUpdated:(v,A,S)=>{if(S==="update"&&v.startsWith("data-")){let T=y.get(A);T||(T=[],y.set(A,T));let b=v.slice(5);T.push(B(b))}return!0}}});if(w?.length){u=w[0];for(let[v,A]of y.entries())for(let S of A)t.applyAttributePlugin(v,S)}break}case q.Inner:u.innerHTML=r.outerHTML;break;case q.Outer:u.replaceWith(r);break;case q.Prepend:u.prepend(r);break;case q.Append:u.append(r);break;case q.Before:u.before(r);break;case q.After:u.after(r);break;case q.UpsertAttributes:for(let y of r.getAttributeNames()){let w=r.getAttribute(y);u.setAttribute(y,w)}break;default:throw H("InvalidMergeMode",t,{mergeMode:e})}let g=u.classList;g?.add(X),setTimeout(()=>{s.classList.remove(X),g?.remove(X)},n);let E=u.outerHTML;g&&l!==E&&(g.add(ke),setTimeout(()=>{g.remove(ke)},n))}}var Nt={type:2,name:k.MergeSignals,onGlobalInit:async t=>{G(k.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${je}`})=>{let{signals:r}=t,i=j(n);r.merge(he(e),i)})}};var Pt={type:2,name:k.RemoveFragments,onGlobalInit:async t=>{G(k.RemoveFragments,({selector:e,settleDuration:n=`${me}`,useViewTransition:r=`${ge}`})=>{if(!e.length)throw H("NoSelectorProvided",t);let i=Number.parseInt(n),s=j(r),l=document.querySelectorAll(e),u=()=>{for(let g of l)g.classList.add(X);setTimeout(()=>{for(let g of l)g.remove()},i)};s&&J?fe.startViewTransition(()=>u()):u()})}};var Ct={type:2,name:k.RemoveSignals,onGlobalInit:async t=>{G(k.RemoveSignals,({paths:e=""})=>{let n=e.split(`
`).map(r=>r.trim());if(!n?.length)throw H("NoPathsProvided",t);t.signals.remove(...n)})}};var Lt={type:3,name:"clipboard",fn:(t,e)=>{if(!navigator.clipboard)throw N("ClipboardNotAvailable",t);navigator.clipboard.writeText(e)}};var It={type:1,name:"customValidity",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t;if(!(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement))throw N("CustomValidityInvalidElement",t);let i=n();return r(()=>{let s=i();if(typeof s!="string")throw N("CustomValidityInvalidExpression",t,{result:s});e.setCustomValidity(s)})}};var Dt="once",Vt="half",Ot="full",kt={type:1,name:"intersects",keyReq:2,mods:new Set([Dt,Vt,Ot]),onLoad:({el:t,rawKey:e,mods:n,genRX:r})=>{let i={threshold:0};n.has(Ot)?i.threshold=1:n.has(Vt)&&(i.threshold=.5);let s=r(),l=new IntersectionObserver(u=>{for(let g of u)g.isIntersecting&&(s(),n.has(Dt)&&(l.disconnect(),delete t.dataset[e]))},i);return l.observe(t),()=>l.disconnect()}};var Ft="session",Ht={type:1,name:"persist",mods:new Set([Ft]),onLoad:({key:t,effect:e,mods:n,signals:r,value:i})=>{t=D(t,n),t===""&&(t=O);let s=n.has(Ft)?sessionStorage:localStorage,l=i.split(/\s+/).filter(E=>E!=="");l=l.map(E=>K(E));let u=()=>{let E=s.getItem(t)||"{}",y=JSON.parse(E);r.merge(y)},g=()=>{let E;l.length?E=r.subset(...l):E=r.values(),s.setItem(t,JSON.stringify(E))};return u(),e(()=>{g()})}};var Wt={type:1,name:"replaceUrl",keyReq:2,valReq:1,onLoad:({effect:t,genRX:e})=>{let n=e();return t(()=>{let r=n(),i=window.location.href,s=new URL(r,i).toString();window.history.replaceState({},"",s)})}};var Me="smooth",Fe="instant",He="auto",qt="hstart",$t="hcenter",Gt="hend",Ut="hnearest",Bt="vstart",jt="vcenter",Kt="vend",Jt="vnearest",Mn="focus",Ne="center",zt="start",Yt="end",Xt="nearest",Qt={type:1,name:"scrollIntoView",keyReq:2,valReq:2,mods:new Set([Me,Fe,He,qt,$t,Gt,Ut,Bt,jt,Kt,Jt,Mn]),onLoad:t=>{let{el:e,mods:n,rawKey:r}=t;e.tabIndex||e.setAttribute("tabindex","0");let i={behavior:Me,block:Ne,inline:Ne};if(n.has(Me)&&(i.behavior=Me),n.has(Fe)&&(i.behavior=Fe),n.has(He)&&(i.behavior=He),n.has(qt)&&(i.inline=zt),n.has($t)&&(i.inline=Ne),n.has(Gt)&&(i.inline=Yt),n.has(Ut)&&(i.inline=Xt),n.has(Bt)&&(i.block=zt),n.has(jt)&&(i.block=Ne),n.has(Kt)&&(i.block=Yt),n.has(Jt)&&(i.block=Xt),!(e instanceof HTMLElement||e instanceof SVGElement))throw N("ScrollIntoViewInvalidElement",t);return e.tabIndex||e.setAttribute("tabindex","0"),e.scrollIntoView(i),n.has("focus")&&e.focus(),delete e.dataset[r],()=>{}}};var Zt="none",en="display",tn={type:1,name:"show",keyReq:2,valReq:1,onLoad:({el:{style:t},genRX:e,effect:n})=>{let r=e();return n(async()=>{r()?t.display===Zt&&t.removeProperty(en):t.setProperty(en,Zt)})}};var nn="view-transition",rn={type:1,name:"viewTransition",keyReq:2,valReq:1,onGlobalInit(){let t=!1;for(let e of document.head.childNodes)e instanceof HTMLMetaElement&&e.name===nn&&(t=!0);if(!t){let e=document.createElement("meta");e.name=nn,e.content="same-origin",document.head.appendChild(e)}},onLoad:({effect:t,el:e,genRX:n})=>{if(!J){console.error("Browser does not support view transitions");return}let r=n();return t(()=>{let i=r();if(!i?.length)return;let s=e.style;s.viewTransitionName=i})}};var on={type:1,name:"attr",valReq:1,onLoad:({el:t,key:e,effect:n,genRX:r})=>{let i=r();return e===""?n(async()=>{let s=i();for(let[l,u]of Object.entries(s))t.setAttribute(l,u)}):(e=oe(e),n(async()=>{let s=!1;try{s=i()}catch{}let l;typeof s=="string"?l=s:l=JSON.stringify(s),!l||l==="false"||l==="null"||l==="undefined"?t.removeAttribute(e):t.setAttribute(e,l)}))}};var Nn=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,sn=["change","input","keydown"],an={type:1,name:"bind",keyReq:3,valReq:3,onLoad:t=>{let{el:e,key:n,mods:r,signals:i,value:s,effect:l}=t,u=n?D(n,r):K(s),g=()=>{},E=()=>{},y=e.tagName.toLowerCase(),w="",v=y.includes("input"),A=e.getAttribute("type"),S=y.includes("checkbox")||v&&A==="checkbox";S&&(w=!1),v&&A==="number"&&(w=0);let b=y.includes("select"),h=y.includes("radio")||v&&A==="radio",o=v&&A==="file";h&&(e.getAttribute("name")?.length||e.setAttribute("name",u)),i.upsertIfMissing(u,w),g=()=>{let a="value"in e,m=i.value(u),f=`${m}`;if(S||h){let p=e;S?p.checked=!!m||m==="true":h&&(p.checked=f===p.value)}else if(!o)if(b){let p=e;if(p.multiple)for(let R of p.options){if(R?.disabled)return;Array.isArray(m)||typeof m=="string"?R.selected=m.includes(R.value):typeof m=="number"?R.selected=m===Number(R.value):R.selected=m}else p.value=f}else a?e.value=f:e.setAttribute("value",f)},E=async()=>{if(o){let f=[...e?.files||[]],p=[],R=[],x=[];await Promise.all(f.map(_=>new Promise(I=>{let V=new FileReader;V.onload=()=>{if(typeof V.result!="string")throw N("InvalidFileResultType",t,{resultType:typeof V.result});let L=V.result.match(Nn);if(!L?.groups)throw N("InvalidDataUri",t,{result:V.result});p.push(L.groups.contents),R.push(L.groups.mime),x.push(_.name)},V.onloadend=()=>I(void 0),V.readAsDataURL(_)}))),i.setValue(u,p),i.setValue(`${u}Mimes`,R),i.setValue(`${u}Names`,x);return}let a=i.value(u),m=e||e;if(typeof a=="number"){let f=Number(m.value||m.getAttribute("value"));i.setValue(u,f)}else if(typeof a=="string"){let f=m.value||m.getAttribute("value")||"";i.setValue(u,f)}else if(typeof a=="boolean")if(S){let f=m.checked||m.getAttribute("checked")==="true";i.setValue(u,f)}else{let f=!!(m.value||m.getAttribute("value"));i.setValue(u,f)}else if(!(typeof a>"u"))if(Array.isArray(a))if(b){let R=[...e.selectedOptions].filter(x=>x.selected).map(x=>x.value);i.setValue(u,R)}else{let f=JSON.stringify(m.value.split(","));i.setValue(u,f)}else throw N("BindUnsupportedSignalType",t,{signalType:typeof a})};for(let a of sn)e.addEventListener(a,E);let d=l(()=>g()),c=a=>{a.persisted&&E()};return window.addEventListener("pageshow",c),()=>{d();for(let a of sn)e.removeEventListener(a,E);window.removeEventListener("pageshow",c)}}};var ln={type:1,name:"class",valReq:1,onLoad:({el:t,key:e,mods:n,effect:r,genRX:i})=>{let s=t.classList,l=i();return r(()=>{if(e===""){let u=l();for(let[g,E]of Object.entries(u)){let y=g.split(/\s+/);E?s.add(...y):s.remove(...y)}}else e=D(e,n),l()?s.add(e):s.remove(e)})}};function de(t){if(!t||t.size<=0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return Number.parseFloat(e)}catch{}}return 0}function ne(t,e,n=!1){return t?t.has(e.toLowerCase()):n}var Pn="evt",We="signalsChange",Cn=We.length,un={type:1,name:"on",keyReq:1,valReq:1,argNames:[Pn],removeOnLoad:t=>t.startsWith("onLoad"),onLoad:({el:t,key:e,mods:n,rawKey:r,signals:i,value:s,effect:l,genRX:u})=>{let g=u(),E=t;n.has("window")&&(E=window);let y=h=>{h&&((n.has("prevent")||e==="submit")&&h.preventDefault(),n.has("stop")&&h.stopPropagation()),g(h)},w=n.get("delay");if(w){let h=de(w);y=ve(y,h)}let v=n.get("debounce");if(v){let h=de(v),o=ne(v,"leading",!1),d=!ne(v,"notrail",!1);y=Ze(y,h,o,d)}let A=n.get("throttle");if(A){let h=de(A),o=!ne(A,"noleading",!1),d=ne(A,"trail",!1);y=et(y,h,o,d)}if(n.has("viewtransition")&&J){let h=y;y=(...o)=>document.startViewTransition(()=>h(...o))}let S={capture:!0,passive:!1,once:!1};if(n.has("capture")||(S.capture=!1),n.has("passive")&&(S.passive=!0),n.has("once")&&(S.once=!0),e==="load")return y(),()=>{};if(e==="interval"){let h=1e3,o=n.get("duration");o&&(h=de(o),ne(o,"leading",!1)&&(t.dataset[r.replace(".leading","")]=s,delete t.dataset[r],y()));let d=setInterval(y,h);return()=>{clearInterval(d)}}if(e==="raf"){let h,o=()=>{y(),h=requestAnimationFrame(o)};return h=requestAnimationFrame(o),()=>{h&&cancelAnimationFrame(h)}}if(e.startsWith(We)){if(e===We){y();let d=c=>y(c);return document.addEventListener(ie,d),()=>{document.removeEventListener(ie,d)}}let h=D(B(e.slice(Cn)),n),o=new Map;return i.walk((d,c)=>{d.startsWith(h)&&o.set(c,c.value)}),l(()=>{for(let[d,c]of o)c!==d.value&&(y(),o.set(d,d.value))})}if(n.has("outside")){E=document;let h=y;y=d=>{let c=d?.target;t.contains(c)||h(d)}}let b=D(e,n);return E.addEventListener(b,y,S),()=>{E.removeEventListener(b,y)}}};var cn={type:1,name:"ref",keyReq:3,valReq:3,onLoad:({el:t,key:e,mods:n,signals:r,value:i})=>{let s=e?D(e,n):K(i);return r.setValue(s,t),()=>r.setValue(s,null)}};var fn={type:1,name:"text",keyReq:2,valReq:1,onLoad:t=>{let{el:e,effect:n,genRX:r}=t,i=r();return e instanceof HTMLElement||N("TextInvalidElement",t),n(()=>{let s=i(t);e.textContent=`${s}`})}};var{round:Ln,max:In,min:Dn}=Math,dn={type:3,name:"fit",fn:(t,e,n,r,i,s,l=!1,u=!1)=>{let g=(e-n)/(r-n)*(s-i)+i;return u&&(g=Ln(g)),l&&(g=In(i,Dn(s,g))),g}};var pn={type:3,name:"setAll",fn:({signals:t},e,n)=>{t.walk((r,i)=>{r.startsWith(e)&&(i.value=n)})}};var mn={type:3,name:"toggleAll",fn:({signals:t},e)=>{t.walk((n,r)=>{n.startsWith(e)&&(r.value=!r.value)})}};xe.load(on,an,ln,un,cn,tn,fn,_t,St,Tt,At,Et,bt,Mt,Nt,Pt,Ct,xt,Lt,It,kt,Ht,Wt,Qt,rn,dn,pn,mn);xe.aliasPrefix="ds";var ts=xe;export{ts as Datastar};
//# sourceMappingURL=datastar-aliased.js.map
