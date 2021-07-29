(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),s=n(11),i=n(3),u=n(4),l=n(6),m=n(5),d=n(20),b=n(10),h=n(2),j=n.n(h),C=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={number:"",name:""},t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{className:j.a.ContactForm,onSubmit:this.handleSubmit,children:[Object(C.jsxs)("label",{className:j.a.ContactLabel,htmlFor:this.nameInputId,children:["\u0418\u043c\u044f",Object(C.jsx)("input",{className:j.a.ContactInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId,value:this.state.name,onChange:this.handleChange})]}),Object(C.jsxs)("label",{htmlFor:this.numberInputId,className:j.a.ContactLabel,children:["\u041d\u043e\u043c\u0435\u0440",Object(C.jsx)("input",{className:j.a.ContactInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(C.jsx)("button",{className:j.a.ContactBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=n(7),O=n.n(f),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:O.a.ContactListUl,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{className:O.a.ContactListLi,children:[Object(C.jsxs)("p",{children:[a,":",Object(C.jsx)("span",{children:c})]}),Object(C.jsx)("button",{className:O.a.ContactBtnDel,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{children:["Find contacts by name",Object(C.jsx)("input",{type:"text",value:e,onChange:n})]})},x=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.addContact=function(e,n){var a={id:Object(d.a)(),name:e,number:n};t.state.contacts.map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacs.")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.constacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(p,{onSubmit:this.addContact}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(v,{contacts:e,onDeleteContact:this.deleteContact}),Object(C.jsx)(g,{value:t,onChange:this.changeFilter})]})}}]),n}(a.Component);n(18);r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__o0ko1",ContactLabel:"ContactForm_ContactLabel__qvL4g",ContactInput:"ContactForm_ContactInput__3N-gr",ContactBtn:"ContactForm_ContactBtn__3UMvi"}},7:function(t,e,n){t.exports={ContactListLi:"ContactList_ContactListLi__2Ql3B",ContactBtnDel:"ContactList_ContactBtnDel__364OF"}}},[[19,1,2]]]);
//# sourceMappingURL=main.82e00f6c.chunk.js.map