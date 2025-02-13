import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent implements OnInit {
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  ngOnInit(): void {
    const popupOverlay = document.getElementById('popupOverlay');

    (window as any).showPopup = () => {
      if (popupOverlay) {
        popupOverlay.style.display = 'flex';
      }
    };

    (window as any).closePopup = () => {
      if (popupOverlay) {
        popupOverlay.style.display = 'none';
      }
    };
  }
}


