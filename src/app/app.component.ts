import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SteelCodeTeam';

  constructor(private translate_s: TranslateService) {
    this.translate_s.use(localStorage.getItem("lang_sct") || "es");
  }
}
