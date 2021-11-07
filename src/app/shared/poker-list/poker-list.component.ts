import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.scss']
})
export class PokerListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    )

  }
  
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) =>{ 
      return !res.name.indexOf(value.toLowerCase());
    });
    
    this.getAllPokemons = filter;
  }
}
