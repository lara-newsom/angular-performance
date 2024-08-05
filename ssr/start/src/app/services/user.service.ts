import { computed, inject, Injectable, Signal } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  route = inject(ActivatedRoute);
  readonly httpClient = inject(HttpClient);
  readonly users = toSignal(this.httpClient.get<Record<string, User>>('http://localhost:3000/users'), {
    initialValue: {} as Record<string, User>
  });

  readonly userId = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('user') ?? '')), {
    initialValue: ''
  })

  loggedInUser: Signal<User | undefined> = computed(() => {
    return this.users()?.[this.userId()] ?? undefined;
  })
}

