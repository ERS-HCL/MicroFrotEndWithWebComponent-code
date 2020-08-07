import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

import { NewsPageComponent } from './news-page/news-page.component';
import { CoreComponent } from './core/core.component';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [AppComponent, NewsComponent, EmptyComponent, NewsPageComponent, CoreComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'news',
          component: CoreComponent,
          children: [
            { path: 'newsPage', component: NewsPageComponent }
          ]
        },
        { path: '**', component: EmptyComponent }
      ],
      { useHash: true }
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, NewsComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const newsAppElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('news-root', newsAppElement);

    const newsElement = createCustomElement(NewsComponent, {
      injector: this.injector
    });
    customElements.define('news-widget', newsElement);
  }
}
