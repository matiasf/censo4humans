(function ($) {
    AjaxSolr.ChartWidget = AjaxSolr.AbstractWidget.extend({
	start: 0,
	
	init: function() {
	    var sfield = '';
	    var schart = '';
	    if (document.URL.indexOf('@') !== -1) {
	    	sfield = document.URL.split('/')[document.URL.split('/').length-1].split('@')[1];
	    	schart = document.URL.split('/')[document.URL.split('/').length-1].split('@')[2];
		}
	    
	    for(var column in (this.facetDescMap)) {
			if(column == sfield) {
			    $('#field').append('<option value="' + column + '" selected>' + (this.facetDescMap)[column] + '</option>');
			    if (column == 'DPTO') {
			    	$('#map-option').attr('style', '')
			    }
			    else {
			    	$('#map-option').attr('style', 'display: none;')
			    }
			}
			else {
			    $('#field').append('<option value="' + column + '">' + (this.facetDescMap)[column] + '</option>');
			}
	    };
	    
	    for(var option in optionChart) {
	    	if (option == schart) {
	    		if (option == '3') {
	    			$('#chartType').append('<option value="' + option + '" selected>' + optionChart[option] + '</option>');
	    			('.btn-group.bootstrap-select').eq(1).attr('style', 'display: none;');
	    		}
	    		else {
	    			$('#chartType').append('<option value="' + option + '" selected>' + optionChart[option] + '</option>');
	    			$('.btn-group.bootstrap-select').eq(1).attr('style', '');
	    		}
	    	}
	    	else {
		    	$('#chartType').append('<option value="' + option + '">' + optionChart[option] + '</option>');
	    	}
	    };
	    
	    $('#field').change(function () {
	    	if ($('#field').val() == 'DPTO') {
	    		$('li[rel="2"]').eq(0).attr('style', '');
	    	}
	    	else {
	    		$('li[rel="2"]').eq(0).attr('style', 'display: none;');
	    	}
	    });
	    
	    $('#chartType').change(function () {
	    	if ($('#chartType').val() == '3') {
	    		$('.btn-group.bootstrap-select').eq(1).attr('style', 'display: none;');
	    		$('#field-label').attr('style', 'display: none;');
	    	}
	    	else {
	    		$('.btn-group.bootstrap-select').eq(1).attr('style', '');
	    		$('#field-label').attr('style', '');
	    	}
	    });
	    
	    $(this.target).change(function() {
	    	Manager.doRequest();
	    });
	    
	    $(this.targetChart).change(function() {
	    	Manager.doRequest();
		});
	},

	beforeRequest: function () {
	    $('#piechart').html($("<img class='chart-loader'>").attr('src', 'assets/images/ajax-loader.gif'));
	},
	
	afterRequest: function () {
		$('#piechart').empty();
	    if ($(this.target).val()) {
	    	switch ($(this.targetChart).val()) {
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
		    	case "3":
		    		this.chart = new google.visualization.GeoChart(document.getElementById('piechart'));
		    		var arrayData = [[$(this.target).val() , 'Cantidad']];
					for (var facet in this.manager.response.facet_counts.facet_fields[$(this.target).val()]) {
				    	arrayData.push([getFacetValueDesc(this.facetValuesDescMap, $(this.target).val(),facet), parseInt(this.manager.response.facet_counts.facet_fields[$(this.target).val()][facet])]);
					};
					var options = {
				        region: 'UY',
				        resolution: 'provinces',
				        colorAxis: {colors: ['#f8e358', 'red']},
				        width: 700
				    };
					this.chart.draw(google.visualization.arrayToDataTable(arrayData), options);
		    		break;
	    	}
	    }
	}
});
})(jQuery);