import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-dialogue-component',
  templateUrl: './dialogue-component.component.html',
  styleUrls: ['./dialogue-component.component.css']
})
export class DialogueComponentComponent implements OnInit {
  form: FormGroup;
  description:string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogueComponentComponent>,
    ) {

 
}

  ngOnInit(): void {
  }
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
