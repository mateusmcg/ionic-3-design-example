import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "VideoPage";
  tab2Root = "MusicPage";
  tab3Root = "NewsPage";

  constructor() {

  }
}
