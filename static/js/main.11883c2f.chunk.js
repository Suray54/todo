(this.webpackJsonppractise=this.webpackJsonppractise||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=(a(15),a(1)),i=a(9),l=a(3),d=a(4),u=a(6),m=a(5),p=a(2),h=(a(16),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isEditing:!1,task:e.props.task},e.handleChange=function(t){var a=t.target,n=a.value,o=a.name;e.setState(Object(p.a)({},o,n))},e.handleUpdate=function(t){t.preventDefault(),e.props.updateTodo(e.props.id,e.state.task),e.setState({isEditing:!1})},e.toggle=function(){e.setState({isEditing:!e.state.isEditing})},e.handleRemove=function(){var t=e.props;(0,t.removeTodo)(t.id)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.task;return this.state.isEditing?o.a.createElement("div",{className:"newTodo"},o.a.createElement("form",{className:"newTodo__editForm",onSubmit:this.handleUpdate},o.a.createElement("input",{name:"task",type:"text",placeholder:"New Todo",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"save"))):o.a.createElement("div",{className:"newTodo"},o.a.createElement("li",{className:this.props.completed?"todoTask completed":"todoTask",onClick:function(){return e.props.toggleTodo(e.props.id)}},t),o.a.createElement("div",{className:"todoButton"},o.a.createElement("button",{onClick:this.toggle},o.a.createElement("i",{className:"fa fa-pen"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{className:"fa fa-trash"}))))}}]),a}(n.Component)),f=a(21),v=(a(17),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={task:""},e.handleChange=function(t){var a=t.target,n=a.value,o=a.name;e.setState(Object(p.a)({},o,n))},e.handleSubmit=function(t){t.preventDefault(),e.props.createTodo(Object(s.a)(Object(s.a)({},e.state),{},{id:Object(f.a)(),completed:!1})),e.setState({task:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"todoForm"},o.a.createElement("h4",null,"Add a New Todo"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"task",type:"text",placeholder:"Write Something...",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"Add ")))}}]),a}(n.Component)),g=(a(18),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,task:"Stepping Out Of The Comfort Zone.",completed:!1},{id:2,task:"5 Second Rule.",completed:!1}]},e.create=function(t){e.setState({todos:[].concat(Object(i.a)(e.state.todos),[t])})},e.remove=function(t){e.setState({todos:e.state.todos.filter((function(e){return e.id!==t}))})},e.update=function(t,a){var n=e.state.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{task:a}):e}));e.setState({todos:n})},e.toggleCompleted=function(t){var a=e.state.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}));e.setState({todos:a})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo"},o.a.createElement("h1",null,"Todo List! ",o.a.createElement("span",null,"A simple react todo list app.")),o.a.createElement("ul",null,this.state.todos.map((function(t){return o.a.createElement(h,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.remove,updateTodo:e.update,toggleTodo:e.toggleCompleted})}))),o.a.createElement(v,{createTodo:this.create}))}}]),a}(n.Component));var b=function(){return o.a.createElement("div",null,o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.11883c2f.chunk.js.map