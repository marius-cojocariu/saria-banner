(function($) {
	var reminderHeight = 0;

	function setPreviewFrameHeight() {
		$('#previewframe').height($(window).height() - reminderHeight);
	}

	$(function() {
		reminderHeight = $('div.purchase-bar').outerHeight(true);

		setPreviewFrameHeight();

		$('a.close-button').click(function() {
			window.location = $('#previewframe').attr('src');
		});
	});
	$(window).load(function() {
		setPreviewFrameHeight();
	}).resize(function() {
		setPreviewFrameHeight();
	})
})(jQuery);
