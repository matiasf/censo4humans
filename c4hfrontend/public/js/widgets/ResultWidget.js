(function ($) {

AjaxSolr.ResultWidget = AjaxSolr.AbstractWidget.extend({
  start: 0,

  beforeRequest: function () {
    $(this.docsBody).html($('<img>').attr('src', 'assets/images/ajax-loader.gif'));
  },

  afterRequest: function () {
    $(this.docsBody).empty();
    $(this.docsHeader).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      if (i == 0) {
        $(this.docsHeader).append(this.templateHeader(doc));  
      } 
      $(this.docsBody).append(this.templateDoc(doc));
    }
  },

  templateHeader: function (doc) {
    var output = '<tr>';
    for (column in doc) {
      output += '<th>' + column + '<th>';
    }
    output += '</tr>'
    return output;
  },

  templateDoc: function (doc) {
    var output = '<tr>';
    for (column in doc) {
      output += '<td>' + doc[column] + '<td>';
    }
    output += '</tr>'
    return output;
  },
});

})(jQuery);