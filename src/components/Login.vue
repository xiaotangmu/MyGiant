<template>
  <div class="img-box">
    <div class="img-box1">
      <div>
        我是子组件内容
        <button @click="showMessage('参数')">子组件给父组件传参</button>
        <h1>{{msg}}111</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    methods: {
      showMessage(val){
        const data = {
          num: val
        }
        this.$emit('showMsg',data)
      }
    }
  }
</script>
