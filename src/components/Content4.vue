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
      <el-button type="primary" icon="el-icon-edit" circle style="display: inline-block" drag-type="button-circle-primary"></el-button>
      <el-button type="success" icon="el-icon-check" circle style="display: inline-block" drag-type="button-circle-success"></el-button>
      <el-button type="info" icon="el-icon-message" circle style="display: inline-block" drag-type="button-circle-info"></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle style="display: inline-block" drag-type="button-circle-warning"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle style="display: inline-block" drag-type="button-circle-danger"></el-button>
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
    </div>
    <div style="display: inline-block;width: 35%;">
      <el-card class="box-card main_box clearfix" id="box1">
        <div class="leftMenu">
          <ul>
            <li class="left-menu-item">按钮</li>
            <li class="left-menu-item">表单</li>
            <li class="left-menu-item">输入框</li>
            <li class="left-menu-item">按钮</li>
            <li class="left-menu-item">表单</li>
            <li class="left-menu-item">输入框</li>
            <li class="left-menu-item">按钮</li>
            <li class="left-menu-item">表单</li>
            <li class="left-menu-item">输入框</li>
          </ul>
        </div>
        <div class="rightComponent">
          <div class="demonstration-element"><span class="demonstration-element-title"></span>布局</div>
          <div draggable="true" class="drag-item" type="dragRectangle">
            <!--  换行    -->
            <div drag-type="div">换行---</div>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <!--   占位空格   -->
            <div drag-type="span" style="width: 100px;display: inline-block">空格：100px</div>
          </div>

          <div class="demonstration-element"><span class="demonstration-element-title"></span>按钮</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <!--   button   -->
            <el-button drag-type="button-default" style="display: inline-block">默认按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="primary" drag-type="button-primary" style="display: inline-block">主要按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="success" drag-type="button-success" style="display: inline-block">成功按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="warning" drag-type="button-warning" style="display: inline-block">警告按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="info" drag-type="button-info" style="display: inline-block">信息按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="danger" drag-type="button-danger" style="display: inline-block">危险按钮</el-button>
          </div>
          <!--    plain   -->
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="primary" drag-type="button-plain-primary" style="display: inline-block" plain>主要按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="success" drag-type="button-plain-success" style="display: inline-block" plain>成功按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="info" drag-type="button-plain-info" style="display: inline-block" plain>信息按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="warning" drag-type="button-plain-warning" style="display: inline-block" plain>警告按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="danger" drag-type="button-plain-danger" style="display: inline-block" plain>危险按钮</el-button>
          </div>
          <!--    round   -->
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button drag-type="button-round-default" style="display: inline-block" round>圆角按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="primary" drag-type="button-round-primary" style="display: inline-block" round>主要按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="success" drag-type="button-round-success" style="display: inline-block" round>成功按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="info" drag-type="button-round-info" style="display: inline-block" round>信息按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="warning" drag-type="button-round-warning" style="display: inline-block" round>警告按钮</el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="danger" drag-type="button-round-danger" style="display: inline-block" round>危险按钮</el-button>
          </div>
          <!--    round   -->
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button drag-type="button-circle-default" style="display: inline-block" icon="el-icon-search" circle></el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="primary" drag-type="button-circle-primary" style="display: inline-block" icon="el-icon-edit" circle></el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="success" drag-type="button-circle-success" style="display: inline-block" icon="el-icon-check" circle></el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="info" drag-type="button-circle-info" style="display: inline-block" icon="el-icon-message" circle></el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="warning" drag-type="button-circle-warning" style="display: inline-block" icon="el-icon-star-off" circle></el-button>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-button type="danger" drag-type="button-circle-danger" style="display: inline-block" icon="el-icon-delete" circle></el-button>
          </div>

          <div class="demonstration-element"><span class="demonstration-element-title"></span>单选框</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="radio" style="display: inline-block">
              <el-radio v-model="radio" label="1">备选项</el-radio>
              <el-radio v-model="radio" label="2">备选项</el-radio>
            </div>
          </div>
          <div class="demonstration-element"><span class="demonstration-element-title"></span>多选框</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-checkbox drag-type="checkbox" style="display: inline-block" v-model="checked" >备选项</el-checkbox>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="checkbox-group" style="display: inline-block">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="demonstration-element"><span class="demonstration-element-title"></span>下拉框</div>
          <div class="demonstration-element"><span class="demonstration-element-title"></span>输入框</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-input
              style="display: inline-block" drag-type="input-attr-search"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input2">
            </el-input>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-input
              style="display: inline-block" drag-type="input-slot-date"
              placeholder="请选择日期"
              v-model="input3">
              <i slot="suffix" class="el-input__icon el-icon-date"></i>
            </el-input>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <el-input
              style="display: inline-block" drag-type="input-slot-search"
              placeholder="请输入内容"
              v-model="input4">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>

          <div class="demonstration-element"><span class="demonstration-element-title"></span>表格</div>
          <div draggable="true" class="drag-item" type="dragRectangle">
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
          </div>

        </div>
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
    <div style="display: inline-block;width: 14.3%;">
      <el-card class="box-card main_box clearfix">
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
        <!--   占位空格    -->
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
                <label class="layui-form-label" style="text-align: left">Text</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-button" >
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">点击事件</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="事件名" autocomplete="off" class="layui-input drag-type-button">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    input    -->
        <div class="operate" drag-type="input">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">提示</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-input" >
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">绑定数据</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-input" >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    table    -->
        <div class="operate" drag-type="table">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">表名</label>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-table" >
                </div>
              </div>
              <el-divider content-position="left">column</el-divider>
              <div class="layui-form-item">
                <div class="layui-form-label" style="text-align: left">
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-xs drag-column-add"><i class="layui-icon"></i></button>
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-xs drag-column-remove"><i class="layui-icon"></i></button>
                </div>
                <div class="layui-input-block">
                  <input type="text" name="title" required  lay-verify="required" placeholder="中文" autocomplete="off" class="layui-input drag-type-table1 panelTableInput" >
                  <input type="text" name="title" required  lay-verify="required" placeholder="English" autocomplete="off" class="layui-input drag-type-table2 panelTableInput" >
                  <input type="text" name="title" placeholder="宽度" autocomplete="off" class="layui-input drag-type-table3 panelTableInput">
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-button class="operate-submit">保存</el-button>
      </el-card>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Content4',
    data(){
      return{
        checkList: ['选中且禁用','复选框 A'],
        checked: true,
        radio: '',
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
        codeElementData: [
          // 内部数据格式
          // { id: '', type: '', style: [ { name: '', data: '' }], data: [ { name: '', data: '' } ], attr: [ { name: '', data: '' } ],
          // methods: [ { name: '', data: '' } ], content1: '', content2:'', content3: '', text: '' }
        ], // 保存生成代码元素相关数据
        methodsCache: '',
      }
    },
    methods: {
      /*
      * 获取生成代码元素
      * */
      getCodeElement(){
        let that = this;
        $('.panel-element').each(function(i){
          let type = $(this).children(0).attr('drag-type');
          if(type === undefined){ // el-input 这些特殊
            type = $(this).children(0).children(0).attr('drag-type');
          }
          let temp1 = that.$store.state.componentElem.filter(item => item.type === type);
          let data = temp1[0];
          let index = that.codeElementData.findIndex(item => item.id === $(this).attr('id'));
          that.codeElementData[index].content1 = data.content1;
          that.codeElementData[index].content2 = data.content2;
          that.codeElementData[index].content3 = data.content3;
        })
        console.log(that.codeElementData);
        this.generateCode();
      },
      generateStyle(item){
        let style = ''; // 记录style 数据
        if(item.style !== undefined && item.style !== '' && item.style !== null && item.style.length > 0){
          style = 'style="';
          item.style.forEach(function(i, index){
            style += i.name + ": " + i.data + '; ';
          })
          style += '"';
        }
        console.log('style: ' + style)
        return style;
      },
      generateAttr(item){
        let attr = ''; // 记录 attr 数据
        if(item.attr !== undefined && item.attr !== '' && item.attr !== null && item.attr.length > 0){
          item.attr.forEach(function(i, index){
            attr += i.name + '="' + i.data + '" ';
          })
        }
        console.log('attr: ' + attr)
        return attr;
      },
      generateMothods(item){
        let methods = ''; // 记录 methods 数据
        let that = this;
        if(item.methods !== undefined && item.methods !== '' && item.methods !== null && item.methods.length > 0){
          item.methods.forEach(function(i, index){
            methods += i.name + '="' + i.data + '" ';
            that.methodsCache = '\n' + i.data + '(){},'
          })
        }
        console.log('methods: ' + methods)
        return methods;
      },
      // :data="tableData"
      generateTableColumn(tableData, item){
        console.log('tableData')
        console.log(tableData)
        console.log(item)
        let index1 = item.data.findIndex(i => i.name === 'table');
        let data = ' :data="' + item.data[index1].data + '">\n ';
        // 拼接column
        let index2 = item.data.findIndex(i => i.name === 'column');
        let columns = index2 !== -1?item.data[index2].data : '';
        //   <el-table-column
        // prop="date"
        // label="日期"
        // width="180">
        //   </el-table-column>
        if(columns !== '' && columns.length > 0){
          columns.forEach(function(i2, index){
            let width = '';
            if(i2.width !== undefined && i2.width !== null && i2.width.trim() !== ''){
              width = 'width: "' + i2.width + '"\n';
            }
            data += tableData.content21 + ' prop="' + i2.english + '"\n ' +
              'label="' + i2.chinese + '"\n ' + width + tableData.content22;
          })
        }
        console.log('table: ' + data)
        return data;
      },
      /*
      ** 生成代码
       */
      generateCode(){
        let that = this;
        let result = '<template>\n<div>\n';
        let temData = '';
        let cacheList = [];
        // 缓存table
        let temp1 = this.$store.state.componentElem.filter(item => item.type.substr(0, 5) === 'table');
        let data = temp1[0];
        that.codeElementData.forEach(function(item, index){
          let style = that.generateStyle(item);
          let attr = that.generateAttr(item);
          let methods = that.generateMothods(item);
          let text = item.text;
          if(item.type.length > 5 && item.type.substr(0, 5) === 'table'){
            result += '\t' + item.content1 + style + attr + methods +
              that.generateTableColumn(data, item) + item.content2 + text + item.content3 + '\n';
            // data
            let table = item.data.filter(i => i.name === 'table');
            console.log(table)
            if(table.length > 0){
              let temList = cacheList.filter(i => i.name === table[0].data);
              if(temList.length === 0){ // 判断是否去重
                cacheList.push({ name: table[0].data, data: [] });
                temData += '\n\t\t' + table[0].data + ': [],';
              }
            }
          }else{
            result += '\t' + item.content1 + style + attr + methods + item.content2 + text + item.content3 + '\n';
            if(item.type.length > 5 && item.type.substr(0, 5) === 'input'){ // input
              let index1 = item.attr.findIndex(i => i.name === 'v-model')
              if(index1 !== -1){
                temData += '\n\t\t' + item.attr[index1].data + ': "", '
              }
            }
            if(item.data !== '' && item.data !== [] && item.data !== undefined && item.data.length > 0){
              let temList = cacheList.filter(i => i.name === item.data.name);
              if(temList.length === 0){ // 判断是否去重
                cacheList.push(item.data);
                temData += '\n\t\t' + item.data.name + ': ' + item.data.data + ', ';
              }
            }
          }
        });
        result += '</div>\n</template>\n\n<script>\nexport default {' +
          '\n\tprops: [],\n\tcomponents: {},\n\tdata() {\n\t\treturn {';
        result += temData;
        result += '\n\t}\n},\nmounted() {},\nmethods: {';
        result += that.methodsCache;
        result += '\n},\n}\n<\/script>\n\n<style scoped>\n</style>';
        console.log(result)
        return result;
      }
    },
    mounted () {
      $('.el-card__body').css('padding', '2px');
      $(document).on('click', '.left-menu-item', function(){
        $('.left-menu-item').removeClass('left-menu-item-active');
        $(this).addClass('left-menu-item-active');
      });


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

      var movePx = 3;  //全局移动点
      var isCopy = false;
      var isDialog = false;

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
       * 移除指定元素下所有元素尺寸控制器，实现点击一个元素，其他元素控制器隐藏
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
        let data = { id: '', type: [], style: '', data: [], attr: [],
          methods: [], content1: '' , content2: '', text: '', content3: ''};
        data.id = $elem.attr('id');
        data.type = getDragType($elem);
        let tempList = that.$store.state.componentElem.filter(item => item.type === data.type)
        data.style = tempList[0].style;
        that.codeElementData.push(data);
      }
      let $chooseElem = '';
      let $chooseElemPanel = '';
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
      // 显示操作面板
      function operateHideOrShow(type){
        $('.operate-submit').show();
        $('.operate').each(function(i){
          let dragType = $(this).attr('drag-type');
          if(dragType === type){
            $chooseElemPanel = $(this)
            $(this).show()
          }else if(type.length >= 6 && type.substr(0, 6).trim() === dragType){ // button
            $chooseElemPanel = $(this)
            $(this).show()
          }else if(type.length >= 5 && type.substr(0, 5).trim() === dragType){  // input | table
            $chooseElemPanel = $(this)
            $(this).show()
          }else{
            $(this).hide()
          }
        });
      }
      // table 操作面板 column 添加
      $(document).on('click', '.drag-column-add', function(e){
        let item = $(this).parent().parent().clone();
        item.children(1).children(0).val('');
        $(this).parent().parent().parent().append(item);
      });
      // table 操作面板 column 删除
      $(document).on('click', '.drag-column-remove', function(e){
        if($('.drag-column-remove').length > 1){
          $(this).parent().parent().remove();
        }
      });
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
      // 点击保存操作面板
      $(document).on('click', '.operate-submit', function(e){
        let type = $chooseElemPanel.attr('drag-type');
        if(type === 'span'){  // 监控占位空格改变宽度
          dragTypeSpan();
        }else if(type === 'button'){  // 监控按钮绑定数据
          dragTypeButton();
        }else if(type === 'input'){ // 监控input绑定数据
          dragTypeInput();
        }else if(type === 'table'){ // 监控 table 绑定数据
          dragTypeTable();
        }
      });

      // 绑定attr 数据
      function bingAttr(index1, name, value){
        let index2 = that.codeElementData[index1].attr.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].attr.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].attr[index2].data = value;
        }
      }
      // 绑定 data 数据
      function bingData(index1, name, value){
        let index2 = that.codeElementData[index1].data.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].data.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].data[index2].data = value;
        }
      }
      // 绑定 methods 数据
      function bingMethods(index1, name, value){
        let index2 = that.codeElementData[index1].methods.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].methods.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].methods[index2].data = value;
        }
      }
      // 绑定 style 数据
      function bingStyle(index1, name, value){
        let index2 = that.codeElementData[index1].data.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].style.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].style[index2].data = value;
        }
      }
      // 监控占位空格改变宽度
      function dragTypeSpan(){
        let width = $('.drag-type-span').val() + 'px';
        $chooseElem.css('width', width)
        $chooseElem.children(0).text('空格：' + width);
        // 改变绑定缓存数据
        let index1 = that.codeElementData.findIndex(item => item.id === $chooseElem.attr('id'));
        bingStyle(index1, 'width', width);
        that.$message.success('保存成功');
      }
      // 监控按钮绑定数据
      function dragTypeButton(e){
        $('.drag-type-button').each(function(i){
          // 改变绑定缓存数据
          let index1 = that.codeElementData.findIndex(item => item.id === $chooseElem.attr('id'));
          let text = $(this).parent().prev().text();
          let value = $(this).val();
          if(text === 'Text'){  // 按钮文本
            that.codeElementData[index1].text = $(this).val();
          }else if(text === '点击事件'){
            bingMethods(index1, '@click', value)
          }
        });
        console.log(that.codeElementData)
        that.$message.success('保存成功');
      }
// 监控input绑定数据
      function dragTypeInput(e){
        // 改变绑定缓存数据
        let index1 = that.codeElementData.findIndex(item => item.id === $chooseElem.attr('id'));
        $('.drag-type-input').each(function(i){
          let text = $(this).parent().prev().text();
          let value = $(this).val();
          if(text === '提示'){  // 表名
            bingAttr(index1, 'placeholder', value)
          }else if(text === '绑定数据'){
            bingAttr(index1, 'v-model', value)
          }
        });
        that.$message.success('保存成功');
      }
      // 监控 table 绑定数据
      function dragTypeTable(e){
        // 保存前把列表清空
        let index1 = that.codeElementData.findIndex(item => item.id === $chooseElem.attr('id'));
        let index = that.codeElementData[index1].data.findIndex(item => item.name === 'column');
        if(index === -1){
          that.codeElementData[index1].data.push({ name: 'column', data: [] })
        }else{
          that.codeElementData[index1].data[index].data = [];
        }
        $('.drag-type-table').each(function(i){
          // 改变绑定缓存数据
          let text = $(this).parent().prev().text();
          let value = $(this).val();
          if(value.trim() === ''){
            return true;
          }
          if(text === '表名'){  // 表名
            bingData(index1, 'table', value)
          }
        });
        $('.drag-type-table1').each(function(i){
          // 改变绑定缓存数据
          let chineseName = $(this).val();
          let englishName = $(this).next().val();
          let width = $(this).next().next().val();
          if(chineseName.trim() === ''){
            return true;
          }
          let value = { chinese: chineseName, english: englishName, width: width };
          let index2 = that.codeElementData[index1].data.findIndex(item => item.name === 'column');
          if(index2 === -1){
            that.codeElementData[index1].data.push({ name: 'column', data: [ value ] })
          }else{
            that.codeElementData[index1].data[index2].data.push(value);
          }
        });
        console.log(that.codeElementData)
        that.$message.success('保存成功');
      }
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
  *, ::before, ::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

  }
  .demonstration-element-title{
    border-left: 4px solid #4dba87;
    border-radius: 2px;
    padding-left: 5px;
  }
  .demonstration-element {
    font-size: 12px;
    color: #1f2f3d;
    padding: 10px 0 10px 5px;
    vertical-align: middle;

  }
  .left-menu-item{
    font-size: 16px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 12px 10px;
    /*border-bottom: 2px solid #fff;*/
  }
  .left-menu-item:hover{
    background-color: #ecf5ff;
    border-radius: 5px;
    color: #409eff;

  }
  .left-menu-item-active{
    border-right: 3px solid #13ce66;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .leftMenu{
    float: left;
    width: 18%;
    height: 985px;
    border-right: 1px solid #ccc;
  }
  .rightComponent{
    float: left;
    width: 81%;
    height: 985px;
    padding: 2px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .panelTableInput{
    width: 55px;
    display: inline-block;
    padding-left: 5px;
  }
  .operate-submit{
    display: none;
    margin: 10px 0 10px 20px ;
  }
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
  .el-card__body{
    padding: 5px
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
