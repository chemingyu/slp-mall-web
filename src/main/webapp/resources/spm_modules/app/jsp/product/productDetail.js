define('app/jsp/product/productDetail', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
    Widget = require('arale-widget/1.2.0/widget'),
    Dialog = require("artDialog/src/dialog"),
    Paging = require('paging/0.0.1/paging-debug'),
    AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
    require("bootstrap-paginator/bootstrap-paginator.min");
    require("app/util/jsviews-ext");
    
    require("opt-paging/aiopt.pagination");
    require("twbs-pagination/jquery.twbsPagination.min");
    var SendMessageUtil = require("app/util/sendMessage");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    //定义页面组件类
    var ProductDeatilPager = Widget.extend({
    	
    	Implements:SendMessageUtil,
    	//属性，使用时由类的构造函数传入
    	attrs: {
    	},
    	Statics: {
    	},
    	//事件代理
    	events: {
    		//查询
            "click #BTN_SEARCH":"_searchBtnClick"
        },
    	//重写父类
    	setup: function () {
    		ProductDeatilPager.superclass.setup.call(this);
    		this._renderProducSKUTemple();
    	},
    	_renderProducSKUTemple:function(){
    		var template = $.templates("#producSKUTemple");
			var htmlOutput = template.render(producSKU);
			$("#producSKUData").html(htmlOutput);
    	}
    });
    
    module.exports = ProductDeatilPager
});

