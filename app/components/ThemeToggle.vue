<script setup lang="ts">
const colorMode = useColorMode()

// Icon
const icon = computed(() => {
  switch (colorMode.value) {
    case 'dark':
      return 'i-heroicons-moon'
    case 'light':
      return 'i-heroicons-sun'
    default:
      return 'i-heroicons-computer-desktop'
  }
})

// Toogle button
const toggleTheme = () => {
  const modes = ['system', 'light', 'dark'] as const
  const idx = modes.indexOf(colorMode.preference as (typeof modes)[number])
  colorMode.preference = modes[(idx + 1) % modes.length]
}
</script>
<template>
  <UButton :icon="icon" variant="ghost" aria-label="Toggle theme" @click="toggleTheme" />
</template>
