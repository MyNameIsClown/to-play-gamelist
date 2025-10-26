import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../../../shared/models/game';
import { CommonModule } from '@angular/common';
import { GameApiService } from '../../../../core/infrastructure/GameApi.service';
import { itemList } from '../../../../shared/dto/item_list';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
  imports: [FormsModule, CommonModule]
})
export class SearchBar {
  @Output() search = new EventEmitter<Game>();
  query = '';

  constructor(private api: GameApiService){}
  
  gameList: itemList[] = [];

  emit(selectedGame: itemList){
      const game: Game = {
        title: selectedGame.title,
        coverUrl: selectedGame.cover_url,
        rating: selectedGame.rating
      }
      this.search.emit(game);
      this.query = '';
  }
  filter(){
    this.api.searchGames(this.query).subscribe({
      next: games => this.gameList = games,
      error: err => console.error(err)
    })
  }
}
