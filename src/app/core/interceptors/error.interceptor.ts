import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { catchError } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  // request: outgoing request
  // next: httpresponse
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          if (error.status === HttpStatusCode.BadRequest) {
            if (error.error.errors) {
              throw error.error;
            } else {
              // this.toastr.error(error.error.message, error.error.statusCode);
              console.dir(error.error);
            }
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            // this.toastr.error(error.error.message, error.error.statusCode);
          }
          if (error.status === HttpStatusCode.NotFound) {
            this.router.navigateByUrl('/not-found');
          }
          if (error.status === HttpStatusCode.InternalServerError) {
            const navigationExtras: NavigationExtras = {
              state: { error: error.error },
            };
            this.router.navigateByUrl('/server-error', navigationExtras);
          }
        }
        return throwError(error);
      })
    );
  }
}
