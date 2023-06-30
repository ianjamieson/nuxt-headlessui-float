<template>
  <div>
    <HeadlessFloat
      placement="top"
      auto-placement
      :show="show"
    >
      <button
        @mouseenter="toggle"
        @mouseleave="toggle"
      >
        Hover to open
      </button>
      <div>
        Pop up
      </div>
    </HeadlessFloat>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(false)
const toggle = () => {
  show.value = !show.value
}
</script>
