import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../shared/category.service';
import {Category} from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CategoryService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      categs => this.categories = categs,
      () => console.log('Erro carregando a lista')
    );
  }

  deleteCategory(category: Category) {
    this.service.delete(category.id).subscribe(
      () => this.categories = this.categories.filter(el => el !== category),
      () => console.log('Erro removendo categoria')
    );
  }
}
