﻿@customElement("lss-profile-picture")
class LSSProfilePicture extends Polymer.Element {

    @property({ notify: true })
    personId: number = 44;

    constructor() {
        super();
        console.log("What");
    }

    @property({ reflectToAttribute: true })
    shape: string = "circle";

    @property()
    size: number = 60;

    @observe('size')
    _sizeChanged() {
        this.style.width = this.size + 'px';
        this.style.height = this.size + 'px';
    }

    public refresh() {
        var personId = this.personId;
        this.set('personId', 0);
        this.set('personId', personId);
    }

    private isDev(): boolean {

        if (document == null || document.location == null || document.location.host == null)
            return true;

        const host = document.location.host;
        if (host.indexOf("dev") !== -1)
            return true;

        if (host.indexOf("localhost") !== -1)
            return true;

        return false;
    }


    @computed('src')
    getSrc(personId: number, size: number) {
        const largerSize = size * 1.2;  //Grabs a larger picture than needed to reduce pixelation 
        var baseUrl = this.isDev() ? "https://devapi2.leavitt.com/" : "https://api2.leavitt.com/";
        return `${baseUrl}People(${personId})/Default.Picture(size=${largerSize})`;
    }
}