

export default {
  componentElem: [
    // 换行
    { content1: '<div ', content2: '></div>', style: '', type: 'div', display: 'block', data: '' }, // 用作换行
    // 占位inline block
    { content1: '<div ', content2: '></div>', style: [ { name: 'width', data: '100px' }, { name: 'display', data: 'inline-block' } ], type: 'span', display: 'inline-block', data: '' }, // 用作换行
    // button
    { content1: '<el-button ', content2: '>默认按钮</el-button>', style: '', type: 'button-default', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="primary">主要按钮</el-button>', style: '', type: 'button-primary', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="success">成功按钮</el-button>', style: '', type: 'button-success', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="warning">警告按钮</el-button>', style: '', type: 'button-warning', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="info">信息按钮</el-button>', style: '', type: 'button-info', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'icon="el-icon-search" circle></el-button>', style: '', type: 'button-default-circle', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="primary" icon="el-icon-edit" circle></el-button>', style: '', type: 'button-primary-circle', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="success" icon="el-icon-check" circle></el-button>', style: '', type: 'button-success-circle', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="info" icon="el-icon-message" circle></el-button>', style: '', type: 'button-info-circle', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="warning" icon="el-icon-star-off" circle></el-button>', style: '', type: 'button-warning-circle', display: 'inline-block', data: '' },
    { content1: '<el-button ', content2: 'type="danger" icon="el-icon-delete" circle></el-button>', style: '', type: 'button-danger-circle', display: 'inline-block', data: '' },
    // input
    { content1: '<el-input ', content2: 'v-model="input" placeholder="请输入内容"></el-input>', style: '', type: 'input-default', display: 'inline-block', data:
      {
        name: 'input', extend: ''
      } },
    { content1: '<el-input\n', content2: '  placeholder="请输入内容"\n' +
        '  v-model="input"\n' +
        '  clearable>\n' +
        '</el-input>', style: '', type: 'input-clearable', display: 'inline-block', data: { name: 'input', extend: ''} },
    { content1: '<el-input ', content2: 'placeholder="请输入密码" v-model="input" show-password></el-input>', style: '', type: 'input-password', display: 'inline-block', data: {
      name: 'input', extend: ''
    } },
    { content1: '<el-input\n', content2: 'placeholder="请选择日期"\n' +
        'suffix-icon="el-icon-date"\n' +
        'v-model="input1">\n' +
        '  </el-input>', style: '', type: 'input-attr-date', display: 'inline-block', data:
      {
        name: 'input1', extend: ''
      } },
    { content1: '<el-input\n', content2:
        'placeholder="请输入内容"\n' +
        'prefix-icon="el-icon-search"\n' +
        'v-model="input2">\n' +
        '  </el-input>', style: '', type: 'input-attr-search', display: 'inline-block', data: {
      name: 'input2', extend: ''
    } },
    { content1: '<el-input\n', content2:
        'placeholder="请选择日期"\n' +
        'v-model="input3">\n' +
        '  <i slot="suffix" class="el-input__icon el-icon-date"></i>\n' +
        '  </el-input>', style: '', type: 'input-slot-date', display: 'inline-block', data: {
      name: 'input3', extend: ''
    }  },
    { content1: '<el-input\n', content2:
        'placeholder="请输入内容"\n' +
        'v-model="input4">\n' +
        '  <i slot="prefix" class="el-input__icon el-icon-search"></i>\n' +
        '  </el-input>', style: '', type: 'input-slot-search', display: 'inline-block', data: {
      name: 'input4', extend: ''
    }  },
    // table
    { content1: '<el-table\n', content2:
        ':data="tableData"\n' +
        '  <el-table-column\n' +
        'prop="date"\n' +
        'label="日期"\n' +
        'width="180">\n' +
        '  </el-table-column>\n' +
        '  <el-table-column\n' +
        'prop="name"\n' +
        'label="姓名"\n' +
        'width="180">\n' +
        '  </el-table-column>\n' +
        '  <el-table-column\n' +
        'prop="address"\n' +
        'label="地址">\n' +
        '  </el-table-column>\n' +
        '  </el-table>', style: [ { name: 'width', data: '100%' } ], type: 'table-base', display: 'block', data: { name: 'tableData', extend: '[{\n' +
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
