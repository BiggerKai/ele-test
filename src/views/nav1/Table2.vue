<template>
  <div class="content">
    Table2
    <div class="linear-gradient">

    </div>
    <div class="border-radius">

    </div>

    <div class="loading">
      <div class="inner"></div>
    </div>
    <div class="phone">
      123456
    </div>
  </div>
</template>

<style lang="scss" scope>
.linear-gradient {
  width: 400px;
  height: 300px;
  background-image: -webkit-linear-gradient(-45deg, red 100px, yellow 200px)
}

.border-radius {
  width: 100px;
  height: 200px;
  border: 50px solid red; //border-radius: 26px 106px 162px 32px;
  border-radius: 0px 162px 162px 32px/28px 300px 178px 26px;
}

@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.loading {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
  .inner {
    width: 100px;
    height: 50px;
    background: blue;
    border-radius: 50px 50px 0 0;
    animation: spin 3s infinite;
    transform-origin: bottom center;
  }
}

.phone::after {
  content: '\260E';
  font-size: 15px;
}
</style>
