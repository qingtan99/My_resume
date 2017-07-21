/**
 * Created by tanqing on 2017/7/20.
 */

$(function() {
    var vm = {};

    //绑定事件
    vm.bindEvent = function () {
        $('body')
            .on('click', '.back-home', vm.eventController.goHomePage)   //返回首页
            .on('click', '.left-container li', vm.eventController.switchContent)   //导航切换内容

    };

    //事件处理
    vm.eventController = {

        //返回主页
        goHomePage: function() {
            window.location.href = "https://qingtan99.github.io/My_resume/";
        },

        // 导航切换内容
        switchContent: function(e) {
            var $this =$(e.currentTarget);
            var _index = $this.index();
            $this.addClass('nav-actived').siblings().removeClass('nav-actived');
            $('.content-item:eq('+_index+')').removeClass('hide').siblings().addClass('hide');
        }
    };

    vm.init = function() {
        vm.bindEvent();
    }

    vm.init();
});