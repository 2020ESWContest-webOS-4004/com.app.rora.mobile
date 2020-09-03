import { Component } from '@angular/core';
import { JarvisMemberService } from '../services/jarvis-member.service'
import { JarvisMember } from '../model/JarvisMember';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  jarvisMember: JarvisMember[] = [];

  constructor(private jarvisMemberService : JarvisMemberService) {}
  
  ngOnInit() {
//    this.members$ = this.jarvisMemberService.getData();
      this.getMembers();
  }

  getMembers() : void {
    this.jarvisMemberService.getData().subscribe((res)=> {
      this.jarvisMember = res;
      console.log(this.jarvisMember);
    });
  }
}
