"use strict";(self.webpackChunkadmin_gui=self.webpackChunkadmin_gui||[]).push([[31],{"./src/components/dashboard/Dashboard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dashboard_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),chunk_W3HZJLUQ=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-router/dist/development/chunk-W3HZJLUQ.mjs")),Register=__webpack_require__("./src/components/register/Register.tsx"),Contestants=__webpack_require__("./src/components/contestants/Contestants.tsx"),jsx_runtime=(__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Queue=()=>(0,jsx_runtime.jsx)("div",{className:"container mt-5 p-4",style:{backgroundColor:"#f5f5f5",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:(0,jsx_runtime.jsx)("h1",{className:"text-center mb-4",style:{color:"#333333"},children:"Contestant Queue"})}),queue_Queue=Queue;Queue.__docgenInfo={description:"",methods:[],displayName:"Queue"};const App=()=>(0,jsx_runtime.jsxs)("div",{className:"container mt-5 p-4",style:{backgroundColor:"#f5f5f5",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:[(0,jsx_runtime.jsx)("nav",{children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.N_,{to:"/register",style:{color:"#333333"},children:"Register"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.N_,{to:"/contestants",style:{color:"#333333"},children:"Contestants"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.N_,{to:"/queue",style:{color:"#333333"},children:"Queue"})})]})}),(0,jsx_runtime.jsxs)(chunk_W3HZJLUQ.BV,{children:[(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.qh,{path:"/register",element:(0,jsx_runtime.jsx)(Register.A,{})}),(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.qh,{path:"/contestants",element:(0,jsx_runtime.jsx)(Contestants.A,{})}),(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.qh,{path:"/queue",element:(0,jsx_runtime.jsx)(queue_Queue,{})}),(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.qh,{path:"/",element:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{className:"text-center mb-4",style:{color:"#333333"},children:"Welcome to the Admin UI"}),(0,jsx_runtime.jsx)("p",{className:"text-center",style:{color:"#333333"},children:"Select a section from the navigation menu."})]})})]})]}),Dashboard=App;App.__docgenInfo={description:"",methods:[],displayName:"App"};var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const Dashboard_stories={title:"Components/Dashboard",component:Dashboard},Default=(args=>(0,jsx_runtime.jsx)(chunk_W3HZJLUQ.Kd,{children:(0,jsx_runtime.jsx)(Dashboard,(0,objectSpread2.A)({},args))})).bind({});Default.args={},Default.play=async _ref=>{let{canvasElement}=_ref;const canvas=(0,dist.ux)(canvasElement);await(0,dist.E3)(canvas.getByText("Register")).toBeInTheDocument(),await(0,dist.E3)(canvas.getByText("Contestants")).toBeInTheDocument(),await(0,dist.E3)(canvas.getByText("Queue")).toBeInTheDocument()};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Router>\n        <Dashboard {...args} />\n    </Router>",...Default.parameters?.docs?.source}}}},"./src/api/BackendAPI.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>registerContestant,d:()=>fetchContestants});const BASE_URL="http://localhost:8080/api/v1",registerContestant=async data=>{const response=await fetch("".concat(BASE_URL,"/contestants"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});if(!response.ok)throw new Error("Failed to register contestant");return response.json()},fetchContestants=async()=>{console.log("Fetching contestants...");const response=await fetch("".concat(BASE_URL,"/contestants"),{method:"GET",headers:{"Content-Type":"application/json"}});if(!response.ok)throw new Error("Failed to fetch contestants");return response.json()}},"./src/components/contestants/Contestants.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/ListGroup.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),_api_BackendAPI__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css"),__webpack_require__("./src/api/BackendAPI.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Contestants=()=>{console.log("Contestants component rendered");const[contestants,setContestants]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{console.log("Fetching contestants...");try{const data=await(0,_api_BackendAPI__WEBPACK_IMPORTED_MODULE_3__.d)();setContestants(data)}catch(err){console.error("Failed to load contestants",err)}})()}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"container mt-5 p-4",style:{backgroundColor:"#f5f5f5",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"text-center mb-4",style:{color:"#333333"},children:"Contestants"}),0===contestants.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"text-center",style:{color:"#333333"},children:"No contestants registered yet."}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A,{children:contestants.map(((contestant,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Item,{className:"d-flex justify-content-between align-items-center",style:{backgroundColor:"#ffffff",color:"#333333"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("strong",{children:[contestant.firstName," ",contestant.lastName]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:contestant.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"primary",style:{backgroundColor:"#ff6600",borderColor:"#ff6600"},onClick:()=>{},children:"Enqueue"})]},index)))})]})},__WEBPACK_DEFAULT_EXPORT__=Contestants;Contestants.__docgenInfo={description:"",methods:[],displayName:"Contestants"}},"./src/components/register/Register.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_api_BackendAPI__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/api/BackendAPI.ts"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/Form.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Register=()=>{const[formData,setFormData]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({firstName:"",lastName:"",email:""}),[errors,setErrors]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),[message,setMessage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"container mt-5 p-4",style:{backgroundColor:"#f5f5f5",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"text-center mb-4",style:{color:"#333333"},children:"User Registration"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A,{onSubmit:async e=>{if(e.preventDefault(),(()=>{const newErrors={},nameRegex=/^[a-zA-Z\s]{1,50}$/;return formData.firstName&&nameRegex.test(formData.firstName)||(newErrors.firstName="Invalid first name."),formData.lastName&&nameRegex.test(formData.lastName)||(newErrors.lastName="Invalid last name."),formData.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)||(newErrors.email="Invalid email address."),setErrors(newErrors),0===Object.keys(newErrors).length})())try{await(0,_api_BackendAPI__WEBPACK_IMPORTED_MODULE_3__.T)(formData);setMessage("Registration successful!"),setFormData({firstName:"",lastName:"",email:""}),setErrors({})}catch(error){setMessage("Registration failed.")}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Group,{controlId:"firstName",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Label,{style:{color:"#333333"},children:"First Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Control,{type:"text",value:formData.firstName,onChange:e=>setFormData((0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({},formData),{},{firstName:e.target.value})),isInvalid:!!errors.firstName,style:{backgroundColor:"#ffffff",color:"#333333"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Control.Feedback,{type:"invalid",children:errors.firstName})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Group,{controlId:"lastName",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Label,{style:{color:"#333333"},children:"Last Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Control,{type:"text",value:formData.lastName,onChange:e=>setFormData((0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({},formData),{},{lastName:e.target.value})),isInvalid:!!errors.lastName,style:{backgroundColor:"#ffffff",color:"#333333"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Control.Feedback,{type:"invalid",children:errors.lastName})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Group,{controlId:"email",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Label,{style:{color:"#333333"},children:"Email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Control,{type:"email",value:formData.email,onChange:e=>setFormData((0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.A)({},formData),{},{email:e.target.value})),isInvalid:!!errors.email,style:{backgroundColor:"#ffffff",color:"#333333"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Control.Feedback,{type:"invalid",children:errors.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A,{type:"submit",style:{backgroundColor:"#ff6600",borderColor:"#ff6600"},children:"Submit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A,{type:"button",variant:"secondary",onClick:()=>{setFormData({firstName:"",lastName:"",email:""}),setErrors({}),setMessage("")},style:{backgroundColor:"#666666",borderColor:"#666666",color:"#ffffff"},children:"Clear"})]})]}),message&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"text-center mt-4",style:{color:"#333333"},children:message})]})},__WEBPACK_DEFAULT_EXPORT__=Register;Register.__docgenInfo={description:"",methods:[],displayName:"Register"}}}]);