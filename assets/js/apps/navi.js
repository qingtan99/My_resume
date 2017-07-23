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
                window.addEventListener('scroll', vm.scrollTop);
                window.onload = function() {
                    $('.loader-container').hide();
                }
            });
        },
        methods: {
            //获取数据
            getListData: function () {
                var _this = this;
                this.$http.get('../assets/data/navi.json')
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
            },

            //滚动条距离顶部的距离
            scrollTop: function() {
                if($(window).scrollTop() > 100) {
                    $('.back-top').fadeIn(300);
                }else {
                    $('.back-top').fadeOut(300);
                }
            },

            //返回顶部
            goTop: function() {
                $("html,body").animate({scrollTop:0}, 500);
                return false;
            }
        }
    });