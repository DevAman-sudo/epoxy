(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{2400:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/payment",function(){return a(8346)}])},2049:function(e,s,a){"use strict";var l=a(5893);a(7294);let d=()=>(0,l.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen z-20",children:(0,l.jsxs)("div",{className:"flex md:flex-row flex-xol flex-wrap justify-center items-center bg-white h-screen sm:px-6 lg:px-8",children:[(0,l.jsxs)("div",{className:"w-full sm:w-80 bg-white rounded-md shadow-xl m-3",children:[(0,l.jsx)("div",{className:"h-44 bg-gray-300 rounded-t-md animate-pulse"}),(0,l.jsxs)("div",{className:"p-5",children:[(0,l.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,l.jsxs)("div",{className:"animate-pulse",children:[(0,l.jsx)("div",{className:"h-1 mt-2 w-1/2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex w-screen md:w-full sm:w-96 bg-white rounded-md shadow-xl",children:[(0,l.jsx)("div",{className:"w-1/3 bg-gray-300 rounded-l-md animate-pulse"}),(0,l.jsxs)("div",{className:"p-5 w-3/4",children:[(0,l.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,l.jsxs)("div",{className:"animate-pulse",children:[(0,l.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]}),(0,l.jsxs)("div",{className:"flex w-screen md:w-full sm:w-96 bg-white rounded-md shadow-xl",children:[(0,l.jsx)("div",{className:"w-1/3 bg-gray-300 rounded-l-md animate-pulse"}),(0,l.jsxs)("div",{className:"p-5 w-3/4",children:[(0,l.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,l.jsxs)("div",{className:"animate-pulse",children:[(0,l.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,l.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]})]})]})});s.Z=d},8346:function(e,s,a){"use strict";a.r(s);var l=a(5893);a(1955);var d=a(1163),t=a.n(d),r=a(7294),i=a(6154),n=a(8260),m=a(2049),c=a(2782);let x=()=>{let e=(0,r.useContext)(c.Z),[s,a]=(0,r.useState)(!0),[d,x]=(0,r.useState)([]),[u,o]=(0,r.useState)([]),[h,g]=(0,r.useState)(""),[j,N]=(0,r.useState)(1),[y]=(0,r.useState)(10);!async function(){let e=localStorage.getItem("token");if(e)try{let s=await fetch("/api/middleware/auth?token=".concat(e),{method:"POST"});s.ok||t().push({pathname:"/login",query:{message:"Token Invalid"}})}catch(e){console.log(e),t().push({pathname:"/login",query:{message:"Token Expired"}})}else t().push({pathname:"/login",query:{message:"Token Invalid"}})}();let f=async()=>{let e=await i.Z.get("/api/admin/orders"),s=e.data;x(s),o(s)};(0,r.useEffect)(()=>{f()},[]);let v=d.length;(0,r.useEffect)(()=>{let s=u.filter(s=>s._id.toLowerCase().includes(e.query.toLowerCase()));0===s.length?g("Data not Found"):g(e.query),x(s),N(1)},[e.query,u]);let p=j*y,b=d.slice(p-y,p),w=e=>N(e);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{a(!1)},3e3);return()=>clearTimeout(e)},[]),(0,l.jsxs)("div",{children:[s?(0,l.jsx)(m.Z,{}):null,(0,l.jsx)("div",{className:"grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4",children:(0,l.jsxs)("div",{className:"bg-white shadow rounded-md mb-4 p-4 sm:p-6 h-full",children:[(0,l.jsxs)("p",{className:"text-xl font-400 text-grey-500 tracking-wider my-2 ",children:["Search Query: ",h]}),(0,l.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,l.jsxs)("h3",{className:"text-xl font-bold leading-none text-gray-900",children:["Customers -- ",(0,l.jsx)("span",{children:v})]})}),b.map((e,s)=>(0,l.jsx)("div",{className:"flow-root",children:(0,l.jsx)("ul",{role:"list",className:"divide-y divide-gray-200",children:(0,l.jsx)("li",{className:"py-3 sm:py-4 border border-b-2 px-2",children:(0,l.jsx)("div",{className:"flex items-center space-x-4",children:(0,l.jsxs)("div",{className:"flex-1 min-w-0 md:flex justify-evenly",children:[(0,l.jsxs)("p",{className:"flex-1 text-sm font-medium text-gray-900 truncate",children:["ID: ",e._id]}),(0,l.jsxs)("p",{className:"flex-1 capitalize text-sm font-medium text-gray-900 truncate",children:["NAME: ",e.user.name]}),(0,l.jsxs)("p",{className:"flex-1 text-sm text-gray-500 truncate",children:["EMAIL:"," ",(0,l.jsx)("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"17727a767e7b57607e7973646372653974787a",children:e.user.email})]}),(0,l.jsxs)("p",{className:"flex-1 text-sm text-gray-500 truncate",children:["DATE: ",(0,n.Z)(new Date(e.dateOrdered),"MM/dd/yyyy")]}),(0,l.jsxs)("p",{className:"flex-1 text-sm text-gray-500 truncate",children:["PAYMENT: ",e.totalPrice.toLocaleString("en-IN")]}),(0,l.jsx)("p",{children:"note: amount without shipping cost"})]})})})})},s)),(0,l.jsx)("nav",{className:"block",children:(0,l.jsx)("ul",{className:"flex pl-0 rounded list-none flex-wrap",children:Array.from(Array(Math.ceil(d.length/y)),(e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"".concat(j===s+1?"bg-blue-500 text-white":"text-blue-500"," font-bold block hover:text-white hover:bg-blue-500 py-2 px-3"),onClick:()=>w(s+1),children:s+1})},s))})})]})})]})};s.default=x}},function(e){e.O(0,[260,774,888,179],function(){return e(e.s=2400)}),_N_E=e.O()}]);