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

	var fields = [ 
	    'DPTO', 'DPTOLOC', 'CCZ', 'SP_2010', 'TIPO_VIVIE', 'HOGTE01',
	    'HOGTE02', 'HOGTE03', 'HOGHD00', 'HOGHD01', 'HOGSH01', 'HOGSH02',
	    'HOGSH03', 'HOGSC01', 'HOGSC02', 'HOGCA01', 'HOGCE01', 'HOGCE02',
	    'HOGCE03', 'HOGCE04', 'HOGCE05', 'HOGCE06', 'HOGCE07', 'HOGCE08',
	    'HOGCE09', 'HOGCE10', 'HOGCE11', 'HOGCE12', 'HOGCE13', 'HOGPR01',
	    'HOGPR02', 'HOGPR03', 'NBI_MAT', 'NBI_HAC', 'NBI_COC', 'NBI_VIV',
	    'NBI_AGUA', 'NBI_SANEA', 'NBI_ELECT', 'NBI_CALEF', 'NBI_REFRIG',
	    'NBI_CALENT', 'NBI_CONFOR', 'NBI_EDUCAC', 'NBI_CANTID'
	];
	for (var i = 0, l = fields.length; i < l; i++) {
	  Manager.addWidget(new AjaxSolr.FacetWidget({
	    id: fields[i],
	    target: '#' + fields[i],
	    field: fields[i]
	  }));
	}
	Manager.addWidget(new AjaxSolr.CurrentSearchWidget({
	  id: 'currentsearch',
	  target: '#selection',
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
	    'facet.field': fields,
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