(this["webpackJsonpspy-pixel-frontend"]=this["webpackJsonpspy-pixel-frontend"]||[]).push([[0],{140:function(e,c,t){},141:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),i=t(51),s=t.n(i),r=t(109),l=t(21),j=t(20),o=t(7),d=t.n(o),b=t(50),x=t(10),p=t(110),h=t(99),O=t(156),u=t(164),m=t(163),g=t(159),f=t(161),y=t(56),w=t(1),C=function(){return Object(w.jsx)(b.b,{to:"/spy-pixel",children:Object(w.jsx)(y.a,{size:"big",color:"black",name:"left arrow"})})},v=function(e){var c=e.cookies;return Object(w.jsxs)(g.a,{compact:!0,celled:!0,striped:!0,singleLine:!0,children:[Object(w.jsx)(g.a.Header,{children:Object(w.jsx)(g.a.Row,{children:Object(w.jsx)(g.a.HeaderCell,{colSpan:"2",children:"Cookies"})})}),Object(w.jsx)(g.a.Body,{children:c&&0===Object.keys(c).length?Object(w.jsx)(g.a.Row,{children:Object(w.jsx)(g.a.Cell,{colSpan:"2",children:"No cookies detected"})}):Object.entries(c).map((function(e){var c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(w.jsxs)(g.a.Row,{children:[Object(w.jsx)(g.a.Cell,{children:t}),Object(w.jsx)(g.a.Cell,{children:n})]},t)}))})]})},k=t(112),I=t.n(k),R=function(e){var c=e.headers,t=I()(c["User-Agent"]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(g.a,{compact:!0,celled:!0,striped:!0,singleLine:!0,children:[Object(w.jsx)(g.a.Header,{children:Object(w.jsx)(g.a.Row,{children:Object(w.jsx)(g.a.HeaderCell,{colSpan:"2",children:"User Agent".concat(c["User-Agent"].includes("GoogleImageProxy")?" (via GoogleImageProxy)":"")})})}),Object(w.jsxs)(g.a.Body,{children:[Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"chrome"})," Browser"]}),Object(w.jsx)(g.a.Cell,{children:t.browser.name?"".concat(t.browser.name," ").concat(t.browser.version):Object(w.jsx)("i",{children:"unknown"})})]}),Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"mobile alternate"})," Device"]}),Object(w.jsx)(g.a.Cell,{children:t.device.model||Object(w.jsx)("i",{children:"unknown"})})]}),Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"computer"})," OS"]}),Object(w.jsx)(g.a.Cell,{children:t.os.name?"".concat(t.os.name," ").concat(t.os.version):Object(w.jsx)("i",{children:"unknown"})})]}),Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"microchip"})," Architecture"]}),Object(w.jsx)(g.a.Cell,{children:t.cpu.architecture||Object(w.jsx)("i",{children:"unknown"})})]})]})]}),Object(w.jsxs)(g.a,{compact:!0,celled:!0,striped:!0,singleLine:!0,children:[Object(w.jsx)(g.a.Header,{children:Object(w.jsx)(g.a.Row,{children:Object(w.jsx)(g.a.HeaderCell,{colSpan:"2",children:"Location".concat(c["User-Agent"].includes("GoogleImageProxy")?" (via GoogleImageProxy)":"")})})}),Object(w.jsxs)(g.a.Body,{children:[Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"world"})," Country"]}),Object(w.jsx)(g.a.Cell,{children:c["X-Appengine-Country"]||Object(w.jsx)("i",{children:"unknown"})})]}),Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"building"})," City"]}),Object(w.jsx)(g.a.Cell,{children:c["X-Appengine-City"]||Object(w.jsx)("i",{children:"unknown"})})]}),Object(w.jsxs)(g.a.Row,{children:[Object(w.jsxs)(g.a.Cell,{children:[Object(w.jsx)(y.a,{name:"location arrow"})," IP"]}),Object(w.jsx)(g.a.Cell,{children:c["X-Appengine-User-Ip"]||Object(w.jsx)("i",{children:"unknown"})})]})]})]})]})},S=function(e){var c=e.campaigns,t=Object(x.g)().campaignId,n=c.filter((function(e){return e.id===t})),a=Object(j.a)(n,1)[0];if(!a)return Object(w.jsxs)(O.a,{style:{paddingTop:"4rem"},children:[Object(w.jsx)(C,{}),Object(w.jsxs)(u.a,{as:"h1",children:["Campaigns ",t," not found"]})]});var i=a.logs.map((function(e,c){return{key:"panel-".concat(c),title:"".concat(e.email||"").concat(e.email?" r":"R","ead at ").concat(e.timestamp.toDate().toDateString()," ").concat(e.timestamp.toDate().toLocaleTimeString()),content:{content:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u.a,{as:"h3",content:"Headers"}),Object(w.jsx)(R,{headers:e.headers}),Object(w.jsx)(u.a,{as:"h3",content:"Cookies"}),Object(w.jsx)(v,{cookies:e.cookies})]})}}})),s=a.logs.map((function(e){return e.email})).filter((function(e,c,t){return t.indexOf(e)===c})).filter((function(e){return""!==e}));return Object(w.jsxs)(O.a,{style:{paddingTop:"4rem"},children:[Object(w.jsx)(C,{}),Object(w.jsxs)(u.a,{as:"h1",children:[Object(w.jsx)("span",{style:{fontWeight:"normal"},children:"Details for campaign "}),t]}),Object(w.jsxs)(m.a.Group,{children:[Object(w.jsxs)(m.a,{children:[Object(w.jsx)(m.a.Value,{children:a.logs.length}),Object(w.jsx)(m.a.Label,{children:"Total Views"})]}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(m.a.Value,{children:s.length}),Object(w.jsx)(m.a.Label,{children:"Unique Views"})]})]}),s.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u.a,{as:"h2",children:"Views per recipient"}),Object(w.jsxs)(g.a,{compact:!0,celled:!0,striped:!0,singleLine:!0,children:[Object(w.jsx)(g.a.Header,{children:Object(w.jsxs)(g.a.Row,{children:[Object(w.jsx)(g.a.HeaderCell,{children:"Recipient"}),Object(w.jsx)(g.a.HeaderCell,{children:"Number of views"})]})}),Object(w.jsx)(g.a.Body,{children:s.map((function(e){return Object(w.jsxs)(g.a.Row,{children:[Object(w.jsx)(g.a.Cell,{children:e}),Object(w.jsx)(g.a.Cell,{children:a.logs.filter((function(c){return c.email===e})).length})]},e)}))})]})]}),Object(w.jsx)(u.a,{as:"h2",children:"Logs"}),Object(w.jsx)(f.a,{styled:!0,fluid:!0,exclusive:!1,panels:i}),Object(w.jsx)("div",{style:{height:"10rem"}})]})},L=t(157),P=t(142),A=t(158),D=t(114),G=t.n(D),H=t(160),T=function(e){var c,t=e.campaign;return Object(w.jsxs)(H.a,{children:[Object(w.jsx)(H.a.Content,{header:t.id}),Object(w.jsx)(H.a.Content,{description:"".concat((null===(c=t.logs)||void 0===c?void 0:c.length)||0," views")})]})},B=function(e){var c=e.campaigns,t=Object(n.useState)(""),a=Object(j.a)(t,2),i=a[0],s=a[1],r=Object(n.useState)(""),l=Object(j.a)(r,2),o=l[0],d=l[1],x=Object(n.useState)("copy"),p=Object(j.a)(x,2),h=p[0],m=p[1],g=new RegExp("^[a-zA-Z0-9-_@+.]+$"),f=function(e){return""===e||g.test(e)};return Object(w.jsxs)(O.a,{style:{paddingTop:"4rem"},children:[Object(w.jsx)(u.a,{as:"h1",children:"Dashboard"}),Object(w.jsx)(u.a,{as:"h2",children:"Create a spy pixel!"}),Object(w.jsx)("p",{children:"This button creates a spy pixel for you and copies it to your clipboard. Paste it into your emails and start sending!"}),Object(w.jsx)("p",{children:"Campaign IDs are compulsory as they are used to identify which email campaign the pixel is a part of. Emails are optional, and can be used to identify recipients. All input must be alphanumeric characters, ., -, _, @, + or ."}),Object(w.jsx)("p",{children:"NOTE: you can only paste into a rich text editor since HTML is copied directly to your clipboard."}),Object(w.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",rowGap:"1rem",columnGap:"1rem"},children:[Object(w.jsx)("div",{children:Object(w.jsx)(L.a,{error:!f(i),list:"campaigns",icon:"flag",iconPosition:"left",placeholder:"Campaign ID",onChange:function(e,c){s(c.value),m("copy")}})}),Object(w.jsx)("datalist",{id:"campaigns",children:c.map((function(e){return Object(w.jsx)("option",{value:e.id,children:e.id},e.id)}))}),Object(w.jsx)("div",{children:Object(w.jsx)(L.a,{error:!f(o),icon:"mail",iconPosition:"left",placeholder:"Email",onChange:function(e,c){d(c.value),m("copy")}})}),Object(w.jsx)("div",{children:Object(w.jsxs)(P.a,{disabled:""===i||!f(i)||!f(o),icon:!0,labelPosition:"left",color:"copy"===h?"blue":"green",onClick:function(){G()('<img width="1" height="1" border="0" src="https://spy-pixel.ts.r.appspot.com/spy-pixel.gif?campaign='.concat(i,"&email=").concat(o,'" />'),{asHtml:!0}),m("check")},children:["Copy to clipboard",Object(w.jsx)(y.a,{name:h})]})})]}),Object(w.jsx)(A.a,{}),Object(w.jsx)(u.a,{as:"h2",children:"Active campaigns"}),Object(w.jsx)("div",{style:{display:"flex",flexWrap:"wrap",rowGap:"2rem",columnGap:"2rem"},children:c.map((function(e){return Object(w.jsx)(b.b,{to:"/spy-pixel/campaign/".concat(e.id),children:Object(w.jsx)(T,{campaign:e})},e.id)}))})]})},F=Object(p.a)({apiKey:"AIzaSyD9PDc_JLEKOSiSTrPG-XAFs0ICpfMCyQM",authDomain:"spy-pixel-2e767.firebaseapp.com",projectId:"spy-pixel-2e767",storageBucket:"spy-pixel-2e767.appspot.com",messagingSenderId:"656119548415",appId:"1:656119548415:web:ed558859a4ff701c68ffca",measurementId:"G-J7YG62XPL2"}),E=Object(h.c)(F),U=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var c,t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(h.a)(E,"campaigns"),e.next=3,Object(h.b)(c);case 3:t=e.sent,n=t.docs.map((function(e){return Object(r.a)({id:e.id},e.data())})),a(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(w.jsx)(b.a,{children:Object(w.jsxs)(x.c,{children:[Object(w.jsx)(x.a,{exact:!0,path:"/spy-pixel/",element:Object(w.jsx)(B,{campaigns:t})}),Object(w.jsx)(x.a,{exact:!0,path:"/spy-pixel/campaign/:campaignId",element:Object(w.jsx)(S,{campaigns:t})})]})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,165)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,i=c.getLCP,s=c.getTTFB;t(e),n(e),a(e),i(e),s(e)}))};t(139),t(140);s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(U,{})}),document.getElementById("root")),V()}},[[141,1,2]]]);
//# sourceMappingURL=main.2edec28a.chunk.js.map