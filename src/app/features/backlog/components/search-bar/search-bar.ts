import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
  imports:[FormsModule]
})
export class SearchBar {
  @Output() search = new EventEmitter<string>();
  query = '';
  emit(){
    const term = this.query.trim();
    if (term) {
      this.search.emit(term);
    }
  }
}
