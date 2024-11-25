"use strict";(()=>{var Ge={pluginType:"attribute",name:"star",onLoad:()=>{alert("YOU ARE PROBABLY OVERCOMPLICATING IT")}};var Ue={pluginType:"attribute",name:"computed",mustNotEmptyKey:!0,onLoad:t=>{let e=t.store();return e[t.key]=t.reactivity.computed(()=>t.expressionFn(t)),()=>{let n=t.store();delete n[t.key]}}};function $(t){let e={};for(let[n,r]of Object.entries(t))n.startsWith("_")||(typeof r=="object"&&!Array.isArray(r)?e[n]=$(r):e[n]=r);return e}function se(t,e,n){let r={};if(!n)Object.assign(r,e);else for(let o in e){let i=t[o]?.value;i==null&&(r[o]=e[o])}return r}var Ke={pluginType:"attribute",name:"store",removeNewLines:!0,preprocessors:{pre:[{pluginType:"preprocessor",name:"store",regexp:/(?<whole>.+)/g,replacer:t=>{let{whole:e}=t;return`Object.assign({...ctx.store()}, ${e})`}}]},allowedModifiers:new Set(["ifmissing"]),onLoad:t=>{let e=t.expressionFn(t),n=se(t.store(),e,t.modifiers.has("ifmissing"));t.mergeSignals(n),delete t.el.dataset[t.rawKey]}};var R="datastar",xe="datastar-event";var qe="type module";var M={Morph:"morph",Inner:"inner",Outer:"outer",Prepend:"prepend",Append:"append",Before:"before",After:"after",UpsertAttributes:"upsertAttributes"},Je=M.Morph,x={MergeFragments:"datastar-merge-fragments",MergeSignals:"datastar-merge-signals",RemoveFragments:"datastar-remove-fragments",RemoveSignals:"datastar-remove-signals",ExecuteScript:"datastar-execute-script"};var Ye="[a-zA-Z_$]+",_n=Ye+"[0-9a-zA-Z_$.]*";function ae(t,e,n,r=!0){let o=r?_n:Ye;return new RegExp(`(?<whole>${t}(?<${e}>${o})${n})`,"g")}var ze=t=>t.id.match(`^${R}-`)!==null;var Ze={name:"action",pluginType:"preprocessor",regexp:ae("\\$","action","(?<call>\\((?<args>.*)\\))",!1),replacer:({action:t,args:e})=>{let n=["ctx"];e&&n.push(...e.split(",").map(o=>o.trim()));let r=n.join(",");return`ctx.actions.${t}.method(${r})`}};var Xe={name:"signal",pluginType:"preprocessor",regexp:ae("\\$","signal","(?<method>\\([^\\)]*\\))?"),replacer:t=>{let{signal:e,method:n}=t,r="ctx.store()";if(!n?.length)return`${r}.${e}.value`;let o=e.split("."),i=o.pop(),s=o.join(".");return`${r}.${s}.value.${i}${n}`}};var G=t=>{let e=new Error;return e.name=`${R}${t}`,e},h=G(400),Z=G(409),C=G(404),F=G(403),le=G(405),Qe=G(503);function et(t){return t instanceof HTMLElement||t instanceof SVGElement?t:null}function tt(t,e,n=!0){if(!(t instanceof HTMLElement||t instanceof SVGElement))throw C;t.tabIndex||t.setAttribute("tabindex","0"),t.scrollIntoView(e),n&&t.focus()}var wn=Symbol.for("preact-signals"),O=1,U=2,ee=4,q=8,ue=16,K=32;function fe(){Q++}function pe(){if(Q>1){Q--;return}let t,e=!1;for(;X!==void 0;){let n=X;for(X=void 0,De++;n!==void 0;){let r=n._nextBatchedEffect;if(n._nextBatchedEffect=void 0,n._flags&=~U,!(n._flags&q)&&ot(n))try{n._callback()}catch(o){e||(t=o,e=!0)}n=r}}if(De=0,Q--,e)throw t}function nt(t){if(Q>0)return t();fe();try{return t()}finally{pe()}}var b;var X,Q=0,De=0,ce=0;function rt(t){if(b===void 0)return;let e=t._node;if(e===void 0||e._target!==b)return e={_version:0,_source:t,_prevSource:b._sources,_nextSource:void 0,_target:b,_prevTarget:void 0,_nextTarget:void 0,_rollbackNode:e},b._sources!==void 0&&(b._sources._nextSource=e),b._sources=e,t._node=e,b._flags&K&&t._subscribe(e),e;if(e._version===-1)return e._version=0,e._nextSource!==void 0&&(e._nextSource._prevSource=e._prevSource,e._prevSource!==void 0&&(e._prevSource._nextSource=e._nextSource),e._prevSource=b._sources,e._nextSource=void 0,b._sources._nextSource=e,b._sources=e),e}function w(t){this._value=t,this._version=0,this._node=void 0,this._targets=void 0}w.prototype.brand=wn;w.prototype._refresh=function(){return!0};w.prototype._subscribe=function(t){this._targets!==t&&t._prevTarget===void 0&&(t._nextTarget=this._targets,this._targets!==void 0&&(this._targets._prevTarget=t),this._targets=t)};w.prototype._unsubscribe=function(t){if(this._targets!==void 0){let e=t._prevTarget,n=t._nextTarget;e!==void 0&&(e._nextTarget=n,t._prevTarget=void 0),n!==void 0&&(n._prevTarget=e,t._nextTarget=void 0),t===this._targets&&(this._targets=n)}};w.prototype.subscribe=function(t){return Le(()=>{let e=this.value,n=b;b=void 0;try{t(e)}finally{b=n}})};w.prototype.valueOf=function(){return this.value};w.prototype.toString=function(){return this.value+""};w.prototype.toJSON=function(){return this.value};w.prototype.peek=function(){let t=b;b=void 0;try{return this.value}finally{b=t}};Object.defineProperty(w.prototype,"value",{get(){let t=rt(this);return t!==void 0&&(t._version=this._version),this._value},set(t){if(t!==this._value){if(De>100)throw h;this._value=t,this._version++,ce++,fe();try{for(let e=this._targets;e!==void 0;e=e._nextTarget)e._target._notify()}finally{pe()}}}});function me(t){return new w(t)}function ot(t){for(let e=t._sources;e!==void 0;e=e._nextSource)if(e._source._version!==e._version||!e._source._refresh()||e._source._version!==e._version)return!0;return!1}function it(t){for(let e=t._sources;e!==void 0;e=e._nextSource){let n=e._source._node;if(n!==void 0&&(e._rollbackNode=n),e._source._node=e,e._version=-1,e._nextSource===void 0){t._sources=e;break}}}function st(t){let e=t._sources,n;for(;e!==void 0;){let r=e._prevSource;e._version===-1?(e._source._unsubscribe(e),r!==void 0&&(r._nextSource=e._nextSource),e._nextSource!==void 0&&(e._nextSource._prevSource=r)):n=e,e._source._node=e._rollbackNode,e._rollbackNode!==void 0&&(e._rollbackNode=void 0),e=r}t._sources=n}function W(t){w.call(this,void 0),this._fn=t,this._sources=void 0,this._globalVersion=ce-1,this._flags=ee}W.prototype=new w;W.prototype._refresh=function(){if(this._flags&=~U,this._flags&O)return!1;if((this._flags&(ee|K))===K||(this._flags&=~ee,this._globalVersion===ce))return!0;if(this._globalVersion=ce,this._flags|=O,this._version>0&&!ot(this))return this._flags&=~O,!0;let t=b;try{it(this),b=this;let e=this._fn();(this._flags&ue||this._value!==e||this._version===0)&&(this._value=e,this._flags&=~ue,this._version++)}catch(e){this._value=e,this._flags|=ue,this._version++}return b=t,st(this),this._flags&=~O,!0};W.prototype._subscribe=function(t){if(this._targets===void 0){this._flags|=ee|K;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._subscribe(e)}w.prototype._subscribe.call(this,t)};W.prototype._unsubscribe=function(t){if(this._targets!==void 0&&(w.prototype._unsubscribe.call(this,t),this._targets===void 0)){this._flags&=~K;for(let e=this._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e)}};W.prototype._notify=function(){if(!(this._flags&U)){this._flags|=ee|U;for(let t=this._targets;t!==void 0;t=t._nextTarget)t._target._notify()}};Object.defineProperty(W.prototype,"value",{get(){if(this._flags&O)throw h;let t=rt(this);if(this._refresh(),t!==void 0&&(t._version=this._version),this._flags&ue)throw this._value;return this._value}});function at(t){return new W(t)}function lt(t){let e=t._cleanup;if(t._cleanup=void 0,typeof e=="function"){fe();let n=b;b=void 0;try{e()}catch(r){throw t._flags&=~O,t._flags|=q,Pe(t),r}finally{b=n,pe()}}}function Pe(t){for(let e=t._sources;e!==void 0;e=e._nextSource)e._source._unsubscribe(e);t._fn=void 0,t._sources=void 0,lt(t)}function Rn(t){if(b!==this)throw h;st(this),b=t,this._flags&=~O,this._flags&q&&Pe(this),pe()}function te(t){this._fn=t,this._cleanup=void 0,this._sources=void 0,this._nextBatchedEffect=void 0,this._flags=K}te.prototype._callback=function(){let t=this._start();try{if(this._flags&q||this._fn===void 0)return;let e=this._fn();typeof e=="function"&&(this._cleanup=e)}finally{t()}};te.prototype._start=function(){if(this._flags&O)throw h;this._flags|=O,this._flags&=~q,lt(this),it(this),fe();let t=b;return b=this,Rn.bind(this,t)};te.prototype._notify=function(){this._flags&U||(this._flags|=U,this._nextBatchedEffect=X,X=this)};te.prototype._dispose=function(){this._flags|=q,this._flags&O||Pe(this)};function Le(t){let e=new te(t);try{e._callback()}catch(n){throw e._dispose(),n}return e._dispose.bind(e)}var de=class{get value(){return Me(this)}set value(e){nt(()=>xn(this,e))}peek(){return Me(this,{peek:!0})}},ne=t=>Object.assign(new de,Object.entries(t).reduce((e,[n,r])=>{if(["value","peek"].some(o=>o===n))throw F;return typeof r!="object"||r===null||Array.isArray(r)?e[n]=me(r):e[n]=ne(r),e},{})),xn=(t,e)=>Object.keys(e).forEach(n=>t[n].value=e[n]),Me=(t,{peek:e=!1}={})=>Object.entries(t).reduce((n,[r,o])=>(o instanceof w?n[r]=e?o.peek():o.value:o instanceof de&&(n[r]=Me(o,{peek:e})),n),{});function Ne(t,e){if(typeof e!="object"||Array.isArray(e)||!e)return JSON.parse(JSON.stringify(e));if(typeof e=="object"&&e.toJSON!==void 0&&typeof e.toJSON=="function")return e.toJSON();let n=t;return typeof t!="object"&&(n={...e}),Object.keys(e).forEach(r=>{n.hasOwnProperty(r)||(n[r]=e[r]),e[r]===null?delete n[r]:n[r]=Ne(n[r],e[r])}),n}var ut="0.20.0";var Dn=t=>t.pluginType==="preprocessor",Pn=t=>t.pluginType==="watcher",Ln=t=>t.pluginType==="attribute",Mn=t=>t.pluginType==="action",ge=class{constructor(){this.plugins=[];this.store=ne({});this.preprocessors=new Array;this.actions={};this.watchers=new Array;this.refs={};this.reactivity={signal:me,computed:at,effect:Le};this.parentID="";this.missingIDNext=0;this.removals=new Map;this.mergeRemovals=new Array;this.lastMarshalledStore=""}get version(){return ut}load(...e){let n=new Set(this.plugins);e.forEach(r=>{if(r.requiredPlugins){for(let i of r.requiredPlugins)if(!n.has(i))throw F}let o;if(Dn(r)){if(this.preprocessors.includes(r))throw Z;this.preprocessors.push(r)}else if(Pn(r)){if(this.watchers.includes(r))throw Z;this.watchers.push(r),o=r.onGlobalInit}else if(Mn(r)){if(this.actions[r.name])throw Z;this.actions[r.name]=r}else if(Ln(r)){if(this.plugins.includes(r))throw Z;this.plugins.push(r),o=r.onGlobalInit}else throw C;o&&o({store:()=>this.store,upsertSignal:this.upsertSignal.bind(this),mergeSignals:this.mergeSignals.bind(this),removeSignals:this.removeSignals.bind(this),actions:this.actions,reactivity:this.reactivity,applyPlugins:this.applyPlugins.bind(this),cleanup:this.cleanup.bind(this)}),n.add(r)}),this.applyPlugins(document.body)}cleanup(e){let n=this.removals.get(e);if(n){for(let r of n.set)r();this.removals.delete(e)}}mergeSignals(e){this.mergeRemovals.forEach(o=>o()),this.mergeRemovals=this.mergeRemovals.slice(0);let n=Ne(this.store.value,e);this.store=ne(n),JSON.stringify(this.store.value),this.lastMarshalledStore}removeSignals(...e){let n={...this.store.value},r=!1;for(let o of e){let i=o.split("."),s=i[0],a=n;for(let u=1;u<i.length;u++){let m=i[u];a[s]||(a[s]={}),a=a[s],s=m}delete a[s],r=!0}r&&(this.store=ne(n),this.applyPlugins(document.body))}upsertSignal(e,n){let r=e.split("."),o=this.store;for(let u=0;u<r.length-1;u++){let m=r[u];o[m]||(o[m]={}),o=o[m]}let i=r[r.length-1],s=o[i];if(s)return s;let a=this.reactivity.signal(n);return o[i]=a,a}applyPlugins(e){let n=new Set;this.plugins.forEach((r,o)=>{this.walkDownDOM(e,i=>{o||this.cleanup(i);for(let s in i.dataset){let a=`${i.dataset[s]}`||"",u=a;if(!s.startsWith(r.name))continue;if(i.id.length===0&&(i.id=`${R}-${this.parentID}-${this.missingIDNext++}`),n.clear(),r.allowedTagRegexps){let d=i.tagName.toLowerCase();if(![...r.allowedTagRegexps].some(g=>d.match(g)))throw F}let m=s.slice(r.name.length),[l,...c]=m.split(".");if(r.mustHaveEmptyKey&&l.length>0)throw h;if(r.mustNotEmptyKey&&l.length===0)throw h;l.length&&(l=l[0].toLowerCase()+l.slice(1));let f=c.map(d=>{let[p,...g]=d.split("_");return{label:p,args:g}});if(r.allowedModifiers){for(let d of f)if(!r.allowedModifiers.has(d.label))throw F}let S=new Map;for(let d of f)S.set(d.label,d.args);if(r.mustHaveEmptyExpression&&u.length)throw h;if(r.mustNotEmptyExpression&&!u.length)throw h;let A=/;|\n/;r.removeNewLines&&(u=u.split(`
`).map(d=>d.trim()).join(" "));let v=[...r.preprocessors?.pre||[],...this.preprocessors,...r.preprocessors?.post||[]];for(let d of v){if(n.has(d))continue;n.add(d);let p=u.split(A),g=[];p.forEach(T=>{let _=T,P=[..._.matchAll(d.regexp)];if(P.length)for(let N of P){if(!N.groups)continue;let{groups:L}=N,{whole:D}=L;_=_.replace(D,d.replacer(L))}g.push(_)}),u=g.join("; ")}let E={store:()=>this.store,mergeSignals:this.mergeSignals.bind(this),upsertSignal:this.upsertSignal.bind(this),removeSignals:this.removeSignals.bind(this),applyPlugins:this.applyPlugins.bind(this),cleanup:this.cleanup.bind(this),walkSignals:this.walkSignals.bind(this),actions:this.actions,reactivity:this.reactivity,el:i,rawKey:s,key:l,rawExpression:a,expression:u,expressionFn:()=>{throw le},modifiers:S};if(!r.bypassExpressionFunctionCreation?.(E)&&!r.mustHaveEmptyExpression&&u.length){let d=u.split(A).map(T=>T.trim()).filter(T=>T.length);d[d.length-1]=`return ${d[d.length-1]}`;let p=d.map(T=>`  ${T}`).join(`;
`),g=`
  try {
    const _datastarExpression = () => {
  ${p}
    }
    const _datastarReturnVal = _datastarExpression()
    return _datastarReturnVal
  } catch (e) {
   const msg = \`
  Error evaluating Datastar expression:
  ${p.replaceAll("`","\\`")}

  Error: \${e.message}

  Check if the expression is valid before raising an issue.
  \`.trim()
   console.error(msg)
   debugger
  }
              `;try{let T=r.argumentNames||[],_=new Function("ctx",...T,g);E.expressionFn=_}catch(T){let _=new Error(`${T}
with
${g}`);console.error(_);debugger}}let y=r.onLoad(E);y&&(this.removals.has(i)||this.removals.set(i,{id:i.id,set:new Set}),this.removals.get(i).set.add(y))}})})}walkSignalsStore(e,n){let r=Object.keys(e);for(let o=0;o<r.length;o++){let i=r[o],s=e[i],a=s instanceof w,u=typeof s=="object"&&Object.keys(s).length>0;if(a){n(i,s);continue}u&&this.walkSignalsStore(s,n)}}walkSignals(e){this.walkSignalsStore(this.store,e)}walkDownDOM(e,n,r=0){if(!e)return;let o=et(e);if(o)for(n(o),r=0,e=e.firstElementChild;e;)this.walkDownDOM(e,n,r++),e=e.nextElementSibling}};var ct=new ge;ct.load(Ze,Xe,Ke,Ue,Ge);var ft=ct;async function mt(t,e){let n=t.getReader(),r;for(;!(r=await n.read()).done;)e(r.value)}function dt(t){let e,n,r,o=!1;return function(s){e===void 0?(e=s,n=0,r=-1):e=Nn(e,s);let a=e.length,u=0;for(;n<a;){o&&(e[n]===10&&(u=++n),o=!1);let m=-1;for(;n<a&&m===-1;++n)switch(e[n]){case 58:r===-1&&(r=n-u);break;case 13:o=!0;case 10:m=n;break}if(m===-1)break;t(e.subarray(u,m),r),u=n,r=-1}u===a?e=void 0:u!==0&&(e=e.subarray(u),n-=u)}}function gt(t,e,n){let r=pt(),o=new TextDecoder;return function(s,a){if(s.length===0)n?.(r),r=pt();else if(a>0){let u=o.decode(s.subarray(0,a)),m=a+(s[a+1]===32?2:1),l=o.decode(s.subarray(m));switch(u){case"data":r.data=r.data?r.data+`
`+l:l;break;case"event":r.event=l;break;case"id":t(r.id=l);break;case"retry":let c=parseInt(l,10);isNaN(c)||e(r.retry=c);break}}}}function Nn(t,e){let n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function pt(){return{data:"",event:"",id:"",retry:void 0}}var St="text/event-stream",On=1e3,ht="last-event-id";function Oe(t,{signal:e,headers:n,onopen:r,onmessage:o,onclose:i,onerror:s,openWhenHidden:a,fetch:u,retryScaler:m=2,retryMaxWaitMs:l=3e4,retryMaxCount:c=10,...f}){return new Promise((S,A)=>{let v=0,E={...n};E.accept||(E.accept=St);let y;function d(){y.abort(),document.hidden||N()}a||document.addEventListener("visibilitychange",d);let p=On,g=0;function T(){document.removeEventListener("visibilitychange",d),window.clearTimeout(g),y.abort()}e?.addEventListener("abort",()=>{T(),S()});let _=u??window.fetch,P=r??function(){};async function N(){y=new AbortController;try{let L=await _(t,{...f,headers:E,signal:y.signal});await P(L),await mt(L.body,dt(gt(D=>{D?E[ht]=D:delete E[ht]},D=>{p=D},o))),i?.(),T(),S()}catch(L){if(!y.signal.aborted)try{let D=s?.(L)??p;window.clearTimeout(g),g=window.setTimeout(N,D),p*=m,p=Math.min(p,l),v++,v>=c?(T(),A(Qe)):console.error(`Datastar failed to reach ${f.method}:${t.toString()} retry in ${D}ms`)}catch(D){T(),A(D)}}}N()})}var J=`${R}-sse`,ke=`${R}-settling`,B=`${R}-swapping`,he="started",Se="finished";function k(t,e){document.addEventListener(J,n=>{if(n.detail.type!=t)return;let{argsRaw:r}=n.detail;e(r)})}var Et=t=>`${t}`.includes("text/event-stream");function Ie(t,e){document.dispatchEvent(new CustomEvent(J,{detail:{type:t,argsRaw:e}}))}function I(t){return async(e,n,r)=>{if(!n?.length)throw h;let{onlyRemoteSignals:o,headers:i}=Object.assign({onlyRemoteSignals:!0,headers:{CONTENT_TYPE:"application/json",DATASTAR_REQUEST:"true"}},r),s=e.store().value,a=Object.assign({},s);o&&(a=$(a));let u=JSON.stringify(a),{el:{id:m}}=e;Ie(he,{elID:m});let l=new URL(n,window.location.origin);t=t.toUpperCase();let c={method:t,headers:i,onmessage:f=>{if(!f.event.startsWith(R))return;let S=f.event,A={},v=f.data.split(`
`);for(let y of v){let d=y.indexOf(" "),p=y.slice(0,d),g=A[p];g||(g=[],A[p]=g);let T=y.slice(d+1).trim();g.push(T)}let E={};for(let[y,d]of Object.entries(A))E[y]=d.join(`
`);Ie(S,E)},onerror:f=>{if(Et(f))throw f;f&&console.error(f.message)},onclose:()=>{Ie(Se,{elID:m})}};if(t==="GET"){let f=new URLSearchParams(l.search);f.append(R,u),l.search=f.toString()}else c.body=u;try{let f=l.toString();await Oe(f,c)}catch(f){if(!Et(f))throw f}}}var yt={pluginType:"action",name:"delete",method:I("delete")};var bt={pluginType:"action",name:"get",method:I("get")};var vt={pluginType:"action",name:"patch",method:I("patch")};var Tt={pluginType:"action",name:"post",method:I("post")};var At={pluginType:"action",name:"put",method:I("put")};var _t={pluginType:"action",name:"clipboard",method:(t,e)=>{if(!navigator.clipboard)throw F;navigator.clipboard.writeText(e)}};var wt={pluginType:"action",name:"setAll",method:(t,e,n)=>{let r=new RegExp(e);t.walkSignals((o,i)=>r.test(o)&&(i.value=n))}};var Rt={pluginType:"action",name:"toggleAll",method:(t,e)=>{let n=new RegExp(e);t.walkSignals((r,o)=>n.test(r)&&(o.value=!o.value))}};var xt={pluginType:"action",name:"clampFit",method:(t,e,n,r,o,i)=>Math.max(o,Math.min(i,(e-n)/(r-n)*(i-o)+o))};var Dt={pluginType:"action",name:"clampFitInt",method:(t,e,n,r,o,i)=>Math.round(Math.max(o,Math.min(i,(e-n)/(r-n)*(i-o)+o)))};var Pt={pluginType:"action",name:"fit",method:(t,e,n,r,o,i)=>(e-n)/(r-n)*(i-o)+o};var Lt={pluginType:"action",name:"fitInt",method:(t,e,n,r,o,i)=>Math.round((e-n)/(r-n)*(i-o)+o)};var kn=`${R}-indicator`,xo=`${kn}-loading`,Mt={pluginType:"attribute",name:"indicator",mustHaveEmptyKey:!0,onLoad:t=>{let{expression:e,upsertSignal:n,el:r}=t;if(ze(r))throw C;let i=n(e,!1),s=a=>{let{type:u,argsRaw:{elID:m}}=a.detail;if(m===r.id)switch(u){case he:i.value=!0;break;case Se:i.value=!1;break}};return document.addEventListener(J,s),()=>{document.removeEventListener(J,s)}}};var Ee=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,n)=>(n?"-":"")+e.toLowerCase()),H=t=>t.trim()==="true";var Nt={pluginType:"attribute",name:"bind",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:t=>t.reactivity.effect(async()=>{let e=Ee(t.key),n=t.expressionFn(t),r;typeof n=="string"?r=n:r=JSON.stringify(n),!r||r==="false"||r==="null"||r==="undefined"?t.el.removeAttribute(e):t.el.setAttribute(e,r)})};var Ot={pluginType:"attribute",name:"class",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:t=>t.reactivity.effect(()=>{let e=t.expressionFn(t);for(let[n,r]of Object.entries(e)){let o=n.split(" ");r?t.el.classList.add(...o):t.el.classList.remove(...o)}})};var In=/^data:(?<mime>[^;]+);base64,(?<contents>.*)$/,ye=["change","input","keydown"],kt={pluginType:"attribute",name:"model",mustHaveEmptyKey:!0,onLoad:t=>{let{el:e,expression:n,upsertSignal:r}=t,o=n;if(typeof o!="string")throw h;let i=e.tagName.toLowerCase(),s="",a=i.includes("input"),u=e.getAttribute("type"),m=i.includes("checkbox")||a&&u==="checkbox";m&&(s=!1);let l=i.includes("select"),c=i.includes("radio")||a&&u==="radio",f=a&&u==="file";c&&(e.getAttribute("name")?.length||e.setAttribute("name",o));let S=r(o,s),A=()=>{let p="value"in e,g=S.value,T=`${g}`;if(m||c){let _=e;m?_.checked=g:c&&(_.checked=T===_.value)}else if(!f)if(l){let _=e;_.multiple?Array.from(_.options).forEach(P=>{P?.disabled||(P.selected=g.includes(P.value))}):_.value=T}else p?e.value=T:e.setAttribute("value",T)},v=t.reactivity.effect(A),E=async()=>{if(f){let T=[...e?.files||[]],_=[],P=[],N=[];await Promise.all(T.map(je=>new Promise(An=>{let z=new FileReader;z.onload=()=>{if(typeof z.result!="string")throw h;let Re=z.result.match(In);if(!Re?.groups)throw h;_.push(Re.groups.contents),P.push(Re.groups.mime),N.push(je.name)},z.onloadend=()=>An(void 0),z.readAsDataURL(je)}))),S.value=_;let L=t.store(),D=`${o}Mimes`,Be=`${o}Names`;D in L&&(L[`${D}`].value=P),Be in L&&(L[`${Be}`].value=N);return}let p=S.value,g=e||e;if(typeof p=="number")S.value=Number(g.value||g.getAttribute("value"));else if(typeof p=="string")S.value=g.value||g.getAttribute("value")||"";else if(typeof p=="boolean")m?S.value=g.checked||g.getAttribute("checked")==="true":S.value=!!(g.value||g.getAttribute("value"));else if(!(typeof p>"u"))if(typeof p=="bigint")S.value=BigInt(g.value||g.getAttribute("value")||"0");else if(Array.isArray(p)){if(l){let P=[...e.selectedOptions].map(N=>N.value);S.value=P}else S.value=JSON.parse(g.value).split(",");console.log(g.value)}else throw le},y=e.tagName.split("-");if(y.length>1){let p=y[0].toLowerCase();ye.forEach(g=>{ye.push(`${p}-${g}`)})}return ye.forEach(p=>e.addEventListener(p,E)),()=>{v(),ye.forEach(p=>e.removeEventListener(p,E))}}};function Ce(t){if(!t||t?.length===0)return 0;for(let e of t){if(e.endsWith("ms"))return Number(e.replace("ms",""));if(e.endsWith("s"))return Number(e.replace("s",""))*1e3;try{return parseFloat(e)}catch{}}return 0}function re(t,e,n=!1){return t?t.includes(e)||n:!1}function It(t,e,n=!1,r=!0){let o=-1,i=()=>o&&clearTimeout(o);return function(...a){i(),n&&!o&&t(...a),o=setTimeout(()=>{r&&t(...a),i()},e)}}function Ct(t,e,n=!0,r=!1){let o=!1;return function(...s){o||(n&&t(...s),o=!0,setTimeout(()=>{o=!1,r&&t(...s)},e))}}var Cn=new Set(["window","once","passive","capture","debounce","throttle","remote","outside"]),Ft="",Ht={pluginType:"attribute",name:"on",mustNotEmptyKey:!0,mustNotEmptyExpression:!0,argumentNames:["evt"],onLoad:t=>{let{el:e,key:n,expressionFn:r}=t,o=t.el;t.modifiers.get("window")&&(o=window);let i=c=>{r(t,c)},s=t.modifiers.get("debounce");if(s){let c=Ce(s),f=re(s,"leading",!1),S=re(s,"noTrail",!0);i=It(i,c,f,S)}let a=t.modifiers.get("throttle");if(a){let c=Ce(a),f=re(a,"noLead",!0),S=re(a,"noTrail",!1);i=Ct(i,c,f,S)}let u={capture:!0,passive:!1,once:!1};t.modifiers.has("capture")||(u.capture=!1),t.modifiers.has("passive")&&(u.passive=!0),t.modifiers.has("once")&&(u.once=!0),[...t.modifiers.keys()].filter(c=>!Cn.has(c)).forEach(c=>{let f=t.modifiers.get(c)||[],S=i;i=()=>{let v=event,E=v[c],y;if(typeof E=="function")y=E(...f);else if(typeof E=="boolean")y=E;else if(typeof E=="string"){let d=E.toLowerCase().trim(),p=f.join("").toLowerCase().trim();y=d===p}else throw h;y&&S(v)}});let l=Ee(n).toLowerCase();switch(l){case"load":return i(),delete t.el.dataset.onLoad,()=>{};case"raf":let c,f=()=>{i(),c=requestAnimationFrame(f)};return c=requestAnimationFrame(f),()=>{c&&cancelAnimationFrame(c)};case"store-change":return t.reactivity.effect(()=>{let v=t.store().value;t.modifiers.has("remote")&&(v=$(v));let E=JSON.stringify(v);Ft!==E&&(Ft=E,i())});default:if(t.modifiers.has("outside")){o=document;let A=i,v=!1;i=y=>{let d=y?.target;if(!d)return;let p=e.id===d.id;p&&v&&(v=!1),!p&&!v&&(A(y),v=!0)}}return o.addEventListener(l,i,u),()=>{o.removeEventListener(l,i)}}}};var Vt={pluginType:"attribute",name:"ref",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,bypassExpressionFunctionCreation:()=>!0,onLoad:t=>{let e=t.expression;return t.upsertSignal(e,t.el),()=>{t.removeSignals(e)}}};var $t={pluginType:"attribute",name:"text",mustHaveEmptyKey:!0,onLoad:t=>{let{el:e,expressionFn:n}=t;if(!(e instanceof HTMLElement))throw h;return t.reactivity.effect(()=>{let r=n(t);e.textContent=`${r}`})}};var Wt={pluginType:"attribute",name:"persist",allowedModifiers:new Set(["local","session","remote"]),onLoad:t=>{let e=t.key||R,n=t.expression,r=new Set;if(n.trim()!==""){let l=t.expressionFn(t).split(" ");for(let c of l)r.add(c)}let o="",i=t.modifiers.has("session")?"session":"local",s=t.modifiers.has("remote"),a=m=>{let l=t.store();if(s&&(l=$(l)),r.size>0){let f={};for(let S of r){let A=S.split("."),v=f,E=l;for(let d=0;d<A.length-1;d++){let p=A[d];v[p]||(v[p]={}),v=v[p],E=E[p]}let y=A[A.length-1];v[y]=E[y]}l=f}let c=JSON.stringify(l);c!==o&&(i==="session"?window.sessionStorage.setItem(e,c):window.localStorage.setItem(e,c),o=c)};window.addEventListener(xe,a);let u;if(i==="session"?u=window.sessionStorage.getItem(e):u=window.localStorage.getItem(e),u){let m=JSON.parse(u);for(let l in m)t.upsertSignal(l,m[l])}return()=>{window.removeEventListener(xe,a)}}};var Bt={pluginType:"attribute",name:"replaceUrl",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:t=>t.reactivity.effect(()=>{let e=t.expressionFn(t),n=window.location.href,r=new URL(e,n).toString();window.history.replaceState({},"",r)})};var jt="once",Gt="half",Ut="full",Kt={pluginType:"attribute",name:"intersects",allowedModifiers:new Set([jt,Gt,Ut]),mustHaveEmptyKey:!0,onLoad:t=>{let{modifiers:e}=t,n={threshold:0};e.has(Ut)?n.threshold=1:e.has(Gt)&&(n.threshold=.5);let r=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&(t.expressionFn(t),e.has(jt)&&(r.disconnect(),delete t.el.dataset[t.rawKey]))})},n);return r.observe(t.el),()=>r.disconnect()}};var be="smooth",Fe="instant",He="auto",qt="hstart",Jt="hcenter",Yt="hend",zt="hnearest",Zt="vstart",Xt="vcenter",Qt="vend",en="vnearest",Fn="focus",ve="center",tn="start",nn="end",rn="nearest",on={pluginType:"attribute",name:"scrollIntoView",mustHaveEmptyKey:!0,mustHaveEmptyExpression:!0,allowedModifiers:new Set([be,Fe,He,qt,Jt,Yt,zt,Zt,Xt,Qt,en,Fn]),onLoad:({el:t,modifiers:e,rawKey:n})=>{t.tabIndex||t.setAttribute("tabindex","0");let r={behavior:be,block:ve,inline:ve};return e.has(be)&&(r.behavior=be),e.has(Fe)&&(r.behavior=Fe),e.has(He)&&(r.behavior=He),e.has(qt)&&(r.inline=tn),e.has(Jt)&&(r.inline=ve),e.has(Yt)&&(r.inline=nn),e.has(zt)&&(r.inline=rn),e.has(Zt)&&(r.block=tn),e.has(Xt)&&(r.block=ve),e.has(Qt)&&(r.block=nn),e.has(en)&&(r.block=rn),tt(t,r,e.has("focus")),delete t.dataset[n],()=>{}}};var sn={pluginType:"attribute",name:"show",mustHaveEmptyKey:!0,mustNotEmptyExpression:!0,onLoad:t=>t.reactivity.effect(async()=>{t.expressionFn(t)?t.el.style.display==="none"&&t.el.style.removeProperty("display"):t.el.style.setProperty("display","none")})};var oe=document,Y=!!oe.startViewTransition;var Ve="view-transition",an={pluginType:"attribute",name:Ve,onGlobalInit(){let t=!1;if(document.head.childNodes.forEach(e=>{e instanceof HTMLMetaElement&&e.name===Ve&&(t=!0)}),!t){let e=document.createElement("meta");e.name=Ve,e.content="same-origin",document.head.appendChild(e)}},onLoad:t=>{if(!Y){console.error("Browser does not support view transitions");return}return t.reactivity.effect(()=>{let{el:e,expressionFn:n}=t,r=n(t);if(!r)return;let o=e.style;o.viewTransitionName=r})}};var ln={pluginType:"watcher",name:x.ExecuteScript,onGlobalInit:async()=>{k(x.ExecuteScript,({autoRemove:t=`${!0}`,attributes:e=qe,script:n})=>{let r=H(t);if(!n?.length)throw h;let o=document.createElement("script");e.split(`
`).forEach(i=>{let s=i.indexOf(" "),a=s?i.slice(0,s):i,u=s?i.slice(s):"";o.setAttribute(a.trim(),u.trim())}),o.text=n,document.head.appendChild(o),r&&o.remove()})}};var Ae=new WeakSet;function pn(t,e,n={}){t instanceof Document&&(t=t.documentElement);let r;typeof e=="string"?r=jn(e):r=e;let o=Gn(r),i=$n(t,o,n);return mn(t,o,i)}function mn(t,e,n){if(n.head.block){let r=t.querySelector("head"),o=e.querySelector("head");if(r&&o){let i=gn(o,r,n);Promise.all(i).then(()=>{mn(t,e,Object.assign(n,{head:{block:!1,ignore:!0}}))});return}}if(n.morphStyle==="innerHTML")return dn(e,t,n),t.children;if(n.morphStyle==="outerHTML"||n.morphStyle==null){let r=Kn(e,t,n);if(!r)throw C;let o=r?.previousSibling,i=r?.nextSibling,s=_e(t,r,n);return r?Un(o,s,i):[]}else throw h}function _e(t,e,n){if(!(n.ignoreActive&&t===document.activeElement))if(e==null){if(n.callbacks.beforeNodeRemoved(t)===!1)return;t.remove(),n.callbacks.afterNodeRemoved(t);return}else{if(we(t,e))return n.callbacks.beforeNodeMorphed(t,e)===!1?void 0:(t instanceof HTMLHeadElement&&n.head.ignore||(e instanceof HTMLHeadElement&&t instanceof HTMLHeadElement&&n.head.style!==M.Morph?gn(e,t,n):(Vn(e,t),dn(e,t,n))),n.callbacks.afterNodeMorphed(t,e),t);if(n.callbacks.beforeNodeRemoved(t)===!1||n.callbacks.beforeNodeAdded(e)===!1)return;if(!t.parentElement)throw h;return t.parentElement.replaceChild(e,t),n.callbacks.afterNodeAdded(e),n.callbacks.afterNodeRemoved(t),e}}function dn(t,e,n){let r=t.firstChild,o=e.firstChild,i;for(;r;){if(i=r,r=i.nextSibling,o==null){if(n.callbacks.beforeNodeAdded(i)===!1)return;e.appendChild(i),n.callbacks.afterNodeAdded(i),j(n,i);continue}if(hn(i,o,n)){_e(o,i,n),o=o.nextSibling,j(n,i);continue}let s=Wn(t,e,i,o,n);if(s){o=un(o,s,n),_e(s,i,n),j(n,i);continue}let a=Bn(t,i,o,n);if(a){o=un(o,a,n),_e(a,i,n),j(n,i);continue}if(n.callbacks.beforeNodeAdded(i)===!1)return;e.insertBefore(i,o),n.callbacks.afterNodeAdded(i),j(n,i)}for(;o!==null;){let s=o;o=o.nextSibling,Sn(s,n)}}function Vn(t,e){let n=t.nodeType;if(n===1){for(let r of t.attributes)e.getAttribute(r.name)!==r.value&&e.setAttribute(r.name,r.value);for(let r of e.attributes)t.hasAttribute(r.name)||e.removeAttribute(r.name)}if((n===Node.COMMENT_NODE||n===Node.TEXT_NODE)&&e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue),t instanceof HTMLInputElement&&e instanceof HTMLInputElement&&t.type!=="file")e.value=t.value||"",Te(t,e,"value"),Te(t,e,"checked"),Te(t,e,"disabled");else if(t instanceof HTMLOptionElement)Te(t,e,"selected");else if(t instanceof HTMLTextAreaElement&&e instanceof HTMLTextAreaElement){let r=t.value,o=e.value;r!==o&&(e.value=r),e.firstChild&&e.firstChild.nodeValue!==r&&(e.firstChild.nodeValue=r)}}function Te(t,e,n){let r=t.getAttribute(n),o=e.getAttribute(n);r!==o&&(r?e.setAttribute(n,r):e.removeAttribute(n))}function gn(t,e,n){let r=[],o=[],i=[],s=[],a=n.head.style,u=new Map;for(let l of t.children)u.set(l.outerHTML,l);for(let l of e.children){let c=u.has(l.outerHTML),f=n.head.shouldReAppend(l),S=n.head.shouldPreserve(l);c||S?f?o.push(l):(u.delete(l.outerHTML),i.push(l)):a===M.Append?f&&(o.push(l),s.push(l)):n.head.shouldRemove(l)!==!1&&o.push(l)}s.push(...u.values());let m=[];for(let l of s){let c=document.createRange().createContextualFragment(l.outerHTML).firstChild;if(!c)throw h;if(n.callbacks.beforeNodeAdded(c)){if(c.hasAttribute("href")||c.hasAttribute("src")){let f,S=new Promise(A=>{f=A});c.addEventListener("load",function(){f(void 0)}),m.push(S)}e.appendChild(c),n.callbacks.afterNodeAdded(c),r.push(c)}}for(let l of o)n.callbacks.beforeNodeRemoved(l)!==!1&&(e.removeChild(l),n.callbacks.afterNodeRemoved(l));return n.head.afterHeadMorphed(e,{added:r,kept:i,removed:o}),m}function V(){}function $n(t,e,n){return{target:t,newContent:e,config:n,morphStyle:n.morphStyle,ignoreActive:n.ignoreActive,idMap:zn(t,e),deadIds:new Set,callbacks:Object.assign({beforeNodeAdded:V,afterNodeAdded:V,beforeNodeMorphed:V,afterNodeMorphed:V,beforeNodeRemoved:V,afterNodeRemoved:V},n.callbacks),head:Object.assign({style:"merge",shouldPreserve:r=>r.getAttribute("im-preserve")==="true",shouldReAppend:r=>r.getAttribute("im-re-append")==="true",shouldRemove:V,afterHeadMorphed:V},n.head)}}function hn(t,e,n){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName?t?.id?.length&&t.id===e.id?!0:ie(n,t,e)>0:!1}function we(t,e){return!t||!e?!1:t.nodeType===e.nodeType&&t.tagName===e.tagName}function un(t,e,n){for(;t!==e;){let r=t;if(t=t?.nextSibling,!r)throw h;Sn(r,n)}return j(n,e),e.nextSibling}function Wn(t,e,n,r,o){let i=ie(o,n,e),s=null;if(i>0){s=r;let a=0;for(;s!=null;){if(hn(n,s,o))return s;if(a+=ie(o,s,t),a>i)return null;s=s.nextSibling}}return s}function Bn(t,e,n,r){let o=n,i=e.nextSibling,s=0;for(;o&&i;){if(ie(r,o,t)>0)return null;if(we(e,o))return o;if(we(i,o)&&(s++,i=i.nextSibling,s>=2))return null;o=o.nextSibling}return o}var cn=new DOMParser;function jn(t){let e=t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");if(e.match(/<\/html>/)||e.match(/<\/head>/)||e.match(/<\/body>/)){let n=cn.parseFromString(t,"text/html");if(e.match(/<\/html>/))return Ae.add(n),n;{let r=n.firstChild;return r?(Ae.add(r),r):null}}else{let r=cn.parseFromString(`<body><template>${t}</template></body>`,"text/html").body.querySelector("template")?.content;if(!r)throw C;return Ae.add(r),r}}function Gn(t){if(t==null)return document.createElement("div");if(Ae.has(t))return t;if(t instanceof Node){let e=document.createElement("div");return e.append(t),e}else{let e=document.createElement("div");for(let n of[...t])e.append(n);return e}}function Un(t,e,n){let r=[],o=[];for(;t;)r.push(t),t=t.previousSibling;for(;r.length>0;){let i=r.pop();o.push(i),e?.parentElement?.insertBefore(i,e)}for(o.push(e);n;)r.push(n),o.push(n),n=n.nextSibling;for(;r.length;)e?.parentElement?.insertBefore(r.pop(),e.nextSibling);return o}function Kn(t,e,n){let r=t.firstChild,o=r,i=0;for(;r;){let s=qn(r,e,n);s>i&&(o=r,i=s),r=r.nextSibling}return o}function qn(t,e,n){return we(t,e)?.5+ie(n,t,e):0}function Sn(t,e){j(e,t),e.callbacks.beforeNodeRemoved(t)!==!1&&(t.remove(),e.callbacks.afterNodeRemoved(t))}function Jn(t,e){return!t.deadIds.has(e)}function Yn(t,e,n){return t.idMap.get(n)?.has(e)||!1}function j(t,e){let n=t.idMap.get(e);if(n)for(let r of n)t.deadIds.add(r)}function ie(t,e,n){let r=t.idMap.get(e);if(!r)return 0;let o=0;for(let i of r)Jn(t,i)&&Yn(t,i,n)&&++o;return o}function fn(t,e){let n=t.parentElement,r=t.querySelectorAll("[id]");for(let o of r){let i=o;for(;i!==n&&i;){let s=e.get(i);s==null&&(s=new Set,e.set(i,s)),s.add(o.id),i=i.parentElement}}}function zn(t,e){let n=new Map;return fn(t,n),fn(e,n),n}var yn={pluginType:"watcher",name:x.MergeFragments,onGlobalInit:async t=>{let e=document.createElement("template");k(x.MergeFragments,({fragments:n="<div></div>",selector:r="",mergeMode:o=Je,settleDuration:i=`${300}`,useViewTransition:s=`${!1}`})=>{let a=parseInt(i),u=H(s);e.innerHTML=n.trim(),[...e.content.children].forEach(l=>{if(!(l instanceof Element))throw h;let c=r||`#${l.getAttribute("id")}`,S=[...document.querySelectorAll(c)||[]];if(!S.length)throw h;Y&&u?oe.startViewTransition(()=>En(t,o,a,l,S)):En(t,o,a,l,S)})})}};function En(t,e,n,r,o){for(let i of o){i.classList.add(B);let s=i.outerHTML,a=i;switch(e){case M.Morph:let m=pn(a,r,{callbacks:{beforeNodeRemoved:(l,c)=>(t.cleanup(l),!0)}});if(!m?.length)throw h;a=m[0];break;case M.Inner:a.innerHTML=r.innerHTML;break;case M.Outer:a.replaceWith(r);break;case M.Prepend:a.prepend(r);break;case M.Append:a.append(r);break;case M.Before:a.before(r);break;case M.After:a.after(r);break;case M.UpsertAttributes:r.getAttributeNames().forEach(l=>{let c=r.getAttribute(l);a.setAttribute(l,c)});break;default:throw h}t.cleanup(a),a.classList.add(B),t.applyPlugins(document.body),setTimeout(()=>{i.classList.remove(B),a.classList.remove(B)},n);let u=a.outerHTML;s!==u&&(a.classList.add(ke),setTimeout(()=>{a.classList.remove(ke)},n))}}var bn={pluginType:"watcher",name:x.MergeSignals,onGlobalInit:async t=>{k(x.MergeSignals,({signals:e="{}",onlyIfMissing:n=`${!1}`})=>{let r=H(n),o=` return Object.assign({...ctx.store()}, ${e})`;try{let s=new Function("ctx",o)(t),a=se(t.store(),s,r);t.mergeSignals(a),t.applyPlugins(document.body)}catch(i){console.log(o),console.error(i);debugger}})}};var vn={pluginType:"watcher",name:x.RemoveFragments,onGlobalInit:async()=>{k(x.RemoveFragments,({selector:t,settleDuration:e=`${300}`,useViewTransition:n=`${!1}`})=>{if(!t.length)throw h;let r=parseInt(e),o=H(n),i=document.querySelectorAll(t),s=()=>{for(let a of i)a.classList.add(B);setTimeout(()=>{for(let a of i)a.remove()},r)};Y&&o?oe.startViewTransition(()=>s()):s()})}};var Tn={pluginType:"watcher",name:x.RemoveSignals,onGlobalInit:async t=>{k(x.RemoveSignals,({paths:e=""})=>{if(e=e.replaceAll(/\s+/g," "),!e?.length)throw h;let n=e.split(" ");t.removeSignals(...n)})}};ft.load(kt,Vt,Mt,Nt,Bt,Ot,Ht,$t,Wt,Kt,on,sn,an,yt,bt,vt,Tt,At,_t,wt,Rt,xt,Dt,Pt,Lt,yn,bn,vn,Tn,ln);})();
//# sourceMappingURL=datastar.js.map
