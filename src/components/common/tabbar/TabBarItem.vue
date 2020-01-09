<template>
  <div id="tab-bar-item" class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#42b983'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path);
      }
    },
    computed: {
      isActive() {
        return this.$route.path === this.path
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    color: #2c3e50;
    background-color: #f6f6f6;
  }

  .tab-bar-item img {
    height: 24px;
    width: 34px;
    margin-top: 3px;
    vertical-align: middle;
  }

  /*.active {
    color: #42b983;
  }*/
</style>