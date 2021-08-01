(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"b",(function(){return E}));var r=n(18),c=n.n(r),a=n(22),o=n(14),s=n.n(o),u=n(2),i={registerRequest:Object(u.b)("auth/registerRequest"),registerSuccess:Object(u.b)("auth/registerSuccess"),registerError:Object(u.b)("auth/registerError"),loginRequest:Object(u.b)("auth/loginRequest"),loginSuccess:Object(u.b)("auth/loginSuccess"),loginError:Object(u.b)("auth/loginError"),logoutRequest:Object(u.b)("auth/logoutRequest"),logoutSuccess:Object(u.b)("auth/logoutSuccess"),logoutError:Object(u.b)("auth/logoutError"),getCurrentUserRequest:Object(u.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(u.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(u.b)("auth/getCurrentUserError")};s.a.defaults.baseURL="https://connections-api.herokuapp.com";var b,l,j,O,d=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},f=function(){s.a.defaults.headers.common.Authorization=""},h={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.registerRequest()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:r=e.sent,d(r.data.token),n(i.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(i.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.loginRequest()),e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:r=e.sent,d(r.data.token),n(i.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(i.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.logoutRequest()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:f(),e(i.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(i.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return d(a),e(i.getCurrentUserRequest()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:o=t.sent,e(i.getCurrentUserSuccess(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(i.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},g={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserPost:function(t){return t.auth.user.email}},p=n(3),v=n(7),x={name:null,email:null},m=Object(u.c)(x,(b={},Object(p.a)(b,i.registerSuccess,(function(t,e){return e.payload.user})),Object(p.a)(b,i.loginSuccess,(function(t,e){return e.payload.user})),Object(p.a)(b,i.logoutSuccess,(function(){return x})),Object(p.a)(b,i.getCurrentUserSuccess,(function(t,e){return e.payload})),b)),k=Object(u.c)(null,(l={},Object(p.a)(l,i.registerSuccess,(function(t,e){return e.payload.token})),Object(p.a)(l,i.loginSuccess,(function(t,e){return e.payload.token})),Object(p.a)(l,i.logoutSuccess,(function(){return null})),l)),C=function(t,e){return e.payload},_=Object(u.c)(null,(j={},Object(p.a)(j,i.registerError,C),Object(p.a)(j,i.loginError,C),Object(p.a)(j,i.logoutError,C),Object(p.a)(j,i.getCurrentUserError,C),j)),S=Object(u.c)(!1,(O={},Object(p.a)(O,i.registerSuccess,(function(){return!0})),Object(p.a)(O,i.loginSuccess,(function(){return!0})),Object(p.a)(O,i.getCurrentUserSuccess,(function(){return!0})),Object(p.a)(O,i.logoutSuccess,(function(){return!1})),Object(p.a)(O,i.registerError,(function(){return!1})),Object(p.a)(O,i.loginError,(function(){return!1})),Object(p.a)(O,i.getCurrentUserError,(function(){return!1})),O)),E=Object(v.b)({user:m,isAuthenticated:S,token:k,error:_})},108:function(t,e,n){},109:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(25),o=n.n(a),s=n(16),u=n(9),i=n(47),b=n(6),l={home:"/",contacts:"/contacts",register:"/register",login:"/login"},j=n(10),O=n(23),d=n.n(O),f=n(1);function h(){var t=Object(u.c)(j.c.getIsAuthenticated);return Object(f.jsxs)("nav",{children:[Object(f.jsx)(s.b,{to:"/",exact:!0,className:d.a.link,activeClassName:d.a.activeLink,children:"Home"}),t&&Object(f.jsx)(s.b,{to:"/contacts",exact:!0,className:d.a.link,activeClassName:d.a.activeLink,children:"\u0421ontacts"})]})}var g=n(33),p=n.n(g);function v(){var t=Object(u.b)(),e=Object(u.c)(j.c.getUserPost),n=Object(r.useCallback)((function(){t(j.a.logOut())}),[t]);return Object(f.jsxs)("div",{className:p.a.container,children:[Object(f.jsxs)("span",{className:p.a.post,children:["Welcome, ",e]}),Object(f.jsx)("button",{type:"button",onClick:n,children:"Logout"})]})}var x=n(24),m=n.n(x),k=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(s.b,{to:l.register,exact:!0,className:m.a.link,activeClassName:m.a.activeLink,children:"Register now"}),Object(f.jsx)(s.b,{to:l.login,exact:!0,className:m.a.link,activeClassName:m.a.activeLink,children:"Log In"})]})},C=n(48),_=n.n(C);function S(){var t=Object(u.c)(j.c.getIsAuthenticated);return Object(f.jsxs)("header",{className:_.a.header,children:[Object(f.jsx)(h,{}),t?Object(f.jsx)(v,{}):Object(f.jsx)(k,{})]})}var E=n(49),y=n.n(E),w=function(t){var e=t.children;return Object(f.jsx)("div",{className:y.a.Container,children:e})},U=n(17),A=n(27),N=["isAuthenticated","redirectTo","children"];function L(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,r=Object(A.a)(t,N),c=Object(u.c)(j.c.getIsAuthenticated);return Object(f.jsx)(b.b,Object(U.a)(Object(U.a)({},r),{},{children:c?n:Object(f.jsx)(b.a,{to:e})}))}var R=["isAuthenticated","redirectTo","children"];function q(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,r=Object(A.a)(t,R),c=Object(u.c)(j.c.getIsAuthenticated);return Object(f.jsx)(b.b,Object(U.a)(Object(U.a)({},r),{},{children:c&&r.restricted?Object(f.jsx)(b.a,{to:e}):n}))}var T=n(45),z=n(52),I=n.n(z),B=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,128))})),F=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,129))})),J=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,130))})),M=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,131))}));function P(){var t=Object(u.b)();return Object(r.useEffect)((function(){t(j.a.getCurrentUser())}),[t]),Object(f.jsxs)(w,{children:[Object(f.jsx)(S,{}),Object(f.jsx)("h1",{className:I.a.title,children:"Phonebook"}),Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(T.a,{}),children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{exact:!0,path:l.home,children:Object(f.jsx)(B,{})}),Object(f.jsx)(q,{path:l.register,restricted:!0,redirectTo:l.contacts,children:Object(f.jsx)(J,{})}),Object(f.jsx)(q,{path:l.login,restricted:!0,redirectTo:l.contacts,children:Object(f.jsx)(F,{})}),Object(f.jsx)(L,{path:l.contacts,redirectTo:l.login,children:Object(f.jsx)(M,{})})]})})]})}var D=n(28),Q=n(2),Z=n(53),G=n.n(Z),H=n(19),W=n(54),X=n.n(W),K=n(34),V=[].concat(Object(D.a)(Object(Q.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),[G.a]),Y={key:"auth",storage:X.a,whitelist:["token"]},$=Object(Q.a)({reducer:{auth:Object(H.g)(Y,j.b),contacts:K.b},middleware:V,devTools:!1}),tt={store:$,persistor:Object(H.h)($)};n(107),n(108);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(u.a,{store:tt.store,children:Object(f.jsx)(i.a,{loading:null,persistor:tt.persistor,children:Object(f.jsx)(s.a,{children:Object(f.jsx)(P,{})})})})}),document.getElementById("root"))},23:function(t,e,n){t.exports={link:"Navigation_link__3_Qrs",activeLink:"Navigation_activeLink__2OGE6"}},24:function(t,e,n){t.exports={link:"AuthNav_link__1w1kD",activeLink:"AuthNav_activeLink__1Zgld"}},33:function(t,e,n){t.exports={container:"UserMenu_container__3JzjF",post:"UserMenu_post__QBLCr"}},34:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return g})),n.d(e,"b",(function(){return U}));var r,c,a=n(14),o=n.n(a),s=n(2),u=Object(s.b)("contacts/fetchContactRequest"),i=Object(s.b)("contacts/fetchContactSuccess"),b=Object(s.b)("contacts/fetchContactError"),l=Object(s.b)("contacts/saveContactRequest"),j=Object(s.b)("contacts/saveContactSuccess"),O=Object(s.b)("contacts/saveContactError"),d=Object(s.b)("contacts/deleteContactRequest"),f=Object(s.b)("contacts/deleteContactSuccess"),h=Object(s.b)("contacts/deleteContactError"),g=Object(s.b)("contact/Filter"),p={fetchContacts:function(){return function(t){t(u()),o.a.get("/contacts").then((function(e){var n=e.data;return t(i(n))})).catch((function(e){return t(b(e.message))}))}},saveContact:function(t){var e=t.name,n=t.number;return function(t){var r={name:e,number:n};t(l()),o.a.post("/contacts",r).then((function(e){var n=e.data;return t(j(n))})).catch((function(e){return t(O(e.message))}))}},deleteContact:function(t){return function(e){e(d()),o.a.delete("/contacts/".concat(t)).then((function(){return e(f(t))})).catch((function(t){return e(h(t.message))}))}}},v=n(26),x=function(t){return t.contacts.filter},m=function(t){return t.contacts.items},k={getLoading:function(t){return t.contacts.loading},getfilter:x,getAllContacts:m,getfilteredContacts:Object(v.a)([x,m],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},C=n(3),_=n(28),S=n(7),E=Object(s.c)([],(r={},Object(C.a)(r,i,(function(t,e){return e.payload})),Object(C.a)(r,j,(function(t,e){return[e.payload].concat(Object(_.a)(t))})),Object(C.a)(r,f,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),r)),y=Object(s.c)("",Object(C.a)({},g,(function(t,e){return e.payload}))),w=Object(s.c)(!1,(c={},Object(C.a)(c,u,(function(){return!0})),Object(C.a)(c,i,(function(){return!1})),Object(C.a)(c,b,(function(){return!1})),Object(C.a)(c,l,(function(){return!0})),Object(C.a)(c,j,(function(){return!1})),Object(C.a)(c,O,(function(){return!1})),Object(C.a)(c,d,(function(){return!0})),Object(C.a)(c,f,(function(){return!1})),Object(C.a)(c,h,(function(){return!1})),c)),U=Object(S.b)({items:E,filter:y,loading:w})},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(50),c=n.n(r),a=n(51),o=n.n(a),s=n(1),u=function(){return Object(s.jsx)(c.a,{className:o.a.loader,type:"ThreeDots",color:"green",height:70,width:70,timeout:3e3})}},48:function(t,e,n){t.exports={header:"AppBar_header__2wB-E"}},49:function(t,e,n){t.exports={Container:"Container_Container__LxTZX"}},51:function(t,e,n){t.exports={loader:"Loader_loader__3Nmyr"}},52:function(t,e,n){t.exports={title:"App_title__1-Fi_"}}},[[109,5,6]]]);
//# sourceMappingURL=main.b7ba260e.chunk.js.map