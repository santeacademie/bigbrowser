// ==UserScript==
// @name         @santeacademie/bigbrowser
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=fr
// @icon         https://assets.website-files.com/5fa997afa489c5171404c70c/60f7e0104650f1a66201de1d_favicon-32.png
// @include      http*://*
// ==/UserScript==
/*
 * @santeacademie/bigbrowser v1.0.0
 * https://github.com/santeacademie/bigbrowser
 *
 * Copyright (c) JRK (https://github.com/jr-k) and project contributors.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bigbrowser=e():t.bigbrowser=e()}(self,(function(){/******/
return(()=>{// webpackBootstrap
/******/var t={
/***/865:
/***/(t,e,r)=>{"use strict";r.r(e),
/* harmony export */r.d(e,{
/* harmony export */default:()=>d
/* harmony export */});
/* harmony import */var n=r(112);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function u(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=null;
/* harmony default export */const d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(u,t);var e,r,n,o=s(u);function u(){var t;a(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return p(f(t=o.call.apply(o,[this].concat(r))),"loaded",!1),p(f(t),"hashTryReachField","a9a1a17c4397010006c2aa550dca0cab13ed3419"),p(f(t),"run",(function(e){t._injectScript(),setTimeout((function(){t.launchTryReach()}),2e3)})),p(f(t),"_injectScript",(function(){var t=document.createElement("script");t.setAttribute("src","https://code.jquery.com/jquery.js"),document.getElementsByTagName("body")[0].appendChild(t),console.log(t)})),p(f(t),"launchTryReach",(function(){if(!0!==t.loaded){t.loaded=!0;var e=(// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
h=window.jQuery)("body");console.log(e),e.on("click",'td[data-field="'+t.hashTryReachField+'"].gridRow__cell:not(".gridRow__cell--editing") button',(function(){setTimeout((function(){t.addButtonToPopover()}),200)})),e.on("click",".sub-one-tryreach",(function(){t.subOneTryReach(h(f(t)).closest(".item"))})),e.on("click",".add-one-tryreach",(function(){t.addOneTryReach(h(f(t)).closest(".item"))}))}})),p(f(t),"addButtonToPopover",(function(){var e=h(".changeFieldValue."+t.hashTryReachField+" .item");e.find(".valueWrap").prepend('\n\t\t        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">\n\t\t            <button style="padding:5px 10px;cursor: pointer;" class="sub-one-tryreach">-1</button>\n\t\t            <button style="padding:5px 10px;cursor: pointer;" class="add-one-tryreach">+1</button>\n\t\t        </div>\n\t\t    '),e.find(".select2-container").hide(),e.find("select").removeClass("select2-offscreen")})),p(f(t),"subOneTryReach",(function(e){var r=e.find('select[name="'+t.hashTryReachField+'"]'),n=r.prop("selectedIndex");n>1&&r.prop("selectedIndex",n-1),r.trigger("change")})),p(f(t),"addOneTryReach",(function(e){var r=e.find('select[name="'+t.hashTryReachField+'"]'),n=r.prop("selectedIndex");n<r.find("option").length-1&&r.prop("selectedIndex",Math.min(n+1)),r.trigger("change")})),t}return e=u,r&&i(e.prototype,r),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(n.default);
/***/},
/***/530:
/***/(t,e,r)=>{"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),
/* harmony export */r.d(e,{
/* harmony export */default:()=>p
/* harmony export */});
/* harmony default export */const p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(f,t);var e,r,n,s=c(f);function f(){var t;i(this,f);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return l(u(t=s.call.apply(s,[this].concat(r))),"run",(function(t){var e=document.createElement("script");e.setAttribute("src","https://code.jquery.com/jquery.js"),document.getElementsByTagName("body")[0].appendChild(e);var r=!1;setTimeout((function(){!function(){if(!0===r)return;r=!0;var t=o("body");t.on("click",'td[data-field="'+n+'"].gridRow__cell:not(".gridRow__cell--editing") button',(function(){setTimeout((function(){var t;(t=o(".changeFieldValue."+n+" .item")).find(".valueWrap").prepend('\n\t\t        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">\n\t\t            <button style="padding:5px 10px;cursor: pointer;" class="sub-one-tryreach">-1</button>\n\t\t            <button style="padding:5px 10px;cursor: pointer;" class="add-one-tryreach">+1</button>\n\t\t        </div>\n\t\t    '),t.find(".select2-container").hide(),t.find("select").removeClass("select2-offscreen")}),200)})),t.on("click",".sub-one-tryreach",(function(){!function(t){var e=t.find('select[name="'+n+'"]'),r=e.prop("selectedIndex");r>1&&e.prop("selectedIndex",r-1);e.trigger("change")}(o(this).closest(".item"))})),t.on("click",".add-one-tryreach",(function(){!function(t){var e=t.find('select[name="'+n+'"]'),r=e.prop("selectedIndex");r<e.find("option").length-1&&e.prop("selectedIndex",Math.min(r+1));e.trigger("change")}(o(this).closest(".item"))}))}()}),500);var n="a9a1a17c4397010006c2aa550dca0cab13ed3419",o=null})),t}return e=f,r&&o(e.prototype,r),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(r(112).default);
/***/},
/***/112:
/***/(t,e,r)=>{"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r.r(e),
/* harmony export */r.d(e,{
/* harmony export */default:()=>i
/* harmony export */});
/* harmony default export */const i=o((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));
/***/},
/***/235:
/***/t=>{"use strict";function e(t,e){this.label=t;const r=new Set;e.forEach((function(t){if(1==t.length)r.add(t);else if(2==t.length)for(var e=t.charCodeAt(0),n=t.charCodeAt(1);e<=n;e++)r.add(String.fromCharCode(e))})),this.test=function(t){return!(!t||"%"!==t[0]||!t.match(/^%[0-9A-F]{2}$/))||r.has(t)},this.sortSize=r.size}t.exports.F0=s,e.prototype.toString=function(){return"["+this.label+"]"};const r=new e("UNRESERVED",["-.","09","AZ","_","az","~"]),n=new e("RESERVED_UNRESERVED",["#","&","()","*;","=","?[","]","_","az","~"]);
// const RANGE_QUERY = new CharacterRange('QUERY', [
// 	'AZ', 'az', '09', "-", ".", "_", "~", // unreserved (from pchar)
// 	"!", "$", "&", "'", "(", ")", "*", "+", ",", ";", "=", // sub-delims (from pchar)
// 	':', '@', // colon and at-sign (from pchar)
// 	'/', '?', // and slash and question-mark
// ]);
function o(t,e){return t.sortSize-e.sortSize}function i(t){return encodeURIComponent(t).replace(/!/g,"%21")}function a(t,e,r,o,a,c){this.prefix=t,this.separator=e,this.delimiter=r,this.range=o,this.named=a,this.form=c,this.encode=o===n?encodeURI:i}const c={"":new a("",",",null,r,!1),"+":new a("",",",null,n,!1),"#":new a("#",",",null,n,!1),".":new a(".",".",".",r,!1),"/":new a("/","/","/",r,!1),";":new a(";",";",";",r,!0,!1),"?":new a("?","&","&",r,!0,!0),"&":new a("&","&","&",r,!0,!0)};function s(){this.clear()}
// A node on the tree is a list of various options to try to match against an input character.
// The "next" and "list_set" options specify another branch to also try and match against the current input character.
// The "template_match" option specifies the end of the template was reached, and to return a successful match result. This is usually only reachable immediately after matching an EOF.
function u(t,e){this.range=t,this.nid=e,this.chr_offset=null,
// If we're currently in an expression
this.match_range=null,
// If we reach this branch, declare a match for this template
this.template_match=null,
// Literal characters to match
this.match_chr={},
// Expression prefixes to match
this.match_pfx={},
// Alternative sets to try matching at the same time
this.list_set={},
// The keys have an order, keep track of the order here
this.list_set_keys=[],
// Descend into this for more alternatives
this.list_next=null,this.list_skp=null,this.list_skp_nid=null}s.prototype.clear=function(){this.nid=0,this.tree=new u(null,++this.nid),this.routeSet=new Set,this.templateRouteMap=new Map,this.valueRouteMap=new Map},s.prototype.hasRoute=function(t){return this.routeSet.has(t)},Object.defineProperty(s.prototype,"size",{get:function(){return this.routeSet.size}}),Object.defineProperty(s.prototype,"routes",{get:function(){return Array.from(this.routeSet)}}),s.prototype.getTemplate=function(t){if("string"!=typeof t)throw new Error("Expected string `uriTemplate`");return this.templateRouteMap.get(t)},s.prototype.hasTemplate=function(t){if("string"!=typeof t)throw new Error("Expected string `uriTemplate`");return this.templateRouteMap.has(t)},s.prototype.getValue=function(t){return this.valueRouteMap.get(t)},s.prototype.hasValue=function(t){return this.valueRouteMap.has(t)},u.prototype.test=function(t){return void 0===this.range||(null===this.range||"string"==typeof this.range?t===this.range:this.range&&this.range.test?this.range.test(t):void 0)},u.prototype.toString=function(){return"[Node "+this.nid+"]"};var f=/([\x21\x23-\x24\x26\x28-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E\xA0-\uD7FF\uE000-\uFDCF\uFDF0-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|%[0-9A-Fa-f][0-9A-Fa-f])/,l=/^([0-9A-Za-z_]|%[0-9A-Fa-f]{2})(\.?([0-9A-Za-z_]|%[0-9A-Fa-f]{2}))*(:[0-9]{0,3}|\*)?$/;function p(t,e,r){if("string"!=typeof t)throw new Error("Expected `uriTemplate` to be a string");this.uriTemplate=t,this.options=e,this.matchValue=r;for(
// Parse the URI template
var n=this.varnames={},o=this.variables=[],i=this.tokens=[],a=[],s=0;s<t.length;s++){var u=t[s];if("%"===u){if(!t.substring(s,s+3).match(/^%[0-9A-F]{2}$/))throw new Error("Invalid pct-encoded sequence "+JSON.stringify(t.substring(s,s+3)));u+=t[s+1]+t[s+2],s+=2}if("{"==u){var l=t.indexOf("}",s+2);if(l<0)throw new Error('Unclosed expression: Expected "}" but found end of template');var p=t.substring(s+1,l);s=l;
// If the first character is part of a valid variable name, assume the default operator
// Else, assume the first character is a operator
var d=p[0].match(/[a-zA-Z0-9_%]/)?"":p[0];if(!c[d])throw new Error("Unknown expression operator: "+JSON.stringify(d));const e=h.from(p,a.length);e.variableList.forEach((function(t){t.index=Object.keys(n).length,n[t.varname]=t,o[t.index]=t})),a.push(e),i.push(e)}else{if(!u.match(f))throw new Error("Unexpected character "+JSON.stringify(u));"string"==typeof i[i.length-1]?i[i.length-1]+=u:i.push(u)}}}function h(t,e,r){if("string"!=typeof t)throw new Error("Expected `operatorChar` to be a string");if(!c[t])throw new Error("Unknown operator: "+JSON.stringify(t));e.forEach((function(t){if(!(t instanceof d))throw new Error("Expected `variableList` to be array of Variable instances")})),this.operatorChar=t,this.prefix=c[t].prefix,this.separator=c[t].separator,this.range=c[t].range,this.variableList=e,this.index=r}function d(t,e,r,n){if("string"!=typeof e)throw new Error("Expected `varname` to be a string");if("string"!=typeof t)throw new Error("Expected `operatorChar` to be a string");const o=c[t];if(!c[t])throw new Error("Expected `operator` to be a valid operator");if("boolean"!=typeof r)throw new Error("Expected `explode` to be a boolean");if(null!==n&&"number"!=typeof n)throw new Error("Expected `maxLength` to be a number");this.operatorChar=t,this.varname=e,this.explode=r,this.maxLength=n,this.optional=!0,this.prefix=o.prefix,this.separator=o.separator,this.delimiter=o.delimiter,this.range=o.range,this.named=o.named}function y(t,e,r,n,o,i,a){this.router=t,this.uri=e,this.options=r,this.route=n,this.uriTemplate=n.uriTemplate,this.matchValue=n.matchValue,this.params=o,this.remaining_state=i,this.history=a}p.prototype.gen=function(t){if("object"!=typeof t)throw new Error("Expected arguments[0] `params` to be an object");return this.tokens.map((e=>e.toString(t))).join("")},p.prototype.toString=function(t){return this.tokens.map((e=>e.toString(t))).join("")},p.prototype.toJSON=function(){return this.uriTemplate},h.from=function(t,e){
// If the first character is part of a valid variable name, assume the default operator
// Else, assume the first character is a operator
var r=t[0].match(/[a-zA-Z0-9_%]/)?"":t[0],n=c[r];if(!n)throw new Error("Unknown expression operator: "+JSON.stringify(n));return new h(r,t.substring(r.length).split(/,/g).map(d.from.bind(null,r)),e)},h.prototype.toString=function(t){const e=c[this.operatorChar];if(t){const r=this.variableList.map((e=>e.expand(t))).filter((t=>"string"==typeof t));return r.length?e.prefix+r.join(e.separator):""}
// toString will join the Variable#toString() values with commas
return"{"+this.operatorChar+this.variableList.toString()+"}"},d.from=function(t,e){if(!e.match(l))throw new Error("Malformed variable "+JSON.stringify(e));const r=c[t],n=!!e.match(/\*$/),o=n?e.substring(0,e.length-1):e;
// Test for explode operator
if(n&&!r)throw new Error("Variable operator "+JSON.stringify(t)+" does not work with explode modifier");
// Test for substring modifier
const i=o.indexOf(":"),a=i<0?o:o.substring(0,i),s=i<0?null:o.substring(i+1);return new d(t,a,n,s?parseInt(s,10):null)},d.prototype.toString=function(t){return t?this.expand(t):this.varname+(this.explode?"*":"")+("number"==typeof this.maxLength?":"+this.maxLength:"")},d.prototype.expand=function(t){const e=this,r=c[e.operatorChar],n=t[e.varname],o=r.encode;if("string"==typeof n||"number"==typeof n){let t=n;return e.maxLength&&(t=t.substring(0,e.maxLength)),r.named?r.form||t?e.varname+"="+o(t):e.varname:o(t)}if(Array.isArray(n)&&n.length>0){if(e.explode){const t=n.map((function(t){return e.maxLength&&(t=t.toString().substring(0,e.maxLength)),r.named?r.form||t?e.varname+"="+o(t):e.varname:o(t)}));return t.length?t.join(e.separator):null}{let t=n;return e.maxLength&&(t=t.substring(0,e.maxLength)),0===t.length?null:r.named?e.varname+"="+t.map((function(t){return o(t)})).join(","):t.map((function(t){return o(t)})).join(",")}}if("object"==typeof n&&n){if(e.maxLength)throw new Error("Cannot substring object");if(e.explode){
// Apparently op.named doesn't matter in this case
const t=Object.keys(n).map((function(t){return r.form||n[t]?o(t)+"="+o(n[t]):t}));return t.length?t.join(e.separator):null}if(r.named){const t=Object.keys(n).map((function(t){return o(t)+","+o(n[t])}));return t.length?e.varname+"="+t.join(","):null}{const t=Object.keys(n).map((function(t){return o(t)+","+o(n[t])}));return t.length?t.join(","):null}}return null},y.prototype.rewrite=function(t,e,r){"string"==typeof t&&(t=new p(t,e,r));var n=t.gen(this.params);return new y(this.router,n,e,t,this.params)},y.prototype.next=function(){return this.router.resolveURI(this.uri,this.options,this.remaining_state)},Object.defineProperty(y.prototype,"template",{get:function(){return this.uriTemplate},set:function(t){this.uriTemplate=t}}),Object.defineProperty(y.prototype,"name",{get:function(){return this.matchValue}}),s.prototype.addTemplate=function(t,e,r){const n=this,i={};if("object"==typeof t&&void 0===e&&void 0===r){var a=t;t=a.uriTemplate,e=a.options,r=a.matchValue}else a=new p(t,e,r);
// Iterate over tokens in route to add the route to the tree
var c=this.tree,s=0;if(a.tokens.forEach((function(t){if("string"!=typeof t)t.variableList.forEach((function(e){if("object"!=typeof e)throw new Error("Unknown type");var r=[];e.optional&&r.push(c),e.prefix&&(c.match_pfx[e.prefix]=c.match_pfx[e.prefix]||new u(e.prefix,++n.nid),c=c.match_pfx[e.prefix],i[c.nid]={expression:t,varspec:e,vpush:e.explode&&e.index}),c.list_set=c.list_set||{},c.list_set[e.range]=c.list_set[e.range]||new u(e.range,++n.nid),c.list_set_keys=Object.keys(c.list_set).sort(o);var a=c=c.list_set[e.range];if(i[c.nid]={expression:t,varspec:e,vindex:e.index},c.match_range=e.range,c.match_range_vindex=e.index,e.explode){c.match_pfx[e.delimiter]=c.match_pfx[e.delimiter]||new u(e.delimiter,++n.nid);var f=c.match_pfx[e.delimiter];i[f.nid]={expression:t,varspec:e,vpush:e.explode&&e.index},f.list_set=f.list_set||{},f.list_set[e.range]=a,f.list_set_keys=Object.keys(f.list_set).sort(o),r.push(f)}c.list_next=c.list_next||new u(void 0,++n.nid),c=c.list_next,r.forEach((function(t){t.list_next=c})),s++}));else for(var e=0;e<t.length;e++){var r=t[e];if("%"===r&&t[e+1]&&t[e+2]){if(!(r+=t[e+1]+t[e+2]).match(/^%[0-9A-F]{2}$/))throw new Error("Assert: Invalid pct-encoded character");e+=2}
// Descend node into the branch, creating it if it doesn't exist
c.match_chr[r]=c.match_chr[r]||new u(r,++n.nid),c=c.match_chr[r],i[c.nid]={},c.chr_offset=s,s++}})),c.match_eof=c.match_eof||new u(null,++n.nid),(c=c.match_eof).chr_offset=s,s++,c.template_match)throw new Error("Route already defined");return c.template_match=a,c.template_nodes=i,this.routeSet.add(a),this.templateRouteMap.set(t,a),this.valueRouteMap.has(r)||this.valueRouteMap.set(r,a),a};var m={EOF:10,// Expending end of input
CHR:20,// Expecting a character, or "%" to begin a pct-encoded sequence
PCT1:31,// Expecting first hex char of a pct-encoded sequence
PCT2:32};
// Enable for testing
for(var b in m)m[b]=b;
// Some constants
var g="match_chr",v="match_pfx",w="match_range",x=0,_=10,E=20;function j(t,e,r,n,o,i){if(t&&!(t instanceof j))throw new Error("prev not instanceof State");if(t&&e<=t.offset)throw new Error("out-of-order state history, expected "+(t.offset+1)+" got "+e);if(!(r instanceof u))throw new Error("branch not instanceof Node");if("number"!=typeof i)throw new Error("Expected `sort` to be a number");
// The state at the previous character
this.prev=t,
// The current character position
this.offset=e,
// Branch of the tree the match made found on
this.branch=r,
// The character(s) being consumed
this.chr=n,
// The type of match that was made (match_pfx, etc.)
this.type=o,
// The sort order of the match that was made
this.sort=i,
// The order the match was inserted into the tree, e.g. in case an expression is skipped, prefer the earlier matched one
this.weight=0}
// like resolveString, but additionally verify that the URI matches the legal HTTP form
// userinfo and fragment components are not allowed
// Router.prototype.resolveRequest = function resolveRequest(scheme, host, target, flags, initial_state){
// };
// like resolveString, but additionally verify that the URI matches the legal HTTP form
// userinfo and fragment components are not allowed
s.prototype.resolveRequestURI=function(t,e,r){if("string"!=typeof t)throw new Error("Expected arguments[0] `uri` to be a string");
// First verify the URI looks OK, save the components, then parse it normally
// scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
if(!t.match(/^([a-zA-Z][a-zA-Z0-9+.-]*):/))throw new Error("parseURI: `uri` missing valid scheme");
// URI appears to be valid, now resolve it normally
return this.resolveURI(t,e,r)},
// TODO rename this to `resolveString`
s.prototype.resolveURI=function(t,e,r){if("string"!=typeof t)throw new Error("Expected arguments[0] `uri` to be a string");var n=this;if(r)var o=r.slice();else o=[new j(null,0,this.tree,"",g,x,null)];function i(t,e,r,n){if(!(n instanceof u))throw new Error("branch not instanceof Node");const o=[];function a(n,i,a){o.push(new j(r,t+1,n,e,i,a))}
// EOF always matches first
null===e&&n.match_eof&&a(n.match_eof,"match_eof",_),
// First try patterns with exact character matches
n.match_chr[e]&&a(n.match_chr[e],g,_),
// If the match_pfx isn't matched, then skip over the following match_range too...
n.match_pfx[e]&&a(n.match_pfx[e],v,E);
// Then try patterns with range matches
for(var c=0;c<n.list_set_keys.length;c++){const a=n.list_set_keys[c];i(t,e,r,n.list_set[a]).forEach(o.push.bind(o))}return n.match_range&&n.match_range.test(e)&&a(n,w,n.match_range.sortSize),
// If the expression is optional, try skipping over it, too
n.list_next&&i(t,e,r,n.list_next).forEach(o.push.bind(o)),o}for(var a=0;;){var c=o.shift();if(!c)break;if((a=c.offset)>t.length)throw new Error("Overgrew offset");
// This will set chr===undefined for the EOF position
// We could also use another value like "\0" or similar to represent EOF
var s=a<t.length?t[a]:null;if("%"==s&&t[a+1]&&t[a+2]){if(!(s+=t[a+1]+t[a+2]).match(/^%[0-9A-F]{2}$/))throw new Error("Invalid pct-encoded character");a+=2}var f=i(a,s,c,c.branch);
// Take all the equal alternatives that matched the EOF and if there's exactly one, return it.
if(a==t.length){var l=f.filter((function(t){return t.branch&&t.branch.template_match})).map((function(t){return p(t)}));if(l.length>1)return l[0];
//throw new Error('Multiple equal templates matched');
if(1==l.length)return l[0]}
// Force the order of matches to prefer single-character matches (the `sort`)
// Otherwise, preserve insertion order (the `weight`)
// stack.forEach(function(v, i){ v.weight = i; });
// stack.sort(function(a, b){ return (a.sort - b.sort) || (a.weight - b.weight); });
// stack.forEach(function(v){ parse_backtrack.push(v); });
f.forEach((function(t){t.type==g&&o.push(t)})),f.forEach((function(t){t.type==v&&o.push(t)})),f.forEach((function(t){t.type==w&&o.push(t)}))}function p(r){for(var i=[],a=r.branch.template_match,c=r.branch.template_nodes,s=r;s.prev;s=s.prev){var u=s.branch;i.unshift({chr:s.chr,offset:s.prev.offset,type:s.type,vindex:c[u.nid]&&c[u.nid].vindex,vpush:c[u.nid]&&c[u.nid].vpush,node:u,nid:u.nid,transition:c[u.nid]})}for(var f=[],l=0;l<i.length;l++){const t=i[l];if(t.chr&&!t.node.test(t.chr))throw new Error("Assert: Node range "+t.node.range+" mismatches character["+l+"] "+t.chr);var p=t.chr||null;if(void 0!==t.vpush)f[t.vpush]=f[t.vpush]||[],f[t.vpush].push("");else if(void 0!==t.vindex){var h=f[t.vindex];Array.isArray(h)?p&&(h[h.length-1]=h[h.length-1]+p):p&&(f[t.vindex]=(h||"")+p)}}var d={};return a.variables.forEach((function(t){void 0!==f[t.index]&&(d[t.varname]=Array.isArray(f[t.index])?f[t.index].map(decodeURIComponent):decodeURIComponent(f[t.index]))})),new y(n,t,e,a,d,o,i)}}}
/***/,
/***/207:
/***/(t,e,r)=>{var n={"./Pipedrive/ReachCounter/ReachCounter":865,"./Pipedrive/ReachCounter/ReachCounter.ts":865,"./Pipedrive/ReachCounter/ReachCounter2":530,"./Pipedrive/ReachCounter/ReachCounter2.ts":530,"./TamperController":112,"./TamperController.ts":112};function o(t){return i(t).then(r)}function i(t){
// Here Promise.resolve().then() is used instead of new Promise() to prevent
// uncaught exception popping up in devtools
return Promise.resolve().then((()=>{if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}))}o.keys=()=>Object.keys(n),o.resolve=i,o.id=207,t.exports=o}
/***/
/******/},e={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(n){
/******/ // Check if module is in cache
/******/var o=e[n];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=e[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[n](i,i.exports,r),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/r.d=(t,e)=>{
/******/for(var n in e)
/******/r.o(e,n)&&!r.o(t,n)&&
/******/Object.defineProperty(t,n,{enumerable:!0,get:e[n]})
/******/;
/******/},
/******/r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)
/******/,
/******/ // define __esModule on exports
/******/r.r=t=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(t,"__esModule",{value:!0})}
/******/;
/******/
/************************************************************************/
var n={};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
/******/return(()=>{"use strict";
// ESM COMPAT FLAG
r.r(n),
// EXPORTS
r.d(n,{default:()=>/* binding */m});// CONCATENATED MODULE: ./src/lib/config/routes.json
const t=JSON.parse('{"_":[{"name":"pipedrive_reach_counter","patterns":["https://santeacademie.pipedrive.com{/path*}"],"action":"Pipedrive:ReachCounter","debug":true}]}');
// EXTERNAL MODULE: ./src/lib/controller/TamperController.ts
var e=r(112),o=r(235);
// EXTERNAL MODULE: ./node_modules/uri-template-router/index.js
// CONCATENATED MODULE: ./src/lib/core/router/TamperRequest.ts
function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}
/* harmony default export */const c=a((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routeName=(null==e?void 0:e.matchValue)||"",this.params=(null==e?void 0:e.params)||{},this.uri=(null==e?void 0:e.uri)||"",this.uriTemplate=(null==e?void 0:e.uriTemplate)||"",this.route=(null==e?void 0:e.route)||null,this.router=(null==e?void 0:e.router)||null}));// CONCATENATED MODULE: ./src/lib/core/router/TamperRouter.ts
function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}
/* harmony default export */const h=l((function n(){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,"init",(function(){i.configRoutes=t._,i.configRoutes.forEach((function(t){i._checkRoute(t.name,t.patterns,t.action,t.debug)}))})),p(this,"_checkRoute",(function(t,e,r,n){for(var o=document.location.href,a=void 0,u=0// const url = 'https://santeacademie.pipedrive.com';
;u<e.length&&(i.router.addTemplate(e[u],{},t),!(a=i.router.resolveURI(o)));u++);if(a||n){var f=s(r.split(":"),2),l=f[0],p=f[1];i._instanciateController(l,p,new c(a))}})),p(this,"_instanciateController",(function(t,n,o){r(207)("./".concat(t,"/").concat(n,"/").concat(n)).then((function(r){var a=new r.default;if(Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor.name!==e.default.name)throw new Error("Controller ".concat(t,":").concat(n," is not a TamperController"));if(!a.run)throw new Error("Controller ".concat(t,":").concat(n," has no 'run' method"));console.debug("Invoke ".concat(t,":").concat(n," controller")),i.controllers[n]=a,a.run(o)}))})),this.controllers={},this.router=new o/* Router */.F0}));// CONCATENATED MODULE: ./src/lib/index.ts
function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}
/* harmony default export */const m=y((function t(){var e,r,n,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(){o.router.init()},(r="init")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.router=new h}))})(),n;
/******/})()}));
//# sourceMappingURL=index.js.map