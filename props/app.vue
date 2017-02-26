<template>
  <div>
    <field placeholder="请输入内容" label="标题"></field>
    <field-props placeholder="url" label="链接" type="url"></field-props>
    <field-props2 placeholder="作者名字" label="作者"></field-props2>
    <form-field placeholder="其他信息" label="摘要"></form-field>
  </div>
</template>

<script>
  import Field from './field.vue'
  import FieldProps from './field-props.js'
  import FieldProps2 from './field-props-polyfill.vue'
  import FormField from './form-field.vue'

  export default {
    components: { Field, FieldProps, FieldProps2, FormField }
  }
</script>
