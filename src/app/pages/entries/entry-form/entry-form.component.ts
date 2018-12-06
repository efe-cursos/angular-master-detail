import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

import * as toastr from 'toastr';
import {EntryService} from '../shared/entry.service';
import {Entry} from '../shared/entry.model';
import {Category} from '../../categories/shared/category.model';
import {CategoryService} from '../../categories/shared/category.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  entryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submitingForm = false;
  entry: Entry = new Entry();
  categories: Array<Category>;
  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear'
  };

  constructor(
    private entryService: EntryService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildEntryForm();
    this.loadEntry();
    this.loadCategories();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  submitForm() {
    this.submitingForm = true;
    if (this.currentAction === 'new') {
      this.createEntry();
    } else {
      this.updateEntry();
    }
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entry.types).map(([value, text]) => {
      return {text: text, value: value};
    });
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildEntryForm() {
    this.entryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ['expense', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      categoryId: [null, [Validators.required]],
    });
  }

  private loadEntry() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.entryService.getById(+params.get('id')))
      )
        .subscribe(
          (entry) => {
            this.entry = entry;
            this.entryForm.patchValue(entry);
          },
          (error) => console.log('Erro no servidor')
        );
    }
  }

  private loadCategories() {
    this.categoryService.getAll().subscribe((cat) => {
      this.categories = cat;
    });
  }

  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de Novo Lançamento';
    } else {
      const name = this.entry.name || '';
      this.pageTitle = `Editando Lançamento: ${name}`;
    }
  }

  private createEntry() {
    const entry: Entry = Entry.fromJson(this.entryForm.value);
    this.entryService.create(entry)
      .subscribe(
        (categ) => this.actionsForSuccess(categ),
        (error) => this.actionsForError(error)
      );
  }

  private updateEntry() {
    const entry: Entry = Entry.fromJson(this.entryForm.value);
    this.entryService.update(entry)
      .subscribe(
        (categ) => this.actionsForSuccess(categ),
        (error) => this.actionsForError(error)
      );
  }

  private actionsForSuccess(entry: Entry) {
    toastr.success('Solicitação processada com sucesso');
    this.router.navigateByUrl('entries', {skipLocationChange: true});
  }

  private actionsForError(error: any) {
    toastr.error('Ocorreu um erro');
    this.submitingForm = false;
  }
}
