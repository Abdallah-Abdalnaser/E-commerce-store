import { Component , EventEmitter, Output } from '@angular/core';
import { faArrowRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss'
})
export class LoginformComponent {
  faArrowRight:IconDefinition = faArrowRight;
}
