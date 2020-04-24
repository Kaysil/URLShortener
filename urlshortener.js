var urlshortener = function (type, data) {
	var args = data.args;
		args.shift();
	global.plugins.shortener.shortURL(args[0], args[1]).then(function (a) {
  if (a.error) {
	data.log(`Find error while ShortURL for FB-${data.msgdata.senderID}`);
    data.return({
		handler: `internal`,
		data: `ERR: ${a.error}`
	});
  } else {
	  data.log(`Successfully ShortURL for FB-${data.msgdata.senderID}`);
	  data.return({
		handler: `internal`,
		data: `Your link here ${a.url}`
	});
  }
});
}

module.exports = {
	urlshortener
}