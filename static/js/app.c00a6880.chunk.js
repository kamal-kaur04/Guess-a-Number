(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,t,r){"use strict";var n=r(11),a=r.n(n),o=r(1),c=r.n(o),i=r(3),l=r(2),s=r(4),u="#f7287b",m="#086f84",b=l.a.create({header:{width:"100%",height:90,paddingTop:36,backgroundColor:u,alignItems:"center",justifyContent:"center"},headerTitle:{color:"black",fontSize:18,textAlign:"center"}}),f=function(e){return o.createElement(i.a,{style:b.header},o.createElement(s.a,{style:b.headerTitle},e.title))},d=r(13),p=r(41),g=r(52),h=r(29),y=r(15),O=r.n(y);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=l.a.create({card:{shadowColor:"black",shadowOffset:{width:0,height:2},shadowRadius:6,shadowOpacity:.26,elevation:10,backgroundColor:"white",padding:20,borderBottomLeftRadius:10,borderBottomRightRadius:10}}),v=function(e){return o.createElement(i.a,{style:w({},j.card,{},e.style)},e.children)},C=r(17),P=r.n(C),S=r(46);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=l.a.create({input:{height:30,borderBottomColor:"grey",borderBottomWidth:1,marginVertical:10}}),R=function(e){return o.createElement(S.a,P()({},e,{style:k({},x.input,{},e.style)}))},G=l.a.create({container:{borderWidth:2,borderColor:m,padding:10,borderRadius:10,marginVertical:10,alignItems:"center",justifyContent:"center"},number:{color:m,fontSize:22}}),T=function(e){return c.a.createElement(i.a,{style:G.container},c.a.createElement(s.a,{style:G.number},e.children))},D=l.a.create({screen:{flex:1,padding:10,alignItems:"center"},title:{fontSize:30,marginVertical:20,marginBottom:15},inputContainer:{width:300,maxWidth:"80%",alignItems:"center"},input:{width:50,textAlign:"center"},buttonContainer:{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:15},button:{width:"40%"},confirmContainer:{marginTop:20,alignItems:"center"}}),I=function(e){var t,r=Object(o.useState)(""),n=a()(r,2),l=n[0],b=n[1],f=Object(o.useState)(!1),y=a()(f,2),O=y[0],E=y[1],w=Object(o.useState)(),j=a()(w,2),C=j[0],P=j[1],S=function(){b(""),E(!1)};return O&&(t=c.a.createElement(v,{style:D.confirmContainer},c.a.createElement(s.a,null," You Selected"),c.a.createElement(T,null,C),c.a.createElement(d.a,{title:"START GAME",color:u,onPress:function(){return e.onStartGame(C)}}))),c.a.createElement(p.a,{onPress:function(){g.a.dismiss()}},c.a.createElement(i.a,{style:D.screen},c.a.createElement(s.a,{style:D.title},"Start a New Game!"),c.a.createElement(v,{style:D.inputContainer},c.a.createElement(s.a,null,"Select a Number"),c.a.createElement(R,{style:D.input,blurOnSubmit:!0,autoCapitalize:"none",autoCorrect:!1,keyboardType:"number-pad",maxLength:2,onChangeText:function(e){b(e.replace(/[^0-9]/g,""))},value:l}),c.a.createElement(i.a,{style:D.buttonContainer},c.a.createElement(i.a,{style:D.button},c.a.createElement(d.a,{title:"Reset",onPress:S,color:m})),c.a.createElement(i.a,{style:D.button},c.a.createElement(d.a,{title:"Confirm",onPress:function(){var e=parseInt(l);isNaN(e)||e<=0||e>99?h.a.alert("Invalid Number!","Number has to be a number between 1 and 99.",[{test:"Okay",style:"destructive",onPress:S}]):(E(!0),P(e),b(""),g.a.dismiss())},color:u})))),t))},W=function e(t,r,n){t=Math.ceil(t),r=Math.floor(r);var a=Math.floor(Math.random()*(r-t))+t;return a===n?e(t,r,n):a},A=l.a.create({screen:{flex:1,padding:10,alignItems:"center"},container:{marginTop:20,alignItems:"center"},buttonContainer:{flexDirection:"row",justifyContent:"space-around",marginTop:20,width:300,maxWidth:"80%"}}),M=function(e){var t=Object(o.useState)(W(1,100,e.userChoice)),r=a()(t,2),n=r[0],l=r[1],u=Object(o.useState)(0),m=a()(u,2),b=m[0],f=m[1],p=Object(o.useRef)(1),g=Object(o.useRef)(100),y=e.userChoice,O=e.onGameOver;Object(o.useEffect)((function(){n===y&&O(b)}),[n,y,O]);var E=function(t){if("lower"===t&&n<e.userChoice||"greater"===t&&n>e.userChoice)h.a.alert("Don't Lie!","You know that this wrong...",[{text:"Sorry",style:"cancel"}]);else{"lower"===t?g.current=n:p.current=n;var r=W(p.current,g.current,n);l(r),f((function(e){return e+1}))}};return c.a.createElement(i.a,{style:A.screen},c.a.createElement(s.a,null,"Opponent's Guess"),c.a.createElement(T,null,n),c.a.createElement(v,{style:A.buttonContainer},c.a.createElement(d.a,{title:"LOWER",onPress:E.bind(void 0,"lower")}),c.a.createElement(d.a,{title:"GREATER",onPress:E.bind(void 0,"greater")})))},z=l.a.create({screen:{flex:1,padding:10,alignItems:"center",justifyContent:"center"}}),B=function(e){return c.a.createElement(i.a,{style:z.screen},c.a.createElement(s.a,null,"The Game is Over!"),c.a.createElement(s.a,null,"Number of Rounds: ",e.roundsNumber),c.a.createElement(s.a,null,"Number was: ",e.userNumber),c.a.createElement(d.a,{title:"NEW GAME",onPress:e.onRestart}))};function L(){var e=Object(o.useState)(),t=a()(e,2),r=t[0],n=t[1],l=Object(o.useState)(0),s=a()(l,2),u=s[0],m=s[1],b=c.a.createElement(I,{onStartGame:function(e){n(e),m(0)}});return r&&u<=0?b=c.a.createElement(M,{userChoice:r,onGameOver:function(e){m(e)}}):u>0&&(b=c.a.createElement(B,{roundsNumber:u,userNumber:r,onRestart:function(){m(0),n(null)}})),c.a.createElement(i.a,{style:V.screen},c.a.createElement(f,{title:"Guess a Number"}),b)}r.d(t,"a",(function(){return L}));var V=l.a.create({screen:{flex:1}})},78:function(e,t,r){r(79),e.exports=r(107)},79:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/Guess-Number/expo-service-worker.js",{scope:"/Guess-Number/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[78,1,2]]]);
//# sourceMappingURL=../../0a3e52b91ef7c9f3fae4.map