"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{5033:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t,o,a,s,i,c,p,u,l,d,f,x,h,v,g,m,Z,b=r(5861),j=r(9439),w=r(7757),k=r.n(w),y=r(2791),P=r(7689),_=r(1207),B=r(168),E=r(1087),C=r(6444),z=C.ZP.main(t||(t=(0,B.Z)(["\n    margin: auto;\n    margin-top: 40px;\n    margin-botton: 40px;\n    width: 1250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]))),U=C.ZP.section(o||(o=(0,B.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 36px;\n    border: 2px solid #EB8382;\n    padding: 40px;\n\n"]))),F=C.ZP.img(a||(a=(0,B.Z)(["\n    max-height: 600px;\n"]))),L=C.ZP.div(s||(s=(0,B.Z)(["\n    color: #826F8C;\n    font-size: 24px;\n    \n"]))),O=C.ZP.h1(i||(i=(0,B.Z)(["\n    margin: 0;\n    font-size: 40px;\n    color: #414141;\n    margin-bottom: 48px; \n"]))),R=C.ZP.span(c||(c=(0,B.Z)(["\n    // color: #446381;\n"]))),S=C.ZP.p(p||(p=(0,B.Z)(["\n    margin-bottom: 32px; \n"]))),G=C.ZP.h2(u||(u=(0,B.Z)(["\n    margin-bottom: 24px; \n    font-size: 36px;\n    color: #446381;\n"]))),H=C.ZP.p(l||(l=(0,B.Z)(["\n    margin-bottom: 32px; \n"]))),I=C.ZP.ul(d||(d=(0,B.Z)(["\n    // margin-bottom: 24px; \n    // font-size: 36px;\n    // color: #446381;\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n"]))),Y=C.ZP.li(f||(f=(0,B.Z)(["\n    background-color: #EB8382;\n    padding: 8px;\n    border-radius: 20px;\n"]))),q=C.ZP.span(x||(x=(0,B.Z)(["\n    color: #fff;\n"]))),A=C.ZP.section(h||(h=(0,B.Z)(["\n    width: 1250px;\n    border-bottom: 2px solid #EB8382;\n    // border-left: 2px solid #EB8382;\n    // border-right: 2px solid #EB8382;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    color: #826F8C;\n    font-size: 24px;\n"]))),D=C.ZP.ul(v||(v=(0,B.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 36px;\n"]))),T=C.ZP.li(g||(g=(0,B.Z)(["\n    background-color: #transparant;\n    border-radius: 20px;\n    border: 2px solid #fff;\n    padding: 8px;\n    color: #414141;\n\n    &:hover,\n    &:focus {\n        border: 1px solid #fff;\n        background-color: #EB8382;\n        color: #fff;\n    }\n"]))),V=(0,C.ZP)(E.OL)(m||(m=(0,B.Z)(["\n    &.active {\n        color: #EB8382;\n    }\n"]))),J=(0,C.ZP)(E.rU)(Z||(Z=(0,B.Z)(["\n    color: #826F8C;\n    font-size: 24px;\n    margin-bottom: 32px; \n    width: 120px;\n    text-align: center;\n    border-radius: 20px;\n    border: 2px solid #fff;\n    background-color: transparant; \n\n\n    &:hover,\n    &:focus {\n        color: #EB8382;\n        background-color: #fff; \n        border: 2px solid #EB8382;\n    }\n\n"]))),K=r(3693),M=r(184),N=function(){var n,e,r=(0,P.UO)().movieId,t=(0,y.useState)({}),o=(0,j.Z)(t,2),a=o[0],s=o[1],i=(0,y.useState)([]),c=(0,j.Z)(i,2),p=c[0],u=c[1],l=(0,P.TH)(),d=(0,y.useRef)(null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,y.useEffect)((function(){function n(){return n=(0,b.Z)(k().mark((function n(e){var r;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,_.Y5)(e);case 2:r=n.sent,s(r),u(r.genres);case 5:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(r)}),[r]),r&&(0,M.jsxs)(z,{children:[(0,M.jsx)(J,{to:d.current,children:"Go Back"}),(0,M.jsxs)(U,{children:[(0,M.jsx)(F,{src:a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):K,alt:a.original_title}),(0,M.jsxs)(L,{children:[(0,M.jsxs)(O,{children:[(0,M.jsx)("span",{children:a.original_title}),(0,M.jsxs)(R,{children:["   (",a.release_date&&a.release_date.slice(0,4),")  "]})]}),(0,M.jsxs)(S,{children:["User Score - ",a.vote_average]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(G,{children:"Overview"}),(0,M.jsx)(H,{children:a.overview})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(G,{children:"Genres"}),(0,M.jsx)(I,{children:p.map((function(n){var e=n.id,r=n.name;return(0,M.jsx)(Y,{children:(0,M.jsx)(q,{children:r})},e)}))})]})]})]}),(0,M.jsxs)(A,{children:[(0,M.jsx)(G,{children:"Additional information"}),(0,M.jsxs)(D,{children:[(0,M.jsx)(T,{children:(0,M.jsx)(V,{to:"cast",children:"Cast"})}),(0,M.jsx)(T,{children:(0,M.jsx)(V,{to:"reviews",children:"Review"})})]}),(0,M.jsx)(P.j3,{})]})]})}},1207:function(n,e,r){r.d(e,{DC:function(){return i},Hx:function(){return h},LI:function(){return p},Y5:function(){return l},uV:function(){return f}});var t=r(5861),o=r(7757),a=r.n(o),s=r(1243);function i(){return c.apply(this,arguments)}function c(){return(c=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("trending/movie/day");case 3:if(200!==(e=n.sent).status){n.next=6;break}return n.abrupt("return",e.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(n){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/search/movie?query=".concat(e));case 3:if(200!==(r=n.sent).status){n.next=6;break}return n.abrupt("return",r.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e));case 3:if(200!==(r=n.sent).status){n.next=6;break}return n.abrupt("return",r.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"/credits"));case 3:if(200!==(r=n.sent).status){n.next=6;break}return n.abrupt("return",r.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/movie/".concat(e,"/reviews"));case 3:if(200!==(r=n.sent).status){n.next=6;break}return n.abrupt("return",r.data);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"0feaca93847c0f717b0c2876a0a51030"}},3693:function(n,e,r){n.exports=r.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=33.42bf8eec.chunk.js.map