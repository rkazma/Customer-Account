import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(
    otext: string,
    action?: string,
    position: MatSnackBarVerticalPosition = 'bottom',
    duration: number = 2500
  ) {
    this.snackBar.open(otext, action, {
      duration: duration,
      panelClass: 'successful-snackbar',
      horizontalPosition: 'center',
      verticalPosition: position,
    });
  }

  openWarningSnackBar(otext: string, action: string = 'ok') {
    this.openWarningSnackBarWithDuration(otext, action, 5000);
  }

  openWarningSnackBarWithDuration(
    otext: string,
    action: string = 'ok',
    duration: number = 5000
  ) {
    this.snackBar.open(otext, action, {
      duration: duration,
      panelClass: 'warn-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
