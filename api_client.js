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