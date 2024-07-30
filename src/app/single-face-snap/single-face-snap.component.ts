import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {

faceSnap! : FaceSnap;
 
  snapButtonText! : string;
  userHasSnapped! : boolean;
  constructor(private faceSnapsService: FaceSnapsService ,
             private Route : ActivatedRoute) {}
  

  ngOnInit(): void {
      
      this.prepareInterface();
      this.getFacesnap();
  }
  
    



  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
}

snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}

private getFacesnap() {
  const faceSnapId = this.  Route.snapshot.params['id'];
  this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
     }

private prepareInterface(){
  this.snapButtonText = 'Oh Snap';
  this.userHasSnapped = false;

}
}
