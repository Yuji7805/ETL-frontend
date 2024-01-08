import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Auth, Storage } from 'aws-amplify';
import { Url } from 'aws-sdk/clients/cloudformation';

@Component({
	selector: 'app-topbar',
	templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {

	activeItem: number;
	userName: String;
	profilePicture: string;

	constructor(public appMain: AppMainComponent) { }

	mobileMegaMenuItemClick(index) {
		this.activeItem = this.activeItem === index ? null : index;
	}

	async ngOnInit() {
		Auth.currentAuthenticatedUser().then(data => {
			const name = data.attributes['given_name'];
			const surname = data.attributes['family_name'];
			const picture = data.attributes['picture'];
			if (name == undefined || surname == undefined)
				this.userName = data.attributes['preferred_username'];
			else
				this.userName = name + " " + surname;
			const imageName = (picture == undefined) ? "default.png" : picture
			Storage.get("profilePictures/" + imageName, {
				level: "public",
				download: false
			}).then(result => this.profilePicture = result)
		});
	}

	async onSignOutClick() {
		await Auth.signOut()
			.then(data => console.log(data))
			.catch(err => console.log(err));
	}

	async onUserProfileClick() {
		this.appMain.configActive = true;
	}

}
