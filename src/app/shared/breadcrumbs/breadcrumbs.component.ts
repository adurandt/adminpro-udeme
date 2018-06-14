import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

    title: string;

  constructor( private router: Router,
               private pageTitle: Title,
               private meta: Meta ) {
   
    this.getDataRouter().subscribe( (data) => {      
     this.title = data.title;
     this.pageTitle.setTitle( this.title );
    
     const metaTag: MetaDefinition = {
       name: 'description',
       content: this.title
     };

     this.meta.updateTag( metaTag );

    });

  }

  ngOnInit() {
  }

  getDataRouter() {
    return this.router.events
    .pipe(
      filter(myEvent => myEvent instanceof ActivationEnd ),
      filter( ( myEvent: ActivationEnd ) => myEvent.snapshot.firstChild === null ),
      map( (myEvent: ActivationEnd) => myEvent.snapshot.data)
    );
  }

}
