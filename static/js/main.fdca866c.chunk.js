(this["webpackJsonpreact-food"]=this["webpackJsonpreact-food"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),a=c.n(s),i=(c(24),c(7)),j=c(2),o=(c(25),c(0)),l=function(){return Object(o.jsx)("footer",{className:"page-footer brown lighten-1",children:Object(o.jsx)("div",{class:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/kondratiev95/react-food",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},b=function(){return Object(o.jsx)("nav",{className:"red brown lighten-1",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)(i.b,{to:"/",className:"brand-logo",children:"React Shop"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contact",children:"Contacts"})})]})]})})},d=function(){return Object(o.jsx)("h1",{children:"About"})},u=c(8),h=c(10),O=c.n(h),x=c(13),m="https://www.themealdb.com/api/json/v1/".concat("1","/"),f=function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){return Object(o.jsx)("div",{className:"progress",children:Object(o.jsx)("div",{className:"indeterminate"})})},N=c(12),w=function(e){e.idCategory;var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn brown lighten",children:"Watch category"})})]})},y=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(w,Object(N.a)({},e),e.idCategory)}))})},C=function(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(u.a)(r,2),a=s[0],i=s[1],j=function(){c(a)};return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"search-field col s12",children:[Object(o.jsx)("input",{id:"search",type:"search",value:a,placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("button",{className:"btn",onClick:j,children:"Search"})]})})},k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],l=a[1],b=Object(j.g)(),d=b.pathname,h=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){p().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(o.jsxs)("div",{children:[Object(o.jsx)(C,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(y,{catalog:i}):Object(o.jsx)(v,{})]})},M=function(){return Object(o.jsx)("h1",{children:"Contact"})},S=function(){return Object(o.jsx)("h1",{children:"Not Found"})},F=function(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:t})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn brown lighten",children:"Watch reciepe"})})]})},A=function(e){var t=e.meals;return Object(o.jsx)("div",{className:"meal-list",children:t.map((function(e){return Object(o.jsx)(F,Object(N.a)({},e),e.idMeal)}))})},B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(j.h)().name,a=Object(j.f)().goBack;return Object(n.useEffect)((function(){g(s).then((function(e){return r(e.meals)}))}),[s]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:a,className:"btn red lighten-2",children:"Go Back"})}),c.length?Object(o.jsx)(A,{meals:c}):Object(o.jsx)(v,{})]})},L=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(j.h)().id,a=Object(j.f)().goBack;return Object(n.useEffect)((function(){f(s).then((function(e){return r(e.meals[0])}))}),[s]),Object(o.jsxs)("div",{children:[c.idMeal?Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(o.jsx)("h1",{children:c.strMeal}),Object(o.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea?Object(o.jsxs)("h6",{children:["Area: ",c.strArea]}):null,Object(o.jsx)("p",{children:c.strInstructions}),Object(o.jsxs)("table",{className:"centered",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(c).map((function(e){if(e.includes("Ingredient")&&c[e])return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c[e]}),Object(o.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e)}))})]}),c.strYoutube?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{style:{margin:"2rem 0"},children:"Video Recipe"}),Object(o.jsx)("iframe",{id:s,src:"http://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(o.jsx)(v,{}),Object(o.jsx)("button",{onClick:a,className:"btn red lighten-2",children:"Go Back"})]})};var T=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{basename:"/react-food",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(j.a,{path:"/about",component:d}),Object(o.jsx)(j.a,{path:"/contact",component:M}),Object(o.jsx)(j.a,{path:"/category/:name",component:B}),Object(o.jsx)(j.a,{path:"/meal/:id",component:L}),Object(o.jsx)(j.a,{component:S})]})}),Object(o.jsx)(l,{})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),E()}},[[36,1,2]]]);
//# sourceMappingURL=main.fdca866c.chunk.js.map