import { Category } from "./category";

export class CategoryRepository{
    private categories:Category[];
    constructor(){
        this.categories=[
            {id:1,name:"Macera"},
            {id:2,name:"Romantik"},
            {id:3,name:"Bilim Kurgu"},
            {id:4,name:"Dram"}
          ];
    }
    getCategories():Category[]{
        return this.categories;
    }

    getCategoryById(id:number):Category{
        return this.categories.find(x=>x.id==id);
    }
}