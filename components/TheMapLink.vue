<template>
  <div class="map__link">
    <div class="map__link-img">
      <img
        src="../assets/images/map.png"
        alt=""
      >
      <div class="map__link-btn">
        <nuxt-link
          to="map"
          class="nuxt__link"
        >Показать карту</nuxt-link>
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
  &__link {
    margin-top: 2.813rem;

    @media (min-width: 360px) and (max-width: 480px) {
      margin-top: 16px;
    }
  }

  // .map__link-img

  &__link-img {
    position: relative;
    display: flex;
    justify-content: center;
    // width: 100%;

    img {
      width: 100%;
    }
  }

  // .map__link-btn

  &__link-btn {
    position: absolute;
    bottom: 3.75rem;
    left: 15.688rem;
    border-radius: 2.25rem;
    background: #fff;
    box-shadow: 0rem 0.375rem 1.125rem 0rem rgba(0, 0, 0, 0.20);
    padding: 1.875rem 3rem;
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.75rem;
    color: #0D1421;
    text-align: center;

    @media (min-width: 360px) and (max-width: 480px) {
      // display: none;

      padding: 10px 16px;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      border-radius: 12px;
      bottom: 2rem;
      left: 6.6rem;
    }
  }

}
</style>