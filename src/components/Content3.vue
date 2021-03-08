<template>
  <div class="itxst">
    <div id="modal" style="display: none">
      <el-button>默认按钮</el-button>
      <el-button class="Hello" type="primary" @click="printHtml">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-time-picker
        v-model="value1"
        :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
        placeholder="任意时间点">
      </el-time-picker>
      <el-time-picker
        arrow-control
        v-model="value2"
        :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
        placeholder="任意时间点">
      </el-time-picker>
      <el-transfer v-model="value" :data="data"></el-transfer>
    </div>
    <div style="display: inline-block;width: 30%;">
      <el-card class="box-card main_box" id="box1">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
        <div v-for="(item, index) in list" >
          <dl v-html="item.name" class="drag" @mousedown="move" :style="'display:' + item.display"></dl>
        </div>
      </el-card>
    </div>
    <div style="display: inline-block;width: 50%;">
      <el-card id="box" class=" box-card main_box box">
      </el-card>
    </div>
    <div style="display: inline-block;width: 19.3%;">
      <el-card class="box-card main_box">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Content2',
    data(){
      return{
        list: [
        ],
        positionX:0,
        positionY:0,
      }
    },
    mounted () {
      let that = this;
      $("#modal").children().each(function(i){
        that.list.push({ name: $(this).prop('outerHTML'), display: $(this).css('display')})
      });
    },
    methods: {
      move(e){
        let odiv = e.currentTarget;        //获取目标元素
        //算出鼠标相对元素的位置
        // clientWidth（width + padding）
        let disX = e.clientX - odiv.clientWidth ;
        let disY = e.clientY - odiv.clientHeight;
        document.onmousemove = (e)=>{       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX;
          let top = e.clientY - disY;

          //绑定元素位置到positionX和positionY上面
          this.positionX = top;
          this.positionY = left;

          //移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    }
  }
</script>

<style scoped>
  .main_box{
    height: 985px;
    overflow: auto;
  }
  .drag{
    border: 1px solid red;
    position: relative;     /*定位*/
    top: 10px;
    left: 10px;
    background: #666;       /*设置一下背景*/
  }
</style>
