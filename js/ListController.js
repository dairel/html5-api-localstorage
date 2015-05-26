var ListController = {
	
	init: function() {
		ListController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			alert(form.name.value);
			event.preventDefault();
		});
	}

};

//initialization
ListController.init();