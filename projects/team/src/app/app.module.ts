import { TeamService } from './team.service';
import { FixturesComponent } from './fixtures/fixtures.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { CoreComponent } from './core/core.component';

import { createCustomElement } from '@angular/elements';
import { EmptyComponent } from './empty/empty.component';
import { StandingsComponent } from './standings/standings.component';
import { LineUpComponent } from './line-up/line-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    NewsComponent,
    CoreComponent,
    EmptyComponent,
    StandingsComponent,
    LineUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'team',
          component: CoreComponent,
          children: [
            { path: 'fixture', component: FixturesComponent },
            { path: 'standings', component: StandingsComponent },
            { path: 'lineUp', component: LineUpComponent }
          ]
        },
        { path: '**', component: EmptyComponent }
      ],
      { useHash: true }
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TeamService],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const teamAppElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('team-root', teamAppElement);
  }
}
