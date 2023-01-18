import { Component, Input } from '@angular/core';
import { ShowPasswordDirective } from '../show-password.directive';

@Component({
	selector: 'app-button-show-password',
	templateUrl: './button-show-password.component.html',
	styleUrls: ['./button-show-password.component.scss'],
})
export class ButtonShowPasswordComponent {
	@Input() directive!: ShowPasswordDirective;
}
