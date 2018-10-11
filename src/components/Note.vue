<template>
    <b-list-group-item href="#" class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ title }}</h5>
        <small>{{ subtitle }}</small>
      </div>
      <p class="mb-1">
        {{ message }}
      </p>
      <small>{{ extras }}</small>
    </b-list-group-item>
</template>

<script>
    export default {
        name: "Note",
        props: ['title', 'subtitle', 'message', 'extras']
    }
</script>

<style scoped>

</style>
