(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{118:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),s=a.n(c),i=a(123),o=a(8),l=a(66),u=a.n(l),j=a(44),d=(a(77),a(79),j.default.initializeApp({apiKey:"AIzaSyBgr9G-PNput-ub3WUqUFwj9ujDw42hPOk",authDomain:"connect-four-development.firebaseapp.com",databaseURL:"https://connect-four-development-default-rtdb.firebaseio.com",projectId:"connect-four-development",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBgr9G-PNput-ub3WUqUFwj9ujDw42hPOk",REACT_APP_FIREBASE_AUTH_DOMAIN:"connect-four-development.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://connect-four-development-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"connect-four-development",REACT_APP_FIREBASE_STOREAGE_BUCKET:"connect-four-development.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"790566826312",REACT_APP_FIREBASE_APP_ID:"1:790566826312:web:213915aaf3255f0eb1437d"}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:"790566826312",appId:"1:790566826312:web:213915aaf3255f0eb1437d"})),b=u.a.createClass(d.database()),O=d.auth(),p=b,f=a(2),h=r.a.createContext();function m(){return Object(n.useContext)(h)}function x(e){var t=e.children,a=Object(n.useState)(),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(!0),l=Object(o.a)(i,2),u=l[0],j=l[1];Object(n.useEffect)((function(){return O.onAuthStateChanged((function(e){s(e),j(!1)}))}),[]);var d={currentUser:c,login:function(e,t){return O.signInWithEmailAndPassword(e,t)},signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},resetPassword:function(e){return O.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(f.jsx)(h.Provider,{value:d,children:!u&&t})}var v=a(12),g=a(10),w=a(25),y=a(71);function N(e){var t=e.component,a=Object(y.a)(e,["component"]),n=m().currentUser;return Object(f.jsx)(g.b,Object(w.a)(Object(w.a)({},a),{},{render:function(e){return n?Object(f.jsx)(t,Object(w.a)({},e)):Object(f.jsx)(g.a,{to:"/login"})}}))}var S=a(36),E=a(16),P=a.n(E),R=a(24),C=a(126),A=a(124),_=a(122);function I(e){var t=e.toggleGameMode,a=e.logout,r=e.userName,c=e.played,s=e.won,i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(g.g)();function b(){return(b=Object(R.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(""),e.prev=1,e.next=4,a();case 4:d.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),j("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Body,{children:[Object(f.jsxs)("h2",{className:"text-center mb-4",children:["Hello, ",r,"!"]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("h4",{className:"col-6 text-center",children:["\ud83c\udfae \u2716\ufe0f ",c]}),Object(f.jsxs)("h4",{className:"col-6 text-center",children:["\ud83c\udfc6 \u2716\ufe0f ",s]})]}),u&&Object(f.jsx)(A.a,{variant:"danger",children:u}),Object(f.jsx)(_.a,{onClick:function(){t("single")},className:"btn btn-warning w-100 mt-3",children:"Challenge Peanutbot"}),Object(f.jsx)(_.a,{onClick:function(){t("multi")},className:"btn btn-warning w-100 mt-3",children:"Play With A Friend"}),Object(f.jsx)(v.b,{to:"/update-profile",className:"btn btn-warning w-100 mt-3",children:"Update Profile"})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(_.a,{variant:"link",className:"text-decoration-none",onClick:function(){return b.apply(this,arguments)},children:"Log Out"})})]})}function k(e){var t=e.value,a=e.colIdx,n=e.handleMove;return Object(f.jsx)("div",{className:"square bg-primary",onClick:function(){return n(a)},children:Object(f.jsx)("div",{className:"circle ".concat(t||"")})})}var F=function(){for(var e=[],t=0;t<6;)e.push(Array(7).fill(null)),t++;return e};function U(e){for(var t=0;t<e.length;t++)for(var a=0;a<e[t].length;a++){var n=e[t][a];if(n&&n===e[t][a+1]&&n===e[t][a+2]&&n===e[t][a+3])return n;if(t<e.length-3&&(n&&n===e[t+1][a]&&n===e[t+2][a]&&n===e[t+3][a]||n&&n===e[t+1][a+1]&&n===e[t+2][a+2]&&n===e[t+3][a+3]||n&&n===e[t+1][a-1]&&n===e[t+2][a-2]&&n===e[t+3][a-3]))return n}if(e.every((function(e){return!e.includes(null)})))return"Draw"}function D(e,t){for(var a=e.length-1;a>=0;a--){if(null===e[a][t])return a}}function G(e,t,a,n){var r=U(e);if("p1"===r)return[a,-10];if("p2"===r)return[a,10];if("Draw"===r||0===a)return[a,0];if(n){for(var c=[],s=0,i=-1/0,l=0;l<t;l++){var u=D(e,l);if(void 0!==u){e[u][l]="p2";var j=G(e,t,a-1,!1);e[u][l]=null;var d=Object(o.a)(j,2),b=d[0],O=d[1];(O>i||O===i&&b>s&&O>=0||O===i&&b<s&&O<0)&&(s=b,i=O,c=j)}}return c}for(var p=[],f=0,h=1/0,m=0;m<t;m++){var x=D(e,m);if(void 0!==x){e[x][m]="p1";var v=G(e,t,a-1,!0);e[x][m]=null;var g=Object(o.a)(v,2),w=g[0],y=g[1];(y<h||y===h&&w>f)&&(f=w,h=y,p=v)}}return p}var L=a(70),T=a.n(L).a.connect("/",{forceNew:!0}),B=r.a.createContext(),W=(a(64),Object(n.forwardRef)((function(e,t){var a=e.game,r=e.handleResult,c=e.opponent,s=e.currentPlayerNum,i=Object(n.useState)(F),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),O=b[0],p=b[1],h=Object(n.useState)(!0),m=Object(o.a)(h,2),x=m[0],v=m[1],g=Object(n.useState)(),w=Object(o.a)(g,2),y=w[0],N=w[1],S=Object(n.useContext)(B),E="p1"===s?"#f012be":"#2ecc40",P="p1"===s?"#2ecc40":"#f012be";Object(n.useImperativeHandle)(t,(function(){return{grid:u,resetGrid:R}}));var R=function(){j(F),p(!1),N(!y)};Object(n.useEffect)((function(){if("single"===a&&!x){var e=u.slice(),t=function(e){for(var t,a=e[0].length,n=[],r=-1/0,c=0;c<a;c++){var s=D(e,c);if(void 0!==s){e[s][c]="p2";var i=G(e,a,7,!1);e[s][c]=null;var l=Object(o.a)(i,2),u=l[0],j=l[1];j>r||j===r&&u>t&&j>=0||j===r&&u<t&&j<0?(t=u,r=j,(n=[]).push([s,c])):j===r&&u===t&&n.push([s,c])}}return n[Math.floor(Math.random()*n.length)]}(e),n=Object(o.a)(t,2),c=n[0],s=n[1];e[c][s]="p2",j(e);var i=U(e);i?(p(!0),r(i)):v(!x)}"multi"===a&&(v(!x),S.emit("update-grid",{grid:u,gameOver:O,ready:x}),S.on("update-grid",(function(e){var t=e.grid,a=e.gameOver,n=e.ready;p(a),j(t),v(n)})))}),[y]);var C=function(e){if(!O&&x){var t=u.slice();t[D(t,e)][e]=s,j(t);var n=U(t);n&&p(!0),n&&r(n),"single"===a&&v(!1),N(!y)}};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{id:"boarder",children:Object(f.jsx)("div",{id:"grid",children:u.map((function(e,t){return Object(f.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(f.jsx)(k,{value:e,colIdx:t,handleMove:C},t)}))},t)}))})}),Object(f.jsx)("h4",{className:"text-center mt-4",style:{color:x?E:P},children:O||!c?"":x?"Your turn":c?"Waiting for ".concat(c,"..."):"Waiting for a player to join..."})]})})));function q(e){var t=e.userName,a=e.game,r=e.incrementData,c=e.toggleGameMode,s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),b=d[0],O=d[1],p=Object(n.useState)("p1"),h=Object(o.a)(p,2),m=h[0],x=h[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),w=g[0],y=g[1],N=Object(n.useState)(1),S=Object(o.a)(N,2),E=S[0],P=S[1],R=Object(n.useState)(0),C=Object(o.a)(R,2),A=C[0],I=C[1],k=Object(n.useState)(0),U=Object(o.a)(k,2),D=U[0],G=U[1],L=Object(n.useState)(""),T=Object(o.a)(L,2),q=T[0],M=T[1],H=Object(n.useState)(""),J=Object(o.a)(H,2),K=J[0],Y=J[1],z=Object(n.useState)(""),V=Object(o.a)(z,2),Q=V[0],X=V[1],Z=Object(n.useState)(!1),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ae="p1"===m?b:l,ne=Object(n.useContext)(B),re=Object(n.useRef)();Object(n.useEffect)((function(){if("single"===a&&(u(t),O("Peanutbot")),"multi"===a)return ne.on("full-server",(function(){c(""),alert("Sorry, server is full.")})),ne.emit("player-connecting",{userName:t}),ne.on("player-1-connected",(function(e){u(t),y(t),e&&O(e)})),ne.on("player-2-connected",(function(e){O(t),y(t),x("p2"),u(e)})),ne.on("player-has-joined",(function(e){var t=e.userName;0===e.playerIndex?u(t):O(t)})),ne.on("player-disconnected",(function(e){var t=e.name;0===e.num?u(""):O(""),X("".concat(t," left\ud83d\udca8"))})),function(){return ne.disconnect(w)}}),[]),Object(n.useEffect)((function(){"multi"===a&&(ne.emit("update-result-display-and-rounds",{result:q,currentPlayerName:w,numOfRounds:E}),ne.on("update-result-display-and-rounds",(function(e){var t=e.result,a=e.currentPlayerName,n=e.numOfRounds;P(n),t?(Y("Draw"===t?t+"! \ud83e\udd1d":"\ud83d\ude31 YOU LOST! \ud83d\udca9"),X("Waiting for ".concat(a," to restart the game...")),te(!0)):(Y(""),X(""),te(!1))})),ne.emit("update-score",{result:q}),ne.on("update-score",(function(e){var t=e.result;t&&r("played"),"p1"===t&&I(A+1),"p2"===t&&G(D+1)})))}),[q,E]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{id:"container",className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{id:"scores",className:"col",children:[Object(f.jsxs)("h6",{className:"text-primary",children:["Round: ",E]}),Object(f.jsxs)("h4",{children:[Object(f.jsx)("span",{id:"score-1",style:{color:"#f012be"},children:A}),Object(f.jsx)("span",{className:"text-primary",children:" vs "}),Object(f.jsx)("span",{id:"score-2",className:"text-success",children:D})]})]}),Object(f.jsxs)("div",{id:"players",className:"col",children:[Object(f.jsxs)("h6",{className:"player float-right",children:[l||"Waiting...",Object(f.jsx)("div",{style:{background:"#f012be"},className:"indicator rounded ml-2"})]}),Object(f.jsxs)("h6",{className:"player float-right",children:[b||"Waiting...",Object(f.jsx)("div",{className:"bg-success indicator rounded ml-2"})]})]})]})}),Object(f.jsx)(W,{ref:re,game:a,handleResult:function(e){Y("Draw"===e?e+"! \ud83e\udd1d":"\ud83e\udd42 YOU WIN! \ud83c\udf89"),X("Click Replay \u2b07\ufe0f"),r("won"),M(e)},opponent:ae,currentPlayerNum:m}),Object(f.jsx)("h4",{className:"text-center text-warning mt-4",children:K}),Object(f.jsx)("h5",{className:"text-center text-warning mt-4",children:Q}),Object(f.jsx)(_.a,{disabled:ee,className:"btn-warning w-100 mt-4",onClick:function(){!K&&r("played"),re.current.resetGrid(),P(E+1),Y(""),X(""),M("")},children:"Replay"}),Object(f.jsx)(_.a,{className:"btn btn-warning w-100 mt-3 ",onClick:function(){var e=JSON.stringify(re.current.grid)===JSON.stringify(F());Q||q||e||r("played"),c(""),window.location.reload(!1)},children:"Quit"})]})}function M(){var e=m(),t=e.currentUser,a=e.logout,r=t.displayName,c=t.uid,s=Object(n.useState)(),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(n.useState)(JSON.parse(localStorage.getItem(c))||{}),d=Object(o.a)(j,2),b=d[0],O=d[1];function h(e){u(e)}return Object(n.useEffect)((function(){var e=p.syncState(c,{context:{setState:function(e){var t=e.data;return O(Object(w.a)({},t))},state:{data:b}},state:"data"}),t=e.context.state.data;return 0===Object.keys(t).length&&p.post(c,{data:{played:0,won:0}}),function(){p.removeBinding(e)}}),[]),Object(n.useEffect)((function(){localStorage.setItem(c,JSON.stringify(b))}),[b]),Object(f.jsx)(f.Fragment,{children:l?Object(f.jsx)(B.Provider,{value:T,children:Object(f.jsx)(q,{userName:r,game:l,incrementData:function(e){var t=Object(w.a)(Object(w.a)({},b),{},Object(S.a)({},e,b[e]+1));O(t),p.post(c,{data:t})},toggleGameMode:h})}):Object(f.jsx)(I,{toggleGameMode:h,logout:a,userName:r,played:b.played,won:b.won})})}var H=a(125);function J(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),c=m(),s=c.currentUser,i=c.updatePassword,l=c.updateEmail,u=Object(n.useState)(""),j=Object(o.a)(u,2),d=j[0],b=j[1],O=Object(n.useState)(!1),p=Object(o.a)(O,2),h=p[0],x=p[1],w=Object(g.g)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),d&&Object(f.jsx)(A.a,{variant:"danger",children:d}),Object(f.jsxs)(H.a,{onSubmit:function(n){if(n.preventDefault(),a.current.value!==r.current.value)return b("Passwords do not match");var c=[];x(!0),b(""),e.current.value!==s.displayName&&c.push(s.updateProfile({displayName:e.current.value})),t.current.value!==s.email&&c.push(l(t.current.value)),a.current.value&&c.push(i(a.current.value)),Promise.all(c).then((function(){w.push("/")})).catch((function(){b("Failed to update account"),x(!1)}))},children:[Object(f.jsxs)(H.a.Group,{id:"username",children:[Object(f.jsx)(H.a.Label,{children:"Username"}),Object(f.jsx)(H.a.Control,{type:"text",ref:e,required:!0,defaultValue:s.displayName})]}),Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{type:"email",ref:t,required:!0,defaultValue:s.email})]}),Object(f.jsxs)(H.a.Group,{id:"password",children:[Object(f.jsx)(H.a.Label,{children:"Password"}),Object(f.jsx)(H.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(f.jsxs)(H.a.Group,{id:"password-confirm",children:[Object(f.jsx)(H.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(H.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(f.jsx)(_.a,{disabled:h,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(v.b,{to:"/",children:"Cancel"})})]})}function K(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),c=m().signup,s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),b=d[0],O=d[1],p=Object(g.g)();function h(){return(h=Object(R.a)(P.a.mark((function n(s){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),a.current.value===r.current.value){n.next=3;break}return n.abrupt("return",u("Passwords do not match"));case 3:return n.prev=3,u(""),O(!0),n.next=8,c(t.current.value,a.current.value).then((function(t){t.user.updateProfile({displayName:e.current.value})}));case 8:p.push("/"),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(3),u("Failed to create an account"),O(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),l&&Object(f.jsx)(A.a,{variant:"danger",children:l}),Object(f.jsxs)(H.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(f.jsxs)(H.a.Group,{id:"username",children:[Object(f.jsx)(H.a.Label,{children:"Username"}),Object(f.jsx)(H.a.Control,{type:"text",ref:e,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{type:"email",ref:t,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"password",children:[Object(f.jsx)(H.a.Label,{children:"Password"}),Object(f.jsx)(H.a.Control,{type:"password",placeholder:"Minimum 6 characters",ref:a,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"password-confirm",children:[Object(f.jsx)(H.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(H.a.Control,{type:"password",ref:r,required:!0})]}),Object(f.jsx)(_.a,{disabled:b,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?"," ",Object(f.jsx)(v.b,{className:"text-decoration-none",to:"/login",children:"Log In"})]})]})}function Y(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=m().login,r=Object(n.useState)(""),c=Object(o.a)(r,2),s=c[0],i=c[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),j=u[0],d=u[1],b=Object(g.g)();function O(){return(O=Object(R.a)(P.a.mark((function n(r){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,i(""),d(!0),n.next=6,a(e.current.value,t.current.value);case 6:b.push("/"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),d(!1),i("Failed to log in");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"title text-center text-primary",children:"Connect Four"}),Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(f.jsx)(A.a,{variant:"danger",children:s}),Object(f.jsxs)(H.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsxs)(H.a.Group,{id:"password",children:[Object(f.jsx)(H.a.Label,{children:"Password"}),Object(f.jsx)(H.a.Control,{type:"password",ref:t,required:!0})]}),Object(f.jsx)(_.a,{disabled:j,className:"btn-warning w-100",type:"submit",children:"Log In"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-3",children:Object(f.jsx)(v.b,{className:"text-decoration-none",to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(f.jsx)(v.b,{className:"text-decoration-none",to:"/signup",children:"Sign Up"})]})]})}function z(){var e=Object(n.useRef)(),t=m().resetPassword,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),O=b[0],p=b[1];function h(){return(h=Object(R.a)(P.a.mark((function a(n){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,j(""),s(""),p(!0),a.next=7,t(e.current.value);case 7:j("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to reset password");case 13:p(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,{children:Object(f.jsxs)(C.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),c&&Object(f.jsx)(A.a,{variant:"danger",children:c}),u&&Object(f.jsx)(A.a,{variant:"success",children:u}),Object(f.jsxs)(H.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(f.jsxs)(H.a.Group,{id:"email",children:[Object(f.jsx)(H.a.Label,{children:"Email"}),Object(f.jsx)(H.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsx)(_.a,{disabled:O,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-3",children:Object(f.jsx)(v.b,{to:"/login",children:"Login"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(f.jsx)(v.b,{to:"/signup",children:"Sign Up"})]})]})}a(118);function V(){return Object(f.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(f.jsx)("div",{className:"w-100",style:{maxWidth:"400px",minWidth:"400px"},children:Object(f.jsx)(v.a,{children:Object(f.jsx)(x,{children:Object(f.jsxs)(g.d,{children:[Object(f.jsx)(N,{exact:!0,path:"/",component:M}),Object(f.jsx)(N,{path:"/update-profile",component:J}),Object(f.jsx)(g.b,{path:"/signup",component:K}),Object(f.jsx)(g.b,{path:"/login",component:Y}),Object(f.jsx)(g.b,{path:"/forgot-password",component:z})]})})})})})}a(119);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root"))},64:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.b6502d36.chunk.js.map