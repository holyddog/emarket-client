import { PLATFORM_ID, Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel') carousel: ElementRef;

    categories: object[] = [{
        name: 'Clothing'
    }, {
        name: 'Electronics'
    }, {
        name: 'Shoes'
    }, {
        name: 'Watches'
    }, {
        name: 'Jewellery'
    }, {
        name: 'Health and Beauty'
    }, {
        name: 'Kids and Babies'
    }, {
        name: 'Sports'
    }, {
        name: 'Home and Garden'
    }];

    items: object[] = [{
        id: 1,
        name: 'Facilisis dictumst',
        price: 320,
        image: 'images/i1.jpg'
    }, {
        id: 2,
        name: 'Voluptatibus habitant',
        price: 200,
        image: 'images/i2.jpg'
    }, {
        id: 3,
        name: 'Nulla accusamus',
        price: 530,
        image: 'images/i3.jpg'
    }, {
        id: 4,
        name: 'Felis inceptos',
        price: 410,
        image: 'images/i4.jpg'
    }];

    features: object[] = [{
        name: 'Consequat sapien',
        price: 600,
        image: 'images/i8.jpg'
    }, {
        name: 'Cras officia',
        price: 420,
        image: 'images/i9.jpg'
    }, {
        name: 'Maecenas eveniet',
        price: 130,
        image: 'images/i10.jpg'
    }, {
        name: 'Repellat sodales',
        price: 240,
        image: 'images/i11.jpg'
    }];

    bSeller: object[] = [{
        name: 'Veniam lorem',
        price: 780,
        image: 'images/i5.jpg'
    }, {
        name: 'Laborum autem',
        price: 330,
        image: 'images/i6.jpg'
    }, {
        name: 'Voluptatum pulvinar',
        price: 400,
        image: 'images/i7.jpg'
    }];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
			$(this.carousel.nativeElement).owlCarousel({
				items: 1,
				animateOut: 'fadeOut',
				loop: true,
				margin: 0,
				autoplay: true,
                autoHeight: false
			});   
        }
    }
}
