<template>
  <div>
    <label>{{ label }}</label>

    <input v-if="type !== 'textarea'" :type="type">
    <textarea v-else></textarea>
  </div>
</template>

<script>
  export default {
    name: 'field',

    props: ['type', 'label']
  }
</script>
