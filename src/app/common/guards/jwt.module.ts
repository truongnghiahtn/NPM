import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the auth token from the service.
        let authToken = "";
        // if (localStorage.getItem("user")) {
        //     const user = JSON.parse(localStorage.getItem("user"));
        //     if (user.maLoaiNguoiDung === "QuanTri")
        //         authToken = user.accessToken;
        // } cho admin

        if (localStorage.getItem("nguoiDungDangNhap")) {
            const user = JSON.parse(localStorage.getItem("nguoiDungDangNhap"));
            authToken = user.accessToken;
        }

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}