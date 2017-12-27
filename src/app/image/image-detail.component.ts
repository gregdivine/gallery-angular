import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  selectedImage: any;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getImage();
  }

  getImage(): void {
    const id = +this.route.snapshot.paramMap.get('id');    
    this.selectedImage = this.imageService.getImage(id);
  }

  goBack(): void {
    this.location.back();
  }

}
