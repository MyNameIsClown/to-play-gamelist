import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.dev";
import { catchError, map, Observable, of } from "rxjs";
import { Game } from "../../shared/models/game";
import { itemList } from "../../shared/dto/item_list";

@Injectable({
    providedIn: 'root',
})
export class GameApiService {
    private readonly apiUrl: string = ''
    constructor(private http: HttpClient){
        this.apiUrl = environment.apiBaseUrl
    }
    searchGames(query: string): Observable<itemList[]>{
        if (!query.trim()) return of([]);
        return this.http.get<itemList[]>(`${this.apiUrl}/search/${query}`).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('Error al buscar juegos:', error.message);
                return of([]);
            })
        );
    };
}