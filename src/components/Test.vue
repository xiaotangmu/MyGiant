<template>

  <div class="row">
    <div class="col-3">
      <div id="main-box">
        <el-button id="hello" type="sucess" @click="test($event)">Hello</el-button>
      </div>
      <h3>Draggable 1</h3>
      <draggable @start="start" @end="end" class="list-group" :options="{group:{name: 'people',pull:'clone'},sort: true}" @change="log" >
        <el-button type="success" @click="test($event)">Hello</el-button>
        <el-button type="success" @click="test($event)">Hello2</el-button>
<!--        <dl v-for="(element, index) in list1"-->
<!--            :key="element.name" v-html="element.name"> </dl>-->
        <div v-for="(element, index) in list1"
             :key="element.name" >
          {{element.name}}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" @remove="move" :list="list2" @start="start" @end="end" group="people" @change="log" >
<!--        <transition-group>-->
<!--          <dl class="list-group-item"-->
<!--              v-for="(element, index) in list2"-->
<!--              :key="element.name" v-html="element.name"> </dl>-->
<!--        </transition-group>-->
        <div v-for="(element, index) in list2"
          :key="element.name" >
          {{element.name}}
        </div>
      </draggable>
    </div>
    /////////////////////////////////////////////////////////////////////
    <div>
      <!--使用draggable组件-->
      <div class="itxst">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
        <div class="col">
          <draggable v-model="arr1" @end="end1" :options="{group:{name: 'itxst',pull:'clone'},sort: true}"  animation="300" :move="onMove">
            <transition-group>
              <div :class="item.id==1?'item forbid':'item'" v-for="item in arr1" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
        </div>
        <div class="col">
          <draggable v-model="arr2"  @end="end" group="itxst"  animation="300" :move="move">
            <transition-group>
              <div :class="item.id==12?'item2 forbid':'item2'" v-for="item in arr2" :key="item.id">{{item.name}}</div>
            </transition-group>
          </draggable>
        </div>
      </div>

      ///////////////////////////////////////////////
      <div class="itxst">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
        <div class="col">
          <draggable :value="arr3" @end="end1" :options="{group:{name: 'itxst',pull:'clone'},sort: true}"  animation="300" :move="onMove">
            <transition-group>
                <dl v-for="item in arr3" :key="item.id" v-html="item.name"></dl>
<!--              <div :class="item.id==1?'item forbid':'item'" >-->
<!--              </div>-->

            </transition-group>
<!--            <el-button type="success" @click="test($event)">Hello</el-button>-->
<!--            <el-button type="success" @click="test($event)">Hello2</el-button>-->
          </draggable>
        </div>
        <div class="col">
          <draggable v-model="arr4"  @end="end" group="itxst"  animation="300">
            <transition-group>
<!--              <div :class="item.id==12?'item2 forbid':'item2'" v-for="item in arr4" :key="item.id">-->
<!--                <dl v-html="item.name"></dl>-->
<!--              </div>-->
              <dl v-for="item in arr4" :key="item.id" v-html="item.name"></dl>
            </transition-group>
          </draggable>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'Test',
    display: "Two Lists",
    order: 1,
    components: {
      draggable
    },
    data() {
      return {
        list: [],
        list1: [
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello1\"><!----><!----><span>Hello1</span></button>", id: 1 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello2\"><!----><!----><span>Hello2</span></button>", id: 2 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello3\"><!----><!----><span>Hello3</span></button>", id: 3 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello4\"><!----><!----><span>Hello4</span></button>", id: 4 }
        ],
        list2: [
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello1\"><!----><!----><span>Hello5</span></button>", id: 5 },
        ],
        //定义要被拖拽对象的数组
        arr1:[
          { id: 1, name: 'www.itxst.com（不允许停靠）' },
          { id: 2, name: 'www.jd.com' },
          { id: 3, name: 'www.baidu.com' },
          { id: 5, name: 'www.google.com' },
          { id: 4, name: 'www.taobao.com（不允许拖拽）' }
        ],
        arr2:[
          { id: 11, name: '常用菜单' },
        ],
        arr3: [
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello1\"><!----><!----><span>Hello1</span></button>", id: 1 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello2\"><!----><!----><span>Hello2</span></button>", id: 2 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello3\"><!----><!----><span>Hello3</span></button>", id: 3 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello4\"><!----><!----><span>Hello4</span></button>", id: 4 }
        ],
        arr4: [
          { name: "<p data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello1\"><!----><!----><span>Hello5</span></p>", id: 6 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello1\"><!----><!----><span>Hello5</span></button>", id: 5 },
        ],
        moveId:-1
      };
    },
    methods: {
      move(e){
        console.log(e.relatedContext)
        console.log(e.draggedContext)
        console.log('MOVE');
        return false;
      },
      start(){
        console.log('start');
        console.log(this.list1)
        console.log(this.list2)
        return false;
      },
      end(){
        console.log('end');
        return false;
      },
      //左边往右边拖动时的事件
      end1(e){
        console.log(e)
        var that=this;
        var  items=this.arr2.filter(function(m){
          return  m.id==that.moveId
        })
        //如果左边
        if(items.length<2) return;
        this.arr2.splice(e.newDraggableIndex, 1)
      },
      //右边往左边拖动时的事件
      end2(e){
        console.log('end')
        console.log(e)
        var that=this;
        var  items=this.arr1.filter(function(m){
          return  m.id==that.moveId
        })
        //如果左边
        if(items.length<2) return;
        this.arr1.splice(e.newDraggableIndex, 1)
      },
      //move回调方法
      onMove(e,originalEvent){
        console.log('Hello')
        console.log(e.relatedContext)
        console.log(e.draggedContext)
        this.moveId=e.relatedContext.element.id;
        //不允许停靠
        if (e.relatedContext.element.id == 1) return false;
        //不允许拖拽
        if (e.draggedContext.element.id == 4) return false;
        if (e.draggedContext.element.id == 11) return false;
        return true;
      },
      onMove2(e,originalEvent){
        console.log('Hello')
        this.drag=false;
        return false;
      },
      add: function(e) {
        console.log('Hello')
        this.list.push({ name: "Juan" });
      },
      replace: function() {
        this.list = [{ name: "Edgard" }];
      },
      clone: function(el) {
        return {
          name: el.name + " cloned"
        };
      },
      log: function(evt) {
        console.log('change')
        window.console.log(evt);
      },
      test: function(e){
        console.log($(e.currentTarget).prop('outerHTML'))
        $('#main-box').append($('#hello').prop("outerHTML"));
      }
    }

  }
  Array.prototype.filter = Array.prototype.filter || function(func) {
    var arr = this;
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i],i,arr)) {
        r.push(arr[i]);
      }
    }
    return r;
  }
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }

  .draggable {
  }
  .list-complete-item {
    transition: all 1s;
    height: 2.5rem;
    line-height: 2.5rem;
    color: black;
    text-align: center;
    font-size: 10pt;
    vertical-align: middle;
    margin-top: 0.1rem;
    border-bottom: #e0e0e0 0.8px solid;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .styleclass {
    width: 100%;
    display: inline-block;
    text-align: left;
    height: 2.5rem;
    line-height: 2.3rem;
    padding-top: 0.2rem;
  }

  .dargDiv {
    cursor: move;
  }

  .img_template_item_remove {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.65rem;
    float: left;
    margin-right: 0.3rem;
  }

  .img_template_item_sort {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.65rem;
    vertical-align: middle;
    float: right;
    right: 0.5rem;
  }
  p {
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
    width: 85%;
    margin-left: 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
