import { Injectable } from '@angular/core';
import { FeatureFlagNames } from '../models/feature-flag-data';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  FEATURE_FLAGS = 'FEATURE FLAG SERVICE IN THE BUNDLE';
  private featureFlags = new BehaviorSubject<Record<FeatureFlagNames, boolean>>({});

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Record<FeatureFlagNames, boolean>>('api/featureFlags').pipe(
      tap((flags) => {
        this.featureFlags.next(flags);
      }),
      takeUntilDestroyed()
    ).subscribe();
  }

  isFeatureFlagEnabled$(featureName: FeatureFlagNames): Observable<boolean> {
    return this.featureFlags.pipe(
      map(flags => flags[featureName] === true)
    );
  }
}
