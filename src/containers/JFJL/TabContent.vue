<template>
  <div class="tab-content">
    <no-data v-if="noPayedIsSuccess&&!noPayedData.length"></no-data>
    <error v-if="noPayedIsFailure" @refresh="exeSelectPaymentRecords"></error>
    <mescroll-vue v-if="noPayedData.length" ref="mescroll"
                  :down="down" :up="up" @init="initMescroll2">
      <pay-item v-for="(item,index) in noPayedData"
                :key="index"
                :item="item"></pay-item>
    </mescroll-vue>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import PayItem from '../../components/PayItem';
  import NoData from '../../components/NoData';
  import Error from '../../components/Error';

  export default {
    name: 'tab-content',
    components: {
      Error,
      NoData,
      PayItem,
      MescrollVue
    },
    data() {
      return {
        swiper: null,
        pageCode: [1, 1],
        hasNexts: [true, true],
        mescrolls: [null, null],
        up: {
          auto: false,
          isBounce: false,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有更多数据</p>'
        },
        down: {
          auto: false,
          offset: 50,
          mustToTop: true,
          outOffsetRate: 0.3,
          callback: this.refresh,
          autoShowLoading: true
        }
      };
    },
    props: ['tabIndex'],
    created() {
      this.$nextTick(() => {
        this.initSwiper();
      });
      if (!this.noPayedIsLoading) {
        this.exeSelectPaymentRecords();
      }
    },
    methods: Controller,
    mounted() {
      window.onload = () => {
        this.initSwiper();
      };
    },
    computed: mapState({
      noPayedData: state => state.NOPAYED_RECORDS.data,
      noPayedIsFailure: state => state.NOPAYED_RECORDS.isFailure,
      noPayedIsSuccess: state => state.NOPAYED_RECORDS.isSuccess,
      noPayedIsLoading: state => state.NOPAYED_RECORDS.isLoading
    }),
    watch: {
      tabIndex() {
        if (this.mescrolls[this.tabIndex]) {
          const hasNext = this.hasNexts[this.tabIndex];
          this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
        }
        this.swiper.slideTo(this.tabIndex, 600, true);
        if (!this.noPayedIsLoading) {
          this.exeSelectPaymentRecords();
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .tab-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 0.46rem;
    .swiper-container {
      height: 100% !important;
    }
  }
</style>
