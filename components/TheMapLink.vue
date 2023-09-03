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
  margin-top: 45px;
  // .map__link

  // &__link {}

  // .map__link-img

  &__link-img {
    position: relative;


  }

  // .map__link-btn

  &__link-btn {
    position: absolute;
    bottom: 60px;
    left: 283px;
    border-radius: 36px;
    background: #fff;
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.20);
    height: 140px;
    padding: 20px 38px;
    transition: all .3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  // .map__link-btn-title

  &__link-btn-title {
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    color: #0D1421;
    text-align: center;




  }
}
</style>