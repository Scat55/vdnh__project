<template>
  <div style="height:100vh; width:100vw">
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
    >
      <l-tileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <l-marker :lat-lng="[52.617558, 39.618794]">
        <l-icon :icon-anchor="staticAnchor">
          <img
            class="univers__img"
            src="../assets/images/univers.png"
          >
        </l-icon>
      </l-marker>

      <l-marker :lat-lng="[52.602044, 39.504744]">
        <l-icon :icon-anchor="staticAnchor">
          <img
            class="univers__img"
            src="../assets/images/SPO.png"
          >
        </l-icon>

      </l-marker>
    </l-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 16,
      center: [52.608823, 39.599222],
      staticAnchor: [0, 0],
    }
  },

}
</script>

<style lang="scss" scoped>
.univers__img {
  max-width: 6.75rem;
  max-height: 6.75rem;
}
</style>