import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { CoreComponent } from './core/core.component';
import { CardsComponent } from './cards/cards.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DetailComponent,
    CoreComponent,
    EmptyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'players', component: CoreComponent, children: [
          { path: 'cards', component: CardsComponent },
          { path: 'detail', component: DetailComponent },
        ]
      },
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const playersAppElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('players-root', playersAppElement);
  }
}
