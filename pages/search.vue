<template>
  <div class="searchPage">
    <nuxt-link to="/">
      <img
        src="../assets/images/backArrow.svg"
        alt="Back"
        class="searchPage__btn"
      >
    </nuxt-link>

    <div class="searchPage__content">
      <div class="searchPage__content-info">
        <input
          type="search"
          class="searchPage__content-input"
          placeholder="Введите запрос"
          v-model="valueInput"
        >
        <img
          src="../assets/images/delete_btn.svg"
          alt="DeleteBtn"
          class="searchPage__content-btn"
          v-if="valueInput.length >= 1"
          @click="deleteSearchInfo()"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      valueInput: '',

    }
  },

  methods: {
    deleteSearchInfo() {
      this.valueInput = ''
    },
  },
  mounted() {
    console.log(this.valueInput)
  },
}
</script>

<style lang="scss" scoped>
.searchPage {
  background: #F7F7F7;

  &__btn {
    padding: 72px 0 48px 72px;
    cursor: pointer;

    @media (min-width: 360px) and (max-width: 480px) {
      width: 44px;
      height: 44px;
      padding: 24px 0 24px 24px;
    }
  }

  &__content {
    padding: 72px;
    border-radius: 48px 48px 0px 0px;
    background-color: #fff;

    @media (min-width: 360px) and (max-width: 480px) {
      padding: 24px;
    }

    &-info {
      position: relative;
      display: inline-block;
    }

    &-input {
      position: relative;
      padding: 48px;
      border-radius: 48px;
      border: 3px solid #EBEBEB;
      background: #F7F7F7;
      font-size: 48px;
      font-weight: 400;
      line-height: 72px;
      outline: none;

      @media (min-width: 360px) and (max-width: 480px) {
        padding: 16px;
        font-size: 16px;
        border-radius: 16px;
        font-weight: 400;
        line-height: 24px;
      }


      &::-ms-clear {
        display: none;
        width: 0;
        height: 0;
      }

      &::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
      }

      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        display: none;
      }
    }

    &-btn {
      position: absolute;
      top: 60px;
      right: 50px;
      cursor: pointer;

      @media (min-width: 360px) and (max-width: 480px) {
        width: 20px;
        height: 20px;
        top: 21px;
        right: 20px;
      }
    }
  }

}
</style>