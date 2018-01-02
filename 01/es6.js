// gitters and setters

/*
const person = {
	name: 'George',
	surname: 'Boole',


	get fullname () {
		return this.name + ' ' + this.surname;
	},

	set fullname (fullname) {
		let parts = fullname.split(' ');
		this.name = parts[0];
		this.surname = parts[1];
	}
};

console.log(person.fullname);
console.log(person.fullname = 'Ahmed Soliman');
console.log(person.name)
*/

// map and set 
const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');

profiles.size;
profiles.has('twitter');
profiles.get('twitter');
profiles.has('youtube');
profiles.delete('facebook');
profiles.has('facebook');
profiles.get('facebook');

for ( const entry of profiles ) {
	console.log(entry);
}
//console.log(profiles)