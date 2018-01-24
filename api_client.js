/**
 * Represents a media.
 * @constructor
 * @param {Array.} fields - Properties of the media.
 */
 function Media(fields) {
 	this.type = fields["type"];
 	this.thumbnail = fields["thumbnail"];
 	this.file = fields["file"];
 	this.category = fields["category"];
 	this.title = fields["title"];
 	this.description = fields["description"];
 }

 /**
 * Filters the response using the params.
 * @author Sarah
 * @param {JSON} resultset - Response of the called API.
 * @param {string} filter - Filter chosen.
 * @param {string} content - Value of filter.
 * Ref: https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
 */
 function filter_response(resultset, filter, content) {
 	return resultset.filter(function(obj) {  /** returns the JSON elements where the inner function returned True */
 		return obj[filter] == content;  /** returns bool */
 	});
 }

 function build_media_list(obj) {
 	var media = new Media(obj);

 	var card = '<div class="col-md-4 col-sm-12 col-lg-4">'+
 	'<div class="thumbnail">'+
 	'<a href="'+media.file+'" target="_blank">'+
 	'<img src="'+media.thumbnail+'" alt="'+media.name+'" class="img-thumbnail" style="width: 100%;">'+
 	'</a>'+
 	'<div class="caption">'+			
 	'<p><strong>Type:</strong> '+media.type+'</p>'+
 	'<p><strong>Description:</strong> '+media.description+'</p>'+
 	'</div>'+
 	'</div>'+
 	'</div>';
 	return card;
 }

 function build_filter_list(field) {
 	var filter = '<option value="">Valor</option>';

 	if (field == "type") {
		filter = '<option value="image">Image</option>';
		filter += '<option value="rss">Rss</option>';
		filter += '<option value="video">Video</option>';
 	} else if (field == "category") {
		filter = '<option value="Entertainment">Entertainment</option>';
		filter += '<option value="News">News</option>';
		filter += '<option value="Sports">Sports</option>';
 	}

 	return filter;
 }