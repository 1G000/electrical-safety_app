import{aF as b}from"./index-BjIKEqiH.js";function d(e,t){if(!b)return;const n=t.modifiers||{},r=t.value,{handler:i,options:v}=typeof r=="object"?r:{handler:r,options:{}},u=new IntersectionObserver(function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const s=e._observe?.[t.instance.$.uid];if(!s)return;const o=c.some(m=>m.isIntersecting);i&&(!n.quiet||s.init)&&(!n.once||o||s.init)&&i(o,c,f),o&&n.once?a(e,t):s.init=!0},v);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:u},u.observe(e)}function a(e,t){const n=e._observe?.[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const I={mounted:d,unmounted:a};export{I};
