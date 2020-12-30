<template>
  <section class="section is-centered">
    <div class="container">
      <form>
        <AppControlInput control-type="email">E-Mail Address</AppControlInput>
        <AppControlInput control-type="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </form>
    </div>
  </section>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton,
  },
  data() {
    return {
      isLogin: true,
    }
  },
}
</script>
