(function(t){function n(n){for(var i,r,o=n[0],d=n[1],c=n[2],u=0,k=[];u<o.length;u++)r=o[u],e[r]&&k.push(e[r][0]),e[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);l&&l(n);while(k.length)k.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,n=0;n<a.length;n++){for(var s=a[n],i=!0,o=1;o<s.length;o++){var d=s[o];0!==e[d]&&(i=!1)}i&&(a.splice(n--,1),t=r(r.s=s[0]))}return t}var i={},e={app:0},a=[];function r(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,n,s){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(s,i,function(n){return t[n]}.bind(null,i));return s},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/page.todo/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var l=d;a.push([0,"chunk-vendors"]),s()})({0:function(t,n,s){t.exports=s("56d7")},"21a4":function(t,n,s){},3006:function(t,n,s){"use strict";var i=s("21a4"),e=s.n(i);e.a},"56d7":function(t,n,s){"use strict";s.r(n);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-app",[s("router-view")],1)},a=[],r={name:"App",data:function(){return{}}},o=r,d=s("2877"),c=s("6544"),l=s.n(c),u=s("7496"),k=Object(d["a"])(o,e,a,!1,null,null,null),h=k.exports;l()(k,{VApp:u["a"]});var p=s("f309");i["a"].use(p["a"]);var f=new p["a"]({icons:{iconfont:"mdi"}}),v=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-container",[s("v-card",{staticClass:"mx-auto current-container",attrs:{"max-width":"900"}},[s("v-toolbar",{attrs:{color:"pink",dark:""}},[s("v-toolbar-title",[t._v("Todo List")]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.showTaskCreate(n)}}},[s("v-icon",[t._v("mdi-plus")])],1),s("v-btn",{attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.showTaskPool(n)}}},[s("v-icon",[t._v("mdi-calendar-check-outline")])],1)],1),s("v-list",{staticClass:"current-list",attrs:{"two-line":""}},[s("v-list-item-group",{attrs:{multiple:"","active-class":"pink--text"}},[t._l(t.currentTasks,function(n,i){return[n.parentId?s("p",{key:"_"+n.id,staticClass:"parent-task-text"},[t._v(t._s(t.taskParentText(n.parentId)))]):t._e(),s("v-list-item",{key:n.id},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"text-left"},[s("span",[t._v(t._s(n.text))])])],1),s("v-list-item-action",{staticClass:"task-opts"},[s("v-btn",{attrs:{text:"",icon:"",small:"",color:"pink"},on:{click:function(s){return t.showTaskOpt(n)}}},[s("v-icon",[t._v("mdi-dots-vertical")])],1)],1)],1),i+1<t.tasks.length?s("v-divider",{key:i}):t._e()]})],2)],1)],1),s("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.showTaskOptDlg,callback:function(n){t.showTaskOptDlg=n},expression:"showTaskOptDlg"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[s("v-list",[s("v-subheader",[t._v("\n          Options\n        ")]),s("v-list-item-group",{attrs:{multiple:"",color:"primary"}},[s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showPickUpOpt(),expression:"showPickUpOpt()"}],on:{click:t.pickUpTask}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"pink"}},[t._v("mdi-flag")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Pick it")])],1)],1),s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showFinishOpt(),expression:"showFinishOpt()"}],on:{click:t.finishTask}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-check")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Finish")])],1)],1),s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showPrependOpt(),expression:"showPrependOpt()"}],on:{click:t.showTaskPrepend}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"purple"}},[t._v("mdi-lightbulb-on-outline")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Something first")])],1)],1),s("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.showNextTimeOpt(),expression:"showNextTimeOpt()"}],on:{click:t.putBackTask}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"orange"}},[t._v("mdi-keyboard-return")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Next time")])],1)],1),s("v-list-item",{on:{click:t.showTaskEdit}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-lead-pencil")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Edit")])],1)],1),s("v-list-item",{on:{click:t.deleteTask}},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"red"}},[t._v("mdi-close")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.showTaskEditDlg,callback:function(n){t.showTaskEditDlg=n},expression:"showTaskEditDlg"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline",domProps:{textContent:t._s(t.taskEditDlgHeadline)}})]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{label:t.taskEditDlgLabel,rows:"1","prepend-icon":"mdi-calendar-check-outline"},model:{value:t.onEditTaskText,callback:function(n){t.onEditTaskText=n},expression:"onEditTaskText"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{items:t.RootTasks,hint:"Parent Task","persistent-hint":"","prepend-icon":"mdi-nature"},model:{value:t.onEditTaskParentId,callback:function(n){t.onEditTaskParentId=n},expression:"onEditTaskParentId"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-checkbox",{attrs:{label:"Finish",disabled:""},model:{value:t.onEditTaskFinish,callback:function(n){t.onEditTaskFinish=n},expression:"onEditTaskFinish"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeTaskEditDlg}},[t._v("Close")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.confirmTaskEdit}},[t._v("Save")])],1)],1)],1),s("v-dialog",{staticClass:"task-pool",attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.showTaskPoolDlg,callback:function(n){t.showTaskPoolDlg=n},expression:"showTaskPoolDlg"}},[s("v-card",[s("v-toolbar",{staticClass:"mb-3",attrs:{dark:"",color:"pink"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:function(n){t.showTaskPoolDlg=!1,t.view="current"}}},[s("v-icon",[t._v("mdi-close")])],1),s("v-toolbar-title",[t._v("All Tasks")]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.showTaskCreate(n)}}},[s("v-icon",[t._v("mdi-plus")])],1)],1),t._l(t.tasks,function(n,i){return s("v-card",{key:i,staticClass:"task-card",class:t.taskCardClass(n),on:{click:function(s){return t.onClickTaskItem(n)}}},[s("v-card-text",{staticClass:"top-task-text"},[t._v("\n          "+t._s(n.text)+"\n        ")]),s("v-card-text",{staticClass:"task-text"},[s("p",[t._v("\n            "+t._s(t.topTaskText(n))+"\n            "),s("span",[t._v(t._s(t.progressText(n)))])])]),s("v-card-text",{staticClass:"task-children"},[t._l(n.child,function(n,i){return s("v-chip",{key:i,staticClass:"mx-1 my-2",class:t.taskClass(n),attrs:{left:"",outlined:"",label:"",color:"grey"},on:{click:function(s){return s.stopPropagation(),t.showTaskOpt(n)}}},[t._v("\n            "+t._s(n.text)+"\n          ")])}),s("v-chip",{staticClass:"mx-1 my-2 final",class:t.taskClass(n),attrs:{color:"grey",outlined:"",label:""},on:{click:function(s){return s.stopPropagation(),t.showTaskOpt(n)}}},[t._v("\n            "+t._s(n.text)+"\n          ")])],2)],1)})],2)],1)],1)},T=[],x=(s("ac6a"),s("7514"),s("20d6"),{data:function(){return{view:"current",showTaskOptDlg:!1,showTaskEditDlg:!1,showTaskPoolDlg:!1,taskEditDlgStatus:"create",onEditTaskText:"",onEditTaskParentId:"",onEditTaskFinish:!1,taskExpandIndex:null}},computed:{currentTasks:function(){return this.$store.getters.currentTasks},tasks:function(){return this.$store.state.tasks},RootTasks:function(){var t=this,n=this.$store.state.tasks.map(function(t){return{text:t.text,value:t.id}});return this.onEditTask&&(n=n.filter(function(n){return n.id==t.onEditTask.id})),n.unshift({text:"It's the final task",value:"na"}),n},taskEditDlgHeadline:function(){return"create"==this.taskEditDlgStatus?"Task Create":"prepend"==this.taskEditDlgStatus?"Task prepend":""},taskEditDlgLabel:function(){return"create"==this.taskEditDlgStatus?"Something plan to do":"prepend"==this.taskEditDlgStatus?"Something to do first":""},currentView:function(){return"current"==this.view}},methods:{showTaskOpt:function(t){this.onEditTask=t,this.showTaskOptDlg=!0},showTaskCreate:function(){this.onEditTask=null,this.onEditTaskText="",this.onEditTaskParentId="na",this.openTaskEditDlg("create")},showTaskPrepend:function(){this.onEditTaskText="",this.onEditTaskParentId=this.onEditTask.parentId||this.onEditTask.id,this.openTaskEditDlg("prepend")},showTaskEdit:function(){this.onEditTaskText=this.onEditTask.text,this.onEditTaskParentId=this.onEditTask.parentId||"na",this.openTaskEditDlg("edit")},confirmTaskEdit:function(){if("create"==this.taskEditDlgStatus){var t="na"!=this.onEditTaskParentId?this.onEditTaskParentId:"";this.$store.commit("taskCreate",{text:this.onEditTaskText,parentId:t,current:this.currentView})}if("edit"==this.taskEditDlgStatus){var n="na"!=this.onEditTaskParentId?this.onEditTaskParentId:"";this.$store.commit("taskUpdate",{id:this.onEditTask.id,parentId:this.onEditTask.parentId,text:this.onEditTaskText,updateParentId:n})}if("prepend"==this.taskEditDlgStatus){var s=this.onEditTask.parentId?this.onEditTask.parentId:this.onEditTask.id;this.$store.commit("taskPrepend",{parentId:s,originId:this.onEditTask.id,text:this.onEditTaskText})}this.closeTaskEditDlg()},pickUpTask:function(){this.$store.commit("taskPickUp",{id:this.onEditTask.id,parentId:this.onEditTask.parentId}),this.showTaskOptDlg=!1},finishTask:function(){this.$store.commit("taskFinish",{id:this.onEditTask.id,parentId:this.onEditTask.parentId,text:this.onEditTask.text}),this.showTaskOptDlg=!1},putBackTask:function(){this.$store.commit("taskPutBack",{id:this.onEditTask.id}),this.showTaskOptDlg=!1},deleteTask:function(){this.$store.commit("taskDelete",{id:this.onEditTask.id,parentId:this.onEditTask.parentId}),this.showTaskOptDlg=!1},openTaskEditDlg:function(t){this.taskEditDlgStatus=t,this.onEditTaskFinish=!!this.onEditTask&&this.onEditTask.finish,this.showTaskOptDlg=!1,this.showTaskEditDlg=!0},closeTaskEditDlg:function(){this.showTaskEditDlg=!1},showTaskPool:function(){this.showTaskPoolDlg=!0,this.view="taskPool"},onClickTaskItem:function(t){t.child&&t.child.length>0?this.taskExpandIndex=this.taskExpandIndex==t.id?null:t.id:this.showTaskOpt(t)},taskClass:function(t){var n={};t.child&&t.child.length>0&&(n["has-child"]=!0,t.child.findIndex(function(t){return 1!=t.finish})>=0&&(n["has-todo-child"]=!0)),t.finish&&(n["finish"]=!0);var s=this.currentTasks.findIndex(function(n){return n.id==t.id});return s>=0&&(n["in-current-list"]=!0),n},taskCardClass:function(t){var n=this.taskClass(t);return t.id==this.taskExpandIndex&&(n.expand=!0),n},topTaskText:function(t){if(t.child&&t.child.length>0){var n=t.child.find(function(t){return 1!=t.finish});return n?n.text:t.text}return t.text},progressText:function(t){if(t.child&&t.child.length>0){var n=0;return t.child.forEach(function(t){1==t.finish&&(n+=1)}),1==t.finish&&(n+=1),n+"/"+(t.child.length+1)}return""},taskParentText:function(t){var n=this.tasks.find(function(n){return n.id==t});return n.text},showNextTimeOpt:function(){return"current"==this.view},showFinishOpt:function(){if(!this.onEditTask||this.onEditTask.finish)return!1;if(this.onEditTask.child&&this.onEditTask.child.length>0){var t=this.onEditTask.child.find(function(t){return 1!=t.finish});if(t)return!1}return!0},showPickUpOpt:function(){var t=this;if("current"==this.view)return!1;if(!this.showFinishOpt())return!1;var n=this.currentTasks.findIndex(function(n){return n.id==t.onEditTask.id});return!(n>=0)},showPrependOpt:function(){return this.onEditTask&&1!=this.onEditTask.finish}},watch:{},mounted:function(){this.$store.commit("init")}}),m=x,I=(s("8dbf"),s("8336")),g=s("b0af"),E=s("99d9"),w=s("ac7c"),b=s("cc20"),_=s("a523"),P=s("169a"),D=s("ce7e"),C=s("0e8f"),O=s("132d"),y=s("a722"),S=s("8860"),V=s("da13"),J=s("1800"),$=s("5d23"),F=s("1baa"),j=s("34c3"),B=s("b974"),L=s("2fa4"),N=s("e0c7"),U=s("a844"),A=s("71d9"),M=s("2a7f"),H=Object(d["a"])(m,v,T,!1,null,"71672036",null),R=H.exports;l()(H,{VBtn:I["a"],VCard:g["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VCheckbox:w["a"],VChip:b["a"],VContainer:_["a"],VDialog:P["a"],VDivider:D["a"],VFlex:C["a"],VIcon:O["a"],VLayout:y["a"],VList:S["a"],VListItem:V["a"],VListItemAction:J["a"],VListItemContent:$["a"],VListItemGroup:F["a"],VListItemIcon:j["a"],VListItemTitle:$["b"],VSelect:B["a"],VSpacer:L["a"],VSubheader:N["a"],VTextarea:U["a"],VToolbar:A["a"],VToolbarTitle:M["a"]});var G=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-container",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"900"}},[s("v-textarea",{attrs:{outlined:"",label:"tasks json"},model:{value:t.tasksJson,callback:function(n){t.tasksJson=n},expression:"tasksJson"}}),s("v-textarea",{attrs:{outlined:"",label:"index json"},model:{value:t.indexJson,callback:function(n){t.indexJson=n},expression:"indexJson"}}),s("v-btn",{attrs:{text:"",color:"pink",dark:""},on:{click:t.save}},[t._v("save")])],1)],1)},q=[],z={data:function(){return{tasksJson:"",indexJson:""}},computed:{},methods:{save:function(){localStorage.setItem("tasks",this.tasksJson),localStorage.setItem("currentTaskIndex",this.indexJson)}},watch:{},mounted:function(){this.$store.commit("init"),this.tasksJson=localStorage.getItem("tasks"),this.indexJson=localStorage.getItem("currentTaskIndex")}},K=z,Q=(s("3006"),Object(d["a"])(K,G,q,!1,null,"2ce3cf2c",null)),W=Q.exports;l()(Q,{VBtn:I["a"],VCard:g["a"],VContainer:_["a"],VTextarea:U["a"]});var X=s("2f62"),Y=(s("55dd"),{save:function(t,n){localStorage.setItem(t,JSON.stringify(n))},load:function(t){var n=JSON.parse(localStorage.getItem(t))||[];return"tasks"==t&&n.forEach(function(t){t.child=t.child||[]}),console.log(n),n},guid:function(){return""+Date.now()},getTask:function(t,n,s){if(s){var i=t.find(function(t){return t.id==s});if(i)return i.child.find(function(t){return t.id==n})}return t.find(function(t){return t.id==n})},addTask:function(t,n){if(n.parentId){var s=t.find(function(t){return t.id==n.parentId});s.child=s.child||[],s.child.unshift(n),Y.sortTasksByStatus(s.child,"child")}else t.unshift(n),Y.sortTasksByStatus(t)},updateTask:function(t,n,s){var i=null,e=0,a=null;if(n.parentId?(i=t.find(function(t){return t.id==n.parentId}),e=i.child.findIndex(function(t){return t.id==n.id}),a=i.child[e]):(e=t.findIndex(function(t){return t.id==n.id}),a=t[e]),a.text=n.text,void 0!==n.finish&&(a.finish=n.finish),i?Y.sortTasksByStatus(i.child,"child"):Y.sortTasksByStatus(t),n.updateParentId){var r=t.find(function(t){return t.id==n.updateParentId});a=i?i.child.splice(e,1):t.splice(e,1),a=a[0],a.parentId=n.updateParentId;var o=s.find(function(t){return t.id==n.id});o.parentId=a.parentId,Y.save("currentTaskIndex",s),r.child=r.child||[],r.child.unshift(a),Y.sortTasksByStatus(r.child,"child")}},deleteTask:function(t,n){if(n.parentId){var s=t.find(function(t){return t.id==n.parentId}),i=s.child.findIndex(function(t){return t.id==n.id});i>=0&&s.child.splice(i,1)}else{var e=t.findIndex(function(t){return t.id==n.id});e>=0&&t.splice(e,1)}},sortTasksByStatus:function(t,n){var s=n?1:-1;t.sort(function(t,n){var i=t.finish?0:s,e=n.finish?0:s;return i-e})},clearCurrentIndex:function(t,n){var s=n.length;return n=n.filter(function(n){var s=Y.getTask(t,n.id,n.parentId);return!s.finish}),s!=n.length&&Y.save("currentTaskIndex",n),n}}),Z=Y;i["a"].use(X["a"]);var tt=new X["a"].Store({state:{currentTaskIndex:[],tasks:[]},getters:{currentTasks:function(t){return t.currentTaskIndex.map(function(n){return Z.getTask(t.tasks,n.id,n.parentId)})}},mutations:{init:function(t){t.currentTaskIndex=Z.load("currentTaskIndex"),t.tasks=Z.load("tasks")},taskCreate:function(t,n){var s={id:Z.guid(),parentId:n.parentId||"",text:n.text};Z.addTask(t.tasks,s),Z.save("tasks",t.tasks),n.current&&(t.currentTaskIndex.unshift({id:s.id,parentId:s.parentId}),Z.save("currentTaskIndex",t.currentTaskIndex))},taskUpdate:function(t,n){Z.updateTask(t.tasks,n,t.currentTaskIndex),Z.save("tasks",t.tasks),void 0!==n.finish&&(t.currentTaskIndex=Z.clearCurrentIndex(t.tasks,t.currentTaskIndex),Z.save("currentTaskIndex",t.currentTaskIndex))},taskPrepend:function(t,n){var s=Z.getTask(t.tasks,n.parentId);if(s){s.child=s.child||[];var i={id:Z.guid(),parentId:s.id,text:n.text};s.child.unshift(i),Z.sortTasksByStatus(s.child,"finishAtHead"),Z.save("tasks",t.tasks);var e=t.currentTaskIndex.findIndex(function(t){return t.id==n.originId});e>=0&&(t.currentTaskIndex.splice(e,1,{id:i.id,parentId:i.parentId}),Z.save("currentTaskIndex",t.currentTaskIndex))}},taskPickUp:function(t,n){t.currentTaskIndex.unshift({id:n.id,parentId:n.parentId}),Z.save("currentTaskIndex",t.currentTaskIndex)},taskFinish:function(t,n){n.finish=!0,Z.updateTask(t.tasks,n,t.currentTaskIndex),Z.save("tasks",t.tasks),t.currentTaskIndex=Z.clearCurrentIndex(t.tasks,t.currentTaskIndex),Z.save("currentTaskIndex",t.currentTaskIndex)},taskPutBack:function(t,n){var s=t.currentTaskIndex.findIndex(function(t){return t.id==n.id});s>=0&&t.currentTaskIndex.splice(s,1),Z.save("currentTaskIndex",t.currentTaskIndex)},taskDelete:function(t,n){Z.deleteTask(t.tasks,n),Z.save("tasks",t.tasks);var s=t.currentTaskIndex.findIndex(function(t){return t.id==n.id});s>=0&&t.currentTaskIndex.splice(s,1),Z.save("currentTaskIndex",t.currentTaskIndex)}},actions:{}}),nt=tt,st=s("8c4f");i["a"].config.productionTip=!1,i["a"].use(st["a"]);var it=new st["a"]({routes:[{path:"/",component:R},{path:"/backdoor",component:W}]});new i["a"]({vuetify:f,router:it,store:nt,render:function(t){return t(h)}}).$mount("#app")},"8dbf":function(t,n,s){"use strict";var i=s("9760"),e=s.n(i);e.a},9760:function(t,n,s){}});