<template>
  <div class="w-28">
  <InputWithLabel label="Email" placeholder="Email" hasError/>
  </div>
</template>

<script>
  import InputWithLabel from "./components/ui/InputWithLabel"

export default { 
  name: 'App',
  components: {
    InputWithLabel,
  }
}
</script>

<style>
</style>
