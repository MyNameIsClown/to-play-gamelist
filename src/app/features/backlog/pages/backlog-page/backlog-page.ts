import { Component } from '@angular/core';
import { SearchBar } from "../../components/search-bar/search-bar";
import { Game } from '../../../../shared/models/game';
import { BacklogItem } from '../../../../shared/models/backlog-item';
import { computeMetric, sortBacklog } from '../../../../shared/domain/backlog.domain';

@Component({
  selector: 'app-backlog-page',
  standalone: true,
  templateUrl: './backlog-page.html',
  styleUrls: ['./backlog-page.scss'],
  imports: [SearchBar],
})
export class BacklogPage {
  backlogList:BacklogItem[]=[];
  onSearch(item: Game){
    const backlogItem : BacklogItem= {game:item, calculated_mark: computeMetric(item)}
    this.backlogList.push(backlogItem)
  }
  removeItem(item:BacklogItem){
    const idx = this.backlogList.findIndex((game) => game.game === item.game);
    console.log(idx)
    this.backlogList.splice(idx, 1)
  }
  sort(){
    this.backlogList = sortBacklog(this.backlogList)
  }
}


