(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{1932:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/order",function(){return a(6656)}])},2049:function(e,s,a){"use strict";var d=a(5893);a(7294);let l=()=>(0,d.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen z-20",children:(0,d.jsxs)("div",{className:"flex md:flex-row flex-xol flex-wrap justify-center items-center bg-white h-screen sm:px-6 lg:px-8",children:[(0,d.jsxs)("div",{className:"w-full sm:w-80 bg-white rounded-md shadow-xl m-3",children:[(0,d.jsx)("div",{className:"h-44 bg-gray-300 rounded-t-md animate-pulse"}),(0,d.jsxs)("div",{className:"p-5",children:[(0,d.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,d.jsxs)("div",{className:"animate-pulse",children:[(0,d.jsx)("div",{className:"h-1 mt-2 w-1/2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]}),(0,d.jsxs)("div",{className:"",children:[(0,d.jsxs)("div",{className:"flex w-screen md:w-full sm:w-96 bg-white rounded-md shadow-xl",children:[(0,d.jsx)("div",{className:"w-1/3 bg-gray-300 rounded-l-md animate-pulse"}),(0,d.jsxs)("div",{className:"p-5 w-3/4",children:[(0,d.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,d.jsxs)("div",{className:"animate-pulse",children:[(0,d.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]}),(0,d.jsxs)("div",{className:"flex w-screen md:w-full sm:w-96 bg-white rounded-md shadow-xl",children:[(0,d.jsx)("div",{className:"w-1/3 bg-gray-300 rounded-l-md animate-pulse"}),(0,d.jsxs)("div",{className:"p-5 w-3/4",children:[(0,d.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,d.jsxs)("div",{className:"animate-pulse",children:[(0,d.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,d.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]})]})]})});s.Z=l},6656:function(e,s,a){"use strict";a.r(s);var d=a(5893),l=a(7294),t=a(1163),r=a.n(t),i=a(1955),n=a(2049),c=a(6154),m=a(1664),o=a.n(m);let x=()=>{async function e(){let e=i.Z.get("token");if(e)try{let s=await fetch("/api/middleware/auth?token=".concat(e),{method:"POST"});s.ok||r().push({pathname:"/login",query:{message:"Token Invalid"}})}catch(e){r().push({pathname:"/login",query:{message:"Token Expired"}})}else r().push({pathname:"/login",query:{message:"Token Invalid"}})}(0,l.useEffect)(()=>{e()},[]);let s=i.Z.get("user_id"),[a,t]=(0,l.useState)(!0),[m,x]=(0,l.useState)(""),[h,u]=(0,l.useState)(!1),[g,j]=(0,l.useState)([]),[N,v]=(0,l.useState)(0),p=async()=>{try{let e=await c.Z.get("/api/admin/shipping");v(e.data.data[0].shipping)}catch(e){x("Internet Connection not Stable. "),u(!0)}setTimeout(()=>{u(!1)},3e3)};(0,l.useEffect)(()=>{p()},[]);let f=async()=>{t(!0);try{let e=await c.Z.get("/api/order?id=".concat(s)),a=e.data.filter(e=>e._id===r().query.id);console.log(a),j(a),t(!1)}catch(e){console.log(e),x("Internet Connection not Stable. "),u(!0),t(!1)}setTimeout(()=>{u(!1)},3e3)};return(0,l.useEffect)(()=>{f()},[]),(0,d.jsxs)(d.Fragment,{children:[a?(0,d.jsx)(n.Z,{}):null,h&&(0,d.jsx)("div",{className:"fixed top-0 left-0 lg:left-auto right-0 z-50 p-4",children:(0,d.jsxs)("div",{className:"mx-auto max-w-sm bg-white rounded-lg shadow-lg flex items-center",children:[(0,d.jsx)("div",{className:"flex-shrink-0",children:(0,d.jsx)("svg",{className:"h-8 w-8 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M16 10a6 6 0 11-12 0 6 6 0 0112 0zm-6 5a1 1 0 100-2 1 1 0 000 2zm0-10a1 1 0 100-2 1 1 0 000 2zM5.78 14.55a4.002 4.002 0 01-1.513-1.513A5.984 5.984 0 013 10a6 6 0 1111.268 3H13a1 1 0 00-1 1v1a1 1 0 102 0v-1a3 3 0 00-3-3h-.268A5.992 5.992 0 015.78 14.55zM10 12a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})})}),(0,d.jsx)("div",{className:"ml-4",children:(0,d.jsx)("div",{className:"mt-2 mx-2 text-sm text-gray-500",children:m})})]})}),(0,d.jsx)("div",{className:"min-h-screen flex flex-col justify-center items-center",children:(0,d.jsxs)("div",{className:"max-w-3xl shadow-lg rounded-lg overflow-hidden w-full",children:[(0,d.jsx)("div",{className:"px-6 py-4",children:(0,d.jsx)("h1",{className:"text-3xl font-semibold",children:"Order Details"})}),g.map(e=>(0,d.jsxs)("div",{className:"p-6",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{className:"text-sm font-semibold",children:["Order #",e._id]}),(0,d.jsxs)("p",{className:"text-gray-500",children:["Date: ",new Date(e.dateOrdered).toLocaleString()]})]}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"bg-themecolor text-white px-4 py-2 rounded-full",children:e.status})})]}),(0,d.jsx)("div",{className:"border-t border-gray-200",children:e.orderItems.map(e=>(0,d.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:e.product.image,className:"h-14 w-14 rounded-full"}),(0,d.jsxs)("h3",{className:"text-lg font-semibold flex items-center",children:[e.product.name," ",(0,d.jsxs)("span",{className:"flex",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4 my-auto",children:(0,d.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})," ",e.quantity]})]}),(0,d.jsxs)("p",{className:"text-gray-500",children:["Category: ",e.product.category]})]}),(0,d.jsxs)("p",{className:"text-lg",children:["Rs ",(e.product.price*e.quantity).toLocaleString("en-IN")," "]})]},e._id))}),(0,d.jsxs)("div",{className:"border-t border-b border-gray-200 py-4",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center",children:[(0,d.jsx)("h3",{className:"text-lg font-semibold",children:"Dilivery Cost"}),(0,d.jsx)("p",{className:"text-lg",children:N.toLocaleString("en-IN")})]}),(0,d.jsxs)("div",{className:"flex justify-between items-center",children:[(0,d.jsx)("h3",{className:"text-lg font-semibold",children:"Total"}),(0,d.jsxs)("p",{className:"text-lg",children:["Rs"," ",(e.totalPrice+N).toLocaleString("en-IN")]})]})]})]},e._id)),(0,d.jsx)("div",{className:"bg-gray-100 px-6 py-4",children:(0,d.jsx)(o(),{href:"/profile/orders",passHref:!0,children:(0,d.jsx)("button",{className:"bg-themecolor hover:bg-blue-600 text-white px-4 py-2 rounded-full",children:"Back to Orders"})})})]})})]})};s.default=x}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=1932)}),_N_E=e.O()}]);