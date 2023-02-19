import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumQueryRepository } from './feature/album/domain/repositories/album.qry.repository';
import { AlbumApiService } from './feature/album/infrastructure/repositories/album-api.service';
import { AlbumCardComponent } from './feature/album/ui/view-models/album-card/album-card.component';
import { AlbumApi2Service } from './feature/album/infrastructure/repositories/album-api2.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: AlbumQueryRepository, useClass: AlbumApi2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
