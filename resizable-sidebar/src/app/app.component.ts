import {Component} from '@angular/core';
import {SidebarResizeComponent} from "./sidebar-resize/sidebar-resize.component";

@Component({
    selector: 'app-root',
    imports: [SidebarResizeComponent],
    template: `
        <app-sidebar-resize>
            <div slot-main>
                <header><h1>A Brief History of Vans</h1></header>
                <p>
                    Brothers <a href="#">Paul Van Doren</a> and <a href="#">Jim Van Doren</a> along with partners <a
                        href="#">Gordon Lee</a> and <a href="#">Serge Delia</a> open for business at 704 E. Broadway in
                    Anaheim, Calif. on March 16. The Van Doren Rubber Company is unique in that it manufactures shoes on
                    premises and sells them directly to the public.
                </p>
                <p>
                    On that first morning, 12 customers purchase shoes, which are made that day and ready for pick-up in
                    the afternoon.
                </p>
                <p>
                    The name House of Vans is coined Early 70s Skateboarders who like Vans' rugged make-up and sticky
                    sole are seen sporting for the first time and is showcased on the windows of the Anaheim location.
                </p>
                <p>
                    The Vans #95, now known as the Era, with a padded collar and different color combinations, is
                    designed by Tony Alva and Stacy Peralta and becomes the shoe of choice for a generation of
                    skateboarders.
                </p>
                <p>
                    Vans #36, the Old Skool, debuts with the now famous Vans Sidestripe. The Old Skool is Vans' first
                    skate shoe that incorporated leather panels for increased durability. What started as a random
                    doodle by Paul Van Doren was originally referred to as the "jazz stripe" and has become the
                    unmistakable hallmark of the Vans brand.
                </p>
                <p>
                    The Vans #98 is also introduced and with the help of skateboarders and BMX riders, Vans Classic
                    Slip-Ons become the rage in Southern California and will come to be the original Slip-On silhouette
                    that will be known as an icon for generations.
                </p>
                <p>
                    The Sk8-Hi was introduced in 1978 as "Style 38," and showcased the now-iconic Vans Sidestripe on yet
                    another innovative silhouette. As only the second model featuring the recognizable marker formerly
                    known as the "jazz stripe," the Sk8-Hi took skate functionality to the next level above the ankle,
                    where skateboarders used and abused their lower extremities the most. The Sk8-Hi not only shielded
                    bones from skateboards catapulted at them but also brought a whole new look to the park.
                </p>
                <p>
                    Vans Classic Slip-Ons gain international attention and appeal when they are worn by Sean Penn in the
                    film Fast Times at Ridgemont High.
                </p>
                <p>
                    Vans files for Chapter 11 bankruptcy protection. Although the core Vans shoes are selling well, the
                    wide range of products that Vans offers have drained company resources and Vans is not able to
                    overcome debt.
                </p>
            </div>
            <div slot-sidebar>
                <p>
                    The Vans #98 is also introduced and with the help of skateboarders and BMX riders, Vans Classic
                    Slip-Ons become the rage in Southern California and will come to be the original Slip-On silhouette
                    that will be known as an icon for generations.
                </p>
                <p>
                    The Sk8-Hi was introduced in 1978 as "Style 38," and showcased the now-iconic Vans Sidestripe on yet
                    another innovative silhouette. As only the second model featuring the recognizable marker formerly
                    known as the "jazz stripe," the Sk8-Hi took skate functionality to the next level above the ankle,
                    where skateboarders used and abused their lower extremities the most. The Sk8-Hi not only shielded
                    bones from skateboards catapulted at them but also brought a whole new look to the park.
                </p>
                <p>
                    Vans Classic Slip-Ons gain international attention and appeal when they are worn by Sean Penn in the
                    film Fast Times at Ridgemont High.
                </p>
            </div>
        </app-sidebar-resize>
    `,
})
export class AppComponent {
}
