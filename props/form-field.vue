<template>
  <div>
    <field v-bind="$props"></field>
    <div class="tip">{{ hit }}</div>
  </div>
</template>

<script>
  import Field from './field.vue'

  export default {
    components: { Field },

    props: Object.assign({/* ... */}, Field.props),

    data () {
      return {
        hit: '错误提示'
      }
    }
  }
</script>

<style>
  .tip {
    color: #f66;
  }
</style>
