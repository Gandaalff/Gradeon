import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { ENVIRONMENT } from '../../../../environtment/environtment';
import { Observable } from 'rxjs';
import { GradeDTO } from '../data-types/grade.interface';

@Injectable({
  providedIn: 'root',
})
export class Grades {
  private readonly http = inject(HttpClient);
  private mainUrl = ENVIRONMENT.url;

  public readonly gradesResourse = resource<GradeDTO[], void>({
    loader: async () => {
      const response = await fetch(this.mainUrl);
      if (!response.ok) {
        console.log(response);
        throw new Error('Failed to fetch users');
      }
      const grades = await response.json();
      return grades as GradeDTO[];
    },
  });

  createGrade(grade: GradeDTO): Observable<GradeDTO> {
    return this.http.post<GradeDTO>(this.mainUrl, grade);
  }

  updateGrade(id: string, updates: Partial<any>): Observable<GradeDTO> {
    return this.http.patch<GradeDTO>(`${this.mainUrl}/${id}`, updates);
  }

  deleteGrade(id: string): Observable<void> {
    return this.http.delete<void>(`${this.mainUrl}/${id}`);
  }
}
