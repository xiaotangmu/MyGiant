<template>
  <div>
    我是父组件内容{{msg}}
    <Login :msg='msg' @showMsg='showMsg' />
  </div>
</template>

<script>
  import Login from '../components/Login'
  export default{
    components: {
      Login
    },
    data(){
      return {
        msg:'This is a World'
      }
    },
    methods: {
      showMsg(data) {
        this.msg = data.num
        console.log(data.num)
      }
    }
  }
</script>
