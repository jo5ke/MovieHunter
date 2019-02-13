import { trigger, state, transition, style, animate, stagger, query, keyframes } from '@angular/animations';


export const fade =
     trigger('fade', [
        state('void', style({ opacity: 0}) ),
        transition('void => *', [
            animate('.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-10px)'}),
                style({opacity: .5, transform: 'translateY(5px)'}),
                style({opacity: 1, transform: 'translateY(0)'})
           ]))
        ]),
      ]);


export const moviesFadeIn =
        trigger('moviesFadeIn', [
            state('void', style({ opacity: 0}) ),
            transition('void => *', [
                animate('.8s ease-in', keyframes([
                    style({opacity: 0}),
                    style({opacity: .5}),
                    style({opacity: 1})
               ]))
            ]),
    ]);

export const loginSlide = 
        trigger('buttonSlide', [
            state('inactive', style({
                transform: 'translateY(0)'
            })),
            state('active', style({
                transform: 'translateY(30px)'
            })),
            transition('inactive => active', animate('400ms ease-in'))
         ])

export const logoSlide = 
        trigger('formSlide', [
            state('inactive', style({
                transform: 'translateY(150px)'
            })),
            transition('inactive => active', animate('800ms ease-in-out', keyframes([
                style({transform: 'translateY(150px)'}),
                style({transform: 'translateY(-50px)'}),
                style({transform: 'translateY(0)'})
           ])))
        ])


export const inputShows = 
        trigger('inputShows', [
            state('inactive', style({
                opacity: '0'
            })),
            transition('inactive => active', animate('400ms 800ms ease-in-out'))
        ])




