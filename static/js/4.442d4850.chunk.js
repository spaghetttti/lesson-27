(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{83:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return l});var i=e(26),a=function(n){return n.shop},c=Object(i.a)([a],function(n){return n.collections}),r=Object(i.a)([c],function(n){return n?Object.keys(n).map(function(t){return n[t]}):[]}),o=function(n){return Object(i.a)([c],function(t){return t?t[n]:null})},u=Object(i.a)([a],function(n){return n.isFetching}),l=Object(i.a)([a],function(n){return!!n.collections})},84:function(n,t,e){"use strict";var i=e(47),a=e(1),c=e.n(a),r=e(49);t.a=function(n){return function(t){var e=t.isLoading,a=Object(i.a)(t,["isLoading"]);return e?c.a.createElement(r.a,null):c.a.createElement(n,a)}}},85:function(n,t,e){"use strict";var i,a,c,r,o,u,l=e(1),d=e.n(l),m=e(24),s=e(33),p=e(10),b=e(11),f=e(48),g=b.c.div(i||(i=Object(p.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n  \n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),j=Object(b.c)(f.a)(a||(a=Object(p.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]))),O=b.c.div(c||(c=Object(p.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),function(n){var t=n.imageUrl;return"url(".concat(t,")")}),h=b.c.div(r||(r=Object(p.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),x=b.c.span(o||(o=Object(p.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),v=b.c.span(u||(u=Object(p.a)(["\n  width: 10%;\n  text-align: right;\n"])));t.a=Object(m.b)(null,function(n){return{addItem:function(t){return n(Object(s.a)(t))}}})(function(n){var t=n.item,e=n.addItem,i=t.name,a=t.price,c=t.imageUrl;return d.a.createElement(g,null,d.a.createElement(O,{className:"image",imageUrl:c}),d.a.createElement(h,null,d.a.createElement(x,null,i),d.a.createElement(v,null,a)),d.a.createElement(j,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))})},88:function(n,t,e){"use strict";e.r(t);var i,a,c,r=e(24),o=e(27),u=e(26),l=e(83),d=e(84),m=e(1),s=e.n(m),p=e(14),b=e(85),f=e(10),g=e(11),j=g.c.div(i||(i=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),O=g.c.h2(a||(a=Object(f.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]))),h=g.c.div(c||(c=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n  & > div {\n    margin-bottom: 30px;\n  }\n  \n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]))),x=function(){var n=Object(p.h)().collectionId,t=Object(r.d)(Object(l.a)(n)),e=t.title,i=t.items;return s.a.createElement(j,null,s.a.createElement(O,null,e),s.a.createElement(h,null,i.map(function(n){return s.a.createElement(b.a,{key:n.id,item:n})})))},v=Object(u.b)({isLoading:function(n){return!Object(l.d)(n)}}),w=Object(o.c)(Object(r.b)(v),d.a)(x);t.default=w}}]);
//# sourceMappingURL=4.442d4850.chunk.js.map