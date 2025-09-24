import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faPinterestP, faRedditAlien, faYoutube, faInstagram ,IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faSearch , faCartShopping , faHeart , faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  faTwitter:IconDefinition = faTwitter;
  faFacebookF:IconDefinition = faFacebookF;
  faPinterestP:IconDefinition = faPinterestP;
  faRedditAlien:IconDefinition = faRedditAlien;
  faYoutube:IconDefinition = faYoutube;
  faInstagram:IconDefinition = faInstagram;
  faSearch:IconDefinition = faSearch;
  faCartShopping:IconDefinition = faCartShopping;
  faHeart:IconDefinition = faHeart;
  faUser:IconDefinition = faUser;
  show:boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  showForm():void {
    this.show = !this.show;
  }
}
