(this.webpackJsonpDBcontrol=this.webpackJsonpDBcontrol||[]).push([[0],{49:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),r=c.n(n),d=c(19),l=c(7),j=c(8),o=c(4),i=c.n(o),b=c(9),u=c(3),h=c(0),x=function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Customer name"}),Object(h.jsx)("th",{scope:"col",children:"Partner name"}),Object(h.jsx)("th",{scope:"col",children:"Type of work"}),Object(h.jsx)("th",{scope:"col",children:"N\xb0 MPR file"}),Object(h.jsx)("th",{scope:"col"})]})},O=function(e){return Object(h.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog  modal-xl modal-dialog-centered",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title fs-4",id:"exampleModalLabel",children:"Edit Row"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"card p-3",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsx)(x,{})}),Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:"1"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"cName",className:"w-100",value:e.rowToUpdate.cName,onChange:e.rowToUpdateFunc})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"pName",className:"w-100",value:e.rowToUpdate.pName,onChange:e.rowToUpdateFunc})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"type",className:"w-100",value:e.rowToUpdate.type,onChange:e.rowToUpdateFunc})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"mpr",className:"w-100",value:e.rowToUpdate.mpr,onChange:e.rowToUpdateFunc})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn btn-outline-dark shadow-sm fs-6 p-0 px-2","data-bs-dismiss":"modal",onClick:e.updatedRow,children:"Update"})})]})})]})})]})})})},m=function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("h4",{className:"fs-5 mb-1",children:"Filter"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"cName",className:"w-50 shadow-sm outline-success",onChange:e.handleFilterRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"pName",className:"w-50 shadow-sm outline-success",onChange:e.handleFilterRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"type",className:"w-50 shadow-sm outline-success",onChange:e.handleFilterRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"mpr",className:"w-50 shadow-sm outline-success",onChange:e.handleFilterRowValues})})]})},p=c.p+"static/media/logo.3b0495ec.png",w=function(e){return Object(h.jsx)("div",{className:"text-center my-5",children:Object(h.jsxs)("div",{className:"card shadow my-2",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(h.jsx)("h1",{className:"display-3 mt-3",children:"Data List"}),Object(h.jsx)("img",{src:p,alt:"Logo",className:"",Style:"width:100px; height:90px"})]}),Object(h.jsx)("p",{className:"display-6 fs-6",children:"By David Saal"})]})})},f=c(18),N=function(e){var t=!Object.values(e.newRow).every((function(e){return""===e}));return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("button",{className:"btn btn-outline-dark shadow-sm fs-6 p-0 px-1",onClick:t?e.addRow:function(){return e.setEmptyMessage(!0)},children:"Add"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"cName",className:"w-50 shadow-sm outline-success",onChange:e.handleNewRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"pName",className:"w-50 shadow-sm outline-success",onChange:e.handleNewRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"type",className:"w-50 shadow-sm outline-success",onChange:e.handleNewRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",name:"mpr",className:"w-50 shadow-sm outline-success",onChange:e.handleNewRowValues})}),Object(h.jsx)("td",{children:Object(h.jsx)(f.CSVLink,{data:e.rows,children:Object(h.jsx)("button",{className:"btn btn-outline-dark shadow-sm fs-6 p-0 px-1 ms-4",children:"Csv"})})})]})},y=c(5),v=c.n(y),g=c(10),C=c.n(g);c(49);var F=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(u.a)(n,2),o=r[0],p=r[1],f=Object(s.useState)(!1),y=Object(u.a)(f,2),g=y[0],F=y[1],R=Object(s.useState)(0),k=Object(u.a)(R,2),T=k[0],S=k[1],E=Object(s.useState)({cName:"",pName:"",type:"",mpr:""}),U=Object(u.a)(E,2),V=U[0],L=U[1],B=Object(s.useState)({}),M=Object(u.a)(B,2),_=M[0],D=M[1],J=Object(s.useState)(!1),P=Object(u.a)(J,2),z=P[0],A=P[1],I=Object(s.useState)({name:"",value:""}),q=Object(u.a)(I,2),G=q[0],H=q[1],K=Object(s.useState)(!1),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=Object(s.useRef)(null),Z=function(){var e=Object(b.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dbcontrol-server.herokuapp.com");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){Z().then((function(e){p(!1),a(e)}))}),[]),Object(s.useEffect)((function(){Y.current;A(!1)}),[z]);var $=function(e){var t=e.target,c=t.name,s=t.value;D(Object(j.a)(Object(j.a)({},_),{},Object(l.a)({},c,s)))},ee=function(){var e=Object(b.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,fetch("https://dbcontrol-server.herokuapp.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newRow:V})});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,200===t.status?a([].concat(Object(d.a)(c),[s])):404===t.status&&alert("Error saving to database."),F(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(b.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dbcontrol-server.herokuapp.com",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({rowToUpdate:_})});case 2:200===(t=e.sent).status?(s=c.findIndex((function(e){return e._id===_._id})),c[s]=_):404===t.status&&alert("Error saving to database.");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(b.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(t.target.id),e.next=3,fetch("https://dbcontrol-server.herokuapp.com",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.target.id})});case 3:200===(s=e.sent).status?a(c.filter((function(e){return e._id!==t.target.id}))):405===s.status&&alert("Error deleting.");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container mb-4",children:[Object(h.jsx)(w,{}),Object(h.jsxs)("div",{className:"card p-3 pb-0",children:[Object(h.jsxs)("table",{className:"table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)(m,{handleFilterRowValues:function(e){var t=e.target,c=t.name,s=t.value;H({name:c,value:s})}}),Object(h.jsx)(x,{})]}),Object(h.jsxs)("tbody",{children:[o?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0 my-2",count:3})}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0 my-2",count:3})}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0 my-2",count:3})}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0 my-2",count:3})})]}):c.length>0?c.filter((function(e){return G.name?e[G.name].toLowerCase().includes(G.value.toLowerCase()):e})).map((function(e,t){return T===e._id?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)(C.a,{type:"Oval",color:"#00BFFF",height:30,width:30})}),Object(h.jsx)("td",{children:Object(h.jsx)(C.a,{type:"Oval",color:"#00BFFF",height:30,width:30})}),Object(h.jsx)("td",{children:Object(h.jsx)(C.a,{type:"Oval",color:"#00BFFF",height:30,width:30})}),Object(h.jsx)("td",{children:Object(h.jsx)(C.a,{type:"Oval",color:"#00BFFF",height:30,width:30})})]},e._id):Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.cName}),Object(h.jsx)("td",{children:e.pName}),Object(h.jsx)("td",{children:e.type}),Object(h.jsx)("td",{children:e.mpr}),Object(h.jsxs)("td",{children:[Object(h.jsx)(O,{rowToUpdate:_,rowToUpdateFunc:$,updatedRow:te}),Object(h.jsx)("button",{type:"button",className:"btn zoom","aria-label":"Edit",onClick:function(){return D(e),A(!0)},children:"\u270e"}),Object(h.jsx)("button",{type:"button",className:"d-none",ref:Y,id:e._id,"data-bs-toggle":"modal","data-bs-target":"#exampleModal"}),Object(h.jsx)("button",{type:"button",className:"btn-close fs-8 zoom","aria-label":"Close",id:e._id,onClick:ce})]})]},e._id)})):Object(h.jsx)("div",{className:"justify-content-center d-flex text-center",children:Object(h.jsx)("h4",{className:"fst-italic text-center",children:"(Empty List)"})}),g&&Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:c.length+1}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0"})}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0"})}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0"})}),Object(h.jsx)("td",{children:Object(h.jsx)(v.a,{className:"w-75 rounded-0"})})]})]}),Object(h.jsx)("thead",{children:Object(h.jsx)(N,{handleNewRowValues:function(e){X(!1);var t=e.target,c=t.name,s=t.value;L(Object(j.a)(Object(j.a)({},V),{},Object(l.a)({},c,s)))},newRow:V,setEmptyMessage:X,addRow:ee,rows:c})})]}),W&&Object(h.jsx)("p",{className:"display-6 text-danger text-center my-0",children:"At least one field must be filled out."})]})]})};c(52);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.8ead230e.chunk.js.map