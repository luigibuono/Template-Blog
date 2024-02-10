import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef; // Riferimento al container delle card
  cards = [
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    // Aggiungi altre card...
    
  ];

  scrollCards(direction: 'left' | 'right'): void {
    const container = this.cardContainer.nativeElement;
    const scrollStep = 200; // Regola la quantità di scorrimento

    if (direction === 'left') {
      container.scrollLeft -= scrollStep; // Scorri a sinistra
    } else {
      container.scrollLeft += scrollStep; // Scorri a destra
    }
  }
}
