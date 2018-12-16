import {OnInit} from '@angular/core';
import {BaseResourceModel} from '../../models/base-resource.model';
import {BaseResourceService} from '../../services/base-resource.service';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];
  serverErrorMessages: string[] = null;

  constructor(private resourceService: BaseResourceService<T>) {
  }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resource => this.resources = resource.sort((a, b) => b.id - a.id),
      (err) => this.serverErrorMessages = err.body
    );
  }

  protected deleteResource(resource: T) {
    if (!confirm('Deseja excluir?')) {
      return;
    }
    this.resourceService.delete(resource.id).subscribe(
      () => this.resources = this.resources.filter(el => el !== resource),
      (err) => this.serverErrorMessages = err.body
    );
  }
}
