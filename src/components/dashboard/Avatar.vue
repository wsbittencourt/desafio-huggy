<template>
  <img :src="url" width="32" height="32" class="avatar"/>
</template>

<script>

export default {
  props: ['url']
}
</script> 

<style scoped>
.avatar{
  border-radius: 50%;
  margin-right: 20px;
}
</style>
