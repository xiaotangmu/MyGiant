<template>
  <div class="itxst">
    <div style="display: inline-block;width: 30%;">
      <el-card class="box-card main_box">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
<!--        <div class="div1 divCopy">-->
<!--          drag-->
<!--        </div>-->
<!--        <el-button class="div1 divCopy">默认按钮</el-button>-->
        面积过小拖动时会脱离范围，造成效果失败
        使用element ui 加载数据过多，拖动跟踪缓慢，效果不行
        <button class="div1 divCopy">Hello</button>
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
        dragging: false,
        oldPageX: '',
        oldPageY: '',
        cloneHtml: '',
        ss: 'shanghai',
        oldoffset: '',
        temp: 0
      }
    },
    mounted () {
      let that = this;
      //1.鼠标按下时复制目标元素
      $(document).on("mousedown",".div1",function(event){
        that.dragging = true;
        if (that.dragging) {
          var _this = $(event.currentTarget);
          that.oldPageX = event.pageX;
          that.oldPageY = event.pageY;
          that.cloneHtml = $(_this).clone();
          that.oldoffset = $(_this).offset();
          $(document.body).append(that.cloneHtml)
          that.cloneHtml.css({
            position: 'fixed',
            left: that.oldoffset.left,
            top: that.oldoffset.top + 10
          });
        }
      })

      $(document).on({
        //2.寻找位置做判断处理
        'mousemove':function(event){
          if(that.dragging) {
            // 防止位置脱离
            // if (!$(event.target).hasClass('div1')) {
            //   that.dragging = false;
            //   that.cloneHtml.remove();
            // }
            let currPageX = event.pageX;
            let currPageY = event.pageY;
            let movePageX = currPageX - that.oldPageX;
            let movePageY = currPageY - that.oldPageX;
            that.cloneHtml.css({
              opacity: '0.8',
              position: 'fixed',
              left: that.oldoffset.left + movePageX,
              top: that.oldoffset.top - 10 + movePageY,
            });
            let targetBox = $("#box");
            let targetBoxOffset = targetBox.offset();
            if (currPageX > targetBoxOffset.left && currPageX < targetBoxOffset.left + targetBox.width()
              && currPageY > targetBoxOffset.top && currPageY < targetBoxOffset.top + targetBox.height()) {
              targetBox.css("border", "1px dashed blue");
            } else {
              targetBox.css("border", "1px solid #ccc");
            }
          }
          // }else{
          //   console.log('xxx' + that.temp++)
          //   that.dragging = false;
          //   // 防止拖动出现在界外
          //   $("#box").css("border","1px solid #ccc");
          //   if(that.cloneHtml != '' && that.cloneHtml != undefined && that.cloneHtml != null){
          //     that.cloneHtml.remove();
          //   }else{
          //     that.cloneHtml = '';
          //   }
          // }
        },


      })
      // 3.释放鼠标将目标元素放置
      $(document).on("mouseup",".div1",function(event){
        let currPageX = event.pageX;
        let currPageY = event.pageY;
        let targetBox = $("#box");
        let targetBoxOffset = targetBox.offset();
        if(!(currPageX > targetBoxOffset.left && currPageX < targetBoxOffset.left + targetBox.width()
          && currPageY > targetBoxOffset.top && currPageY < targetBoxOffset.top + targetBox.height())){
          that.cloneHtml.remove();
          that.dragging = false;
          return;
        };
        targetBox.append(that.cloneHtml);
        $(event.target).removeClass("div1");
        $(event.target).css("position","static");
        $(event.target).addClass("divCopyStyle");
        targetBox.css("border","1px solid #ccc");
        $(event.target).removeAttr("onmousedown");
        that.dragging = false;
        if($(".box").find(".divCopy").length  > 9){
          $(event.target).remove();
        }
      })
    },
    methods: {
    }
  }
</script>

<style scoped>
  .main_box{
    height: 985px;
    overflow: auto;
  }
  .divCopy {
    /*width: 100px;*/
    /*height: 100px;*/
    /*background: #ff6666;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    cursor: move;
    /*z-index: 5;*/
    /*border: 1px dashed green;*/
  }
  /*.divCopyStyle{*/
  /*  float: left;*/
  /*  margin-top: 2px;*/
  /*  margin-left: 2px;*/
  /*}*/
</style>
