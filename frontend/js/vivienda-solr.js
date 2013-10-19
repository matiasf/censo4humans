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

	var fields = [ 'DPTO', 'LOC', 'CCZ' ];
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

	Manager.init();
	Manager.store.addByValue('q', '*:*');

	var params = {
      facet: true,
      'facet.field': [ 'DPTO', 'LOC', 'CCZ' ],
      'facet.limit': 20,
      'facet.mincount': 1,
      'f.topics.facet.limit': 50,
      'json.nl': 'map'
    };
    for (var name in params) {
      Manager.store.addByValue(name, params[name]);
    }

	Manager.doRequest();
    });
})(jQuery);