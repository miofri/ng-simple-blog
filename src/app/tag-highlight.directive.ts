import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appTagHighlight]',
	standalone: true,
})
export class TagHighlightDirective {
	constructor(private el: ElementRef) {}

	@Input() appTagHighlight?: string[];

	ngOnChanges() {
		if (this.appTagHighlight?.includes('programming')) {
			this.el.nativeElement.style.backgroundColor = 'pink';
		}
	}
}
