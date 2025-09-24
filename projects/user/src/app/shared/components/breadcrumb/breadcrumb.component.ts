import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { log } from 'console';
import { filter } from 'rxjs';
import { Breadcrumb } from '../../../core/interfaces/Breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router:Router , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
    this.router.events.pipe(
      filter(e=> e instanceof NavigationEnd)
    ).subscribe(()=>{
      this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
    })
  }


  buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['Breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
