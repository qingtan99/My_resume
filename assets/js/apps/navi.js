/**
 * Created by tanqing on 2017/7/20.
 */
    var vm = new Vue({
        el: "#mainContainer",
        data: {
            dataList: []
        },
        mounted: function () {
            this.$nextTick(function () {
                vm.getListData();
            });
        },
        methods: {
            //获取数据
            getListData: function () {
                var _this = this;
                this.$http.get('../assets/data.json')
                    .then(function (res) {
                        _this.dataList = res.data.result.navig;
                    })
                    .catch(function (res) {
                    })
            },
            //返回首页
            backHome: function () {
                window.location.href = "https://qingtan99.github.io/My_resume/";
            },

            //侧边导航切换内容
            switchContent: function ($index) {
                $('.left-container li:eq('+$index+')').addClass('nav-actived').siblings().removeClass('nav-actived');
                $('.content-item:eq(' + $index + ')').removeClass('hide').siblings().addClass('hide');
            }
        }
    });