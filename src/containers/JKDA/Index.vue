<template>
  <div class="FX_ZHYL_JKDA">
    <div class="module DYMK">
      <p class="desc">建立个人健康档案，可提高就诊效率与自我健康管理</p>
      <div class="form-group">
        <label class="form-label">身高</label>
        <input class="form-input" type="tel" palceholder="请输入" v-model="height" />
        <i class="form-icon icon-next"></i>
      </div>

      <div class="form-group">
        <label class="form-label">体重</label>
        <input class="form-input" type="tel" palceholder="请输入" v-model="weight" />
        <i class="form-icon icon-next"></i>
      </div>

      <div class="form-group" @click="showMenus('blood')">
        <label class="form-label">血型</label>
        <span class="form-select">{{blood}}</span>
        <i class="form-icon icon-next"></i>
      </div>
    </div>
    <div class="module DEMK">
      <div class="form-group" @click="showMenus('smoke')">
        <label class="form-label">抽烟情况</label>
        <span class="form-select">{{smoke}}</span>
        <i class="form-icon icon-next"></i>
      </div>
      <div class="form-group" @click="showMenus('wine')">
        <label class="form-label">喝酒情况</label>
        <span class="form-select">{{wine}}</span>
        <i class="form-icon icon-next"></i>
      </div>
    </div>
    <div class="module DSMK">
      <button class="btn-save" :class="status" @click="handlerBtnSave">保存</button>
    </div>
    <key-board :isShow.sync="isShow" :initValue.sync="initValue" @writeNumber="writeNumber"></key-board>
    <popup-picker :data="popupPicker.data" :popup-title="popupPicker.popupTitle"
                  :show.sync="popupPicker.show" @on-change="handlerChange"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {PopupPicker} from 'vux';
  import Controller from './Controller';
  import KeyBoard from '../../components/KeyBoard';
  import {getIndexOf} from '../../utils';

  export default {
    components: {
      KeyBoard,
      PopupPicker
    },
    name: 'JKDA',
    data() {
      return {
        TYPE: '',
        isShow: false,
        initValue: '',
        id: 0,
        cardNo: '1',
        height: '',
        weight: '',
        bloodTypeIndex: '',
        smokingIndex: '',
        drinkIndex: '',
        status: 'disabled',
        bloodArr: ['A型', 'B型', 'AB型', 'O型'],
        isSmokeArr: ['无', '有'],
        isDrink: ['无', '有'],
        popupPicker: {
          show: false,
          data: [['']],
          value: null,
          popupTitle: '请选择'
        }
      };
    },
    computed: {
      blood: {
        get: function () {
          return this.bloodArr[this.bloodTypeIndex - 1];
        },
        set: function (newValue) {
          this.bloodTypeIndex = getIndexOf(this.bloodArr, newValue) + 1;
        }
      },
      smoke: {
        get: function () {
          return this.isSmokeArr[this.smokingIndex - 1];
        },
        set: function (newValue) {
          this.smokingIndex = getIndexOf(this.isSmokeArr, newValue) + 1;
        }
      },
      wine: {
        get: function () {
          return this.isDrink[this.drinkIndex - 1];
        },
        set: function (newValue) {
          this.drinkIndex = getIndexOf(this.isDrink, newValue) + 1;
        }
      }
    },
    methods: Controller,
    created() {
      this.exeSelectHealthList();
    },
    watch: {
      height() {
        this.checkNotEmpty();
      },
      weight() {
        this.checkNotEmpty();
      },
      blood() {
        this.checkNotEmpty();
      },
      smoke() {
        this.checkNotEmpty();
      },
      wine() {
        this.checkNotEmpty();
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable.less";

  .FX_ZHYL_JKDA {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.6rem;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .form-group {
      position: relative;
      padding-left: 0.15rem;
      font-size: 0.14rem;
      .form-label {
        line-height: 0.45rem;
        font-size: 0.16rem;
      }
      .form-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.45rem;
        text-align: right;
        padding-right: 0.45rem;
        background-color: transparent;
        font-size: 0.16rem;
        color: @fontColor;
      }
      .form-select {
        float: right;
        line-height: 0.45rem;
        padding-right: 0.45rem;
        font-size: 0.16rem;
        color: @fontColor;
      }
      .form-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
      }
      &:after {
        content: '';
        display: block;
        border-top: @border;
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
    .DYMK {
      .desc {
        padding: 0 0.15rem;
        line-height: 0.36rem;
        background-color: @bgColor;
        color: @fontColor;
      }
    }
    .DSMK {
      box-shadow: none;
      padding: 0.3rem 0.15rem;
      background-color: transparent;
      .btn-save {
        display: block;
        width: 100%;
        line-height: 0.47rem;
        transition: all 300ms ease;
        border-radius: @borderRadius;
        background-color: @buttonColor2;
        letter-spacing: 1px;
        font-size: 0.15rem;
        color: @white;
      }
    }
  }
</style>
