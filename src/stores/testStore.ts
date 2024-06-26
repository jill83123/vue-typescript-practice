import { ref } from 'vue';
import { defineStore } from 'pinia';

const testStore = defineStore('test', () => {
  const string = ref('我是一段字串！');
  return {
    string,
  };
});

export default testStore;
