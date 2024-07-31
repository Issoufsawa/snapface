import { Injectable } from '@angular/core';
import { SnapType } from '../models/snap-type.type';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
      // vos FaceSnap ici
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours ! ',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        5
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      ).withLocation('à la montagne'),
     new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      )
  ];
  
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  // ...
  
  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void{
    const faceSnap: FaceSnap ={
      ...formValue,
      createdAt: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      createdDate: undefined,
      addSnap: function (): void {
        throw new Error('Function not implemented.');
      },
      removeSnap: function (): void {
        throw new Error('Function not implemented.');
      },
      snap: function (snapType: SnapType): void {
        throw new Error('Function not implemented.');
      },
      setLocation: function (location: string): void {
        throw new Error('Function not implemented.');
      },
      withLocation: function (location: string): FaceSnap {
        throw new Error('Function not implemented.');
      }
    };
    this.faceSnaps.push(faceSnap);
}
}
