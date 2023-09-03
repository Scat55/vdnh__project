<template>
  <div class="container">

    <!-- Ссылка на страницу с поиском -->
    <NuxtLink
      to="search"
      class="nuxt__link"
    >
      <TheSearchLink />
    </NuxtLink>
    <!-- Ссылка на страницу с картой -->
    <NuxtLink
      to="map"
      class="nuxt__link"
    >
      <TheMapLink />
    </NuxtLink>
    <!-- Ссылка на страницу с тестом -->
    <NuxtLink
      to="test"
      class="nuxt__link"
    >
      <TheTestLink />
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

