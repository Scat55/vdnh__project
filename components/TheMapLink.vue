<template>
  <div class="map">
    <div class="map__link">
      <div class="map__link-img">
        <img
          src="../assets/images/map.png"
          alt=""
        >
        <div class="map__link-btn">
          <p class="map__link-btn-title">
            Показать карту
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.map {
  margin-top: 2.813rem;
  // .map__link

  // &__link {}

  // .map__link-img

  &__link-img {
    position: relative;


  }

  // .map__link-btn

  &__link-btn {
    position: absolute;
    bottom: 3.75rem;
    left: 17.688rem;
    border-radius: 2.25rem;
    background: #fff;
    box-shadow: 0rem 0.375rem 1.125rem 0rem rgba(0, 0, 0, 0.20);
    height: 8.75rem;
    padding: 1.25rem 2.375rem;
    transition: all .3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  // .map__link-btn-title

  &__link-btn-title {
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.75rem;
    color: #0D1421;
    text-align: center;
  }
}
</style>