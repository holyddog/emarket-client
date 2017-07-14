import { PLATFORM_ID, Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

import { Config } from '../../consts/config.const';
import { ItemService } from '../../services/item.service';
import { CategoryService } from '../../services/category.service';

declare var $: any;

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel') carousel: ElementRef;

    config: any = Config;

    categories: any[] = [];

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

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private itemService: ItemService, private categoryService: CategoryService) { }

    ngOnInit() {
        this.itemService.list()
            .then(data => {
                this.newItems = data;
                return this.categoryService.list();
            })
            .then(data => {
                this.categories = data;
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
