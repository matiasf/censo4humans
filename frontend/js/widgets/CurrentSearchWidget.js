(function ($) {

AjaxSolr.CurrentSearchWidget = AjaxSolr.AbstractWidget.extend({
  start: 0,

  afterRequest: function () {
    var self = this;
    var links = [];

    var fq = this.manager.store.values('fq');
    for (var i = 0, l = fq.length; i < l; i++) {
      facetNameDesc = columnValues[fq[i].split(':')[0]];
      facetValueDesc = getFacetValueDesc(fq[i].split(':')[0], fq[i].split(':')[1]);
      facetNameAndValueDesc = facetNameDesc + ": " + facetValueDesc;
      facetValueDescShort = facetValueDesc.length > 30 ? facetValueDesc.substring(0, 30) + "..." : facetValueDesc;
      links.push($('<button class="btn btn-success btn-sm" data-toggle="tooltip" title="' + facetNameAndValueDesc + '"><span class="glyphicon glyphicon-remove"></span>' + facetValueDescShort +'</button>')
        .click(self.removeFacet(fq[i])));
    }

    if (links.length > 1) {
      links.unshift($('<a href="#"></a>').text('Quitar todos los filtros').click(function () {
        self.manager.store.remove('fq');
        self.doRequest();
        return false;
      }));
    }

    if (links.length) {
      var $target = $(this.target);
      $target.empty();
      for (var i = 0, l = links.length; i < l; i++) {
        $target.append($('<li></li>').append(links[i]));
      }
      $("[data-toggle='tooltip']").tooltip({placement: 'right'});
    }
    else {
      $(this.target).html('<li>Estás viendo todos los documentos :)</li>');
    }
  },

  removeFacet: function (facet) {
    var self = this;
    return function () {
      if (self.manager.store.removeByValue('fq', facet)) {
        self.doRequest();
      }
      return false;
    };
  }
});

})(jQuery);
