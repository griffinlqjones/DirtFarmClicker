(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0ed1":function(t,s,a){},"1e95":function(t,s,a){"use strict";var e=a("622e"),i=a.n(e);i.a},"2abb":function(t,s,a){},3189:function(t,s,a){"use strict";var e=a("2abb"),i=a.n(e);i.a},"3c44":function(t,s,a){},"51fc":function(t,s,a){"use strict";var e=a("0ed1"),i=a.n(e);i.a},"622e":function(t,s,a){},d93d:function(t,s,a){"use strict";var e=a("f853"),i=a.n(e);i.a},e208:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dirt-farm"},[a("HUD"),a("ClickSpace"),a("Upgrades")],1)},i=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"hud"}},[a("h2",{staticClass:"section-heading"},[t._v("Dashboard")]),a("div",{staticClass:"stats"},[a("div",{staticClass:"currency"},[a("p",[a("span",{staticClass:"stat"},[t._v("Money:")]),t._v(" "+t._s(t.money)+" Currency")]),a("p",[a("span",{staticClass:"stat"},[t._v("Good Dirt:")]),t._v(" "+t._s(t.goodDirt)+" / "+t._s(t.maxGoodDirt)+" m"),a("sup",[t._v("3")])]),a("p",[a("span",{staticClass:"stat"},[t._v("Staff Cost:")]),t._v(" "+t._s(t.laborCost)+" money per hour")]),a("p",[a("span",{staticClass:"stat"},[t._v("Personal Dirt Production:")]),t._v(" "+t._s(t.clickedDirtRate)+" dirt per click")]),a("p",[a("span",{staticClass:"stat"},[t._v("Staff Dirt Production:")]),t._v(" "+t._s(t.passiveDirtRate)+" dirt per hour")]),a("p",[a("span",{staticClass:"stat"},[t._v("Dirt Unit Price:")]),t._v(" "+t._s(t.dirtUnitPrice)+" money")]),a("p",[a("span",{staticClass:"stat"},[t._v("Morality:")]),t._v(" "+t._s(t.morality)+" thetans")])]),t.hiredStaff.length>0?a("div",{staticClass:"staff"},[a("h3",[t._v("Employees:")]),a("ul",t._l(t.hiredStaff,function(s,e){return a("li",{key:e},[a("p",[a("span",{staticClass:"stat"},[t._v(t._s(s.name)+":")]),t._v(" "+t._s(s.count))]),a("button",{staticClass:"remove-button",on:{click:function(a){return t.dismissEmployee(s)}}},[t._v("\n            Dismiss 1\n          ")])])}),0)]):t._e()]),a("div",{staticClass:"actions"},[a("button",{attrs:{type:"button",name:"button"},on:{click:t.startTime}},[t._v("Start")]),a("button",{attrs:{type:"button",name:"button"},on:{click:t.stopTime}},[t._v("Stop")]),a("button",{attrs:{type:"button",name:"button"},on:{click:t.unlockables}},[t._v("Check for unlocked things")]),this.upgradeUnlockAlertDisplay?a("p",{staticClass:"upgrade-alert"},[t._v("NEW UPGRADES AVAILABLE")]):t._e()]),a("Container")],1)},c=[],r=a("cebc"),o=a("2f62"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"containers-panel"}},[a("h3",{staticClass:"stat heading"},[t._v("Sell")]),a("div",{staticClass:"containers-wrapper"},t._l(t.shippingContainers,function(s,e){return a("button",{key:e,staticClass:"container-card",on:{click:function(a){return t.sellDirt(s)}}},[a("h3",[t._v(t._s(s.name))]),a("p",[t._v("-"+t._s(s.capacity)+" Good Dirt")]),a("p",[t._v("+"+t._s(t.calcProfit(s))+" Currency")])])}),0)])},p=[],u={name:"Container",methods:Object(r["a"])({},Object(o["b"])(["genericDispatch","sellDirt"]),{sell:function(t){this.sellDirt(t)}}),computed:Object(r["a"])({},Object(o["d"])(["dirtUnitPrice"]),Object(o["c"])(["shippingContainers","calcProfit"]))},_=u,d=(a("1e95"),a("2877")),v=Object(d["a"])(_,l,p,!1,null,"4febfa65",null),f=v.exports,m={name:"HUD",methods:Object(r["a"])({},Object(o["b"])(["startTimer","genericDispatch","checkForUnlockableUpgrades","reduceCount"]),{startTime:function(){this.startTimer()},stopTime:function(){this.genericDispatch({mutation:"stopTimer",payload:null})},unlockables:function(){this.checkForUnlockableUpgrades()},dismissEmployee:function(t){this.reduceCount(t)}}),computed:Object(r["a"])({},Object(o["d"])(["dirtUnitPrice","morality","laborCost","money","goodDirt","maxGoodDirt","passiveDirtRate","clickedDirtRate","upgradeUnlockAlertDisplay"]),Object(o["c"])(["hiredStaff","laborCostPerTick","dirtPerTick","getMorality"])),components:{Container:f}},b=m,h=(a("d93d"),Object(d["a"])(b,n,c,!1,null,"e7c2cfee",null)),C=h.exports,y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"upgrades-panel"}},[a("h2",{staticClass:"section-heading"},[t._v("Upgrades")]),a("p",{staticClass:"section-subheading"},[t._v("This is where you buy stuff to upgrade your dirt farm")]),t._l(t.availableUpgrades,function(s,e){return a("button",{key:e,staticClass:"upgrade-card",on:{click:function(a){return t.buy(s)}}},[a("h3",{staticClass:"section-heading"},[t._v(t._s(s.name))]),a("h4",[t._v("Price: "+t._s(s.aquisitionCost)+" "+t._s(s.acquisitionCurrency))]),a("p",{staticClass:"description"},[t._v(t._s(s.lockedDescription))]),"shippingContainer"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Ships:")]),t._v(" "+t._s(s.capacity)+" units of dirt per shipment")]),a("p",[a("span",{staticClass:"stat"},[t._v("Shipping Cost:")]),t._v(" "+t._s(s.intervalCost)+" "+t._s(s.acquisitionCurrency)+" per shipment")]),0!=s.value?a("p",[a("span",{staticClass:"stat"},[t._v("Bonus value:")]),t._v(" "+t._s(s.value>0?"+":"")+" "+t._s(s.value)+" money per shipment")]):t._e()]:"clickProduction"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Produces:")]),t._v(" "+t._s(s.value)+" units of dirt per click "+t._s(s.repurchaseable?"(stackable)":""))])]:"staff"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Wage:")]),t._v(" "+t._s(s.intervalCost)+" money/hr")]),a("p",[a("span",{staticClass:"stat"},[t._v("Produces:")]),t._v(" "+t._s(s.value)+" units of dirt per hour (stackable)")])]:"propertyExpansion"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Maximum Dirt:")]),t._v(" +"+t._s(s.capacity))])]:"dirtQuality"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Dirt Value per unit:")]),t._v(" +"+t._s(s.value))])]:t._e(),0!=s.morality?[a("p",[a("span",{staticClass:"stat"},[t._v("Moral Implications")]),t._v(": "+t._s(s.morality>0?"+":"")+" "+t._s(s.morality)+" thetans")])]:t._e()],2)})],2)},k=[],g={name:"Upgrades",data:function(){return{}},methods:Object(r["a"])({},Object(o["b"])(["buyUpgrade"]),{buy:function(t){this.buyUpgrade(t)}}),computed:Object(r["a"])({},Object(o["c"])(["availableUpgrades"]))},D=g,U=(a("f703"),Object(d["a"])(D,y,k,!1,null,"4acfb447",null)),j=U.exports,O=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{attrs:{id:"click-space"},on:{click:t.clicked}},[a("h4",[t._v("Click to Farm Dirt!")])])},P=[],S={name:"ClickSpace",methods:Object(r["a"])({},Object(o["b"])(["incrementClicked"]),{clicked:function(){this.$store.commit("incrementClicked")}})},E=S,x=(a("51fc"),Object(d["a"])(E,O,P,!1,null,"10f3b9ce",null)),w=x.exports,T={name:"DirtFarm",components:{HUD:C,Upgrades:j,ClickSpace:w},data:function(){return{}}},A=T,M=Object(d["a"])(A,e,i,!1,null,null,null);s["default"]=M.exports},e25f:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"inventory"}},[a("h2",[t._v("Acquired Upgrades")]),t._l(t.ownedUpgrades,function(s,e){return a("div",{key:e,staticClass:"upgrade-card",on:{click:function(a){return t.display(s)}}},[a("h3",[t._v(t._s(s.name)+" "),s.repurchaseable?a("span",[t._v("("+t._s(s.count)+")")]):t._e()]),a("p",[t._v(t._s(s.unlockedDescription))]),"shippingContainer"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Shipping Cost:")]),t._v(" "+t._s(s.intervalCost)+" cubic dollars per shipment")]),a("p",[a("span",{staticClass:"stat"},[t._v("Ships:")]),t._v(" "+t._s(s.capacity)+" units of dirt per shipment")])]:"clickProduction"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Produces:")]),t._v(" "+t._s(s.value)+" units of dirt per click "+t._s(s.repurchaseable?"(stackable)":""))])]:"staff"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Wage:")]),t._v(" "+t._s(s.intervalCost)+" money/hr")]),a("p",[a("span",{staticClass:"stat"},[t._v("Produces:")]),t._v(" "+t._s(s.value)+" per hour (stackable)")])]:"propertyExpansion"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Maximum Dirt:")]),t._v(" +"+t._s(s.capacity))])]:"dirtQuality"==s.type?[a("p",[a("span",{staticClass:"stat"},[t._v("Dirt Value per unit:")]),t._v(" +"+t._s(s.value))])]:t._e(),0!=s.morality?[a("p",[a("span",{staticClass:"stat"},[t._v("Moral Implications:")]),t._v(" "+t._s(s.morality>0?"+":"")+" "+t._s(s.morality)+" thetans")])]:t._e()],2)})],2)},i=[],n=a("cebc"),c=a("2f62"),r={name:"Inventory",data:function(){return{}},methods:{display:function(t){console.log(t)}},computed:Object(n["a"])({},Object(c["c"])(["ownedUpgrades"]))},o=r,l=(a("3189"),a("2877")),p=Object(l["a"])(o,e,i,!1,null,"1166340e",null);s["default"]=p.exports},f703:function(t,s,a){"use strict";var e=a("3c44"),i=a.n(e);i.a},f853:function(t,s,a){}}]);
//# sourceMappingURL=about.591712a7.js.map