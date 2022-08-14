<template>
    <div>
        <h1>我是父组件</h1>
        <Son @sendToFather="sendToFather" />
        <div>子组件传过来的值{{ hello }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './Son.vue'
const hello = ref('')
const sendToFather = (val: string) => {
    hello.value = val
    console.log(val, '子组件传过来的值')
}
</script>

<style scoped></style>
