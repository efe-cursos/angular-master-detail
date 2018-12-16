import {Component, Input, OnInit} from '@angular/core';

interface BreadcrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() items: BreadcrumbItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  isLast(item: BreadcrumbItem): boolean {
    return this.items.indexOf(item) + 1 === this.items.length;
  }
}
