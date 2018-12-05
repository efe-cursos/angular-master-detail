import {Component, OnInit} from '@angular/core';
import {Entry} from '../shared/entry.model';
import {EntryService} from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private service: EntryService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      entr => this.entries = entr.sort((a, b) => b.id - a.id),
      () => console.log('Erro carregando a lista')
    );
  }

  deleteEntry(entry: Entry) {
    this.service.delete(entry.id).subscribe(
      () => this.entries = this.entries.filter(el => el !== entry),
      () => console.log('Erro removendo categoria')
    );
  }
}
