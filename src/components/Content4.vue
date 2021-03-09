<template>
  <div>
    <div style="display: inline-block;width: 30%;">
      <el-card class="box-card main_box" id="box1">
        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
        <div draggable="true" class="test-box drag-item" type="dragCircle">
          <div class="test-box"></div>
        </div>

        <div draggable="true" class="drag-item" type="dragCircle">
          <el-button >Hello</el-button>
        </div>

      </el-card>
    </div>
    <div style="display: inline-block;width: 50%;">
      <el-card id="ele" class=" box-card main_box box">
      </el-card>
    </div>
    <div style="display: inline-block;width: 19.3%;">
      <el-card class="box-card main_box">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>

    <div class="disFlex">
      <div class="dragWrap disFlex leftUtils">
        <div draggable="true" class="drag-item" type="dragRectangle">
          <i class="tag tag-rectangle"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragHorizontalLine">
          <i class="tag tag-horizontalLine"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragVerticalLine">
          <i class="tag tag-verticalLine"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragRounded">
          <i class="tag tag-rounded"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragCircle">
          <i class="tag tag-circle"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragWords">
          <i class="tag tag-words"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragNoteText">
          <i class="tag tag-noteText"></i>
        </div>
        <div draggable="true" class="drag-item" type="dragImg">
          <i class="tag tag-img"></i>
        </div>
        <div class="drag-item" onclick="fontDragDialog()">
          <i class="tag tag-setText"></i>
        </div>
        <input type="color" id="fontColor" style="display: none">
        <div onclick="clickFontColor()" class="drag-item">
          <i class="tag tag-fontColor"></i>
        </div>
        <input type="color" class="drag-item" id="bgColor" style="display: none">
        <div onclick="clickBgColor()" class="drag-item">
          <i class="tag tag-bgColor"></i>
        </div>
        <button onclick="getDate()">获取数据</button>
      </div>
      <div>
        <div class="rulerHorizontal">
        </div>
        <div class="rulerVertical">
        </div>
        <!--主图显示位置-->
<!--        <div id="ele" style="display: none"></div>-->
      </div>
    </div>

    <!--矩形使用控制点-->
    <div class="cacheEle">
      <div data-type="cRightDown" class="dragDot cRightDown"></div>
      <div data-type="cLeftDown" class="dragDot cLeftDown"></div>
      <div data-type="cRightUp" class="dragDot cRightUp"></div>
      <div data-type="cLeftUp" class="dragDot cLeftUp"></div>
      <div data-type="cRight" class="dragDot cRight"></div>
      <div data-type="cDown" class="dragDot cDown"></div>
      <div data-type="cLeft" class="dragDot cLeft"></div>
      <div data-type="cUp" class="dragDot cUp"></div>
    </div>

    <!--直线使用控制点-->
    <div class="cacheEleHorizontalLine">
      <div data-type="cRight" class="dragDot cRight" style="margin-top: -2px;"></div>
      <div data-type="cLeft" class="dragDot cLeft" style="margin-top: -2px;"></div>
    </div>

    <!--竖线使用控制点-->
    <div class="cacheEleVerticalLine">
      <div data-type="cDown" class="dragDot cDown" style="margin-left: -4px;"></div>
      <div data-type="cUp" class="dragDot cUp" style="margin-left: -4px;"></div>
    </div>

    <!--文字框使用  包括文本框-->
    <div class="cacheEleWords">
      <div  data-type="drag" class="dragDot cRightDown dragDotMove"></div>
      <div data-type="drag" class="dragDot cLeftDown dragDotMove"></div>
      <div data-type="drag" class="dragDot cRightUp dragDotMove"></div>
      <div data-type="drag" class="dragDot cLeftUp dragDotMove"></div>
      <div data-type="cRight" class="dragDot cRight"></div>
      <div data-type="cLeft" class="dragDot cLeft"></div>
      <div class="textarea" contentEditable="true"></div>
    </div>

    <div class="cacheEleNoteText">
      <div data-type="cRightDown" class="dragDot cRightDown"></div>
      <div data-type="cLeftDown" class="dragDot cLeftDown"></div>
      <div data-type="cRightUp" class="dragDot cRightUp"></div>
      <div data-type="cLeftUp" class="dragDot cLeftUp"></div>
      <div data-type="cRight" class="dragDot cRight"></div>
      <div data-type="cDown" class="dragDot cDown"></div>
      <div data-type="cLeft" class="dragDot cLeft"></div>
      <div data-type="cUp" class="dragDot cUp"></div>
      <hr/><hr/><hr/>
    </div>

    <div class="cacheEleImg">
      <div data-type="cRightDown" class="dragDot cRightDown"></div>
      <div data-type="cLeftDown" class="dragDot cLeftDown"></div>
      <div data-type="cRightUp" class="dragDot cRightUp"></div>
      <div data-type="cLeftUp" class="dragDot cLeftUp"></div>
      <div data-type="cRight" class="dragDot cRight"></div>
      <div data-type="cDown" class="dragDot cDown"></div>
      <div data-type="cLeft" class="dragDot cLeft"></div>
      <div data-type="cUp" class="dragDot cUp"></div>
      <input type="file" class="imgFile" accept="image/*" onchange="imgFileChange(this)">
    </div>

    <div class="font_dialog_wrapper">
      <div class="dialog">
        <div class="disFlex dialog_title">
          <div>字体样式</div>
          <div class="fontDialogClose dialog_title_close cha"></div>
        </div>
        <div class="dialog_content">
          <div class="dialog_content_item">
            <label>字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;体：</label>
            <select id="fontfamily" class="fontfamily" style="width: 70%">
              <option value="微软雅黑" selected="selected">微软雅黑</option>
              <option value="SimHei">黑体</option>
              <option value="SimSun">宋体</option>
              <option value="NSimSun">新宋体</option>
              <option value="FangSong">仿宋</option>
              <option value="KaiTi">楷体</option>
            </select>
          </div>
          <div class="dialog_content_item">
            <label>字体大小：</label>
            <select id="fontsize" class="fontsize" style="width: 70%">
              <option value="12px" selected="selected">12</option>
              <option value="14px">14</option>
              <option value="15px">15</option>
              <option value="16px">16</option>
              <option value="18px">18</option>
              <option value="20px">20</option>
              <option value="22px">22</option>
              <option value="24px">24</option>
              <option value="26px">26</option>
              <option value="28px">28</option>
              <option value="36px">36</option>
              <option value="48px">48</option>
              <option value="72px">72</option>
            </select>
          </div>

        </div>
        <div class="disFlex dialog_footer">
          <button type="button" class="dialog_footer_button dialog_button_small fontDialogTrue">确定</button>
          <button type="button" class="dialog_footer_button dialog_button_small fontDialogClose">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Content4',
    data(){
      return{

      }
    },

    mounted () {
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


      function initFun() {
        $('body').on('mousedown', '.drag', startDrag);
        //元素点击
        $('body').on('click', '.drag', dragControlSize);
        //body下点击   （空白区）
        $('body').on('click', '#ele', remoreAllControlSize);
        $('body').on('dblclick', '.drag', changeImg);
        $('body').on('change', '#fontColor', setFontColor);
        $('body').on('change', '#bgColor', setBgColor);
        $('body').on('click', '.fontDialogClose', fontDragDialog);
        $('body').on('click', '.fontDialogTrue', trueTextDragDialog);
        $('body').on('keyup', '.textarea', textareaKeyUp);
      }

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
       * 移除指定元素下所有元素尺寸控制器， 实现点击一个元素，其他元素控制器隐藏
       * @param e
       */
      function dragControlSizeForAll(e) {
        $(e).children('.dragDot').css('display', 'none');
      }
// 列表元素在面板中mouseup 时触发
      function setHtml(eleDrag, type, index) {
        if (type === 0) {
          //元素类型   有矩形，圆角矩形，线条，圆，图片
          // var eleDregType = $(eleDrag).attr('type');
          // var $dragEle = $('<div>');
          // var directionBtn = getHtmlForType(eleDregType);
          var directionBtn = $(eleDrag).clone();
          var $dragEle = directionBtn;
          $(".drag").each(function () {
            dragControlSizeForAll(this);
          });
          // $dragEle.css('z-index', zindex++).addClass(eleDregType).addClass("drag").attr('data-type', 'drag').attr('type', eleDregType).append(directionBtn);
          $container.append($dragEle);
          setDragElePosition(eleDrag, $dragEle, type)
          //文字创建时自动获取焦点
          $dragEle.find('.textarea').focus();
          currentEle = $dragEle;
        } else {
          var $dragEle = eleDrag.clone(true);
          clickEle[index] = $dragEle;
          $container.append($dragEle);
          setDragElePosition(eleDrag, $dragEle, type);
          dragControlSizeForAll(eleDrag);
        }
      }

// 根据类型生成对应组件, 列表元素在面板中mouseup 时触发
      function getHtmlForType(eleDregType) {
        var directionBtn;
        // if (eleDregType === 'dragHorizontalLine') {
        //   directionBtn = $('.cacheEleHorizontalLine').html();
        // } else if (eleDregType === 'dragVerticalLine') {
        //   directionBtn = $('.cacheEleVerticalLine').html();
        // } else if (eleDregType === 'dragWords') {
        //   directionBtn = $('.cacheEleWords').html();
        // } else if (eleDregType === 'dragNoteText') {
        //   directionBtn = $('.cacheEleNoteText').html();
        // } else if (eleDregType === 'dragImg') {
        //   directionBtn = $('.cacheEleImg').html();
        // } else {
        //   directionBtn = $('.cacheEle').html();
        // }
        directionBtn = $('.test-box').html();
        return directionBtn;
      }


      function createData() {
        return {
          objtype: '', objcode: '', left: '', top: '', width: '', height: '', linewidth: '',
          text: '', autosize: '', alignment: '', fontname: '', fontsize: '', fontbold: '',
          fontitalic: '', fontcolor: '', flag: '', format: '', stretch: '', tag: '', allpwPrint: '',
          bgcolor: '', bordercolor: '', zindex: ''
        };
      }

      function getDate() {
        var dataList = [];
        var domList = $("#ele").children();
        domList.each(function () {
          var data = createData();
          var $this = $(this);
          //第一个class为元素类型
          data.objtype = $this.attr("class").split(' ')[0];
          data.left = $this.position().left;
          data.top = $this.position().top;
          data.width = $this.width();
          data.height = $this.height();
          data.linewidth = $this.css('border-width');
          if ($this.find('textarea').length > 0) {
            data.text = $this.find('textarea').val();
          }
          data.alignment = $this.css('text-align');
          data.fontname = $this.css('font-family');
          data.fontsize = $this.css('font-size');
          data.fontbold = $this.css('font-weight');
          data.fontitalic = $this.css('font-style');
          data.fontcolor = $this.css('color');
          data.bgcolor = $this.css('background-color');
          data.zindex = $this.css('z-index');
          dataList.push(data);
        });
        console.log(dataList);
      }

// 加载时触发, 连续触发
      function unitConversion() {
        /**
         * 获取DPI
         * @returns {Array}
         */
        this.conversion_getDPI = function () {
          var arrDPI = new Array;
          if (window.screen.deviceXDPI) {
            arrDPI[0] = window.screen.deviceXDPI;
            arrDPI[1] = window.screen.deviceYDPI;
          } else {
            var tmpNode = document.createElement("div");
            tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
            document.body.appendChild(tmpNode);
            arrDPI[0] = parseInt(tmpNode.offsetWidth);
            arrDPI[1] = parseInt(tmpNode.offsetHeight);
            tmpNode.parentNode.removeChild(tmpNode);
          }
          return arrDPI;
        };
        /**
         * px转换为mm
         * @param value
         * @param index
         * @returns {number}
         * 1英寸(in)=25.4毫米(mm)
         */
        this.pxConversionMm = function (value, index) {
          var inch = value / this.conversion_getDPI()[index];
          var c_value = inch * 25.4;
          return c_value;
        };
        /**
         * mm转换为px
         * @param value
         * @param index
         * @returns {number}
         */
        this.mmConversionPx = function (value, index) {
          var inch = value / 25.4;
          var c_value = inch * this.conversion_getDPI()[index];
          return c_value;
        }
      }
// 加载时触发, 只触发一次
      function rulerHorizontalItem() {
        var $rulerHorizontal = $(".rulerHorizontal");
        $rulerHorizontal.append(' <div class="rulerHorizontalFive"><div class="rulerHorizontalSize">0</div></div>')
        var areaW = cArea.width();
        $rulerHorizontal.css('width', cArea.width() + rulerSize + 2);
        var i = 1;
        var sizeNum = 1;
        while (areaW > 0) {
          var $rulerHorizontalItem = $('<div>');
          if (i != 0 && i % 5 === 0) {
            $rulerHorizontalItem.addClass('rulerHorizontalFive');
            $rulerHorizontalItem.append($('<div>').addClass('rulerHorizontalSize').html(sizeNum));
            sizeNum++;
          } else {
            $rulerHorizontalItem.addClass('rulerHorizontalOne');
          }
          $rulerHorizontalItem.css('padding-left', new unitConversion().mmConversionPx(2, 0) - 1);

          $rulerHorizontal.append($rulerHorizontalItem);
          i++;
          areaW -= (new unitConversion().mmConversionPx(2, 0));
        }
      }
// 加载时触发，触发两次
      function rulerVerticalItem() {
        var $rulerVertical = $(".rulerVertical");
        var areaH = cArea.height();
        $rulerVertical.css('height', cArea.height());
        $rulerVertical.append(' <div class="rulerVerticalFive" style="border: 0;"><div class="rulerVerticalSize">0</div></div>')
        var j = 1;
        var sizeNum = 1;
        while (areaH > 0) {
          var $rulerVerticalItem = $('<div>');
          if (j != 0 && j % 5 === 0) {
            $rulerVerticalItem.addClass('rulerVerticalFive');
            $rulerVerticalItem.append($('<div>').addClass('rulerVerticalSize').html(sizeNum));
            sizeNum++;
          } else {
            $rulerVerticalItem.addClass('rulerVerticalOne');
          }
          $rulerVerticalItem.css('padding-top', new unitConversion().mmConversionPx(2, 1) - 1);
          $rulerVertical.append($rulerVerticalItem);
          j++;
          areaH -= (new unitConversion().mmConversionPx(2, 1));
        }
      }

//标尺, 加载时触发，触发两次
      function rulerInit() {
        rulerHorizontalItem();
        rulerVerticalItem();
      }

//设置画布大小, 加载时触发，触发两次
      function setAreaWH() {
        var w = new unitConversion().mmConversionPx(areaWidthIn * 25.4, 0);
        var h = new unitConversion().mmConversionPx(areaHeightIn * 25.4, 1);
        $("#ele").css('width', w);
        $("#ele").css('height', h);
        $('.topUtils').css('width', w);
      }
// 加载时触发，两次
      function initData() {
        cAreaH = cArea.height(); //容器高度
        cAreaW = cArea.width();  // 容器宽度
      }
// 加载时触发，两次
      function setAreaWHAegin() {
        var w = $('.rulerHorizontal').width();
        var h = $('.rulerVertical').height();
        $("#ele").css('width', w - 29).css('height', h + 1).css('top', rulerSize).css('left', rulerSize + leftUtilsSize);
        $('.topUtils').css('width', w - 28);
      }
// 加载时触发，两次
      function init() {
        setAreaWH();
        rulerInit();
        setAreaWHAegin();
        initData();
        initFun()
      }


// 加载时触发，一次
      function fontDragDialog() {
        var isHidden = $('.font_dialog_wrapper').is(':hidden');
        if (isHidden) {
          isDialog = true;
          $('.font_dialog_wrapper').css('display', 'block');
          $('#fontfamily').val($(currentEle).css('font-family'))
          $('#fontsize').val($(currentEle).css('font-size'))
        } else {
          isDialog = false;
          $('.font_dialog_wrapper').css('display', 'none');
        }
      }
// 加载时触发，一次
      function trueTextDragDialog() {
        var fontfamily = $("#fontfamily").val();
        var fontsize = $('#fontsize').val();
        for (var i = 0; i < clickEle.length; i++) {
          var clickEleItem = clickEle[i];
          $(clickEleItem).children().css('font-family', fontfamily).css('font-size',fontsize);
          $(clickEleItem).css('font-family', fontfamily).css('font-size',fontsize);
          textareaAuto(clickEleItem);
        }
        fontDragDialog();
      }
// 加载时触发，一次
      function textareaAuto(e) {
        if($(e).hasClass('dragWords')){
          $(e).css('height', $(e).children('.textarea').height());
        }
      }

      init();
    }
  }
</script>

<style scoped>
  .main_box{
    height: 985px;
    overflow: auto;
  }
  * {
    padding: 0;
    margin: 0;
    font-family: 微软雅黑;
  }
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

  .rulerHorizontal {
    width: 0;
    height: 29px;
    border: 1px solid;
    display: flex;
  }

  .rulerHorizontalFive{
    padding-left: 29px;
    height: 29px;
    border-right: 1px solid;
    position: relative;
  }

  .rulerHorizontalOne{
    padding-left: 4px;
    height: 10px;
    border-right: 1px solid;
    margin-top: 19px;
  }

  .rulerHorizontalSize{
    position: absolute;
    font-size: 12px;
    padding-left: 5px;
  }

  .rulerVertical {
    width: 29px;
    border: 1px solid;
    border-top: 0;
  }

  .rulerVerticalFive{
    border-bottom: 1px solid;
    width: 29px;
    position: relative;
  }

  .rulerVerticalOne{
    width: 10px;
    border-bottom: 1px solid;
    margin-left: 19px;
  }

  .rulerVerticalSize{
    position: absolute;
    font-size: 12px;
    padding-top: 2px;
    padding-left: 3px;
  }

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

  .cRight {
    right: -3px;
    top: 50%;
    margin-top: -3px;
    cursor: e-resize;
  }

  .cRightDown {
    bottom: -3px;
    right: -3px;
    cursor: se-resize;
  }

  .cDown {
    bottom: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: s-resize;
  }

  .cLeftDown {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize;
  }

  .cLeft {
    left: -3px;
    top: 50%;
    margin-top: -3px;
    cursor: w-resize;
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

  .cacheEle {
    display: none;
  }

  .cacheEleHorizontalLine {
    display: none;
  }

  .cacheEleVerticalLine {
    display: none;
  }

  .cacheEleWords {
    display: none;
  }

  .cacheEleNoteText {
    display: none;
  }

  .cacheEleImg {
    display: none;
  }

  .dragRectangle {
    width: 50px;
    height: 30px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    z-index: 999;
    border: 1px solid #000;
    text-align: center;
  }

  .dragHorizontalLine {
    width: 50px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    z-index: 999;
    border: 0;
    border-bottom: 1px solid #000;
    text-align: center;
    height: 0;
    padding: 1px 0px;
  }

  .dragVerticalLine {
    width: 0px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    z-index: 999;
    border: 0;
    border-left: 1px solid #000;
    text-align: center;
    height: 50px;
    padding: 0px 1px;
  }

  .dragRounded {
    width: 50px;
    height: 30px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    z-index: 999;
    border: 1px solid #000;
    text-align: center;
    border-radius: 10px;
  }

  .dragCircle {
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: move;
    box-sizing: border-box;
    z-index: 999;
    border: 1px solid #000;
    text-align: center;
    border-radius: 50%;
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

  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 440px;
    margin-top: -220px;
    margin-left: -250px;
    border: 1px solid #ccc;
    background: #ebebeb;
    border-radius: 5px;
  }
  .dialog_title{
    padding: 5px 10px;
    justify-content: space-between;
    font-size: 14px;
    background-color: #409EFF;
    color: #fff;
  }

  .dialog_title_close{
    padding: 0 5px;
    cursor: pointer;
  }

  .dialog_content{
    padding: 5% 8%;
    font-size: 14px;
  }
  .dialog_content_item{
    padding: 5px 0;
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

  .dialog_button_small{
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }


  .cha{
    width: 20px;
    height: 20px;
    position: relative;
  }
  .cha::before,
  .cha::after{
    content: "";
    position: absolute;  /*方便进行定位*/
    height: 20px;
    width: 1.5px;
    top: 0px;
    right: 9px;  /*设置top和right使图像在20*20框中居中*/
    background: #fff;
  }
  .cha::before{
    transform: rotate(45deg);  /*进行旋转*/
  }
  .cha::after{
    transform: rotate(-45deg);
  }

  .rightmouse-panel-div {
    background-color: #fff;
    border: 1px solid #bbd8e5;
    border-radius: 4px;
    z-index: 9999;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    position: fixed;
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
  .tag-img{
    background-position: -43px -43px;
  }

  .tag-horizontalLine{
    background-position: -43px -4px;
  }
  .tag-verticalLine{
    background-position: -84px -4px;
  }
  .tag-rounded{
    background-position: -123px -4px;
  }
  .tag-circle{
    background-position: -4px -43px;
  }
  .tag-words{
    background-position: -82px -44px;
  }
  .tag-noteText{
    background-position: -123px -43px;
  }
  .tag-fontColor{
    background-position: -4px -82px;
  }
  .tag-bgColor{
    background-position: -43px -84px;
  }
  .tag-setText{
    background-position: -83px -85px;
  }
</style>
