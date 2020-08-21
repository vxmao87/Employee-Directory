(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),s=a(2),o=a.n(s),m=a(13),u=a(14),i=a(15),h=a(18),d=a(17),p=a(16),f=a.n(p),E=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=u")};var y=function(e){return r.a.createElement("div",{className:"container"},e.children)};a(42);var v=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container-full-bg"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Please use the Search bar to find any employees you are looking for! You can also sort by the name of an employee.")))};a(43);var b=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group col-md-auto"},r.a.createElement("label",{for:"employeeSearchTerm"},"Enter your search terms here: "),r.a.createElement("input",{className:"form-control",id:"searchTerm",placeholder:"John Moe",onChange:e.handleInputChange})))};a(44);var k=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",className:"employeePic"},"Image"),r.a.createElement("th",{scope:"col",className:"employeeName",onClick:e.handleLinkClick},"Name (click to sort)"),r.a.createElement("th",{scope:"col",className:"employeePhone"},"Phone"),r.a.createElement("th",{scope:"col",className:"employeeEmail"},"Email"),r.a.createElement("th",{scope:"col",className:"employeeDOB"},"DOB"))};a(45);var g=function(e){return r.a.createElement("tr",{key:e.key},r.a.createElement("th",{scope:"row",className:"employeePicture"},r.a.createElement("img",{src:e.image,alt:e.name.first})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob))};var N=function(e){var t=e.results;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{className:"table table-responsive-lg table-striped table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement(k,{handleLinkClick:e.handleLinkClick})),r.a.createElement("tbody",null,t.length?t.map((function(e){return r.a.createElement(g,{key:e.index,image:e.picture.thumbnail,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date.substring(0,10)})})):r.a.createElement("tr",null))))))},C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:"",employees:{},searchResults:{},isSorted:!1},e.componentDidMount=function(){E().then((function(t){console.log(t.data.results),e.setState({employees:t.data.results,searchResults:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleLinkClick=function(t){if(t.preventDefault(),e.state.isSorted)return e.setState({searchResults:e.state.searchResults.reverse(),isSorted:!1});var a=e.state.employees.sort((function(e,t){return e.name.first>t.name.first?1:-1}));e.setState({searchResults:a,isSorted:!0})},e.handleInputChange=function(){var t=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.value.toLowerCase(),t.next=4,e.setState({searchTerm:n,searchResults:e.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(n)||e.name.last.toLowerCase().includes(n)}))});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement(v,null),r.a.createElement(b,{handleInputChange:this.handleInputChange,value:this.searchTerm}),r.a.createElement(N,{results:this.state.searchResults,handleLinkClick:this.handleLinkClick}))}}]),a}(n.Component);var S=function(){return r.a.createElement("div",null,r.a.createElement(C,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.087e2615.chunk.js.map