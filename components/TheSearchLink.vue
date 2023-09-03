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
      <span class="search__link-subtitle">Учебное заведение. Специальность</span>
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
    border-radius: 48px;
    border: 3px solid #EBEBEB;
    gap: 24px;
    padding: 48px 42px;
    width: 936px;
  }

  // .search__link-img

  &__link-img {
    display: inline-block;
  }

  // .search__link-text

  &__link-text {
    display: flex;
    flex-direction: column;
  }

  // .search__link-title

  &__link-title {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 72px;
    color: #0D1421;
    padding: 0;
  }

  // .search__link-subtitle

  &__link-subtitle {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 54px;
    color: #667085;
    padding: 0;
  }
}
</style>