import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'upload', component: PhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
