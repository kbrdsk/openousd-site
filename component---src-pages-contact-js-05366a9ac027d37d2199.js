(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AjCI:function(e,a,t){"use strict";t("R48M");var l=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t("q1tI")),n=(0,l(t("8/g6")).default)(r.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");a.default=n},"Cuy+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("Wbzz"),s=t("7vrA"),i=t("3Z9Z"),c=t("JI6e"),o=t("wx14"),m=t("zLVn"),d=t("TSYQ"),u=t.n(d),b=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,n=e.className,s=e.type,i=Object(m.a)(e,["as","className","type"]);return r.a.createElement(l,Object(o.a)({},i,{ref:a,className:u()(n,s&&s+"-feedback")}))})));b.displayName="Feedback",b.defaultProps={type:"valid"};var f=b,p=r.a.createContext({controlId:void 0}),v=t("vUet"),w=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,c=e.isValid,d=e.isInvalid,b=e.isStatic,f=e.as,w=void 0===f?"input":f,E=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),N=Object(l.useContext)(p),M=N.controlId,x=N.custom?[s,"custom-control-input"]:[n,"form-check-input"],O=x[0],j=x[1];return n=Object(v.b)(O,j),r.a.createElement(w,Object(o.a)({},E,{ref:a,id:t||M,className:u()(i,n,c&&"is-valid",d&&"is-invalid",b&&"position-static")}))}));w.displayName="FormCheckInput",w.defaultProps={type:"checkbox"};var E=w,N=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,i=e.htmlFor,c=Object(m.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(l.useContext)(p),b=d.controlId,f=d.custom?[n,"custom-control-label"]:[t,"form-check-label"],w=f[0],E=f[1];return t=Object(v.b)(w,E),r.a.createElement("label",Object(o.a)({},c,{ref:a,htmlFor:i||b,className:u()(s,t)}))}));N.displayName="FormCheckLabel";var M=N,x=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.inline,c=e.disabled,d=e.isValid,b=e.isInvalid,w=e.feedback,N=e.className,x=e.style,O=e.title,j=e.type,y=e.label,C=e.children,h=e.custom,L=e.as,I=void 0===L?"input":L,P=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),g="switch"===j||h,S=g?[s,"custom-control"]:[n,"form-check"],D=S[0],k=S[1];n=Object(v.b)(D,k);var z=Object(l.useContext)(p).controlId,F=Object(l.useMemo)((function(){return{controlId:t||z,custom:g}}),[z,g,t]),T=null!=y&&!1!==y&&!C,A=r.a.createElement(E,Object(o.a)({},P,{type:"switch"===j?"checkbox":j,ref:a,isValid:d,isInvalid:b,isStatic:!T,disabled:c,as:I}));return r.a.createElement(p.Provider,{value:F},r.a.createElement("div",{style:x,className:u()(N,n,g&&"custom-"+j,i&&n+"-inline")},C||r.a.createElement(r.a.Fragment,null,A,T&&r.a.createElement(M,{title:O},y),(d||b)&&r.a.createElement(f,{type:d?"valid":"invalid"},w))))}));x.displayName="FormCheck",x.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},x.Input=E,x.Label=M;var O=x,j=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,c=e.isValid,d=e.isInvalid,b=e.lang,f=e.as,w=void 0===f?"input":f,E=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),N=Object(l.useContext)(p),M=N.controlId,x=N.custom?[s,"custom-file-input"]:[n,"form-control-file"],O=x[0],j=x[1];return n=Object(v.b)(O,j),r.a.createElement(w,Object(o.a)({},E,{ref:a,id:t||M,type:"file",lang:b,className:u()(i,n,c&&"is-valid",d&&"is-invalid")}))}));j.displayName="FormFileInput";var y=j,C=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,i=e.htmlFor,c=Object(m.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(l.useContext)(p),b=d.controlId,f=d.custom?[n,"custom-file-label"]:[t,"form-file-label"],w=f[0],E=f[1];return t=Object(v.b)(w,E),r.a.createElement("label",Object(o.a)({},c,{ref:a,htmlFor:i||b,className:u()(s,t),"data-browse":c["data-browse"]}))}));C.displayName="FormFileLabel";var h=C,L=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.disabled,c=e.isValid,d=e.isInvalid,b=e.feedback,w=e.className,E=e.style,N=e.label,M=e.children,x=e.custom,O=e.lang,j=e["data-browse"],C=e.as,L=void 0===C?"div":C,I=e.inputAs,P=void 0===I?"input":I,g=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=x?[s,"custom"]:[n,"form-file"],D=S[0],k=S[1];n=Object(v.b)(D,k);var z=Object(l.useContext)(p).controlId,F=Object(l.useMemo)((function(){return{controlId:t||z,custom:x}}),[z,x,t]),T=null!=N&&!1!==N&&!M,A=r.a.createElement(y,Object(o.a)({},g,{ref:a,isValid:c,isInvalid:d,disabled:i,as:P,lang:O}));return r.a.createElement(p.Provider,{value:F},r.a.createElement(L,{style:E,className:u()(w,n,x&&"custom-file")},M||r.a.createElement(r.a.Fragment,null,x?r.a.createElement(r.a.Fragment,null,A,T&&r.a.createElement(h,{"data-browse":j},N)):r.a.createElement(r.a.Fragment,null,T&&r.a.createElement(h,null,N),A),(c||d)&&r.a.createElement(f,{type:c?"valid":"invalid"},b))))}));L.displayName="FormFile",L.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},L.Input=y,L.Label=h;var I=L,P=(t("2W6z"),r.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,i=e.bsCustomPrefix,c=e.type,d=e.size,b=e.id,f=e.className,w=e.isValid,E=e.isInvalid,N=e.plaintext,M=e.readOnly,x=e.custom,O=e.as,j=void 0===O?"input":O,y=Object(m.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(l.useContext)(p).controlId,h=x?[i,"custom"]:[s,"form-control"],L=h[0],I=h[1];if(s=Object(v.b)(L,I),N)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===c){var P;(P={})[s+"-file"]=!0,t=P}else if("range"===c){var g;(g={})[s+"-range"]=!0,t=g}else if("select"===j&&x){var S;(S={})[s+"-select"]=!0,S[s+"-select-"+d]=d,t=S}else{var D;(D={})[s]=!0,D[s+"-"+d]=d,t=D}return r.a.createElement(j,Object(o.a)({},y,{type:c,ref:a,readOnly:M,id:b||C,className:u()(f,t,w&&"is-valid",E&&"is-invalid")}))})));P.displayName="FormControl",P.Feedback=f;var g=P,S=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,i=e.controlId,c=e.as,d=void 0===c?"div":c,b=Object(m.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.b)(t,"form-group");var f=Object(l.useMemo)((function(){return{controlId:i}}),[i]);return r.a.createElement(p.Provider,{value:f},r.a.createElement(d,Object(o.a)({},b,{ref:a,className:u()(n,t)}),s))}));S.displayName="FormGroup";var D=S,k=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,s=e.bsPrefix,i=e.column,d=e.srOnly,b=e.className,f=e.htmlFor,w=Object(m.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),E=Object(l.useContext)(p).controlId;s=Object(v.b)(s,"form-label");var N="col-form-label";"string"==typeof i&&(N=N+"-"+i);var M=u()(b,s,d&&"sr-only",i&&N);return f=f||E,i?r.a.createElement(c.a,Object(o.a)({as:"label",className:M,htmlFor:f},w)):r.a.createElement(n,Object(o.a)({ref:a,className:M,htmlFor:f},w))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var z=k,F=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,s=void 0===n?"small":n,i=e.muted,c=Object(m.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.b)(t,"form-text"),r.a.createElement(s,Object(o.a)({},c,{ref:a,className:u()(l,t,i&&"text-muted")}))}));F.displayName="FormText";var T=F,A=r.a.forwardRef((function(e,a){return r.a.createElement(O,Object(o.a)({},e,{ref:a,type:"switch"}))}));A.displayName="Switch",A.Input=O.Input,A.Label=O.Label;var V=A,R=t("YdCC"),U=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,n=e.className,s=e.validated,i=e.as,c=void 0===i?"form":i,d=Object(m.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.b)(t,"form"),r.a.createElement(c,Object(o.a)({},d,{ref:a,className:u()(n,s&&"was-validated",l&&t+"-inline")}))}));U.displayName="Form",U.defaultProps={inline:!1},U.Row=Object(R.a)("form-row"),U.Group=D,U.Control=g,U.Check=O,U.File=I,U.Switch=V,U.Label=z,U.Text=T;var Q=U,Z=t("cWnB"),G=t("AjCI"),Y=t.n(G),W=t("cE9s"),B=t.n(W),H=t("Bl7J"),J=t("vrFN");t("WI/s"),a.default=function(){return r.a.createElement(H.a,{pageClassName:"contact-page"},r.a.createElement(J.a,{title:"Contact"}),r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(c.a,{md:6,lg:5,id:"contact-form"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement(Q,{method:"post",action:"https://getform.io/f/7fc595e4-0150-4678-bfc2-1dbab05c76f3"},r.a.createElement(Q.Label,null,"Email"),r.a.createElement(Q.Control,{type:"email",name:"email",autoComplete:"email"}),r.a.createElement(Q.Label,null,"Name"),r.a.createElement(Q.Control,{type:"text",name:"name",autoComplete:"name"}),r.a.createElement(Q.Label,null,"I'm contacting you to..."),r.a.createElement(Q.Control,{as:"select",name:"purpose"},r.a.createElement("option",null,"Offer feedback"),r.a.createElement("option",null,"Ask a question"),r.a.createElement("option",null,"Get involved"),r.a.createElement("option",null,"Something else")),r.a.createElement(Q.Label,null,"Message (required)"),r.a.createElement(Q.Control,{as:"textarea",rows:5,name:"message"}),r.a.createElement(Z.a,{className:"cta mt-3",variant:"primary",type:"submit"},"Send Message"))),r.a.createElement(c.a,{md:{span:5,offset:1}},r.a.createElement("div",{id:"email-signup",className:"pt-5 pt-md-0"},r.a.createElement("h1",null,"Sign Up For Email Updates"),r.a.createElement(Q,{method:"post",action:"https://getform.io/f/7fc595e4-0150-4678-bfc2-1dbab05c76f3"},r.a.createElement(Q.Label,null,"Be the first to know when new data is released."),r.a.createElement(Q.Control,{type:"hidden",name:"purpose",value:"Email Signup"}),r.a.createElement(Q.Control,{type:"email",name:"email",autocomplete:"email",placeholder:"Email"}),r.a.createElement(Q.Control,{type:"hidden",name:"email-opt-in",value:"on"}),r.a.createElement(Z.a,{className:"cta mt-3",variant:"primary",type:"submit"},"Sign Up"))),r.a.createElement("div",{className:"pt-5"},r.a.createElement("h1",null,"Get Updates On Twitter ",r.a.createElement("img",{src:B.a,id:"twitter-icon",alt:"twitter icon"})),r.a.createElement("div",null,"Follow ",r.a.createElement("a",{href:"https://twitter.com/OpenOUSD",target:"_blank",rel:"noopener noreferrer"},"@OpenOUSD")," or ",r.a.createElement("a",{href:"https://twitter.com/OAKEDUretweets",target:"_blank",rel:"noopener noreferrer"},"@OAKEDUretweets")," for updates.")),r.a.createElement("div",{className:"pt-5"},r.a.createElement("h1",null,"Join Us In-Person"),r.a.createElement("div",null,"OpenOakland meets every Tues,"," ","6:30pm at Oakland City Hall."),r.a.createElement("a",{href:"https://www.meetup.com/OpenOakland/events/",target:"_blank",rel:"noopener noreferrer"},"RSVP on Meetup ",r.a.createElement(Y.a,null))),r.a.createElement("div",{className:"pt-5"},r.a.createElement("h1",null,"Looking for data?"),r.a.createElement("p",null,r.a.createElement(n.Link,{to:"/about-data/"},"View OpenOUSD data and code.")),r.a.createElement("div",{className:"mt-3 strong"},"Check out other education-related OpenOakland projects:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.opendisclosure.io/",target:"_blank",rel:"noopener noreferrer"},"Open Disclosure Oakland")," - Campaign contributions for school board elections"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://trackg.org",target:"_blank",rel:"noopener noreferrer"},"trackg.org")," - Measure G parcel tax spending"))))),r.a.createElement(i.a,null),r.a.createElement(i.a,null)))}},"WI/s":function(e,a,t){},cE9s:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTG9nb19GSVhFRCIgZGF0YS1uYW1lPSJMb2dvIOKAlCBGSVhFRCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxZGExZjI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Ud2l0dGVyX0xvZ29fQmx1ZTwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1My42MiwzMDEuNTljOTQuMzQsMCwxNDUuOTQtNzguMTYsMTQ1Ljk0LTE0NS45NCwwLTIuMjIsMC00LjQzLS4xNS02LjYzQTEwNC4zNiwxMDQuMzYsMCwwLDAsMzI1LDEyMi40N2ExMDIuMzgsMTAyLjM4LDAsMCwxLTI5LjQ2LDguMDcsNTEuNDcsNTEuNDcsMCwwLDAsMjIuNTUtMjguMzcsMTAyLjc5LDEwMi43OSwwLDAsMS0zMi41NywxMi40NSw1MS4zNCw1MS4zNCwwLDAsMC04Ny40MSw0Ni43OEExNDUuNjIsMTQ1LjYyLDAsMCwxLDkyLjQsMTA3LjgxYTUxLjMzLDUxLjMzLDAsMCwwLDE1Ljg4LDY4LjQ3QTUwLjkxLDUwLjkxLDAsMCwxLDg1LDE2OS44NmMwLC4yMSwwLC40MywwLC42NWE1MS4zMSw1MS4zMSwwLDAsMCw0MS4xNSw1MC4yOCw1MS4yMSw1MS4yMSwwLDAsMS0yMy4xNi44OCw1MS4zNSw1MS4zNSwwLDAsMCw0Ny45MiwzNS42MiwxMDIuOTIsMTAyLjkyLDAsMCwxLTYzLjcsMjJBMTA0LjQxLDEwNC40MSwwLDAsMSw3NSwyNzguNTVhMTQ1LjIxLDE0NS4yMSwwLDAsMCw3OC42MiwyMyIvPjwvc3ZnPgo="},cWnB:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),n=t("TSYQ"),s=t.n(n),i=t("q1tI"),c=t.n(i),o=t("vUet"),m=t("dbZe"),d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,i=e.size,d=e.active,u=e.className,b=e.block,f=e.type,p=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),w=Object(o.b)(t,"btn"),E=s()(u,w,d&&"active",w+"-"+n,b&&w+"-block",i&&w+"-"+i);if(v.href)return c.a.createElement(m.a,Object(l.a)({},v,{as:p,ref:a,className:s()(E,v.disabled&&"disabled")}));a&&(v.ref=a),p||(v.type=f);var N=p||"button";return c.a.createElement(N,Object(l.a)({},v,{className:E}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-js-05366a9ac027d37d2199.js.map