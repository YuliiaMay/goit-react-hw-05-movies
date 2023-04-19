"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[946],{8247:function(n,e,t){t.d(e,{Z:function(){return _}});var r,a,c,s,i,o,u,p=t(168),l=t(6444),f=t(1087),d=(0,l.ZP)(f.rU)(r||(r=(0,p.Z)(["\n    text-decoration: none;\n    color: #446381;\n"]))),x=l.ZP.div(a||(a=(0,p.Z)(["\n    width: 325px;\n    height: 600px;\n    cursor: pointer;\n    border: 3px solid #FFC5B3;\n    background-color: #C37A87;\n    max-width: calc((100% - 3 * 30px) / 4);\n\n    &:hover,\n    &:focus {\n        transform: scale(1.015);\n    }\n"]))),h=l.ZP.img(c||(c=(0,p.Z)(["\n    display: block;\n    max-width: 100%;\n    height: 490px;\n    background-size: cover;\n\n"]))),g=l.ZP.div(s||(s=(0,p.Z)(["\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n"]))),v=l.ZP.p(i||(i=(0,p.Z)(["\n    margin-top: 0;\n    margin-bottom: 12px;\n    font-size: 24px;\n    color: #FFFFFF;\n"]))),m=l.ZP.p(o||(o=(0,p.Z)(["\n    margin: 0;\n    font-size: 20px;\n    color: #446381;\n"]))),Z=t(7689),b=t(2791),w=t(3693),k=t(184),y=function(n){var e,t=n.movieId,r=n.src,a=n.title,c=n.rating,s=null!==(e="https://image.tmdb.org/t/p/w500".concat(r))&&void 0!==e?e:"/src/default.jpg";return(0,k.jsxs)(x,{children:[(0,k.jsxs)(d,{to:"/movies/".concat(t),children:[(0,k.jsx)(h,{src:r?s:w,alt:a}),(0,k.jsxs)(g,{children:[(0,k.jsx)(v,{children:a}),(0,k.jsxs)(m,{children:["Rating: ",c]})]})]}),(0,k.jsx)(b.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading page..."}),children:(0,k.jsx)(Z.j3,{})})]})},j=l.ZP.ul(u||(u=(0,p.Z)(["\n    max-width: 1400px;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 24px;\n"]))),_=function(n){var e=n.movies;return(0,k.jsx)(j,{children:e.map((function(n){var e=n.id,t=n.original_language,r=n.title,a=n.vote_average,c=n.poster_path,s=n.release_date;return(0,k.jsx)(y,{movieId:e,src:c,title:r,language:t,rating:a,release:s},e)}))})}},6946:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a,c=t(5861),s=t(9439),i=t(7757),o=t.n(i),u=t(2791),p=t(1207),l=t(8247),f=t(168),d=t(6444),x=d.ZP.main(r||(r=(0,f.Z)(["\n    min-height: 900px;\n"]))),h=d.ZP.h1(a||(a=(0,f.Z)(["\n    margin-top: 40px;\n    margin-bottom: 40px;  \n    font-size: 40px;\n    color: #414141;\n    width: 1400px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),g=t(184),v=function(){var n=(0,u.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1];return(0,u.useEffect)((function(){function n(){return(n=(0,c.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.DC)();case 3:return t=n.sent,r(t.results),n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}()}),[]),(0,g.jsxs)(x,{children:[(0,g.jsx)(h,{children:"Tranding today"}),(0,g.jsx)(l.Z,{movies:t})]})}},1207:function(n,e,t){t.d(e,{DC:function(){return i},Hx:function(){return h},LI:function(){return u},Y5:function(){return l},uV:function(){return d}});var r=t(5861),a=t(7757),c=t.n(a),s=t(1243);function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("trending/movie/day");case 3:if(200!==(e=n.sent).status){n.next=6;break}return n.abrupt("return",e.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/search/movie?query=".concat(e));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"/credits"));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"/reviews"));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"0feaca93847c0f717b0c2876a0a51030"}},3693:function(n,e,t){n.exports=t.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=946.fcaf75c2.chunk.js.map