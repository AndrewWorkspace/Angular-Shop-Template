import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpErrorResponse
} from "@angular/common/http";
import { take, exhaustMap, catchError } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { throwError } from "rxjs";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this._authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set("auth", user.token)
        });
        return next.handle(modifiedReq);
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `An error occurred`;
          if (error.status === 401) {
            this._authService.logout();
          }
        }



        return throwError(errorMessage);
      })
    );
  }
}
