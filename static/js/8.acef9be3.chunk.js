(this["webpackJsonpreact-hook-form-forms"]=this["webpackJsonpreact-hook-form-forms"]||[]).push([[8],{216:function(e,t,r){e.exports={PropertyForm__IconWrapper:"style_PropertyForm__IconWrapper__zpUv0",PropertyForm__IconDelete:"style_PropertyForm__IconDelete__2RPni"}},222:function(e,t,r){"use strict";r.r(t);var n=r(9),c=r(80),a=r.n(c),s=r(81),i=(r(0),r(32)),o=r(49),l=r(51),j=r(34),b=r(79),d=r(29),O=r(31),u=r(35),x=r(36),h=r(25),f=r(70),m=r(73),v=r(37),p=r(216),g=r.n(p),y=r(1),_=[{id:1,name:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 1"},{id:2,name:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 2"}],k=[{id:1,name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 1"},{id:2,name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 2"}],w=[{id:1,name:"\u0442\u0438\u043f 1"},{id:2,name:"\u0442\u0438\u043f 2"}],F={surname:void 0,name:void 0,patronymic:void 0,phone:void 0,email:void 0},C=o.b({object:o.b().shape({sellerType:o.c().required(v.b),purchaseAgreement:o.c().required(v.b),gettingOfCreditFunds:o.c().required(v.b)}),sellers:o.a().of(o.b().shape({surname:o.c().required(v.b),name:o.c().required(v.b)})),inn:o.c().required(v.b)});t.default=function(){var e=Object(i.f)({resolver:Object(l.a)(C),defaultValues:{object:{sellerType:void 0,purchaseAgreement:void 0,gettingOfCreditFunds:void 0,creditingOfCreditFunds:void 0},sellers:[F],inn:void 0,snils:void 0}}),t=e.control,r=e.handleSubmit,c=e.trigger,o=e.getValues,v=Object(i.e)({control:t,name:"sellers"}),p=v.fields,I=v.remove,P=v.append,S=function(){var e=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c("object");case 3:e.sent&&(r=o("object"),alert(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return Object(s.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("sellers.".concat(e));case 2:t.sent&&(r=o("sellers.".concat(e)),console.log("save seller data ->",r));case 4:case"end":return t.stop()}}),t)})))};return Object(y.jsxs)("div",{children:[Object(y.jsx)(j.a,{size:1,children:"\u041e\u0431\u044a\u0435\u043a\u0442"}),Object(y.jsxs)("form",{onSubmit:r((function(e){console.log("main submit -> ",e)})),children:[Object(y.jsx)(u.a,{children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"object.sellerType",render:function(e){var t,r=e.field,c=e.fieldState;return Object(y.jsx)(b.a,Object(n.a)(Object(n.a)({},r),{},{label:"\u0422\u0438\u043f \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430 *",options:_,error:null===(t=c.error)||void 0===t?void 0:t.message}))}})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"object.purchaseAgreement",render:function(e){var t,r=e.field,c=e.fieldState;return Object(y.jsx)(b.a,Object(n.a)(Object(n.a)({},r),{},{label:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u044f *",options:k,error:null===(t=c.error)||void 0===t?void 0:t.message}))}})})]})}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"object.gettingOfCreditFunds",render:function(e){var t,r=e.field,c=e.fieldState;return Object(y.jsx)(b.a,Object(n.a)(Object(n.a)({},r),{},{label:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 *",options:w,error:null===(t=c.error)||void 0===t?void 0:t.message}))}})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"object.creditingOfCreditFunds",render:function(e){var t=e.field;return Object(y.jsx)(b.a,Object(n.a)(Object(n.a)({},t),{},{label:"\u0417\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",options:w}))}})})]})}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{}),Object(y.jsx)(O.a,{children:Object(y.jsx)(x.a,{variant:"default",onClick:S,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(y.jsx)(j.a,{size:2,children:"\u041f\u0440\u043e\u0434\u0430\u0432\u0446\u044b"}),p.map((function(e,r){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{style:{padding:"30px 0"},children:[Object(y.jsx)(u.a,{children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"sellers.".concat(r,".surname"),render:function(e){var t,r=e.field,c=e.fieldState;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},r),{},{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f *",error:null===(t=c.error)||void 0===t?void 0:t.message}))}})}),Object(y.jsx)(O.a,{children:Object(y.jsxs)("div",{className:g.a.PropertyForm__IconWrapper,children:[Object(y.jsx)(i.a,{control:t,name:"sellers.".concat(r,".name"),render:function(e){var t,r=e.field,c=e.fieldState;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},r),{},{label:"\u0418\u043c\u044f *",error:null===(t=c.error)||void 0===t?void 0:t.message}))}}),p.length>1&&Object(y.jsx)(m.a,{className:g.a.PropertyForm__IconDelete,onClick:function(){I(r)}})]})})]})}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"sellers.".concat(r,".patronymic"),render:function(e){var t=e.field;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},t),{},{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}))}})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"sellers.".concat(r,".phone"),render:function(e){var t=e.field;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},t),{},{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}))}})})]})}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"sellers.".concat(r,".email"),render:function(e){var t=e.field;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},t),{},{label:"Email"}))}})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(x.a,{type:"button",onClick:D(r),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]}),Object(y.jsx)("hr",{})]},e.id)})),Object(y.jsx)(u.a,{children:Object(y.jsx)(f.a,{type:"button",onClick:function(){return P(F)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430"})}),Object(y.jsxs)(u.a,{children:[Object(y.jsx)(j.a,{size:2,children:"\u041f\u0440\u043e\u0447\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"inn",render:function(e){var t,r=e.field,c=e.fieldState;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},r),{},{label:"\u0418\u041d\u041d *",error:null===(t=c.error)||void 0===t?void 0:t.message}))}})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(i.a,{control:t,name:"snils",render:function(e){var t=e.field;return Object(y.jsx)(h.a,Object(n.a)(Object(n.a)({},t),{},{label:"\u0421\u041d\u0418\u041b\u0421"}))}})})]})]}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)(O.a,{}),Object(y.jsx)(O.a,{children:Object(y.jsx)(x.a,{variant:"primary",type:"submit",children:"\u0414\u0430\u043b\u0435\u0435"})})]})]})]})}},70:function(e,t,r){"use strict";var n=r(9),c=r(24),a=r(71),s=r.n(a),i=r(1),o=["children"];t.a=function(e){var t=e.children,r=Object(c.a)(e,o);return Object(i.jsx)("button",Object(n.a)(Object(n.a)({},r),{},{className:s.a.LinkButton,children:t}))}},71:function(e,t,r){e.exports={LinkButton:"styles_LinkButton__2YOvJ"}},73:function(e,t,r){"use strict";var n=r(9),c=r(24),a=(r(0),r(12)),s=r.n(a),i=r(74),o=r.n(i),l=r(1),j=["className"];function b(e){var t=e.className,r=Object(c.a)(e,j);return Object(l.jsxs)("svg",Object(n.a)(Object(n.a)({},r),{},{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:s()(o.a.IconDelete,t),children:[Object(l.jsx)("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),Object(l.jsx)("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),Object(l.jsx)("line",{x1:"12",y1:"9",x2:"18",y2:"15"})]}))}b.defaultProps={className:""},t.a=b},74:function(e,t,r){e.exports={IconDelete:"styles_IconDelete__2ia--"}}}]);
//# sourceMappingURL=8.acef9be3.chunk.js.map