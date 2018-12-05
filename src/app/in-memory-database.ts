import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Category} from './pages/categories/shared/category.model';
import {Entry} from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb(): {} | Observable<{}> | Promise<{}> {
    const categories: Category[] = [
      {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
      {id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
      {id: 3, name: 'Lazer', description: 'Cinema, Parques, Praia, Piza, etc...'},
      {id: 4, name: 'Salário', description: 'Recebimento de Salário'},
      {id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer'},
      {id: 6, name: 'Pecinhas', description: 'Aquisição de Pecinhas'},
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Gas de Cozinha',
        categoryId: categories[0].id,
        paid: true,
        date: '14/10/2018',
        amount: '70,80',
        type: 'expense',
        description: 'Cozinhar agora é possível',
        category: categories[0]
      } as Entry,
      {
        id: 2,
        name: 'Suplementos',
        categoryId: categories[1].id,
        paid: false,
        date: '15/10/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[1]
      } as Entry,
      {
        id: 3,
        name: 'Salario na Empresa X',
        categoryId: categories[3].id,
        paid: true,
        date: '14/11/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[3]
      } as Entry,
      {
        id: 4,
        name: 'Aluguel de filme',
        categoryId: categories[2].id,
        paid: true,
        date: '21/10/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[2]
      } as Entry,
      {
        id: 5,
        name: 'Suplementos',
        categoryId: categories[1].id,
        paid: true,
        date: '16/10/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[1]
      } as Entry,
      {
        id: 6,
        name: 'Video Game da Filha',
        categoryId: categories[2].id,
        paid: false,
        date: '14/10/2018',
        amount: '55,80',
        type: 'expense',
        description: '',
        category: categories[2]
      } as Entry,
      {
        id: 11,
        name: 'Uber',
        categoryId: categories[1].id,
        paid: true,
        date: '14/09/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[1]
      } as Entry,
      {
        id: 12,
        name: 'Aluguel',
        categoryId: categories[2].id,
        paid: true,
        date: '23/10/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[2]
      } as Entry,
      {
        id: 13,
        name: 'Gas de Cozinha',
        categoryId: categories[2].id,
        paid: true,
        date: '21/10/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[2]
      } as Entry,
      {
        id: 14,
        name: 'Pagamento pelo projeto Y',
        categoryId: categories[4].id,
        paid: true,
        date: '05/10/2018',
        amount: '70,80',
        type: 'revenue',
        description: '',
        category: categories[4]
      } as Entry,
      {
        id: 19,
        name: 'Aluguel de filme',
        categoryId: categories[3].id,
        paid: false,
        date: '16/10/2018',
        amount: '34,80',
        type: 'expense',
        description: '',
        category: categories[3]
      } as Entry,
      {
        id: 21,
        name: 'Video game da filha',
        categoryId: categories[1].id,
        paid: true,
        date: '19/10/2018',
        amount: '423,80',
        type: 'expense',
        description: '',
        category: categories[1]
      } as Entry,
      {
        id: 22,
        name: 'Cinema',
        categoryId: categories[2].id,
        paid: true,
        date: '09/10/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[2]
      } as Entry,
      {
        id: 23,
        name: 'Jiu Jitsu',
        categoryId: categories[1].id,
        paid: false,
        date: '14/10/2018',
        amount: '876,80',
        type: 'expense',
        description: '',
        category: categories[1]
      } as Entry,
      {
        id: 44,
        name: 'Uber',
        categoryId: categories[2].id,
        paid: true,
        date: '14/12/2018',
        amount: '70,80',
        type: 'expense',
        description: '',
        category: categories[2]
      } as Entry,
      {
        id: 55,
        name: 'Cinema',
        categoryId: categories[1].id,
        paid: false,
        date: '14/11/2018',
        amount: '14,80',
        type: 'expense',
        description: '',
        category: categories[1]
      } as Entry,
    ];

    return {categories, entries};
  }

}
