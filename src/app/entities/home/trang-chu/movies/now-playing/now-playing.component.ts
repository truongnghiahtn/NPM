import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';
import { Phim } from 'src/app/common/models/phim';


@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit  {
status:boolean;
biendem:number;
biendem1:number=1;
subListMovie=new Subscription();
DSphimDangChieu1:any=[];
constructor( private dataService:DataService) { }
    
    ngOnInit() {
      this.getListMovie();
    
    }
    // ngAfterViewInit(){
    //   setInterval(() => {
    //   this.next(); 
    // }, 10000);
    // }
  next(){
    if(this.biendem1===this.biendem)
    {
      this.biendem1=1
    }
    else{
      this.biendem1++
      
    }
    this.status=true;
    console.log(this.biendem1)
  
  }
  pre(){
    if(this.biendem1===1)
    {
      this.biendem1=this.biendem;
    }
    else{
      this.biendem1--;
    }
    this.status=false;
    console.log(this.biendem1);
  }
  catlayout(){
    if(this.DSphimDangChieu1.length>8){
      this.biendem= parseInt(`${this.DSphimDangChieu1.length/8}`)+1;
    }
    console.log(this.biendem)
    console.log("lengh",this.DSphimDangChieu1.length)
  }
  getListMovie(){
    this.subListMovie= this.dataService.get('http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02').subscribe((data:Phim[])=>{
      console.log(data);
      this.DSphimDangChieu1=data;

    this.catphim();
      if(this.DSphimDangChieu1.length>8){
        if(this.DSphimDangChieu1.length % 8 ===0){
          this.biendem= parseInt(`${this.DSphimDangChieu1.length/8}`);
          console.log(this.biendem);
        }
        else{
        this.biendem= parseInt(`${this.DSphimDangChieu1.length/8}`)+1;
        console.log(this.biendem)
        }
      }
    })
    
  }
  ngOnDestroy(){
    this.subListMovie.unsubscribe();
      }
    catphim(){
     var i=16;
     for(let j=0;j<3;j++)
     {
       this.DSphimDangChieu1.splice(i,1);
       i--;
     }
    }
      
}
