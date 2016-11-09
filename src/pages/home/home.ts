import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slideOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true
  };

  items = [
    {
      name: 'one',
      slides: [{
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      }]
    },
    {
      name: 'one',
      slides: [{
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      }]
    },
    {
      name: 'one',
      slides: [{
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "For the Weekend",
        imageUrl: "assets/img/lists/wishlist-2.jpg",
        songs: 4,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },

      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      },
      {
        title: "Dream's Adventure",
        imageUrl: "assets/img/lists/wishlist-1.jpg",
        songs: 2,
        private: false
      },
      {
        title: "Family Time",
        imageUrl: "assets/img/lists/wishlist-3.jpg",
        songs: 5,
        private: true
      },
      {
        title: "My Trip",
        imageUrl: "assets/img/lists/wishlist-4.jpg",
        songs: 12,
        private: true
      }]
    },
  ]

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.items.push(this.items[i % 3]);
    }
  }

  viewDetail(item) {
    // this.navCtrl.push(VehicleDetailPage, 'one');
  }
}
