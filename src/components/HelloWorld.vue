<template>
  <el-container>
    <el-aside class=" bottom" width="300px" height="100%">
      <div>
        <el-button @click="toMain">ToMain</el-button>
        <el-button @click="toIndex">ToIndex</el-button>
        <el-button type="success" @click="toTest">ToTest</el-button>
        <el-button type="info" @click="toContent">ToContent</el-button>
        <el-button type="info" @click="toContent2">ToContent2</el-button>
        <el-button type="info" @click="toContent3">ToContent3</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>

      <div>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </div>

      <div>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </div>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </el-aside>
    <el-container>
      <el-header class="" height="50%">

      </el-header>
      <el-main class=" bottom" height="50%">

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toMain: function(){
      this.$router.push({ path: '/main' })
    },
    toIndex: function(){
      this.$router.push({ path: '/index' })
    },
    toTest: function(){
      this.$router.push({ path: '/test' })
    },
    toContent: function(){
      this.$router.push({ path: '/content' })
    },
    toContent2: function(){
      this.$router.push({ path: '/content2' })
    },
    toContent3: function(){
      this.$router.push({ path: '/content3' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 880px;
  line-height: 50px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
.bottom{
    bottom: 0;
  }
</style>
