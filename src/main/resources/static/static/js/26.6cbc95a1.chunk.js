(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{245:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},248:function(e,a,t){"use strict";var n=t(33),s=t(242),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(240),u=t.n(i),m=t(241),d={tag:m.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,r=e.tag,c=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.m)(u()(a,o?"no-gutters":null,c?"form-row":"row"),t);return l.a.createElement(r,Object(n.a)({},i,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},249:function(e,a,t){"use strict";var n=t(33),s=t(242),o=t(245),l=t.n(o),r=t(0),c=t.n(r),i=t(1),u=t.n(i),m=t(240),d=t.n(m),b=t(241),f=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(b.h)(f,'Please use the prop "order"'),pull:Object(b.h)(f,'Please use the prop "order"'),order:f,offset:f})]),g={tag:b.q,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.widths,r=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach(function(a,n){var s=e[a];if(delete i[a],s||""===s){var o=!n;if(l()(s)){var r,c=o?"-":"-"+a+"-",m=j(o,a,s.size);u.push(Object(b.m)(d()(((r={})[m]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var f=j(o,a,s);u.push(f)}}}),u.length||u.push("col");var m=Object(b.m)(d()(a,u),t);return c.a.createElement(r,Object(n.a)({},i,{className:m}))};v.propTypes=g,v.defaultProps=h,a.a=v},250:function(e,a,t){"use strict";var n=t(33),s=t(242),o=t(243),l=t(244),r=t(0),c=t.n(r),i=t(1),u=t.n(i),m=t(240),d=t.n(m),b=t(241),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(Object(l.a)(t))),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,l=e.className,r=e.close,i=e.cssModule,u=e.color,m=e.outline,f=e.size,p=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(m?"-outline":"")+"-"+u,v=Object(b.m)(d()(l,{close:r},r||"btn",r||j,!!f&&"btn-"+f,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===p&&(p="a");var N=r?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&h.onClick?"button":void 0},h,{className:v,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(c.a.Component);p.propTypes=f,p.defaultProps={color:"secondary",tag:"button"},a.a=p},251:function(e,a,t){"use strict";var n=t(33),s=t(242),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(240),u=t.n(i),m=t(241),d={tag:m.q,inverse:c.a.bool,color:c.a.string,block:Object(m.h)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,o=e.color,r=e.block,c=e.body,i=e.inverse,d=e.outline,b=e.tag,f=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(m.m)(u()(a,"card",!!i&&"text-white",!(!r&&!c)&&"card-body",!!o&&(d?"border":"bg")+"-"+o),t);return l.a.createElement(b,Object(n.a)({},p,{className:g,ref:f}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},252:function(e,a,t){"use strict";var n=t(33),s=t(242),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(240),u=t.n(i),m=t(241),d={tag:m.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,r=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.m)(u()(a,"card-body"),t);return l.a.createElement(r,Object(n.a)({},c,{className:i,ref:o}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},253:function(e,a,t){"use strict";var n=t(33),s=t(242),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(240),u=t.n(i),m=t(241),d={tag:m.q,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),c=Object(m.m)(u()(a,"card-header"),t);return l.a.createElement(o,Object(n.a)({},r,{className:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},500:function(e,a,t){"use strict";t.r(a);var n=t(85),s=t(86),o=t(89),l=t(87),r=t(88),c=t(0),i=t.n(c),u=t(248),m=t(249),d=t(251),b=t(253),f=t(252),p=t(33),g=t(242),h=t(1),j=t.n(h),v=t(240),N=t.n(v),O=t(241),E={tag:O.q,fluid:j.a.bool,className:j.a.string,cssModule:j.a.object},y=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=e.fluid,o=Object(g.a)(e,["className","cssModule","tag","fluid"]),l=Object(O.m)(N()(a,"jumbotron",!!s&&"jumbotron-fluid"),t);return i.a.createElement(n,Object(p.a)({},o,{className:l}))};y.propTypes=E,y.defaultProps={tag:"div"};var M=y,k=t(250),w=t(278),T=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/jumbotron/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(f.a,null,i.a.createElement(M,null,i.a.createElement("h1",{className:"display-3"},"Hello, world!"),i.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("p",null,"It uses utility classes for typgraphy and spacing to space content out within the larger container."),i.a.createElement("p",{className:"lead"},i.a.createElement(k.a,{color:"primary"},"Learn More")))))),i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("small",null," fluid")),i.a.createElement(f.a,null,i.a.createElement(M,{fluid:!0},i.a.createElement(w.a,{fluid:!0},i.a.createElement("h1",{className:"display-3"},"Fluid jumbotron"),i.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))))))))}}]),a}(c.Component);a.default=T}}]);
//# sourceMappingURL=26.6cbc95a1.chunk.js.map