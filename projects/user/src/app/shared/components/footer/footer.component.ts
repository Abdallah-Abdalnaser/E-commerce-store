import { Component } from '@angular/core';
import { IconDefinition , faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay , faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faArrowRight:IconDefinition = faArrowRight;
  faGooglePlay:IconDefinition = faGooglePlay;
  faApple:IconDefinition = faApple;
}
