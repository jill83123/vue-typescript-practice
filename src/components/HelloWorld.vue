<script setup lang="ts">
import { products } from '../utils/old';
console.log(products);

// prop
// defineProps<{ msg: string }>()
type PropsType = {
  msg?: string;
};
withDefaults(defineProps<PropsType>(), {
  msg: '我是預設值',
});

// emit
const emit = defineEmits<{
  updateTitle: [newTitle: string, updateNum: number];
}>();

let num = 0;
const updateTitle = () => {
  num++;
  emit('updateTitle', '我是新標題', num);
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="updateTitle">點我</button>
</template>

<style scoped>
button {
  display: block;
  margin: 0 auto 32px auto;
}
</style>
