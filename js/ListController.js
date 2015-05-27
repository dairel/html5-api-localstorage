var ListController = {
	
	init: function() {
		ListController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			ListController.addContact(form);
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
	
	listContacts: function() {
		
	},
	
	addContactToHTML: function(contact) {
		var
			section = document.getElementById('guestList'),
			dl = document.createElement('dl'),
			dt = ListController.createDT(contact),
			ddName = ListController.createDD(contact.name, 'name'),
			ddEmail = ListController.createDD(contact.email, 'email');
		
		dl.appendChild(dt);
		dl.appendChild(ddName);
		dl.appendChild(ddEmail);
		
		section.appendChild(dl);
	},
	
	createImage: function(contact) {
		var img = document.createElement('img');
		
		img.src = "http://www.gravatar.com/avatar/aab95d5689ea7c531ea98e9669f87948";
		
		return img;
	},
	
	createDT: function(contact) {
		var dt = document.createElement('dt');
		
		dt.className = "photo";
		dt.appendChild(ListController.createImage(contact));
		
		return dt;
	},
	
	createDD: function(value, className) {
		var dd = document.createElement('dd');
		
		dd.className = className;
		dd.innerHTML = value;
		
		return dd;
	}

};

//initialization
ListController.init();