<template>
  <div class="search__link">
    <div class="search__link-img">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          d="M52.5 52.5L41.625 41.625M47.5 27.5C47.5 38.5457 38.5457 47.5 27.5 47.5C16.4543 47.5 7.5 38.5457 7.5 27.5C7.5 16.4543 16.4543 7.5 27.5 7.5C38.5457 7.5 47.5 16.4543 47.5 27.5Z"
          stroke="#0D1421"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="search__link-text">
      <span class="search__link-title">Хотите поступить?</span>

      <div class="search__link-text-info">
        <span class="search__link-subtitle">Учебное заведение </span>
        <img
          src="../assets/images/point.svg"
          alt="Point"
          class="search__link-text-img"
        >
        <span class="search__link-subtitle">Специальность</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {

  // .search__link

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    border: 0.188rem solid #EBEBEB;
    gap: 1.5rem;
    padding: 3rem 2.625rem;
    width: 58.5rem;
  }

  // .search__link-img

  &__link-img {
    display: inline-block;
    margin-right: 3rem;
  }

  // .search__link-text

  &__link-text {
    display: flex;
    flex-direction: column;

    &-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    &-img {
      width: 0.375rem;
      height: 0.375rem;
    }
  }

  // .search__link-title

  &__link-title {
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 4.5rem;
    color: #0D1421;
    padding: 0;
  }

  // .search__link-subtitle

  &__link-subtitle {
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.375rem;
    color: #667085;
    padding: 0;
  }
}
</style>