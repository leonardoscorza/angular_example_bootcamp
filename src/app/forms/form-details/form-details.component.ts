import { Component, OnInit } from '@angular/core';
import { Form } from '../../shared/form';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsService } from '../../shared/forms.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  form: Form;

  constructor(private FormsService: FormsService, private route: ActivatedRoute, private router: Router) {
    this.form = new Form(
      {
        title: '',
        description: '',
        questions: []
      }
    );
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.FormsService.getForm(params['id'])
        .subscribe(
          data => {
            this.form = data;
          },
          err => {this.router.navigateByUrl('/');}
        );
    });
  }
}