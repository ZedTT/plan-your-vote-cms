import { Component, OnInit, Input } from '@angular/core';
import { Race } from 'src/app/models/Race';
import { BallotIssue } from 'src/app/models/BallotIssue';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.less']
})
export class Step4Component implements OnInit {

  @Input() public step4title: string;
  @Input() public races: Race[];
  @Input() public issues: BallotIssue[];

  constructor() { }

  ngOnInit() {
  }

}
