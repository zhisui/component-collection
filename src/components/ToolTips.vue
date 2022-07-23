<template>
  <div class="tool-tip" :data-tooltip="tooltip">！</div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
interface Props {
  tooltip?: string
}
const props = withDefaults(defineProps<Props>(), {
  tooltip: '我是提示内容',
})
</script>
<style lang="scss" scoped>
.tooltip {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
}
</style>
