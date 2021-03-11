

export default {
  componentElem: [
    { content: '<div></div>', type: 'div', display: 'block', data: '' }, // 用作换行
    { content: '<div style="width: 100px;display: inline-block"></div>', type: 'span', display: 'inline-block', data: '' }, // 用作换行
    { content: '<el-button>默认按钮</el-button>', type: 'button-default', display: 'inline-block', data: '' },
    { content: '<el-button type="primary">主要按钮</el-button>', type: 'button-primary', display: 'inline-block', data: '' },
    { content: '<el-button type="success">成功按钮</el-button>', type: 'button-success', display: 'inline-block', data: '' },
    { content: '<el-button type="warning">警告按钮</el-button>', type: 'button-warning', display: 'inline-block', data: '' },
    { content: '<el-button type="info">信息按钮</el-button>', type: 'button-info', display: 'inline-block', data: '' },
    { content: '<el-button icon="el-icon-search" circle></el-button>', type: 'button-default-circle', display: 'inline-block', data: '' },
    { content: '<el-button type="primary" icon="el-icon-edit" circle></el-button>', type: 'button-primary-circle', display: 'inline-block', data: '' },
    { content: '<el-button type="success" icon="el-icon-check" circle></el-button>', type: 'button-success-circle', display: 'inline-block', data: '' },
    { content: '<el-button type="info" icon="el-icon-message" circle></el-button>', type: 'button-info-circle', display: 'inline-block', data: '' },
    { content: '<el-button type="warning" icon="el-icon-star-off" circle></el-button>', type: 'button-warning-circle', display: 'inline-block', data: '' },
    { content: '<el-button type="danger" icon="el-icon-delete" circle></el-button>', type: 'button-danger-circle', display: 'inline-block', data: '' },
    { content: '<el-table\n' +
        ':data="tableData"\n' +
        'style="width: 100%">\n' +
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
        '  </el-table>', type: 'table-base', display: 'block', data: { name: 'tableData', extend: '[{\n' +
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
