import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-button-show-password',
	templateUrl: './button-show-password.component.html',
	styleUrls: ['./button-show-password.component.scss'],
})
export class ButtonShowPasswordComponent {
	@Input() show: boolean | null = false;
}
