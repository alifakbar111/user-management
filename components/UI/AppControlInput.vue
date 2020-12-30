<template>
  <div>
    <label><slot /></label>
    <div class="field" v-if="controlType === 'input'">
      <div class="control">
        <input
          class="input"
          type="text"
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </div>
    <!-- <div class="field" v-if="controlType === 'email'">
      <div class="control">
        <input
          class="input"
          type="email"
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </div>
    <div class="field" v-if="controlType === 'password'">
      <div class="control">
        <input
          class="input"
          type="password"
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'AppControlInput',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
