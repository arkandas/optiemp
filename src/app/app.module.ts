import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ClarityModule,
  ClrAccordionModule,
  ClrAlertModule,
  ClrCheckboxModule,
  ClrDropdownModule,
  ClrIconModule,
  ClrInputModule,
  ClrPasswordModule, ClrSelectModule
} from "@clr/angular";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';
import { StatsComponent } from './stats/stats.component';
import {FormsModule} from "@angular/forms";
import { ItemComponent } from './item/item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PlaygroundComponent } from './playground/playground.component';
import { StackedAreaChartComponent } from './charts/stacked-area-chart/stacked-area-chart.component';
import {NgxEchartsModule} from "ngx-echarts";
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ExploreComponent,
    StatsComponent,
    ItemComponent,
    PlaygroundComponent,
    StackedAreaChartComponent,
    PieChartComponent,
    LineChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    ClrAlertModule,
    ClrIconModule,
    ClrDropdownModule,
    FormsModule,
    ClrCheckboxModule,
    ClrPasswordModule,
    ClrInputModule,
    ClrSelectModule,
    ClrAccordionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
