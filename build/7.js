(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return m});var t=n(59),o=n.n(t);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e){var t=window.location.search.substr(1);return new URLSearchParams(t).get(e)}function l(){var e=window.location.search.substr(1);return new URLSearchParams(e)}function c(e,t){var n=screen.width/2-200,n="menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top="+(screen.height/2-300)+", left="+n;window.output=function(e){t(e)},window.open(e.urlToGetTokenToLogin+"?Code="+e.codeToGetTokenToLogin+"&ReturnUrl="+window.location.protocol+"//"+window.location.hostname+("localhost"==window.location.hostname?":3000":"")+"/redirect.html","CNN_WindowName",n)}function s(e,t,n){for(var a=[],r=0,l=o.a.filter(e,function(e){return e.ItemExt.Group.SGroupCode==t});a.length<n&&r<1e3;)!function(){var e=o.a.random(0,Object.keys(l).length),t=l.slice(e,e+1);0<t.length&&-1==o.a.findIndex(a,function(e){return e.IItemID==t[0].IItemID})&&a.push.apply(a,i(t)),r++}();return a}function m(e,t){var n=screen.width/2-200,n="menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top="+(screen.height/2-300)+", left="+n;window.output=function(e){t(e)},window.open(e.urlToRetrieveTokenToLogin+"?Code="+e.codeToGetTokenToLogin+"&ReturnUrl="+window.location.protocol+"//"+window.location.hostname+("localhost"==window.location.hostname?":3000":"")+"/redirect.html","CNN_WindowName",n)}},120:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),l=n.n(r),o=n(34),i=n(121),c=n(122),s=n(3);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e){var t=e.item,n=e.recommendations,n=void 0===n?null:n,e=e.isRelated,e=void 0===e?null:e,a=m(Object(r.useState)(""),2),a=(a[0],a[1],m(Object(r.useState)(0),2)),a=(a[0],a[1],m(Object(r.useState)(""),2));a[0],a[1];return window.scrollTo({top:0,behavior:"smooth"}),void 0===t?l.a.createElement("div",{style:{backgroundColor:"white"}},"no hay"):l.a.createElement("div",{className:"item ".concat(e?"isRelated":"")},l.a.createElement("div",{className:"item_content"},l.a.createElement("div",{className:"image  ".concat(n?"recomendationsImg":"")},l.a.createElement(c.LazyLoadImage,{alt:t.SItemName,src:"http://royalresorts.mobi/rr2016/market/img/products/coca-cola-regular-lata-1-six-pack.jpg"!=t.SPahtImage?t.SPahtImage:"/img/default.jpg"})),e?"":l.a.createElement("div",{className:"description"},l.a.createElement("span",{style:{textTransform:"capitalize"}},t.SItemName.toLowerCase())," ",l.a.createElement("br",null),l.a.createElement("span",null,t.ItemMeasure.toLowerCase())," ",l.a.createElement("br",null),l.a.createElement("strong",null,"$ ",parseFloat(t.DPrice).toFixed(2)," MXN")),l.a.createElement(i.a,{isRelated:e||null,item:t}),e||n?"":l.a.createElement("div",{className:"details"},l.a.createElement(s.Link,{to:"/products/".concat(t.SItemCode)},Object(o.a)("View details")))))}},121:function(e,t,n){"use strict";var w=n(0),S=n.n(w),a=n(20),x=n(34),I=n(1),r=n(8);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var N=Object(w.lazy)(function(){return Promise.all([n.e(6),n.e(11)]).then(n.bind(null,137))});t.a=Object(a.connect)(function(e){return{cart:e.cart,site:e.site}},{fetchCartItems:r.i,setItemToCart:r.k})(function(e){var t=e.setItemToCart,a=e.item,n=void 0===(n=e.detail)?null:n,r=void 0===(y=e.cartItem)?null:y,e=void 0===(y=e.isRelated)?null:y,l=(y=j(Object(w.useState)(!1),2))[0],o=y[1],i=(y=j(Object(w.useState)(!1),2))[0],c=y[1],s=r?parseFloat(r.totalItems*a.DPrice).toFixed(1):(a.YnAllowFractionalSale,parseFloat(a.MinSell).toFixed(1)*a.DPrice),m=(y=j(Object(w.useState)(s),2))[0],u=y[1];Object(w.useEffect)(function(){r&&parseFloat(s).toFixed(1)!==parseFloat(m).toFixed(1)&&E()});var d=(y=j(Object(w.useState)(r?a.YnAllowFractionalSale?parseFloat(r.totalItems).toFixed(1):r.totalItems:a.YnAllowFractionalSale?parseFloat(a.MinSell).toFixed(1):parseInt(a.MinSell)),2))[0],p=y[1];function f(e){var t,n=a.YnAllowFractionalSale?(n=parseFloat(d)+parseFloat(a.MinSell),parseFloat(n).toFixed(1)):d+parseInt(a.MinSell);0<parseFloat(d)?1==a.YnAllowFractionalSale?(t=parseFloat(d).toFixed(1)-parseFloat(a.MinSell).toFixed(1),(t=parseFloat(t).toFixed(1))<0&&(t=parseFloat(0).toFixed(1))):t=d-parseInt(a.MinSell):t=0,"+"==e?p(n):"-"==e&&p(0==t?a.MinSell:t)}function b(e){e.preventDefault(),e={totalItems:a.YnAllowFractionalSale?parseFloat(d):d,item:a,onList:!0},t(e),o(!0),p(a.YnAllowFractionalSale?parseFloat(a.MinSell).toFixed(1):parseInt(a.MinSell))}Object(w.useEffect)(function(){v()});var h=(y=j(Object(w.useState)(!1),2))[0],g=y[1],v=function(){var e=(a.YnAllowFractionalSale?parseFloat(a.MinSell).toFixed(2):parseInt(a.MinSell))*a.DPrice,e=(a.YnAllowFractionalSale,parseFloat(d*a.DPrice).toFixed(2));u(e)},y=S.a.createElement("div",{className:"wrap-units"},S.a.createElement("a",{onClick:function(e){e.preventDefault(),f("-")},href:"#",className:"btn remove"},"-"),S.a.createElement("input",{onChange:function(e){var t;a.YnAllowFractionalSale?(t=/^([0-9\.])*$/.exec(e.target.value),p(null!=t?e.target.value:"")):null!=(t=/^([0-9])*$/.exec(e.target.value))&&parseInt(t)%parseInt(a.MinSell)==0?(p(parseInt(e.target.value)),g(!1)):(p(""),g(!0))}.bind(this),type:"text",value:d,className:"input-field",onFocus:function(e){e.target.value="",p("")},onBlur:function(e){var t=a.YnAllowFractionalSale?parseFloat(e.target.value).toFixed(1):parseInt(e.target.value);null==e.target.value||""==e.target.value||parseFloat(e.target.value)<=0?(p(parseInt(a.MinSell)),a.YnAllowFractionalSale&&p(parseFloat(a.MinSell).toFixed(2))):p(t),g(!1)}.bind(this)}),S.a.createElement("a",{onClick:function(e){e.preventDefault(),f("+")},href:"#",className:"btn add",value:""},"+")),E=function(){var e;"number"!=typeof d&&(Number.isNaN(d)||""==d)||(e={totalItems:a.YnAllowFractionalSale?parseFloat(d):d,item:a,onList:!1},t(e),o(!0),c(!0))};return S.a.createElement(S.a.Fragment,null,n?S.a.createElement("div",{className:"wrapUnit"},S.a.createElement("table",{width:"100%"},S.a.createElement("tbody",null,S.a.createElement("tr",null,S.a.createElement("td",null,Object(x.a)("Subtotal"),":"),S.a.createElement("td",{style:{textAlign:"center"}},"$ ",m," ",Object(I.b)())),S.a.createElement("tr",null,S.a.createElement("td",null,Object(x.a)("Quantity"),":"),S.a.createElement("td",null,S.a.createElement("div",{className:"unit"},y,S.a.createElement("small",{style:{display:"block",textAlign:"center",color:"rgba(255, 68, 56, 0.9)"}},h?"".concat(Object(x.a)("Minimum purchase of")," ").concat(a.MinSell," ").concat(Object(x.a)("items or in groups of")," ").concat(a.MinSell):"")))))),S.a.createElement("div",{className:"actions"},S.a.createElement("a",{onClick:b.bind(this),className:"btn addtocart",href:""},Object(x.a)("Add to Cart")),S.a.createElement("a",{className:"btn saveforlater",href:""},Object(x.a)("Save for Later")))):r?S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"unit"},y,S.a.createElement("small",{style:{display:"block",textAlign:"center",color:"rgba(255, 68, 56, 0.9)"}},h?"".concat(Object(x.a)("Minimum purchase of")," ").concat(a.MinSell," ").concat(Object(x.a)("items or in groups of")," ").concat(a.MinSell):"")),S.a.createElement("div",{className:"total"},"$ ",m," ",Object(I.b)())):e?S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"unit"},S.a.createElement("span",{style:{textTransform:"capitalize"}},a.SItemName.toLowerCase())," ",S.a.createElement("br",null),S.a.createElement("span",null,a.ItemMeasure.toLowerCase())," ",S.a.createElement("br",null),S.a.createElement("strong",null,"$ ",parseFloat(a.DPrice).toFixed(2)," MXN"),h?"":S.a.createElement("div",{className:"action"},S.a.createElement("a",{onClick:b.bind(this),href:"",className:"linkAdd"},Object(x.a)("Add to cart"))))):S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"unit"},y,S.a.createElement("small",{style:{display:"block",textAlign:"center",color:"rgba(255, 68, 56, 0.9)"}},h?"".concat(Object(x.a)("Minimum purchase of")," ").concat(a.MinSell," ").concat(Object(x.a)("items or in groups of")," ").concat(a.MinSell):"")),h?"":S.a.createElement("div",{className:"action"},S.a.createElement("a",{onClick:b.bind(this),href:"",className:"btnAdd"},Object(x.a)("Add to cart"))))," ",1==l?S.a.createElement(w.Suspense,{fallback:"Loading"},S.a.createElement(N,{isUpdate:i,item:a,toClose:o})):"")})},126:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var t=n(0),a=n.n(t);function r(e){return a.a.createElement("div",{className:"main_container "},e.title?a.a.createElement("div",{className:"title"},e.title):"",a.a.createElement("div",{className:"list grid ".concat(e.className)},e.children))}},136:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var l=n(0),o=n.n(l),i=n(34),c=n(120);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(n){var e=s(Object(l.useState)(!1),2),t=e[0],a=e[1],e=n.items.map(function(e,t){if(t<3)return o.a.createElement(c.a,{key:e.SItemCode,isRelated:n.inCart?"true":"",item:e})}),r=n.items.map(function(e,t){if(3<=t&&t<6)return o.a.createElement(c.a,{key:e.SItemCode,isRelated:n.inCart?"true":"",item:e})});return o.a.createElement("div",{className:"main_container ".concat(n.className," ").concat(n.inCart?"incartRelated":"")},o.a.createElement("div",{className:"list grid related ".concat(n.inCart?"incart":"")},o.a.createElement("div",{className:"title"},o.a.createElement("h3",null,Object(i.a)("Related Products"))),e,n.inCart?0==t&&3<n.items.length?o.a.createElement("div",{className:"showMore",onClick:function(e){e.preventDefault(),a(!0)}},o.a.createElement("a",{href:"#"},Object(i.a)("Show More"))):3<n.items.length?o.a.createElement(o.a.Fragment,null,r):"":""))}},139:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var t=n(0),a=n.n(t),r=n(160);function l(e){var t=e.slides,t=void 0===t?[]:t,e=(e.width,e.showTumbs),e=void 0!==e&&e,t=t.map(function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("img",{height:"auto",loading:"lazy",alt:"slide",src:e.img,srcSet:e.srcSet||""}))});return a.a.createElement(r.Carousel,{showArrows:!0,showIndicators:!0,showStatus:!1,showThumbs:e,interval:1e4,autoPlay:!0,infiniteLoop:!0},t)}},147:function(e,t,n){e.exports=n(7)(36)},187:function(e,t,n){"use strict";var a=n(0),r=n(23),n=n(188);function l(){}l.prototype=Object.create(a.Component.prototype),l.displayName="DocumentTitle",l.propTypes={title:r.string.isRequired},l.prototype.render=function(){return this.props.children?a.Children.only(this.props.children):null},e.exports=n(function(e){if(e=e[e.length-1])return e.title},function(e){(e=e||"")!==document.title&&(document.title=e)})(l)},188:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var s=n(0),m=a(s),u=a(n(189));function d(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}var p=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(n,a,c){if("function"!=typeof n)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof a)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==c&&"function"!=typeof c)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,o=[];function i(){l=n(o.map(function(e){return e.props})),t.canUseDOM?a(l):c&&(l=c(l))}var e,t=function(e){var t;function n(){return e.apply(this,arguments)||this}t=e,(a=n).prototype=Object.create(t.prototype),(a.prototype.constructor=a).__proto__=t,n.peek=function(){return l},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,o=[],e};var a=n.prototype;return a.shouldComponentUpdate=function(e){return!u(e,this.props)},a.componentWillMount=function(){o.push(this),i()},a.componentDidUpdate=function(){i()},a.componentWillUnmount=function(){var e=o.indexOf(this);o.splice(e,1),i()},a.render=function(){return m.createElement(r,this.props)},n}(s.Component);return d(t,"displayName","SideEffect("+((e=r).displayName||e.name||"Component")+")"),d(t,"canUseDOM",p),t}}},189:function(e,t){e.exports=function(e,t,n,a){if(void 0!==(s=n?n.call(a,e,t):void 0))return!!s;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),i=0;i<r.length;i++){var c=r[i];if(!o(c))return!1;var s,m=e[c],u=t[c];if(!1===(s=n?n.call(a,m,u,c):void 0)||void 0===s&&m!==u)return!1}return!0}},190:function(e,t,n){var a=n(191),r=("string"==typeof a&&(a=[[e.i,a,""]]),{hmr:!0});r.transform=void 0,r.insertInto=void 0,n(14)(a,r);a.locals&&(e.exports=a.locals)},191:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".itemDetail{padding:20px 0px 5px;box-sizing:border-box}.itemDetail .slidecontainer{flex:1;background-color:#fff}.itemDetail .slidecontainer .carousel .thumbs-wrapper{margin-top:0px !important}.itemDetail .slidecontainer .carousel .thumbs-wrapper .thumbs{margin:10px 0px;display:flex;justify-content:center}.itemDetail .slidecontainer .carousel .slide>div{background-color:#fff;display:flex;justify-content:center;align-items:center;flex:1}.itemDetail .slidecontainer .carousel .slide{display:flex;justify-content:stretch;align-items:stretch}.itemDetail .slidecontainer .carousel .slide img{max-width:400px}.itemDetail .section{display:flex;justify-content:stretch;align-items:stretch;display:flex;flex-direction:column;align-items:stretch}.itemDetail .section>div:first-child{background:#fff;border-radius:10px}.itemDetail .details{padding:15px 10px;box-sizing:border-box}.itemDetail .details h3{text-align:left;font-weight:600;font-size:1.2rem;margin:0px;padding:0px}.itemDetail .details hr{margin:20px 0px}.itemDetail .details table{margin-bottom:10px;margin-top:10px}.itemDetail .item_container{padding:15px 10px;box-sizing:border-box}.itemDetail .promo_container{margin-top:10px;padding:15px 10px;background:#fff;border-radius:10px;flex:1}",""])},254:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});var t=n(0),c=n.n(t),s=n(3),t=(n(35),n(187)),m=n.n(t),u=n(126),d=n(139),p=n(34),f=n(121),b=n(136),h=n(1),g=n(119),v=n(122),y=(n(59),n(190),n(146));function a(e){for(var t=e.items,e=e.site,n=Object(s.useParams)(),a=null,r=[],l=new Array,o=0;o<t.length;o++){var i=t[o];if(parseInt(i.SItemCode)==parseInt(n.producto)){a=i;break}}return a&&(l=Object(g.a)(t,a.ItemExt.Group.SGroupCode,3),""!=a.imageGallery?a.imageGallery.split(",").map(function(e){r.push({img:e})}):r=[{img:"http://royalresorts.mobi/rr2016/market/img/products/coca-cola-regular-lata-1-six-pack.jpg"!=a.SPahtImage?a.SPahtImage:"/img/default.jpg"}]),c.a.createElement(m.a,{title:a?""!=a.SItemName?a.SItemName:a.SItemDesc.toLowerCase():"Item Description"},a?c.a.createElement("div",{id:"root"},c.a.createElement(y.a,null,"‍",c.a.createElement("title",null,"Royal Market -"," ",(""!=a.SItemName?a.SItemName:a.SItemDesc).toLowerCase()),"‍",c.a.createElement("meta",{name:"description",content:a.SItemDesc.toLowerCase()})),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main itemDetail"},c.a.createElement("div",{className:"main_container"},c.a.createElement(u.a,{className:"row"},c.a.createElement("div",{className:"section x8",style:{display:"block"}},c.a.createElement("div",{className:"slidecontainer"},c.a.createElement(d.a,{slides:r,width:"200px",showTumbs:!0}))),c.a.createElement("div",{className:"section x4"},c.a.createElement("div",{className:"details"},c.a.createElement("h3",null,(""!=a.SItemName?a.SItemName:a.SItemDesc).toLowerCase()),c.a.createElement("span",null,"(",a.ItemMeasure.toLowerCase(),")"),c.a.createElement("hr",null),c.a.createElement("table",{width:"100%"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("strong",null,Object(p.a)("Unit price"),":")," "),c.a.createElement("td",null,"$ ",a.DPrice," ",Object(h.b)())),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("strong",null,Object(p.a)("Code"),":")),c.a.createElement("td",null,a.SItemCode)),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("strong",null,Object(p.a)("Brand"),":")),c.a.createElement("td",null,a.SItemMark)),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("strong",null,Object(p.a)("Min. for sale"),":")),c.a.createElement("td",null,a.MinSell)))),c.a.createElement("hr",null),c.a.createElement("p",null,c.a.createElement("strong",null,Object(p.a)("About this Item"),":"),c.a.createElement("br",null),""!=a.sLongDescription?a.sLongDescription:a.SItemDesc.toLowerCase()))),c.a.createElement("div",{className:"section x4"},c.a.createElement("div",{className:"item_container"},c.a.createElement(f.a,{item:a,detail:!0})),c.a.createElement("div",{className:"promo_container"},c.a.createElement("a",{href:e.configuration.contenido.imgOnItemDetail.url},c.a.createElement("picture",{loading:"lazy"},""!=e.configuration.contenido.imgOnItemDetail.imgM?c.a.createElement("source",{media:"(max-width: 767px)",srcSet:"".concat(e.configuration.contenido.imgOnItemDetail.imgM)}):"",c.a.createElement("source",{media:"(min-width: 767px)",srcSet:"".concat(e.configuration.contenido.imgOnItemDetail.img)}),c.a.createElement(v.LazyLoadImage,{className:"img",src:e.configuration.contenido.imgOnItemDetail.img,alt:"Banner On Detail"})))))),0<l.length&&3==l.length?c.a.createElement(b.a,{items:l}):"")))):c.a.createElement("div",{id:"root",style:{backgroundColor:"white"}},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main itemDetail"},c.a.createElement("div",{className:"main_container"},c.a.createElement("h2",{style:{textAlign:"center",color:"#535353",minHeight:"400px",display:"flex",justifyContent:"center",alignItems:"center"}},Object(p.a)("This Item doesn´t exist")))))))}}},0,[6,11]]);