import { Component, OnInit } from '@angular/core';
import { Form } from '../../shared/form';
import { FormsService } from '../../shared/forms.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  private forms: Form[] = [];

  constructor(private FormsService: FormsService) { }

  ngOnInit() {
    this.FormsService.getForms()
      .subscribe(data => this.forms = data);
  }
}