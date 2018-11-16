import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {CategoryModel} from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const categories: CategoryModel[] = [
      {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
      {id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
      {id: 3, name: 'Lazer', description: 'Cinema, Parques, Praia, Piza, etc...'},
      {id: 4, name: 'Salário', description: 'Recebimento de Salário'},
      {id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer'},
      {id: 6, name: 'Pecinhas', description: 'Aquisição de Pecinhas'},
    ];
    return {categories};
  }

}
