<template>

  <div class="row">
    <div class="giant-modal" style="display: none">
      <el-button class="modal-element">默认按钮</el-button>
      <el-button class="modal-element" type="primary">主要按钮</el-button>
      <el-button class="modal-element" type="success">成功按钮</el-button>
      <el-button class="modal-element" type="info">信息按钮</el-button>
      <el-button class="modal-element" type="warning">警告按钮</el-button>
      <el-button class="modal-element" type="danger">危险按钮</el-button>
      <el-button class="modal-element" type="primary" icon="el-icon-edit"></el-button>
      <el-button class="modal-element" type="primary" icon="el-icon-share"></el-button>
      <el-button class="modal-element" type="primary" icon="el-icon-delete"></el-button>
      <el-button class="modal-element" type="primary" icon="el-icon-search">搜索</el-button>
      <el-button class="modal-element" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <div class="block">
        <span class="demonstration">页数较少时的效果</span>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">大于 7 页时的效果</span>
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
      <div class="itxst">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
        <div class="col">
          <draggable :value="arr3" @end="end" :options="{group:{name: 'itxst',pull:'clone'},sort: true}"  animation="300">
            <transition-group>
              <dl style="display: inline-block" v-for="item in arr3" :key="item.id" v-html="item.name"></dl>
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
              <dl style="display: inline-block" v-for="item in arr4" :key="item.id" v-html="item.name"></dl>
            </transition-group>
          </draggable>
        </div>
      </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    name: 'Content',
    display: "Two Lists",
    order: 1,
    components: {
      draggable
    },
    data() {
      return {
        arr3: [
          // { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello1\"><!----><!----><span>Hello1</span></button>", id: 1 },
          // { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello2\"><!----><!----><span>Hello2</span></button>", id: 2 },
          // { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello3\"><!----><!----><span>Hello3</span></button>", id: 3 },
          // { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello4\"><!----><!----><span>Hello4</span></button>", id: 4 }
        ],
        arr4: [
          { name: "<p data-v-dc87507c=\"\"  id=\"hello6\"><!----><!----><span>Hello6</span></p>", id: 6 },
          { name: "<button data-v-dc87507c=\"\" type=\"button\" class=\"el-button el-button--sucess\" id=\"hello5\"><!----><!----><span>Hello5</span></button>", id: 5 },
        ],
        moveId:-1
      };
    },
    mounted(){
      let that = this;
      console.log('hello')
      let list = $('.giant-modal').children()
      list.each(function(index) {
        //item 就是当日按循环到的对象
        //index是循环的索引，从0开始
        console.log($(this).prop('outerHTML'))
        that.arr3.push({name: $(this).prop('outerHTML'), id:that.$uuid.v1()});
      })
      console.log(that.arr3)

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
        return false;
      },
      end(){
        console.log('end');
        return false;
      },
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
