import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { ENVIRONMENT } from '../../../../environtment/environtment';
import { Observable } from 'rxjs';
import { GradeDTO, GradeTSend } from '../data-types/grade.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DEFAULT_SNACK_BAR_ACTION_LABEL,
  ERROR_LOAD_GRADE_LIST,
} from '../utilis/grade-notifications';
import { DEFAULT_SNACK_BAR_DURATION } from '../../../core/utilis/global-const.helper';

@Injectable({
  providedIn: 'root',
})
export class Grades {
  private readonly http = inject(HttpClient);
  private readonly snackBar = inject(MatSnackBar);
  private mainUrl = ENVIRONMENT.url;

  public readonly gradesResourse = resource<GradeDTO[], void>({
    loader: async params => {
      const response = await fetch(this.mainUrl, {
        signal: params.abortSignal,
      });
      if (!response.ok) {
        this.snackBar.open(
          ERROR_LOAD_GRADE_LIST,
          DEFAULT_SNACK_BAR_ACTION_LABEL
        ,{ duration: DEFAULT_SNACK_BAR_DURATION });
        throw new Error('Failed to fetch users');
      }
      const grades = await response.json();
      return grades as GradeDTO[];
    },
  });

  public createGrade(grade: GradeDTO): Observable<GradeDTO> {
    return this.http.post<GradeDTO>(this.mainUrl, grade);
  }

  public updateGrade(id: string, updates: Partial<GradeTSend>): Observable<GradeTSend> {
    return this.http.patch<GradeTSend>(`${this.mainUrl}/${id}`, updates);
  }

  public deleteGrade(id: string): Observable<void> {
    return this.http.delete<void>(`${this.mainUrl}/${id}`);
  }
}
