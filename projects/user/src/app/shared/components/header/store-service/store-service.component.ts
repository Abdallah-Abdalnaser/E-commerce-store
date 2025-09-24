import { Component } from '@angular/core';
import { faChevronDown, IconDefinition , faMapMarkedAlt , faSyncAlt , faHeadset , faInfoCircle , faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-store-service',
  templateUrl: './store-service.component.html',
  styleUrl: './store-service.component.scss'
})
export class StoreServiceComponent {
  faChevronDown:IconDefinition=faChevronDown;
  faMapMarkedAlt:IconDefinition=faMapMarkedAlt;
  faSyncAlt:IconDefinition=faSyncAlt;
  faHeadset:IconDefinition=faHeadset;
  faInfoCircle:IconDefinition=faInfoCircle;
  faPhoneAlt:IconDefinition=faPhoneAlt;
  catigoryList:boolean=false;


  openList() {
    this.catigoryList = !this.catigoryList;
  }

  catigoryListClick():string {
    if (this.catigoryList === true) {
      return "$orange"
    }else {
      return "$gray3"
    }
  }
}
