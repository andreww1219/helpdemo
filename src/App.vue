<script setup>
import {RouterView, useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()
const metaType = ref(route.meta.type)
console.log(route.meta.type)
</script>

<template>
  <div class="whole">
    <div class="first-header">导航栏</div>
    <div class="second-header">二级导航栏：{{ metaType}}</div>
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </RouterView>
  </div>
</template>

<style scoped>
.whole{
  width: 100%;
  height: 100%;
}

.first-header{
  width: 100%;
  height: 5%;
  background-color: rgb(51,51,51);
}
.second-header{
  width: 100%;
  height: 5%;
  background-color: rgb(102,102,102);
}
</style>
