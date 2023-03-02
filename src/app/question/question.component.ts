import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { LabelModule } from "@progress/kendo-angular-label";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { heartIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { NEVER } from 'rxjs';
import { anyChanged } from '@progress/kendo-angular-common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit{
 reactiveForm:FormGroup;
  svgIcon: SVGIcon = heartIcon;

  public data: any = {
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q6: '',
    Q7: '',
    Q8: '',
    Q9:'',
    Q10:'',
    Q11:'',
    Q12:'',
    Q13:'',
    Q14:'',
    Q15:'',
    Q16:'',
    Q17:'',
    Q18:'',
    Q19:'',
  };

  constructor(private FormBuilder: FormBuilder) {
  }
    ngOnInit(): void {
      this.reactiveForm = this.FormBuilder.group({
        Q1: ["", [Validators.required]],
        Q2: ["", [Validators.required]],
        Q3: ["", [Validators.required]],
        Q4: ["", [Validators.required]],
        Q5: ["", [Validators.required]],
        Q6: ["", [Validators.required]],
        Q7: ["", [Validators.required]],
        Q8: ["", [Validators.required]],
        Q9: ["", [Validators.required]],
        Q10: ["", [Validators.required]],
        Q11: ["", [Validators.required]],
        Q12: ["", [Validators.required]],
        Q13: ["", [Validators.required]],
        Q14: ["", [Validators.required]],
        Q15: ["", [Validators.required]],
        Q16: ["", [Validators.required]],
        Q17: ["", [Validators.required]],
        Q18: ["", [Validators.required]],
        Q19: ["", [Validators.required]],

      });
    }
 
   
  onSubmit() {
    this.reactiveForm.markAllAsTouched();
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm);
      alert('Valid Form!');
    }
  }
}
