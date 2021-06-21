import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  preview: string | ArrayBuffer;
  selectedImage: any;
  submitted = false;
  uploadProgress$: any;

  constructor(public afStorage: AngularFireStorage,) { }

  ngOnInit(){

  }
  fileSelect($event){
    const reader = new FileReader()
    reader.onload = (loadEvent) => (this.preview = loadEvent.target.result);
    console.log("preview", this.preview);
    reader.readAsDataURL($event.target.files[0])
    this.selectedImage = $event.target.files[0]
    console.log(this.selectedImage)
    this.saveSettings()
  }

  saveSettings(){
    this.submitted = true;
    this.uploadProgress$ = of(0);
      
      if (this.selectedImage){
        let path = `${Date.now()}_${this.selectedImage.name}`
        console.log(path)
        let task = this.afStorage.upload(path, this.selectedImage)
        console.log(task)
        this.uploadProgress$ = task.percentageChanges()
        task.snapshotChanges().subscribe((s) => {
          s.ref.getDownloadURL().then((url) => {
          })
        })
      }
    }

  thisFileUpload() {
    document.getElementById("file").click();
  };

}
