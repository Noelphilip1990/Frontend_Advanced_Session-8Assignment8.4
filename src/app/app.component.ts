import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { usernameMatcher, passwordMatcher } from './custom.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
	title = 'Assignament 8.4!';
	
	
	passwordRegex = '[a-z0-9]{7,20}';
	
	complexForm: FormGroup;
	constructor(fb: FormBuilder) {
		console.log('HELP:'+usernameMatcher);
		this.complexForm = fb.group({
			name: ['', Validators.required],
			username: ['', Validators.required],
			email: ['', Validators.required],
			mobile: [''],
			account: fb.group({
			password: ['', Validators.required],
			cpassword: ['', Validators.required ]
			}, {validator:passwordMatcher})
		
		})
	
	}
	
	submitForm(form:any)
	{
		console.log("values:");
		console.log(form);
	}
	

	
 


}
