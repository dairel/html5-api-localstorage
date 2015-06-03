var ContactListService = {
	
	list: [],
	
	getList: function() {
		ContactListService.getFromLocalStorage();
		return ContactListService.list;
	},
	
	add: function(contact) {
		ContactListService.list.push(contact);
		ContactListService.saveToLocalStorage();
	},
	
	remove: function(contact) {
		//TODO to implement
	},
	
	saveToLocalStorage: function() {
		var jsonText = JSON.stringify(ContactListService.list);
		window.localStorage.setItem('contact-list', jsonText);
	},
	
	getFromLocalStorage: function() {
		var jsonText = window.localStorage.getItem('contact-list');
		if(jsonText) {
			ContactListService.list = JSON.parse(jsonText);
		}
	}
	
};