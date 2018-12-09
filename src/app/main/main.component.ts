import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  isProducts: boolean;

  private typewriter_index = 0;
  private typewriter_array = ["Сибур...", "SetContest...", "Яндекс...", "Ростелеком...", "ЭФКО..."];
  private typewriter_text: string = "Urban.Tech Challenge";
  private typewriter_display: string = "";

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 300, that);
    } else {
      setTimeout(function () {
        if (that.typewriter_array[++that.typewriter_index]) {
          that.typewriter_text = that.typewriter_array[++that.typewriter_index];
        } else {
          that.typewriter_index = 0;
        }
        setTimeout(that.typingCallback, 1000, that);
        that.typewriter_display = "";
      }, 2000)
    }

  }

  constructor() { }

  ngOnInit() {
    this.isProducts = false;
    this.typingCallback(this);
  }

}
