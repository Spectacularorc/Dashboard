import { Component } from '@angular/core';
import { faDashboard,
          faRectangleList,
          faShop,
          faChartBar,
          faMoneyBill,
          faLock,
          faBell,
          faLockOpen
          
 } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  standalone: false,
  
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faDashboard=faDashboard;
  faRectangleList= faRectangleList;
  faShop= faShop;
  faChartBar= faChartBar;
  faMoneyBill= faMoneyBill;
  faLock=faLock;
  faBell= faBell;
  faLockOpen= faLockOpen;

}
