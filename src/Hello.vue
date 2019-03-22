<template>
  <div class="hello">
    <h3 class="hi">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      message: 'Hello world'
    }
  }
}
</script>

<style>
  .hi {
    color: green;
  }
</style>
