(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9748"],{"58e4":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-row",[i("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("创建")])],1),e._v(" "),i("el-card",{staticStyle:{"margin-top":"10px"}},[i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.ListData,"row-key":"id"}},[i("el-table-column",{attrs:{prop:"name",label:"快递公司名称",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"code100",label:"快递公司编码",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"activity",label:"状态",formatter:e.fmtBoolean,sortable:""}}),e._v(" "),i("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])},[i("template",{slot:"header"},[i("span",[e._v("操作")])])],2)],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,width:"30%","before-close":e.handleClose,"modal-append-to-body":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{attrs:{"label-position":"top","label-width":"80px",model:e.formLabelAlign}},[i("el-form-item",{attrs:{label:"快递公司名称"}},[i("el-input",{model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"快递公司编码"}},[i("el-input",{model:{value:e.formLabelAlign.code100,callback:function(t){e.$set(e.formLabelAlign,"code100",t)},expression:"formLabelAlign.code100"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设置禁用启用",prop:"formLabelAlign.activity"}},[i("el-radio-group",{model:{value:e.formLabelAlign.activity,callback:function(t){e.$set(e.formLabelAlign,"activity",t)},expression:"formLabelAlign.activity"}},[i("el-radio",{attrs:{label:!0}},[e._v("启用")]),e._v(" "),i("el-radio",{attrs:{label:!1}},[e._v("禁用")])],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.updateDeliveryCompany}},[e._v("确 定")])],1)],1)],1)},n=[],l=(i("96cf"),i("3b8d")),o=(i("7f7f"),{data:function(){return{dialogVisible:!1,formLabelAlign:{id:null,name:"",code100:"",activity:!0},isCreate:!1}},computed:{ListData:function(){return this.$store.state.delivery.deliveryCompanyList}},watch:{ListData:function(e,t){console.log(e),console.log(t)}},created:function(){this.load()},methods:{fmtBoolean:function(e,t,i){var a="";return a=i?"启用":"禁用",a},load:function(){this.$store.dispatch("delivery/getDeliveryCompanyList")},handleCreate:function(){this.isCreate=!0,this.dialogVisible=!0,this.formLabelAlign.id=null,this.formLabelAlign.name="",this.formLabelAlign.code100="",this.formLabelAlign.activity=!0},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},handleEdit:function(e,t){this.formLabelAlign.id=t.id,this.formLabelAlign.name=t.name,this.formLabelAlign.code100=t.code100,this.formLabelAlign.activity=t.activity,this.isCreate=!1,this.dialogVisible=!0},handleDelete:function(e,t){var i=this;this.$confirm("确认删除？").then(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i,e.next=3,i.$store.dispatch("delivery/deleteDeliveryCompany",t.id).then((function(){n.load(),n.$message({type:"success",message:"删除成功!"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}))},updateDeliveryCompany:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isCreate){e.next=6;break}return e.next=3,this.$store.dispatch("delivery/saveDeliveryCompany",this.formLabelAlign);case 3:this.$message({type:"success",message:"创建成功!"}),e.next=9;break;case 6:return e.next=8,this.$store.dispatch("delivery/saveDeliveryCompany",this.formLabelAlign);case 8:this.$message({type:"success",message:"修改成功!"});case 9:t=this,setTimeout((function(){t.load()}),500),this.dialogVisible=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),r=o,s=i("2877"),c=Object(s["a"])(r,a,n,!1,null,null,null);t["default"]=c.exports}}]);