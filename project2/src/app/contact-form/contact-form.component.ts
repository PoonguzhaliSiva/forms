import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent  {
  Action!: FormGroup;
  submitted =false;
  log(x:any){
    console.log(x);
  }
  constructor(
    private fb: FormBuilder
  ) {}
  ngOnInit(){
    this.create();
  }
  create () {
    this.Action=this.fb.group ({
      firstName:['',Validators.required],
      comment:['' , Validators.required]
    });
  }
  get f() {
    return this.Action.controls;
  }
  submit(){
    this.submitted =true;
    console.log("enter submit")
    
  }
  
}
