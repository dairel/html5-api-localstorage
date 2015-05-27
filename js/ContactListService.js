var ContactListService = {
	
	contactList: [],
	
	getList: function() {
		ContactListService.getFromLocalStorage();
		return ContactListService.contactList;
	},
	
	add: function(contact) {
		ContactListService.contactList.push(contact);
		ContactListService.saveToLocalStorage();
	},
	
	update: function(contact) {
		//TODO to implement
	},
	
	remove: function(contact) {
		//TODO to implement
	},
	
	saveToLocalStorage: function() {
		var jsonText = JSON.stringify(ContactListService.contactList);
		window.localStorage.setItem('contact-list', jsonText);
	},
	
	getFromLocalStorage: function() {
		var jsonText = window.localStorage.getItem('contact-list');
		if(jsonText) {
			ContactListService.contactList = JSON.parse(jsonText);
		}
	}
	
};