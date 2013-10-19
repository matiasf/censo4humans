(function ($) {

AjaxSolr.ResultWidget = AjaxSolr.AbstractWidget.extend({
  start: 0,

  beforeRequest: function () {
    $(this.target).html($('<img>').attr('src', 'images/ajax-loader.gif'));
  },

  afterRequest: function () {
    $(this.target).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      $(this.target).append(this.template(doc));
    }
  },

  template: function (doc) {
    var output = '<div><h2>' + doc.ID_VIVIEND + '</h2>';
    output += '<p id="links_' + doc.ID_VIVIEND + '" class="links"></p>';
    output += '<p>' + doc.ID_VIVIEND + ' ' + doc.DPTO + '</p></div>';
    return output;
  },
});

})(jQuery);