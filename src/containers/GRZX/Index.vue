<template>
  <div class="FX_ZHYL_GRZX">
    <div class="module DYMK">
      <loading v-if="!isLoading"></loading>
      <error v-if="isFailure" :isIcon="false" @refresh="exeSelectDefaultCard"></error>
      <div class="select" v-if="isSuccess&&data">
        <div class="row-box-1">
          <img src="../../assets/images/doctor@2x.png"/>
        </div>
        <div class="row-box-2">
          <em class="name">{{data.name}}</em>
          <span class="span">当前就诊卡</span>
          <span class="span">卡号：{{data.patientCardNo}}</span>
        </div>
        <div class="row-box-3">
          <router-link :to="this.$routes.HZLB.path">
            <button class="btn btn-manager">就诊卡管理</button>
          </router-link>
        </div>
      </div>
      <add-visitor v-if="isSuccess&&!data"></add-visitor>
    </div>
    <div class="module DEMK">
      <router-link :to="this.$routes.GRXX.path">
        <div class="link-item btn">
          <i class="link-icon icon-account"></i>
          <span class="link-text">个人信息</span>
          <i class="link-icon icon-next"></i>
        </div>
      </router-link>
      <router-link :to="this.$routes.JFJL.path">
        <div class="link-item btn">
          <i class="link-icon icon-money"></i>
          <span class="link-text">待缴记录</span>
          <i class="link-icon icon-next"></i>
        </div>
      </router-link>
      <router-link :to="this.$routes.WDYY.path">
        <div class="link-item btn">
          <i class="link-icon icon-before"></i>
          <span class="link-text">我的预约</span>
          <i class="link-icon icon-next"></i>
        </div>
      </router-link>
      <router-link :to="this.$routes.WDGH.path">
        <div class="link-item btn">
          <i class="link-icon icon-plus"></i>
          <span class="link-text">我的挂号</span>
          <i class="link-icon icon-next"></i>
        </div>
      </router-link>
    </div>
    <div class="module DSMK">
      <router-link :to="this.$routes.JCBG.path">
        <div class="link-item btn">
          <i class="link-icon icon-report"></i>
          <span class="link-text">检查报告</span>
          <i class="link-icon icon-next"></i>
        </div>
      </router-link>
      <router-link :to="this.$routes.JKDA.path">
        <div class="link-item btn">
          <i class="link-icon icon-file"></i>
          <span class="link-text">健康档案</span>
          <i class="link-icon icon-next"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import Loading from '../../components/Loading';
  import AddVisitor from '../../components/AddVisitor';
  import Error from '../../components/Error';

  export default {
    components: {
      Error,
      Loading,
      AddVisitor
    },
    name: 'GRZX',
    data() {
      return {};
    },
    created() {
      this.exeSelectDefaultCard();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.DEFAULT_CARD.isLoading,
      isSuccess: state => state.DEFAULT_CARD.isSuccess,
      isFailure: state => state.DEFAULT_CARD.isFailure,
      data: state => state.DEFAULT_CARD.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_GRZX {
    height: 100vh;
    background-color: @bgColor;
    position: relative;
    a:last-child {
      .link-item:after {
        border: none;
      }
    }
    .DYMK {
      height: 1.11rem;
      min-height: 1.11rem;
      overflow: hidden;
      position: relative;
      .error {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .btn-refresh {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -0.54rem;
          margin-top: -0.15rem;
          display: inline-block;
          line-height: 0.3rem;
          padding: 0 0.3rem;
          overflow: hidden;
          border-radius: 0.3rem;
          background-color: #5f9bf1;
          font-size: 0.12rem;
          color: @white;
        }
      }
      .select {
        .row-box-1 {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          font-size: 0;
          padding-left: 0.15rem;
          img {
            width: 0.75rem;
            height: 0.75rem;
            display: inline-block;
            vertical-align: middle;
          }
          &:before {
            content: '';
            height: 100%;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .row-box-2 {
          padding: 0.25rem 1.1rem 0.25rem 1rem;
          .name {
            display: block;
            margin-bottom: 0.05rem;
            font-size: 0.14rem;
          }
          .span {
            display: block;
            line-height: 0.2rem;
            font-size: 0.12rem;
            color: @fontColor;
          }
        }
        .row-box-3 {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          font-size: 0;
          padding-right: 0.15rem;
          .btn-manager {
            padding: 0 0.1rem;
            line-height: 0.3rem;
            display: inline-block;
            vertical-align: middle;
            border-radius: @borderRadius;
            border: 1px solid @buttonColor;
            color: @buttonColor;
            font-size: 0.12rem;
          }
          &:before {
            content: '';
            height: 100%;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
    .DEMK {
      height: auto;
      .link-item {
        line-height: 0.45rem;
        padding-left: 0.15rem;
        position: relative;
        font-size: 0;
        .link-icon {
          text-align: center;
          line-height: 0.25rem;
          display: inline-block;
          vertical-align: middle;
          font-size: 0.13rem;
          &:first-child {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 100%;
            margin-right: 0.1rem;
            background-color: @userCenterIconBgColor;
            color: @userCenterIconColor;
            font-size: 0.16rem;
          }
        }
        .link-text {
          display: inline-block;
          vertical-align: middle;
          font-size: 0.15rem;
          color: #333333;
        }
        .icon-next {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 0.15rem;
          height: 100%;
          line-height: 0.45rem;
        }
        &:after {
          content: '';
          display: block;
          border-top: @border;
        }
      }
    }
    .DSMK {
      height: auto;
      .link-item {
        line-height: 0.45rem;
        padding-left: 0.15rem;
        position: relative;
        font-size: 0;
        .link-icon {
          text-align: center;
          line-height: 0.25rem;
          display: inline-block;
          vertical-align: middle;
          font-size: 0.13rem;
          &:first-child {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 100%;
            margin-right: 0.1rem;
            background-color: @userCenterIconBgColor;
            color: @userCenterIconColor;
            font-size: 0.15rem;
          }
        }
        .link-text {
          display: inline-block;
          vertical-align: middle;
          font-size: 0.15rem;
          color: #333333;
        }
        .icon-next {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 0.15rem;
          height: 100%;
          line-height: 0.45rem;
        }
        &:after {
          content: '';
          display: block;
          border-top: @border;
        }
      }
    }
  }
</style>
