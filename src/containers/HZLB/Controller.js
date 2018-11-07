import {mapActions} from 'vuex';

const controller = {
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.exeSelectVisitorList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.exeSelectVisitorList();
    }, 500);
  },
  init(mescroll) {
    this.mescroll = mescroll;
  },
  insertVisitor() {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  exeDeleteVisitorList(params) {
    const result = confirm('确认解绑就诊卡吗?');
    if (result) {
      alert(true);
    } else {
      alert(false);
    }
  },
  exeUpdateVisitorList(params) {
  },
  exeSelectVisitorList() {
    this.$vux.loading.show({
      text: '加载中...'
    });
    const data = {Value: this.pageCode};
    this.selectVisitorList(data)
      .then((res) => {
        const data = res.data.rows;
        this.$vux.loading.hide();
        const hasNext = data.length !== 10 ? false : true;
        if (this.mescroll) {
          this.mescroll.endSuccess(data.length, hasNext);
        }
      })
      .catch((err) => {
        console.log(err);
        this.pageCode--;
        this.pageCode = this.pageCode <= 0 ? 1 : this.pageCode;
        this.$vux.loading.hide();
        if (this.data.length !== 0) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '加载失败'
          });
        }
        if (this.mescroll) {
          this.mescroll.endErr();
        }
      });
  },
  ...mapActions([
    'insertVisitorList',
    'deleteVisitorList',
    'updateVisitorList',
    'selectVisitorList'
  ])
};

export default controller;
