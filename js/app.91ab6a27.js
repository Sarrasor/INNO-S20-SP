(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/INNO-S20-SP/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"031c":function(t,e,n){},"0f6e":function(t,e,n){"use strict";var i=n("520b"),r=n.n(i);r.a},"520b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("InstructionEditor"),n("SlideEditor"),n("ObjectEditor"),n("div",{attrs:{id:"render"}})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.instruction?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("List",{attrs:{label:"instructions",items:["instruction 1","instruction 1","instruction 1","instruction 1"]}})],1),n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.instruction.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.instruction.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"preview"}})],1),n("div",{staticClass:"card"},[n("FileList",{attrs:{label:"assets",items:["preview.png","narration.m4a","duck.obj","tutorial.mp4"]}})],1)]):t._e()},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t.multiline?n("textarea",{on:{input:function(e){return t.$emit("text",e.target.value)}}}):n("input",{attrs:{type:"text"},on:{input:function(e){return t.$emit("text",e.target.value)}}})])},c=[],u={name:"TextArea",props:["label","multiline"]},d=u,f=(n("df99"),n("2877")),p=Object(f["a"])(d,l,c,!1,null,"5884daa6",null),m=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{attrs:{id:"area"}},[t.label?n("p",{attrs:{id:"empty"}},[t._v("drop a file here")]):t._e()])])},v=[],_={name:"FileDrop",props:["label"]},h=_,j=(n("b591"),Object(f["a"])(h,b,v,!1,null,"b49a8cd0",null)),x=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{attrs:{id:"items"}},t._l(t.items,(function(e,i){return n("button",{key:i,class:{selected:i===t.selected},on:{click:function(e){return t.$emit("select",t.selected=i)}}},[t._v(t._s(e))])})),0)])},y=[],g={name:"List",props:["items","label"],data:function(){return{selected:0}}},w=g,$=(n("645a"),Object(f["a"])(w,O,y,!1,null,"26e74128",null)),E=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{attrs:{id:"items"}},t._l(t.items,(function(e,i){return n("button",{key:i,class:{selected:i===t.selected},on:{click:function(e){return t.$emit("select",t.selected=i)}}},[t._v(t._s(e))])})),0)])},S=[],A={name:"List",props:["items","label"],data:function(){return{selected:0}}},C=A,L=(n("8496"),Object(f["a"])(C,T,S,!1,null,"24756ebe",null)),F=L.exports,k={name:"InstructionEditor",props:["inInstruction"],components:{TextArea:m,FileDrop:x,List:E,FileList:F},data:function(){return{instruction:void 0}},watch:{inInstruction:{handler:function(t){this.instruction=t||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,slides:[null]}},immediate:!0},instruction:{handler:function(t){this.$emit("instruction",t)},immediate:!0,deep:!0}}},P=k,D=Object(f["a"])(P,o,s,!1,null,"7e91262b",null),I=D.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.slide?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card",attrs:{id:"list"}},[n("List",{attrs:{label:"slides",items:["slide 1","slide 2","slide 3","slide 4"]}})],1),t.slide?n("div",{staticClass:"card",attrs:{id:"slide"}},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.slide.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.slide.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"preview"}})],1):t._e()]):t._e()},M=[],N={name:"SlideEditor",props:["inSlide"],components:{TextArea:m,FileDrop:x,List:E},data:function(){return{slide:void 0}},watch:{inSlide:{handler:function(t){this.slide=t||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,objects:[null]}},immediate:!0},slide:{handler:function(t){this.$emit("slide",t)},immediate:!0,deep:!0}}},J=N,q=Object(f["a"])(J,V,M,!1,null,"2a67fe54",null),z=q.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.object?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card",attrs:{id:"list"}},[n("List",{attrs:{label:"objects",items:["object 1","object 2","object 3","object 4"]}})],1),n("div",{staticClass:"card",attrs:{id:"main"}},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.object.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.object.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"media"}}),n("Transform",{on:{transform:function(e){t.object.transform=e}}})],1)]):t._e()},G=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"transform"}},[n("Vector",{attrs:{length:3,label:"position"},on:{vector:function(e){t.transform.position=[].concat(e)}}}),n("Vector",{attrs:{length:3,label:"rotation"},on:{vector:function(e){t.transform.rotation=[].concat(e)}}}),n("Vector",{attrs:{length:1,label:"scale"},on:{vector:function(e){t.transform.scale=e[0]}}})],1)},K=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t._l(t.length,(function(e){return n("input",{key:e,style:{width:100/t.length+"%"},attrs:{type:"number",step:"0.01"},domProps:{value:t.vector[e-1]},on:{input:function(n){return t.update(e-1,n.target.value)}}})}))],2)},R=[],U=(n("cb29"),{name:"Vector",props:["length","label"],data:function(){return{vector:void 0}},watch:{length:{handler:function(t){this.vector=Array(t).fill(0)},immediate:!0}},methods:{update:function(t,e){e=parseFloat(e),this.vector[t]=isNaN(e)?0:e,this.$emit("vector",this.vector)}}}),W=U,X=(n("0f6e"),Object(f["a"])(W,Q,R,!1,null,"d68b5058",null)),Y=X.exports,Z={name:"Transform",components:{Vector:Y},data:function(){return{transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},watch:{transform:{handler:function(t){this.$emit("transform",t)},deep:!0}}},tt=Z,et=(n("a4d0"),Object(f["a"])(tt,H,K,!1,null,"31b186a0",null)),nt=et.exports,it={name:"ObjectEditor",props:["inObject"],components:{Transform:nt,FileDrop:x,TextArea:m,List:E},data:function(){return{object:void 0}},watch:{inObject:{handler:function(t){this.object=t||{name:"object",media:{url:"",type:0},description:"",transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},immediate:!0},object:{handler:function(t){this.$emit("object",t)},immediate:!0,deep:!0}}},rt=it,at=Object(f["a"])(rt,B,G,!1,null,"69635a24",null),ot=at.exports,st=n("f029");i["a"].use(st["a"]);var lt={name:"App",components:{InstructionEditor:I,SlideEditor:z,ObjectEditor:ot},computed:{}},ct=lt,ut=(n("bd51"),Object(f["a"])(ct,r,a,!1,null,"291f3279",null)),dt=ut.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(dt)}}).$mount("#app")},"645a":function(t,e,n){"use strict";var i=n("031c"),r=n.n(i);r.a},"6e4c":function(t,e,n){},8496:function(t,e,n){"use strict";var i=n("6e4c"),r=n.n(i);r.a},a4d0:function(t,e,n){"use strict";var i=n("f515"),r=n.n(i);r.a},b591:function(t,e,n){"use strict";var i=n("e52b"),r=n.n(i);r.a},bd51:function(t,e,n){"use strict";var i=n("fb13"),r=n.n(i);r.a},df99:function(t,e,n){"use strict";var i=n("f5d7"),r=n.n(i);r.a},e52b:function(t,e,n){},f515:function(t,e,n){},f5d7:function(t,e,n){},fb13:function(t,e,n){}});
//# sourceMappingURL=app.91ab6a27.js.map