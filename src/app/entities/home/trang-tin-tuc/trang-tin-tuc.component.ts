import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trang-tin-tuc',
  templateUrl: './trang-tin-tuc.component.html',
  styleUrls: ['./trang-tin-tuc.component.scss']
})
export class TrangTinTucComponent implements OnInit {
  DSTintuc:any=[];
  DSlike:any=[];
  DSnewlike:any=[];
  id:any;
  info:any;
  status:boolean;
  statuslike:boolean;
  loaitintuc:any;
  sublisttintuc= new Subscription()
  constructor( private activaterouter:ActivatedRoute,
    private datadervice:DataService) { }

  ngOnInit() {
    this.layidtintuc()
    this.layloaitintuc();
    this.getintuc();
    this.layinfodangnhap();
    this.getlike();
    
  }
  layidtintuc(){
    this.id=this.activaterouter.snapshot.paramMap.get("id");
  }
  layloaitintuc(){
    this.activaterouter.queryParams.subscribe((params:any)=>{
      this.loaitintuc=params.Loaitin;
  })
  }
  getintuc(){
    if(this.loaitintuc==="news")
    {
      var uri=`http://5d6a41476b97ef00145b77b6.mockapi.io/api/new_tin_tuc/${this.id}`
    }
    else
    {  if(this.loaitintuc==="review")
      {
      var uri=`http://5d6a41476b97ef00145b77b6.mockapi.io/api/new_review/${this.id}`
      }
      else{if(this.loaitintuc==="promotion"){
        var uri=`http://5d6a41476b97ef00145b77b6.mockapi.io/api/new_promotion/${this.id}`
  }
    }
  }
    this.sublisttintuc=this.datadervice.get(uri).subscribe((data:any)=>{
      this.DSTintuc=data;
      console.log(this.DSTintuc.name);
      
    },(err)=>{
      console.log(err);
    })
  }
  like(){
    this.postlike();
    this.status=!this.status;
  }
  layinfodangnhap(){
    if(localStorage.getItem("KhachHang"))
    {
    this.info=JSON.parse(localStorage.getItem("KhachHang"));
    console.log(this.info.taiKhoan)
    }
  }
  getlike(){
    this.datadervice.get("http://5d6a41476b97ef00145b77b6.mockapi.io/api/like").subscribe((data:any)=>{
      this.DSnewlike=data;
      console.log( "helo",this.DSnewlike);
    },(err)=>{
      console.log(err);
    })
  }
  putlike(Trangthai,iD){
    const nguoi={
      id:iD,
       name:this.info.taiKhoan,
      trangthai:Trangthai,
      tentintuc:this.DSTintuc.name
    }
    this.datadervice.put(`http://5d6a41476b97ef00145b77b6.mockapi.io/api/like/${iD}`,nguoi).subscribe((data:any)=>{
      console.log(data);
    })
    this.getlike();
  }
  postlike(){
    const nguoi={
      id:"",
       name:this.info.taiKhoan,
      trangthai:true,
      tentintuc:this.DSTintuc.name
    }
    this.getlike();
    this.DSnewlike.find(item => {
      if(item.name===this.info.taiKhoan&&item.tentintuc===this.DSTintuc.name)
      {
        if(item.trangthai===true){
          this.putlike(false,item.id);
          this.statuslike=false;
          console.log("helo123")
          this.getlike()
          return;
        }
        if(item.trangthai===false)
        {

          this.putlike(true,item.id);
          this.statuslike=false;
          console.log("helo456")
          this.getlike();
          return;
        }
      }
      else{
        this.statuslike=true;
      }
  })
  if(this.statuslike){
    this.datadervice.post("http://5d6a41476b97ef00145b77b6.mockapi.io/api/like", nguoi).subscribe(
          (data: any) => {
            console.log(data);
            this.getlike();
          },
          (err) => {
            console.log(err);
          }
        )
      }
  
  }

}


