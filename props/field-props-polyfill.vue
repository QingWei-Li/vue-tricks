<template>
  <div>
    <label>{{ label }}</label>
    <input v-bind="$props">
  </div>
</template>

<script>
  import Vue from 'vue'

  Object.defineProperty(Vue.prototype, '$props', {
    get () {
      var result = {}
      for (var key in this.$options.props) {
        result[key] = this[key]
      }
      return result
    }
  })

  export default {
    props: ['label', 'type', 'placeholder',
    'maxlength', 'minlength', 'name', 'form',
    'value', 'disabled', 'readonly', 'autofocus']
  }
</script>
