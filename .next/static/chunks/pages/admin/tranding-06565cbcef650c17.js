(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{3449:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/tranding",function(){return a(3024)}])},2049:function(e,s,a){"use strict";var t=a(5893);a(7294);let d=()=>(0,t.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen z-20",children:(0,t.jsxs)("div",{className:"flex md:flex-row flex-xol flex-wrap justify-center items-center bg-white h-screen sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"w-full sm:w-80 bg-white rounded-md shadow-xl m-3",children:[(0,t.jsx)("div",{className:"h-44 bg-gray-300 rounded-t-md animate-pulse"}),(0,t.jsxs)("div",{className:"p-5",children:[(0,t.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,t.jsxs)("div",{className:"animate-pulse",children:[(0,t.jsx)("div",{className:"h-1 mt-2 w-1/2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)("div",{className:"flex w-screen md:w-full sm:w-96 bg-white rounded-md shadow-xl",children:[(0,t.jsx)("div",{className:"w-1/3 bg-gray-300 rounded-l-md animate-pulse"}),(0,t.jsxs)("div",{className:"p-5 w-3/4",children:[(0,t.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,t.jsxs)("div",{className:"animate-pulse",children:[(0,t.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]}),(0,t.jsxs)("div",{className:"flex w-screen md:w-full sm:w-96 bg-white rounded-md shadow-xl",children:[(0,t.jsx)("div",{className:"w-1/3 bg-gray-300 rounded-l-md animate-pulse"}),(0,t.jsxs)("div",{className:"p-5 w-3/4",children:[(0,t.jsx)("div",{className:"h-6 rounded-sm bg-gray-200 duration-75 animate-pulse mb-4"}),(0,t.jsxs)("div",{className:"animate-pulse",children:[(0,t.jsx)("div",{className:"h-1 mt-2 w-1/3 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 w-2/3 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-1 mt-2 rounded-sm bg-gray-300"}),(0,t.jsx)("div",{className:"h-2 rounded-sm bg-gray-300"})]})]})]})]})]})});s.Z=d},3024:function(e,s,a){"use strict";a.r(s);var t=a(5893),d=a(7294),l=a(1163),r=a.n(l);a(1955);var i=a(2049),c=a(6154),n=a(2782);let m=()=>{let e=(0,d.useContext)(n.Z),[s,a]=(0,d.useState)(!0),[l,m]=(0,d.useState)(""),[o,u]=(0,d.useState)(""),[x,h]=(0,d.useState)(""),[g,p]=(0,d.useState)(""),[b,f]=(0,d.useState)(null),[j,N]=(0,d.useState)({}),[y,v]=(0,d.useState)(""),[w,P]=(0,d.useState)(!1),[k,S]=(0,d.useState)([]),[_,C]=(0,d.useState)([]),[T,D]=(0,d.useState)("");(async function(){let e=localStorage.getItem("token");if(e)try{let s=await fetch("/api/middleware/auth?token=".concat(e),{method:"POST"});s.ok||r().push({pathname:"/login",query:{message:"Token Invalid"}})}catch(e){console.log(e),r().push({pathname:"/login",query:{message:"Token Expired"}})}else r().push({pathname:"/login",query:{message:"Token Invalid"}})})(),(0,d.useEffect)(()=>{let e=setTimeout(()=>{a(!1)},3e3);return()=>clearTimeout(e)},[]);let q=e=>{let s=e.target.files[0];f(s)},E=()=>{let e={};return l||(e.productName="Product name is required"),o||(e.productDescription="Product description is required"),x||(e.productPrice="Product price is required"),b||(e.imageSrc="Product image is required"),N(e),0===Object.keys(e).length},z=async e=>{if(e.preventDefault(),E()){a(!0);try{let e=new FormData;e.append("file",b),e.append("upload_preset","uploads");let s=await c.Z.post("https://api.cloudinary.com/v1_1/dvo1ngia7/image/upload",e),{url:t}=s.data,d=await c.Z.post("/api/admin/tranding",{productName:l,productDescription:o,productCategory:g,productPrice:x,url:t});v(d.data.message),P(!0),setTimeout(()=>{P(!1)},3e3),a(!1),Z()}catch(e){console.log(e),v("Something Went Wrong. "),P(!0),setTimeout(()=>{P(!1)},3e3),a(!1)}}},Z=async()=>{let e=await c.Z.get("/api/admin/tranding");S(e.data),C(e.data),v(e.data.message),e.data.message};(0,d.useEffect)(()=>{Z()},[]);let A=async e=>{a(!0);try{let s=await c.Z.delete("/api/admin/tranding?id=".concat(e));a(!1),v(s.data.message),P(!0),Z()}catch(e){a(!1),v("Something went Wrong, Please Try Again. "),P(!0)}setTimeout(()=>{P(!1)},3e3)};return(0,d.useEffect)(()=>{let s=_.filter(s=>s.name.toLowerCase().includes(e.query.toLowerCase()));0==s.length?D("Users not Found"):D(e.query),S(s)},[e.query]),(0,t.jsxs)("div",{children:[s?(0,t.jsx)(i.Z,{}):null,w&&(0,t.jsx)("div",{className:"fixed top-0 left-0 lg:left-auto right-0 z-50 p-4",children:(0,t.jsxs)("div",{className:"mx-auto max-w-sm bg-white rounded-lg shadow-lg flex items-center",children:[(0,t.jsx)("div",{className:"flex-shrink-0",children:(0,t.jsx)("svg",{className:"h-8 w-8 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16 10a6 6 0 11-12 0 6 6 0 0112 0zm-6 5a1 1 0 100-2 1 1 0 000 2zm0-10a1 1 0 100-2 1 1 0 000 2zM5.78 14.55a4.002 4.002 0 01-1.513-1.513A5.984 5.984 0 013 10a6 6 0 1111.268 3H13a1 1 0 00-1 1v1a1 1 0 102 0v-1a3 3 0 00-3-3h-.268A5.992 5.992 0 015.78 14.55zM10 12a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})})}),(0,t.jsx)("div",{className:"ml-4",children:(0,t.jsx)("div",{className:"mt-2 mx-2 text-sm text-gray-500",children:y})})]})}),(0,t.jsxs)("div",{className:"container mx-auto px-4",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mt-8 mb-4",children:"Product CRUD Page"}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsxs)("div",{className:"max-w-md w-full",children:[(0,t.jsx)("h2",{className:"text-xl font-bold mb-4 text-center",children:"Add Product"}),(0,t.jsxs)("form",{className:"space-y-6",onSubmit:z,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"name",children:"Name"}),(0,t.jsx)("input",{className:"block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",id:"name",type:"text",placeholder:"Product Name",value:l,onChange:e=>m(e.target.value)}),j.productName&&(0,t.jsx)("div",{className:"text-red-500",children:j.productName})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"description",children:"Description"}),(0,t.jsx)("textarea",{className:"block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",id:"description",placeholder:"Product Description",value:o,onChange:e=>u(e.target.value)}),j.productDescription&&(0,t.jsx)("div",{className:"text-red-500",children:j.productDescription})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:space-x-4",children:[(0,t.jsxs)("div",{className:"w-full sm:w-1/2",children:[(0,t.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"price",children:"Price"}),(0,t.jsx)("input",{className:"block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",id:"price",type:"number",placeholder:"Product Price",value:x,onChange:e=>h(e.target.value)}),j.productPrice&&(0,t.jsx)("div",{className:"text-red-500",children:j.productPrice})]}),(0,t.jsxs)("div",{className:"w-full sm:w-1/2",children:[(0,t.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"image",children:"Image"}),(0,t.jsx)("input",{className:"block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",id:"image",type:"file",onChange:q}),j.imageSrc&&(0,t.jsx)("div",{className:"text-red-500",children:j.imageSrc})]})]}),(0,t.jsx)("div",{className:"flex justify-end",children:(0,t.jsx)("button",{type:"submit",className:"inline-flex justify-center w-full sm:w-auto px-4 py-2 bg-blue-500 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm",children:"Add Product"})})]})]})}),(0,t.jsxs)("div",{className:"my-8",children:[(0,t.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Product List"}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"table-auto border-collapse w-full",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"Image"}),(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"ID"}),(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"Name"}),(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"Description"}),(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"Price"}),(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"Category"}),(0,t.jsx)("th",{className:"px-4 py-2 font-bold text-left",children:"Actions"})]})}),(0,t.jsx)("tbody",{children:k.map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{className:"border px-4 py-2",children:[" ",(0,t.jsx)("img",{src:e.image})," "]}),(0,t.jsx)("td",{className:"border px-4 py-2",children:e._id}),(0,t.jsx)("td",{className:"border px-4 py-2",children:e.name}),(0,t.jsx)("td",{className:"border px-4 py-2",children:e.description}),(0,t.jsx)("td",{className:"border px-4 py-2",children:e.price}),(0,t.jsx)("td",{className:"border px-4 py-2",children:e.category}),(0,t.jsx)("td",{className:"border px-4 py-2",children:(0,t.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>A(e._id),children:"Delete"})})]}))})]})})]})]})]})};s.default=m}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3449)}),_N_E=e.O()}]);