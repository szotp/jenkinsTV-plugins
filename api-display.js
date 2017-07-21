function tick() {
	api.get(settings.url, function(text) {
		api.display(settings.prefix + text)
	})
}