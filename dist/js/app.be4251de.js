(function(){"use strict";var t={986:function(t,e,n){var o=n(963),i=n(252);const s={class:"app-links"},r=(0,i.Uk)("New"),a=(0,i.Uk)("See All");function u(t,e,n,o,u,m){const c=(0,i.up)("router-link"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i.Wm)(c,{class:"link",to:"/"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(c,{class:"link",to:"/notes"},{default:(0,i.w5)((()=>[a])),_:1})]),(0,i.Wm)(l)],64)}var m={name:"App",methods:{addItem(t){this.$store.commit("addItem",t)},deleteItem(t){this.$store.commit("deleteItem",t)},taskDone(t){this.$store.commit("changeItemDoneState",t)}}},c=n(744);const l=(0,c.Z)(m,[["render",u]]);var d=l,p=n(907);const h=(0,p.MT)({state(){if(localStorage.getItem("items")){const t=JSON.parse(localStorage.getItem("items"));return{items:t}}return{items:[]}},mutations:{addItem(t,e){t.items.push({text:e,isDone:!1}),f(t.items)},deleteItem(t,e){t.items.splice(e,1),f(t.items)},changeItemDoneState(t,e){t.items[e].isDone=!t.items[e].isDone,f(t.items)},changeItemText(t,e){t.items[e.index].text=e.itemText,f(t.items)}}});function f(t){const e=JSON.stringify(t);localStorage.setItem("items",e)}const v={class:"main"};function x(t,e,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("form",null,[(0,i.wy)((0,i._)("input",{type:"text",maxlength:"30",placeholder:"Покормить кота?","onUpdate:modelValue":e[0]||(e[0]=t=>r.inputText=t)},null,512),[[o.nr,r.inputText]]),(0,i._)("button",{type:"submit",onClick:e[1]||(e[1]=(0,o.iM)(((...t)=>a.addNote&&a.addNote(...t)),["prevent"]))},"Add note")])])}var g={name:"MyComponent",data(){return{inputText:""}},methods:{addNote(){this.$store.commit("addItem",this.inputText),this.inputText=""}}};const I=(0,c.Z)(g,[["render",x],["__scopeId","data-v-4798b5d4"]]);var k=I;const D={class:"list"};function w(t,e,n,o,s,r){const a=(0,i.up)("TodoList");return(0,i.wg)(),(0,i.iD)("div",D,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.$store.state.items,((t,e)=>((0,i.wg)(),(0,i.j4)(a,{key:e,text:t.text,isDone:t.isDone,listIndex:e,onDeleteItem:t=>r.deleteItem(e),onTaskDone:t=>r.taskDone(e)},null,8,["text","isDone","listIndex","onDeleteItem","onTaskDone"])))),128))])}var T=n(577);const b=(0,i.Uk)("✔"),y=(0,i.Uk)("✏");function _(t,e,n,o,s,r){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",{class:(0,T.C_)(["todo-item",n.isDone?"active":""])},[n.isDone?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[b],64)):(0,i.kq)("",!0),(0,i._)("p",null,(0,T.zw)(n.text),1),(0,i.Wm)(a,{class:"button",to:"/notes/"+n.listIndex},{default:(0,i.w5)((()=>[y])),_:1},8,["to"]),(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>r.taskDone&&r.taskDone(...t))},"✔"),(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>r.deleteItem&&r.deleteItem(...t))},"X")],2)}var $={name:"TodoList",props:["text","isDone","listIndex"],methods:{deleteItem(){this.$emit("deleteItem")},taskDone(){this.$emit("taskDone")}}};const O=(0,c.Z)($,[["render",_],["__scopeId","data-v-3dfb95b7"]]);var C=O,N={name:"ComputedList",components:{TodoList:C},methods:{addItem(t){this.$store.commit("addItem",t)},deleteItem(t){this.$store.commit("deleteItem",t)},taskDone(t){this.$store.commit("changeItemDoneState",t)}}};const S=(0,c.Z)(N,[["render",w]]);var j=S;const U={class:"single-note"};function Z(t,e,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",U,[(0,i._)("form",null,[(0,i.wy)((0,i._)("input",{type:"text",maxlength:"30","onUpdate:modelValue":e[0]||(e[0]=t=>r.inputText=t)},null,512),[[o.nr,r.inputText]]),(0,i._)("button",{type:"submit",onClick:e[1]||(e[1]=(0,o.iM)(((...t)=>a.changeNote&&a.changeNote(...t)),["prevent"]))},"Change note")])])}var L={name:"NoteChange",data(){return{inputText:""}},computed:{getText(){return this.$store.state.items[this.$route.params.id].text}},methods:{changeNote(){this.$store.commit("changeItemText",{index:this.$route.params.id,itemText:this.inputText})}},mounted(){this.inputText=this.getText}};const M=(0,c.Z)(L,[["render",Z]]);var W=M,A=n(201);const H=k,Y=j,J=[{path:"/",component:H},{path:"/notes",component:Y},{path:"/notes/:id",component:W}],P=A.p7({history:A.r5(),routes:J}),V=(0,o.ri)(d);V.use(h),V.use(P),V.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,s){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],s=t[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,s<r&&(r=s));if(a){t.splice(c--,1);var m=i();void 0!==m&&(e=m)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,i,s]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,r=o[0],a=o[1],u=o[2],m=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(e&&e(o);m<r.length;m++)s=r[m],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunkinitial"]=self["webpackChunkinitial"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(986)}));o=n.O(o)})();
//# sourceMappingURL=app.be4251de.js.map