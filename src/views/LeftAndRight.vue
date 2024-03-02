<script setup>

</script>

<template>
  <div class="container">
    <div class="container-left">左模块</div>
    <div class="container-right">右模块</div>
  </div>
</template>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: row;
  &-left{
    width: 30%;
    height: 100%;
    background-color: red;
  }
  &-right{
    width: 70%;
    height: 100%;
    background-color: blue;
  }
}
</style>
