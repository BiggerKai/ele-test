<template>
  <section>
    <div class="wrap effect">
      <h2>Shadow Effect</h2>
    </div>
  </section>
</template>
<style lang="scss" scoped>
body,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

.wrap {
  width: 70%;
  height: 200px;
  margin: 50px auto;
  background: #fff;

  h2 {
    font-size: 20px;
    text-align: center;
    line-height: 200px;
  }
}

.effect {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3)
}
</style>
