// Datastar v1.0.0-beta.8
var re=/🖕JS_DS🚀/.source,P=re.slice(0,5),B=re.slice(4),T="datastar";var Ce={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},je=Ce.Morph;var y=(s=>(s[s.Attribute=1]="Attribute",s[s.Watcher=2]="Watcher",s[s.Action=3]="Action",s))(y||{});var oe=`${T}-signals`;var W=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),O=t=>W(t).replace(/-./g,e=>e[1].toUpperCase()),q=t=>W(t).replace(/-/g,"_"),Me=t=>O(t).replace(/^./,e=>e[0].toUpperCase()),ie=t=>new Function(`return Object.assign({}, ${t})`)();var Oe={kebab:W,snake:q,pascal:Me};function I(t,e){for(let n of e.get("case")||[]){let s=Oe[n];s&&(t=s(t))}return t}var ke="computed",le={type:1,name:ke,keyReq:1,valReq:1,onLoad:({key:t,mods:e,signals:n,genRX:s})=>{t=I(t,e);let r=s();n.setComputed(t,r)}};var ue={type:1,name:"signals",onLoad:t=>{let{key:e,mods:n,signals:s,value:r,genRX:i}=t,a=n.has("ifmissing");if(e!==""){let o=I(e,n),l=r===""?r:i()();a?s.upsertIfMissing(o,l):s.setValue(o,l)}else{let o=ie(t.value);t.value=JSON.stringify(o);let f=i()();s.merge(f,a)}}};var ce={type:1,name:"star",keyReq:2,valReq:2,onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var A=class{#e=0;#t;constructor(e=T){this.#t=e}with(e){if(typeof e=="string")for(let n of e.split(""))this.with(n.charCodeAt(0));else typeof e=="boolean"?this.with(1<<(e?7:3)):this.#e=this.#e*33^e;return this}get value(){return this.#e}get string(){return this.#t+Math.abs(this.#e).toString(36)}};function fe(t){if(t.id)return t.id;let e=new A,n=t;for(;n;){if(e.with(n.tagName||""),n.id){e.with(n.id);break}let s=n?.parentNode;s&&e.with([...s.children].indexOf(n)),n=s}return e.string}function de(t,e){return new A().with(t).with(e).value}function J(t,e){if(!t||!(t instanceof HTMLElement||t instanceof SVGElement))return null;let n=t.dataset;if("starIgnore"in n)return null;"starIgnore__self"in n||e(t);let s=t.firstElementChild;for(;s;)J(s,e),s=s.nextElementSibling}var De="https://data-star.dev/errors";function U(t,e,n={}){let s=new Error;s.name=`${T} ${t} error`;let r=q(e),i=new URLSearchParams({metadata:JSON.stringify(n)}).toString(),a=JSON.stringify(n,null,2);return s.message=`${e}
More info: ${De}/${t}/${r}?${i}
Context: ${a}`,s}function m(t,e,n={}){return U("internal",e,Object.assign({from:t},n))}function pe(t,e,n={}){let s={plugin:{name:e.plugin.name,type:y[e.plugin.type]}};return U("init",t,Object.assign(s,n))}function v(t,e,n={}){let s={plugin:{name:e.plugin.name,type:y[e.plugin.type]},element:{id:e.el.id,tag:e.el.tagName},expression:{rawKey:e.rawKey,key:e.key,value:e.value,validSignals:e.signals.paths(),fnContent:e.fnContent}};return U("runtime",t,Object.assign(s,n))}var w="preact-signals",Ve=Symbol.for("preact-signals"),_=1,N=2,D=4,C=8,$=16,R=32;function Y(){F++}function X(){if(F>1){F--;return}let t,e=!1;for(;k!==void 0;){let n=k;for(k=void 0,z++;n!==void 0;){let s=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~N,!(n._flags&C)&&he(n))try{n._callback()}catch(r){e||(t=r,e=!0)}n=s}}if(z=0,F--,e)throw t}var u;var k,F=0,z=0,L=0;function ge(t){if(u===void 0)return;let e=t._node;if(e===void 0||e._target!==u)return e={_version:0,_source:t,_prevSource:u._sources,_nextSource:void 0,_target:u,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},u._sources!==void 0&&(u._sources._nextSource=e),u._sources=e,t._node=e,u._flags&R&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=u._sources,e._nextSource=void 0,u._sources._nextSource=e,u._sources=e),e}function c(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}c.prototype.brand=Ve;c.prototype._refresh=()=>!0;c.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};c.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};c.prototype.subscribe=function(t){return G(()=>{let e=this.value,n=u;u=void 0;try{t(e)}finally{u=n}})};c.prototype.valueOf=function(){return this.value};c.prototype.toString=function(){return`${this.value}`};c.prototype.toJSON=function(){return this.value};c.prototype.peek=function(){let t=u;u=void 0;try{return this.value}finally{u=t}};Object.defineProperty(c.prototype,"value",{get(){let t=ge(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(z>100)throw m(w,"SignalCycleDetected");let e=this._value,n=t;this._value=t,this._version++,L++,Y();try{for(let s=this._targets;s!==void 0;s=s._nextTarget)s._target._notify()}finally{X()}this?._onChange({old:e,revised:n})}}});function he(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function me(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function _e(t){let e=t._sources,n;for(;e!==void 0;){let s=e._prevSource;e._version===-1?(e._source._unsubscribe(e),s!==void 0&&(s._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=s)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=s}t._sources=n}function S(t){c.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=L-1,this._flags=D}S.prototype=new c;S.prototype._refresh=function(){if(this._flags&=~N,this._flags&_)return!1;if((this._flags&(D|R))===R||(this._flags&=~D,this._globalVersion===L))return!0;if(this._globalVersion=L,this._flags|=_,this._version>0&&!he(this))return this._flags&=~_,!0;let t=u;try{me(this),u=this;let e=this._fn();(this._flags&$||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~$,this._version++)}catch(e){this._value=e,this._flags|=$,this._version++}return u=t,_e(this),this._flags&=~_,!0};S.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=D|R;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}c.prototype._subscribe.call(this,t)};S.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(c.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~R;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};S.prototype._notify=function(){if(!(this._flags&N)){this._flags|=D|N;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(S.prototype,"value",{get(){if(this._flags&_)throw m(w,"SignalCycleDetected");let t=ge(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&$)throw m(w,"GetComputedError",{value:this._value});return this._value}});function ve(t){return new S(t)}function ye(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){Y();let n=u;u=void 0;try{e()}catch(s){throw t._flags&=~_,t._flags|=C,Z(t),m(w,"CleanupEffectError",{error:s})}finally{u=n,X()}}}function Z(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,ye(t)}function Pe(t){if(u!==this)throw m(w,"EndEffectError");_e(this),u=t,this._flags&=~_,this._flags&C&&Z(this),X()}function V(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=R}V.prototype._callback=function(){let t=this._start();try{if(this._flags&C||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};V.prototype._start=function(){if(this._flags&_)throw m(w,"SignalCycleDetected");this._flags|=_,this._flags&=~C,ye(this),me(this),Y();let t=u;return u=this,Pe.bind(this,t)};V.prototype._notify=function(){this._flags&N||(this._flags|=N,this._nextBatchedEffect=k,k=this)};V.prototype._dispose=function(){this._flags|=C,this._flags&_||Z(this)};function G(t){let e=new V(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var Se="namespacedSignals",M=t=>{document.dispatchEvent(new CustomEvent(oe,{detail:Object.assign({added:[],removed:[],updated:[]},t)}))};function xe(t,e=!1){let n={};for(let s in t)if(Object.hasOwn(t,s)){if(e&&s.startsWith("_"))continue;let r=t[s];r instanceof c?n[s]=r.value:n[s]=xe(r)}return n}function be(t,e,n=!1){let s={added:[],removed:[],updated:[]};for(let r in e)if(Object.hasOwn(e,r)){if(r.match(/\_\_+/))throw m(Se,"InvalidSignalKey",{key:r});let i=e[r];if(i instanceof Object&&!Array.isArray(i)){t[r]||(t[r]={});let a=be(t[r],i,n);s.added.push(...a.added.map(o=>`${r}.${o}`)),s.removed.push(...a.removed.map(o=>`${r}.${o}`)),s.updated.push(...a.updated.map(o=>`${r}.${o}`))}else{if(Object.hasOwn(t,r)){if(n)continue;let l=t[r];if(l instanceof c){let f=l.value;l.value=i,f!==i&&s.updated.push(r);continue}}let o=new c(i);o._onChange=()=>{M({updated:[r]})},t[r]=o,s.added.push(r)}}return s}function Ee(t,e){for(let n in t)if(Object.hasOwn(t,n)){let s=t[n];s instanceof c?e(n,s):Ee(s,(r,i)=>{e(`${n}.${r}`,i)})}}function Ie(t,...e){let n={};for(let s of e){let r=s.split("."),i=t,a=n;for(let l=0;l<r.length-1;l++){let f=r[l];if(!i[f])return{};a[f]||(a[f]={}),i=i[f],a=a[f]}let o=r[r.length-1];a[o]=i[o]}return n}var j=class{#e={};exists(e){return!!this.signal(e)}signal(e){let n=e.split("."),s=this.#e;for(let a=0;a<n.length-1;a++){let o=n[a];if(!s[o])return null;s=s[o]}let r=n[n.length-1],i=s[r];if(!i)throw m(Se,"SignalNotFound",{path:e});return i}setSignal(e,n){let s=e.split("."),r=this.#e;for(let a=0;a<s.length-1;a++){let o=s[a];r[o]||(r[o]={}),r=r[o]}let i=s[s.length-1];r[i]=n}setComputed(e,n){let s=ve(()=>n());this.setSignal(e,s)}value(e){return this.signal(e)?.value}setValue(e,n){let{signal:s}=this.upsertIfMissing(e,n),r=s.value;s.value=n,r!==n&&M({updated:[e]})}upsertIfMissing(e,n){let s=e.split("."),r=this.#e;for(let l=0;l<s.length-1;l++){let f=s[l];r[f]||(r[f]={}),r=r[f]}let i=s[s.length-1],a=r[i];if(a instanceof c)return{signal:a,inserted:!1};let o=new c(n);return o._onChange=()=>{M({updated:[e]})},r[i]=o,M({added:[e]}),{signal:o,inserted:!0}}remove(...e){if(!e.length){this.#e={};return}let n=Array();for(let s of e){let r=s.split("."),i=this.#e;for(let o=0;o<r.length-1;o++){let l=r[o];if(!i[l])return;i=i[l]}let a=r[r.length-1];delete i[a],n.push(s)}M({removed:n})}merge(e,n=!1){let s=be(this.#e,e,n);(s.added.length||s.removed.length||s.updated.length)&&M(s)}subset(...e){return Ie(this.values(),...e)}walk(e){Ee(this.#e,e)}paths(){let e=new Array;return this.walk(n=>e.push(n)),e}values(e=!1){return xe(this.#e,e)}JSON(e=!0,n=!1){let s=this.values(n);return e?JSON.stringify(s,null,2):JSON.stringify(s)}toString(){return this.JSON()}};var Te=new j,ee=[],K={},$e=[],x=new Map,Q=null,te="";function Ae(t){te=t}function ne(...t){for(let e of t){let n={plugin:e,signals:Te,effect:r=>G(r),actions:K,removals:x,applyToElement:H},s;switch(e.type){case 2:{let r=e;$e.push(r),s=r.onGlobalInit;break}case 3:{K[e.name]=e;break}case 1:{let r=e;ee.push(r),s=r.onGlobalInit;break}default:throw pe("InvalidPluginType",n)}s&&s(n)}ee.sort((e,n)=>{let s=n.name.length-e.name.length;return s!==0?s:e.name.localeCompare(n.name)})}function se(){H(document.documentElement),Fe()}function H(t){J(t,e=>{let n=new Array,s=x.get(e.id)||new Map,r=new Map([...s]),i=new Map;for(let a of Object.keys(e.dataset)){if(!a.startsWith(te))break;let o=e.dataset[a]||"",l=de(a,o);i.set(a,l),s.has(l)?r.delete(l):n.push(a)}for(let[a,o]of r)o();for(let a of n){let o=i.get(a);Le(e,a,o)}})}function Fe(){Q||(Q=new MutationObserver(t=>{let e=new Set,n=new Set;for(let{target:s,type:r,addedNodes:i,removedNodes:a}of t)switch(r){case"childList":{for(let o of a)e.add(o);for(let o of i)n.add(o)}break;case"attributes":{n.add(s);break}}for(let s of e){let r=x.get(s.id);if(r){for(let[i,a]of r)a(),r.delete(i);r.size===0&&x.delete(s.id)}}for(let s of n)H(s)}),Q.observe(document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}))}function Le(t,e,n){let s=O(e.slice(te.length)),r=ee.find(h=>s.startsWith(h.name));if(!r)return;t.id.length||(t.id=fe(t));let[i,...a]=s.slice(r.name.length).split(/\_\_+/),o=i.length>0;o&&(i=O(i));let l=t.dataset[e]||"",f=l.length>0,g={signals:Te,applyToElement:H,effect:h=>G(h),actions:K,removals:x,genRX:()=>Ge(g,...r.argNames||[]),plugin:r,el:t,rawKey:s,key:i,value:l,mods:new Map},b=r.keyReq||0;if(o){if(b===2)throw v(`${r.name}KeyNotAllowed`,g)}else if(b===1)throw v(`${r.name}KeyRequired`,g);let E=r.valReq||0;if(f){if(E===2)throw v(`${r.name}ValueNotAllowed`,g)}else if(E===1)throw v(`${r.name}ValueRequired`,g);if(b===3||E===3){if(o&&f)throw v(`${r.name}KeyAndValueProvided`,g);if(!o&&!f)throw v(`${r.name}KeyOrValueRequired`,g)}for(let h of a){let[we,...Ne]=h.split(".");g.mods.set(O(we),new Set(Ne.map(Re=>Re.toLowerCase())))}let d=r.onLoad(g)??(()=>{}),p=x.get(t.id);p||(p=new Map,x.set(t.id,p)),p.set(n,d)}function Ge(t,...e){let n="",s=/(\/(\\\/|[^\/])*\/|"(\\"|[^\"])*"|'(\\'|[^'])*'|`(\\`|[^`])*`|[^;])+/gm,r=t.value.trim().match(s);if(r){let d=r.length-1,p=r[d].trim();p.startsWith("return")||(r[d]=`return (${p});`),n=r.join(`;
`)}let i=new Map,a=new RegExp(`(?:${P})(.*?)(?:${B})`,"gm");for(let d of n.matchAll(a)){let p=d[1],h=new A("dsEscaped").with(p).string;i.set(h,p),n=n.replace(P+p+B,h)}let o=/@(\w*)\(/gm,l=n.matchAll(o),f=new Set;for(let d of l)f.add(d[1]);let g=new RegExp(`@(${Object.keys(K).join("|")})\\(`,"gm");n=n.replaceAll(g,"ctx.actions.$1.fn(ctx,");let b=t.signals.paths();if(b.length){let d=new RegExp(`\\$(${b.join("|")})(\\W|$)`,"gm");n=n.replaceAll(d,"ctx.signals.signal('$1').value$2")}for(let[d,p]of i)n=n.replace(d,p);let E=`return (()=> {
${n}
})()`;t.fnContent=E;try{let d=new Function("ctx",...e,E);return(...p)=>{try{return d(t,...p)}catch(h){throw v("ExecuteExpression",t,{error:h.message})}}}catch(d){throw v("GenerateExpression",t,{error:d.message})}}ne(ce,ue,le);se();export{se as apply,ne as load,Ae as setAlias};
//# sourceMappingURL=datastar-core.js.map
