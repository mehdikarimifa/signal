<template>
  <div class="ui-elements-wrapper no-pointer-event">
    <div class="ui-elements">
      <div class="circle top-left" />
      <div class="circle middle-right" />
      <div class="circle bottom-left" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-elements-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  * {
    pointer-events: none;
  }

  .ui-elements {
    position: relative;

    .circle {
      position: absolute;
      background: rgba(var(--text-color), 0.02);
      border-radius: 999px;

      &.top-left {
        top: -5vw;
        left: -5vw;
        width: 15vw;
        height: 15vw;
      }

      &.middle-right {
        top: 50vh;
        right: -62px;
        width: 12vw;
        height: 12vw;
      }

      &.bottom-left {
        top: 70vh;
        left: -16vh;
        width: 24vw;
        height: 24vw;
      }
    }

    @media screen and (max-width: 768px) {
      .circle {
        &.top-left {
          top: -10vw;
          left: -10vw;
          width: 42vw;
          height: 42vw;
        }

        &.middle-right {
          top: 50vh;
          right: -32px;
          width: 22vw;
          height: 22vw;
        }

        &.bottom-left {
          top: 70vh;
          left: -16vh;
          width: 52vw;
          height: 52vw;
        }
      }
    }
  }
}
</style>
