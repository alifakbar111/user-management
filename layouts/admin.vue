<template>
  <div>
    <NavAdmin />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
<script>
import NavAdmin from '@/components/UI/NavAdmin'

export default {
  components: {
    NavAdmin,
  },
}
</script>
