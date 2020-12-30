<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        :aria-expanded="isActive"
        :class="{ 'is-active': isActive }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        data-target="collapse"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="collapse" :class="{ 'is-active': isActive }" class="navbar-menu">
      <div class="navbar-start" @click="isActive = !isActive">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/users">Users</nuxt-link>
        <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link class="button is-primary" to="/admin">Admin</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false,
      showNavbar: true,
    }
  },
}
</script>
