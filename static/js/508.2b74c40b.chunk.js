"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[508],{3137:function(n,e,t){t.d(e,{W:function(){return i}});var r,o=t(168),i=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  border: 1px solid black;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n"])))},5508:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,i,a,s,c,l,u=t(9439),d=t(2791),h=t(9434),p=t(168),x=t(6444),f=x.ZP.form(r||(r=(0,p.Z)(["\n  // border: 1px solid black;\n  width: 320px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 10px 10px;\n  margin: auto;\n"]))),m=x.ZP.input(o||(o=(0,p.Z)(["\n  margin: 5px 0 15px;\n"]))),b=x.ZP.button(i||(i=(0,p.Z)(["\n  width: 40%;\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  border-radius: 5px;\n  border: none;\n  border: 1px solid black;\n  cursor: pointer;\n  background-color: grey;\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),g=function(n){return n.filter},v=function(n){return n.contacts.items},j=function(n){return n.contacts.isLoading},Z=t(8038),y=t(208),k=t(184),w=function(){var n=(0,d.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)(""),i=(0,u.Z)(o,2),a=i[0],s=i[1],c=function(n){var e=n.currentTarget,t=e.name,o=e.value;"name"===t?r(o):s(o)},l=(0,h.v9)(v),p=(0,h.I0)();return(0,k.jsxs)(f,{onSubmit:function(n){n.preventDefault();var e={name:t,number:a};l.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?(0,Z.f)(t):p((0,y.ky)(e)),r(""),s("")},children:[(0,k.jsx)("p",{children:"Name"}),(0,k.jsx)(m,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:c,required:!0}),(0,k.jsx)("p",{children:"Number"}),(0,k.jsx)(m,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:a,onChange:c,required:!0}),(0,k.jsx)(b,{type:"submit",children:"Add contact"})]})},C=x.ZP.li(a||(a=(0,p.Z)(["\n  display: inline-flex;\n  justify-content: space-between;\n  min-width: 70%;\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),P=x.ZP.button(s||(s=(0,p.Z)(["\n  line-height: 1.15;\n  border-radius: 5px;\n  border: none;\n  border: 1px solid black;\n  cursor: pointer;\n  background-color: #cc9797;\n  :hover,\n  :focus {\n    background-color: red;\n  }\n"]))),F=function(){var n=(0,h.v9)(v),e=(0,h.v9)(g),t=(0,h.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,k.jsx)("ul",{children:r.map((function(n){return(0,k.jsxs)(C,{children:[n.name,": ",n.number,(0,k.jsx)(P,{type:"button",onClick:function(){return e=n.id,t((0,y.GK)(e));var e},children:"Delete"})]},n.id)}))})},_=t(3137),z=t(6895),A=x.ZP.input(c||(c=(0,p.Z)(["\n  height: 20px;\n  width: 250px;\n  padding: 5px 10px;\n  font-size: 14px;\n  color: rgb(0, 0, 0);\n  outline: none;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 3px;\n"]))),L=function(){var n=(0,h.v9)(g),e=(0,h.I0)();return(0,k.jsxs)("div",{className:"FilterWrapper",children:["Find contact by name",(0,k.jsx)("form",{action:"",children:(0,k.jsx)("label",{htmlFor:"",children:(0,k.jsx)(A,{type:"text",name:"filter",value:n,onChange:function(n){e((0,z.W)(n.currentTarget.value))}})})})]})},I=t(5243),B=x.ZP.div(l||(l=(0,p.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),N=function(){return(0,k.jsx)(B,{children:(0,k.jsx)(I.g4,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})},O=t(8174),T=function(){var n=(0,h.I0)();(0,d.useEffect)((function(){n((0,y.yF)())}),[n]);var e=(0,h.v9)(v),t=(0,h.v9)(j);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(O.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,k.jsxs)(_.W,{children:[(0,k.jsx)("h2",{children:"Phonebook"}),(0,k.jsx)(w,{}),(0,k.jsx)("h2",{children:"Contacts"}),t&&(0,k.jsx)(N,{}),e.length>1&&(0,k.jsx)(L,{}),e.length>0?(0,k.jsx)(F,{}):(0,k.jsx)("p",{style:{marginBottom:"25px",lineHeight:"1.15"},children:"You have no contacts saved"})]})]})}}}]);
//# sourceMappingURL=508.2b74c40b.chunk.js.map