(this["webpackJsonptela-frontend"]=this["webpackJsonptela-frontend"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(23),o=n.n(s),i=(n(90),n(91),n(17)),l=n.n(i),d=(n(70),n(21)),u=n(83),j=n(16),b=(n(101),n(82)),h=Object(b.a)({name:"userTasks",initialState:{user:null,tasks:[]},reducers:{willLogin:function(e,t){return e},willLogout:function(e,t){return e},willGetUserProfile:function(e,t){return e},willLoadTasks:function(e,t){return e},willCreateTask:function(e,t){return e},didGetUserProfile:function(e,t){e.user=t.payload},didLogout:function(e){e.user=null,e.tasks=[],localStorage.removeItem("passcode")},didLoadTasks:function(e,t){e.tasks=t.payload}}}),x=h.actions,O=h.reducer,f=function(e){return e.userTasks.tasks},p=function(e){return e.userTasks.user},m=n(154),g=n(137),v=n(138),y=n(139),w=n(140),k=n(141),C=n(155),T=n(156),N=n(157),S=n(142),_=function(e){var t=e.className,n=e.section,r=e.showMenu,s=void 0!==r&&r,o=Object(m.a)("frontend",{useSuspense:!1}),i=o.t,l=(o.i18n,void 0!=i(n)?i(n):"Forum"),u=c.a.useState(!1),b=Object(d.a)(u,2),h=b[0],O=b[1],f=Object(j.d)(),_=Object(j.e)(p);return console.log("UserProfile:",_),Object(a.jsxs)(g.a,{className:t,color:"primary",light:!0,expand:"md",children:[Object(a.jsxs)(v.a,{className:"text-white font-weight-bold",href:"/",children:["RIALENET - ",l]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.a,{onClick:function(){return O(!h)}}),Object(a.jsxs)(w.a,{isOpen:h,navbar:!0,children:[Object(a.jsx)(k.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(k.a,{navbar:!0,children:null!=_&&null!=_.name&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(C.a,{nav:!0,inNavbar:!0,children:[Object(a.jsxs)(T.a,{className:"text-white",nav:!0,caret:!0,children:[_.name.first," ",_.name.last]}),Object(a.jsx)(N.a,{right:!0,children:Object(a.jsx)(S.a,{onClick:function(){f(x.willLogout(""))},children:"Logout"})})]})})})]})]})]})},A=n(143),L=n(144),I=n(29),U=n(46),F=n(28),P=n(78),D=function e(){Object(P.a)(this,e)};D.admin=1,D.teacher=2,D.student=3;var E=function(e){var t=e.active,n=e.role,r=Object(m.a)("frontend",{useSuspense:!1}),c=r.t;r.i18n;return console.log("Role in sidebar ->",n,D.teacher,n==D.teacher||n==D.admin),Object(a.jsx)("div",{style:{border:"0px solid #000",width:"240px",position:"absolute",backgroundColor:"#f1f1f1",bottom:0,top:56},children:Object(a.jsxs)(k.a,{vertical:!0,className:"list-unstyled pb-3",children:[Object(a.jsx)(A.a,{active:"public_area"===t,className:"mb-1",children:Object(a.jsxs)(L.a,{className:"public_area"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:F.a,to:"/forum",children:[Object(a.jsx)(I.a,{icon:U.a,className:"mr-2"})," ",c("public_area")]})}),(n==D.student||n==D.admin)&&Object(a.jsx)(A.a,{active:"student_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(L.a,{className:"student_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:F.a,to:"/student_dashboard",children:[Object(a.jsx)(I.a,{icon:U.a,className:"mr-2"})," ",c("student_area")]})}),(n==D.teacher||n==D.admin)&&Object(a.jsx)(A.a,{active:"teacher_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(L.a,{className:"teacher_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:F.a,to:"/teacher_dashboard",children:[Object(a.jsx)(I.a,{icon:U.a,className:"mr-2"})," ",c("teacher_area")]})})]})})},G=function(e){var t=e.children,n=e.className,r=e.fluid,c=void 0!==r&&r;return Object(a.jsx)("div",{className:n,style:{border:"0px solid #000",position:"absolute",backgroundColor:"white",bottom:0,top:56,left:c?0:240,right:0},children:t})},R=n(145),z=n(146),W=n(147),B=n(148),M=n(131),q=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(j.d)(),i=Object(j.e)(f),l=Object(j.e)(p),b=Object(m.a)("frontend",{useSuspense:!1}),h=b.t,O=(b.i18n,0),g=new URLSearchParams(window.location.search),v=localStorage.getItem("passcode"),y=g.get("passcode");console.log("params:",v);null!=y&&M(v);c.map((function(e){O+=1,e.replies&&e.replies.map((function(e){return O+=1}))}));return Object(r.useEffect)((function(){o(x.willGetUserProfile()),o(x.willLoadTasks())}),[]),Object(r.useEffect)((function(){s(null!=i?i.map((function(e){return{userId:"01a",comId:"012",fullName:"Riya Negi",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",text:e.goal.name,replies:[]}})):[])}),[i]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{className:"mb-0 text-white",section:"public_area",showMenu:!0}),Object(a.jsx)(E,{active:"public_area",role:null!=l?l.role_id:null}),Object(a.jsx)(G,{children:Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(z.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsxs)(W.a,{children:[h("public_area")," (n.",O," ",h("comments"),")"]})}),Object(a.jsx)(B.a,{children:Object(a.jsx)(u.a,{currentUser:{userId:"01a",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",name:"xyz"},commentsArray:c||[],setComment:s,signinUrl:"/signin",signupUrl:"/signup"})})]})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},J=(n(134),n(15)),K=n(79),Q=n(84),V=n(20),X=n(69),Y=n(19),Z=n(18),$=l.a.mark(re),ee=l.a.mark(ce),te=l.a.mark(se),ne=l.a.mark(oe),ae=l.a.mark(ie);function re(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(x.willGetUserProfile.type,se);case 2:return e.next=4,Object(Y.d)(x.willLogout.type,ce);case 4:return e.next=6,Object(Y.d)(x.willLoadTasks.type,ie);case 6:return e.next=8,Object(Y.d)(x.willCreateTask.type,oe);case 8:case"end":return e.stop()}}),$)}function ce(e){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.c)(x.didLogout());case 2:return e.next=4,Object(Y.c)(Object(Z.d)("/logout"));case 4:case"end":return e.stop()}}),ee)}function se(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/userprofile",e.prev=1,e.next=4,Object(Y.b)((function(){return fetch("/userprofile").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t,e.next=8,Object(Y.c)(x.didGetUserProfile(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(Y.c)(x.didGetUserProfile(null));case 14:case"end":return e.stop()}}),te,null,[[1,10]])}function oe(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"/newtask",t=e.payload,a.prev=2,a.next=5,Object(Y.b)((function(){return fetch("/newtask",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})}).then((function(e){return e.json()})).then((function(e){return e}))}));case 5:n=a.sent,console.log("SAGA NEW TASK response:",n),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.log("SAGA NEW TASK error:".error);case 12:case"end":return a.stop()}}),ne,null,[[2,9]])}function ie(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/tasks",e.prev=1,e.next=4,Object(Y.b)((function(){return fetch("/tasks").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t.tasks,e.next=8,Object(Y.c)(x.didLoadTasks(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(Y.c)(x.didLoadTasks([]));case 14:case"end":return e.stop()}}),ae,null,[[1,10]])}var le=l.a.mark(de);function de(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in root saga"),e.next=3,Object(Y.a)([re()]);case 3:case"end":return e.stop()}}),le)}var ue=de,je=n(32),be=Object(V.a)(),he=function(e){var t,n=Object(Q.a)(),a=[Object(X.a)(be),n],r=[J.applyMiddleware.apply(void 0,a)],c=K.composeWithDevTools.apply(void 0,r),s=(t=be,Object(J.combineReducers)({router:Object(je.b)(t),userTasks:O})),o=Object(J.createStore)(s,e,c);return n.run(ue),o},xe=n(12),Oe=n(149),fe=n(150),pe=n(151),me=n(152),ge=n(153),ve=n(75),ye=n(43),we=function(e){var t=Object(m.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,["cannotAnswer","needClarification","notSure","myAnswer"]),s=Object(r.useState)(e.transaction.selectedChoiceIndex),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(r.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1],x=function(t,n,r){return Object(a.jsxs)(Oe.a,{check:!0,disabled:e.transaction.readonly,children:[Object(a.jsx)(fe.a,{disabled:e.transaction.readonly,name:t,value:r,onChange:function(e){return function(e){console.log("selected choice:",e.target.value),l(e.target.value)}(e)},checked:i==r,type:"radio"})," ",Object(a.jsx)(pe.a,{check:!0,children:n})]})};return Object(a.jsxs)(me.a,{style:{border:"1px solid #007bff",padding:"10px",margin:"10px"},children:[Object(a.jsx)(pe.a,{children:Object(a.jsx)("b",{children:n("selectAnswer")})}),c.map((function(e,t){return x("studentChoice",n(e),t)})),Object(a.jsx)(Oe.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(pe.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:n("enterComment")})}),Object(a.jsx)(fe.a,{disabled:e.transaction.readonly,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(e){return function(e){console.log("current text:",e.target.value),h(e.target.value)}(e)},value:b})]})}),Object(a.jsx)(Oe.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(pe.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:n("teacherFeedback")})}),Object(a.jsx)(fe.a,{disabled:e.transaction.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:"RISPOSTA"})]})})]})},ke=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(m.a)("frontend",{useSuspense:!1}),l=i.t;i.i18n;return function(){var t=e.task.goal.name;return Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(z.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(W.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:[t,c?Object(a.jsx)(ye.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(ye.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(w.a,{isOpen:c,children:[Object(a.jsx)(B.a,{children:Object(a.jsx)(me.a,{children:e.task.transactions&&e.task.transactions.map((function(e){return Object(a.jsx)(we,{transaction:e})}))})}),Object(a.jsx)(ge.a,{children:Object(a.jsx)(ve.a,{color:"primary",onClick:function(e){},children:l("send")})})]})]})}()},Ce={id:2131,goal:{name:"Quesito iniziale sulla timeline",description:"Descrizione del questito iniziale della timeline",keywords:["social interaction","lab"]},transactions:[{taskId:2131,answers:["Non lo so","Ho capito","Ho bisogno di aiuto"],selectedChoiceIndex:1,studentAnswer:{choice:1,comments:"non ci capisco niente"},teacherFeedback:{comments:"bravo! ma cerca qui..."},readonly:!0},{taskId:2131,answers:["Non lo so","Ho capito","Ho bisogno di aiuto"],selectedChoiceIndex:0,studentAnswer:{choice:1,comments:"non ci capisco niente"},teacherFeedback:{comments:"bravo! ma cerca qui..."},readonly:!1}]},Te=function(e){var t=Object(j.e)(p);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{className:"mb-0 text-white",section:"student_area",showMenu:!0}),Object(a.jsx)(E,{active:"student_dashboard",role:null!=t?t.role_id:null}),Object(a.jsx)(G,{children:Object(a.jsx)(ke,{task:Ce})})]})},Ne=function(e){var t=Object(m.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)("")),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)(""),u=Object(d.a)(l,2),b=u[0],h=u[1],O=Object(j.d)();return Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(W.a,{children:n("teacherCreateNewTask")}),Object(a.jsx)(B.a,{children:Object(a.jsxs)(me.a,{children:[Object(a.jsx)(Oe.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(pe.a,{for:"teacherTaskTitle",children:Object(a.jsx)("b",{children:n("teacherTaskTitle")})}),Object(a.jsx)(fe.a,{id:"teacherTaskTitle",name:"text",type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},value:o})]})}),Object(a.jsx)(Oe.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(pe.a,{for:"teacherTaskDescription",children:Object(a.jsx)("b",{children:n("teacherTaskDescription")})}),Object(a.jsx)(fe.a,{id:"teacherTaskDescription",name:"text",type:"textarea",onChange:function(e){return function(e){h(e.target.value)}(e)},value:b})]})})]})}),Object(a.jsx)(ge.a,{children:Object(a.jsx)(ve.a,{color:"primary",onClick:function(e){O(x.willCreateTask({name:o,description:b}))},children:n("send")})})]})},Se=function(e){var t=Object(j.e)(p);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{className:"mb-0 text-white",section:"teacher_area",showMenu:!0}),Object(a.jsx)(E,{active:"teacher_dashboard",role:null!=t?t.role_id:null}),Object(a.jsx)(G,{children:Object(a.jsx)(Ne,{})})]})},_e=function(){var e=Object(m.a)("frontend",{useSuspense:!1}),t=e.t,n=(e.i18n,Object(r.useState)(null)),c=Object(d.a)(n,2),s=c[0],o=c[1];Object(r.useEffect)((function(){localStorage.setItem("passcode",s)}),[s]);var i=function(e){console.log("entered:",e.target.value),function(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase();try{var n=e.trim().toUpperCase();if(8!=n.length)throw"Invalid";for(var a=0,r=0;r<n.length-1;r++)a+=t.indexOf(n.charAt(r));var c=(a-=t.indexOf(n.charAt(7)))%t.length==0;o(c?n:null)}catch(s){o(null)}}(e.target.value)};return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(R.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(z.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(W.a,{style:{textAlign:"center"},children:t("platform_title")})}),Object(a.jsx)(B.a,{children:Object(a.jsx)(fe.a,{onChange:function(e){return i(e)},type:"text",name:"passcode",id:"passcode",placeholder:t("passcode_enter")})}),Object(a.jsx)(ge.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:s&&Object(a.jsx)("a",{href:"/connect?passcode=".concat(s),children:t("connect_to_wenet")})})]})})},Ae=function(){return Object(a.jsx)(je.a,{history:be,children:Object(a.jsxs)(xe.c,{children:[Object(a.jsx)(xe.a,{path:"/forum",children:Object(a.jsx)(q,{})}),Object(a.jsx)(xe.a,{path:"/student_dashboard",children:Object(a.jsx)(Te,{})}),Object(a.jsx)(xe.a,{path:"/teacher_dashboard",children:Object(a.jsx)(Se,{})}),Object(a.jsx)(xe.a,{path:"/",children:Object(a.jsx)(_e,{})})]})})};function Le(){return Object(a.jsx)(j.a,{store:he({}),children:Object(a.jsx)(Ae,{})})}var Ie=n(57),Ue=n(38),Fe=n(80);n(136);Ie.a.use(Fe.a).use(Ue.e).init({ns:["tl","frontend"],defaultNS:"tl",fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1}});var Pe=Ie.a;"it-IT"!==(window.navigator.userLanguage||window.navigator.language)?Pe.changeLanguage("en-US"):Pe.changeLanguage("it-IT"),o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(Le,{})}),document.getElementById("root")),H()},90:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.8adf9029.chunk.js.map