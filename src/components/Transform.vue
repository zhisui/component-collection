<template>
    <div class="container">
        <div class="item">1</div>
        <!-- <div class="item">2</div> -->
    </div>
</template>

<script></script>
<style lang="scss" scoped>
/*
这个例子主要是用来理解3D转换模型的

 */

.container {
    height: 600px;
    width: 600px;
    position: relative;
    border: 1px solid #20eaea;
    transform-style: preserve-3d;
    transform: perspective(900px) rotate(-45deg);
    .item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        height: 200px;
        width: 200px;
        background-color: lightblue;
        &:nth-of-type(1) {
            background-color: pink;
            transition: 1s;
            &:hover {
                transform: perspective(900px) rotate3d(1, 0, 0, 55deg);
            }
        }
        // &:nth-of-type(2) {
        //   background-color: lightgreen;
        //   transform: perspective(900px) rotateY(45deg) translateZ(0px);
        // }
    }
}
</style>
