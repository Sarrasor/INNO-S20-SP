(function(t){function e(e){for(var i,l,a=e[0],s=e[1],u=e[2],d=0,p=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},r={app:0},o=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/INNO-S20-SP/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a69":function(t,e,n){"use strict";var i=n("59d8"),r=n.n(i);r.a},"341f":function(t,e,n){"use strict";var i=n("6a0f"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("InstructionEditor")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"editor"}},[n("div",{attrs:{id:"assets"}},t._l(10,(function(t){return n("div",{key:t})})),0),n("div",{attrs:{id:"slides"}},[n("div",{attrs:{id:"tools"}},[n("p",[t._v("id: "+t._s(t.id))]),n("button",{on:{click:function(e){return t.slides.push(null)}}},[t._v("Add slide")]),n("input",{attrs:{type:"file",multiple:""}})]),t._l(t.slides,(function(e,i){return n("SlideEditor",{key:i,attrs:{inSlide:e},on:{slide:function(e){return t.$set(t.slides,i,e)},delete:function(e){return t.slides.splice(i,1)},open:function(e){t.slideI=i}}})}))],2),t.slide?n("div",{attrs:{id:"displays"}},[n("button",{on:{click:function(e){return t.slide.objects.push(null)}}},[t._v("Add object")]),t._l(t.slide.objects,(function(e,i){return n("ObjectEditor",{key:i,attrs:{inObject:e},on:{object:function(e){return t.$set(t.slide.objects,i,e)},delete:function(e){return t.slide.objects.splice(i,1)}}})}))],2):t._e(),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"scene"}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://i.ytimg.com/vi/9M5XM7WfVKA/maxresdefault.jpg",alt:""}})])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.slide?n("div",{attrs:{id:"slide"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.slide.name,expression:"slide.name"}],attrs:{id:"name",type:"text"},domProps:{value:t.slide.name},on:{input:function(e){e.target.composing||t.$set(t.slide,"name",e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.slide.description,expression:"slide.description"}],attrs:{id:"description"},domProps:{value:t.slide.description},on:{input:function(e){e.target.composing||t.$set(t.slide,"description",e.target.value)}}}),t._v(" "),n("div",{attrs:{id:"preview"}},[n("p",[t._v("thumbnail URL:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.slide.preview_url,expression:"slide.preview_url"}],attrs:{type:"text"},domProps:{value:t.slide.preview_url},on:{input:function(e){e.target.composing||t.$set(t.slide,"preview_url",e.target.value)}}})]),n("div",{attrs:{id:"actions"}},[n("button",{on:{click:function(e){return t.$emit("delete")}}},[t._v("Remove slide")]),n("button",{on:{click:function(e){return t.$emit("open")}}},[t._v("Edit displays")])])]):t._e()},u=[],c={name:"SlideEditor",props:["inSlide"],data:function(){return{slide:void 0}},watch:{inSlide:{handler:function(t){this.slide=t||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,objects:[null]}},immediate:!0},slide:{handler:function(t){this.$emit("slide",t)},immediate:!0,deep:!0}}},d=c,p=(n("6590"),n("2877")),f=Object(p["a"])(d,s,u,!1,null,"24aa53d2",null),v=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.object?n("div",{attrs:{id:"object"}},[n("button",{attrs:{id:"delete"},on:{click:function(e){return t.$emit("delete")}}},[t._v("X")]),n("TextArea",{attrs:{label:"media"},on:{text:function(e){t.object.media=e}}}),t._v(" "),n("TextArea",{attrs:{label:"text",multiline:!0},on:{text:function(e){t.object.text=e}}}),t._v(" "),n("Vector",{attrs:{length:3,label:"position"},on:{vector:function(e){t.object.position=[].concat(e)}}}),n("Vector",{attrs:{length:3,label:"rotation"},on:{vector:function(e){t.object.rotation=[].concat(e)}}}),n("Vector",{attrs:{length:1,label:"scale"},on:{vector:function(e){t.object.scale=e[0]}}})],1):t._e()},b=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{attrs:{id:"label"}},[t._v(t._s(t.label))]),n("div",{attrs:{id:"vector"}},t._l(t.length,(function(e){return n("input",{key:e,style:{width:100/t.length+"%"},attrs:{type:"number",step:"0.01"},domProps:{value:t.vector[e-1]},on:{input:function(n){return t.update(e-1,n.target.value)}}})})),0)])},_=[],j=(n("cb29"),{name:"Vector",props:["length","label"],data:function(){return{vector:void 0}},watch:{length:{handler:function(t){this.vector=Array(t).fill(0)},immediate:!0}},methods:{update:function(t,e){e=parseFloat(e),this.vector[t]=isNaN(e)?0:e,this.$emit("vector",this.vector)}}}),g=j,y=(n("2a69"),Object(p["a"])(g,h,_,!1,null,"b52d87c6",null)),x=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.label))]),t.multiline?n("textarea",{on:{input:function(e){return t.$emit("text",e.target.value)}}}):n("input",{attrs:{type:"text"},on:{input:function(e){return t.$emit("text",e.target.value)}}})])},O=[],$={name:"TextArea",props:["label","multiline"]},E=$,S=(n("a6f2"),Object(p["a"])(E,w,O,!1,null,"24383282",null)),k=S.exports,P={name:"ObjectEditor",props:["inObject"],components:{Vector:x,TextArea:k},data:function(){return{object:void 0}},watch:{inObject:{handler:function(t){this.object=t||{type:0,media:"",text:"",position:[0,0,0],rotation:[0,0,0],scale:1}},immediate:!0},object:{handler:function(t){this.$emit("object",t)},immediate:!0,deep:!0}}},A=P,I=(n("341f"),Object(p["a"])(A,m,b,!1,null,"1ade2282",null)),N=I.exports,T={name:"InstructionEditor",components:{SlideEditor:v,ObjectEditor:N},data:function(){return{id:this.$uuid.v4(),name:"",description:"",preview_url:null,slides:[null],slideI:0}},computed:{slide:function(){return this.slideI<this.slides.length?this.slides[this.slideI]:null}}},M=T,V=(n("85d9"),Object(p["a"])(M,l,a,!1,null,"39981a4a",null)),J=V.exports,L=n("f029");i["a"].use(L["a"]);var R={name:"App",components:{InstructionEditor:J}},X=R,F=Object(p["a"])(X,r,o,!1,null,null,null),K=F.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(K)}}).$mount("#app")},"59d8":function(t,e,n){},"5e32":function(t,e,n){},6590:function(t,e,n){"use strict";var i=n("f671"),r=n.n(i);r.a},"6a0f":function(t,e,n){},"85d9":function(t,e,n){"use strict";var i=n("5e32"),r=n.n(i);r.a},a6f2:function(t,e,n){"use strict";var i=n("b5fc"),r=n.n(i);r.a},b5fc:function(t,e,n){},f671:function(t,e,n){}});
//# sourceMappingURL=app.7fe42a28.js.map