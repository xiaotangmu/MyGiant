<template>
  <el-container>
    <el-aside class=" bottom" width="300px" height="100%">
      <div>
        <el-button>默认按钮</el-button>
        <el-button class="Hello" type="primary" @click="printHtml">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>

      <div>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </div>

      <div>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </div>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </el-aside>
    <el-container>
      <el-header class="" height="50%">

      </el-header>
      <el-main class=" bottom" height="50%">
        <div class="row">
          <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable
              class="dragArea list-group"
              :list="list1"
              :group="{ name: 'people', pull: 'clone', put: false }"
              :clone="cloneDog"
              @change="log"
            >
              <div class="list-group-item" v-for="element in list1" :key="element.id">
                <dl v-html="element.name">
                </dl>
              </div>
            </draggable>
          </div>

          <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable
              class="dragArea list-group"
              :list="list2"
              group="people"
              @change="log"
            >
              <div class="list-group-item" v-for="element in list2" :key="element.id">
                {{ element.name }}
              </div>
            </draggable>
          </div>

          <rawDisplayer class="col-3" :value="list1" title="List 1" />

          <rawDisplayer class="col-3" :value="list2" title="List 2" />

          <mySlot :html="templateHtml"></mySlot>
///////////////////////////////////////
          <el-form :model="conforderform" ref="conforderform" label-width="100px" class="demo-ruleForm">

            <el-form-item label="上次所提议题" >
              <!-- 渲染问题列表 -->
              <section v-for="(value, index) in conforderform.lastquestions" :key="index">
                <section v-if="index === 0">
                  <el-row>
                    <el-col :span="15">
                      <el-input v-model="conforderform.lastquestions[index]" placeholder="请输入上次所提议题" clearable @keyup.enter.native="addlastitems(index, '1')"/>
                    </el-col>
                    <el-col :span="4">
                      <el-button type="primary" icon="el-icon-plus" plain style="margin-left:10px;" circle @click="addlastitems(index, '1')"/>
                    </el-col>
                  </el-row>
                </section>
                <section v-if="index > 0">
                  <!-- 添加的子项目 -->
                  <el-row style="margin-top:10px;">
                    <el-col :span="15">
                      <el-input v-model="conforderform.lastquestions[index]" placeholder="请输入上次所提议题" clearable @keyup.enter.native="addlastitems(index, '1')"/>
                    </el-col>
                    <el-col :span="4">
                      <el-button type="danger" icon="el-icon-delete" plain style="margin-left:10px;" circle @click="rmlastitems(index, '1')"/>
                    </el-col>
                  </el-row>
                </section>
              </section>
            </el-form-item>
          </el-form>
          /////////////////////////////////////////////////////////
          <el-form :inline="true">
            <draggable v-model="filters" dragable="true" :move="getdata" @update="datadragEnd">
              <transition-group>
                <el-col :span="8" v-for="filter in filters" :key="filter.filterKey" style="margin-top: 5px">
                  <el-form-item :label="filter.name" >
                    <el-input v-model="filter.displayName" placeholder="请输入设置属性" @focus="openFilterDialog(filter)"></el-input>
                  </el-form-item>
                </el-col>
              </transition-group>
            </draggable>
            <fitlerdialog v-bind:visable=dialogObjectVisible v-bind:avtivefilter=avtivefilter v-on:on-filter-data-change="onFilterDataChange" v-on:filterdialogcancle="handleDialogObjectcancle" v-on:filterdialogclose="handleDialogObjectClose"></fitlerdialog>
          </el-form>
          ?//////////////////////////////////////////
          <el-dialog
            v-dialogDrag
            ref="dialog__wrapper">
            <div class="dialog-body">

              <div
                class="line"
                v-dialogDragWidth="$refs.dialog__wrapper"></div>
            </div>
          </el-dialog>
          /////////////////////////////////////////
          <draggable @update="datadragEnd" :options = "options" v-model="tableData" style='sort: false' >
            　　<transition-group >
            　　　　<el-checkbox @change="handleCheckedCitiesChange(item.id)" v-model="checkList" v-for="item in tableData" :key="item.id" :label="item.id" :disabled="isDisabled" >
            　　　　　　<img style="width:150px;height:150px;" :src="item.img" alt="" >
            　　　　</el-checkbox>
            　　</transition-group>
          </draggable>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import draggable from "vuedraggable";
import Sortable  from 'sortablejs';
import '../js/directives.js'
let idGlobal = 8;
export default {
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    Sortable,
    draggable,
    mySlot: {
      // template: `<div>{{myMessage}}</div>`,
      // 在 JavaScript 中使用 camelCase
      props: {
        html: String,
      },
      render(h) {
        const com = Vue.extend({
          template: this.html,
        });
        return h(com, {});
      },
    },
  },
  data() {
    return {
      // 会议预约提交表单
      conforderform: {
        confname: '', // 会议名称
        conflevel: '', // 会议级别
        confattrs: [], // 会议属性
        startdate: '', // 会议开始日期
        starttime: '', // 会议开始时间
        enddate: '', // 会议结束日期
        endtime: '', // 会议结束时间
        lastquestions: [''], // 上次所提议题
        curquesttions: [''], // 待解决的问题
        suggestions: [''] // 建议解决的方案
      },
      list1: [
        { name: "<el-button type=\"primary\">主要按钮</el-button>", id: 1 },
        { name: "<el-button type=\"success\">主要按钮</el-button>", id: 2 },
        { name: "<el-button type=\"warning\">主要按钮</el-button>", id: 3 },
        { name: "<el-button type=\"error\">主要按钮</el-button>", id: 4 }
      ],
      list2: [
        { name: "cat 5", id: 5 },
        { name: "cat 6", id: 6 },
        { name: "cat 7", id: 7 }
      ],
      templateHtml: `<el-button>hello</el-button>`
    };
  },
  methods: {
    printHtml(){
      alert()
      Console.log($(this).html());
    },
    getdata(evt) {
      console.log(evt.draggedContext.filterKey)
      //这里evt.draggedContext后续的内容根据具体的定义变量而定
    },
    datadragEnd(evt) {
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex);

      let filters = this.filters;
      for(let a=0;a<filters.length;a++){
        filters[a].index = a;
      }
      vm.report.filter = filters;

    },
    // 添加上次所提议题
    addlastitems(index, type) {
      if (type === '1') {
        const lastitem = this.conforderform.lastquestions[this.conforderform.lastquestions.length - 1]
        console.log('Hello')
        console.log(lastitem)
        console.log('hello')
        if (lastitem.trim() === '') {
          this.$message.error('请您填写完一项后继续追加')
        } else {
          console.log('aa')
          console.log(this.conforderform.lastquestions)
          this.conforderform.lastquestions.push('')
          console.log(this.conforderform.lastquestions)
        }
      } else if (type === '2') {
        const lastitem = this.conforderform.curquesttions[this.conforderform.curquesttions.length - 1]
        if (lastitem.trim() === '') {
          this.$message.error('请您填写完一项后继续追加')
        } else {
          this.conforderform.curquesttions.push('')
        }
      } else if (type === '3') {
        const lastitem = this.conforderform.suggestions[this.conforderform.suggestions.length - 1]
        if (lastitem.trim() === '') {
          this.$message.error('请您填写完一项后继续追加')
        } else {
          this.conforderform.suggestions.push('')
        }
      }
    },
    rmlastitems(index, type) {
      switch (type) {
        case '1':
          this.conforderform.lastquestions.splice(index, 1)
          break
        case '2':
          this.conforderform.curquesttions.splice(index, 1)
          break
        case '3':
          this.conforderform.suggestions.splice(index, 1)
          break
        default:
          break
      }
      this.$message.success('移除成功')
    },
    getdata(evt) {
      console.log(evt.draggedContext.filterKey)
      //这里evt.draggedContext后续的内容根据具体的定义变量而定
    },
    datadragEnd(evt) {
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex);

      let filters = this.filters;
      for(let a=0;a<filters.length;a++){
        filters[a].index = a;
      }
      vm.report.filter = filters;

    },
    getList(html) {
      this.templateHtml = html;
    },
    log: function(evt) {
      window.console.log(evt);
    },
    cloneDog({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*定义要拖拽元素的样式*/
  .ghostClass{
    background-color:  blue !important;
  }
  .chosenClass{
    background-color: red !important;
    opacity: 1!important;
  }
  .dragClass{
    background-color: blueviolet !important;
    opacity: 1 !important;
    box-shadow:none !important;
    outline:none !important;
    background-image:none !important;
  }
  .itxst{
    margin: 10px;

  }
  .title{
    padding: 6px 12px;
  }
  .col{
    width: 40%;
    flex: 1;
    padding: 10px;
    border: solid 1px #eee;
    border-radius:5px ;
    float: left;
  }
  .col+.col{
    margin-left: 10px;
  }

  .item{
    padding: 6px 12px;
    margin: 0px 10px 0px 10px;
    border:  solid 1px #eee;
    background-color: #f1f1f1;
  }
  .item:hover{
    background-color: #fdfdfd;
    cursor: move;
  }
  .item+.item{
    border-top:none ;
    margin-top: 6px;
  }
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 880px;
  line-height: 50px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
.bottom{
    bottom: 0;
  }
  .buttons {
    margin-top: 35px;
  }
  .row-v {
    height: 150px;
    width: 200px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
