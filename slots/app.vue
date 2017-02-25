<template>
  <div>
    <h2>template</h2>
    <field label="标题" type="text" />
    <field label="详情" :type="type" />
    <h2>jsx</h2>
    <FieldJsx label="详情" type="text"></FieldJsx>
    <FieldJsx label="详情" :type="type"></FieldJsx>
    <h2>template + jsx</h2>
    <FieldSlot label="详情" type="text"></FieldSlot>
    <FieldSlot label="详情" :type="type">
    </FieldSlot>
  </div>
</template>

<script>
  import Field from './field.vue'
  import FieldJsx from './field-jsx.js'
  import FieldSlot from './field-slot.vue'

  export default {
    components: { Field, FieldJsx, FieldSlot },

    data() {
      return {
        type: ''
      }
    },

    created() {
      setTimeout(_ => {
        this.type = 'textarea'
      }, 500)
    }
  };
</script>

<style>
  body {
    font-family: 'Helvetica Neue';
  }
</style>
