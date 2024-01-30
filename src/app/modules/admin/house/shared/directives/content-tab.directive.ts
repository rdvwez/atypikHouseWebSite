import {Directive, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appContentTab]',
  standalone: true
})
export class ContentTabDirective {

  tabIdOne = "propertyOverviewNavOne";
  tabIdThree = "propertyOverviewNavThree";

  @HostListener('click', ['$event.target'])
  onClick(aElement: HTMLLinkElement) {
    // Get element Id
    let idTab = aElement.getAttribute("aria-controls");
    // Add class active
    if (idTab === this.tabIdOne) {
      // Get element active
      let aElementThree = this.document.querySelector('a[aria-controls="propertyOverviewNavThree"]');
      // remove active tab
      if (aElementThree) {
        aElementThree.classList.remove('active');
      }
      // active div content element
      let divElementThree = this.document.getElementById('propertyOverviewNavThree');
      divElementThree?.classList.remove(...["active", "show"]);
    } else {
      let aElementOne = this.document.querySelector('a[aria-controls="propertyOverviewNavOne"]');
      if (aElementOne) {
        aElementOne.classList.remove(...["active", "show"]);
      }
      // show content
      let divElementOne = this.document.getElementById('propertyOverviewNavOne');
      divElementOne?.classList.remove(...["active", "show"]);
    }
    // active element
    aElement.classList.add('active');
    // add active element
    if (idTab) {
      const divElement = this.document.getElementById(idTab);
      divElement?.classList.add(...["active", "show"]);
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }
}
