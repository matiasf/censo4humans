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

	var fields = [ 
	    'DPTO', 'DPTOLOC', 'CCZ', 'SP_2010', 'TIPO_VIVIE', 'PERPH02',
	    'PERNA01', 'PERNA02MES', 'PERNA02ANO', 'PERPA01', 'PERPA02',
	    'PERPA03', 'PERER01_1', 'PERER01_2', 'PERER01_3', 'PERER01_4',
	    'PERER01_5', 'PERER02', 'PEREC01', 'PEREC03', 'PEREC04', 'PERMI01',
	    'PERMI01_1', 'PERMI01_2', 'PERMI01_3', 'PERMI01_4', 'PERMI20',
	    'PERMI02_1', 'PERMI05', 'PERMI05_1', 'PERMI06_1', 'PERMI06_2',
	    'PERMI06_3', 'PERMI06_4', 'PERMI07', 'PERMI07_1', 'PERMI07_2', 
	    'PERMI07_3', 'PERMI07_4', 'PERED00', 'PERED01', 'PERED02', 
	    'PERED02_1', 'PERED02_2', 'PERED02_3', 'PERED02_4', 'PERED03_R',
	    'PERED03_1', 'PERED03_2', 'PERED04_R', 'PERED06_R', 'PERED08',
            'NIVELEDU_R', 'PERAL01', 'PERAL02', 'PERAL03', 'PERAL04', 'PERAL05',
            'PERAL09', 'PERAL09_1', 'PERAL09_2', 'PERAL09_3', 'PERAL11',
            'PERAL12', 'PERFM01', 'PERFM01_1', 'PERFM02', 'PERFM02_1',
            'PERDI01', 'PERDI02', 'PERDI04', 'PERDI05', 'POBPCOAC', 'PERFM01_R',
            'PERFM02_R'
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
	    targetChart: '#chartType',
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