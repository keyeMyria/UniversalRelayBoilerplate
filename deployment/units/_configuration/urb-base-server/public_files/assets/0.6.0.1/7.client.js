webpackJsonp([7],{1348:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(315),f=r(u),c=n(71),s=n(518),p=r(s),d=n(0),b=r(d),y=n(50),m=n(504),h=r(m),v=n(2781),w=r(v),_=n(39),g=(r(_),{card:{minWidth:275}}),O=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.totalHeight,r=e.totalWidth,o=[{name:"totalWidth",value:r},{name:"totalHeight",value:n}];return b.default.createElement(h.default,null,b.default.createElement(f.default,{className:t.card},b.default.createElement(u.CardHeader,{title:"Viewport Dimensions"}),b.default.createElement(p.default,null,b.default.createElement(s.TableHead,null,b.default.createElement(s.TableRow,null,b.default.createElement(s.TableCell,null,"Property"),b.default.createElement(s.TableCell,{numeric:!0},"Value"))),b.default.createElement(s.TableBody,null,o.map(function(e){return b.default.createElement(s.TableRow,{key:e.name},b.default.createElement(s.TableCell,null,e.name),b.default.createElement(s.TableCell,{numeric:!0},e.value))}))),b.default.createElement(u.CardContent,null)))}}]),t}(b.default.Component);O.propTypes={},t.default=(0,y.createFragmentContainer)((0,c.withStyles)(g)((0,w.default)(O,["totalHeight","totalWidth"])),{Viewer:function(){return n(2783)}})},2781:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n,r,i;return r=n=function(n){function r(e,n){o(this,r);var l=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,n));i.call(l);for(var u=n.rbCtx.viewportDimensions,f={},c=t,s=Array.isArray(c),p=0,c=s?c:c["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var d;if(s){if(p>=c.length)break;d=c[p++]}else{if(p=c.next(),p.done)break;d=p.value}var b=d;f[b]=u.get(l,b)}return l.state=f,l}return l(r,n),f(r,[{key:"componentWillUnmount",value:function(){this.context.rbCtx.viewportDimensions.removeComponent(this)}},{key:"render",value:function(){var t=u({},this.state,this.props);return d.default.createElement(e,t)}}]),r}(d.default.Component),n.contextTypes={rbCtx:s.default.object.isRequired},i=function(){var e=this;this._handle_ViewportDimensionChange=function(){for(var n=e.context.rbCtx.viewportDimensions,r={},o=t,a=Array.isArray(o),l=0,o=a?o:o["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var i;if(a){if(l>=o.length)break;i=o[l++]}else{if(l=o.next(),l.done)break;i=l.value}var u=i;r[u]=n.get(e,u)}e.setState(r)}},r}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=i;var c=n(39),s=r(c),p=n(0),d=r(p);n(2782)},2782:function(e,t,n){var r=n(39);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.oneOf(["totalWidth","totalHeight"])},2783:function(e,t,n){"use strict";var r={kind:"Fragment",name:"ViewportDimensionsScreen_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]};r.hash="7878c8ec560d7ac66fbc83829a760f43",e.exports=r}});