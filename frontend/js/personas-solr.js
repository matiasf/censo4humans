google.load("visualization", "1", {packages:["corechart"]});

var Manager;
(function ($) {
    $(function () {
	Manager = new AjaxSolr.Manager({
	    solrUrl: 'http://localhost:8983/solr/personas/'
	});
	Manager.addWidget(new AjaxSolr.ResultWidget({
	    id: 'result',
		docsHeader: '#docsHeader',	    
	    docsBody: '#docsBody'
	}));

	for (var i = 0, l = facetsForPersonas.length; i < l; i++) {
	  Manager.addWidget(new AjaxSolr.FacetWidget({
	    id: facetsForPersonas[i],
	    target: '#' + facetsForPersonas[i],
	    field: facetsForPersonas[i],
	    facetValuesDescMap: personasFacetValuesDescMap,
	  }));
	}
	Manager.addWidget(new AjaxSolr.CurrentSearchWidget({
	  id: 'currentsearch',
	  target: '#selection',
	  facetDescMap: personasFacetDesc,
	  facetValuesDescMap: personasFacetValuesDescMap,
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
	    facetDescMap: personasFacetDesc,
	    targetChart: '#chartType',
	    facetValuesDescMap: personasFacetValuesDescMap,
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
	    var qfacetsForPersonas = query.split('_');
	    for (var i = 0; i < qfacetsForPersonas.length; i++) {
		Manager.store.addByValue('fq', qfacetsForPersonas[i].split('-')[0] + ':' + qfacetsForPersonas[i].split('-')[1]);
	    }
	}	
	google.load("visualization", "1", {packages:["corechart"]});

	var params = {
	    facet: true,
	    'facet.field': facetsForPersonas,
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