<template>
  <div class="container">

    <!-- Ссылка на страницу с поиском -->
    <nuxt-link
      to="search"
      class="nuxt__link"
    >
      <TheSearchLink />
    </nuxt-link>
    <!-- Ссылка на страницу с картой -->
    <TheMapLink />

    <!-- Ссылка на страницу с тестом -->
    <nuxt-link
      to="test"
      class="nuxt__link"
    >
      <div class="test">
        <div class="test__text">
          <span class="test__text-title">Пройдите тест</span>
          <span class="test__text-subtitle">Поможет определиться в выборе профессии</span>
        </div>
        <img
          class="test__img"
          src="../assets/images/testImg.svg"
          alt="Test"
        >
      </div>
    </nuxt-link>


  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.test {
  border-radius: 3rem;
  border: 0.188rem solid #EBEBEB;
  background: #FFF;
  box-shadow: 0rem 0.75rem 0.75rem 0rem rgba(0, 0, 0, 0.04);
  padding: 3rem;
  margin-top: 3rem;
  position: relative;

  @media (min-width: 360px) and (max-width: 480px) {
    margin-top: 16px;
    padding: 16px;
    gap: 8px;
    border-radius: 16px;
  }

  // .test__text-title
  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    // margin-top: 16px;
  }

  &__text-title {
    font-size: 3rem;
    font-weight: 500;
    line-height: 4.5rem;
    color: #0D1421;

    @media (min-width: 360px) and (max-width: 480px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  // .test__text-subtitle

  &__text-subtitle {
    overflow: hidden;
    color: #667085;
    font-size: 2.625rem;
    font-weight: 400;
    line-height: 3.75rem;

    @media (min-width: 360px) and (max-width: 480px) {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }

  // .test__img

  &__img {
    position: absolute;
    top: -1.875rem;
    right: 1.5rem;

    @media (min-width: 360px) and (max-width: 480px) {
      width: 94px;
      height: 94px;
      right: 0px;
      top: -13px;
    }
  }
}
</style>

