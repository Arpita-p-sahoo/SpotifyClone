import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Initialize myProgress here, after the DOM is fully loaded
    this.myProgress = document.getElementById('customRange1') as HTMLProgressElement | null;

    // Add timeupdate event listener once
    this.audio.addEventListener('timeupdate', () => {
      if (this.myProgress) {
        let progress: number = Math.floor((this.audio.currentTime / this.audio.duration) * 100);
        console.log(progress);
        this.myProgress.value = progress;
      }
    });

    this.myProgress?.addEventListener('change',()=>{
      this.audio.currentTime = this.myProgress?.value! * this.audio.duration/100;
    })
  }
  title = 'SpotifyClone';
  myProgress: HTMLProgressElement | null = null;
  audio = new Audio('../assets/songs/Maan Meri Jaan(PagalWorld.com.pe).mp3');
  songs = [
    { songsrc: '../assets/songs/Maan Meri Jaan(PagalWorld.com.pe).mp3', singer: 'abcd pro', duration: '4:20', play: true, img: '',songname:'maan meri jaan' },
    { songsrc: '../assets/songs/Koi Si(PagalWorld.com.pe).mp3', singer: 'abcd pro', duration: '4:20', play: true, img: '',songname:'Koi si' },
    { songsrc: '../assets/songs/Tere Hawaale(PagalWorld.com.pe).mp3', singer: 'abcd pro', duration: '4:20', play: true, img: '',songname:'tere Hawale' },

  ];


  playpause() {
    if (this.audio.paused || this.audio.currentTime <= 0) {
      this.audio.play();
      console.log(this.myProgress?.value);
      
    }
    else {
      this.audio.pause();

    }

    // this.audio.addEventListener('timeupdate', () => {
    //   let progress: number = Math.floor((this.audio.currentTime / this.audio.duration) * 100);
    //   console.log(progress);
    //   this.myProgress!.value = progress;
    // });

  }


}
