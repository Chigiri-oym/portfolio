(function(t){function e(e){for(var r,a,l=e[0],s=e[1],c=e[2],p=0,v=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&v.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header_logo"},[t._v(" C's ")]),n("div",{staticClass:"header-icons"},[n("font-awesome-icon",{staticClass:"navi-icon",class:{hidden:t.isHidden},attrs:{icon:"bars",size:"2x"},on:{click:t.toggleButton}}),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.showNavi,expression:"showNavi"}],staticClass:"navi-icon",class:{open:t.isActive},attrs:{icon:"times",size:"2x"},on:{click:t.toggleButton}})],1),n("nav",[n("ul",{class:{open:t.isActive}},[n("router-link",{attrs:{to:"/",exact:""},nativeOn:{click:function(e){return t.toggleButton()}}},[n("li",[t._v("Top")])]),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.toggleButton()}}},[n("li",[t._v("About")])]),n("router-link",{attrs:{to:"/skills"},nativeOn:{click:function(e){return t.toggleButton()}}},[n("li",[t._v("Skills")])]),n("router-link",{attrs:{to:"/projects"},nativeOn:{click:function(e){return t.toggleButton()}}},[n("li",[t._v("Projects")])]),n("router-link",{attrs:{to:"/works"},nativeOn:{click:function(e){return t.toggleButton()}}},[n("li",[t._v("Works")])])],1)])])},l=[],s={name:"Header",data:function(){return{isHidden:!1,isActive:!1,showNavi:!1}},methods:{toggleButton:function(){this.isHidden=!this.isHidden,this.isActive=!this.isActive,this.showNavi=!this.showNavi}}},c=s,u=n("2877"),p=Object(u["a"])(c,a,l,!1,null,null,null),v=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("p",[t._v("Copyright 2021 Chigiri.")]),t._l(t.contracts,(function(t,e){return n("div",{key:e,staticClass:"footer-icon"},[n("a",{attrs:{href:t.url}},[n("font-awesome-icon",{attrs:{icon:[t.prefix,t.icon],size:"2x"}})],1)])}))],2)])},f=[],m={name:"Footer",data:function(){return{contracts:[{prefix:"fab",icon:"twitter",url:"https://twitter.com/Chigiri3desu"},{prefix:"fab",icon:"github",url:"https://github.com/Chigiri-oym/portfolio"},{icon:"envelope",url:""}]}}},h=m,k=Object(u["a"])(h,d,f,!1,null,null,null),g=k.exports,y={name:"app",components:{Header:v,Footer:g}},_=y,b=(n("034f"),Object(u["a"])(_,i,o,!1,null,null,null)),C=b.exports,w=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",[t._v("Chigiri's Portfolio")]),n("p",[t._v("Chigiriのポートフォリオサイト")]),n("div",{staticClass:"container"},t._l(t.cards,(function(t,e){return n("top-card",{key:e,staticClass:"card",attrs:{card:t}})})),1)])},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:t.card.url}},[t._v(t._s(t.card.title)+" "),n("div",{staticClass:"icon-box"},[n("font-awesome-icon",{attrs:{icon:t.card.icon,size:"2x"}})],1)])],1)},S=[],A={name:"TopCard",props:{card:{type:Object,required:!0}}},B=A,P=Object(u["a"])(B,j,S,!1,null,null,null),E=P.exports,$={name:"Top",components:{TopCard:E},data:function(){return{cards:[{title:"About",url:"/about",icon:"user-circle"},{title:"Skills",url:"/skills",icon:"cogs"},{title:"Projects",url:"/projects",icon:"list-alt"},{title:"Works",url:"/works",icon:"briefcase"}]}}},T=$,H=Object(u["a"])(T,x,O,!1,null,null,null),W=H.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("About")]),r("p",[t._v("自己紹介")]),r("img",{staticClass:"my-icon",attrs:{src:n("f0fc")}}),r("div",{staticClass:"message"},[t._v(" "+t._s(t.message)+" ")]),r("table",{staticClass:"table-content"},t._l(t.contents,(function(e,n){return r("tr",{key:n},[r("th",[t._v(t._s(e.key))]),null!==e.link?r("td",[r("a",{attrs:{href:e.link}},[t._v(t._s(e.value))])]):r("td",[t._v(t._s(e.value)+" ")])])})),0)])},M=[],z={name:"About",data:function(){return{contents:[{key:"仮名",value:"Chigiri",link:null},{key:"所属",value:"中規模SIer5年目",link:null},{key:"種類",value:"サーバーサイドエンジニア(Java)",link:null},{key:"業務領域",value:"BtoBCシステムの開発・運用保守",link:null},{key:"スキル概要",value:"要件定義〜テストまで経験済み\n                8名程度のプロジェクトのリーダー経験あり",link:""},{key:"好きな分野",value:"DB定義やSQL、データ移行など",link:null},{key:"Twitter",value:"@Chigiri3desu",link:"https://twitter.com/Chigiri3desu"},{key:"github",value:"@Chigiri-oym",link:"https://github.com/Chigiri-oym/portfolio"},{key:"Qiita",value:"@Chigiri-san",link:"https://qiita.com/Chigiri-san"},{key:"お問い合わせ",value:"Google Form",link:""}],message:"私立文系大学国際系学部卒業後、新卒で中規模SIerに入社。\n              人材系サービスサイトのプロジェクトで開発・運用保守を経験。\n              モダンな技術よりも保守性を優先させる慎重派。"}}},F=z,G=Object(u["a"])(F,N,M,!1,null,null,null),J=G.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"})},D=[],Q={name:"skill",data:function(){return{skill_data:[{category:"バックエンド",skills:[{name:"Java",year:5,level:2},{name:"kotolin",year:.5,level:2}]},{category:"フロントエンド",skills:[{name:"Vue",year:.5,level:1}]},{category:"DB",skills:[{name:"MySQL",year:2,level:2},{name:"Oracle",year:2,level:2}]},{category:"インフラ",skills:[{name:"AWS",year:2,level:2},{name:"GCP",year:.5,level:1}]},{category:"その他",skills:[{name:"Git",year:4,level:2},{name:"Docker",year:2,level:1}]},{category:"保有資格",skills:[{name:"Associate Cloud Engineer - Google Cloud",year:null,level:null},{name:"基本情報技術者",year:null,level:null}]}]}}},I=Q,L=Object(u["a"])(I,q,D,!1,null,null,null),V=L.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t._v("> ")])},R=[],U={},X=Object(u["a"])(U,K,R,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",[t._v("Works")]),n("p",[t._v("個人開発のあれこれ")]),n("div",{staticClass:"works-container"},t._l(t.works,(function(t,e){return n("work-card",{key:e,attrs:{work:t}})})),1)])},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-wrapper"},[n("a",{attrs:{href:t.work.url}},[n("div",{staticClass:"card-image"},[n("img",{attrs:{src:t.work.image}})]),n("div",{staticClass:"card-contents"},[n("p",{staticClass:"card-title"},[t._v(t._s(t.work.name))]),n("div",{staticClass:"card-detail"},[t._v(t._s(t.work.detail))])])])])},nt=[],rt={name:"WorkCard",props:{work:{type:Object,required:!0}}},it=rt,ot=Object(u["a"])(it,et,nt,!1,null,null,null),at=ot.exports,lt={name:"works",components:{WorkCard:at},data:function(){return{works:[{name:"my portofolio",image:n("5b71"),url:"https://github.com/Chigiri-oym/portfolio",detail:"個人の自己紹介サイトです。つまり、このサイトのことです。"},{name:"Comming Soon",image:n("660a"),url:"",detail:""}]}}},st=lt,ct=Object(u["a"])(st,Z,tt,!1,null,null,null),ut=ct.exports;r["a"].use(w["a"]);var pt=[{path:"/",name:"Top",component:W},{path:"/about",name:"About",component:J},{path:"/skills",name:"Skills",component:V},{path:"/projects",name:"Projects",component:Y},{path:"/works",name:"Works",component:ut}],vt=new w["a"]({mode:"history",routes:pt}),dt=vt,ft=n("ecee"),mt=n("c074"),ht=n("f2d1"),kt=n("ad3d");ft["c"].add(mt["a"]),ft["c"].add(ht["a"]),r["a"].component("font-awesome-icon",kt["a"]),r["a"].config.productionTip=!1,new r["a"]({router:dt,render:function(t){return t(C)}}).$mount("#app")},"5b71":function(t,e,n){t.exports=n.p+"img/portfolio.06bfe1d3.png"},"660a":function(t,e,n){t.exports=n.p+"img/hatena.5ab49e72.png"},"85ec":function(t,e,n){},f0fc:function(t,e,n){t.exports=n.p+"img/icon.fdd7c482.png"}});
//# sourceMappingURL=app.1fe55eea.js.map