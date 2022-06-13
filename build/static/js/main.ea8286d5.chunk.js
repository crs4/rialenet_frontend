(this["webpackJsonptela-frontend"]=this["webpackJsonptela-frontend"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),s=n(22),o=n.n(s),i=(n(88),n(89),n(17)),l=n.n(i),u=(n(69),n(33)),d=n(81),b=n(21),j=(n(99),n(80)),f=Object(j.a)({name:"userTasks",initialState:{user:null,tasks:[]},reducers:{willLogin:function(e,t){return e},willLogout:function(e,t){return e},willGetUserProfile:function(e,t){return e},willLoadTasks:function(e,t){return e},didGetUserProfile:function(e,t){e.user=t.payload},didLogout:function(e){e.user=null,e.tasks=[],localStorage.removeItem("passcode")},didLoadTasks:function(e,t){e.tasks=t.payload}}}),p=f.actions,h=f.reducer,x=function(e){return e.userTasks.tasks},m=function(e){return e.userTasks.user},O=n(150),g=n(135),v=n(136),w=n(137),y=n(138),k=n(139),N=n(151),L=n(149),_=n(152),C=n(140),S=function(e){var t=e.className,n=e.section,r=e.showMenu,s=void 0!==r&&r,o=Object(O.a)("frontend",{useSuspense:!1}),i=o.t,l=(o.i18n,void 0!=i(n)?i(n):"Forum"),d=c.a.useState(!1),j=Object(u.a)(d,2),f=j[0],h=j[1],x=Object(b.d)(),S=Object(b.e)(m);return console.log("UserProfile:",S),Object(a.jsxs)(g.a,{className:t,color:"primary",light:!0,expand:"md",children:[Object(a.jsxs)(v.a,{className:"text-white font-weight-bold",href:"/",children:["RIALENET - ",l]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w.a,{onClick:function(){return h(!f)}}),Object(a.jsxs)(y.a,{isOpen:f,navbar:!0,children:[Object(a.jsx)(k.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(k.a,{navbar:!0,children:null!=S&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(N.a,{nav:!0,inNavbar:!0,children:[Object(a.jsxs)(L.a,{className:"text-white",nav:!0,caret:!0,children:[S.name.first," ",S.name.last]}),Object(a.jsx)(_.a,{right:!0,children:Object(a.jsx)(C.a,{onClick:function(){x(p.willLogout(""))},children:"Logout"})})]})})})]})]})]})},T=n(141),U=n(142),I=n(28),P=n(44),F=n(27),R=n(76),E=function e(){Object(R.a)(this,e)};E.admin=1,E.teacher=2,E.student=3;var G=function(e){var t=e.active,n=e.role,r=Object(O.a)("frontend",{useSuspense:!1}),c=r.t;r.i18n;return console.log("Role in sidebar:",n,E.teacher),Object(a.jsx)("div",{style:{border:"0px solid #000",width:"240px",position:"absolute",backgroundColor:"#f1f1f1",bottom:0,top:56},children:Object(a.jsxs)(k.a,{vertical:!0,className:"list-unstyled pb-3",children:[Object(a.jsx)(T.a,{active:"public_area"===t,className:"mb-1",children:Object(a.jsxs)(U.a,{className:"public_area"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:F.a,to:"/public_area",children:[Object(a.jsx)(I.a,{icon:P.a,className:"mr-2"})," ",c("public_area")]})}),n in[E.student,E.admin]&&Object(a.jsx)(T.a,{active:"public_area"===t,className:"mb-1",children:Object(a.jsxs)(U.a,{className:"public_area"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:F.a,to:"/public_area",children:[Object(a.jsx)(I.a,{icon:P.a,className:"mr-2"})," ",c("student_area")]})}),n in[E.teacher,E.admin]&&Object(a.jsx)(T.a,{active:"public_area"===t,className:"mb-1",children:Object(a.jsxs)(U.a,{className:"public_area"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:F.a,to:"/public_area",children:[Object(a.jsx)(I.a,{icon:P.a,className:"mr-2"})," ",c("teacher_area")]})})]})})},A=function(e){var t=e.children,n=e.className,r=e.fluid,c=void 0!==r&&r;return Object(a.jsx)("div",{className:n,style:{border:"0px solid #000",position:"absolute",backgroundColor:"white",bottom:0,top:56,left:c?0:240,right:0},children:t})},D=n(143),B=n(144),W=n(145),M=n(146),z=n(129),J=function(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],s=n[1],o=Object(b.d)(),i=Object(b.e)(x),l=Object(b.e)(m),j=Object(O.a)("frontend",{useSuspense:!1}),f=j.t,h=(j.i18n,0),g=new URLSearchParams(window.location.search),v=localStorage.getItem("passcode"),w=g.get("passcode");console.log("params:",v);null!=w&&z(v);c.map((function(e){h+=1,e.replies&&e.replies.map((function(e){return h+=1}))}));return Object(r.useEffect)((function(){o(p.willGetUserProfile()),o(p.willLoadTasks())}),[]),Object(r.useEffect)((function(){s(null!=i?i.map((function(e){return{userId:"01a",comId:"012",fullName:"Riya Negi",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",text:e.goal.name,replies:[]}})):[])}),[i]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S,{className:"mb-0 text-white",section:"public_area",showMenu:!0}),Object(a.jsx)(G,{active:"public_area",role:null!=l?l.role_id:null}),Object(a.jsx)(A,{children:Object(a.jsxs)(D.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(B.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsxs)(W.a,{children:[f("public_area")," (n.",h," ",f("comments"),")"]})}),Object(a.jsx)(M.a,{children:Object(a.jsx)(d.a,{currentUser:{userId:"01a",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",name:"xyz"},commentsArray:c||[],setComment:s,signinUrl:"/signin",signupUrl:"/signup"})})]})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},V=(n(132),n(15)),H=n(77),K=n(82),Q=n(18),X=n(68),Y=n(19),Z=n(16),$=l.a.mark(ae),ee=l.a.mark(re),te=l.a.mark(ce),ne=l.a.mark(se);function ae(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(p.willGetUserProfile.type,ce);case 2:return e.next=4,Object(Y.d)(p.willLogout.type,re);case 4:return e.next=6,Object(Y.d)(p.willLoadTasks.type,se);case 6:case"end":return e.stop()}}),$)}function re(e){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.c)(p.didLogout());case 2:return e.next=4,Object(Y.c)(Object(Z.d)("/logout"));case 4:case"end":return e.stop()}}),ee)}function ce(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/userprofile",e.prev=1,e.next=4,Object(Y.b)((function(){return fetch("/userprofile").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t,e.next=8,Object(Y.c)(p.didGetUserProfile(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(Y.c)(p.didGetUserProfile(null));case 14:case"end":return e.stop()}}),te,null,[[1,10]])}function se(e){var t,n,a,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e.payload,t=localStorage.getItem("passcode"),n="/tasks?passcode=".concat(t),c.prev=3,c.next=6,Object(Y.b)((function(){return fetch(n).then((function(e){return e.json()})).then((function(e){return e}))}));case 6:return a=c.sent,r=null==a?[]:a.tasks,c.next=10,Object(Y.c)(p.didLoadTasks(r));case 10:c.next=16;break;case 12:return c.prev=12,c.t0=c.catch(3),c.next=16,Object(Y.c)(p.didLoadTasks([]));case 16:case"end":return c.stop()}}),ne,null,[[3,12]])}var oe=l.a.mark(ie);function ie(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in root saga"),e.next=3,Object(Y.a)([ae()]);case 3:case"end":return e.stop()}}),oe)}var le=ie,ue=n(30),de=Object(Q.a)(),be=function(e){var t,n=Object(K.a)(),a=[Object(X.a)(de),n],r=[V.applyMiddleware.apply(void 0,a)],c=H.composeWithDevTools.apply(void 0,r),s=(t=de,Object(V.combineReducers)({router:Object(ue.b)(t),userTasks:h})),o=Object(V.createStore)(s,e,c);return n.run(le),o},je=n(11),fe=n(147),pe=n(148),he=function(){var e=Object(O.a)("frontend",{useSuspense:!1}),t=e.t,n=(e.i18n,Object(r.useState)(null)),c=Object(u.a)(n,2),s=c[0],o=c[1];Object(r.useEffect)((function(){localStorage.setItem("passcode",s)}),[s]);var i=function(e){console.log("entered:",e.target.value),function(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase();try{var n=e.trim().toUpperCase();if(8!=n.length)throw"Invalid";for(var a=0,r=0;r<n.length-1;r++)a+=t.indexOf(n.charAt(r));var c=(a-=t.indexOf(n.charAt(7)))%t.length==0;o(c?n:null)}catch(s){o(null)}}(e.target.value)};return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(D.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(B.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(W.a,{style:{textAlign:"center"},children:t("platform_title")})}),Object(a.jsx)(M.a,{children:Object(a.jsx)(fe.a,{onChange:function(e){return i(e)},type:"text",name:"passcode",id:"passcode",placeholder:t("passcode_enter")})}),Object(a.jsx)(pe.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:s&&Object(a.jsx)("a",{href:"/connect?passcode=".concat(s),children:t("connect_to_wenet")})})]})})},xe=function(){return Object(a.jsx)(ue.a,{history:de,children:Object(a.jsxs)(je.c,{children:[Object(a.jsx)(je.a,{path:"/forum",children:Object(a.jsx)(J,{})}),Object(a.jsx)(je.a,{path:"/",children:Object(a.jsx)(he,{})})]})})};function me(){return Object(a.jsx)(b.a,{store:be({}),children:Object(a.jsx)(xe,{})})}var Oe=n(56),ge=n(36),ve=n(78);n(134);Oe.a.use(ve.a).use(ge.e).init({ns:["tl","frontend"],defaultNS:"tl",fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1}});var we=Oe.a;"it-IT"!==(window.navigator.userLanguage||window.navigator.language)?we.changeLanguage("en-US"):we.changeLanguage("it-IT"),o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(me,{})}),document.getElementById("root")),q()},88:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.ea8286d5.chunk.js.map