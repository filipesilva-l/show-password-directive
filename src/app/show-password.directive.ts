import { Directive, ElementRef, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const buttonStyles = {
	position: 'absolute',
	backgroundColor: '#fff',
	top: '12px',
	right: '15px',
};

@Directive({
	selector: '[appShowPassword]',
	exportAs: 'appShowPassword',
})
export class ShowPasswordDirective implements AfterContentInit {
	show$ = new BehaviorSubject(false);

	private el: HTMLElement;

	constructor(el: ElementRef) {
		this.el = el.nativeElement;
	}

	ngAfterContentInit(): void {
		this.changeRootElementToRelative();
		this.applyStylesToButton();
	}

	private changeRootElementToRelative() {
		this.el.style.position = 'relative';
	}

	private applyStylesToButton() {
		const button: HTMLButtonElement = this.getFirstChildByTag('button');

		this.applyStyles(button, buttonStyles);

		this.assignClickHandler(button);
	}

	private assignClickHandler(button: HTMLButtonElement) {
		button.onclick = () => {
			this.show$.next(!this.show$.getValue());

			const input: HTMLInputElement = this.getFirstChildByTag('input');
			input.type = this.show$.getValue() ? 'text' : 'password';
		};
	}

	// utilities

	private applyStyles(el: HTMLElement, styles: any) {
		for (let styleAttribute in styles) {
			let value = styles[styleAttribute];

			el.style[styleAttribute as any] = value;
		}
	}

	private getFirstChildByTag<T extends HTMLElement>(tag: string) {
		return this.el.getElementsByTagName(tag)[0] as T;
	}
}
