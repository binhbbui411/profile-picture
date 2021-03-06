var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let LssProfilePictureMenu = class LssProfilePictureMenu extends Polymer.LazyImportsMixin(TitaniumRequesterMixin(Polymer.mixinBehaviors([Polymer.GestureEventListeners], Polymer.Element))) {
    constructor() {
        super(...arguments);
        this.lazyPersonId = 0;
        this.hovered = false;
    }
    ready() {
        super.ready();
    }
    refresh() {
        this.$.profilePicture.refresh();
        this.$.innerProfilePicture.refresh();
    }
    clickHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = yield this.importLazyGroup('menu');
            const dialog = this.$.dialog;
            this.lazyPersonId = this.personId;
            dialog.removeAttribute('unresolved');
            dialog.positionTarget = this.$.profilePicture;
            dialog.toggle();
        });
    }
    myAccountClickHandler(e) {
        window.open('https://accounts.leavitt.com/', '_blank');
    }
    signoutClickHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let userManager = yield this.requestInstance('UserManager');
            userManager.logoutAsync();
        });
    }
    canceled(event) {
        if (this.hovered)
            event.preventDefault();
    }
    onHovered() {
        this.hovered = true;
    }
    onUnhovered() {
        this.hovered = false;
    }
};
__decorate([
    property({ notify: true }),
    __metadata("design:type", Number)
], LssProfilePictureMenu.prototype, "personId", void 0);
__decorate([
    property(),
    __metadata("design:type", Number)
], LssProfilePictureMenu.prototype, "lazyPersonId", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", String)
], LssProfilePictureMenu.prototype, "fullname", void 0);
__decorate([
    gestureListen('tap', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LssProfilePictureMenu.prototype, "clickHandler", null);
__decorate([
    gestureListen('tap', 'myAccountButton'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "myAccountClickHandler", null);
__decorate([
    gestureListen('tap', 'signout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LssProfilePictureMenu.prototype, "signoutClickHandler", null);
__decorate([
    listen('iron-overlay-canceled'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "canceled", null);
__decorate([
    listen('mouseover', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "onHovered", null);
__decorate([
    listen('mouseout', 'profilePicture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssProfilePictureMenu.prototype, "onUnhovered", null);
LssProfilePictureMenu = __decorate([
    customElement('lss-profile-picture-menu')
], LssProfilePictureMenu);
