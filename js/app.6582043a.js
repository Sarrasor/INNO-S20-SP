(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/INNO-S20-SP/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0965":function(t,e,s){"use strict";var n=s("c601"),i=s.n(n);i.a},"4d71":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Instruction",{attrs:{instructions:t.instructions},on:{select:t.selectInstruction}}),s("Step",{attrs:{steps:t.steps},on:{select:t.selectStep}}),s("Asset",{attrs:{assets:t.assets}}),s("Render",{attrs:{assets:t.assets}})],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("p",{staticClass:"label bold"},[t._v("instructions")]),t.instructions?[s("div",{staticClass:"toolbar"},[t.instructions?s("button",{attrs:{tooltip:"create new"},on:{click:t.createInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("add")])]):t._e(),t.instruction?s("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]):t._e(),t.instruction?s("button",{attrs:{tooltip:"upload to server"},on:{click:t.uploadInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("publish")])]):t._e(),t.instruction?s("button",{attrs:{tooltip:"delete"},on:{click:t.deleteInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]):t._e()]),t.instructions.length>0?s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.instructions,(function(e,n){return s("button",{key:n,class:{selected:n===t.selected},on:{click:function(e){t.selected=n}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.instruction?[s("p",{staticClass:"label"},[t._v("name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.instruction.name,expression:"instruction.name"}],attrs:{type:"text"},domProps:{value:t.instruction.name},on:{input:function(e){e.target.composing||t.$set(t.instruction,"name",e.target.value)}}}),s("p",{staticClass:"label"},[t._v("description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.instruction.description,expression:"instruction.description"}],domProps:{value:t.instruction.description},on:{input:function(e){e.target.composing||t.$set(t.instruction,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"label"},[t._v("preview")]),s("FileDrop",{on:{drop:function(e){t.instruction.preview_url=e}}})]:t._e()],2),s("div",{staticClass:"card",staticStyle:{"margin-top":"20px",width:"430px"}},[s("p",{staticClass:"label bold"},[t._v("files")]),t.instruction?s("div",{attrs:{id:"files"}},[s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.files,(function(e,n){return s("button",{key:n,attrs:{draggable:""},on:{dragstart:function(e){return t.dragFile(e,n)},click:function(e){t.selectedFile=n}}},[t._v(t._s(e.name))])})),0),s("FileUpload",{model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1):t._e()])])},o=[],l=(s("7db0"),s("4160"),s("a434"),s("b0c0"),s("159b"),s("15fd")),c=s("ec26"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{delete:t.file},attrs:{id:"root"},on:{drop:t.drop,dragover:function(t){return t.preventDefault()},click:function(e){t.file=null}}},[t.file?s("p",[t._v(t._s(t.file))]):s("p",{attrs:{id:"empty"}},[t._v("[drag an uploaded file here]")])])},p=[],d=(s("caad"),s("2532"),{name:"FileDrop",props:["types"],data:function(){return{file:void 0}},watch:{file:function(t){this.$emit("drop",t),this.$forceUpdate()}},methods:{drop:function(t){var e=JSON.parse(t.dataTransfer.getData("text"));this.types&&!this.types.includes(e.type)||(this.file=e.name)}}}),f=d,v=(s("72fb"),s("2877")),m=Object(v["a"])(f,u,p,!1,null,"0a3f6d6c",null),h=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"root"},on:{click:function(e){return t.$refs.input.click()},drop:t.drop,dragover:function(t){return t.preventDefault()}}},[s("p",{attrs:{id:"empty"}},[t._v("click or drag your local files here to upload")]),s("input",{ref:"input",attrs:{hidden:"",multiple:"",type:"file",accept:t.extensions.join()},on:{change:function(e){t.upload(Array.from(e.target.files))}}})])},_=[],g=(s("99af"),s("4de4"),s("0481"),s("a630"),s("d81d"),s("4069"),s("d3b7"),s("ac1f"),s("3ca3"),s("1276"),s("ddb0"),s("3835")),y=s("b85c"),x=(s("96cf"),s("1da1")),w={name:"FileUpload",props:["files"],data:function(){return{images:[".bmp",".jpeg",".jpg",".png"],audios:[".mp3"],videos:[".mp4"],models:[".glb"]}},computed:{types:function(){return[this.images,this.audios,this.videos,this.models]},extensions:function(){return this.types.flat()}},methods:{upload:function(t){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.t0=e,s.t1=e.files,s.next=4,Promise.all(t.map(e.readFile));case 4:s.t2=s.sent,s.t3=s.t1.concat.call(s.t1,s.t2),s.t0.$emit.call(s.t0,"upload",s.t3);case 7:case"end":return s.stop()}}),s)})))()},readFile:function(t){var e=this.getType;return new Promise((function(s,n){var i=new FileReader;i.onload=function(){return s({name:t.name,type:e(t.name),content:i.result})},i.onerror=n,i.readAsBinaryString(t)}))},getExt:function(t){return"."+t.split(".").pop()},getType:function(t){var e,s=this.getExt(t),n=Object(y["a"])(this.types.entries());try{for(n.s();!(e=n.n()).done;){var i=Object(g["a"])(e.value,2),a=i[0],r=i[1];if(r.includes(s))return a+1}}catch(o){n.e(o)}finally{n.f()}return 0},drop:function(t){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function s(){var n,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t.preventDefault(),!((null===(n=t.dataTransfer.files)||void 0===n?void 0:n.length)>0)){s.next=6;break}return s.next=4,e.upload(Array.from(t.dataTransfer.files).filter((function(t){return e.extensions.includes(e.getExt(t.name))})));case 4:s.next=8;break;case 6:i=JSON.parse(t.dataTransfer.getData("text")),e.$emit("upload",e.files.filter((function(t){return t.name!==i.name})));case 8:case"end":return s.stop()}}),s)})))()},dragOver:function(t){t.preventDefault()}},model:{prop:"files",event:"upload"}},C=w,O=(s("bb89"),Object(v["a"])(C,b,_,!1,null,"cef20210",null)),k=O.exports,S={name:"Instruction",props:["instructions"],components:{FileDrop:h,FileUpload:k},data:function(){return{selected:void 0,files:[]}},watch:{instructions:function(t){t&&this.selectLast()}},computed:{instruction:function(){var t;return this.$emit("select",this.selected),(null===(t=this.instructions)||void 0===t?void 0:t.length)>0?this.instructions[this.selected]:null}},methods:{dragFile:function(t,e){t.dataTransfer.setData("text/plain",JSON.stringify(this.files[e]))},createInstruction:function(){this.instructions.push({id:Object(c["a"])(),size:0,name:"Instruction "+(this.instructions.length+1),description:"Lorem impsum dolor sit amet",preview_url:"",steps:[],step_count:0,last_modified:""}),this.selectLast()},duplicateInstruction:function(){var t=JSON.parse(JSON.stringify(this.instruction));t.name+=" (copy)",this.instructions.push(t),this.selectLast()},deleteInstruction:function(){this.instructions.splice(this.selected,1),this.selected>=this.instructions.length&&this.selectLast()},uploadInstruction:function(){var t=this;this.instruction.step_count=this.instruction.steps.length,this.instruction.last_modified=Date.now();var e=this.instruction,s=e.steps,n=Object(l["a"])(e,["steps"]);s.forEach((function(e){return e.assets.forEach((function(e){return e.media.type=e.media.url?t.files.find((function(t){return t.name===e.media.url})).type:null}))}));var i=JSON.stringify(n),a=JSON.stringify(s);console.log(i),console.log(a)},selectLast:function(){this.selected=this.instructions.length-1}}},j=S,$=(s("fdb7"),Object(v["a"])(j,r,o,!1,null,"0b2f94ec",null)),N=$.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("p",{staticClass:"label bold"},[t._v("steps")]),t.steps?[s("div",{staticClass:"toolbar"},[s("button",{attrs:{tooltip:"create new"},on:{click:t.createStep}},[s("i",{staticClass:"material-icons-outlined"},[t._v("add")])]),t.step?s("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateStep}},[s("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]):t._e(),t.step?s("button",{attrs:{tooltip:"delete"},on:{click:t.deleteStep}},[s("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]):t._e()]),t.steps.length>0?s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.steps,(function(e,n){return s("button",{key:n,class:{selected:n===t.selected},on:{click:function(e){t.selected=n}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.step?[s("p",{staticClass:"label"},[t._v("name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.step.name,expression:"step.name"}],attrs:{type:"text"},domProps:{value:t.step.name},on:{input:function(e){e.target.composing||t.$set(t.step,"name",e.target.value)}}}),s("p",{staticClass:"label"},[t._v("description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.step.description,expression:"step.description"}],domProps:{value:t.step.description},on:{input:function(e){e.target.composing||t.$set(t.step,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"label"},[t._v("preview")]),s("FileDrop",{on:{drop:function(e){t.step.preview_url=e}}})]:t._e()],2)])},L=[],P={name:"Step",props:["steps"],components:{FileDrop:h},data:function(){return{selected:void 0}},computed:{step:function(){var t;return this.$emit("select",this.selected),(null===(t=this.steps)||void 0===t?void 0:t.length)>0?this.steps[this.selected]:null}},watch:{steps:function(t){t&&this.selectLast()}},methods:{createStep:function(){this.steps.push({name:"Step "+(this.steps.length+1),description:"Lorem impsum dolor sit amet",preview_url:void 0,assets:[]}),this.selectLast()},duplicateStep:function(){var t=JSON.parse(JSON.stringify(this.step));t.name+=" (copy)",this.steps.push(t),this.selectLast()},deleteStep:function(){this.steps.splice(this.selected,1),this.selected>=this.steps.length&&this.selectLast()},selectLast:function(){this.selected=this.steps.length-1}}},D=P,I=Object(v["a"])(D,F,L,!1,null,null,null),A=I.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("p",{staticClass:"label bold"},[t._v("assets")]),t.assets?[s("div",{staticClass:"toolbar"},[s("button",{attrs:{tooltip:"create new"},on:{click:t.createAsset}},[s("i",{staticClass:"material-icons-outlined"},[t._v("add")])]),t.asset?s("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateAsset}},[s("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]):t._e(),t.asset?s("button",{attrs:{tooltip:"visibility"},on:{click:function(e){t.asset.hidden=!t.asset.hidden}}},[t.asset.hidden?s("i",{staticClass:"material-icons-outlined"},[t._v("visibility_off")]):s("i",{staticClass:"material-icons-outlined"},[t._v("visibility")])]):t._e(),t.asset?s("button",{attrs:{tooltip:"delete"},on:{click:t.deleteAsset}},[s("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]):t._e()]),t.assets.length>0?s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.assets,(function(e,n){return s("button",{key:n,class:{selected:n===t.selected},on:{click:function(e){t.selected=n}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.asset?[s("p",{staticClass:"label"},[t._v("name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.asset.name,expression:"asset.name"}],attrs:{type:"text"},domProps:{value:t.asset.name},on:{input:function(e){e.target.composing||t.$set(t.asset,"name",e.target.value)}}}),s("p",{staticClass:"label"},[t._v("description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.asset.media.description,expression:"asset.media.description"}],domProps:{value:t.asset.media.description},on:{input:function(e){e.target.composing||t.$set(t.asset.media,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"label"},[t._v("media")]),s("FileDrop",{on:{drop:function(e){t.asset.media.url=e}}}),s("p",{staticClass:"label"},[t._v("position")]),s("Vector",{attrs:{vector:t.asset.transform.position}}),s("p",{staticClass:"label"},[t._v("rotation")]),s("Vector",{attrs:{vector:t.asset.transform.rotation}}),s("p",{staticClass:"label"},[t._v("scale")]),s("input",{attrs:{type:"number",step:"0.1"},domProps:{value:t.asset.transform.scale},on:{input:function(e){t.asset.transform.scale=Math.max(.1,t.$toFloat(e.target.value))}}})]:t._e()],2)])},J=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"root"}},t._l(t.keys,(function(e,n){return s("input",{key:n,style:{width:t.width},attrs:{type:"number",step:"0.1"},domProps:{value:t.vector[e]},on:{input:function(s){t.vector[e]=t.$toFloat(s.target.value)}}})})),0)},R=[],M=(s("b64b"),{name:"Vector",props:["vector"],computed:{keys:function(){return Object.keys(this.vector)},width:function(){return 100/this.keys.length+"%"}}}),U=M,V=(s("ac23"),Object(v["a"])(U,T,R,!1,null,"46ffa12d",null)),z=V.exports,B={name:"Asset",props:["assets"],components:{FileDrop:h,Vector:z},data:function(){return{selected:void 0}},computed:{asset:function(){var t;return this.$emit("select",this.selected),(null===(t=this.assets)||void 0===t?void 0:t.length)>0?this.assets[this.selected]:null}},watch:{assets:function(t){t&&this.selectLast()}},methods:{createAsset:function(){this.assets.push({name:"Asset "+(this.assets.length+1),media:{type:0,url:void 0,description:"Lorem impsum dolor sit amet"},transform:{position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:1},hidden:!1}),this.selectLast()},duplicateAsset:function(){var t=JSON.parse(JSON.stringify(this.asset));t.name+=" (copy)",this.assets.push(t),this.selectLast()},deleteAsset:function(){this.assets.splice(this.selected,1),this.selected>=this.assets.length&&this.selectLast()},selectLast:function(){this.selected=this.assets.length-1}}},q=B,G=Object(v["a"])(q,E,J,!1,null,"74d40b21",null),H=G.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"})},Q=[],W={name:"Render",props:["assets","files"]},X=W,Y=(s("0965"),Object(v["a"])(X,K,Q,!1,null,"3f0d6572",null)),Z=Y.exports;n["a"].prototype.$toFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t};var tt={name:"App",components:{Instruction:N,Step:A,Asset:H,Render:Z},data:function(){return{instructions:[],steps:[],assets:[]}},methods:{selectInstruction:function(t){var e;this.steps=(null===(e=this.instructions)||void 0===e?void 0:e.length)>0?this.instructions[t].steps:null},selectStep:function(t){var e;this.assets=(null===(e=this.steps)||void 0===e?void 0:e.length)>0?this.steps[t].assets:null}}},et=tt,st=(s("66ff"),Object(v["a"])(et,i,a,!1,null,"5e1ce6ec",null)),nt=st.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(nt)}}).$mount("#app")},"66ff":function(t,e,s){"use strict";var n=s("8682"),i=s.n(n);i.a},7007:function(t,e,s){},"72fb":function(t,e,s){"use strict";var n=s("d357"),i=s.n(n);i.a},8682:function(t,e,s){},ac23:function(t,e,s){"use strict";var n=s("4d71"),i=s.n(n);i.a},aee1:function(t,e,s){},bb89:function(t,e,s){"use strict";var n=s("7007"),i=s.n(n);i.a},c601:function(t,e,s){},d357:function(t,e,s){},fdb7:function(t,e,s){"use strict";var n=s("aee1"),i=s.n(n);i.a}});
//# sourceMappingURL=app.6582043a.js.map