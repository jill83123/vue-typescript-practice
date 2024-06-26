import { ref } from 'vue';
import { defineStore } from 'pinia';

const testStore2 = defineStore('test2', () => {
  const string = ref('我是一段字串！');
  return {
    string,
  };
});

export default testStore2;
