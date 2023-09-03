<template>
  <div class="test">
    <div class="test__text">
      <p class="test__text-title">Пройдите тест</p>
      <p class="test__text-subtitle">Поможет определиться в выборе профессии</p>
    </div>
    <div class="test__img">
      <img
        src="../assets/images/testImg.svg"
        alt="Test"
      >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.test {
  border-radius: 48px;
  border: 3px solid #EBEBEB;
  background: #FFF;
  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.04);
  padding: 48px;
  width: 936px;
  margin-top: 48px;
  position: relative;
  transition: all .3s;

  &:hover {
    transform: scale(1.1);
  }

  // .test__text

  // &__text {}

  // .test__text-title

  &__text-title {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 72px;
    color: #0D1421;
  }

  // .test__text-subtitle

  &__text-subtitle {
    overflow: hidden;
    color: #667085;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    width: 848px;
  }

  // .test__img

  &__img {
    position: absolute;
    top: -30px;
    right: 120px;
  }


}
</style>