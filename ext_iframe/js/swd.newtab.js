/* global swd_base64CursorArrow:true, swd_base64CursorWait:true, swd:true */
(function(window){
  "use strict";

  window.swd.newTab = function() {

    var that = {};
    that.view = {};
    that.view.container = $('<div>',{'class':'swd_newtab'}).appendTo('body').hide();
    that.view.search = $('<input>',{placeholder:'url...', type:'search', 'class':'swd_searchfield'}).appendTo(that.view.container);
    that.view.mostvisited = $('<div>',{'class':'swd_mostvisited'}).appendTo(that.view.container);


    window.swd.openNewTabScreen = function(){
      that.view.container.show();
    };

    window.swd.closeNewTabScreen = function(){
      that.view.container.hide();
    };

    function thumbnailsGotten(data) {
      var list = $('<ul>',{'class':"swd_newtab_list"}).appendTo(that.view.mostvisited);
      for(var i=0; i< data.length; i++){
        var href = data[i].url;
        var title = data[i].title;
        var favicon = 'chrome://favicon/' + data[i].url;
        var item = $('<div>',{'class':"swd_newtab_list_item"}).appendTo(list);
        $('<img>',{src:favicon}).appendTo(item);
        $('<h3>').html(title).appendTo(item);
        $('<a>',{href:href}).html(href).appendTo(item);
      }
    }


    window.swd.ask('messageGetMostVisitedPages', false, function(response){
      thumbnailsGotten(response.data);
    });


      //document.querySelector('.searchfield').value = '';
     // chrome.topSites.get(thumbnailsGotten);







  };


})(window);
