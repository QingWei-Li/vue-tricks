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
      this.renderInput()
    },

    methods: {
      renderInput() {
        const h = this.$createElement

        let tag = 'input'
        let { type } = this

        if (this.type === 'textarea') {
          tag = this.type
          type = ''
        }

        this.$slots.default = [h(tag, { props: { type } })]
      }
    }
  }
</script>
