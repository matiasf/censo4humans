google.load("visualization", "1", {packages:["corechart"]});

var Manager;
(function ($) {
    $(function () {
	Manager = new AjaxSolr.Manager({
	    solrUrl: 'http://localhost:8983/solr/hogares/'
	});
	Manager.addWidget(new AjaxSolr.ResultWidget({
	    id: 'result',
		docsHeader: '#docsHeader',	    
	    docsBody: '#docsBody'
	}));
	
	for (var i = 0, l = facetsForHogares.length; i < l; i++) {
	  Manager.addWidget(new AjaxSolr.FacetWidget({
	    id: facetsForHogares[i],
	    target: '#' + facetsForHogares[i],
	    field: facetsForHogares[i],
	    facetValuesDescMap: hogaresFacetValuesDescMap,
	  }));
	}
	Manager.addWidget(new AjaxSolr.CurrentSearchWidget({
	  id: 'currentsearch',
	  target: '#selection',
	  facetDescMap: hogaresFacetDesc,
	  facetValuesDescMap: hogaresFacetValuesDescMap,
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
	    target: '#field',
	    facetDescMap: hogaresFacetDesc,
	    targetChart: '#chartType',
	 	facetValuesDescMap: hogaresFacetValuesDescMap,
	    chart: new google.visualization.PieChart(document.getElementById('piechart'))
	}));
	Manager.init();
	Manager.store.addByValue('q', '*:*');

	var query = '';
	if (window.location.search.substring(1)) {
	    query = window.location.search.substring(1);
	}
	query = query.split('|')[0];
	if (query) {
	    var qfields = query.split('_');
	    for (var i = 0; i < qfields.length; i++) {
		Manager.store.addByValue('fq', qfields[i].split('-')[0] + ':' + qfields[i].split('-')[1]);
	    }
	}	
	google.load("visualization", "1", {packages:["corechart"]});

	var params = {
	    facet: true,
	    'facet.field': facetsForHogares,
	    'facet.limit': 20,
	    'facet.mincount': 1,
	    'f.topics.facet.limit': 50,
	    'json.nl': 'map'
	};
	
	for (var name in params) {
	    Manager.store.addByValue(name, params[name]);
	};
	
	Manager.doRequest();
    });
})(jQuery);