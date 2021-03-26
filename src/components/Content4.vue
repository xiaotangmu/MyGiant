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
            <li class="left-menu-item" name="layout">布局</li>
            <li class="left-menu-item" name="button">按钮</li>
            <li class="left-menu-item" name="radio">单选框</li>
            <li class="left-menu-item" name="checkbox">多选框</li>
            <li class="left-menu-item" name="input">输入框</li>
            <li class="left-menu-item" name="counter">计数器</li>
            <li class="left-menu-item" name="select">选择框</li>
            <li class="left-menu-item" name="cascade-select">级联选择框</li>
            <li class="left-menu-item" name="time-select">时间选择</li>
            <li class="left-menu-item" name="date-select">日期选择</li>
            <li class="left-menu-item" name="datetime-select">日期时间选择</li>
            <li class="left-menu-item" name="switch">开关</li>
            <li class="left-menu-item" name="slide">滑块</li>
            <li class="left-menu-item" name="table">表格</li>
          </ul>
        </div>
        <div class="rightComponent">
          <div class="demonstration-element" name="layout"><span class="demonstration-element-title"></span>布局</div>
          <div draggable="true" class="drag-item" type="dragRectangle">
            <!--  换行    -->
            <div drag-type="div">换行---</div>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <!--   占位空格   -->
            <label drag-type="span" style="width: 100px;display: inline-block">空格：100px</label>
          </div>

          <div class="demonstration-element" name="button"><span class="demonstration-element-title"></span>按钮</div>
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
<!--        单选框 -->
          <div class="demonstration-element" name="radio"><span class="demonstration-element-title"></span>单选框</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="radio" style="display: inline-block">
              <el-radio v-model="radio" label="1">备选项</el-radio>
              <el-radio v-model="radio" label="2">备选项</el-radio>
            </div>
          </div>
<!--          多选框 -->
          <div class="demonstration-element" name="checkbox"><span class="demonstration-element-title"></span>多选框</div>
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
          <!-- 输入框 -->
          <div class="demonstration-element" name="input"><span class="demonstration-element-title"></span>输入框</div>
          <div class="demonstration-element">可清除，密码框，禁止输入</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="input-default" style="display: inline-block">
              <el-input
                placeholder="请输入内容"
                v-model="input1">
              </el-input>
            </div>
          </div>
          <div class="demonstration-element">带 icon 的输入框 </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="input-attr-search" style="display: inline-block">
              <el-input
                placeholder="请选择内容"
                suffix-icon="el-icon-search"
                v-model="input1">
              </el-input>
            </div>
          </div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="input-attr-search" style="display: inline-block">
              <el-input
                placeholder="请输入日期"
                prefix-icon="el-icon-date"
                v-model="input2">
              </el-input>
            </div>
          </div>
          <!-- 计数器 -->
          <div class="demonstration-element" name="counter"><span class="demonstration-element-title"></span>计数器</div>
          <div class="demonstration-element">禁止，最大最小值，步数, 绑定change事件, 精度</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="counter" style="display: inline-block">
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
          </div>
          <!--          选择框 -->
          <div class="demonstration-element" name="select"><span class="demonstration-element-title"></span>选择框</div>
          <div class="demonstration-element">单选，多选，禁止选择，可清除，可搜索</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="select" style="display: inline-block">
              <el-select v-model="selectValue" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">npm
                </el-option>
              </el-select>
            </div>
          </div>
          <!--  级联选择框 -->
          <div class="demonstration-element" name="cascade-select"><span class="demonstration-element-title"></span>级联选择框</div>
          <div class="demonstration-element">单选，多选，禁止选择，可清除，可搜索</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="cascade-select" style="display: inline-block">
              <el-cascader
                v-model="value"
                :options="options2"
                @change="handleChange"></el-cascader>
            </div>
          </div>
          <!--  时间选择 -->
          <div class="demonstration-element" name="time-select"><span class="demonstration-element-title"></span>时间选择</div>
          <div class="demonstration-element">固定时间点</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-time-select
                v-model="value"
                :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
                placeholder="选择时间">
              </el-time-select>
            </div>
          </div>
          <div class="demonstration-element">任意时间点, 最大最小</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-all" style="display: inline-block">
              <el-time-picker
                v-model="value1"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点">
              </el-time-picker>
            </div>
          </div>
          <div class="demonstration-element">固定时间范围</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
              </el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
              </el-time-select>
            </div>
          </div>
          <div class="demonstration-element">任意时间范围</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-time-picker
                is-range
                v-model="value1"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
              </el-time-picker>
            </div>
          </div>
          <!--  日期选择 -->
          <div class="demonstration-element" name="date-select"><span class="demonstration-element-title"></span>日期选择</div>
          <div class="demonstration-element">默认</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="date-select-default" style="display: inline-block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
          <div class="demonstration-element">快捷选择</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <div class="demonstration-element">其他日期单位</div>
          <span class="demonstration">周</span>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-date-picker
                v-model="value1"
                type="week"
                format="yyyy 第 WW 周"
                placeholder="选择周">
              </el-date-picker>
            </div>
          </div>
          <span class="demonstration">月</span>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择月">
              </el-date-picker>
            </div>
          </div>
          <span class="demonstration">年</span>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="time-select-fixed" style="display: inline-block">
              <el-date-picker
                v-model="value"
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </div>
          </div>
          <!--  日期时间选择 -->
          <div class="demonstration-element" name="datetime-select"><span class="demonstration-element-title"></span>日期时间选择</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="date-select-default" style="display: inline-block">
              <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </div>
          <!--  开关 -->
          <div class="demonstration-element" name="switch"><span class="demonstration-element-title"></span>开关</div>
          <div class="demonstration-element">基本用法, 禁止</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="switch" style="display: inline-block">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </div>
          </div>
          <div class="demonstration-element">文本描述, 颜色</div>
          <div draggable="true" class="drag-item" type="dragRectangle" style="display: inline-block">
            <div drag-type="switch" style="display: inline-block">
              <el-switch
                style="display: block"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费">
              </el-switch>
            </div>
          </div>
          <!--  滑块 -->
          <div class="demonstration-element" name="slide"><span class="demonstration-element-title"></span>滑块</div>
          <div class="demonstration-element">初始值, 禁止, 提示</div>
          <div draggable="true" class="drag-item" type="dragRectangle">
            <div drag-type="slide">
              <el-slider v-model="value2"></el-slider>
            </div>
          </div>

          <div class="demonstration-element" name="table"><span class="demonstration-element-title"></span>表格</div>
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
<!--        <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>-->
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
                  <input type="text" name="title" required  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-span" classify="width" value="100">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">文字</label>
                <div class="layui-input-block">
                  <input type="text" name="title"  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-span" classify="text" >
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
                  <input type="text" name="title" lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-input" >
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">绑定数据</label>
                <div class="layui-input-block">
                  <input type="text" name="title" lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-input" >
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">属性</label>
                <div class="layui-input-block">
                  <div><input type="checkbox" name="like[write]" title="写作" class="input-panel-checkbox" classify="password"><span class="checkbox-span">密码框</span></div>
                  <div><input type="checkbox" name="like[write]" title="写作" class="input-panel-checkbox" classify="clearable"><span class="checkbox-span">可清除</span></div>
                  <div><input type="checkbox" name="like[write]" title="写作" class="input-panel-checkbox" classify="disabled"><span class="checkbox-span">禁止输入</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    radio    -->
        <div class="operate" drag-type="radio">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">分类</label>
                <div class="layui-input-block">
                  <input type="text" name="title"  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-radio" classify="category" >
                </div>
              </div>
              <el-divider content-position="left">绑定数据</el-divider>
              <div class="layui-form-item">
                <div class="layui-form-label" style="text-align: left">
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-xs drag-column-add"><i class="layui-icon"></i></button>
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-xs drag-column-remove"><i class="layui-icon"></i></button>
                </div>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="显示文本" autocomplete="off" class="layui-input drag-type-radio panelTableInput" classify="show">
                  <input type="text" name="title" placeholder="绑定值" autocomplete="off" class="layui-input drag-type-radio panelTableInput" classify="value">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    checkbox    -->
        <div class="operate" drag-type="checkbox">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">显示字段</label>
                <div class="layui-input-block">
                  <input type="text" name="title"  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-singleCheckbox" classify="display" >
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">绑定数据</label>
                <div class="layui-input-block">
                  <input type="text" name="title"  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-singleCheckbox" classify="data" >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    checkbox-group    -->
        <div class="operate" drag-type="checkbox-group">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">分类</label>
                <div class="layui-input-block">
                  <input type="text" name="title"  lay-verify="required" placeholder="请输入内容" autocomplete="off" class="layui-input drag-type-checkbox-group" classify="category" >
                </div>
              </div>
              <el-divider content-position="left">绑定数据</el-divider>
              <div class="layui-form-item">
                <div class="layui-form-label" style="text-align: left">
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-xs drag-column-add"><i class="layui-icon"></i></button>
                  <button type="button" class="layui-btn layui-btn-primary layui-btn-xs drag-column-remove"><i class="layui-icon"></i></button>
                </div>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="显示文本" autocomplete="off" class="layui-input drag-type-checkbox-group panelTableInput" classify="show">
                  <input type="text" name="title" placeholder="绑定值" autocomplete="off" class="layui-input drag-type-checkbox-group panelTableInput" classify="value">
<!--                  <el-checkbox label="disabled" class="checkbox-group-disable" classify="disabled">禁止输入</el-checkbox>-->
<!--                  <el-checkbox label="choose" class="checkbox-group-isCheck" classify="isCheck"></el-checkbox>-->
                  <div><input type="checkbox" name="like[write]" title="写作" class="checkbox-group-disable" classify="disabled"><span class="checkbox-span">禁止输入</span></div>
                  <div><input type="checkbox" name="like[write]" title="写作" class="checkbox-group-isCheck" classify="isCheck"><span class="checkbox-span">是否勾选</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    counter    -->
        <div class="operate" drag-type="counter">
          <div class="layui-card">
            <div class="layui-card-body">
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">显示字段</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="绑定数据" autocomplete="off" class="layui-input drag-type-counter " classify="show">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">显示字段</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="绑定数据" autocomplete="off" class="layui-input drag-type-counter " classify="show">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">初始值</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="初始值 " autocomplete="off" class="layui-input drag-type-counter " classify="value">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">最小值</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="最小值" autocomplete="off" class="layui-input drag-type-counter " classify="value">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">最大值</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="最大值" autocomplete="off" class="layui-input drag-type-counter " classify="value">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">步数</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="步数" autocomplete="off" class="layui-input drag-type-counter " classify="value">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">精度位数</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="精度位数" autocomplete="off" class="layui-input drag-type-counter " classify="value">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">Change事件</label>
                <div class="layui-input-block">
                  <input type="text" name="title" placeholder="Change事件" autocomplete="off" class="layui-input drag-type-counter " classify="value">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">按钮位置</label>
                <div class="layui-input-block">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in counterPanelOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label" style="text-align: left">属性</label>
                <div class="layui-input-block">
                  <div><input type="checkbox" name="like[write]" title="写作" class="counter-panel-checkbox" classify="disabled"><span class="checkbox-span">禁止输入</span></div>
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
        counterPanelOptions: [{ // 计数器的按钮位置选择数据
          value: 'default',
          label: '默认'
        },{
          value: 'left',
          label: '左边'
        },{
          value: 'right',
          label: '右边'
        }],
        inputPanelAttr: [], //
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        startTime: '',
        endTime: '',
        options2: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        num: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎',
          disabled: false
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selectValue: '',
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
      handleChange(value) {
        console.log(value);
      },
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
      generateMethods(item){
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
          let methods = that.generateMethods(item);
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
      },
      generateRadio(style, attr, methods, text, data){

      }
    },
    mounted () {
      // 点击跳转到指定位置
      $(document).on('click', '.left-menu-item', function(){
        let name = $(this).attr('name');
        $('.demonstration-element').each(function(i){
          let name2 = $(this).attr('name');
          if(name2 !== undefined && name2 === name){
            $(this).parent().animate({scrollTop: $(this).position().top + $(this).parent().scrollTop()}, 500);
          }
        });
      });
      $('.el-card__body').css('padding', '2px');
      $(document).on('click', '.left-menu-item', function(){
        $('.left-menu-item').removeClass('left-menu-item-active');
        $(this).addClass('left-menu-item-active');
      });

      let that = this;
      // $('#component-modal').children().each(function(i){
      //   var $div = $('<div draggable="true" class="drag-item" type="dragRectangle">\n' +
      //   '        </div>').append($(this)).css('display', $(this).css('display'));
      //   $("#box1").append($div);
      // });
      //标尺尺寸
      var rulerSize = 30;
      //左侧工具栏尺寸
      var leftUtilsSize = $('.leftUtils').innerWidth();
      var currentEle = null; // 缓存当前拖动的元素
      var clickEle = [];  //缓存当前选中元素
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
        let index1 = that.codeElementData.findIndex(item => item.id === $chooseElem.attr('id'));
        let type = $chooseElemPanel.attr('drag-type');
        if(type === 'span'){  // 监控占位空格改变宽度
          dragTypeSpan(index1);
        }else if(type === 'button'){  // 监控按钮绑定数据
          dragTypeButton(index1);
        }else if(type === 'input'){ // 监控input绑定数据
          dragTypeInput(index1);
        }else if(type === 'table'){ // 监控 table 绑定数据
          dragTypeTable(index1);
        }else if(type === 'radio'){ // 监控 radio 绑定数据
          dragTypeRadio(index1);
        }else if(type === 'checkbox-group'){  // 监控 checkbox-group 多选框组绑定数据
          dragTypeCheckBoxGroup(index1)
        }else if(type === 'checkbox'){  // 监控 checkbox 多选框绑定数据
          dragTypeCheckBox(index1);
        }
      });

      // 绑定attr 数据
      function bindAttr(index1, name, value){
        let index2 = that.codeElementData[index1].attr.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].attr.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].attr[index2].data = value;
        }
      }
      // 绑定 data 数据
      function bindData(index1, name, value){
        let index2 = that.codeElementData[index1].data.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].data.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].data[index2].data = value;
        }
      }
      // 绑定 methods 数据
      function bindMethods(index1, name, value){
        let index2 = that.codeElementData[index1].methods.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].methods.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].methods[index2].data = value;
        }
      }
      // 绑定 text 数据
      function bindText(index1, value){
        that.codeElementData[index1].text = value;
      }
      // 绑定 style 数据
      function bindStyle(index1, name, value){
        let index2 = that.codeElementData[index1].data.findIndex(item => item.name === name);
        if(index2 === -1){
          that.codeElementData[index1].style.push({ name: name, data: value })
        }else{
          that.codeElementData[index1].style[index2].data = value;
        }
      }
      // 监控占位空格改变宽度
      function dragTypeSpan(index1){
        // 改变绑定缓存数据
        $('.drag-type-span').each(function(i){
          let value = $(this).val();
          if($(this).attr('classify') === 'text'){
            bindText(index1, value)
          }else{
            let width = value + 'px';
            $chooseElem.css('width', width)
            $chooseElem.children(0).text('空格：' + width);
            bindStyle(index1, 'width', width);
          }
        });
        that.$message.success('保存成功');
      }
      // 监控按钮绑定数据
      function dragTypeButton(index1){
        $('.drag-type-button').each(function(i){
          // 改变绑定缓存数据
          let text = $(this).parent().prev().text();
          let value = $(this).val();
          if(text === 'Text'){  // 按钮文本
            that.codeElementData[index1].text = $(this).val();
          }else if(text === '点击事件'){
            bindMethods(index1, '@click', value)
          }
        });
        console.log(that.codeElementData)
        that.$message.success('保存成功');
      }
      // 监控单选按钮绑定数据
      function dragTypeRadio(index1){
        // 改变绑定缓存数据
        let model = '';
        let data = [];
        $('.drag-type-radio').each(function(i){
          model = $(this).val();
          let classify = $(this).attr('classify');
          if(classify === 'category'){
            console.log('v-model')
            bindAttr(index1, 'v-model', model);
          }else if(classify === 'show'){
            let text = $(this).val();
            let value = $(this).next().val();
            data.push({ name: text, data: value });
          }
        });
        bindData(index1, 'model', data);
        console.log(that.codeElementData)
        that.$message.success('保存成功');
      }
      // 监控input绑定数据
      function dragTypeInput(index1){
        // 改变绑定缓存数据
        $('.drag-type-input').each(function(i){
          let text = $(this).parent().prev().text();
          let value = $(this).val();
          if(text === '提示'){
            bindAttr(index1, 'placeholder', value)
          }else if(text === '绑定数据'){
            bindAttr(index1, 'v-model', value)
            bindData(index1, value, '')
          }
        });
        // 改变属性
        $('.input-panel-checkbox').each(function(i){
          let isChecked = $(this)[0].checked;
          let classify = $(this).attr('classify');
          if(classify === 'password'){
            bindAttr(index1, 'show-password', '')
          }else if(classify === 'clearable'){
            bindAttr(index1, 'clearable', '')
          }else if(classify === 'disabled'){
            bindAttr(index1, ':disabled', 'true')
          }
        });
        console.log(that.codeElementData)
        that.$message.success('保存成功');
      }
      // 监控 checkbox-group 绑定数据
      function dragTypeCheckBoxGroup(index1){
        // 改变绑定缓存数据
        let model = '';
        let data = [];
        $('.drag-type-checkbox-group').each(function(i){
          model = $(this).val();
          let classify = $(this).attr('classify');
          if(classify === 'category'){
            bindAttr(index1, 'v-model', model);
          }else if(classify === 'show'){
            let text = $(this).val();
            let value = $(this).next().val();
            let disabled = $(this).next().next().children()[0].checked;
            let isChecked = $(this).next().next().next().children()[0].checked;
            data.push({ name: 'disabled', data: disabled });
            data.push({ name: 'isChecked', data: isChecked });
            data.push({ name: text, data: value });
          }
        });
        bindData(index1, 'model', data);
        that.$message.success('保存成功');
      }
      // 监控 single-checkbox 绑定数据
      function dragTypeCheckBox(index1){
        // 改变绑定缓存数据
        let model = '';
        $('.drag-type-singleCheckbox').each(function(i){
          model = $(this).val();
          let classify = $(this).attr('classify');
          if(classify === 'data'){
            bindAttr(index1, 'v-model', model);
          }else if(classify === 'display'){
            let text = $(this).val();
            bindText(index1, text);
          }
        });
        bindData(index1, model, '' );
        console.log(that.codeElementData)
        that.$message.success('保存成功');
      }
      // 监控 table 绑定数据
      function dragTypeTable(index1){
        // 保存前把列表清空
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
            bindData(index1, 'table', value)
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
  .checkbox-span{
    padding-left: 10px ;
  }
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
    position: relative;
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
    height: 980px;

  }
  .rightComponent{
    float: left;
    width: 81%;
    height: 980px;
    overflow: auto;
    padding: 2px;
    border-left: 1px solid #ccc;
    position: relative;
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
  .layui-form-label{
    padding: 9px 0;
  }
</style>
