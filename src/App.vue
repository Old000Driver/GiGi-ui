<template>
  <div>导航栏 |
  <router-link to="/">GJA</router-link> |
    <router-link to="/2">GJA2</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
