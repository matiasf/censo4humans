(function ($) {
    
    AjaxSolr.ChartWidget = AjaxSolr.AbstractWidget.extend({
	start: 0,
	
	beforeRequest: function () {
//	    $(this.target).html($('<img>').attr('src', 'images/ajax-loader.gif'));
	},
	
	/*facetLinks: function (facet_field, facet_values) {
	  var links = [];
	  if (facet_values) {
	  for (var i = 0, l = facet_values.length; i < l; i++) {
          if (facet_values[i] !== undefined) {
          links.push(
          $('<a href="#"></a>')
          .text(facet_values[i])
          .click(this.facetHandler(facet_field, facet_values[i]))
          );
          }
          else {
          links.push('no items found in current selection');
          }
	  }
	  }
	  return links;
	  },
	  
	  facetHandler: function (facet_field, facet_value) {
	  var self = this;
	  return function () {
	  self.manager.store.remove('fq');
	  self.manager.store.addByValue('fq', facet_field + ':' + AjaxSolr.Parameter.escapeValue(facet_value));
	  self.doRequest();
	  return false;
	  };
	  },*/
	
	afterRequest: function () {
	    if ($(this.target).val()) {
		var arrayData = [[$(this.target).val() , 'Cantidad']];
		for (var facet in this.manager.response.facet_counts.facet_fields[$(this.target).val()]) {
		    arrayData.push([facet, parseInt(this.manager.response.facet_counts.facet_fields[$(this.target).val()][facet])]);
		}
		google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawChart);
		function drawChart() {
		    var data = google.visualization.arrayToDataTable(arrayData);
		    
		    var options = {
			title: 'Viviendas'
		    };
		    
		    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		    chart.draw(data, options);
		}
		
	    }
	},
	
	
	/*init: function () {
	  $(document).on('click', 'a.more', function () {
	  var $this = $(this),
          span = $this.parent().find('span');
	  
	  if (span.is(':visible')) {
          span.hide();
          $this.text('more');
	  }
	  else {
          span.show();
          $this.text('less');
	  }
	  
	  return false;
	  });
	  }*/
    });
    
})(jQuery);