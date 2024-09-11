import{p as U,m as Z,g as j,f as g,u as z,c as l,ad as ee,af as ae,a2 as G,ab as J,b as fe,d as ve,e as me,al as he,r as k,t as ge,w as ye,i as be,L as E,y as W,X as xe,aG as Ce,n as Ve,aH as _e,ae as we,aI as Pe,as as ne,aJ as Ie}from"./index-BjIKEqiH.js";import{m as Fe,c as Re,M as pe,b as Se}from"./transition-D3RRR1gk.js";import{V as Be,m as ke,a as ie,b as Te,c as Ae,d as le}from"./VInput-B-AyeEKI.js";import{b as De,e as Oe,u as $e,f as Le,V as Me}from"./elevation-ClR-Unkx.js";import{t as Ee,v as We,w as Ne}from"./LargeButton-B99SLnUj.js";import{I as Ue}from"./index-BKArx8Ql.js";class N{constructor(i){let{x:a,y:o,width:t,height:n}=i;this.x=a,this.y=o,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ot(e,i){return{x:{before:Math.max(0,i.left-e.left),after:Math.max(0,e.right-i.right)},y:{before:Math.max(0,i.top-e.top),after:Math.max(0,e.bottom-i.bottom)}}}function rt(e){return Array.isArray(e)?new N({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function je(e){const i=e.getBoundingClientRect(),a=getComputedStyle(e),o=a.transform;if(o){let t,n,r,s,c;if(o.startsWith("matrix3d("))t=o.slice(9,-1).split(/, /),n=+t[0],r=+t[5],s=+t[12],c=+t[13];else if(o.startsWith("matrix("))t=o.slice(7,-1).split(/, /),n=+t[0],r=+t[3],s=+t[4],c=+t[5];else return new N(i);const d=a.transformOrigin,v=i.x-s-(1-n)*parseFloat(d),y=i.y-c-(1-r)*parseFloat(d.slice(d.indexOf(" ")+1)),w=n?i.width/n:e.offsetWidth+1,R=r?i.height/r:e.offsetHeight+1;return new N({x:v,y,width:w,height:R})}else return new N(i)}function ze(e,i,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(i,a)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(t=>{o.onfinish=()=>{t(o)}})),o}const Ke="cubic-bezier(0.4, 0, 0.2, 1)",st="cubic-bezier(0.0, 0, 0.2, 1)",ut="cubic-bezier(0.4, 0, 1, 1)",qe=U({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Z(),...Fe({transition:{component:Re}})},"VCounter"),He=j()({name:"VCounter",functional:!0,props:qe(),setup(e,i){let{slots:a}=i;const o=g(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return z(()=>l(pe,{transition:e.transition},{default:()=>[ee(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[ae,e.active]])]})),{}}}),Xe=U({floating:Boolean,...Z()},"VFieldLabel"),M=j()({name:"VFieldLabel",props:Xe(),setup(e,i){let{slots:a}=i;return z(()=>l(Be,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Ge=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],oe=U({appendInnerIcon:G,bgColor:String,clearable:Boolean,clearIcon:{type:G,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:G,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ge.includes(e)},"onClick:clear":J(),"onClick:appendInner":J(),"onClick:prependInner":J(),...Z(),...Ee(),...De(),...fe()},"VField"),re=j()({name:"VField",inheritAttrs:!1,props:{id:String,...ke(),...oe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const{themeClasses:n}=ve(e),{loaderClasses:r}=We(e),{focusClasses:s,isFocused:c,focus:d,blur:v}=ie(e),{InputIcon:y}=Te(e),{roundedClasses:w}=Oe(e),{rtlClasses:R}=me(),I=g(()=>e.dirty||e.active),C=g(()=>!e.singleLine&&!!(e.label||t.label)),K=he(),m=g(()=>e.id||`input-${K}`),q=g(()=>`${m.value}-messages`),T=k(),p=k(),A=k(),u=g(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:b,backgroundColorStyles:S}=$e(ge(e,"bgColor")),{textColorClasses:D,textColorStyles:H}=Le(g(()=>e.error||e.disabled?void 0:I.value&&c.value?e.color:e.baseColor));ye(I,f=>{if(C.value){const x=T.value.$el,V=p.value.$el;requestAnimationFrame(()=>{const _=je(x),h=V.getBoundingClientRect(),B=h.x-_.x,O=h.y-_.y-(_.height/2-h.height/2),$=h.width/.75,L=Math.abs($-_.width)>1?{maxWidth:be($)}:void 0,se=getComputedStyle(x),te=getComputedStyle(V),ue=parseFloat(se.transitionDuration)*1e3||150,ce=parseFloat(te.getPropertyValue("--v-field-label-scale")),de=te.getPropertyValue("color");x.style.visibility="visible",V.style.visibility="hidden",ze(x,{transform:`translate(${B}px, ${O}px) scale(${ce})`,color:de,...L},{duration:ue,easing:Ke,direction:f?"normal":"reverse"}).finished.then(()=>{x.style.removeProperty("visibility"),V.style.removeProperty("visibility")})})}},{flush:"post"});const F=g(()=>({isActive:I,isFocused:c,controlRef:A,blur:v,focus:d}));function X(f){f.target!==document.activeElement&&f.preventDefault()}function P(f){f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),f.stopPropagation(),e["onClick:clear"]?.(new MouseEvent("click")))}return z(()=>{const f=e.variant==="outlined",x=!!(t["prepend-inner"]||e.prependInnerIcon),V=!!(e.clearable||t.clear),_=!!(t["append-inner"]||e.appendInnerIcon||V),h=()=>t.label?t.label({...F.value,label:e.label,props:{for:m.value}}):e.label;return l("div",W({class:["v-field",{"v-field--active":I.value,"v-field--appended":_,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":x,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!h(),[`v-field--variant-${e.variant}`]:!0},n.value,b.value,s.value,r.value,w.value,R.value,e.class],style:[S.value,e.style],onClick:X},a),[l("div",{class:"v-field__overlay"},null),l(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),x&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(y,{key:"prepend-icon",name:"prependInner"},null),t["prepend-inner"]?.(F.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&C.value&&l(M,{key:"floating-label",ref:p,class:[D.value],floating:!0,for:m.value,style:H.value},{default:()=>[h()]}),l(M,{ref:T,for:m.value},{default:()=>[h()]}),t.default?.({...F.value,props:{id:m.value,class:"v-field__input","aria-describedby":q.value},focus:d,blur:v})]),V&&l(Se,{key:"clear"},{default:()=>[ee(l("div",{class:"v-field__clearable",onMousedown:B=>{B.preventDefault(),B.stopPropagation()}},[l(Me,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...F.value,props:{onKeydown:P,onFocus:d,onBlur:v,onClick:e["onClick:clear"]}}):l(y,{name:"clear",onKeydown:P,onFocus:d,onBlur:v},null)]})]),[[ae,e.dirty]])]}),_&&l("div",{key:"append",class:"v-field__append-inner"},[t["append-inner"]?.(F.value),e.appendInnerIcon&&l(y,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",D.value],style:H.value},[f&&l(E,null,[l("div",{class:"v-field__outline__start"},null),C.value&&l("div",{class:"v-field__outline__notch"},[l(M,{ref:p,floating:!0,for:m.value},{default:()=>[h()]})]),l("div",{class:"v-field__outline__end"},null)]),u.value&&C.value&&l(M,{ref:p,floating:!0,for:m.value},{default:()=>[h()]})])])}),{controlRef:A}}});function Je(e){const i=Object.keys(re.props).filter(a=>!xe(a)&&a!=="class"&&a!=="style");return Ce(e,i)}const Y=Symbol("Forwarded refs");function Q(e,i){let a=e;for(;a;){const o=Reflect.getOwnPropertyDescriptor(a,i);if(o)return o;a=Object.getPrototypeOf(a)}}function Ye(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return e[Y]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const s=Reflect.get(r.value,n);return typeof s=="function"?s.bind(r.value):s}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,n))return Reflect.set(s.value,n,r);return!1},getOwnPropertyDescriptor(t,n){const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const s of a){if(!s.value)continue;const c=Q(s.value,n)??("_"in s.value?Q(s.value._?.setupState,n):void 0);if(c)return c}for(const s of a){const c=s.value&&s.value[Y];if(!c)continue;const d=c.slice();for(;d.length;){const v=d.shift(),y=Q(v.value,n);if(y)return y;const w=v.value&&v.value[Y];w&&d.push(...w)}}}}})}const Qe=["color","file","time","date","datetime-local","week","month"],Ze=U({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ae(),...oe()},"VTextField"),ct=j()({name:"VTextField",directives:{Intersect:Ue},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const n=Ve(e,"modelValue"),{isFocused:r,focus:s,blur:c}=ie(e),d=g(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),v=g(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),y=g(()=>["plain","underlined"].includes(e.variant));function w(u,b){!e.autofocus||!u||b[0].target?.focus?.()}const R=k(),I=k(),C=k(),K=g(()=>Qe.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function m(){C.value!==document.activeElement&&C.value?.focus(),r.value||s()}function q(u){o("mousedown:control",u),u.target!==C.value&&(m(),u.preventDefault())}function T(u){m(),o("click:control",u)}function p(u){u.stopPropagation(),m(),ne(()=>{n.value=null,Ie(e["onClick:clear"],u)})}function A(u){const b=u.target;if(n.value=b.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[b.selectionStart,b.selectionEnd];ne(()=>{b.selectionStart=S[0],b.selectionEnd=S[1]})}}return z(()=>{const u=!!(t.counter||e.counter!==!1&&e.counter!=null),b=!!(u||t.details),[S,D]=_e(a),{modelValue:H,...F}=le.filterProps(e),X=Je(e);return l(le,W({ref:R,modelValue:n.value,"onUpdate:modelValue":P=>n.value=P,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":y.value},e.class],style:e.style},S,F,{centerAffix:!y.value,focused:r.value}),{...t,default:P=>{let{id:f,isDisabled:x,isDirty:V,isReadonly:_,isValid:h}=P;return l(re,W({ref:I,onMousedown:q,onClick:T,"onClick:clear":p,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},X,{id:f.value,active:K.value||V.value,dirty:V.value||e.dirty,disabled:x.value,focused:r.value,error:h.value===!1}),{...t,default:B=>{let{props:{class:O,...$}}=B;const L=ee(l("input",W({ref:C,value:n.value,onInput:A,autofocus:e.autofocus,readonly:_.value,disabled:x.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:m,onBlur:c},$,D),null),[[we("intersect"),{handler:w},null,{once:!0}]]);return l(E,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:O,"data-no-activator":""},[t.default(),L]):Pe(L,{class:O}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:b?P=>l(E,null,[t.details?.(P),u&&l(E,null,[l("span",null,null),l(He,{active:e.persistentCounter||r.value,value:d.value,max:v.value,disabled:e.disabled},t.counter)])]):void 0})}),Ye({},R,I,C)}});export{N as B,ct as V,ze as a,ut as b,ot as c,st as d,Ye as f,rt as g,Ze as m,je as n,Ke as s};
