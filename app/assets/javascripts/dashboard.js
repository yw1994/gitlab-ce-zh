/**
 * Init dashboard page
 *
 */

$(function(){
  Pager.init(20, true);
  dashboardPage();
});

function dashboardPage(){ 
  $(".event_filter_link").bind('click',(function(){
    toggleFilter($(this));
    reloadActivities();
  }));
}

function reloadActivities(){
  $('.content_list').html('');
  Pager.init(20, true);
}

function toggleFilter(sender){
  sender.parent().toggleClass('inactive');
  var event_filters = $.cookie('event_filter');
  var filter = sender.attr('id').split('_')[0];
  if (!event_filters) {
    event_filters = new Array();
  } else {
    event_filters = event_filters.split(',');
  }
  var index = event_filters.indexOf(filter);
  if (index == -1) {
    event_filters.push(filter);
  } else {
    event_filters.splice(index, 1);
  }
  $.cookie('event_filter', event_filters.join(','));
};

