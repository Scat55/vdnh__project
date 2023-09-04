<template>
  <div style="height:100vh; width:100vw">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="center"
    >
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LMarker :lat-lng="[52.617558, 39.618794]">
        <LIcon :icon-anchor="staticAnchor">
          <img
            class="univers__img"
            src="../assets/images/univers.png"
          >
        </LIcon>
        <LPopup class="popup">
          <p>ЛГПУ</p>
        </LPopup>
      </LMarker>

      <LMarker :lat-lng="[52.602044, 39.504744]">
        <LIcon :icon-anchor="staticAnchor">
          <img
            class="univers__img"
            src="../assets/images/SPO.png"
          >
        </LIcon>
        <LPopup class="popup">
          <p>ЛГТУ</p>
        </LPopup>
      </LMarker>
    </LMap>
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

.popup {
  font-size: 42px;
}
</style>