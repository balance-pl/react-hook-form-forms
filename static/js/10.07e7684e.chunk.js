(this["webpackJsonpreact-hook-form-forms"]=this["webpackJsonpreact-hook-form-forms"]||[]).push([[10],{223:function(e,t,n){e.exports={LoginForm:"styles_LoginForm__34HkV",LoginForm__Fields:"styles_LoginForm__Fields__l7aTU"}},227:function(e,t,n){"use strict";n.r(t);var a=n(9),r=(n(0),n(30)),s=n(38),c=n(37),o=n(33),l=n(29),_=n(28),u=n(32),i=n(23),b=n(223),j=n.n(b),p=n(1),d=c.b({email:c.c().email(o.a).required(o.b),password:c.c().required(o.b)});t.default=function(){var e=Object(r.f)({resolver:Object(s.a)(d)}),t=e.control,n=e.handleSubmit;return Object(p.jsx)("form",{autoComplete:"off",className:j.a.LoginForm,onSubmit:n((function(e){alert(JSON.stringify(e))})),children:Object(p.jsxs)("div",{className:j.a.LoginForm__Fields,children:[Object(p.jsx)(u.a,{size:"1",children:"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(p.jsx)(_.a,{children:Object(p.jsx)(r.a,{name:"email",control:t,render:function(e){var t,n=e.field,r=e.fieldState;return Object(p.jsx)(i.a,Object(a.a)(Object(a.a)({label:"Email"},n),{},{error:null===(t=r.error)||void 0===t?void 0:t.message}))}})}),Object(p.jsx)(_.a,{children:Object(p.jsx)(r.a,{name:"password",control:t,render:function(e){var t,n=e.field,r=e.fieldState;return Object(p.jsx)(i.a,Object(a.a)(Object(a.a)({label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"},n),{},{error:null===(t=r.error)||void 0===t?void 0:t.message}))}})}),Object(p.jsx)(l.a,{variant:"primary",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}},23:function(e,t,n){"use strict";var a=n(9),r=n(6),s=n(5),c=n(22),o=n(0),l=n(56),_=n.n(l),u=n(12),i=n.n(u),b=n(41),j=n.n(b),p=n(1),d=["error","label","mask","value","onBlur","onChange","onFocus"],f=Object(o.forwardRef)((function(e,t){var n=e.error,l=e.label,u=e.mask,b=e.value,f=e.onBlur,O=e.onChange,m=e.onFocus,v=Object(c.a)(e,d),h=Object(o.useState)(!1),x=Object(s.a)(h,2),I=x[0],y=x[1];var L=i()(j.a.Input__Input,Object(r.a)({},j.a.Input__Input_error,!!n)),F=i()(j.a.Input__LabelText,Object(r.a)({},j.a.Input__LabelText_top,!!b||I)),g=Object(a.a)(Object(a.a)({},v),{},{className:L,ref:t,value:b||"",onBlur:function(){y(!1),"function"===typeof f&&f.apply(void 0,arguments)},onChange:function(t){O(t.target.value,e)},onFocus:function(){y(!0),"function"===typeof m&&m.apply(void 0,arguments)}});return Object(p.jsxs)("div",{className:j.a.Input,children:[Object(p.jsxs)("label",{className:j.a.Input__Label,children:[Object(p.jsx)("span",{className:F,children:l}),!u&&Object(p.jsx)("input",Object(a.a)({},g)),!!u&&Object(p.jsx)(_.a,Object(a.a)(Object(a.a)({},g),{},{mask:u}))]}),!!n&&Object(p.jsx)("div",{className:j.a.Input__Error,children:n})]})}));f.defaultProps={error:null,mask:null,value:null,onBlur:function(e){},onChange:function(e,t,n){},onFocus:function(e){}},t.a=f},28:function(e,t,n){"use strict";var a=n(40),r=n.n(a),s=n(1);function c(e){var t=e.children;return Object(s.jsx)("div",{className:r.a.FormRow,children:t})}c.defaultProps={children:null},t.a=c},29:function(e,t,n){"use strict";var a=n(9),r=n(22),s=n(12),c=n.n(s),o=n(42),l=n.n(o),_=n(1),u=["children","variant"];function i(e){var t=e.children,n=e.variant,s=Object(r.a)(e,u),o=c()(l.a.Button,l.a["Button_variant_".concat(n)]);return Object(_.jsx)("button",Object(a.a)(Object(a.a)({},s),{},{className:o,children:t}))}i.defaultProps={variant:"default"},t.a=i},32:function(e,t,n){"use strict";var a=n(9),r=n(22),s=n(12),c=n.n(s),o=n(50),l=n.n(o),_=n(1),u=["children","size"];t.a=function(e){var t=e.children,n=e.size,s=Object(r.a)(e,u),o=c()(l.a.H,l.a["H_size_".concat(n)]);return 1===n||"1"===n?Object(_.jsx)("h1",Object(a.a)(Object(a.a)({},s),{},{className:o,children:t})):2===n||"2"===n?Object(_.jsx)("h2",Object(a.a)(Object(a.a)({},s),{},{className:o,children:t})):3===n||"3"===n?Object(_.jsx)("h3",Object(a.a)(Object(a.a)({},s),{},{className:o,children:t})):null}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));var a="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 example@example.com",r="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",s="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 +7 (999) 999-99-99"},40:function(e,t,n){e.exports={FormRow:"styles_FormRow__1xnvt"}},41:function(e,t,n){e.exports={Input:"styles_Input__18MvC",Input__Label:"styles_Input__Label__3eMsY",Input__LabelText:"styles_Input__LabelText__1pkll",Input__LabelText_top:"styles_Input__LabelText_top__3UohT",Input__Input:"styles_Input__Input__25z1j",Input__Input_error:"styles_Input__Input_error__161xf",Input__Error:"styles_Input__Error__2huak"}},42:function(e,t,n){e.exports={Button:"styles_Button__1Ekk8",Button_variant_default:"styles_Button_variant_default__3GtCQ",Button_variant_primary:"styles_Button_variant_primary__G0dsg"}},50:function(e,t,n){e.exports={H:"styles_H__10j-W",H_size_1:"styles_H_size_1__DLwdi",H_size_2:"styles_H_size_2__2d1Lt",H_size_3:"styles_H_size_3__2RHfa"}}}]);
//# sourceMappingURL=10.07e7684e.chunk.js.map