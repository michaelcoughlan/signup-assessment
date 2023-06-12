import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() isDisabled = false;
    @Input() text = '';
    @Input() type = 'button';
    @Output() onClick = new EventEmitter<void>();

    handleButtonClick() {
        this.onClick.emit();
    }
}
