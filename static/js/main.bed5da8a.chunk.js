(this["webpackJsonpvin-decoder"]=this["webpackJsonpvin-decoder"]||[]).push([[0],{103:function(e,n,t){},104:function(e,n,t){},203:function(e,n,t){},205:function(e,n,t){},226:function(e,n,t){"use strict";t.r(n);t(95);var c=t(0),a=t.n(c),i=t(34),s=t.n(i),r=t(14),l=(t(103),t(3)),u=(t(104),t(40)),d={vin:u.b().required("The field is required").matches(/^[A-Z0-9]*$/,"Should consists only from uppercase letters and numbers").max(17,"Max length is 17 chars")},o=t(26);var j=function(e){var n=Object(r.b)();return Object(c.useCallback)((function(){return n(e.apply(void 0,arguments))}),[e,n])},b=t(5),m=t(18),v=(t(203),t(1)),h=["className","field","label"];function O(e){return Object(v.jsx)("span",{className:"input__error",children:e})}var p=function(e){var n=e.className,t=e.field,c=e.label,a=Object(m.a)(e,h);return Object(v.jsxs)("label",Object(b.a)(Object(b.a)({},a),{},{className:["input",n].join(" "),children:[c?Object(v.jsx)("span",{className:"input__label",children:c}):null,Object(v.jsx)("input",Object(b.a)(Object(b.a)({},t),{},{className:"input__element"})),Object(v.jsx)(o.a,Object(b.a)(Object(b.a)({},t),{},{render:O}))]}))},f=(t(205),["className","children","type","disabled","onClick"]);var x=function(e){var n=e.className,t=e.children,c=e.type,a=e.disabled,i=e.onClick,s=Object(m.a)(e,f);return Object(v.jsx)("div",Object(b.a)(Object(b.a)({},s),{},{className:["button",n].join(" "),children:Object(v.jsx)("button",{className:"button__element",type:c,disabled:a,onClick:i,children:t})}))},_=(t(78),["className","children"]);var g=function(e){var n=e.className,t=e.children,c=Object(m.a)(e,_);return Object(v.jsx)("li",Object(b.a)(Object(b.a)({},c),{},{className:["list__item",n].join(" "),children:t}))},N=["className","children"];function C(e){var n=e.className,t=e.children,c=Object(m.a)(e,N);return Object(v.jsx)("ul",Object(b.a)(Object(b.a)({},c),{},{className:["list",n].join(" "),children:t}))}C.Item=g;var y=C,S=t(53),V=t.n(S),k=t(92),I=t(27),q=t(36),L=t(93),w=t.n(L).a.create({baseURL:"https://vpic.nhtsa.dot.gov/api/"});w.defaults.timeout=15e3;var A=w,F={vehiclesAPI:{decode:function(e){return A.get("/vehicles/DecodeVin/".concat(e,"?format=json"))}}},M=t(94);var P=function(e){return{id:Object(M.a)(),label:e.Variable,value:e.Value}},B="vehicles",R=Object(I.b)(B+"/decodeVin",function(){var e=Object(k.a)(V.a.mark((function e(n,t){var c,a,i,s,r,l;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.getState,a=c(),i=a.vehicles.vins,!((s=i.findIndex((function(e){return e.vinCode===n})))>-1)){e.next=6;break}return e.abrupt("return",i[s]);case 6:return e.next=8,F.vehiclesAPI.decode(n);case 8:return r=e.sent,l=r.data.Results.filter((function(e){return e.Value})).map(P),e.abrupt("return",{vinCode:n,properties:l,message:r.data.Message});case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),{condition:function(e,n){if("pending"===(0,n.getState)().vehicles.loading)return!1}}),T=Object(I.c)({name:B,initialState:{currentVinCode:null,cacheLimit:5,vins:[],loading:"idle"},reducers:{},extraReducers:function(e){e.addCase(R.pending,(function(e,n){e.loading=n.meta.requestStatus})),e.addCase(R.fulfilled,(function(e,n){e.currentVinCode=n.payload.vinCode,e.loading=n.meta.requestStatus;var t=e.vins.findIndex((function(e){return e.vinCode===n.payload.vinCode}));t>-1?(e.vins.splice(t,1),e.vins.splice(0,0,n.payload)):(e.vins.splice(0,0,n.payload),e.vins.length>e.cacheLimit&&e.vins.splice(e.vins.length-1,1))})),e.addCase(R.rejected,(function(e,n){e.loading=n.meta.requestStatus}))}}).reducer,D=function(e){return e.vehicles.currentVinCode},J=function(e){return e.vehicles.vins},U=function(e){return"pending"===e.vehicles.loading},X=Object(q.a)(J,(function(e){return e.map((function(e){return e.vinCode}))})),E=Object(q.a)(D,J,(function(e,n){return n.find((function(n){return n.vinCode===e}))})),H=u.a().shape({vin:d.vin}),W={vin:"5UXWX7C5"};var Z=function(){var e=j(R),n=Object(r.c)(D),t=Object(r.c)(U),a=Object(r.c)(E),i=Object(r.c)(X),s=Object(c.useCallback)((function(n){return e(n.vin)}),[e]);return Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(o.c,{initialValues:W,validationSchema:H,validateOnBlur:!0,validateOnChange:!0,onSubmit:s,children:function(e){var n=e.handleSubmit;return Object(v.jsxs)("div",{className:"main__form",children:[Object(v.jsx)(o.b,{label:"Vin:",name:"vin",component:p}),Object(v.jsx)(x,{className:"main__decode-button",type:"submit",disabled:t,onClick:n,children:"decode"})]})}}),Object(v.jsx)("p",{className:"main__title",children:"History"}),Object(v.jsx)(y,{children:i?i.map((function(e,n){return Object(v.jsx)(y.Item,{children:Object(v.jsx)("p",{className:"main__list-text",children:e})},n)})):null}),Object(v.jsx)("p",{className:"main__title",children:"Message:"}),a?Object(v.jsx)("p",{className:"main__list-text",children:a.message}):null,Object(v.jsxs)("p",{className:"main__title",children:["Vin properties",n&&" (".concat(n,")"),":"]}),Object(v.jsx)(y,{children:a?a.properties.map((function(e){return Object(v.jsx)(y.Item,{children:Object(v.jsxs)("p",{className:"main__list-text",children:[Object(v.jsxs)("span",{className:"main__list-label",children:[e.label,":"]})," ",e.value]})},e.id)})):null})]})};var $=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(l.c,{children:Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(Z,{})})})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,227)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),i(e),s(e)}))},G={vehicles:T},K=Object(I.a)({reducer:G}),Q=t(51);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(r.a,{store:K,children:Object(v.jsx)(Q.a,{children:Object(v.jsx)($,{})})})}),document.getElementById("root")),z()},78:function(e,n,t){},95:function(e,n,t){}},[[226,1,2]]]);
//# sourceMappingURL=main.bed5da8a.chunk.js.map