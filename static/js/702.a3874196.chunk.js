"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[702],{319:function(e,a,n){n.d(a,{A:function(){return i},Mm:function(){return o},Xx:function(){return m},iw:function(){return d},r2:function(){return r},v2:function(){return t}});var i={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE3YzliNjRmNzI3NGRlOTZkMmMyYTJjNzdjNTkzZSIsInN1YiI6IjY0OTI3NTZhNzA2ZTU2MDEzYTY0ZjVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XQ5XgFG--illCIpvwHSgN0k0o92xmS9SjDoFOE3DrSM"},t="https://api.themoviedb.org/3",r="https://image.tmdb.org/t/p/w300/",o="https://via.placeholder.com/300x450.png?text=Not+Found+Image",d="https://via.placeholder.com/300x180.png?text=Not+Found+Image",m=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},702:function(e,a,n){n.r(a);var i=n(439),t=n(791),r=n(689),o=n(319),d=n(243),m=n(184);a.default=function(){var e=(0,r.UO)().movieId,a=(0,t.useState)(),n=(0,i.Z)(a,2),c=n[0],s=n[1];return(0,t.useEffect)((function(){(0,d.Z)({method:"get",baseURL:o.v2,url:"/movie/".concat(e,"/credits?language=en-US"),headers:o.A}).then((function(e){return s(e.data.cast)}))}),[]),(0,m.jsx)("ul",{className:"grid grid-cols-4 gap-4 max-md:grid-cols-2 max-md:gap-2 max-[450px]:grid-cols-1 max-[450px]:gap-1",children:null===c||void 0===c?void 0:c.map((function(e){return(0,m.jsxs)("li",{className:"flex flex-col gap-[10px] border-solid border-gray-800 rounded-[15px] border-2 p-[15px]",children:[(0,m.jsx)("img",{className:"w-auto rounded-[15px]",src:e.profile_path?o.r2+e.profile_path:o.Mm,alt:e.name}),(0,m.jsx)("span",{className:"font-bold text-[20px]",children:e.name}),(0,m.jsx)("span",{className:"font-bold text-[15px]",children:"Character: "}),(0,m.jsx)("p",{children:e.character})]},e.id)}))})}}}]);
//# sourceMappingURL=702.a3874196.chunk.js.map