(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(0),a=n.n(r),i=n(1),o=(n(34),n(238)),l=n.n(o),c=n(125),s=n(138),u=n(32),m=n(148),d=n(140),p=n(4),f=n(122),h=n(123);n(57),n(241);function g(e){for(var t=e.items,n=e.site,r=Object(i.g)(),o=null,g=[],y=new Array,b=0;b<t.length;b++){var w=t[b];if(parseInt(w.SItemCode)==parseInt(r.producto)){o=w;break}}o&&(y=Object(f.a)(t,o.ItemExt.Group.SGroupCode,3),""!=o.imageGallery?o.imageGallery.split(",").map((function(e){g.push({img:e})})):g=[{img:"http://royalresorts.mobi/rr2016/market/img/products/coca-cola-regular-lata-1-six-pack.jpg"!=o.SPahtImage?o.SPahtImage:"/img/default.jpg"}]);return a.a.createElement(l.a,{title:o?""!=o.SItemName?o.SItemName:o.SItemDesc.toLowerCase():"Item Description"},o?a.a.createElement("div",{id:"root"},a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"main itemDetail"},a.a.createElement("div",{className:"main_container"},a.a.createElement(c.a,{className:"row"},a.a.createElement("div",{className:"section x8",style:{display:"block"}},a.a.createElement("div",{className:"slidecontainer"},a.a.createElement(s.a,{slides:g,width:"200px",showTumbs:!0}))),a.a.createElement("div",{className:"section x4"},a.a.createElement("div",{className:"details"},a.a.createElement("h3",null,""!=o.SItemName?o.SItemName.toLowerCase():o.SItemDesc.toLowerCase()),a.a.createElement("span",null,"(",o.ItemMeasure.toLowerCase(),")"),a.a.createElement("hr",null),a.a.createElement("table",{width:"100%"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("strong",null,Object(u.a)("Unit price"),":")," "),a.a.createElement("td",null,"$ ",o.DPrice," ",Object(p.b)())),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("strong",null,Object(u.a)("Code"),":")),a.a.createElement("td",null,o.SItemCode)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("strong",null,Object(u.a)("Brand"),":")),a.a.createElement("td",null,o.SItemMark)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("strong",null,Object(u.a)("Min. for sale"),":")),a.a.createElement("td",null,o.MinSell)))),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("strong",null,Object(u.a)("About this Item"),":"),a.a.createElement("br",null),""!=o.sLongDescription?o.sLongDescription:o.SItemDesc.toLowerCase()))),a.a.createElement("div",{className:"section x4"},a.a.createElement("div",{className:"item_container"},a.a.createElement(m.a,{item:o,detail:!0})),a.a.createElement("div",{className:"promo_container"},a.a.createElement("a",{href:n.configuration.contenido.imgOnItemDetail.url},a.a.createElement("picture",{loading:"lazy"},""!=n.configuration.contenido.imgOnItemDetail.imgM?a.a.createElement("source",{media:"(max-width: 767px)",srcSet:"".concat(n.configuration.contenido.imgOnItemDetail.imgM)}):"",a.a.createElement("source",{media:"(min-width: 767px)",srcSet:"".concat(n.configuration.contenido.imgOnItemDetail.img)}),a.a.createElement(h.LazyLoadImage,{className:"img",src:n.configuration.contenido.imgOnItemDetail.img,alt:"Banner On Detail"})))))),y.length>0&&3==y.length?a.a.createElement(d.a,{items:y}):"")))):a.a.createElement("div",{id:"root",style:{backgroundColor:"white"}},a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"main itemDetail"},a.a.createElement("div",{className:"main_container"},a.a.createElement("h2",{style:{textAlign:"center",color:"#535353",minHeight:"400px",display:"flex",justifyContent:"center",alignItems:"center"}},Object(u.a)("This Item doesn´t exist")))))))}},122:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return m}));var r=n(57),a=n.n(r);function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t=window.location.search.substr(1);return new URLSearchParams(t).get(e)}function c(){var e=window.location.search.substr(1);return new URLSearchParams(e)}function s(e,t){var n=screen.width/2-200,r="menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top="+(screen.height/2-300)+", left="+n;window.output=function(e){t(e)},window.open(e.urlToGetTokenToLogin+"?Code="+e.codeToGetTokenToLogin+"&ReturnUrl="+window.location.protocol+"//"+window.location.hostname+("localhost"==window.location.hostname?":3000":"")+"/redirect.html","CNN_WindowName",r)}function u(e,t,n){for(var r=[],o=0,l=a.a.filter(e,(function(e){return e.ItemExt.Group.SGroupCode==t})),c=function(){var e=a.a.random(0,Object.keys(l).length),t=l.slice(e,e+1);t.length>0&&-1==a.a.findIndex(r,(function(e){return e.IItemID==t[0].IItemID}))&&r.push.apply(r,i(t)),o++};r.length<n&&o<1e3;)c();return r}function m(e,t){var n=screen.width/2-200,r="menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top="+(screen.height/2-300)+", left="+n;window.output=function(e){t(e)},window.open(e.urlToRetrieveTokenToLogin+"?Code="+e.codeToGetTokenToLogin+"&ReturnUrl="+window.location.protocol+"//"+window.location.hostname+("localhost"==window.location.hostname?":3000":"")+"/redirect.html","CNN_WindowName",r)}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i(e){return a.a.createElement("div",{className:"main_container "},e.title?a.a.createElement("div",{className:"title"},e.title):"",a.a.createElement("div",{className:"list grid ".concat(e.className)},e.children))}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),i=(n(123),n(147));function o(e){var t=e.slides,n=void 0===t?[]:t,r=(e.width,e.showTumbs),o=void 0!==r&&r,l=n.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("img",{height:"auto",loading:"lazy",alt:"slide",src:e.img,srcSet:e.srcSet?e.srcSet:""}))}));return a.a.createElement(i.Carousel,{showArrows:!0,showIndicators:!0,showStatus:!1,showThumbs:o,interval:1e4,autoPlay:!0,infiniteLoop:!0},l)}},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(32),o=n(124);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){var t=l(Object(r.useState)(!1),2),n=t[0],c=t[1];return a.a.createElement("div",{className:"main_container ".concat(e.className," ").concat(e.inCart?"incartRelated":"")},a.a.createElement("div",{className:"list grid related ".concat(e.inCart?"incart":"")},a.a.createElement("div",{className:"title"},a.a.createElement("h3",null,Object(i.a)("Related Products"))),a.a.createElement(o.a,{isRelated:e.inCart?"true":"",item:e.items[0]}),a.a.createElement(o.a,{isRelated:e.inCart?"true":"",item:e.items[1]}),a.a.createElement(o.a,{isRelated:e.inCart?"true":"",item:e.items[2]}),e.inCart?0==n?a.a.createElement("div",{className:"showMore",onClick:function(e){e.preventDefault(),c(!0)}},a.a.createElement("a",{href:"#"},Object(i.a)("Show More"))):a.a.createElement(a.a.Fragment,null," ",a.a.createElement(o.a,{isRelated:"true",item:e.items[3]}),a.a.createElement(o.a,{isRelated:"true",item:e.items[4]}),a.a.createElement(o.a,{isRelated:"true",item:e.items[5]})):""))}},238:function(e,t,n){"use strict";var r=n(0),a=n(19),i=n(239);function o(){}o.prototype=Object.create(r.Component.prototype),o.displayName="DocumentTitle",o.propTypes={title:a.string.isRequired},o.prototype.render=function(){return this.props.children?r.Children.only(this.props.children):null},e.exports=i((function(e){var t=e[e.length-1];if(t)return t.title}),(function(e){var t=e||"";t!==document.title&&(document.title=t)}))(o)},239:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(0),i=r(a),o=r(n(240));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function m(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){u.push(this),m()},l.componentDidUpdate=function(){m()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),m()},l.render=function(){return i.createElement(r,this.props)},a}(a.Component);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(d,"canUseDOM",c),d}}},240:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],m=t[s];if(!1===(a=n?n.call(r,u,m,s):void 0)||void 0===a&&u!==m)return!1}return!0}},241:function(e,t,n){var r=n(242);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(58)(r,a);r.locals&&(e.exports=r.locals)},242:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,".itemDetail{padding:20px 0px 5px;box-sizing:border-box}.itemDetail .slidecontainer{flex:1;background-color:#fff}.itemDetail .slidecontainer .carousel .thumbs-wrapper{margin-top:0px !important}.itemDetail .slidecontainer .carousel .thumbs-wrapper .thumbs{margin:10px 0px;display:flex;justify-content:center}.itemDetail .slidecontainer .carousel .slide>div{background-color:#fff;display:flex;justify-content:center;align-items:center;flex:1}.itemDetail .slidecontainer .carousel .slide{display:flex;justify-content:stretch;align-items:stretch}.itemDetail .slidecontainer .carousel .slide img{max-width:400px}.itemDetail .section{display:flex;justify-content:stretch;align-items:stretch;display:flex;flex-direction:column;align-items:stretch}.itemDetail .section>div:first-child{background:#fff;border-radius:10px}.itemDetail .details{padding:15px 10px;box-sizing:border-box}.itemDetail .details h3{text-align:left;font-weight:600;font-size:1.2rem;margin:0px;padding:0px}.itemDetail .details hr{margin:20px 0px}.itemDetail .details table{margin-bottom:10px;margin-top:10px}.itemDetail .item_container{padding:15px 10px;box-sizing:border-box}.itemDetail .promo_container{margin-top:10px;padding:15px 10px;background:#fff;border-radius:10px;flex:1}",""])}}]);