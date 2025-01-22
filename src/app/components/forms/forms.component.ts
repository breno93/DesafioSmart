import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: false,

  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  //ngOnInit é como se fosse um useEffect com array de dependencia vazio
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value)
  }

  onClean(): void {
    console.log("clean")
  }
}
