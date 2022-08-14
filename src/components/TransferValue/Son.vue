<template>
    <div>
        <h1>我是子组件</h1>
        <GrandSon v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import GrandSon from './GrandSon.vue'
</script>

<style scoped lang="scss">
div {
    margin: 10px 0;
}
</style>
