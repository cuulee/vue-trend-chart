(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,e,r){},,,function(t,e,r){t.exports=r(9)},function(t,e,r){"use strict";var n=r(1);r.n(n).a},,,,function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"0 0 "+t.width+" "+t.height,width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg"}},t._l(t.datasets,function(e,n){return r("trend-chart-curve",t._b({key:n,attrs:{max:t.params.maxValue,min:t.params.minValue,maxAmount:t.params.maxAmount,"stroke-dasharray":"none"}},"trend-chart-curve",e,!1))}),1)};n._withStripped=!0;var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[t.fill&&t.paths&&t.paths.fillPath?r("path",{attrs:{d:t.paths.fillPath,fill:t.fillGradient?"url(#"+t.fillGradientId+")":t.fillColor,opacity:t.fillOpacity}}):t._e(),t._v(" "),t.stroke&&t.paths&&t.paths.linePath?r("path",{attrs:{d:t.paths.linePath,fill:"none",stroke:t.strokeGradient?"url(#"+t.strokeGradientId+")":t.strokeColor,"stroke-width":t.strokeWidth,opacity:t.strokeOpacity}}):t._e(),t._v(" "),t.strokeGradient||t.fillGradient?r("defs",[t.strokeGradient?r("linearGradient",t._b({attrs:{id:t.strokeGradientId}},"linearGradient",t.getGradientDirection(t.strokeGradientDirection),!1),t._l(t.strokeGradient,function(e,n){return r("stop",{key:n,attrs:{offset:n/t.strokeGradient.length,"stop-color":e}})}),1):t._e(),t._v(" "),t.fillGradient?r("linearGradient",t._b({attrs:{id:t.fillGradientId}},"linearGradient",t.getGradientDirection(t.fillGradientDirection),!1),t._l(t.fillGradient,function(e,n){return r("stop",{key:n,attrs:{offset:n/t.fillGradient.length,"stop-color":e}})}),1):t._e()],1):t._e()])};a._withStripped=!0;function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={name:"trend-chart-curve",props:{data:{required:!0,type:Array},smooth:{default:!1,type:Boolean},stroke:{default:!0,type:Boolean},strokeWidth:{default:1,type:Number},strokeColor:{default:"black",type:String},strokeGradient:{type:Array},strokeGradientDirection:{type:String,default:"to top"},strokeOpacity:{default:1,type:Number},fill:{default:!1,type:Boolean},fillColor:{default:"black",type:String},fillGradient:{type:Array},fillGradientDirection:{type:String,default:"to top"},fillOpacity:{default:1,type:Number},max:{required:!0,type:Number},min:{required:!0,type:Number},maxAmount:{required:!0,type:Number}},computed:{boundary:function(){var t=this.$parent,e=t.width,r=t.height,n=t.padding;return{minX:n,minY:n,maxX:e-n,maxY:r-n}},points:function(){return function(t,e,r,n,a){var i=e.minX,o=e.minY,s=e.maxX,l=e.maxY;t=t.map(function(t){return"number"===typeof t?t:t.value});var u=n-.001,d=(s-i)/(a-1),c=(l-o)/(r+.001-u);return t.map(function(t,e){return{x:e*d+i,y:l-(t-u)*c+1e-5*+(e===a-1)-1e-5*+(0===e)}})}(this.data,this.boundary,this.max,this.min,this.maxAmount)},paths:function(){return function(t,e,r,n){var a=r.maxY,o=i(t),s=o.shift(),l=o[o.length-1],u="M ".concat(s.x,",").concat(s.y)+o.map(function(t,r){if(!e)return" L".concat(t.x,",").concat(t.y);var n=o[r-1]||s,a=(o[0].x-s.x)/2;return" C ".concat(a+n.x,",").concat(n.y," ").concat(a+n.x,",").concat(t.y," ").concat(t.x,",").concat(t.y)}),d=u;return l.Y!==a&&(d+=" L".concat(l.x,",").concat(a+n/2)),s.Y!==a&&(d+=" L".concat(s.x,",").concat(a+n/2)),{linePath:u,fillPath:d+=" Z"}}(this.points,this.smooth,this.boundary,this.strokeWidth)},strokeGradientId:function(){return"vueTrendStrokeGradient".concat(this._uid)},fillGradientId:function(){return"vueTrendFillGradient".concat(this._uid)}},methods:{getGradientDirection:function(t){switch(t){case"to left":return{x1:0,y1:0,x2:1,y2:0};case"to bottom":return{x1:0,y1:0,x2:0,y2:1};case"to right":return{x1:1,y1:0,x2:0,y2:0};default:return{x1:0,y1:1,x2:0,y2:0}}}}},s=r(0),l=Object(s.a)(o,a,[],!1,null,null,null);function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}l.options.__file="src/components/trend-chart-curve.vue";var d={name:"TrendChart",components:{TrendChartCurve:l.exports},props:{datasets:{required:!0,type:Array},width:{default:300,type:Number},height:{default:75,type:Number},max:{type:Number},min:{type:Number},padding:{default:5,type:Number}},computed:{params:function(){var t=-1/0,e=1/0,r=0;return this.datasets.forEach(function(n){var a=n.data.map(function(t){return"number"===typeof t?t:t.value}),i=Math.max.apply(Math,u(a));i>t&&(t=i);var o=Math.min.apply(Math,u(a));o<e&&(e=o),a.length>r&&(r=a.length)}),void 0!==this.max&&this.max>t&&(t=this.max),void 0!==this.min&&this.min<e&&(e=this.min),{maxValue:t,minValue:e,maxAmount:r}}}},c=Object(s.a)(d,n,[],!1,null,null,null);c.options.__file="src/components/trend-chart.vue";var h=c.exports;h.install=function(t){t.component(h.name,h)},"undefined"!==typeof window&&window.Vue&&window.Vue.use(h);var f={name:"home",components:{TrendChart:h},data:function(){return{datasets:[{data:[{value:150},{value:300},{value:350},{value:100},{value:350},{value:100},{value:15}],smooth:!0,strokeGradient:["#a8edea","#fed6e3"],strokeWidth:3,fill:!0,fillColor:"#fed6e3",fillOpacity:.2},{data:[50,150,200,50,120,250,200],smooth:!0,strokeGradient:["#fccb90","#d57eeb"],strokeGradientDirection:"to right",strokeWidth:2},{data:[70,100,400,180,100,300,500],smooth:!0,strokeGradient:["#84fab0","#8fd3f4"],strokeWidth:2}]}}},p=(r(5),Object(s.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"docs"},[e("h1",{staticClass:"docs-heading heading"},[this._v("Vue Trend Chart")]),this._v(" "),e("div",{staticClass:"docs-subheading"},[this._v("Simple and elegant trend charts for Vue.js")]),this._v(" "),e("div",{staticClass:"docs-content"},[e("trend-chart",{attrs:{datasets:this.datasets,height:150,width:400,min:0,padding:5,"stroke-dasharray":"2"}})],1)])},[],!1,null,null,null));p.options.__file="home.vue";var m=p.exports,y=r(3);y.a.config.productionTip=!1,new y.a({render:function(t){return t(m)}}).$mount("#app")}],[[4,2,0]]]);