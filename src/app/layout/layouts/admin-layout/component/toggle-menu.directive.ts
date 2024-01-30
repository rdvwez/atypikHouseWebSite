import {Directive, HostListener, Inject, OnInit} from "@angular/core";
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: 'button[toggleMenu]',
  standalone: true
})

export class ToggleMenuDirective implements OnInit {

  DEFAULT_CLASS_EXPAND = ["has-navbar-vertical-aside", "navbar-vertical-aside-show-xl", "'navbar-vertical-aside-transition-on"]
  CLASS_COLLAPSE = ["has-navbar-vertical-aside", "navbar-vertical-aside-show-xl", "'navbar-vertical-aside-transition-on", "navbar-vertical-aside-mini-mode"];

  @HostListener('click', ['$event.target'])
  onClick(btn: HTMLButtonElement) {
    let className = this.document.body.classList;
    const elements = Array.from(className);

    if (elements.includes('navbar-vertical-aside-mini-mode')) {
      this.document.body.classList.remove(...elements);
      this.document.body.classList.add(...this.DEFAULT_CLASS_EXPAND);
    } else {
      this.document.body.classList.remove(...elements);
      this.document.body.classList.add(...this.CLASS_COLLAPSE);
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

}
