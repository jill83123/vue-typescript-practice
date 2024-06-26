<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { TodoItemType } from './types';
import { FrontendJobResType } from './types/response';
import { useTestStore } from './stores';
import HelloWorld from './components/HelloWorld.vue';
import TodoItem from './components/TodoItem.vue';

// 使用 pinia store
const testStore = useTestStore();
console.log(testStore.string);

const title = ref<string>('原始標題');
const updateTitle = (newTitle: string, updateNum: number) => {
  title.value = newTitle;
  console.log(`updateNum: ${updateNum}`);
};

// 使用宣告檔案實現複用
const todoList: TodoItemType[] = [
  { id: 1, name: '洗碗', done: true },
  { id: 2, name: '學 TypeScript', done: true },
  { id: 3, name: '學 Nuxt', done: false },
];

// 使用 axios
// 泛型的第一個參數是 data、第二個是 config
const apiGetFrontendJobData = async () => {
  const res = await axios.get<FrontendJobResType[]>(
    'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json?token=AAQWFQDSNRRXC6FBW7PDSETBOESVW'
  );
  console.log(res.data[0].first_job.position);
};
apiGetFrontendJobData();
</script>

<template>
  <h1>{{ title }}</h1>
  <HelloWorld msg="Vite + Vue + TS" @updateTitle="updateTitle" />
  <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
</template>
