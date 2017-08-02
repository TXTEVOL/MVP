import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProgramDataManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProgramDataManagerProvider {

  // constructor(public http: Http) {
  //   console.log('Hello ProgramDataManagerProvider Provider');
  // }
  searchTerm: string;
  categoryPrograms: any;
  allPrograms: any;
  programs2: any;
  category: string;
  categories = [
    "technology",
    "college",
    "art",
    "video games",
    "fashion",
    "math",
    "educational",
    "sports"
  ];
  
  constructor(public http: Http) {
    this.allPrograms = this.getAllPrograms();
    this.allPrograms.then(value => {
      this.allPrograms = value;
    });
  }

  getPrograms(category) {
    this.category = category;

    let programs = new Promise(resolve => {
      this.http.get('http://localhost:3000/programs/' + category)
        .map(res => res.json())
        .subscribe(programs => {
          this.categoryPrograms = programs;
          resolve(this.categoryPrograms);  
        });
    });

    return programs;
  }

  getAllPrograms() {
    if (this.allPrograms) {
      return  Promise.resolve(this.allPrograms);
    }

    let programs = new Promise(resolve => {
      this.http.get('http://localhost:3000/programs/')
        .map(res => res.json())
        .subscribe(programs => {
          this.allPrograms = programs;
          resolve(this.allPrograms);  
        });
    });

    return programs;
  }

  async filterItems(searchTerm) {
    await this.allPrograms;
    return this.allPrograms.filter((program) => {
      return program.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  // toggleFavorite(program) {
  //   let toggle: Boolean = program.favorite;
  //   program.favorite = !toggle;
  //   let body = JSON.stringify(program);
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   let options = new RequestOptions({ headers: headers });

  //   console.log("id: " + program._id + ", toggle: " + program.favorite);

  //   this.http.put('http://localhost:3000/program/' + program._id + '/' + program.favorite, body, options);

  //   return program;
  // }

}
