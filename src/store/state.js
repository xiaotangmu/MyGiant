

export default {
  componentElem: [
    // 换行
    { content1: '<div ', content2: '>', content3: '</div>', style: '', type: 'div', display: 'block', data: '' }, // 用作换行
    // 占位inline block
    { content1: '<div ', content2: '>', content3: '</div>', style: [ { name: 'width', data: '100px' }, { name: 'display', data: 'inline-block' } ], type: 'span', display: 'inline-block', data: '' }, // 用作换行
    // button
    //
    { content1: '<el-button ', content2: '>', content3: '</el-button>', style: '', type: 'button-default', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="primary">', content3: '</el-button>', style: '', type: 'button-primary', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="success">', content3: '</el-button>', style: '', type: 'button-success', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="warning">', content3: '</el-button>', style: '', type: 'button-warning', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="info">', content3: '</el-button>', style: '', type: 'button-info', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="danger">', content3: '</el-button>', style: '', type: 'button-danger', display: 'inline-block', data: '' },
    //plain
    { content1: '<el-button ', content2: 'plain>', content3: '</el-button>', style: '', type: 'button-plain-default', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="primary" plain>', content3: '</el-button>', style: '', type: 'button-plain-primary', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="success" plain>', content3: '</el-button>', style: '', type: 'button-plain-success', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="warning" plain>', content3: '</el-button>', style: '', type: 'button-plain-warning', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="info" plain>', content3: '</el-button>', style: '', type: 'button-plain-info', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="danger" plain>', content3: '</el-button>', style: '', type: 'button-plain-danger', display: 'inline-block', data: '' },
    // circle
    { content1: '<el-button ', content2: 'icon="el-icon-search" circle>', content3: '</el-button>', style: '', type: 'button-circle-default', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="primary" icon="el-icon-edit" circle>', content3: '</el-button>', style: '', type: 'button-circle-primary', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="success" icon="el-icon-check" circle>', content3: '</el-button>', style: '', type: 'button-circle-success', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="info" icon="el-icon-message" circle>', content3: '</el-button>', style: '', type: 'button-circle-info', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="warning" icon="el-icon-star-off" circle>', content3: '</el-button>', style: '', type: 'button-circle-warning', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="danger" icon="el-icon-delete" circle>', content3: '</el-button>', style: '', type: 'button-circle-danger', display: 'inline-block', data: '' },
    // round
    { content1: '<el-button ', content2: 'round>', content3: '</el-button>', style: '', type: 'button-round-default', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="primary" round>', content3: '</el-button>', style: '', type: 'button-round-primary', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="success" round>', content3: '</el-button>', style: '', type: 'button-round-success', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="info" round>', content3: '</el-button>', style: '', type: 'button-round-info', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="warning" round>', content3: '</el-button>', style: '', type: 'button-round-warning', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="danger" round>', content3: '</el-button>', style: '', type: 'button-round-danger', display: 'inline-block', data: '' },
    // radio
    { content1: '<el-radio ', content2: ' >', content3: '</el-radio>', style: '', type: 'radio', display: 'inline-block', data: '' },
    // checkbox
    { content1: '<el-checkbox ', content2: ' >', content3: '</el-checkbox>', style: '', type: 'checkbox', display: 'inline-block', data: '' },
    // checkbox-group
    { content1: '<el-checkbox-group ', content2: ' >', content3: '</el-checkbox-group>', style: '', type: 'checkbox-group', display: 'inline-block', data: '' },
    // counter
    { content1: '<el-input-number ', content2: ' >', content3: '</el-input-number>', style: '', type: 'counter', display: 'inline-block', data: '' },
    // select
    { content1: '<el-select placeholder="请选择" ', content2: ' >', content21: ' \n<el-option\n', content22: ' :key="item.value"\n' +
        '      :label="item.label"\n' +
        '      :value="item.value"\n' +
        '      :disabled="item.disabled"  >\n</el-option>\n',
      content3: '</el-select>', style: [ ], type: 'select', display: 'inline-block', data: [] },
    // cascade-select 级联选择器
    { content1: '<el-cascader ', content2: ' >',
      content3: '</el-cascader>', style: [ ], type: 'cascade-select', display: 'inline-block', data: [] },
    // time-select-fixed 时间选择器，特定范围，特定相隔时间
    { content1: '<el-time-select ', content2: ' placeholder="选择时间">',
      content3: '</el-time-select>', style: [ ], type: 'time-select-fixed', display: 'inline-block', data: [] },
    // time-select-fixed-range 时间选择器，特定范围，特定相隔时间
    { content1: '<el-time-select ', content2: ' placeholder="选择时间">',
      content3: '</el-time-select>', style: [ ], type: 'time-select-fixed-range', display: 'inline-block', data: [] },
    // time-select 时间选择器，任意
    { content1: '<el-time-picker ', content2: ' placeholder="选择时间">',
      content3: '</el-time-picker>', style: [ ], type: 'time-select', display: 'inline-block', data: [] },
    // time-select-range 时间选择器，任意
    { content1: '<el-time-picker is-range range-separator="至"\n' +
        '    start-placeholder="开始时间"\n' +
        '    end-placeholder="结束时间"\n' +
        '    placeholder="选择时间范围" ', content2: ' >',
      content3: '</el-time-picker>', style: [ ], type: 'time-select-range', display: 'inline-block', data: [] },
    // data-select 日期选择器
    { content1: '<el-date-picker ' +
        'type="date" ' +
        'placeholder="选择日期" ', content2: ' >',
      content3: '</el-date-picker>', style: [ ], type: 'date-select', display: 'inline-block', data: [] },
    // data-select-week 周日期选择器
    { content1: '<el-date-picker ' +
        'type="week" ' +
        'placeholder="选择日期" ', content2: ' >',
      content3: '</el-date-picker>', style: [ ], type: 'date-select-week', display: 'inline-block', data: [] },
    // data-select-month 月日期选择器
    { content1: '<el-date-picker ' +
        'type="month" ' +
        'placeholder="选择日期" ', content2: ' >',
      content3: '</el-date-picker>', style: [ ], type: 'date-select-month', display: 'inline-block', data: [] },
    // data-select-year 年日期选择器
    { content1: '<el-date-picker ' +
        'type="year" ' +
        'placeholder="选择日期" ', content2: ' >',
      content3: '</el-date-picker>', style: [ ], type: 'date-select-year', display: 'inline-block', data: [] },
    // data-select-dates 多个日期选择器
    { content1: '<el-date-picker ' +
        'type="dates" ' +
        'placeholder="选择一个或多个日期" ', content2: ' >',
      content3: '</el-date-picker>', style: [ ], type: 'date-select-year', display: 'inline-block', data: [] },
    // data-select-quick 快捷日期选择器
    { content1: '<el-date-picker ' +
        'align="right"\n' +
        '      type="date"\n' +
        '      placeholder="选择日期"\n' +
        '      :picker-options="pickerOptions" ', content2: ' >',
      content3: '</el-date-picker>', style: [ ], type: 'date-select-quick', display: 'inline-block', data: ['pickerOptions: {\n' +
      '          disabledDate(time) {\n' +
      '            return time.getTime() > Date.now();\n' +
      '          },\n' +
      '          shortcuts: [{\n' +
      '            text: \'今天\',\n' +
      '            onClick(picker) {\n' +
      '              picker.$emit(\'pick\', new Date());\n' +
      '            }\n' +
      '          }, {\n' +
      '            text: \'昨天\',\n' +
      '            onClick(picker) {\n' +
      '              const date = new Date();\n' +
      '              date.setTime(date.getTime() - 3600 * 1000 * 24);\n' +
      '              picker.$emit(\'pick\', date);\n' +
      '            }\n' +
      '          }, {\n' +
      '            text: \'一周前\',\n' +
      '            onClick(picker) {\n' +
      '              const date = new Date();\n' +
      '              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n' +
      '              picker.$emit(\'pick\', date);\n' +
      '            }\n' +
      '          }]\n' +
      '        },'] },
    // switch
    { content1: '<el-switch ', content2: ' >', content3: '</el-switch>', style: '', type: 'switch', display: 'inline-block', data: [] },
    // text-switch
    { content1: '<el-switch ', content2: ' >', content3: '</el-switch>', style: '', type: 'text-switch', display: 'inline-block', data: [] },
    // slider
    { content1: '<el-slider ', content2: ' >', content3: '</el-slider>', style: '', type: 'slider', display: '', data: [] },
    // input
    { content1: '<el-input ', content2: ' >', content3: '</el-input>', style: '', type: 'input-default', display: 'inline-block', data:
      {
        name: 'input', extend: ''
      } },
    { content1: '<el-input\n', content2: '  \n' +
        '  clearable>\n', content3: '</el-input>', style: '', type: 'input-clearable', display: 'inline-block', data: { name: 'input', extend: ''} },
    { content1: '<el-input ', content2: ' show-password>', content3: '</el-input>', style: '', type: 'input-password', display: 'inline-block', data: {
      name: 'input', extend: ''
    } },
    { content1: '<el-input\n', content2: '\n' +
        'suffix-icon="el-icon-date"\n>\n', content3: '</el-input>', style: '', type: 'input-attr-date', display: 'inline-block', data:
      {
        name: 'input1', extend: ''
      } },
    { content1: '<el-input\n', content2:
        'prefix-icon="el-icon-search"\n>\n',
        content3: '</el-input>', style: '', type: 'input-attr-search', display: 'inline-block', data: {
      name: 'input2', extend: ''
    } },
    { content1: '<el-input\n', content2:
        '>\n' +
        '  <i slot="suffix" class="el-input__icon el-icon-date"></i>\n',
      content3: '</el-input>', style: '', type: 'input-slot-date', display: 'inline-block', data: {
      name: 'input3', extend: ''
    }  },
    { content1: '<el-input\n', content2:
        '>\n' +
        '  <i slot="prefix" class="el-input__icon el-icon-search"></i>\n', content3: '</el-input>', style: '', type: 'input-slot-search', display: 'inline-block', data: {
      name: 'input4', extend: ''
    }  },
    // table  :data="tableData"
    //   <el-table-column
    // prop="date"
    // label="日期"
    // width="180">
    // </el-table-column>
    { content1: '<el-table\n ', content2: '', content21: ' <el-table-column\n', content22: '  ></el-table-column>\n',
          content3: '</el-table>', style: [ { name: 'width', data: '100%' } ], type: 'table-base', display: 'block', data: { name: 'tableData', extend: '[{\n' +
          '            date: \'2016-05-02\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1518 弄\'\n' +
          '          }, {\n' +
          '            date: \'2016-05-04\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1517 弄\'\n' +
          '          }, {\n' +
          '            date: \'2016-05-01\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1519 弄\'\n' +
          '          }, {\n' +
          '            date: \'2016-05-03\',\n' +
          '            name: \'王小虎\',\n' +
          '            address: \'上海市普陀区金沙江路 1516 弄\'\n' +
          '          }]'} },


  ]
}
