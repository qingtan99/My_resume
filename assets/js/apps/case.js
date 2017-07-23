/**
 * Created by tanqing on 2017/7/20.
 */

var vm = new Vue({
    el: "#contentContainer",
    data: {
        caseList: []
    },
    mounted: function () {
        this.$nextTick(function () {
            vm.getCaseListData();
            window.addEventListener('scroll', vm.scrollTop);
            window.onload = function() {
                $('#loader').hide();
            }
        });
    },
    methods: {
        //获取数据
        getCaseListData: function () {
            var _this = this;
            this.$http.get('../assets/data/case.json')
                .then(function (res) {
                    _this.caseList = res.data.result.module;
                })
                .catch(function (res) {
                })
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