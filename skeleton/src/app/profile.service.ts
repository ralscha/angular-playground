import { Injectable, signal } from '@angular/core';

export interface Profile {
    name: string;
    avatar: string;
    memberSince: number;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
    #profile = signal<Profile | null>(null);
    profile = this.#profile.asReadonly();

    loadProfile() {
        setTimeout(() => {
            this.#profile.set({
                name: 'Brian Treese',
                avatar: 'https://avatars.githubusercontent.com/u/9142917',
                memberSince: 2020
            });
        }, 5000);
    }
}
