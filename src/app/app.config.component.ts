import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { Auth, Storage } from 'aws-amplify';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

interface ProfilePicture {
    image: string;
    updated: boolean;
    name: string;
    oldName: string;
    file: File;
}

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html',
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                opacity: 0,
                transform: ' translateX(-50%) translateY(-50%)'
            })),
            state('visibleAnimated', style({
                opacity: 1,
                transform: 'translateX(-50%) translateY(-50%) scale(1)',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)'))
        ])
    ]
})
export class AppConfigComponent implements OnInit {

    name: String;
    surname: String;
    darkColors: any;
    lightColors: any;
    customColors: any;
    menuColors: any;
    selectedColorOptions: any;
    componentThemes: any;
    picture: ProfilePicture;

    constructor(public app: AppComponent, public appMain: AppMainComponent) {
        this.picture = {
            image: undefined,
            updated: false,
            name: undefined,
            oldName: undefined,
            file: undefined
        }
    }

    ngOnInit() {
        Auth.currentAuthenticatedUser().then(data => {
            this.name = data.attributes['given_name'];
            if (this.name == undefined)
                this.name = ""
            this.surname = data.attributes['family_name'];
            if (this.surname == undefined)
                this.surname = ""
            var imageName = data.attributes['picture']
            this.picture.updated = false;
            if (imageName == undefined) {
                imageName = "default.png";
            } else {
                this.picture.oldName = imageName;
                this.picture.name = imageName;
            }
            Storage.get("profilePictures/" + imageName, {
                level: "public",
                download: false
            }).then(result => this.picture.image = result)
        })

        this.lightColors = [
            { name: 'Blue', file: 'blue', image: 'blue.svg' },
            { name: 'Green', file: 'green', image: 'green.svg' },
            { name: 'Yellow', file: 'yellow', image: 'yellow.svg' },
            { name: 'Cyan', file: 'cyan', image: 'cyan.svg' },
            { name: 'Purple', file: 'purple', image: 'purple.svg' },
            { name: 'Orange', file: 'orange', image: 'orange.svg' },
            { name: 'Teal', file: 'teal', image: 'teal.svg' },
            { name: 'Magenta', file: 'magenta', image: 'magenta.svg' },
            { name: 'Lime', file: 'lime', image: 'lime.svg' },
            { name: 'Brown', file: 'brown', image: 'brown.svg' },
            { name: 'Red', file: 'red', image: 'red.svg' },
            { name: 'Indigo', file: 'indigo', image: 'indigo.svg' },
        ];
        this.darkColors = [
            { name: 'Blue', file: 'blue', image: 'blue.svg' },
            { name: 'Green', file: 'green', image: 'green.svg' },
            { name: 'Yellow', file: 'yellow', image: 'yellow.svg' },
            { name: 'Cyan', file: 'cyan', image: 'cyan.svg' },
            { name: 'Purple', file: 'purple', image: 'purple.svg' },
            { name: 'Orange', file: 'orange', image: 'orange.svg' },
            { name: 'Teal', file: 'teal', image: 'teal.svg' },
            { name: 'Magenta', file: 'magenta', image: 'magenta.svg' },
            { name: 'Lime', file: 'lime', image: 'lime.svg' },
            { name: 'Brown', file: 'brown', image: 'brown.svg' },
            { name: 'Red', file: 'red', image: 'red.svg' },
            { name: 'Indigo', file: 'indigo', image: 'indigo.svg' },
        ];
        this.customColors = [
            { name: 'Chile', file: 'chile', image: 'chile.png' },
            { name: 'Naples', file: 'naples', image: 'naples.png' },
            { name: 'Georgia', file: 'georgia', image: 'georgia.png' },
            { name: 'Infinity', file: 'infinity', image: 'infinity.png' },
            { name: 'Chicago', file: 'chicago', image: 'chicago.png' },
            { name: 'Majesty', file: 'majesty', image: 'majesty.png' },
            { name: 'Fish', file: 'fish', image: 'fish.png' },
            { name: 'Dawn', file: 'dawn', image: 'dawn.png' },
            { name: 'Record', file: 'record', image: 'record.png' },
            { name: 'Pool', file: 'pool', image: 'pool.png' },
            { name: 'Metal', file: 'metal', image: 'metal.png' },
            { name: 'China', file: 'china', image: 'china.png' },
            { name: 'Table', file: 'table', image: 'table.png' },
            { name: 'Panorama', file: 'panorama', image: 'panorama.png' },
            { name: 'Barcelona', file: 'barcelona', image: 'barcelona.png' },
            { name: 'Underwater', file: 'underwater', image: 'underwater.png' },
            { name: 'Symmetry', file: 'symmetry', image: 'symmetry.png' },
            { name: 'Rain', file: 'rain', image: 'rain.png' },
            { name: 'Utah', file: 'utah', image: 'utah.png' },
            { name: 'Wave', file: 'wave', image: 'wave.png' },
            { name: 'Flora', file: 'flora', image: 'flora.png' },
            { name: 'Speed', file: 'speed', image: 'speed.png' },
            { name: 'Canopy', file: 'canopy', image: 'canopy.png' },
            { name: 'SanPaolo', file: 'sanpaolo', image: 'sanpaolo.png' },
            { name: 'Basketball', file: 'basketball', image: 'basketball.png' },
            { name: 'Misty', file: 'misty', image: 'misty.png' },
            { name: 'Summit', file: 'summit', image: 'summit.png' },
            { name: 'Wall', file: 'wall', image: 'wall.png' },
            { name: 'Ferris', file: 'ferris', image: 'ferris.png' },
            { name: 'Ship', file: 'ship', image: 'ship.png' },
            { name: 'NY', file: 'ny', image: 'ny.png' },
            { name: 'Cyan', file: 'cyan', image: 'cyan.png' },
            { name: 'Violet', file: 'violet', image: 'violet.png' },
            { name: 'Red', file: 'red', image: 'red.png' },
            { name: 'Blue', file: 'blue', image: 'blue.png' },
            { name: 'Porsuk', file: 'porsuk', image: 'porsuk.png' },
            { name: 'Pink', file: 'pink', image: 'pink.png' },
            { name: 'Purple', file: 'purple', image: 'purple.png' },
            { name: 'Orange', file: 'orange', image: 'orange.png' },
        ];
        this.menuColors = [
            { name: 'light' },
            { name: 'custom' },
            { name: 'dark' }
        ];
        this.selectedColorOptions = this.lightColors;
        this.componentThemes = [
            { name: 'Blue', file: 'blue', image: 'blue.svg' },
            { name: 'Green', file: 'green', image: 'green.svg' },
            { name: 'Yellow', file: 'yellow', image: 'yellow.svg' },
            { name: 'Cyan', file: 'cyan', image: 'cyan.svg' },
            { name: 'Purple', file: 'purple', image: 'purple.svg' },
            { name: 'Orange', file: 'orange', image: 'orange.svg' },
            { name: 'Teal', file: 'teal', image: 'teal.svg' },
            { name: 'Magenta', file: 'magenta', image: 'magenta.svg' },
            { name: 'Lime', file: 'lime', image: 'lime.svg' },
            { name: 'Brown', file: 'brown', image: 'brown.svg' },
            { name: 'Red', file: 'red', image: 'red.svg' },
            { name: 'Indigo', file: 'indigo', image: 'indigo.svg' },
        ];
    }

    changeLayout(event, mode) {
        this.app.darkMode = mode;

        if (mode === true) {
            this.app.menuColorMode = 'dark';
            this.app.menuColor = 'layout-menu-dark';
            this.selectedColorOptions = this.darkColors;
            this.app.layoutColor = this.selectedColorOptions[0].file;
            this.changeLightDarkLayout('layout-css', this.selectedColorOptions[0].file, 'layout-dark');
            this.changeLightDarkTheme('theme-css', 'theme-dark');
        } else {
            this.app.menuColorMode = 'light';
            this.app.menuColor = 'layout-menu-light';
            this.selectedColorOptions = this.lightColors;
            this.app.layoutColor = this.selectedColorOptions[0].file;
            this.changeLightDarkLayout('layout-css', this.selectedColorOptions[0].file, 'layout-light');
            this.changeLightDarkTheme('theme-css', 'theme-light');
        }
        event.preventDefault();
    }

    changeLightDarkTheme(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value + '.css';
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }

    changeLightDarkLayout(id, color, mode) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 2] = color;
        urlTokens[urlTokens.length - 1] = mode + '.css';
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }

    changeMenuToHorizontal(event, mode) {
        this.app.horizontalMenu = mode;
        event.preventDefault();
    }

    changeMenuColor(event, mode) {
        this.app.menuColorMode = mode;
        if (mode !== 'custom') {
            this.app.menuColor = 'layout-menu-' + mode;
            if (mode === 'dark') {
                this.selectedColorOptions = this.darkColors;
                this.app.layoutColor = this.selectedColorOptions[0].file;
                this.changeStyleSheetsColor('layout-css', this.selectedColorOptions[0].file);
            } else {
                this.selectedColorOptions = this.lightColors;
                this.app.layoutColor = this.selectedColorOptions[0].file;
                this.changeStyleSheetsColor('layout-css', this.selectedColorOptions[0].file);
            }
        } else {
            this.app.menuColor = 'layout-menu-' + this.customColors[0].file;
            this.selectedColorOptions = this.customColors;
        }
        event.preventDefault();
    }

    changeMenuTheme(event, color) {
        if (this.app.menuColorMode !== 'custom') {
            this.changeStyleSheetsColor('layout-css', color);
            this.app.layoutColor = color;
        } else {
            this.app.menuColor = 'layout-menu-' + color;
        }
        event.preventDefault();
    }

    changeComponentTheme(event, color) {
        this.app.themeColor = color;
        this.changeStyleSheetsColor('theme-css', color);
        event.preventDefault();
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 2] = value;
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }

    async onConfigCloseClick() {
        this.appMain.configActive = false;
    }

    async onConfigSaveClick() {
        var imageName = (this.picture.name == undefined) ? '' : this.picture.name;
        if (this.picture.updated) {
            Storage.put("profilePictures/" + this.picture.name, this.picture.file, {
                'contentType': 'image/*'
            });
            Storage.remove("profilePictures/" + this.picture.oldName);
        }
        if (!this.disabled()) {
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                'given_name': this.name,
                'family_name': this.surname,
                'picture': imageName
            });
            this.appMain.configActive = false;
        }
    }

    onUpload(event: UploadEvent) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.picture.image = e.target.result
            this.picture.file = event.files[0];
            this.picture.name = event.files[0].name;
            this.picture.updated = true;
        }
        reader.readAsDataURL(event.files[0]);
    }

    disabled() {
        return this.name == undefined || !(this.name.trim().length > 0 && this.surname.trim().length > 0);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

}
