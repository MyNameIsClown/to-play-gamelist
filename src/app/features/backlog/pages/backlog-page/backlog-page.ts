import { Component } from '@angular/core';
import { SearchBar } from "../../components/search-bar/search-bar";

@Component({
  selector: 'app-backlog-page',
  standalone: true,
  templateUrl: './backlog-page.html',
  styleUrls: ['./backlog-page.scss'],
  imports: [SearchBar],
})
export class BacklogPage {
  onSearch(term: string){
    console.log(term)
  }
}


