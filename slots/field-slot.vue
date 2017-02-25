<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'field',

    props: ['type', 'label'],

    created() {
      this.$slots.default = [ this.renderField() ]
    },

    methods: {
      renderField() {
        const h = this.$createElement
        const tag = this.type === 'textarea' ? 'textarea' : 'input'
        const type = this.type === 'textarea' ? '' : this.type

        return h(tag, { props: { type } })
      }
    }
  }
</script>
