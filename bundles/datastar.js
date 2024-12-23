// Datastar v0.21.3
var ln="computed",De={type:1,name:ln,keyReq:1,valReq:1,onLoad:({key:t,signals:e,genRX:n})=>{let r=n();e.setComputed(t,r)}};var q=t=>t.trim()==="true",j=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),Ve=t=>t.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,n)=>n===0?e.toLowerCase():e.toUpperCase()).replace(/\s+/g,""),se=t=>new Function(`return Object.assign({}, ${t})`)();var Oe={type:1,name:"signals",valReq:1,removeOnLoad:!0,onLoad:t=>{let{key:e,genRX:n,signals:r}=t;if(e!=="")r.setValue(e,n()());else{let o=se(t.value);t.value=JSON.stringify(o),r.merge(n()())}}};var Fe={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var He={name:"signalValue",type:0,fn:t=>{let e=/(?<path>[\w0-9.]*)((\.value))/gm;return t.replaceAll(e,"ctx.signals.signal('$1').value")}};var k="datastar";var qe="Datastar-Request",We="0.21.3";var $e="type module";var D={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},Ue=D.Morph,L={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};function Be(t){if(t.id)return t.id;let e=0,n=s=>(e=(e<<5)-e+s,e&e),r=s=>{for(let i of s.split(""))n(i.charCodeAt(0))},o=t;for(;o.parentNode;){if(o.id){r(`${o.id}`);break}if(o===o.ownerDocument.documentElement)r(o.tagName);else{for(let s=1,i=t;i.previousElementSibling;i=i.previousElementSibling,s++)n(s);o=o.parentNode}o=o.parentNode}return k+e}function Ge(t,e){let n=new MutationObserver(r=>{for(let o of r)for(let s of o.removedNodes)if(s===t){n.disconnect(),e();return}});n.observe(t.parentNode,{childList:!0})}var un="https://data-star.dev/errors";var f=(t,e)=>{let n=new Error;t=t.charAt(0).toUpperCase()+t.slice(1),n.name=`error ${t}`;let r=`${un}/${t}?${new URLSearchParams(e)}`;return n.message=`for more info see ${r}`,n};var cn=Symbol.for("preact-signals"),V=1,K=2,Q=4,z=8,ie=16,J=32;function Te(){ae++}function Ae(){if(ae>1){ae--;return}let t,e=!1;for(;Z!==void 0;){let n=Z;for(Z=void 0,Se++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~K,!(n._flags&z)&&Ke(n))try{n._callback()}catch(o){e||(t=o,e=!0)}n=r}}if(Se=0,ae--,e)throw f("BatchError, error",{error:t})}var E;var Z,ae=0,Se=0,le=0;function je(t){if(E===void 0)return;let e=t._node;if(e===void 0||e._target!==E)return e={_version:0,_source:t,_prevSource:E._sources,_nextSource:void 0,_target:E,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},E._sources!==void 0&&(E._sources._nextSource=e),E._sources=e,t._node=e,E._flags&J&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=E._sources,e._nextSource=void 0,E._sources._nextSource=e,E._sources=e),e}function M(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}M.prototype.brand=cn;M.prototype._refresh=()=>!0;M.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};M.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};M.prototype.subscribe=function(t){return ue(()=>{let e=this.value,n=E;E=void 0;try{t(e)}finally{E=n}})};M.prototype.valueOf=function(){return this.value};M.prototype.toString=function(){return`${this.value}`};M.prototype.toJSON=function(){return this.value};M.prototype.peek=function(){let t=E;E=void 0;try{return this.value}finally{E=t}};Object.defineProperty(M.prototype,"value",{get(){let t=je(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(Se>100)throw f("SignalCycleDetected");this._value=t,this._version++,le++,Te();try{for(let e=this._targets;e!==void 0;e=e._nextTarget)e._target._notify()}finally{Ae()}}}});function Ke(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function Je(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function ze(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function $(t){M.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=le-1,this._flags=Q}$.prototype=new M;$.prototype._refresh=function(){if(this._flags&=~K,this._flags&V)return!1;if((this._flags&(Q|J))===J||(this._flags&=~Q,this._globalVersion===le))return!0;if(this._globalVersion=le,this._flags|=V,this._version>0&&!Ke(this))return this._flags&=~V,!0;let t=E;try{Je(this),E=this;let e=this._fn();(this._flags&ie||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~ie,this._version++)}catch(e){this._value=e,this._flags|=ie,this._version++}return E=t,ze(this),this._flags&=~V,!0};$.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=Q|J;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}M.prototype._subscribe.call(this,t)};$.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(M.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~J;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};$.prototype._notify=function(){if(!(this._flags&K)){this._flags|=Q|K;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty($.prototype,"value",{get(){if(this._flags&V)throw f("SignalCycleDetected");let t=je(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&ie)throw f("GetComputedError",{value:this._value});return this._value}});function Xe(t){return new $(t)}function Ye(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){Te();let n=E;E=void 0;try{e()}catch(r){throw t._flags&=~V,t._flags|=z,_e(t),f("CleanupEffectError",{error:r})}finally{E=n,Ae()}}}function _e(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,Ye(t)}function fn(t){if(E!==this)throw f("EndEffectError");ze(this),E=t,this._flags&=~V,this._flags&z&&_e(this),Ae()}function ee(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=J}ee.prototype._callback=function(){let t=this._start();try{if(this._flags&z||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};ee.prototype._start=function(){if(this._flags&V)throw f("SignalCycleDetected");this._flags|=V,this._flags&=~z,Ye(this),Je(this),Te();let t=E;return E=this,fn.bind(this,t)};ee.prototype._notify=function(){this._flags&K||(this._flags|=K,this._nextBatchedEffect=Z,Z=this)};ee.prototype._dispose=function(){this._flags|=z,this._flags&V||_e(this)};function ue(t){let e=new ee(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}function Ze(t,e=!1){let n={};for(let r in t)if(Object.hasOwn(t,r)){if(e&&r.startsWith("_"))continue;let o=t[r];o instanceof M?n[r]=o.value:n[r]=Ze(o)}return n}function Qe(t,e,n=!1){for(let r in e)if(Object.hasOwn(e,r)){if(r.match(/\_\_+/))throw f("InvalidSignalKey",{key:r});let o=e[r];if(o instanceof Object&&!Array.isArray(o))t[r]||(t[r]={}),Qe(t[r],o,n);else{if(n&&t[r])continue;t[r]=new M(o)}}}function et(t,e){for(let n in t)if(Object.hasOwn(t,n)){let r=t[n];r instanceof M?e(n,r):et(r,(o,s)=>{e(`${n}.${o}`,s)})}}function dn(t,...e){let n={};for(let r of e){let o=r.split("."),s=t,i=n;for(let l=0;l<o.length-1;l++){let c=o[l];if(!s[c])return{};i[c]||(i[c]={}),s=s[c],i=i[c]}let a=o[o.length-1];i[a]=s[a]}return n}var ce=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),r=this.#e;for(let i=0;i<n.length-1;i++){let a=n[i];if(!r[a])return null;r=r[a]}let o=n[n.length-1],s=r[o];if(!s)throw f("SignalNotFound",{path:e});return s}setSignal(e,n){let r=e.split("."),o=this.#e;for(let i=0;i<r.length-1;i++){let a=r[i];o[a]||(o[a]={}),o=o[a]}let s=r[r.length-1];o[s]=n}setComputed(e,n){let r=Xe(()=>n());this.setSignal(e,r)}value(e){return this.signal(e)?.value}setValue(e,n){let r=this.upsert(e,n);r.value=n}upsert(e,n){let r=e.split("."),o=this.#e;for(let l=0;l<r.length-1;l++){let c=r[l];o[c]||(o[c]={}),o=o[c]}let s=r[r.length-1],i=o[s];if(i)return(i.value===null||i.value===void 0)&&(i.value=n),i;let a=new M(n);return o[s]=a,a}remove(...e){for(let n of e){let r=n.split("."),o=this.#e;for(let i=0;i<r.length-1;i++){let a=r[i];if(!o[a])return;o=o[a]}let s=r[r.length-1];delete o[s]}}merge(e,n=!1){Qe(this.#e,e,n)}subset(...e){return dn(this.values(),...e)}walk(e){et(this.#e,e)}values(e=!1){return Ze(this.#e,e)}JSON(e=!0,n=!1){let r=this.values(n);return e?JSON.stringify(r,null,2):JSON.stringify(r)}toString(){return this.JSON()}};var fe=class{#e=new ce;#o=[];#s=[];#n={};#a=[];#t=new Map;get signals(){return this.#e}get version(){return We}load(...e){for(let n of e){let r;switch(n.type){case 0:{this.#s.push(n);break}case 2:{let o=n;this.#a.push(o),r=o.onGlobalInit;break}case 3:{this.#n[n.name]=n;break}case 1:{let o=n;this.#o.push(o),r=o.onGlobalInit;break}default:throw f("InvalidPluginType",{name:n.name,type:n.type})}if(r){let o=this;r({get signals(){return o.#e},effect:s=>ue(s),actions:this.#n,apply:this.apply.bind(this),cleanup:this.#r.bind(this)})}}this.apply(document.body)}apply(e){let n=new Set;this.#o.forEach((r,o)=>{this.#i(e,s=>{if(!("starIgnore"in s.dataset)){o||this.#r(s);for(let i in s.dataset){if(!i.startsWith(r.name))continue;let a=i.slice(r.name.length),[l,...c]=a.split(/\_\_+/),u=l.length>0;u&&(l.startsWith("-_")?l=l.slice(1):l=l[0].toLowerCase()+l.slice(1));let p=`${s.dataset[i]}`||"",y=p,m=y.length>0,d=r.keyReq||0;if(u){if(d===2)throw f(`${r.name}KeyNotAllowed`,{key:l})}else if(d===1)throw f(`${r.name}KeyRequired`);let T=r.valReq||0;if(m){if(T===2)throw f(`${r.name}ValueNotAllowed`,{value:y})}else if(T===1)throw f(`${r.name}ValueRequired`);if(d===3||T===3){if(u&&m)throw f(`${r.name}KeyAndValueProvided`);if(!u&&!m)throw f(`${r.name}KeyOrValueRequired`)}s.id.length||(s.id=Be(s)),n.clear();let I=new Map;for(let h of c){let[R,...x]=h.split(".");I.set(Ve(R),new Set(x.map(g=>g.toLowerCase())))}let w=[...r.macros?.pre||[],...this.#s,...r.macros?.post||[]];for(let h of w)n.has(h)||(n.add(h),y=h.fn(y));let A=this,S={get signals(){return A.#e},effect:h=>ue(h),apply:A.apply.bind(A),cleanup:A.#r.bind(A),actions:A.#n,genRX:()=>this.#l(S,...r.argNames||[]),el:s,rawKey:i,rawValue:p,key:l,value:y,mods:I},v=r.onLoad(S);v&&(this.#t.has(s)||this.#t.set(s,{id:s.id,set:new Set}),this.#t.get(s)?.set.add(v)),r?.removeOnLoad&&delete s.dataset[i]}}})})}#l(e,...n){let r=e.value.split(/;|\n/).map(d=>d.trim()).filter(d=>d!==""),o=r.length-1;r[o].startsWith("return")||(r[o]=`return (${r[o]});`);let i=r.join(`
`),a=/(\w*)\(/gm,l=i.matchAll(a),c=new Set;for(let d of l)c.add(d[1]);let u=Object.keys(this.#n).filter(d=>c.has(d)),y=`${u.map(d=>`const ${d} = ctx.actions.${d}.fn;`).join(`
`)}return (()=> {${i}})()`,m=y.trim();for(let d of u)m=m.replaceAll(`${d}(`,`${d}(ctx,`);try{let d=n||[],T=new Function("ctx",...d,m);return(...I)=>T(e,...I)}catch(d){throw f("GeneratingExpressionFailed",{error:d,fnContent:y})}}#i(e,n){if(!e||!(e instanceof HTMLElement||e instanceof SVGElement))return null;n(e);let r=e.firstElementChild;for(;r;)this.#i(r,n),r=r.nextElementSibling}#r(e){let n=this.#t.get(e);if(n){for(let r of n.set)r();this.#t.delete(e)}}};var tt=new fe;tt.load(Fe,He,Oe,De);var we=tt;async function pn(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function mn(t){let e,n,r,o=!1;return function(i){e===void 0?(e=i,n=0,r=-1):e=hn(e,i);let a=e.length,l=0;for(;n<a;){o&&(e[n]===10&&(l=++n),o=!1);let c=-1;for(;n<a&&c===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-l);break;case 13:o=!0;case 10:c=n;break}if(c===-1)break;t(e.subarray(l,c),r),l=n,r=-1}l===a?e=void 0:l!==0&&(e=e.subarray(l),n-=l)}}function gn(t,e,n){let r=nt(),o=new TextDecoder;return function(i,a){if(i.length===0)n?.(r),r=nt();else if(a>0){let l=o.decode(i.subarray(0,a)),c=a+(i[a+1]===32?2:1),u=o.decode(i.subarray(c));switch(l){case"data":r.data=r.data?`${r.data}
${u}`:u;break;case"event":r.event=u;break;case"id":t(r.id=u);break;case"retry":{let p=Number.parseInt(u,10);Number.isNaN(p)||e(r.retry=p);break}}}}}function hn(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function nt(){return{data:"",event:"",id:"",retry:void 0}}var yn="text/event-stream",rt="last-event-id";function ot(t,{signal:e,headers:n,onopen:r,onmessage:o,onclose:s,onerror:i,openWhenHidden:a,fetch:l,retryInterval:c=1e3,retryScaler:u=2,retryMaxWaitMs:p=3e4,retryMaxCount:y=10,...m}){return new Promise((d,T)=>{let I=0,w={...n};w.accept||(w.accept=yn);let A;function S(){A.abort(),document.hidden||g()}a||document.addEventListener("visibilitychange",S);let v=0;function h(){document.removeEventListener("visibilitychange",S),window.clearTimeout(v),A.abort()}e?.addEventListener("abort",()=>{h(),d()});let R=l??window.fetch,x=r??function(){};async function g(){A=new AbortController;try{let N=await R(t,{...m,headers:w,signal:A.signal});await x(N),await pn(N.body,mn(gn(_=>{_?w[rt]=_:delete w[rt]},_=>{c=_},o))),s?.(),h(),d()}catch(N){if(!A.signal.aborted)try{let _=i?.(N)??c;window.clearTimeout(v),v=window.setTimeout(g,_),c*=u,c=Math.min(c,p),I++,I>=y?(h(),T()):console.error(`Datastar failed to reach ${m.method}:${t.toString()} retry in ${_}ms`)}catch(_){h(),T(_)}}}g()})}var X=`${k}-sse`,Re=`${k}-settling`,U=`${k}-swapping`,de="started",pe="finished",st="error";function O(t,e){document.addEventListener(X,n=>{if(n.detail.type!==t)return;let{argsRaw:r}=n.detail;e(r)})}function me(t,e){document.dispatchEvent(new CustomEvent(X,{detail:{type:t,argsRaw:e}}))}var it=t=>`${t}`.includes("text/event-stream"),at={type:3,name:"sse",fn:async(t,e,n)=>{let{el:{id:r},el:o,signals:s}=t,{method:i,headers:a,contentType:l,includeLocal:c,selector:u,openWhenHidden:p,retryInterval:y,retryScaler:m,retryMaxWaitMs:d,retryMaxCount:T,abort:I}=Object.assign({method:"GET",headers:{},contentType:"json",includeLocal:!1,selector:null,openWhenHidden:!1,retryInterval:1e3,retryScaler:2,retryMaxWaitMs:3e4,retryMaxCount:10,abort:void 0},n),w=i.toUpperCase(),A=()=>{};try{if(me(de,{elId:r}),!e?.length)throw f("NoUrlProvided");let S=new Headers;S.set(qe,"true"),l==="json"&&S.set("Content-Type","application/json");let v=Object.assign({},S,a),h={method:w,headers:v,openWhenHidden:p,retryInterval:y,retryScaler:m,retryMaxWaitMs:d,retryMaxCount:T,signal:I,onopen:async g=>{if(g.status>=400){let N=g.status.toString();me(st,{status:N})}},onmessage:g=>{if(!g.event.startsWith(k))return;let N=g.event,_={},F=g.data.split(`
`);for(let C of F){let H=C.indexOf(" "),ke=C.slice(0,H),oe=_[ke];oe||(oe=[],_[ke]=oe);let an=C.slice(H+1).trim();oe.push(an)}let G={};for(let[C,H]of Object.entries(_))G[C]=H.join(`
`);me(N,G)},onerror:g=>{if(it(g))throw f("InvalidContentType",{url:e,error:g});g&&console.error(g.message)}},R=new URL(e,window.location.origin),x=new URLSearchParams(R.search);if(l==="json"){let g=s.JSON(!1,!c);w==="GET"?x.set(k,g):h.body=g}else if(l==="form"){let g=u?document.querySelector(u):o.closest("form");if(g===null)throw u?f("SseFormNotFound",{selector:u}):f("SseClosestFormNotFound");if(o!==g){let _=F=>F.preventDefault();g.addEventListener("submit",_),A=()=>g.removeEventListener("submit",_)}if(!g.checkValidity()){g.reportValidity(),A();return}let N=new FormData(g);if(w==="GET"){let _=new URLSearchParams(N);for(let[F,G]of _)x.set(F,G)}else h.body=N}else throw f("SseInvalidContentType",{contentType:l});R.search=x.toString();try{await ot(R.toString(),h)}catch(g){if(!it(g))throw f("SseFetchFailed",{method:w,url:e,error:g})}}finally{me(pe,{elId:r}),A()}}};var vn=`${k}-indicator`,Lr=`${vn}-loading`,lt={type:1,name:"indicator",keyReq:3,valReq:3,onLoad:({value:t,signals:e,el:n,key:r})=>{let o=r||t,s=e.upsert(o,!1),i=a=>{let{type:l,argsRaw:{elId:c}}=a.detail;if(c===n.id)switch(l){case de:s.value=!0;break;case pe:s.value=!1;break}};return document.addEventListener(X,i),()=>{document.removeEventListener(X,i)}}};var ut={type:2,name:L.ExecuteScript,onGlobalInit:async()=>{O(L.ExecuteScript,({autoRemove:t=`${!0}`,attributes:e=$e,script:n})=>{let r=q(t);if(!n?.length)throw f("NoScriptProvided");let o=document.createElement("script");for(let s of e.split(`
`)){let i=s.indexOf(" "),a=i?s.slice(0,i):s,l=i?s.slice(i):"";o.setAttribute(a.trim(),l.trim())}o.text=n,document.head.appendChild(o),r&&o.remove()})}};var te=document,Y=!!te.startViewTransition;var he=new WeakSet;function pt(t,e,n={}){t instanceof Document&&(t=t.documentElement);let r;typeof e=="string"?r=_n(e):r=e;let o=wn(r),s=Sn(t,o,n);return mt(t,o,s)}function mt(t,e,n){if(n.head.block){let r=t.querySelector("head"),o=e.querySelector("head");if(r&&o){let s=ht(o,r,n);Promise.all(s).then(()=>{mt(t,e,Object.assign(n,{head:{block:!1,ignore:!0}}))});return}}if(n.morphStyle==="innerHTML")return gt(e,t,n),t.children;if(n.morphStyle==="outerHTML"||n.morphStyle==null){let r=xn(e,t,n);if(!r)throw f("NoBestMatchFound",{old:t,new:e});let o=r?.previousSibling,s=r?.nextSibling,i=ye(t,r,n);return r?Rn(o,i,s):[]}throw f("InvalidMorphStyle",{style:n.morphStyle})}function ye(t,e,n){if(!(n.ignoreActive&&t===document.activeElement))if(e==null){if(n.callbacks.beforeNodeRemoved(t)===!1)return;t.remove(),n.callbacks.afterNodeRemoved(t);return}else{if(ve(t,e))return n.callbacks.beforeNodeMorphed(t,e)===!1?void 0:(t instanceof HTMLHeadElement&&n.head.ignore||(e instanceof HTMLHeadElement&&t instanceof HTMLHeadElement&&n.head.style!==D.Morph?ht(e,t,n):(En(e,t),gt(e,t,n))),n.callbacks.afterNodeMorphed(t,e),t);if(n.callbacks.beforeNodeRemoved(t)===!1||n.callbacks.beforeNodeAdded(e)===!1)return;if(!t.parentElement)throw f("NoParentElementFound",{oldNode:t});return t.parentElement.replaceChild(e,t),n.callbacks.afterNodeAdded(e),n.callbacks.afterNodeRemoved(t),e}}function gt(t,e,n){let r=t.firstChild,o=e.firstChild,s;for(;r;){if(s=r,r=s.nextSibling,o==null){if(n.callbacks.beforeNodeAdded(s)===!1)return;e.appendChild(s),n.callbacks.afterNodeAdded(s),B(n,s);continue}if(yt(s,o,n)){ye(o,s,n),o=o.nextSibling,B(n,s);continue}let i=Tn(t,e,s,o,n);if(i){o=ct(o,i,n),ye(i,s,n),B(n,s);continue}let a=An(t,s,o,n);if(a){o=ct(o,a,n),ye(a,s,n),B(n,s);continue}if(n.callbacks.beforeNodeAdded(s)===!1)return;e.insertBefore(s,o),n.callbacks.afterNodeAdded(s),B(n,s)}for(;o!==null;){let i=o;o=o.nextSibling,vt(i,n)}}function En(t,e){let n=t.nodeType;if(n===1){for(let r of t.attributes)e.getAttribute(r.name)!==r.value&&e.setAttribute(r.name,r.value);for(let r of e.attributes)t.hasAttribute(r.name)||e.removeAttribute(r.name)}if((n===Node.COMMENT_NODE||n===Node.TEXT_NODE)&&e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue),t instanceof HTMLInputElement&&e instanceof HTMLInputElement&&t.type!=="file")e.value=t.value||"",ge(t,e,"value"),ge(t,e,"checked"),ge(t,e,"disabled");else if(t instanceof HTMLOptionElement)ge(t,e,"selected");else if(t instanceof HTMLTextAreaElement&&e instanceof HTMLTextAreaElement){let r=t.value,o=e.value;r!==o&&(e.value=r),e.firstChild&&e.firstChild.nodeValue!==r&&(e.firstChild.nodeValue=r)}}function ge(t,e,n){let r=t.getAttribute(n),o=e.getAttribute(n);r!==o&&(r?e.setAttribute(n,r):e.removeAttribute(n))}function ht(t,e,n){let r=[],o=[],s=[],i=[],a=n.head.style,l=new Map;for(let u of t.children)l.set(u.outerHTML,u);for(let u of e.children){let p=l.has(u.outerHTML),y=n.head.shouldReAppend(u),m=n.head.shouldPreserve(u);p||m?y?o.push(u):(l.delete(u.outerHTML),s.push(u)):a===D.Append?y&&(o.push(u),i.push(u)):n.head.shouldRemove(u)!==!1&&o.push(u)}i.push(...l.values());let c=[];for(let u of i){let p=document.createRange().createContextualFragment(u.outerHTML).firstChild;if(!p)throw f("NewElementCouldNotBeCreated",{newNode:u});if(n.callbacks.beforeNodeAdded(p)){if(p.hasAttribute("href")||p.hasAttribute("src")){let y,m=new Promise(d=>{y=d});p.addEventListener("load",()=>{y(void 0)}),c.push(m)}e.appendChild(p),n.callbacks.afterNodeAdded(p),r.push(p)}}for(let u of o)n.callbacks.beforeNodeRemoved(u)!==!1&&(e.removeChild(u),n.callbacks.afterNodeRemoved(u));return n.head.afterHeadMorphed(e,{added:r,kept:s,removed:o}),c}function W(){}function Sn(t,e,n){return{target:t,newContent:e,config:n,morphStyle:n.morphStyle,ignoreActive:n.ignoreActive,idMap:Ln(t,e),deadIds:new Set,callbacks:Object.assign({beforeNodeAdded:W,afterNodeAdded:W,beforeNodeMorphed:W,afterNodeMorphed:W,beforeNodeRemoved:W,afterNodeRemoved:W},n.callbacks),head:Object.assign({style:"merge",shouldPreserve:r=>r.getAttribute("im-preserve")==="true",shouldReAppend:r=>r.getAttribute("im-re-append")==="true",shouldRemove:W,afterHeadMorphed:W},n.head)}}function yt(t,e,n){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName?t?.id?.length&&t.id===e.id?!0:ne(n,t,e)>0:!1}function ve(t,e){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName}function ct(t,e,n){for(;t!==e;){let r=t;if(t=t?.nextSibling,!r)throw f("NoTemporaryNodeFound",{startInclusive:t,endExclusive:e});vt(r,n)}return B(n,e),e.nextSibling}function Tn(t,e,n,r,o){let s=ne(o,n,e),i=null;if(s>0){i=r;let a=0;for(;i!=null;){if(yt(n,i,o))return i;if(a+=ne(o,i,t),a>s)return null;i=i.nextSibling}}return i}function An(t,e,n,r){let o=n,s=e.nextSibling,i=0;for(;o&&s;){if(ne(r,o,t)>0)return null;if(ve(e,o))return o;if(ve(s,o)&&(i++,s=s.nextSibling,i>=2))return null;o=o.nextSibling}return o}var ft=new DOMParser;function _n(t){let e=t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(e.match(/<\/html>/)||e.match(/<\/head>/)||e.match(/<\/body>/)){let o=ft.parseFromString(t,"text/html");if(e.match(/<\/html>/))return he.add(o),o;let s=o.firstChild;return s?(he.add(s),s):null}let r=ft.parseFromString(`<body><template>${t}</template></body>`,"text/html").body.querySelector("template")?.content;if(!r)throw f("NoContentFound",{newContent:t});return he.add(r),r}function wn(t){if(t==null)return document.createElement("div");if(he.has(t))return t;if(t instanceof Node){let n=document.createElement("div");return n.append(t),n}let e=document.createElement("div");for(let n of[...t])e.append(n);return e}function Rn(t,e,n){let r=[],o=[];for(;t;)r.push(t),t=t.previousSibling;for(;r.length>0;){let s=r.pop();o.push(s),e?.parentElement?.insertBefore(s,e)}for(o.push(e);n;)r.push(n),o.push(n),n=n.nextSibling;for(;r.length;)e?.parentElement?.insertBefore(r.pop(),e.nextSibling);return o}function xn(t,e,n){let r=t.firstChild,o=r,s=0;for(;r;){let i=Mn(r,e,n);i>s&&(o=r,s=i),r=r.nextSibling}return o}function Mn(t,e,n){return ve(t,e)?.5+ne(n,t,e):0}function vt(t,e){B(e,t),e.callbacks.beforeNodeRemoved(t)!==!1&&(t.remove(),e.callbacks.afterNodeRemoved(t))}function Nn(t,e){return!t.deadIds.has(e)}function Pn(t,e,n){return t.idMap.get(n)?.has(e)||!1}function B(t,e){let n=t.idMap.get(e);if(n)for(let r of n)t.deadIds.add(r)}function ne(t,e,n){let r=t.idMap.get(e);if(!r)return 0;let o=0;for(let s of r)Nn(t,s)&&Pn(t,s,n)&&++o;return o}function dt(t,e){let n=t.parentElement,r=t.querySelectorAll("[id]");for(let o of r){let s=o;for(;s!==n&&s;){let i=e.get(s);i==null&&(i=new Set,e.set(s,i)),i.add(o.id),s=s.parentElement}}}function Ln(t,e){let n=new Map;return dt(t,n),dt(e,n),n}var Et={type:2,name:L.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");O(L.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:o=Ue,settleDuration:s=`${300}`,useViewTransition:i=`${!1}`})=>{let a=Number.parseInt(s),l=q(i);e.innerHTML=n.trim();let c=[...e.content.children];for(let u of c){if(!(u instanceof Element))throw f("NoFragmentsFound");let p=r||`#${u.getAttribute("id")}`,y=[...document.querySelectorAll(p)||[]];if(!y.length)throw f("NoTargetsFound",{selectorOrID:p});Y&&l?te.startViewTransition(()=>bt(t,o,a,u,y)):bt(t,o,a,u,y)}})}};function bt(t,e,n,r,o){for(let s of o){s.classList.add(U);let i=s.outerHTML,a=s;switch(e){case D.Morph:{let u=pt(a,r,{callbacks:{beforeNodeRemoved:(p,y)=>(t.cleanup(p),!0)}});if(!u?.length)throw f("MorphFailed");a=u[0];break}case D.Inner:a.innerHTML=r.innerHTML;break;case D.Outer:a.replaceWith(r);break;case D.Prepend:a.prepend(r);break;case D.Append:a.append(r);break;case D.Before:a.before(r);break;case D.After:a.after(r);break;case D.UpsertAttributes:for(let u of r.getAttributeNames()){let p=r.getAttribute(u);a.setAttribute(u,p)}break;default:throw f("InvalidMergeMode",{mergeMode:e})}t.cleanup(a);let l=a.classList;l.add(U),t.apply(document.body),setTimeout(()=>{s.classList.remove(U),l.remove(U)},n);let c=a.outerHTML;i!==c&&(l.add(Re),setTimeout(()=>{l.remove(Re)},n))}}var St={type:2,name:L.MergeSignals,onGlobalInit:async t=>{O(L.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${!1}`})=>{let{signals:r}=t,o=q(n);r.merge(se(e),o),t.apply(document.body)})}};var Tt={type:2,name:L.RemoveFragments,onGlobalInit:async()=>{O(L.RemoveFragments,({selector:t,settleDuration:e=`${300}`,useViewTransition:n=`${!1}`})=>{if(!t.length)throw f("NoSelectorProvided");let r=Number.parseInt(e),o=q(n),s=document.querySelectorAll(t),i=()=>{for(let a of s)a.classList.add(U);setTimeout(()=>{for(let a of s)a.remove()},r)};Y&&o?te.startViewTransition(()=>i()):i()})}};var At={type:2,name:L.RemoveSignals,onGlobalInit:async t=>{O(L.RemoveSignals,({paths:e=""})=>{let n=e.split(`
`).map(r=>r.trim());if(!n?.length)throw f("NoPathsProvided");t.signals.remove(...n),t.apply(document.body)})}};var _t={type:3,name:"clipboard",fn:(t,e)=>{if(!navigator.clipboard)throw f("ClipboardNotAvailable");navigator.clipboard.writeText(e)}};var wt="once",Rt="half",xt="full",Mt={type:1,name:"intersects",keyReq:2,mods:new Set([wt,Rt,xt]),onLoad:({el:t,rawKey:e,mods:n,genRX:r})=>{let o={threshold:0};n.has(xt)?o.threshold=1:n.has(Rt)&&(o.threshold=.5);let s=r(),i=new IntersectionObserver(a=>{for(let l of a)l.isIntersecting&&(s(),n.has(wt)&&(i.disconnect(),delete t.dataset[e]))},o);return i.observe(t),()=>i.disconnect()}};var Nt="session",Pt={type:1,name:"persist",mods:new Set([Nt]),onLoad:({key:t,value:e,signals:n,effect:r,mods:o})=>{t===""&&(t=k);let s=o.has(Nt)?sessionStorage:localStorage,i=e.split(/\s+/).filter(c=>c!==""),a=()=>{let c=s.getItem(t)||"{}",u=JSON.parse(c);n.merge(u)},l=()=>{let c;i.length?c=n.subset(...i):c=n.values(),s.setItem(t,JSON.stringify(c))};return a(),r(()=>{l()})}};var Lt={type:1,name:"replaceUrl",keyReq:2,valReq:1,onLoad:({effect:t,genRX:e})=>{let n=e();return t(()=>{let r=n(),o=window.location.href,s=new URL(r,o).toString();window.history.replaceState({},"",s)})}};var be="smooth",Ne="instant",Pe="auto",It="hstart",Ct="hcenter",kt="hend",Dt="hnearest",Vt="vstart",Ot="vcenter",Ft="vend",Ht="vnearest",Cn="focus",Ee="center",qt="start",Wt="end",$t="nearest",Ut={type:1,name:"scrollIntoView",keyReq:2,valReq:2,mods:new Set([be,Ne,Pe,It,Ct,kt,Dt,Vt,Ot,Ft,Ht,Cn]),onLoad:({el:t,mods:e,rawKey:n})=>{t.tabIndex||t.setAttribute("tabindex","0");let r={behavior:be,block:Ee,inline:Ee};if(e.has(be)&&(r.behavior=be),e.has(Ne)&&(r.behavior=Ne),e.has(Pe)&&(r.behavior=Pe),e.has(It)&&(r.inline=qt),e.has(Ct)&&(r.inline=Ee),e.has(kt)&&(r.inline=Wt),e.has(Dt)&&(r.inline=$t),e.has(Vt)&&(r.block=qt),e.has(Ot)&&(r.block=Ee),e.has(Ft)&&(r.block=Wt),e.has(Ht)&&(r.block=$t),!(t instanceof HTMLElement||t instanceof SVGElement))throw f("NotHtmlSvgElement, el");return t.tabIndex||t.setAttribute("tabindex","0"),t.scrollIntoView(r),e.has("focus")&&t.focus(),delete t.dataset[n],()=>{}}};var Bt="none",Gt="display",jt={type:1,name:"show",keyReq:2,valReq:1,onLoad:({el:{style:t},genRX:e,effect:n})=>{let r=e();return n(async()=>{r()?t.display===Bt&&t.removeProperty(Gt):t.setProperty(Gt,Bt)})}};var Le="view-transition",Kt={type:1,name:Le,keyReq:2,valReq:1,onGlobalInit(){let t=!1;for(let e of document.head.childNodes)e instanceof HTMLMetaElement&&e.name===Le&&(t=!0);if(!t){let e=document.createElement("meta");e.name=Le,e.content="same-origin",document.head.appendChild(e)}},onLoad:({effect:t,el:e,genRX:n})=>{if(!Y){console.error("Browser does not support view transitions");return}let r=n();return t(()=>{let o=r();if(!o?.length)return;let s=e.style;s.viewTransitionName=o})}};var Jt={type:1,name:"attributes",valReq:1,onLoad:({el:t,genRX:e,key:n,effect:r})=>{let o=e();return n===""?r(async()=>{let s=o();for(let[i,a]of Object.entries(s))t.setAttribute(i,a)}):(n=j(n),r(async()=>{let s=!1;try{s=o()}catch{}let i;typeof s=="string"?i=s:i=JSON.stringify(s),!i||i==="false"||i==="null"||i==="undefined"?t.removeAttribute(n):t.setAttribute(n,i)}))}};var kn=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,zt=["change","input","keydown"],Xt={type:1,name:"bind",keyReq:3,valReq:3,onLoad:t=>{let{el:e,value:n,key:r,signals:o,effect:s}=t,i=r||n,a=()=>{},l=()=>{};if(typeof i!="string")throw f("InvalidExpression");let c=e.tagName.toLowerCase(),u="",p=c.includes("input"),y=e.getAttribute("type"),m=c.includes("checkbox")||p&&y==="checkbox";m&&(u=!1),p&&y==="number"&&(u=0);let T=c.includes("select"),I=c.includes("radio")||p&&y==="radio",w=p&&y==="file";I&&(e.getAttribute("name")?.length||e.setAttribute("name",i)),o.upsert(i,u),a=()=>{let S="value"in e,v=o.value(i),h=`${v}`;if(m||I){let R=e;m?R.checked=!!v||v==="true":I&&(R.checked=h===R.value)}else if(!w)if(T){let R=e;if(R.multiple)for(let x of R.options){if(x?.disabled)return;Array.isArray(v)||typeof v=="string"?x.selected=v.includes(x.value):typeof v=="number"?x.selected=v===Number(x.value):x.selected=v}else R.value=h}else S?e.value=h:e.setAttribute("value",h)},l=async()=>{if(w){let h=[...e?.files||[]],R=[],x=[],g=[];await Promise.all(h.map(F=>new Promise(G=>{let C=new FileReader;C.onload=()=>{if(typeof C.result!="string")throw f("InvalidFileResultType",{type:typeof C.result});let H=C.result.match(kn);if(!H?.groups)throw f("InvalidDataUri",{result:C.result});R.push(H.groups.contents),x.push(H.groups.mime),g.push(F.name)},C.onloadend=()=>G(void 0),C.readAsDataURL(F)}))),o.setValue(i,R);let N=`${i}Mimes`,_=`${i}Names`;N in o&&o.upsert(N,x),_ in o&&o.upsert(_,g);return}let S=o.value(i),v=e||e;if(typeof S=="number"){let h=Number(v.value||v.getAttribute("value"));o.setValue(i,h)}else if(typeof S=="string"){let h=v.value||v.getAttribute("value")||"";o.setValue(i,h)}else if(typeof S=="boolean")if(m){let h=v.checked||v.getAttribute("checked")==="true";o.setValue(i,h)}else{let h=!!(v.value||v.getAttribute("value"));o.setValue(i,h)}else if(!(typeof S>"u"))if(Array.isArray(S))if(T){let x=[...e.selectedOptions].filter(g=>g.selected).map(g=>g.value);o.setValue(i,x)}else{let h=JSON.stringify(v.value.split(","));o.setValue(i,h)}else throw f("UnsupportedSignalType",{current:typeof S})};for(let S of zt)e.addEventListener(S,l);let A=s(()=>a());return()=>{A();for(let S of zt)e.removeEventListener(S,l)}}};var Yt={type:1,name:"class",valReq:1,onLoad:({key:t,el:e,genRX:n,effect:r})=>{let o=e.classList,s=n();return r(()=>{if(t===""){let i=s();for(let[a,l]of Object.entries(i)){let c=a.split(/\s+/);l?o.add(...c):o.remove(...c)}}else{let i=s(),a=j(t);i?o.add(a):o.remove(a)}})}};function Ie(t){if(!t||t.size<=0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return Number.parseFloat(e)}catch{}}return 0}function re(t,e,n=!1){return t?t.has(e.toLowerCase()):n}function Zt(t,e,n=!1,r=!0){let o=-1,s=()=>o&&clearTimeout(o);return function(...a){s(),n&&!o&&t(...a),o=setTimeout(()=>{r&&t(...a),s()},e)}}function Qt(t,e,n=!0,r=!1){let o=!1;return function(...i){o||(n&&t(...i),o=!0,setTimeout(()=>{o=!1,r&&t(...i)},e))}}var Ce=new Map,Dn="evt",en={type:1,name:"on",keyReq:1,valReq:1,argNames:[Dn],macros:{pre:[{type:0,name:"evtEsc",fn:t=>t.replaceAll(/evt.([\w\.]+)value/gm,"EVT_$1_VALUE")}],post:[{type:0,name:"evtUnesc",fn:t=>t.replaceAll(/EVT_([\w\.]+)_VALUE/gm,"evt.$1value")}]},onLoad:({el:t,key:e,genRX:n,mods:r,signals:o,effect:s})=>{let i=n(),a=t;r.has("window")&&(a=window);let l=m=>{m&&((r.has("prevent")||e==="submit")&&m.preventDefault(),r.has("stop")&&m.stopPropagation()),i(m)},c=r.get("debounce");if(c){let m=Ie(c),d=re(c,"leading",!1),T=!re(c,"notrail",!1);l=Zt(l,m,d,T)}let u=r.get("throttle");if(u){let m=Ie(u),d=!re(u,"noleading",!1),T=re(u,"trail",!1);l=Qt(l,m,d,T)}let p={capture:!0,passive:!1,once:!1};r.has("capture")||(p.capture=!1),r.has("passive")&&(p.passive=!0),r.has("once")&&(p.once=!0);let y=j(e).toLowerCase();switch(y){case"load":return l(),delete t.dataset.onLoad,()=>{};case"raf":{let m,d=()=>{l(),m=requestAnimationFrame(d)};return m=requestAnimationFrame(d),()=>{m&&cancelAnimationFrame(m)}}case"signals-change":return Ge(t,()=>{Ce.delete(t.id)}),s(()=>{let m=r.has("remote"),d=o.JSON(!1,m);(Ce.get(t.id)||"")!==d&&(Ce.set(t.id,d),l())});default:{if(r.has("outside")){a=document;let d=l,T=!1;l=w=>{let A=w?.target;if(!A)return;let S=t.id===A.id;S&&T&&(T=!1),!S&&!T&&(d(w),T=!0)}}return a.addEventListener(y,l,p),()=>{a.removeEventListener(y,l)}}}}};var tn={type:1,name:"ref",keyReq:3,valReq:3,onLoad:({el:t,key:e,value:n,signals:r})=>{let o=e||n;return r.upsert(o,t),()=>r.setValue(o,null)}};var nn={type:1,name:"text",keyReq:2,valReq:1,onLoad:t=>{let{el:e,genRX:n,effect:r}=t,o=n();return e instanceof HTMLElement||f("NotHtmlElement"),r(()=>{let s=o(t);e.textContent=`${s}`})}};var{round:Vn,max:On,min:Fn}=Math,rn={type:3,name:"fit",fn:(t,e,n,r,o,s,i=!1,a=!1)=>{let l=(e-n)/(r-n)*(s-o)+o;return a&&(l=Vn(l)),i&&(l=On(o,Fn(s,l))),l}};var on={type:3,name:"setAll",fn:({signals:t},e,n)=>{t.walk((r,o)=>{r.startsWith(e)&&(o.value=n)})}};var sn={type:3,name:"toggleAll",fn:({signals:t},e)=>{t.walk((n,r)=>{n.startsWith(e)&&(r.value=!r.value)})}};we.load(Xt,lt,tn,Jt,Yt,en,jt,nn,at,Et,St,Tt,At,ut,_t,Mt,Pt,Lt,Ut,Kt,rn,on,sn);var Ls=we;export{Ls as Datastar};
//# sourceMappingURL=datastar.js.map
