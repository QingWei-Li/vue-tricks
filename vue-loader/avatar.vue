<template>
  <div>
    <img width="200" :src="defaultSrc">
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
  export default {
    props: ['defaultSrc', 'name']
  }
</script>

<style>
  div {
    font-family: 'Helvetica Neue';
    text-align: center;
  }

  img {
    border-radius: 50%;
  }

  h3 {
    margin-top: 4px;
    color: #42b983;
  }
</style>
