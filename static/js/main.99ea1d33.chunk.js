(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var c=a(3),n=a.n(c),s=a(4),i=a(5),r=a(7),b=a(6),d=a(1),l=(a(12),a(0)),o=function(t){var e=t.tabs,a=t.selectedTabId,c=t.onTabSelected,n=e.find((function(t){return t.id===a}))||e[0];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{className:a===t.id?"is-active":"",children:Object(l.jsx)("a",{href:"#".concat(t.id),id:t.id,onClick:c,children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:n.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(t){Object(r.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={tabs:j,selectedTab:j[0]},t.setTable=function(e){var a=e.currentTarget.id,c=j.find((function(t){return t.id===a}))||j[0];t.setState({selectedTab:c})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsxs)("h1",{className:"title",children:["Selected tab is\xa0",t.title]}),Object(l.jsx)(o,{tabs:this.state.tabs,selectedTabId:t.id,onTabSelected:this.setTable})]})}}]),a}(d.Component);n.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.99ea1d33.chunk.js.map