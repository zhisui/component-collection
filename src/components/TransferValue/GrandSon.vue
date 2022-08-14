<template>
    <div>
        <h1>我是孙组件</h1>
        <button @click="sendToFather">点我传值</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hello = ref('okok')
const emit = defineEmits(['sendToFather'])
const sendToFather = () => {
    emit('sendToFather', hello.value)
}
</script>

<style scoped lang="scss">
div {
    margin: 10px 0;
}
</style>
