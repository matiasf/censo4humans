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
	    
	    for(var column in (this.facetDescMap)) {
			if(column == sfield) {
			    $('#field').append('<option value="' + column + '" selected>' + (this.facetDescMap)[column] + '</option>');
			}
			else {
			    $('#field').append('<option value="' + column + '">' + (this.facetDescMap)[column] + '</option>');
			}
	    };
	    
	    for(var option in optionChart) {
			$('#chartType').append('<option value="' + option + '">' + optionChart[option] + '</option>');
	    };
	    
	    $(this.target).change(function() {
	    	Manager.doRequest();
	    });
	    
	    $(this.targetChart).change(function() {
	    	Manager.doRequest();
		});
	},

	beforeRequest: function () {
	    $('#piechart').html($("<img class='chart-loader'>").attr('src', 'images/ajax-loader.gif'));
	  },
	
	afterRequest: function () {
		$('#piechart').empty();
	    if ($(this.target).val()) {
	    	switch ($(this.targetChart).val()){
	    	case "1":
	    		this.chart = new google.visualization.PieChart(document.getElementById('piechart'));
	    		var arrayData = [[$(this.target).val() , 'Cantidad']];
				for (var facet in this.manager.response.facet_counts.facet_fields[$(this.target).val()]) {
			    	arrayData.push([getFacetValueDesc(this.facetValuesDescMap, $(this.target).val(),facet), parseInt(this.manager.response.facet_counts.facet_fields[$(this.target).val()][facet])]);
				};
				this.chart.draw(google.visualization.arrayToDataTable(arrayData));
				break;
	    	case "2":
	    		this.chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
	    		var arrayData = [[$(this.target).val() , 'Cantidad']];
				for (var facet in this.manager.response.facet_counts.facet_fields[$(this.target).val()]) {
			    	arrayData.push([getFacetValueDesc(this.facetValuesDescMap, $(this.target).val(),facet), parseInt(this.manager.response.facet_counts.facet_fields[$(this.target).val()][facet])]);
				};
				this.chart.draw(google.visualization.arrayToDataTable(arrayData));
	    		break;
	    	default:
	    		
	    	}
	    }
	}
    });
    
})(jQuery);