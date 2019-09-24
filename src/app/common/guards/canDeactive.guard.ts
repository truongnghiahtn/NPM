import { AdminComponent } from "src/app/entities/admin/admin.component";
import { CanDeactivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { TrangDangNhapComponent } from "src/app/entities/home/trang-dang-nhap/trang-dang-nhap.component";
import { TrangDangKyComponent } from "src/app/entities/home/trang-dang-ky/trang-dang-ky.component";
@Injectable({
  providedIn: "root"
})
export class CandeactiveAdmin implements CanDeactivate<AdminComponent> {
  canDeactivate(component) {
    return (
      component.canDeactivate() ||
      window.confirm("Bạn có muốn rời khỏi trang không")
    );
  }
}
@Injectable({
  providedIn: "root"
})
export class CandeactiveDangNhap
  implements CanDeactivate<TrangDangNhapComponent> {
  canDeactivate(component) {
    return (
      component.canDeactivate() ||
      window.confirm("Bạn có muốn rời khỏi trang không")
    );
  }
}
@Injectable({
  providedIn: "root"
})
export class CandeactiveDangKy implements CanDeactivate<TrangDangKyComponent> {
  canDeactivate(component) {
    return (
      component.canDeactivate() ||
      window.confirm("Bạn có muốn rời khỏi trang không")
    );
  }
}
