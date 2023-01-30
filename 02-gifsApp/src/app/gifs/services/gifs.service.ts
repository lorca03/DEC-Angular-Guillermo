import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse, Images } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial=JSON.parse(localStorage.getItem('historial')!);
      this.resultados=JSON.parse(localStorage.getItem('resultados')!);
    }
  }
  private _historial: string[] = [];
  private apiKey: string = '54fdwkFFmVmBroDnVRmeZ7R8E46encgA';
  private servicioUrl:string='https://api.giphy.com/v1/gifs'
  public resultados: Gif[]=[];

  get historial() {
    return [...this._historial];
  }
  buscarGifs(query: string) {
    if (query.trim().length != 0 && !this._historial.includes(query.toLowerCase())) {
      this._historial.unshift(query.toLowerCase());
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    
    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',query)

    this.http.get<SearchGIFResponse>(`${this.servicioUrl}/search`,{params}).subscribe((resp) => {
        console.log(resp.data);
        this.resultados=resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
    });
  }
}
