webpackJsonp([2],{441:function(module,exports,e){"use strict";(function(module){function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(53),l=t(r),u=e(50),c=t(u),i=e(0),f=t(i),s=e(51),d=t(s),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=e(12),y=(t(m),{Index:{displayName:"Index"}}),h=(0,d.default)({filename:"D:/react/newProjectVersion1.0/components/util/Index.js",components:y,locals:[module],imports:[f.default]}),g=(0,c.default)({filename:"D:/react/newProjectVersion1.0/components/util/Index.js",components:y,locals:[],imports:[f.default,l.default]}),b=function(e){return function(t){return h(g(t,e),e)}}("Index")(function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),p(t,[{key:"componentDidMount",value:function(){var e=document.documentElement.clientHeight,t=document.getElementById("indexbg");document.getElementById("indexbg")&&(t.style.height=e-180+"px")}},{key:"genColorLump",value:function(){return console.log(this.props.indexNav),this.props.indexNav.map(function(e){return f.default.createElement("div",{className:"colorLump"},f.default.createElement("a",{href:e.link},e.name))})}},{key:"render",value:function(){return f.default.createElement("div",{id:"indexbg"},f.default.createElement("div",{style:{padding:"10% 5%"}},this.genColorLump()))}}]),t}(f.default.Component));exports.default=b}).call(exports,e(27)(module))},561:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n=e(441),o=t(n),a=e(83),r=t(a);document.getElementById("layout")&&ReactDOM.render(React.createElement(r.default,null,React.createElement(o.default,pageParas)),document.getElementById("layout"))},83:function(module,exports,e){"use strict";(function(module){function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var r=(e(87),e(20)),l=t(r),u=(e(126),e(90)),c=t(u),i=(e(89),e(88)),f=t(i),s=e(53),d=t(s),p=e(50),m=t(p),y=e(0),h=t(y),g=e(51),b=t(g),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),O={MyLayout:{displayName:"MyLayout"}},j=(0,b.default)({filename:"D:/react/newProjectVersion1.0/components/util/MyLayout.js",components:O,locals:[module],imports:[h.default]}),w=(0,m.default)({filename:"D:/react/newProjectVersion1.0/components/util/MyLayout.js",components:O,locals:[],imports:[h.default,d.default]}),R=f.default.Header,k=f.default.Sider,x=f.default.Content,P=(f.default.Footer,c.default.SubMenu),M=function(e){return function(t){return j(w(t,e),e)}}("MyLayout")(function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={collapsed:!1,navData:[],title:a.props.title},a}return a(t,e),E(t,[{key:"componentDidMount",value:function(){var e=document.documentElement.clientHeight;document.getElementById("contaniner").style.height=e+"px",this.setState({navData:this.props.navTree})}},{key:"toggle",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"logout",value:function(){window.open("/logout")}},{key:"genNavOptions",value:function(){return this.state.navData.map(function(e){var t=e.children.map(function(e){return React.createElement(c.default.Item,{key:e.name},React.createElement("a",{href:e.link},e.name))});return React.createElement(P,{key:e.name,title:React.createElement("span",null,e.name)},t)})}},{key:"render",value:function(){return React.createElement(f.default,{id:"contaniner"},React.createElement(k,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},React.createElement("div",{className:"logo"},""),React.createElement(c.default,{theme:"dark",mode:"inline",defaultSelectedKeys:this.props.defaultSelectedKeys,defaultOpenKeys:this.props.defaultOpenKeys},this.genNavOptions())),React.createElement(f.default,null,React.createElement(R,{style:{background:"#fff",padding:24}},React.createElement(l.default,{style:{fontSize:18,float:"left"},className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle.bind(this)}),React.createElement("h2",{style:{float:"left",position:"relative",top:"-26px",left:"40%"}},this.state.title||"信息管理系统"),React.createElement(l.default,{onClick:this.logout.bind(this),style:{fontSize:18,float:"right"},type:"logout",title:"退出系统"})),React.createElement(x,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},this.props.children)))}}]),t}(React.Component));document.getElementById("layout")&&ReactDOM.render(React.createElement(M,v({},pageParas,{navTree:navTree})),document.getElementById("layout")),exports.default=M}).call(exports,e(27)(module))}},[561]);