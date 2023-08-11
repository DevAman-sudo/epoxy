(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1169)}])},1169:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var a=s(5893),r=s(9008),c=s.n(r),l=s(7294),n=s(1656),i=s.n(n),o=s(6154);let d=()=>{let[e,t]=(0,l.useState)([]),[s,r]=(0,l.useState)(!0),c=async()=>{try{let e=await o.Z.get("/api/admin/category");t(e.data),r(!1)}catch(e){console.log(e),r(!1)}};return(0,l.useEffect)(()=>{c()},[]),(0,a.jsxs)("div",{className:"bg-pink py-4",children:[(0,a.jsx)("div",{className:"flex w-full h-auto text-gray-700",children:(0,a.jsx)("h1",{className:"mt-auto font-bold float-left m-4 text-3xl",children:"Shop By Category"})}),(0,a.jsx)("div",{className:"flex justify-left overflow-x-scroll",children:e.map((e,t)=>(0,a.jsx)("a",{href:"/products?category=".concat(e.category),children:(0,a.jsxs)("div",{className:" shadow-md m-2 p-2 rounded-md",children:[(0,a.jsx)("div",{className:"w-24 h-24 md:w-40 md:h-40 mx-auto overflow-hidden",children:(0,a.jsx)("img",{className:"w-full h-full object-cover rounded-md",src:e.image,alt:e.category})}),(0,a.jsx)("div",{className:"text-center mt-2",children:(0,a.jsx)("h2",{className:"font-700 text-sm sm:text-base tracking-widest",children:e.category})})]},t)}))})]})};s(5675);let x=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:" ".concat(i().container," flex flex-col-reverse md:flex-row"),children:[(0,a.jsxs)("div",{className:i().left,children:[(0,a.jsxs)("h1",{className:"text-white text-center text-6xl md:text-left m-1",children:[" ","Create your own",(0,a.jsx)("br",{})," Design"]}),(0,a.jsxs)("p",{className:"text-xl text-center md:text-left ml-4 m-2 text-gray-300",children:["create your dream table with our customizable"," "]}),(0,a.jsx)("a",{href:"/products",children:(0,a.jsx)("button",{className:"m-1 ml-4 md:mr-auto bg-white py-2 px-5 font-bold",children:"Shop Now"})})]}),(0,a.jsx)("div",{className:"".concat(i().right," flex align-center justify-center"),children:(0,a.jsx)("img",{className:"".concat(i().heroImg," m-auto"),src:"/img/table.jpg",alt:"epoxy table"})})]}),(0,a.jsx)(d,{}),(0,a.jsx)("div",{className:"bg-yellow-50 h-52 w-auto flex items-center justify-center text-center",children:(0,a.jsxs)("h1",{className:"text-3xl",children:["Art is a line around your thought and ",(0,a.jsx)("br",{})," creation around your space"]})})]});var m=s(1163),h=s.n(m),u=s(9055),f=s.n(u);let j=()=>{let[e,t]=(0,l.useState)([]),[s,r]=(0,l.useState)(!0),c=async()=>{try{let e=await o.Z.get("/api/admin/products");t(e.data),r(!1)}catch(e){console.log(e),t([]),r(!1)}};(0,l.useEffect)(()=>{c()},[]);let n=async e=>{h().push("/products/details?ids=".concat(e))};return s?(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-12 w-12 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 2.21.898 4.209 2.35 5.657l-.707.707A9.917 9.917 0 000 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-2.454-.902-4.693-2.383-6.43l-.635.635A7.96 7.96 0 0112 20c-4.411 0-8-3.589-8-8z"})]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex md:grid md:grid-cols-5 gap-4",children:e.slice(0,8).map(e=>(0,a.jsx)("a",{onClick:()=>n(e._id),className:"flex flex-wrap cursor-pointer",children:(0,a.jsxs)("div",{className:"".concat(f().cardContainer," p-1 mb-2 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out transform-gpu hover:scale-105 flex flex-col justify-between"),children:[(0,a.jsx)("div",{className:f().iconBox,children:(0,a.jsx)("img",{className:"".concat(f().buyIcon," z-20"),src:"/img/buy.png",alt:"buy icon"})}),(0,a.jsx)("div",{className:"m-2",children:(0,a.jsx)("img",{className:"w-40 m-auto",src:e.images[0],alt:"epoxy products"})}),(0,a.jsxs)("div",{className:"w-40 m-2 flex flex-col-reverse justify-end",children:[(0,a.jsx)("h2",{className:" m-0.5 ",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"text-sm ml-2",children:"Rs "}),(0,a.jsx)("div",{className:"flex justify-around",children:0===e.discount?(0,a.jsx)("span",{className:"text-lg mx-2 font-500 text-green-900 tracking-wider whitespace-normal",children:e.price.toLocaleString("en-IN")}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"text-lg ml-2 font-500 text-green-900 tracking-wider whitespace-normal line-through",children:e.price.toLocaleString("en-IN")}),(0,a.jsx)("span",{className:"text-lg ml-2 font-500 text-green-900 tracking-wider whitespace-normal",children:(e.price-e.price/100*e.discount).toLocaleString("en-IN")})]})})]})}),(0,a.jsx)("h2",{className:"m-0.5 text-gray-600 font-700 text-sm tracking-widest capitalize mr-8",children:e.name})]})]})},e._id))})})};var g=s(2617),p=s.n(g);let N=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsxs)("div",{className:"flex w-full h-auto text-gray-700",children:[(0,a.jsx)("h1",{className:"mt-auto font-bold float-left m-4 text-3xl",children:"Our Products"}),(0,a.jsx)("a",{href:"/products",className:"ml-auto mt-auto m-4",children:(0,a.jsx)("p",{className:"font-bold underline",children:"view all"})})]}),(0,a.jsx)("div",{className:"".concat(p().productContainer," flex items-center justify-center"),children:(0,a.jsx)(j,{})})]})}),w=()=>{let[e,t]=(0,l.useState)([]),[s,r]=(0,l.useState)(!0),c=async()=>{try{let e=await o.Z.get("/api/admin/projects");t(e.data),r(!1)}catch(e){console.log(e),r(!1)}};return(0,l.useEffect)(()=>{c()},[]),(0,a.jsxs)("div",{className:"bg-pink py-4",children:[(0,a.jsx)("div",{className:"flex w-full h-auto text-gray-700",children:(0,a.jsx)("h1",{className:"mt-auto font-bold float-left m-4 text-3xl",children:"Our Projects"})}),s?(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"})}):(0,a.jsx)("div",{className:"flex justify-left overflow-scroll",children:e.map((e,t)=>(0,a.jsxs)("div",{className:" shadow-md m-2 p-4 rounded-md",children:[(0,a.jsx)("div",{className:"w-24 h-24 md:w-40 md:h-40 mx-auto overflow-hidden",children:(0,a.jsx)("img",{className:"w-full h-full object-cover rounded-md",src:e.image,alt:e.category})}),(0,a.jsx)("div",{className:"text-center mt-2",children:(0,a.jsx)("h2",{className:"font-700 text-sm sm:text-base tracking-widest",children:e.category})})]},t))})]})};s(2782);let y=()=>{let[e,t]=(0,l.useState)([]),s=async()=>{try{let e=await o.Z.get("/api/discount");t(e.data.data),console.log(e.data)}catch(e){console.log(e),t([])}};return(0,l.useEffect)(()=>{s()},[]),(0,a.jsx)("div",{children:e.slice(0,5).reverse().map(e=>(0,a.jsx)("a",{href:"/products/details?ids=".concat(e._id),children:(0,a.jsxs)("div",{className:"w-[90%] md:w-[60%] bg-pink flex mx-auto my-4 justify-evenly align-center px-4 py-8",children:[(0,a.jsxs)("div",{className:"w-1/2 leading-6",children:[(0,a.jsx)("p",{className:"text-center",children:"UP TO"}),(0,a.jsxs)("h1",{className:"text-center text-4xl bolder",children:[e.discount,"%",(0,a.jsx)("span",{className:"text-sm mx-1",children:"OFF"})]}),(0,a.jsxs)("h3",{className:"text-center text-sm",children:["SELECT ",(0,a.jsx)("br",{})," PRODUCT"]})]}),(0,a.jsx)("div",{className:"w-[40%] md:w-[15%] h-auto my-auto",children:(0,a.jsx)("img",{src:e.images[0]})})]})}))})},v=()=>(0,a.jsx)("div",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"relative w-screen h-auto flex flex-col justify-center align-center",children:[(0,a.jsx)("img",{className:"brightness-50",src:"img/table.jpg"}),(0,a.jsxs)("p",{className:"text-white bolder tracking-widest text-2xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:["Everything your Home Deserves."," "]})]}),(0,a.jsxs)("div",{className:"w-[90%] md:w-[80%] h-auto py-8 mx-auto px-4 text-white text-center bg-themecolor ",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold tracking-wider",children:"Furniture that will last Forever"}),(0,a.jsx)("p",{className:"text-sm brightness-90",children:"Affordable furniture for every home."}),(0,a.jsx)("a",{href:"/products",children:(0,a.jsx)("button",{className:"bg-white text-black px-4 py-2 mt-2 text-sm bolder tracking-widest",children:"Shop Now"})})]})]})});function b(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:"Inferno"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(x,{}),(0,a.jsx)(N,{}),(0,a.jsx)(w,{}),(0,a.jsx)(y,{}),(0,a.jsx)(v,{})]})}},9055:function(e){e.exports={cardContainer:"Card_cardContainer__tYUGU",iconBox:"Card_iconBox__xgmS0",buyIcon:"Card_buyIcon__5Ndqr",price:"Card_price__CUNSy"}},1656:function(e){e.exports={left:"Hero_left__sHFX3",heroImg:"Hero_heroImg__3sygn",right:"Hero_right___4nO1"}},2617:function(e){e.exports={productContainer:"Products_productContainer__h1aAZ"}},9008:function(e,t,s){e.exports=s(3121)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);