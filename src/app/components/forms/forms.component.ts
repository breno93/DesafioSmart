import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-forms',
  standalone: false,

  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { }

  //ngOnInit é como se fosse um useEffect com array de dependencia vazio
  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data))
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
