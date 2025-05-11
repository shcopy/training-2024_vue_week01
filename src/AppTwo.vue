<script setup>
import { ref } from "vue";
const text = ref('卡斯柏')
const num = ref(1)
const imgSrc = ref("https://images.unsplash.com/photo-1735825764451-d2186b7f4bf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

const add = () => {
  num.value = num.value + 1
}

const todos = ref([
  {
    id: 1,
    name: '購買雜貨',
    dueDate: '2024-07-30',
    completed: true
  }, {
    id: 2,
    name: '完成報告',
    dueDate: '2024-08-01',
    completed: false
  }, {
    id: 3,
    name: '清理房間',
    dueDate: '2024-07-28',
    completed: true
  }, {
    id: 4,
    name: '計劃假期',
    dueDate: '2024-08-05',
    completed: false
  }, {
    id: 5,
    name: '處理稅務',
    dueDate: '2024-08-10',
    completed: false
  }
])
</script>

<template>
  <h1>{{ text }}</h1>
  <input type="text" v-model="text">

  <h2>{{ num }}</h2>
  <!-- 寫法1: -->
  <button type="button" v-on:click="add">Click Me</button>
  <!-- 寫法2: -->
  <!-- <button type="button" @click="add">Click Me</button> -->
  <br />
  <!-- 屬性 -->
  <!-- 寫法1: -->
  <img v-bind:src="imgSrc" alt="">
  <!-- 寫法2: -->
  <!-- <img :src="imgSrc" alt=""> -->

  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      {{ todo.name }}
      {{ todo.dueDate }}
      {{ todo.completed ? '是' : '否' }} <input type="checkbox" v-model="todo.completed">
      <button type="button" @click="todo.completed = !todo.completed">切換</button>
      <hr />
    </div>
  </div>
</template>

<style></style>
