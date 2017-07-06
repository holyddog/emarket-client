import { PLATFORM_ID, Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

import { Config } from '../../consts/config.const';
import { ItemService } from '../../services/item.service';

declare var $: any;

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel') carousel: ElementRef;

    config: any = Config;

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

    newItems: object[] = [];

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

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private itemService: ItemService) { }

    ngOnInit() {
        this.itemService.list()
            .then(data => {
                this.newItems = data;
            });
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
