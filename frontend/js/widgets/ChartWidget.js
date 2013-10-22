(function ($) {
    AjaxSolr.ChartWidget = AjaxSolr.AbstractWidget.extend({
	start: 0,
	
	init: function() {
	    for(var column in columnValues) {
			$('#field').append('<option value="' + column + '">' + columnValues[column] + '</option>');
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