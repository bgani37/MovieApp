import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[];
  categoriyRepository:CategoryRepository;

  constructor() {
    this.categoriyRepository=new CategoryRepository();
    this.categories=this.categoriyRepository.getCategories();
   }

  ngOnInit(): void {
  }
 // categories=["Macera","Romantik","Bilim Kurgu","Dram"]

//  categories:Category[]=[
//    {id:1,name:"Macera"},
//    {id:2,name:"Romantik"},
//    {id:3,name:"Bilim Kurgu"},
//    {id:4,name:"Dram"}
//  ];
}
