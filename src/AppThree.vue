<script setup>
import { ref } from "vue"

const text = ref("這是一段文字")

const todos = ref([
  {
    id: 123,
    text: '12345'
  }
])

const tempEdit = ref({
  id: '',
  text: '',
});

const addTodo = () => {
  if (text.value) {
    todos.value.push({
      text: text.value,
      id: new Date().getTime()
    });
    // console.log(todos.value);
    text.value = '';
  }
}

const deleteTodo = (todo) => {
  // console.log(todo);
  const index = todos.value.findIndex(item => item.id === todo.id);
  // console.log(index);

  todos.value.splice(index, 1);
  // console.log(todos);
}

const prepareEdit = (todo) => {
  tempEdit.value = { ...todo };　// 拷貝技巧 血輪眼
  console.log(tempEdit.value);
  // 傳參考，純 JS 的鍋：物件傳參考
}

const confirmEdit = () => {
  const index = todos.value.findIndex(item => item.id === tempEdit.value.id);
  console.log(index, todos.value);

  // 將 tempEdit 的值帶回去 todos
  todos.value[index] = tempEdit.value;

  // 清空
  tempEdit.value = {}
}
</script>

<template>
  <input type="text" v-model="text">
  <button type="button" @click="addTodo">新增</button>
  <hr />
  <div v-for="todo in todos" :key="todo.id">
    <div>
      {{ todo.text }}
      <button type="button" @click="prepareEdit(todo)">編輯</button>
      <button type="button" @click="deleteTodo(todo)">刪除</button>
    </div>
    <hr />
  </div>
  <div v-if="tempEdit.id">
    <h1>編輯區域</h1>
    當前修改的值: {{ tempEdit.text }}<br />
    <input type="text" v-model="tempEdit.text">
    <button type="button" @click="confirmEdit()">確認編輯</button>
  </div>
</template>

<style></style>
