<script setup lang="ts">
import { TodoItemType } from '../types';

// 使用宣告檔案實現複用
defineProps<{ todoItem: TodoItemType }>();
</script>

<template>
  <label>
    <input type="checkbox" :checked="todoItem.done" />
    {{ todoItem.name }}
  </label>
</template>

<style scoped>
label {
  margin: 0 16px;
}
</style>
