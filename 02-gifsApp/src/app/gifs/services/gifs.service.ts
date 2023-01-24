import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}
  private _historial: string[] = [];
  private apiKey: string = '54fdwkFFmVmBroDnVRmeZ7R8E46encgA';

  get historial() {
    return [...this._historial];
  }
  buscarGifs(query: string) {
    if (
      query.trim().length != 0 &&
      !this._historial.includes(query.toLowerCase())
    ) {
      this._historial.unshift(query.toLowerCase());
      console.log(this._historial);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get(
      'https://api.giphy.com/v1/gifs/search?api_key=54fdwkFFmVmBroDnVRmeZ7R8E46encgA&q=dragon ball z&limit=10'
    ).subscribe((resp:any) => {
        console.log(resp.data);
    });
  }
}
