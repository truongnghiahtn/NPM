import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription, from } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quan-ly-tin-tuc',
  templateUrl: './quan-ly-tin-tuc.component.html',
  styleUrls: ['./quan-ly-tin-tuc.component.scss']
})
export class QuanLyTinTucComponent implements OnInit {
  @ViewChild("formnews", { static: false }) formnews: NgForm
  search:string="";
  biendem: number = 1;
  uripost:any;
 getnews:any;
  DSNew: any = [];
  DSfind:any=[]
  URI:any;
  idfix:any;
  status:boolean;
  sublistnew = new Subscription()
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.shownew();
  }
  shownew(){
    const uri="/api/new_tin_tuc";
    this.getlistnew(uri);
    this.URI="/api/new_tin_tuc";
 

  }
  showreview(){
    const uri="/api/new_review";
    this.getlistnew(uri);
    this.URI="/api/new_review";
 
  }
  showpromotion(){
    const uri="/api/new_promotion";
    this.getlistnew(uri);
    this.URI="/api/new_promotion";
  
  }
  getlistnew(uri) {
    this.sublistnew = this.dataService.get(uri).subscribe((data:any) => {
      this.DSNew = data;
      console.log(this.DSNew)
      this.timkiem();
    }, (err) => {
      console.log(err);
    })
  }

  resetthem()
  {
    this.status=true;
    this.formnews.resetForm();
  }
  resetsave(save)
  {
    this.status=save;
  }
  xoa(Id) {
    console.log(Id);
    this.dataService.delete(`${this.URI}/${Id}`).subscribe((data) => {
      console.log(data);
    }, (err) => (console.log(err)))
    
    let idxoa=this.DSNew.findIndex((item)=>{
      return item.id===Id
    })
    console.log(idxoa);
       this.DSNew.splice(idxoa, 1);
    // console.log(this.DSNew);

  }
  laythongtinnews(id){
    this.idfix = id;
    console.log(id);
    this.getnews = this.DSNew.find((item) => {
      return item.id === id
    })
    this.formnews.setValue({
      name:this.getnews.name,
      content1:this.getnews.content,
      content2:this.getnews.content2,
      Img1:this.getnews.Img,
      Img2:this.getnews.Img2,
      loaitintuc:this.getnews.loaitin,
    })
    console.log(this.getnews);
  }
  fixnew(){
    const newsfix = {
      content2:this.formnews.value.content2,
      name:this.formnews.value.name,
      content:this.formnews.value.content1,
      Img2:this.formnews.value.Img2,
      Img:this.formnews.value.Img1,
      loaitintuc:this.getnews.loaitin,
    }
    this.dataService.put(`${this.URI}/${this.idfix}`, newsfix).subscribe((data: any) => {
      console.log(data);
      this.getlistnew(this.URI);
    }, (err) => {
      console.log(err)
    })
  }

  postnew(){
   
   if(this.formnews.value.loaitintuc==="news"){
     this.uripost="/api/new_tin_tuc";
   }
   else if(this.formnews.value.loaitintuc==="review"){
    this.uripost="/api/new_review"
   }else if(this.formnews.value.loaitintuc==="promotion")
   {
    this.uripost="/api/new_promotion"
  }
    if(this.formnews.valid)
    {
      const newspost = {
        id:"",
        content2:this.formnews.value.content2,
        name:this.formnews.value.name,
        content:this.formnews.value.content1,
        Img2:this.formnews.value.Img2,
        Img:this.formnews.value.Img1,
        loaitin:this.formnews.value.loaitintuc,
      }
      this.dataService.post(`${this.uripost}`, newspost).subscribe((data) => {
        console.log(data);
        this.getlistnew(this.uripost)
        this.formnews.resetForm();
      }, (err) => {
        console.log(err)
      })
    }
  }
  timkiem(){
    
    let keyword = this.search.toLowerCase().trim();
    this.DSfind= this.DSNew.filter(item=> {
      return item.name.toLowerCase().trim().indexOf(keyword) !== -1;
  })
  console.log(this.DSfind);
  }
 
}
