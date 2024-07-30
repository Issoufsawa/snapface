import { Component,  OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {  FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  constructor (private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
        title: [null],
        description: [null],
        imageUrl: [null],
        location: [null]
    });

    this.faceSnapPreview$ =this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id:0,
        snaps:0
      }))
    );
}
onSubmitForm(): void {
  console.log(this.snapForm.value);
}
}
