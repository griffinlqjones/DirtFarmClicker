(function(e){function t(t){for(var n,i,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)i=c[l],r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},i={app:0},r={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"591712a7"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var t=[],o={about:1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=new Promise(function(t,o){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"a156d596"}[e]+".css",r=u.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===n||l===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete i[e],p.parentNode.removeChild(p),o(a)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){i[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,o[1](a)}r[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/DirtFarmClicker/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("Dirt Farm")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[o("span",{on:{click:e.pause}},[e._v("Menu")])]),e._v(" |\n    "),o("router-link",{attrs:{to:"/dirt-farm"}},[o("span",{on:{click:e.start}},[e._v("Dirt Farm")])]),e._v(" |\n    "),o("router-link",{attrs:{to:"/inventory"}},[e._v("Inventory")])],1),o("router-view")],1)},r=[],a=o("cebc"),c=o("2f62"),u={name:"Upgrades",data:function(){return{}},methods:Object(a["a"])({},Object(c["b"])(["genericDispatch","startTimer"]),{pause:function(){this.genericDispatch({mutation:"stopTimer",payload:null})},start:function(){this.startTimer()}})},s=u,l=(o("7c55"),o("2877")),d=Object(l["a"])(s,i,r,!1,null,null,null),p=d.exports,m=o("8c4f"),y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"menu"}},[o("h1",{staticClass:"section-heading"},[e._v("Welcome to the Dirt Farm")]),e._m(0),o("router-link",{staticClass:"start-button",attrs:{to:"/dirt-farm"}},[o("span",{on:{click:e.startGame}},[e._v("Start Farming")])]),o("router-view"),e._m(1)],1)},f=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"lore"},[o("p",[e._v("\n      Allow me to paint you a picture. You're out of college,\n      you don't have a job, that special person in your life is now that\n      special person in someone else's life, you're tired and beaten down.\n    ")]),o("p",[e._v("\n      (food or beverage you enjoy) doesn't taste as good as it used to,\n      your dreams are oddly specific in their focus on your teeth spontaneously\n      shattering in the middle of conversations with people possessing perfectly\n      normal teeth. But then it hits you like a 300 pound ball of lab-grown beef; a way out.\n    ")]),o("p",[e._v("\n      You grab the $100 your extremely supportive (living relative) gave you\n      for (insert holiday), some shovels, and some decaying food matter from\n      your garbage can and begin tearing up your back yard.\n      It's time to build a dirt farm!\n    ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"buttons-wrapper"},[o("button",[e._v("This Button Does NOTHING!")])])}],h={name:"Menu",data:function(){return{uri:"http://localhost:3000/api",savingGame:null,userData:{id:"124abc",money:500,goodDirt:25,upgrades:[{name:"Smelly Teenagers",available:!0,owned:!0,count:4}]},incomingData:null}},methods:Object(a["a"])({},Object(c["b"])(["startTimer"]),{test:function(){fetch(this.uri+"/",{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000"}}).then(function(e){console.log("SUCcESS: "+e)}).catch(function(e){console.log("This test failed: "+e)})},startGame:function(){this.startTimer()},saveGame:function(){var e=this;fetch(this.uri+"/add",{method:"PUT",headers:{"Content-Type":"application/json",Origin:"http://localhost:8080/"},body:JSON.stringify(this.userData)}).then(function(){e.savingGame=null}).catch(function(e){console.log("Something bwonked."+e)})},loadGame:function(){var e=this;fetch(this.uri+"/"+this.userData.id).then(function(e){return e.json()}).then(function(t){e.incomingData=JSON.stringify(t.results),console.log(JSON.stringify(t))}).catch(function(e){console.log("Loading failed for some reason: "+e)})},deleteGame:function(){fetch(this.uri+"/delete/"+this.userData.id,{method:"DELETE"}).then(function(){console.log("DELETED?")}).catch(function(e){console.log("Deleting failed for some reason: "+e)})}}),computed:Object(a["a"])({},Object(c["c"])(["stateForSave"]))},g=h,b=(o("d8df"),Object(l["a"])(g,y,f,!1,null,"7cf963de",null)),v=b.exports;n["a"].use(m["a"]);var D=new m["a"]({mode:"history",base:"/DirtFarmClicker/",routes:[{path:"/",name:"menu",component:v},{path:"/dirt-farm",name:"dirt-farm",component:function(){return o.e("about").then(o.bind(null,"e208"))}},{path:"/inventory",name:"inventory",component:function(){return o.e("about").then(o.bind(null,"e25f"))}}]}),k=(o("7f7f"),o("6762"),o("2fdb"),[{name:"Dirt Farming Supplies?",type:"clickProduction",lockedDescription:"Any good dirt farm requires some kind of initial investment. Grandma gave you 100 dollars to get started so get out there and THROW SOME MONEY AT THE PROBLEM!",unlockedDescription:"You weren't really sure what you needed so you uncritically purchased any suggestions provided by the sales rep at home depot and donated a few dollars to their charity of choice.",available:!0,owned:!1,aquisitionCost:93,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:0,value:1,repurchaseable:!1,condition:function(e){return e.money>100},morality:0},{name:'Performance-Enhancing, Perfectly Legal "Energy Drink"',type:"clickProduction",lockedDescription:"Try this totally above board, definitely not made of questionable materials, beverage and tackle your work like a champion!",unlockedDescription:"You are now fueled by the raw power of clickbait superfruit and bull testosterone. Look at you go.",available:!1,owned:!1,aquisitionCost:15,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:0,value:2,repurchaseable:!1,condition:function(e){return e.money>20&&e.clickedDirtRate>0},morality:0},{name:"Child Laborers",type:"staff",lockedDescription:"Your business model has proven successful enough to buy your friends drinks once in a while. But to expand you're going to need some extra hands, attached to people. Preferably cheap ones. What's your stance on child labor?",unlockedDescription:"You have recruited the neighborhood kids to work on your dirt farm for a mere pittance. You're immoral but don't let anyone tell you you're ineffective.",available:!1,owned:!1,aquisitionCost:20,acquisitionCurrency:"goodDirt",intervalCost:1,count:0,capacity:4,value:2,repurchaseable:!0,condition:function(e){return e.maxGoodDirt>30},morality:-5},{name:"Smelly Teenagers",type:"staff",lockedDescription:"They smell bad, but you pay them minimum wage.",unlockedDescription:"They won't be able to put themselves through college on their paychecks, but they might be able to put themselves through a shower once in a while.",available:!1,owned:!1,aquisitionCost:0,acquisitionCurrency:"money",intervalCost:7,count:0,capacity:6,value:10,repurchaseable:!0,condition:function(e){return e.money>=600},morality:0},{name:"Professional Adults",type:"staff",lockedDescription:"More expensive to employ than teenagers and children, but more capable workers, more interesting conversationalists, and need to be able to pay their bills.",unlockedDescription:"",available:!1,owned:!1,aquisitionCost:0,acquisitionCurrency:"money",intervalCost:22,count:0,capacity:8,value:50,repurchaseable:!0,condition:function(e){return e.money>=1e4},morality:0},{name:"Automaton FarmBots",type:"staff",lockedDescription:"You don't have to pay robots, they don't have dreams or families to feed. Now if only there was some way to automate the technicians...",unlockedDescription:"You've taken the first step towards a Star Trek utopia by purchasing robots so your human employees can focus on pursuing their passions!",available:!1,owned:!1,aquisitionCost:2e4,acquisitionCurrency:"money",intervalCost:1,count:0,capacity:6,value:40,repurchaseable:!0,condition:function(e){return e.money>=5e4},morality:0},{name:"Small Box.",type:"shippingContainer",lockedDescription:"Small Po- err BOX. Small Box. That's what I said.",unlockedDescription:"A rusty iron swor- wait a second...",available:!1,owned:!0,aquisitionCost:0,acquisitionCurrency:"You found this on a dead guard.",intervalCost:1,count:0,capacity:10,value:0,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=20},morality:0},{name:"Bucket",type:"shippingContainer",lockedDescription:"In order to sell dirt effectively you need to be able to transport it. Arrange for a bucket supplier.",unlockedDescription:"Buckets can hold 20 units of dirt.",available:!1,owned:!1,aquisitionCost:50,acquisitionCurrency:"money",intervalCost:2,count:0,capacity:25,value:0,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=100},morality:0},{name:"Coffin",type:"shippingContainer",lockedDescription:"Need to spice up your dirt shipping business? Consider shipping in converted luxury coffins, you freaky thing.",unlockedDescription:"For your fabulously wealthy and financially irresponsible customers",available:!1,owned:!1,aquisitionCost:1e4,acquisitionCurrency:"money",intervalCost:50,count:0,capacity:800,value:1e3,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=200&&e.morality<30},morality:-25},{name:"Medium Sized Box",type:"shippingContainer",lockedDescription:"Selling dirt in small batches is starting to feel a lot like work. Ship in Medium Sized Boxes and reap all the health benefits.",unlockedDescription:"It's like a small box only bigger.",available:!1,owned:!1,aquisitionCost:300,acquisitionCurrency:"money",intervalCost:3,count:0,capacity:100,value:0,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=200},morality:0},{name:"Organic Matter Shipping Box",type:"shippingContainer",lockedDescription:"Specifically designed to transport hundreds of dead ladybugs, seeds, and sure, why not soil?",unlockedDescription:"This box improves the overall presentation of your product by preventing your customers from receiving soggy, moldy carboard.",available:!1,owned:!1,aquisitionCost:5e3,acquisitionCurrency:"money",intervalCost:75,count:0,capacity:1e3,value:100,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=500},morality:0},{name:"Shipping Crate",type:"shippingContainer",lockedDescription:"FedEx just isn't doing it for you anymore. It's time to make like Curtis Mayfield and move on up.",unlockedDescription:"A Crate distinguishes itself from a box through its choice of attire, hairstyle, and bodily decorations because their personalities are essentially identical.",available:!1,owned:!1,aquisitionCost:3e4,acquisitionCurrency:"money",intervalCost:150,count:0,capacity:7500,value:0,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=1e4},morality:0},{name:"20ft Ventilated Shipping Container",type:"shippingContainer",lockedDescription:"Set up a large scale shipping contract. You'll be using the big kid stuff now. Good on ye, m8.",unlockedDescription:"Ship massive quantities of dirt internationally in the Rolls Royce of containers.",available:!1,owned:!1,aquisitionCost:9e4,acquisitionCurrency:"money",intervalCost:2300,count:0,capacity:33200,value:200,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>=5e4},morality:0},{name:"Zoning Permit",type:"propertyExpansion",lockedDescription:"Your yard is already too small. Maybe the nice folks on the zoning board will let you remove your trees and shed to increase farming space.",unlockedDescription:"After some bribery, you were granted a permit to clear cut your lawn #forgreatergood. Good thing the bribes were cheap.",available:!1,owned:!1,aquisitionCost:200,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:20,value:0,repurchaseable:!1,condition:function(e){return e.money>40&&e.clickedDirtRate>0},morality:-5},{name:"The Vacant Lot Behind Your House",type:"propertyExpansion",lockedDescription:"Time to expand. Westard! Kindly leave your smallpox at home, though.",unlockedDescription:"You now own the grubby lot behind your house. You can make more dirt!",available:!1,owned:!1,aquisitionCost:500,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:100,value:0,repurchaseable:!1,condition:function(e){return e.money>=200&&e.maxGoodDirt>30},morality:5},{name:"Your Jerk Neighbor's House",type:"propertyExpansion",lockedDescription:"Reginald was always rubbing his success in your face. Exploit eminent domain law by working with the government so you can buy that pompous twit's house out from under him.",unlockedDescription:"You payed well below market value to force a neighbor you don't like to move his family into a motel for a few months. I call that a win.",available:!1,owned:!1,aquisitionCost:2e3,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:300,value:0,repurchaseable:!1,condition:function(e){return e.money>=1e4},morality:-10},{name:"Miscellaneous Lots",type:"propertyExpansion",lockedDescription:"Nobody is using these for anything productive. This seems a golden opportunity for an enterprising dirt farmer!",unlockedDescription:"More dirt!",available:!1,owned:!1,aquisitionCost:3e3,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:200,value:0,repurchaseable:!0,condition:function(e){return e.money>=2e3},morality:5},{name:"Great Big Tract of Land",type:"propertyExpansion",lockedDescription:"Previously a family owned farm, now a totally purchaseable property.",unlockedDescription:"Land reclaimed by nature has now been reclaimed by you. Good job, Dirt Farmer.",available:!1,owned:!1,aquisitionCost:1e4,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:750,value:0,repurchaseable:!0,condition:function(e){return e.money>=35e3},morality:35},{name:"Regional Supplier Facility",type:"propertyExpansion",lockedDescription:"Set up shop in a new area, ship dirt smaller distances, think about the ramifications later!",unlockedDescription:"Your shipping costs have been reduced, but your rent has become substantial.",available:!1,owned:!1,aquisitionCost:5e4,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:15e3,value:0,repurchaseable:!0,condition:function(e){return e.maxGoodDirt>=2e4},morality:-20},{name:"Neighborhood Compost Initiative",type:"dirtQuality",lockedDescription:"Convince your neighbors to throw their rotten food on your lawn.",unlockedDescription:"Either your neighbors aren't fond of you or they got sick of dumping rotten food on their own lawns.",available:!1,owned:!1,aquisitionCost:0,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:0,value:1,repurchaseable:!1,condition:function(e){return e.morality<0},morality:0},{name:"Cadaviar",type:"dirtQuality",lockedDescription:"Social norms haven't shifted on the subject of recycling dead bodies, but you won't let that stop you.",unlockedDescription:"It wasn't your friend in the wood chipper, but it was probably somebody's friend.",available:!1,owned:!1,aquisitionCost:0,acquisitionCurrency:"money",intervalCost:0,count:0,capacity:0,value:2,repurchaseable:!1,condition:function(e){return e.maxGoodDirt>1e3},morality:50}]),C=k,w={morality:0,timer:null,timerRunning:!1,maxGoodDirt:30,passiveDirtRate:0,clickedDirtRate:0,laborCost:0,dirtUnitPrice:1,money:100,goodDirt:0},x=w;n["a"].use(c["a"]);var q=new c["a"].Store({state:{baseValues:x,morality:x.morality,timer:x.timer,timerRunning:x.timerRunning,maxGoodDirt:x.maxGoodDirt,passiveDirtRate:x.passiveDirtRate,clickedDirtRate:x.clickedDirtRate,laborCost:x.laborCost,dirtUnitPrice:x.dirtUnitPrice,money:x.money,goodDirt:x.goodDirt,upgrades:C,upgradeUnlockAlertDisplay:!1},mutations:{incrementClicked:function(e){e.goodDirt<e.maxGoodDirt&&(e.goodDirt+e.clickedDirtRate>e.maxGoodDirt?e.goodDirt=e.maxGoodDirt:e.goodDirt+=e.clickedDirtRate)},updateClickedDirtRate:function(e,t){e.clickedDirtRate=t},updatePassiveDirtRate:function(e,t){e.passiveDirtRate=t},updateLaborCost:function(e,t){e.laborCost=t},updateMorality:function(e,t){e.morality=t},updateDirtUnitPrice:function(e,t){e.dirtUnitPrice=t},updateMaxDirt:function(e,t){e.maxGoodDirt=t},updateOnTick:function(e){e.money>e.laborCost?e.goodDirt<e.maxGoodDirt&&(e.money-=e.laborCost,e.goodDirt+e.passiveDirtRate>e.maxGoodDirt?e.goodDirt=e.maxGoodDirt:e.goodDirt+=e.passiveDirtRate):console.log("You can't afford to pay your employees.")},displayUpgradeAlert:function(e,t){console.log("NEW UPGRADES AVAILABLE"),e.upgradeUnlockAlertDisplay=t},unlockUpgrades:function(e,t){t.map(function(e){return e.available=!0})},buyUpgrade:function(e,t){e[t.acquisitionCurrency]>=t.aquisitionCost?(t.owned=!0,t.count+=1,t.repurchaseable||(t.available=!1),e[t.acquisitionCurrency]-=t.aquisitionCost):console.log("You don't have enough currency to buy that.")},reduceCount:function(e,t){t.count>0&&t.count--},sellDirt:function(e,t){t.capacity<=e.goodDirt?(e.goodDirt-=t.capacity,e.money+=t.capacity*e.dirtUnitPrice+t.value):console.log("You don't have enough good dirt to fill that order.")},setTimer:function(e,t){e.timer=t,e.timerRunning=!0},stopTimer:function(e){console.log(e.timer),clearInterval(e.timer),e.timer=null,e.timerRunning=!1},testCondition:function(e,t){console.log("Test Condition Mutation: "),t.condition(e)&&console.log("The condition is: "+t.condition(e))}},actions:{testCondition:function(e,t){e.commit("testCondition",t)},genericDispatch:function(e,t){null==t.payload?e.commit(t.mutation):e.commit(t.mutation,t.payload)},updateAll:function(e){e.commit("updateClickedDirtRate",e.getters.dirtPerClick),e.commit("updatePassiveDirtRate",e.getters.dirtPerTick),e.commit("updateLaborCost",e.getters.laborCostPerTick),e.commit("updateMorality",e.getters.getMorality),e.commit("updateDirtUnitPrice",e.getters.genericFilteredGetter("dirtQuality","value","dirtUnitPrice")),e.commit("updateMaxDirt",e.getters.genericFilteredGetter("propertyExpansion","capacity","maxGoodDirt"))},sellDirt:function(e,t){e.commit("sellDirt",t)},buyUpgrade:function(e,t){e.commit("buyUpgrade",t),e.dispatch("updateAll")},reduceCount:function(e,t){e.commit("reduceCount",t),e.dispatch("updateAll")},startTimer:function(e){if(e.state.timerRunning)console.log("Timer already started.");else{var t=setInterval(function(){e.commit("updateOnTick"),e.dispatch("checkForUnlockableUpgrades")},1e3);e.commit("setTimer",t)}},checkForUnlockableUpgrades:function(e){var t=e.getters.lockedUpgrades();t.length>0&&(e.commit("unlockUpgrades",t),e.commit("displayUpgradeAlert",!0),setTimeout(function(){e.commit("displayUpgradeAlert",!1)},3e3))}},getters:{calcProfit:function(e){return function(t){return t.capacity*e.dirtUnitPrice+t.value-t.intervalCost}},getMorality:function(e,t){return t.ownedUpgrades.reduce(function(e,t){return t.morality*t.count+e},0)},laborCostPerTick:function(e,t){return t.hiredStaff.reduce(function(e,t){return t.intervalCost*t.count+e},0)},dirtPerClick:function(e,t){return t.ownedUpgrades.filter(function(e){return e.type.includes("clickProduction")}).reduce(function(e,t){return t.value*t.count+e},0)},dirtPerTick:function(e,t){return t.hiredStaff.reduce(function(e,t){return t.value*t.count+e},0)},genericFilteredGetter:function(e,t){return function(o,n,i){var r=t.ownedUpgrades.filter(function(e){return e.type==o});return r.length>0?(r=r.reduce(function(e,t){return t[n]*t.count+e},0),r+e.baseValues[i]):e[i]}},shippingContainers:function(e,t){var o=t.ownedUpgrades;return o.filter(function(e){return"shippingContainer"==e.type})},hiredStaff:function(e,t){var o=t.ownedUpgrades;return o.filter(function(e){return"staff"==e.type})},lockedUpgrades:function(e,t){return function(){var o=t.upgradesNotOwnedOrAvailable;return o=o.filter(function(t){return 1==t.condition(e)}),o}},upgradesNotOwnedOrAvailable:function(e){return e.upgrades.filter(function(e){return!e.owned&&!e.available})},availableUpgrades:function(e){return e.upgrades.filter(function(e){return e.available})},ownedUpgrades:function(e){return e.upgrades.filter(function(e){return e.owned})},stateForSave:function(e,t){var o=t.ownedUpgrades.map(function(e){return{name:e.name,available:e.available,owned:e.owned,count:e.count}});return{id:null,money:e.money,goodDirt:e.goodDirt,upgrades:o}}}});n["a"].config.productionTip=!1,new n["a"]({router:D,store:q,render:function(e){return e(p)}}).$mount("#app")},"5c48":function(e,t,o){},"7c55":function(e,t,o){"use strict";var n=o("5c48"),i=o.n(n);i.a},d8df:function(e,t,o){"use strict";var n=o("e8c8"),i=o.n(n);i.a},e8c8:function(e,t,o){}});
//# sourceMappingURL=app.e6ed0945.js.map