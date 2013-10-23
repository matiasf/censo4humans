(function ($) {
    AjaxSolr.ChartWidget = AjaxSolr.AbstractWidget.extend({
	start: 0,
	
	init: function() {
	    var query = '';
	    var sfield = '';
	    if (window.location.search.substring(1)) {
		query = window.location.search.substring(1);
	    }
	    if (query) {
		sfield = query.split('|')[1];
	    }
	    
	    for(var column in columnValues) {
		if(column == sfield) {
		    $('#field').append('<option value="' + column + '" selected>' + columnValues[column] + '</option>');
		}
		else {
		    $('#field').append('<option value="' + column + '">' + columnValues[column] + '</option>');
		}
		
	    };
	    
	    $(this.target).change(function() {
		Manager.doRequest();
	    });
	},
	
	afterRequest: function () {
	    if ($(this.target).val()) {
		var arrayData = [[$(this.target).val() , 'Cantidad']];
		for (var facet in this.manager.response.facet_counts.facet_fields[$(this.target).val()]) {
		    arrayData.push([getFacetValueDesc($(this.target).val(),facet), parseInt(this.manager.response.facet_counts.facet_fields[$(this.target).val()][facet])]);
		};
		this.chart.draw(google.visualization.arrayToDataTable(arrayData));
	    }
	}
    });
    
})(jQuery);