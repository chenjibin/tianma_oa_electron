<template>
  <div id="main" class="app-main">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        theme: this.$store.state.app.themeColor
      };
    },
    mounted () {

    },
      beforeDestroy () {

    },
    created () {

    },
    methods: {

    }
  };
</script>
<style lang="less">
    .gallery-background[lazy=loading] {
        background-color: #eee;
    }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }
  ul {
    list-style: none;
  }
  .ivu-scroll-container {
    overflow-y: auto;
  }
  .ivu-select-dropdown {
    max-height: 300px;
  }
  .ivu-btn-text:focus {
    box-shadow: none;
  }
  .fs-square-img {
    position: relative;
    padding-top: 100%;
    width: 100%;
  }
  .fs-square-img img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .app-main{
    width: 100%;
    height: 100%;
  }
  .no-result-block {
    margin-top: 88px;
    padding-bottom: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 300px;
    }
    .info {
      font-size: 18px;
      font-weight: 700;
    }
  }
</style>
