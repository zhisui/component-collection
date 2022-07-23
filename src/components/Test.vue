<template>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <p>hellow</p>
    <div class="item">3</div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
/*
这个例子主要是用来理解
1、nth-child()和nth-type-of()的区别
nth-child()主要是根据元素的个数来确定的，比如这里的p元素，它位于第三个位置
&:nth-child(3) {
      background-color: aliceblue;
    }
    这个对于它是起效的
而对于item以下是不起作用的，因为同级元素中第三个并不是item，而是p
&:nth-child(3) {
      background-color: lightpink;
    }
nth-type-of()是以同类元素作为计算依据的

2、margin和padding在什么时候用
之前我都是padding和margin混用的，这一般没啥问题，因为它都可以隔开一段距离，
但是当你给元素设置背景颜色的时候会发现你设置padding的时候他们之间的距离就看不出来了，
因为padding是计算在元素本身的，可以使用background-clip: content-box;隔开距离
另一种方法就是设定margin，这时候margin个和padding的区别就显现出来了
 */

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    height: 200px;
    background-color: aquamarine;
    flex: 1;
    &:nth-child(3) {
      background-color: aliceblue;
    }
  }
  .item {
    flex: 1;
    // background-clip: content-box;
    margin-right: 10px;
    height: 200px;
    background-color: lightblue;
    &:nth-child(3) {
      background-color: lightpink;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
