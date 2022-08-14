<template>
    <div :data-text="text">123</div>
    <div :style="{ backgroundColor: bgColor }">123</div>
    <div>123</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('hello')
const bgColor = ref('red')
</script>
<style scoped lang="scss">
/*  这个例子是用来学习如何绑定css变量的，
在css里面是用var(变量名字)
在vue中使用css变量可用attr(变量名)
*/

div {
    color: #fff;
}
div:first-of-type:before {
    content: attr(data-text);
    font-size: 16px;
    color: lightpink;
}
</style>
