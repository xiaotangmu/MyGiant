<template>
  <div>
    <el-button @click="Search" >Search</el-button>
    <el-input
      placeholder="Tip" v-model="Tip"
      clearable>
    </el-input>
    <el-table
      style="width: 100%; " :data="Table">
      <el-table-column
        prop="Name"
        label="姓名"
      ></el-table-column>
    </el-table>
    <div style="width: 100px; display: inline-block; width: 200px; "></div>
  </div>
</template>

<script>
  export default {
    props: [],
    components: {},
    data() {
      return {
        Tip: "",
        Table: [],
      }
    },
    mounted() {},
    methods: {
      Search(){},
    },
  }
</script>

<style scoped>
</style>
