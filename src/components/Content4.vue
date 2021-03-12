<template>
  <div>
    <div id="component-modal" style="display: none">
      <!--  换行    -->
      <div drag-type="div">换行---</div>
      <!--   占位空格   -->
      <div drag-type="span" style="width: 100px;display: inline-block">空格：100px</div>
      <!--   button   -->
      <el-button drag-type="button-default" style="display: inline-block">默认按钮</el-button>
      <el-button type="primary" drag-type="button-primary" style="display: inline-block">主要按钮</el-button>
      <el-button type="success" drag-type="button-success" style="display: inline-block">成功按钮</el-button>
      <el-button type="info" drag-type="button-info" style="display: inline-block">信息按钮</el-button>
      <el-button type="warning" drag-type="button-warning" style="display: inline-block">警告按钮</el-button>
      <el-button type="danger" drag-type="button-danger" style="display: inline-block">危险按钮</el-button>
      <el-button icon="el-icon-search" circle style="display: inline-block" drag-type="button-default-circle"></el-button>
      <el-button type="primary" icon="el-icon-edit" circle style="display: inline-block" drag-type="button-primary-circle"></el-button>
      <el-button type="success" icon="el-icon-check" circle style="display: inline-block" drag-type="button-success-circle"></el-button>
      <el-button type="info" icon="el-icon-message" circle style="display: inline-block" drag-type="button-info-circle"></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle style="display: inline-block" drag-type="button-warning-circle"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle style="display: inline-block" drag-type="button-danger-circle"></el-button>
      <!--   input   -->
      <el-input v-model="input" placeholder="请输入内容" style="display: inline-block" drag-type="input-default"></el-input>
      <el-input
        style="display: inline-block" drag-type="input-clearable"
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      <el-input placeholder="请输入密码" v-model="input" show-password style="display: inline-block" drag-type="input-password"></el-input>
      <el-input
        style="display: inline-block" drag-type="input-attr-date"
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="input1">
      </el-input>
      <el-input
        style="display: inline-block" drag-type="input-attr-search"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
      </el-input>
      <el-input
        style="display: inline-block" drag-type="input-slot-date"
        placeholder="请选择日期"
        v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input
        style="display: inline-block" drag-type="input-slot-search"
        placeholder="请输入内容"
        v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-table
        drag-type="table-base"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <!--      <div style="display: inline-block" >hello</div>-->
<!--      <div style="display: inline-block" class="test-box"></div>-->
<!--      <el-button style="display: inline-block" >Hello</el-button>-->
<!--      <el-select style="display: inline-block" v-model="value" placeholder="请选择">-->
<!--        <el-option-->
<!--          v-for="item in options"-->
<!--          :key="item.value"-->
<!--          :label="item.label"-->
<!--          :value="item.value">-->
<!--        </el-option>-->
<!--      </el-select>-->
<!--      <el-switch-->
<!--        style="display: inline-block"-->
<!--        v-model="value1"-->
<!--        active-text="按月付费"-->
<!--        inactive-text="按年付费">-->
<!--      </el-switch>-->
<!--      <el-switch-->
<!--        style="display: inline-block"-->
<!--        v-model="value1"-->
<!--        active-text="按月付费"-->
<!--        inactive-text="按年付费">-->
<!--      </el-switch>-->
<!--      <div class="block">-->
<!--        <span class="demonstration">自定义初始值</span>-->
<!--        <el-slider v-model="value2"></el-slider>-->
<!--      </div>-->
    </div>
    <div style="display: inline-block;width: 30%;">
      <el-card class="box-card main_box" id="box1">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
<!--        <div draggable="true" class="drag-item" type="dragRectangle">-->
<!--          <i class="tag tag-rectangle"></i>-->
<!--        </div>-->
<!--        <div v-for="(item, index) in componentList" draggable="true" class="drag-item" type="dragCircle" v-html="item.name" :style="'dispaly:' + item.display">-->
<!--        </div>-->

      </el-card>
    </div>
    <div style="display: inline-block;width: 50%;">
      <el-card id="ele" class=" box-card main_box box">
      </el-card>
    </div>
    <div style="display: inline-block;width: 19.3%;">
      <el-card class="box-card main_box">
        <div class="layui-card">
          <div class="layui-card-body">
            <div class="layui-form-item">
              <el-button @click="getCodeElement">生成字符代码</el-button>
            </div>
          </div>
        </div>
        <div class="layui-card">
          <div class="layui-card-body">
            <div class="layui-form-item">
              <el-tooltip content="向前移" placement="bottom" effect="light">
                <el-button class="toUp" type="success" icon="el-icon-back" circle></el-button>
              </el-tooltip>
              <el-tooltip content="向后移" placement="bottom" effect="light">
                <el-button class="toDown" type="warning" icon="el-icon-right" circle></el-button>
              </el-tooltip>
              <el-tooltip content="移除" placement="bottom" effect="light">
                <el-button class="toRemove" type="danger" icon="el-icon-delete" circle></el-button>
              </el-tooltip>
            </div>
          </div>
        </div>
        <!--   占位空格     -->
        <div class="operate" drag-type="span">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">宽度(px)</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input drag-type-span" value="100">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--   按钮面板     -->
        <div class="operate" drag-type="button">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">点击事件</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input drag-type-span" value="100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Content4',
    data(){
      return{
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        componentList: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: true,
        value2: 50,
        codeElement: [],
        codeElementData: [
          // 内部数据格式
          // { id: '', type: '', style: '', data: '', attr: '', methods: {}, content: '' }
        ] // 保存生成代码元素相关数据
      }
    },
    methods: {
      /*
      * 获取生成代码元素
      * */
      getCodeElement(){
        let that = this;
        that.codeElement = [];
        let str = '';
        $('.panel-element').each(function(i){
          let type = $(this).children(0).attr('drag-type');
          if(type === undefined){ // el-input 这些特殊
            type = $(this).children(0).children(0).attr('drag-type');
          }
          let temp = that.$store.state.componentElem.filter(item => item.type === type);
          str += temp[0].content + '\n';
          that.codeElement.push(temp[0]);
        })
        console.log(str);
        console.log(that.codeElement);
        this.generateCode();
      },
      /*
      ** 生成代码
       */
      generateCode(){
        let result = '<template>\n<div>\n';
        let temData = '';
        let cacheList = [];
        this.codeElement.forEach(function(item, index){
          let style = ''; // 记录style 数据
          if(item.style !== ''){
            style = 'style: "';
            item.style.forEach(function(i, index){
              style += i.name + ": " + i.data + '; ';
            })
            style += '"';
          }
          result += '\t' + item.content1 + style + item.content2 + '\n';
          if(item.data !== ''){
            let temList = cacheList.filter(i => i.name === item.data.name);
            if(temList.length === 0){ // 判断是否去重
              cacheList.push(item.data);
              temData += '\n\t\t' + item.data.name + ': ' + item.data.extend + ',';
            }
          }
        });
        result += '</div>\n</template>\n\n<script>\nexport default {' +
          '\n\tprops: [],\n\tcomponents: {},\n\tdata() {\n\t\treturn {';
        result += temData;
        result += '\n\t}\n},\nmounted() {},\nmethods: {';
        result += '\n},\n}\n<\/script>\n\n<style scoped>\n</style>';
        console.log(result)
        return result;
      }
    },
    mounted () {
      let that = this;
      $('#component-modal').children().each(function(i){
        var $div = $('<div draggable="true" class="drag-item" type="dragRectangle">\n' +
        '        </div>').append($(this)).css('display', $(this).css('display'));
        $("#box1").append($div);
      });
      var cArea = $('#ele');  // 最外层容器
      var drag = $('.drag');  // 拖拽区域
      var cAreaH; //容器高度
      var cAreaW;  // 容器宽度
//标尺尺寸
      var rulerSize = 30;
//左侧工具栏尺寸
      var leftUtilsSize = $('.leftUtils').innerWidth();
      var cAreaTop = getPosition(cArea).Y - rulerSize; // 容器距离浏览器上边界距离
      var cAreaLeft = getPosition(cArea).X - rulerSize - leftUtilsSize; // 容器距离浏览器左边界距离
      var currentEle = null; // 缓存当前拖动的元素
      var clickEle = [];  //缓存当前选中元素
      var mousePosition, mouseStartX, mouseStartY, dragLeft, dragTop, dragMaxH, dragMaxW;  // 定义按下鼠标产生的变量

//画布大小   宽8.5英寸   高5.5英寸
      var areaWidthIn = 8.5;
      var areaHeightIn = 5.5;

      var movePx = 3;  //全局移动点

      var isCopy = false;

      var isLockScreen = true;

      var isDialog = false;

//设置层级关系
      var zindex = 999;

      $(document).keydown(function (e) {
        if(isDialog){
          return;
        }
        var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if (clickEle.length > 0) {
          //判断是否是选中文本
          var textareaEle = $(clickEle).children('.textarea');
          var isFocus = false;
          textareaEle.each(function () {
            if($(this).is(":focus")){
              isFocus = true;
              return false;
            }
          });
          if(isFocus){
            return;
          }
          if (!(textareaEle.length !== 0 && (textareaEle.is(":focus")))) {
            if (eCode === 37 && e.shiftKey) {
              $(currentEle).css('width', $(currentEle).outerWidth(true) - movePx);
              textareaAuto(currentEle);
            } else if (eCode === 39 && e.shiftKey) {
              $(currentEle).css('width', $(currentEle).outerWidth(true) + movePx);
              textareaAuto(currentEle);
            } else if (eCode === 38 && e.shiftKey) {
              $(currentEle).css('height', $(currentEle).outerHeight(true) - movePx);
              textareaAuto(currentEle);
              textareaHrNum(currentEle, $(currentEle).outerHeight(true));
            } else if (eCode === 40 && e.shiftKey) {
              textareaAuto(currentEle);
              $(currentEle).css('height', $(currentEle).outerHeight(true) + movePx);
              textareaHrNum(currentEle, $(currentEle).outerHeight(true));
            } else if ((eCode === 8 || eCode === 46)) {  //Delete键或Backspace键删除元素
              for (var i = 0; i < clickEle.length; i++) {
                var clickEleItem = clickEle[i];
                $(clickEleItem).remove();
              }
            } else if (eCode === 37) { //左键移动
              for (var i = 0; i < clickEle.length; i++) {
                var clickEleItem = clickEle[i];
                $(clickEleItem).css('left', $(clickEleItem).position().left - movePx + 'px');
              }
            } else if (eCode === 38) { //上键移动
              for (var i = 0; i < clickEle.length; i++) {
                var clickEleItem = clickEle[i];
                $(clickEleItem).css('top', $(clickEleItem).position().top - movePx + 'px');
              }
            } else if (eCode === 39) { //右键移动
              for (var i = 0; i < clickEle.length; i++) {
                var clickEleItem = clickEle[i];
                $(clickEleItem).css('left', $(clickEleItem).position().left + movePx + 'px');
              }
            } else if (eCode === 40) { //下键移动
              for (var i = 0; i < clickEle.length; i++) {
                var clickEleItem = clickEle[i];
                $(clickEleItem).css('top', $(clickEleItem).position().top + movePx + 'px');
              }
            } else if (eCode === 67 && e.ctrlKey) {
              isCopy = true;
            } else if (eCode === 86 && e.ctrlKey) {
              if (isCopy) {
                for (var j = 0; j < clickEle.length; j++) {
                  var clickEleItem = clickEle[j];
                  $(clickEleItem).children('.textarea').blur();
                  setHtml($(clickEleItem), 1, j);
                }
              }
            }
          }
        }
      });

      $(document).contextmenu(function () {
        return false;
      })

      /**
       * 获取元素距离父容器的距离
       * @param elem  容器
       */
      function getPosition(elem) {
        var elemX = $(elem).position().left; // 相对于element.offsetParent节点的左边界偏移像素值
        var elemY = $(elem).position().top;  // 相对于element.offsetParent节点的上边界偏移像素值
        return {X: elemX, Y: elemY};
      };
      /**
       * 获取元素坐标，相对于文档
       * @param elem  容器
       */
      function getElemCoordinate(elem) {
        var elemX = $(elem).offset().left; // 相对于element.offsetParent节点的左边界偏移像素值
        var elemY = $(elem).offset().top;  // 相对于element.offsetParent节点的上边界偏移像素值
        return { X: elemX, Y: elemY };
      };
      /**
       * 获取元素最低点（右下角）坐标，相对于文档
       * @param elem  容器
       */
      function getElemCenterCoordinate(elem) {
        var elemX = $(elem).offset().left + $(elem).innerWidth()/2; // 相对于element.offsetParent节点的左边界偏移像素值
        var elemY = $(elem).offset().top + $(elem).innerHeight()/2;  // 相对于element.offsetParent节点的上边界偏移像素值
        return { X: elemX, Y: elemY };
      };
      /**
       * 获取元素最低点（右下角）坐标，相对于文档
       * @param elem  容器
       */
      function getElemLowestCoordinate(elem) {
        var elemX = $(elem).offset().left + $(elem).innerWidth(); // 相对于element.offsetParent节点的左边界偏移像素值
        var elemY = $(elem).offset().top + $(elem).innerHeight();  // 相对于element.offsetParent节点的上边界偏移像素值
        return { X: elemX, Y: elemY };
      };
      /**
       * 获取当前鼠标所在位置，相对于文档
       */
      function getMouseCoordinate(){
        var e = window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        return { X: x, Y: y };
      }
//拖拽功能
      var $container = $('#ele');   //移入的容器
      var $dragItem = $('.drag-item'); // 可以拖动的元素
      var eleDrag = null; //当前被拖动的元素
      var endPosition = {left: '', top: ''};  // 放开元素时的鼠标坐标
      $dragItem.on('selectstart', function () {
        return false;
      });

// 选择列表元素
      $dragItem.on('dragstart', function (ev) {
        // 拖拽开始
        ev.originalEvent.dataTransfer.effectAllowed = 'move';
        eleDrag = ev.target;
        return true;
      }).on('dragend', function (ev) {    // 列表元素的mouseup 事件
        eleDrag = null;
        return false;
      });
// 监控拖动的列表元素是否进入面板范围
      $container.on('dragover', function (ev) { // 进入后移动都会触发
        ev.preventDefault();
        return true;
      }).on('dragenter', function (ev) {  // 进入的一瞬间触发
        $(this).toggleClass('active');
        return true;
      }).on('drop', function (ev) {   // 列表元素在面板中mouseup 时触发
        endPosition.left = ev.originalEvent.x;
        endPosition.top = ev.originalEvent.y;
        if (eleDrag) {
          setHtml(eleDrag, 0)
        }
        $(this).toggleClass('active');
      });
// 列表元素在面板中mouseup 时触发
      function setDragElePosition(eleDrag, $dragEle, type) {
        if (type === 0) {
          $dragEle.css({
            //解释算法    endPosition为距离浏览器边缘的长度    减去rulerSize是减去标尺长度
            // -2是减去边框宽度   width/2是控制鼠标在元素中心
            'left': endPosition.left - $dragEle.width() / 2 - rulerSize - 2 - leftUtilsSize,
            'top': endPosition.top - $dragEle.height() / 2 - rulerSize - 2
          });
          clickEle = [];
          clickEle.push($dragEle)
        } else {
          $dragEle.css({
            //解释算法    endPosition为距离浏览器边缘的长度    减去rulerSize是减去标尺长度
            // -2是减去边框宽度   width/2是控制鼠标在元素中心
            'left': eleDrag[0].offsetLeft + 3,
            'top': eleDrag[0].offsetTop + 3
          });
        }
      }
      /**
       * 获取特定位置，后面最近的特定元素（Y轴优先）
       * @param className 元素标识类(带. -- .drag)
       * @param coor 特定坐标
       */
      function getClosestElem(className, coor) {
        let tempCoor = '';  // 缓存元素坐标
        let tempObj = ''; // 缓存元素
        $(className).each(function(i){
          let coorElem = getElemCoordinate(this); // 获取元素坐标
          let lowestCoorElem = getElemLowestCoordinate(this); // 获取元素坐标
          if(coor.Y >= coorElem.Y && coor.Y <= lowestCoorElem.Y &&
            coor.X >= coorElem.X && coor.X <= lowestCoorElem.X){
            tempObj = $(this);
            return tempObj;
          }
        });
        return tempObj;
      }
      /**
       * 移除指定元素下所有元素尺寸控制器， 实现点击一个元素，其他元素控制器隐藏
       * @param e
       */
      function dragControlSizeForAll(e) {
        $(e).children('.dragDot').css('display', 'none');
      }
// 列表元素在面板中mouseup 时触发
      function setHtml(eleDrag, type, index) {
        var $dragEle = $(eleDrag).clone();
        $($dragEle).removeClass('drag-item');
        $($dragEle).attr('draggable', 'false'); // 设置不可拖动
        // 判断是否要插入到
        let $insertObj = '';
        $insertObj = getClosestElem('.panel-element', getMouseCoordinate());
        $($dragEle).addClass('panel-element');  // 添加标记
        $($dragEle).attr('id', that.$uuid.v1());
        if($insertObj === ''){ // 不用移位
          $container.append($dragEle);
        }else{
          $insertObj.before($dragEle);
        }
        // 缓存数据
        cachePageData($dragEle);
      }
      // 缓存生成代码数据
      function cachePageData($elem){
        let data = { id: '', type: '', style: '', data: '', attr: '', methods: {}, content1: '' , content2: ''};
        data.id = $elem.attr('id');
        data.type = getDragType($elem);
        let tempList = that.$store.state.componentElem.filter(item => item.type === data.type)
        data.style = tempList[0].style;
        that.codeElementData.push(data);
      }
      let $chooseElem = '';
      // 选择要操作的组件
      $(document).on("click",".panel-element",function (e) {
        //屏蔽事件冒泡
        e.stopPropagation();
        hideChoose();
        $(this).css('border', '1px solid red');
        $chooseElem = $(this);
        // 显示操作面板
        dispalyOperatePanel();
      })
      // 取消选择
      function hideChoose(){
        $('.panel-element').each(function(i){
          $(this).css('border', 'none')
        })
        $chooseElem = '';
      }
      // 通过选择的元素显示对应操作面板
      function dispalyOperatePanel(){
        if($chooseElem === undefined || $chooseElem === '' || $chooseElem === null)
          return false;
        let type = getDragType($chooseElem);
        operateHideOrShow(type);
      }





















      function operateHideOrShow(type){
        $('.operate').each(function(i){
          let dragType = $(this).attr('drag-type');
          console.log(dragType)
          console.log(type)
          console.log(dragType.substr(0, 7))
          if(dragType === type){
            $(this).show()
          }else if(dragType.length > 6 && dragType.substring(0, 7) === 'button'){ // button
            $(this).show()
          }else{
            $(this).hide()
          }
        });
      }
      // 上移
      $(document).on("click",".toUp",function (e) {
        //屏蔽事件冒泡
        e.stopPropagation();
        if($chooseElem === '')
          return false;
        // 判断是否还有前面兄弟
        let $before = $chooseElem.prev('.panel-element');
        console.log($chooseElem)
        if($before.length === 0)
          return false;
        $($before).before($chooseElem)
      });
      // 下移
      $(document).on("click",".toDown",function (e) {
        //屏蔽事件冒泡
        e.stopPropagation();
        if($chooseElem === '')
          return false;
        let $after = $chooseElem.next('.panel-element');
        if($after.length === 0)
          return false;
        $($after).after($chooseElem)
      });
      // 移除
      $(document).on("click",".toRemove",function (e) {
        //屏蔽事件冒泡
        e.stopPropagation();
        if($chooseElem === '')
          return false;
        $chooseElem.remove()
      });
      // 监控占位空格改变宽度
      $(document).on("change", '.drag-type-span', function(e){
        let width = this.value + 'px';
        $chooseElem.css('width', width)
        $chooseElem.children(0).text('空格：' + width);
        // 改变绑定缓存数据
        let index1 = that.codeElementData.findIndex(item => item.id === $chooseElem.attr('id'));
        let index2 = that.codeElementData[index1].style.findIndex(item => item.name === 'width');
        that.codeElementData[index1].style[index2].data = width;
        console.log(that.codeElementData)
      })
// 加载时触发，一次
      function textareaAuto(e) {
        if($(e).hasClass('dragWords')){
          $(e).css('height', $(e).children('.textarea').height());
        }
      }

      // 获取drag div子元素的dragType
      function getDragType($elem){
        let type = $elem.children(0).attr('drag-type');
        if(type === undefined || type === '' || type === null){
          type = $elem.children(0).children(0).attr('drag-type');
        }
        return type;
      }
    }
  }
</script>

<style scoped>
  .operate{
    display: none;
  }
  .panel-element{
    vertical-align: bottom;
  }
  .main_box{
    height: 985px;
    overflow: auto;
  }
  /** {*/
  /*  padding: 0;*/
  /*  margin: 0;*/
  /*  font-family: 微软雅黑;*/
  /*}*/
.test-box{
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #409EFF;
}
  /*#ele {*/
  /*  width: 800px;*/
  /*  height: 500px;*/
  /*  position: absolute;*/
  /*  overflow: hidden;*/
  /*  border: 1px solid #000000;*/
  /*  border-top: 0;*/
  /*  border-left: 0;*/
  /*  top: 59px;*/
  /*  left: 149px;*/
  /*}*/


  .active {
    border: 4px dashed #ffa000;
  }

  .drag {
    width: 60px;
    height: 40px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    /*z-index: 999;*/
    border: 1px solid #000;
    background-color: #fff;
  }

  .dragDot {
    width: 4px;
    height: 4px;
    background: #fff;
    border: 1px solid #888 !important;
    position: absolute;
    opacity: 0.8;
    border-radius: 50%;
  }

  .cLeftUp {
    top: -3px;
    left: -3px;
    cursor: nw-resize;
  }

  .cUp {
    top: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: n-resize;
  }

  .cRightUp {
    top: -3px;
    right: -3px;
    cursor: ne-resize;
  }


  .drag.active {
    border: none;
    background: none;
  }

  .drag.active div {
    display: none;
  }

  #wrap {
    margin-top: 10px;
  }

  .dragWrap {
    right: 50px;
    top: 10px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
  }
  .drag-item{
    margin-bottom: 10px;
    cursor: pointer;
  }


  .dragWords {
    width: 100px;;
    height: 30px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    z-index: 999;
    border: 0;
    font-size: 12px;
  }

  .textarea {
    width: calc( 100% - 4px);
    border: 0;
    resize: none;
    overflow: hidden;
    outline: 0 none;
    box-shadow: 0 0 1px #999;
    border-radius: 1px;
    min-height: 30px;
    cursor: auto;
    padding: 0 2px;
  }

  hr {
    margin-top: 10px;
    border-top: 1px;
    border-color: #000;
  }

  .dragNoteText {
    padding: 0 3px;
    background-color: #fff;
  }

  .dragDotMove {
    cursor: move;
  }

  .imgFile {
    display: none;
  }

  .dragImg {
    background-size: 100%;
    background-repeat: no-repeat;
    width: 80px;
    height: 80px;
    background-color: #888;
  }
  .disFlex {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .topUtils{
    /*height: 30px;*/
    margin-left: 120px;
    align-items: center;
    font-size: 14px;
  }


  .font_dialog_wrapper{
    width: 100%;
    height: 100%;
    z-index: 5999;
    position: absolute;
    top: 0;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    display: none;
  }


  .dialog_content_item label{
    padding-right: 5px;
  }

  .dialog_content_item select{
    padding: 3px;
  }

  .dialog_footer_button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .dialog_footer{
    justify-content: center;
    padding-bottom: 5%;
  }

  .dialog_footer button{
    background-color: #409EFF;
    color: #fff;
  }

  .rightmouse-panel-div .wb {
    line-height: 24px;
    letter-spacing: 1px;
    font-size: 13px;
    padding-left: 7px;
    cursor: pointer;
  }

  .rightmouse-panel-div .wb:hover {
    background-color: #f0f8ff
  }
  .hr{
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #ccc;
  }

  .tag {
    background-image: url('../assets/img/hlb_bill.jpg');
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    float: left;
    background-size: 158px;
  }
  .tag-rectangle{
    background-position: -4px -4px;
  }
</style>
