(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{58:function(e,t,n){e.exports=n(73)},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=n(32),s=n(40),l=n(28),d=n(13),u=n(14),m=n(16),f=n(15),b=n(105),v=n(103),h=n(51),p=n(107),E=n(50),g=n.n(E),O=n(106),j=(n(63),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={edit:!1,newLabel:e.props.label},e.onStartEdit=function(){e.setState({edit:!0})},e.onEdit=function(t){e.setState({newLabel:t.target.value})},e.saveChanging=function(t){if("edit-form"===t.target.className&&t.preventDefault(),!t.target.className.match(/InputBase/i)||t.target.className.match(/OutlinedInput/i)){e.setState({edit:!1});var n=e.props.forEdit;(0,n.edit)(n.id,e.state.newLabel)}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.done,a=e.onMarkAsDone,r=e.onDeleteItem,i=this.state.edit,c="item";return n&&(c+=" done"),o.a.createElement("li",{className:c},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(p.a,{color:"secondary",onClick:a,checked:n})),o.a.createElement(I,{label:t,edit:i,onStartEdit:this.onStartEdit,onEdit:this.onEdit,saveChanging:this.saveChanging})),o.a.createElement("button",{onClick:r},o.a.createElement(g.a,{color:"secondary"})))}}]),n}(a.Component)),I=function(e){return e.edit?o.a.createElement(y,{label:e.label,onEdit:e.onEdit,saveChanging:e.saveChanging}):o.a.createElement(k,{label:e.label,onStartEdit:e.onStartEdit})},k=function(e){return o.a.createElement("span",{className:"label",title:"Click to edit",onClick:e.onStartEdit},e.label)},y=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.props.saveChanging)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.props.saveChanging)}},{key:"render",value:function(){var e=this.props,t=e.label,n=e.onEdit,a=e.saveChanging;return o.a.createElement("form",{onSubmit:a,className:"edit-form"},o.a.createElement(O.a,{autoFocus:!0,id:"standard-basic",onChange:n,defaultValue:t}))}}]),n}(a.Component),C=j,S=(n(69),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onMarkAsDone,a=e.onDeleteItem,r=e.onEdit,i=t.map((function(e){var t=e.id,i=Object(h.a)(e,["id"]);return o.a.createElement(C,Object.assign({},i,{key:t,onMarkAsDone:function(){n(t)},onDeleteItem:function(){a(t)},forEdit:{id:t,edit:r}}))}));return o.a.createElement("ul",{className:"list"},i)}}]),n}(a.Component)),A=n(104),D=(n(70),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onChange=function(t){e.setState({value:t.target.value})},e.onAddItem=function(t){t.preventDefault();var n=e.state.value;n&&(e.props.onAddItem(n),e.setState({value:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-item-panel",onSubmit:this.onAddItem},o.a.createElement(O.a,{id:"outlined-basic",label:"Task",variant:"outlined",onChange:this.onChange,value:this.state.value,autoComplete:"off"}),o.a.createElement(A.a,{variant:"outlined",type:"submit"},"Add"))}}]),n}(a.Component)),N=(n(71),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onAddItem,a=e.onMarkAsDone,r=e.onDeleteItem,i=e.onEdit,c=o.a.createElement(S,{todos:t,onMarkAsDone:a,onDeleteItem:r,onEdit:i}),s=o.a.createElement("div",{className:"empty-block"},"Nothing here..."),l=t.length?c:s;return o.a.createElement(b.a,{maxWidth:"lg"},o.a.createElement(v.a,{elevation:3,className:"layout"},o.a.createElement(D,{onAddItem:n}),l))}}]),n}(a.Component)),x=(n(72),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).maxId=localStorage.getItem("maxId")||0,e.state={todos:JSON.parse(localStorage.getItem("todos"))||[]},e.onAddItem=function(t){e.setState((function(n){var a=n.todos;return{todos:[].concat(Object(l.a)(a),[{label:t,id:e.maxId++,done:!1}])}}))},e.getIndex=function(t){return e.state.todos.findIndex((function(e){return e.id===t}))},e.stateProcessing=function(t,n,a){var o=e.getIndex(t),r=e.state.todos[o],i=Object(s.a)(Object(s.a)({},r),{},Object(c.a)({},n,a||!r[n]));e.setState((function(e){var t=e.todos;return{todos:[].concat(Object(l.a)(t.slice(0,o)),[i],Object(l.a)(t.slice(o+1)))}}))},e.onDeleteItem=function(t){e.setState((function(n){var a=n.todos,o=e.getIndex(t);return{todos:[].concat(Object(l.a)(a.slice(0,o)),Object(l.a)(a.slice(o+1)))}}))},e.onMarkAsDone=function(t){e.stateProcessing(t,"done")},e.onEdit=function(t,n){n?e.stateProcessing(t,"label",n):e.onDeleteItem(t)},e}return Object(u.a)(n,[{key:"render",value:function(){return localStorage.setItem("todos",JSON.stringify(this.state.todos)),localStorage.setItem("maxId",this.maxId),o.a.createElement(N,{todos:this.state.todos,onAddItem:this.onAddItem,onMarkAsDone:this.onMarkAsDone,onDeleteItem:this.onDeleteItem,onEdit:this.onEdit})}}]),n}(a.Component));i.a.render(o.a.createElement(x,null),document.querySelector("#root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.993ab60b.chunk.js.map