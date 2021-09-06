import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [InAppBrowser, AppAvailability]
})
export class HomePage {

  constructor(
    private platform: Platform,
    private inAppBrowser: InAppBrowser,
    private appAvailability: AppAvailability,
    private router: Router
  ) { }

  download(url){
    window.open(url, "_blank");
  }

  scrollToObjectives() {
    let e = document.getElementById("objectives");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  scrollToExperiences() {
    let e = document.getElementById("experiences");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  scrollToPublications() {
    let e = document.getElementById("PUBLICATIONS");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  scrollToVolunteering() {
    let e = document.getElementById("VOLUNTEERING");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }
   
  scrollToProjects() {
    let e = document.getElementById("PROJECTS");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  scrollToCertifications() {
    let e = document.getElementById("CERTIFICATIONS");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  scrollToKeywords() {
    let e = document.getElementById("KEYWORDS");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  onClick(event) {
 
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    }
    else {
      document.body.setAttribute('data-theme', 'light');
    }
  }}
