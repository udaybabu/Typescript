import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  login!: FormGroup;
  names: string[] = ['mahesh', 'ramana', 'prasad', 'kiran'];
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    // this.login = new FormGroup({
    //   username: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   password: new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(8)])
    // })

    this.login = this.fb.group({
      // username : new FormControl('',[Validators.required,Validators.minLength(5)]),
      // password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      // email : new FormControl('',[Validators.required,Validators.email])
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          this.spacValidator.bind(this),
        ],
        [this.nameValidate.bind(this)],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(8)],
      ],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      address: new FormArray([
        this.fb.group({
          addressline1: [''],
          addressline2: [''],
          pincode: [''],
          state: [''],
        }      
        )]
      )
    });
  }
  clickAdd(){
    let arrayAddress = this.login.controls.address as FormArray
    let fbGroup = this.fb.group(
      {
        addressline1: [''],
        addressline2: [''],
        pincode: [''],
        state: [''],
      }
    )
    arrayAddress.push(fbGroup)
  }
  clickRemove(i:any){
    let array = this.login.controls.address as FormArray
    array.removeAt(i);
  }
  get empAddress(): FormArray {
    return this.login.controls.address as FormArray;
  }
  spacValidator(v: FormControl) {
    console.log('Form control is:', v);
    if (v.value.indexOf(' ') != -1) {
      return { spaceerror: 'Name should not allow spaces' };
    }
    return null;
  }
  nameValidate(name: FormGroup) {
    console.log('Index is:', this.names.indexOf(name.value));
    if (this.names.indexOf(name.value) === -1) {
      return Promise.resolve(null);
    } else {
      return Promise.resolve({ nameerror: 'Name allready exist' });
    }
  }
  validatePhone() {}
  sendData() {
    debugger;
    if (this.login.valid) {
    }
  }
  getUserName(): FormGroup {
    return this.login.controls.username as FormGroup;
  }

  checkNumbers(event: any): boolean {
    // if(!isNaN(Number(event.key))){
    //   var numberValue = Number(event.key);
    //   return true
    // } else{
    //     console.log('Not a Number');
    //     return false
    // }

    var regex = /[0-9]|\./;
    if (!regex.test(event.key)) {
      return false;
    } else {
      return true;
    }
  }
}
