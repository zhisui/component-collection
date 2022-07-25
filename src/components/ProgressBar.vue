<template>
    <div class="bar" :style="barStyle">
        <div class="bar-in" :style="barInStyle"></div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
interface Props {
    color?: string
    width: number
}

const props = withDefaults(defineProps<Props>(), {
    color: '#03e9f4',
    width: 50,
})

const barStyle = reactive({
    border: `1px solid ${props.color}`,
})
const barInStyle = reactive({
    width: props.width + '%',
    background: `linear-gradient(120deg, transparent, ${props.color})`,
})
</script>
<style lang="scss" scoped>
.bar {
    width: 120px;
    height: 10px;
    border-radius: 8px;
    padding: 1px;
    .bar-in {
        height: 100%;

        border-radius: 6px;
    }
}
</style>
