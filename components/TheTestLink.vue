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
  border-radius: 3rem;
  border: 0.188rem solid #EBEBEB;
  background: #FFF;
  box-shadow: 0rem 0.75rem 0.75rem 0rem rgba(0, 0, 0, 0.04);
  padding: 3rem;
  width: 58.5rem;
  margin-top: 3rem;
  position: relative;
  transition: all .3s;

  &:hover {
    transform: scale(1.1);
  }

  // .test__text

  // &__text {}

  // .test__text-title

  &__text-title {
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 4.5rem;
    color: #0D1421;
  }

  // .test__text-subtitle

  &__text-subtitle {
    overflow: hidden;
    color: #667085;
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.75rem;
    width: 53rem;
  }

  // .test__img

  &__img {
    position: absolute;
    top: -1.875rem;
    right: 7.5rem;
  }


}
</style>