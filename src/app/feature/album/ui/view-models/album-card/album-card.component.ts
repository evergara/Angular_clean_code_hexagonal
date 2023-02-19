import { Component, OnInit } from '@angular/core';
import { FindByIdAlbumQRYUsesCase } from '../../../application/find-by-id-album-qry-uses-case';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent  implements OnInit{
  response$: any ;
  datos: any;

  constructor(private findByIdAlbumQRYUsesCase:FindByIdAlbumQRYUsesCase) { }

  ngOnInit(): void {
    this.response$ = this.findByIdAlbumQRYUsesCase.call('15');
    this.response$.subscribe (
      (data: any) => {
        this.datos = data;
      }
    );
  }
}
