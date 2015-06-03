var ListController = {
	
	init: function() {
		ListController.setForm();
		ListController.listContacts();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			ListController.addContact(form);
			ListController.clearForm(form);
			event.preventDefault();
		});
	},
	
	addContact: function(form) {
		var contact = {
			name: form.name.value,
			email: form.email.value
		};
		ContactListService.add(contact);
		ListController.addContactToHTML(contact);
	},
	
	clearForm: function(form) {
		form.reset();
	},
	
	listContacts: function() {
		var contacts = ContactListService.getList();
		contacts.forEach(function(contact) {
			ListController.addContactToHTML(contact);
		});
	},
	
	addContactToHTML: function(contact) {
		var
			section = document.getElementById('guestList'),
			dl = document.createElement('dl'),
			dt = ListController.createDT(contact),
			ddName = ListController.createDDName(contact.name, 'name'),
			ddEmail = ListController.createDD(contact.email, 'email');
		
		dl.appendChild(dt);
		dl.appendChild(ddName);
		dl.appendChild(ddEmail);
		
		section.appendChild(dl);
	},
	
	createImage: function(location) {
		var img = document.createElement('img');
		
		img.src = location;
		
		return img;
	},
	
	createDT: function(contact) {
		var dt = document.createElement('dt');
		
		dt.className = 'photo';
		dt.appendChild(ListController.createImage('images/profile.svg'));
		
		return dt;
	},
	
	createDD: function(value, className) {
		var dd = document.createElement('dd');
		
		dd.className = className;
		dd.innerHTML = value;
		
		return dd;
	},
	
	createDDName: function(value, className) {
		var 
			dd = ListController.createDD(value, className);
		  img = ListController.createImage('images/delete.gif');
		
		dd.appendChild(img);
		
		return dd;
	}

};

//initialization
ListController.init();