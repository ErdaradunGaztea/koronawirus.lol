(this["webpackJsonpcovid-generator"]=this["webpackJsonpcovid-generator"]||[]).push([[0],{22:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var i=e(1),r=e(0),o=e.n(r),a=e(13),c=e.n(a),d=(e(22),e(4)),x=e(2),s=e(3),l=e.p+"static/media/data.b35c3d44.tsv",m=null,h=new XMLHttpRequest;function u(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),i=[n[e],n[t]];n[t]=i[0],n[e]=i[1]}}function p(n,t,e){for(var i=(t+=1)-n,r=[],o=n;o<t;o++)r=r.concat(e[o]);u(r);for(var a=[],c=0;c<i;c++){var d=Math.floor(Math.random()*(r.length-1));a.push(r.splice(d,1))}return a}function f(n,t){var e=t[n],i=e.length;return u(e),e[Math.floor(Math.random()*(i-1))]}function w(){var n={},t=p(0,3,m),e=Object(d.a)(t,4);n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=f(4,m),n[5]=f(5,m),n[6]=function(){var n=Math.random();return n<=.25?"zwolnione z kwarantanny":(n=Math.random(),"zobowi\u0105zane do odbycia kwarantanny przez "+(7+Math.floor(7*n))+" dni")}(),n[7]=f(7,m);var i=p(8,11,m),r=Object(d.a)(i,4);n[8]=r[0],n[9]=r[1],n[10]=r[2],n[11]=r[3];var o,a,c=p(12,16,m),x=Object(d.a)(c,5);n[12]=x[0],n[13]=x[1],n[14]=x[2],n[15]=x[3],n[16]=x[4],n[17]=f(17,m),n[18]=f(18,m),n[19]=(o=n[18],a=f(19,m),o.includes("zamkni\u0119te")?".":", pod warunkiem ".concat(a,".")),n[20]=f(20,m),n[21]=f(21,m),n[22]=f(22,m),n[23]=f(23,m),n[24]=f(24,m),n[25]=f(25,m);var s,l=p(26,27,m),h=Object(d.a)(l,2);return n[26]=h[0],n[27]=h[1],n[28]=f(28,m),n[29]=f(29,m),n[30]=f(30,m),n[31]=f(31,m),n[32]=(s=n[31],Math.floor(60*Number(s)/100)),n.meta={},n.meta[7]=(Number(n[7])%10).between(2,4)?["mog\u0105","osoby"]:["mo\u017ce","os\xf3b"],n}h.open("GET",l,!0),h.onload=function(){if(4===h.readyState)if(200===h.status){m=h.responseText.replace(/[\r]+/g,"").split("\n").filter((function(n){return n}));for(var n=0;n<m.length;n++)m[n]=m[n].split("\t").filter((function(n){return n}))}else console.error(h.statusText)},h.send(null),Number.prototype.between=function(n,t){return n<=this&&this<=t};var b=e(5),j=e.n(b),g={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:2e3,xxxl:3e3};function z(){var n=Object(x.a)(["\n  margin-top: 1rem;\n  padding: 0.3rem;\n  background-color: white;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 10px;\n  font-style: italic;\n  border-top: solid rgb(213, 35, 63) .1875rem;\n  clear: both;\n  text-align: center;\n  width: 100vw;\n  flex-shrink: 0;\n"]);return z=function(){return n},n}function O(){var n=Object(x.a)(["\n  background-color: white;\n  color: rgb(213, 35, 63);\n  border: 3px solid;\n  border-radius: 5px;\n  border-color: rgb(213, 35, 63);\n  font-size: 16px;\n  font-weight: bold;\n  padding: 0 1em;\n  min-height: 30px;\n  margin: 10px;\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    background-color: rgb(213, 35, 63);\n    color: white;\n    // border-radius: 10px;\n  }\n  @media (min-width: ","px) {\n    padding: 0 2em;\n  }\n  @media (min-width: ","px) {\n    font-size: 20px;\n    min-height: 40px;\n  }\n  @media (min-width: ","px) {\n    font-size: 30px;\n    min-height: 60px;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(x.a)(["\n  margin: 10px 0;\n  @media (min-width: ","px) {\n    margin: 16px 0;\n  }\n  @media (min-width: ","px) {\n    margin: 20px 0;\n  }\n  @media (min-width: ","px) {\n    margin: 28px 0;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(x.a)(["\n  list-style-position: inside;\n  padding-left: 0;\n  margin: 0;\n  @media (min-width: ","px) {\n    padding-left: 1.5em;\n    list-style-position: outside;\n  }\n  @media (min-width: ","px) {\n    font-size: 20px;\n  }\n  @media (min-width: ","px) {\n    font-size: 30px;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(x.a)(["\n  font-size: 18px;\n  width: 100%;\n  margin-top: 20px;\n  @media (min-width: ","px) {\n    margin-top: 30px;\n    margin-bottom: 15px;\n  }\n  @media (min-width: ","px) {\n    margin-top: 45px;\n    font-size: 24px;\n  }\n  @media (min-width: ","px) {\n    margin-top: 60px;\n    font-size: 36px;\n  }\n"]);return k=function(){return n},n}function M(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  width: 90vw;\n  @media (min-width: ","px) {\n    width: 600px;\n  }\n  @media (min-width: ","px) {\n    width: 750px;\n  }\n  @media (min-width: ","px) {\n    width: 900px;\n  }\n  @media (min-width: ","px) {\n    width: 1400px;\n  }\n"]);return M=function(){return n},n}function E(){var n=Object(x.a)(["\n  margin: 6px;\n  font-size: 16px;\n  @media (min-width: ","px) {\n    font-size: 20px;\n  }\n  @media (min-width: ","px) {\n    font-size: 28px;\n  }\n  @media (min-width: ","px) {\n    font-size: 40px;\n  }\n"]);return E=function(){return n},n}function F(){var n=Object(x.a)(["\n  margin: 6px;\n  font-size: 24px;\n  max-width: 300px;\n  @media (min-width: ","px) {\n    max-width: 90vw;\n    font-size: 36px;\n  }\n  @media (min-width: ","px) {\n    font-size: 42px;\n  }\n  @media (min-width: ","px) {\n    font-size: 56px;\n  }\n  @media (min-width: ","px) {\n    font-size: 72px;\n  }\n"]);return F=function(){return n},n}function S(){var n=Object(x.a)(["\n  position: absolute;\n  color: white;\n  font-weight: bold;\n  max-width: 100vw;\n  width: 100vw;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return n},n}function B(){var n=Object(x.a)(["\n  height: 100%;\n"]);return B=function(){return n},n}function N(){var n=Object(x.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  align-items: center;\n  height: 150px;\n  @media (min-width: ","px) {\n    height: 200px;\n  }\n  @media (min-width: ","px) {\n    height: 230px;\n  }\n  @media (min-width: ","px) {\n    height: 300px;\n  }\n  @media (min-width: ","px) {\n    height: 400px;\n  }\n"]);return N=function(){return n},n}function I(){var n=Object(x.a)(["\n  font-weight: bold;\n  font-size: 14px;\n  width: 95vw;\n  @media (min-width: ","px) {\n    width: 600px;\n  }\n  @media (min-width: ","px) {\n    width: 750px;\n  }\n  @media (min-width: ","px) {\n    width: 900px;\n    font-size: 22px;\n  }\n  @media (min-width: ","px) {\n    width: 1400px;\n    font-size: 32px;\n  }\n"]);return I=function(){return n},n}function P(){var n=Object(x.a)(["\n  background-color: rgb(255, 198, 5);\n  width: 100vw;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: ","px) {\n    min-height: 30px;\n  }\n  @media (min-width: ","px) {\n    min-height: 30px;\n  }\n  @media (min-width: ","px) {\n    min-height: 40px;\n  }\n  @media (min-width: ","px) {\n    min-height: 60px;\n  }\n"]);return P=function(){return n},n}function T(){var n=Object(x.a)(['\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Open Sans", sans-serif;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n']);return T=function(){return n},n}var W=s.a.div(T()),C=s.a.div(P(),g.md,g.lg,g.xxl,g.xxxl),L=s.a.div(I(),g.md,g.lg,g.xxl,g.xxxl),R=s.a.div(N(),g.md,g.xl,g.xxl,g.xxxl),D=s.a.img(B()),G=s.a.div(S()),J=s.a.div(F(),g.md,g.xl,g.xxl,g.xxxl),H=s.a.p(E(),g.md,g.xxl,g.xxxl),K=s.a.div(M(),g.md,g.lg,g.xxl,g.xxxl),U=s.a.h2(k(),g.md,g.xxl,g.xxxl),V=s.a.ul(y(),g.md,g.xxl,g.xxxl),q=s.a.li(v(),g.lg,g.xxl,g.xxxl),X=s.a.button(O(),g.md,g.xxl,g.xxxl),Z=s.a.div(z());function A(n){for(var t,e,i=n.length;0!==i;)e=Math.floor(Math.random()*i),t=n[i-=1],n[i]=n[e],n[e]=t;return n}var Q=function(n){var t=Object(r.useState)(null),e=Object(d.a)(t,2),o=e[0],a=e[1],c=Object(r.useState)("GENERUJ"),x=Object(d.a)(c,2),s=x[0],l=x[1],m=[function(n){return Object(i.jsxs)(q,{children:["Wszystkie osoby przybywaj\u0105ce do Polski z ",n[4]," ",n[5]," s\u0105 ",n[6],"."]})},function(n){return Object(i.jsxs)(q,{children:["Restauracje i bary s\u0105 ",n[18],n[19]]})},function(n){return Object(i.jsxs)(q,{children:["\u017b\u0142obki i przedszkola s\u0105 ",n[25],"."]})},function(n){return Object(i.jsxs)(q,{children:["W godzinach ",n[29]," zakupy mog\u0105 robi\u0107 tylko osoby ",n[30],"."]})},function(n){return Object(i.jsxs)(q,{children:["W autobusach mo\u017ce by\u0107 zaj\u0119te max. ",n[32]," miejsc siedz\u0105cych (lub ",n[31],"% wszystkich miejsc)."]})}],h=[function(n){return Object(i.jsxs)(q,{children:["Hotele dost\u0119pne s\u0105 tylko dla ",n[0],", ",n[1],", ",n[2]," oraz ",n[3],"."]})},function(n){return Object(i.jsxs)(q,{children:["W zgromadzeniach ",n.meta[7][0]," uczestniczy\u0107 maksymalnie ",n[7]," ",n.meta[7][1]," (nie dotyczy ",n[8]," oraz ",n[9],")."]})},function(n){return Object(i.jsxs)(q,{children:["Obowi\u0105zuje zakaz organizacji ",n[10]," oraz ",n[11],"."]})},function(n){return Object(i.jsxs)(q,{children:["W ",n[26]," i ",n[27]," mo\u017ce przebywa\u0107 maksymalnie jedna osoba na ",n[28]," m kw. pomieszczenia."]})},function(n){return Object(i.jsxs)(q,{children:["Nauka zdalna w klasach ",n[20]," szk\xf3\u0142 podstawowych, ",n[21],", oraz ",n[22],", za wyj\u0105tkiem ",n[23]," (chyba, \u017ce ",n[24],")."]})},function(n){return Object(i.jsxs)(q,{children:["Zamkni\u0119te s\u0105 ",n[12],", ",n[13]," i ",n[14],". Otwarte zostan\u0105 ",n[15]," oraz ",n[16],", ale wy\u0142\u0105cznie w ",n[17],"."]})}],u=(new Date).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"}),p=A(m),f=[].concat(h,[p[0],p[1]]);return n.breakpoints,n.currentBreakpoint,Object(i.jsxs)(W,{children:[Object(i.jsx)(C,{id:"topBar",children:Object(i.jsx)(L,{children:"Koronawirus: wa\u017cne informacje"})}),Object(i.jsxs)(R,{children:[Object(i.jsx)(D,{src:"logo.jpg"}),Object(i.jsxs)(G,{children:[Object(i.jsx)(J,{children:"Generator obostrze\u0144 COVID-19"}),Object(i.jsx)(b.Media,{children:function(n){var t=n.breakpoints,e=n.currentBreakpoint;return console.log(t[e]),t[e]>=t.sm?Object(i.jsx)(H,{children:"Sprawd\u017a, co dzisiaj wolno, a czego nie"}):Object(i.jsx)(i.Fragment,{})}})]})]}),Object(i.jsxs)(K,{children:[Object(i.jsxs)(U,{children:["Kancelaria Prezesa Rady Ministr\xf3w informuje, \u017ce od ",u," roku:"]}),o&&Object(i.jsx)(V,{children:A(f).map((function(n){return n(o)}))}),Object(i.jsx)(X,{onClick:function(){a(w()),l("GENERUJ NOWE"),document.getElementById("topBar").scrollIntoView()},children:s})]}),Object(i.jsxs)(Z,{children:["Ta strona to ",Object(i.jsx)("b",{children:"\u017cart"}),". Po prawdziwe informacje na temat obostrze\u0144 udaj si\u0119 ",Object(i.jsx)("a",{href:"https://www.gov.pl/web/koronawirus",children:"tutaj"}),". Ikony dzi\u0119ki ",Object(i.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," przez ",Object(i.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},Y=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,39)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),i(n),r(n),o(n),a(n)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(j.a,{breakpoints:g,children:Object(i.jsx)(Q,{})})}),document.getElementById("root")),Y()}},[[38,1,2]]]);
//# sourceMappingURL=main.e013a291.chunk.js.map