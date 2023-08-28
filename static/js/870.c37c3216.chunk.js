"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[870],{769:function(e,n,i){i(791);var a=i(184),t=function(e){var n=e.children,i=e.onClick,t=e.type,o=e.disabled,r=e.classButton,l=e.classText;return(0,a.jsx)("button",{className:"py-[5px] px-[10px] bg-blue-500 ".concat(r),type:t,onClick:i,disabled:o,children:(0,a.jsx)("span",{className:"".concat(l," font-medium"),children:n})})};t.defaultProps={type:"button",disabled:!1},n.Z=t},319:function(e,n,i){i.d(n,{A:function(){return a},Mm:function(){return r},Xx:function(){return d},iw:function(){return l},r2:function(){return o},v2:function(){return t}});var a={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE3YzliNjRmNzI3NGRlOTZkMmMyYTJjNzdjNTkzZSIsInN1YiI6IjY0OTI3NTZhNzA2ZTU2MDEzYTY0ZjVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XQ5XgFG--illCIpvwHSgN0k0o92xmS9SjDoFOE3DrSM"},t="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w300/",r="https://via.placeholder.com/300x450.png?text=Not+Found+Image",l="https://via.placeholder.com/300x180.png?text=Not+Found+Image",d=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},866:function(e,n,i){i(791);var a=i(87),t=i(319),o=i(184);n.Z=function(e){var n=e.movies;return 0===(null===n||void 0===n?void 0:n.length)?(0,o.jsx)("p",{children:"No hay pel\xedculas disponibles."}):(0,o.jsx)("ul",{className:"grid grid-cols-4 gap-4 max-[950px]:grid-cols-3 max-[950px]:gap-3 max-md:grid-cols-2 max-md:gap-2 max-[450px]:grid-cols-1 max-[450px]:gap-1",children:null===n||void 0===n?void 0:n.map((function(e){return(0,o.jsx)("li",{className:"flex relative border-solid border-gray-800 rounded-[15px] border-2 p-[1px] overflow-hidden",children:(0,o.jsxs)(a.OL,{to:"/movies/".concat(e.id),children:[(0,o.jsx)("img",{className:"rounded-[15px] max-md:w-[350px] max-[450px]:w-[400px]",src:null!==e&&void 0!==e&&e.backdrop_path?t.r2+(null===e||void 0===e?void 0:e.backdrop_path):t.iw,alt:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)}),(0,o.jsx)("div",{className:"w-full py-[5px] absolute bottom-0 text-center",style:{backgroundColor:"#000000ab"},children:(0,o.jsx)("p",{className:"text-white font-bold text-[12px]",children:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)})})]})},e.id)}))})}},870:function(e,n,i){i.r(n);var a=i(439),t=i(791),o=i(294),r=i(866),l=i(319),d=i(769),s=i(243),c=(i(919),i(184));n.default=function(){var e=(0,t.useState)({}),n=(0,a.Z)(e,2),i=n[0],u=n[1],m=(0,t.useState)(""),p=(0,a.Z)(m,2),x=p[0],h=p[1];return(0,c.jsxs)(o.Z,{title:"Movies",children:[(0,c.jsx)("form",{onSubmit:function(e){e.preventDefault(),(0,s.Z)({method:"get",baseURL:l.v2,url:"/search/movie?query=".concat(x,"&include_adult=false&language=en-US&page=1"),headers:l.A}).then((function(e){return u(e.data)})).catch((function(e){return console.log(e)})),h("")},children:(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"flex gap-[8px] mb-[15px]",children:[(0,c.jsx)("input",{value:x,onChange:function(e){return h(e.target.value)},type:"text",name:"search",id:"search",autoComplete:"off",className:"input-search"}),(0,c.jsx)(d.Z,{type:"submit",classButton:"button-search",children:(0,c.jsx)("i",{className:"ri-search-line"})})]})})}),i.page?(0,c.jsx)(r.Z,{movies:i.results}):null]})}},919:function(){}}]);
//# sourceMappingURL=870.c37c3216.chunk.js.map