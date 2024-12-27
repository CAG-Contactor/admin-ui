"use strict";(self.webpackChunkadmin_gui=self.webpackChunkadmin_gui||[]).push([[15],{"./src/components/contestants/Contestants.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Contestants__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/contestants/Contestants.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Contestants",component:_Contestants__WEBPACK_IMPORTED_MODULE_1__.A},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Contestants__WEBPACK_IMPORTED_MODULE_1__.A,(0,_Users_nilden_ideaprojects_admin_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)({},args)),Empty=Template.bind({});Empty.args={enqueueContestant:()=>{}};const Default=Template.bind({});Default.args={enqueueContestant:()=>{}};const __namedExportsOrder=["Empty","Default"];Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"args => <Contestants {...args} />",...Empty.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Contestants {...args} />",...Default.parameters?.docs?.source}}}},"./src/api/BackendAPI.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>registerContestant,d:()=>fetchContestants});const BASE_URL="http://localhost:8080/api/v1",registerContestant=async data=>{const response=await fetch("".concat(BASE_URL,"/contestants"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});if(!response.ok)throw new Error("Failed to register contestant");return response.json()},fetchContestants=async()=>{console.log("Fetching contestants...");const response=await fetch("".concat(BASE_URL,"/contestants"),{method:"GET",headers:{"Content-Type":"application/json"}});if(!response.ok)throw new Error("Failed to fetch contestants");return response.json()}},"./src/components/contestants/Contestants.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/ListGroup.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),_api_BackendAPI__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css"),__webpack_require__("./src/api/BackendAPI.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Contestants=()=>{console.log("Contestants component rendered");const[contestants,setContestants]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{console.log("Fetching contestants...");try{const data=await(0,_api_BackendAPI__WEBPACK_IMPORTED_MODULE_3__.d)();setContestants(data)}catch(err){console.error("Failed to load contestants",err)}})()}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"container mt-5 p-4",style:{backgroundColor:"#f5f5f5",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"text-center mb-4",style:{color:"#333333"},children:"Contestants"}),0===contestants.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"text-center",style:{color:"#333333"},children:"No contestants registered yet."}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A,{children:contestants.map(((contestant,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A.Item,{className:"d-flex justify-content-between align-items-center",style:{backgroundColor:"#ffffff",color:"#333333"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("strong",{children:[contestant.firstName," ",contestant.lastName]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:contestant.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"primary",style:{backgroundColor:"#ff6600",borderColor:"#ff6600"},onClick:()=>{},children:"Enqueue"})]},index)))})]})},__WEBPACK_DEFAULT_EXPORT__=Contestants;Contestants.__docgenInfo={description:"",methods:[],displayName:"Contestants"}}}]);