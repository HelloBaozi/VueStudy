<template>
  <div>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">
          <span>购物街</span>
        </div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childcpn/HomeSwiper";
  import HomeRecommend from "./childcpn/HomeRecommend";
  import FeatureView from "./childcpn/FeatureView";

  import {getMultiData} from "../../network/home";

  export default {
    name: "home",
    components: {
      HomeRecommend,
      HomeSwiper,
      NavBar,
      HomeSwiper,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //通过生命周期函数发起网络请求
      const multiDataRes = getMultiData();
      multiDataRes.then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    
  }
</style>