<template>
  <div>
    <label>{{ label }}</label>

    <input v-if="type !== 'textarea'" :type="type">
    <textarea v-if="type === 'textarea'"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'field',

    props: ['type', 'label']
  };
</script>
