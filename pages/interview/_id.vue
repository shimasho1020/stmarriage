<template>
<div class="">
  <div class="title_block" style="text-align:center">
    <h1 class="title">入会から結婚までの流れ</h1>
  </div>
  <div class="body">
    <div class="body_wrap">
      <div class="section --1">
        <div class="section_wrap">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.title_block
  > .title
    +text-title(40px)
    position: relative
    padding: 1.5rem 2rem
    -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
    box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
    background-color: rgb(255, 255, 255,0.7)

    &::before,&::after
      position: absolute
      left: 0
      width: 100%
      height: 4px
      content: ''
      background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)

    &::before
      top: 0
    &::after
      bottom: 0

.body
  height: 1000px
  > .body_wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)

</style>