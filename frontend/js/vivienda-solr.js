var Manager;
(function ($) {
    $(function () {
	Manager = new AjaxSolr.Manager({
	    solrUrl: 'http://localhost:8983/solr/viviendas/'
	});
	Manager.addWidget(new AjaxSolr.ResultWidget({
	    id: 'result',
	    target: '#docs'
	}));
	Manager.addWidget(new AjaxSolr.PagerWidget({
	    id: 'pager',
	    target: '#pager',
	    prevLabel: '&lt;',
	    nextLabel: '&gt;',
	    innerWindow: 1,
	    renderHeader: function (perPage, offset, total) {
		$('#pager-header').html($('<span></span>').text('displaying ' + Math.min(total, offset + 1) + ' to ' + Math.min(total, offset + perPage) + ' of ' + total));
	    }
	}));
	Manager.addWidget(new AjaxSolr.ChartWidget({
	    id: 'field',
	    target: '#field'
	}));
	Manager.init();
	Manager.store.addByValue('q', '*:*');
	Manager.doRequest();
    });
})(jQuery);