import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FileRestrictions, FileInfo } from "@progress/kendo-angular-upload";


@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.css']
})
export class FresherComponent {
  title = 'Fresher';
  form: FormGroup;

  public myFiles: Array<File>;
  public myRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "jfif"],
  };

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      fullName: ["", [Validators.required]],
      files: ["", [Validators.required]],
    });
  }
}
