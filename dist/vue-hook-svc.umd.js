var S=Object.defineProperty;var h=(e,t,i)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var c=(e,t,i)=>(h(e,typeof t!="symbol"?t+"":t,i),i);(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue-demi"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e.VueHookSVC={},e.VueDemi))})(this,function(e,t){"use strict";function i(n){return JSON.parse(JSON.stringify(n))}class f{constructor(){c(this,"_defaultState",{});c(this,"state",{})}reset(){return Object.assign(this.state,i(this._defaultState)),this}}function r(n){const s=new n;return s._defaultState=i(s.state),s.state=t.reactive(s.state),s}const u=new Map;function d(n){return u.has(n)||u.set(n,r(n)),u.get(n)}function o(n,s=Symbol()){return function(){let a=t.inject(s,null);return a||(a=r(n),t.provide(s,a)),a}}const l={ServiceBase:f,createSingleton:d,createUseService:o};e.ServiceBase=f,e.createSingleton=d,e.createUseService=o,e.svc=l,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"});
