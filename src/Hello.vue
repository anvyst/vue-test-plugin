<template>
  <div class="hello">
    Hello, world!
    <h3 class="hi">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello, again!'
    }
  }
}
</script>

<style>
  .hi {
    color: red;
  }
</style>
