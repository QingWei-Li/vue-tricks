<template>
  <div>
    <label>{{ label }}</label>

    <input
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :form="form"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus">
  </div>
</template>

<script>
  export default {
    name: 'field',

    props: ['label', 'type', 'placeholder',
    'maxlength', 'minlength', 'name', 'form',
    'value', 'disabled', 'readonly', 'autofocus']
  }
</script>
