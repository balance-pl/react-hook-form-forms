(this["webpackJsonpreact-hook-form-forms"]=this["webpackJsonpreact-hook-form-forms"]||[]).push([[12],{226:function(t,e,n){"use strict";n.r(e);var i=n(9),s=n(30),o=n(40),r=n(36),a=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return fetch("https://front-dhr-st1.dhr-st.dc-yc.b-pl.pro/dadata/suggestions/api/4_1/rs/suggest/".concat(t,"/"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({count:n,parts:i?[i]:void 0,query:e})}).then((function(t){return t.json()})).then((function(t){return t.suggestions.map((function(t,e){return{id:e,name:t.value,data:t}}))})).catch((function(t){return console.log("error",t),[]}))}},u=a("address"),c=(a("party"),a("fio")),l=a("fio"),p=a("fio"),g=n(29),h=n(28),d=n(53),O=n(32),b=n(39),v=n(63),f=n(34),j=n(1),S=r.b({surname:r.c().required(f.b),name:r.c().required(f.b),cityzenship:r.c().required(f.b),address:r.c().when("cityzenship",{is:function(t){return t===String(1)},then:r.c().required(f.b)})});e.default=function(){var t=Object(s.f)({resolver:Object(o.a)(S)}),e=t.control,n=t.handleSubmit,r=1===(0,t.watch)("cityzenship");return Object(j.jsxs)("form",{autoComplete:"off",onSubmit:n((function(t){alert(JSON.stringify(t))})),children:[Object(j.jsx)(O.a,{size:"1",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f"}),Object(j.jsxs)(d.b,{children:[Object(j.jsx)(d.a,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(s.a,{control:e,name:"surname",render:function(t){var e,n=t.field,s=t.fieldState;return Object(j.jsx)(b.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:p,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f *",error:null===(e=s.error)||void 0===e?void 0:e.message}))}})})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(s.a,{control:e,name:"name",render:function(t){var e,n=t.field,s=t.fieldState;return Object(j.jsx)(b.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:c,label:"\u0418\u043c\u044f *",error:null===(e=s.error)||void 0===e?void 0:e.message}))}})})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(s.a,{control:e,name:"patronymic",render:function(t){var e,n=t.field,s=t.fieldState;return Object(j.jsx)(b.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:l,label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",error:null===(e=s.error)||void 0===e?void 0:e.message}))}})})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(s.a,{name:"cityzenship",control:e,render:function(t){var e,n=t.field,s=t.fieldState;t.formState;return Object(j.jsx)(v.a,Object(i.a)(Object(i.a)({},n),{},{label:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u0442\u0432\u043e *",name:"cityzenship",options:[{id:1,name:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u0442\u0432\u043e \u0420\u0424"},{id:2,name:"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d"}],error:null===(e=s.error)||void 0===e?void 0:e.message}))}})})})]}),r&&Object(j.jsx)(h.a,{children:Object(j.jsx)(s.a,{shouldUnregister:!0,control:e,name:"address",render:function(t){var e,n=t.field,s=t.fieldState;return Object(j.jsx)(b.a,Object(i.a)(Object(i.a)({},n),{},{getOptionsMethod:u,label:"\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 *",error:null===(e=s.error)||void 0===e?void 0:e.message}))}})}),Object(j.jsxs)(d.b,{children:[Object(j.jsx)(d.a,{}),Object(j.jsx)(d.a,{children:Object(j.jsx)(g.a,{variant:"primary",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0430\u043d\u0430\u043b\u0438\u0437"})})]})]})}},39:function(t,e,n){"use strict";var i=n(6),s=n(22),o=n(9),r=n(23),a=n(24),u=n(42),c=n(31),l=n(33),p=n(0),g=n(12),h=n.n(g),d=n(25),O=n(49),b=n(47),v=n.n(b),f=n(1),j=["error","label","minLengthToCallGet","optionsToShow","value","formatOption","getOptionsMethod","onBlur","onChange","onEnter","onFocus"],S=function(t){return"string"===typeof t?t.replace(/\\/g,""):t},m=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t))._getOptionsTimeout=null,i.state={activeOptionId:null,isGettingOptions:!1,isSuggestWrapperVisible:!1,options:[]},i.handleInputBlur=i.handleInputBlur.bind(Object(u.a)(i)),i.handleInputChange=i.handleInputChange.bind(Object(u.a)(i)),i.handleInputFocus=i.handleInputFocus.bind(Object(u.a)(i)),i.handleKeyDown=i.handleKeyDown.bind(Object(u.a)(i)),i.handleSuggestChange=i.handleSuggestChange.bind(Object(u.a)(i)),i.handleSuggestItemHover=i.handleSuggestItemHover.bind(Object(u.a)(i)),i.callGetOptions=i.callGetOptions.bind(Object(u.a)(i)),i.getOptions=i.getOptions.bind(Object(u.a)(i)),i.makeNextSuggestOptionActive=i.makeNextSuggestOptionActive.bind(Object(u.a)(i)),i.makePrevSuggestOptionActive=i.makePrevSuggestOptionActive.bind(Object(u.a)(i)),i.scrollToActiveOption=i.scrollToActiveOption.bind(Object(u.a)(i)),i.suggestClose=i.suggestClose.bind(Object(u.a)(i)),i.suggestOpen=i.suggestOpen.bind(Object(u.a)(i)),i.blur=i.blur.bind(Object(u.a)(i)),i.focus=i.focus.bind(Object(u.a)(i)),i}return Object(a.a)(n,[{key:"handleInputBlur",value:function(t){var e=this,n=this.props.onBlur;setTimeout((function(){e.suggestClose(),e.setState({activeOptionId:null,options:[]}),n(t)}),200)}},{key:"handleInputChange",value:function(t){var e=S(t),n=this.props,i=n.onChange,s=n.minLengthToCallGet;i(e,this.props),e&&e.length>=s?this.callGetOptions(e):(this.suggestClose(),this.setState({activeOptionId:null,options:[]}))}},{key:"handleInputFocus",value:function(){var t=this.props,e=t.value,n=t.minLengthToCallGet,i=t.onFocus;e&&e.length>=n&&this.callGetOptions(e),i(this.props)}},{key:"handleKeyDown",value:function(t){if(this.state.isGettingOptions)return!1;var e=this.props,n=e.onEnter,i=e.value,s=this.state,o=s.activeOptionId,r=s.isSuggestWrapperVisible,a=s.options;switch(t.keyCode){case 40:t.preventDefault(),r&&this.makeNextSuggestOptionActive();break;case 38:t.preventDefault(),r&&this.makePrevSuggestOptionActive();break;case 13:if(t.preventDefault(),r){var u=a.find((function(t){return t.id===o}));u?this.handleSuggestChange(u):n(i,!1,this.props),this.suggestClose()}else n(i,!1,this.props);this.inputWrapper.querySelector("input").blur();break;case 27:this.handleInputBlur()}}},{key:"handleSuggestChange",value:function(t){var e=t.name,n=t.data,i=void 0===n?{}:n,s=S(e),o=this.props,r=o.onChange,a=o.onEnter;r(s,this.props,i),a(s,!0,this.props,i)}},{key:"handleSuggestItemHover",value:function(t){var e=t.id;this.setState({activeOptionId:e})}},{key:"callGetOptions",value:function(t){var e=this;this._getOptionsTimeout&&clearTimeout(this._getOptionsTimeout),this._getOptionsTimeout=setTimeout((function(){e.getOptions(t)}),200)}},{key:"getOptions",value:function(t){var e=this;this.setState({isGettingOptions:!0});var n=this.props;(0,n.getOptionsMethod)(t,n.optionsToShow).then((function(t){var n={activeOptionId:null,isGettingOptions:!1,options:t};t.length>0&&(e.suggestOpen(),n=Object(o.a)(Object(o.a)({},n),{},{activeOptionId:t[0].id})),e.setState(n,(function(){e.scrollToActiveOption()}))})).catch((function(){e.setState({activeOptionId:null,isGettingOptions:!1,options:[]})}))}},{key:"makeNextSuggestOptionActive",value:function(){var t=this,e=this.state,n=e.options,i=e.activeOptionId,s=n.findIndex((function(t){return t.id===i}));-1===s?s=0:s+1<n.length&&(s+=1),this.setState({activeOptionId:n[s].id},(function(){t.scrollToActiveOption()}))}},{key:"makePrevSuggestOptionActive",value:function(){var t=this,e=this.state,n=e.options,i=e.activeOptionId,s=n.findIndex((function(t){return t.id===i}));s>0&&(s-=1,this.setState({activeOptionId:n[s].id},(function(){t.scrollToActiveOption()})))}},{key:"scrollToActiveOption",value:function(){var t=this.state.activeOptionId,e=this.element.querySelector("#select_box_option_".concat(t)),n=this.suggest.querySelector("ul");if(e&&n){var i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),o=this.suggest.getBoundingClientRect(),r=i.top<o.top,a=i.top+i.height>o.top+o.height;if(r){var u=i.top-s.top;this.suggest.scrollTop=u}else if(a){var c=i.top-s.top-(o.height-i.height);this.suggest.scrollTop=c}}}},{key:"suggestClose",value:function(){this.setState({activeOptionId:null,isSuggestWrapperVisible:!1})}},{key:"suggestOpen",value:function(){this.setState({isSuggestWrapperVisible:!0})}},{key:"blur",value:function(){this.input.blur()}},{key:"focus",value:function(){this.input.focus()}},{key:"render",value:function(){var t=this,e=this.props,n=e.error,r=e.label,a=(e.minLengthToCallGet,e.optionsToShow,e.value),u=e.formatOption,c=(e.getOptionsMethod,e.onBlur,e.onChange,e.onEnter,e.onFocus,Object(s.a)(e,j)),l=this.state,p=l.activeOptionId,g=l.isSuggestWrapperVisible,b=l.options,S=v.a.InputSuggest,m=v.a.InputSuggest__Input,_=h()(v.a.InputSuggest__SuggestWrapper,Object(i.a)({},v.a.InputSuggest__SuggestWrapper_visible,g&&b.length>0)),I=v.a.InputSuggest__Suggest;return Object(f.jsxs)("div",{ref:function(e){return t.element=e,t.element},className:S,children:[Object(f.jsx)("div",{className:m,ref:function(e){return t.inputWrapper=e,t.inputWrapper},children:Object(f.jsx)(d.a,Object(o.a)({error:n,label:r,ref:function(e){return t.input=e,t.input},value:a,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus,onKeyDown:this.handleKeyDown},c))}),Object(f.jsx)("div",{className:_,children:Object(f.jsx)("div",{className:I,ref:function(e){return t.suggest=e,t.suggest},children:Object(f.jsx)(O.a,{activeOptionId:p,optionSearchMask:a,options:b,value:a,formatOption:u,onChange:this.handleSuggestChange,onItemHover:this.handleSuggestItemHover})})})]})}}]),n}(p.Component);m.defaultProps={error:null,label:null,minLengthToCallGet:2,optionsToShow:5,value:null,formatOption:function(t,e){return t},getOptionsMethod:function(t,e){return Promise.resolve([])},onBlur:function(t){},onChange:function(t,e,n){},onEnter:function(t,e,n,i){},onFocus:function(t){}},e.a=m},47:function(t,e,n){t.exports={InputSuggest:"styles_InputSuggest__2A8yc",InputSuggest__Input:"styles_InputSuggest__Input__3M6I2",InputSuggest__SuggestWrapper:"styles_InputSuggest__SuggestWrapper__2oTlG",InputSuggest__SuggestWrapper_closing:"styles_InputSuggest__SuggestWrapper_closing__2dtNH",InputSuggest__SuggestWrapper_opening:"styles_InputSuggest__SuggestWrapper_opening__1rdBj",InputSuggest__SuggestWrapper_visible:"styles_InputSuggest__SuggestWrapper_visible__7InKm",InputSuggest__Suggest:"styles_InputSuggest__Suggest__23iYc"}},53:function(t,e,n){"use strict";var i=n(27);n.d(e,"a",(function(){return i.a}));var s=n(26);n.d(e,"b",(function(){return s.a}))}}]);
//# sourceMappingURL=12.258473b8.chunk.js.map