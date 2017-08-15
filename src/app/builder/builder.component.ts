import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import {_switch} from "rxjs/operator/switch";




 export class Document {
  public documentName: string;
   public template: string;

   public name:string = '';
   public secName:string = '';
   public surname:string = '';
   public image:string = '';
   public email:string = '';
   public phone:string = '';
   public phone2:string = '';
   public skype:string = '';
   public worked:string[] ;
   public studied:string[] ;
   public lastWorks:string[] ;
   public hobbies:string[] ;
   public whyAmI:string[] ;
   public agreement:string[] ;
   public customBlock:string[] ;

  constructor(name: string, template:string) {
    this.documentName = name;
    this.template = template;
  }
}
@Component({
  selector: 'builder',
  templateUrl: 'app/builder/builderHtml.html',
})
export class BuilderComponent implements OnInit  {

  document = new Document('my CV ', 'classic');

    public documentForm:FormGroup = new FormGroup({
        name: new FormControl(''),
        secName: new FormControl(''),
        surName: new FormControl(''),
        image: new FormControl(''),
        email:new FormControl(''),
        phone:new FormControl(''),
        phone2:new FormControl(''),
        skype:new FormControl(''),
        works:new FormArray([]),
        studies:new FormArray([]),
        lastWorks: new FormArray([]),
        hobbies: new FormControl(''),
        whyAmI:new FormControl('') ,
        customBlocks:new FormArray([]),
        agreement:new FormControl(''),


   /* worked:new FormGroup({ 	companyName: new FormControl(''), 	email: new FormControl(''), companyAddress: new FormControl(''), companyDateStart:new FormControl(''), companyDateEnd:new FormControl('') }),
    studied:new FormGroup({ 	universityName: new FormControl(''),  universityDateStart:new FormControl(''), universityDateEnd:new FormControl('')  	 }),
    lastWorks:new FormGroup({ 	lastWorkName: new FormControl(), 	lastWorkLink: new FormControl('') }),
    hobbies:new FormGroup({ 	hobby: new FormControl('') }),
    whyAmI:new FormControl('') ,
    agreement:new FormControl(''),
    customBlock:new FormGroup({ 	cutomBlockName: new FormControl(''), 	customBlockText: new FormControl('') })*/
    });

    public addFields(fieldsBlockName:string): void {
        var fields;
        switch(fieldsBlockName){
                case 'works': {
                    console.log('add fields');
                    fields = {companyName: new FormControl(''),
                        companyEmail: new FormControl(''),
                        companyPhone: new FormControl(''),
                        companyAddress: new FormControl(''),
                        companyDateStart:new FormControl(''),
                        companyDateEnd:new FormControl(''),
                    };
                    break;
                }
                case 'studies': {
                    fields = {universityName: new FormControl(''),
                        universityDateStart:new FormControl(''),
                        universityDateEnd:new FormControl('')
                    };
                    break;
                }
                case 'lastWorks': {
                    fields = {	lastWorkName: new FormControl(),
                        lastWorkLink: new FormControl('')
                    };
                    break;
                }
                case 'customBlocks': {
                    fields = {	cutomBlockName: new FormControl(''),
                        customBlockText: new FormControl('')
                    };
                    break;
                }
            }
        (<FormArray>this.documentForm.get(fieldsBlockName)).push(
            new FormGroup(fields)
        );
    }
    public removeFields(i: number, fieldsBlockName:string): void {
        (<FormArray>this.documentForm.get(fieldsBlockName)).removeAt(i);
    }
    ngOnInit() { this.addFields('works'); console.log(this.documentForm); }

}
