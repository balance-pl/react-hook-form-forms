(this["webpackJsonpreact-hook-form-forms"]=this["webpackJsonpreact-hook-form-forms"]||[]).push([[12],{232:function(e,t,n){"use strict";n.r(t);var i=n(9),s=n(30),o=n(38),r=n(29),a=n(28),u=n(51),c=n(32),l=n(23),p=n(85),g=n(36),d=n(64),h=n(37),O=n(33),b=n(44),j=n(45),v=h.b({surname:h.c().required(O.b),name:h.c().required(O.b),gender:h.c().required(O.b),birthday:h.c().required(O.b),email:h.c().email(O.a),phone:h.c().test("checkPhone",O.c,(function(e,t){return!e||Object(j.a)(Object(b.a)(e))})).required(O.b)}),f=n(1),m=function(){return Promise.resolve([{id:1,name:"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041b\u0435\u043d\u0438\u043d\u0430 \u0434.23",data:{key1:"1"}},{id:2,name:"\u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041f\u043e\u0439\u043c\u0435\u043d\u043d\u0430\u044f \u0434.23",data:{key2:"2"}}])},S=function(){return Promise.resolve([{id:1,name:"\u0418\u0432\u0430\u043d\u043e\u0432 1",data:{key1:"1"}},{id:2,name:"\u0418\u0432\u0430\u043d\u043e\u0432 2",data:{key2:"2"}}])},_=function(){return Promise.resolve([{id:1,name:"\u041e\u041e\u041e \u0421\u042b\u041a\u0422\u042b\u0412\u041a\u0410\u0420 \u041a\u041e\u0420\u041f\u041e\u0420\u0415\u0419\u0428\u041d",data:{key1:"1"}},{id:2,name:"\u0413\u0410\u0417\u041f\u0420\u041e\u041c",data:{key2:"2"}}])};t.default=function(){var e=Object(s.f)({resolver:Object(o.a)(v)}),t=e.control,n=e.handleSubmit;return Object(f.jsxs)("form",{autoComplete:"off",onSubmit:n((function(e){alert(JSON.stringify(e))})),children:[Object(f.jsx)(c.a,{size:"1",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0435"}),Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{name:"surname",control:t,render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(g.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:S,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f *",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})}),Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{name:"name",control:t,render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(g.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:S,label:"\u0418\u043c\u044f *",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})}),Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{name:"patronymic",control:t,render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(g.a,Object(i.a)(Object(i.a)({},n),{},{error:null===(t=s.error)||void 0===t?void 0:t.message,getOptionsMethod:S,label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}))}})}),Object(f.jsxs)(u.b,{children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{name:"gender",control:t,render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(d.a,Object(i.a)(Object(i.a)({},n),{},{error:null===(t=s.error)||void 0===t?void 0:t.message,label:"\u041f\u043e\u043b *",options:[{id:"male",name:"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"},{id:"female",name:"\u0436\u0435\u043d\u0441\u043a\u0438\u0439"}]}))}})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{control:t,name:"birthday",render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(p.a,Object(i.a)(Object(i.a)({},n),{},{label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f *",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{name:"phone",control:t,render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(l.a,Object(i.a)(Object(i.a)({},n),{},{label:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d *",mask:"+7 (999) 999-99-99",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{name:"email",control:t,render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(l.a,Object(i.a)(Object(i.a)({},n),{},{label:"Email",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})})})]}),Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{control:t,name:"address",render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(g.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:m,label:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})}),Object(f.jsx)(a.a,{children:Object(f.jsx)(s.a,{control:t,name:"employerName",render:function(e){var t,n=e.field,s=e.fieldState;return Object(f.jsx)(g.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:_,label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044f",error:null===(t=s.error)||void 0===t?void 0:t.message}))}})}),Object(f.jsxs)(u.b,{children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{children:Object(f.jsx)(r.a,{variant:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})}},36:function(e,t,n){"use strict";var i=n(6),s=n(22),o=n(9),r=n(25),a=n(26),u=n(47),c=n(31),l=n(34),p=n(0),g=n(12),d=n.n(g),h=n(23),O=n(48),b=n(43),j=n.n(b),v=n(1),f=["error","label","minLengthToCallGet","optionsToShow","value","formatOption","getOptionsMethod","onBlur","onChange","onEnter","onFocus"],m=function(e){return"string"===typeof e?e.replace(/\\/g,""):e},S=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e))._getOptionsTimeout=null,i.state={activeOptionId:null,isGettingOptions:!1,isSuggestWrapperVisible:!1,options:[]},i.handleInputBlur=i.handleInputBlur.bind(Object(u.a)(i)),i.handleInputChange=i.handleInputChange.bind(Object(u.a)(i)),i.handleInputFocus=i.handleInputFocus.bind(Object(u.a)(i)),i.handleKeyDown=i.handleKeyDown.bind(Object(u.a)(i)),i.handleSuggestChange=i.handleSuggestChange.bind(Object(u.a)(i)),i.handleSuggestItemHover=i.handleSuggestItemHover.bind(Object(u.a)(i)),i.callGetOptions=i.callGetOptions.bind(Object(u.a)(i)),i.getOptions=i.getOptions.bind(Object(u.a)(i)),i.makeNextSuggestOptionActive=i.makeNextSuggestOptionActive.bind(Object(u.a)(i)),i.makePrevSuggestOptionActive=i.makePrevSuggestOptionActive.bind(Object(u.a)(i)),i.scrollToActiveOption=i.scrollToActiveOption.bind(Object(u.a)(i)),i.suggestClose=i.suggestClose.bind(Object(u.a)(i)),i.suggestOpen=i.suggestOpen.bind(Object(u.a)(i)),i.blur=i.blur.bind(Object(u.a)(i)),i.focus=i.focus.bind(Object(u.a)(i)),i}return Object(a.a)(n,[{key:"handleInputBlur",value:function(e){var t=this,n=this.props.onBlur;setTimeout((function(){t.suggestClose(),t.setState({activeOptionId:null,options:[]}),n(e)}),200)}},{key:"handleInputChange",value:function(e){var t=m(e),n=this.props,i=n.onChange,s=n.minLengthToCallGet;i(t,this.props),t&&t.length>=s?this.callGetOptions(t):(this.suggestClose(),this.setState({activeOptionId:null,options:[]}))}},{key:"handleInputFocus",value:function(){var e=this.props,t=e.value,n=e.minLengthToCallGet,i=e.onFocus;t&&t.length>=n&&this.callGetOptions(t),i(this.props)}},{key:"handleKeyDown",value:function(e){if(this.state.isGettingOptions)return!1;var t=this.props,n=t.onEnter,i=t.value,s=this.state,o=s.activeOptionId,r=s.isSuggestWrapperVisible,a=s.options;switch(e.keyCode){case 40:e.preventDefault(),r&&this.makeNextSuggestOptionActive();break;case 38:e.preventDefault(),r&&this.makePrevSuggestOptionActive();break;case 13:if(e.preventDefault(),r){var u=a.find((function(e){return e.id===o}));u?this.handleSuggestChange(u):n(i,!1,this.props),this.suggestClose()}else n(i,!1,this.props);this.inputWrapper.querySelector("input").blur();break;case 27:this.handleInputBlur()}}},{key:"handleSuggestChange",value:function(e){var t=e.name,n=e.data,i=void 0===n?{}:n,s=m(t),o=this.props,r=o.onChange,a=o.onEnter;r(s,this.props,i),a(s,!0,this.props,i)}},{key:"handleSuggestItemHover",value:function(e){var t=e.id;this.setState({activeOptionId:t})}},{key:"callGetOptions",value:function(e){var t=this;this._getOptionsTimeout&&clearTimeout(this._getOptionsTimeout),this._getOptionsTimeout=setTimeout((function(){t.getOptions(e)}),200)}},{key:"getOptions",value:function(e){var t=this;this.setState({isGettingOptions:!0});var n=this.props;(0,n.getOptionsMethod)(e,n.optionsToShow).then((function(e){var n={activeOptionId:null,isGettingOptions:!1,options:e};e.length>0&&(t.suggestOpen(),n=Object(o.a)(Object(o.a)({},n),{},{activeOptionId:e[0].id})),t.setState(n,(function(){t.scrollToActiveOption()}))})).catch((function(){t.setState({activeOptionId:null,isGettingOptions:!1,options:[]})}))}},{key:"makeNextSuggestOptionActive",value:function(){var e=this,t=this.state,n=t.options,i=t.activeOptionId,s=n.findIndex((function(e){return e.id===i}));-1===s?s=0:s+1<n.length&&(s+=1),this.setState({activeOptionId:n[s].id},(function(){e.scrollToActiveOption()}))}},{key:"makePrevSuggestOptionActive",value:function(){var e=this,t=this.state,n=t.options,i=t.activeOptionId,s=n.findIndex((function(e){return e.id===i}));s>0&&(s-=1,this.setState({activeOptionId:n[s].id},(function(){e.scrollToActiveOption()})))}},{key:"scrollToActiveOption",value:function(){var e=this.state.activeOptionId,t=this.element.querySelector("#select_box_option_".concat(e)),n=this.suggest.querySelector("ul");if(t&&n){var i=t.getBoundingClientRect(),s=n.getBoundingClientRect(),o=this.suggest.getBoundingClientRect(),r=i.top<o.top,a=i.top+i.height>o.top+o.height;if(r){var u=i.top-s.top;this.suggest.scrollTop=u}else if(a){var c=i.top-s.top-(o.height-i.height);this.suggest.scrollTop=c}}}},{key:"suggestClose",value:function(){this.setState({activeOptionId:null,isSuggestWrapperVisible:!1})}},{key:"suggestOpen",value:function(){this.setState({isSuggestWrapperVisible:!0})}},{key:"blur",value:function(){this.input.blur()}},{key:"focus",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.error,r=t.label,a=(t.minLengthToCallGet,t.optionsToShow,t.value),u=t.formatOption,c=(t.getOptionsMethod,t.onBlur,t.onChange,t.onEnter,t.onFocus,Object(s.a)(t,f)),l=this.state,p=l.activeOptionId,g=l.isSuggestWrapperVisible,b=l.options,m=j.a.InputSuggest,S=j.a.InputSuggest__Input,_=d()(j.a.InputSuggest__SuggestWrapper,Object(i.a)({},j.a.InputSuggest__SuggestWrapper_visible,g&&b.length>0)),x=j.a.InputSuggest__Suggest;return Object(v.jsxs)("div",{ref:function(t){return e.element=t,e.element},className:m,children:[Object(v.jsx)("div",{className:S,ref:function(t){return e.inputWrapper=t,e.inputWrapper},children:Object(v.jsx)(h.a,Object(o.a)({error:n,label:r,ref:function(t){return e.input=t,e.input},value:a,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus,onKeyDown:this.handleKeyDown},c))}),Object(v.jsx)("div",{className:_,children:Object(v.jsx)("div",{className:x,ref:function(t){return e.suggest=t,e.suggest},children:Object(v.jsx)(O.a,{activeOptionId:p,optionSearchMask:a,options:b,value:a,formatOption:u,onChange:this.handleSuggestChange,onItemHover:this.handleSuggestItemHover})})})]})}}]),n}(p.Component);S.defaultProps={error:null,label:null,minLengthToCallGet:2,optionsToShow:5,value:null,formatOption:function(e,t){return e},getOptionsMethod:function(e,t){return Promise.resolve([])},onBlur:function(e){},onChange:function(e,t,n){},onEnter:function(e,t,n,i){},onFocus:function(e){}},t.a=S},43:function(e,t,n){e.exports={InputSuggest:"styles_InputSuggest__2A8yc",InputSuggest__Input:"styles_InputSuggest__Input__3M6I2",InputSuggest__SuggestWrapper:"styles_InputSuggest__SuggestWrapper__2oTlG",InputSuggest__SuggestWrapper_closing:"styles_InputSuggest__SuggestWrapper_closing__2dtNH",InputSuggest__SuggestWrapper_opening:"styles_InputSuggest__SuggestWrapper_opening__1rdBj",InputSuggest__SuggestWrapper_visible:"styles_InputSuggest__SuggestWrapper_visible__7InKm",InputSuggest__Suggest:"styles_InputSuggest__Suggest__23iYc"}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){return String(e).replace(/\D/g,"")}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=/^7[\d]{10}$/,s=function(e){return i.test(e)}},51:function(e,t,n){"use strict";var i=n(27);n.d(t,"a",(function(){return i.a}));var s=n(24);n.d(t,"b",(function(){return s.a}))},83:function(e,t,n){e.exports={InputDate:"styles_InputDate__3Gfzb",InputDate__Icon:"styles_InputDate__Icon__3m_hb"}},85:function(e,t,n){"use strict";var i=n(9),s=n(23),o=n(1);var r=function(e){return Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar",children:[Object(o.jsx)("rect",Object(i.a)({x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},e)),Object(o.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),Object(o.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),Object(o.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})},a=n(83),u=n.n(a);function c(e){return Object(o.jsxs)("div",{className:u.a.InputDate,children:[Object(o.jsx)(s.a,Object(i.a)(Object(i.a)({},e),{},{mask:"99.99.9999"})),Object(o.jsx)("div",{className:u.a.InputDate__Icon,children:Object(o.jsx)(r,{})})]})}c.defaultProps={error:null,mask:null,value:null,onBlur:function(e){},onChange:function(e,t,n){},onFocus:function(e){}};t.a=c}}]);
//# sourceMappingURL=12.c351eb35.chunk.js.map