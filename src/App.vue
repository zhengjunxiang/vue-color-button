<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <com-color-button type="success" :disabled="false">按钮</com-color-button> 
    <com-color-button :disabled="true">按钮</com-color-button>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
